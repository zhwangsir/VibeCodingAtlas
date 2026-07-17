/* ============================================================
 *  Dental Health — Quality Healthcare
 *  牙科诊所落地页（3 section + splash + navbar）
 *  字体：Open Sauce One / Open Sauce One Bold
 *  核心：MaskedCard（多卡片共享同一背景图，每张显示不同"窗口"）
 * ============================================================ */
import {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
  type ReactNode,
  type CSSProperties,
  type RefObject,
} from 'react'
import { ArrowRight } from 'lucide-react'

/* ===== 图片 URL（按规范使用精确地址） ===== */
const HERO_IMAGE = '/images/ccf3cf97-d447-425b-a134-d7b09fc743fc_1280.webp'

const SECTION2_IMAGE = '/images/414dfe80-f15c-4e25-bf52-b13721f4bd88_1280.webp'

const SECTION3_IMG1 = '/images/c19ab167-8dd5-48b4-967d-b9f0d9d6e8fb_1280.webp'

const SECTION3_IMG2 = '/images/fc519057-6e87-4abf-999a-9610b8b085b4_1280.webp'

const SECTION3_BG = '/images/752ba9e6-0942-4abb-9047-5d9bb16632e9_1280.webp'

/* ===== 数据 ===== */
const featureBars = ['Advanced Dentistry', 'High Quality Equipment', 'Friendly Staff']

const services = [
  { name: 'Dental\nVeneers', num: '01', active: true },
  { name: 'Dental\nCrowns', num: '02', active: false },
  { name: 'Teeth\nWhitening', num: '03', active: false },
  { name: 'Dental\nImplants', num: null, active: false },
] as const

const NAV_LINKS = ['Home', 'Services', 'About', 'Gallery', 'Contact']

/* ============================================================
 *  useIsMobile — 监听 (max-width: 767px) 媒体查询
 * ============================================================ */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return isMobile
}

/* ============================================================
 *  useMaskPositions — ResizeObserver 计算每张卡相对 section 的偏移
 *  返回 { x, y, sw, sh }[] — x/y 为卡片左上角相对 section 的偏移
 * ============================================================ */
type MaskPos = { x: number; y: number; sw: number; sh: number }

function useMaskPositions<T extends HTMLElement>(
  sectionRef: RefObject<T>,
  cardsRef: RefObject<(HTMLElement | null)[]>
) {
  const [positions, setPositions] = useState<MaskPos[]>([])

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const compute = () => {
      const sr = section.getBoundingClientRect()
      const cards = (cardsRef.current || []).filter(Boolean) as HTMLElement[]
      const next: MaskPos[] = cards.map((c) => {
        const cr = c.getBoundingClientRect()
        return {
          x: cr.left - sr.left,
          y: cr.top - sr.top,
          sw: sr.width,
          sh: sr.height,
        }
      })
      setPositions(next)
    }
    compute()
    const ro = new ResizeObserver(compute)
    ro.observe(section)
    // 观察每张卡片自身尺寸变化
    ;(cardsRef.current || []).forEach((c) => {
      if (c) ro.observe(c)
    })
    // 窗口 resize 兜底
    window.addEventListener('resize', compute)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', compute)
    }
  }, [sectionRef, cardsRef])

  return positions
}

/* ============================================================
 *  useImageWidth — 加载图片并按 section 高度计算渲染宽度
 *  renderWidth = naturalWidth * (sectionHeight / naturalHeight)
 * ============================================================ */
function useImageWidth<T extends HTMLElement>(
  src: string,
  sectionRef: RefObject<T>
) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const img = new Image()
    img.onload = () => {
      const sh = section.getBoundingClientRect().height
      if (img.naturalHeight > 0 && sh > 0) {
        setWidth(img.naturalWidth * (sh / img.naturalHeight))
      }
    }
    img.src = src
  }, [src, sectionRef])
  return width
}

/* ============================================================
 *  useStaggeredReveal — IntersectionObserver 触发可见后逐项入场
 * ============================================================ */
