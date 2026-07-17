import { motion } from 'framer-motion'
import { ArrowUpRight, Clock, Globe, Play } from 'lucide-react'
import FadingVideo from '../components/FadingVideo'
import BlurText from '../components/BlurText'
import Navbar from '../components/Navbar'

const HERO_VIDEO_SRC = '/videos/d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4'

const STATS = [
  {
    icon: Clock,
    value: '34.5 Min',
    label: 'Average Videos Watch Time',
  },
  {
    icon: Globe,
    value: '2.8B+',
    label: 'Users Across the Globe',
  },
]

const PARTNERS = ['Aeon', 'Vela', 'Apex', 'Orbit', 'Zeno']

/** 通用入场动画：filter blur(10px) + opacity 0 + y 20 */
const fadeUpVariant = {
  hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
  show: { filter: 'blur(0px)', opacity: 1, y: 0 },
}

const easeOut = [0, 0, 0.2, 1] as const

/**
 * HeroSection — Section 1
 *
 * 全屏黑底 + FadingVideo 背景（120% 宽高 + object-top + 水平居中）
 * z-10 层：Navbar → Hero 内容（flex-1 居中） → Partners
 */
export default function HeroSection() {
  return (
    <section className="relative w-full bg-black" style={{ height: '100vh' }}>
      {/* 背景视频：120% 宽高 + 顶部对齐 + 水平居中 */}
      <FadingVideo
        src={HERO_VIDEO_SRC}
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: '120%', height: '120%' }}
      />

      {/* z-10 内容层 */}
      <div className="relative z-10 flex flex-col h-full">
        <Navbar />

        {/* Hero 内容（居中） */}
        <div className="flex-1 flex flex-col items-center justify-center pt-24 px-4 text-center">
          {/* Badge */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, ease: easeOut, delay: 0.4 }}
            className="liquid-glass flex items-center gap-2 rounded-full pl-1 pr-3 py-1"
          >
            <span className="bg-white text-black px-3 py-1 text-xs font-semibold rounded-full font-body">
              New
            </span>
            <span className="text-sm text-white/90 font-body">
              Maiden Crewed Voyage to Mars Arrives 2026
            </span>
          </motion.div>

          {/* Headline — BlurText 逐词模糊入场 */}
          <BlurText
            text="Venture Past Our Sky Across the Universe"
            className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl tracking-[-4px] mt-6"
          />

          {/* Subheading */}
          <motion.p
            variants={fadeUpVariant}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, ease: easeOut, delay: 0.8 }}
            className="mt-4 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight"
          >
            Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough
            engineering bring deep-space exploration within reach—secure and extraordinary.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, ease: easeOut, delay: 1.1 }}
            className="flex items-center gap-6 mt-6"
          >
            <button
              type="button"
              className="liquid-glass-strong flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white font-body"
            >
              Start Your Voyage
              <ArrowUpRight className="h-5 w-5" />
            </button>
            <a
              href="#"
              className="flex items-center gap-1.5 text-sm font-medium text-white font-body hover:text-white/80 transition-colors"
            >
              View Liftoff
              <Play className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, ease: easeOut, delay: 1.3 }}
            className="flex items-stretch gap-4 mt-8"
          >
            {STATS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="liquid-glass p-5 rounded-[1.25rem] flex flex-col gap-3"
                style={{ width: '220px' }}
              >
                <Icon className="text-white" size={28} />
                <div>
                  <div className="font-heading italic text-white text-4xl tracking-[-1px] leading-none">
                    {value}
                  </div>
                  <div className="text-xs text-white font-body font-light mt-2">{label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Partners */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, ease: easeOut, delay: 1.4 }}
          className="flex flex-col items-center gap-4 pb-8"
        >
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
            Collaborating with top aerospace pioneers globally
          </div>
          <div className="flex items-center gap-12 md:gap-16">
            {PARTNERS.map((name) => (
              <span
                key={name}
                className="font-heading italic text-white text-2xl md:text-3xl tracking-tight"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
