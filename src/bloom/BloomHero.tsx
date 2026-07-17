import {
  Sparkles,
  Download,
  Wand2,
  BookOpen,
  ArrowRight,
  Twitter,
  Linkedin,
  Instagram,
  Menu,
} from 'lucide-react'

const BG_VIDEO =
  '/videos/51473149-4350-4920-ae24-c8214286f323.mp4'

// 植物主题缩略图（绿色散景，替代与主题不符的宇航员占位图）
const FLOWER_IMAGE = '/images/b62f758d-f68c-4045-a7b4-91771d6d0a0f_1280.webp'

/**
 * BloomLogo — 内联 SVG logo（占位 32×32 花瓣几何）
 * 实际项目可替换为 /logo.png
 */
function BloomLogo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g fill="white">
        <circle cx="16" cy="16" r="4" />
        <ellipse cx="16" cy="6" rx="3" ry="5" opacity="0.85" />
        <ellipse cx="16" cy="26" rx="3" ry="5" opacity="0.85" />
        <ellipse cx="6" cy="16" rx="5" ry="3" opacity="0.85" />
        <ellipse cx="26" cy="16" rx="5" ry="3" opacity="0.85" />
      </g>
    </svg>
  )
}

/**
 * BloomHero — 液态玻璃 AI 植物平台落地页
 * - 全屏循环视频背景 + 所有内容 z-10 浮于其上
 * - 严格灰阶（仅 white/白透明度梯度）
 * - 字体：Poppins（display + body）+ Source Serif 4（italic emphasis）
 * - 双栏：左 52%（liquid-glass-strong 面板 + hero + 引用）/ 右 48%（仅 lg+）
 *
 * 液态玻璃两层：
 *   .liquid-glass — blur(4px) + inset 高光 + ::before 渐变边框
 *   .liquid-glass-strong — blur(50px) + 4px 阴影 + 更强 ::before alpha
 */
