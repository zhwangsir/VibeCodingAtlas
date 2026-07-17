/* ============================================================
 *  Viktor Oddy — 创意工作室单页落地页
 *  字体:PP Neue Montreal (Webflow CDN) + PP Mondwest (本地 serif)
 *  核心:10 段布局 · 渐入动画 · 跑马灯 · 视差图 · 自动轮播 · 鼠标轨迹
 * ============================================================ */
import { useEffect, useRef, useState, type ReactNode } from 'react'
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  ArrowRight,
} from 'lucide-react'

/* ===== 跑马灯图片(已本地化) ===== */
const MARQUEE_IMAGES = [
  '/viktor-oddy/hero-space-voyage-preview-eECLH3Yc.gif',
  '/viktor-oddy/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
  '/viktor-oddy/hero-velorah-preview-CJNTtbpd.gif',
  '/viktor-oddy/hero-asme-preview-B_nGDnTP.gif',
  '/viktor-oddy/hero-transform-data-preview-Cx5OU29N.gif',
  '/viktor-oddy/hero-aethera-preview-DknSlcTa.gif',
  '/viktor-oddy/hero-orbit-web3-preview-BXt4OttD.gif',
  '/viktor-oddy/hero-nexora-preview-cx5HmUgo.gif',
]

/* ===== 视差图 ===== */
const PARALLAX_IMG = '/images/7aa5494f-4d5b-432e-9dc7-20715275f143_1280.webp'

/* ===== Partner 头像(已本地化) ===== */
const PARTNER_AVATAR = '/viktor-oddy/partner-avatar.jpg'

/* ===== 项目数据(图片已本地化) ===== */
const PROJECTS = [
  {
    name: 'evr',
    desc: 'From idea to millions raised for a web3 AI product',
    img: '/viktor-oddy/hero-evr-ventures-preview-DZxeVFEX.gif',
  },
  {
    name: 'Automation Machines',
    desc: 'Streamlining industrial automation processes',
    img: '/viktor-oddy/hero-automation-machines-preview-DlTveRIN.gif',
  },
  {
    name: 'xPortfolio',
    desc: 'Modern portfolio management platform',
    img: '/viktor-oddy/hero-xportfolio-preview-D4A8maiC.gif',
  },
]

/* ===== 评价数据(头像已本地化) ===== */
const TESTIMONIALS = [
  {
    name: 'Marcus Anderson',
    role: 'CEO, Data.storage',
    quote:
      'With very little guidance team delivered designs that were consistently spot on...',
    avatar: '/viktor-oddy/testimonial-1.jpg',
  },
  {
    name: 'alexwu',
    role: 'Founder, Nexgate',
    quote:
      'Viktor led the creation of our best fundraising deck to date!...',
    avatar: '/viktor-oddy/testimonial-2.jpg',
  },
  {
    name: 'James Mitchell',
    role: 'VP Product, LaunchPad',
    quote: 'Working with Viktor transformed our product vision...',
    avatar: '/viktor-oddy/testimonial-3.jpg',
  },
  {
    name: 'Rachel Foster',
    role: 'Co-founder, Nexus Labs',
    quote: 'The design quality exceeded our expectations...',
    avatar: '/viktor-oddy/testimonial-4.jpg',
  },
  {
    name: 'David Zhang',
    role: 'Head of Design, Paradigm Labs',
    quote: 'Incredible work from start to finish...',
    avatar: '/viktor-oddy/testimonial-5.jpg',
  },
]

const BOOK_URL = 'https://halaskastudio.com/./book'

/* ============================================================
 *  useInViewAnimation — IntersectionObserver 一次性入场
 * ============================================================ */
function useInViewAnimation<T extends HTMLElement>(threshold = 0.1) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true)
            obs.disconnect()
          }
        })
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, inView }
}

/* ============================================================
 *  Reveal — 包裹层 + animationDelay
 * ============================================================ */
