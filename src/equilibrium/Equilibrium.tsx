/* ============================================================
 *  Equilibrium — 液态玻璃健康伴侣 Hero
 *  基于 26.md:循环背景视频 + 液态玻璃导航胶囊 + 底部对齐内容
 *  字体:Geist(全局 @fontsource)
 *  Tech:React + TS + Tailwind + lucide-react
 * ============================================================ */
import { useState } from 'react'
import { ChevronDown, Infinity as InfinityIcon, Menu, X } from 'lucide-react'

/* ===== 背景视频(本地,原 CloudFront 已下载) ===== */
const BG_VIDEO = '/videos/7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4'

/* ===== 导航链接 ===== */
const NAV_LINKS = [
  { label: 'Home', active: true },
  { label: 'Wellness', dropdown: true },
  { label: 'Routine' },
  { label: 'Our Team' },
]

/* ============================================================
 *  Equilibrium — 主入口
 * ============================================================ */
export default function Equilibrium() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div
      data-theme="equilibrium"
      className="relative w-full h-screen overflow-hidden"
      style={{ fontFamily: 'Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
    >
      <style>{`
        [data-theme='equilibrium'] .liquid-glass {
          background: rgba(255,255,255,0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: none;
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
          position: relative;
          overflow: hidden;
        }
        [data-theme='equilibrium'] .liquid-glass::before {
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
      `}</style>

      {/* ===== 全屏循环背景视频 ===== */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={BG_VIDEO}
      />

      {/* ===== 导航栏 ===== */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-5 sm:px-8 py-5">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-medium text-base">
          <InfinityIcon size={22} strokeWidth={1.5} />
          <span>Equilibrium</span>
        </div>

        {/* 中间导航胶囊(桌面) */}
        <div className="hidden md:flex liquid-glass items-center gap-1 rounded-xl px-2 py-2">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              type="button"
              className={`flex items-center gap-0.5 px-3 py-1.5 rounded-md text-sm transition-colors ${
                link.active
                  ? 'bg-white/15 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
              {link.dropdown && <ChevronDown size={13} className="mt-px" />}
            </button>
          ))}
        </div>

        {/* 右侧 CTA(桌面) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            className="liquid-glass text-white text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/5 transition-colors"
          >
            Log in
          </button>
          <button
            type="button"
            className="bg-white text-black text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/90 transition-colors"
          >
            Begin Now
          </button>
        </div>

        {/* 移动端汉堡按钮 */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden liquid-glass text-white p-2 rounded-lg"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* ===== 移动端菜单 ===== */}
      {menuOpen && (
        <div className="absolute top-[72px] left-4 right-4 z-30 md:hidden liquid-glass rounded-2xl p-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              type="button"
              className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm ${
                link.active ? 'bg-white/15 text-white' : 'text-white/70'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              <span>{link.label}</span>
              {link.dropdown && <ChevronDown size={14} />}
            </button>
          ))}
          <div className="flex gap-2 mt-2 pt-3 border-t border-white/10">
            <button
              type="button"
              className="flex-1 liquid-glass text-white text-sm font-medium px-4 py-2.5 rounded-full"
            >
              Log in
            </button>
            <button
              type="button"
              className="flex-1 bg-white text-black text-sm font-medium px-4 py-2.5 rounded-full"
            >
              Begin Now
            </button>
          </div>
        </div>
      )}

      {/* ===== Hero 内容(左下) ===== */}
      <div className="absolute bottom-0 left-0 z-20 px-6 sm:px-12 pb-10 sm:pb-16 max-w-2xl">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight tracking-tight mb-4">
          Live Better, Feel Whole Every Day
        </h1>
        <p className="text-white/60 text-sm leading-relaxed mb-7 max-w-md">
          Take charge of how you feel with a companion built for your
          journey—build routines, follow your growth, and unlock tailored
          insights for a steadier, more vibrant life each day.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="bg-white text-black text-sm sm:text-base font-medium px-6 sm:px-7 py-3 rounded-full hover:bg-white/90 transition-colors"
          >
            Start Today
          </button>
          <button
            type="button"
            className="liquid-glass text-white text-sm sm:text-base font-medium px-6 sm:px-7 py-3 rounded-full hover:bg-white/5 transition-colors"
          >
            Discover How
          </button>
        </div>
      </div>
    </div>
  )
}
