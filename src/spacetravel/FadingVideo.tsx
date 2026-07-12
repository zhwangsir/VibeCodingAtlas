import { useEffect, useRef } from 'react'

const FADE_MS = 500
const FADE_OUT_LEAD = 0.55 // seconds before end to start fading out

type FadingVideoProps = {
  src: string
  className?: string
  style?: React.CSSProperties
}

/**
 * Custom JS crossfade video. No CSS transitions, no `loop` attribute —
 * looping is implemented manually via the `ended` event with rAF-driven opacity fades.
 */
export default function FadingVideo({ src, className, style }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const fadingOutRef = useRef(false)
  const endTimerRef = useRef<number | null>(null)

  const fadeTo = (target: number, duration: number) => {
    const video = videoRef.current
    if (!video) return
    if (rafRef.current) cancelAnimationFrame(rafRef.current)

    const startOpacity = parseFloat(video.style.opacity || '0')
    const startTime = performance.now()

    const step = (now: number) => {
      const elapsed = now - startTime
      const t = Math.min(1, elapsed / duration)
      // ease-out
      const eased = 1 - Math.pow(1 - t, 3)
      const next = startOpacity + (target - startOpacity) * eased
      video.style.opacity = String(next)
      if (t < 1) {
        rafRef.current = requestAnimationFrame(step)
      } else {
        rafRef.current = null
      }
    }
    rafRef.current = requestAnimationFrame(step)
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onLoaded = () => {
      video.style.opacity = '0'
      video.play().catch(() => {})
      fadeTo(1, FADE_MS)
    }
    const onTimeUpdate = () => {
      const remaining = (video.duration || 0) - video.currentTime
      if (!fadingOutRef.current && remaining <= FADE_OUT_LEAD && remaining > 0) {
        fadingOutRef.current = true
        fadeTo(0, FADE_MS)
      }
    }
    const onEnded = () => {
      video.style.opacity = '0'
      endTimerRef.current = window.setTimeout(() => {
        video.currentTime = 0
        video.play().catch(() => {})
        fadingOutRef.current = false
        fadeTo(1, FADE_MS)
      }, 100)
    }

    video.addEventListener('loadeddata', onLoaded)
    video.addEventListener('timeupdate', onTimeUpdate)
    video.addEventListener('ended', onEnded)

    return () => {
      video.removeEventListener('loadeddata', onLoaded)
      video.removeEventListener('timeupdate', onTimeUpdate)
      video.removeEventListener('ended', onEnded)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (endTimerRef.current) clearTimeout(endTimerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src])

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
    />
  )
}
