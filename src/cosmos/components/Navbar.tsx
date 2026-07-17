import { ArrowUpRight } from 'lucide-react'

const NAV_LINKS = ['Home', 'Voyages', 'Worlds', 'Innovation', 'Plan Launch']

/**
 * Navbar — 固定顶部胶囊导航
 *
 * 结构：左 48×48 液态玻璃圆形 logo（斜体 "a"） + 中间 desktop 液态玻璃胶囊（5 链接 + Claim a Spot 白色胶囊按钮） + 右 48×48 不可见占位
 */
export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16">
      <div className="flex items-center justify-between">
        {/* 左：48×48 液态玻璃圆形 logo */}
        <div
          className="liquid-glass flex items-center justify-center"
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '9999px',
          }}
        >
          <span
            className="font-heading italic text-white"
            style={{ fontSize: '24px', lineHeight: 1 }}
          >
            a
          </span>
        </div>

        {/* 中：desktop 液态玻璃胶囊（5 链接 + Claim a Spot） */}
        <div className="hidden md:flex liquid-glass items-center gap-1 px-1.5 py-1.5 rounded-full">
          {NAV_LINKS.map((label) => (
            <a
              key={label}
              href="#"
              className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors rounded-full"
            >
              {label}
            </a>
          ))}
          <button
            type="button"
            className="flex items-center gap-1.5 bg-white text-black rounded-full px-4 py-2 text-sm font-medium font-body whitespace-nowrap hover:bg-white/90 transition-colors"
          >
            Claim a Spot
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        {/* 右：48×48 不可见占位（对称平衡） */}
        <div style={{ width: '48px', height: '48px' }} aria-hidden="true" />
      </div>
    </nav>
  )
}
