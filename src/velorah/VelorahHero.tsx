const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4'

const NAV_LINKS = ['Home', 'Studio', 'About', 'Journal', 'Reach Us']

export default function VelorahHero() {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={
        {
          '--background': '201 100% 13%',
          '--foreground': '0 0% 100%',
          '--muted-foreground': '240 4% 66%',
          '--primary': '0 0% 100%',
          '--primary-foreground': '0 0% 4%',
          '--secondary': '0 0% 10%',
          '--muted': '0 0% 10%',
          '--accent': '0 0% 10%',
          '--border': '0 0% 18%',
          '--input': '0 0% 18%',
          background: 'hsl(201 100% 13%)',
          color: 'hsl(0 0% 100%)',
          fontFamily: "'Inter', sans-serif",
        } as React.CSSProperties
      }
    >
      {/* Background video */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src={VIDEO_URL}
      />

      {/* Nav */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8 py-5 md:py-6">
        <span
          className="text-2xl md:text-3xl tracking-tight text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Velorah<sup className="text-xs">®</sup>
        </span>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l}
              href="#"
              className={`text-sm transition-colors hover:text-foreground ${
                i === 0 ? 'text-foreground' : 'text-muted-foreground'
              }`}
              style={{ color: i === 0 ? 'hsl(0 0% 100%)' : 'hsl(240 4% 66%)' }}
            >
              {l}
            </a>
          ))}
        </div>

        <button className="liquid-glass rounded-full px-5 md:px-6 py-2 md:py-2.5 text-xs md:text-sm text-foreground transition-transform hover:scale-[1.03]">
          <span className="hidden sm:inline">Begin Journey</span>
          <span className="sm:hidden">Begin</span>
        </button>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 pt-20 md:pt-32 pb-24 md:pb-40 text-center">
        <h1
          className="animate-fade-rise max-w-7xl font-normal leading-[0.95] tracking-[-2.46px] text-5xl sm:text-7xl md:text-8xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Where <em className="not-italic text-muted-foreground">dreams</em> rise{' '}
          <em className="not-italic text-muted-foreground">through the silence.</em>
        </h1>

        <p
          className="animate-fade-rise-delay mt-8 max-w-2xl text-base sm:text-lg leading-relaxed"
          style={{ color: 'hsl(240 4% 66%)' }}
        >
          We're designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos,
          we build digital spaces for sharp focus and inspired work.
        </p>

        <button className="animate-fade-rise-delay-2 liquid-glass mt-12 cursor-pointer rounded-full px-14 py-5 text-base text-foreground transition-transform hover:scale-[1.03]">
          Begin Journey
        </button>
      </section>
    </div>
  )
}
