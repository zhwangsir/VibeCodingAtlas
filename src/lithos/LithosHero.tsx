import { useEffect, useRef, useState, useCallback } from 'react'
import { Menu, X } from 'lucide-react'

/* ============================================================
   Lithos — 地质学品牌 Hero
   核心机制：cursor-following spotlight 通过柔和圆形遮罩
   在底图之上揭示第二张图片（灰暗岩石 ⟷ 苔藓花草）。

   实现要点：
   - 遮罩使用固定径向渐变模板 + mask-position 跟随光标，
     每帧仅更新合成层属性，无 canvas/toDataURL 重绘开销。
   - 遮罩挂在不缩放的 wrapper 上；揭示图在内层与底图
     同步 hero-zoom，保证 spotlight 内花草与底图岩石
     轮廓始终对齐，且光圈精确贴合光标。
   - 初始光标位于 (-999,-999)（屏幕外）→ 遮罩全透明，
     首屏仅显示灰暗底图；光标移动后 spotlight 平滑跟随。
   ============================================================ */

const BG_IMAGE_1 = '/images/b0ba8ace-1d1d-4f2c-9a28-1ab84b330680_1280.webp'

const BG_IMAGE_2 = '/images/bba90a12-bf12-459f-91f0-51f237dbaf3b_1280.webp'

const SPOTLIGHT_R = 260

/** 柔和光圈渐变模板 — 与 PROMPT 的 6 段 radial gradient stops 一致 */
const SPOTLIGHT_GRADIENT = `radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.4) 75%, rgba(255,255,255,0.12) 88%, rgba(255,255,255,0) 100%)`

/**
 * RevealLayer — 在底图上方覆盖第二张图片，
 * 仅在光标圆形遮罩范围内可见。
 *
 * 双层结构：
 * - 外层 wrapper：不缩放，承载 mask（mask-position = 视口坐标，
 *   与 clientX/clientY 一一对应， spotlight 精确跟手）。
 * - 内层 image div：hero-zoom 与底图同步缩放，两张图逐像素对齐。
 */
function RevealLayer({
  image,
  cursorX,
  cursorY,
}: {
  image: string
  cursorX: number
  cursorY: number
}) {
  return (
    <div
      className="absolute inset-0 z-30 pointer-events-none"
      style={{
        maskImage: SPOTLIGHT_GRADIENT,
        WebkitMaskImage: SPOTLIGHT_GRADIENT,
        maskSize: `${SPOTLIGHT_R * 2}px ${SPOTLIGHT_R * 2}px`,
        WebkitMaskSize: `${SPOTLIGHT_R * 2}px ${SPOTLIGHT_R * 2}px`,
        maskPosition: `${cursorX - SPOTLIGHT_R}px ${cursorY - SPOTLIGHT_R}px`,
        WebkitMaskPosition: `${cursorX - SPOTLIGHT_R}px ${cursorY - SPOTLIGHT_R}px`,
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
      }}
      aria-hidden="true"
    >
      <div
        className="hero-zoom absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  )
}

/**
 * Logo — Lithos 几何标记（两个三角形组合）
 */
function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="26" height="26" viewBox="0 0 256 256" fill="#ffffff" aria-hidden="true">
        <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z" />
        <path d="M 256 128 L 128 128 L 0 0 L 128 0 Z" />
      </svg>
      <span className="text-white text-2xl font-playfair italic">Lithos</span>
    </div>
  )
}

const NAV_LINKS = ['Course', 'Field Guides', 'Geology', 'Plans', 'Live Tour']

