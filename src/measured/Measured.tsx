/* ============================================================
 *  Measured — 健康/可穿戴设备 Hero
 *  字体:Inter(全局)/ Instrument Serif(标题)/ Helvetica Neue(.font-helvetica-neue)
 *  配色:深色影像背景 + 白色文字 + 绿色 CTA 点缀
 *  核心:5 层叠加(网格/底图/文字/Overlay/聚光视频)+ 鼠标聚光揭示底层视频
 * ============================================================ */
import { useEffect, useRef, useState } from 'react'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'

const BG_IMAGE = '/images/measured-bg.webp'
const OVERLAY_IMAGE = '/images/measured-overlay.png'
const FRONT_VIDEO = '/videos/0d7498c5-29bb-47bf-a99f-2773c0a880a9.mp4'

const NAV_ITEMS = ['Device', 'Real Stories', 'Science', 'Plans', 'Reach Us']

/** Measured logo — 几何形状 */
function MeasuredLogo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 256 256"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 96 95 L 63.5 128 L 64 128 L 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 64 L 64 0 L 192 0 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z" />
    </svg>
  )
}

/** 固定径向渐变模板 — 与 PROMPT 6 段 stops 完全一致 */
const SPOTLIGHT_GRADIENT = `radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.4) 75%, rgba(255,255,255,0.12) 88%, rgba(255,255,255,0) 100%)`

/**
 * SpotlightReveal — 鼠标聚光蒙版揭示视频
 *
 * 渐变模板 + mask-position 实现：每帧仅更新 mask-position（合成层属性，
 * GPU 处理），消除旧实现每帧 canvas.toDataURL() 全屏 PNG 编码开销。
 * 视频被 clipPath 限制在视口下半部分(inset(40% 0 0 0))。
 */
