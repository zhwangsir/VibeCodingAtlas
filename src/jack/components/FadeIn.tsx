import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * FadeIn — Framer Motion 进入视口动画包装器
 * 使用 whileInView + viewport once 触发，支持 delay/duration/x/y
 * 通过 motion.create() 支持动态 HTML 元素类型
 */
type FadeInProps = {
  children: ReactNode
  delay?: number
  duration?: number
  x?: number
  y?: number
  className?: string
  as?: keyof JSX.IntrinsicElements
  style?: React.CSSProperties
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  as = 'div',
  style,
}: FadeInProps) {
  // 通过索引获取对应 HTML 标签的 motion 组件
  const MotionTag = (motion as unknown as Record<string, typeof motion.div>)[as] || motion.div

  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <MotionTag
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '50px', amount: 0 }}
    >
      {children}
    </MotionTag>
  )
}
