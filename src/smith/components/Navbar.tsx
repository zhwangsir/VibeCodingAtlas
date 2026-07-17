import { useState, useEffect } from 'react'

const NAV_LINKS = ['Home', 'Work', 'Resume'] as const

/**
 * Navbar — 固定顶部居中浮动胶囊
 * - 内含：logo 圆环（accent-gradient border + JA 字母）+ 分隔线 + 导航链接 + Say hi 按钮
 * - scrollY > 100 时增加 shadow
 * - 链接 active 状态由外部 hash 控制（默认 Home）
 *
 * 增强：
 * - 平滑滚动到锚点（scroll-behavior 由全局 CSS 保证）
 * - 键盘可达性 + aria
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('Home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string) => {
    e.preventDefault()
    setActive(label)
    const target = document.getElementById(label.toLowerCase())
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300 ${
          scrolled ? 'shadow-md shadow-black/10' : ''
        }`}
      >
        {/* Logo — 圆环 + accent gradient border + JA 字母 */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, 'Home')}
          aria-label="Home"
          className="group relative w-9 h-9 rounded-full p-[2px] shrink-0 hover:scale-110 transition-transform duration-300"
        >
          {/* 外环 — accent gradient（hover 反向） */}
          <span
            className="absolute inset-0 rounded-full accent-gradient"
            style={{
              background:
                'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)',
            }}
          />
          {/* 内圆 — bg */}
          <span className="absolute inset-[2px] rounded-full bg-bg flex items-center justify-center">
            <span className="font-display italic text-text-primary text-[13px]">
              JA
            </span>
          </span>
        </a>

        {/* 分隔线 */}
        <span className="hidden sm:block w-px h-5 bg-stroke mx-1" />

        {/* 导航链接 */}
        <ul className="flex items-center">
          {NAV_LINKS.map((label) => {
            const isActive = active === label
            return (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase()}`}
                  onClick={(e) => handleClick(e, label)}
                  className={`block text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors ${
                    isActive
                      ? 'text-text-primary bg-stroke/50'
                      : 'text-muted hover:text-text-primary hover:bg-stroke/50'
                  }`}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* 分隔线 */}
        <span className="hidden sm:block w-px h-5 bg-stroke mx-1" />

        {/* Say hi — hover 时显示 accent gradient border */}
        <a
          href="#contact"
          onClick={(e) => handleClick(e, 'Contact')}
          className="group relative inline-flex items-center rounded-full text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 text-muted hover:text-text-primary transition-colors"
        >
          {/* 外层 accent gradient border（hover 显示） */}
          <span
            className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden="true"
          />
          {/* 内层 bg-surface 圆角 */}
          <span className="relative bg-surface rounded-full backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1">
            Say hi
            <span aria-hidden="true">↗</span>
          </span>
        </a>
      </div>
    </nav>
  )
}
