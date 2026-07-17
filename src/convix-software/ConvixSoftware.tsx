/* ============================================================
 *  Convix Software — PR-agency SaaS hero
 *  字体:Inter(正文)+ Instrument Serif(斜体点缀)
 *  核心:圆角容器裁剪背景视频 + 浮动胶囊导航 + 仪表板预览(Gauge)
 * ============================================================ */
import { useState } from 'react'
import {
  ChevronDown,
  ChevronRight,
  ShoppingCart,
  Menu,
  TrendingDown,
  TrendingUp,
  X,
} from 'lucide-react'

import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'

/* ===== 资源 ===== */
const VIDEO_URL = '/videos/9e9d7f84-9277-41f4-ab10-59172d89e6be.mp4'
const POSTER_URL = '/images/convix-poster.jpg'

/* ===== 主题色 ===== */
const ORANGE = '#ef4d23'
const DARK_CTA = '#0b0f1a'

/* ===== 导航链接 ===== */
const NAV_LINKS = ['Home', 'Features', 'About', 'Pages'] as const

/* ============================================================
 *  ConvixFlower — 8 瓣花朵 SVG logo(8 圆 + 中心圆)
 * ============================================================ */
function ConvixFlower() {
  const petals: { cx: number; cy: number }[] = []
  const center = 16
  const r = 10
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2
    petals.push({
      cx: center + Math.cos(angle) * r,
      cy: center + Math.sin(angle) * r,
    })
  }
  return (
    <svg
      viewBox="0 0 32 32"
      className="w-7 h-7 sm:w-8 sm:h-8 shrink-0"
      aria-hidden="true"
    >
      {petals.map((p, i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r={3.5} fill={ORANGE} />
      ))}
      <circle cx={center} cy={center} r={3.5} fill={ORANGE} />
    </svg>
  )
}

/* ============================================================
 *  Gauge — 180° 弧形仪表(40 tick marks)
 * ============================================================ */
function Gauge({
  value,
  color = ORANGE,
  showLabels = false,
  min,
  max,
}: {
  value: number
  color?: string
  showLabels?: boolean
  min?: string
  max?: string
}) {
  const ticks = 40
  const activeCount = Math.round((value / 100) * ticks)
  const cx = 100
  const cy = 100
  const rOuter = 80
  const rInner = 70

  const lines = Array.from({ length: ticks }, (_, i) => {
    // 从 π 起扫到 2π(180° 弧)
    const angle = Math.PI + (i / (ticks - 1)) * Math.PI
    const x1 = cx + Math.cos(angle) * rInner
    const y1 = cy + Math.sin(angle) * rInner
    const x2 = cx + Math.cos(angle) * rOuter
    const y2 = cy + Math.sin(angle) * rOuter
    const active = i < activeCount
    return (
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={active ? color : '#d4d4d8'}
        strokeWidth={2.5}
        strokeLinecap="round"
      />
    )
  })

  return (
    <div className="w-full flex flex-col items-center">
      <svg
        viewBox="0 0 200 120"
        style={{ maxWidth: '260px', width: '100%' }}
        aria-hidden="true"
      >
        {lines}
        <text
          x={100}
          y={105}
          textAnchor="middle"
          fontSize={22}
          fontWeight={600}
          fill="#000"
        >
          {value}%
        </text>
      </svg>
      {showLabels && (
        <div className="w-full flex justify-between text-[11px] text-neutral-500 px-2 -mt-1">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      )}
    </div>
  )
}

/* ============================================================
 *  Card1 — Clicks 卡片
 * ============================================================ */
function ClicksCard() {
  const [tab, setTab] = useState<'impressions' | 'clicks'>('impressions')
  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-3">
      <div className="flex items-center gap-2 text-[13px]">
        <span className="font-semibold" style={{ color: ORANGE }}>
          Clicks
        </span>
        <span className="text-neutral-500">This Month</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[28px] font-semibold text-neutral-900">
          6,896
        </span>
        <span className="inline-flex items-center gap-1 bg-red-50 text-red-600 rounded-full px-2 py-0.5 text-[11px]">
          <TrendingDown size={11} />
          -3,382 (33%)
        </span>
      </div>
      <p className="text-[11px] text-neutral-500">Compared to yesterday</p>
      <p className="text-center text-[11px] text-neutral-500 mt-1">
        Month Target achieved
      </p>
      <Gauge value={92} color={ORANGE} showLabels min="389K" max="425K" />
      <div className="bg-neutral-100 rounded-full p-1 flex mt-1">
        <button
          type="button"
          onClick={() => setTab('impressions')}
          className={`flex-1 text-[11px] font-medium py-1.5 rounded-full transition-all ${
            tab === 'impressions'
              ? 'bg-white text-neutral-900 shadow-sm'
              : 'text-neutral-500'
          }`}
        >
          Impressions
        </button>
        <button
          type="button"
          onClick={() => setTab('clicks')}
          className={`flex-1 text-[11px] font-medium py-1.5 rounded-full transition-all ${
            tab === 'clicks'
              ? 'bg-white text-neutral-900 shadow-sm'
              : 'text-neutral-500'
          }`}
        >
          Clicks
        </button>
      </div>
    </div>
  )
}

