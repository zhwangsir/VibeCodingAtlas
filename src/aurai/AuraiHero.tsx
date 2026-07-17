/* ============================================================
 *  Aurai — Always-On AI Wellness Companion(全屏视频 Hero)
 *  字体:Askan Light(标题)+ Inter(正文)
 *  核心:循环背景视频 + 玻璃拟态导航 + 底部对齐内容
 *  Tech:React + TS + Tailwind + Lucide
 * ============================================================ */
import { useState, type FormEvent } from 'react'
import { Menu, X } from 'lucide-react'

/* ===== 背景视频(本地,原 CloudFront 已下载至 public/videos/) ===== */
const BG_VIDEO = '/videos/aac61aa2-0f3f-4cf1-bc78-7f657dd11164.mp4'

/* ===== 导航链接 ===== */
const NAV_LINKS = ['Story', 'Benefits', 'Connect'] as const

/* ===== 功能标签 ===== */
const FEATURE_PILLS = [
  'Smart Therapy',
  'Real-time Healing',
  'Insights into outcomes',
] as const

/* ============================================================
 *  AuraiLogo — 自定义 4 瓣风车形 SVG Logo
 * ============================================================ */
function AuraiLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 256 256"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M 228 0 C 172.772 0 128 44.772 128 100 L 128 0 L 0 0 L 0 28 C 0 83.228 44.772 128 100 128 L 0 128 L 0 256 L 28 256 C 83.228 256 128 211.228 128 156 L 128 256 L 256 256 L 256 228 C 256 172.772 211.228 128 156 128 L 256 128 L 256 0 Z" />
    </svg>
  )
}

/* ============================================================
 *  AuraiHero — 主入口
 * ============================================================ */
export default function AuraiHero() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email) {
      alert(email)
    }
  }

  return (
    <div
      data-theme="aurai"
      className="h-screen w-full overflow-hidden relative bg-black"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* ===== 全屏循环背景视频 ===== */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          objectPosition: '80% center',
        }}
        src={BG_VIDEO}
      />
      {/* md 断点:right center */}
      <style>{`
        @media (min-width: 768px) {
          [data-theme='aurai'] video { object-position: right center; }
        }
        @media (min-width: 1024px) {
          [data-theme='aurai'] video { object-position: center center; }
        }
      `}</style>

      {/* ===== 内容层 ===== */}
      <div className="absolute inset-0 z-10 flex flex-col px-4 sm:px-10 lg:px-12 py-4 sm:py-8">
        {/* ===== 导航 ===== */}
        <nav className="flex items-center justify-between">
          {/* 左:玻璃拟态胶囊(Logo + Brand + 汉堡) */}
          <div className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 px-4 py-2.5 sm:px-6 sm:py-4 flex items-center">
            <AuraiLogo className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            <span
              className="font-askan text-white text-base sm:text-xl tracking-wide ml-2 sm:ml-3"
              style={{ fontFamily: '"Askan Light", serif' }}
            >
              Aurai
            </span>
            <button
              type="button"
              aria-label="Toggle menu"
              className="ml-4 sm:ml-32 md:ml-64 lg:ml-96 text-white"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* 右:桌面端 CTA */}
          <button
            type="button"
            className="hidden sm:block bg-white text-gray-900 font-medium text-sm px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
          >
            Join the list
          </button>
        </nav>

        {/* ===== 移动端菜单 ===== */}
        {menuOpen && (
          <div className="sm:hidden absolute top-[4.5rem] left-4 right-4 bg-black/30 backdrop-blur-xl rounded-2xl p-5 border border-white/10 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-white text-base"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <button
              type="button"
              className="bg-white text-gray-900 font-medium text-sm px-6 py-3 rounded-full w-full mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Join the list
            </button>
          </div>
        )}

        {/* ===== 移动端占位,把内容推到底部 ===== */}
        <div className="flex-1 sm:hidden" />

        {/* ===== 主内容(底部对齐) ===== */}
        <div className="flex flex-col sm:flex-1 sm:flex-row sm:items-end pb-4 sm:pb-12 lg:pb-16 sm:mt-auto">
          {/* 左列 */}
          <div className="flex flex-col gap-4 sm:gap-5 max-w-[700px]">
            {/* 标题 */}
            <h1
              className="font-askan text-white text-[2rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.05] tracking-tight max-w-[700px]"
              style={{ fontFamily: '"Askan Light", serif' }}
            >
              Your calm is always within.
            </h1>

            {/* 副标题 */}
            <p className="text-white/70 text-xs sm:text-base md:text-lg max-w-[520px] leading-relaxed">
              Aurai is your always-on wellness companion. Built by leading
              therapists, it brings you the care and clarity right when you need
              it.
            </p>

            {/* 邮件表单 */}
            <form
              onSubmit={handleSubmit}
              className="relative bg-black/30 backdrop-blur-md rounded-full border border-white/10 w-full max-w-[440px]"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="bg-transparent text-white placeholder:text-white/50 px-4 sm:px-6 py-3 sm:py-4 text-sm w-full pr-28 sm:pr-32 outline-none rounded-full"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-white text-gray-900 text-xs sm:text-sm font-medium px-3 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-white/90 transition-colors"
              >
                Join the list
              </button>
            </form>

            {/* 功能标签(仅移动端) */}
            <div className="flex sm:hidden flex-wrap gap-2 mt-2">
              {FEATURE_PILLS.map((pill) => (
                <span
                  key={pill}
                  className="bg-black/30 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-white/10"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* 右列:功能标签(仅桌面端) */}
          <div className="hidden sm:flex flex-col items-end gap-2 self-end ml-auto">
            {FEATURE_PILLS.map((pill) => (
              <span
                key={pill}
                className="bg-black/30 backdrop-blur-md text-white text-xs sm:text-sm px-4 py-2 rounded-full border border-white/10"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
