import { useEffect, useRef, useState, type ReactNode } from 'react'

/**
 * Magnet — 鼠标跟随磁性悬浮效果
 * 当光标进入元素边缘 padding 范围内时，元素向光标方向位移（除以 strength 系数）。
 * 进入过渡 0.3s ease-out，离开过渡 0.6s ease-in-out。
 *
 * 实现要点：
 * - window 级 mousemove 监听：元素自身只能接收盒内事件，padding 激活区在盒外，
 *   旧实现 padding 参数实际失效；window 监听使 padding 范围真正生效。
 * - 位移补偿：getBoundingClientRect() 包含当前 transform，直接用会形成
 *   "元素移向光标 → 中心偏移 → 位移继续增大" 的正反馈振荡；减去当前位移量
 *   得到静止基准位置，保证悬浮稳定。
 */
type MagnetProps = {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
  style?: React.CSSProperties
}

export default function Magnet({
  children,
  padding = 80,
  strength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
  style,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const offsetRef = useRef({ x: 0, y: 0 })
  const activeRef = useRef(false)
  const [transform, setTransform] = useState('')
  const [transition, setTransition] = useState(inactiveTransition)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    /* 触屏设备无持续光标，跳过磁性效果 */
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      /* 静止基准中心 = 当前布局位置 - 已施加的位移 */
      const centerX = rect.left - offsetRef.current.x + rect.width / 2
      const centerY = rect.top - offsetRef.current.y + rect.height / 2
      const dx = e.clientX - centerX
      const dy = e.clientY - centerY
      const distance = Math.sqrt(dx * dx + dy * dy)
      const maxDist = rect.width / 2 + padding

      if (distance < maxDist) {
        const tx = dx / strength
        const ty = dy / strength
        offsetRef.current = { x: tx, y: ty }
        activeRef.current = true
        setTransform(`translate3d(${tx}px, ${ty}px, 0)`)
        setTransition(activeTransition)
      } else if (activeRef.current) {
        offsetRef.current = { x: 0, y: 0 }
        activeRef.current = false
        setTransform('translate3d(0, 0, 0)')
        setTransition(inactiveTransition)
      }
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [padding, strength, activeTransition, inactiveTransition])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform,
        transition,
        willChange: 'transform',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
