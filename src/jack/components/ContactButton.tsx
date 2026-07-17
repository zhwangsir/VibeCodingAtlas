/**
 * ContactButton — 渐变背景胶囊按钮
 * 紫橙渐变 + 内阴影 + 白色描边偏移
 */
type ContactButtonProps = {
  className?: string
}

export default function ContactButton({ className = '' }: ContactButtonProps) {
  return (
    <button
      type="button"
      className={`relative rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white transition-transform hover:scale-[1.03] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow:
          '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1, 0 0 0 2px white, 0 0 0 5px transparent',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      Contact Me
    </button>
  )
}
