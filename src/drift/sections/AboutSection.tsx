import { Mail, Plus } from 'lucide-react'

/**
 * DriftLogo — 抽象几何 SVG logo
 * 40x40, viewBox 0 0 256 256, fill 可定制（默认 #321C04）
 */
function DriftLogo({ fill = '#321C04' }: { fill?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 256 256"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M 256 256 L 178 256 C 150.386 256 128 233.614 128 206 L 128 256 L 0 256 L 0 192 C 0 156.654 28.654 128 64 128 C 99.346 128 128 156.654 128 192 L 128 128 L 256 128 Z M 78 0 C 105.614 0 128 22.386 128 50 L 128 0 L 256 0 L 256 64 C 256 99.346 227.346 128 192 128 C 156.654 128 128 99.346 128 64 L 128 128 L 0 128 L 0 0 Z"
        fill={fill}
      />
    </svg>
  )
}

/**
 * AboutSection — 奶油色 "About" 区
 * - bg-[#F6E4CF] + rounded-t-[25px] + relative z-10（与 hero 重叠 25px）
 * - 顶部段落 + 两枚胶囊按钮（"Say hello" 深色 / "Stay informed" 柔和）
 * - 装饰分隔线（小圆点 + 横线 + 小圆点）
 * - 底部双栏：左 logo + "Calm / Amplified" 标签；右大段落
 */
export default function AboutSection() {
  return (
    <section className="bg-[#F6E4CF] rounded-t-[25px] relative z-10 px-6 py-20 md:py-32">
      {/* 顶部区 — 居中 */}
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <p className="text-[#321C04] text-base md:text-lg leading-relaxed max-w-lg">
          We craft tools that move with your rhythm, not over it. Designed for ease, presence, and
          flow.
        </p>

        {/* 双按钮 */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {/* Say hello — 深色 */}
          <button
            type="button"
            className="group inline-flex items-center gap-3 bg-[#321C04] text-[#FFF9F2] rounded-full pl-1.5 pr-6 py-1.5 hover:bg-[#1F1003] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#321C04]/40"
          >
            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <Mail size={16} color="#321C04" strokeWidth={2} />
            </span>
            <span className="text-xs uppercase tracking-wide font-medium">Say hello</span>
          </button>

          {/* Stay informed — 柔和 */}
          <button
            type="button"
            className="group inline-flex items-center gap-3 bg-[#D9C4AA] text-[#321C04] rounded-full pl-1.5 pr-6 py-1.5 hover:bg-[#CEBA9E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#321C04]/30"
          >
            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <Plus size={16} color="#321C04" strokeWidth={2} />
            </span>
            <span className="text-xs uppercase tracking-wide font-medium">Stay informed</span>
          </button>
        </div>
      </div>

      {/* 装饰分隔线 */}
      <div className="mt-16 md:mt-24 flex items-center gap-[2px] max-w-6xl mx-auto">
        <span className="w-2 h-2 rounded-full bg-[#D9C4AA]" />
        <span className="flex-1 h-[2px] bg-[#D9C4AA]" />
        <span className="w-2 h-2 rounded-full bg-[#D9C4AA]" />
      </div>

      {/* 底部双栏 */}
      <div className="mt-16 md:mt-24 max-w-6xl mx-auto flex flex-col md:flex-row md:items-start gap-12 md:gap-16">
        {/* 左 — logo + 标签 */}
        <div className="md:w-1/3 lg:w-1/4 flex flex-col gap-4">
          <DriftLogo fill="#321C04" />
          <span className="text-xs uppercase tracking-widest font-semibold text-[#321C04] leading-relaxed">
            Calm
            <br />
            Amplified
          </span>
        </div>

        {/* 右 — 大段落 */}
        <div className="md:flex-1">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.3] font-normal text-[#321C04]">
            We make AI tools and assistants. But, most importantly, we help you remember what gentle
            productivity looks like when software moves with you, not over you. We create systems
            that carry the cognitive weight, so you can attend to what truly counts.
          </p>
        </div>
      </div>
    </section>
  )
}
