/* ============================================================
 *  LinkFlow — 信号与行动连接平台 Hero
 *  基于 20.md:Boomerang 视频背景 + 深绿色调 + 桌面胶囊导航 + 移动抽屉
 *  字体:Neue Haas Grotesk(本地不可用 → 用 'Helvetica Now Text' / Inter 替代)
 *  Tech:React + TS + Tailwind + lucide-react (纯 CSS 动画,无 Framer Motion)
 * ============================================================ */
import { useState, useEffect, useRef } from 'react'
import { LogIn, UserPlus, Play, Sparkles, Menu, X } from 'lucide-react'

/* ===== 背景视频(本地,原 CloudFront 已下载) ===== */
const BG_VIDEO =
  '/videos/d136af49-e243-493a-be14-6ff3f24e09e6.mp4'

/* ===== 字体栈(Neue Haas Grotesk 为商业字体,以开源 Inter 替代) ===== */
const FONT_STACK =
  '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'

/* ===== 导航链接 ===== */
const NAV_LINKS = [
  { href: '#mission', label: 'Purpose' },
  { href: '#how', label: 'The Process' },
  { href: '#pricing', label: 'Tariffs' },
]

/* ============================================================
 *  BoomerangVideoBg — 捕获视频帧到 canvas,前后无缝循环播放 (30fps)
 * ============================================================ */
type VFCVideo = HTMLVideoElement & {
  requestVideoFrameCallback?: (cb: () => number) => number
}

function BoomerangVideoBg({
  src,
  className,
}: {
  src: string
  className?: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const displayCanvasRef = useRef<HTMLCanvasElement>(null)
  const [framesReady, setFramesReady] = useState(false)
  const framesRef = useRef<HTMLCanvasElement[]>([])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const frames: HTMLCanvasElement[] = []
    let capturing = true
    let lastTime = -1
    const MAX_WIDTH = 960

    const captureFrame = () => {
      if (!capturing || video.readyState < 2) return
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
      if (!ctx) return
      ctx.drawImage(video, 0, 0, w, h)
      frames.push(canvas)
    }

    const vfcVideo = video as VFCVideo
    const hasVFC = typeof vfcVideo.requestVideoFrameCallback === 'function'

    let rafId = 0
    const rafLoop = () => {
      captureFrame()
      if (capturing) rafId = requestAnimationFrame(rafLoop)
    }

    const vfcLoop = () => {
      captureFrame()
      if (capturing && vfcVideo.requestVideoFrameCallback) {
        vfcVideo.requestVideoFrameCallback(vfcLoop)
      }
    }

    const onEnded = () => {
      capturing = false
      if (frames.length > 0) {
        framesRef.current = frames
        setFramesReady(true)
      }
    }

    const onLoaded = () => {
      video.play().catch(() => {})
      if (hasVFC) {
        vfcVideo.requestVideoFrameCallback!(vfcLoop)
      } else {
        rafId = requestAnimationFrame(rafLoop)
      }
    }

    video.addEventListener('loadedmetadata', onLoaded)
    video.addEventListener('ended', onEnded)
    if (video.readyState >= 1) onLoaded()

    return () => {
      capturing = false
      cancelAnimationFrame(rafId)
      video.removeEventListener('loadedmetadata', onLoaded)
      video.removeEventListener('ended', onEnded)
    }
  }, [src])

  useEffect(() => {
    if (!framesReady) return
    const canvas = displayCanvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const frames = framesRef.current
    if (frames.length === 0) return

    const first = frames[0]
    canvas.width = first.width
    canvas.height = first.height

    let index = 0
    let direction = 1
    let last = performance.now()
    const interval = 1000 / 30
    let rafId = 0

    const render = (now: number) => {
      if (now - last >= interval) {
        last = now
        ctx.drawImage(frames[index], 0, 0)
        index += direction
        if (index >= frames.length - 1) {
          index = frames.length - 1
          direction = -1
        } else if (index <= 0) {
          index = 0
          direction = 1
        }
      }
      rafId = requestAnimationFrame(render)
    }
    rafId = requestAnimationFrame(render)
    return () => cancelAnimationFrame(rafId)
  }, [framesReady])

  return (
    <div className={className ?? 'absolute inset-0 w-full h-full'}>
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        style={{ display: framesReady ? 'none' : 'block' }}
        muted
        playsInline
        preload="auto"
        crossOrigin="anonymous"
      />
      <canvas
        ref={displayCanvasRef}
        className="w-full h-full object-cover"
        style={{ display: framesReady ? 'block' : 'none' }}
      />
    </div>
  )
}

/* ============================================================
 *  LinkFlow — 主入口
 * ============================================================ */
