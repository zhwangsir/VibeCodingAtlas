import { useState, useEffect, useRef } from 'react'

type NavLink = {
  label: string
  href: string
}

const NAV_LINKS: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'Drift AI', href: '#drift-ai' },
  { label: 'FAQ', href: '#faq' },
]

/**
 * Navbar — 顶部居中浮动胶囊导航
 * 白色圆角胶囊 + 品牌 "Drift." + 动画汉堡（→X cubic-bezier(0.77,0,0.175,1) 300ms）
 * 下拉菜单：opacity/scale/translate 过渡，关闭时 pointer-events-none
 *
 * 增强：
 * - Esc 键关闭下拉
 * - 点击外部关闭
 * - 移动端全功能
 * - 键盘可达性 + aria
 */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Esc 关闭 + 外部点击关闭
  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', onClick)
    }
  }, [open])

  return (
    <div
      ref={containerRef}
      className="absolute top-6 left-1/2 -translate-x-1/2 z-50"
    >
      {/* 胶囊 */}
      <div className="bg-white rounded-full shadow-lg flex items-center gap-3 pl-6 pr-2 py-2">
        <span className="text-lg font-bold tracking-tight text-black select-none">
          Drift.
        </span>

        {/* 动画汉堡按钮 */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="drift-nav-dropdown"
          className="relative w-9 h-9 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
        >
          <span className="relative w-4 h-3 block">
            {/* 上线 — 旋转 45° 形成X的一半 */}
            <span
              className="absolute left-0 top-1/2 w-full h-[1.5px] bg-black origin-center"
              style={{
                transform: open ? 'translateY(-50%) rotate(45deg)' : 'translateY(-4px) rotate(0deg)',
                transition: 'transform 300ms cubic-bezier(0.77,0,0.175,1)',
              }}
            />
            {/* 下线 — 旋转 -45° 形成X的另一半 */}
            <span
              className="absolute left-0 top-1/2 w-full h-[1.5px] bg-black origin-center"
              style={{
                transform: open ? 'translateY(-50%) rotate(-45deg)' : 'translateY(4px) rotate(0deg)',
                transition: 'transform 300ms cubic-bezier(0.77,0,0.175,1)',
              }}
            />
          </span>
        </button>
      </div>

      {/* 下拉菜单 */}
      <div
        id="drift-nav-dropdown"
        className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+10px)] bg-white rounded-2xl shadow-lg px-6 py-3 min-w-[180px]"
        style={{
          opacity: open ? 1 : 0,
          transform: open
            ? 'translateX(-50%) translateY(0) scale(1)'
            : 'translateX(-50%) translateY(-8px) scale(0.96)',
          transition: 'opacity 200ms ease-out, transform 200ms cubic-bezier(0.16,1,0.3,1)',
          pointerEvents: open ? 'auto' : 'none',
        }}
        role="menu"
      >
        <ul className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                role="menuitem"
                className="block px-3 py-2 text-sm font-medium text-black/70 hover:text-black hover:bg-black/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
