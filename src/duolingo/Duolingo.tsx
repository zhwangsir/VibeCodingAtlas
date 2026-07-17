/* ============================================================
 *  Duolingo — 设计系统样式指南页
 *  字体:Nunito(@fontsource) + Feather Bold(本地 /fonts/Feather-Bold.woff2)
 *  配色:绿色 #58CC02 + 蓝色 #1CB0F6 + 深蓝 #100F3E + 红橙金等
 *  核心:8 面板网格(浅色 / 深色交替)+ 颜色卡 / 排版 / 按钮变体 / 卡片 / 组件
 * ============================================================ */
import { useState } from 'react'
import { Flame } from 'lucide-react'
import '@fontsource/nunito/400.css'
import '@fontsource/nunito/500.css'
import '@fontsource/nunito/600.css'
import '@fontsource/nunito/700.css'
import '@fontsource/nunito/800.css'

const LOGO = '/images/duolingo-logo.svg'
const CARD_SPANISH = '/images/duolingo-card-spanish.jpg'
const CARD_FRENCH = '/images/duolingo-card-french.jpg'
const AVATARS = [
  '/images/duolingo-avatar-1.jpg',
  '/images/duolingo-avatar-2.jpg',
  '/images/duolingo-avatar-3.jpg',
]
const FLAGS = {
  spanish: '/images/duolingo-flag-spanish.svg',
  french: '/images/duolingo-flag-french.svg',
  german: '/images/duolingo-flag-german.svg',
  japanese: '/images/duolingo-flag-japanese.svg',
}

const COLORS = [
  { name: 'Green', hex: '#58CC02' },
  { name: 'Green Hover', hex: '#4BB200' },
  { name: 'Blue', hex: '#1CB0F6' },
  { name: 'Dark Blue', hex: '#100F3E' },
  { name: 'Red', hex: '#FF4B4B' },
  { name: 'Orange', hex: '#FF9600' },
  { name: 'Golden', hex: '#FFC800' },
  { name: 'Footer Green', hex: '#4EC604' },
  { name: 'Gray Text', hex: '#4B4B4B' },
  { name: 'Gray Light', hex: '#777777' },
  { name: 'Nav Text', hex: '#AFAFAF' },
  { name: 'Border', hex: '#E5E5E5' },
]

const TYPE_ROWS: {
  size: string
  weight: string
  sample: string
  color: string
  font: 'feather' | 'nunito'
  fontWeight?: number
  lineHeight?: number
  uppercase?: boolean
  letterSpacing?: string
}[] = [
  { size: '48px', weight: 'Feather Bold', sample: 'Display', color: 'var(--green)', font: 'feather' },
  { size: '32px', weight: 'Bold 700', sample: 'Heading One', color: 'var(--gray-text)', font: 'nunito', fontWeight: 700 },
  { size: '28px', weight: 'Feather Bold', sample: 'heading two', color: 'var(--green)', font: 'feather' },
  { size: '18px', weight: 'Medium 500', sample: 'Body text for paragraphs and descriptions with comfortable reading line-height.', color: 'var(--gray-light)', font: 'nunito', fontWeight: 500, lineHeight: 1.6 },
  { size: '14px', weight: 'Bold 700', sample: 'CAPTION LABEL', color: 'var(--nav-text)', font: 'nunito', fontWeight: 700, uppercase: true, letterSpacing: '0.5px' },
  { size: '12px', weight: 'Semi 600', sample: 'Small utility text for metadata and hints', color: 'var(--gray-light)', font: 'nunito', fontWeight: 600 },
]

const NAV_LINKS = ['Colors', 'Type', 'Buttons', 'Cards', 'Components']

function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="duo-section-label" style={{ color: dark ? 'rgba(255,255,255,0.35)' : 'var(--nav-text)' }}>
      <span>{children}</span>
      <span className="duo-section-line" style={{ background: dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)' }} />
    </div>
  )
}

