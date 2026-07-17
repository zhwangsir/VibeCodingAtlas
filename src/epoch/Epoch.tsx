/* ============================================================
 *  Epoch — 数字新纪元 Hero + Marquee Logo 滚动
 *  基于 32.md:圆角卡片 Hero + 背景视频 + 浮动底部 nav + 无缝 marquee
 *  字体:Inter(正文)+ Outfit(标题,@fontsource/outfit 经 main.tsx 全局加载)
 *  Tech:React + TS + Tailwind 3 + framer-motion + lucide-react
 * ============================================================ */
import { motion } from 'framer-motion'
import { ChevronRight, Sparkles } from 'lucide-react'

/* ===== 背景视频(本地,原 CloudFront 已下载) ===== */
const BG_VIDEO = '/videos/74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4'

/* ===== 字体栈(Outfit 已通过 @fontsource/outfit 本地加载) ===== */
const FONT_SANS = 'Inter, ui-sans-serif, system-ui, sans-serif'
const FONT_DISPLAY = 'Outfit, Inter, ui-sans-serif, system-ui, sans-serif'

/* ===== Marquee logos(8 个,本地 SVG 已下载) ===== */
const LOGOS = [
  { src: '/images/procure.svg', alt: 'Procure', gradient: 'linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)' },
  { src: '/images/shopify.svg', alt: 'Shopify', gradient: 'linear-gradient(135deg, #95C11F 0%, #FFD500 100%)' },
  { src: '/images/blender.svg', alt: 'Blender', gradient: 'linear-gradient(135deg, #EA7600 0%, #1A87C9 100%)' },
  { src: '/images/figma.svg', alt: 'Figma', gradient: 'linear-gradient(135deg, #F24E1E 0%, #A259FF 100%)' },
  { src: '/images/spotify.svg', alt: 'Spotify', gradient: 'linear-gradient(135deg, #FF416C 0%, #FF2D55 100%)' },
  { src: '/images/lottielab.svg', alt: 'Lottielab', gradient: 'linear-gradient(135deg, #FFD23F 0%, #3DDC97 100%)' },
  { src: '/images/google-cloud.svg', alt: 'Google Cloud', gradient: 'linear-gradient(135deg, #4285F4 0%, #34A853 100%)' },
  { src: '/images/bing.svg', alt: 'Bing', gradient: 'linear-gradient(135deg, #00BCF2 0%, #0E9E6E 100%)' },
]

/* ============================================================
 *  Epoch — 主入口
 * ============================================================ */
export default function Epoch() {
  return (
    <div
      data-theme="epoch"
      className="relative w-full min-h-screen flex flex-col items-center justify-center"
      style={{
        fontFamily: FONT_SANS,
        background: '#f9fafb',
        paddingTop: '5vh',
        paddingBottom: '5vh',
      }}
    >
      <style>{`
        [data-theme='epoch'] .epoch-marquee-track {
          display: flex;
          width: max-content;
          animation: epoch-marquee 40s linear infinite;
        }
        [data-theme='epoch'] .epoch-marquee-wrap:hover .epoch-marquee-track {
          animation-play-state: paused;
        }
        @keyframes epoch-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {/* ===== Hero 容器(圆角卡片) ===== */}
      <section className="relative w-full max-w-[1400px] mx-auto rounded-[48px] bg-white border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] overflow-hidden h-[600px] flex flex-col">
        {/* 背景视频层 */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 transition-transform duration-1000"
            src={BG_VIDEO}
          />
        </div>

        {/* Hero 文本内容 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative z-20 flex-1 px-8 md:px-16 pt-12 md:pt-16 flex flex-col items-start"
        >
          <h1
            className="font-medium tracking-tight text-[#0a1b33]"
            style={{
              fontFamily: FONT_DISPLAY,
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              lineHeight: 1.1,
            }}
            dangerouslySetInnerHTML={{ __html: 'Foundation of the<br />new digital epoch' }}
          />

          <p
            className="mt-6 max-w-[560px] text-[#64748b]"
            style={{ fontSize: 'clamp(14px, 1.2vw, 15px)', lineHeight: 1.6 }}
          >
            Designing products, powering ecosystems and laying the foundation of a decentralized web for enterprises, builders and communities alike.
          </p>

          <motion.button
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0a152d] text-white px-6 py-3 text-sm font-semibold shadow-md"
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* 浮动底部 navbar */}
        <motion.nav
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center bg-white/90 backdrop-blur-2xl px-1.5 py-1.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-200/40"
        >
          {/* 圆形 logo 占位 */}
          <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-slate-100 shadow-sm text-[#0a1b33]">
            <Sparkles size={16} />
          </span>

          {/* 标准文本按钮 */}
          <button
            type="button"
            className="px-4 py-2 text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] transition-colors"
          >
            Products
          </button>
          <button
            type="button"
            className="px-4 py-2 text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] transition-colors"
          >
            Docs
          </button>

          {/* Get in touch 按钮 */}
          <button
            type="button"
            className="flex items-center gap-1.5 bg-white px-5 py-2 rounded-full text-[12px] font-semibold text-[#0a1b33] border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all"
          >
            Get in touch
            <ChevronRight size={14} strokeWidth={2} />
          </button>
        </motion.nav>
      </section>

      {/* ===== Marquee 滚动 Logo ===== */}
      <section className="epoch-marquee-wrap relative w-full max-w-[1400px] mt-10 overflow-hidden">
        {/* 左右遮罩渐变 */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10"
          style={{ background: 'linear-gradient(to right, #f9fafb, transparent)' }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10"
          style={{ background: 'linear-gradient(to left, #f9fafb, transparent)' }}
        />

        <div className="epoch-marquee-track">
          {/* 渲染两次实现无缝循环 */}
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="group relative h-24 w-40 shrink-0 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all overflow-hidden"
            >
              {/* 渐变背景层(悬浮显现) */}
              <div
                className="absolute inset-0 opacity-0 scale-[1.5] group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"
                style={{ background: logo.gradient }}
              />
              {/* Logo 图像 */}
              <img
                src={logo.src}
                alt={logo.alt}
                className="relative z-10 h-8 w-auto max-w-[80%] object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
