import { useEffect, useRef } from 'react'

const SPOTLIGHT_R = 260

/** 固定径向渐变模板 — 与 PROMPT 6 段 stops 完全一致 */
const SPOTLIGHT_GRADIENT = `radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.4) 75%, rgba(255,255,255,0.12) 88%, rgba(255,255,255,0) 100%)`

/**
 * SpotlightReveal — 鼠标聚光蒙版揭示层
 *
 * 渐变模板 + mask-position 实现：每帧仅更新 mask-position（合成层属性，
 * GPU 处理），消除旧实现每帧 canvas.toDataURL() 全屏 PNG 编码开销。
 * lerp 0.1 平滑跟随，初始位于屏外。
 */
export default function SpotlightReveal({
  imageUrl,
}: {
  imageUrl: string
}) {
  const imgLayerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const imgLayer = imgLayerRef.current
    if (!imgLayer) return

    const size = SPOTLIGHT_R * 2
    imgLayer.style.webkitMaskImage = SPOTLIGHT_GRADIENT
    imgLayer.style.maskImage = SPOTLIGHT_GRADIENT
    imgLayer.style.webkitMaskSize = `${size}px ${size}px`
    imgLayer.style.maskSize = `${size}px ${size}px`
    imgLayer.style.webkitMaskRepeat = 'no-repeat'
    imgLayer.style.maskRepeat = 'no-repeat'

    const mouse = { x: -999, y: -999 }
    const smooth = { x: -999, y: -999 }

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    window.addEventListener('mousemove', onMouseMove)

    let rafId: number
    const loop = () => {
      smooth.x += (mouse.x - smooth.x) * 0.1
      smooth.y += (mouse.y - smooth.y) * 0.1
      const pos = `${smooth.x - SPOTLIGHT_R}px ${smooth.y - SPOTLIGHT_R}px`
      imgLayer.style.webkitMaskPosition = pos
      imgLayer.style.maskPosition = pos
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <div
      ref={imgLayerRef}
      aria-hidden="true"
      className="nora-hero-reveal-img"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  )
}
