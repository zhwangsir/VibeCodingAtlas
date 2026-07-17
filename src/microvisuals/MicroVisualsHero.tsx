/* ============================================================
 *  MicroVisuals — AI 图像生成 Hero(boomerang 视频 + parallax)
 *  字体: Instrument Serif (italic) + Barlow (@fontsource) + Dirtyline (@font-face)
 *  核心: 视频帧捕获 → canvas boomerang 回放 + gsap 鼠标视差 + 液态玻璃
 * ============================================================ */
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import '@fontsource/barlow/300.css'
import '@fontsource/barlow/400.css'
import '@fontsource/barlow/500.css'
import '@fontsource/barlow/600.css'
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'

/* ===== 视频源 ===== */
const VIDEO_SRC =
  '/videos/a9e5ad52-b6ee-4e79-b393-d936f179cfd7.mp4'

/* ===== 导航链接 ===== */
const NAV_LINKS = ['Gallery', 'Styles', 'API', 'Pricing', 'Blog']

/* ============================================================
 *  LogoMark — 3 个白色方块的内联 SVG (44x26, viewBox 0 0 44 26)
 * ============================================================ */
function LogoMark() {
  return (
    <svg
      width="44"
      height="26"
      viewBox="0 0 44 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="0" y="3" width="14" height="20" rx="3" fill="white" />
      <rect x="16" y="3" width="12" height="20" rx="3" fill="white" />
      <rect x="30" y="3" width="14" height="20" rx="3" fill="white" />
    </svg>
  )
}

/* ============================================================
 *  MicroVisualsHero — 主入口
 * ============================================================ */
