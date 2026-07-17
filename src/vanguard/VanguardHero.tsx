import { useState, useEffect } from 'react'
import { ArrowUpRight, Award, Crown, X } from 'lucide-react'

const HERO_VIDEO =
  '/videos/df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4'

const NAV_LINKS = ['Projects', 'Studio', 'Offerings', 'Inquire'] as const

const STATS: { value: string; label: string }[] = [
  { value: '250+', label: 'Brands Transformed' },
  { value: '95%', label: 'Client Retention' },
  { value: '10+', label: 'Years in the Game' },
]

/**
 * VanguardHero — 创意机构全屏 hero 落地页
 * 单文件组件：Navbar + Mobile Menu Overlay + Hero Content
 *
 * - 全屏视频背景（autoPlay muted loop playsInline object-cover）
 * - 字体：FSP DEMO PODIUM Sharp（品牌 + 标题，.font-podium）+ Inter（正文）
 * - 入场动画：staggered animate-fade-up（0/0.2/0.4/0.6/0.8s）
 * - 移动菜单：fixed inset-0 + bg-black/95 backdrop-blur + staggered entrance
 *
 * 增强：
 * - Esc 键关闭移动菜单
 * - 菜单打开时锁定 body 滚动
 * - 键盘可达性（aria-expanded/label）
 * - prefers-reduced-motion 已在 index.css 中处理
 */
export default function VanguardHero() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Esc 关闭 + body 滚动锁定
  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [menuOpen])

  return (
    <div
      data-theme="vanguard"
      className="relative h-screen w-full overflow-hidden bg-black"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* 背景视频 */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={HERO_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* 暗化叠加 — 让文字可读 */}
      <div
        className="absolute inset-0 bg-black/40"
        aria-hidden="true"
      />

      {/* Navbar */}
      <nav className="relative z-30 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 lg:py-7">
        {/* 品牌 */}
        <span className="font-podium text-white font-bold uppercase text-2xl sm:text-3xl tracking-wider select-none">
          VANGUARD
        </span>

        {/* 中部导航（md+） */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-12">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="font-inter text-sm text-white/80 tracking-widest uppercase hover:text-white transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* 右侧 — GET IN TOUCH（md+） */}
        <a
          href="#inquire"
          className="hidden md:inline-flex items-center gap-2 border border-white/30 hover:border-white/60 hover:bg-white/10 transition-colors px-6 py-3 text-xs tracking-widest uppercase text-white font-inter"
        >
          GET IN TOUCH
          <ArrowUpRight size={14} strokeWidth={2} />
        </a>

        {/* 右侧 — 汉堡（移动端） */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="vanguard-mobile-menu"
          className="md:hidden flex flex-col justify-center items-end space-y-1.5 p-2 -mr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
        >
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-4 h-0.5 bg-white" />
        </button>
      </nav>

      {/* 移动菜单 Overlay */}
      <div
        id="vanguard-mobile-menu"
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-sm md:hidden flex flex-col transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* 顶部行 — 品牌 + 关闭 */}
        <div className="flex items-center justify-between px-6 py-5">
          <span className="font-podium text-white font-bold uppercase text-2xl tracking-wider select-none">
            VANGUARD
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 -mr-2 text-white hover:text-white/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
          >
            <X size={28} strokeWidth={2} />
          </button>
        </div>

        {/* 居中链接 */}
        <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-podium text-white uppercase text-4xl sm:text-5xl tracking-wider transition-all duration-500"
              style={{
                transitionDelay: `${i * 80 + 100}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              {link}
            </a>
          ))}

          {/* GET IN TOUCH 按钮 */}
          <a
            href="#inquire"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center gap-2 border border-white/30 hover:border-white/60 hover:bg-white/10 transition-colors px-6 py-3 text-xs tracking-widest uppercase text-white font-inter transition-all duration-500"
            style={{
              transitionDelay: `${NAV_LINKS.length * 80 + 100}ms`,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            GET IN TOUCH
            <ArrowUpRight size={14} strokeWidth={2} />
          </a>
        </div>
      </div>

      {/* Hero 内容 — 垂直居中、左对齐（absolute inset-0 相对整个视口居中，避免被 Navbar 挤压下移） */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 sm:px-10 lg:px-16 pb-16">
        {/* 1. Tagline */}
        <div className="animate-fade-up mb-6 lg:mb-8 flex items-center gap-3">
          <Crown className="w-4 h-4 text-white/70" strokeWidth={2} />
          <span className="font-inter text-white/70 text-xs sm:text-sm tracking-[0.3em] uppercase">
            World-Class Digital Collective
          </span>
        </div>

        {/* 2. 主标题 */}
        <h1 className="animate-fade-up-delay-1 font-podium text-white uppercase leading-[0.92] tracking-tight">
          {['Design.', 'Disrupt.', 'Conquer.'].map((line) => (
            <span
              key={line}
              className="block"
              style={{ fontSize: 'clamp(2.8rem, min(8vw, 12.5vh), 7rem)' }}
            >
              {line}
            </span>
          ))}
        </h1>

        {/* 3. 副文本 */}
        <p className="animate-fade-up-delay-2 mt-6 lg:mt-8 text-white/70 text-sm sm:text-base font-inter leading-relaxed max-w-md">
          We build fierce brand identities
          <br />
          that don&apos;t just turn heads —{' '}
          <span className="font-bold text-white">they lead.</span>
        </p>

        {/* 4. CTA 行 */}
        <div className="animate-fade-up-delay-3 mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
          {/* SEE OUR WORK 黑色按钮 */}
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-black hover:bg-neutral-900 transition-colors px-5 sm:px-7 py-3 sm:py-4 text-[11px] sm:text-xs tracking-widest uppercase text-white font-inter"
          >
            SEE OUR WORK
            <ArrowUpRight
              size={14}
              strokeWidth={2}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          {/* Award 徽章（移动端隐藏） */}
          <div className="hidden sm:flex items-center gap-3">
            <Award className="w-8 h-8 text-white/50" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="font-inter text-white/60 text-xs tracking-wider uppercase">
                Top-Rated
              </span>
              <span className="font-inter text-white/60 text-xs tracking-wider uppercase">
                Brand Studio
              </span>
            </div>
          </div>
        </div>

        {/* 5. 统计行 */}
        <div className="animate-fade-up-delay-4 mt-8 sm:mt-10 lg:mt-14 flex flex-wrap gap-6 sm:gap-12 lg:gap-16">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-white/50 text-[9px] sm:text-xs tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
