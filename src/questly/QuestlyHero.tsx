/* ============================================================
 *  Questly — AI 搜索引用 SaaS Hero(背景图 + 草地 + 仪表盘 mockup)
 *  字体: Nimbus Sans TW01 (db.onlinewebfonts.com)
 *  核心: ScaledDashboard(ResizeObserver 缩放)+ 浏览器 chrome + 侧边栏 + 主内容
 *  动画: fade-up / fade-down / hero-rise(支持 prefers-reduced-motion)
 * ============================================================ */
import { useEffect, useRef, useState } from 'react'
import {
  ChevronDown,
  ArrowUp,
  Sparkles,
  Menu,
  X,
  PanelLeft,
  ChevronLeft,
  ChevronRight,
  Monitor,
  RotateCw,
  Share,
  Plus,
  Copy,
  Grid,
  Compass,
  Layers,
  ListTodo,
} from 'lucide-react'

/* ===== 背景图 + 草地 ===== */
const BG_IMAGE = '/images/d5f2a94a-b22e-4e4a-a6b6-eacdddf1f5b0.webp'
const GRASS_IMAGE = '/images/grass_eam204.png'

/* ===== 数据 ===== */
const NAV_LINKS = [
  { label: 'Toolkit', hasDropdown: true },
  { label: 'Plans', hasDropdown: false },
  { label: 'News', hasDropdown: false },
]

const STATS = [
  { label: 'RELEASED', value: '62', sub: 'Posts indexed' },
  { label: 'BREADTH', value: '12', sub: 'Subject groups' },
  { label: 'REMAINING', value: '412', sub: 'Ready to draft' },
  { label: 'MAX REACH', value: '3,156,200', sub: 'Searches a month' },
]

const SUBJECTS = ['Elder Care', 'Mobility', 'Home Safety']

const DRAFT_ROWS = [
  { q: 'How to prevent falls in elderly', vol: '8.2K', diff: 'Easy', status: 'Ready' },
  { q: 'Best mobility aids for arthritis', vol: '5.4K', diff: 'Medium', status: 'Drafting' },
  { q: 'Home safety checklist for seniors', vol: '12K', diff: 'Easy', status: 'Ready' },
  { q: 'When to stop driving elderly', vol: '3.1K', diff: 'Hard', status: 'Drafting' },
  { q: 'Medication management tips', vol: '6.8K', diff: 'Medium', status: 'Ready' },
]

/* ============================================================
 *  QuestlyLogo — 自定义 SVG logo (currentColor, viewBox 256)
 * ============================================================ */
function QuestlyLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M 144 256 L 27.598 256 L 144 139.598 Z M 256 207.5 L 200 256 L 200 56 L 0 56 L 48 0 L 256 0 Z M 0 204.402 L 0 112 L 92.402 112 Z" />
    </svg>
  )
}

/* ============================================================
 *  ScaledDashboard — ResizeObserver 缩放包装器
 *  - 内部按设计宽 896px 渲染
 *  - transform: scale() 适配容器
 *  - 高度跟随 inner.offsetHeight * scale
 * ============================================================ */
