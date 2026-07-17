import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const VIDEOS = [
  {
    src: '/videos/0992a171-d3c6-4978-8213-0ec5df8b6d63.mp4',
    label: 'Golden Hour',
  },
  {
    src: '/videos/dd05b805-ea0f-40b2-8c52-332b88502592.mp4',
    label: 'Still Water',
  },
  {
    src: '/videos/df7202bf-bd80-4b2b-bbc6-1f09ba2870e9.mp4',
    label: 'Deep Woods',
  },
  {
    src: '/videos/4cac5234-3573-464e-a5b7-76b94b8a7d61.mp4',
    label: 'Quiet Dawn',
  },
]

const OVERLAY_PNG = '/lumora/overlay.png'

const NAV_LINKS = ['How It Works', 'Features', 'Pricing', 'Community']
const STATS = ['60+ Deep Sessions', '12,000+ Creators', '4.8 User Satisfaction', 'Intentional-First Design']

const SYSTEM_FONT = { fontFamily: 'system-ui, sans-serif' }

/**
 * LumoraHero — 正念/专注应用电影感 hero
 *
 * - 4 视频堆叠交叉淡入淡出（1000ms ease-in-out，1s 冷却避免连击）
 * - PNG 透明叠加层（train-bob 3s 浮动 + scale(1.03) 防边缘）
 * - Navbar：左 Lumora logo + 右 liquid-glass 胶囊（4 链接 + Get Started） / 移动汉堡
 * - Hero 内容：badge + 双行标题 + 副文本 + email 输入 + 视频切换器
 * - Deep Woods（index 2）激活时 hero 内容转暗色 #182C41，700ms 过渡
 * - 底部统计：4 项 + | 分隔符，text-white/70
 */
