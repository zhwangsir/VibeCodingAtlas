import { type ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

type TextRollButtonProps = {
  /** 按钮文本（会被复制一份用于滚动动画） */
  children: ReactNode
  /** 按钮容器类名（颜色、圆角、padding 等） */
  className?: string
  /** 箭头圆圈类名（大小、背景色） */
  circleClassName?: string
  /** 箭头颜色类名 */
  arrowClassName?: string
  /** 文本字号类名（如 text-[13px]） */
  textClassName?: string
  /** 圆圈尺寸类名（如 w-6 h-6） */
  circleSize?: string
  /** 点击回调 */
  onClick?: () => void
}

/**
 * TextRollButton — 文本垂直滚动 + 箭头旋转 hover 动画按钮
 *
 * - 文本被复制一份，外层 flex-col overflow-hidden h-[20px]
 * - group-hover 时整体 translateY(-50%)，duration-500 ease cubic-bezier(0.25,0.1,0.25,1)
 * - 箭头圆圈 group-hover 时 rotate -45deg
 *
 * 使用：通过 className 控制按钮整体外观（颜色/padding），
 * circleClassName 控制圆圈背景，arrowClassName 控制箭头颜色
 */
export default function TextRollButton({
  children,
  className = '',
  circleClassName = '',
  arrowClassName = '',
  textClassName = '',
  circleSize = 'w-6 h-6',
  onClick,
}: TextRollButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group inline-flex items-center gap-2 rounded-full pl-5 pr-2 py-2 transition-colors duration-300 ${className}`}
    >
      {/* 文本滚动容器 */}
      <span
        className={`relative flex flex-col overflow-hidden h-[20px] ${textClassName}`}
      >
        <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
          <span className="h-[20px] flex items-center leading-none">{children}</span>
          <span className="h-[20px] flex items-center leading-none">{children}</span>
        </span>
      </span>
      {/* 箭头圆圈 */}
      <span
        className={`${circleSize} ${circleClassName} rounded-full flex items-center justify-center shrink-0`}
      >
        <ArrowRight
          size={14}
          className={`transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45 ${arrowClassName}`}
        />
      </span>
    </button>
  )
}
