import { useEffect, useRef } from 'react'

type FadingVideoProps = {
  src: string
  /** 顶部偏移（px），与 inset 配合定位 */
  top?: string
  /** inset CSS 值 */
  inset?: string
  className?: string
}

const FADE_MS = 500

/**
 * FadingVideo — rAF 驱动的淡入淡出循环视频
 *
 * - Fade in：视频开始时 opacity 0 → 1，500ms
 * - Fade out：视频结束前 0.5s opacity 1 → 0
 * - On ended：opacity 0 → 100ms 后 → currentTime = 0 → play() → 重新淡入
 * - loop 属性关闭，手动循环
 */
export default function FadingVideo({
  src,
  top,
  inset,
  className = '',
}: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef = useRef<number | null>(null)
  const fadingOutRef = useRef(false)

  /** 从当前 opacity 平滑过渡到目标值 */
  const fadeTo = (target: number, duration: number) => {
    const video = videoRef.current
    if (!video) return
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)

    const startOpacity = parseFloat(video.style.opacity || '0')
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const current = startOpacity + (target - startOpacity) * progress
      video.style.opacity = String(current)
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
      if (!fadingOutRef.current && video.duration > 0) {
        const remaining = video.duration - video.currentTime
        if (remaining <= 0.5 && remaining > 0) {
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
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      video.removeEventListener('loadeddata', onLoadedData)
      video.removeEventListener('timeupdate', onTimeUpdate)
      video.removeEventListener('ended', onEnded)
    }
  }, [])

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      playsInline
      className={`absolute object-cover ${className}`}
      style={{ inset, top, width: '100%', height: '100%' }}
      aria-hidden="true"
    />
  )
}
