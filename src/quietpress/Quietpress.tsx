/* ============================================================
 *  quietpress — 黑胶唱片厂牌 Hero(boomerang 视频背景)
 *  字体:Helvetica Regular
 *  配色:全屏视频背景 + 白色文字 + blue-700 强调色
 *  核心:BoomerangVideoBg(视频捕获帧 + ping-pong 回放)+ liquid-glass + fade-up 入场
 * ============================================================ */
import { useEffect, useRef, useState } from 'react'
import { ShoppingCart, Menu, X, BarChart3, Heart, SkipForward, SkipBack } from 'lucide-react'

const BG_VIDEO = '/videos/c311af08-e4b7-458f-81e7-79847a49b3d3.mp4'

/** quietpress logo SVG — 四分之一圆 + 中心点 */
function QuietpressLogo() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 256 256"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M 256 256 L 128 256 C 198.692 256 256 198.692 256 128 C 256 57.308 198.692 0 128 0 C 57.308 0 0 57.308 0 128 C 0 198.692 57.308 256 128 256 L 0 256 L 0 0 L 256 0 Z M 128 104 C 141.255 104 152 114.745 152 128 C 152 141.255 141.255 152 128 152 C 114.745 152 104 141.255 104 128 C 104 114.745 114.745 104 128 104 Z" />
    </svg>
  )
}

/**
 * BoomerangVideoBg — 视频帧捕获 + ping-pong 回放
 *
 * 1. 视频播放一次,通过 requestVideoFrameCallback 捕获每帧到 ImageBitmap
 * 2. 视频结束后隐藏 video,显示 canvas,以 30fps 播放捕获帧(正向→反向→...)
 */
function BoomerangVideoBg() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [capturing, setCapturing] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    const canvas = canvasRef.current
    if (!video || !canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const frames: ImageBitmap[] = []
    let rafId: number
    let boomerangRaf: number
    let lastIndex = -1
    let direction: 1 | -1 = 1
    let currentIndex = 0
    let lastFrameTime = 0
    const FRAME_INTERVAL = 1000 / 30

    const hasRVFC = 'requestVideoFrameCallback' in HTMLVideoElement.prototype

    const captureFrame = async () => {
      try {
        // 限制宽度 960px,按比例缩放
        const maxW = 960
        const scale = video.videoWidth > maxW ? maxW / video.videoWidth : 1
        const w = Math.max(1, Math.round(video.videoWidth * scale))
        const h = Math.max(1, Math.round(video.videoHeight * scale))
        const bitmap = await createImageBitmap(video, 0, 0, video.videoWidth, video.videoHeight, {
          resizeWidth: w,
          resizeHeight: h,
        })
        frames.push(bitmap)
      } catch {
        // 忽略捕获错误
      }
    }

    const onFrame = (_now: number, _metadata: unknown) => {
      captureFrame()
      if (!video.ended && !video.paused) {
        rafId = video.requestVideoFrameCallback(onFrame)
      }
    }

    const onFrameFallback = () => {
      captureFrame()
      if (!video.ended && !video.paused) {
        rafId = requestAnimationFrame(onFrameFallback)
      }
    }

    const startBoomerang = () => {
      setCapturing(false)
      video.style.display = 'none'
      if (frames.length === 0) {
        // 捕获失败回退:重新播放视频
        video.style.display = 'block'
        video.currentTime = 0
        video.play()
        return
      }
      // 设置 canvas 尺寸为最后一帧的大小
      const last = frames[0]
      canvas.width = last.width
      canvas.height = last.height

      const draw = (time: number) => {
        if (time - lastFrameTime >= FRAME_INTERVAL) {
          lastFrameTime = time
          // 绘制当前帧
          const frame = frames[currentIndex]
          if (frame) {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(frame, 0, 0)
          }
          // 推进索引(到达边界时反向)
          const next = currentIndex + direction
          if (next >= frames.length - 1) {
            currentIndex = frames.length - 1
            direction = -1
          } else if (next <= 0) {
            currentIndex = 0
            direction = 1
          } else {
            currentIndex = next
          }
          // 避免与上一帧相同
          if (currentIndex === lastIndex) {
            currentIndex = Math.max(0, Math.min(frames.length - 1, currentIndex + direction))
          }
          lastIndex = currentIndex
        }
        boomerangRaf = requestAnimationFrame(draw)
      }
      boomerangRaf = requestAnimationFrame(draw)
    }

    const onEnded = () => {
      if (rafId) cancelAnimationFrame(rafId)
      startBoomerang()
    }

    video.addEventListener('ended', onEnded)

    // 启动视频
    video.play().then(() => {
      if (hasRVFC) {
        rafId = video.requestVideoFrameCallback(onFrame)
      } else {
        rafId = requestAnimationFrame(onFrameFallback)
      }
    }).catch(() => {
      // 自动播放失败,直接显示视频
      setCapturing(false)
    })

    return () => {
      video.removeEventListener('ended', onEnded)
      if (rafId) cancelAnimationFrame(rafId)
      if (boomerangRaf) cancelAnimationFrame(boomerangRaf)
      frames.forEach((f) => f.close())
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0 origin-center overflow-hidden scale-[1.08]">
      <video
        ref={videoRef}
        src={BG_VIDEO}
        muted
        playsInline
        crossOrigin="anonymous"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ display: capturing ? 'block' : 'none' }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ display: capturing ? 'none' : 'block' }}
      />
    </div>
  )
}