/* ============================================================
 *  Card2 — Form 卡片
 * ============================================================ */
function FormCard() {
  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-3">
      <div className="flex flex-col gap-3">
        {/* dropdown 1 */}
        <div className="flex flex-col gap-1">
          <label className="text-[12px] text-neutral-700">
            Show figures for
          </label>
          <button
            type="button"
            className="flex items-center justify-between border border-neutral-200 rounded-lg px-3 py-2 text-[13px] text-neutral-800"
          >
            This month
            <ChevronDown size={14} />
          </button>
        </div>
        {/* dropdown 2 */}
        <div className="flex flex-col gap-1">
          <label className="text-[12px] text-neutral-700">
            Compare period by
          </label>
          <button
            type="button"
            className="flex items-center justify-between border border-neutral-200 rounded-lg px-3 py-2 text-[13px] text-neutral-800"
          >
            Month-to-date (MTD)
            <ChevronDown size={14} />
          </button>
        </div>
        {/* input 1 */}
        <div className="flex flex-col gap-1">
          <label className="text-[12px] text-neutral-700">
            Ste targets (This month)
          </label>
          <div className="flex items-center border border-neutral-200 rounded-lg px-3 py-2 text-[13px] text-neutral-800">
            <span className="text-neutral-500 mr-1">#</span>
            <input
              defaultValue={10}
              className="w-full outline-none bg-transparent"
            />
          </div>
        </div>
        {/* input 2 */}
        <div className="flex flex-col gap-1">
          <label className="text-[12px] text-neutral-700">
            Ste targets (This year)
          </label>
          <div className="flex items-center border border-neutral-200 rounded-lg px-3 py-2 text-[13px] text-neutral-800">
            <span className="text-neutral-500 mr-1">#</span>
            <input
              defaultValue={100}
              className="w-full outline-none bg-transparent"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-1">
        <button
          type="button"
          className="text-white text-[13px] font-medium rounded-lg px-5 py-2"
          style={{ background: ORANGE }}
        >
          Save
        </button>
        <button
          type="button"
          className="text-[13px] text-neutral-700 underline"
        >
          Cancel
        </button>
        <button
          type="button"
          aria-label="close"
          className="ml-auto text-neutral-400 hover:text-neutral-700"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}

/* ============================================================
 *  Card3 — Video Starts 卡片
 * ============================================================ */
function VideoStartsCard() {
  const [tab, setTab] = useState<'video-clicks' | 'video-starts'>(
    'video-clicks'
  )
  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-3">
      <div className="flex items-center gap-2 text-[13px]">
        <span className="font-semibold" style={{ color: ORANGE }}>
          Video Starts
        </span>
        <span className="text-neutral-500">today</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[28px] font-semibold text-neutral-900">0</span>
        <span className="inline-flex items-center gap-1 bg-neutral-100 text-neutral-600 rounded-full px-2 py-0.5 text-[11px]">
          <TrendingUp size={11} />
          0
        </span>
      </div>
      <p className="text-[11px] text-neutral-500">Compared to yesterday</p>
      <Gauge value={68} color="#9ca3af" />
      <div className="bg-neutral-100 rounded-full p-1 flex mt-1">
        <button
          type="button"
          onClick={() => setTab('video-clicks')}
          className={`flex-1 text-[11px] font-medium py-1.5 rounded-full transition-all ${
            tab === 'video-clicks'
              ? 'bg-white text-neutral-900 shadow-sm'
              : 'text-neutral-500'
          }`}
        >
          Video Clicks
        </button>
        <button
          type="button"
          onClick={() => setTab('video-starts')}
          className={`flex-1 text-[11px] font-medium py-1.5 rounded-full transition-all ${
            tab === 'video-starts'
              ? 'bg-white text-neutral-900 shadow-sm'
              : 'text-neutral-500'
          }`}
        >
          Video Starts
        </button>
      </div>
    </div>
  )
}

/* ============================================================
 *  ConvixSoftware — 主入口
 * ============================================================ */
