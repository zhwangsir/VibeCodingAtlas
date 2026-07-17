import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Splash from './components/Splash'
import SpotlightReveal from './components/SpotlightReveal'

const BASE_IMG = '/nora/nora-base.png'
const REVEAL_IMG = '/nora/nora-reveal.png'
const LOGO_SVG = '/nora/nora-logo.svg'

const HEADLINE_TEXT = 'I build compelling visual stories & motion that make ideas shine.'
const HEADLINE_WORDS = HEADLINE_TEXT.split(' ')

/**
 * NoraHero — 创意工作室落地页
 *
 * 结构：
 * 1. Splash — 10 盒子开屏动画（1.35s 后淡出）
 * 2. Navbar — 左 logo（mix-blend-mode: difference）+ 右 burger 按钮
 * 3. MenuPanel — 右侧滑下（top -600→0）含 nav + 联系方式 + Let's talk CTA
 * 4. Hero — 巨大 "Visuals" 文字（behind）+ base img + reveal img（canvas 聚光蒙版）+ content（word reveal 标题 + CTA）
 *
 * 字体：Inter
 * 配色：#E4E4E4 浅灰底 / #F4F1E8 米白前景 / #75C5DE 蓝色强调 / #111111 深色文字
 */
export default function NoraHero() {
  const [menuOpen, setMenuOpen] = useState(false)

  // ESC 关闭菜单
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div data-theme="nora" className="nora-root">
      <Splash />

      {/* 左：Logo（mix-blend-mode: difference 让其与下层图片自适应对比） */}
      <div className="nora-logo-wrapper">
        <div className="nora-inner">
          <a href="#" aria-label="Home">
            <img src={LOGO_SVG} alt="" />
          </a>
        </div>
      </div>

      {/* 右：Burger 按钮 */}
      <div className="nora-burger-wrapper">
        <div className="nora-inner">
          <button
            type="button"
            className={`nora-burger-btn${menuOpen ? ' open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </div>

      {/* 菜单面板 */}
      <div className={`nora-menu-panel${menuOpen ? ' open' : ''}`}>
        <nav>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#blog" onClick={() => setMenuOpen(false)}>
            Blog
          </a>
        </nav>
        <div className="nora-menu-contact">
          <a href="mailto:studio@norakessler.com" className="nora-menu-email">
            studio@norakessler.com
          </a>
          <div className="nora-menu-socials">
            <a href="#">Pinterest</a>
            <a href="#">Behance</a>
            <a href="#">Letterboxd</a>
          </div>
        </div>
        <div style={{ marginTop: '32px' }}>
          <button type="button" className="nora-menu-cta-btn">
            <span className="nora-menu-cta-bg" />
            <span className="nora-menu-cta-text">Let's talk</span>
            <span className="nora-menu-cta-circle">
              <ArrowUpRight size={14} color="#fff" />
            </span>
          </button>
        </div>
      </div>

      {/* Hero 主区 */}
      <main className="nora-hero">
        {/* 底部巨大 "Visuals" 文字 */}
        <div className="nora-hero-big-text nora-creator-text-animate">
          <h2>Visuals</h2>
        </div>

        {/* 底图 */}
        <div
          className="nora-hero-base-img nora-hero-image-animate"
          style={{ backgroundImage: `url(${BASE_IMG})` }}
        />

        {/* 聚光揭示层 */}
        <SpotlightReveal imageUrl={REVEAL_IMG} />

        {/* 内容层 */}
        <div className="nora-hero-content">
          <div className="nora-hero-content-inner">
            <h1 className="nora-hero-headline">
              {HEADLINE_WORDS.map((word, i) => (
                <span
                  key={i}
                  className="nora-word-reveal"
                  style={{ animationDelay: `${1 + i * 0.05}s` }}
                >
                  {word}
                </span>
              ))}
            </h1>
            <button type="button" className="nora-cta-btn nora-cta-animate">
              <span className="nora-cta-btn-bg" />
              <span className="nora-cta-btn-text">Start a project now</span>
              <span className="nora-cta-btn-circle">
                <ArrowUpRight size={18} color="#fff" />
              </span>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
