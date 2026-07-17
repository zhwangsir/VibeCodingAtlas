import { useRef, useEffect } from 'react'

const FADE_MS = 500
const FADE_OUT_LEAD = 0.55 // 视频结束前 0.55s 开始淡出

type FadingVideoProps = {
  src: string
  className?: string
  style?: React.CSSProperties
}

/**
 * FadingVideo — 自定义 rAF 交叉淡入淡出（无 CSS transitions）
 *
 * 行为：
 * - loadeddata：opacity 0 → play() → fadeTo(1)
 * - timeupdate：若 fadingOut 未触发且剩余时间 ≤ 0.55s 且 > 0，置 fadingOut=true → fadeTo(0)
 * - ended：opacity 0 → setTimeout(100ms) → currentTime=0 + play() + 清除 fadingOut + fadeTo(1)
 * - loop 属性关闭，手动循环
 *
 * fadeTo(target, duration)：
 * - 读取当前 video.style.opacity 作为起点（每次从上次停留处继续）
 * - rAF 驱动线性插值
 * - 调用前 cancel 上一个 rAF
 *
 * 卸载：cancel rAF + 移除监听
 */
export default function FadingVideo({ src, className, style }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef = useRef<number | null>(null)
  const fadingOutRef = useRef<boolean>(false)

  /** fadeTo — rAF 线性插值，从当前 opacity 到 target */
  const fadeTo = (target: number, duration: number) => {
    const video = videoRef.current
    if (!video) return

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current)
    }

    const startOpacity = parseFloat(video.style.opacity || '0')
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const next = startOpacity + (target - startOpacity) * progress
      video.style.opacity = String(next)

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        rafRef.current = null
      }
    }
    rafRef.current = requestAnimationFrame(tick)
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onLoadedData = () => {
      video.style.opacity = '0'
      video.play().catch(() => {})
      fadeTo(1, FADE_MS)
    }

    const onTimeUpdate = () => {
      if (!fadingOutRef.current && video.duration) {
        const remaining = video.duration - video.currentTime
        if (remaining <= FADE_OUT_LEAD && remaining > 0) {
          fadingOutRef.current = true
          fadeTo(0, FADE_MS)
        }
      }
    }

    const onEnded = () => {
      video.style.opacity = '0'
      setTimeout(() => {
        video.currentTime = 0
        video.play().catch(() => {})
        fadingOutRef.current = false
        fadeTo(1, FADE_MS)
      }, 100)
    }

    video.addEventListener('loadeddata', onLoadedData)
    video.addEventListener('timeupdate', onTimeUpdate)
    video.addEventListener('ended', onEnded)

    return () => {
      video.removeEventListener('loadeddata', onLoadedData)
      video.removeEventListener('timeupdate', onTimeUpdate)
      video.removeEventListener('ended', onEnded)
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      playsInline
      preload="auto"
      className={className}
      style={{ opacity: 0, ...style }}
      aria-hidden="true"
    />
  )
}