export default function LumoraHero() {
  const [activeVideo, setActiveVideo] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // 切换视频：1000ms 冷却
  const handleSwitch = (idx: number) => {
    if (idx === activeVideo || isTransitioning) return
    setActiveVideo(idx)
    setIsTransitioning(true)
    setTimeout(() => setIsTransitioning(false), 1000)
  }

  // 菜单打开锁定 body 滚动
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Esc 关闭菜单
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Deep Woods 暗色模式（第 3 个视频，index 2）
  const isDarkMode = activeVideo === 2
  const heroTextColor = isDarkMode ? '#182C41' : '#ffffff'
  const heroTextOpacity = isDarkMode ? '1' : '1'

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black" data-theme="lumora">
      {/* 视频堆叠层 */}
      {VIDEOS.map((video, i) => (
        <video
          key={i}
          src={video.src}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === activeVideo ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />
      ))}

      {/* PNG 透明叠加层（train-bob 浮动） */}
      <img
        src={OVERLAY_PNG}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-[1] lumora-bob"
      />

      {/* 内容层 */}
      <div className="relative z-[2] flex flex-col h-full px-6 sm:px-8 lg:px-12 py-6 sm:py-8">
        {/* Navbar */}
        <nav className="flex items-center justify-between w-full">
          <a
            href="#"
            className="text-white italic text-xl sm:text-2xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Lumora
          </a>

          {/* desktop 胶囊 */}
          <div className="hidden md:flex items-center liquid-glass rounded-full px-2 py-1.5 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/90 hover:text-white text-sm px-3 py-1.5 transition-colors"
                style={SYSTEM_FONT}
              >
                {link}
              </a>
            ))}
            <button
              type="button"
              className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium ml-1"
              style={SYSTEM_FONT}
            >
              Get Started
            </button>
          </div>

          {/* mobile 汉堡 */}
          <button
            type="button"
            className="md:hidden liquid-glass rounded-full w-11 h-11 flex items-center justify-center relative"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="relative w-5 h-5">
              <Menu
                size={20}
                className="absolute inset-0 m-auto text-white transition-all duration-300"
                style={{
                  transform: menuOpen ? 'rotate(90deg) scale(0.75)' : 'rotate(0) scale(1)',
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <X
                size={20}
                className="absolute inset-0 m-auto text-white transition-all duration-300"
                style={{
                  transform: menuOpen ? 'rotate(0) scale(1)' : 'rotate(-90deg) scale(0.75)',
                  opacity: menuOpen ? 1 : 0,
                }}
              />
            </span>
          </button>
        </nav>

        {/* Hero 内容（居中）— 压缩纵向间距，保证 633px 矮视口下切换器/统计不被挤出 h-screen 容器 */}
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto pt-2">
          {/* Badge */}
          <div
            className="liquid-glass rounded-full px-4 py-2 text-sm mb-4 transition-colors duration-700"
            style={{ color: heroTextColor, ...SYSTEM_FONT }}
          >
            Over 10,000 minds already finding their clarity
          </div>

          {/* 标题 */}
          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] max-w-4xl mb-4 transition-colors duration-700"
            style={{ color: heroTextColor, opacity: heroTextOpacity }}
          >
            Clarity in an Endlessly
            <br />
            Noisy Universe
          </h1>

          {/* 副文本 */}
          <p
            className="max-w-xl leading-relaxed text-base sm:text-lg mb-5 transition-colors duration-700"
            style={{ color: heroTextColor, ...SYSTEM_FONT }}
          >
            Rise above the chaos of pings, infinite scrolling, and relentless demands. Discover how
            to protect your presence and create with intention.
          </p>

          {/* Email 输入 */}
          <div
            className="liquid-glass rounded-full flex items-center gap-2 p-1.5 max-w-[320px] sm:max-w-sm w-full mb-5"
            style={SYSTEM_FONT}
          >
            <input
              type="email"
              placeholder="Your Best Email"
              className="bg-transparent flex-1 px-4 py-2 text-sm text-white placeholder:text-white/60 outline-none min-w-0"
              style={{ color: heroTextColor }}
            />
            <button
              type="button"
              className="bg-white text-black px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap"
            >
              Get Early Access
            </button>
          </div>

          {/* 视频切换器 */}
          <div
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 transition-colors duration-700"
            style={SYSTEM_FONT}
          >
            {VIDEOS.map((video, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSwitch(i)}
                disabled={isTransitioning}
                className={`relative pb-1 text-xs sm:text-sm border-b-2 ${
                  i === activeVideo ? 'opacity-100' : 'opacity-50 hover:opacity-80'
                }`}
                style={{
                  color: heroTextColor,
                  borderColor: i === activeVideo ? heroTextColor : 'transparent',
                  transition: 'color 700ms, border-color 700ms, opacity 300ms',
                }}
              >
                {video.label}
              </button>
            ))}
          </div>
        </div>

        {/* 底部统计 */}
        <div
          className="hidden md:flex items-center justify-center gap-6 text-white/70 text-xs sm:text-sm pt-2"
          style={SYSTEM_FONT}
        >
          {STATS.map((stat, i) => (
            <span key={stat} className="flex items-center gap-6">
              {i > 0 && <span className="text-white/30">|</span>}
              {stat}
            </span>
          ))}
        </div>
      </div>

      {/* 移动菜单 Overlay */}
      <div
        className="md:hidden fixed inset-0 z-50"
        style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500"
          style={{ opacity: menuOpen ? 1 : 0 }}
          onClick={() => setMenuOpen(false)}
        />
        <div className="relative h-full flex flex-col items-center justify-center gap-6">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-white text-3xl"
              style={{
                fontFamily: 'system-ui, sans-serif',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
                transition:
                  'opacity 500ms cubic-bezier(0.4,0,0.2,1), transform 500ms cubic-bezier(0.4,0,0.2,1)',
                transitionDelay: menuOpen ? `${100 + i * 50}ms` : '0ms',
              }}
            >
              {link}
            </a>
          ))}
          <button
            type="button"
            className="bg-white text-black px-8 py-3 rounded-full text-base font-medium mt-4"
            style={{
              fontFamily: 'system-ui, sans-serif',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'scale(1)' : 'scale(0.9)',
              transition:
                'opacity 500ms cubic-bezier(0.4,0,0.2,1), transform 500ms cubic-bezier(0.4,0,0.2,1)',
              transitionDelay: menuOpen ? `${100 + NAV_LINKS.length * 50}ms` : '0ms',
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
