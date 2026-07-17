import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, ArrowRight, Instagram, Twitter, ArrowUpRight } from 'lucide-react'

/* ============================================================
   资源 URL
   ============================================================ */

const HERO_VIDEO =
  '/videos/a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4'

const FEATURED_VIDEO =
  '/videos/9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4'

const PHILOSOPHY_VIDEO =
  '/videos/e938b29f-a43a-41ec-a153-3d4730578ab8.mp4'

const SERVICE_VIDEO_1 =
  '/videos/f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4'

const SERVICE_VIDEO_2 =
  '/videos/c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4'

const ease = [0.16, 1, 0.3, 1] as const

/* ============================================================
   FadingVideo — rAF 驱动的淡入淡出循环视频
   ============================================================ */
function FadingVideo({
  src,
  className,
  loop = false,
  autoPlay = true,
}: {
  src: string
  className?: string
  loop?: boolean
  autoPlay?: boolean
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    /* 循环模式：手动 fade in/out，不使用 loop 属性 */
    if (loop && !reduce) {
      video.loop = false

      const animateOpacity = (from: number, to: number, duration: number) => {
        const start = performance.now()
        const step = (now: number) => {
          const t = Math.min(1, (now - start) / duration)
          video.style.opacity = String(from + (to - from) * t)
          if (t < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }

      const onCanPlay = () => {
        video.play().catch(() => {})
        animateOpacity(0, 1, 500)
      }

      const onTimeUpdate = () => {
        const remaining = video.duration - video.currentTime
        if (remaining <= 0.55 && !video.dataset.fadingOut) {
          video.dataset.fadingOut = '1'
          const startOpacity = parseFloat(video.style.opacity || '1')
          animateOpacity(startOpacity, 0, 500)
        }
      }

      const onEnded = () => {
        video.style.opacity = '0'
        delete video.dataset.fadingOut
        window.setTimeout(() => {
          video.currentTime = 0
          video.play().catch(() => {})
          animateOpacity(0, 1, 500)
        }, 100)
      }

      video.addEventListener('canplay', onCanPlay)
      video.addEventListener('timeupdate', onTimeUpdate)
      video.addEventListener('ended', onEnded)

      return () => {
        video.removeEventListener('canplay', onCanPlay)
        video.removeEventListener('timeupdate', onTimeUpdate)
        video.removeEventListener('ended', onEnded)
      }
    }

    /* 非循环或 reduce motion：使用原生 loop（若有） */
    if (loop && reduce) {
      video.loop = true
      video.style.opacity = '1'
    }
  }, [loop])

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      autoPlay={autoPlay}
      playsInline
      preload="auto"
      loop={!loop}
      className={className}
      style={{ opacity: loop ? 0 : 1 }}
    />
  )
}

/* ============================================================
   SECTION 1 — Hero
   ============================================================ */
function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      {/* 背景视频 */}
      <FadingVideo src={HERO_VIDEO} loop className="absolute inset-0 h-full w-full object-cover object-bottom" />

      {/* Navbar */}
      <nav className="relative z-20 px-6 py-6">
        <div className="liquid-glass mx-auto flex w-full max-w-5xl items-center justify-between rounded-full px-6 py-3">
          <div className="flex items-center gap-3">
            <Globe size={24} className="text-white" strokeWidth={1.5} />
            <span className="text-lg font-semibold text-white">Asme</span>
            <div className="ml-8 hidden items-center gap-8 md:flex">
              {['Features', 'Pricing', 'About'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-sm font-medium text-white">Sign Up</button>
            <button className="liquid-glass rounded-full px-6 py-2 text-sm font-medium text-white">Login</button>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex flex-1 -translate-y-[20%] flex-col items-center justify-center px-6 py-12 text-center">
        <h1
          className="font-instrument mb-10 whitespace-nowrap text-7xl tracking-tight text-white md:text-8xl lg:text-9xl"
        >
          Know it <em className="italic">all</em>.
        </h1>

        <div className="w-full max-w-xl">
          <form
            className="liquid-glass flex items-center gap-3 rounded-full py-2 pl-6 pr-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="rounded-full bg-white p-3 text-black transition-transform hover:scale-105 active:scale-95"
            >
              <ArrowRight size={20} strokeWidth={1.5} />
            </button>
          </form>
        </div>

        <p className="mt-6 max-w-md px-4 text-sm leading-relaxed text-white">
          Stay updated with the latest news and insights. Subscribe to our newsletter today and never miss out on
          exciting updates.
        </p>

        <button className="liquid-glass mt-8 rounded-full px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5">
          Manifesto
        </button>
      </div>

      {/* Social icons */}
      <div className="relative z-10 flex justify-center gap-4 pb-12">
        {[
          { Icon: Instagram, label: 'Instagram' },
          { Icon: Twitter, label: 'Twitter' },
          { Icon: Globe, label: 'Website' },
        ].map(({ Icon, label }) => (
          <button
            key={label}
            aria-label={label}
            className="liquid-glass rounded-full p-4 text-white/80 transition-all hover:bg-white/5 hover:text-white"
          >
            <Icon size={20} strokeWidth={1.5} />
          </button>
        ))}
      </div>
    </section>
  )
}

