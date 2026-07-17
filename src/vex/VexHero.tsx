import AnimatedHeading from './components/AnimatedHeading'
import FadeIn from './components/FadeIn'

const HERO_VIDEO_SRC = '/videos/c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4'

const NAV_LINKS = ['Story', 'Investing', 'Building', 'Advisory']

/**
 * VexHero — 全屏视频背景 + 玻璃态导航 + 底部对齐 hero
 *
 * - 视频背景：autoPlay loop muted playsInline object-cover，无任何叠加层
 * - Navbar：px-6 md:px-12 lg:px-16 + pt-6 包裹，内部 .liquid-glass rounded-xl px-4 py-2
 *   左 VEX logo / 中 4 链接 gap-8 hover:gray-300 / 右白底 "Start a Chat"
 * - Hero 内容：底部对齐（flex-1 flex flex-col justify-end），lg 两列网格
 *   左：AnimatedHeading 逐字入场 + FadeIn 副文本 + 双 CTA
 *   右：FadeIn 玻璃 tag "Investing. Building. Advisory."
 *
 * 颜色：黑底白字 gray-300 次要 white/20 边框，无紫无 indigo
 */
export default function VexHero() {
  return (
    <div data-theme="vex" className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* 背景视频（无叠加层） */}
      <video
        src={HERO_VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-hidden="true"
      />

      {/* 前景层 */}
      <div className="relative z-10 flex flex-col min-h-screen px-6 md:px-12 lg:px-16 pt-6">
        {/* Navbar */}
        <nav className="vex-glass rounded-xl px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-semibold tracking-tight text-white"
          >
            VEX
          </a>

          {/* 中：desktop 链接 */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-white hover:text-gray-300 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* 右：白底按钮 */}
          <button
            type="button"
            className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Start a Chat
          </button>
        </nav>

        {/* Hero 内容（底部对齐） */}
        <div className="flex-1 flex flex-col justify-end pb-12 lg:pb-16 lg:grid lg:grid-cols-2 lg:items-end gap-8 mt-16">
          {/* 左列：主内容 */}
          <div>
            <AnimatedHeading
              text={'Shaping tomorrow\nwith vision and action.'}
              initialDelay={200}
              charDelay={30}
              charDuration={500}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-4"
              style={{ letterSpacing: '-0.04em' }}
            />
            <FadeIn delay={800} duration={1000}>
              <p className="text-base md:text-lg text-gray-300 mb-5">
                We back visionaries and craft ventures that define what comes next.
              </p>
            </FadeIn>

            <FadeIn delay={1200} duration={1000}>
              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Start a Chat
                </button>
                <button
                  type="button"
                  className="vex-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors"
                >
                  Explore Now
                </button>
              </div>
            </FadeIn>
          </div>

          {/* 右列：tag */}
          <div className="flex items-end justify-start lg:justify-end mt-8 lg:mt-0">
            <FadeIn delay={1400} duration={1000}>
              <div className="vex-glass border border-white/20 px-6 py-3 rounded-xl">
                <p className="text-lg md:text-xl lg:text-2xl font-light text-white">
                  Investing. Building. Advisory.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  )
}
