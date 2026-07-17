import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'

const VIDEO_URL =
  '/videos/0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4'

const CARD2_ICON = '/images/4a5edc79-d78f-4637-ac8b-53c43c220606_1280.webp'

const CARD3_ICON = '/images/ed9845ab-f5b2-4018-8ce7-07cc01823522_1280.webp'

const CARD4_ICON = '/images/f56666dc-c099-4778-ad82-9ad4f209567b_1280.webp'

const EASE = [0.22, 1, 0.36, 1] as const

type FeatureCardData = {
  num: string
  title: string
  icon: string
  items: string[]
}

const FEATURE_CARDS: FeatureCardData[] = [
  {
    num: '01',
    title: 'Project Storyboard.',
    icon: CARD2_ICON,
    items: [
      'Plan scenes with visual beats and shot lists',
      'Collaborate with your team in real time',
      'Export to industry-standard formats',
      'Track revision history automatically',
    ],
  },
  {
    num: '02',
    title: 'Smart Critiques.',
    icon: CARD3_ICON,
    items: [
      'AI analysis of pacing and composition',
      'Creative notes from seasoned mentors',
      'Tool integrations with your favorite apps',
    ],
  },
  {
    num: '03',
    title: 'Immersion Capsule.',
    icon: CARD4_ICON,
    items: [
      'Silence notifications during deep work',
      'Ambient soundscapes tuned to your flow',
      'Sync schedules with your creative rhythm',
    ],
  },
]

/** 单个 checklist 特性卡片 */
function FeatureCard({ card, index }: { card: FeatureCardData; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: EASE }}
      className="bg-[#212121] rounded-2xl p-5 sm:p-6 flex flex-col gap-4 h-full"
    >
      {/* 顶部图标 */}
      <img
        src={card.icon}
        alt=""
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
        draggable={false}
      />

      {/* 标题 + 编号 */}
      <div className="flex items-baseline gap-2">
        <span className="text-primary/40 text-xs font-medium">{card.num}</span>
        <h3 className="text-primary text-base sm:text-lg font-medium">{card.title}</h3>
      </div>

      {/* checklist */}
      <ul className="flex flex-col gap-2.5 flex-1">
        {card.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check size={14} className="text-primary shrink-0 mt-0.5" />
            <span className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      {/* Learn more 链接 */}
      <a
        href="#"
        className="text-primary text-xs sm:text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-md w-fit"
      >
        Learn more
        <ArrowRight size={14} className="rotate-[-45deg]" />
      </a>
    </motion.div>
  )
}

export default function FeaturesSection() {
  return (
    <section className="relative min-h-screen bg-black px-4 md:px-6 py-20 md:py-32">
      {/* 噪点背景 */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* 标题 — block + text-left 对齐到容器左侧 */}
        <div className="mb-12 md:mb-16">
          <WordsPullUpMultiStyle
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal max-w-3xl"
            segments={[
              { text: 'Studio-grade workflows for visionary creators.', className: 'text-primary' },
              { text: 'Built for pure vision. Powered by art.', className: 'text-gray-500' },
            ]}
          />
        </div>

        {/* 4 卡网格 — 等高布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          {/* 卡片 1 — 视频卡 */}
          <VideoCard />

          {/* 卡片 2-4 — checklist 卡 */}
          {FEATURE_CARDS.map((card, i) => (
            <FeatureCard key={card.num} card={card} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

/** 卡片 1 — 全视频背景 + 底部文字 */
function VideoCard() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: EASE }}
      className="relative rounded-2xl overflow-hidden min-h-[240px] lg:h-full"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
      <p
        className="absolute bottom-4 left-4 text-sm sm:text-base font-medium"
        style={{ color: '#E1E0CC' }}
      >
        Your creative canvas.
      </p>
    </motion.div>
  )
}
