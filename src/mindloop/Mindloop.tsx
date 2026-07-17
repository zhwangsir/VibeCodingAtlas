/* ============================================================
 *  Mindloop — 暗色单色 newsletter/content 平台落地页
 *  字体:Inter (sans) + Instrument Serif (serif italic 强调)
 *  核心:7 个 section + Framer Motion fadeUp 错位入场 + HLS 视频流
 * ============================================================ */
import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hls from 'hls.js'
import { Instagram, Linkedin, Twitter } from 'lucide-react'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'

/* ===== 视频 URL ===== */
const HERO_VIDEO =
  '/videos/0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4'

const MISSION_VIDEO =
  '/videos/a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4'

const SOLUTION_VIDEO =
  '/videos/8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4'

const CTA_HLS_URL =
  '/videos/mindloop-hls.mp4'

/* ===== 内联 SVG 头像(替代本地 PNG) ===== */
const avatarSvg = (letter: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="64" height="64" rx="32" fill="#222"/><text x="32" y="38" text-anchor="middle" font-family="Inter" font-size="28" font-weight="600" fill="#fff">${letter}</text></svg>`
  )}`

const AVATARS = [avatarSvg('A'), avatarSvg('B'), avatarSvg('C')]

/* ===== 平台图标(内联 SVG 占位) ===== */
const platformIcon = (label: string, bg: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" rx="32" fill="${bg}"/><text x="100" y="115" text-anchor="middle" font-family="Inter" font-size="36" font-weight="700" fill="#fff">${label}</text></svg>`
  )}`

const PLATFORMS = [
  {
    name: 'ChatGPT',
    icon: platformIcon('GPT', '#0a0a0a'),
    description: 'Conversational AI that answers, writes, and reasons in natural language.',
  },
  {
    name: 'Perplexity',
    icon: platformIcon('P', '#0a0a0a'),
    description: 'Answer engine that cites sources and summarizes the web in real time.',
  },
  {
    name: 'Google AI',
    icon: platformIcon('Gemini', '#0a0a0a'),
    description: 'Multimodal models integrated into search and everyday productivity tools.',
  },
]

/* ===== Nav 链接 ===== */
const NAV_LINKS = ['Home', 'How It Works', 'Philosophy', 'Use Cases']

/* ===== 特性数据 ===== */
const FEATURES = [
  { title: 'Curated Feed', description: 'Hand-picked newsletters tuned to your interests and depth.' },
  { title: 'Writer Tools', description: 'Compose, schedule, and analyze with a focused editor suite.' },
  { title: 'Community', description: 'Threads, replies, and shared highlights around every issue.' },
  { title: 'Distribution', description: 'Reach the right readers across channels without the noise.' },
]

/* ============================================================
 *  fadeUp — 可复用 Framer Motion 错位入场动画
 * ============================================================ */
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
})

/* ============================================================
 *  ConcentricLogo — 同心圆 logo 图标
 * ============================================================ */
function ConcentricLogo({ size = 'md' }: { size?: 'md' | 'lg' }) {
  const outer = size === 'lg' ? 'w-10 h-10' : 'w-7 h-7'
  const inner = size === 'lg' ? 'w-5 h-5' : 'w-3 h-3'
  const outerBorder = size === 'lg' ? 'border-2' : 'border-2'
  const innerBorder = size === 'lg' ? 'border' : 'border'
  return (
    <div className={`relative ${outer} ${outerBorder} border-foreground/60 rounded-full flex items-center justify-center`}>
      <div className={`${inner} ${innerBorder} border-foreground/60 rounded-full`} />
    </div>
  )
}

/* ============================================================
 *  HlsVideo — 使用 hls.js 加载 HLS 流(CTA 背景)
 * ============================================================ */
function HlsVideo({ src, className }: { src: string; className?: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // 非 HLS 源(本地 MP4)直接使用原生 video
    if (!src.endsWith('.m3u8')) {
      video.src = src
      return
    }

    let hls: Hls | null = null
    if (Hls.isSupported()) {
      hls = new Hls()
      hls.loadSource(src)
      hls.attachMedia(video)
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Safari 原生 HLS 支持
      video.src = src
    }

    return () => {
      if (hls) hls.destroy()
    }
  }, [src])

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      className={className}
    />
  )
}

/* ============================================================
 *  Navbar — 透明 fixed 顶部
 * ============================================================ */
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 md:px-28 py-4">
      <div className="flex items-center justify-between gap-8">
        {/* 左:Logo + nav 链接 */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <ConcentricLogo />
            <span className="font-bold text-foreground">Mindloop</span>
          </div>
          {/* nav 链接 • 分隔 */}
          <div className="hidden md:flex items-center gap-3 text-sm">
            {NAV_LINKS.map((link, i) => (
              <div key={link} className="flex items-center gap-3">
                {i > 0 && <span className="text-muted-foreground/50">•</span>}
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  {link}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 右:社交图标 */}
        <div className="flex items-center gap-2">
          {[Instagram, Linkedin, Twitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 hover:text-foreground transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

/* ============================================================
 *  Hero — 全屏视口,背景视频 + 订阅表单
 * ============================================================ */
function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 背景视频 */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_VIDEO}
      />
      {/* 底部渐变过渡到黑 */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent" />

      {/* 内容 */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center pt-28 md:pt-32">
        {/* Avatar 行 */}
        <motion.div
          className="mb-8 flex items-center gap-3"
          {...fadeUp(0)}
        >
          <div className="flex -space-x-2">
            {AVATARS.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="h-8 w-8 rounded-full border-2 border-background object-cover"
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">7,000+ people already subscribed</span>
        </motion.div>

        {/* 标题 */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] text-foreground"
          {...fadeUp(0.1)}
        >
          Get <span className="font-serif-italic font-normal">Inspired</span> with Us
        </motion.h1>

        {/* 副标题 */}
        <motion.p
          className="mt-6 max-w-xl text-lg text-hero-subtitle"
          {...fadeUp(0.2)}
        >
          Join our feed for meaningful updates, news around technology and a shared journey toward depth and direction.
        </motion.p>

        {/* 邮箱表单 */}
        <motion.form
          className="mt-8 liquid-glass flex w-full max-w-lg items-center gap-2 rounded-full p-2"
          {...fadeUp(0.3)}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-transparent px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none"
          />
          <motion.button
            type="submit"
            className="rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            SUBSCRIBE
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

/* ============================================================
 *  SearchChanged — "Search has changed" section
 * ============================================================ */
function SearchChanged() {
  return (
    <section className="px-6 pt-52 md:pt-64 pb-6 md:pb-9 text-center">
      <motion.h2
        className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] text-foreground"
        {...fadeUp(0)}
      >
        Search has <span className="font-serif-italic font-normal">changed.</span> Have you?
      </motion.h2>

      <motion.p
        className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground mb-24"
        {...fadeUp(0.1)}
      >
        The way we discover information has transformed. Are your habits keeping up?
      </motion.p>

      {/* 平台卡片 */}
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-3 md:gap-8 mb-20">
        {PLATFORMS.map((p, i) => (
          <motion.div key={p.name} className="flex flex-col items-center" {...fadeUp(0.2 + i * 0.1)}>
            <img src={p.icon} alt={p.name} className="mb-4 h-[200px] w-[200px] object-contain" />
            <h3 className="font-semibold text-base text-foreground">{p.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs">{p.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-sm text-muted-foreground text-center"
        {...fadeUp(0.5)}
      >
        If you don&apos;t answer the questions, someone else will.
      </motion.p>
    </section>
  )
}

/* ============================================================
 *  Mission — 滚动驱动逐词显示
 * ============================================================ */
const MISSION_P1 =
  "We're building a space where curiosity meets clarity — where readers find depth, writers find reach, and every newsletter becomes a conversation worth having."
const MISSION_P1_HIGHLIGHT = new Set(['curiosity', 'meets', 'clarity'])

const MISSION_P2 =
  'A platform where content, community, and insight flow together — with less noise, less friction, and more meaning for everyone involved.'

function ScrollWord({
  word,
  range,
  progress,
  highlight,
}: {
  word: string
  range: [number, number]
  progress: ReturnType<typeof useScroll>['scrollYProgress']
  highlight: boolean
}) {
  const opacity = useTransform(progress, range, [0.15, 1])
  return (
    <motion.span style={{ opacity, color: highlight ? 'hsl(var(--foreground))' : 'hsl(var(--hero-subtitle))' }}>
      {word}{' '}
    </motion.span>
  )
}

function Mission() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const words1 = MISSION_P1.split(' ')
  const words2 = MISSION_P2.split(' ')
  const totalWords = words1.length + words2.length

  return (
    <section ref={ref} className="px-6 pt-0 pb-32 md:pb-44">
      {/* 视频 */}
      <motion.div
        className="mx-auto mb-16 aspect-square w-full max-w-[800px] overflow-hidden"
        {...fadeUp(0)}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          src={MISSION_VIDEO}
        />
      </motion.div>

      {/* 段落 1 */}
      <div className="mx-auto max-w-3xl text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px]">
        {words1.map((word, i) => {
          const clean = word.replace(/[^a-zA-Z]/g, '').toLowerCase()
          return (
            <ScrollWord
              key={i}
              word={word}
              range={[i / totalWords, (i + 1) / totalWords]}
              progress={scrollYProgress}
              highlight={MISSION_P1_HIGHLIGHT.has(clean)}
            />
          )
        })}
      </div>

      {/* 段落 2 */}
      <div className="mx-auto mt-10 max-w-3xl text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground">
        {words2.map((word, i) => (
          <ScrollWord
            key={i}
            word={word}
            range={[(words1.length + i) / totalWords, (words1.length + i + 1) / totalWords]}
            progress={scrollYProgress}
            highlight={false}
          />
        ))}
      </div>
    </section>
  )
}

/* ============================================================
 *  Solution — 平台介绍 + 4 列特性
 * ============================================================ */
function Solution() {
  return (
    <section className="px-6 py-32 md:py-44 border-t border-border/30">
      <motion.div {...fadeUp(0)} className="mx-auto max-w-3xl text-center">
        <span className="text-xs tracking-[3px] uppercase text-muted-foreground">Solution</span>
        <h2 className="mt-4 text-4xl md:text-6xl font-medium tracking-[-1px] text-foreground">
          The platform for <span className="font-serif-italic font-normal">meaningful</span> content
        </h2>
      </motion.div>

      <motion.div
        className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl"
        {...fadeUp(0.1)}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="aspect-[3/1] w-full object-cover"
          src={SOLUTION_VIDEO}
        />
      </motion.div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-4">
        {FEATURES.map((f, i) => (
          <motion.div key={f.title} {...fadeUp(0.2 + i * 0.1)}>
            <h3 className="font-semibold text-base text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ============================================================
 *  CTA — HLS 背景视频
 * ============================================================ */
function CTA() {
  return (
    <section className="relative overflow-hidden py-32 md:py-44 border-t border-border/30">
      {/* HLS 背景视频 */}
      <HlsVideo src={CTA_HLS_URL} className="absolute inset-0 h-full w-full object-cover z-0" />
      {/* 叠加层 */}
      <div className="absolute inset-0 bg-background/45 z-[1]" />

      {/* 内容 */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.div {...fadeUp(0)}>
          <ConcentricLogo size="lg" />
        </motion.div>
        <motion.h2
          className="mt-6 text-4xl md:text-6xl font-medium tracking-[-1px] text-foreground"
          {...fadeUp(0.1)}
        >
          Start Your <span className="font-serif-italic font-normal">Journey</span>
        </motion.h2>
        <motion.p
          className="mt-4 max-w-md text-muted-foreground"
          {...fadeUp(0.2)}
        >
          Join thousands of readers and writers building a deeper, quieter corner of the internet.
        </motion.p>
        <motion.div className="mt-8 flex flex-wrap items-center justify-center gap-4" {...fadeUp(0.3)}>
          <motion.a
            href="#"
            className="rounded-lg bg-foreground text-background px-8 py-3.5 font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Subscribe Now
          </motion.a>
          <motion.a
            href="#"
            className="liquid-glass rounded-lg px-8 py-3.5 font-medium text-foreground"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Writing
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

/* ============================================================
 *  Footer
 * ============================================================ */
function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 py-12 px-8 md:px-28 md:flex-row">
      <span className="text-sm text-muted-foreground">© 2026 Mindloop. All rights reserved.</span>
      <div className="flex items-center gap-6">
        {['Privacy', 'Terms', 'Contact'].map((link) => (
          <a
            key={link}
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  )
}

/* ============================================================
 *  Mindloop — 主入口
 * ============================================================ */
export default function Mindloop() {
  return (
    <div data-theme="mindloop" className="min-h-screen w-full bg-background text-foreground">
      <Navbar />
      <Hero />
      <SearchChanged />
      <Mission />
      <Solution />
      <CTA />
      <Footer />
    </div>
  )
}
