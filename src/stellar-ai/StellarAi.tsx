/* ============================================================
 *  Stellar.ai — 落地页 Hero
 *  字体:Inter(全局默认)
 *  配色:白色背景 + 黑色文字 + 灰色副标题
 *  核心:fade-in-up 错位入场 + 自动循环 tab + 视频与条件覆盖层
 * ============================================================ */
import { useEffect, useState } from 'react'
import {
  Star,
  ChevronDown,
  BarChart3,
  BookOpen,
  Users,
  Rocket,
  Check,
  Loader2,
  AlertCircle,
} from 'lucide-react'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

const VIDEO_URL = '/videos/358b1e72-c921-48b7-aaac-f200994f32fb.mp4'

type TabKey = 'analyse' | 'train' | 'testing' | 'deploy'

const TABS: { key: TabKey; label: string; icon: typeof BarChart3 }[] = [
  { key: 'analyse', label: 'Analyse', icon: BarChart3 },
  { key: 'train', label: 'Train', icon: BookOpen },
  { key: 'testing', label: 'Testing', icon: Users },
  { key: 'deploy', label: 'Deploy', icon: Rocket },
]

/** Analyse 覆盖层 — 设置 AI 工作空间向导 */
function AnalyseOverlay() {
  const steps = ['Connect data sources', 'Define workspace', 'Pick templates', 'Review & launch']
  return (
    <div className="stellar-overlay-outer stellar-fade-in-overlay">
      <div className="stellar-overlay-card stellar-slide-up-overlay">
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3.5">
          <div>
            <div className="text-[13px] font-semibold text-gray-900">Set Up Your AI Workspace</div>
            <div className="text-[11px] text-gray-500">Step 2 of 4 · Connect sources</div>
          </div>
          <div className="rounded-full bg-purple-50 px-2.5 py-1 text-[11px] font-medium text-purple-700">
            25%
          </div>
        </div>
        <div className="px-5 py-4">
          <div className="mb-4 h-1.5 w-full rounded-full bg-gray-100">
            <div className="h-1.5 rounded-full bg-[#7b39fc]" style={{ width: '25%' }} />
          </div>
          <ul className="space-y-2.5">
            {steps.map((s, i) => (
              <li key={s} className="flex items-center gap-2.5 text-[12.5px]">
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${
                    i < 1
                      ? 'bg-[#7b39fc] text-white'
                      : i === 1
                        ? 'border-2 border-[#7b39fc] text-[#7b39fc]'
                        : 'border border-gray-200 text-gray-400'
                  }`}
                >
                  {i < 1 ? <Check size={11} /> : i + 1}
                </span>
                <span className={i < 1 ? 'text-gray-400 line-through' : 'text-gray-700'}>
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

/** Train 覆盖层 — AI 模型训练 */
function TrainOverlay() {
  const metrics = [
    { label: 'Epochs', value: '67 / 100' },
    { label: 'Accuracy', value: '94.2%' },
    { label: 'Loss', value: '0.082' },
    { label: 'Val Loss', value: '0.091' },
  ]
  return (
    <div className="stellar-overlay-outer stellar-fade-in-overlay">
      <div className="stellar-overlay-card stellar-slide-up-overlay">
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3.5">
          <div className="flex items-center gap-2">
            <Loader2 size={14} className="animate-spin text-orange-500" />
            <div>
              <div className="text-[13px] font-semibold text-gray-900">AI Model Training</div>
              <div className="text-[11px] text-gray-500">Run #4821 · resnet-50</div>
            </div>
          </div>
          <div className="rounded-full bg-orange-50 px-2.5 py-1 text-[11px] font-medium text-orange-700">
            67%
          </div>
        </div>
        <div className="px-5 py-4">
          <div className="mb-4 h-1.5 w-full rounded-full bg-gray-100">
            <div className="h-1.5 rounded-full bg-orange-500" style={{ width: '67%' }} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-lg border border-gray-100 bg-gray-50 px-3 py-2">
                <div className="text-[10px] uppercase tracking-wide text-gray-500">{m.label}</div>
                <div className="text-[14px] font-semibold text-gray-900">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/** Testing 覆盖层 — 测试套件结果 */
function TestingOverlay() {
  return (
    <div className="stellar-overlay-outer stellar-fade-in-overlay">
      <div className="stellar-overlay-card stellar-slide-up-overlay">
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
              <Check size={13} className="text-green-600" />
            </span>
            <div>
              <div className="text-[13px] font-semibold text-gray-900">Test Suite Results</div>
              <div className="text-[11px] text-gray-500">All checks passed</div>
            </div>
          </div>
          <div className="rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-700">
            127/127
          </div>
        </div>
        <div className="px-5 py-4 space-y-2">
          {['Unit Tests', 'Integration Tests', 'E2E Tests', 'Performance'].map((t, i) => (
            <div key={t} className="flex items-center justify-between text-[12.5px]">
              <span className="flex items-center gap-2 text-gray-700">
                <Check size={12} className="text-green-600" />
                {t}
              </span>
              <span className="text-gray-500">{[42, 38, 31, 16][i]} passed</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/** Deploy 覆盖层 — 部署到生产 */
function DeployOverlay() {
  const items = [
    { label: 'Build container image', done: true },
    { label: 'Push to registry', done: true },
    { label: 'Roll out to staging', done: true },
    { label: 'Promote to production', done: false },
  ]
  return (
    <div className="stellar-overlay-outer stellar-fade-in-overlay">
      <div className="stellar-overlay-card stellar-slide-up-overlay">
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3.5">
          <div>
            <div className="text-[13px] font-semibold text-gray-900">Deploy to Production</div>
            <div className="text-[11px] text-gray-500">3 of 4 steps complete</div>
          </div>
          <AlertCircle size={14} className="text-orange-500" />
        </div>
        <div className="px-5 py-4">
          <ul className="mb-4 space-y-2.5">
            {items.map((it) => (
              <li key={it.label} className="flex items-center gap-2.5 text-[12.5px]">
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full ${
                    it.done ? 'bg-green-100 text-green-600' : 'border border-gray-200 text-gray-300'
                  }`}
                >
                  {it.done ? <Check size={11} /> : <Loader2 size={11} className="animate-spin" />}
                </span>
                <span className={it.done ? 'text-gray-700' : 'text-gray-900 font-medium'}>
                  {it.label}
                </span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="w-full rounded-lg bg-[#7b39fc] py-2 text-[13px] font-semibold text-white transition-colors hover:bg-[#6b2ee0]"
          >
            Deploy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default function StellarAi() {
  const [active, setActive] = useState<TabKey>('analyse')

  // 自动循环 tab,每 4 秒切换
  useEffect(() => {
    const id = setInterval(() => {
      setActive((cur) => {
        const idx = TABS.findIndex((t) => t.key === cur)
        return TABS[(idx + 1) % TABS.length].key
      })
    }, 4000)
    return () => clearInterval(id)
  }, [])

  const overlayFor = (key: TabKey) => {
    if (key === 'analyse') return <AnalyseOverlay />
    if (key === 'train') return <TrainOverlay />
    if (key === 'testing') return <TestingOverlay />
    return <DeployOverlay />
  }

  return (
    <div data-theme="stellar-ai" className="stellar-root bg-white">
      <style>{`
        @keyframes stellar-fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes stellar-fade-in-overlay {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes stellar-slide-up-overlay {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .stellar-fade-in-up { animation: stellar-fade-in-up 0.6s ease-out forwards; }
        .stellar-fade-in-overlay { animation: stellar-fade-in-overlay 0.4s ease-out forwards; }
        .stellar-slide-up-overlay { animation: stellar-slide-up-overlay 0.5s ease-out forwards; }
        .stellar-overlay-outer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 5;
        }
        .stellar-overlay-card {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: min(360px, 88%);
          background: white;
          border-radius: 14px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.18), 0 4px 10px rgba(0,0,0,0.06);
          overflow: hidden;
        }
      `}</style>

      {/* Navigation */}
      <nav className="stellar-fade-in-up flex items-center justify-between px-6 py-4 max-w-7xl mx-auto" style={{ opacity: 0, animationDelay: '0.1s' }}>
        <div className="flex items-center gap-2">
          <Star size={20} fill="black" className="text-black" />
          <span className="text-lg font-semibold text-gray-900">Stellar.ai</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Solutions', dropdown: true },
            { label: 'For Teams', dropdown: true },
            { label: 'About Us', dropdown: false },
            { label: 'Learn Hub', dropdown: false },
          ].map((l) => (
            <a
              key={l.label}
              href="#"
              className="flex items-center gap-1 text-sm text-gray-700 transition-colors hover:text-black"
            >
              {l.label}
              {l.dropdown && <ChevronDown size={14} />}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-gray-700 hover:text-black">Login</a>
          <button
            type="button"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            Get started free
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="stellar-fade-in-up px-6 pt-24 pb-32 max-w-7xl mx-auto text-center" style={{ opacity: 0, animationDelay: '0.2s' }}>
        {/* Reviews badge */}
        <div className="stellar-fade-in-up mb-8 inline-flex items-center gap-2" style={{ opacity: 0, animationDelay: '0.2s' }}>
          <span className="flex h-6 w-6 items-center justify-center rounded border border-gray-300">
            <Star size={12} fill="black" className="text-black" />
          </span>
          <span className="text-sm font-medium text-black">4.9 rating from 18.3K+ users</span>
        </div>

        {/* Heading */}
        <h1
          className="stellar-fade-in-up mb-5 text-6xl md:text-7xl lg:text-[80px] font-normal leading-[1.1] tracking-tight"
          style={{ opacity: 0, animationDelay: '0.3s' }}
        >
          <span className="block">Work Smarter. Move Faster.</span>
          <span className="mt-1 block bg-gradient-to-r from-black via-gray-500 to-gray-400 bg-clip-text text-transparent">
            AI Powers You Up.
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="stellar-fade-in-up mx-auto mb-8 max-w-2xl text-lg md:text-xl text-gray-600"
          style={{ opacity: 0, animationDelay: '0.4s' }}
        >
          Intelligent automation syncs with the tools you love to streamline tasks, boost output, and save time.
        </p>

        {/* CTA */}
        <button
          type="button"
          className="stellar-fade-in-up mb-12 rounded-full bg-black px-8 py-3 text-base font-medium text-white transition-colors hover:bg-gray-800"
          style={{ opacity: 0, animationDelay: '0.5s' }}
        >
          Begin Free Trial
        </button>

        {/* Tab bar */}
        <div className="stellar-fade-in-up" style={{ opacity: 0, animationDelay: '0.6s' }}>
          {/* Desktop */}
          <div className="hidden md:flex mx-auto max-w-md items-center justify-between rounded-lg bg-gray-100 p-1">
            {TABS.map((t, i) => {
              const Icon = t.icon
              const isActive = active === t.key
              return (
                <div key={t.key} className="flex items-center">
                  {i > 0 && <div className="mx-3 h-5 w-px bg-gray-300" />}
                  <button
                    type="button"
                    onClick={() => setActive(t.key)}
                    className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[13px] font-medium transition-all ${
                      isActive ? 'bg-white text-black shadow-sm' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Icon size={14} />
                    {t.label}
                  </button>
                </div>
              )
            })}
          </div>

          {/* Mobile 2x2 */}
          <div className="md:hidden grid grid-cols-2 gap-1 max-w-md mx-auto rounded-lg bg-gray-100 p-1">
            {TABS.map((t) => {
              const Icon = t.icon
              const isActive = active === t.key
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setActive(t.key)}
                  className={`flex items-center justify-center gap-1.5 rounded-md px-3 py-2 text-[13px] font-medium transition-all ${
                    isActive ? 'bg-white text-black shadow-sm' : 'text-gray-600'
                  }`}
                >
                  <Icon size={14} />
                  {t.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Video + Overlay */}
        <div
          className="stellar-fade-in-up relative mt-8 h-[400px] md:h-[500px] overflow-hidden rounded-3xl"
          style={{ opacity: 0, animationDelay: '0.7s' }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
            src={VIDEO_URL}
          />
          {overlayFor(active)}
        </div>

        {/* Company logos */}
        <div
          className="stellar-fade-in-up mt-24 flex flex-wrap items-center justify-center gap-10 text-gray-400"
          style={{ opacity: 0, animationDelay: '0.8s' }}
        >
          <span className="text-xl font-bold tracking-tight">INTERSCOPE</span>
          <span className="text-xl font-bold tracking-tight">SPOTIFY</span>
          <span className="text-xl font-semibold tracking-wide">Nexera</span>
          <span className="font-serif text-2xl italic">M3</span>
          <span className="flex items-center gap-2 text-lg font-semibold">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300">
              LC
            </span>
            LAURA COLE
          </span>
          <span className="text-lg font-medium">vertex</span>
        </div>
      </section>
    </div>
  )
}
