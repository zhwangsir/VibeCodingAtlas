/* ============================================================
 *  SynapseX — 神经 AI 接口产品单页落地页
 *  字体:Space Mono(全文本)+ Anton SC(背景水印)
 *  核心:5 个全屏视频背景 + 鼠标 scrub 英雄视频 + 3D 文本透视 + 字符乱码动画
 * ============================================================ */
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion'
import { Download } from 'lucide-react'
import './SynapseX.css'

/* ===== 视频地址 ===== */
const VIDEOS = {
  hero: '/videos/290e5a10-0b95-41af-a5e2-32b6389baa4d.mp4',
  cinematic: '/videos/089c54f8-3b03-4966-9df1-e9746063d0ef.mp4',
  metrics: '/videos/ecea3dd2-fc5e-4e41-8696-4219290b6589.mp4',
  tech: '/videos/32a52ce0-2005-45c9-9093-41f03fde9530.mp4',
  footer: '/videos/fd7f4f85-3a86-4837-8192-85e7bfe68e75.mp4',
}

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><'

/* ============================================================
 *  ScrambleIn — 入场乱码揭示动画
 * ============================================================ */
function ScrambleIn({
  text,
  delay,
  triggered,
}: {
  text: string
  delay: number
  triggered: boolean
}) {
  const [display, setDisplay] = useState<string>(text.replace(/./g, ' '))

  useEffect(() => {
    if (!triggered) {
      setDisplay(text.replace(/./g, ' '))
      return
    }

    let frame = 0
    let intervalId: ReturnType<typeof setInterval> | null = null

    const startTimer = setTimeout(() => {
      intervalId = setInterval(() => {
        // 0.5 字符/帧 = 每 2 帧揭示 1 字符
        const revealPos = frame * 0.5
        let out = ''
        for (let i = 0; i < text.length; i++) {
          if (text[i] === ' ') {
            out += ' '
            continue
          }
          if (i < revealPos) {
            out += text[i]
          } else if (i < revealPos + 3) {
            out += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
          } else {
            out += ' '
          }
        }
        setDisplay(out)
        frame++
        if (revealPos >= text.length) {
          setDisplay(text)
          if (intervalId) clearInterval(intervalId)
        }
      }, 25)
    }, delay)

    return () => {
      clearTimeout(startTimer)
      if (intervalId) clearInterval(intervalId)
    }
  }, [text, delay, triggered])

  return <span style={{ whiteSpace: 'pre' }}>{display.replace(/ /g, '\u00A0')}</span>
}

/* ============================================================
 *  ScrambleText — 悬停驱动乱码
 * ============================================================ */
function ScrambleText({
  text,
  isHovered,
  className,
}: {
  text: string
  isHovered: boolean
  className?: string
}) {
  const [display, setDisplay] = useState(text)

  useEffect(() => {
    if (!isHovered) {
      setDisplay(text)
      return
    }

    let frame = 0
    const intervalId = setInterval(() => {
      // 4 帧/字符揭示
      const revealPos = frame / 4
      let out = ''
      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          out += ' '
          continue
        }
        if (i < revealPos) {
          out += text[i]
        } else {
          out += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
        }
      }
      setDisplay(out)
      frame++
      if (revealPos >= text.length) {
        setDisplay(text)
        clearInterval(intervalId)
      }
    }, 25)

    return () => clearInterval(intervalId)
  }, [text, isHovered])

  return <span className={className}>{display}</span>
}

/* ============================================================
 *  SynapseXLogo — 4 折旋转对称 SVG
 * ============================================================ */
function SynapseXLogo({ className }: { className?: string }) {
  const path =
    'M 1.5,23 L 1.5,33 C 1.5,38.5 6,43 11.5,43 L 16.5,43 C 22,43 26.5,38.5 26.5,33 Q 28,28 33,26.5 C 38.5,26.5 43,22 43,16.5 L 43,11.5 C 43,6 38.5,1.5 33,1.5 L 23,1.5 Q 12,12 1.5,23 Z'
  return (
    <svg viewBox="-50 -50 100 100" className={className} fill="currentColor" aria-hidden="true">
      <path d={path} transform="rotate(0)" />
      <path d={path} transform="rotate(90)" />
      <path d={path} transform="rotate(180)" />
      <path d={path} transform="rotate(270)" />
    </svg>
  )
}

/* ============================================================
 *  SquashHamburger — 弹性汉堡菜单
 * ============================================================ */
