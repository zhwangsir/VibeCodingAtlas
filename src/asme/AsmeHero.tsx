import { useCallback, useEffect, useRef, useState } from 'react'
import { Globe, ArrowRight, Instagram, Twitter } from 'lucide-react'

/* ============================================================
   ASME — 全屏循环背景视频 + 液态玻璃 UI + 暗色电影质感 Hero
   ============================================================ */

const VIDEO_URL = '/videos/bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4'

const NAV_LINKS = ['Features', 'Pricing', 'About']

/**
 * 视频自定义循环淡入淡出系统
 * - 加载/循环开始：500ms rAF 淡入
 * - 结束前 0.55s：500ms rAF 淡出（fadingOutRef 防重复）
 * - ended 后 opacity=0 → 100ms → currentTime=0 → play → 淡入
 * - 每次 fade 取消正在运行的 RAF，从当前 opacity 续起
 */
function useVideoFader(videoRef: React.RefObject<HTMLVideoElement | null>) {
  const rafRef = useRef<number | null>(null)
  const fadingOutRef = useRef(false)

  const cancelFade = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }, [])

  const fadeTo = useCallback(
    (target: number, duration: number, onDone?: () => void) => {
      const video = videoRef.current
      if (!video) return
      cancelFade()
      const startOpacity = video.style.opacity ? parseFloat(video.style.opacity) : 1
      const startTime = performance.now()

      const step = (now: number) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        const current = startOpacity + (target - startOpacity) * progress
        video.style.opacity = String(current)
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(step)
        } else {
          rafRef.current = null
          onDone?.()
        }
      }
      rafRef.current = requestAnimationFrame(step)
    },
    [videoRef, cancelFade],
  )

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onLoaded = () => {
      fadingOutRef.current = false
      video.style.opacity = '0'
      fadeTo(1, 500)
    }

    const onTimeUpdate = () => {
      if (fadingOutRef.current) return
      const remaining = video.duration - video.currentTime
      if (remaining <= 0.55) {
        fadingOutRef.current = true
        fadeTo(0, 500)
      }
    }

    const onEnded = () => {
      video.style.opacity = '0'
      fadingOutRef.current = false
      window.setTimeout(() => {
        video.currentTime = 0
        video.play().catch(() => {})
        fadeTo(1, 500)
      }, 100)
    }

    video.addEventListener('loadedmetadata', onLoaded)
    video.addEventListener('timeupdate', onTimeUpdate)
    video.addEventListener('ended', onEnded)

    return () => {
      cancelFade()
      video.removeEventListener('loadedmetadata', onLoaded)
      video.removeEventListener('timeupdate', onTimeUpdate)
      video.removeEventListener('ended', onEnded)
    }
  }, [videoRef, fadeTo, cancelFade])
}

export default function AsmeHero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [email, setEmail] = useState('')
  useVideoFader(videoRef)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 实际项目中这里会调用订阅 API
  }

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col">
      {/* 背景视频 — 全屏 object-cover，下移 17% 裁掉顶部 */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover translate-y-[17%]"
        src={VIDEO_URL}
        autoPlay
        muted
        loop={false}
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* 暗色叠加增强文字可读性 */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none z-[1]" />

      {/* 导航栏 */}
      <nav className="relative z-20 pl-6 pr-6 py-6">
        <div className="liquid-glass rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto">
          {/* 左侧：Logo + 导航链接 */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Globe size={24} className="text-white" />
              <span className="text-white font-semibold text-lg">Asme</span>
            </div>
            {/* 导航链接 — 移动端隐藏 */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-white/80 hover:text-white transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-md"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* 右侧：Sign Up + Login */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="text-white text-sm font-medium hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-md"
            >
              Sign Up
            </button>
            <button
              type="button"
              className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero 内容区 */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">
        {/* 标题 */}
        <h1
          className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight whitespace-nowrap"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Built for the curious
        </h1>

        {/* 邮箱输入 + 副标题 + 宣言按钮 */}
        <div className="max-w-xl w-full space-y-4">
          {/* 邮箱输入栏 */}
          <form
            onSubmit={handleSubmit}
            className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              aria-label="Email address"
              className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/40 text-base focus:ring-0"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="bg-white rounded-full p-3 text-black hover:bg-white/90 transition-colors active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <ArrowRight size={20} />
            </button>
          </form>

          {/* 副标题 */}
          <p className="text-white text-sm leading-relaxed px-4">
            Stay updated with the latest news and insights. Subscribe to our newsletter today and
            never miss out on exciting updates.
          </p>

          {/* 宣言按钮 */}
          <div className="flex justify-center pt-2">
            <button
              type="button"
              className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Read manifesto
            </button>
          </div>
        </div>
      </div>

      {/* 社交图标底栏 */}
      <footer className="relative z-10 flex justify-center gap-4 pb-12">
        <a
          href="#"
          aria-label="Instagram"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        >
          <Instagram size={20} />
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        >
          <Twitter size={20} />
        </a>
        <a
          href="#"
          aria-label="Globe"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        >
          <Globe size={20} />
        </a>
      </footer>
    </div>
  )
}
