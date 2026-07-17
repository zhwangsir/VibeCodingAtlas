/* ============================================================
 *  Aria Studio — 暗色 cinematic web design agency landing
 *  字体:Instrument Serif (italic 标题) + Barlow (body)
 *  核心:两个全屏 section (Hero + Capabilities) + 液态玻璃 + FadingVideo + BlurText
 *  动画:Framer Motion staggered blur-in + rAF video fade
 * ============================================================ */
import { useRef, useEffect, useState, type CSSProperties } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Play,
  Clock,
  Globe,
  Image as ImageIcon,
  Film,
  Lightbulb,
} from 'lucide-react'
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'
import '@fontsource/barlow/300.css'
import '@fontsource/barlow/400.css'
import '@fontsource/barlow/500.css'
import '@fontsource/barlow/600.css'

/* ===== 视频资源(本地) ===== */
const HERO_VIDEO = '/videos/9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4'
const CAPABILITIES_VIDEO = '/videos/ccfc7ebf-182f-419f-8a62-2dc02db7dd9d.mp4'

/* ===== 导航链接 ===== */
const NAV_LINKS = ['Work', 'Studio', 'Services', 'Journal', 'Contact']

/* ===== 信任 logos ===== */
const TRUST_LOGOS = ['Aeon', 'Vela', 'Apex', 'Orbit', 'Zeno']

/* ===== Capabilities 卡片数据 ===== */
type CapabilityCard = {
  title: string
  icon: typeof ImageIcon
  tags: string[]
  body: string
}

const CAPABILITIES: CapabilityCard[] = [
  {
    title: 'Design',
    icon: ImageIcon,
    tags: ['Brand Systems', 'Art Direction', 'Visual Identity', 'Motion'],
    body: 'We shape identities and interfaces that feel unmistakably yours — typographic systems, component libraries, and art-directed pages that scale without losing soul.',
  },
  {
    title: 'Engineering',
    icon: Film,
    tags: ['React', 'Next.js', 'Headless CMS', 'Edge-Ready'],
    body: 'Production-grade front-ends built on modern stacks. Performant, accessible, and instrumented — with code your team will enjoy extending long after launch.',
  },
  {
    title: 'Growth',
    icon: Lightbulb,
    tags: ['SEO', 'Analytics', 'A/B Testing', 'Retention'],
    body: 'Launch is the starting line. We partner with your team on conversion, content, and iteration loops that turn a beautiful site into a compounding asset.',
  },
]

/* ============================================================
 *  FadingVideo — rAF 驱动的交叉淡入淡出(单 src)
 *  - loadeddata:opacity 0 → play() → fadeTo(1, 500ms)
 *  - timeupdate:剩余 ≤ 0.55s 触发 fadeTo(0, 550ms)
 *  - ended:重置 currentTime=0 + replay + fadeTo(1)
 * ============================================================ */
const FADE_IN_MS = 500
const FADE_OUT_MS = 550
const FADE_OUT_LEAD = 0.55

type FadingVideoProps = {
  src: string
  className?: string
  style?: CSSProperties
}

