/* ============================================================
 *  dot. — Quiet daily-notes landing page with Nokia font typing
 *  字体:Inter(正文)+ Instrument Serif(标题)+ Nokia Cellphone FC Small(打字)
 *  核心:全屏背景视频 + 顶部居中胶囊导航 + 主副标题入场动画
 *         + 叠加在手机屏幕位置的打字消息(诺基亚字体 + 闪烁光标)
 * ============================================================ */
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'

/* ===== 本地背景视频(原 CloudFront 已下载) ===== */
const VIDEO_URL = '/videos/a6d194f0-ac86-4df9-abe5-ded73e596d7c.mp4'

/* ===== 打字消息循环 ===== */
const MESSAGES = ['Are you here?', 'Yes, I am.', 'Speak soon.']

/* ===== 导航链接 ===== */
const NAV_LINKS = ['Philosophy', 'Trust', 'Access', 'Tribe']

/* ============================================================
 *  TypingMessages — 在视频手机屏幕位置循环打字
 * ============================================================ */
function TypingMessages() {
  const [msgIndex, setMsgIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = MESSAGES[msgIndex]

    if (!deleting && text === current) {
      // 完整显示后,等待 2s 开始删除
      const t = setTimeout(() => setDeleting(true), 2000)
      return () => clearTimeout(t)
    }

    if (deleting && text === '') {
      // 删完,切下一条
      setDeleting(false)
      setMsgIndex((i) => (i + 1) % MESSAGES.length)
      return
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        )
      },
      deleting ? 50 : 100
    )
    return () => clearTimeout(t)
  }, [text, deleting, msgIndex])

  return (
    <div className="absolute left-[48.5%] md:left-[47.5%] lg:left-[48.5%] -translate-x-1/2 bottom-[32%] z-30 w-[110px] sm:w-[130px] flex justify-start text-left">
      <span
        className="dot-nokia text-[#2A3616] text-[10px] sm:text-[14px] leading-tight break-words min-h-[1.5em]"
      >
        {text}
        <motion.span
          aria-hidden="true"
          className="inline-block w-1.5 h-3 bg-[#2A3616] ml-1 align-middle"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
        />
      </span>
    </div>
  )
}

/* ============================================================
 *  Navbar — 顶部居中胶囊导航
 * ============================================================ */
function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 pointer-events-none">
      <nav
        className="pointer-events-auto backdrop-blur rounded-full border border-black/10 flex items-center justify-between px-5 py-3 bg-transparent"
      >
        {/* Logo */}
        <span
          className="dot-instrument text-[28px] tracking-tight text-[#1a1a1a]"
        >
          dot.
        </span>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href="#"
              className="dot-sans text-[14px] text-[#1a1a1a] hover:opacity-60 transition-opacity"
            >
              {l}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button
          type="button"
          className="group relative dot-sans text-[14px] text-white rounded-full px-5 py-2 overflow-hidden"
          style={{
            background: '#0871E7',
            boxShadow: 'inset 0 -4px 4px rgba(255,255,255,0.39)',
            outline: '1px solid #0871E7',
            outlineOffset: '-1px',
          }}
        >
          {/* 顶部光泽 */}
          <span className="absolute left-[10%] top-[1px] w-[80%] h-4 bg-gradient-to-b from-[#DEF0FC] to-transparent rounded-[12px] transition-transform duration-300 group-hover:scale-x-105 pointer-events-none" />
          <span className="relative">Link up</span>
        </button>
      </nav>
    </div>
  )
}

/* ============================================================
 *  Hero — 主视觉
 * ============================================================ */
function Hero() {
  return (
    <section className="min-h-screen bg-[#F3F4ED] pt-24 md:pt-32 flex flex-col items-center relative">
      {/* 视频背景 */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src={VIDEO_URL}
        />
        <div className="absolute inset-0 bg-white/5" />
      </div>

      {/* 文本容器 */}
      <div className="relative z-20 pointer-events-none text-center flex flex-col items-center px-6">
        {/* 主标题 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="dot-instrument text-[38px] md:text-[56px] lg:text-[72px] leading-[0.85] tracking-tight text-[#1a1a1a] mb-6"
        >
          Short notes.
          <br />
          Daily calm.
        </motion.div>

        {/* 副标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="dot-sans text-[16px] md:text-[18px] text-[#1a1a1a]/70 leading-relaxed font-normal max-w-xl mx-auto"
        >
          Linked with a single anonymous peer. One message every day. A quiet
          rhythm in the digital noise.
        </motion.div>
      </div>

      {/* 打字消息(叠加在手机屏幕上) */}
      <TypingMessages />
    </section>
  )
}

/* ============================================================
 *  Dot — 主入口
 * ============================================================ */
export default function Dot() {
  return (
    <div
      data-theme="dot"
      className="min-h-screen bg-[#F3F4ED]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @font-face {
          font-family: 'Nokia Cellphone FC Small';
          src: url('/fonts/dot/NokiaCellphoneFCSmall.woff2') format('woff2'),
               url('/fonts/dot/NokiaCellphoneFCSmall.woff') format('woff'),
               url('/fonts/dot/NokiaCellphoneFCSmall.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        [data-theme='dot'] .dot-instrument {
          font-family: 'Instrument Serif', serif;
        }
        [data-theme='dot'] .dot-sans {
          font-family: 'Inter', sans-serif;
        }
        [data-theme='dot'] .dot-nokia {
          font-family: 'Nokia Cellphone FC Small', monospace;
        }
        [data-theme='dot'] :root {
          --font-instrument: 'Instrument Serif', serif;
          --font-serif: 'Instrument Serif', serif;
          --font-sans: 'Inter', sans-serif;
          --font-nokia: 'Nokia Cellphone FC Small', monospace;
        }
        [data-theme='dot'] body {
          font-family: var(--font-sans);
          -webkit-font-smoothing: antialiased;
        }
      `}</style>

      <Navbar />
      <Hero />
    </div>
  )
}
