import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

/**
 * Button — 白色胶囊按钮
 *
 * bg-white text-black px-8 py-3.5 rounded-full font-medium text-sm tracking-wide
 * hover:bg-white/90 transition-all duration-300 button-glow
 */
export default function Button({ children, className = '', ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      className={`bg-white text-black px-8 py-3.5 rounded-full font-medium text-sm tracking-wide hover:bg-white/90 transition-all duration-300 button-glow font-inter ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