function PrimaryButton({ label, small = false, disabled = false }: { label: string; small?: boolean; disabled?: boolean }) {
  return (
    <button
      type="button"
      disabled={disabled}
      className="duo-btn duo-btn-primary"
      style={{
        height: small ? '36px' : '48px',
        fontSize: small ? '13px' : '15px',
        padding: small ? '0 16px' : '0 24px',
        borderRadius: small ? '10px' : '12px',
        boxShadow: disabled ? 'none' : small ? '0 3px 0 var(--green-shadow)' : '0 4px 0 var(--green-shadow)',
        opacity: disabled ? 0.45 : 1,
        pointerEvents: disabled ? 'none' : 'auto',
      }}
    >
      {label}
    </button>
  )
}

function SecondaryButton({ label, small = false, disabled = false }: { label: string; small?: boolean; disabled?: boolean }) {
  return (
    <button
      type="button"
      disabled={disabled}
      className="duo-btn duo-btn-secondary"
      style={{
        height: small ? '36px' : '48px',
        fontSize: small ? '13px' : '15px',
        padding: small ? '0 16px' : '0 24px',
        borderRadius: small ? '10px' : '12px',
        boxShadow: disabled ? 'none' : small ? '0 3px 0 #CFCFCF' : '0 4px 0 #CFCFCF',
        opacity: disabled ? 0.45 : 1,
        pointerEvents: disabled ? 'none' : 'auto',
      }}
    >
      {label}
    </button>
  )
}

function DangerButton({ label, small = false }: { label: string; small?: boolean }) {
  return (
    <button
      type="button"
      className="duo-btn duo-btn-danger"
      style={{
        height: small ? '36px' : '48px',
        fontSize: small ? '13px' : '15px',
        padding: small ? '0 16px' : '0 24px',
        borderRadius: small ? '10px' : '12px',
        boxShadow: small ? '0 3px 0 #CC3C3C' : '0 4px 0 #CC3C3C',
      }}
    >
      {label}
    </button>
  )
}

function GhostButton({ label }: { label: string }) {
  return (
    <button type="button" className="duo-btn duo-btn-ghost">
      {label}
    </button>
  )
}

/** Toggle 开关 */
function Toggle({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <div className="duo-toggle-row">
      <button
        type="button"
        className="duo-toggle"
        style={{ background: checked ? 'var(--green)' : 'var(--border-color)' }}
        onClick={() => onChange(!checked)}
        aria-pressed={checked}
      >
        <span
          className="duo-toggle-thumb"
          style={{ transform: checked ? 'translateX(20px)' : 'translateX(0)' }}
        />
      </button>
      <span className="duo-toggle-label">{label}</span>
    </div>
  )
}

/** 进度条 */
function ProgressBar({ value, color, dark = false }: { value: number; color: string; dark?: boolean }) {
  return (
    <div className="duo-progress-row">
      <div className="duo-progress-bar" style={{ background: dark ? 'rgba(255,255,255,0.08)' : 'var(--border-color)' }}>
        <div
          className="duo-progress-fill"
          style={{ width: `${value}%`, background: color }}
        />
      </div>
      <span className="duo-progress-value" style={{ color: dark ? 'rgba(255,255,255,0.6)' : 'var(--gray-text)' }}>{value}%</span>
    </div>
  )
}

/** 浅色卡片 */
function LightCard({ tag, tagColor, tagBg, title, desc, footerLeft, footerRight, image }: {
  tag: string; tagColor: string; tagBg: string; title: string; desc: string; footerLeft: string; footerRight: string; image?: string
}) {
  return (
    <div className="duo-card">
      {image && (
        <div className="duo-card-img" style={{ backgroundImage: `url(${image})` }} />
      )}
      <div className="duo-card-body">
        <span className="duo-card-tag" style={{ color: tagColor, background: tagBg }}>{tag}</span>
        <h3 className="duo-card-title">{title}</h3>
        <p className="duo-card-desc">{desc}</p>
      </div>
      <div className="duo-card-footer">
        <span>{footerLeft}</span>
        <a href="#" className="duo-card-action">{footerRight}</a>
      </div>
    </div>
  )
}

