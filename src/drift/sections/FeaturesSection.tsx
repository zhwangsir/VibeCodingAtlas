import { useEffect, useRef, useState } from 'react'

const BG_IMAGE = '/images/46df5cc4-ad98-4541-9236-a2659c1478a4_1920.webp'

type Feature = {
  title: string
  description: string
  video: string
}

const FEATURES: Feature[] = [
  {
    title: 'Built for ease, not urgency',
    description:
      'Drift strips away the noise that makes organizing feel draining. Every surface is made to be soft, quiet, and intuitive so you can move forward, not get stuck decoding.',
    video:
      '/videos/5fa1187d-9ac6-44fb-82ab-54376200abc0.mp4',
  },
  {
    title: 'The gentlest way to start',
    description:
      'Beginning your day should feel natural, not daunting. Drift eases you into motion with subtle cues and a quiet view of what deserves your energy right now.',
    video:
      '/videos/395bc785-bb21-4e65-abf6-27c56f0764b6.mp4',
  },
  {
    title: 'Deep, undivided focus',
    description:
      'No interruptions, no clutter. Drift holds you in the present task with a stripped-back layout that softens all else until you are truly ready to shift.',
    video:
      '/videos/d2e390fd-1846-4fe7-a4d8-8d2f1c875358.mp4',
  },
]

/**
 * DriftLogo — 与 About 区同款 SVG，fill 参数化
 * 此处用于 feature 卡片顶部，fill 为半透明白
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
 * FeaturesSection — 滚动驱动特性区
 * - 固定背景图（-z-10）+ 内容覆盖
 * - lg+ 双栏布局：左 sticky（标题 + 导航按钮 + CTA），右滚动卡片
 * - IntersectionObserver × 2：
 *   - active 检测（threshold 0.6）：高亮对应导航按钮
 *   - reveal 动画（threshold 0.15）：从右滑入（translate-x-16 → 0, opacity 0 → 1, duration-700 ease-out），一次性
 */
export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const navRefs = useRef<(HTMLButtonElement | null)[]>([])

  /** 点击导航按钮 → 平滑滚动到对应卡片（block: 'center'） */
  const scrollToCard = (index: number) => {
    const card = document.getElementById(`drift-feature-card-${index}`)
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <section
      id="features"
      className="relative px-5 md:px-10 lg:px-16 py-20 md:py-40 lg:py-48"
    >
      {/* 固定背景图 */}
      <div
        className="fixed inset-0 -z-10 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
        aria-hidden="true"
      />

      {/* 双栏网格 */}
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] xl:grid-cols-[460px_1fr] gap-12 lg:gap-24 xl:gap-48 max-w-[1400px] mx-auto">
        {/* 左列 — sticky */}
        <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between lg:py-32">
          {/* 顶部标题 */}
          <div>
            <h2 className="text-white text-2xl sm:text-3xl lg:text-[46px] leading-[1.2] font-normal">
              Software that flows with your mind, not over it
            </h2>

            {/* 导航按钮（lg+ 显示） */}
            <div className="hidden lg:flex flex-col gap-2 mt-10">
              {FEATURES.map((feature, i) => {
                const active = i === activeIndex
                return (
                  <button
                    key={feature.title}
                    ref={(el) => {
                      navRefs.current[i] = el
                    }}
                    type="button"
                    onClick={() => scrollToCard(i)}
                    className={`text-left px-4 py-3 rounded-xl transition-colors ${
                      active
                        ? 'bg-black/20 text-white'
                        : 'bg-black/20 text-white/40 hover:text-white/70'
                    }`}
                  >
                    <span className="text-sm font-medium">{feature.title}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* 底部 CTA（lg+ 显示） */}
          <div className="hidden lg:block">
            <p className="text-white text-sm font-medium mb-4">
              No noise. No complicated systems. Just your day, gently sorted.
            </p>
            <button
              type="button"
              className="bg-white text-black text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-white/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Start for free
            </button>
          </div>
        </div>

        {/* 右列 — 滚动卡片 */}
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
          {FEATURES.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={i}
              onActiveChange={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * FeatureCard — 单个特性卡片
 * 维护两个 IntersectionObserver：
 * - active（threshold 0.6）：当卡片可见度 ≥ 60% 时回调 onActiveChange(index)
 * - reveal（threshold 0.15）：首次可见 ≥ 15% 时将 revealed 置 true，触发滑入动画
 */
function FeatureCard({
  feature,
  index,
  onActiveChange,
}: {
  feature: Feature
  index: number
  onActiveChange: (index: number) => void
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)

  // Active 检测 — threshold 0.6
  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onActiveChange(index)
          }
        })
      },
      { threshold: 0.6 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [index, onActiveChange])

  // Reveal 动画 — threshold 0.15，一次性
  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      id={`drift-feature-card-${index}`}
      className="bg-black/20 backdrop-blur-sm rounded-3xl p-6 md:p-10"
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translateX(0)' : 'translateX(4rem)',
        transition: 'opacity 700ms ease-out, transform 700ms ease-out',
      }}
    >
      {/* logo */}
      <DriftLogo fill="rgba(255,255,255,0.8)" />

      {/* 标题 */}
      <h3 className="mt-5 text-white text-xl md:text-2xl font-medium">{feature.title}</h3>

      {/* 视频 */}
      <div className="mt-6 aspect-video rounded-2xl overflow-hidden bg-black/30">
        <video
          className="w-full h-full object-cover"
          src={feature.video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      </div>

      {/* 描述 */}
      <p className="mt-6 text-white/60 font-medium text-sm md:text-base leading-relaxed">
        {feature.description}
      </p>
    </div>
  )
}
