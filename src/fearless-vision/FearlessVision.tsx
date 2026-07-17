/* ============================================================
 *  FearlessVision — 全屏 Hero + Stats + Clip Reveal 标题
 *  基于 29.md:视频背景 + 深紫强调色 + 三段布局 + Framer Motion
 *  字体:Inter(全局 @fontsource)
 *  Tech:React + TS + Tailwind + framer-motion + lucide-react
 * ============================================================ */
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'

/* ===== 背景视频(本地,原 CloudFront 已下载) ===== */
const BG_VIDEO = '/videos/3e3205be-3364-417b-a64a-bfe087acbec4.mp4'

/* ===== 强调色 ===== */
const ACCENT = '#5E0ED7'

/* ===== 导航链接 ===== */
const NAV_LINKS = ['Story', 'Expertise', 'Studios', 'Feedback'] as const

/* ===== Stats 数据 ===== */
const STATS = [
  { num: '300', label: 'CRAFTED\nBRANDS' },
  { num: '200', label: 'DIGITAL\nPRODUCTS' },
  { num: '100', label: 'VENTURES\nFUNDED' },
] as const

/* ===== 主标题三行 ===== */
const HEADING_WORDS = ['Fearless', 'Vision', 'Delivered'] as const

/* ============================================================
 *  动画 variants
 * ============================================================ */
const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

/* ============================================================
 *  FearlessVision — 主入口
 * ============================================================ */
export default function FearlessVision() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div
      data-theme="fearless-vision"
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <style>{`
        [data-theme='fearless-vision'] .fv-hamburger-line {
          width: 16px;
          height: 2px;
          background: #fff;
          border-radius: 1px;
        }
      `}</style>

      {/* ===== 全屏背景视频 ===== */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={BG_VIDEO}
      />

      {/* ===== 导航栏 ===== */}
      <nav className="relative z-30 flex items-center justify-between px-5 sm:px-8 md:px-12 pt-5 md:pt-6">
        {/* Logo (32px 圆环 + 中心 10px 实心圆) */}
        <motion.div
          className="flex items-center justify-center rounded-full"
          style={{
            width: 32,
            height: 32,
            border: `2px solid ${ACCENT}`,
          }}
          variants={fadeDown}
          initial="hidden"
          animate="show"
          custom={0}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: ACCENT,
              display: 'block',
            }}
          />
        </motion.div>

        {/* 中间桌面导航 */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link}
              href="#"
              className="text-sm font-semibold tracking-widest uppercase text-black hover:opacity-70 transition-opacity"
              variants={fadeDown}
              initial="hidden"
              animate="show"
              custom={i + 1}
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* 汉堡按钮 */}
        <motion.button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="flex flex-col items-center justify-center gap-1 rounded-full"
          style={{ width: 36, height: 36, background: '#000' }}
          variants={fadeDown}
          initial="hidden"
          animate="show"
          custom={5}
        >
          <span className="fv-hamburger-line" />
          <span className="fv-hamburger-line" />
          <span className="fv-hamburger-line" />
        </motion.button>
      </nav>

      {/* ===== 移动菜单遮罩 ===== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-white flex flex-col px-5 sm:px-8 md:px-12 pt-5 md:pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* 顶栏:Logo + 关闭 */}
            <div className="flex items-center justify-between">
              <div
                className="flex items-center justify-center rounded-full"
                style={{ width: 32, height: 32, border: `2px solid ${ACCENT}` }}
              >
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: ACCENT,
                    display: 'block',
                  }}
                />
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex items-center justify-center rounded-full text-white"
                style={{ width: 36, height: 36, background: '#000' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* 导航链接列表 */}
            <div className="flex flex-col gap-8 mt-16">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-semibold tracking-widest uppercase text-black"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* 底部 CTA */}
            <div className="mt-auto pb-8">
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-2 text-xl font-semibold tracking-widest uppercase"
                style={{ color: ACCENT }}
              >
                Work With Us
                <ArrowUpRight size={22} style={{ color: ACCENT }} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Stats 行(中间,右对齐) ===== */}
      <div className="relative z-20 flex-1 flex items-center justify-end px-5 sm:px-8 md:px-12 py-8 md:py-0">
        <div className="flex items-center gap-5 sm:gap-8 md:gap-10">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-end text-right"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={i + 2}
            >
              <div
                className="flex items-start font-semibold text-black"
                style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)', lineHeight: 1 }}
              >
                <span style={{ color: ACCENT, fontSize: '0.5em', marginRight: 2 }}>+</span>
                <span>{stat.num}</span>
              </div>
              <span className="mt-2 text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black whitespace-pre-line leading-tight">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== 底部内容 ===== */}
      <div className="relative z-20 px-5 sm:px-8 md:px-12 pb-8 md:pb-12 flex flex-col gap-6 md:gap-12">
        {/* Row A:小标语 + CTA */}
        <div className="flex items-center justify-between gap-4">
          <motion.p
            className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black max-w-[130px] sm:max-w-[160px] md:max-w-xs"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
          >
            Shaping Bold
            <br />
            Visions Into Power
            <br />
            For Your Tribe
          </motion.p>

          <motion.a
            href="#"
            className="inline-flex items-center gap-2 font-semibold whitespace-nowrap"
            style={{ color: ACCENT, fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={6}
          >
            Work With Us
            <ArrowUpRight size={22} style={{ color: ACCENT }} />
          </motion.a>
        </div>

        {/* Row B:左侧描述 + 右侧三行标题(clip reveal) */}
        <div className="flex items-end justify-between gap-3 sm:gap-4">
          <motion.div
            className="w-[120px] sm:w-[180px] md:w-[280px] shrink-0"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={7}
          >
            <p className="text-[9px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black text-left md:text-right">
              Creative Studios Built Around Elevating Your Vision Into Striking Reality
            </p>
          </motion.div>

          <h1 className="flex flex-col items-end text-right text-black">
            {HEADING_WORDS.map((word, i) => (
              <span
                key={word}
                className="overflow-hidden block"
                style={{ lineHeight: 0.88 }}
              >
                <motion.span
                  className="block font-semibold uppercase"
                  style={{
                    fontSize: 'clamp(2rem, 9vw, 9rem)',
                    lineHeight: 0.88,
                  }}
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.4 + i * 0.14,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>
      </div>
    </div>
  )
}