export default function Duolingo() {
  const [activeLang, setActiveLang] = useState('Spanish')
  const [soundOn, setSoundOn] = useState(true)
  const [animOn, setAnimOn] = useState(false)

  return (
    <div data-theme="duolingo" className="duo-root">
      <style>{`
        .duo-root {
          --green: rgb(88, 204, 2);
          --green-hover: rgb(75, 178, 0);
          --green-shadow: #61B800;
          --dark-blue: rgb(16, 15, 62);
          --blue: rgb(28, 176, 246);
          --gray-text: rgb(75, 75, 75);
          --gray-light: rgb(119, 119, 119);
          --border-color: rgb(229, 229, 229);
          --nav-text: rgb(175, 175, 175);
          --footer-green: #4EC604;
          --red: #FF4B4B;
          --orange: #FF9600;
          --golden: #FFC800;
          min-height: 100vh;
          background: #fff;
          font-family: 'Nunito', -apple-system, BlinkMacSystemFont, sans-serif;
          color: var(--gray-text);
        }
        .duo-root * { box-sizing: border-box; }
        .duo-root a { color: inherit; text-decoration: none; }
        .duo-font-feather { font-family: 'Feather Bold', 'Nunito', sans-serif; }

        /* ===== Navbar ===== */
        .duo-nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: white;
          border-bottom: 1px solid var(--border-color);
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          max-width: 1440px;
          margin: 0 auto;
        }
        .duo-nav-left { display: flex; align-items: center; gap: 16px; }
        .duo-nav-logo { width: 140px; height: 33px; }
        .duo-nav-divider { width: 1px; height: 24px; background: var(--border-color); }
        .duo-nav-style-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--gray-light);
          font-weight: 700;
        }
        .duo-nav-links { display: flex; gap: 4px; }
        .duo-nav-links a {
          padding: 8px 14px;
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--nav-text);
          border-radius: 8px;
          transition: all 0.2s;
        }
        .duo-nav-links a:hover, .duo-nav-links a.active {
          color: var(--green);
          background: rgba(88, 204, 2, 0.1);
        }

        /* ===== Hero ===== */
        .duo-hero {
          background: linear-gradient(to bottom, rgba(88,204,2,0.12) 0%, white 100%);
          padding: 56px 40px 40px;
          text-align: center;
          max-width: 1440px;
          margin: 0 auto;
        }
        .duo-hero h1 {
          font-family: 'Feather Bold', 'Nunito', sans-serif;
          font-size: 52px;
          color: var(--green);
          text-transform: lowercase;
          margin: 0 0 16px;
          line-height: 1.1;
        }
        .duo-hero p {
          font-size: 17px;
          color: var(--gray-light);
          max-width: 520px;
          margin: 0 auto 28px;
          line-height: 1.5;
        }
        .duo-hero-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* ===== Buttons ===== */
        .duo-btn {
          font-family: inherit;
          font-weight: 700;
          text-transform: uppercase;
          cursor: pointer;
          border: none;
          transition: transform 0.1s, box-shadow 0.1s;
        }
        .duo-btn:active { transform: translateY(4px); box-shadow: none !important; }
        .duo-btn-primary { background: var(--green); color: white; }
        .duo-btn-primary:hover { background: var(--green-hover); }
        .duo-btn-secondary {
          background: transparent;
          color: var(--blue);
          border: 2px solid #CFCFCF;
        }
        .duo-btn-danger { background: var(--red); color: white; }
        .duo-btn-ghost {
          background: transparent;
          color: var(--green);
          padding: 12px 24px;
          font-size: 15px;
          border-radius: 12px;
        }
        .duo-btn-ghost:hover { background: rgba(88, 204, 2, 0.08); }
        .duo-btn-white { background: white; color: var(--dark-blue); }
        .duo-btn-white:hover { background: #c8f040; }

        /* ===== Main Grid ===== */
        .duo-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 1440px;
          margin: 0 auto;
        }
        .duo-panel {
          padding: 36px 40px;
          border-bottom: 1px solid var(--border-color);
          border-right: 1px solid var(--border-color);
        }
        .duo-panel:nth-child(even) { border-right: none; }
        .duo-panel.dark { background: var(--dark-blue); border-color: rgba(255,255,255,0.06); }
        .duo-panel.dark:nth-child(even) { border-right: none; }

        /* ===== Section label ===== */
        .duo-section-label {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 24px;
        }
        .duo-section-line { flex: 1; height: 1px; }

        /* ===== Color palette ===== */
        .duo-color-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 12px;
        }
        .duo-color-item { cursor: default; }
        .duo-color-swatch {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.06);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .duo-color-item:hover .duo-color-swatch {
          transform: scale(1.05);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
        }
        .duo-color-name { font-size: 12px; font-weight: 700; margin-top: 6px; }
        .duo-color-hex { font-size: 10px; font-weight: 600; color: var(--gray-light); }

        /* ===== Typography ===== */
        .duo-type-stack { display: flex; flex-direction: column; gap: 20px; }
        .duo-type-row { display: flex; align-items: baseline; gap: 20px; }
        .duo-type-meta {
          width: 80px;
          flex-shrink: 0;
          text-align: right;
        }
        .duo-type-meta-size { font-size: 11px; font-weight: 700; color: var(--blue); }
        .duo-type-meta-weight { font-size: 10px; color: var(--nav-text); margin-top: 2px; }
        .duo-type-sample { flex: 1; }

        /* ===== Button rows ===== */
        .duo-btn-stack { display: flex; flex-direction: column; gap: 16px; }
        .duo-btn-row { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
        .duo-btn-row-label {
          width: 80px;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--nav-text);
          flex-shrink: 0;
        }

        /* ===== Cards ===== */
        .duo-cards-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .duo-card {
          background: white;
          border: 2px solid var(--border-color);
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .duo-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.08);
        }
        .duo-card.dark {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.08);
        }
        .duo-card-img { height: 120px; background-size: cover; background-position: center; }
        .duo-card-body { padding: 16px; }
        .duo-card-tag {
          display: inline-block;
          padding: 3px 8px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
        }
        .duo-card-title { font-size: 16px; font-weight: 700; margin: 8px 0 6px; color: var(--gray-text); }
        .duo-card.dark .duo-card-title { color: white; }
        .duo-card-desc { font-size: 13px; color: var(--gray-light); line-height: 1.5; }
        .duo-card.dark .duo-card-desc { color: rgba(255,255,255,0.5); }
        .duo-card-footer {
          display: flex;
          justify-content: space-between;
          padding: 12px 16px;
          border-top: 1px solid var(--border-color);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--nav-text);
        }
        .duo-card.dark .duo-card-footer { border-color: rgba(255,255,255,0.08); color: rgba(255,255,255,0.3); }
        .duo-card-action { color: var(--blue); }
        .duo-card-action:hover { opacity: 0.7; }

        /* ===== Components ===== */
        .duo-comp-stack { display: flex; flex-direction: column; gap: 20px; }
        .duo-comp-group-label {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--nav-text);
          margin-bottom: 8px;
        }
        .duo-badges { display: flex; gap: 8px; flex-wrap: wrap; }
        .duo-badge {
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .duo-input-row { display: flex; gap: 12px; align-items: center; }
        .duo-input {
          flex: 1;
          height: 48px;
          padding: 0 16px;
          border: 2px solid var(--border-color);
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          font-family: inherit;
          color: var(--gray-text);
          outline: none;
          transition: border-color 0.2s;
        }
        .duo-input::placeholder { color: var(--nav-text); font-weight: 500; }
        .duo-input:focus { border-color: var(--blue); }

        .duo-toggles { display: flex; gap: 24px; align-items: center; }
        .duo-toggle-row { display: flex; align-items: center; gap: 12px; }
        .duo-toggle {
          width: 48px;
          height: 28px;
          border-radius: 14px;
          border: none;
          cursor: pointer;
          position: relative;
          padding: 0;
          transition: background 0.2s;
        }
        .duo-toggle-thumb {
          position: absolute;
          top: 3px;
          left: 3px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: white;
          box-shadow: 0 1px 3px rgba(0,0,0,0.15);
          transition: transform 0.2s;
        }
        .duo-toggle-label { font-size: 14px; font-weight: 600; }

        .duo-progress-stack { display: flex; flex-direction: column; gap: 10px; }
        .duo-progress-row { display: flex; align-items: center; gap: 12px; }
        .duo-progress-bar {
          flex: 1;
          height: 12px;
          border-radius: 6px;
          overflow: hidden;
        }
        .duo-progress-fill { height: 100%; border-radius: 6px; transition: width 0.6s ease; }
        .duo-progress-value { font-size: 12px; font-weight: 700; width: 32px; text-align: right; }

        .duo-tooltip-row { display: flex; gap: 16px; align-items: center; }
        .duo-tooltip-trigger {
          font-size: 13px;
          font-weight: 700;
          color: var(--green);
          background: rgba(88,204,2,0.08);
          padding: 8px 16px;
          border-radius: 8px;
          cursor: default;
          position: relative;
        }
        .duo-tooltip-trigger:hover .duo-tooltip-bubble { opacity: 1; transform: translateX(-50%) translateY(0); }
        .duo-tooltip-bubble {
          position: absolute;
          bottom: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%) translateY(4px);
          background: var(--dark-blue);
          color: white;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          transition: all 0.2s;
          pointer-events: none;
        }
        .duo-tooltip-bubble::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 5px solid transparent;
          border-top-color: var(--dark-blue);
        }
        .duo-streak {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: rgba(255,150,0,0.1);
          border-radius: 20px;
        }
        .duo-streak-fire { font-size: 18px; }
        .duo-streak-count { font-size: 16px; font-weight: 800; color: var(--orange); }

        /* Dark components */
        .duo-lang-pills { display: flex; gap: 8px; flex-wrap: wrap; }
        .duo-lang-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border: 2px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          cursor: pointer;
          color: rgba(255,255,255,0.7);
          font-size: 13px;
          font-weight: 700;
          transition: all 0.2s;
        }
        .duo-lang-pill:hover { border-color: var(--green); background: rgba(88,204,2,0.08); }
        .duo-lang-pill.active { border-color: var(--green); background: rgba(88,204,2,0.08); color: white; }
        .duo-lang-flag { width: 24px; height: 18px; object-fit: contain; }

        .duo-avatar-group { display: flex; align-items: center; }
        .duo-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid white;
          margin-left: -8px;
          object-fit: cover;
        }
        .duo-avatar:first-child { margin-left: 0; }
        .duo-avatar-count {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 800;
          color: var(--gray-light);
          border: 2px solid white;
          margin-left: -8px;
        }
        .duo-avatar-text { font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.5); margin-left: 12px; }

        /* ===== Responsive ===== */
        @media (max-width: 900px) {
          .duo-grid { grid-template-columns: 1fr; }
          .duo-panel { border-right: none !important; }
          .duo-hero h1 { font-size: 36px; }
          .duo-nav-links { display: none; }
          .duo-cards-grid { grid-template-columns: 1fr; }
          .duo-hero-buttons { flex-direction: column; align-items: center; }
          .duo-hero-buttons button { max-width: 280px; width: 100%; }
        }
        @media (max-width: 600px) {
          .duo-hero { padding: 40px 20px 32px; }
          .duo-hero h1 { font-size: 28px; }
          .duo-panel { padding: 28px 20px; }
          .duo-color-grid { grid-template-columns: repeat(3, 1fr); }
          .duo-type-meta { display: none; }
          .duo-type-row .duo-type-sample { font-size: 32px !important; }
          .duo-btn-row-label { display: none; }
          .duo-input-row { flex-direction: column; }
        }
      `}</style>

      {/* Navbar */}
      <nav className="duo-nav">
        <div className="duo-nav-left">
          <img src={LOGO} alt="Duolingo" className="duo-nav-logo" />
          <div className="duo-nav-divider" />
          <span className="duo-nav-style-label">Style Guide</span>
        </div>
        <div className="duo-nav-links">
          {NAV_LINKS.map((l, i) => (
            <a key={l} href="#" className={i === 0 ? 'active' : ''}>{l}</a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section className="duo-hero">
        <h1 className="duo-font-feather">duolingo design</h1>
        <p>
          A comprehensive visual reference for the Duolingo design system covering colors,
          typography, button variants, cards, and UI components.
        </p>
        <div className="duo-hero-buttons">
          <PrimaryButton label="Get Started" />
          <SecondaryButton label="I Already Have an Account" />
        </div>
      </section>

      {/* Main Grid */}
      <div className="duo-grid">
        {/* Panel 1: Color Palette */}
        <div className="duo-panel">
          <SectionLabel>Color Palette</SectionLabel>
          <div className="duo-color-grid">
            {COLORS.map((c) => (
              <div key={c.name} className="duo-color-item">
                <div className="duo-color-swatch" style={{ background: c.hex }} />
                <div className="duo-color-name">{c.name}</div>
                <div className="duo-color-hex">{c.hex}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Panel 2: Typography */}
        <div className="duo-panel">
          <SectionLabel>Typography</SectionLabel>
          <div className="duo-type-stack">
            {TYPE_ROWS.map((row, i) => (
              <div key={i} className="duo-type-row">
                <div className="duo-type-meta">
                  <div className="duo-type-meta-size">{row.size}</div>
                  <div className="duo-type-meta-weight">{row.weight}</div>
                </div>
                <div
                  className={`duo-type-sample ${row.font === 'feather' ? 'duo-font-feather' : ''}`}
                  style={{
                    fontSize: row.size,
                    color: row.color,
                    fontWeight: row.fontWeight || 400,
                    lineHeight: row.lineHeight || 1.2,
                    textTransform: row.uppercase ? 'uppercase' : 'none',
                    letterSpacing: row.letterSpacing || '0',
                    margin: 0,
                  }}
                >
                  {row.sample}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Panel 3: Button Variants */}
        <div className="duo-panel">
          <SectionLabel>Button Variants</SectionLabel>
          <div className="duo-btn-stack">
            <div className="duo-btn-row">
              <span className="duo-btn-row-label">Primary</span>
              <PrimaryButton label="Get Started" />
              <PrimaryButton label="Small" small />
              <PrimaryButton label="Disabled" disabled />
            </div>
            <div className="duo-btn-row">
              <span className="duo-btn-row-label">Secondary</span>
              <SecondaryButton label="Learn More" />
              <SecondaryButton label="Small" small />
              <SecondaryButton label="Disabled" disabled />
            </div>
            <div className="duo-btn-row">
              <span className="duo-btn-row-label">Danger</span>
              <DangerButton label="Delete" />
              <DangerButton label="Remove" small />
            </div>
            <div className="duo-btn-row">
              <span className="duo-btn-row-label">Ghost</span>
              <GhostButton label="View All" />
            </div>
          </div>
        </div>

        {/* Panel 4: Dark Theme Buttons */}
        <div className="duo-panel dark">
          <SectionLabel dark>Dark Theme Buttons</SectionLabel>
          <div className="duo-btn-stack">
            <div className="duo-btn-row">
              <span className="duo-btn-row-label" style={{ color: 'rgba(255,255,255,0.3)' }}>Primary</span>
              <PrimaryButton label="Get Started" />
              <button
                type="button"
                className="duo-btn duo-btn-white"
                style={{
                  height: '48px',
                  padding: '0 24px',
                  borderRadius: '12px',
                  fontSize: '15px',
                  boxShadow: '0 4px 0 #88879F',
                }}
              >
                Try 1 Week Free
              </button>
            </div>
            <div className="duo-btn-row">
              <span className="duo-btn-row-label" style={{ color: 'rgba(255,255,255,0.3)' }}>Small</span>
              <PrimaryButton label="Get Started" small />
              <button
                type="button"
                className="duo-btn duo-btn-white"
                style={{
                  height: '36px',
                  padding: '0 16px',
                  borderRadius: '10px',
                  fontSize: '13px',
                  boxShadow: '0 3px 0 #88879F',
                }}
              >
                Try 1 Week Free
              </button>
            </div>
          </div>
        </div>

        {/* Panel 5: Cards (light) */}
        <div className="duo-panel">
          <SectionLabel>Cards</SectionLabel>
          <div className="duo-cards-grid">
            <LightCard
              image={CARD_SPANISH}
              tag="NEW"
              tagColor="var(--green)"
              tagBg="rgba(88,204,2,0.1)"
              title="Spanish for Beginners"
              desc="Start your language journey with interactive lessons designed to build fluency."
              footerLeft="12 Units"
              footerRight="Start"
            />
            <LightCard
              image={CARD_FRENCH}
              tag="POPULAR"
              tagColor="var(--blue)"
              tagBg="rgba(28,176,246,0.1)"
              title="French Conversations"
              desc="Practice real-world dialogue and improve pronunciation with native speakers."
              footerLeft="8 Units"
              footerRight="Continue"
            />
          </div>
        </div>

        {/* Panel 6: Dark Theme Cards */}
        <div className="duo-panel dark">
          <SectionLabel dark>Cards</SectionLabel>
          <div className="duo-cards-grid">
            <div className="duo-card dark">
              <div className="duo-card-body">
                <span className="duo-card-tag" style={{ color: 'var(--golden)', background: 'rgba(255,200,0,0.15)' }}>SUPER</span>
                <h3 className="duo-card-title">Unlimited Hearts</h3>
                <p className="duo-card-desc">Keep learning without interruption with Super Duolingo benefits.</p>
              </div>
              <div className="duo-card-footer">
                <span>Premium</span>
                <a href="#" className="duo-card-action">Upgrade</a>
              </div>
            </div>
            <div className="duo-card dark">
              <div className="duo-card-body">
                <span className="duo-card-tag" style={{ color: 'var(--orange)', background: 'rgba(255,150,0,0.15)' }}>PRO</span>
                <h3 className="duo-card-title">Mastery Quizzes</h3>
                <p className="duo-card-desc">Challenge yourself with advanced assessments to test your skill level.</p>
              </div>
              <div className="duo-card-footer">
                <span>Advanced</span>
                <a href="#" className="duo-card-action">Try Now</a>
              </div>
            </div>
          </div>
        </div>

        {/* Panel 7: Components (light) */}
        <div className="duo-panel">
          <SectionLabel>Components</SectionLabel>
          <div className="duo-comp-stack">
            {/* Badges */}
            <div>
              <div className="duo-comp-group-label">Badges</div>
              <div className="duo-badges">
                <span className="duo-badge" style={{ color: 'var(--green)', background: 'rgba(88,204,2,0.12)' }}>Completed</span>
                <span className="duo-badge" style={{ color: 'var(--blue)', background: 'rgba(28,176,246,0.12)' }}>In Progress</span>
                <span className="duo-badge" style={{ color: 'var(--red)', background: 'rgba(255,75,75,0.12)' }}>Failed</span>
                <span className="duo-badge" style={{ color: 'var(--orange)', background: 'rgba(255,150,0,0.12)' }}>Streak</span>
                <span className="duo-badge" style={{ color: '#b8920f', background: 'rgba(255,200,0,0.15)' }}>Premium</span>
              </div>
            </div>

            {/* Input + Button */}
            <div>
              <div className="duo-comp-group-label">Input + Button</div>
              <div className="duo-input-row">
                <input className="duo-input" placeholder="Enter your email" />
                <PrimaryButton label="Subscribe" />
              </div>
            </div>

            {/* Toggle */}
            <div>
              <div className="duo-comp-group-label">Toggle</div>
              <div className="duo-toggles">
                <Toggle checked={soundOn} onChange={setSoundOn} label="Sound effects" />
                <Toggle checked={animOn} onChange={setAnimOn} label="Animations" />
              </div>
            </div>

            {/* Progress */}
            <div>
              <div className="duo-comp-group-label">Progress</div>
              <div className="duo-progress-stack">
                <ProgressBar value={85} color="var(--green)" />
                <ProgressBar value={60} color="var(--blue)" />
                <ProgressBar value={35} color="var(--orange)" />
              </div>
            </div>

            {/* Tooltips & Streak */}
            <div>
              <div className="duo-comp-group-label">Tooltips &amp; Streak</div>
              <div className="duo-tooltip-row">
                <div className="duo-tooltip-trigger">
                  Hover me
                  <span className="duo-tooltip-bubble">You unlocked a new level!</span>
                </div>
                <div className="duo-streak">
                  <Flame className="duo-streak-fire" style={{ width: 18, height: 18, color: 'var(--orange)', fill: 'var(--orange)' }} />
                  <span className="duo-streak-count">42</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Panel 8: Dark Theme Components */}
        <div className="duo-panel dark">
          <SectionLabel dark>Components</SectionLabel>
          <div className="duo-comp-stack">
            {/* Language pills */}
            <div>
              <div className="duo-comp-group-label" style={{ color: 'rgba(255,255,255,0.3)' }}>Language Pills</div>
              <div className="duo-lang-pills">
                {[
                  { name: 'Spanish', flag: FLAGS.spanish },
                  { name: 'French', flag: FLAGS.french },
                  { name: 'German', flag: FLAGS.german },
                  { name: 'Japanese', flag: FLAGS.japanese },
                ].map((lang) => (
                  <button
                    key={lang.name}
                    type="button"
                    className={`duo-lang-pill ${activeLang === lang.name ? 'active' : ''}`}
                    onClick={() => setActiveLang(lang.name)}
                  >
                    <img src={lang.flag} alt="" className="duo-lang-flag" />
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Avatar group */}
            <div>
              <div className="duo-comp-group-label" style={{ color: 'rgba(255,255,255,0.3)' }}>Avatar Group</div>
              <div className="duo-avatar-group">
                {AVATARS.map((a, i) => (
                  <img key={i} src={a} alt="" className="duo-avatar" />
                ))}
                <div className="duo-avatar-count">+5</div>
                <span className="duo-avatar-text">8 learners active</span>
              </div>
            </div>

            {/* Progress (dark) */}
            <div>
              <div className="duo-comp-group-label" style={{ color: 'rgba(255,255,255,0.3)' }}>Progress</div>
              <div className="duo-progress-stack">
                <ProgressBar value={72} color="var(--golden)" dark />
                <ProgressBar value={45} color="var(--green)" dark />
              </div>
            </div>

            {/* Badges (dark) */}
            <div>
              <div className="duo-comp-group-label" style={{ color: 'rgba(255,255,255,0.3)' }}>Badges</div>
              <div className="duo-badges">
                <span className="duo-badge" style={{ color: '#7ADB2E', background: 'rgba(88,204,2,0.15)' }}>Mastered</span>
                <span className="duo-badge" style={{ color: '#4DC4F8', background: 'rgba(28,176,246,0.15)' }}>Review</span>
                <span className="duo-badge" style={{ color: 'var(--golden)', background: 'rgba(255,200,0,0.15)' }}>Crown</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
