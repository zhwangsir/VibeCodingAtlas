import { useEffect, useRef, useState } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260613_180732_a54afbf6-b30d-470e-861f-669871f09f67.mp4'

const RAINBOW_IMG =
  'https://soft-zoom-63098134.figma.site/_assets/v11/8d520a7515d06cbfc403d0125e3d05b1a7ccd29c.png'
const CLOUD_IMG =
  'https://soft-zoom-63098134.figma.site/_assets/v11/0d6dfd3f90b930f21726f2ed56a3320d79b7a797.png'

export default function SereneApp() {
  return (
    <div className="bg-[#0a0608]">
      <Hero />
      <QuoteSection />
    </div>
  )
}

/* ============== SECTION 1: Hero ============== */

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navLinks = ['About', 'Services', 'Journal', 'Contact']

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src={VIDEO_URL}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5">
        {/* Left: brand */}
        <span className="font-dancing text-white text-2xl md:text-3xl">Serene</span>

        {/* Center: desktop links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((l) => (
            <a
              key={l}
              href="#"
              className="text-white/80 hover:text-white text-sm tracking-wide transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        {/* Right: desktop button */}
        <button className="hidden md:block bg-white text-black px-8 py-3.5 rounded-full font-medium text-sm tracking-wide hover:bg-white/90 transition-all duration-300 button-glow">
          Book a consultation
        </button>

        {/* Right: mobile hamburger */}
        <button
          className="md:hidden relative z-50 h-10 w-10 flex flex-col items-center justify-center gap-[5px]"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className="block h-[2px] w-6 bg-white origin-center transition-all duration-300"
            style={{ transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)', transform: menuOpen ? 'rotate(45deg) translateY(9px)' : 'none' }}
          />
          <span
            className="block h-[2px] w-6 bg-white origin-center transition-all duration-300"
            style={{ transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)', transform: menuOpen ? 'scale(0)' : 'scale(1)', opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block h-[2px] w-6 bg-white origin-center transition-all duration-300"
            style={{ transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)', transform: menuOpen ? 'rotate(-45deg) translateY(-9px)' : 'none' }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[85%] max-w-[340px] bg-[#0a0608]/95 backdrop-blur-xl border-l border-white/10 z-40 transition-transform duration-500 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }}
      >
        <div className="flex h-full flex-col justify-center px-10">
          <div className="flex flex-col gap-6">
            {navLinks.map((l, i) => (
              <a
                key={l}
                href="#"
                className="text-white text-2xl tracking-wide transition-all duration-500"
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
                  transitionDelay: menuOpen ? `${150 + i * 75}ms` : '0ms',
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateX(0)' : 'translateX(24px)',
                }}
              >
                {l}
              </a>
            ))}
          </div>
          <button
            className="mt-12 bg-white text-black px-8 py-3.5 rounded-full font-medium text-sm tracking-wide transition-all duration-500"
            style={{
              transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
              transitionDelay: menuOpen ? '450ms' : '0ms',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateX(0)' : 'translateX(24px)',
            }}
          >
            Book a consultation
          </button>
        </div>
      </div>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center -mt-[120px] px-6">
        <h1 className="font-instrument text-white text-[36px] md:text-7xl lg:text-[110px] leading-[0.9] tracking-tight text-center text-glow">
          Gentle touch. Radiant presence.
        </h1>
        <p className="text-white/70 text-sm md:text-base text-center mt-5 md:mt-7 max-w-xl">
          Expert beauty and holistic wellness, delivered with warmth and intention.
        </p>
        <button className="mt-6 md:mt-9 bg-white text-black px-8 py-3.5 rounded-full font-medium text-sm tracking-wide hover:bg-white/90 transition-all duration-300 button-glow">
          Begin your renewal
        </button>
      </div>

      {/* Sound indicator (desktop) */}
      <div className="hidden md:flex absolute bottom-8 left-8 items-center gap-3">
        <div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center">
          <div className="h-[3px] w-3 bg-white/70 rounded-full" />
        </div>
        <div className="flex flex-col">
          <span className="text-white/60 text-xs">Experience</span>
          <span className="text-white/60 text-xs">with sound</span>
        </div>
      </div>
    </section>
  )
}

/* ============== SECTION 2: Quote with parallax ============== */

function QuoteSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const rainbowRef = useRef<HTMLImageElement | null>(null)
  const leftCloudRef = useRef<HTMLImageElement | null>(null)
  const rightCloudRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const rainbowY = { cur: 120, target: 120 }
    const leftX = { cur: -200, target: -200 }
    const leftY = { cur: 0, target: 0 }
    const leftOpa = { cur: 0, target: 0 }
    const rightX = { cur: 200, target: 200 }
    const rightY = { cur: 0, target: 0 }
    const rightOpa = { cur: 0, target: 0 }

    let raf = 0
    const lerp = (c: { cur: number; target: number }, factor: number) => {
      c.cur += (c.target - c.cur) * factor
    }

    const update = () => {
      const sec = sectionRef.current
      if (sec) {
        const rect = sec.getBoundingClientRect()
        const wh = window.innerHeight
        const progress = Math.max(0, Math.min(1, (wh - rect.top) / (wh + rect.height)))

        // rainbow: +120 -> -160
        rainbowY.target = 120 + progress * (-160 - 120)

        // clouds: visible during progress 0.12 - 0.92
        const inView = progress >= 0.12 && progress <= 0.92
        leftX.target = inView ? 0 : -200
        rightX.target = inView ? 0 : 200
        leftY.target = progress * -50
        rightY.target = progress * -50
        leftOpa.target = inView ? 1 : 0
        rightOpa.target = inView ? 1 : 0
      }

      lerp(rainbowY, 0.06)
      lerp(leftX, 0.04)
      lerp(leftY, 0.04)
      lerp(leftOpa, 0.04)
      lerp(rightX, 0.04)
      lerp(rightY, 0.04)
      lerp(rightOpa, 0.04)

      if (rainbowRef.current) {
        rainbowRef.current.style.transform = `translate3d(0, ${rainbowY.cur}px, 0)`
      }
      if (leftCloudRef.current) {
        leftCloudRef.current.style.transform = `translate3d(${leftX.cur}px, ${leftY.cur}px, 0)`
        leftCloudRef.current.style.opacity = `${leftOpa.cur}`
      }
      if (rightCloudRef.current) {
        rightCloudRef.current.style.transform = `translate3d(${rightX.cur}px, ${rightY.cur}px, 0) scaleX(-1)`
        rightCloudRef.current.style.opacity = `${rightOpa.cur}`
      }

      raf = requestAnimationFrame(update)
    }
    raf = requestAnimationFrame(update)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #010A17 0%, #0A4267 30%, #20658E 60%, #6BADC4 100%)',
      }}
    >
      {/* Rainbow image */}
      <img
        ref={rainbowRef}
        src={RAINBOW_IMG}
        alt=""
        className="absolute inset-x-0 top-0 z-30 w-full will-change-transform select-none pointer-events-none"
        style={{ transform: 'translate3d(0, 120px, 0)' }}
      />

      {/* Left cloud */}
      <img
        ref={leftCloudRef}
        src={CLOUD_IMG}
        alt=""
        className="absolute left-0 bottom-[10%] z-10 w-[500px] md:w-[650px] hidden sm:block will-change-transform select-none pointer-events-none"
        style={{ marginLeft: '-250px', opacity: 0, transform: 'translate3d(-200px, 0, 0)' }}
      />

      {/* Right cloud (flipped) */}
      <img
        ref={rightCloudRef}
        src={CLOUD_IMG}
        alt=""
        className="absolute right-0 bottom-[15%] z-10 w-[500px] md:w-[650px] hidden sm:block will-change-transform select-none pointer-events-none"
        style={{ marginRight: '-375px', opacity: 0, transform: 'translate3d(200px, 0, 0) scaleX(-1)' }}
      />

      {/* Quote content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <p className="font-instrument text-white text-xl sm:text-2xl md:text-4xl lg:text-[42px] leading-[1.45] md:leading-[1.5]">
            &ldquo;Serene was founded on a belief in beauty that honors your nature. We pursue
            refined outcomes, considered approaches, and lasting vitality. We spend time learning
            what matters to you before deciding what serves you best. No rushing, no excess -- just
            support that lets you feel radiant.&rdquo;
          </p>
          <p className="mt-6 md:mt-8 text-white/80 text-sm md:text-base tracking-wide">
            Dr. Mia Callahan -- Founder
          </p>
        </div>
      </div>
    </section>
  )
}
