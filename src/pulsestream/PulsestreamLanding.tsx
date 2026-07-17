/* ============================================================
 *  Pulsestream — HLS 视频背景 + 液态玻璃导航 + 左下角 Hero
 *  字体: Sora (display) + DM Sans (body)
 *  核心: 全屏视频背景 + 玻璃态导航 + 左下角内容 + 滚动提示
 * ============================================================ */
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowUpRight, ChevronDown, Volume2, VolumeX, Menu, X } from 'lucide-react'
import '@fontsource/sora/400.css'
import '@fontsource/sora/500.css'
import '@fontsource/sora/600.css'
import '@fontsource/sora/700.css'
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/500.css'
import '@fontsource/dm-sans/600.css'

/* ===== 复用现有本地视频(无 CloudFront URL 时复用库存) ===== */
const BG_VIDEO = '/videos/e1deeb12-8fb7-4071-a42a-60779fc64ab6.mp4'

/* ===== 导航链接 ===== */
const NAV_LINKS = ['Platform', 'Solutions', 'Pricing', 'Docs', 'Customers']

/* ===== fadeUp 入场动画 ===== */
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
})

/* ============================================================
 *  PulsestreamLanding — 主入口
 * ============================================================ */
export default function PulsestreamLanding() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [muted, setMuted] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  // 加载后尝试播放(部分浏览器需要显式 play)
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.play().catch(() => {})
  }, [])

  return (
    <div
      data-theme="pulsestream"
      className="pulsestream-root relative min-h-screen w-full overflow-hidden bg-[#06070b] text-white"
    >
      {/* ===== 全屏背景视频 ===== */}
      <video
        ref={videoRef}
        src={BG_VIDEO}
        autoPlay
        muted={muted}
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* ===== 多层渐变(可读性) ===== */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#06070b] via-[#06070b]/55 to-[#06070b]/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#06070b]/85 via-transparent to-[#06070b]/40" />

      {/* ===== 顶部噪点纹理 ===== */}
      <div className="pulsestream-grain" aria-hidden="true" />

      {/* ===== 顶部玻璃态导航 ===== */}
      <header className="absolute top-0 left-0 right-0 z-30 px-6 md:px-10 lg:px-14 pt-5 md:pt-7">
        <nav className="ps-glass mx-auto flex max-w-[1280px] items-center justify-between rounded-full px-4 py-2.5 md:px-6 md:py-3">
          {/* 左侧 Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="ps-logo-mark">
              <span className="ps-logo-dot" />
            </span>
            <span className="ps-logo-text">Pulsestream</span>
          </a>

          {/* 中间导航链接(桌面端) */}
          <ul className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="ps-nav-link">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* 右侧 CTA */}
          <div className="flex items-center gap-2 md:gap-3">
            <a href="#" className="hidden md:inline-flex ps-signin">
              Sign in
            </a>
            <a href="#" className="ps-cta-primary">
              <span>Get started</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            {/* 移动端汉堡 */}
            <button
              type="button"
              aria-label="Toggle menu"
              className="ps-menu-toggle lg:hidden"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* 移动端下拉 */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mx-auto mt-2 max-w-[1280px] ps-glass rounded-2xl p-3 flex flex-col gap-1"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="ps-nav-link px-3 py-2.5"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </header>

      {/* ===== 右上角音频切换 ===== */}
      <button
        type="button"
        aria-label={muted ? 'Unmute' : 'Mute'}
        className="ps-glass ps-audio-toggle"
        onClick={() => setMuted((v) => !v)}
      >
        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>

      {/* ===== 左下角 Hero 内容 ===== */}
      <main className="absolute bottom-0 left-0 right-0 z-20 px-6 md:px-10 lg:px-14 pb-14 md:pb-20 lg:pb-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-2xl">
            {/* 徽章 */}
            <motion.div
              {...fadeUp(0.1)}
              className="ps-glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-7"
            >
              <span className="ps-badge-dot" />
              <span className="ps-badge-text">Now streaming in 4K · Edge-native delivery</span>
            </motion.div>

            {/* 主标题 */}
            <motion.h1
              {...fadeUp(0.25)}
              className="ps-headline"
            >
              Stream the <span className="ps-headline-italic">unrepeatable</span>.
              <br />
              Latency that disappears.
            </motion.h1>

            {/* 副标题 */}
            <motion.p
              {...fadeUp(0.4)}
              className="ps-subtext"
            >
              Pulsestream delivers sub-second live video to every screen on earth — adaptive,
              programmable, and built on a global edge that scales with the moment, not against it.
            </motion.p>

            {/* CTA 按钮 */}
            <motion.div
              {...fadeUp(0.55)}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#" className="ps-hero-cta-primary">
                <Play className="h-4 w-4 fill-current" />
                <span>Start streaming free</span>
              </a>
              <a href="#" className="ps-hero-cta-ghost">
                <span>Watch the keynote</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>

            {/* 底部统计 */}
            <motion.div
              {...fadeUp(0.7)}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 ps-stats"
            >
              <div>
                <div className="ps-stat-value">812<span className="ps-stat-unit">ms</span></div>
                <div className="ps-stat-label">Glass-to-glass latency</div>
              </div>
              <div className="ps-stat-divider" />
              <div>
                <div className="ps-stat-value">38<span className="ps-stat-unit"> PoPs</span></div>
                <div className="ps-stat-label">Global edge regions</div>
              </div>
              <div className="ps-stat-divider" />
              <div>
                <div className="ps-stat-value">99.98<span className="ps-stat-unit">%</span></div>
                <div className="ps-stat-label">Stream uptime SLA</div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* ===== 滚动提示(右下角) ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 right-8 md:bottom-10 md:right-12 z-20 hidden md:flex flex-col items-center gap-2 ps-scroll-cue"
      >
        <span className="ps-scroll-text">Scroll</span>
        <ChevronDown className="h-4 w-4 ps-scroll-icon" />
      </motion.div>

      {/* ===== 内联样式 ===== */}
      <style>{`
        .pulsestream-root {
          font-family: 'DM Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* 噪点纹理 */
        .pulsestream-grain {
          position: absolute; inset: 0; pointer-events: none; z-index: 5;
          opacity: 0.06; mix-blend-mode: overlay;
          background-image: url('/pulsestream/grain.svg');
        }

        /* 玻璃态 */
        .ps-glass {
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(18px) saturate(140%);
          -webkit-backdrop-filter: blur(18px) saturate(140%);
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 1px 0 rgba(255,255,255,0.08) inset, 0 10px 40px -10px rgba(0,0,0,0.6);
        }

        /* Logo */
        .ps-logo-mark {
          position: relative; display: inline-flex; align-items: center; justify-content: center;
          width: 26px; height: 26px; border-radius: 8px;
          background: linear-gradient(135deg, #ff5a3c 0%, #ff2d6e 50%, #a93cff 100%);
          box-shadow: 0 0 0 1px rgba(255,255,255,0.15) inset, 0 0 14px rgba(255,45,110,0.5);
        }
        .ps-logo-dot {
          width: 8px; height: 8px; border-radius: 9999px; background: #fff;
          box-shadow: 0 0 8px rgba(255,255,255,0.9);
          animation: ps-pulse 1.6s ease-in-out infinite;
        }
        @keyframes ps-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.6; }
        }
        .ps-logo-text {
          font-family: 'Sora', sans-serif; font-weight: 600; font-size: 17px;
          letter-spacing: -0.02em; color: #fff;
        }

        /* 导航链接 */
        .ps-nav-link {
          font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 14px;
          color: rgba(255,255,255,0.78); letter-spacing: -0.01em;
          transition: color 0.2s ease;
        }
        .ps-nav-link:hover { color: #fff; }

        .ps-signin {
          font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 13px;
          color: rgba(255,255,255,0.85); padding: 8px 14px; border-radius: 9999px;
          transition: all 0.2s ease;
        }
        .ps-signin:hover { background: rgba(255,255,255,0.08); color: #fff; }

        .ps-cta-primary {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 13px;
          color: #06070b; background: #fff; padding: 8px 14px; border-radius: 9999px;
          transition: all 0.2s ease;
        }
        .ps-cta-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 20px -4px rgba(255,255,255,0.4);
        }

        .ps-menu-toggle {
          display: inline-flex; align-items: center; justify-content: center;
          width: 38px; height: 38px; border-radius: 9999px; color: #fff;
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
        }

        /* 音频切换 */
        .ps-audio-toggle {
          position: absolute; top: 50%; right: 24px; transform: translateY(-50%);
          z-index: 25; width: 38px; height: 38px; border-radius: 9999px;
          display: inline-flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.85); cursor: pointer;
          transition: all 0.2s ease;
        }
        .ps-audio-toggle:hover { color: #fff; transform: translateY(-50%) scale(1.05); }

        /* 徽章 */
        .ps-badge-dot {
          width: 6px; height: 6px; border-radius: 9999px; background: #ff2d6e;
          box-shadow: 0 0 8px #ff2d6e; animation: ps-pulse 1.6s ease-in-out infinite;
        }
        .ps-badge-text {
          font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 12px;
          color: rgba(255,255,255,0.88); letter-spacing: 0.01em;
        }

        /* 主标题 */
        .ps-headline {
          font-family: 'Sora', sans-serif; font-weight: 600;
          font-size: clamp(2.4rem, 5.6vw, 4.5rem);
          line-height: 1.02; letter-spacing: -0.035em; color: #fff;
        }
        .ps-headline-italic {
          font-family: 'Sora', sans-serif; font-style: italic; font-weight: 400;
          background: linear-gradient(120deg, #ff5a3c, #ff2d6e 50%, #a93cff);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }

        .ps-subtext {
          font-family: 'DM Sans', sans-serif; font-weight: 400;
          font-size: clamp(0.95rem, 1.4vw, 1.075rem); line-height: 1.6;
          color: rgba(255,255,255,0.74); max-width: 540px; margin-top: 22px;
          letter-spacing: -0.005em;
        }

        /* CTA 按钮 */
        .ps-hero-cta-primary {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 14px;
          color: #06070b; background: #fff; padding: 13px 22px; border-radius: 9999px;
          transition: all 0.25s cubic-bezier(0.22,1,0.36,1);
          box-shadow: 0 8px 24px -6px rgba(255,255,255,0.35);
        }
        .ps-hero-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px -8px rgba(255,255,255,0.5);
        }
        .ps-hero-cta-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 14px;
          color: #fff; padding: 13px 22px; border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.22);
          background: rgba(255,255,255,0.04);
          transition: all 0.25s ease;
        }
        .ps-hero-cta-ghost:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.4);
        }

        /* 统计 */
        .ps-stats { font-family: 'DM Sans', sans-serif; }
        .ps-stat-value {
          font-family: 'Sora', sans-serif; font-weight: 600;
          font-size: 22px; letter-spacing: -0.02em; color: #fff; line-height: 1;
        }
        .ps-stat-unit {
          font-family: 'Sora', sans-serif; font-weight: 400;
          font-size: 14px; color: rgba(255,255,255,0.55); margin-left: 2px;
        }
        .ps-stat-label {
          font-size: 11px; color: rgba(255,255,255,0.55);
          text-transform: uppercase; letter-spacing: 0.1em; margin-top: 6px;
        }
        .ps-stat-divider {
          width: 1px; height: 28px; background: rgba(255,255,255,0.15);
        }

        /* 滚动提示 */
        .ps-scroll-cue { color: rgba(255,255,255,0.6); }
        .ps-scroll-text {
          font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 500;
          text-transform: uppercase; letter-spacing: 0.3em;
          writing-mode: vertical-rl; transform: rotate(180deg);
        }
        .ps-scroll-icon { animation: ps-bob 1.8s ease-in-out infinite; }
        @keyframes ps-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .ps-logo-dot, .ps-badge-dot, .ps-scroll-icon { animation: none; }
        }
      `}</style>
    </div>
  )
}
