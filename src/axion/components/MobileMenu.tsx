import { useEffect } from 'react'
import { ArrowRight, Clock } from 'lucide-react'

const NAV_LINKS = ['Projects', 'Studio', 'Journal', 'Connect']

type MobileMenuProps = {
  open: boolean
  onClose: () => void
  londonTime: string
}

/**
 * MobileMenu — 全屏底部弹出 sheet
 *
 * - fixed inset-0 z-50
 * - 黑色/60 背景 + 白色底部 sheet（rounded-2xl mx-3 mb-3）
 * - slide up：translate-y-full → translate-y-0，duration-500 ease cubic-bezier(0.32,0.72,0,1)
 * - 链接 staggered 入场（这里使用 CSS delay）
 */
export default function MobileMenu({ open, onClose, londonTime }: MobileMenuProps) {
  // body 滚动锁定
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div
      className={`fixed inset-0 z-50 md:hidden transition-opacity duration-500 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* 背景 */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />
      {/* 底部 sheet */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-white rounded-2xl mx-3 mb-3 p-6 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          open ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* 时间徽章 */}
        <div className="flex items-center gap-2 mb-8 text-gray-600">
          <Clock size={14} />
          <span className="text-[13px]">{londonTime} in London</span>
        </div>

        {/* 导航链接 */}
        <nav className="flex flex-col gap-4 mb-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href="#"
              onClick={onClose}
              className="text-[28px] sm:text-[32px] font-medium text-gray-900 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              style={{
                transitionDelay: open ? `${100 + i * 50}ms` : '0ms',
                transform: open ? 'translateY(0)' : 'translateY(16px)',
                opacity: open ? 1 : 0,
              }}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Start a project 按钮 */}
        <button
          type="button"
          className="w-full bg-[#F26522] text-white rounded-full py-3 px-5 flex items-center justify-between transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
          style={{
            transitionDelay: open ? `${100 + NAV_LINKS.length * 50}ms` : '0ms',
            transform: open ? 'scale(1)' : 'scale(0.9)',
            opacity: open ? 1 : 0,
          }}
        >
          <span className="text-[15px] font-medium">Start a project</span>
          <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <ArrowRight size={14} className="text-[#F26522]" />
          </span>
        </button>
      </div>
    </div>
  )
}
