/* ============================================================
 *  mėntality — 心理健康平台 Hero(视频背景 + 网格导航)
 *  字体: Inter (@fontsource) + Outfit (Google Fonts)
 *  核心: 12 列网格导航 + 行内眼睛图标胶囊 + 搜索胶囊 + 边角锚点
 *  背景:#EDEEF5;品牌色:#9fff00
 * ============================================================ */
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronUp } from 'lucide-react'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

/* ===== 背景视频 ===== */
const BG_VIDEO =
  '/videos/036591b8-6e92-4760-b94c-a7ea6eef315c.mp4'

/* ===== 桌面导航链接(小写) ===== */
const NAV_LINKS = ['service', 'patient resources', 'about us', 'education center']

/* ============================================================
 *  CloverLogo — 几何花瓣/三叶草 SVG 图标
 * ============================================================ */
function CloverLogo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M14 2c2.2 0 4 1.8 4 4 0 .8-.2 1.5-.6 2.2.7-.4 1.4-.6 2.2-.6 2.2 0 4 1.8 4 4s-1.8 4-4 4c-.8 0-1.5-.2-2.2-.6.4.7.6 1.4.6 2.2 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-.8.2-1.5.6-2.2-.7.4-1.4.6-2.2.6-2.2 0-4-1.8-4-4s1.8-4 4-4c.8 0 1.5.2 2.2.6-.4-.7-.6-1.4-.6-2.2 0-2.2 1.8-4 4-4z"
        fill="#1a1a1a"
      />
      <circle cx="14" cy="14" r="2.4" fill="#9fff00" />
    </svg>
  )
}

/* ============================================================
 *  MentalityHero — 主入口
 * ============================================================ */
