import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

/**
 * AnimatedLetter — 逐字符滚动驱动透明度揭示
 * 每个字符根据其在文本中的位置，随滚动进度从 opacity 0.2 → 1
 * charProgress = index / totalChars
 * range = [charProgress - 0.1, charProgress + 0.05]
 */

/** 单个字符 — 独立组件以便合法调用 useTransform */
function Letter({
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
  const charProgress = index / total
  const start = Math.max(0, charProgress - 0.1)
  const end = Math.min(1, charProgress + 0.05)
  const opacity = useTransform(progress, [start, end], [0.2, 1])

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  )
}

type AnimatedLetterProps = {
  text: string
  className?: string
}

export default function AnimatedLetter({ text, className }: AnimatedLetterProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = text.split('')

  return (
    <p ref={ref} className={className}>
      {chars.map((char, i) => (
        <Letter
          key={i}
          char={char}
          index={i}
          total={chars.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  )
}
