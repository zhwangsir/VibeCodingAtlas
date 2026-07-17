/* ============================================================
 *  VaultShield — 密码管理器 Hero(全屏视频背景)
 *  字体: Helvetica Now Display Bold (heading) + Inter (@fontsource body)
 *  核心: 自定义 SVG logo + 移动端滑入 sheet + 行内 Lucide 图标
 * ============================================================ */
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRightCircle,
  Zap,
  LockKeyhole,
  Fingerprint,
  Menu,
  X,
} from 'lucide-react'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import '@fontsource/inter/900.css'

/* ===== 背景视频 ===== */
const BG_VIDEO =
  '/videos/8b7edcb6-c64d-4a52-a9ca-879942e122ad.mp4'

/* ===== 导航链接 ===== */
const NAV_LINKS = ['Vault', 'Plans', 'Install', 'News', 'Help']

/* ===== fadeUp 变体(错位 0.15s) ===== */
const fadeUp = (i: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
})

/* ============================================================
 *  VaultLogo — 几何角度 logo(256x256 viewBox)
 * ============================================================ */
function VaultLogo({ size = 32 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      overflow="visible"
      viewBox="0 0 256 256"
      aria-hidden="true"
    >
      <path
        d="M 64 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 L 128 64 L 128 64.5 L 161 32 L 192 0 L 256 0 L 256 64 L 192 128 L 128 128 L 128 192 L 96 223 L 63.5 256 L 0 256 L 0 192 Z M 256 192 L 224 223 L 191.5 256 L 128 256 L 128 192 L 192 128 L 256 128 Z"
        fill="#192837"
      />
    </svg>
  )
}

/* ============================================================
 *  VaultShieldHero — 主入口
 * ============================================================ */