function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'header' | 'p' | 'h1' | 'h2' | 'span'
}) {
  const { ref, inView } = useInViewAnimation<HTMLDivElement>()
  return (
    <Tag
      ref={ref as never}
      className={`vo-animate${inView ? ' vo-in-view' : ''} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  )
}

/* ============================================================
 *  Button — 4 种变体
 * ============================================================ */
type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'secondary-dark'

function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
}: {
  children: ReactNode
  variant?: ButtonVariant
  href?: string
  onClick?: () => void
  className?: string
}) {
  const cls = `vo-btn vo-btn-${variant} ${className}`
  if (href) {
    return (
      <a className={cls} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {children}
      </a>
    )
  }
  return (
    <button className={cls} onClick={onClick}>
      {children}
    </button>
  )
}

/* ============================================================
 *  Hero — 顶部首屏
 * ============================================================ */
function Hero() {
  return (
    <section className="vo-hero">
      <Reveal delay={0.1}>
        <h1 className="vo-logo">Viktor Oddy</h1>
      </Reveal>
      <Reveal delay={0.2} as="p" className="vo-tagline">
        The creative studio of Viktor Oddy
      </Reveal>
      <Reveal delay={0.3}>
        <h2 className="vo-heading">
          Build the <span className="vo-serif">next wave,</span>
          <br />
          the <span className="vo-serif">bold way.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.4}>
        <div className="vo-desc">
          <p>
            I spent seven years at Apple crafting products used by over a billion people.
            I founded Vortex Studio to bring that same level of thinking to innovators
            shaping what comes next.
          </p>
          <p>
            The studio is deliberately small. I guide the creative vision on every
            project, backed by a veteran design crew that moves fast without cutting
            corners.
          </p>
          <p>Projects start at $5,000 per month.</p>
        </div>
      </Reveal>
      <Reveal delay={0.5}>
        <div className="vo-hero-btns">
          <Button variant="primary" href={BOOK_URL}>Start a chat</Button>
          <Button variant="secondary">View projects</Button>
        </div>
      </Reveal>
    </section>
  )
}

/* ============================================================
 *  Marquee — 16 张图片水平滚动
 * ============================================================ */
function Marquee() {
  // 8 张原始图 ×2 复制 = 16 张,实现 translateX(-50%) 无缝循环
  const doubled = [...MARQUEE_IMAGES, ...MARQUEE_IMAGES]
  return (
    <div className="vo-marquee">
      <div className="vo-marquee-track">
        {doubled.map((src, i) => (
          <img key={i} src={src} alt="" className="vo-marquee-img" loading="lazy" />
        ))}
      </div>
    </div>
  )
}

/* ============================================================
 *  QuoteSection — 引用 + 视差图
 * ============================================================ */
function QuoteSection() {
  const imgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const img = imgRef.current
    if (!img) return
    let raf = 0
    let inView = false

    const update = () => {
      raf = 0
      const rect = img.getBoundingClientRect()
      const viewportH = window.innerHeight
      // 图片中心相对视口中线的偏移
      const center = rect.top + rect.height / 2
      const offset = (center - viewportH / 2) / viewportH
      const translate = Math.max(-200, Math.min(200, offset * 200))
      img.style.transform = `translateY(${translate * -0.3}px)`
    }

    const onScroll = () => {
      if (!inView) return
      if (raf) return
      raf = requestAnimationFrame(update)
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          inView = e.isIntersecting
          if (inView) update()
        })
      },
      { threshold: 0 }
    )
    obs.observe(img)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      obs.disconnect()
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="vo-quote-section">
      <Reveal delay={0.1}>
        <Quote className="vo-quote-icon" />
      </Reveal>
      <Reveal delay={0.2}>
        <p className="vo-quote-text">
          I left <span className="vo-serif">Apple</span> to build the studio I always
          wanted to work with
        </p>
      </Reveal>
      <Reveal delay={0.3}>
        <p className="vo-quote-author">Viktor Oddy</p>
      </Reveal>
      <Reveal delay={0.4}>
        <div className="vo-quote-logos">
          <span className="vo-quote-logo" style={{ width: 80 }}>Apple</span>
          <span className="vo-quote-logo" style={{ width: 83 }}>IDEO</span>
          <span className="vo-quote-logo" style={{ width: 110 }}>Polygon</span>
        </div>
      </Reveal>
      <Reveal delay={0.5}>
        <img
          ref={imgRef}
          className="vo-parallax-img"
          src={PARALLAX_IMG}
          alt="Chris Halaska"
          loading="lazy"
        />
      </Reveal>
    </section>
  )
}

/* ============================================================
 *  Pricing — 两张卡片
 * ============================================================ */
function Pricing() {
  return (
    <section className="vo-pricing">
      <div className="vo-pricing-grid">
        {/* 暗色卡片 */}
        <Reveal delay={0.1}>
          <div className="vo-card vo-card-dark">
            <h3 className="vo-card-title">
              {'Monthly Partnership\nA dedicated creative design team.\nYou work directly with Viktor.'}
            </h3>
            <div className="vo-card-price">$5,000</div>
            <div className="vo-card-price-label">Monthly</div>
            <div className="vo-card-btns">
              <Button variant="primary" href={BOOK_URL}>Start a chat</Button>
              <Button variant="secondary-dark" href={BOOK_URL}>How it works</Button>
            </div>
          </div>
        </Reveal>
        {/* 亮色卡片 */}
        <Reveal delay={0.2}>
          <div className="vo-card vo-card-light">
            <h3 className="vo-card-title">
              {'Custom Project\nFixed scope, fixed timeline.\nSame team, same standards.'}
            </h3>
            <div className="vo-card-price">$5,000</div>
            <div className="vo-card-price-label">Minimum</div>
            <div className="vo-card-btns">
              <Button variant="tertiary" href={BOOK_URL}>Start a chat</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ============================================================
 *  TestimonialCarousel — 自动滚动 + 暂停 + 上一/下一
 * ============================================================ */
function TestimonialCarousel() {
  const tripled = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS]
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [exiting, setExiting] = useState(false)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const viewportRef = useRef<HTMLDivElement | null>(null)

  const total = tripled.length

  const advance = (dir: 1 | -1) => {
    setExiting(true)
    setTimeout(() => {
      setIndex((i) => (i + dir + total) % total)
      setExiting(false)
    }, 400)
  }

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => advance(1), 3000)
    return () => clearInterval(id)
  }, [paused])

  useEffect(() => {
    const track = trackRef.current
    const viewport = viewportRef.current
    if (!track || !viewport) return
    const card = track.children[0] as HTMLElement
    if (!card) return
    const cardWidth = card.offsetWidth + 24 // gap
    track.style.transform = `translateX(-${index * cardWidth}px)`
  }, [index])

  return (
    <section className="vo-carousel-section">
      <div className="vo-carousel-header">
        <h2 className="vo-quote-text" style={{ textAlign: 'left' }}>
          What <span className="vo-serif">builders</span> say
        </h2>
        <div className="vo-carousel-stars">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="w-5 h-5" style={{ fill: '#000' }} />
          ))}
          <span style={{ fontSize: 14, marginLeft: 4 }}>Clutch 5/5</span>
        </div>
      </div>

      <div
        className="vo-carousel-viewport"
        ref={viewportRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="vo-carousel-track" ref={trackRef}>
          {tripled.map((t, i) => (
            <div key={i} className={`vo-carousel-card${exiting ? ' exiting' : ''}`}>
              <Quote className="vo-quote-mark" style={{ width: 32, height: 32, fill: '#0D212C', stroke: 'none' }} />
              <p className="vo-card-quote">{t.quote}</p>
              <div className="vo-author-row">
                <img className="vo-avatar" src={t.avatar} alt={t.name} />
                <div>
                  <div className="vo-author-name">{t.name}</div>
                  <div className="vo-author-role">
                    <ArrowRight style={{ width: 12, height: 12 }} />
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="vo-carousel-controls">
        <button className="vo-carousel-btn" onClick={() => advance(-1)} aria-label="Previous">
          <ChevronLeft style={{ width: 20, height: 20 }} />
        </button>
        <button className="vo-carousel-btn" onClick={() => advance(1)} aria-label="Next">
          <ChevronRight style={{ width: 20, height: 20 }} />
        </button>
      </div>
    </section>
  )
}

/* ============================================================
 *  ProjectsSection — 3 个项目竖向堆叠
 * ============================================================ */
function ProjectsSection() {
  return (
    <section className="vo-projects">
      {PROJECTS.map((p) => (
        <ProjectItem key={p.name} {...p} />
      ))}
    </section>
  )
}

function ProjectItem({ name, desc, img }: { name: string; desc: string; img: string }) {
  return (
    <div className="vo-project-item">
      <Reveal>
        <div className="vo-project-text">
          <h3 className="vo-project-name">{name}</h3>
          <p className="vo-project-desc">{desc}</p>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <img className="vo-project-img" src={img} alt={name} loading="lazy" />
      </Reveal>
    </div>
  )
}

/* ============================================================
 *  PartnerSection — 鼠标轨迹 GIF 生成
 * ============================================================ */
function PartnerSection() {
  const boxRef = useRef<HTMLDivElement | null>(null)
  const [spawns, setSpawns] = useState<
    { id: number; x: number; y: number; rot: number; src: string }[]
  >([])
  const lastSpawn = useRef(0)
  const idRef = useRef(0)

  useEffect(() => {
    const box = boxRef.current
    if (!box) return

    const handleMove = (e: MouseEvent) => {
      const now = performance.now()
      if (now - lastSpawn.current < 80) return
      lastSpawn.current = now

      const rect = box.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const rot = (Math.random() - 0.5) * 20
      const src = MARQUEE_IMAGES[Math.floor(Math.random() * MARQUEE_IMAGES.length)]
      const id = idRef.current++
      setSpawns((prev) => [...prev, { id, x, y, rot, src }])

      setTimeout(() => {
        setSpawns((prev) => prev.filter((s) => s.id !== id))
      }, 1000)
    }

    box.addEventListener('mousemove', handleMove)
    return () => box.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <section className="vo-partner">
      <div className="vo-partner-box" ref={boxRef}>
        <h2 className="vo-partner-heading">Partner with us</h2>
        <Button variant="primary" href={BOOK_URL}>
          <img src={PARTNER_AVATAR} alt="" className="vo-partner-avatar" />
          Start chat with Viktor
        </Button>
        {spawns.map((s) => (
          <img
            key={s.id}
            src={s.src}
            alt=""
            className="vo-spawn"
            style={{
              left: s.x,
              top: s.y,
              ['--rot' as never]: `${s.rot}deg`,
              transform: `translate(-50%, -50%) rotate(${s.rot}deg)`,
            }}
          />
        ))}
      </div>
    </section>
  )
}

/* ============================================================
 *  Footer
 * ============================================================ */
function Footer() {
  return (
    <footer className="vo-footer">
      <Button variant="primary" href={BOOK_URL}>Start a chat</Button>
      <div className="vo-footer-right">
        <ArrowUpRight style={{ width: 24, height: 24, color: '#051A24' }} />
        <div className="vo-footer-col">
          <a className="vo-footer-link" href="#services">Services</a>
          <a className="vo-footer-link" href="#work">Work</a>
          <a className="vo-footer-link" href="#about">About</a>
        </div>
        <div className="vo-footer-col">
          <a className="vo-footer-link" href="https://x.com" target="_blank" rel="noreferrer">x.com</a>
          <a className="vo-footer-link" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

/* ============================================================
 *  CopyrightBar
 * ============================================================ */
function CopyrightBar() {
  return (
    <div className="vo-copyright">
      <span>Vortex Studio Limited</span>
      <span>Austin, USA</span>
    </div>
  )
}

/* ============================================================
 *  BottomNav — 固定悬浮
 * ============================================================ */
function BottomNav() {
  return (
    <div className="vo-bottom-nav">
      <span className="vo-bottom-nav-letter">V</span>
      <Button variant="primary" href={BOOK_URL}>Start a chat</Button>
    </div>
  )
}

/* ============================================================
 *  ViktorOddyLanding — 主入口
 * ============================================================ */
export default function ViktorOddyLanding() {
  return (
    <div data-theme="viktor-oddy">
      <Hero />
      <Marquee />
      <QuoteSection />
      <Pricing />
      <TestimonialCarousel />
      <ProjectsSection />
      <PartnerSection />
      <Footer />
      <CopyrightBar />
      <BottomNav />
    </div>
  )
}
