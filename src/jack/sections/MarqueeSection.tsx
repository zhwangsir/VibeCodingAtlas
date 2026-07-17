import { useEffect, useRef } from 'react'

const IMAGES = [
  '/jack/hero-space-voyage-preview-eECLH3Yc.gif',
  '/jack/hero-codenest-preview-Cgppc2qV.gif',
  '/jack/hero-vex-ventures-preview-BczMFIiw.gif',
  '/jack/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  '/jack/hero-asme-preview-B_nGDnTP.gif',
  '/jack/hero-transform-data-preview-Cx5OU29N.gif',
  '/jack/hero-vitara-preview-Cjz2QYyU.gif',
  '/jack/hero-terra-preview-BFjrCr7T.gif',
  '/jack/hero-skyelite-preview-DHaZIgUv.gif',
  '/jack/hero-aethera-preview-DknSlcTa.gif',
  '/jack/hero-designpro-preview-D8c5_een.gif',
  '/jack/hero-stellar-ai-preview-D3HL6bw1.gif',
  '/jack/hero-xportfolio-preview-D4A8maiC.gif',
  '/jack/hero-orbit-web3-preview-BXt4OttD.gif',
  '/jack/hero-nexora-preview-cx5HmUgo.gif',
  '/jack/hero-evr-ventures-preview-DZxeVFEX.gif',
  '/jack/hero-planet-orbit-preview-DWAP8Z1P.gif',
  '/jack/hero-new-era-preview-CocuDUm9.gif',
  '/jack/hero-wealth-preview-B70idl_u.gif',
  '/jack/hero-luminex-preview-CxOP7ce6.gif',
  '/jack/hero-celestia-preview-0yO3jXO8.gif',
]

const ROW1 = IMAGES.slice(0, 11)
const ROW2 = IMAGES.slice(11)

/** 三倍化数组以实现无缝循环 */
const triple = (arr: string[]) => [...arr, ...arr, ...arr]

/** 单行跑马灯 — 用 ref 直接操作 transform，避免 React 重渲染 */
function MarqueeRow({
  images,
  rowRef,
}: {
  images: string[]
  rowRef: React.MutableRefObject<HTMLDivElement | null>
}) {
  return (
    <div
      ref={rowRef}
      className="flex gap-3 will-change-transform"
      style={{ transform: 'translateX(-200px)' }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="shrink-0 w-[420px] h-[270px] rounded-2xl overflow-hidden bg-[#1a1a1a]"
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
            draggable={false}
          />
        </div>
      ))}
    </div>
  )
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current
      if (!el) return
      const sectionTop = el.offsetTop
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      const translate = offset - 200

      // 直接操作 DOM transform，不触发 React 重渲染
      if (row1Ref.current) {
        row1Ref.current.style.transform = `translateX(${translate}px)`
      }
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translateX(${-translate}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // 初始计算
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        <MarqueeRow images={triple(ROW1)} rowRef={row1Ref} />
        <MarqueeRow images={triple(ROW2)} rowRef={row2Ref} />
      </div>
    </section>
  )
}
