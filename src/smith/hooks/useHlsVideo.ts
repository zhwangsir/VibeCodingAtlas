import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

/**
 * useHlsVideo — 加载视频到 <video> 元素
 * - 若 src 为 .m3u8 且 Hls.isSupported()：创建 Hls 实例并 attach
 * - 若 src 为 .m3u8 且浏览器原生支持 HLS（Safari）：直接 set src
 * - 若 src 为普通格式（如 .mp4）：直接 set video.src，不走 HLS.js
 * - 卸载时销毁 Hls 实例
 */
export function useHlsVideo(src: string) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let hls: Hls | null = null
    const isHlsStream = src.endsWith('.m3u8')

    if (isHlsStream && Hls.isSupported()) {
      hls = new Hls({ enableWorker: true, lowLatencyMode: false })
      hls.loadSource(src)
      hls.attachMedia(video)
    } else if (isHlsStream && video.canPlayType('application/vnd.apple.mpegurl')) {
      // Safari 原生 HLS
      video.src = src
    } else {
      // 普通视频格式（mp4 等）直接设置 src
      video.src = src
    }

    return () => {
      if (hls) {
        hls.destroy()
      }
    }
  }, [src])

  return videoRef
}