function FadingVideo({ src, className, style }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef = useRef<number | null>(null)
  const fadingOutRef = useRef<boolean>(false)

  const fadeTo = (target: number, duration: number) => {
    const video = videoRef.current
    if (!video) return

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current)
    }

    const startOpacity = parseFloat(video.style.opacity || '0')
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const next = startOpacity + (target - startOpacity) * progress
      video.style.opacity = String(next)

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        rafRef.current = null
      }
    }
    rafRef.current = requestAnimationFrame(tick)
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onLoadedData = () => {
      video.style.opacity = '0'
      video.play().catch(() => {})
      fadeTo(1, FADE_IN_MS)
    }

    const onTimeUpdate = () => {
      if (!fadingOutRef.current && video.duration) {
        const remaining = video.duration - video.currentTime
        if (remaining <= FADE_OUT_LEAD && remaining > 0) {
          fadingOutRef.current = true
          fadeTo(0, FADE_OUT_MS)
        }
      }
    }

    const onEnded = () => {
      video.style.opacity = '0'
      setTimeout(() => {
        video.currentTime = 0
        video.play().catch(() => {})
        fadingOutRef.current = false
        fadeTo(1, FADE_IN_MS)
      }, 100)
    }

    video.addEventListener('loadeddata', onLoadedData)
    video.addEventListener('timeupdate', onTimeUpdate)
    video.addEventListener('ended', onEnded)

    return () => {
      video.removeEventListener('loadeddata', onLoadedData)
      video.removeEventListener('timeupdate', onTimeUpdate)
      video.removeEventListener('ended', onEnded)
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      playsInline
      preload="auto"
      className={className}
      style={{ opacity: 0, ...style }}
      aria-hidden="true"
    />
  )
}

/* ============================================================
 *  BlurText — 逐词模糊入场(IntersectionObserver 触发)
 *  - 按空格拆分,每个词 motion.span(display: inline-block, marginRight 0.28em)
 *  - 关键帧:blur(10px)/opacity 0/y 50 → blur(5px)/opacity 0.5/y -5 → blur(0)/opacity 1/y 0
 *  - duration 0.7s,times [0, 0.5, 1],ease easeOut
 *  - stagger:delay = i * 100 / 1000 秒
 * ============================================================ */
type BlurTextProps = {
  text: string
  className?: string
}

function BlurText({ text, className }: BlurTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const [inView, setInView] = useState(false)
  const words = text.split(' ')

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <p
      ref={ref}
      className={className}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        rowGap: '0.1em',
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
          initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
          animate={
            inView
              ? {
                  filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
                  opacity: [0, 0.5, 1],
                  y: [50, -5, 0],
                }
              : {}
          }
          transition={{
            duration: 0.7,
            times: [0, 0.5, 1],
            ease: 'easeOut',
            delay: (i * 100) / 1000,
          }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  )
}

/* ============================================================
 *  共享入场动画 variants
 * ============================================================ */
const blurIn = (delay: number) => ({
  initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
  animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: 'easeOut' as const },
})

/* ============================================================
 *  Navbar — fixed 顶部,液态玻璃圆形 logo + 中间 pill nav + 右侧 spacer
 * ============================================================ */
function Navbar() {
  return (
    <nav className="as-navbar">
      {/* 左:圆形 logo with italic "a" */}
      <div className="as-logo-circle liquid-glass">
        <span className="as-logo-letter">a</span>
      </div>

      {/* 中:pill nav(移动端隐藏) */}
      <div className="as-nav-pill liquid-glass">
        {NAV_LINKS.map((link) => (
          <a key={link} href="#" className="as-nav-link">
            {link}
          </a>
        ))}
        <a href="#" className="as-nav-cta">
          Start a Project
          <ArrowUpRight size={14} strokeWidth={2} />
        </a>
      </div>

      {/* 右:spacer */}
      <div className="as-nav-spacer" />
    </nav>
  )
}

/* ============================================================
 *  Hero — 全屏视口,背景视频 + blur-in 内容
 * ============================================================ */