export default function MentalityHero() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div
      data-theme="mentality"
      className="mentality-root relative min-h-[110vh] sm:min-h-[140vh] w-full flex flex-col items-center justify-start overflow-hidden selection:bg-[#9fff00] selection:text-black"
      style={{ background: '#EDEEF5' }}
    >
      {/* ===== 背景视频容器 ===== */}
      <div className="absolute top-[15vh] sm:top-[20vh] left-0 w-full h-[95vh] sm:h-[120vh] z-0 pointer-events-none">
        <video
          src={BG_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-100"
        />
        {/* 顶部渐变融合 */}
        <div className="absolute top-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-b from-[#EDEEF5] to-transparent" />
        {/* 底部渐变融合 */}
        <div className="absolute bottom-0 left-0 w-full h-32 sm:h-48 bg-gradient-to-t from-[#EDEEF5] to-transparent" />
      </div>

      {/* ===== Navbar (12 列网格) ===== */}
      <nav className="fixed top-0 left-0 w-full z-50 py-6 md:py-10 bg-gradient-to-b from-[#f1f1f1]/80 to-transparent backdrop-blur-[2px]">
        <div className="grid grid-cols-12 max-w-7xl mx-auto px-6 md:px-8 items-center">
          {/* 左侧 Logo (Cols 1-3) */}
          <div className="col-span-6 md:col-span-3 flex items-center gap-2.5">
            <CloverLogo />
            <span className="mt-logo">mėntality</span>
          </div>

          {/* 中间导航 (Cols 4-9, 桌面) */}
          <div className="hidden md:flex col-span-6 items-center justify-center gap-7">
            {NAV_LINKS.map((link) => (
              <a key={link} href="#" className="mt-nav-link">
                {link}
              </a>
            ))}
          </div>

          {/* 右侧 (Cols 10-12) */}
          <div className="col-span-6 md:col-span-3 flex items-center justify-end gap-3">
            <a href="#" className="mt-find-help hidden sm:inline-flex">
              find help
            </a>
            <a href="#" className="hidden sm:inline-flex items-center mt-cta-started">
              get started →
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center md:hidden mt-menu-toggle"
              onClick={() => setDrawerOpen((v) => !v)}
            >
              {drawerOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* 移动端下拉 */}
        <AnimatePresence>
          {drawerOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden mt-6 px-6"
            >
              <div className="flex flex-col gap-3 pb-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="mt-nav-link text-base"
                    onClick={() => setDrawerOpen(false)}
                  >
                    {link}
                  </a>
                ))}
                <a
                  href="#"
                  className="inline-flex items-center mt-cta-started self-start mt-2"
                  onClick={() => setDrawerOpen(false)}
                >
                  get started →
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ===== Hero 内容 ===== */}
      <div className="max-w-7xl w-full mx-auto px-8 md:px-16 lg:px-20 relative z-10 grid grid-cols-12 gap-x-4 md:gap-x-8 mt-[140px] md:mt-[180px]">
        <div className="col-span-12 md:col-span-10 md:col-start-2">
          {/* 主标题 */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-headline"
          >
            <span className="mt-text-dark">Remix: Mentality offers</span>{' '}
            <span className="mt-text-muted">information</span>
            <br />
            <span className="mt-text-muted">and resources to help you manage</span>
            <br />
            <span className="mt-text-muted">your</span>{' '}
            <span className="mt-eye-pill">
              <span className="mt-eye-dot" />
            </span>{' '}
            <span className="mt-text-muted">mental wellbeing.</span>
          </motion.h1>

          {/* 搜索胶囊 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 md:mt-9 w-full max-w-xl"
          >
            <div className="mt-search-pill">
              <input
                type="text"
                placeholder="Ask me anything..."
                className="mt-search-input"
              />
              <button type="submit" className="mt-search-submit" aria-label="Ask">
                <ChevronUp className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== 边角锚点 ===== */}
      {/* 右中:语言切换 */}
      <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-6 lg:right-8 z-20">
        <div className="mt-lang-pill">
          <span className="mt-lang-active">pl</span>
          <span className="mt-lang-sep">—</span>
          <span className="mt-lang-muted">en</span>
        </div>
      </div>

      {/* 左下:2024 */}
      <div className="absolute bottom-6 left-6 md:left-10 z-20 mt-corner-text">2024</div>

      {/* 右下:mental health tools */}
      <div className="absolute bottom-6 right-6 md:right-10 z-20 mt-corner-text text-right">
        mental health tools
      </div>

      {/* ===== 内联样式 ===== */}
      <style>{`
        @import url('/mentality/fonts.css');

        .mentality-root {
          font-family: 'Inter', sans-serif;
          color: #1a1a1a;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Logo */
        .mt-logo {
          font-family: 'Outfit', sans-serif;
          font-weight: 600; font-size: 22px;
          letter-spacing: -0.02em; color: #1a1a1a;
        }

        /* 导航链接 */
        .mt-nav-link {
          font-family: 'Inter', sans-serif;
          font-size: 13px; font-weight: 400;
          color: #1a1a1a; text-decoration: none;
          text-transform: lowercase;
          transition: opacity 0.2s ease;
        }
        .mt-nav-link:hover { opacity: 0.6; }

        .mt-find-help {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #1a1a1a;
          text-decoration: underline; text-underline-offset: 4px;
          text-transform: lowercase;
        }

        .mt-cta-started {
          font-family: 'Inter', sans-serif;
          font-size: 13px; font-weight: 500;
          background: #1a1a1a; color: #fff;
          padding: 9px 16px; border-radius: 9999px;
          text-decoration: none; text-transform: lowercase;
          transition: all 0.2s ease;
        }
        .mt-cta-started:hover {
          background: #000;
          box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        }

        .mt-menu-toggle {
          width: 38px; height: 38px; border-radius: 9999px;
          background: #1a1a1a; color: #fff; border: none; cursor: pointer;
        }

        /* 主标题 */
        .mt-headline {
          font-family: 'Outfit', sans-serif;
          font-weight: 500;
          font-size: clamp(28px, 5vw, 56px);
          line-height: 1.08; letter-spacing: -0.025em;
        }
        .mt-text-dark { color: #1a1a1a; }
        .mt-text-muted { color: #8e8e8e; }

        /* 眼睛胶囊 (PROMPT: w-[16px] md:w-[42px] lg:w-[62px]) */
        .mt-eye-pill {
          display: inline-flex; align-items: center; justify-content: center;
          width: 16px; height: 16px;
          border: 2px solid #1a1a1a;
          border-radius: 9999px;
          vertical-align: middle;
          margin: 0 4px;
          position: relative; top: -1px;
          transition: width 0.3s ease, height 0.3s ease;
        }
        .mt-eye-dot {
          width: 8px; height: 8px;
          border-radius: 9999px; background: #1a1a1a;
        }
        @media (min-width: 768px) {
          .mt-eye-pill { width: 42px; height: 22px; }
        }
        @media (min-width: 1024px) {
          .mt-eye-pill { width: 62px; height: 26px; }
        }

        /* 搜索胶囊 */
        .mt-search-pill {
          display: flex; align-items: center; gap: 8px;
          background: #fff; border-radius: 6px;
          border: 1px solid rgba(0,0,0,0.05);
          padding: 6px 6px 6px 16px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
        }
        .mt-search-input {
          flex: 1; background: transparent; border: none; outline: none;
          font-family: 'Inter', sans-serif; font-size: 15px; color: #1a1a1a;
          padding: 8px 0;
        }
        .mt-search-input::placeholder { color: #8e8e8e; }
        .mt-search-submit {
          display: inline-flex; align-items: center; justify-content: center;
          width: 36px; height: 36px; border-radius: 9999px;
          background: #1a1a1a; color: #fff; border: none; cursor: pointer;
          transition: all 0.2s ease;
        }
        .mt-search-submit:hover { background: #000; transform: scale(1.06); }

        /* 边角文本 */
        .mt-corner-text {
          font-family: 'Inter', sans-serif;
          font-size: 11px; font-weight: 400;
          color: #8e8e8e; letter-spacing: 0.02em;
          text-transform: lowercase;
        }

        /* 语言切换胶囊 */
        .mt-lang-pill {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(0,0,0,0.05);
          padding: 7px 12px; border-radius: 9999px;
          font-family: 'Inter', sans-serif; font-size: 11px;
        }
        .mt-lang-active { color: #1a1a1a; font-weight: 500; }
        .mt-lang-sep { color: #c1c1c1; }
        .mt-lang-muted { color: #8e8e8e; }
      `}</style>
    </div>
  )
}
