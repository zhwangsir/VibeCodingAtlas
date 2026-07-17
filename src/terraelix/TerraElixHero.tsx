import { useEffect, useState } from 'react'
import { Search, ShoppingBag, CornerUpLeft, Menu, X, ArrowUpRight, FlaskConical, Leaf, Droplets, Sun } from 'lucide-react'

/* ============================================================
   常量与资源
   ============================================================ */

const BG_IMAGE = '/images/b62f758d-f68c-4045-a7b4-91771d6d0a0f_1280.webp'

const AVATAR_IMG = '/terraelix/avatar.png'

const CAPSULE_INLINE_IMG = '/terraelix/capsule.png'

const PRODUCT_MOBILE_IMG = '/terraelix/product-mobile.png'

const PANEL1_DECOR_IMG = '/terraelix/panel1-decor.png'

const PANEL3_PRODUCT_IMG = '/terraelix/panel3-product.png'

const NAV_LINKS = ['About', 'Products', 'Promotions', 'Contact'] as const

/* 三行标题词数组。true = 白色 / false = white/45 弱化 */
type Word = { text: string; bright: boolean }
const HEADLINE_LINES: Word[][] = [
  [
    { text: 'The', bright: true },
    { text: 'Power', bright: true },
    { text: 'of', bright: false },
  ],
  [
    { text: 'Nature', bright: false },
    { text: 'in', bright: false },
    { text: 'Every', bright: true },
  ],
  [{ text: 'Capsule', bright: true }],
]

/* Panel 2 轮播卡片 */
type CarouselCard = {
  Icon: typeof FlaskConical
  circleBg: string
  text: string
}
const CAROUSEL_CARDS: CarouselCard[] = [
  { Icon: FlaskConical, circleBg: 'bg-black', text: 'Experience our newly enhanced natural formula' },
  { Icon: Leaf, circleBg: 'bg-emerald-800', text: 'Pure organic ingredients sourced sustainably' },
  { Icon: Droplets, circleBg: 'bg-cyan-800', text: 'Advanced bioavailability for maximum absorption' },
  { Icon: Sun, circleBg: 'bg-amber-700', text: 'Clinically tested for daily energy & vitality' },
]

/* 头部延迟按词顺序 0.3..0.9s 递增 0.1 */
const WORD_DELAYS = ['te-delay-300', 'te-delay-400', 'te-delay-500', 'te-delay-600', 'te-delay-700', 'te-delay-800', 'te-delay-900']

/* ============================================================
   词揭示包装组件
   ============================================================ */
function RevealWord({ word, delayClass }: { word: Word; delayClass: string }) {
  return (
    <span className="inline-block overflow-hidden align-middle">
      <span
        className={`te-animate-word-reveal ${delayClass} ${word.bright ? 'text-white' : 'text-white/45'}`}
        style={{ display: 'inline-block' }}
      >
        {word.text}
      </span>
    </span>
  )
}

/* ============================================================
   主组件
   ============================================================ */