export default function VaultShieldHero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div
      data-theme="vaultshield"
      className="vaultshield-root relative w-full min-h-screen overflow-hidden"
      style={{
        fontFamily: 'var(--vs-font-body)',
        color: 'var(--vs-color-text)',
      }}
    >
      {/* ===== 背景视频 ===== */}
      <video
        src={BG_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* ===== 柔化遮罩(突出文字可读性) ===== */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(120deg, rgba(242,242,238,0.45) 0%, rgba(242,242,238,0.15) 50%, rgba(242,242,238,0.55) 100%)',
        }}
      />

      {/* ===== Navbar ===== */}
      <nav className="relative z-20 mx-auto flex max-w-[1280px] items-center justify-between px-5 sm:px-8 py-4 sm:py-5">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <VaultLogo size={32} />
          <span className="vs-logo-text">VaultShield</span>
        </a>

        {/* 中间链接(桌面) */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className="vs-nav-link">
              {link}
            </a>
          ))}
        </div>

        {/* 右侧按钮(桌面) */}
        <div className="hidden md:flex items-center gap-3">
          <button type="button" className="vs-btn-free">
            Start For Free
          </button>
          <button type="button" className="vs-btn-signin">
            Sign In
          </button>
        </div>

        {/* 移动端汉堡 */}
        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex items-center justify-center md:hidden vs-menu-toggle"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {/* ===== 移动端滑入 sheet ===== */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 vs-sheet-backdrop"
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              key="sheet"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-50 vs-sheet"
              style={{ width: 'min(88vw, 360px)', height: '100dvh' }}
            >
              {/* 头部 */}
              <div className="flex items-center justify-between px-5 py-5">
                <div className="flex items-center gap-2.5">
                  <VaultLogo size={28} />
                  <span className="vs-logo-text text-base">VaultShield</span>
                </div>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="vs-sheet-close"
                  onClick={() => setMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* 分隔线 */}
              <div className="vs-sheet-divider" />

              {/* 链接列表 */}
              <div className="flex flex-col px-5 py-4 gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link}
                    href="#"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.18 + i * 0.07,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="vs-sheet-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>

              {/* 底部 CTA */}
              <div className="mt-auto px-5 pb-8 flex flex-col gap-3">
                <button type="button" className="vs-btn-free w-full justify-center">
                  Start For Free
                </button>
                <button type="button" className="vs-btn-signin w-full justify-center">
                  Sign In
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ===== Hero 内容 ===== */}
      <section
        className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8"
        style={{ paddingTop: 'clamp(40px, 8vw, 72px)' }}
      >
        <div style={{ maxWidth: 560 }}>
          {/* 主标题(行内 Lucide 图标) */}
          <motion.h1
            {...fadeUp(0)}
            className="vs-heading"
            style={{ fontFamily: 'var(--vs-font-heading)' }}
          >
            <Zap
              className="vs-inline-icon"
              size={24}
              style={{ color: '#192837', verticalAlign: 'middle', position: 'relative', top: -2 }}
            />
            Lock Down Your Passwords{' '}
            <LockKeyhole
              className="vs-inline-icon"
              size={24}
              style={{ color: '#192837', verticalAlign: 'middle', position: 'relative', top: -2 }}
            />
            with Ironclad Security{' '}
            <Fingerprint
              className="vs-inline-icon"
              size={24}
              style={{ color: '#192837', verticalAlign: 'middle', position: 'relative', top: -2 }}
            />
          </motion.h1>

          {/* 副标题 */}
          <motion.p
            {...fadeUp(1)}
            className="vs-subtext"
            style={{ fontFamily: 'var(--vs-font-body)' }}
          >
            Zero stress, total control. VaultShield keeps you covered with unbreakable storage,
            one-tap access, and pro-grade tools for your non-stop world.
          </motion.p>

          {/* CTA 按钮 */}
          <motion.button
            {...fadeUp(2)}
            type="button"
            whileHover={{ scale: 1.04, filter: 'brightness(1.1)' }}
            whileTap={{ scale: 0.96 }}
            className="vs-cta"
            style={{ fontFamily: 'var(--vs-font-body)' }}
          >
            <span>Get It Free</span>
            <ArrowRightCircle size={20} />
          </motion.button>
        </div>
      </section>

      {/* ===== 内联样式 ===== */}
      <style>{`
        @import url('/vaultshield/fonts.css');

        .vaultshield-root {
          --vs-font-heading: 'Helvetica Now Display Bold', sans-serif;
          --vs-font-body: 'Inter', sans-serif;
          --vs-color-text: #192837;
          --vs-color-accent: #7342E2;
          --vs-color-login-bg: #F2F2EE;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Logo 文字 */
        .vs-logo-text {
          font-family: var(--vs-font-heading);
          font-size: 20px; letter-spacing: -0.01em; color: #192837;
        }

        /* 导航链接 */
        .vs-nav-link {
          font-family: var(--vs-font-body);
          font-size: 14px; font-weight: 500; color: #192837;
          text-decoration: none; opacity: 0.85;
          transition: opacity 0.2s ease;
        }
        .vs-nav-link:hover { opacity: 1; }

        .vs-btn-free {
          display: inline-flex; align-items: center; justify-content: center; gap: 6px;
          font-family: var(--vs-font-body); font-weight: 500; font-size: 14px;
          background: #7342E2; color: #fff;
          padding: 10px 20px; border-radius: 9999px; border: none; cursor: pointer;
          transition: all 0.2s ease;
        }
        .vs-btn-free:hover { background: #6335c7; }

        .vs-btn-signin {
          display: inline-flex; align-items: center; justify-content: center; gap: 6px;
          font-family: var(--vs-font-body); font-weight: 500; font-size: 14px;
          background: #F2F2EE; color: #192837;
          padding: 10px 20px; border-radius: 9999px; border: none; cursor: pointer;
          transition: all 0.2s ease;
        }
        .vs-btn-signin:hover { background: #e7e6e0; }

        .vs-menu-toggle {
          width: 40px; height: 40px; border-radius: 9999px;
          background: rgba(25,40,55,0.08); color: #192837; border: none; cursor: pointer;
        }

        /* 移动端 sheet */
        .vs-sheet-backdrop {
          background: rgba(25,40,55,0.35);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }
        .vs-sheet {
          background: #CFC8C5;
          box-shadow: -12px 0 48px rgba(25,40,55,0.18);
          display: flex; flex-direction: column;
        }
        .vs-sheet-close {
          display: inline-flex; align-items: center; justify-content: center;
          width: 36px; height: 36px; border-radius: 9999px;
          background: rgba(25,40,55,0.08); color: #192837; border: none; cursor: pointer;
        }
        .vs-sheet-divider {
          height: 1px; background: rgba(25,40,55,0.12); margin: 0 20px;
        }
        .vs-sheet-link {
          font-family: var(--vs-font-body);
          font-size: 18px; font-weight: 500; color: #192837;
          padding: 12px 0; text-decoration: none;
          transition: opacity 0.2s ease;
        }
        .vs-sheet-link:hover { opacity: 0.7; }

        /* 主标题 */
        .vs-heading {
          font-size: clamp(1.65rem, 5vw, 3rem);
          line-height: 1.05; letter-spacing: -0.01em;
          color: #192837; margin-bottom: 24px;
        }
        .vs-inline-icon { display: inline-block; }

        /* 副标题 */
        .vs-subtext {
          font-size: clamp(0.9rem, 2.5vw, 1.1rem);
          line-height: 1.65; opacity: 0.8;
          max-width: 560px; margin-bottom: 32px;
        }

        /* CTA 按钮 */
        .vs-cta {
          display: inline-flex; align-items: center; justify-content: space-between;
          gap: 32px;
          background: #7342E2; color: #fff;
          border-radius: 50px; padding: 17px 24px;
          font-weight: 600; font-size: clamp(0.9rem, 2vw, 1rem);
          box-shadow: 0 4px 24px rgba(115,66,226,0.28);
          min-width: 210px; border: none; cursor: pointer;
        }
      `}</style>
    </div>
  )
}
