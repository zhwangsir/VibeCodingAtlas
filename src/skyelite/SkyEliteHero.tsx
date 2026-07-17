import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const HERO_VIDEO_SRC =
  '/videos/e240eb17-6edc-4129-ad9d-98678e3fd238.mp4'

const NAV_LINKS = ['Start', 'Story', 'Rates', 'Benefits', 'FAQ']

/**
 * SkyEliteHero — 高端私人飞机落地页 hero
 *
 * - 视频背景：100vh object-cover，autoPlay muted loop playsInline
 * - Navbar：max-w-7xl 居中，左 SkyElite logo + 中 5 链接 + 右移动汉堡
 * - 移动菜单：dropdown，white/95 + backdrop-blur + rounded + shadow
 * - Hero 内容：-mt-80 上拉，"PRIVATE JETS" 小标签 + 双行重叠标题（"Premium." gray-500 + "Accessible." #202A36 负边距重叠）+ 副文本 + 双 CTA
 *
 * 配色：灰系 + #202A36 深炭灰强调
 * 字体：Inter（400/500/600/700）
 */
export default function SkyEliteHero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div data-theme="skyelite" className="min-h-screen bg-gray-50">
      <section className="relative h-screen overflow-hidden">
        {/* 背景视频 */}
        <video
          src={HERO_VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />

        {/* 内容层 */}
        <div className="relative h-full flex flex-col">
          {/* Navbar */}
          <nav className="max-w-7xl mx-auto w-full px-8 py-6 flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="text-2xl font-semibold text-gray-900"
            >
              SkyElite
            </a>

            {/* 中：desktop 链接 */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-900 hover:text-gray-700 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* 右：mobile 汉堡 */}
            <button
              type="button"
              className="md:hidden text-gray-900"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* 移动菜单 dropdown */}
          {menuOpen && (
            <div className="md:hidden absolute top-20 left-4 right-4 bg-white/95 backdrop-blur rounded-lg shadow-lg py-4 px-6 flex flex-col gap-4 z-50">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-900 hover:text-gray-700 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          )}

          {/* Hero 内容 */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center -mt-80 px-6">
              {/* 小标签 */}
              <p className="text-sm font-semibold text-gray-600 tracking-wider mb-4">
                PRIVATE JETS
              </p>

              {/* 双行重叠标题 */}
              <h1 className="font-normal tracking-tighter leading-none">
                <span className="block text-6xl md:text-7xl lg:text-8xl text-gray-500">
                  Premium.
                </span>
                <span
                  className="block text-6xl md:text-7xl lg:text-8xl"
                  style={{ color: '#202A36', marginTop: '-12px' }}
                >
                  Accessible.
                </span>
              </h1>

              {/* 副文本 */}
              <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto mt-6">
                Your dedication deserves recognition.
              </p>

              {/* 双 CTA */}
              <div className="flex items-center justify-center gap-4">
                <button
                  type="button"
                  className="px-4 py-2 rounded-full bg-gray-300 text-gray-800 font-medium hover:bg-gray-400 transition-colors"
                >
                  Discover
                </button>
                <button
                  type="button"
                  className="px-4 py-2 rounded-full text-white font-medium transition-colors"
                  style={{ backgroundColor: '#202A36' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1a2229'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#202A36'
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
