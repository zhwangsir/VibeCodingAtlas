/* ============================================================
 *  Securify — 数据安全 SaaS Hero
 *  字体:Readex Pro(300-700)
 *  配色:纯黑 / 纯白 / neutral-900 / white opacity 变体
 *  核心元素:循环全屏背景视频 + 浮动胶囊 navbar + 3 个错位大字标题
 * ============================================================ */

const BG_VIDEO =
  '/videos/7d167302-4fd4-480b-8260-18ab572333d4.mp4'

const NAV_LINKS = ['platform', 'solutions', 'company', 'support']

/* ============================================================
 *  SecurifyLogo — 自定义白色 SVG logo(256x256 viewBox)
 *  4 个 L 形拼成的几何标识
 * ============================================================ */
function SecurifyLogo() {
  return (
    <svg
      viewBox="0 0 256 256"
      className="h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 128 L 64 128 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z M 128 64 L 128 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 Z M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 128 0 L 192 0 Z"
        fill="#ffffff"
      />
    </svg>
  )
}

/* ============================================================
 *  Navbar — 浮动胶囊型导航(absolute z-20)
 *  左 pill:logo + securify 品牌名(bg-neutral-900/90 backdrop-blur)
 *  中 pill:4 个 nav 链接(hidden md:flex,hover:text-white)
 *  右:get started 按钮(bg-white text-black hover:bg-neutral-200)
 * ============================================================ */
function Navbar() {
  return (
    <div className="absolute z-20 top-0 left-0 right-0 px-6 md:px-10 pt-6">
      <nav className="flex items-center justify-between gap-4">
        {/* 左 pill — logo + 品牌名 */}
        <div className="flex items-center gap-2 bg-neutral-900/90 backdrop-blur rounded-full pl-4 pr-6 py-3">
          <SecurifyLogo />
          <span className="text-white text-sm font-normal tracking-tight">
            securify
          </span>
        </div>

        {/* 中 pill — nav 链接(桌面端) */}
        <div className="hidden md:flex items-center gap-1 bg-neutral-900/90 backdrop-blur rounded-full px-3 py-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-neutral-300 hover:text-white transition-colors text-sm px-5 py-2 rounded-full"
            >
              {link}
            </a>
          ))}
        </div>

        {/* 右 — get started 按钮 */}
        <button
          type="button"
          className="bg-white text-black text-sm font-normal rounded-full px-6 py-3 hover:bg-neutral-200 transition-colors"
        >
          get started
        </button>
      </nav>
    </div>
  )
}

/* ============================================================
 *  HeroContent — 3 个错位大字标题 + 描述 + 3 个统计块
 *  全部 absolute 定位,以 vw 单位响应式缩放
 * ============================================================ */
function HeroContent() {
  return (
    <div className="relative h-full w-full">
      {/* ===== 3 个错位大字标题 ===== */}
      <h1 className="hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] left-4 md:left-10 top-[18%]">
        protect
      </h1>
      <h1 className="hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] right-4 md:right-10 top-[38%]">
        your
      </h1>
      <h1 className="hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] left-[18%] md:left-[28%] top-[58%]">
        data
      </h1>

      {/* ===== 描述段落 ===== */}
      <p className="absolute left-6 md:left-10 top-[46%] max-w-[240px] text-[15px] leading-snug text-white/90">
        we can guarding your data with utmost care, empowering you with privacy
        everywhere
      </p>

      {/* ===== 统计块 1 — 右上(+65k startups use)===== */}
      <div className="absolute right-6 md:right-24 top-[14%]">
        <div className="flex items-center gap-3 justify-end">
          {/* 对角分隔线(桌面端) */}
          <div className="hidden md:block h-px w-24 bg-white/40 rotate-[20deg]" />
          <span className="text-4xl md:text-5xl font-medium tracking-tight">
            +65k
          </span>
        </div>
        <p className="text-xs md:text-sm text-white/70 mt-1 text-right">
          startups use
        </p>
      </div>

      {/* ===== 统计块 2 — 左下(+1.5b gb data was protected)===== */}
      <div className="absolute left-6 md:left-20 bottom-20 md:bottom-24">
        <div className="flex items-center gap-3">
          <span className="text-4xl md:text-5xl font-medium tracking-tight">
            +1.5b
          </span>
          {/* 对角分隔线(桌面端) */}
          <div className="hidden md:block h-px w-24 bg-white/40 rotate-[-20deg]" />
        </div>
        <p className="text-xs md:text-sm text-white/70 mt-1">
          gb data was protected
        </p>
      </div>

      {/* ===== 统计块 3 — 右下(+300k downloads)===== */}
      <div className="absolute right-6 md:right-20 bottom-16 md:bottom-20">
        <div className="flex items-center gap-3 justify-end">
          {/* 对角分隔线(桌面端) */}
          <div className="hidden md:block h-px w-24 bg-white/40 rotate-[-20deg]" />
          <span className="text-4xl md:text-5xl font-medium tracking-tight">
            +300k
          </span>
        </div>
        <p className="text-xs md:text-sm text-white/70 mt-1 text-right">
          downloads
        </p>
      </div>
    </div>
  )
}

/* ============================================================
 *  SecurifyHero — 主入口
 *  全屏 section:背景视频 + Navbar + HeroContent + 底部渐变叠加
 * ============================================================ */
export default function SecurifyHero() {
  return (
    <div data-theme="securify" className="min-h-screen bg-black text-white">
      <section className="relative h-screen w-full overflow-hidden bg-black">
        {/* 背景循环视频 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={BG_VIDEO}
        />

        {/* 浮动胶囊 Navbar */}
        <Navbar />

        {/* 前景内容 */}
        <HeroContent />

        {/* 底部渐变叠加 */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black" />
      </section>
    </div>
  )
}
