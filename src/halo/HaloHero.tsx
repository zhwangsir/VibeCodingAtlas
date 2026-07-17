/* ============================================================
 *  Halo — 现代 React 落地页 Hero
 *  字体:Inter(正文)+ Instrument Serif(斜体衬线点缀)
 *  核心:HLS 全屏背景视频 + 玻璃拟态导航 + 左下角 Hero 内容
 * ============================================================ */
import { useEffect, useRef, useState } from 'react'
import Hls from 'hls.js'
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react'

/* ===== HLS 视频流地址(Mux) ===== */
const HLS_SRC = '/videos/smith-hls.mp4'

/* ===== 导航链接 ===== */
const NAV_LINKS = ['Work', 'Studio', 'Journal', 'Contact']

/* ============================================================
 *  useHlsVideo — HLS 流挂载(enableWorker: false 保证沙箱稳定)
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
 *  HaloHero — 主入口
 * ============================================================ */
export default function HaloHero() {
  const videoRef = useHlsVideo(HLS_SRC)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div data-theme="halo" className="ha-root" style={{ height: '100vh' }}>
      {/* ===== 全屏 HLS 背景视频 ===== */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="ha-bg-video"
      />

      {/* ===== 视频渐变遮罩(顶部 nav 可读 + 底部 hero 可读) ===== */}
      <div className="ha-overlay" />

      {/* ===== 玻璃拟态导航(固定顶部居中) ===== */}
      <header className="ha-nav-wrap">
        <nav className="ha-nav">
          {/* 左:Logo */}
          <a href="#" className="ha-logo">
            Halo<span className="ha-logo-dot">.</span>
          </a>

          {/* 中:导航链接 */}
          <div className="ha-nav-links">
            {NAV_LINKS.map((link) => (
              <a key={link} href="#" className="ha-nav-link">
                {link}
              </a>
            ))}
          </div>

          {/* 右:CTA 按钮 */}
          <a href="#" className="ha-nav-cta">
            Get in touch
            <ArrowUpRight size={14} className="ha-nav-cta-icon" />
          </a>

          {/* 移动端汉堡 */}
          <button
            type="button"
            aria-label="Toggle menu"
            className="ha-hamburger"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* ===== 移动端玻璃菜单 ===== */}
      <div className={`ha-mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        {NAV_LINKS.map((link, i) => (
          <a
            key={link}
            href="#"
            className="ha-mobile-link"
            style={{ transitionDelay: menuOpen ? `${100 + i * 70}ms` : '0ms' }}
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </a>
        ))}
        <a href="#" className="ha-mobile-cta" onClick={() => setMenuOpen(false)}>
          Get in touch
          <ArrowUpRight size={16} />
        </a>
      </div>

      {/* ===== Hero 内容(左下角) ===== */}
      <main className="ha-hero">
        <p className="ha-eyebrow">
          <span className="ha-eyebrow-dot" />
          Independent design studio · Est. 2019
        </p>

        <h1 className="ha-headline">
          We craft <em className="ha-italic">living</em> brands
          <br />
          for the <em className="ha-italic">post-digital</em> era.
        </h1>

        <p className="ha-subtext">
          A multidisciplinary studio shaping identity, motion, and product
          for ambitious teams who refuse to look like everyone else.
        </p>

        <div className="ha-actions">
          <a href="#" className="ha-cta-primary">
            View selected work
            <ArrowRight size={16} className="ha-cta-icon" />
          </a>
          <a href="#" className="ha-cta-secondary">
            Read our manifesto
          </a>
        </div>
      </main>

      {/* ===== 右下角滚动指示 ===== */}
      <div className="ha-scroll-indicator">
        <span className="ha-scroll-text">Scroll</span>
        <span className="ha-scroll-line" />
      </div>
    </div>
  )
}