function SquashHamburger({ open }: { open: boolean }) {
  // 桌面/移动条高度差异(通过 CSS media query 控制 height,这里仅控制 transform)
  const topVariants = {
    closed: { top: 0, transform: 'translateY(0) rotate(0deg)' },
    open: { top: '50%', transform: 'translateY(-50%) rotate(45deg)' },
  }
  const middleVariants = {
    closed: { opacity: 1, transform: 'translateY(-50%) scale(1)' },
    open: { opacity: 0, transform: 'translateY(-50%) scale(0)' },
  }
  const bottomVariants = {
    closed: { bottom: 0, transform: 'translateY(0) rotate(0deg)' },
    open: { bottom: '50%', transform: 'translateY(50%) rotate(-45deg)' },
  }

  return (
    <motion.div
      className="sx-hamburger"
      animate={open ? 'open' : 'closed'}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <motion.span
        className="sx-bar sx-bar-top"
        variants={{ closed: topVariants.closed, open: topVariants.open }}
      />
      <motion.span
        className="sx-bar sx-bar-middle"
        variants={{ closed: middleVariants.closed, open: middleVariants.open }}
      />
      <motion.span
        className="sx-bar sx-bar-bottom"
        variants={{ closed: bottomVariants.closed, open: bottomVariants.open }}
      />
    </motion.div>
  )
}

/* ============================================================
 *  Navbar
 * ============================================================ */