export default function LinkFlow() {
  const [menuOpen, setMenuOpen] = useState(false)

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
    <section
      data-theme="linkflow"
      className="relative w-full min-h-screen sm:h-screen overflow-hidden"
      style={{ fontFamily: FONT_STACK }}
    >
      {/* ===== Boomerang 背景视频 ===== */}
      <BoomerangVideoBg src={BG_VIDEO} className="absolute inset-0 w-full h-full" />

      {/* ===== 导航栏 ===== */}
      <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 sm:py-6">
        {/* Logo */}
        <div className="flex items-center gap-2 text-[#2d3a2a]">
          <span className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight">
            LinkFlow<sup className="text-[10px] sm:text-xs font-medium">TM</sup>
          </span>
        </div>

        {/* 桌面胶囊导航 */}
        <div className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md rounded-full pl-6 pr-1 py-1 shadow-sm border border-white/60">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm px-3 py-2 transition-colors ${
                i === 0
                  ? 'font-semibold text-[#1f2a1d]'
                  : 'font-medium text-[#4b5b47] hover:text-[#1f2a1d]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="ml-2 bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
          >
            Try it Live
          </button>
        </div>

        {/* 右侧动作区 */}
        <div className="flex items-center gap-3 sm:gap-6 text-[#2d3a2a]">
          <a
            href="#signup"
            className="hidden sm:flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
          >
            <UserPlus className="w-4 h-4" />
            Sign Me Up!
          </a>
          <a
            href="#login"
            className="hidden sm:flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
          >
            <LogIn className="w-4 h-4" />
            Enter
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden relative flex items-center justify-center w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-white/60 text-[#1f2a1d] transition-all duration-300 hover:bg-white/90"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <Menu
              className={`w-5 h-5 absolute transition-all duration-300 ${
                menuOpen
                  ? 'opacity-0 rotate-90 scale-50'
                  : 'opacity-100 rotate-0 scale-100'
              }`}
            />
            <X
              className={`w-5 h-5 absolute transition-all duration-300 ${
                menuOpen
                  ? 'opacity-100 rotate-0 scale-100'
                  : 'opacity-0 -rotate-90 scale-50'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* ===== 移动菜单遮罩 ===== */}
      <div
        className={`lg:hidden fixed inset-0 z-20 transition-opacity duration-300 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-[#1f2a1d]/40 backdrop-blur-sm" />
      </div>

      {/* ===== 移动菜单抽屉 ===== */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-20 w-[85%] max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-8">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-[#1f2a1d] py-4 border-b border-[#1f2a1d]/10 transition-all duration-500 ${
                  menuOpen
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-8 opacity-0'
                }`}
                style={{
                  transitionDelay: menuOpen ? `${150 + i * 70}ms` : '0ms',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div
            className={`mt-8 flex flex-col gap-4 transition-all duration-500 ${
              menuOpen
                ? 'translate-x-0 opacity-100'
                : 'translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: menuOpen ? '400ms' : '0ms' }}
          >
            <a
              href="#signup"
              className="flex items-center gap-2 text-sm font-medium text-[#2d3a2a] sm:hidden"
            >
              <UserPlus className="w-4 h-4" />
              Sign Me Up!
            </a>
            <a
              href="#login"
              className="flex items-center gap-2 text-sm font-medium text-[#2d3a2a] sm:hidden"
            >
              <LogIn className="w-4 h-4" />
              Enter
            </a>
            <button
              type="button"
              className="mt-2 bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors"
            >
              Try it Live
            </button>
          </div>
        </div>
      </div>

      {/* ===== Hero 文案 ===== */}
      <div className="relative z-10 flex flex-col items-center text-center pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6">
        <h1
          className="font-normal leading-[0.95] text-[#336443] text-[2rem] sm:text-4xl md:text-5xl lg:text-[4.75rem] xl:text-[5.25rem] max-w-5xl"
          style={{
            fontFamily: FONT_STACK,
            letterSpacing: '-0.035em',
          }}
        >
          Close the rift{' '}
          <span className="text-[#85AB8B]">
            linking
            <br className="hidden sm:block" /> signals and action
          </span>
        </h1>
        <p className="mt-6 sm:mt-8 text-[#4b5b47] text-sm sm:text-base md:text-lg leading-relaxed max-w-md px-2">
          Shape scattered signals into meaningful outcomes via AI-driven
          workflows.
        </p>
      </div>

      {/* ===== 左下 CTA 区块 ===== */}
      <div className="absolute left-4 right-4 sm:right-auto sm:left-6 md:left-10 bottom-6 sm:bottom-8 md:bottom-10 z-10 max-w-sm">
        <div className="flex items-center gap-2 text-[#3d5638] sm:text-white/95 mb-3">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-semibold sm:font-medium">
            FluxEngine<sup className="text-[10px]">TM</sup>
          </span>
        </div>
        <p className="text-[#3d5638]/90 sm:text-white/85 text-xs leading-relaxed mb-6 max-w-xs font-medium sm:font-normal">
          LinkFlow smoothly unites your company systems, streamlining data paths
          between services without having to write custom scripts.
        </p>
        <div className="flex items-center gap-4 flex-wrap">
          <button
            type="button"
            className="bg-[#3d5638] sm:bg-white hover:bg-[#2d4228] sm:hover:bg-white/90 text-white sm:text-[#1f2a1d] text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-colors shadow-sm"
          >
            Try it Live
          </button>
          <button
            type="button"
            className="text-[#3d5638] sm:text-white text-sm font-semibold sm:font-medium hover:opacity-80 transition-opacity"
          >
            Know More.
          </button>
        </div>
      </div>

      {/* ===== 右下视频链接 ===== */}
      <div className="hidden sm:flex absolute right-6 md:right-10 bottom-8 md:bottom-10 z-10 items-center gap-2 text-white/90 text-sm">
        <button
          type="button"
          className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
        >
          <Play className="w-3 h-3 fill-white text-white ml-0.5" />
        </button>
        <span className="font-medium">How we build?</span>
        <span className="text-white/60">1:35</span>
      </div>
    </section>
  )
}