function useStaggeredReveal(threshold = 0.15) {
  const containerRef = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio >= threshold) {
            setVisible(true)
            io.disconnect()
          }
        })
      },
      { threshold }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  const getAnimStyle = useCallback(
    (index: number): CSSProperties => ({
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${
        index * 120
      }ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 120}ms`,
    }),
    [visible]
  )

  return { containerRef, getAnimStyle }
}

/* ============================================================
 *  MaskedCard — 多卡共享同一背景图，每张显示不同"窗口"
 *  overflow = imageWidth > sw ? imageWidth - sw : 0
 *  focalOffset = overflow * focalX
 *  backgroundPosition = -[x + focalOffset]px -[y]px
 * ============================================================ */
type MaskedCardProps = {
  bgImage: string
  position?: MaskPos
  imageWidth: number
  focalX: number
  className?: string
  children?: ReactNode
  cardRef?: (el: HTMLElement | null) => void
  style?: CSSProperties
}

function MaskedCard({
  bgImage,
  position,
  imageWidth,
  focalX,
  className = '',
  children,
  cardRef,
  style,
}: MaskedCardProps) {
  // 未拿到位置时先渲染空容器,确保 ref 已挂载
  if (!position) {
    return (
      <div ref={cardRef} className={className} style={style}>
        {children}
      </div>
    )
  }
  const overflow = imageWidth > position.sw ? imageWidth - position.sw : 0
  const focalOffset = overflow * focalX
  return (
    <div
      ref={cardRef}
      className={className}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: `auto ${position.sh}px`,
        backgroundPosition: `-${position.x + focalOffset}px -${position.y}px`,
        backgroundRepeat: 'no-repeat',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

/* ============================================================
 *  SplashScreen — 全屏遮罩,计数 0→100 后淡出
 * ============================================================ */
function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    let step = 0
    const id = setInterval(() => {
      step += 1
      setCount(step)
      if (step >= 100) {
        clearInterval(id)
        // 200ms 后触发淡出
        setTimeout(() => setExiting(true), 200)
        // 900ms 后从 DOM 移除
        setTimeout(() => onComplete(), 900)
      }
    }, 20)
    return () => clearInterval(id)
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-[100] bg-white flex items-end justify-start transition-opacity duration-700 ${
        exiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-7xl md:text-9xl font-bold tabular-nums p-6 md:p-10 leading-none text-black">
        {count}
      </div>
    </div>
  )
}

/* ============================================================
 *  Navbar — 固定顶部,毛玻璃背景
 * ============================================================ */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 py-2 md:py-3 bg-white/80 backdrop-blur-md">
        {/* Logo */}
        <div className="flex flex-col">
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-extrabold uppercase tracking-tight leading-none text-black">
              Dental
            </span>
            <span className="text-xl md:text-2xl font-extrabold uppercase tracking-tight leading-none text-black -mt-1.5 md:-mt-2">
              Health
            </span>
          </div>
          <span className="text-[8px] md:text-[9px] font-medium leading-none mt-1.5 md:mt-2 text-black">
            quality healthcare
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <button
            type="button"
            className="px-6 py-3 bg-white rounded-full border border-black text-sm font-semibold text-black hover:bg-black hover:text-white transition-colors duration-200"
          >
            Menu
          </button>
          <span className="text-sm font-semibold text-black">Dental Emergency</span>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden w-10 h-10 flex items-center justify-center relative"
        >
          <span
            className={`absolute h-0.5 w-6 bg-black rounded-full transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-black rounded-full transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-black rounded-full transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
            }`}
          />
        </button>
      </nav>

      {/* 滚动时 navbar 加阴影 */}
      {scrolled ? (
        <style>{`nav { box-shadow: 0 4px 24px rgba(0,0,0,0.1); }`}</style>
      ) : null}

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 ${menuOpen ? '' : 'pointer-events-none'}`}
      >
        {/* backdrop */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col justify-center h-full px-8 gap-1">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link}
                href="#"
                className={`text-4xl font-bold text-black hover:text-neutral-500 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  menuOpen
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${100 + i * 60}ms` }}
              >
                {link}
              </a>
            ))}

            <div
              className={`mt-8 pt-8 border-t border-neutral-200 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: '450ms' }}
            >
              <p className="text-sm font-semibold text-black mb-4">Dental Emergency</p>
              <button
                type="button"
                className="w-full px-6 py-4 bg-black rounded-full text-white text-sm font-semibold hover:bg-neutral-800 transition-colors duration-200"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

/* ============================================================
 *  Section 1 — HERO(共享 HERO_IMAGE)
 * ============================================================ */
function Section1() {
  const isMobile = useIsMobile()
  const sectionRef = useRef<HTMLElement | null>(null)
  const cardsRef = useRef<(HTMLElement | null)[]>([])
  const positions = useMaskPositions(sectionRef, cardsRef)
  const imageWidth = useImageWidth(HERO_IMAGE, sectionRef)
  const reveal = useStaggeredReveal()
  const focalX = isMobile ? 0.7 : 0.8

  return (
    <section
      ref={(el) => {
        sectionRef.current = el
        reveal.containerRef.current = el
      }}
      className="h-screen w-full overflow-hidden flex flex-col pt-24 md:pt-24 px-3 md:px-5 pb-1.5 md:pb-2 gap-1.5 md:gap-2 bg-white"
    >
      {/* 3 feature bars */}
      {featureBars.map((label, i) => (
        <MaskedCard
          key={label}
          bgImage={HERO_IMAGE}
          position={positions[i]}
          imageWidth={imageWidth}
          focalX={focalX}
          cardRef={(el) => {
            cardsRef.current[i] = el
          }}
          className="w-full h-14 md:h-20 shrink-0 rounded-xl md:rounded-2xl overflow-hidden relative"
          style={reveal.getAnimStyle(i)}
        >
          <span className="flex items-center justify-center h-full text-black text-lg md:text-3xl font-bold text-center relative z-10">
            {label}
          </span>
        </MaskedCard>
      ))}

      {/* 主 Hero 卡 */}
      <MaskedCard
        bgImage={HERO_IMAGE}
        position={positions[3]}
        imageWidth={imageWidth}
        focalX={focalX}
        cardRef={(el) => {
          cardsRef.current[3] = el
        }}
        className="w-full flex-1 min-h-0 rounded-xl md:rounded-2xl overflow-hidden relative"
        style={reveal.getAnimStyle(3)}
      >
        {/* 左上文字 */}
        <p className="absolute top-4 left-4 md:top-7 md:left-7 text-black text-xs md:text-sm font-semibold leading-4 md:leading-5 max-w-[200px] md:max-w-[300px] z-10">
          We wish to provide professional dental services
          <br />
          that match the current technologies
        </p>

        {/* 左下文字块 */}
        <div className="absolute bottom-5 left-3 md:bottom-8 md:left-4 z-10">
          <span className="block text-black text-xs md:text-sm font-semibold mb-1 md:mb-2">
            Trusted Dentist in West New York
          </span>
          <h1 className="text-black text-[clamp(3rem,11vw,11rem)] font-bold leading-[0.79] tracking-tight">
            Dental
            <br />
            Care
          </h1>
        </div>

        {/* 右下文字 */}
        <span className="absolute bottom-6 right-4 md:bottom-10 md:right-8 text-white text-xs md:text-sm font-semibold z-10">
          Free Consultation
        </span>
      </MaskedCard>
    </section>
  )
}

/* ============================================================
 *  Section 2 — SMILE GALLERY(共享 SECTION2_IMAGE)
 * ============================================================ */
function Section2() {
  const isMobile = useIsMobile()
  const sectionRef = useRef<HTMLElement | null>(null)
  const cardsRef = useRef<(HTMLElement | null)[]>([])
  const positions = useMaskPositions(sectionRef, cardsRef)
  const imageWidth = useImageWidth(SECTION2_IMAGE, sectionRef)
  const reveal = useStaggeredReveal()
  const focalX = isMobile ? 0.65 : 0.8

  return (
    <section
      ref={(el) => {
        sectionRef.current = el
        reveal.containerRef.current = el
      }}
      className="min-h-screen md:h-screen w-full overflow-hidden flex flex-col pt-1.5 md:pt-2 px-3 md:px-5 pb-1.5 md:pb-2 gap-1.5 md:gap-2 bg-white"
    >
      <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto_auto_auto] md:grid-rows-[1fr_1fr_0.8fr] gap-1.5 md:gap-2">
        {/* Card 0 — Smile Gallery 标题卡 */}
        <MaskedCard
          bgImage={SECTION2_IMAGE}
          position={positions[0]}
          imageWidth={imageWidth}
          focalX={focalX}
          cardRef={(el) => {
            cardsRef.current[0] = el
          }}
          className="rounded-xl md:rounded-2xl overflow-hidden relative min-h-[160px] md:min-h-0"
          style={reveal.getAnimStyle(0)}
        >
          <h2 className="absolute top-4 left-5 md:top-6 md:left-7 text-white md:text-black text-2xl md:text-3xl font-bold z-10">
            Smile Gallery
          </h2>
          <span className="absolute bottom-4 left-5 md:bottom-6 md:left-7 text-white md:text-black text-xs md:text-sm font-semibold z-10">
            Our cosmetic dental work
          </span>
        </MaskedCard>

        {/* Card 1 — 跨 2 行,Call Us */}
        <MaskedCard
          bgImage={SECTION2_IMAGE}
          position={positions[1]}
          imageWidth={imageWidth}
          focalX={focalX}
          cardRef={(el) => {
            cardsRef.current[1] = el
          }}
          className="md:row-span-2 rounded-xl md:rounded-2xl overflow-hidden relative min-h-[200px] md:min-h-0"
          style={reveal.getAnimStyle(1)}
        >
          <p className="absolute bottom-16 left-5 md:bottom-20 md:left-7 text-white text-xs md:text-sm font-semibold leading-4 md:leading-5 z-10">
            If you want a gorgeous smile,
            <br />
            call us to ask about a smile makeover.
          </p>
          <button
            type="button"
            className="absolute bottom-4 right-4 md:bottom-6 md:right-6 px-5 py-3 md:px-8 md:py-5 bg-white rounded-full text-black text-base md:text-xl font-bold z-10 hover:scale-105 transition-transform"
          >
            Call Us
          </button>
        </MaskedCard>

        {/* Card 2 — Smile makeover 标题 */}
        <MaskedCard
          bgImage={SECTION2_IMAGE}
          position={positions[2]}
          imageWidth={imageWidth}
          focalX={focalX}
          cardRef={(el) => {
            cardsRef.current[2] = el
          }}
          className="rounded-xl md:rounded-2xl overflow-hidden relative min-h-[160px] md:min-h-0"
          style={reveal.getAnimStyle(2)}
        >
          <h2 className="absolute top-4 left-5 md:top-6 md:left-7 text-white md:text-black text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.9] z-10">
            Smile
            <br />
            makeover
          </h2>
        </MaskedCard>

        {/* Card 3 — 服务卡片 */}
        <MaskedCard
          bgImage={SECTION2_IMAGE}
          position={positions[3]}
          imageWidth={imageWidth}
          focalX={focalX}
          cardRef={(el) => {
            cardsRef.current[3] = el
          }}
          className="col-span-1 md:col-span-2 rounded-xl md:rounded-2xl overflow-hidden relative min-h-[200px] md:min-h-0"
          style={reveal.getAnimStyle(3)}
        >
          <div className="absolute inset-0 z-10 flex flex-wrap md:flex-nowrap gap-1.5 md:gap-2 p-2 md:p-3">
            {services.map((svc) => (
              <div
                key={svc.name}
                className={`flex-1 min-w-[calc(50%-4px)] md:min-w-0 rounded-xl md:rounded-2xl p-3 md:p-5 flex flex-col justify-between ${
                  svc.active
                    ? 'bg-white/90 backdrop-blur-md'
                    : 'bg-white/20 backdrop-blur-xl'
                }`}
              >
                <h3
                  className={`text-xl md:text-4xl font-bold leading-[1.05] whitespace-pre-line ${
                    svc.active ? 'text-black' : 'text-white'
                  }`}
                >
                  {svc.name}
                </h3>
                {svc.num ? (
                  <span
                    className={`self-end w-8 h-8 md:w-12 md:h-12 rounded-full border flex items-center justify-center text-xs md:text-sm font-semibold ${
                      svc.active
                        ? 'border-black text-black'
                        : 'border-white text-white'
                    }`}
                  >
                    {svc.num}
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </MaskedCard>
      </div>
    </section>
  )
}

/* ============================================================
 *  Section 3 — IMPLANT DENTISTRY(纯 img + 纯色背景)
 * ============================================================ */
function Section3() {
  const reveal = useStaggeredReveal()
  return (
    <section
      ref={reveal.containerRef}
      className="min-h-screen md:h-screen w-full overflow-hidden flex flex-col pt-1.5 md:pt-2 px-3 md:px-5 pb-1.5 md:pb-2 gap-1.5 md:gap-2 bg-white"
    >
      <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2">
        {/* 左列 */}
        <div className="flex flex-col gap-1.5 md:gap-2">
          {/* 1. 标题卡 */}
          <div
            className="rounded-xl md:rounded-2xl bg-stone-50 p-5 md:p-7 flex flex-col justify-between flex-[1.2] min-h-[180px] md:min-h-0"
            style={reveal.getAnimStyle(0)}
          >
            <h2 className="text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[0.95] text-black">
              Implant
              <br />
              Dentistry
            </h2>
            <p className="text-xs md:text-sm font-semibold text-black">
              Restore Missing Teeth
            </p>
          </div>

          {/* 2. 两张图片并排 */}
          <div
            className="flex gap-1.5 md:gap-2 flex-1 min-h-[140px] md:min-h-0"
            style={reveal.getAnimStyle(1)}
          >
            <div className="flex-1 rounded-xl md:rounded-2xl overflow-hidden">
              <img
                src={SECTION3_IMG1}
                alt="Dental implant procedure"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 rounded-xl md:rounded-2xl overflow-hidden">
              <img
                src={SECTION3_IMG2}
                alt="Dental restoration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 3. Consultation 卡 */}
          <div
            className="rounded-xl md:rounded-2xl bg-zinc-200 p-5 md:p-7 flex items-end justify-between flex-[0.8] min-h-[160px] md:min-h-0"
            style={reveal.getAnimStyle(2)}
          >
            <div>
              <p className="text-xs md:text-sm font-semibold text-black mb-2 md:mb-3">
                Consultation
              </p>
              <h3 className="text-xl md:text-3xl font-bold text-black leading-6 md:leading-8">
                Dental
                <br />
                Restoration
                <br />
                Services
              </h3>
            </div>
            <button
              type="button"
              className="px-5 py-3 md:px-8 md:py-5 bg-white rounded-full text-black text-base md:text-xl font-bold hover:scale-105 transition-transform"
            >
              Book Online
            </button>
          </div>
        </div>

        {/* 右列 — 单张高图 */}
        <div
          className="rounded-xl md:rounded-2xl overflow-hidden relative min-h-[350px] md:min-h-0"
          style={reveal.getAnimStyle(3)}
        >
          <img
            src={SECTION3_BG}
            alt="Smiling patient"
            className="w-full h-full object-cover"
          />
          {/* 底部 overlay 容器 */}
          <div className="absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-5 flex gap-1.5 md:gap-2">
            {/* 卡 1 — 白色 */}
            <div className="flex-1 bg-white rounded-xl md:rounded-2xl p-3 md:p-5 flex flex-col justify-between h-36 md:h-52">
              <h4 className="text-lg md:text-2xl font-bold text-black leading-5 md:leading-7">
                The Process
                <br />
                of Installing
                <br />
                Implants
              </h4>
              <span className="self-end w-9 h-9 md:w-12 md:h-12 rounded-full border border-black flex items-center justify-center">
                <ArrowRight size={14} className="rotate-[-45deg]" />
              </span>
            </div>

            {/* 卡 2 — 玻璃 */}
            <div className="flex-1 bg-white/20 backdrop-blur-xl rounded-xl md:rounded-2xl p-3 md:p-5 flex flex-col justify-between h-36 md:h-52">
              <h4 className="text-lg md:text-2xl font-bold text-white leading-5 md:leading-7">
                Caring
                <br />
                for Dental
                <br />
                Implants
              </h4>
              <span className="self-end w-9 h-9 md:w-12 md:h-12 rounded-full border border-white flex items-center justify-center text-white">
                <ArrowRight size={14} className="rotate-[-45deg]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
 *  主入口 — DentalHealthHero
 * ============================================================ */
export default function DentalHealthHero() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <div data-theme="dental" className="bg-white">
      {showSplash ? <SplashScreen onComplete={() => setShowSplash(false)} /> : null}
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  )
}