function Hero() {
  return (
    <section className="as-hero">
      {/* 背景视频 120%x120%,居中,top 对齐 */}
      <FadingVideo
        src={HERO_VIDEO}
        className="as-hero-video"
        style={{ width: '120%', height: '120%' }}
      />

      {/* 内容层 */}
      <div className="as-hero-content">
        <Navbar />

        {/* Main 居中内容 */}
        <div className="as-hero-main">
          {/* Badge */}
          <motion.div className="as-badge liquid-glass" {...blurIn(0.4)}>
            <span className="as-badge-new">New</span>
            <span className="as-badge-text">
              Booking Q3 2026 engagements — limited capacity
            </span>
          </motion.div>

          {/* Headline via BlurText */}
          <BlurText
            text="Crafted Digital Experiences Built to Outlast Trends"
            className="as-headline"
          />

          {/* Subtext */}
          <motion.p className="as-subtext" {...blurIn(0.8)}>
            We are a small studio of designers and engineers shaping
            brand-defining websites for ambitious companies. Precise
            typography, cinematic motion, and code you can be proud of.
          </motion.p>

          {/* CTA 按钮 */}
          <motion.div className="as-cta-row" {...blurIn(1.1)}>
            <a href="#" className="as-cta-primary liquid-glass-strong">
              Start a Project
              <ArrowUpRight size={16} strokeWidth={2} />
            </a>
            <a href="#" className="as-cta-secondary">
              <Play size={14} fill="currentColor" />
              Watch Showreel
            </a>
          </motion.div>

          {/* 统计卡片 */}
          <motion.div className="as-stats-row" {...blurIn(1.3)}>
            <div className="as-stat-card liquid-glass">
              <div className="as-stat-icon-wrap liquid-glass">
                <Clock size={18} strokeWidth={1.5} />
              </div>
              <div className="as-stat-number">6 Weeks</div>
              <div className="as-stat-label">
                Average End-to-End Launch Time
              </div>
            </div>

            <div className="as-stat-card liquid-glass">
              <div className="as-stat-icon-wrap liquid-glass">
                <Globe size={18} strokeWidth={1.5} />
              </div>
              <div className="as-stat-number">140+</div>
              <div className="as-stat-label">
                Brands Shipped Across Four Continents
              </div>
            </div>
          </motion.div>
        </div>

        {/* 底部 trust bar */}
        <motion.div className="as-trust-bar" {...blurIn(1.4)}>
          <div className="as-trust-pill liquid-glass">
            Trusted by founders, operators, and creative directors worldwide
          </div>
          <div className="as-trust-logos">
            {TRUST_LOGOS.map((name) => (
              <span key={name} className="as-trust-logo">
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ============================================================
 *  Capabilities — 第二屏,背景视频 + 3 卡片
 * ============================================================ */
function Capabilities() {
  return (
    <section className="as-capabilities">
      {/* 背景视频 */}
      <FadingVideo
        src={CAPABILITIES_VIDEO}
        className="as-capabilities-video"
      />

      {/* 内容层 */}
      <div className="as-capabilities-content">
        {/* Header */}
        <div className="as-cap-header">
          <p className="as-cap-label">// Capabilities</p>
          <h2 className="as-cap-heading">
            Studio craft,
            <br />
            end to end
          </h2>
        </div>

        {/* 卡片网格 */}
        <div className="as-cap-grid">
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon
            return (
              <motion.article
                key={cap.title}
                className="as-cap-card liquid-glass"
                initial={{ filter: 'blur(10px)', opacity: 0, y: 30 }}
                whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                {/* 顶部行:icon + tags */}
                <div className="as-cap-top">
                  <div className="as-cap-icon-square liquid-glass">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <div className="as-cap-tags">
                    {cap.tags.map((tag) => (
                      <span key={tag} className="as-cap-tag liquid-glass">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* spacer */}
                <div className="as-cap-spacer" />

                {/* 底部:标题 + body */}
                <h3 className="as-cap-title">{cap.title}</h3>
                <p className="as-cap-body">{cap.body}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
 *  AriaStudioLanding — 主入口
 * ============================================================ */
export default function AriaStudioLanding() {
  return (
    <main data-theme="aria-studio" className="as-root">
      {/* ===== 内联样式:液态玻璃 + 组件命名空间 CSS ===== */}
      <style>{`
        /* ===== 液态玻璃基础类(组件内联,不修改 index.css) ===== */
        [data-theme="aria-studio"] .liquid-glass,
        [data-theme="aria-studio"] .liquid-glass-strong {
          position: relative;
          overflow: hidden;
        }

        [data-theme="aria-studio"] .liquid-glass {
          background: rgba(255, 255, 255, 0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
        }

        [data-theme="aria-studio"] .liquid-glass-strong {
          background: rgba(255, 255, 255, 0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(50px);
          -webkit-backdrop-filter: blur(50px);
          box-shadow:
            4px 4px 4px rgba(0, 0, 0, 0.05),
            inset 0 1px 1px rgba(255, 255, 255, 0.15);
        }

        /* 渐变描边 border via mask-composite */
        [data-theme="aria-studio"] .liquid-glass::before,
        [data-theme="aria-studio"] .liquid-glass-strong::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.4px;
          pointer-events: none;
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }

        [data-theme="aria-studio"] .liquid-glass::before {
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.45) 0%,
            rgba(255, 255, 255, 0.15) 20%,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, 0) 60%,
            rgba(255, 255, 255, 0.15) 80%,
            rgba(255, 255, 255, 0.45) 100%
          );
        }

        [data-theme="aria-studio"] .liquid-glass-strong::before {
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.5) 0%,
            rgba(255, 255, 255, 0.2) 20%,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, 0) 60%,
            rgba(255, 255, 255, 0.2) 80%,
            rgba(255, 255, 255, 0.5) 100%
          );
        }

        /* ===== 字体变量 ===== */
        [data-theme="aria-studio"] {
          --as-font-heading: 'Instrument Serif', serif;
          --as-font-body: 'Barlow', sans-serif;
          background: #000;
          color: #fff;
          font-family: var(--as-font-body);
        }

        [data-theme="aria-studio"] .as-root {
          background: #000;
          color: #fff;
          font-family: var(--as-font-body);
          min-height: 100vh;
          width: 100%;
          overflow-x: hidden;
        }

        /* ===== Hero section ===== */
        [data-theme="aria-studio"] .as-hero {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          background: #000;
        }

        [data-theme="aria-studio"] .as-hero-video {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          object-fit: cover;
          object-position: top;
          z-index: 0;
        }

        [data-theme="aria-studio"] .as-hero-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        /* ===== Navbar ===== */
        [data-theme="aria-studio"] .as-navbar {
          position: fixed;
          top: 1rem;
          left: 0;
          right: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
        }

        @media (min-width: 1024px) {
          [data-theme="aria-studio"] .as-navbar {
            padding: 0 4rem;
          }
        }

        [data-theme="aria-studio"] .as-logo-circle {
          height: 3rem;
          width: 3rem;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        [data-theme="aria-studio"] .as-logo-letter {
          font-family: var(--as-font-heading);
          font-style: italic;
          font-size: 1.5rem;
          line-height: 1;
          color: #fff;
        }

        [data-theme="aria-studio"] .as-nav-pill {
          display: none;
          align-items: center;
          gap: 0.25rem;
          border-radius: 9999px;
          padding: 0.375rem;
        }

        @media (min-width: 768px) {
          [data-theme="aria-studio"] .as-nav-pill {
            display: flex;
          }
        }

        [data-theme="aria-studio"] .as-nav-link {
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          font-family: var(--as-font-body);
          transition: color 0.2s ease;
        }

        [data-theme="aria-studio"] .as-nav-link:hover {
          color: #fff;
        }

        [data-theme="aria-studio"] .as-nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          background: #fff;
          color: #000;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
          font-family: var(--as-font-body);
          transition: opacity 0.2s ease;
        }

        [data-theme="aria-studio"] .as-nav-cta:hover {
          opacity: 0.9;
        }

        [data-theme="aria-studio"] .as-nav-spacer {
          height: 3rem;
          width: 3rem;
        }

        /* ===== Hero main ===== */
        [data-theme="aria-studio"] .as-hero-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 6rem 1rem 0;
          text-align: center;
        }

        /* Badge */
        [data-theme="aria-studio"] .as-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.375rem 0.625rem 0.375rem 0.375rem;
          border-radius: 9999px;
          margin: 0 auto;
        }

        [data-theme="aria-studio"] .as-badge-new {
          background: #fff;
          color: #000;
          font-size: 0.625rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 0.125rem 0.5rem;
          border-radius: 9999px;
          font-family: var(--as-font-body);
        }

        [data-theme="aria-studio"] .as-badge-text {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.9);
          font-family: var(--as-font-body);
          font-weight: 400;
        }

        /* Headline */
        [data-theme="aria-studio"] .as-headline {
          margin-top: 1.5rem;
          max-width: 48rem;
          font-family: var(--as-font-heading);
          font-style: italic;
          font-size: 3.75rem;
          line-height: 0.8;
          letter-spacing: -4px;
          color: #fff;
        }

        @media (min-width: 768px) {
          [data-theme="aria-studio"] .as-headline {
            font-size: 4.5rem;
          }
        }

        @media (min-width: 1024px) {
          [data-theme="aria-studio"] .as-headline {
            font-size: 5.5rem;
          }
        }

        /* Subtext */
        [data-theme="aria-studio"] .as-subtext {
          margin-top: 1rem;
          max-width: 42rem;
          font-size: 0.875rem;
          color: #fff;
          font-family: var(--as-font-body);
          font-weight: 300;
          line-height: 1.25;
        }

        @media (min-width: 768px) {
          [data-theme="aria-studio"] .as-subtext {
            font-size: 1rem;
          }
        }

        /* CTA row */
        [data-theme="aria-studio"] .as-cta-row {
          margin-top: 1.5rem;
          display: flex;
          gap: 1.5rem;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
        }

        [data-theme="aria-studio"] .as-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1.25rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
          color: #fff;
          font-family: var(--as-font-body);
          transition: opacity 0.2s ease;
        }

        [data-theme="aria-studio"] .as-cta-primary:hover {
          opacity: 0.85;
        }

        [data-theme="aria-studio"] .as-cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 0.875rem;
          color: #fff;
          font-family: var(--as-font-body);
          font-weight: 400;
          transition: opacity 0.2s ease;
        }

        [data-theme="aria-studio"] .as-cta-secondary:hover {
          opacity: 0.7;
        }

        /* Stats row */
        [data-theme="aria-studio"] .as-stats-row {
          margin-top: 2rem;
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        [data-theme="aria-studio"] .as-stat-card {
          padding: 1.25rem;
          width: 220px;
          border-radius: 1.25rem;
        }

        [data-theme="aria-studio"] .as-stat-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 2.5rem;
          width: 2.5rem;
          border-radius: 0.75rem;
          color: #fff;
        }

        [data-theme="aria-studio"] .as-stat-number {
          font-family: var(--as-font-heading);
          font-style: italic;
          font-size: 2.25rem;
          letter-spacing: -1px;
          line-height: 1;
          margin-top: 1rem;
          color: #fff;
        }

        [data-theme="aria-studio"] .as-stat-label {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.9);
          font-family: var(--as-font-body);
          font-weight: 400;
          margin-top: 0.5rem;
          line-height: 1.3;
        }

        /* Trust bar */
        [data-theme="aria-studio"] .as-trust-bar {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding-bottom: 2rem;
        }

        [data-theme="aria-studio"] .as-trust-pill {
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.9);
          font-family: var(--as-font-body);
          font-weight: 400;
        }

        [data-theme="aria-studio"] .as-trust-logos {
          display: flex;
          gap: 3rem;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
        }

        @media (min-width: 768px) {
          [data-theme="aria-studio"] .as-trust-logos {
            gap: 4rem;
          }
        }

        [data-theme="aria-studio"] .as-trust-logo {
          font-family: var(--as-font-heading);
          font-style: italic;
          font-size: 1.5rem;
          letter-spacing: -0.025em;
          color: #fff;
        }

        @media (min-width: 768px) {
          [data-theme="aria-studio"] .as-trust-logo {
            font-size: 1.875rem;
          }
        }

        /* ===== Capabilities section ===== */
        [data-theme="aria-studio"] .as-capabilities {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          background: #000;
        }

        [data-theme="aria-studio"] .as-capabilities-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        [data-theme="aria-studio"] .as-capabilities-content {
          position: relative;
          z-index: 10;
          padding: 6rem 2rem 2.5rem;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        @media (min-width: 768px) {
          [data-theme="aria-studio"] .as-capabilities-content {
            padding: 6rem 4rem 2.5rem;
          }
        }

        @media (min-width: 1024px) {
          [data-theme="aria-studio"] .as-capabilities-content {
            padding: 6rem 5rem 2.5rem;
          }
        }

        [data-theme="aria-studio"] .as-cap-header {
          margin-bottom: auto;
        }

        [data-theme="aria-studio"] .as-cap-label {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.8);
          font-family: var(--as-font-body);
          font-weight: 400;
          margin-bottom: 1.5rem;
        }

        [data-theme="aria-studio"] .as-cap-heading {
          font-family: var(--as-font-heading);
          font-style: italic;
          font-size: 3.75rem;
          line-height: 0.9;
          letter-spacing: -3px;
          color: #fff;
          margin: 0;
        }

        @media (min-width: 768px) {
          [data-theme="aria-studio"] .as-cap-heading {
            font-size: 4.5rem;
          }
        }

        @media (min-width: 1024px) {
          [data-theme="aria-studio"] .as-cap-heading {
            font-size: 6rem;
          }
        }

        /* Cards grid */
        [data-theme="aria-studio"] .as-cap-grid {
          margin-top: 4rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          [data-theme="aria-studio"] .as-cap-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        [data-theme="aria-studio"] .as-cap-card {
          border-radius: 1.25rem;
          padding: 1.5rem;
          min-height: 360px;
          display: flex;
          flex-direction: column;
        }

        [data-theme="aria-studio"] .as-cap-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }

        [data-theme="aria-studio"] .as-cap-icon-square {
          height: 2.75rem;
          width: 2.75rem;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          flex-shrink: 0;
        }

        [data-theme="aria-studio"] .as-cap-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.375rem;
          justify-content: flex-end;
        }

        [data-theme="aria-studio"] .as-cap-tag {
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.9);
          font-family: var(--as-font-body);
          font-weight: 400;
          white-space: nowrap;
        }

        [data-theme="aria-studio"] .as-cap-spacer {
          flex: 1;
        }

        [data-theme="aria-studio"] .as-cap-title {
          font-family: var(--as-font-heading);
          font-style: italic;
          font-size: 1.875rem;
          letter-spacing: -1px;
          line-height: 1;
          color: #fff;
          margin: 0;
        }

        @media (min-width: 768px) {
          [data-theme="aria-studio"] .as-cap-title {
            font-size: 2.25rem;
          }
        }

        [data-theme="aria-studio"] .as-cap-body {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.9);
          font-family: var(--as-font-body);
          font-weight: 300;
          line-height: 1.4;
          max-width: 32ch;
          margin-top: 0.75rem;
        }

        /* ===== 响应式微调 ===== */
        @media (max-width: 640px) {
          [data-theme="aria-studio"] .as-headline {
            letter-spacing: -2px;
          }
          [data-theme="aria-studio"] .as-cap-heading {
            letter-spacing: -2px;
          }
          [data-theme="aria-studio"] .as-stat-card {
            width: 100%;
            max-width: 280px;
          }
        }

        /* ===== prefers-reduced-motion ===== */
        @media (prefers-reduced-motion: reduce) {
          [data-theme="aria-studio"] .as-hero-video,
          [data-theme="aria-studio"] .as-capabilities-video {
            opacity: 1 !important;
          }
        }
      `}</style>

      <Hero />
      <Capabilities />
    </main>
  )
}
