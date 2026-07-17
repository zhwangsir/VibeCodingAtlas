import { Clock, Menu, X } from 'lucide-react'
import TextRollButton from './TextRollButton'

const NAV_LINKS = ['Projects', 'Studio', 'Journal', 'Connect']

type NavbarProps = {
  menuOpen: boolean
  setMenuOpen: (v: boolean) => void
  londonTime: string
}

/**
 * Navbar — 胶囊白色导航栏
 *
 * - 外层 max-w-[1440px] p-2 sm:p-3，内部 bg-white rounded-full 5px padding
 * - 左：深色圆形 AX logo + 4 链接（md+）
 * - 右（md+）：Q1 文本（lg+）+ 时钟 + 伦敦时间 + 深色 Book a strategy call 按钮（文本滚动）
 * - 移动：Menu/Close 切换深色圆形按钮
 */
export default function Navbar({ menuOpen, setMenuOpen, londonTime }: NavbarProps) {

  return (
    <div className="relative z-20 w-full max-w-[1440px] mx-auto p-2 sm:p-3">
      <nav className="bg-white rounded-full flex items-center justify-between gap-2 p-1.5 sm:p-[5px]">
        {/* 左：logo + 链接 */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-[10px] sm:text-[11px] font-bold tracking-tight shrink-0"
          >
            AX
          </a>
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* 右：时间 + CTA / 移动菜单按钮 */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Q1 文本（lg+） */}
          <span className="hidden lg:block text-[13px] text-gray-600">
            Taking on projects for Q1 2026
          </span>
          {/* 伦敦时间 */}
          <div className="hidden md:flex items-center gap-1.5">
            <Clock size={14} className="text-gray-600" />
            <span className="text-[13px] text-gray-600">
              {londonTime} in London
            </span>
          </div>
          {/* CTA 按钮（md+） */}
          <div className="hidden md:block">
            <TextRollButton
              className="bg-gray-900 text-white"
              circleClassName="bg-white"
              arrowClassName="text-gray-900"
              textClassName="text-[13px] font-medium text-white"
              circleSize="w-6 h-6"
            >
              Book a strategy call
            </TextRollButton>
          </div>
          {/* 移动菜单按钮 */}
          <button
            type="button"
            className="md:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-900 text-white flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>
    </div>
  )
}
