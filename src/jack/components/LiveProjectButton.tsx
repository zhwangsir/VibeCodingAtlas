/**
 * LiveProjectButton — 幽灵描边胶囊按钮
 * 用于项目卡片，hover 时轻微背景填充
 */
type LiveProjectButtonProps = {
  className?: string
}

export default function LiveProjectButton({ className = '' }: LiveProjectButtonProps) {
  return (
    <button
      type="button"
      className={`rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA]/60 ${className}`}
    >
      Live Project
    </button>
  )
}