export default function BloomHero() {
  return (
    <div
      data-theme="bloom"
      className="relative min-h-screen w-full overflow-hidden bg-black"
      style={{
        fontFamily: "'Poppins', sans-serif",
        // CSS 变量 token（灰阶 HSL，无色彩）
        // 仅供未来扩展；当前样式直接走 text-white/* 工具类
        ['--radius' as string]: '1rem',
      }}
    >
      {/* 背景视频 */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={BG_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* 内容层 */}
      <div className="relative z-10 flex flex-row min-h-screen">
        {/* ========== 左面板 52% ========== */}
        <LeftPanel />

        {/* ========== 右面板 48%（仅 lg+） ========== */}
        <RightPanel />
      </div>
    </div>
  )
}

/* ===================== 左面板 ===================== */

function LeftPanel() {
  return (
    <div className="relative w-full lg:w-[52%] min-h-screen p-4 lg:p-6">
      {/* liquid-glass-strong 全覆盖面板（inline position: absolute — 全局 .liquid-glass-strong 的 position:relative 会覆盖 Tailwind .absolute，需内联强制） */}
      <div
        className="liquid-glass-strong absolute inset-4 lg:inset-6 rounded-3xl pointer-events-none"
        style={{ position: 'absolute' }}
      />

      {/* 面板内容 */}
      <div className="relative flex flex-col h-full min-h-[calc(100vh-2rem)] lg:min-h-[calc(100vh-3rem)] px-6 py-6 lg:px-10 lg:py-8">
        {/* Nav */}
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <BloomLogo size={32} />
            <span className="font-semibold text-2xl tracking-tighter text-white">
              bloom
            </span>
          </div>

          <button
            type="button"
            className="liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white hover:scale-105 active:scale-95 transition-transform"
            aria-label="Open menu"
          >
            <Menu size={16} strokeWidth={2} />
            Menu
          </button>
        </nav>

        {/* Hero 中心（压缩纵向间距，保证 633px 矮视口下 nav/hero/引用 全部可见不溢出） */}
        <div className="flex-1 flex flex-col items-center justify-center text-center py-4">
          {/* Logo 80×80 */}
          <BloomLogo size={80} />

          {/* h1 */}
          <h1
            className="mt-5 text-6xl lg:text-7xl font-medium tracking-[-0.05em] text-white"
            style={{ lineHeight: 1.05 }}
          >
            Innovating the
            <br />
            <em
              className="not-italic"
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.8)',
              }}
            >
              spirit of bloom AI
            </em>
          </h1>

          {/* CTA 按钮 */}
          <button
            type="button"
            className="liquid-glass-strong mt-6 inline-flex items-center gap-3 rounded-full pl-2 pr-6 py-2 text-sm text-white hover:scale-105 active:scale-95 transition-transform"
          >
            <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
              <Download size={14} strokeWidth={2} />
            </span>
            Explore Now
          </button>

          {/* 三个 pill */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {['Artistic Gallery', 'AI Generation', '3D Structures'].map((label) => (
              <span
                key={label}
                className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/80"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* 底部引用 */}
        <div className="flex flex-col items-center text-center">
          <span className="text-xs tracking-widest uppercase text-white/50">
            VISIONARY DESIGN
          </span>
          <p className="mt-3 text-base lg:text-lg text-white max-w-md">
            <span style={{ fontFamily: "'Poppins', sans-serif" }}>We imagined a realm </span>
            <span
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.8)',
              }}
            >
              with no ending.
            </span>
          </p>
          <div className="mt-3 flex items-center gap-3 w-full max-w-[200px]">
            <span className="flex-1 h-px bg-white/30" />
            <span className="text-xs tracking-widest uppercase text-white/60">
              MARCUS AURELIO
            </span>
            <span className="flex-1 h-px bg-white/30" />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ===================== 右面板 ===================== */

function RightPanel() {
  return (
    <div className="hidden lg:flex relative w-[48%] min-h-screen flex-col p-6 gap-6">
      {/* 顶部条 — 社交 + 账户 */}
      <div className="flex items-center justify-between">
        {/* 社交 pill */}
        <div className="liquid-glass inline-flex items-center gap-1 rounded-full p-1.5">
          {[
            { Icon: Twitter, label: 'Twitter' },
            { Icon: Linkedin, label: 'LinkedIn' },
            { Icon: Instagram, label: 'Instagram' },
          ].map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-white/80 transition-colors"
            >
              <Icon size={14} strokeWidth={2} />
            </a>
          ))}
          <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
            <ArrowRight size={14} strokeWidth={2} />
          </span>
        </div>

        {/* 账户按钮 */}
        <button
          type="button"
          className="liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white hover:scale-105 transition-transform"
        >
          <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <Sparkles size={14} strokeWidth={2} />
          </span>
          Account
        </button>
      </div>

      {/* 社区卡片 */}
      <div className="liquid-glass rounded-2xl w-56 p-4">
        <h3 className="text-sm font-medium text-white">Enter our ecosystem</h3>
        <p className="mt-2 text-xs text-white/60 leading-relaxed">
          Join a community of designers, florists and AI artists shaping the next botanical
          language.
        </p>
      </div>

      {/* 底部特性区 — mt-auto 推到底 */}
      <div className="mt-auto">
        <div className="liquid-glass rounded-[2.5rem] p-3">
          {/* 上方两卡并列 */}
          <div className="grid grid-cols-2 gap-3">
            <FeatureCard
              icon={<Wand2 size={16} strokeWidth={2} />}
              title="Processing"
              description="AI-driven botanical composition engine."
            />
            <FeatureCard
              icon={<BookOpen size={16} strokeWidth={2} />}
              title="Growth Archive"
              description="Curated library of generated forms."
            />
          </div>

          {/* 底部花朵卡 */}
          <div className="liquid-glass rounded-3xl mt-3 p-3 flex items-center gap-3">
            <img
              src={FLOWER_IMAGE}
              alt=""
              className="w-24 h-16 rounded-2xl object-cover shrink-0"
              loading="lazy"
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-white truncate">
                Advanced Plant Sculpting
              </h4>
              <p className="mt-1 text-xs text-white/60 leading-relaxed line-clamp-2">
                Sculpt growth patterns in 3D space with hand-tuned parameters.
              </p>
            </div>
            <button
              type="button"
              aria-label="Add"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:scale-105 transition-transform shrink-0"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="liquid-glass rounded-3xl p-4 flex flex-col gap-2">
      <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
        {icon}
      </span>
      <h4 className="text-sm font-medium text-white">{title}</h4>
      <p className="text-xs text-white/60 leading-relaxed">{description}</p>
    </div>
  )
}
