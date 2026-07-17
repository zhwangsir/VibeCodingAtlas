/* ============================================================
 *  Forma — Full-screen video landing page with contact form
 *  字体:Inter(正文)+ Instrument Serif(斜体点缀)
 *  核心:全屏背景视频 + 玻璃拟态导航 + 服务多选标签 + 成功态
 * ============================================================ */
import { useState, type FormEvent } from 'react'
import { Twitter, Circle, Instagram, Linkedin, Hand, Check } from 'lucide-react'

import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'

/* ===== 本地背景视频(原 CloudFront 已下载) ===== */
const VIDEO_URL = '/videos/c45b90ec-18d7-42ff-90e2-b95d7109e330.mp4'

/* ===== 服务列表(按规范顺序) ===== */
const SERVICES = [
  'Website',
  'Mobile App',
  'Web App',
  'E-Commerce',
  'Visual Identity',
  '3D & Motion',
  'Digital Marketing',
  'Growth & Consulting',
  'Other',
] as const

/* ============================================================
 *  FormaLogo — 双黑色填充路径构成的 "M" 形 logo
 * ============================================================ */
function FormaLogo() {
  return (
    <svg
      viewBox="0 0 256 256"
      width={32}
      height={32}
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z" fill="#000" />
      <path d="M 256 128 L 128 128 L 0 0 L 128 0 Z" fill="#000" />
    </svg>
  )
}

/* ============================================================
 *  SocialBtn — 32x32 圆角图标按钮
 * ============================================================ */
function SocialBtn({
  icon,
  className,
}: {
  icon: React.ReactNode
  className: string
}) {
  return (
    <a
      href="#"
      aria-label="social link"
      className={`w-8 h-8 rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity ${className}`}
    >
      {icon}
    </a>
  )
}

/* ============================================================
 *  Forma — 主入口
 * ============================================================ */
export default function Forma() {
  const [selected, setSelected] = useState<string[]>([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const toggleService = (svc: string) => {
    setSelected((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    )
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSending(true)
    await new Promise((r) => setTimeout(r, 1000))
    setSending(false)
    setSent(true)
  }

  return (
    <div
      data-theme="forma"
      className="min-h-screen bg-white p-3 sm:p-4 md:p-6"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        [data-theme='forma'] * { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* ===== 大圆角卡片(锁视口) ===== */}
      <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] lg:min-h-[calc(100vh-48px)]">
        {/* ===== 背景视频 ===== */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={VIDEO_URL}
        />

        {/* ===== 内容层 ===== */}
        <div className="relative z-10 flex flex-col min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] lg:min-h-[calc(100vh-48px)] p-4 sm:p-6 md:p-8 gap-6">
          {/* ===== 顶部导航(胶囊) ===== */}
          <nav className="bg-white/60 backdrop-blur-md rounded-2xl shadow-sm pl-3 sm:pl-4 pr-2 py-2 w-full sm:w-auto flex items-center gap-3 sm:gap-6">
            <FormaLogo />
            <div className="hidden sm:flex items-center gap-3 sm:gap-6">
              {['Our story', 'Expertise', 'Our work', 'Journal'].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-gray-800 text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap"
                >
                  {l}
                </a>
              ))}
            </div>
            <button
              type="button"
              className="ml-auto bg-black text-white text-sm font-medium px-4 sm:px-5 py-2 rounded-xl hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              Start a project
            </button>
          </nav>

          {/* ===== 弹性间隔 ===== */}
          <div className="flex-1 min-h-[2rem]" />

          {/* ===== 底部行:标题 + 表单 ===== */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            {/* 标题(左) */}
            <p className="text-3xl sm:text-4xl xl:text-5xl font-medium leading-tight drop-shadow-lg lg:max-w-lg xl:max-w-2xl shrink-0 text-white">
              We craft bold ideas
              <br />
              and ship them as{' '}
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: 'italic',
                  fontWeight: 400,
                }}
              >
                products
              </span>
            </p>

            {/* 联系表单卡(右) */}
            <div className="w-full lg:w-[min(480px,45%)] shrink-0">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden p-4 sm:p-6 flex flex-col gap-4">
                <h2 className="inline-flex items-center gap-2 text-xl sm:text-2xl font-semibold text-black tracking-tight">
                  Say hello!
                  <Hand size={22} className="text-black" />
                </h2>

                {/* 邮箱 + 社交 */}
                <div className="flex flex-row items-center justify-between gap-3 bg-gray-50 rounded-2xl px-4 py-2.5">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-gray-500 text-xs sm:text-sm shrink-0">
                      Drop us a line
                    </span>
                    <a
                      href="mailto:hello@forma.co"
                      className="text-blue-600 font-semibold hover:underline truncate text-sm"
                    >
                      hello@forma.co
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <SocialBtn
                      icon={<Twitter size={13} />}
                      className="bg-gray-100 text-gray-800"
                    />
                    <SocialBtn
                      icon={<Circle size={13} />}
                      className="bg-pink-100 text-pink-500"
                    />
                    <SocialBtn
                      icon={<Instagram size={13} />}
                      className="bg-orange-100 text-orange-400"
                    />
                    <SocialBtn
                      icon={<Linkedin size={13} />}
                      className="bg-blue-100 text-blue-600"
                    />
                  </div>
                </div>

                {/* OR 分割线 */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-gray-400 font-medium text-sm">OR</span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* 表单 / 成功态 */}
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-6 gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                      <Check size={24} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900">
                      You're all set!
                    </h3>
                    <p className="text-sm text-gray-500">
                      Expect a reply within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <label className="text-sm font-medium text-black">
                      Tell us about your vision
                    </label>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full name"
                        className="flex-1 min-w-0 text-sm px-3 py-2.5 rounded-xl border border-gray-200 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                      />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="flex-1 min-w-0 text-sm px-3 py-2.5 rounded-xl border border-gray-200 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                      />
                    </div>

                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="What are you looking to build or improve..."
                      className="resize-none flex-1 min-w-0 text-sm px-3 py-2.5 rounded-xl border border-gray-200 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                    />

                    {/* 服务标签 */}
                    <div className="flex flex-col gap-2">
                      <span className="text-sm font-medium text-black">
                        I need help with...
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {SERVICES.map((svc) => {
                          const active = selected.includes(svc)
                          return (
                            <button
                              key={svc}
                              type="button"
                              onClick={() => toggleService(svc)}
                              className={`text-xs font-medium px-3 py-2 rounded-lg border transition-all ${
                                active
                                  ? 'bg-gray-100 text-black border-black'
                                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                              }`}
                            >
                              {svc}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full bg-black text-white text-sm font-semibold py-3 rounded-2xl hover:bg-gray-800 transition-colors disabled:opacity-60"
                    >
                      {sending ? 'Sending...' : 'Send my message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