export default function Quietpress() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [liked, setLiked] = useState(false)

  return (
    <div
      data-theme="quietpress"
      className="quietpress-root relative h-screen w-full overflow-hidden"
    >
      <style>{`
        @font-face {
          font-family: 'Helvetica Regular';
          src: url('/fonts/quietpress/HelveticaRegular.woff2') format('woff2'),
               url('/fonts/quietpress/HelveticaRegular.woff') format('woff'),
               url('/fonts/quietpress/HelveticaRegular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        .quietpress-root, .quietpress-root * {
          font-family: 'Helvetica Regular', Helvetica, Arial, sans-serif;
        }
        .quietpress-root .liquid-glass {
          background: rgba(255, 255, 255, 0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: none;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }
        .quietpress-root .liquid-glass::before {
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
        @keyframes qp-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: none; }
        }
        /* 使用页面专属类名,避免与共享 index.css 的全局 .animate-fade-up(opacity:0) 碰撞 */
        .quietpress-root .qp-anim-fade-up {
          animation: qp-fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) backwards;
        }
        .quietpress-root .qp-delay-1 { animation-delay: 0.1s; }
        .quietpress-root .qp-delay-2 { animation-delay: 0.25s; }
        .quietpress-root .qp-delay-3 { animation-delay: 0.4s; }
        .quietpress-root .qp-delay-4 { animation-delay: 0.55s; }
        .quietpress-root .qp-delay-5 { animation-delay: 0.75s; }
        @media (prefers-reduced-motion: reduce) {
          .quietpress-root .qp-anim-fade-up { animation: none; }
        }
      `}</style>

      {/* 背景视频 */}
      <BoomerangVideoBg />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 px-4 sm:px-6 md:px-10 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <QuietpressLogo />
            <span className="text-base tracking-tight text-white">quietpress</span>
          </div>

          {/* Nav links (desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {['Anthology', 'Talents', 'Sound diary', 'Playback salon'].map((l) => (
              <a
                key={l}
                href="#"
                className="text-sm text-white/90 transition-colors hover:text-white"
              >
                {l}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-xl bg-white p-1 pr-3 sm:pr-4 transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-700">
                <ShoppingCart size={14} strokeWidth={2} className="text-white" />
              </span>
              <span className="text-sm text-gray-900">
                <span className="hidden sm:inline">Cart </span>(0)
              </span>
            </button>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="liquid-glass flex h-9 w-9 items-center justify-center rounded-xl text-white md:hidden"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile nav dropdown */}
        {menuOpen && (
          <div className="liquid-glass mx-4 mt-3 rounded-2xl p-2 md:hidden">
            {['Anthology', 'Talents', 'Sound diary', 'Playback salon'].map((l) => (
              <a
                key={l}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-white/90 transition-colors hover:bg-white/10"
              >
                {l}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero content */}
      <div className="relative z-10 flex h-full flex-col items-start justify-center px-4 sm:px-6 pt-28 sm:pt-36 md:pt-44">
        {/* Tag badge */}
        <div
          className="liquid-glass qp-anim-fade-up qp-delay-1 mb-5 sm:mb-6 rounded-lg px-4 py-1.5 text-xs sm:text-sm text-white"
          style={{ background: 'rgba(255, 255, 255, 0.16)' }}
        >
          Press 04 . Vernal woods
        </div>

        {/* Headline */}
        <h1 className="qp-anim-fade-up qp-delay-2 max-w-3xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white">
          records cut for the
          <br />
          calm listener.
        </h1>

        {/* Subtext */}
        <p className="qp-anim-fade-up qp-delay-3 mt-5 sm:mt-6 max-w-md text-sm sm:text-base md:text-lg leading-relaxed text-white/90">
          Drone, roots, and nature-captured sound on wax LPs. Every disc cut just once, snag it or miss.
        </p>

        {/* Two buttons */}
        <div className="qp-anim-fade-up qp-delay-4 mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            className="rounded-xl bg-white px-7 py-2.5 text-sm text-gray-900 transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            Browse the shelves
          </button>
          <button
            type="button"
            className="liquid-glass rounded-xl px-7 py-2.5 text-sm text-white transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            Newest arrivals
          </button>
        </div>
      </div>

      {/* Now Playing widget */}
      <div className="qp-anim-fade-up qp-delay-5 absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-10 z-20 w-[270px] max-w-[270px] sm:w-72">
        <div className="rounded-2xl bg-white p-2.5 pr-4 shadow-lg">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-700">
              <BarChart3 size={20} strokeWidth={2.5} className="text-white" />
            </span>
            <div className="flex-1 min-w-0">
              <div className="truncate text-sm text-gray-900">Helia Marsh — Fern Light</div>
              <div className="mt-1.5 h-1 rounded-full bg-gray-200">
                <div className="h-1 w-[30%] rounded-full bg-blue-700" />
              </div>
              <div className="mt-1 flex justify-between text-[10px] text-gray-500">
                <span>0:33</span>
                <span>-1:21</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous"
            className="flex-1 rounded-2xl bg-white py-2 text-sm text-gray-900 shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <SkipBack size={14} className="mx-auto" />
          </button>
          <button
            type="button"
            aria-label="Like"
            onClick={() => setLiked((v) => !v)}
            className="h-10 w-10 rounded-full bg-white shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95"
          >
            <Heart
              size={16}
              className={`mx-auto ${liked ? 'fill-blue-700 text-blue-700' : 'text-blue-700'}`}
            />
          </button>
          <button
            type="button"
            aria-label="Next"
            className="flex-1 rounded-2xl bg-white py-2 text-sm text-gray-900 shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <SkipForward size={14} className="mx-auto" />
          </button>
        </div>
      </div>
    </div>
  )
}