function Navbar({ entranceComplete }: { entranceComplete: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [logoHover, setLogoHover] = useState(false)
  const [downloadHover, setDownloadHover] = useState(false)
  const [aboutHover, setAboutHover] = useState(false)
  const [metricsHover, setMetricsHover] = useState(false)

  const scrollToSection = (index: number) => {
    window.scrollTo({ top: window.innerHeight * index, behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <motion.header
      className="sx-navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: entranceComplete ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* ===== 桌面导航 ===== */}
      <div className="sx-nav-desktop">
        <div className="sx-nav-left">
          {/* Logo 胶囊 */}
          <motion.a
            href="#"
            className={`sx-pill sx-logo-pill ${menuOpen ? 'sx-hidden-when-open' : ''}`}
            onMouseEnter={() => setLogoHover(true)}
            onMouseLeave={() => setLogoHover(false)}
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.22)' }}
            whileTap={{ scale: 0.98 }}
          >
            <SynapseXLogo className="sx-logo-icon" />
            <span className="sx-logo-text">
              <ScrambleText text="SynapseX" isHovered={logoHover} />
            </span>
          </motion.a>

          {/* 展开菜单胶囊 */}
          <motion.div
            className="sx-pill sx-menu-pill"
            animate={{ width: menuOpen ? 290 : 48 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          >
            <motion.button
              className={`sx-hamburger-btn ${menuOpen ? 'is-open' : ''}`}
              onClick={() => setMenuOpen((v) => !v)}
              whileTap={{ scale: 0.95 }}
              aria-label="Menu"
            >
              <SquashHamburger open={menuOpen} />
            </motion.button>

            <AnimatePresence>
              {menuOpen && (
                <motion.nav
                  className="sx-nav-links"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    className="sx-nav-link"
                    onMouseEnter={() => setAboutHover(true)}
                    onMouseLeave={() => setAboutHover(false)}
                    onClick={() => scrollToSection(1)}
                  >
                    <ScrambleText text="About" isHovered={aboutHover} />
                  </button>
                  <button
                    className="sx-nav-link"
                    onMouseEnter={() => setMetricsHover(true)}
                    onMouseLeave={() => setMetricsHover(false)}
                    onClick={() => scrollToSection(2)}
                  >
                    <ScrambleText text="Metrics" isHovered={metricsHover} />
                  </button>
                </motion.nav>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* 下载按钮 */}
        <motion.a
          href="#"
          className="sx-download-btn"
          onMouseEnter={() => setDownloadHover(true)}
          onMouseLeave={() => setDownloadHover(false)}
          whileHover={{ scale: 1.03, backgroundColor: '#e2e2e6' }}
          whileTap={{ scale: 0.97 }}
        >
          <Download style={{ width: 18, height: 18 }} />
          <ScrambleText text="Download" isHovered={downloadHover} />
        </motion.a>
      </div>

      {/* ===== 移动端导航 ===== */}
      <div className="sx-nav-mobile">
        <motion.div
          className="sx-m-pill sx-m-menu-pill"
          animate={{ width: menuOpen ? '100%' : 'auto' }}
          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
        >
          <button
            className="sx-m-hamburger-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            <SquashHamburger open={menuOpen} />
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                className="sx-m-nav-links"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.25 }}
              >
                <button
                  className="sx-m-nav-link"
                  onMouseEnter={() => setAboutHover(true)}
                  onMouseLeave={() => setAboutHover(false)}
                  onClick={() => scrollToSection(1)}
                >
                  <ScrambleText text="About" isHovered={aboutHover} />
                </button>
                <button
                  className="sx-m-nav-link"
                  onMouseEnter={() => setMetricsHover(true)}
                  onMouseLeave={() => setMetricsHover(false)}
                  onClick={() => scrollToSection(2)}
                >
                  <ScrambleText text="Metrics" isHovered={metricsHover} />
                </button>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.a
          href="#"
          className="sx-m-download"
          onMouseEnter={() => setDownloadHover(true)}
          onMouseLeave={() => setDownloadHover(false)}
          whileHover={{ scale: 1.03, backgroundColor: '#e2e2e6' }}
          whileTap={{ scale: 0.97 }}
        >
          <Download style={{ width: 15, height: 15 }} />
          <ScrambleText text="Download" isHovered={downloadHover} />
        </motion.a>
      </div>
    </motion.header>
  )
}

/* ============================================================
 *  Section 1: Hero — 鼠标 scrub 视频
 * ============================================================ */
function HeroSection({ entranceComplete }: { entranceComplete: boolean }) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const lastXRef = useRef(0)
  const seekingRef = useRef(false)
  const targetTimeRef = useRef(0)

  // 鼠标横向移动 scrub 视频时间线
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const video = videoRef.current
    if (!video || !video.duration || !isFinite(video.duration)) return

    const delta = (e.clientX - lastXRef.current) * 0.8
    lastXRef.current = e.clientX

    // delta 转换为秒数(灵敏度)
    const deltaSeconds = (delta / window.innerWidth) * video.duration * 2
    targetTimeRef.current = Math.max(0, Math.min(video.duration, video.currentTime + deltaSeconds))

    if (!seekingRef.current) {
      seekingRef.current = true
      video.currentTime = targetTimeRef.current
    }
  }, [])

  // seeked 事件链式 seek,避免丢帧
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // 主动触发 metadata 加载(非自动播放视频需要显式 load)
    video.load()

    const onSeeked = () => {
      seekingRef.current = false
      if (Math.abs(video.currentTime - targetTimeRef.current) > 0.1) {
        seekingRef.current = true
        video.currentTime = targetTimeRef.current
      }
    }
    video.addEventListener('seeked', onSeeked)
    return () => video.removeEventListener('seeked', onSeeked)
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return (
    <section
      ref={containerRef}
      className="sx-hero sx-section"
    >
      {/* 鼠标 scrub 视频(非自动播放) */}
      <video
        ref={videoRef}
        src={VIDEOS.hero}
        className="sx-bg-video"
        muted
        playsInline
        preload="auto"
      />

      {/* 点阵网格叠加 */}
      <div className="sx-dot-grid" />

      {/* 大型背景水印文字 */}
      <div className="sx-watermark">
        <span className="sx-watermark-text">TRANSCENDENCE</span>
      </div>

      {/* Hero 内容 */}
      <div className="sx-hero-content">
        <div className="sx-hero-spacer" />
        <div className="sx-hero-bottom">
          {/* 左列 */}
          <div className="sx-hero-left">
            <h1 className="sx-hero-h1 sx-text-left">
              <ScrambleIn text="Brain" delay={200} triggered={entranceComplete} />
              <br />
              <ScrambleIn text="And Body" delay={500} triggered={entranceComplete} />
            </h1>
            <motion.p
              className="sx-hero-desc"
              initial={{ y: 25, opacity: 0 }}
              animate={entranceComplete ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1], delay: 0.2 }}
            >
              Built at the intersection of neuroscience and artificial intelligence. SynapseX
              continuously maps neural pathways, cognitive load, and physiological states into a
              single adaptive intelligence layer.
            </motion.p>
          </div>

          {/* 右列 */}
          <h1 className="sx-hero-h1 sx-text-right">
            <ScrambleIn text="One" delay={700} triggered={entranceComplete} />
            <br />
            <ScrambleIn text="Network" delay={1000} triggered={entranceComplete} />
          </h1>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
 *  Section 2: Cinematic Text — 3D 透视文本
 * ============================================================ */
function CinematicSection() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const ySpring = useSpring(scrollYProgress, { stiffness: 15, damping: 32, mass: 1.8 })
  const yValue = useTransform(ySpring, [0, 1], [60, -120])
  const opacityValue = useTransform(ySpring, [0.3, 0.5], [0, 1])
  const rotateX = useMotionValue(24)
  const translateZ = useMotionValue(15)
  const transform = useMotionTemplate`rotateX(${rotateX}deg) translateY(${yValue}px) translateZ(${translateZ}px)`

  return (
    <section ref={ref} className="sx-section sx-cinematic">
      <video src={VIDEOS.cinematic} className="sx-bg-video" autoPlay muted loop playsInline />
      <div className="sx-top-gradient" />

      <div className="sx-cinematic-content">
        <motion.p
          className="sx-cinematic-text"
          style={{ transform, opacity: opacityValue }}
        >
          A neural-AI interface built on the architecture of the human nervous system. SynapseX
          translates synaptic activity into computational intelligence. Every signal becomes
          measurable, structured, and visible. It continuously reconstructs internal state as a
          dynamic neural map. Biological noise is filtered into actionable cognitive patterns.
        </motion.p>
      </div>
    </section>
  )
}