/** 移动端菜单抽屉 */
function MobileDrawer({
  open,
  onClose,
  activeIdx,
  onSelect,
}: {
  open: boolean
  onClose: () => void
  activeIdx: number
  onSelect: (idx: number) => void
}) {
  // Esc 关闭
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <>
      {/* 遮罩 */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] md:hidden transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      {/* 抽屉 */}
      <aside
        id="mobile-drawer"
        className={`fixed top-0 right-0 bottom-0 w-[280px] max-w-[80vw] bg-black/90 backdrop-blur-xl border-l border-white/10 z-[95] md:hidden transition-transform duration-500 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <span className="text-white text-lg font-playfair italic">Menu</span>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-2 -mr-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-full"
            aria-label="Close menu"
            type="button"
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>
        <nav className="flex flex-col p-3" aria-label="Mobile">
          {NAV_LINKS.map((label, idx) => (
            <button
              key={label}
              onClick={() => {
                onSelect(idx)
                onClose()
              }}
              className={`text-left px-4 py-3.5 rounded-xl text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                idx === activeIdx
                  ? 'bg-white/10 text-white'
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`}
              type="button"
            >
              {label}
            </button>
          ))}
        </nav>
        <div className="p-5 mt-auto">
          <button
            className="w-full bg-white text-gray-900 text-sm font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            type="button"
          >
            Sign Up
          </button>
        </div>
      </aside>
    </>
  )
}

export default function LithosHero() {
  // 光标平滑追踪：mouse（原始）→ smooth（lerp 0.1 缓动）
  const mouse = useRef({ x: -999, y: -999 })
  const smooth = useRef({ x: -999, y: -999 })
  const rafRef = useRef<number>(0)
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 })

  // 移动端菜单
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeNav, setActiveNav] = useState(0)

  // 鼠标 + 触摸光标追踪
  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }
    const onTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.current.x = e.touches[0].clientX
        mouse.current.y = e.touches[0].clientY
      }
    }
    window.addEventListener('mousemove', onMouse)
    window.addEventListener('touchmove', onTouch, { passive: true })

    const tick = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1
      setCursorPos({ x: smooth.current.x, y: smooth.current.y })
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('touchmove', onTouch)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  // 菜单打开时禁止 body 滚动
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavSelect = useCallback((idx: number) => {
    setActiveNav(idx)
  }, [])

  return (
    <div
      className="min-h-screen bg-white tracking-[-0.02em]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <section
        className="relative w-full overflow-hidden h-screen bg-black"
        style={{ height: '100dvh' }}
      >
        {/* 1. 底图 — Ken Burns 缓慢缩出 */}
        <div
          className="hero-zoom absolute inset-0 bg-center bg-cover bg-no-repeat z-10"
          style={{ backgroundImage: `url(${BG_IMAGE_1})` }}
        />

        {/* 2. 揭示层 — 第二张图片，光标圆形遮罩内可见（与底图同步缩放） */}
        <RevealLayer image={BG_IMAGE_2} cursorX={cursorPos.x} cursorY={cursorPos.y} />

        {/* 3. 标题 — 居中顶部 */}
        <div className="absolute top-[14%] left-0 right-0 flex flex-col items-center text-center px-5 pointer-events-none z-50">
          <h1 className="text-white leading-[0.95]">
            <span
              className="hero-anim hero-reveal block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl"
              style={{ animationDelay: '0.25s', letterSpacing: '-0.05em' }}
            >
              Layers hold
            </span>
            <span
              className="hero-anim hero-reveal block font-normal text-5xl sm:text-7xl md:text-8xl -mt-1"
              style={{ animationDelay: '0.42s', letterSpacing: '-0.08em' }}
            >
              tales of time
            </span>
          </h1>
        </div>

        {/* 4. 左下段落 */}
        <div
          className="hero-anim hero-fade hidden sm:block absolute bottom-14 left-10 md:left-14 max-w-[260px] z-50"
          style={{ animationDelay: '0.7s' }}
        >
          <p className="text-sm text-white/80 leading-relaxed">
            Every layer of sediment records a chapter of our planet, from ancient seabeds to
            drifting ash, layered across millions of years beneath us.
          </p>
        </div>

        {/* 5. 右下交互区块 + CTA */}
        <div
          className="hero-anim hero-fade absolute bottom-10 sm:bottom-24 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[260px] flex flex-col items-start gap-4 sm:gap-5 z-50"
          style={{ animationDelay: '0.85s' }}
        >
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            Our interactive maps let you peel back the crust to trace how stones, fossils, and deep
            time combine to shape the ground beneath your feet.
          </p>
          <button
            className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-medium px-7 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-[#e8702a]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            type="button"
          >
            Start Digging
          </button>
        </div>

        {/* 导航 — 固定在 hero 之上 */}
        <nav
          className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5"
          aria-label="Primary"
        >
          <Logo />

          {/* 中心胶囊导航 — md 以上显示 */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-2 py-2 items-center gap-1">
            {NAV_LINKS.map((label, idx) => (
              <button
                key={label}
                onClick={() => setActiveNav(idx)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                  idx === activeNav
                    ? 'text-white'
                    : 'text-white/80 hover:bg-white/20 hover:text-white'
                }`}
                type="button"
              >
                {label}
              </button>
            ))}
          </div>

          {/* 右侧桌面 CTA */}
          <button
            className="hidden md:block bg-white text-gray-900 text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            type="button"
          >
            Sign Up
          </button>

          {/* 移动端汉堡按钮 */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white p-2 -mr-2 transition-colors hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-lg"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-drawer"
            type="button"
          >
            <Menu size={24} strokeWidth={2} />
          </button>
        </nav>

        {/* 移动端抽屉 */}
        <MobileDrawer
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          activeIdx={activeNav}
          onSelect={handleNavSelect}
        />
      </section>
    </div>
  )
}