export default function TerraElixHero() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCard, setActiveCard] = useState(0)

  /* 轮播自动切换 3500ms */
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const id = window.setInterval(() => {
      setActiveCard((prev) => (prev + 1) % CAROUSEL_CARDS.length)
    }, 3500)
    return () => window.clearInterval(id)
  }, [])

  /* ESC 关闭移动菜单 */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  /* 菜单打开时锁滚动 */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <div data-theme="terraelix" style={{ minHeight: '100vh', background: '#000' }}>
      <div
        className="relative flex min-h-screen flex-col overflow-hidden font-inter"
        style={{
          backgroundImage: `url("${BG_IMAGE}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* ===== Navbar ===== */}
        <nav className="te-animate-fade-in relative z-20 flex items-center justify-between px-5 py-4 sm:px-8 lg:px-10 lg:py-5">
          {/* Brand */}
          <div
            className="te-animate-slide-left te-delay-200 font-dm-sans text-[30px] font-medium text-white"
            style={{ letterSpacing: '-0.05em' }}
          >
            TerraElix
          </div>

          {/* Center nav links (desktop) */}
          <div className="te-animate-fade-in te-delay-400 hidden flex-row items-center gap-10 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="font-dm-sans text-[18px] font-medium text-white/90 transition-opacity hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right icons */}
          <div className="te-animate-slide-right te-delay-300 flex items-center gap-3 sm:gap-4">
            <button aria-label="Search" className="text-white transition-opacity hover:opacity-70">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button aria-label="Shopping bag" className="text-white transition-opacity hover:opacity-70">
              <ShoppingBag size={20} strokeWidth={1.5} />
            </button>
            <button aria-label="Return" className="hidden text-white transition-opacity hover:opacity-70 sm:block">
              <CornerUpLeft size={20} strokeWidth={1.5} />
            </button>
            <img
              src={AVATAR_IMG}
              alt="avatar"
              className="h-8 w-8 rounded-full object-cover lg:h-10 lg:w-10"
            />
            <button
              aria-label="Toggle menu"
              className="text-white transition-opacity hover:opacity-70 md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </nav>

        {/* ===== Mobile overlay menu ===== */}
        {menuOpen && (
          <div className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-black/90">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="font-dm-sans text-2xl font-medium text-white"
                onClick={() => setMenuOpen(false)}
                style={{ padding: '12px 0' }}
              >
                {link}
              </a>
            ))}
          </div>
        )}

        {/* ===== Hero content ===== */}
        <section className="relative z-10 flex flex-1 flex-col justify-center px-5 sm:px-8 lg:px-10">
          <h1
            className="font-dm-sans font-normal"
            style={{ letterSpacing: '-0.05em', lineHeight: '50px', fontSize: '48px' }}
          >
            <span className="block leading-[50px] sm:leading-[72px] md:leading-[95px] lg:leading-[110px] xl:leading-[125px] sm:text-[80px] md:text-[110px] lg:text-[130px] xl:text-[155px]">
              {HEADLINE_LINES[0].map((w, i) => (
                <span key={i} className="mr-[0.2em]">
                  <RevealWord word={w} delayClass={WORD_DELAYS[i]} />
                </span>
              ))}
            </span>
            <span className="block leading-[50px] sm:leading-[72px] md:leading-[95px] lg:leading-[110px] xl:leading-[125px] sm:text-[80px] md:text-[110px] lg:text-[130px] xl:text-[155px]">
              {HEADLINE_LINES[1].map((w, i) => (
                <span key={i} className="mr-[0.2em]">
                  <RevealWord word={w} delayClass={WORD_DELAYS[3 + i]} />
                </span>
              ))}
            </span>
            <span className="block leading-[50px] sm:leading-[72px] md:leading-[95px] lg:leading-[110px] xl:leading-[125px] sm:text-[80px] md:text-[110px] lg:text-[130px] xl:text-[155px]">
              <span className="mr-[0.2em]">
                <RevealWord word={HEADLINE_LINES[2][0]} delayClass={WORD_DELAYS[6]} />
              </span>
              <img
                src={CAPSULE_INLINE_IMG}
                alt="capsule"
                className="te-animate-scale-in te-delay-1000 ml-2 hidden align-middle sm:inline-block lg:ml-4"
                style={{ height: 'clamp(60px, 10vw, 160px)', width: 'auto' }}
              />
            </span>
          </h1>

          {/* CTA row */}
          <div className="te-animate-fade-up te-delay-600 mt-8 flex flex-col gap-5 sm:mt-12 sm:flex-row sm:gap-8 lg:mt-[75px] lg:gap-[50px]">
            <button
              className="font-inter flex h-14 w-full items-center justify-center gap-2 rounded-md bg-black text-sm font-medium text-white transition-opacity hover:opacity-90 sm:w-[240px] sm:text-base md:w-[280px] md:text-lg md:h-16 lg:w-[310px] lg:h-[72px] lg:text-xl"
              style={{ letterSpacing: '-0.03em' }}
            >
              Explore Now
              <ArrowUpRight size={20} strokeWidth={1.5} />
            </button>
            <p
              className="font-inter max-w-[310px] text-sm font-normal text-white sm:text-base lg:text-lg"
              style={{ lineHeight: 1.45, letterSpacing: '-0.03em' }}
            >
              Discover our new plant-based supplements for daily balance and clean energy.
            </p>
          </div>
        </section>

        {/* ===== Mobile/tablet product image ===== */}
        <img
          src={PRODUCT_MOBILE_IMG}
          alt="product"
          className="te-animate-scale-in te-delay-800 relative z-0 mx-auto w-[180%] max-w-[1296px] -mb-[180px] object-contain drop-shadow-2xl sm:w-[151%] sm:-mb-[220px] lg:hidden"
        />

        {/* ===== Bottom 3-panel grid ===== */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[2fr_1fr_2fr]">
          {/* Panel 1 */}
          <div className="te-animate-fade-up te-delay-900 relative overflow-hidden bg-[#ECEDEC] p-6 sm:p-8 lg:p-10">
            <div className="relative z-10 flex flex-col gap-6">
              <p
                className="font-dm-sans max-w-[350px] text-2xl font-normal text-black sm:text-[28px] lg:text-[35px]"
                style={{ lineHeight: 1.1, letterSpacing: '-0.05em' }}
              >
                Start your personalized path to natural balance
              </p>
              <a
                href="#"
                className="font-inter text-base underline lg:text-lg"
                style={{ letterSpacing: '-0.03em', color: '#000' }}
              >
                Personal Assessment
              </a>
            </div>
            <img
              src={PANEL1_DECOR_IMG}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-0 h-full w-auto object-contain mix-blend-multiply"
            />
          </div>

          {/* Panel 2 — auto-rotating card carousel */}
          <div className="te-animate-fade-up te-delay-1000 relative flex flex-col justify-between bg-[#FEFDF9] p-6 sm:p-8 lg:p-10">
            <div className="relative flex-1">
              {CAROUSEL_CARDS.map((card, idx) => {
                const Icon = card.Icon
                const isActive = idx === activeCard
                return (
                  <div
                    key={idx}
                    className="absolute inset-0 flex flex-col gap-4 transition-all duration-700"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'translateY(0)' : 'translateY(16px)',
                      pointerEvents: isActive ? 'auto' : 'none',
                    }}
                  >
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full sm:h-12 sm:w-12 ${card.circleBg}`}>
                      <Icon size={18} strokeWidth={1.5} className="text-white" />
                    </div>
                    <p
                      className="font-inter text-sm text-black/80 sm:text-base lg:text-lg"
                      style={{ lineHeight: 1.2, letterSpacing: '-0.03em' }}
                    >
                      {card.text}
                    </p>
                  </div>
                )
              })}
            </div>
            <div className="mt-6 flex gap-1.5">
              {CAROUSEL_CARDS.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-0.5 flex-1 rounded-full transition-colors duration-300 ${
                    idx === activeCard ? 'bg-black' : 'bg-black/20'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Panel 3 */}
          <div className="te-animate-fade-up te-delay-1100 flex items-center gap-4 bg-black p-6 sm:gap-6 sm:p-8 lg:p-10">
            <img
              src={PANEL3_PRODUCT_IMG}
              alt="product"
              className="h-[82px] w-[120px] flex-shrink-0 object-contain sm:h-[110px] sm:w-[160px] lg:h-[142px] lg:w-[208px]"
            />
            <div className="flex flex-col gap-2">
              <div
                className="font-inter text-2xl font-normal text-white sm:text-3xl lg:text-[35px]"
                style={{ letterSpacing: '-0.05em' }}
              >
                +14K
              </div>
              <p
                className="font-inter text-sm font-normal text-white/60 sm:text-base lg:text-lg"
                style={{ lineHeight: 1.2 }}
              >
                People have already optimized their wellness
              </p>
            </div>
          </div>
        </div>

        {/* ===== Desktop floating product image ===== */}
        <img
          src={PRODUCT_MOBILE_IMG}
          alt="product"
          className="te-animate-scale-in te-delay-700 pointer-events-none absolute z-0 hidden object-contain lg:block"
          style={{
            width: 'clamp(600px, 80vw, 1412px)',
            height: 'auto',
            bottom: '-10%',
            right: 'clamp(-400px, -20vw, -100px)',
          }}
        />
      </div>
    </div>
  )
}
