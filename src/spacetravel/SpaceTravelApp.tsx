import { motion } from 'framer-motion'
import FadingVideo from './FadingVideo'
import BlurText from './BlurText'
import {
  ArrowUpRight,
  Play,
  ClockOutline,
  GlobeOutline,
  ImageIcon,
  MovieIcon,
  LightbulbIcon,
} from './icons'

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4'
const CAP_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4'

const NAV_LINKS = ['Home', 'Voyages', 'Worlds', 'Innovation', 'Plan Launch']
const PARTNERS = ['Aeon', 'Vela', 'Apex', 'Orbit', 'Zeno']

const CAP_CARDS = [
  {
    Icon: ImageIcon,
    title: 'AI Scenery',
    body: 'AI analyzes your product to create indistinguishable natural environments — from Icelandic cliffs to misty forests.',
    tags: ['Natural Context', 'Photo Realism', 'Infinite Settings', 'Eco-Vibe'],
  },
  {
    Icon: MovieIcon,
    title: 'Batch Production',
    body: 'Style your entire product line in minutes. Create a unified visual identity for catalogues and social media without weeks of retouching.',
    tags: ['Scale Fast', 'Visual Consistency', 'Time Saver', 'Ready to Post'],
  },
  {
    Icon: LightbulbIcon,
    title: 'Smart Lighting',
    body: 'Automatic lighting and material adjustment. Achieve flawless integration with realistic shadows and sunlight.',
    tags: ['Ray Tracing', 'Physical Shadows', 'Studio Quality', 'Sunlight Sync'],
  },
]

const easeOut = [0, 0, 0.2, 1] as const

export default function SpaceTravelApp() {
  return (
    <div className="min-h-screen bg-black font-barlow text-white">
      <Hero />
      <Capabilities />
    </div>
  )
}

/* ============== NAVBAR ============== */

function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16">
      {/* Left: logo */}
      <div className="liquid-glass flex h-12 w-12 items-center justify-center rounded-full">
        <span className="font-instrument italic text-white text-2xl leading-none">a</span>
      </div>

      {/* Center pill (desktop) */}
      <div className="liquid-glass hidden md:flex items-center gap-1 rounded-full px-1.5 py-1.5">
        {NAV_LINKS.map((l) => (
          <a
            key={l}
            href="#"
            className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
          >
            {l}
          </a>
        ))}
        <button className="ml-1 flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-white/90">
          Claim a Spot
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>

      {/* Right: invisible spacer */}
      <div className="h-12 w-12" />
    </nav>
  )
}

/* ============== HERO ============== */

function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col bg-black overflow-hidden">
      {/* Background video (120% w/h, top-aligned, centered) */}
      <FadingVideo
        src={HERO_VIDEO}
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: '120%', height: '120%' }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />

        {/* Hero center content */}
        <div className="flex flex-1 flex-col items-center justify-center px-4 pt-24 text-center">
          {/* Badge */}
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.4 }}
            className="liquid-glass flex items-center gap-2 rounded-full py-1 pl-1 pr-3"
          >
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">
              New
            </span>
            <span className="text-sm text-white/90">
              Maiden Crewed Voyage to Mars Arrives 2026
            </span>
          </motion.div>

          {/* Headline */}
          <BlurText
            text="Venture Past Our Sky Across the Universe"
            className="font-instrument italic text-white text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.8] max-w-2xl tracking-[-4px] mt-6"
          />

          {/* Subheading */}
          <motion.p
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.8 }}
            className="mt-4 max-w-2xl text-sm md:text-base font-light leading-tight text-white"
          >
            Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough
            engineering bring deep-space exploration within reach—secure and extraordinary.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 1.1 }}
            className="mt-6 flex items-center gap-6"
          >
            <button className="liquid-glass-strong flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white">
              Start Your Voyage
              <ArrowUpRight className="h-5 w-5" />
            </button>
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-medium text-white transition-opacity hover:opacity-80"
            >
              View Liftoff
              <Play className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 1.3 }}
            className="mt-8 flex flex-wrap items-stretch justify-center gap-4"
          >
            <StatCard
              Icon={ClockOutline}
              value="34.5 Min"
              label="Average Videos Watch Time"
            />
            <StatCard Icon={GlobeOutline} value="2.8B+" label="Users Across the Globe" />
          </motion.div>
        </div>

        {/* Partners */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 1.4 }}
          className="flex flex-col items-center gap-4 pb-8"
        >
          <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white">
            Collaborating with top aerospace pioneers globally
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 md:gap-16">
            {PARTNERS.map((p) => (
              <span
                key={p}
                className="font-instrument italic text-white text-2xl md:text-3xl tracking-tight"
              >
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function StatCard({
  Icon,
  value,
  label,
}: {
  Icon: (p: { className?: string }) => JSX.Element
  value: string
  label: string
}) {
  return (
    <div className="liquid-glass flex w-[220px] max-w-[calc(50vw-1rem)] flex-col rounded-[1.25rem] p-5">
      <Icon className="h-7 w-7 text-white" />
      <div className="font-instrument italic text-white text-4xl tracking-[-1px] leading-none mt-4">
        {value}
      </div>
      <div className="mt-2 text-xs font-light text-white">{label}</div>
    </div>
  )
}

/* ============== CAPABILITIES ============== */

function Capabilities() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <FadingVideo
        src={CAP_VIDEO}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 flex min-h-screen flex-col px-8 md:px-16 lg:px-20 pt-24 pb-10">
        {/* Header */}
        <div className="mb-auto">
          <p className="text-sm text-white/80 mb-6">// Capabilities</p>
          <h2 className="font-instrument italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
            Production
            <br />
            evolved
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {CAP_CARDS.map(({ Icon, title, body, tags }) => (
            <div
              key={title}
              className="liquid-glass flex min-h-[360px] flex-col rounded-[1.25rem] p-6"
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-4">
                <div className="liquid-glass flex h-11 w-11 items-center justify-center rounded-[0.75rem]">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 whitespace-nowrap"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Bottom */}
              <div className="mt-6">
                <h3 className="font-instrument italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">
                  {title}
                </h3>
                <p className="mt-3 max-w-[32ch] text-sm font-light leading-snug text-white/90">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
