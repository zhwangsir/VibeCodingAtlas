import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type BlurTextProps = {
  text: string
  className?: string
}

/**
 * BlurText — 逐词模糊入场
 * - IntersectionObserver 在 10% 可见时触发
 * - 按空格拆分，每个词为 motion.span
 * - 3 步关键帧：blur(10px)/opacity 0/y 50 → blur(5px)/opacity 0.5/y -5 → blur(0)/opacity 1/y 0
 * - duration 0.7s（0.35 × 2），times [0, 0.5, 1]，ease easeOut
 * - stagger: delay = i * 100 / 1000 秒
 * - 每词 display: inline-block + marginRight 0.28em（letter-spacing -4px 会吃 nbsp）
 * - 父 p: display flex / flexWrap wrap / justifyContent center / rowGap 0.1em
 */
export default function BlurText({ text, className }: BlurTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const [inView, setInView] = useState(false)
  const words = text.split(' ')

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <p
      ref={ref}
      className={className}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        rowGap: '0.1em',
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
          initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
          animate={
            inView
              ? {
                  filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
                  opacity: [0, 0.5, 1],
                  y: [50, -5, 0],
                }
              : {}
          }
          transition={{
            duration: 0.7,
            times: [0, 0.5, 1],
            ease: 'easeOut',
            delay: (i * 100) / 1000,
          }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  )
}
