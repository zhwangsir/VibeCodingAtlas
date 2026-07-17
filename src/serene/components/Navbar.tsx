import { useState, useEffect } from 'react'
import Button from './Button'

const NAV_LINKS = ['About', 'Services', 'Journal', 'Contact']

/**
 * Navbar — 固定顶部导航
 *
 * - 左：Serene 品牌（Dancing Script 手写体）
 * - 中（desktop）：4 链接 gap-12
 * - 右（desktop）：Book a consultation 白胶囊按钮
 * - 右（mobile）：动画汉堡 → X（cubic-bezier(0.22,1,0.36,1)）
 * - 移动菜单：右侧滑入面板 w-[85%] max-w-[340px] + staggered 链接（75ms 间隔，首项 150ms）+ 底部按钮 450ms
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // 菜单打开时锁定 body 滚动
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Esc 关闭
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5">
        {/* 左：品牌（Dancing Script） */}
        <a
          href="#"
          className="font-dancing text-white text-2xl md:text-3xl"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Serene
        </a>

        {/* 中：desktop 导航链接 */}
        <div className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-white/80 hover:text-white text-sm tracking-wide transition-colors font-inter"
            >
              {link}
            </a>
          ))}
        </div>

        {/* 右：desktop 按钮 */}
        <div className="hidden md:block">
          <Button>Book a consultation</Button>
        </div>

        {/* 右：mobile 动画汉堡（3 线 → X，cubic-bezier(0.22,1,0.36,1)） */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 text-white"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="relative block w-6 h-[22px]">
            {/* 上线 — 打开时下移 9px + 旋转 45° */}
            <span
              className="absolute left-0 top-0 block w-full h-[2px] bg-white"
              style={{
                transform: menuOpen ? 'translateY(9px) rotate(45deg)' : 'none',
                transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
              }}
            />
            {/* 中线 — 打开时淡出 + 缩放 0 */}
            <span
              className="absolute left-0 top-[10px] block w-full h-[2px] bg-white origin-center"
              style={{
                opacity: menuOpen ? 0 : 1,
                transform: menuOpen ? 'scaleX(0)' : 'scaleX(1)',
                transition:
                  'opacity 0.3s cubic-bezier(0.22,1,0.36,1), transform 0.5s cubic-bezier(0.22,1,0.36,1)',
              }}
            />
            {/* 下线 — 打开时上移 9px + 旋转 -45° */}
            <span
              className="absolute left-0 top-[20px] block w-full h-[2px] bg-white"
              style={{
                transform: menuOpen ? 'translateY(-9px) rotate(-45deg)' : 'none',
                transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
              }}
            />
          </span>
        </button>
      </nav>

      {/* 移动菜单：右侧滑入面板 */}
      <div
        className="md:hidden fixed inset-0 z-40"
        style={{
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        {/* 背景遮罩 */}
        <div
          className="absolute inset-0 bg-black/40 transition-opacity duration-500"
          style={{ opacity: menuOpen ? 1 : 0 }}
          onClick={() => setMenuOpen(false)}
        />

        {/* 滑入面板 */}
        <div
          className="absolute top-0 right-0 h-full w-[85%] max-w-[340px] bg-[#0a0608]/95 backdrop-blur-xl border-l border-white/10 flex flex-col justify-between py-24 px-8"
          style={{
            transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          {/* 链接列表（staggered 入场） */}
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="text-white text-2xl font-inter tracking-wide"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateX(0)' : 'translateX(30px)',
                  transition: `opacity 0.4s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1)`,
                  transitionDelay: menuOpen ? `${150 + i * 75}ms` : '0ms',
                }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* 底部按钮 */}
          <div
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateX(0)' : 'translateX(30px)',
              transition: 'opacity 0.4s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1)',
              transitionDelay: menuOpen ? '450ms' : '0ms',
            }}
          >
            <Button className="w-full">Book a consultation</Button>
          </div>
        </div>
      </div>
    </>
  )
}