/* ============================================================
   SECTION 2 — About
   ============================================================ */
function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-black px-6 pb-10 pt-32 md:pb-14 md:pt-44"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-6 text-sm uppercase tracking-widest text-white/40"
        >
          About Us
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="font-instrument text-4xl leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          Pioneering <em className="italic text-white/60">ideas</em> for
          <br className="hidden md:block" /> minds that <em className="italic text-white/60">create, build, and inspire.</em>
        </motion.h2>
      </div>
    </section>
  )
}

/* ============================================================
   SECTION 3 — Featured Video
   ============================================================ */
function FeaturedVideoSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="overflow-hidden bg-black px-6 pb-20 pt-6 md:pb-32 md:pt-10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease }}
        className="relative mx-auto aspect-video max-w-6xl overflow-hidden rounded-3xl"
      >
        <FadingVideo src={FEATURED_VIDEO} className="h-full w-full object-cover" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-6 p-6 md:flex-row md:items-end md:justify-between md:p-10">
          <div className="liquid-glass max-w-md rounded-2xl p-6 md:p-8">
            <p className="mb-3 text-xs uppercase tracking-widest text-white/50">Our Approach</p>
            <p className="text-sm leading-relaxed text-white md:text-base">
              We believe in the power of curiosity-driven exploration. Every project starts with a question, and every
              answer opens a new door to innovation.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="liquid-glass rounded-full px-8 py-3 text-sm font-medium text-white"
          >
            Explore more
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}

/* ============================================================
   SECTION 4 — Philosophy / Innovation x Vision
   ============================================================ */
function PhilosophySection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="overflow-hidden bg-black px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="font-instrument mb-16 text-5xl tracking-tight text-white md:mb-24 md:text-7xl lg:text-8xl"
        >
          Innovation <em className="italic text-white/40">x</em> Vision
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="aspect-[4/3] overflow-hidden rounded-3xl"
          >
            <FadingVideo src={PHILOSOPHY_VIDEO} className="h-full w-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-white/40">Choose your space</p>
              <p className="text-base leading-relaxed text-white/70 md:text-lg">
                Every meaningful breakthrough begins at the intersection of disciplined strategy and remarkable creative
                vision. We operate at that crossroads, turning bold thinking into tangible outcomes that move people and
                reshape industries.
              </p>
            </div>
            <div className="h-px w-full bg-white/10" />
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-white/40">Shape the future</p>
              <p className="text-base leading-relaxed text-white/70 md:text-lg">
                We believe that the best work emerges when curiosity meets conviction. Our process is designed to uncover
                hidden opportunities and translate them into experiences that resonate long after the first impression.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   SECTION 5 — Services / What We Do
   ============================================================ */
function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const cards = [
    {
      video: SERVICE_VIDEO_1,
      tag: 'Strategy',
      title: 'Research & Insight',
      description:
        'We dig deep into data, culture, and human behavior to surface the insights that drive meaningful, lasting change.',
    },
    {
      video: SERVICE_VIDEO_2,
      tag: 'Craft',
      title: 'Design & Execution',
      description:
        'From concept to launch, we obsess over every detail to deliver experiences that feel effortless and look extraordinary.',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="mb-12 flex items-center justify-between md:mb-16"
        >
          <h2 className="text-3xl tracking-tight text-white md:text-5xl">What we do</h2>
          <span className="hidden text-sm text-white/40 md:block">Our services</span>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease, delay: 0.15 * idx }}
              className="liquid-glass group overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <FadingVideo
                  src={card.video}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6 md:p-8">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-white/40">{card.tag}</span>
                  <span className="liquid-glass rounded-full p-2">
                    <ArrowUpRight size={16} strokeWidth={1.5} className="text-white" />
                  </span>
                </div>
                <h3 className="mb-3 text-xl tracking-tight text-white md:text-2xl">{card.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   主组件
   ============================================================ */
export default function AsmeStudio() {
  return (
    <div data-theme="asme-studio" style={{ minHeight: '100vh', background: '#000' }}>
      <Hero />
      <AboutSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <ServicesSection />
    </div>
  )
}
