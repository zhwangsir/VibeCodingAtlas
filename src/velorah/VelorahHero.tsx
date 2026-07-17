const HERO_VIDEO_SRC =
  '/videos/f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4'

const NAV_LINKS = [
  { label: 'Home', active: true },
  { label: 'Studio', active: false },
  { label: 'About', active: false },
  { label: 'Journal', active: false },
  { label: 'Reach Us', active: false },
]

/**
 * VelorahHero — 电影感 hero 落地页
 *
 * - 全屏循环视频背景（z-0）
 * - 玻璃态导航（z-10）：Velorah® logo + 5 链接 + "Begin Journey" 液态玻璃按钮
 * - 居中 hero 内容（z-10）：H1（"dreams" 和 "through the silence." 用 <em> 灰化）+ 副文本 + 大 CTA
 * - 无装饰 blob / 径向渐变 / 叠加层 — 视频提供全部视觉深度
 *
 * 字体：Instrument Serif（display，标题）+ Inter（body，正文/导航/按钮）
 * 颜色：HSL CSS 变量（深海军蓝 background 201 100% 13%）
 *
 * 入场动画：fade-rise 0.8s ease-out，H1 → 副文本(0.2s) → CTA(0.4s)
 */
export default function VelorahHero() {
  return (
    <div data-theme="velorah" className="relative min-h-screen w-full overflow-hidden">
      {/* 背景视频 */}
      <video
        src={HERO_VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-hidden="true"
      />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="#"
          className="text-3xl tracking-tight text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Velorah<sup className="text-xs">®</sup>
        </a>

        {/* 中：desktop 链接 */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`text-sm transition-colors hover:text-foreground ${
                link.active ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* 右：CTA 按钮（liquid-glass） */}
        <button
          type="button"
          className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground transition-transform duration-300 hover:scale-[1.03]"
          style={{ fontFamily: 'var(--font-body, "Inter", sans-serif)' }}
        >
          Begin Journey
        </button>
      </nav>

      {/* Hero 内容 — 在 Navbar 下方剩余视口内垂直居中，避免固定大 padding 在矮视口裁掉 CTA */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-[calc(100vh-5.5rem)] py-10">
        <h1
          className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
        >
          Where <em className="not-italic text-muted-foreground">dreams</em> rise{' '}
          <em className="not-italic text-muted-foreground">through the silence.</em>
        </h1>

        <p className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
          We&apos;re designing tools for deep thinkers, bold creators, and quiet rebels. Amid the
          chaos, we build digital spaces for sharp focus and inspired work.
        </p>

        <button
          type="button"
          className="animate-fade-rise-delay-2 liquid-glass rounded-full px-14 py-5 text-base text-foreground mt-12 transition-transform duration-300 hover:scale-[1.03] cursor-pointer"
        >
          Begin Journey
        </button>
      </section>
    </div>
  )
}
