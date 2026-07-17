/* ============================================================
 *  NHM — Natural History Museum 章节/内容页
 *  基于 31.md:三段式(Hero / Explore Our World / Ancient Collection)
 *  字体:Inter(标题/正文)+ 系统等宽(mono 标签)
 *  Tech:React + TS + Tailwind + framer-motion + lucide-react
 *  注:Cloudinary 账号禁用,所有外部图片/视频改用本地 SVG 占位
 * ============================================================ */
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, usePresence } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Bone,
  Dna,
  Gem,
  Leaf,
  BookOpen,
  Plus,
} from 'lucide-react'

/* ===== 章节(使用本地 SVG 占位替代 Cloudinary 401) ===== */
const chaptersData = [
  { name: 'Age of Dinosaurs', image: '/nhm/chapter-1.svg' },
  { name: 'Fossils of Ancient Life', image: '/nhm/chapter-2.svg' },
  { name: 'Reptiles of the Mesozoic', image: '/nhm/chapter-3.svg' },
  { name: 'Marine Fossil Gallery', image: '/nhm/chapter-4.svg' },
  { name: 'Prehistoric Giants', image: '/nhm/chapter-5.svg' },
]

const PTERODACTYL_IMG = '/nhm/pterodactyl.svg'

const NAV_LINKS = ['Visit', 'Exhibitions', 'Discover', 'Learn', 'About']

const ACTION_PILLS = [
  { icon: Bone, label: 'Dinosaurs' },
  { icon: Dna, label: 'Ancient Life' },
  { icon: Gem, label: 'Minerals' },
  { icon: Leaf, label: 'Fossils' },
  { icon: BookOpen, label: 'Learn More' },
]

const CIRCLE_ICONS = [Bone, Dna, Leaf]

const MONO_FONT = 'ui-monospace, "SF Mono", SFMono-Regular, Menlo, Monaco, Consolas, monospace'

/* ===== 动画 variants ===== */
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const letterBlock = {
  initial: { y: 120, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  },
}

/* ============================================================
 *  NHM Logo — 自定义 SVG,每个多边形 letterBlock 滑入
 * ============================================================ */
function NHMLogo() {
  const container = {
    initial: { scale: 1.03 },
    animate: {
      scale: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.1 },
    },
  }
  return (
    <motion.h1
      variants={container}
      initial="initial"
      animate="animate"
      className="w-full"
    >
      <svg viewBox="0 0 840 100" className="w-full" fill="#111">
        {/* Letter N */}
        <g transform="translate(0,0)">
          <motion.polygon points="0,0 14,0 14,100 0,100" variants={letterBlock} initial="initial" animate="animate" />
          <motion.polygon points="200,0 214,0 214,100 200,100" variants={letterBlock} initial="initial" animate="animate" />
          <motion.polygon points="0,0 33,0 214,100 181,100" variants={letterBlock} initial="initial" animate="animate" />
        </g>
        {/* Letter H */}
        <g transform="translate(280,0)">
          <motion.polygon points="0,0 14,0 14,100 0,100" variants={letterBlock} initial="initial" animate="animate" />
          <motion.polygon points="200,0 214,0 214,100 200,100" variants={letterBlock} initial="initial" animate="animate" />
          <motion.polygon points="14,43 200,43 200,57 14,57" variants={letterBlock} initial="initial" animate="animate" />
        </g>
        {/* Letter M */}
        <g transform="translate(560,0)">
          <motion.polygon points="0,0 14,0 14,100 0,100" variants={letterBlock} initial="initial" animate="animate" />
          <motion.polygon points="266,0 280,0 280,100 266,100" variants={letterBlock} initial="initial" animate="animate" />
          <motion.polygon points="0,0 26,0 153,100 127,100" variants={letterBlock} initial="initial" animate="animate" />
          <motion.polygon points="254,0 280,0 153,100 127,100" variants={letterBlock} initial="initial" animate="animate" />
        </g>
      </svg>
    </motion.h1>
  )
}

/* ============================================================
 *  SandTransitionImage — SVG 滤镜沙粒溶解过渡
 * ============================================================ */
