/* ============================================================
 *  AiBuilder — Dark hero for an AI website builder
 *  字体:Instrument Sans(标题)+ Instrument Serif(副标题)+ Inter(回退)
 *  核心:全屏背景视频 + 装饰渐变光晕 + motion 入场动画
 * ============================================================ */
import { motion } from 'motion/react'
import { ArrowRight, ChevronDown } from 'lucide-react'

import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'

/* ===== 本地背景视频(原 Mux HLS 已下载转码为 MP4) ===== */
const VIDEO_SRC = '/videos/ai-builder-bg.mp4'

/* ===== Poster 回退图(本地,原 Unsplash 已下载) ===== */
const POSTER_URL = '/images/ai-builder-poster.jpg'

/* ============================================================
 *  SunburstLogo — 24x24 白色太阳光 logo
 * ============================================================ */
function SunburstLogo() {
  const rays = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * 360
    return (
      <rect
        key={i}
        x={11}
        y={0}
        width={2}
        height={10}
        rx={1}
        fill="white"
        transform={`rotate(${angle} 12 12)`}
      />
    )
  })
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      aria-hidden="true"
      className="shrink-0"
    >
      {rays}
      <circle cx={12} cy={12} r={4} fill="white" />
    </svg>
  )
}

/* ============================================================
 *  AiBuilder — 主入口
 * ============================================================ */
export default function AiBuilder() {
  return (
    <div
      data-theme="ai-builder"
      className="relative min-h-screen w-full overflow-hidden bg-black text-white"
      style={{ fontFamily: "'Instrument Sans', 'Inter', sans-serif" }}
    >
      <style>{`
        @import url('/fonts/ai-builder/instrumentsans.css');
        [data-theme='ai-builder'] .ab-gradient-text {
          background: linear-gradient(to bottom, #ffffff 0%, #ffffff 50%, #b4c0ff 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
      `}</style>

      {/* ===== 背景视频层 (opacity 60%) ===== */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={POSTER_URL}
        src={VIDEO_SRC}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />

      {/* ===== 黑色遮罩 + 模糊 ===== */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* ===== 装饰渐变光晕 ===== */}
      <div
        className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-blue-900/20 blur-[120px] mix-blend-screen pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-indigo-900/20 blur-[120px] mix-blend-screen pointer-events-none"
        aria-hidden="true"
      />

      {/* ===== 固定透明导航 ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between">
        {/* 左:Sunburst logo */}
        <a href="#" aria-label="home">
          <SunburstLogo />
        </a>

        {/* 中:导航链接 */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80 hover:text-white">
          <a href="#" className="flex items-center gap-1 hover:text-white">
            Products
            <ChevronDown size={14} />
          </a>
          <a href="#" className="hover:text-white">
            Customer Stories
          </a>
          <a href="#" className="hover:text-white">
            Resources
          </a>
          <a href="#" className="hover:text-white">
            Pricing
          </a>
        </nav>

        {/* 右:CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden sm:block text-sm font-medium text-white/80 hover:text-white"
          >
            Book A Demo
          </a>
          <button
            type="button"
            className="bg-white text-black rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors"
          >
            Get Started
          </button>
        </div>
      </header>

      {/* ===== Hero 内容 ===== */}
      <section className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center mt-20">
        <div className="flex flex-col items-center gap-12">
          {/* Pre-headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-[48px] leading-[1.1]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Design at the speed of thought
          </motion.h2>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="ab-gradient-text text-6xl sm:text-8xl lg:text-[136px] leading-[0.9] tracking-tighter font-semibold"
          >
            Build Faster
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-[20px] leading-[1.65] max-w-xl"
          >
            Create fully functional, SEO-optimized websites in seconds with our
            advanced AI engine.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            {/* Primary */}
            <button
              type="button"
              className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <span
                className="text-lg font-medium"
                style={{ color: '#0a0400' }}
              >
                Start Building Free
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3054ff] transition-colors group-hover:bg-[#2040e0]">
                <ArrowRight size={20} className="text-white" />
              </span>
            </button>

            {/* Secondary */}
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-lg px-4 py-2 text-white/70 backdrop-blur-sm hover:bg-white/5 hover:text-white transition-colors"
            >
              See Examples
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