function SpotlightReveal() {
  const videoLayerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const videoLayer = videoLayerRef.current
    if (!videoLayer) return

    const R = 260
    const size = R * 2
    videoLayer.style.webkitMaskImage = SPOTLIGHT_GRADIENT
    videoLayer.style.maskImage = SPOTLIGHT_GRADIENT
    videoLayer.style.webkitMaskSize = `${size}px ${size}px`
    videoLayer.style.maskSize = `${size}px ${size}px`
    videoLayer.style.webkitMaskRepeat = 'no-repeat'
    videoLayer.style.maskRepeat = 'no-repeat'

    const mouse = { x: -999, y: -999 }
    const smooth = { x: -999, y: -999 }

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    window.addEventListener('mousemove', onMouseMove)

    let rafId: number
    const loop = () => {
      smooth.x += (mouse.x - smooth.x) * 0.1
      smooth.y += (mouse.y - smooth.y) * 0.1
      const pos = `${smooth.x - R}px ${smooth.y - R}px`
      videoLayer.style.webkitMaskPosition = pos
      videoLayer.style.maskPosition = pos
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <div
      ref={videoLayerRef}
      aria-hidden="true"
      className="absolute inset-0"
      style={{
        clipPath: 'inset(40% 0 0 0)',
        WebkitClipPath: 'inset(40% 0 0 0)',
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
        src={FRONT_VIDEO}
      />
    </div>
  )
}

/** 网格背景(带视差) */
function GridBackground() {
  const gridRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const mouse = { x: 0, y: 0 }
    const smooth = { x: 0, y: 0 }

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    window.addEventListener('mousemove', onMouseMove)

    let rafId: number
    const loop = () => {
      smooth.x += (mouse.x - smooth.x) * 0.06
      smooth.y += (mouse.y - smooth.y) * 0.06
      const w = window.innerWidth
      const h = window.innerHeight
      const offsetX = (smooth.x - w / 2) / w * 16
      const offsetY = (smooth.y - h / 2) / h * 16
      grid.style.transform = `translate(${offsetX}px, ${offsetY}px)`
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <svg
      ref={gridRef}
      className="absolute inset-0 h-full w-full"
      style={{ opacity: 0.1, zIndex: 0, pointerEvents: 'none' }}
      aria-hidden="true"
    >
      <defs>
        <pattern id="measured-grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#64748b" strokeWidth="0.6" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#measured-grid)" />
    </svg>
  )
}

export default function Measured() {
  const [menuOpen, setMenuOpen] = useState(false)

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
    <div data-theme="measured" className="measured-root bg-white">
      <style>{`
        .measured-root, .measured-root * {
          font-family: 'Inter', sans-serif;
        }
        .measured-root .font-helvetica-neue {
          font-family: 'Helvetica Neue', 'Helvetica Regular', Helvetica, Arial, sans-serif;
        }
        .measured-root .liquid-glass {
          background: rgba(255, 255, 255, 0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: none;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }
        .measured-root .liquid-glass::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.4px;
          background: linear-gradient(180deg,
            rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
            rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
            rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          pointer-events: none;
        }
        @keyframes measured-item-in {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes measured-close-in {
          from { opacity: 0; transform: rotate(-90deg) scale(0.8); }
          to   { opacity: 1; transform: rotate(0) scale(1); }
        }
        .measured-menu-item {
          opacity: 0;
          animation: measured-item-in 0.5s cubic-bezier(0.77, 0, 0.18, 1) forwards;
        }
        .measured-close-btn {
          opacity: 0;
          animation: measured-close-in 0.5s cubic-bezier(0.77, 0, 0.18, 1) forwards;
          animation-delay: 0.1s;
        }
      `}</style>

      {/* ===== Navigation (fixed z-50) ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-10">
        {/* Logo */}
        <a href="#" aria-label="Measured">
          <MeasuredLogo />
        </a>

        {/* Desktop center pill nav */}
        <div className="liquid-glass hidden md:flex items-center gap-1 rounded-full px-2 py-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href="#"
              className="rounded-full px-4 py-1.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          type="button"
          className="liquid-glass hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white"
        >
          <span className="h-2 w-2 rounded-full bg-green-400" />
          Reserve Yours
        </button>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
          className="liquid-glass flex h-10 flex-col items-center justify-center gap-1.5 rounded-full px-3 md:hidden"
        >
          <span className="block h-[1.5px] w-5 bg-white" />
          <span className="block h-[1.5px] w-3.5 bg-white" />
        </button>
      </nav>

      {/* ===== Mobile fullscreen menu (z-55) ===== */}
      {menuOpen && (
        <div className="fixed inset-0 z-[55] flex flex-col items-center justify-center bg-[#0a0a0a]">
          {/* Close button */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="measured-close-btn liquid-glass absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full"
          >
            <span className="absolute h-[1.5px] w-5 bg-white" style={{ transform: 'rotate(45deg)' }} />
            <span className="absolute h-[1.5px] w-5 bg-white" style={{ transform: 'rotate(-45deg)' }} />
          </button>

          {/* Nav items */}
          <nav className="flex flex-col items-center gap-6">
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="measured-menu-item text-3xl sm:text-4xl font-medium text-white/90 transition-colors hover:text-white"
                style={{ animationDelay: `${100 + i * 60}ms` }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA at bottom */}
          <button
            type="button"
            className="measured-menu-item liquid-glass absolute bottom-10 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white"
            style={{ animationDelay: `${100 + NAV_ITEMS.length * 60}ms` }}
          >
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Reserve Yours
          </button>
        </div>
      )}

      {/* ===== Hero section (100vh) ===== */}
      <section
        className="font-helvetica-neue relative h-screen w-full overflow-hidden bg-black"
        style={{ minHeight: '100vh' }}
      >
        {/* Layer 1 — Grid Background (z-0, opacity 0.1) */}
        <GridBackground />

        {/* Layer 2 — Background Image (z-10) */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${BG_IMAGE})`, zIndex: 10 }}
        />

        {/* Layer 3 — Hero Text (z-20) */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-20 flex justify-center sm:top-28 md:top-32"
          style={{ zIndex: 20 }}
        >
          <h1
            className="text-center text-white uppercase leading-[0.9] text-[4.5rem] min-[480px]:text-[5.5rem] sm:text-[10rem] md:text-[13rem] lg:text-[16rem]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Measured
          </h1>
        </div>

        {/* Layer 4 — Overlay Image (z-25) */}
        <img
          src={OVERLAY_IMAGE}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          style={{ zIndex: 25 }}
        />

        {/* Layer 5 — Spotlight Reveal (z-30) */}
        <div className="absolute inset-0" style={{ zIndex: 30, pointerEvents: 'none' }}>
          <SpotlightReveal />
        </div>
      </section>
    </div>
  )
}
