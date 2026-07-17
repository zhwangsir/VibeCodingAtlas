import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import { useHlsVideo } from '../hooks/useHlsVideo'

const HLS_SRC = '/videos/smith-hls.mp4'
const MARQUEE_TEXT = 'BUILDING THE FUTURE • '
const MARQUEE_REPEAT = 10
const SOCIAL_LINKS = ['Twitter', 'LinkedIn', 'Dribbble', 'GitHub'] as const

/**
 * Contact / Footer — 翻转视频背景 + GSAP 跑马灯 + CTA + footer
 * - 背景视频：与 hero 同源，scale-y-[-1] 翻转 + bg-black/60 暗化
 * - 跑马灯：MARQUEE_TEXT × 10，GSAP xPercent -50 duration 40 repeat -1
 * - CTA：mailto 按钮（accent gradient hover ring）
 * - Footer bar：社交链接 + 绿色脉动圆点 + "Available for projects"
 */
export default function Contact() {
  const videoRef = useHlsVideo(HLS_SRC)
  const marqueeRef = useRef<HTMLDivElement>(null)

  // GSAP 跑马灯
  useEffect(() => {
    if (!marqueeRef.current) return
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: 'none',
        repeat: -1,
      })
    }, marqueeRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden">
      {/* 背景视频 — 翻转 + 重暗化 */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
        style={{ transform: 'translate(-50%, -50%) scaleY(-1)' }}
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* 内容 */}
      <div className="relative z-10">
        {/* 跑马灯 */}
        <div className="overflow-hidden whitespace-nowrap py-8 md:py-12">
          <div ref={marqueeRef} className="inline-flex">
            {Array.from({ length: MARQUEE_REPEAT }).map((_, i) => (
              <span
                key={i}
                className="font-display italic text-text-primary/80 text-5xl md:text-7xl lg:text-8xl mx-4"
              >
                {MARQUEE_TEXT}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-20 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal text-text-primary tracking-tight mb-4">
            Let&apos;s build something{' '}
            <span className="font-display italic">remarkable</span>.
          </h2>
          <p className="text-sm md:text-base text-muted max-w-md mb-8">
            Open to collaborations, freelance projects, and creative conversations.
          </p>

          {/* mailto 按钮 — accent gradient hover ring */}
          <a
            href="mailto:hello@michaelsmith.com"
            className="group relative inline-flex rounded-full text-sm px-7 py-3.5 bg-text-primary text-bg hover:scale-105 transition-transform duration-300"
          >
            <span
              className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            />
            <span className="relative group-hover:bg-surface group-hover:text-text-primary rounded-full px-7 py-3.5 transition-colors duration-300 -m-3.5">
              hello@michaelsmith.com
            </span>
          </a>
        </motion.div>

        {/* Footer bar */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-8 border-t border-stroke">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* 社交链接 */}
            <ul className="flex flex-wrap items-center gap-4 md:gap-6">
              {SOCIAL_LINKS.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-muted hover:text-text-primary transition-colors uppercase tracking-wider"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* 状态 — 绿色脉动圆点 */}
            <div className="flex items-center gap-2">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                <span className="relative inline-flex rounded-full w-2 h-2 bg-green-400" />
              </span>
              <span className="text-xs text-muted uppercase tracking-wider">
                Available for projects
              </span>
            </div>
          </div>

          {/* 版权 */}
          <div className="mt-8 text-xs text-muted text-center md:text-left">
            © {new Date().getFullYear()} Michael Smith. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  )
}
