/* ============================================================
 *  DesignPro — 产品设计教育平台全屏 Hero
 *  字体:Inter(@fontsource/inter,在 main.tsx 引入)
 *  核心:全屏循环视频背景 + 圆形 Logo 导航 + ShinyText 渐变标题
 *  Tech:React + TS + Tailwind + Framer Motion + Lucide React
 * ============================================================ */
import { motion } from 'framer-motion'
import { ArrowRight, Menu } from 'lucide-react'

/* ===== 背景视频(本地,原 CloudFront 已下载至 public/videos/) ===== */
const BG_VIDEO = '/videos/16f4600d-7a92-4292-b96e-b19156c7830a.mp4'

/* ===== 导航链接 ===== */
const NAV_LINKS = [
  'Home',
  'About Us',
  'Courses',
  'Instructors',
  'Testimonials',
  'Blog',
] as const

/* ============================================================
 *  ShinyText — 渐变扫光文字
 *  用 Framer Motion 让 backgroundPosition 持续左→右扫动
 *  - baseColor:#64CEFB(浅蓝)
 *  - shineColor:#ffffff(白)
 *  - speed:3s
 *  - 100deg 渐变夹角
 * ============================================================ */
type ShinyTextProps = {
  text: string
  baseColor?: string
  shineColor?: string
  speed?: number
  className?: string
}

function ShinyText({
  text,
  baseColor = '#64CEFB',
  shineColor = '#ffffff',
  speed = 3,
  className = '',
}: ShinyTextProps) {
  return (
    <motion.span
      className={`inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: `linear-gradient(100deg, ${baseColor} 40%, ${shineColor} 50%, ${baseColor} 60%)`,
        backgroundSize: '200% 100%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
      }}
      animate={{
        backgroundPosition: ['200% 0%', '-200% 0%'],
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {text}
    </motion.span>
  )
}

/* ============================================================
 *  Navbar — 圆形 Logo + 胶囊导航 + 移动汉堡
 * ============================================================ */
function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 px-4 md:px-6 lg:px-8 pt-5 md:pt-6">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* 左:圆形 Logo + DesignPro 文字 */}
        <a href="#" className="flex items-center gap-2.5">
          <span className="relative flex items-center justify-center w-6 h-6 rounded-full border-2 border-white">
            <span className="w-2.5 h-2.5 rounded-full bg-white" />
          </span>
          <span className="text-white text-base md:text-lg font-medium tracking-tight">
            DesignPro
          </span>
        </a>

        {/* 中右:胶囊导航(桌面) */}
        <div className="hidden lg:flex items-center gap-1 rounded-full border border-gray-700 bg-black/30 backdrop-blur-sm px-3 py-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-white/80 hover:text-white transition-colors px-3 py-1.5 rounded-full hover:bg-white/5"
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors px-3 py-1.5 rounded-full hover:bg-white/5"
          >
            Contact us
            <ArrowRight size={14} />
          </a>
        </div>

        {/* 移动:汉堡 */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="lg:hidden text-white/80 hover:text-white transition-colors p-2"
        >
          <Menu size={22} />
        </button>
      </nav>
    </header>
  )
}

/* ============================================================
 *  DesignProHero — 主入口
 * ============================================================ */
export default function DesignProHero() {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden font-inter antialiased">
      {/* ===== 全屏循环视频背景 ===== */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        src={BG_VIDEO}
      />
      {/* 顶部渐变(增强 nav 可读性)+ 底部渐变(增强 hero 可读性) */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 25%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      {/* ===== 内容层 ===== */}
      <div className="relative z-10 h-full flex flex-col">
        {/* 导航 */}
        <Navbar />

        {/* 顶部双栏文本(below nav) */}
        <div className="max-w-7xl w-full mx-auto px-4 md:px-6 lg:px-8 mt-16 md:mt-20">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 lg:gap-8">
            <p className="text-white/80 text-sm md:text-base max-w-md leading-relaxed">
              We deliver transformative programs that empower emerging product
              designers with cutting-edge expertise and vision to thrive
              globally.
            </p>
            <p className="text-white/80 text-sm md:text-base lg:text-right lg:max-w-xs">
              8000+ Talented Designers Launched !
            </p>
          </div>
        </div>

        {/* 中部 Hero 区(flex-1 垂直居中) */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-6 -mt-10 md:-mt-16">
          {/* 小标题 */}
          <p className="text-white/80 text-xs md:text-sm uppercase tracking-tight mb-4 md:mb-6">
            Seats for Next Program Opening Soon
          </p>

          {/* 主标题 */}
          <h1
            className="text-center text-white font-medium tracking-tighter"
            style={{ lineHeight: 0.85 }}
          >
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              Become
            </span>
            <ShinyText
              text="Product Leader."
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium tracking-tighter"
            />
          </h1>

          {/* CTA 按钮 */}
          <a
            href="#"
            className="group mt-8 md:mt-12 inline-flex items-center gap-2 rounded-full bg-black hover:bg-gray-900 transition-colors px-6 md:px-8 py-3 md:py-4 text-white text-sm md:text-base"
          >
            Apply for Next Enrollment
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
