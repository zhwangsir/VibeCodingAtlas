import Navbar from '../components/Navbar'

const HERO_VIDEO =
  '/videos/1dd0cea7-f9ba-4db4-8147-c7d746061c9e.mp4'

/**
 * HeroSection — 全屏视频背景 hero
 * - h-screen + overflow-hidden + mb-[-25px]（让 About 区上移 25px 与之重叠）
 * - 视频背景（autoPlay muted loop playsInline object-cover）+ bg-black/20 叠加
 * - 浮动胶囊 Navbar
 * - 底部对齐 hero 内容：标题 "Own your time" / "without *the stress*"
 *   - "the stress" 用 Instrument Serif 斜体（外层 em.not-italic 内联样式覆盖 fontStyle）
 * - 副标题 + CTA 条（bg-black/25 backdrop-blur-md 圆角胶囊 + Start for free 按钮）
 */
export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden mb-[-25px]">
      {/* 背景视频 */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={HERO_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* 半透明叠加 */}
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

      {/* 导航 */}
      <Navbar />

      {/* Hero 内容 — 底部对齐 */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center px-6 pb-12 md:pb-16 text-center">
        {/* 标题 */}
        <h1 className="text-white font-normal leading-[1.1] tracking-tight">
          <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[96px]">
            Own your time
          </span>
          <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[96px]">
            without{' '}
            <em
              className="not-italic"
              style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}
            >
              the stress
            </em>
          </span>
        </h1>

        {/* 副标题 */}
        <p className="mt-6 text-white/80 text-sm md:text-base font-medium max-w-[420px]">
          Drift is a calm, ADHD-friendly planner that turns scattered ideas into a clear path
        </p>

        {/* CTA 条 */}
        <div className="mt-8 inline-flex items-center gap-4 bg-black/25 backdrop-blur-md rounded-xl pl-6 pr-1 py-1">
          {/* 桌面文案 */}
          <span className="hidden sm:block text-white text-sm font-medium">
            No noise. No complicated systems. Just your day, gently sorted.
          </span>
          {/* 移动端文案 */}
          <span className="sm:hidden text-white text-sm font-medium">
            No noise. Just your day, gently sorted.
          </span>

          {/* 按钮 */}
          <button
            type="button"
            className="bg-white text-black text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-white/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            Start for free
          </button>
        </div>
      </div>
    </section>
  )
}
