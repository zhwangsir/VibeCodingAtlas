/* ============================================================
 *  Neuralyn — Analytics dashboard SaaS dark landing
 *  字体:Inter(正文)+ Instrument Serif(斜体点缀)
 *  核心:全屏背景视频 + 仪表板叠加(luminosity)+ framer-motion 视差
 *         + 滚动驱动的逐词揭示证言
 * ============================================================ */
import { useRef, type CSSProperties } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'

/* ===== 本地背景视频(原 CloudFront 已下载) ===== */
const VIDEO_URL = '/videos/e938b29f-a43a-41ec-a153-3d4730578ab8.mp4'

/* ===== 证言文本(逐词拆分) ===== */
const TESTIMONIAL_TEXT =
  'Neuralyn revolutionized how we handle financial insights using smart analytics. We are now driving better outcomes quicker than we ever imagined! Neuralyn revolutionized how we handle financial insights using smart analytics.'

const TESTIMONIAL_WORDS = TESTIMONIAL_TEXT.split(' ')

/* ============================================================
 *  Word — 单个词,滚动驱动 opacity/颜色揭示(独立组件,符合 hooks 规则)
 * ============================================================ */
function Word({
  word,
  index,
  total,
  progress,
}: {
  word: string
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const start = index / total
  const end = (index + 1) / total
  const opacity = useTransform(progress, [start, end], [0.2, 1])
  const color = useTransform(
    progress,
    [start, end],
    ['hsl(0 0% 35%)', 'hsl(0 0% 100%)']
  )
  return (
    <motion.span style={{ opacity, color }} className="mr-[0.3em]">
      {word}
    </motion.span>
  )
}

/* ============================================================
 *  NeuralynLogo — 简洁圆形几何 logo
 * ============================================================ */
function NeuralynLogo() {
  return (
    <svg
      viewBox="0 0 32 32"
      width={28}
      height={28}
      aria-hidden="true"
      className="shrink-0"
    >
      <circle
        cx={16}
        cy={16}
        r={14}
        fill="none"
        stroke="white"
        strokeWidth={2}
      />
      <path
        d="M 10 16 L 14 20 L 22 12"
        fill="none"
        stroke="white"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ============================================================
 *  DashboardMock — 内联 SVG 仪表板截图替代(无外部资源 URL)
 * ============================================================ */
function DashboardMock() {
  return (
    <div className="nl-dashboard-card">
      <div className="nl-dashboard-head">
        <span className="nl-dot nl-dot-red" />
        <span className="nl-dot nl-dot-yellow" />
        <span className="nl-dot nl-dot-green" />
        <span className="nl-dashboard-title">neuralyn · overview</span>
      </div>
      <div className="nl-dashboard-body">
        {/* KPI cards */}
        <div className="nl-kpi-row">
          <div className="nl-kpi">
            <span className="nl-kpi-label">Revenue</span>
            <span className="nl-kpi-value">$284.5K</span>
            <span className="nl-kpi-trend nl-up">+12.4%</span>
          </div>
          <div className="nl-kpi">
            <span className="nl-kpi-label">Active Users</span>
            <span className="nl-kpi-value">48,920</span>
            <span className="nl-kpi-trend nl-up">+8.1%</span>
          </div>
          <div className="nl-kpi">
            <span className="nl-kpi-label">Churn</span>
            <span className="nl-kpi-value">1.8%</span>
            <span className="nl-kpi-trend nl-down">-0.4%</span>
          </div>
        </div>
        {/* Chart */}
        <div className="nl-chart">
          <svg viewBox="0 0 400 140" preserveAspectRatio="none">
            <defs>
              <linearGradient id="nl-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 0 100 L 40 80 L 80 90 L 120 60 L 160 70 L 200 40 L 240 55 L 280 30 L 320 45 L 360 20 L 400 35 L 400 140 L 0 140 Z"
              fill="url(#nl-area)"
            />
            <path
              d="M 0 100 L 40 80 L 80 90 L 120 60 L 160 70 L 200 40 L 240 55 L 280 30 L 320 45 L 360 20 L 400 35"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.7"
              strokeWidth={2}
            />
          </svg>
        </div>
        {/* Bars */}
        <div className="nl-bars">
          {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
            <div key={i} className="nl-bar" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ============================================================
 *  Neuralyn — 主入口
 * ============================================================ */
export default function Neuralyn() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  /* ===== Hero 视差 ===== */
  const { scrollYProgress: heroProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(heroProgress, [0, 1], [0, -200])
  const heroOpacity = useTransform(heroProgress, [0, 0.5], [1, 0])
  const dashY = useTransform(heroProgress, [0, 1], [0, -250])

  /* ===== 证言逐词揭示 ===== */
  const { scrollYProgress: wordProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end center'],
  })

  return (
    <div
      data-theme="neuralyn"
      className="min-h-screen bg-black text-white"
      style={
        {
          fontFamily: "'Inter', sans-serif",
          '--hero-subtitle': '210 17% 95%',
        } as CSSProperties
      }
    >
      <style>{`
        [data-theme='neuralyn'] :root {
          --background: 0 0% 0%;
          --foreground: 0 0% 100%;
          --muted-foreground: 0 0% 65%;
          --card: 0 0% 5%;
          --border: 0 0% 20%;
        }
        [data-theme='neuralyn'] .liquid-glass {
          background: rgba(255, 255, 255, 0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: none;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }
        [data-theme='neuralyn'] .liquid-glass::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.4px;
          background: linear-gradient(180deg,
            rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
            rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
            rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        /* 仪表板 mock */
        [data-theme='neuralyn'] .nl-dashboard-card {
          background: #0a0a0a;
          border: 1px solid hsl(0 0% 20%);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,0.6);
        }
        [data-theme='neuralyn'] .nl-dashboard-head {
          display: flex; align-items: center; gap: 8px;
          padding: 12px 16px;
          border-bottom: 1px solid hsl(0 0% 20%);
        }
        [data-theme='neuralyn'] .nl-dot {
          width: 10px; height: 10px; border-radius: 50%;
        }
        [data-theme='neuralyn'] .nl-dot-red { background: #ff5f57; }
        [data-theme='neuralyn'] .nl-dot-yellow { background: #febc2e; }
        [data-theme='neuralyn'] .nl-dot-green { background: #28c840; }
        [data-theme='neuralyn'] .nl-dashboard-title {
          margin-left: 8px; color: hsl(0 0% 65%); font-size: 12px;
        }
        [data-theme='neuralyn'] .nl-dashboard-body {
          padding: 20px; display: flex; flex-direction: column; gap: 20px;
        }
        [data-theme='neuralyn'] .nl-kpi-row {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
        }
        [data-theme='neuralyn'] .nl-kpi {
          background: hsl(0 0% 5%);
          border: 1px solid hsl(0 0% 20%);
          border-radius: 12px; padding: 14px;
          display: flex; flex-direction: column; gap: 4px;
        }
        [data-theme='neuralyn'] .nl-kpi-label {
          font-size: 11px; color: hsl(0 0% 65%);
        }
        [data-theme='neuralyn'] .nl-kpi-value {
          font-size: 22px; font-weight: 600; color: white;
        }
        [data-theme='neuralyn'] .nl-kpi-trend { font-size: 11px; font-weight: 500; }
        [data-theme='neuralyn'] .nl-up { color: #4ade80; }
        [data-theme='neuralyn'] .nl-down { color: #f87171; }
        [data-theme='neuralyn'] .nl-chart {
          background: hsl(0 0% 5%);
          border: 1px solid hsl(0 0% 20%);
          border-radius: 12px; padding: 12px; height: 140px;
        }
        [data-theme='neuralyn'] .nl-chart svg { width: 100%; height: 100%; }
        [data-theme='neuralyn'] .nl-bars {
          display: flex; align-items: flex-end; gap: 8px; height: 80px;
          background: hsl(0 0% 5%);
          border: 1px solid hsl(0 0% 20%);
          border-radius: 12px; padding: 12px;
        }
        [data-theme='neuralyn'] .nl-bar {
          flex: 1;
          background: linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.25) 100%);
          border-radius: 4px 4px 0 0;
          min-height: 8px;
        }
      `}</style>

      {/* ===== Section 1: Hero ===== */}
      <section
        ref={sectionRef}
        className="relative min-h-screen overflow-hidden"
      >
        {/* Navbar */}
        <header className="flex items-center justify-between px-8 md:px-28 py-4">
          <div className="flex items-center gap-12 md:gap-20">
            <div className="flex items-center gap-2">
              <NeuralynLogo />
              <span className="text-xl font-bold tracking-tight">Neuralyn</span>
            </div>
            <nav className="hidden md:flex items-center gap-1">
              <a href="#" className="px-3 py-2 text-sm text-white/80 hover:text-white">
                Home
              </a>
              <a href="#" className="flex items-center gap-1 px-3 py-2 text-sm text-white/80 hover:text-white">
                Services
                <ChevronDown size={14} />
              </a>
              <a href="#" className="px-3 py-2 text-sm text-white/80 hover:text-white">
                Reviews
              </a>
              <a href="#" className="px-3 py-2 text-sm text-white/80 hover:text-white">
                Contact us
              </a>
            </nav>
          </div>
          <button
            type="button"
            className="bg-white text-black rounded-lg text-sm font-semibold px-5 py-2.5 hover:opacity-90 transition-opacity"
          >
            Sign In
          </button>
        </header>

        {/* Hero content (parallax y: 0→-200, opacity: 1→0) */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-20 flex flex-col items-center px-4 mt-16 md:mt-20 text-center"
        >
          {/* Tag pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="liquid-glass px-3 py-2 rounded-lg mb-6 inline-flex items-center gap-2"
          >
            <span className="bg-white text-black rounded-md text-sm font-medium px-2 py-0.5">
              New
            </span>
            <span className="text-sm font-medium text-white/65">
              Say Hello to Corewave v3.2
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl tracking-[-2px] font-medium leading-tight md:leading-[1.15] mb-3"
          >
            Your Insights.
            <br />
            One Clear{' '}
            <span
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: 'italic',
                fontWeight: 400,
              }}
            >
              Overview
            </span>
            .
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg font-normal leading-6 opacity-90 mb-8 max-w-xl"
            style={{ color: 'hsl(var(--hero-subtitle))' }}
          >
            Neuralyn helps teams track metrics, goals,
            <br />
            and progress with precision.
          </motion.p>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            className="bg-white text-black rounded-full px-8 py-3.5 text-base font-medium"
          >
            Get Started for Free
          </motion.button>
        </motion.div>

        {/* Dashboard + Video area (parallax y: 0→-250, w-screen + marginLeft 居中 trick) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ y: dashY, marginLeft: 'calc(-50vw + 50%)' }}
          className="nl-dashboard-area relative z-10 mt-8 md:mt-10 w-screen"
        >
          <div
            className="relative"
            style={{ aspectRatio: '16 / 9' }}
          >
            {/* Background video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              src={VIDEO_URL}
            />
            {/* Dashboard image overlay (luminosity blend) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-[90%] max-w-5xl rounded-2xl"
                style={{ mixBlendMode: 'luminosity' }}
              >
                <DashboardMock />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom gradient fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 z-30 pointer-events-none"
          style={{ background: 'linear-gradient(to top, hsl(0 0% 0%), transparent)' }}
        />
      </section>

      {/* ===== Section 2: Testimonial ===== */}
      <section
        ref={containerRef}
        className="relative min-h-screen flex flex-col items-center justify-center py-24 md:py-32 px-8 md:px-28"
      >
        <div className="max-w-3xl mx-auto flex flex-col items-start gap-10">
          {/* Quote symbol */}
          <svg
            viewBox="0 0 56 40"
            className="w-14 h-10 object-contain"
            aria-hidden="true"
          >
            <text
              x="0"
              y="36"
              fontSize="56"
              fontFamily="'Instrument Serif', serif"
              fill="white"
            >
              &ldquo;
            </text>
          </svg>

          {/* Testimonial text with word reveal */}
          <div className="text-4xl md:text-5xl font-medium leading-[1.2] flex flex-wrap">
            {TESTIMONIAL_WORDS.map((word, i) => (
              <Word
                key={i}
                word={word}
                index={i}
                total={TESTIMONIAL_WORDS.length}
                progress={wordProgress}
              />
            ))}
            <span className="text-white/65 ml-2">&rdquo;</span>
          </div>

          {/* Author row */}
          <div className="flex items-center gap-4">
            {/* Avatar (inline SVG placeholder, no URL provided) */}
            <div className="w-14 h-14 rounded-full border-[3px] border-white overflow-hidden bg-gradient-to-br from-neutral-500 to-neutral-800 flex items-center justify-center text-white font-semibold text-lg">
              BS
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold leading-7 text-white">
                Brooklyn Simmons
              </span>
              <span className="text-sm font-normal leading-5 text-white/65">
                Product Manager
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
