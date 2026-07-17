/* ============================================================
 *  Wanderful — Cinematic travel-brand hero
 *  字体:Barlow(正文)+ Inter(标题)+ Instrument Serif + Dirtyline(装饰)
 *  核心:全屏背景视频 + GSAP 鼠标视差 + 液态玻璃导航 + 标语淡入
 * ============================================================ */
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Lock } from 'lucide-react'

import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/barlow/300.css'
import '@fontsource/barlow/400.css'
import '@fontsource/barlow/500.css'
import '@fontsource/barlow/600.css'
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'

/* ===== 本地背景视频(原 CloudFront 已下载) ===== */
const VIDEO_URL = '/videos/60275ce7-030c-4668-a160-8f364ec537d3.mp4'

/* ============================================================
 *  Wanderful — 主入口
 * ============================================================ */
export default function Wanderful() {
  const videoWrapRef = useRef<HTMLDivElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  /* ===== GSAP 鼠标视差 + playbackRate ===== */
  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const onMeta = () => {
        video.playbackRate = 1.25
      }
      video.addEventListener('loadedmetadata', onMeta)
      return () => video.removeEventListener('loadedmetadata', onMeta)
    }
  }, [])

  useEffect(() => {
    const wrap = videoWrapRef.current
    if (!wrap) return

    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    let rafId = 0
    let active = true

    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      targetX = ((e.clientX - cx) / cx) * 20
      targetY = ((e.clientY - cy) / cy) * 20
    }

    const tick = () => {
      if (!active) return
      currentX += (targetX - currentX) * 0.06
      currentY += (targetY - currentY) * 0.06
      gsap.set(wrap, { x: currentX, y: currentY })
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(tick)

    return () => {
      active = false
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      data-theme="wanderful"
      className="min-h-screen bg-black text-white overflow-x-hidden relative"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        /* Dirtyline 自定义展示字体(本地化) */
        @font-face {
          font-family: 'Dirtyline';
          src: url('/fonts/wanderful/Dirtyline36DaysofType.woff') format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        /* 液态玻璃工具类 */
        [data-theme='wanderful'] .liquid-glass {
          background: rgba(255,255,255,0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: none;
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
          position: relative;
          overflow: hidden;
        }
        [data-theme='wanderful'] .liquid-glass::before {
          content: "";
          position: absolute; inset: 0;
          border-radius: inherit;
          padding: 1.4px;
          background: linear-gradient(180deg,
            rgba(255,255,255,0.45) 0%,
            rgba(255,255,255,0.15) 20%,
            rgba(255,255,255,0) 40%,
            rgba(255,255,255,0) 60%,
            rgba(255,255,255,0.15) 80%,
            rgba(255,255,255,0.45) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        /* 入场动画 */
        @keyframes wf-fade-up {
          0% { opacity: 0; transform: translateY(1.5rem); }
          100% { opacity: 1; transform: translateY(0); }
        }
        [data-theme='wanderful'] .wf-fade-in {
          opacity: 0;
          animation: wf-fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        [data-theme='wanderful'] .wf-delay-300 {
          animation-delay: 0.3s;
        }
        [data-theme='wanderful'] body { font-family: 'Barlow', sans-serif; }
      `}</style>

      {/* ===== 固定全屏背景视频 ===== */}
      <div
        ref={videoWrapRef}
        className="fixed inset-0 z-0 scale-[1.08] origin-center"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src={VIDEO_URL}
        />
      </div>

      {/* ===== 顶部导航 ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 px-10 py-8 flex justify-between items-center">
        {/* 左:wordmark */}
        <div className="text-[17px] font-semibold tracking-tight">
          Wanderful<sup className="text-[10px] ml-0.5 align-super">TM</sup>
        </div>

        {/* 中:液态玻璃胶囊导航 */}
        <nav className="liquid-glass rounded-full px-2 py-2 flex items-center gap-1">
          {['JOURNEY', 'BENEFITS', 'JOURNAL', 'GUIDEBOOK'].map((l) => (
            <a
              key={l}
              href="#"
              className="text-[11px] font-medium tracking-[0.12em] text-white/90 hover:text-white px-4 py-1.5 rounded-full transition-colors duration-200"
            >
              {l}
            </a>
          ))}
        </nav>

        {/* 右:CTA */}
        <a
          href="#"
          className="liquid-glass rounded-full px-5 py-2.5 text-[11px] font-medium tracking-[0.12em] text-white/90 hover:text-white"
        >
          GET ROAMING
        </a>
      </header>

      {/* ===== Hero 标题(固定,顶部 120px 居中) ===== */}
      <div
        className="fixed left-0 right-0 z-20 text-center pointer-events-none wf-fade-in"
        style={{ top: '120px' }}
      >
        <h1
          className="text-white"
          style={{
            fontSize: 'clamp(40px, 5.4vw, 72px)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            fontWeight: 400,
          }}
        >
          Venture without edges.
        </h1>
        <h2
          style={{
            fontSize: 'clamp(40px, 5.4vw, 72px)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.55)',
          }}
        >
          Uncover with keen instinct.
        </h2>
      </div>

      {/* ===== 底部块 ===== */}
      <div className="fixed bottom-14 left-0 right-0 z-20 flex flex-col items-center gap-6 wf-fade-in wf-delay-300 px-6">
        {/* 段落 */}
        <p className="max-w-[620px] text-[15px] leading-relaxed text-center">
          <span className="text-white">
            Our smart itineraries shape around you — your rhythm, your vibe,
            your hunger for adventure.
          </span>
          <span className="text-white/55">
            {' '}
            Each getaway is tailored, seamless, and wholly yours.
          </span>
        </p>

        {/* 按钮 */}
        <button
          type="button"
          className="bg-white text-black text-[15px] font-medium rounded-full px-8 py-3.5 transition-transform duration-200 hover:scale-[1.03] hover:shadow-[0_0_32px_4px_rgba(255,255,255,0.2)] active:scale-[0.97]"
        >
          Plan my escape today
        </button>

        {/* 锁标识行 */}
        <div className="flex items-center gap-2">
          <Lock size={13} strokeWidth={1.5} className="text-white/70" />
          <span className="text-[11px] font-medium tracking-[0.14em] text-white/70">
            SECURE BY DESIGN. ZERO DATA LEAKS.
          </span>
        </div>
      </div>
    </div>
  )
}
