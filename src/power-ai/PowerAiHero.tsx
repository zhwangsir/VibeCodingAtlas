/* ============================================================
 *  Power AI — 暗色 Hero(循环视频背景 + 液态玻璃 + Logo Marquee)
 *  字体:Geist Sans(正文)+ General Sans(标题)
 *  核心:JS 控制视频淡入淡出循环 + 模糊覆盖形状 + 无缝 Logo 跑马灯
 * ============================================================ */
import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

/* ===== 背景视频地址 ===== */
const BG_VIDEO =
  '/videos/c44942da-53c6-4804-b734-f9e07fc22e08.mp4'

/* ===== 导航链接 ===== */
const NAV_ITEMS = [
  { label: 'Features', hasDropdown: true },
  { label: 'Solutions', hasDropdown: false },
  { label: 'Plans', hasDropdown: false },
  { label: 'Learning', hasDropdown: true },
]

/* ===== Logo Marquee 数据 ===== */
const LOGOS = ['Vortex', 'Nimbus', 'Prysma', 'Cirrus', 'Kynder', 'Halcyn']

/* ============================================================
 *  useVideoFadeLoop — JS 控制视频淡入淡出循环
 *  0.5s 淡入开始,0.5s 淡出结束,on ended 重置 opacity 0,等 100ms 重播
 * ============================================================ */
function useVideoFadeLoop() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const replayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const FADE_DURATION = 500 // 0.5s

    // 淡入淡出动画循环(requestAnimationFrame)
    const animate = () => {
      const duration = video.duration
      if (!duration || !isFinite(duration)) {
        rafRef.current = requestAnimationFrame(animate)
        return
      }

      const current = video.currentTime
      const remaining = duration - current

      // 开始 0.5s:淡入
      if (current < FADE_DURATION / 1000) {
        const progress = current / (FADE_DURATION / 1000)
        video.style.opacity = String(progress)
      }
      // 结束前 0.5s:淡出
      else if (remaining < FADE_DURATION / 1000) {
        const progress = remaining / (FADE_DURATION / 1000)
        video.style.opacity = String(Math.max(0, progress))
      }
      // 中间:完全不透明
      else {
        video.style.opacity = '1'
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    const handleLoaded = () => {
      rafRef.current = requestAnimationFrame(animate)
    }

    const handleEnded = () => {
      // 重置 opacity 为 0,等 100ms 后重播
      video.style.opacity = '0'
      replayTimerRef.current = setTimeout(() => {
        video.currentTime = 0
        video.play().catch(() => {})
      }, 100)
    }

    video.addEventListener('loadedmetadata', handleLoaded)
    video.addEventListener('ended', handleEnded)

    // 如果 metadata 已加载,立即启动
    if (video.readyState >= 1) {
      handleLoaded()
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoaded)
      video.removeEventListener('ended', handleEnded)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (replayTimerRef.current) clearTimeout(replayTimerRef.current)
    }
  }, [])

  return videoRef
}

/* ============================================================
 *  Navbar — 导航栏
 * ============================================================ */
function Navbar() {
  return (
    <nav className="pa-navbar">
      {/* 左:Logo */}
      <div className="pa-logo">
        {/* logo.png 不存在,使用文字 logo 作为占位 */}
        <span className="pa-logo-text">Power AI</span>
      </div>

      {/* 中:导航链接 */}
      <div className="pa-nav-links">
        {NAV_ITEMS.map((item) => (
          <button key={item.label} type="button" className="pa-nav-link">
            {item.label}
            {item.hasDropdown && <ChevronDown size={14} className="pa-nav-chevron" />}
          </button>
        ))}
      </div>

      {/* 右:Sign Up 按钮 */}
      <button type="button" className="pa-signup-btn">
        Sign Up
      </button>
    </nav>
  )
}

/* ============================================================
 *  LogoMarquee — 无缝滚动 Logo 跑马灯
 * ============================================================ */
function LogoMarquee() {
  // 复制 logo 数组实现无缝循环
  const doubled = [...LOGOS, ...LOGOS]

  return (
    <div className="pa-marquee-wrapper">
      {/* 左:静态文字 */}
      <div className="pa-marquee-text">
        Relied on by brands
        <br />
        across the globe
      </div>

      {/* 右:无限滚动 marquee */}
      <div className="pa-marquee-track">
        <div className="pa-marquee-content">
          {doubled.map((name, i) => (
            <div key={i} className="pa-marquee-logo">
              <span className="liquid-glass pa-marquee-icon">
                {name.charAt(0)}
              </span>
              <span className="pa-marquee-name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ============================================================
 *  PowerAiHero — 主入口
 * ============================================================ */
export default function PowerAiHero() {
  const videoRef = useVideoFadeLoop()

  return (
    <div data-theme="power-ai" className="pa-root" style={{ height: '100vh' }}>
      {/* 移动端 marquee 容器为 column 方向,flex:1 只作用于纵向,横向会按内容
          1744px 撑破视口;补 width:100%+min-width:0 让 overflow:hidden 正确裁剪。
          仅修布局机制,PROMPT 的 20s 无缝循环/gap-16/liquid-glass 参数不变 */}
      <style>{`
        @media (max-width: 767px) {
          [data-theme='power-ai'] .pa-marquee-track {
            width: 100%;
            min-width: 0;
          }
        }
      `}</style>

      {/* ===== 视频背景(absolute inset-0, opacity 0 起始) ===== */}
      <div className="pa-video-wrapper">
        <video
          ref={videoRef}
          src={BG_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          className="pa-bg-video"
          style={{ opacity: 0 }}
        />
      </div>

      {/* ===== 模糊覆盖形状(居中) ===== */}
      {/* PROMPT 明确规定 "No gradient overlays on the video",故移除原 pa-overlay 渐变遮罩 */}
      <div className="pa-blur-shape" />

      {/* ===== 主内容(z-10) ===== */}
      <div className="pa-content-wrapper">
        {/* Navbar */}
        <Navbar />

        {/* 分割线 */}
        <div className="pa-divider" />

        {/* Hero 内容(flex-1 居中) */}
        <div className="pa-hero-content">
          <h1 className="pa-headline">
            <span className="pa-headline-power">Power </span>
            <span className="pa-headline-ai">AI</span>
          </h1>

          <p className="pa-subtitle">
            The most powerful AI ever deployed
            <br />
            in talent acquisition
          </p>

          <button type="button" className="pa-cta-btn">
            Schedule a Consult
          </button>
        </div>

        {/* Logo Marquee(底部) */}
        <div className="pa-marquee-section">
          <LogoMarquee />
        </div>
      </div>
    </div>
  )
}
