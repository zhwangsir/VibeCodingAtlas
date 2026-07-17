import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useHlsVideo } from '../hooks/useHlsVideo'

const HLS_SRC = '/videos/smith-hls.mp4'
const ROLES = ['Creative', 'Fullstack', 'Founder', 'Scholar']

/**
 * HeroSection — 全屏 hero
 * - 背景 HLS 视频 + 暗色叠加 + 底部 fade
 * - 内容：eyebrow / 姓名（GSAP name-reveal）/ role 循环 / 描述 / CTA / scroll indicator
 * - GSAP 入场时间线（power3.out）
 * - role 每 2s 切换，触发 animate-role-fade-in（key 重新挂载）
 */
export default function HeroSection() {
  const videoRef = useHlsVideo(HLS_SRC)
  const rootRef = useRef<HTMLDivElement>(null)
  const [roleIndex, setRoleIndex] = useState(0)

  // role 循环
  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length)
    }, 2000)
    return () => clearInterval(id)
  }, [])

  // GSAP 入场时间线
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ ease: 'power3.out' })
      tl.fromTo(
        '.name-reveal',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      ).fromTo(
        '.blur-in',
        { opacity: 0, filter: 'blur(10px)', y: 20 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 1,
          stagger: 0.1,
          delay: 0.3,
        },
        '-=1'
      )
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative h-screen w-full overflow-hidden bg-bg"
    >
      {/* 背景 HLS 视频 */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
      />

      {/* 暗色叠加 */}
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

      {/* 底部 fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Hero 内容 — 居中 */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Eyebrow */}
        <p className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8">
          COLLECTION &apos;26
        </p>

        {/* 姓名 */}
        <h1 className="name-reveal font-display italic text-text-primary text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-6">
          Michael Smith
        </h1>

        {/* Role 行 */}
        <p className="blur-in text-base md:text-lg text-muted mb-6">
          A{' '}
          <span
            key={roleIndex}
            className="font-display italic text-text-primary animate-role-fade-in inline-block"
          >
            {ROLES[roleIndex]}
          </span>{' '}
          lives in Chicago.
        </p>

        {/* 描述 */}
        <p className="blur-in text-sm md:text-base text-muted max-w-md mb-12">
          Designing seamless digital interactions by focusing on the unique nuances which bring
          systems to life.
        </p>

        {/* CTA 按钮 */}
        <div className="blur-in inline-flex flex-wrap items-center justify-center gap-4">
          {/* See Works — solid */}
          <a
            href="#work"
            className="group relative inline-flex rounded-full text-sm px-7 py-3.5 bg-text-primary text-bg hover:scale-105 transition-transform duration-300"
          >
            {/* hover 时显示 accent gradient border ring */}
            <span
              className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            />
            <span className="relative group-hover:bg-surface group-hover:text-text-primary rounded-full px-7 py-3.5 transition-colors duration-300 -m-3.5">
              See Works
            </span>
          </a>

          {/* Reach out — outlined */}
          <a
            href="#contact"
            className="group relative inline-flex rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-bg text-text-primary hover:scale-105 hover:border-transparent transition-all duration-300"
          >
            {/* hover 时显示 accent gradient border ring */}
            <span
              className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            />
            <span className="relative">Reach out...</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">SCROLL</span>
        <span className="relative w-px h-10 bg-stroke overflow-hidden">
          <span className="absolute top-0 left-0 w-full h-1/3 accent-gradient animate-scroll-down" />
        </span>
      </div>
    </section>
  )
}
