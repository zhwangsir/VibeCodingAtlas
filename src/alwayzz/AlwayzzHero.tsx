/* ============================================================
 *  Alwayzz — 创意机构 Hero(自定义 CSS,非 Tailwind)
 *  字体:Inter (400-700) + Source Serif 4 (400/600 normal+italic)
 *  核心:极简黑白 + 紧凑负字距 + 装饰曲线动画 + 跑马灯
 * ============================================================ */
import { useState } from 'react'
import { ChevronUp } from 'lucide-react'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/source-serif-4/400.css'
import '@fontsource/source-serif-4/400-italic.css'
import '@fontsource/source-serif-4/600.css'
import '@fontsource/source-serif-4/600-italic.css'

/* ===== 头像 URL ===== */
const AVATAR_URL = '/alwayzz/avatar.png'

/* ===== Ticker 项 ===== */
const TICKER_ITEMS = [
  'Brand Identity',
  'App Development',
  'Visual Design',
  'Creative Video',
  'Iconography',
]

/* ===== Drawer 链接 ===== */
const DRAWER_LINKS = ['Projects', 'Plans', 'Team', 'FAQs', 'Get in Touch']

/* ===== 公司列表(带字体) ===== */
const COMPANIES = [
  { name: 'Airbnb', fontFamily: "'Cedarville Cursive', cursive", weight: 700 },
  { name: 'Shopify', fontFamily: 'system-ui, sans-serif', weight: 800 },
  { name: 'Notion', fontFamily: 'Georgia, serif', weight: 500 },
  { name: 'Linear', fontFamily: "'Inter', sans-serif", weight: 600 },
  { name: 'Webflow', fontFamily: "'Inter', sans-serif", weight: 700 },
  { name: 'Figma', fontFamily: 'system-ui, sans-serif', weight: 600 },
  { name: 'Slack', fontFamily: 'Georgia, serif', weight: 700 },
  { name: 'Stripe', fontFamily: 'system-ui, sans-serif', weight: 800 },
  { name: 'Vercel', fontFamily: "'Inter', sans-serif", weight: 600 },
  { name: 'Framer', fontFamily: "'Source Serif 4', serif", weight: 600 },
]

/* ============================================================
 *  Navbar — 固定顶部
 * ============================================================ */
function Navbar({ onMenuToggle }: { onMenuToggle: () => void }) {
  return (
    <nav className="az-navbar">
      <div className="az-logo">
        Alwayzz<sup>®</sup>
      </div>
      <button className="az-menu-btn" onClick={onMenuToggle}>
        Menu
        <ChevronUp size={16} />
      </button>
    </nav>
  )
}

/* ============================================================
 *  MenuDrawer — 全屏抽屉
 * ============================================================ */
function MenuDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div className={`az-drawer ${open ? 'open' : ''}`}>
      {DRAWER_LINKS.map((link) => (
        <a key={link} href="#" className="az-drawer-link" onClick={onClose}>
          {link}
        </a>
      ))}
      <div className="az-drawer-footer">© 2026 Alwayzz. All rights reserved.</div>
    </div>
  )
}

/* ============================================================
 *  CurvedLines — 装饰曲线(左右各 20 条 + 顶部水平)
 * ============================================================ */
function CurvedLines() {
  const leftLines = Array.from({ length: 20 }, (_, i) => i)
  const rightLines = Array.from({ length: 20 }, (_, i) => i)
  const topLines = Array.from({ length: 20 }, (_, i) => i)

  return (
    <>
      {/* 左侧曲线 */}
      {leftLines.map((i) => (
        <div
          key={`l-${i}`}
          className="az-line az-line-left"
          style={{
            left: 0,
            top: `${50 + i * 20}px`,
            width: `${60 + i * 10}px`,
            height: `${100 + i * 15}px`,
            animationDelay: `${i * 0.25}s`,
          }}
        />
      ))}
      {/* 右侧曲线 */}
      {rightLines.map((i) => (
        <div
          key={`r-${i}`}
          className="az-line az-line-right"
          style={{
            right: 0,
            top: `${50 + i * 20}px`,
            width: `${60 + i * 10}px`,
            height: `${100 + i * 15}px`,
            animationDelay: `${i * 0.25}s`,
          }}
        />
      ))}
      {/* 顶部水平线(移动端显示) */}
      {topLines.map((i) => (
        <div
          key={`t-${i}`}
          className="az-line az-line-top"
          style={{
            top: `${100 + i * 20}px`,
            left: `${100 + i * 30}px`,
            width: `${80 + i * 12}px`,
            height: `${60 + i * 8}px`,
            animationDelay: `${i * 0.25}s`,
          }}
        />
      ))}
    </>
  )
}

/* ============================================================
 *  Ticker — 水平跑马灯
 * ============================================================ */
function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS]
  return (
    <div className="az-ticker">
      <div className="az-ticker-track">
        {items.map((item, i) => (
          <span key={i} className="az-ticker-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ============================================================
 *  TrustedBy — 合作公司跑马灯
 * ============================================================ */
function TrustedBy() {
  const companies = [...COMPANIES, ...COMPANIES, ...COMPANIES, ...COMPANIES]
  return (
    <section className="az-trusted">
      <div className="az-trusted-label">Partnered with top-tier companies globally</div>
      <div className="az-trusted-marquee">
        <div className="az-trusted-track">
          {companies.map((c, i) => (
            <span
              key={i}
              className="az-company"
              style={{ fontFamily: c.fontFamily, fontWeight: c.weight }}
            >
              {c.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
 *  AlwayzzHero — 主入口
 * ============================================================ */
export default function AlwayzzHero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div data-theme="alwayzz">
      <Navbar onMenuToggle={() => setMenuOpen((v) => !v)} />
      <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Hero */}
      <section className="az-hero">
        {/* 装饰曲线 */}
        <CurvedLines />

        {/* 内容 */}
        <div className="az-hero-content">
          {/* Ticker */}
          <Ticker />

          {/* 标题 */}
          <h1 className="az-title">
            Premium creative <span className="serif italic">alwayzz</span>
            <sup>®</sup> on demand.
          </h1>

          {/* 副标题 */}
          <p className="az-subtitle">
            A flexible design partnership for founders, brands, and agencies who want top craft delivered on their timeline.
          </p>

          {/* CTA */}
          <div className="az-cta-row">
            <button className="az-btn-primary">View Plans</button>
            <button className="az-btn-book">
              <img src={AVATAR_URL} alt="" className="az-avatar" />
              <div className="az-book-text">
                <span className="az-book-primary">Chat for 15 minutes</span>
                <span className="az-book-secondary">
                  <span className="az-green-dot" />
                  Pick a slot
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* 底部渐变模糊 */}
        <div className="az-blur-bottom" />
      </section>

      {/* TrustedBy */}
      <TrustedBy />
    </div>
  )
}
