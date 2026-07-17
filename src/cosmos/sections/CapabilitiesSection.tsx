import { Image, Layers, Lightbulb } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import FadingVideo from '../components/FadingVideo'

const CAPABILITIES_VIDEO_SRC = '/videos/d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4'

type Card = {
  title: string
  body: string
  icon: LucideIcon
  tags: string[]
}

const CARDS: Card[] = [
  {
    title: 'AI Scenery',
    body: 'AI analyzes your product to create indistinguishable natural environments — from Icelandic cliffs to misty forests.',
    icon: Image,
    tags: ['Natural Context', 'Photo Realism', 'Infinite Settings', 'Eco-Vibe'],
  },
  {
    title: 'Batch Production',
    body: 'Style your entire product line in minutes. Create a unified visual identity for catalogues and social media without weeks of retouching.',
    icon: Layers,
    tags: ['Scale Fast', 'Visual Consistency', 'Time Saver', 'Ready to Post'],
  },
  {
    title: 'Smart Lighting',
    body: 'Automatic lighting and material adjustment. Achieve flawless integration with realistic shadows and sunlight.',
    icon: Lightbulb,
    tags: ['Ray Tracing', 'Physical Shadows', 'Studio Quality', 'Sunlight Sync'],
  },
]

/**
 * CapabilitiesSection — Section 2
 *
 * 全屏黑底 + FadingVideo 全屏背景（无 120% 缩放）
 * 内容：顶部 header（kicker + "Production evolved" 两行标题） + 3 张液态玻璃卡片
 */
export default function CapabilitiesSection() {
  return (
    <section className="relative w-full bg-black" style={{ minHeight: '100vh' }}>
      {/* 背景视频：全屏，无 120% 缩放 */}
      <FadingVideo
        src={CAPABILITIES_VIDEO_SRC}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* 内容层 */}
      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="mb-auto">
          <div className="text-sm font-body text-white/80 mb-6">{'// Capabilities'}</div>
          <h2 className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
            Production
            <br />
            evolved
          </h2>
        </header>

        {/* 3 卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {CARDS.map(({ title, body, icon: Icon, tags }) => (
            <article
              key={title}
              className="liquid-glass rounded-[1.25rem] p-6 flex flex-col"
              style={{ minHeight: '360px' }}
            >
              {/* 顶部：图标方块 + 标签 pills */}
              <div className="flex items-start justify-between gap-4">
                <div
                  className="liquid-glass flex items-center justify-center"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '0.75rem',
                  }}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 中部：flex-1 spacer */}
              <div className="flex-1" />

              {/* 底部：标题 + 描述 */}
              <div className="mt-6">
                <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">
                  {title}
                </h3>
                <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                  {body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
