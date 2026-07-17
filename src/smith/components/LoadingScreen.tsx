import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const ROTATING_WORDS = ['Design', 'Create', 'Inspire']
const DURATION = 2700 // 000 → 100 总耗时

/**
 * LoadingScreen — 全屏加载遮罩
 * - requestAnimationFrame 计数 000→100（2700ms）
 * - 顶部左 "Portfolio" 标签（y -20→0 + opacity 0→1）
 * - 中部旋转词 ["Design","Create","Inspire"] 每 900ms 切换（AnimatePresence mode="wait"）
 * - 右下计数器（tabular-nums + font-display）
 * - 底部进度条（accent-gradient + scaleX + box-shadow glow）
 * - 完成（100）后延迟 400ms 调用 onComplete
 */
export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void
}) {
  const [count, setCount] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)
  const completedRef = useRef(false)

  // rAF 计数
  useEffect(() => {
    const tick = (now: number) => {
      if (startRef.current === null) startRef.current = now
      const elapsed = now - startRef.current
      const progress = Math.min(elapsed / DURATION, 1)
      const next = Math.round(progress * 100)
      setCount(next)
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else if (!completedRef.current) {
        completedRef.current = true
        setTimeout(onComplete, 400)
      }
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [onComplete])

  // 旋转词
  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length)
    }, 900)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-bg flex flex-col"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* 顶部左 — Portfolio 标签 */}
      <motion.div
        className="absolute top-6 left-6 md:top-10 md:left-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <span className="text-xs text-muted uppercase tracking-[0.3em]">
          Portfolio
        </span>
      </motion.div>

      {/* 中部 — 旋转词 */}
      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.h2
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display italic text-text-primary/80 text-4xl md:text-6xl lg:text-7xl"
          >
            {ROTATING_WORDS[wordIndex]}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* 右下 — 计数器 */}
      <div className="absolute bottom-12 right-6 md:bottom-16 md:right-10">
        <span className="font-display text-text-primary tabular-nums text-6xl md:text-8xl lg:text-9xl">
          {String(count).padStart(3, '0')}
        </span>
      </div>

      {/* 底部进度条 */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/50">
        <div
          className="accent-gradient h-full origin-left"
          style={{
            transform: `scaleX(${count / 100})`,
            boxShadow: '0 0 8px rgba(137, 170, 204, 0.35)',
            transition: 'transform 0.1s linear',
          }}
        />
      </div>
    </motion.div>
  )
}