function ScaledDashboard({ children }: { children: React.ReactNode }) {
  const outerRef = useRef<HTMLDivElement | null>(null)
  const innerRef = useRef<HTMLDivElement | null>(null)
  const [scale, setScale] = useState(1)
  const [innerH, setInnerH] = useState(0)

  useEffect(() => {
    const outer = outerRef.current
    const inner = innerRef.current
    if (!outer || !inner) return

    const DESIGN_WIDTH = 896
    const update = () => {
      const w = outer.clientWidth
      const s = Math.min(1, w / DESIGN_WIDTH)
      setScale(s)
      setInnerH(inner.offsetHeight)
    }
    update()

    const ro = new ResizeObserver(update)
    ro.observe(outer)
    ro.observe(inner)
    return () => ro.disconnect()
  }, [])

  return (
    <div ref={outerRef} style={{ height: innerH * scale, width: '100%' }}>
      <div
        ref={innerRef}
        style={{
          width: 896,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
    </div>
  )
}

/* ============================================================
 *  DashboardMockup — 浏览器 chrome + 侧边栏 + 主内容
 * ============================================================ */
function DashboardMockup() {
  return (
    <div className="ql-mockup">
      {/* 标题栏 */}
      <div className="ql-titlebar">
        <div className="ql-traffic-lights">
          <span style={{ background: '#ff5f57' }} />
          <span style={{ background: '#febc2e' }} />
          <span style={{ background: '#28c840' }} />
        </div>
        <div className="ql-titlebar-icons">
          <PanelLeft className="ql-tb-icon" />
          <ChevronLeft className="ql-tb-icon-muted" />
          <ChevronRight className="ql-tb-icon-muted" />
          <div className="ql-urlbar">
            <Monitor className="ql-tb-icon" />
            <span>questly.ai</span>
          </div>
          <RotateCw className="ql-tb-icon" />
          <Share className="ql-tb-icon" />
          <Plus className="ql-tb-icon" />
          <Copy className="ql-tb-icon" />
        </div>
      </div>

      {/* 主体 */}
      <div className="ql-body">
        {/* 侧边栏(22%) */}
        <aside className="ql-sidebar">
          <div className="ql-side-top">
            <QuestlyLogo className="ql-side-logo" />
            <Grid className="ql-side-grid-icon" />
          </div>
          <div className="ql-workspace">
            <span className="ql-workspace-badge">C</span>
            <span className="ql-workspace-label">CareNest</span>
          </div>
          <nav className="ql-side-nav">
            <div className="ql-side-nav-item">
              <Compass className="ql-side-nav-icon" />
              <span>Uncover</span>
            </div>
            <div className="ql-side-nav-item">
              <Layers className="ql-side-nav-icon" />
              <span>Subjects</span>
            </div>
            <div className="ql-side-nav-item">
              <ListTodo className="ql-side-nav-icon" />
              <span>Inbox</span>
            </div>
          </nav>
          <div className="ql-side-recent">
            <div className="ql-side-recent-label">Recent</div>
            {['Elder care SEO', 'Mobility devices', 'Home safety tips'].map((t, i) => (
              <div key={t} className="ql-side-recent-item">
                <span className={`ql-status-dot ${i === 0 ? 'ready' : 'drafting'}`} />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </aside>

        {/* 主内容 */}
        <main className="ql-main">
          {/* 头部 */}
          <div className="ql-main-header">
            <div className="ql-main-ws">
              <span className="ql-main-ws-icon">C</span>
              <div>
                <div className="ql-main-ws-name">CareNest</div>
                <div className="ql-main-ws-sub">Last synced 2 minutes ago</div>
              </div>
            </div>
            <button type="button" className="ql-generate-btn">
              <Sparkles className="ql-tb-icon" />
              <span>Generate</span>
            </button>
          </div>

          {/* 统计网格 */}
          <div className="ql-stats-grid">
            {STATS.map((s) => (
              <div key={s.label} className="ql-stat-cell">
                <div className="ql-stat-value">{s.value}</div>
                <div className="ql-stat-label">{s.label}</div>
                <div className="ql-stat-sub">{s.sub}</div>
              </div>
            ))}
          </div>

          {/* 主题卡片 */}
          <div className="ql-subject-grid">
            {SUBJECTS.map((s, i) => (
              <div key={s} className="ql-subject-card">
                <div className="ql-subject-name">{s}</div>
                <div className="ql-subject-meta">
                  {i === 0 ? '24 posts' : i === 1 ? '18 posts' : '12 posts'}
                </div>
              </div>
            ))}
          </div>

          {/* 起草收件箱 */}
          <div className="ql-inbox">
            <div className="ql-inbox-header">
              <span>Question</span>
              <span>Volume</span>
              <span>Difficulty</span>
              <span>Status</span>
            </div>
            {DRAFT_ROWS.map((r) => (
              <div key={r.q} className="ql-inbox-row">
                <span className="ql-inbox-q">{r.q}</span>
                <span className="ql-inbox-vol">{r.vol}</span>
                <span className="ql-inbox-diff">{r.diff}</span>
                <span
                  className={`ql-inbox-status ${
                    r.status === 'Drafting' ? 'is-drafting' : 'is-ready'
                  }`}
                >
                  {r.status}
                </span>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

/* ============================================================
 *  QuestlyHero — 主入口
 * ============================================================ */
export default function QuestlyHero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div
      data-theme="questly"
      className="questly-root relative min-h-[100svh] overflow-hidden bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${BG_IMAGE})` }}
    >
      {/* ===== Navbar ===== */}
      <nav className="ql-navbar animate-fade-down relative z-20">
        <div className="ql-nav-logo">
          <QuestlyLogo className="ql-logo-icon" />
          <span className="ql-logo-text">Questly</span>
        </div>

        <div className="ql-nav-links">
          {NAV_LINKS.map((item) => (
            <a key={item.label} href="#" className="ql-nav-link">
              {item.label}
              {item.hasDropdown && <ChevronDown className="ql-nav-chevron" />}
            </a>
          ))}
        </div>

        <div className="ql-nav-right">
          <button type="button" className="ql-nav-cta">Get started</button>
          <button
            type="button"
            aria-label="Toggle menu"
            className="ql-nav-hamburger"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="ql-hamburger-icon" /> : <Menu className="ql-hamburger-icon" />}
          </button>
        </div>
      </nav>

      {/* 移动端下拉 */}
      {menuOpen && (
        <div className="ql-mobile-menu animate-fade-up">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href="#"
              className="ql-mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      {/* ===== Hero 内容 ===== */}
      <div className="ql-spacer" />
      <div className="ql-hero-content">
        <h1 className="ql-headline">
          <span className="ql-headline-line animate-fade-up">Get cited.</span>
          <span className="ql-headline-line animate-fade-up ql-delay-100">Effortlessly.</span>
        </h1>

        {/* 搜索栏 */}
        <form className="ql-search-form animate-fade-up ql-delay-220" onSubmit={(e) => e.preventDefault()}>
          <div className="ql-search-pill">
            <input
              type="text"
              placeholder="What makes content rank in AI search?"
              className="ql-search-input"
            />
            <button type="submit" className="ql-search-submit" aria-label="Submit">
              <ArrowUp className="ql-search-submit-icon" />
            </button>
          </div>
        </form>

        {/* 描述 */}
        <p className="ql-desc animate-fade-up ql-delay-340">
          Ship articles that answer actual customer questions
          <br />
          — and be seen on{' '}
          <Sparkles className="ql-desc-icon" />
          {' '}
          ChatGPT
        </p>

        {/* CTA */}
        <div className="ql-cta-row animate-fade-up ql-delay-460">
          <button type="button" className="ql-cta-primary">Try It Free</button>
          <button type="button" className="ql-cta-secondary">Talk to sales</button>
        </div>
      </div>

      {/* 仪表盘 mockup */}
      <div className="ql-spacer-2" />
      <div className="ql-dashboard-wrap animate-hero-rise ql-delay-620">
        <ScaledDashboard>
          <DashboardMockup />
        </ScaledDashboard>
      </div>

      {/* 草地覆盖 */}
      <img
        src={GRASS_IMAGE}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-10 w-full select-none"
      />

      {/* ===== 内联样式 ===== */}
      <style>{`
        @font-face {
          font-family: 'Nimbus Sans TW01';
          src: url('/fonts/questly/NimbusSansTW01.woff2') format('woff2'),
               url('/fonts/questly/NimbusSansTW01.woff') format('woff'),
               url('/fonts/questly/NimbusSansTW01.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        .questly-root {
          font-family: 'Nimbus Sans TW01', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #111;
        }

        /* ===== 动画 ===== */
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(24px); filter: blur(6px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes fade-down {
          from { opacity: 0; transform: translateY(-16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-rise {
          from { opacity: 0; transform: translateY(64px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-up { animation: fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .animate-fade-down { animation: fade-down 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .animate-hero-rise { animation: hero-rise 1.1s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .ql-delay-100 { animation-delay: 100ms; }
        .ql-delay-220 { animation-delay: 220ms; }
        .ql-delay-340 { animation-delay: 340ms; }
        .ql-delay-460 { animation-delay: 460ms; }
        .ql-delay-620 { animation-delay: 620ms; }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-up, .animate-fade-down, .animate-hero-rise { animation: none; }
        }

        /* ===== Navbar ===== */
        .ql-navbar {
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 20px;
        }
        @media (min-width: 640px) { .ql-navbar { padding: 20px 32px; } }
        @media (min-width: 1024px) { .ql-navbar { padding: 20px 40px; } }

        .ql-nav-logo { display: flex; align-items: center; gap: 8px; color: #111; }
        .ql-logo-icon { width: 20px; height: 20px; }
        @media (min-width: 640px) { .ql-logo-icon { width: 24px; height: 24px; } }
        .ql-logo-text { font-size: 18px; font-weight: 600; color: #111; }

        .ql-nav-links { display: none; align-items: center; gap: 32px; }
        @media (min-width: 768px) { .ql-nav-links { display: flex; } }
        .ql-nav-link {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: 13px; color: #444; text-decoration: none;
          transition: color 0.2s ease;
        }
        .ql-nav-link:hover { color: #111; }
        .ql-nav-chevron { width: 14px; height: 14px; }

        .ql-nav-right { display: flex; align-items: center; gap: 10px; }
        .ql-nav-cta {
          font-size: 13px; font-weight: 500; color: #fff;
          background: #111; padding: 8px 16px; border-radius: 9999px;
          border: none; cursor: pointer;
          transition: background 0.2s ease;
        }
        @media (min-width: 640px) { .ql-nav-cta { padding: 8px 20px; } }
        .ql-nav-cta:hover { background: #333; }

        .ql-nav-hamburger {
          display: inline-flex; align-items: center; justify-content: center;
          width: 36px; height: 36px; border-radius: 9999px;
          color: #111; background: transparent; border: none; cursor: pointer;
          transition: background 0.2s ease;
        }
        .ql-nav-hamburger:hover { background: rgba(17,17,17,0.1); }
        @media (min-width: 768px) { .ql-nav-hamburger { display: none; } }
        .ql-hamburger-icon { width: 20px; height: 20px; }

        .ql-mobile-menu {
          margin: 0 16px;
          border-radius: 16px;
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 0 0 1px rgba(17,17,17,0.08);
          padding: 12px 20px;
        }
        .ql-mobile-link {
          display: block; padding: 10px 0;
          font-size: 15px; color: #444; text-decoration: none;
          border-bottom: 1px solid rgba(17,17,17,0.08);
          transition: color 0.2s ease;
        }
        .ql-mobile-link:last-child { border-bottom: none; }
        .ql-mobile-link:hover { color: #111; }

        /* ===== Hero 内容 ===== */
        .ql-spacer { flex: 1; min-height: 32px; }
        @media (min-width: 640px) { .ql-spacer { min-height: 48px; } }
        @media (min-width: 1024px) { .ql-spacer { min-height: 64px; } }
        .ql-spacer-2 { flex: 1; min-height: 40px; }
        @media (min-width: 640px) { .ql-spacer-2 { min-height: 48px; } }
        @media (min-width: 1024px) { .ql-spacer-2 { min-height: 64px; } }

        .ql-hero-content {
          text-align: center; padding: 0 20px;
          display: flex; flex-direction: column; align-items: center;
        }

        .ql-headline {
          font-weight: 400; line-height: 1.05; letter-spacing: -0.025em;
          color: #111; font-size: 40px;
          display: flex; flex-direction: column;
        }
        @media (min-width: 400px) { .ql-headline { font-size: 44px; } }
        @media (min-width: 640px) { .ql-headline { font-size: 60px; } }
        @media (min-width: 1024px) { .ql-headline { font-size: 72px; } }
        @media (min-width: 1280px) { .ql-headline { font-size: 80px; } }
        .ql-headline-line { display: block; }

        /* 搜索栏 */
        .ql-search-form { margin-top: 20px; width: 100%; max-width: 36rem; }
        @media (min-width: 640px) { .ql-search-form { margin-top: 24px; } }
        .ql-search-pill {
          display: flex; align-items: center; gap: 12px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 0 0 1px rgba(17,17,17,0.08);
          padding: 6px 6px 6px 20px;
        }
        .ql-search-input {
          flex: 1; background: transparent; border: none; outline: none;
          font-size: 14px; color: #111; padding: 8px 0;
        }
        @media (min-width: 640px) { .ql-search-input { font-size: 16px; } }
        .ql-search-input::placeholder { color: #6b7280; }
        .ql-search-submit {
          display: inline-flex; align-items: center; justify-content: center;
          width: 36px; height: 36px; border-radius: 9999px;
          background: #111; color: #fff; border: none; cursor: pointer;
          transition: transform 0.2s ease;
          flex-shrink: 0;
        }
        @media (min-width: 640px) {
          .ql-search-submit { width: 40px; height: 40px; }
        }
        .ql-search-submit:hover { transform: scale(1.05); }
        .ql-search-submit:active { transform: scale(0.95); }
        .ql-search-submit-icon { width: 16px; height: 16px; }
        @media (min-width: 640px) { .ql-search-submit-icon { width: 18px; height: 18px; } }

        /* 描述 */
        .ql-desc {
          margin-top: 16px;
          color: #4b5563; font-size: 14px; line-height: 1.6;
          max-width: 28rem;
        }
        @media (min-width: 640px) { .ql-desc { margin-top: 20px; font-size: 16px; } }
        @media (min-width: 1024px) { .ql-desc { font-size: 18px; } }
        .ql-desc-icon {
          display: inline-block; width: 16px; height: 16px;
          vertical-align: middle; margin-top: -4px;
        }

        /* CTA */
        .ql-cta-row {
          margin-top: 16px; display: flex; flex-wrap: wrap;
          align-items: center; justify-content: center; gap: 12px;
        }
        @media (min-width: 640px) { .ql-cta-row { margin-top: 20px; } }
        .ql-cta-primary {
          font-size: 14px; font-weight: 500; color: #fff;
          background: #111; padding: 10px 24px; border-radius: 9999px;
          border: none; cursor: pointer;
          transition: all 0.2s ease;
        }
        .ql-cta-primary:hover { background: #333; box-shadow: 0 8px 20px rgba(0,0,0,0.2); }
        .ql-cta-secondary {
          font-size: 14px; font-weight: 500; color: #444;
          padding: 10px 24px; border-radius: 9999px;
          background: transparent;
          box-shadow: 0 0 0 1px #d1d5db inset;
          border: none; cursor: pointer;
          transition: background 0.2s ease;
        }
        .ql-cta-secondary:hover { background: rgba(243,244,246,0.8); }

        /* ===== 仪表盘 ===== */
        .ql-dashboard-wrap {
          position: relative; z-index: 0;
          width: 92%; max-width: 56rem;
          margin: 0 auto; flex-shrink: 0;
          margin-bottom: -40px;
        }
        @media (min-width: 640px) {
          .ql-dashboard-wrap { width: 84%; margin-bottom: -80px; }
        }
        @media (min-width: 1024px) {
          .ql-dashboard-wrap { width: 72%; margin-bottom: -128px; }
        }

        .ql-mockup {
          border-top-left-radius: 16px; border-top-right-radius: 16px;
          overflow: hidden; background: #1a1a1c; text-align: left;
          box-shadow: 0 -20px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.1) inset;
        }

        .ql-titlebar {
          background: #242427;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding: 10px 16px;
          display: flex; align-items: center; gap: 16px;
        }
        .ql-traffic-lights { display: flex; align-items: center; gap: 6px; }
        .ql-traffic-lights span { width: 10px; height: 10px; border-radius: 9999px; }
        .ql-titlebar-icons {
          display: flex; align-items: center; gap: 14px; flex: 1; justify-content: center;
        }
        .ql-tb-icon { width: 14px; height: 14px; color: rgba(255,255,255,0.4); }
        .ql-tb-icon-muted { width: 14px; height: 14px; color: rgba(255,255,255,0.25); }
        .ql-urlbar {
          display: inline-flex; align-items: center; gap: 6px;
          background: #1a1a1c; border-radius: 6px;
          padding: 4px 24px; font-size: 10px; color: rgba(255,255,255,0.6);
        }

        .ql-body { display: flex; }
        .ql-sidebar {
          width: 22%; background: #1e1e21;
          border-right: 1px solid rgba(255,255,255,0.05);
          padding: 14px 12px;
        }
        .ql-side-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
        .ql-side-logo { width: 16px; height: 16px; color: rgba(255,255,255,0.7); }
        .ql-side-grid-icon { width: 14px; height: 14px; color: rgba(255,255,255,0.3); }
        .ql-workspace { display: flex; align-items: center; gap: 6px; margin-bottom: 16px; }
        .ql-workspace-badge {
          display: inline-flex; align-items: center; justify-content: center;
          width: 16px; height: 16px; border-radius: 4px;
          background: #e8553f; color: #fff; font-size: 9px; font-weight: 700;
        }
        .ql-workspace-label { font-size: 10px; color: rgba(255,255,255,0.8); }
        .ql-side-nav { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }
        .ql-side-nav-item {
          display: flex; align-items: center; gap: 6px;
          font-size: 10px; color: rgba(255,255,255,0.6);
        }
        .ql-side-nav-icon { width: 12px; height: 12px; }
        .ql-side-recent-label {
          font-size: 9px; color: rgba(255,255,255,0.4);
          text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;
        }
        .ql-side-recent-item {
          display: flex; align-items: center; gap: 6px;
          font-size: 10px; color: rgba(255,255,255,0.6);
          padding: 4px 0;
        }
        .ql-status-dot { width: 6px; height: 6px; border-radius: 9999px; }
        .ql-status-dot.ready { background: #28c840; }
        .ql-status-dot.drafting { background: #febc2e; }

        .ql-main { flex: 1; padding: 16px; }
        .ql-main-header {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 16px;
        }
        .ql-main-ws { display: flex; align-items: center; gap: 10px; }
        .ql-main-ws-icon {
          display: inline-flex; align-items: center; justify-content: center;
          width: 36px; height: 36px; border-radius: 8px;
          background: #e8553f; color: #fff; font-size: 16px; font-weight: 700;
        }
        .ql-main-ws-name { font-size: 14px; font-weight: 500; color: #fff; }
        .ql-main-ws-sub { font-size: 10px; color: rgba(255,255,255,0.45); }
        .ql-generate-btn {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.08); color: #fff;
          padding: 6px 12px; border-radius: 8px; border: none; cursor: pointer;
          font-size: 11px;
        }

        .ql-stats-grid {
          display: grid; grid-template-columns: repeat(4, 1fr);
          border-radius: 12px; overflow: hidden;
          background: rgba(255,255,255,0.03);
          box-shadow: 0 0 0 1px rgba(255,255,255,0.05) inset;
          margin-bottom: 12px;
        }
        .ql-stat-cell {
          padding: 12px 10px;
          border-right: 1px solid rgba(255,255,255,0.05);
        }
        .ql-stat-cell:last-child { border-right: none; }
        .ql-stat-value { font-size: 20px; font-weight: 500; color: #fff; }
        .ql-stat-label {
          font-size: 8px; color: rgba(255,255,255,0.35);
          text-transform: uppercase; letter-spacing: 0.1em; margin-top: 2px;
        }
        .ql-stat-sub { font-size: 9px; color: rgba(255,255,255,0.5); margin-top: 2px; }

        .ql-subject-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 8px; margin-bottom: 12px;
        }
        .ql-subject-card {
          border-radius: 8px; padding: 10px;
          background: rgba(255,255,255,0.03);
          box-shadow: 0 0 0 1px rgba(255,255,255,0.05) inset;
        }
        .ql-subject-name { font-size: 11px; color: #fff; font-weight: 500; }
        .ql-subject-meta { font-size: 9px; color: rgba(255,255,255,0.45); margin-top: 2px; }

        .ql-inbox {
          border-radius: 8px; overflow: hidden;
          background: rgba(255,255,255,0.03);
          box-shadow: 0 0 0 1px rgba(255,255,255,0.05) inset;
        }
        .ql-inbox-header, .ql-inbox-row {
          display: grid;
          grid-template-columns: 2fr 0.8fr 0.8fr 0.8fr;
          padding: 8px 10px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          font-size: 10px;
        }
        .ql-inbox-header {
          color: rgba(255,255,255,0.4);
          text-transform: uppercase; letter-spacing: 0.08em;
          font-size: 9px;
        }
        .ql-inbox-row:last-child { border-bottom: none; }
        .ql-inbox-q { color: rgba(255,255,255,0.85); }
        .ql-inbox-vol, .ql-inbox-diff { color: rgba(255,255,255,0.55); }
        .ql-inbox-status { font-weight: 500; }
        .ql-inbox-status.is-drafting { color: rgba(254,188,46,0.8); }
        .ql-inbox-status.is-ready { color: rgba(40,200,64,0.8); }
      `}</style>
    </div>
  )
}
