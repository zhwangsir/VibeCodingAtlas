/* ============================================================
 *  Flowpath — SaaS 产品全屏 Hero
 *  字体:Helvetica Now Text (db.onlinewebfonts.com)
 *  核心:背景视频 + 桌面 hover 下拉菜单 + 移动菜单 + liquid-glass 按钮
 * ============================================================ */
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

/* ===== 背景视频 URL ===== */
const BG_VIDEO =
  '/videos/1ec3dd1c-d627-44fb-ab20-6e1fce41b0d5.mp4'

/* ===== 导航数据 ===== */
type NavItem = {
  label: string
  items?: string[]
}

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Product',
    items: ['Connections', 'Workflows', 'Insights'],
  },
  {
    label: 'Solutions',
    items: ['Guides', 'Use cases', 'API reference'],
  },
  {
    label: 'About',
    items: ['Our story', 'Open roles', 'Reach us'],
  },
  {
    label: 'Plans',
  },
]

/* ============================================================
 *  Logo — 双重叠菱形 SVG
 * ============================================================ */
function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        {/* 外层菱形 0.9 opacity */}
        <path
          d="M14 1L27 14L14 27L1 14L14 1Z"
          fill="white"
          fillOpacity="0.9"
        />
        {/* 内层菱形 0.5 opacity */}
        <path
          d="M14 7L21 14L14 21L7 14L14 7Z"
          fill="white"
          fillOpacity="0.5"
        />
      </svg>
      <span className="text-lg sm:text-xl font-medium tracking-tight text-white">
        flowpath
      </span>
    </div>
  )
}

/* ============================================================
 *  DesktopNav — 桌面导航(hover 下拉)
 * ============================================================ */
function DesktopNav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <div className="hidden md:flex items-center gap-1">
      {NAV_ITEMS.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => item.items && setOpenDropdown(item.label)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button
            type="button"
            className="flex items-center gap-1 text-white/90 hover:text-white text-sm font-medium px-3 py-2 transition-colors"
          >
            {item.label}
            {item.items && (
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  openDropdown === item.label ? 'rotate-180' : 'rotate-0'
                }`}
              />
            )}
          </button>

          {/* 下拉菜单 */}
          {item.items && openDropdown === item.label && (
            <div className="!absolute top-full left-0 liquid-glass rounded-xl py-3 px-2 min-w-[160px] shadow-xl animate-dropdown">
              {item.items.map((sub) => (
                <a
                  key={sub}
                  href="#"
                  className="block text-white/80 hover:text-white text-sm rounded-lg hover:bg-white/5 px-3 py-2 transition-colors"
                >
                  {sub}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

/* ============================================================
 *  DesktopCTA — 桌面右侧按钮
 * ============================================================ */
function DesktopCTA() {
  return (
    <div className="hidden md:flex items-center gap-4">
      <a
        href="#"
        className="text-white/90 hover:text-white text-sm font-medium transition-colors"
      >
        Log in
      </a>
      <a
        href="#"
        className="liquid-glass rounded-full px-5 py-2 text-white text-sm font-medium hover:bg-white/10 transition-colors"
      >
        Try it free
      </a>
    </div>
  )
}

/* ============================================================
 *  MobileMenuButton — 移动 hamburger(Menu ↔ X 动画)
 * ============================================================ */
function MobileMenuButton({
  open,
  onToggle,
}: {
  open: boolean
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle menu"
      className="relative flex h-10 w-10 items-center justify-center text-white md:hidden"
    >
      <Menu
        size={22}
        className={`absolute transition-all duration-300 ${
          open ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
        }`}
      />
      <X
        size={22}
        className={`absolute transition-all duration-300 ${
          open ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
        }`}
      />
    </button>
  )
}

/* ============================================================
 *  MobileMenu — 移动菜单(滑入)
 * ============================================================ */
function MobileMenu({ open }: { open: boolean }) {
  return (
    <div
      className={`md:hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        open
          ? 'mt-3 opacity-100 translate-y-0 pointer-events-auto'
          : '-mt-4 opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      <div className="bg-[#2C221C]/95 backdrop-blur-xl rounded-2xl p-6">
        <div className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="flex flex-col">
              <a
                href="#"
                className="text-white text-base font-medium py-2"
              >
                {item.label}
              </a>
              {item.items && (
                <div className="flex flex-col pl-4 mb-1">
                  {item.items.map((sub) => (
                    <a
                      key={sub}
                      href="#"
                      className="text-white/70 hover:text-white text-sm py-1.5 transition-colors"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 底部 Log in + Try it free */}
        <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
          <a
            href="#"
            className="text-white/90 hover:text-white text-sm font-medium transition-colors"
          >
            Log in
          </a>
          <a
            href="#"
            className="liquid-glass rounded-full px-5 py-2 text-white text-sm font-medium text-center"
          >
            Try it free
          </a>
        </div>
      </div>
    </div>
  )
}

/* ============================================================
 *  FlowpathHero — 主入口
 * ============================================================ */
export default function FlowpathHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <section
      data-theme="flowpath"
      className="relative h-screen w-full overflow-hidden flex flex-col"
    >
      {/* ===== 背景视频 ===== */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src={BG_VIDEO}
      />
      {/* 暗色叠加 */}
      <div className="absolute inset-0 bg-black/10" />

      {/* ===== 前景内容 ===== */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Navbar */}
        <nav className="px-5 sm:px-6 md:px-12 lg:px-16 py-4 sm:py-5">
          <div className="flex items-center justify-between">
            <Logo />
            <DesktopNav />
            <div className="flex items-center gap-3">
              <DesktopCTA />
              <MobileMenuButton
                open={mobileMenuOpen}
                onToggle={() => setMobileMenuOpen((v) => !v)}
              />
            </div>
          </div>

          {/* 移动菜单 */}
          <MobileMenu open={mobileMenuOpen} />
        </nav>

        {/* Hero 内容 */}
        <div className="flex-1 flex items-start justify-center pt-16 sm:pt-20 md:pt-24 px-5 sm:px-6 md:px-12 lg:px-16">
          <div className="text-center max-w-3xl">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-[-0.02em]">
              Bridge the
              <br />
              gaps. <span className="text-white/60">Ditch the</span>
              <br />
              <span className="text-white/60">grindwork.</span>
            </h1>

            <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto mt-6 sm:mt-8">
              Flowpath unifies your complete wellness tools, so your crew spends less energy plugging gaps and more on real progress.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <a
                href="#"
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-gray-900 text-sm font-semibold rounded-full hover:bg-white/90 transition-colors"
              >
                Begin your journey
              </a>
              <a
                href="#"
                className="px-5 sm:px-6 py-2.5 sm:py-3 liquid-glass rounded-full text-white text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                See it live
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