function SandTransitionImage({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  const [isPresent, safeToRemove] = usePresence()
  const filterId = useRef(`nhm-sand-${Math.random().toString(36).slice(2, 9)}`)
  const imgRef = useRef<HTMLImageElement>(null)
  const filterRef = useRef<SVGFilterElement>(null)
  const feDisplaceRef = useRef<SVGFEDisplacementMapElement | null>(null)
  const feOffsetRef = useRef<SVGFEOffsetElement | null>(null)
  const feBlurRef = useRef<SVGFEGaussianBlurElement | null>(null)
  const feColorRef = useRef<SVGFEColorMatrixElement | null>(null)

  useEffect(() => {
    if (!isPresent) return
    const start = performance.now()
    const duration = 900
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 4)
      if (feDisplaceRef.current) feDisplaceRef.current.setAttribute('scale', String(eased * 150))
      if (feOffsetRef.current) {
        feOffsetRef.current.setAttribute('dy', String(-eased * 80))
        feOffsetRef.current.setAttribute('dx', String(-eased * 30))
      }
      if (feBlurRef.current) feBlurRef.current.setAttribute('stdDeviation', String(eased * 6))
      if (feColorRef.current) {
        feColorRef.current.setAttribute(
          'values',
          `1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${1 - eased * 1.2} 0`
        )
      }
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isPresent])

  useEffect(() => {
    if (isPresent) return
    const start = performance.now()
    const duration = 900
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = Math.pow(t, 3)
      if (feDisplaceRef.current) feDisplaceRef.current.setAttribute('scale', String((1 - eased) * 150))
      if (feOffsetRef.current) {
        feOffsetRef.current.setAttribute('dy', String(120 * eased - 80 * (1 - eased)))
        feOffsetRef.current.setAttribute('dx', String(30 * eased - 30 * (1 - eased)))
      }
      if (feBlurRef.current) feBlurRef.current.setAttribute('stdDeviation', String((1 - eased) * 6))
      if (feColorRef.current) {
        const op = Math.max(0, 1 - eased * 1.2 - 0.2)
        feColorRef.current.setAttribute(
          'values',
          `1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${op} 0`
        )
      }
      if (t < 1) raf = requestAnimationFrame(tick)
      else safeToRemove?.()
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isPresent, safeToRemove])

  return (
    <div className={className} style={{ position: 'relative', width: '100%', height: '100%' }}>
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden>
        <defs>
          <filter id={filterId.current} ref={filterRef}>
            <feTurbulence type="fractalNoise" baseFrequency="1.8" numOctaves={4} result="noise" />
            <feDisplacementMap
              ref={feDisplaceRef}
              in="SourceGraphic"
              in2="noise"
              scale={0}
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feOffset ref={feOffsetRef} dx={0} dy={0} />
            <feGaussianBlur ref={feBlurRef} stdDeviation={0} />
            <feColorMatrix
              ref={feColorRef}
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
            />
          </filter>
        </defs>
      </svg>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
        style={{
          position: 'absolute',
          inset: 0,
          width: '80%',
          height: '80%',
          margin: 'auto',
          objectFit: 'contain',
          mixBlendMode: 'lighten',
          filter: `url(#${filterId.current})`,
        }}
      />
    </div>
  )
}

/* ============================================================
 *  NHM — 主入口
 * ============================================================ */
