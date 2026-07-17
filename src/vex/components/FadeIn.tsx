import { useState, useEffect, type ReactNode } from 'react'

type FadeInProps = {
  children: ReactNode
  /** 延迟（ms） */
  delay?: number
  /** 过渡时长（ms） */
  duration?: number
  className?: string
}

/**
 * FadeIn — setTimeout + state 驱动的透明度入场
 *
 * - 初始 opacity: 0
 * - delay 后切换 state，触发 transition-opacity
 * - 使用 inline transitionDuration + Tailwind transition-opacity
 */
export default function FadeIn({
  children,
  delay = 0,
  duration = 1000,
  className = '',
}: FadeInProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`transition-opacity ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'ease',
      }}
    >
      {children}
    </div>
  )
}
