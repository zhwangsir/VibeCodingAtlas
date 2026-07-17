import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * WordsPullUp — 按空格拆分文本，每个单词作为 motion.span
 * 从 y:20 滑入 y:0，staggered delay 0.08s，useInView once 触发
 *
 * showAsterisk=true 时在最后一个单词后追加一个上标 *
 * 关键：星号挂在单词 span 外层（relative），不被 overflow-hidden 裁切
 */
type WordsPullUpProps = {
  text: string
  className?: string
  showAsterisk?: boolean
}

export default function WordsPullUp({ text, className, showAsterisk = false }: WordsPullUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '50px' })
  const words = text.split(' ')

  return (
    <span ref={ref} className={`relative inline-block ${className ?? ''}`}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1
        return (
          <span
            key={i}
            className="inline-block overflow-hidden align-bottom"
            style={{ paddingBottom: '0.1em' }}
          >
            <motion.span
              className="inline-block"
              initial={{ y: '110%' }}
              animate={inView ? { y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
              {showAsterisk && isLast && (
                <span
                  className="inline-block"
                  style={{
                    fontSize: '0.31em',
                    verticalAlign: 'top',
                    marginLeft: '0.05em',
                    lineHeight: 1,
                    transform: 'translateY(0.15em)',
                  }}
                >
                  *
                </span>
              )}
            </motion.span>
            {!isLast && <span>&nbsp;</span>}
          </span>
        )
      })}
    </span>
  )
}