export default function NHM() {
  const [activeChapter, setActiveChapter] = useState(2)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  /* 章节自动循环 */
  useEffect(() => {
    const id = setInterval(() => {
      setActiveChapter((prev) => (prev + 1) % chaptersData.length)
    }, 3500)
    return () => clearInterval(id)
  }, [])

  const chapter = chaptersData[activeChapter]

  return (
    <div
      data-theme="nhm"
      className="relative w-full overflow-x-hidden"
      style={{
        fontFamily: 'Inter, sans-serif',
        background: '#fcfcfc',
        color: '#111',
      }}
    >
      <style>{`
        [data-theme='nhm'] .nhm-hamburger-line {
          width: 32px;
          height: 1.5px;
          background: #000;
          transition: all 0.3s ease;
        }
        [data-theme='nhm'] .nhm-hamburger:hover .nhm-hamburger-line:nth-child(1) { width: 24px; }
        [data-theme='nhm'] .nhm-hamburger:hover .nhm-hamburger-line:nth-child(2) { width: 40px; }
        [data-theme='nhm'] .nhm-hamburger.open .nhm-hamburger-line:nth-child(1) {
          transform: rotate(45deg) translateY(4px);
        }
        [data-theme='nhm'] .nhm-hamburger.open .nhm-hamburger-line:nth-child(2) {
          transform: rotate(-45deg) translateY(-4px);
        }
        [data-theme='nhm'] .nhm-cta:hover .nhm-cta-bg {
          transform: translateX(0);
        }
        [data-theme='nhm'] .nhm-cta:hover .nhm-cta-text,
        [data-theme='nhm'] .nhm-cta:hover .nhm-cta-icon {
          color: #111 !important;
          fill: #111 !important;
        }
        [data-theme='nhm'] .nhm-cta:hover .nhm-cta-icon { transform: scale(1.1) rotate(-12deg) translateY(-1px); }
        [data-theme='nhm'] .nhm-cta:active { transform: translateY(0); }
        [data-theme='nhm'] .nhm-marquee-track {
          animation: nhm-marquee 40s linear infinite;
        }
        @keyframes nhm-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {/* ============================================================
       *  SECTION 1: HERO
       * ============================================================ */}
      <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
        {/* Header */}
        <motion.header
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
          className="pt-6 px-6 md:px-16 z-20"
        >
          <NHMLogo />

          {/* Sub-nav bar */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex justify-between items-start mt-8"
            style={{ fontFamily: MONO_FONT }}
          >
            {/* Left column */}
            <div className="w-[15%] text-[10px] md:text-[11px] tracking-[0.2em] uppercase leading-relaxed">
              <div>Natura</div>
              <div>History</div>
              <div>Museum</div>
            </div>

            {/* Arrow separator */}
            <div className="hidden md:block w-[5%] flex items-center justify-center pt-1">
              <ArrowRight size={14} strokeWidth={1} className="text-gray-400" />
            </div>

            {/* Center column */}
            <div className="flex-1 md:w-[30%] text-[10px] md:text-[11px] text-gray-800 leading-relaxed tracking-[0.15em]">
              <span className="md:hidden">
                Exploring the story of life
                <br />
                on earth through science,
                <br />
                discovery and wonder.
                <br />
                &nbsp;
              </span>
              <span className="hidden md:block">
                Exploring the story of life
                <br />
                on earth through science,
                <br />
                discovery and wonder.
              </span>
            </div>

            {/* Arrow separator */}
            <div className="hidden md:block w-[5%] flex items-center justify-center pt-1">
              <ArrowRight size={14} strokeWidth={1} className="text-gray-400" />
            </div>

            {/* Right column */}
            <div className="hidden md:block w-[15%] text-[10px] md:text-[11px] tracking-[0.2em] uppercase space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-gray-800 hover:text-black hover:underline"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Hamburger */}
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className={`nhm-hamburger ${isMobileMenuOpen ? 'open' : ''} flex flex-col gap-[6px] z-[60] relative ml-4 md:hidden`}
            >
              <span className="nhm-hamburger-line" />
              <span className="nhm-hamburger-line" />
            </button>
          </motion.div>
        </motion.header>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#fcfcfc] border-b border-gray-200 shadow-xl px-6 py-8 z-50"
              style={{ fontFamily: MONO_FONT }}
            >
              <div className="space-y-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link}
                    href="#"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm tracking-[0.2em] uppercase text-gray-800 hover:text-black"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Left sidebar content */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.15, delayChildren: 0.6 } } }}
          className="px-10 md:px-16 mt-20 sm:mt-28 md:mt-32 w-[320px] z-10"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <span className="text-xs" style={{ fontFamily: MONO_FONT }}>01</span>
            <span className="w-16 h-[1.5px] bg-black/20" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-[3.5rem] md:text-[5rem] font-normal tracking-tight leading-[1]"
          >
            TIMELESS
            <br />
            WONDERS
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[13px] md:text-[14px] text-gray-700 w-[240px] leading-[1.6] mt-6"
          >
            Step into the natural world and
            <br />
            discover the stories written
            <br />
            millions of years ago.
          </motion.p>

          <motion.button
            variants={fadeUp}
            type="button"
            className="nhm-cta group relative mt-8 bg-[#1a1a1a] px-6 py-3.5 border border-[#1a1a1a] rounded-md shadow-sm overflow-hidden transition-transform duration-200 hover:-translate-y-[0.5px] hover:shadow-[3px_3px_0px_rgba(17,17,17,0.5)]"
          >
            <span className="nhm-cta-bg absolute inset-0 bg-[#fcfcfc] -translate-x-[101%] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            <span className="relative flex items-center gap-2">
              {/* Leaf icon */}
              <Leaf
                className="nhm-cta-icon relative transition-all duration-300 text-white"
                size={18}
                fill="currentColor"
              />
              <span className="nhm-cta-text text-[15px] font-medium text-white transition-colors duration-300">
                Explore Now
              </span>
            </span>
          </motion.button>
        </motion.div>

        {/* Right sidebar (desktop) */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.15, delayChildren: 0.9 } } }}
          className="hidden md:flex flex-col w-[200px] mt-12 md:mt-20 absolute right-16 top-[35%] z-10"
        >
          <motion.div variants={fadeUp}>
            <h3 className="text-[10px] font-bold tracking-widest uppercase" style={{ fontFamily: MONO_FONT }}>
              Tyrannosaurus Rex
            </h3>
            <p className="text-[12px] text-gray-600 leading-[1.6] mt-2">
              Late Cretaceous period
              <br />
              68-66 million years ago
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6 space-y-3">
            <div className="flex justify-between items-baseline">
              <span className="text-[10px] tracking-widest uppercase text-gray-500" style={{ fontFamily: MONO_FONT }}>
                Length
              </span>
              <span className="text-[13px] font-medium">12.3 m</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-[10px] tracking-widest uppercase text-gray-500" style={{ fontFamily: MONO_FONT }}>
                Height
              </span>
              <span className="text-[13px] font-medium">4.0 m</span>
            </div>
          </motion.div>

          <motion.button
            variants={fadeUp}
            type="button"
            className="group flex items-center gap-3 mt-8"
          >
            <span className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center transition-all group-hover:border-black group-hover:bg-[#111]">
              <Plus size={16} strokeWidth={1.5} className="text-black group-hover:text-white transition-colors" />
            </span>
            <span className="text-[10px] tracking-widest uppercase font-bold" style={{ fontFamily: MONO_FONT }}>
              View Details
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll to explore */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-[2.5rem] md:left-[4rem] hidden md:flex items-center gap-3"
        >
          <span className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
            <span className="flex flex-col gap-[4px]">
              <span className="w-[1px] h-[12px] bg-gray-600" />
              <span className="w-[1px] h-[12px] bg-gray-600" />
            </span>
          </span>
          <span className="text-[10px] tracking-widest uppercase text-gray-500 font-semibold" style={{ fontFamily: MONO_FONT }}>
            Scroll to explore
          </span>
        </motion.div>
      </section>

      {/* ============================================================
       *  SECTION 2: EXPLORE OUR WORLD
       * ============================================================ */}
      <section className="relative w-full min-h-[75vh] md:min-h-screen bg-[#fcfcfc] flex flex-col items-center pt-24 md:pt-32 pb-0 z-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] md:text-[11px] tracking-[0.2em] mb-12"
          style={{ fontFamily: MONO_FONT }}
        >
          <span className="text-gray-500">[ 02 ]</span>{' '}
          <span className="text-gray-900 font-bold uppercase">Explore Our World</span>
        </motion.div>

        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-[2.2rem] md:text-[3.5rem] lg:text-[4.2rem] leading-[1.1] font-medium tracking-tight text-[#111] max-w-[1000px] text-center px-6"
        >
          Unearth the stories of our planet's past
          <br className="hidden md:block" /> through fossils, minerals, and ancient wonders.
        </motion.h2>

        {/* Action pills */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{ animate: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-24 mt-10 px-6"
        >
          {ACTION_PILLS.map(({ icon: Icon, label }) => (
            <motion.button
              key={label}
              variants={fadeUp}
              type="button"
              className="flex items-center gap-2 rounded-full border border-gray-300 text-[11px] font-medium uppercase tracking-wider bg-white/50 backdrop-blur-sm text-gray-800 px-4 py-2 transition-all hover:border-black hover:bg-black hover:text-white"
            >
              <Icon size={14} strokeWidth={2} />
              {label}
            </motion.button>
          ))}
        </motion.div>

        {/* Spacer */}
        <div className="min-h-[220px] md:min-h-[450px]" />

        {/* Bottom text */}
        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-8 md:pb-12 pointer-events-none hidden md:flex justify-between">
          <span className="text-[10px] tracking-widest uppercase text-gray-500 font-medium" style={{ fontFamily: MONO_FONT }}>
            WE DON'T JUST TELL STORIES.
          </span>
          <span className="text-[10px] tracking-widest uppercase text-gray-500 font-medium" style={{ fontFamily: MONO_FONT }}>
            PALEONTOLOGY (C) 2026
          </span>
        </div>
      </section>

      {/* ============================================================
       *  SECTION 3: ANCIENT COLLECTION (DARK)
       * ============================================================ */}
      <section className="relative w-full bg-[#0a0a0a] text-white flex flex-col z-30">
        {/* Pterodactyl image overlapping */}
        <motion.img
          src={PTERODACTYL_IMG}
          alt="Pterodactyl silhouette"
          initial={{ y: '-65%', opacity: 0 }}
          whileInView={{ y: '-78%', opacity: 1 }}
          viewport={{ margin: '100px' }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[160vw] md:w-[1100px] pointer-events-none z-0"
        />

        {/* Heading area */}
        <div className="px-8 md:px-16 pt-32 md:pt-48 mb-16 z-10 flex flex-col xl:flex-row justify-between gap-8">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9 }}
            className="text-[1.8rem] md:text-[3rem] lg:text-[3.8rem] xl:text-[4rem] leading-[1.15] font-medium tracking-tight text-white max-w-[800px]"
          >
            Curated from millions of years of wonder{' '}
            <span className="inline-flex gap-2 md:gap-3 align-middle mx-2 md:mx-4 translate-y-[-4px]">
              {CIRCLE_ICONS.map((Icon, i) => (
                <span
                  key={i}
                  className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-gray-600 bg-black text-gray-400 flex items-center justify-center transition-all hover:bg-white hover:text-black hover:border-white"
                >
                  <Icon size={22} />
                </span>
              ))}
            </span>
            &amp; discovery.
          </motion.h2>

          <div className="xl:max-w-[300px]">
            <p className="text-[9px] md:text-[10px] tracking-widest text-gray-400 uppercase mb-6 leading-relaxed" style={{ fontFamily: MONO_FONT }}>
              WE DON'T JUST DISPLAY FOSSILS
              <br />
              WE SHARE EARTH'S STORY
            </p>
            <div className="flex flex-wrap gap-3">
              {['Educational', 'Authentic', 'Inspiring'].map((pill) => (
                <span
                  key={pill}
                  className="px-5 py-2 rounded-full border border-gray-600 text-[9px] tracking-widest uppercase text-gray-300 transition-all hover:bg-white hover:text-black hover:border-white"
                  style={{ fontFamily: MONO_FONT }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Two-column panel */}
        <div className="h-[1px] bg-gray-800" />
        <div className="flex flex-col md:flex-row">
          {/* Left panel (35%) */}
          <div className="md:w-[35%] md:border-r md:border-gray-800 border-b border-gray-800 min-h-[400px] md:min-h-[500px] relative flex flex-col">
            <div className="px-8 pt-8 text-gray-500 text-xl tracking-[0.3em]">***</div>

            <div className="flex-1 relative">
              <AnimatePresence mode="wait">
                <SandTransitionImage
                  key={activeChapter}
                  src={chapter.image}
                  alt={chapter.name}
                  className="absolute inset-0"
                />
              </AnimatePresence>
            </div>

            <div className="px-8 pb-8 flex items-center gap-2 text-[10px] tracking-widest uppercase" style={{ fontFamily: MONO_FONT }}>
              <motion.span
                key={activeChapter}
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-[#888]"
              >
                {String(activeChapter + 1).padStart(2, '0')}
              </motion.span>
              <span className="text-[#333]">/</span>
              <span className="text-[#888]">05</span>
            </div>
          </div>

          {/* Right panel (65%) */}
          <div className="md:w-[65%]">
            <div className="border-b border-gray-800 p-8 flex justify-between items-center text-[10px] tracking-widest text-gray-400" style={{ fontFamily: MONO_FONT }}>
              <span>Explore the past. Understand the present.</span>
              <motion.span
                key={activeChapter}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                Chapter 0{activeChapter + 1}
              </motion.span>
            </div>

            <div>
              {chaptersData.map((c, i) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setActiveChapter(i)}
                  className={`w-full text-left border-b border-gray-800/80 py-8 px-8 flex items-center justify-between transition-colors ${
                    i === activeChapter ? 'text-white' : 'text-[#444] hover:text-[#999]'
                  }`}
                >
                  <span className="text-2xl md:text-[2rem] font-medium tracking-tight">
                    {c.name}
                  </span>
                  <AnimatePresence>
                    {i === activeChapter && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowUpRight size={22} strokeWidth={1} className="text-gray-400" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="h-[1px] bg-gray-800" />
        <div className="px-8 py-8 text-[10px] tracking-widest text-gray-500 uppercase bg-[#0a0a0a]" style={{ fontFamily: MONO_FONT }}>
          DIGGING INTO OUR PLANET'S PAST
        </div>
      </section>
    </div>
  )
}
