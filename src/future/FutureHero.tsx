/* ============================================================
 *  Future — 全屏视频背景 Hero(酒店预订主题)
 *  字体:Manrope(UI)/ Cabin(标签按钮)/ Instrument Serif(标题)/ Inter(正文)
 *  配色:紫色 #7b39fc + 深紫 #2b2344 + 白色文字
 *  核心:全屏背景视频(无遮罩)+ glassmorphism 标签 + Instrument Serif 标题
 * ============================================================ */
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import '@fontsource/inter/400.css'
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'
import '@fontsource/manrope/400.css'
import '@fontsource/manrope/500.css'
import '@fontsource/manrope/600.css'
import '@fontsource/manrope/700.css'
import '@fontsource/cabin/400.css'
import '@fontsource/cabin/500.css'
import '@fontsource/cabin/600.css'

const BG_VIDEO = '/videos/d87182fb-b0af-4273-84d1-c6fd17d6bf0f.mp4'

const NAV_LINKS = [
  { label: 'Home', hasDropdown: false },
  { label: 'Services', hasDropdown: true },
  { label: 'Reviews', hasDropdown: false },
  { label: 'Contact us', hasDropdown: false },
]

/** Future logo — 抽象几何形状 */
function FutureLogo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M1.04356 6.35771L13.6437 0.666504L26.2438 6.35771L13.6437 12.0489L1.04356 6.35771Z"
        fill="white"
      />
      <path
        d="M1.04356 14.4286L13.6437 8.73737L26.2438 14.4286L13.6437 20.1198L1.04356 14.4286Z"
        fill="white"
        fillOpacity="0.7"
      />
      <path
        d="M1.04356 22.4999L13.6437 16.8087L26.2438 22.4999L13.6437 27.3332L1.04356 22.4999Z"
        fill="white"
        fillOpacity="0.4"
      />
    </svg>
  )
}

export default function FutureHero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div
      data-theme="future"
      className="future-root relative min-h-screen w-full overflow-hidden bg-[#0a0a0a]"
    >
      <style>{`
        .future-root { font-family: 'Inter', sans-serif; }
        .future-root .font-manrope { font-family: 'Manrope', sans-serif; }
        .future-root .font-cabin { font-family: 'Cabin', sans-serif; }
        .future-root .font-instrument { font-family: 'Instrument Serif', serif; }
      `}</style>

      {/* 1. 全屏背景视频 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src={BG_VIDEO}
      />

      {/* 2. 顶部导航 */}
      <nav className="future-nav relative z-20 flex w-full items-center justify-between px-6 py-[16px] lg:px-[120px]">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <FutureLogo />
          <span className="font-manrope text-[18px] font-semibold tracking-tight text-white">
            Future
          </span>
        </div>

        {/* 桌面端导航 */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href="#"
              className="font-manrope flex items-center gap-1 text-[14px] font-medium text-white opacity-100 transition-opacity hover:opacity-80"
            >
              {link.label}
              {link.hasDropdown && <ChevronDown size={14} className="text-white" />}
            </a>
          ))}
        </div>

        {/* 桌面端按钮 */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            className="font-manrope rounded-[8px] border border-[#d4d4d4] bg-white px-5 py-2 text-[14px] font-semibold text-[#171717] transition-opacity hover:opacity-90"
          >
            Sign In
          </button>
          <button
            type="button"
            className="font-manrope rounded-[8px] bg-[#7b39fc] px-5 py-2 text-[14px] font-semibold text-[#fafafa] shadow-[0_4px_14px_rgba(123,57,252,0.4)] transition-opacity hover:opacity-90"
          >
            Get Started
          </button>
        </div>

        {/* 移动端菜单按钮 */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="text-white lg:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* 移动端全屏菜单 */}
      {menuOpen && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-6 bg-black lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="font-manrope flex items-center gap-1 text-[20px] font-medium text-white"
            >
              {link.label}
              {link.hasDropdown && <ChevronDown size={18} className="text-white" />}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <button
              type="button"
              className="font-manrope rounded-[8px] border border-[#d4d4d4] bg-white px-6 py-2.5 text-[14px] font-semibold text-[#171717]"
            >
              Sign In
            </button>
            <button
              type="button"
              className="font-manrope rounded-[8px] bg-[#7b39fc] px-6 py-2.5 text-[14px] font-semibold text-[#fafafa]"
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      {/* 3. Hero 主体内容 */}
      <div className="future-hero relative z-10 mt-32 flex flex-col items-center px-6 text-center">
        {/* 标签胶囊 */}
        <div
          className="mb-8 flex h-[38px] items-center gap-2 rounded-[10px] px-3 backdrop-blur-md"
          style={{
            background: 'rgba(85,80,110,0.4)',
            border: '1px solid rgba(164,132,215,0.5)',
          }}
        >
          <span className="font-cabin rounded-[6px] bg-[#7b39fc] px-2 py-0.5 text-[12px] font-medium text-white">
            New
          </span>
          <span className="font-cabin text-[14px] font-medium text-white">
            Say Hello to Datacore v3.2
          </span>
        </div>

        {/* 标题 */}
        <h1 className="font-instrument max-w-[1100px] text-5xl font-normal leading-[1.1] text-white sm:text-6xl lg:text-[96px]">
          Book your perfect stay instantly{' '}
          <em className="italic">and</em> hassle-free
        </h1>

        {/* 副文本 */}
        <p className="mt-6 max-w-[662px] text-[18px] font-normal leading-[1.5] text-white/70">
          Discover handpicked hotels, resorts, and stays across your favorite
          destinations. Enjoy exclusive deals, fast booking, and 24/7 support.
        </p>

        {/* CTA 按钮组 */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            className="font-cabin rounded-[10px] bg-[#7b39fc] px-7 py-3.5 text-[16px] font-medium text-white transition-all hover:bg-[#8c4dff]"
          >
            Book a Free Demo
          </button>
          <button
            type="button"
            className="font-cabin rounded-[10px] bg-[#2b2344] px-7 py-3.5 text-[16px] font-medium text-[#f6f7f9] transition-all hover:bg-[#3a3158]"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  )
}
