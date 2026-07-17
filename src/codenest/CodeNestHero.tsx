/* ============================================================
 *  CodeNest — 编程教育平台暗色 Hero
 *  字体:Inter + Plus Jakarta Sans + Instrument Serif(italic)
 *  核心:HLS 全屏背景视频 + 液态玻璃卡片 + 网格线 + 中心辉光
 * ============================================================ */
import { useEffect, useRef, useState } from 'react'
import Hls from 'hls.js'
import { ArrowRight, Menu, X } from 'lucide-react'
import '@fontsource/inter/400.css'
import '@fontsource/inter/800.css'
import '@fontsource/plus-jakarta-sans/400.css'
import '@fontsource/plus-jakarta-sans/700.css'
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'

/* ===== HLS 视频流地址(本地) ===== */
const HLS_SRC = '/videos/codenest-hls.mp4'

/* ===== 导航链接 ===== */
const NAV_LINKS = ['PROJECTS', 'BLOG', 'ABOUT', 'RESUME']

/* ============================================================
 *  useHlsVideo — HLS 流挂载 hook(enableWorker: false 保证沙箱稳定)
 * ============================================================ */
function useHlsVideo(src: string) {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Safari/iOS 原生 HLS 支持
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
      video.play().catch(() => {})
      return
    }

    // 其他浏览器使用 hls.js
    if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: false })
      hls.loadSource(src)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {})
      })
      return () => {
        hls.destroy()
      }
    }
  }, [src])

  return videoRef
}

/* ============================================================
 *  CodeNestHero — 主入口
 * ============================================================ */
export default function CodeNestHero() {
  const videoRef = useHlsVideo(HLS_SRC)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div data-theme="codenest" className="relative min-h-screen w-full overflow-hidden bg-[#070b0a]">
      {/* 短视口(≤800px 高,如 720p)压缩垂直间距,保证 CTA 完整落入首屏且无滚动;
          仅调整实现间距(PROMPT 未规定),卡片 200x200/translate-y-[-50px] 等核心参数不变 */}
      <style>{`
        @media (min-width: 768px) and (max-height: 800px) {
          [data-theme='codenest'] .cn-hero {
            padding-top: 96px;
            padding-bottom: 28px;
          }
          [data-theme='codenest'] .cn-glass-card {
            margin-bottom: 14px;
          }
        }
      `}</style>

      {/* ===== 背景视频 (opacity 60%) ===== */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />

      {/* ===== 左侧暗色渐变 ===== */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070b0a] via-[#070b0a]/60 to-transparent" />

      {/* ===== 底部渐变(可读性) ===== */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070b0a] via-[#070b0a]/30 to-transparent" />

      {/* ===== 三条垂直网格线 (桌面端 25/50/75%) ===== */}
      <div className="cn-grid-lines">
        <span className="cn-grid-line" style={{ left: '25%' }} />
        <span className="cn-grid-line" style={{ left: '50%' }} />
        <span className="cn-grid-line" style={{ left: '75%' }} />
      </div>

      {/* ===== 中心水平椭圆辉光(cyan/dark green) ===== */}
      <svg
        className="cn-glow"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <filter id="cn-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="25" />
          </filter>
        </defs>
        <ellipse
          cx="600"
          cy="200"
          rx="500"
          ry="120"
          fill="#5ed29c"
          opacity="0.18"
          filter="url(#cn-blur)"
        />
      </svg>

      {/* ===== 顶部导航 ===== */}
      <header className="cn-header">
        <a href="#" className="cn-logo">
          CodeNest
        </a>

        {/* 桌面导航 */}
        <nav className="cn-nav-desktop">
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className="cn-nav-link">
              {link}
            </a>
          ))}
        </nav>

        {/* 移动端汉堡 */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="cn-menu-toggle"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* ===== 移动端全屏菜单 ===== */}
      <div className={`cn-mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="cn-mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </a>
        ))}
      </div>

      {/* ===== Hero 内容 ===== */}
      <main className="cn-hero">
        {/* 液态玻璃卡片(200x200,translate-y-[-50px]) */}
        <div className="liquid-glass cn-glass-card">
          <span className="cn-glass-tag">[ 2025 ]</span>
          <h2 className="cn-glass-title">
            Taught by <em className="cn-glass-italic">Industry</em> Professionals
          </h2>
          <p className="cn-glass-desc">
            Real-world projects, mentorship from senior engineers, and a curriculum built for shipping.
          </p>
        </div>

        {/* Eyebrow */}
        <p className="cn-eyebrow">Career-Ready Curriculum</p>

        {/* 主标题 */}
        <h1 className="cn-headline">
          LAUNCH YOUR CODING CAREER<span className="cn-period">.</span>
        </h1>

        {/* 描述 */}
        <p className="cn-desc">
          Master in-demand coding skills through project-based learning. From your first line of code to
          your dream job — we guide you every step of the way.
        </p>

        {/* 主 CTA */}
        <a href="#" className="cn-cta">
          Get Started
          <ArrowRight size={16} />
        </a>
      </main>
    </div>
  )
}
