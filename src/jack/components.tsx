import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react'

const EASE = [0.25, 0.1, 0.25, 1] as const

/* ============== FadeIn ============== */

const motionCache: Record<string, ComponentType<any>> = {}
function getMotion(as: ElementType) {
  const key = String(as)
  if (!motionCache[key]) {
    motionCache[key] = motion.create(as as keyof typeof motion) as unknown as ComponentType<any>
  }
  return motionCache[key]
}

type FadeInProps = {
  children?: ReactNode
  delay?: number
  duration?: number
  x?: number
  y?: number
  as?: ElementType
  className?: string
  style?: CSSProperties
  // allow passthrough props (e.g. src/alt for img)
  [key: string]: unknown
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className,
  style,
  ...rest
}: FadeInProps) {
  const M = getMotion(as)
  return (
    <M
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </M>
  )
}

/* ============== Magnet ============== */

type MagnetProps = {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
  style?: CSSProperties
}

export function Magnet({
  children,
  padding = 80,
  strength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
  style,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const activeRef = useRef(false)
  const [transform, setTransform] = useState('translate3d(0,0,0)')
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const withinX = Math.abs(e.clientX - cx) < rect.width / 2 + padding
      const withinY = Math.abs(e.clientY - cy) < rect.height / 2 + padding
      if (withinX && withinY) {
        const tx = (e.clientX - cx) / strength
        const ty = (e.clientY - cy) / strength
        setTransform(`translate3d(${tx}px, ${ty}px, 0)`)
        if (!activeRef.current) {
          activeRef.current = true
          setActive(true)
        }
      } else if (activeRef.current) {
        activeRef.current = false
        setActive(false)
        setTransform('translate3d(0,0,0)')
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [padding, strength])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform,
        willChange: 'transform',
        transition: active ? activeTransition : inactiveTransition,
      }}
    >
      {children}
    </div>
  )
}

/* ============== AnimatedText (char-by-char scroll reveal) ============== */

type AnimatedTextProps = {
  text: string
  className?: string
  style?: CSSProperties
}

export function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })
  const chars = text.split('')

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((c, i) => (
        <Char
          key={i}
          char={c}
          progress={scrollYProgress}
          start={i / chars.length}
          end={(i + 1) / chars.length}
        />
      ))}
    </p>
  )
}

function Char({
  char,
  progress,
  start,
  end,
}: {
  char: string
  progress: MotionValue<number>
  start: number
  end: number
}) {
  const opacity = useTransform(progress, [start, end], [0.2, 1])
  const display = char === ' ' ? '\u00A0' : char
  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ opacity: 0 }}>{display}</span>
      <motion.span style={{ opacity, position: 'absolute', inset: 0 }}>
        {display}
      </motion.span>
    </span>
  )
}

/* ============== ContactButton ============== */

export function ContactButton() {
  return (
    <button
      className="rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white"
      style={{
        background:
          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow:
          '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      Contact Me
    </button>
  )
}

/* ============== LiveProjectButton ============== */

export function LiveProjectButton() {
  return (
    <button className="rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors">
      Live Project
    </button>
  )
}
