/* ============================================================
 *  Atelier — 设计机构全屏 Hero
 *  字体:Inter(正文)+ Instrument Serif(标题/移动菜单)
 *  核心:全屏循环视频 + 桌面导航 + 动画汉堡移动菜单 + 斜体衬线标题
 * ============================================================ */
import { useState } from 'react'
import { ArrowRight, Play } from 'lucide-react'

/* ===== 背景视频地址 ===== */
const BG_VIDEO =
  '/videos/f607742e-09da-4cf5-bb06-4e67b0a531de.mp4'

/* ===== 导航链接 ===== */
const NAV_LINKS = ['Projects', 'Expertise', 'Studio', 'Insights']
const MOBILE_LINKS = ['Projects', 'Expertise', 'Studio', 'Insights', 'Reach Out']

/* ============================================================
 *  Hamburger — 动画汉堡图标
 * ============================================================ */
function Hamburger({ open }: { open: boolean }) {
  return (
    <div className="at-hamburger">
      {/* 上线:open 时旋转 45deg + 下移 */}
      <span
        className="at-ham-line at-ham-top"
        data-open={open}
      />
      {/* 中线:open 时淡出 */}
      <span
        className="at-ham-line at-ham-middle"
        data-open={open}
      />
      {/* 下线:open 时旋转 -45deg + 上移 */}
      <span
        className="at-ham-line at-ham-bottom"
        data-open={open}
      />
    </div>
  )
}

/* ============================================================
 *  AtelierHero — 主入口
 * ============================================================ */
export default function AtelierHero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div data-theme="atelier" className="at-root" style={{ height: '100vh' }}>
      {/* ===== 全屏背景视频 ===== */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="at-bg-video"
        src={BG_VIDEO}
      />

      {/* ===== 视频渐变遮罩 ===== */}
      <div className="at-overlay" />

      {/* ===== 主内容层(z-10) ===== */}
      <div className="at-content">
        {/* ===== Navbar ===== */}
        <nav className="at-navbar">
          {/* 左:Logo + 桌面导航 */}
          <div className="at-nav-left">
            <span className="at-logo">Atelier</span>
            <div className="at-nav-links">
              {NAV_LINKS.map((link) => (
                <a key={link} href="#" className="at-nav-link">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* 右:Reach Out + Let's Talk + 汉堡 */}
          <div className="at-nav-right">
            <a href="#" className="at-reach-out">
              Reach Out
            </a>
            <a href="#" className="at-lets-talk">
              Let&apos;s Talk
            </a>
            <button
              type="button"
              className="at-hamburger-btn"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <Hamburger open={menuOpen} />
            </button>
          </div>
        </nav>

        {/* ===== Hero 内容 ===== */}
        <div className="at-hero-content">
          <h1 className="at-headline">
            UX <em className="at-italic">and</em> APP
            <br />
            DESIGN <em className="at-italic">for</em> BOLD
            <br />
            VENTURES
          </h1>

          <p className="at-subtext">
            We shape digital products that define brands
            <br className="hidden sm:block" /> and unlock exponential growth.
          </p>

          <div className="at-buttons">
            <a href="#" className="at-btn at-btn-primary">
              See Cases
              <ArrowRight size={16} className="at-btn-icon" />
            </a>
            <a href="#" className="at-btn at-btn-secondary">
              <Play size={14} className="at-btn-play" />
              Watch Reel
            </a>
          </div>
        </div>
      </div>

      {/* ===== 移动端全屏菜单 ===== */}
      <div className={`at-mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        {/* 移动菜单 Header */}
        <div className="at-m-header">
          <span className="at-logo">Atelier</span>
          <button
            type="button"
            className="at-close-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <Hamburger open={true} />
          </button>
        </div>

        {/* 移动菜单导航链接 */}
        <div className="at-m-links">
          {MOBILE_LINKS.map((link, i) => (
            <a
              key={link}
              href="#"
              className="at-m-link"
              data-open={menuOpen}
              style={{ transitionDelay: menuOpen ? `${150 + i * 80}ms` : '0ms' }}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>

        {/* 移动菜单底部按钮 */}
        <div className="at-m-footer">
          <a
            href="#"
            className="at-m-cta"
            data-open={menuOpen}
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </div>
  )
}
