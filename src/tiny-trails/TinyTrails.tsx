/* ============================================================
 *  TinyTrails — 儿童品牌 404 错误页
 *  字体:Inter(400-900)
 *  配色:#FF8233 -> #FDAC55 渐变 + #F16524 强调色
 *  核心:巨大 "404" 文字 + 椭圆遮罩 + 中心 mix-blend-darken 视频 + 移动菜单滑入
 * ============================================================ */
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ArrowLeft } from 'lucide-react'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import '@fontsource/inter/900.css'

const VIDEO_URL = '/videos/b1332b69-2e69-4302-8dbc-40f86846afbd.mp4'

const NAV_LINKS = ['About Us', 'Programs', 'Reviews', 'FAQ', 'Contacts']

function TinyTrailsLogo({ small = false }: { small?: boolean }) {
  return (
    <div className="flex items-center">
      <div className={`grid grid-cols-2 gap-0.5 ${small ? '' : ''}`}>
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`rounded-full bg-white ${small ? 'w-2 h-2' : 'w-2.5 h-2.5 sm:w-3 sm:h-3'}`}
          />
        ))}
      </div>
      <span className={`ml-1 font-bold text-white ${small ? 'text-base' : 'text-lg sm:text-xl'}`}>
        TinyTrails
      </span>
    </div>
  )
}

export default function TinyTrails() {
  const [menuOpen, setMenuOpen] = useState(false)
  const textRef = useRef<HTMLDivElement>(null)
  const [scaleY, setScaleY] = useState(1)

  // 计算 "404" 文字的动态 Y 缩放
  useEffect(() => {
    const compute = () => {
      const el = textRef.current
      if (!el) return
      const h = el.offsetHeight
      if (h > 0) {
        setScaleY((window.innerHeight / h) * 1.4)
      }
    }
    compute()
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [])

  // 锁定 body 滚动
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

  return (
    <div
      data-theme="tiny-trails"
      className="tinytrails-root relative w-full h-screen overflow-hidden flex flex-col"
      style={{ background: 'linear-gradient(to bottom, #FF8233 0%, #FDAC55 100%)' }}
    >
      <style>{`
        .tinytrails-root, .tinytrails-root * {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      {/* ===== Background "404" + oval layer ===== */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.8,
          maskImage: 'linear-gradient(to bottom, black 40%, transparent 95%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 95%)',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            ref={textRef}
            className="text-white font-black leading-none tracking-tighter whitespace-nowrap"
            style={{
              fontSize: 'clamp(200px, 48vw, 800px)',
              transform: `scale(1.15, ${scaleY * 1.4})`,
              transformOrigin: 'center',
            }}
          >
            404
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="tt-404-oval rounded-full bg-white"
            style={{
              height: '22vh',
              width: 'clamp(120px, 20vw, 400px)',
              transform: `scaleY(${scaleY * 1.4})`,
              transformOrigin: 'center',
            }}
          />
        </div>
        <style>{`
          @media (min-width: 640px) {
            .tinytrails-root .tt-404-oval { height: 26vh !important; }
          }
          @media (min-width: 768px) {
            .tinytrails-root .tt-404-oval { height: 50vh !important; }
          }
        `}</style>
      </div>

      {/* ===== Navigation bar ===== */}
      <nav className="relative z-20 flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 sm:py-5">
        <TinyTrailsLogo />

        <div className="hidden md:flex gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href="#"
              className="px-4 py-1.5 text-sm font-medium rounded-full bg-white transition-colors hover:opacity-90"
              style={{ color: '#F16524' }}
            >
              {l}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-white transition-colors hover:opacity-90"
          style={{ background: '#F16524' }}
        >
          <Menu size={16} className="w-4 h-4" />
          <span className="text-sm font-medium hidden sm:inline">Menu</span>
        </button>
      </nav>

      {/* ===== Center video ===== */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ marginTop: 'calc(-6vh - 40px)' }}
      >
        <div className="w-[120vw] h-[85vh] sm:w-[70vw] sm:h-[70vh] md:w-[62vw] md:h-[78vh]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain pointer-events-none mix-blend-darken"
            src={VIDEO_URL}
          />
        </div>
      </div>

      {/* ===== Bottom content ===== */}
      <div className="relative z-30 mt-auto pb-8 sm:pb-16 flex flex-col items-center text-center px-4">
        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4">
          Oops, something went wrong!
        </h2>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-white font-semibold text-sm sm:text-base transition-all hover:scale-105 hover:shadow-lg"
          style={{ background: '#F16524' }}
        >
          <ArrowLeft size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
          Back to Home
        </a>
      </div>

      {/* ===== Mobile menu overlay ===== */}
      <div
        className={`fixed inset-0 z-50 ${menuOpen ? 'visible' : 'invisible'}`}
        style={{ transition: menuOpen ? 'visibility 0s linear 0s' : 'visibility 0s linear 500ms' }}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Panel */}
        <div
          className="absolute top-0 right-0 h-full w-full sm:w-[380px] flex flex-col p-6"
          style={{
            background: 'linear-gradient(135deg, #FF6B1A 0%, #FF9642 100%)',
            transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <TinyTrailsLogo small />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              <X size={20} className="w-5 h-5" />
            </button>
          </div>

          {/* Menu items (staggered) */}
          <div className="flex-1 flex flex-col gap-3 justify-center">
            {NAV_LINKS.map((l, i) => (
              <a
                key={l}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="px-6 py-4 text-lg font-semibold text-white rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 300ms ease, transform 300ms ease`,
                  transitionDelay: menuOpen ? `${150 + i * 60}ms` : '0ms',
                }}
              >
                {l}
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <a
            href="/"
            className="w-full py-4 rounded-full bg-white font-semibold text-base flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
            style={{
              color: '#F16524',
              opacity: menuOpen ? 1 : 0,
              transition: 'opacity 300ms ease',
              transitionDelay: menuOpen ? '450ms' : '0ms',
            }}
          >
            <ArrowLeft size={18} className="w-4 h-4" />
            Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