/* ============================================================
 *  Section 3: Metrics
 * ============================================================ */
const METRICS = [
  { value: '2.4ms', label: 'Synaptic Latency' },
  { value: '99.7%', label: 'Signal Accuracy' },
  { value: '140B', label: 'Neural Parameters' },
]

function MetricsSection() {
  return (
    <section className="sx-section sx-metrics">
      <video src={VIDEOS.metrics} className="sx-bg-video" autoPlay muted loop playsInline />

      <div className="sx-metrics-content">
        <motion.p
          className="sx-section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2 }}
        >
          Performance Metrics
        </motion.p>

        <div className="sx-metrics-grid">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              className="sx-metric"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              <div className="sx-metric-value">{m.value}</div>
              <div className="sx-metric-label">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
 *  Section 4: Technology / Adaptive Intelligence
 * ============================================================ */
const TECH_ITEMS = [
  { title: 'Cortical Mapping', desc: 'Real-time spatial reconstruction of active neural regions.' },
  { title: 'Signal Isolation', desc: 'Separates cognitive intent from biological noise.' },
  { title: 'State Prediction', desc: 'Anticipates cognitive transitions before they occur.' },
  { title: 'Loop Feedback', desc: 'Closed-loop adjustment based on outcome correlation.' },
]

function TechnologySection() {
  return (
    <section className="sx-section sx-tech">
      <video src={VIDEOS.tech} className="sx-bg-video" autoPlay muted loop playsInline />

      <div className="sx-tech-content">
        <div className="sx-tech-top">
          <motion.h2
            className="sx-tech-heading"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.0 }}
          >
            Adaptive<br />Intelligence
          </motion.h2>

          <motion.p
            className="sx-tech-desc"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.0, delay: 0.2 }}
          >
            The system learns your neural baseline within 72 hours. From there, every cognitive
            state is mapped, predicted, and optimized in real time.
          </motion.p>
        </div>

        <div className="sx-tech-spacer" />

        <motion.div
          className="sx-tech-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, delay: 0.3 }}
        >
          {TECH_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              className="sx-tech-item"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <h3 className="sx-tech-item-title">{item.title}</h3>
              <p className="sx-tech-item-desc">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ============================================================
 *  Section 5: Architecture (纯黑背景,无视频)
 * ============================================================ */
const LAYERS = [
  { num: 'Layer 1', name: 'Capture' },
  { num: 'Layer 2', name: 'Process' },
  { num: 'Layer 3', name: 'Interface' },
]

function ArchitectureSection() {
  return (
    <section className="sx-architecture">
      <div className="sx-arch-content">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.0 }}
        >
          <p className="sx-section-subtitle">Architecture</p>
          <h2 className="sx-arch-heading">Three layers. Zero friction.</h2>
          <p className="sx-arch-desc">
            Sensor layer captures raw bioelectric signals. Processing layer isolates intent.
            Interface layer delivers structured output to any connected system.
          </p>
        </motion.div>

        <motion.div
          className="sx-arch-cards"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          {LAYERS.map((layer) => (
            <div key={layer.num} className="sx-arch-card">
              <span className="sx-arch-card-num">{layer.num}</span>
              <span className="sx-arch-card-name">{layer.name}</span>
            </div>
          ))}
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
    <footer className="sx-footer">
      <div className="sx-footer-left">
        <video src={VIDEOS.footer} className="sx-bg-video" autoPlay muted loop playsInline />
      </div>
      <div className="sx-footer-right">
        <div className="sx-footer-top">
          <div className="sx-footer-logo">
            <SynapseXLogo className="sx-footer-logo-icon" />
            <span className="sx-footer-logo-text">SynapseX</span>
          </div>
          <p className="sx-footer-desc">
            The next evolution of human-machine interaction. Built for those who refuse to be
            limited by biology alone.
          </p>
        </div>
        <div className="sx-footer-bottom">(c) 2026 SynapseX Labs. All rights reserved.</div>
      </div>
    </footer>
  )
}

/* ============================================================
 *  SynapseXLanding — 主入口
 * ============================================================ */
export default function SynapseXLanding() {
  const [entranceComplete, setEntranceComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setEntranceComplete(true), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div data-theme="synapse-x" className="sx-root" style={{ fontFamily: '"Space Mono", monospace' }}>
      <Navbar entranceComplete={entranceComplete} />
      <HeroSection entranceComplete={entranceComplete} />
      <CinematicSection />
      <MetricsSection />
      <TechnologySection />
      <ArchitectureSection />
      <Footer />
    </div>
  )
}