export default function ConvixSoftware() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div
      data-theme="convix-software"
      className="min-h-screen w-full bg-[#ededed] p-3 sm:p-4"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ===== Hero 圆角容器(裁剪一切) ===== */}
      <div className="relative w-full h-[calc(100vh-24px)] sm:h-[calc(100vh-32px)] overflow-hidden bg-[#d9d9d9] rounded-2xl sm:rounded-3xl">
        {/* ===== 背景视频 ===== */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={POSTER_URL}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src={VIDEO_URL}
        />
        {/* 视频上方白罩 */}
        <div className="absolute inset-0 bg-white/10" />

        {/* ===== 前景内容层 ===== */}
        <div className="relative z-10">
          {/* ===== 顶部导航(浮动胶囊) ===== */}
          <div className="flex justify-center pt-4 sm:pt-6 px-3 sm:px-4">
            <div className="bg-white rounded-full shadow-sm border border-neutral-200 pl-2 pr-2 py-2 w-full max-w-[760px] relative flex items-center">
              {/* Logo */}
              <ConvixFlower />

              {/* 桌面导航 */}
              <div className="hidden md:flex items-center gap-6 ml-3 text-[14px]">
                <a href="#" className="flex items-center gap-1.5 text-neutral-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-black" />
                  Home
                </a>
                <a href="#" className="text-neutral-800 hover:opacity-70">
                  Features
                </a>
                <a href="#" className="text-neutral-800 hover:opacity-70">
                  About
                </a>
                <a
                  href="#"
                  className="flex items-center gap-1 hover:opacity-70"
                  style={{ color: ORANGE }}
                >
                  Pages
                  <ChevronDown size={14} strokeWidth={2.5} />
                </a>
              </div>

              {/* 右侧 CTA */}
              <div className="ml-auto flex items-center gap-2">
                <ShoppingCart
                  size={18}
                  className="hidden md:block text-neutral-700"
                />
                <button
                  type="button"
                  className="text-white rounded-full pl-4 pr-2 py-2 flex items-center gap-2 text-[13px] font-medium"
                  style={{ background: ORANGE }}
                >
                  <span className="hidden sm:inline">Get early access</span>
                  <span className="sm:hidden">Early access</span>
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <ChevronRight size={14} />
                  </span>
                </button>
                {/* 移动端汉堡 */}
                <button
                  type="button"
                  aria-label="Toggle menu"
                  className="md:hidden p-1 text-neutral-800"
                  onClick={() => setMenuOpen((v) => !v)}
                >
                  <Menu size={20} />
                </button>
              </div>

              {/* 移动端下拉 */}
              {menuOpen && (
                <div className="absolute top-full left-2 right-2 mt-2 bg-white rounded-2xl shadow-lg border border-neutral-200 p-3 z-20 flex flex-col gap-3 md:hidden">
                  {NAV_LINKS.map((l) => (
                    <a
                      key={l}
                      href="#"
                      className="text-[14px] text-neutral-800"
                      onClick={() => setMenuOpen(false)}
                    >
                      {l}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ===== Hero 居中内容 ===== */}
          <div className="flex flex-col items-center px-4 pt-10 sm:pt-16 pb-8 sm:pb-12 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow-sm text-[13px]">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: ORANGE }}
              />
              Convix Software
            </div>

            {/* Headline */}
            <h1
              className="mt-5 sm:mt-6 max-w-4xl text-neutral-900"
              style={{
                fontSize: 'clamp(36px, 8vw, 72px)',
                lineHeight: 1.05,
                fontWeight: 500,
                letterSpacing: '-0.02em',
              }}
            >
              Shaping{' '}
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: 'italic',
                  fontWeight: 400,
                }}
              >
                Agencies
              </span>
              <br />
              of tomorrow
            </h1>

            {/* Subtitle */}
            <p
              className="mt-4 sm:mt-6 text-neutral-700 px-2"
              style={{ fontSize: 'clamp(13px, 3.5vw, 16px)' }}
            >
              The All-In-One Software Powering the Future of PR Agencies
            </p>

            {/* CTA */}
            <button
              type="button"
              className="mt-6 sm:mt-8 inline-flex items-center gap-3 text-white rounded-full pl-6 sm:pl-7 pr-2 py-2 sm:py-2.5 text-[14px]"
              style={{ background: DARK_CTA }}
            >
              Get Started
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/15 flex items-center justify-center">
                <ChevronRight size={14} />
              </span>
            </button>
          </div>

          {/* ===== 仪表板预览(底部出血) ===== */}
          <div className="px-3 sm:px-4">
            <div className="bg-[#f5f2ee] rounded-3xl p-4 sm:p-6 w-full max-w-[880px] mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <ClicksCard />
                <FormCard />
                <VideoStartsCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
