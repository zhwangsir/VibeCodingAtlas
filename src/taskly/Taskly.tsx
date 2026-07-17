/* ============================================================
 *  Taskly — Liquid Glass hero section
 *  字体:Fustat(标题)+ Inter(正文)
 *  核心:左上角渐变光晕 + 玻璃拟态导航 + 玻璃球视频(混合模式 + 色相旋转)
 *         + 社会证明徽章 + 主 CTA + 灰度 logo 行
 * ============================================================ */
import { ArrowRight, Star } from 'lucide-react'

import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/fustat/700.css'

/* ===== 玻璃球视频(本地,原 future.co 已下载) ===== */
const ORB_VIDEO = '/videos/orb-purple.webm'

/* ============================================================
 *  TasklyLogo — 简洁几何 logo
 * ============================================================ */
function TasklyLogo() {
  return (
    <svg
      viewBox="0 0 32 32"
      width={28}
      height={28}
      aria-hidden="true"
      className="shrink-0"
    >
      <rect
        x={4}
        y={4}
        width={24}
        height={24}
        rx={8}
        fill="none"
        stroke="#0a0400"
        strokeWidth={2.5}
      />
      <path
        d="M 11 16 L 15 20 L 22 12"
        fill="none"
        stroke="#0a0400"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ============================================================
 *  CompanyLogo — 灰度占位 logo
 * ============================================================ */
function CompanyLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 opacity-60 grayscale">
      <svg viewBox="0 0 32 32" width={28} height={28} aria-hidden="true">
        <circle cx={16} cy={16} r={14} fill="none" stroke="#1a1a1a" strokeWidth={2} />
        <circle cx={16} cy={16} r={6} fill="#1a1a1a" />
      </svg>
      <span
        className="taskly-fustat text-[18px] font-bold text-[#1a1a1a]"
      >
        {name}
      </span>
    </div>
  )
}

/* ============================================================
 *  Taskly — 主入口
 * ============================================================ */
export default function Taskly() {
  return (
    <div
      data-theme="taskly"
      className="relative min-h-screen w-full overflow-hidden bg-white"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        [data-theme='taskly'] .taskly-fustat {
          font-family: 'Fustat', 'Inter', sans-serif;
        }
        [data-theme='taskly'] body {
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        [data-theme='taskly'] .taskly-orb-video {
          mix-blend-mode: screen;
          filter: hue-rotate(-55deg) saturate(250%) brightness(1.2) contrast(1.1);
        }
      `}</style>

      {/* ===== 背景渐变光晕(左上) ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ background: '#60B1FF', opacity: 0.35 }}
          aria-hidden="true"
        />
        <div
          className="absolute top-[5%] left-[10%] w-[450px] h-[450px] rounded-full blur-[100px]"
          style={{ background: '#319AFF', opacity: 0.3 }}
          aria-hidden="true"
        />
      </div>

      {/* ===== 主内容容器(z-10) ===== */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10">
        {/* ===== 玻璃拟态导航(sticky,顶部 30px 居中) ===== */}
        <nav
          className="sticky top-[30px] z-30 mx-auto w-fit flex items-center gap-2 md:gap-6 rounded-[16px] px-4 md:px-6 py-3"
          style={{
            background: 'rgba(255,255,255,0.3)',
            backdropFilter: 'blur(50px)',
            WebkitBackdropFilter: 'blur(50px)',
            border: '1px solid rgba(0,0,0,0.1)',
            boxShadow: 'inset 0px 4px 4px 0px rgba(255,255,255,0.25)',
          }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <TasklyLogo />
            <span className="taskly-fustat text-[20px] font-bold text-[#0a0400]">
              Taskly
            </span>
          </div>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-5 text-[14px] font-medium text-[#0a0400]/80">
            <a href="#" className="hover:text-[#0a0400] transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-[#0a0400] transition-colors">
              Features
            </a>
            <a href="#" className="hover:text-[#0a0400] transition-colors">
              Company
            </a>
            <a href="#" className="hover:text-[#0a0400] transition-colors">
              Pricing
            </a>
          </div>

          {/* SignUp button */}
          <button
            type="button"
            className="group flex items-center gap-2 rounded-[12px] px-4 py-2 text-[14px] font-medium text-[#0a0400] transition-transform hover:scale-[1.02]"
            style={{
              background: 'rgba(255,255,255,0.4)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              boxShadow: 'inset 0px 4px 4px 0px rgba(255,255,255,0.35)',
            }}
          >
            SignUp
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </button>
        </nav>

        {/* ===== Hero 双列 ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-20 md:pt-28 pb-16">
          {/* ===== 左列:内容 ===== */}
          <div className="flex flex-col gap-6">
            {/* 社会证明徽章 */}
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-white/60 backdrop-blur-md px-3 py-1.5 border border-black/5">
              <div className="flex items-center gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="#FF801E"
                    strokeWidth={0}
                    className="text-[#FF801E]"
                  />
                ))}
              </div>
              <span className="text-[12px] font-medium text-[#1a1a1a]">
                Rated 4.9/5 by 2700+ customers
              </span>
            </div>

            {/* 主标题 */}
            <h1
              className="taskly-fustat font-bold text-[#0a0400]"
              style={{
                fontSize: 'clamp(40px, 5vw, 75px)',
                lineHeight: 1.05,
                letterSpacing: '-2px',
              }}
            >
              Work smarter,
              <br />
              achieve faster
            </h1>

            {/* 副标题 */}
            <p
              className="text-[#1a1a1a]/70 max-w-md"
              style={{
                fontSize: '18px',
                letterSpacing: '-1px',
                lineHeight: 1.55,
              }}
            >
              Effortlessly manage your projects, collaborate with your team, and
              achieve your goals with our intuitive task management tool.
            </p>

            {/* 主 CTA */}
            <div>
              <button
                type="button"
                className="group inline-flex items-center gap-3 rounded-[16px] pl-6 pr-2 py-2 text-white transition-transform hover:scale-[1.02]"
                style={{
                  background: 'rgba(0,132,255,0.8)',
                  backdropFilter: 'blur(2px)',
                  WebkitBackdropFilter: 'blur(2px)',
                  boxShadow: 'inset 0px 4px 4px 0px rgba(255,255,255,0.35)',
                }}
              >
                <span className="text-[15px] font-semibold">Get Started Now</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                  <ArrowRight size={16} className="text-[#0084ff]" />
                </span>
              </button>
            </div>
          </div>

          {/* ===== 右列:玻璃球视频 ===== */}
          <div className="relative flex items-center justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="taskly-orb-video w-full max-w-[560px] scale-125"
              src={ORB_VIDEO}
            />
          </div>
        </div>

        {/* ===== 底部 logo 行 ===== */}
        <div className="border-t border-black/5 pt-10 pb-12">
          <p className="text-center text-[13px] font-medium text-[#1a1a1a]/50 mb-6 tracking-wide">
            Trusted by Top-tier product companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-[40px] md:gap-[100px]">
            <CompanyLogo name="Vertex" />
            <CompanyLogo name="Northwind" />
            <CompanyLogo name="Lumina" />
            <CompanyLogo name="Apex" />
            <CompanyLogo name="Quanta" />
          </div>
        </div>
      </div>
    </div>
  )
}
