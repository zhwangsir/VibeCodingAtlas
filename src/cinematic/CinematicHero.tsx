/* ============================================================
 *  Cinematic — 电影/流媒体全屏 Hero
 *  字体:Inter(已在 index.html 加载)
 *  配色:纯黑背景 + 白色文字 + 灰色副标题 + 全局 .liquid-glass 类
 *  核心:固定背景视频 + 底部 backdrop-blur-xl 蒙版 + blurFadeUp 入场
 * ============================================================ */
import { useState } from 'react'
import {
  Search,
  User,
  Menu,
  X,
  Star,
  Clock,
  Calendar,
  Play,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

/* ===== 背景视频 URL(本地) ===== */
const BG_VIDEO = '/videos/4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4'

/* ===== 导航链接 ===== */
const NAV_LINKS = [
  'Movies',
  "TV Series",
  "Editor's Pick",
  'Interviews',
  'User Reviews',
]

/* ============================================================
 *  Navbar — 顶部导航栏
 *  左:logo / 中:nav 链接(桌面端)/ 右:Search + User + hamburger
 * ============================================================ */
function Navbar({ onMenuToggle }: { onMenuToggle: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggle = () => {
    setMenuOpen((v) => !v)
    onMenuToggle()
  }

  return (
    <nav
      className="relative z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 md:py-6"
    >
      {/* 左:logo */}
      <div className="h-8 md:h-10 flex items-center">
        <span
          className="animate-blur-fade-up text-xl md:text-2xl font-semibold tracking-tight text-white"
          style={{ animationDelay: '0ms' }}
        >
          CINEMATIC
        </span>
      </div>

      {/* 中:nav 链接(桌面端,lg+) */}
      <div className="hidden lg:flex items-center gap-8">
        {NAV_LINKS.map((link, i) => (
          <a
            key={link}
            href="#"
            className="animate-blur-fade-up text-sm text-white hover:text-gray-300 transition-colors"
            style={{ animationDelay: `${100 + i * 50}ms` }}
          >
            {link}
          </a>
        ))}
      </div>

      {/* 右:Search + User(桌面端 sm+) + hamburger(移动端) */}
      <div className="flex items-center gap-3">
        {/* Search 按钮(sm+) */}
        <button
          type="button"
          aria-label="Search"
          className="animate-blur-fade-up hidden sm:flex liquid-glass rounded-full items-center gap-2 px-4 md:px-6 py-2 text-sm text-white"
          style={{ animationDelay: '350ms' }}
        >
          <Search size={18} />
          <span>Search</span>
        </button>

        {/* User 按钮(sm+) */}
        <button
          type="button"
          aria-label="Profile"
          className="animate-blur-fade-up hidden sm:flex liquid-glass w-10 h-10 rounded-full items-center justify-center text-white"
          style={{ animationDelay: '400ms' }}
        >
          <User size={18} />
        </button>

        {/* Hamburger(lg 以下显示) */}
        <button
          type="button"
          onClick={toggle}
          aria-label="Toggle menu"
          className="animate-blur-fade-up lg:hidden liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-white"
          style={{ animationDelay: '350ms' }}
        >
          <div className="relative w-5 h-5">
            <Menu
              size={20}
              className="absolute inset-0 m-auto transition-all duration-500 ease-out"
              style={{
                transform: menuOpen
                  ? 'rotate(180deg) scale(50%)'
                  : 'rotate(0) scale(100%)',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <X
              size={20}
              className="absolute inset-0 m-auto transition-all duration-500 ease-out"
              style={{
                transform: menuOpen
                  ? 'rotate(0) scale(100%)'
                  : 'rotate(-180deg) scale(50%)',
                opacity: menuOpen ? 1 : 0,
              }}
            />
          </div>
        </button>
      </div>
    </nav>
  )
}

/* ============================================================
 *  MobileMenu — 移动端下拉菜单
 *  绝对定位 top-[72px] z-40,slide-down + 链接错位入场
 * ============================================================ */
function MobileMenu({ open }: { open: boolean }) {
  return (
    <div
      className={`absolute top-[72px] left-0 right-0 z-40 transition-all duration-500 ease-out ${
        open
          ? 'translate-y-0 opacity-100'
          : '-translate-y-4 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-gray-900/95 backdrop-blur-lg border-t border-b border-gray-800 shadow-2xl">
        <div className="px-4 py-3 flex flex-col">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href="#"
              className="py-3 px-3 rounded-lg text-white hover:bg-gray-800/50 transition-colors"
              style={{
                transform: open ? 'translateX(0)' : 'translateX(-20px)',
                opacity: open ? 1 : 0,
                transition: 'transform 500ms ease-out, opacity 500ms ease-out',
                transitionDelay: `${i * 50}ms`,
              }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* sm 以下额外显示 Search + Profile */}
        <div className="sm:hidden px-4 py-4 border-t border-gray-800 flex items-center gap-3">
          <button
            type="button"
            className="flex-1 liquid-glass rounded-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm text-white"
          >
            <Search size={18} />
            <span>Search</span>
          </button>
          <button
            type="button"
            aria-label="Profile"
            className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-white"
          >
            <User size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}

/* ============================================================
 *  HeroContent — 底部主内容(metadata + 标题 + 描述 + CTA)
 * ============================================================ */
function HeroContent() {
  return (
    <div className="relative z-10 flex-1 flex flex-col justify-end px-4 sm:px-6 md:px-12 pb-8 md:pb-16">
      <div className="flex flex-col md:flex-row items-end gap-8">
        {/* 左侧 */}
        <div className="flex-1">
          {/* Metadata 行 */}
          <div
            className="animate-blur-fade-up flex flex-wrap items-center gap-3 sm:gap-6 mb-6 md:mb-8 text-xs sm:text-sm text-white"
            style={{ animationDelay: '300ms' }}
          >
            <span className="flex items-center gap-2">
              <Star size={16} fill="white" className="sm:w-5 sm:h-5" />
              <span className="font-medium">8.7/10 IMDB</span>
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              <span>132 min</span>
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              <span>April, 2025</span>
            </span>
          </div>

          {/* 标题 */}
          <h1
            className="animate-blur-fade-up text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-4 md:mb-6"
            style={{ letterSpacing: '-0.04em', animationDelay: '400ms' }}
          >
            Step Through. Work Smarter.
          </h1>

          {/* 描述 */}
          <p
            className="animate-blur-fade-up text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-12 max-w-2xl"
            style={{ animationDelay: '500ms' }}
          >
            A voyage through forgotten realms, where past and future intertwine.
          </p>

          {/* CTA 按钮 */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <button
              type="button"
              className="animate-blur-fade-up bg-white text-black rounded-full font-medium px-6 sm:px-8 py-2.5 sm:py-3 flex items-center gap-2 hover:bg-gray-200 transition-colors"
              style={{ animationDelay: '600ms' }}
            >
              <Play size={18} fill="black" />
              <span>Watch Now</span>
            </button>
            <button
              type="button"
              className="animate-blur-fade-up liquid-glass text-white rounded-full font-medium px-6 sm:px-8 py-2.5 sm:py-3"
              style={{ animationDelay: '700ms' }}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* 右侧导航箭头 */}
        <div className="flex gap-3 sm:gap-4 md:flex-none">
          <button
            type="button"
            aria-label="Previous"
            className="animate-blur-fade-up liquid-glass text-white rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center gap-2"
            style={{ animationDelay: '800ms' }}
          >
            <ChevronLeft size={18} />
            <span className="hidden sm:inline">Previous</span>
          </button>
          <button
            type="button"
            aria-label="Next"
            className="animate-blur-fade-up liquid-glass text-white rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center gap-2"
            style={{ animationDelay: '900ms' }}
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}

/* ============================================================
 *  CinematicHero — 主入口
 * ============================================================ */
export default function CinematicHero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div data-theme="cinematic" className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* 1. 固定背景视频(z-0) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
        src={BG_VIDEO}
      />

      {/* 2. 底部 blur 蒙版(z-1)— 仅底部模糊,无暗色叠加 */}
      <div
        className="fixed inset-0 pointer-events-none backdrop-blur-xl"
        style={{
          zIndex: 1,
          maskImage: 'linear-gradient(to top, black 0%, transparent 45%)',
          WebkitMaskImage:
            'linear-gradient(to top, black 0%, transparent 45%)',
        }}
        aria-hidden="true"
      />

      {/* 3. 前景内容容器(z-10+) */}
      <div className="relative h-full w-full flex flex-col" style={{ zIndex: 10 }}>
        <Navbar onMenuToggle={() => setMenuOpen((v) => !v)} />
        <MobileMenu open={menuOpen} />
        <HeroContent />
      </div>
    </div>
  )
}