export default function MicroVisualsHero() {
  const [mounted, setMounted] = useState(false)
  const [framesReady, setFramesReady] = useState(false)

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const videoBgRef = useRef<HTMLDivElement | null>(null)
  const displayCanvasRef = useRef<HTMLCanvasElement | null>(null)
  const framesRef = useRef<HTMLCanvasElement[]>([])

  /* ===== Effect 1: 帧捕获(boomerang setup) ===== */
  useEffect(() => {
    setMounted(true)
    const video = videoRef.current
    if (!video) return

    let capturing = true
    let lastTime = -1
    const MAX_WIDTH = 960
    const frames: HTMLCanvasElement[] = []

    const captureFrame = () => {
      if (!capturing) return
      if (video.readyState < 2) return
      if (video.currentTime === lastTime) return
      lastTime = video.currentTime

      const vw = video.videoWidth
      const vh = video.videoHeight
      if (!vw || !vh) return
      const scale = Math.min(1, MAX_WIDTH / vw)
      const w = Math.round(vw * scale)
      const h = Math.round(vh * scale)

      const canvas = document.createElement('canvas')
      canvas.width = w
      canvas.height = h
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.drawImage(video, 0, 0, w, h)
      }
      frames.push(canvas)
    }

    const onLoadedMetadata = () => {
      video.play().catch(() => {})
      // 启动捕获循环
      // 优先使用 requestVideoFrameCallback(精确同步视频帧)
      const rvfc = (video as HTMLVideoElement & {
        requestVideoFrameCallback?: (cb: (now: number, meta: unknown) => void) => number
      }).requestVideoFrameCallback
      if (typeof rvfc === 'function') {
        let rafId: number
        const loop = (_now: number, _meta: unknown) => {
          captureFrame()
          if (capturing) {
            rafId = rvfc.call(video, loop)
          }
        }
        rafId = rvfc.call(video, loop)
        // cleanup tracker
        ;(video as any).__cancelRvfc = () => {
          if ((video as any).cancelVideoFrameCallback) {
            ;(video as any).cancelVideoFrameCallback(rafId)
          }
        }
      } else {
        // 回退到 requestAnimationFrame
        let rafId: number
        const loop = () => {
          captureFrame()
          if (capturing) {
            rafId = requestAnimationFrame(loop)
          }
        }
        rafId = requestAnimationFrame(loop)
        ;(video as any).__cancelRvfc = () => cancelAnimationFrame(rafId)
      }
    }

    const onEnded = () => {
      capturing = false
      framesRef.current = frames
      setFramesReady(true)
      if ((video as any).__cancelRvfc) {
        ;(video as any).__cancelRvfc()
      }
    }

    video.addEventListener('loadedmetadata', onLoadedMetadata)
    video.addEventListener('ended', onEnded)

    // 若已加载,立即启动
    if (video.readyState >= 1) {
      onLoadedMetadata()
    }

    return () => {
      capturing = false
      video.removeEventListener('loadedmetadata', onLoadedMetadata)
      video.removeEventListener('ended', onEnded)
      if ((video as any).__cancelRvfc) {
        ;(video as any).__cancelRvfc()
      }
    }
  }, [])

  /* ===== Effect 2: boomerang 回放 ===== */
  useEffect(() => {
    if (!framesReady) return
    const canvas = displayCanvasRef.current
    const frames = framesRef.current
    if (!canvas || frames.length === 0) return

    const first = frames[0]
    canvas.width = first.width
    canvas.height = first.height
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let index = 0
    let direction = 1
    let last = performance.now()
    const interval = 1000 / 30
    let rafId: number

    const render = (now: number) => {
      if (now - last >= interval) {
        ctx.drawImage(frames[index], 0, 0)
        index += direction
        if (index >= frames.length - 1) {
          index = frames.length - 1
          direction = -1
        } else if (index <= 0) {
          index = 0
          direction = 1
        }
        last = now
      }
      rafId = requestAnimationFrame(render)
    }
    rafId = requestAnimationFrame(render)

    return () => cancelAnimationFrame(rafId)
  }, [framesReady])

  /* ===== Effect 3: gsap 鼠标视差 ===== */
  useEffect(() => {
    const strength = 20
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      targetX = ((e.clientX - cx) / cx) * strength
      targetY = ((e.clientY - cy) / cy) * strength
    }

    const tick = () => {
      currentX += (targetX - currentX) * 0.06
      currentY += (targetY - currentY) * 0.06
      if (videoBgRef.current) {
        gsap.set(videoBgRef.current, { x: currentX, y: currentY })
      }
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMouseMove)
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      data-theme="microvisuals"
      className="mv-root min-h-screen bg-black text-white overflow-x-hidden"
    >
      {/* ===== 1. 视频背景层(带 boomerang canvas) ===== */}
      <div
        ref={videoBgRef}
        className="fixed top-0 left-0 w-full h-full z-0 scale-[1.08] origin-center"
      >
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{ display: framesReady ? 'none' : 'block' }}
        />
        <canvas
          ref={displayCanvasRef}
          className="w-full h-full object-cover"
          style={{ display: framesReady ? 'block' : 'none' }}
        />
      </div>

      {/* ===== 2. Hero 标题(固定) ===== */}
      <div
        className={`fixed left-0 right-0 z-20 w-full px-4 transition-all duration-1000 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={{ top: '126px' }}
      >
        <h1 className="mv-hero-title select-none">MicroVisuals</h1>
      </div>

      {/* ===== 3. 顶部导航胶囊 ===== */}
      <nav className="mv-nav fixed top-5 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap">
        <div className="mv-glass mv-nav-pill flex items-center gap-6 px-4 py-2.5">
          <LogoMark />
          <div className="flex items-center gap-5">
            {NAV_LINKS.map((link) => (
              <a key={link} href="#" className="mv-nav-link">
                {link}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 ml-4">
            <a href="#" className="mv-nav-link">Sign in</a>
            <a href="#" className="mv-glass-strong mv-cta-trial">
              Try it free
            </a>
          </div>
        </div>
      </nav>

      {/* ===== 4. 底部行 ===== */}
      <div
        className={`fixed bottom-12 left-0 right-0 px-10 flex items-end justify-between z-20 transition-all duration-1000 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={{ transitionDelay: '300ms' }}
      >
        {/* 左侧描述 */}
        <p className="mv-bottom-text max-w-[220px]">
          Forma's AI understands context, composition, and style like a creative director would.
        </p>

        {/* 中间 CTA */}
        <div className="mv-bottom-center absolute left-1/2 -translate-x-1/2 bottom-0 flex items-center gap-3">
          <button type="button" className="mv-cta-primary group">
            <span className="relative z-10">Start generating</span>
            <span className="mv-cta-overlay" />
          </button>
          <button type="button" className="mv-glass mv-cta-secondary group">
            See templates
          </button>
        </div>

        {/* 右侧描述 */}
        <p className="mv-bottom-text max-w-[220px] text-right">
          Describe what you see in your head — get images that actually match.
        </p>
      </div>

      {/* ===== 内联样式 ===== */}
      <style>{`
        @font-face {
          font-family: 'Dirtyline';
          src: url('/fonts/wanderful/Dirtyline36DaysofType.woff') format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        .mv-root {
          font-family: 'Barlow', sans-serif;
        }

        /* 液态玻璃(轻) */
        .mv-glass {
          background: rgba(255,255,255,0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: none;
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
          position: relative;
          overflow: hidden;
        }
        .mv-glass::before {
          content: "";
          position: absolute; inset: 0;
          border-radius: inherit;
          padding: 1.4px;
          background: linear-gradient(180deg,
            rgba(255,255,255,0.45) 0%,
            rgba(255,255,255,0.15) 20%,
            rgba(255,255,255,0)    40%,
            rgba(255,255,255,0)    60%,
            rgba(255,255,255,0.15) 80%,
            rgba(255,255,255,0.45) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        /* 液态玻璃(强) */
        .mv-glass-strong {
          background: rgba(255,255,255,0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(50px);
          -webkit-backdrop-filter: blur(50px);
          border: none;
          box-shadow: 4px 4px 4px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.15);
          position: relative;
          overflow: hidden;
        }
        .mv-glass-strong::before {
          content: "";
          position: absolute; inset: 0;
          border-radius: inherit;
          padding: 1.4px;
          background: linear-gradient(180deg,
            rgba(255,255,255,0.5) 0%,
            rgba(255,255,255,0.2) 20%,
            rgba(255,255,255,0)   40%,
            rgba(255,255,255,0)   60%,
            rgba(255,255,255,0.2) 80%,
            rgba(255,255,255,0.5) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        /* Hero 标题 */
        .mv-hero-title {
          font-family: 'Instrument Serif', serif;
          font-style: italic;
          font-size: clamp(96px, 18vw, 280px);
          line-height: 0.92;
          letter-spacing: -0.02em;
          color: white;
          text-align: center;
        }

        /* 导航胶囊 */
        .mv-nav-pill {
          border-radius: 9999px;
        }
        .mv-nav-link {
          font-family: 'Barlow', sans-serif;
          font-weight: 300;
          font-size: 14px;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .mv-nav-link:hover { color: #fff; }

        .mv-cta-trial {
          font-family: 'Barlow', sans-serif;
          font-weight: 500;
          font-size: 14px;
          color: #fff;
          padding: 6px 16px;
          border-radius: 9999px;
          text-decoration: none;
          display: inline-block;
          transition: all 0.2s ease;
        }
        .mv-cta-trial:hover {
          transform: scale(1.04);
          box-shadow: 0 0 16px 2px rgba(255,255,255,0.12);
        }
        .mv-cta-trial:active { transform: scale(0.97); }

        /* 底部文本 */
        .mv-bottom-text {
          font-family: 'Barlow', sans-serif;
          font-weight: 300;
          font-size: 14px;
          color: rgba(255,255,255,0.75);
          line-height: 1.5;
        }

        /* 中间 CTA */
        .mv-cta-primary {
          position: relative;
          background: #fff;
          color: #000;
          font-family: 'Barlow', sans-serif;
          font-weight: 500;
          font-size: 14px;
          padding: 12px 24px;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.2s ease;
          box-shadow: 0 0 0 0 rgba(255,255,255,0);
        }
        .mv-cta-primary:hover {
          transform: scale(1.03);
          box-shadow: 0 0 24px 4px rgba(255,255,255,0.25);
        }
        .mv-cta-primary:active { transform: scale(0.97); }
        .mv-cta-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, #fff, rgba(255,255,255,0.85));
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .mv-cta-primary:hover .mv-cta-overlay { opacity: 1; }

        .mv-cta-secondary {
          font-family: 'Barlow', sans-serif;
          font-weight: 500;
          font-size: 14px;
          color: #fff;
          padding: 12px 24px;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .mv-cta-secondary:hover {
          transform: scale(1.03);
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.2), 0 0 20px 2px rgba(255,255,255,0.07);
        }
        .mv-cta-secondary:active { transform: scale(0.97); }

        @media (max-width: 768px) {
          .mv-nav-pill { gap: 12px !important; padding: 8px 12px !important; }
          .mv-nav-pill > div:first-of-type { display: none; }
          .mv-bottom-text { display: none; }
        }
      `}</style>
    </div>
  )
}
