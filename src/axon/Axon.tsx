/* ============================================================
 *  Axon — 数字员工平台 Hero
 *  字体:Inter(正文,400-600)/ Instrument Serif(标题)
 *  配色:深海军蓝 #1B133C 文字 + 白色玻璃 + 橙色 YC badge
 *  核心:全屏背景视频(130% 高度,顶部锚定)+ 居中导航胶囊 + YC 资助徽章
 * ============================================================ */
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'

const BG_VIDEO = '/videos/c7e0daa0-8bdd-4486-a2da-040901f8f0ea.mp4'

const NAV_LINKS = ['Features', 'Plans', 'Security', 'About']

/** Axon logo — 双几何箭头形状 */
function AxonLogo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 256 256"
      fill="#1B133C"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z" />
      <path d="M 256 128 L 128 128 L 0 0 L 128 0 Z" />
    </svg>
  )
}

export default function Axon() {
  return (
    <div
      data-theme="axon"
      className="axon-root relative h-screen w-full overflow-hidden flex flex-col"
      style={{ fontFamily: "'Inter', sans-serif", color: '#1B133C' }}
    >
      {/* ===== Background video (z-0) ===== */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 w-full h-[130%] object-cover object-top"
        src={BG_VIDEO}
      />

      {/* ===== Navigation (centered top, z-10) ===== */}
      <nav className="relative z-10 flex justify-center pt-4 md:pt-6 px-4">
        <div className="flex items-center gap-4 md:gap-8 rounded-xl bg-white/70 backdrop-blur-md px-4 md:px-6 py-3 shadow-sm">
          <a href="#" aria-label="Axon" className="flex-shrink-0">
            <AxonLogo />
          </a>
          <div className="hidden sm:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href="#"
                className="text-sm font-medium text-[#1B133C]/80 transition-opacity hover:opacity-100"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ===== Hero content (centered, z-10) ===== */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 text-center mt-8 md:mt-16">
        {/* YC Badge */}
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-xl border border-[#1B133C]/10 bg-white/70 backdrop-blur-sm px-4 py-2 text-sm font-medium"
        >
          <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded bg-orange-500">
            <span className="text-[11px] font-bold leading-none text-white">Y</span>
          </span>
          <span>Funded by Y Combinator</span>
        </div>

        {/* Heading */}
        <h1
          className="max-w-4xl text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-[#1B133C]"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Deploy digital workers
          <br />
          for mundane workflows
        </h1>

        {/* Subtitle */}
        <p className="mt-5 sm:mt-6 max-w-3xl text-xs sm:text-sm md:text-base leading-relaxed text-[#1B133C]/70">
          Eliminate your tedious browser work and 10x your team's capacity. Put intelligent
          agents on every routine process so you grow faster and deliver more for clients —
          effortlessly.
        </p>

        {/* CTA */}
        <button
          type="button"
          className="mt-7 sm:mt-8 rounded-xl bg-[#FEFEFE] px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-semibold text-[#1B133C] shadow-[0px_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0px_6px_16px_rgba(0,0,0,0.2)]"
        >
          Get Early Access
        </button>
      </div>
    </div>
  )
}
