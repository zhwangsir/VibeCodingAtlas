import { useState, useEffect, type CSSProperties } from 'react'

type AnimatedHeadingProps = {
  /** 文本（支持 \n 换行） */
  text: string
  /** 初始延迟（ms） */
  initialDelay?: number
  /** 每字符延迟（ms） */
  charDelay?: number
  /** 单字符过渡时长（ms） */
  charDuration?: number
  className?: string
  /** 应用到 <h1> 的内联样式（如 letterSpacing） */
  style?: CSSProperties
}

/**
 * AnimatedHeading — 逐字 staggered 入场
 *
 * - 文本按 \n 拆分为多行
 * - 每行再拆分为单字符
 * - 每字符初始 opacity: 0 + translateX(-18px)
 * - 经过 (lineIndex * lineLength * charDelay) + (charIndex * charDelay) + initialDelay 后
 *   切换至 opacity: 1 + translateX(0)
 * - 单字符过渡时长 charDuration (500ms)
 * - 空格渲染为 \u00A0（不间断空格）
 */
export default function AnimatedHeading({
  text,
  initialDelay = 200,
  charDelay = 30,
  charDuration = 500,
  className = '',
  style,
}: AnimatedHeadingProps) {
  const lines = text.split('\n')
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []
    let charIdx = 0
    lines.forEach((line, lineIdx) => {
      for (let i = 0; i < line.length; i++) {
        const delay = initialDelay + (lineIdx * line.length * charDelay + i * charDelay)
        const idx = charIdx
        timers.push(
          setTimeout(() => setVisibleCount((c) => Math.max(c, idx + 1)), delay),
        )
        charIdx += 1
      }
    })
    return () => timers.forEach(clearTimeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, initialDelay, charDelay])

  let globalCharIdx = 0

  return (
    <h1 className={className} style={style}>
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} className="block" style={{ whiteSpace: 'nowrap' }}>
          {line.split('').map((ch, i) => {
            const idx = globalCharIdx++
            const visible = idx < visibleCount
            return (
              <span
                key={`${lineIdx}-${i}`}
                className="inline-block"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(-18px)',
                  transition: `opacity ${charDuration}ms ease, transform ${charDuration}ms ease`,
                }}
              >
                {ch === ' ' ? '\u00A0' : ch}
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}
