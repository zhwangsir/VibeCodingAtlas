/* ============================================================
 *  Xero — 加密数据平台 Hero(纯 CSS 实现,无 Tailwind)
 *  字体:Inter
 *  配色:#0a0a0f 黑底 + 粉红渐变弧形 + 白色文字
 *  核心:图标管道动画 + beam 光束渐变滑动 + 4 阶段状态机(p1→splash→p2→idle)
 * ============================================================ */
import { useEffect, useRef, useState } from 'react'
import { Layers, ShieldCheck, X as XIcon } from 'lucide-react'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'

export default function Xero() {
  const pipelineRef = useRef<HTMLDivElement>(null)
  const nodeStackRef = useRef<HTMLDivElement>(null)
  const nodeXRef = useRef<HTMLDivElement>(null)
  const nodeShieldRef = useRef<HTMLDivElement>(null)
  const beamGlowRef = useRef<SVGPathElement>(null)
  const beamCoreRef = useRef<SVGPathElement>(null)
  const gradientRef = useRef<SVGLinearGradientElement>(null)
  const splashRef = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const pipeline = pipelineRef.current
    const nodeStack = nodeStackRef.current
    const nodeX = nodeXRef.current
    const nodeShield = nodeShieldRef.current
    const beamGlow = beamGlowRef.current
    const beamCore = beamCoreRef.current
    const gradient = gradientRef.current
    const splash = splashRef.current
    if (!pipeline || !nodeStack || !nodeX || !nodeShield || !beamGlow || !beamCore || !gradient || !splash) return

    type State = 'p1' | 'splash' | 'p2' | 'idle'
    let state: State = 'p1'
    let lastStateChange = performance.now()
    let percentage = 0
    let rafId: number

    const recomputePath = () => {
      const pRect = pipeline.getBoundingClientRect()
      const sRect = nodeStack.getBoundingClientRect()
      const xRect = nodeX.getBoundingClientRect()
      const shRect = nodeShield.getBoundingClientRect()
      const startX = sRect.left + sRect.width / 2 - pRect.left
      const startY = sRect.top + sRect.height / 2 - pRect.top
      const midX = xRect.left + xRect.width / 2 - pRect.left
      const midY = xRect.top + xRect.height / 2 - pRect.top
      const endX = shRect.left + shRect.width / 2 - pRect.left
      const endY = shRect.top + shRect.height / 2 - pRect.top
      const d = `M ${startX},${startY} L ${midX},${midY} L ${endX},${endY}`
      beamGlow.setAttribute('d', d)
      beamCore.setAttribute('d', d)
    }

    recomputePath()
    const onResize = () => recomputePath()
    window.addEventListener('resize', onResize)

    const setState = (next: State) => {
      state = next
      lastStateChange = performance.now()
      if (next === 'splash') {
        beamGlow.style.opacity = '0'
        beamCore.style.opacity = '0'
        splash.classList.add('animate')
      } else if (next === 'p2') {
        splash.classList.remove('animate')
        beamGlow.style.opacity = '1'
        beamCore.style.opacity = '1'
      }
    }

    const loop = () => {
      const now = performance.now()
      const elapsed = now - lastStateChange
      const halfWidth = 5

      if (state === 'p1') {
        // 0 -> 0.5 over 800ms
        const t = Math.min(elapsed / 800, 1)
        percentage = t * 0.5
        const center = percentage * 100
        gradient.setAttribute('x1', `${center - halfWidth}%`)
        gradient.setAttribute('x2', `${center + halfWidth}%`)
        gradient.setAttribute('y1', '0%')
        gradient.setAttribute('y2', '0%')
        if (percentage < 0.4) nodeStack.classList.add('active')
        else nodeStack.classList.remove('active')
        if (elapsed >= 800) setState('splash')
      } else if (state === 'splash') {
        if (elapsed >= 800) setState('p2')
      } else if (state === 'p2') {
        // 0.5 -> 1.0 over 800ms
        const t = Math.min(elapsed / 800, 1)
        percentage = 0.5 + t * 0.5
        const center = percentage * 100
        gradient.setAttribute('x1', `${center - halfWidth}%`)
        gradient.setAttribute('x2', `${center + halfWidth}%`)
        gradient.setAttribute('y1', '0%')
        gradient.setAttribute('y2', '0%')
        if (percentage > 0.6) nodeShield.classList.add('active')
        if (elapsed >= 800) {
          nodeShield.classList.remove('active')
          setState('idle')
        }
      } else if (state === 'idle') {
        if (elapsed >= 1000) setState('p1')
      }

      rafId = requestAnimationFrame(loop)
    }

    rafId = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  // 锁定 body 滚动
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <div data-theme="xero" className="xero-root">
      <style>{`
        .xero-root {
          --bg: #0a0a0f;
          --surface: #111118;
          --text: #f0f0f5;
          --text-muted: #8888a8;
          --accent: #c8a0e0;
          --accent-pink: #b04090;
          --border: rgba(255, 255, 255, 0.08);
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 14px;
          box-sizing: border-box;
        }
        .xero-root * { box-sizing: border-box; }
        .xero-root a { color: inherit; text-decoration: none; }
        .xero-root ul { list-style: none; margin: 0; padding: 0; }

        /* ===== Navbar ===== */
        .xero-nav {
          width: 100%;
          max-width: 1600px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          padding: 12px 24px;
          margin-bottom: 14px;
          align-items: center;
        }
        .xero-nav .nav-logo { font-size: 1.05rem; font-weight: 700; letter-spacing: -0.01em; justify-self: start; }
        .xero-nav .nav-links {
          display: flex;
          gap: 32px;
        }
        .xero-nav .nav-links a {
          color: var(--text-muted);
          font-size: 0.85rem;
          transition: color 0.2s;
        }
        .xero-nav .nav-links a:hover { color: var(--text); }
        .xero-nav .nav-actions {
          display: flex;
          gap: 10px;
          justify-self: end;
        }
        .xero-nav .btn-login, .xero-nav .btn-signup {
          padding: 7px 18px;
          border-radius: 999px;
          font-size: 0.82rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s, opacity 0.2s;
          border: 1px solid var(--border);
        }
        .xero-nav .btn-login {
          background: rgba(255,255,255,0.06);
          color: white;
        }
        .xero-nav .btn-login:hover { background: rgba(255,255,255,0.12); }
        .xero-nav .btn-signup {
          background: white;
          color: #0a0a0f;
          font-weight: 600;
          border-color: white;
        }
        .xero-nav .btn-signup:hover { opacity: 0.88; }
        .xero-nav .menu-toggle {
          display: none;
          width: 24px;
          height: 14px;
          background: transparent;
          border: none;
          cursor: pointer;
          position: relative;
          padding: 0;
        }
        .xero-nav .menu-toggle span {
          position: absolute;
          left: 0;
          width: 100%;
          height: 2px;
          background: white;
          transition: transform 0.3s;
        }
        .xero-nav .menu-toggle span:nth-child(1) { top: 2px; }
        .xero-nav .menu-toggle span:nth-child(2) { top: 10px; }
        .xero-nav .menu-toggle.active span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
        .xero-nav .menu-toggle.active span:nth-child(2) { transform: translateY(-6px) rotate(-45deg); }

        /* ===== Hero Card ===== */
        .hero-card {
          width: 100%;
          max-width: 1600px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.07);
          overflow: hidden;
          position: relative;
          background: #0d0b12;
          padding: 80px 40px 70px;
          min-height: 640px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .hero-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 50% -70%,
              transparent 60%,
              rgba(176,48,136,0.03) 63%,
              rgba(176,48,136,0.08) 65%,
              rgba(176,48,136,0.16) 67%,
              rgba(176,48,136,0.28) 69%,
              rgba(176,48,136,0.40) 71%,
              rgba(176,48,136,0.52) 73%,
              rgba(176,48,136,0.64) 75%,
              rgba(176,48,136,0.74) 77%,
              rgba(176,48,136,0.82) 79%,
              rgba(210,70,175,0.92) 85%,
              rgba(240,110,210,0.88) 87%,
              rgba(255,205,250,0.92) 91%,
              rgba(255,240,255,0.98) 93%,
              #ffffff 95%),
            radial-gradient(circle at 50% 35%, rgba(120,40,180,0.08) 0%, transparent 50%);
          z-index: 0;
          pointer-events: none;
        }
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px);
          background-size: 40px 40px;
          -webkit-mask-image: radial-gradient(circle at 50% -70%, transparent 60%, black 78%);
          mask-image: radial-gradient(circle at 50% -70%, transparent 60%, black 78%);
          z-index: 0;
          pointer-events: none;
        }

        /* ===== Icon Pipeline ===== */
        .icon-pipeline {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 700px;
          margin-bottom: 52px;
          z-index: 1;
        }
        .beam-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
          z-index: 2;
          pointer-events: none;
        }
        .icon-node {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: #1a1a24;
          cursor: pointer;
          z-index: 3;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            6px 6px 12px rgba(0,0,0,0.4),
            -4px -4px 10px rgba(255,255,255,0.03),
            inset 1px 1px 1px rgba(255,255,255,0.05),
            inset 4px 4px 8px rgba(0,0,0,0.4);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .icon-node::after {
          content: '';
          position: absolute;
          inset: -7px;
          border-radius: 50%;
          border: 1px dotted #1a1a24;
        }
        .icon-node:hover {
          transform: translateY(-1px);
          box-shadow:
            8px 8px 16px rgba(0,0,0,0.5),
            -6px -6px 14px rgba(255,255,255,0.04),
            inset 1px 1px 1px rgba(255,255,255,0.05),
            inset 4px 4px 8px rgba(0,0,0,0.4);
        }
        .icon-node:active {
          transform: none;
          box-shadow:
            inset 6px 6px 12px rgba(0,0,0,0.5),
            inset -4px -4px 10px rgba(255,255,255,0.03);
        }
        .icon-node svg { width: 20px; height: 20px; stroke: rgba(255,255,255,0.7); stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }

        .node-light-right::before, .node-light-left::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
          z-index: 4;
        }
        .node-light-right::before {
          background: radial-gradient(circle at right, rgba(200,200,200,0.45) 0%, transparent 70%);
        }
        .node-light-left::before {
          background: radial-gradient(circle at left, rgba(200,100,255,0.5) 0%, transparent 70%);
        }
        .node-light-right.active::before, .node-light-left.active::before { opacity: 1; }

        .pipeline-line {
          width: 160px;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0.15), rgba(255,255,255,0.07));
        }
        .pipeline-line.right {
          background: linear-gradient(90deg, rgba(255,255,255,0.07), rgba(255,255,255,0.15));
        }

        .center-wrapper { position: relative; display: flex; align-items: center; justify-content: center; }
        .splash {
          position: absolute;
          width: 100px;
          height: 100px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) scale(0.4);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,77,200,0.6) 0%, transparent 70%);
          opacity: 0;
          z-index: 2;
          pointer-events: none;
        }
        .splash.animate { animation: splash-anim 0.8s ease-out forwards; }
        @keyframes splash-anim {
          0%   { transform: translate(-50%, -50%) scale(0.4); opacity: 0.8; }
          40%  { opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(1.4); opacity: 0; }
        }

        .icon-node-center {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #1e1e2c;
          z-index: 3;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            8px 8px 16px rgba(0,0,0,0.5),
            -6px -6px 14px rgba(255,255,255,0.04),
            inset 1px 1px 2px rgba(255,255,255,0.06),
            inset 6px 6px 12px rgba(0,0,0,0.5);
        }
        .icon-node-center svg { width: 28px; height: 28px; fill: white; }

        /* ===== Hero Text ===== */
        .hero-content { max-width: 620px; z-index: 1; }
        .hero-heading {
          font-size: clamp(2.4rem, 5.5vw, 4rem);
          font-weight: 300;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0 0 18px;
          color: var(--text);
        }
        .hero-heading strong {
          display: block;
          font-weight: 400;
          margin-top: 4px;
          background: linear-gradient(to right, #ffffff, #a98597);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
        .hero-sub {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.4);
          max-width: 440px;
          margin: 0 auto 36px;
          line-height: 1.5;
        }
        .xero-root .btn-cta {
          display: inline-block;
          background: white;
          color: #000;
          padding: 12px 32px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.9rem;
          transition: opacity 0.2s, transform 0.2s;
        }
        .xero-root .btn-cta:hover { opacity: 0.9; transform: translateY(-1px); }

        /* ===== Brands ===== */
        .brands {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 64px;
          padding: 32px 24px 10px;
          max-width: 1600px;
          width: 100%;
        }
        .brand-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255,255,255,0.35);
          font-size: 1.1rem;
          font-weight: 500;
          white-space: nowrap;
        }
        .brand-item svg { width: 22px; height: 22px; flex-shrink: 0; }
        .hubspot-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: currentColor;
          vertical-align: super;
          margin-left: 1px;
        }

        /* ===== Mobile Nav Overlay ===== */
        .nav-menu-overlay {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          height: 100vh;
          background: var(--bg);
          z-index: 1001;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 24px;
          transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-menu-overlay.open { right: 0; }
        .nav-menu-overlay a {
          font-size: 1.4rem;
          color: var(--text);
        }
        .nav-menu-overlay .btn-login, .nav-menu-overlay .btn-signup {
          width: 80%;
          text-align: center;
          padding: 14px 18px;
        }

        /* ===== Responsive ===== */
        @media (max-width: 860px) {
          .icon-pipeline { gap: 0; margin-bottom: 40px; }
          .pipeline-line { width: 80px; }
        }
        @media (max-width: 768px) {
          .xero-nav { display: flex; justify-content: space-between; }
          .xero-nav .nav-menu { display: contents; }
          .xero-nav .nav-links, .xero-nav .nav-actions { display: none; }
          .xero-nav .nav-menu.open .nav-links {
            display: flex;
            flex-direction: column;
            gap: 24px;
            position: fixed;
            top: 0;
            right: 0;
            width: 100%;
            height: 100vh;
            background: var(--bg);
            z-index: 1001;
            justify-content: center;
            align-items: center;
          }
          .xero-nav .menu-toggle { display: block; z-index: 1002; }
          .icon-node { width: 38px; height: 38px; }
          .icon-node svg { width: 16px; height: 16px; }
          .icon-node-center { width: 52px; height: 52px; }
          .icon-node-center svg { width: 22px; height: 22px; }
          .hero-card { padding: 60px 20px 60px; min-height: auto; }
          .brands { gap: 32px; }
        }
        @media (max-width: 480px) {
          .hero-card { border-radius: 16px; }
          .brands { gap: 24px; }
        }
      `}</style>

      {/* Navbar */}
      <nav className="xero-nav">
        <span className="nav-logo">Xero</span>
        <ul className="nav-links">
          <li><a href="#">Method</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Docs</a></li>
        </ul>
        <div className="nav-actions">
          <button type="button" className="btn-login">Login</button>
          <button type="button" className="btn-signup">Sign up</button>
        </div>
        <button
          type="button"
          className={`menu-toggle${menuOpen ? ' active' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="nav-menu-overlay open">
          <a href="#" onClick={() => setMenuOpen(false)}>Method</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Docs</a>
          <button type="button" className="btn-login">Login</button>
          <button type="button" className="btn-signup">Sign up</button>
        </div>
      )}

      {/* Hero Card */}
      <section className="hero-card">
        <div className="hero-grid" />

        <div className="icon-pipeline" ref={pipelineRef}>
          {/* Beam SVG */}
          <svg className="beam-svg" aria-hidden="true">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="SourceGraphic" operator="over" />
              </filter>
              <linearGradient id="beam-gradient" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="10%" y2="0%">
                <stop offset="0%" stopColor="#b04090" stopOpacity="0" />
                <stop offset="20%" stopColor="#b04090" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#fff" stopOpacity="1" />
                <stop offset="80%" stopColor="#c8a0e0" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#c8a0e0" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path ref={beamGlowRef} stroke="url(#beam-gradient)" strokeWidth="2" filter="url(#glow)" opacity="0.6" fill="none" />
            <path ref={beamCoreRef} stroke="url(#beam-gradient)" strokeWidth="0.8" fill="none" />
          </svg>

          {/* Left node — layers */}
          <div className="icon-node node-light-right" id="node-stack" ref={nodeStackRef}>
            <Layers style={{ width: 20, height: 20, stroke: 'rgba(255,255,255,0.7)', strokeWidth: 1.5 }} />
          </div>

          <div className="pipeline-line" />

          {/* Center node — Xero X */}
          <div className="center-wrapper">
            <div className="splash" ref={splashRef} />
            <div className="icon-node-center" id="node-x" ref={nodeXRef}>
              <XIcon style={{ width: 28, height: 28, color: '#fff' }} aria-hidden="true" />
            </div>
          </div>

          <div className="pipeline-line right" />

          {/* Right node — shield-check */}
          <div className="icon-node node-light-left" id="node-shield" ref={nodeShieldRef}>
            <ShieldCheck style={{ width: 20, height: 20, stroke: 'rgba(255,255,255,0.7)', strokeWidth: 1.5 }} />
          </div>
        </div>

        {/* Hero text */}
        <div className="hero-content">
          <h1 className="hero-heading">
            The simple way
            <strong>encryption your data</strong>
          </h1>
          <p className="hero-sub">
            Fully managed data encrypting service and annotation<br />
            platform for teams of all industries.
          </p>
          <a href="#" className="btn-cta">Get Started</a>
        </div>
      </section>

      {/* Brands */}
      <div className="brands">
        {/* Expedia */}
        <div className="brand-item">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="10" fill="currentColor" />
            <path fill="var(--bg)" d="M8 9h8v2H8zm0 4h6v2H8z" />
          </svg>
          <span>Expedia</span>
        </div>
        {/* asana */}
        <div className="brand-item">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="7" r="4" fill="currentColor" />
            <circle cx="5" cy="16" r="3.5" fill="currentColor" />
            <circle cx="19" cy="16" r="3.5" fill="currentColor" />
          </svg>
          <span>asana</span>
        </div>
        {/* zenefits */}
        <div className="brand-item">
          <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <polyline points="4,8 20,8" />
            <polyline points="8,12 16,12" />
            <polyline points="4,16 20,16" />
          </svg>
          <span>zenefits</span>
        </div>
        {/* HubSpot */}
        <div className="brand-item">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="15.5" cy="8.5" r="2.5" fill="currentColor" />
            <circle cx="8.5" cy="8.5" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10.5 8.5 L13 8.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="8.5" cy="8.5" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8.5 10.5 L8.5 17" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="8.5" cy="17.5" r="1.8" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span>HubSp<span className="hubspot-dot" />t</span>
        </div>
        {/* loom */}
        <div className="brand-item">
          <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="9" />
            <line x1="3" y1="3" x2="21" y2="21" />
            <line x1="21" y1="3" x2="3" y2="21" />
            <line x1="12" y1="3" x2="12" y2="21" />
            <line x1="3" y1="12" x2="21" y2="12" />
          </svg>
          <span>loom</span>
        </div>
      </div>
    </div>
  )
}
