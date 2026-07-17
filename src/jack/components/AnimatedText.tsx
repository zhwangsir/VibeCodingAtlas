import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

/**
 * AnimatedText — 逐字符滚动驱动透明度揭示
 * 每个字符根据其在文本中的位置，随滚动进度从 opacity 0.2 → 1
 */

/** 单个字符 — 独立组件以便合法调用 useTransform */
function Char({
  char,
  index,
  total,
  progress,
}: {
  char: string
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const start = index / total
  const end = start + 1 / total
  const opacity = useTransform(progress, [start, end], [0.2, 1])

  return (
    <span style={{ display: 'inline-block' }}>
      <motion.span style={{ opacity, display: 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  )
}

type AnimatedTextProps = {
  text: string
  className?: string
}

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const characters = text.split('')

  return (
    <p ref={ref} className={className} style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}>
      {characters.map((char, i) => (
        <Char
          key={i}
          char={char}
          index={i}
          total={characters.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  )
}
