/* ============================================================
 *  Mainframe — 创意机构联系页 Hero
 *  基于 12.md 规范:Framer Motion + 鼠标 scrub 视频 + 多选服务胶囊
 *  字体:Inter(全局 @fontsource)
 *  Tech:React + TS + Tailwind + motion/react + lucide-react
 * ============================================================ */
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, Copy } from 'lucide-react'

/* ===== 背景视频(本地,原 CloudFront 已下载) ===== */
const BG_VIDEO = '/videos/3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4'

/* ===== 导航链接 ===== */
const NAV_LINKS = ['Labs', 'Studio', 'Openings', 'Shop'] as const

/* ===== 服务选项 ===== */
const SERVICE_OPTIONS = ['Brand', 'Digital', 'Campaign', 'Other'] as const

/* ============================================================
 *  useTypewriter — 逐字符打字机 hook
 * ============================================================ */
function useTypewriter(text: string, speed = 38, startDelay = 600) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null
    let i = 0

    const startTimer = setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          if (intervalId) clearInterval(intervalId)
          setDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(startTimer)
      if (intervalId) clearInterval(intervalId)
    }
  }, [text, speed, startDelay])

  return { displayed, done }
}

/* ============================================================
 *  Mainframe — 主入口
 * ============================================================ */
export default function Mainframe() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [services, setServices] = useState<string[]>([])
  const [copied, setCopied] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { displayed, done } = useTypewriter("we'd love to\nhear from you!")

  /* ===== 桌面鼠标 scrub 视频钩子 ===== */
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let targetTime = 0
    let prevX = 0
    let isReady = false

    const onLoadedMetadata = () => {
      isReady = true
      // 桌面(< 1024):启用自动播放;桌面(>= 1024):不自动播放,等鼠标 scrub
      if (window.innerWidth < 1024) {
        video.autoplay = true
        video.play().catch(() => {})
      }
    }

    const onSeeked = () => {
      if (!isReady) return
      // 若 targetTime 与当前差距较大,继续 seek,避免 seek-flooding
      const diff = targetTime - video.currentTime
      if (Math.abs(diff) > 0.05) {
        try {
          video.currentTime = Math.max(0, Math.min(video.duration, targetTime))
        } catch {
          /* noop */
        }
      }
    }

    const onMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return
      if (!isReady || !video.duration) return
      const delta = e.clientX - prevX
      prevX = e.clientX
      targetTime = targetTime + (delta / window.innerWidth) * 0.8 * video.duration
      targetTime = Math.max(0, Math.min(video.duration, targetTime))
      try {
        video.currentTime = targetTime
      } catch {
        /* noop */
      }
    }

    video.addEventListener('loadedmetadata', onLoadedMetadata)
    video.addEventListener('seeked', onSeeked)
    window.addEventListener('mousemove', onMouseMove)
    if (video.readyState >= 1) onLoadedMetadata()

    return () => {
      video.removeEventListener('loadedmetadata', onLoadedMetadata)
      video.removeEventListener('seeked', onSeeked)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  const toggleService = (s: string) => {
    setServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    )
  }

  const handleCopyEmail = async () => {
    const email = 'hello@mainframe.co'
    let ok = false
    try {
      await navigator.clipboard.writeText(email)
      ok = true
    } catch {
      /* 回退:隐藏 textarea + execCommand */
      const ta = document.createElement('textarea')
      ta.value = email
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      try {
        ok = document.execCommand('copy')
      } catch {
        ok = false
      }
      document.body.removeChild(ta)
    }
    if (ok) {
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    }
  }

  return (
    <div
      data-theme="mainframe"
      className="relative bg-white text-neutral-900 antialiased overflow-x-hidden flex flex-col lg:block lg:min-h-screen"
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      <style>{`
        [data-theme='mainframe'] .animate-blink {
          animation: mainframe-blink 1s step-end infinite;
        }
        @keyframes mainframe-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        [data-theme='mainframe'] ::selection {
          background: #EAECE9;
          color: #1C2E1E;
        }
      `}</style>

      {/* ===== 背景视频(桌面 scrub / 移动自动播放) ===== */}
      <div className="order-last lg:order-none relative lg:absolute lg:inset-0 lg:z-0 overflow-hidden pointer-events-none w-full aspect-square md:aspect-video lg:aspect-auto lg:h-full bg-neutral-50 lg:bg-transparent">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-right lg:object-right-bottom"
          src={BG_VIDEO}
        />
      </div>

      {/* ===== 导航栏 ===== */}
      <header className="fixed top-0 inset-x-0 z-10 px-5 sm:px-8 py-4 sm:py-5 flex flex-row justify-between items-center bg-transparent">
        {/* Logo */}
        <div className="flex flex-row gap-3 items-center">
          <span className="text-[21px] sm:text-[26px] tracking-tight text-black font-medium select-none">
            Mainframe&reg;
          </span>
          <span className="text-[25px] sm:text-[30px] text-black select-none tracking-[-0.02em] font-medium leading-none mb-1">
            &#10033;
          </span>
        </div>

        {/* 桌面导航链接 */}
        <nav className="hidden md:flex flex-row text-[23px] text-black items-center">
          {NAV_LINKS.map((link, i) => (
            <span key={link} className="flex items-center">
              <a href="#" className="hover:opacity-60 transition-opacity">
                {link}
              </a>
              {i < NAV_LINKS.length - 1 && (
                <span className="opacity-40">,&nbsp;</span>
              )}
            </span>
          ))}
        </nav>

        {/* 桌面 CTA */}
        <a
          href="#"
          className="hidden md:block text-[23px] text-black underline underline-offset-2 hover:opacity-60 transition-opacity"
        >
          Get in touch
        </a>

        {/* 移动端汉堡按钮 */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="md:hidden flex flex-col justify-center gap-[5px] w-6 h-6"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </header>

      {/* ===== 移动端菜单遮罩 ===== */}
      <div
        className={`md:hidden fixed inset-0 z-[9] bg-white/95 backdrop-blur-sm flex flex-col justify-center items-start px-8 gap-8 transition-opacity duration-300 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="text-[32px] font-medium text-black"
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </a>
        ))}
        <a
          href="#"
          className="text-[32px] font-medium text-black underline underline-offset-2"
          onClick={() => setMenuOpen(false)}
        >
          Get in touch
        </a>
      </div>

      {/* ===== 内容布局容器 ===== */}
      <div className="relative z-10 flex flex-col order-first lg:order-none w-full bg-white lg:bg-transparent pb-8 lg:pb-0 lg:min-h-screen">
        <main
          id="spade-hero"
          className="w-full max-w-7xl mx-auto px-6 py-12 flex-1 flex flex-col justify-center"
        >
          {/* ===== 标题(打字机) ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-[76px] font-normal tracking-tight text-black leading-[1.08] mb-8 select-none w-full whitespace-pre-wrap">
              {displayed}
              {!done && (
                <span className="inline-block w-[2px] h-[1.1em] bg-black align-middle ml-[2px] animate-blink" />
              )}
            </h1>
          </motion.div>

          {/* ===== 副标题描述 ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg md:text-xl text-[#5A635A] leading-relaxed font-normal mb-14 max-w-2xl">
              Whether you have questions, feedback, <br />
              drop us a message and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          {/* ===== 多选服务胶囊 ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-medium tracking-tight mb-2">
              What sort of service?
            </h2>
            <p className="opacity-85 text-[#738273] mb-8">Select all that apply</p>

            <div className="flex flex-wrap gap-3">
              {SERVICE_OPTIONS.map((opt) => {
                const active = services.includes(opt)
                return (
                  <motion.button
                    key={opt}
                    type="button"
                    onClick={() => toggleService(opt)}
                    whileTap={{ scale: 0.96 }}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                      active
                        ? 'bg-[#1C2E1E] text-white shadow-md shadow-emerald-950/5'
                        : 'bg-white text-[#1C2E1E] border border-[#F1F3F1] hover:bg-[#F1F3F1]/55'
                    }`}
                  >
                    <AnimatePresence>
                      {active && (
                        <motion.span
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                          className="inline-flex"
                        >
                          <Check size={14} strokeWidth={3} />
                        </motion.span>
                      )}
                    </AnimatePresence>
                    {opt}
                  </motion.button>
                )
              })}
            </div>

            {/* ===== 反馈状态横幅 ===== */}
            <div className="mt-8">
              <AnimatePresence mode="wait">
                {services.length === 0 ? (
                  <motion.p
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    className="italic text-xs text-[#5A635A]"
                  >
                    Please click to select services above.
                  </motion.p>
                ) : (
                  <motion.div
                    key="active"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 26 }}
                    className="bg-[#FAFBF9] border border-[#F1F3F1] rounded-2xl px-5 py-4 flex items-center justify-between gap-4"
                  >
                    <p className="text-sm text-[#1C2E1E]">
                      Ready to inquire about:{' '}
                      <span className="font-medium">{services.join(', ')}</span>
                    </p>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 text-[#4D6D47] uppercase text-xs font-semibold tracking-wider hover:gap-2.5 transition-all"
                    >
                      Let's Go
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* ===== Reach us 复制邮箱胶囊 ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-white text-[#1C2E1E] border border-[#F1F3F1] hover:bg-[#F1F3F1]/55 transition-colors"
            >
              <span className="opacity-60">Reach us:</span>
              <span>hello@mainframe.co</span>
              {copied ? (
                <Check size={14} strokeWidth={3} className="text-[#4D6D47]" />
              ) : (
                <Copy size={14} />
              )}
            </button>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
