import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * WordsPullUpMultiStyle — 多样式段落的逐词 pull-up 动画
 * 接收 {text, className} 段数组，保留每段 className，
 * 拆成单词后统一 staggered 动画（delay 0.08s）
 *
 * 关键修复：
 * - 外层用 block + text-center 居中（不是 inline-flex）
 * - 每个单词外层用 overflow-hidden + vertical-align baseline
 * - 词间距用 margin-right 而非 &nbsp; 避免裁切
 */
type Segment = {
  text: string
  className?: string
}

type WordsPullUpMultiStyleProps = {
  segments: Segment[]
  className?: string
}

export default function WordsPullUpMultiStyle({
  segments,
  className,
}: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '50px' })

  // 展平所有单词，保留所属段 className
  const allWords: { word: string; className?: string }[] = []
  segments.forEach((seg) => {
    seg.text.split(' ').forEach((word) => {
      allWords.push({ word, className: seg.className })
    })
  })

  return (
    <div ref={ref} className={`block text-center ${className ?? ''}`}>
      {allWords.map((item, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          style={{ paddingBottom: '0.15em', marginRight: '0.25em' }}
        >
          <motion.span
            className={`inline-block ${item.className ?? ''}`}
            initial={{ y: '110%' }}
            animate={inView ? { y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {item.word}
          </motion.span>
        </span>
      ))}
    </div>
  )
}
