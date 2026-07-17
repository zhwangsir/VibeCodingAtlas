/**
 * NeuralKineticsHero — 全屏视频背景 hero
 *
 * 严格按 NEURALKINETICS_PROMPT 实现：
 * - 背景 #f0f0ee，全屏 autoplay muted looping playsInline 视频
 * - 居中胶囊 navbar（两个独立 pills，#EDEDED bg）
 * - 自定义 logo SVG（fill rgb(84,84,84)）
 * - 左下角 hero 内容：Shark Tank 徽章 / h1 标题 / 副文 / CTA
 * - 强调色 blue-500/600/400，文字 gray-900/700/400
 * - 默认 Tailwind sans-serif 字体栈（无自定义字体）
 * - 仅使用 react + lucide-react + Tailwind（无 framer-motion）
 */

/** 视频 URL（CloudFront 原始资源已本地化到 /videos/） */
const HERO_VIDEO_SRC =
  '/videos/c6a8989c-d716-4d8d-8745-e972a2eec711.mp4'

const NAV_LINKS = ['Story', 'Products', 'Help', 'Support']

/** Logo SVG：单 path，fill rgb(84,84,84)，viewBox 0 0 256 256 */
function Logo() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="rgb(84, 84, 84)"
        d="M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z"
      />
    </svg>
  )
}

export default function NeuralKineticsHero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f0f0ee]">
      {/* 背景视频层 */}
      <video
        src={HERO_VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      {/* 前景内容 */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar — 居中胶囊式，两个独立 pills */}
        <nav className="flex items-center justify-center pt-4 sm:pt-6 px-4 sm:px-8 gap-2 sm:gap-3">
          {/* 左侧圆形 logo 容器 */}
          <div
            className="flex items-center justify-center rounded-full w-10 h-10 sm:w-11 sm:h-11 shrink-0"
            style={{ backgroundColor: '#EDEDED' }}
          >
            <Logo />
          </div>

          {/* 右侧 pill 容器（nav links） */}
          <div
            className="flex items-center gap-4 sm:gap-10 rounded-xl px-4 sm:px-8 py-2.5 sm:py-3"
            style={{ backgroundColor: '#EDEDED' }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[12px] sm:text-[14px] font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero 内容 — 左下对齐 */}
        <div className="flex-1 flex items-end pb-10 sm:pb-16 lg:pb-20 px-6 sm:px-12 md:px-20 lg:px-28">
          <div className="max-w-xs">
            {/* 1. Shark Tank 徽章 */}
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-blue-500 hover:text-blue-600 transition-colors mb-3 group"
            >
              Seen on Shark Tank in India
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>

            {/* 2. 主标题 */}
            <h1 className="text-[1.5rem] sm:text-[1.75rem] leading-[1.15] font-medium text-gray-900 tracking-tight mb-3">
              Simple, smart prosthetics made for people who keep fighting.
            </h1>

            {/* 3. 副文 */}
            <p className="text-[13px] text-gray-400 font-normal mb-3">
              Reclaim your movement now.
            </p>

            {/* 4. CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-blue-500 border border-blue-400 rounded-full px-5 py-2.5 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200 group"
            >
              Try a free fitting
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
