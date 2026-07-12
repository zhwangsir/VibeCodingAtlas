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

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4'

export default function BloomHero() {
  return (
    <div className="font-poppins relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src={VIDEO_URL}
      />

      {/* Content layer */}
      <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  )
}

/* ============== Inline flower logo (stand-in for /logo.png) ============== */

function FlowerMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* five-petal bloom */}
      <g fill="white">
        <ellipse cx="16" cy="7" rx="3.4" ry="5" />
        <ellipse cx="16" cy="25" rx="3.4" ry="5" />
        <ellipse cx="7" cy="16" rx="5" ry="3.4" />
        <ellipse cx="25" cy="16" rx="5" ry="3.4" />
        <ellipse cx="9.6" cy="9.6" rx="4.2" ry="3.2" transform="rotate(-45 9.6 9.6)" />
        <ellipse cx="22.4" cy="22.4" rx="4.2" ry="3.2" transform="rotate(-45 22.4 22.4)" />
        <ellipse cx="22.4" cy="9.6" rx="4.2" ry="3.2" transform="rotate(45 22.4 9.6)" />
        <ellipse cx="9.6" cy="22.4" rx="4.2" ry="3.2" transform="rotate(45 9.6 22.4)" />
        <circle cx="16" cy="16" r="3.2" fill="black" />
      </g>
    </svg>
  )
}

/* ============== LEFT PANEL ============== */

function LeftPanel() {
  return (
    <div className="relative flex w-full flex-col p-4 lg:w-[52%] lg:p-6">
      {/* Liquid-glass-strong overlay */}
      <div className="liquid-glass-strong pointer-events-none absolute inset-4 rounded-3xl lg:inset-6" />

      {/* Inner content */}
      <div className="relative z-10 flex flex-1 flex-col p-6 lg:p-10">
        {/* Nav */}
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <FlowerMark size={32} />
            <span className="text-2xl font-semibold tracking-tighter text-white">bloom</span>
          </div>
          <button className="liquid-glass flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white hover:scale-105 transition-transform">
            <Menu className="h-4 w-4" />
            <span>Menu</span>
          </button>
        </nav>

        {/* Hero center */}
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <FlowerMark size={80} />

          <h1 className="mt-6 text-6xl lg:text-7xl font-medium tracking-[-0.05em] text-white">
            Innovating the
            <br />
            <span className="font-source-serif italic font-normal text-white/80">spirit of bloom</span>{' '}
            AI
          </h1>

          <button className="liquid-glass-strong mt-8 flex items-center gap-3 rounded-full py-3 pl-3 pr-6 text-sm text-white hover:scale-105 active:scale-95 transition-transform">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
              <Download className="h-3.5 w-3.5" />
            </span>
            Explore Now
          </button>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {['Artistic Gallery', 'AI Generation', '3D Structures'].map((p) => (
              <span
                key={p}
                className="liquid-glass rounded-full px-4 py-2 text-xs text-white/80"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom quote */}
        <div className="flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-widest text-white/50">VISIONARY DESIGN</p>
          <p className="mt-3 max-w-md text-lg text-white">
            <span className="font-poppins">&ldquo;</span>
            <span className="font-source-serif italic">We imagined a realm with no ending.</span>
            <span className="font-poppins">&rdquo;</span>
          </p>
          <div className="mt-4 flex items-center gap-3">
            <span className="h-px w-8 bg-white/40" />
            <span className="text-xs tracking-widest text-white/60">MARCUS AURELIO</span>
            <span className="h-px w-8 bg-white/40" />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ============== RIGHT PANEL (desktop only) ============== */

function RightPanel() {
  return (
    <div className="relative hidden w-[48%] flex-col p-4 lg:flex lg:p-6">
      <div className="flex flex-1 flex-col p-6">
        {/* Top bar */}
        <div className="flex items-center justify-end gap-3">
          <div className="liquid-glass flex items-center gap-2 rounded-full px-3 py-2">
            <SocialLink Icon={Twitter} />
            <SocialLink Icon={Linkedin} />
            <SocialLink Icon={Instagram} />
            <ArrowRight className="h-4 w-4 text-white" />
          </div>
          <button className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full text-white hover:scale-105 transition-transform">
            <Sparkles className="h-4 w-4" />
          </button>
        </div>

        {/* Community card */}
        <div className="liquid-glass mt-8 w-56 rounded-3xl p-5">
          <h3 className="text-base font-medium text-white">Enter our ecosystem</h3>
          <p className="mt-2 text-xs leading-relaxed text-white/60">
            A growing collective of designers, botanists, and AI researchers shaping living form.
          </p>
        </div>

        {/* Bottom feature section */}
        <div className="mt-auto">
          <div className="liquid-glass rounded-[2.5rem] p-4">
            <div className="grid grid-cols-2 gap-4">
              <FeatureCard
                Icon={Wand2}
                title="Processing"
                desc="Generative pipelines turn prompts into living botanical geometry."
              />
              <FeatureCard
                Icon={BookOpen}
                title="Growth Archive"
                desc="Every specimen is catalogued, versioned, and re-mixable."
              />
            </div>

            {/* Bottom card with flower thumbnail */}
            <div className="liquid-glass mt-4 flex items-center gap-4 rounded-3xl p-4">
              <div className="flex h-16 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white/5">
                <FlowerMark size={48} />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-white">Advanced Plant Sculpting</h4>
                <p className="mt-1 text-xs leading-snug text-white/60">
                  Shape petals, stems, and canopy at the level of individual cells.
                </p>
              </div>
              <button className="liquid-glass flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white hover:scale-105 transition-transform">
                <span className="text-lg leading-none">+</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SocialLink({ Icon }: { Icon: React.ComponentType<{ className?: string }> }) {
  return (
    <a
      href="#"
      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:text-white/80 transition-colors"
    >
      <Icon className="h-4 w-4" />
    </a>
  )
}

function FeatureCard({
  Icon,
  title,
  desc,
}: {
  Icon: React.ComponentType<{ className?: string }>
  title: string
  desc: string
}) {
  return (
    <div className="liquid-glass flex flex-col rounded-3xl p-5">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
        <Icon className="h-4 w-4 text-white" />
      </div>
      <h4 className="mt-3 text-sm font-medium text-white">{title}</h4>
      <p className="mt-1.5 text-xs leading-snug text-white/60">{desc}</p>
    </div>
  )
}
