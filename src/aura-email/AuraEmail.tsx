/* ============================================================
 *  Aura — AI 原生邮件客户端落地页
 *  基于 16.md:深色玻璃质感 + 渐变标题 + macOS 菜单栏 + 收件箱 mockup
 *  字体:Inter(全局 @fontsource)
 *  Tech:React + TS + Tailwind + motion/react + lucide-react
 * ============================================================ */
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Search,
  ChevronRight,
  Reply,
  Forward,
  Archive,
  Trash2,
  MoreHorizontal,
  Paperclip,
  Inbox as InboxIcon,
  Star,
  Send,
  FileEdit,
  ArchiveX,
  Trash,
  Menu as MenuIcon,
  Check,
} from 'lucide-react'

/* ===== 背景视频(本地,原 CloudFront 已下载) ===== */
const BG_VIDEO = '/videos/c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4'

/* ===== 导航链接 ===== */
const NAV_LINKS = ['Solutions', 'Pricing', 'Blog', 'Documentation', 'Careers']
const MENU_ITEMS = ['File', 'Edit', 'View', 'Go', 'Window', 'Help']

/* ===== 收件箱数据 ===== */
const SIDEBAR_NAV = [
  { icon: InboxIcon, label: 'Inbox', count: 12, active: true },
  { icon: Star, label: 'Starred', count: 3 },
  { icon: Send, label: 'Sent' },
  { icon: FileEdit, label: 'Drafts', count: 2 },
  { icon: ArchiveX, label: 'Archive' },
  { icon: Trash, label: 'Trash' },
]
const LABELS = [
  { name: 'Work', color: '#00d2ff' },
  { name: 'Personal', color: '#A4F4FD' },
  { name: 'Travel', color: '#f59e0b' },
  { name: 'Finance', color: '#10b981' },
]
const MESSAGES = [
  {
    sender: 'Linear',
    avatar: 'L',
    subject: 'Weekly product digest',
    preview: 'Your team shipped 23 issues this week...',
    time: '9:41 AM',
    unread: true,
    active: true,
  },
  {
    sender: 'Sophia Chen',
    avatar: 'S',
    subject: 'Re: Q3 roadmap review',
    preview: 'Thanks for sending the deck over. I had a few thoughts...',
    time: '8:12 AM',
    unread: true,
  },
  {
    sender: 'Figma',
    avatar: 'F',
    subject: 'Marcus commented on your file',
    preview: 'Love the new direction on the landing hero.',
    time: 'Yesterday',
  },
  {
    sender: 'Stripe',
    avatar: 'S',
    subject: 'Payout of $12,480.00 sent',
    preview: 'Your payout is on its way to your bank...',
    time: 'Yesterday',
  },
  {
    sender: 'Vercel',
    avatar: 'V',
    subject: 'Deployment ready for aura-web',
    preview: 'Preview is live at aura-web-g3f.vercel.app',
    time: 'Mon',
  },
  {
    sender: 'GitHub',
    avatar: 'G',
    subject: '[aura/core] PR #482 approved',
    preview: 'david-lim approved your pull request.',
    time: 'Mon',
  },
]
const LOGOS = ['Linear', 'Vercel', 'Figma', 'Stripe', 'Ramp', 'Notion', 'Loom', 'Arc']
const TESTIMONIALS = [
  {
    quote:
      'Aura gave our leadership team four hours of their week back. It reads like email from the future.',
    name: 'Parker Wilf',
    role: 'Group Product Manager',
    company: 'MERCURY',
  },
  {
    quote:
      'The command palette alone has changed how I process messages. I can\u2019t imagine going back to a traditional client.',
    name: 'Andrew von Rosenbach',
    role: 'Senior Engineering Program Manager',
    company: 'COHERE',
  },
  {
    quote:
      'Triage that actually understands context. Our team stopped dreading Monday morning inboxes.',
    name: 'Mathies Christensen',
    role: 'Engineering Manager',
    company: 'LUNAR',
  },
]
const TRIAGE_GROUPS = [
  {
    label: 'Priority',
    count: 4,
    color: '#ffffff',
    items: ['Sophia Chen — Q3 review', 'David Lim — contract signoff'],
  },
  {
    label: 'Follow-up',
    count: 7,
    color: '#e5e5e5',
    items: ['Marcus — design review', 'Figma — comment thread'],
  },
  {
    label: 'Updates',
    count: 18,
    color: '#a3a3a3',
    items: ['Vercel — deploy ready', 'GitHub — PR #482 merged'],
  },
  {
    label: 'Archived',
    count: 13,
    color: '#525252',
    items: ['Stripe payout · Newsletter · Receipts'],
  },
]
const PLANS = [
  {
    name: 'Free',
    priceMonthly: 'Free',
    priceYearly: 'Free',
    desc: 'For creators taking their first steps with Forma.',
    features: [
      'Up to 3 projects in the cloud',
      'Image export up to 1080p',
      'Basic editing tools',
      'Free templates and icons',
      'Access via web and mobile app',
    ],
    pro: false,
  },
  {
    name: 'Standard',
    priceMonthly: '$9,99/m',
    priceYearly: '$99,99/y',
    desc: 'For freelancers and small teams who need more freedom and flexibility.',
    features: [
      'Up to 50 projects in the cloud',
      'Export up to 4K',
      'Advanced editing toolkit',
      'Team collaboration (up to 5 members)',
      'Access to premium template library',
    ],
    pro: false,
  },
  {
    name: 'Pro',
    priceMonthly: '$19,99/m',
    priceYearly: '$199,99/y',
    desc: 'For studios, agencies, and professional creators working with brands.',
    features: [
      'Unlimited projects',
      'Export up to 8K + animations',
      'AI-powered content generation tools',
      'Unlimited team members',
      'Brand customization',
    ],
    pro: true,
  },
]

/* ============================================================
 *  AppleLogo — 内联 SVG Apple 标志
 * ============================================================ */
function AppleLogo({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 384 512"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  )
}

/* ============================================================
 *  LogoMark — 抽象 4 象限曲线标志
 * ============================================================ */
function LogoMark({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 256 256"
      fill="white"
      aria-hidden="true"
    >
      <path d="M 0 128 C 70.692 128 128 185.308 128 256 L 64 256 C 64 220.654 35.346 192 0 192 Z M 256 192 C 220.654 192 192 220.654 192 256 L 128 256 C 128 185.308 185.308 128 256 128 Z M 128 0 C 128 70.692 70.692 128 0 128 L 0 64 C 35.346 64 64 35.346 64 0 Z M 192 0 C 192 35.346 220.654 64 256 64 L 256 128 C 185.308 128 128 70.692 128 0 Z" />
    </svg>
  )
}

/* ============================================================
 *  AppleButton — 圆形白胶囊(Apple 标志 + 标签 + 箭头)
 * ============================================================ */
function AppleButton({
  label = 'Download Aura',
  full = false,
}: {
  label?: string
  full?: boolean
}) {
  return (
    <button
      type="button"
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium text-sm px-5 py-3 transition-all hover:bg-white/90 active:scale-[0.98] ${
        full ? 'w-full' : ''
      }`}
    >
      <AppleLogo className="w-4 h-4" />
      {label}
      <ChevronRight
        size={14}
        className="transition-transform group-hover:translate-x-[1px]"
      />
    </button>
  )
}

/* ============================================================
 *  SectionEyebrow — 小圆点 + 标签 + 可选 tag 胶囊
 * ============================================================ */
function SectionEyebrow({
  label,
  tag,
}: {
  label: string
  tag?: string
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-1.5 h-1.5 rounded-full bg-white" />
      <span className="text-xs text-white/60 font-medium tracking-wide">{label}</span>
      {tag && (
        <span className="px-2 py-0.5 rounded-full border border-white/10 text-white/50 text-xs">
          {tag}
        </span>
      )}
    </div>
  )
}

/* ============================================================
 *  AuraEmail — 主入口
 * ============================================================ */
export default function AuraEmail() {
  const [yearly, setYearly] = useState(false)
  const [_menuOpen, setMenuOpen] = useState(false)

  const gradientStyle: React.CSSProperties = {
    backgroundImage:
      'linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)',
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    WebkitTextFillColor: 'transparent',
    filter: 'url(#c3-noise)',
  }

  return (
    <div
      data-theme="aura-email"
      className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white"
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      <style>{`
        [data-theme='aura-email'] .liquid-glass {
          background: rgba(255,255,255,0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: none;
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
          position: relative;
          overflow: hidden;
        }
        [data-theme='aura-email'] .liquid-glass::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.4px;
          background: linear-gradient(180deg,
            rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
            rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
            rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        [data-theme='aura-email'] .animate-shiny {
          animation: aura-shiny 6s linear infinite;
        }
        @keyframes aura-shiny {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        [data-theme='aura-email'] ::selection {
          background: rgba(61,129,227,0.3);
        }

        /* ===== Pricing 自定义 CSS ===== */
        [data-theme='aura-email'] .c3-pricing-section {
          position: relative;
          padding: 40px 20px 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow-x: hidden;
        }
        [data-theme='aura-email'] .c3-watermark-container {
          position: relative;
          width: 100%;
          max-width: 1100px;
          text-align: center;
          margin-top: 40px;
          z-index: 2;
        }
        [data-theme='aura-email'] .c3-watermark-main {
          font-size: 9rem;
          font-weight: 800;
          line-height: 0.9;
          letter-spacing: -0.05em;
          filter: url(#c3-noise-pricing);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        [data-theme='aura-email'] .c3-watermark-line-1 { color: #fff; }
        [data-theme='aura-email'] .c3-watermark-line-2 {
          background: linear-gradient(to right, #091020 0%, #0B2551 25%, #A4F4FD 65%, #00d2ff 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
        }
        [data-theme='aura-email'] .c3-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          width: 100%;
          max-width: 1100px;
          margin-top: 60px;
          transform: translateX(20px);
          position: relative;
          z-index: 3;
        }
        [data-theme='aura-email'] .c3-card {
          background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4));
          backdrop-filter: blur(14px) brightness(0.91);
          border: 1px solid rgba(255,255,255,1);
          border-radius: 44px;
          padding: 50px 24px;
          min-height: 580px;
          display: flex;
          flex-direction: column;
          transition: all 0.6s cubic-bezier(.22,1,.36,1);
          overflow: hidden;
          position: relative;
        }
        [data-theme='aura-email'] .c3-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%);
          pointer-events: none;
        }
        [data-theme='aura-email'] .c3-card:hover {
          background: rgba(15,15,15,0.6);
          border-color: rgba(34,211,238,0.7);
          transform: translateY(-12px) scale(1.01);
        }
        [data-theme='aura-email'] .c3-card-pro {
          background: linear-gradient(135deg, rgba(0,0,0,0.85), rgba(0,0,0,0.55));
        }
        [data-theme='aura-email'] .c3-tier-small {
          font-size: 1.1rem;
          font-weight: 400;
          color: rgba(255,255,255,0.6);
        }
        [data-theme='aura-email'] .c3-tier-large {
          font-size: 2.8rem;
          font-weight: 500;
          letter-spacing: -0.02em;
          color: #fff;
          margin-top: 8px;
        }
        [data-theme='aura-email'] .c3-desc {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.45);
          min-height: 3.2em;
          margin-top: 16px;
          margin-bottom: 40px;
          line-height: 1.5;
        }
        [data-theme='aura-email'] .c3-list li {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          font-size: 0.92rem;
          color: rgba(255,255,255,0.8);
          margin-bottom: 18px;
          line-height: 1.4;
        }
        [data-theme='aura-email'] .c3-check {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        [data-theme='aura-email'] .c3-btn {
          background: #fff;
          color: #000;
          padding: 10px 32px;
          border-radius: 100px;
          font-weight: 600;
          font-size: 0.88rem;
          margin-top: auto;
          border: none;
          cursor: pointer;
          align-self: center;
          transition: all 0.3s cubic-bezier(.22,1,.36,1);
        }
        [data-theme='aura-email'] .c3-btn:hover {
          background: #f5f5f5;
          transform: scale(1.02);
          box-shadow: 0 8px 24px rgba(255,255,255,0.15);
        }
        [data-theme='aura-email'] .c3-toggle-wrap {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          width: 100%;
          max-width: 1100px;
          margin-top: 32px;
          padding-right: 20px;
        }
        [data-theme='aura-email'] .c3-toggle {
          width: 52px;
          height: 28px;
          background: #fff;
          border-radius: 100px;
          position: relative;
          cursor: pointer;
          border: none;
          transition: background 0.3s cubic-bezier(.4,0,.2,1);
          padding: 0;
        }
        [data-theme='aura-email'] .c3-toggle-knob {
          width: 20px;
          height: 20px;
          background: #000;
          border-radius: 50%;
          position: absolute;
          top: 4px;
          left: 4px;
          transition: all 0.3s cubic-bezier(.4,0,.2,1);
        }
        [data-theme='aura-email'] .c3-toggle.active { background: rgba(255,255,255,0.2); }
        [data-theme='aura-email'] .c3-toggle.active .c3-toggle-knob {
          transform: translateX(24px);
          background: #fff;
        }
        @media (max-width: 1024px) {
          [data-theme='aura-email'] .c3-watermark-main {
            font-size: 3.5rem;
            filter: none;
          }
          [data-theme='aura-email'] .c3-watermark-line-2 {
            background: none;
            -webkit-text-fill-color: #00d2ff;
            color: #00d2ff;
          }
          [data-theme='aura-email'] .c3-grid {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            transform: none;
            width: 100vw;
            padding: 0 20px;
            gap: 16px;
            scrollbar-width: none;
          }
          [data-theme='aura-email'] .c3-grid::-webkit-scrollbar { display: none; }
          [data-theme='aura-email'] .c3-card {
            flex: 0 0 320px;
            scroll-snap-align: center;
          }
          [data-theme='aura-email'] .c3-toggle-wrap {
            justify-content: center;
            padding-right: 0;
          }
        }
      `}</style>

      {/* ===== 根 SVG 噪点滤镜(标题用) ===== */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="c3-noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              stitchTiles="stitch"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0"
            />
            <feComposite in2="SourceGraphic" operator="in" result="noise" />
            <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
          </filter>
        </defs>
      </svg>

      {/* ===== 全屏背景视频 ===== */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover pointer-events-none"
          src={BG_VIDEO}
        />
      </div>

      {/* ===== 容器边缘引导线 ===== */}
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+36rem)] w-px bg-white/10 z-[5]" />
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+36rem)] w-px bg-white/10 z-[5]" />

      {/* ===== 导航栏 ===== */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 max-w-6xl mx-auto px-6 flex items-center justify-between py-6"
      >
        <LogoMark className="w-8 h-8" />
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link}
              href="#"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="text-white/70 text-sm font-medium hover:text-white transition-colors"
            >
              {link}
            </motion.a>
          ))}
        </div>
        <div className="hidden md:block">
          <AppleButton />
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <MenuIcon className="w-4 h-4 text-white" />
        </button>
      </motion.nav>

      {/* ===== Hero ===== */}
      <section className="relative z-10 pt-16 md:pt-28 pb-20 text-center flex flex-col items-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-7xl font-semibold tracking-tight leading-[0.9]"
        >
          <span className="block">Your email.</span>
          <span className="block animate-shiny" style={gradientStyle}>
            Revitalized
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-8 text-white/60 max-w-md text-base leading-[1.5]"
        >
          Aura is the premier inbox platform for the current era. It leverages
          powerful AI to organize, prioritize, and refine your messages into
          total clarity.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-8 flex flex-col items-center gap-3"
        >
          <AppleButton />
          <p className="text-xs text-white/40">Download for Intel / Apple Silicon</p>
        </motion.div>
      </section>

      {/* ===== macOS 菜单栏条 ===== */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="relative z-10 h-10 bg-black/40 backdrop-blur-md border-t border-b border-white/10"
      >
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <AppleLogo className="w-3.5 h-3.5" />
            <span className="font-bold text-white">Aura</span>
            {MENU_ITEMS.map((item, i) => (
              <span
                key={item}
                className={`text-white/70 ${
                  i > 3 ? 'hidden md:inline' : i > 2 ? 'hidden sm:inline' : ''
                }`}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <Search className="w-3.5 h-3.5" />
            <span>Wed May 6 1:09 PM</span>
          </div>
        </div>
      </motion.div>

      {/* ===== 收件箱 mockup ===== */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0e1014]/90 backdrop-blur-2xl"
        >
          {/* 标题栏 */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="text-xs text-white/50">Aura — Inbox</span>
            <span className="w-12" />
          </div>

          {/* 主体网格 */}
          <div className="grid grid-cols-12 h-[520px]">
            {/* 侧边栏 */}
            <aside className="col-span-3 border-r border-white/10 bg-black/30 p-4">
              <button
                type="button"
                className="w-full flex items-center gap-2 rounded-lg bg-white text-black text-xs font-semibold px-3 py-2 mb-4"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Compose with Aura
              </button>
              <nav className="flex flex-col gap-0.5">
                {SIDEBAR_NAV.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-xs transition-colors ${
                      item.active
                        ? 'bg-white/10 text-white'
                        : 'text-white/60 hover:bg-white/5'
                    }`}
                  >
                    <item.icon className="w-3.5 h-3.5" />
                    <span className="flex-1 text-left">{item.label}</span>
                    {item.count && (
                      <span className="text-white/40">{item.count}</span>
                    )}
                  </button>
                ))}
              </nav>
              <div className="mt-6">
                <p className="text-[10px] uppercase tracking-wider text-white/40 mb-2">
                  Labels
                </p>
                <div className="flex flex-col gap-1.5">
                  {LABELS.map((label) => (
                    <div
                      key={label.name}
                      className="flex items-center gap-2 text-xs text-white/70"
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: label.color }}
                      />
                      {label.name}
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* 消息列表 */}
            <div className="col-span-4 border-r border-white/10">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 text-white/40">
                <Search className="w-3.5 h-3.5" />
                <span className="text-xs">Search mail</span>
              </div>
              <div className="overflow-y-auto">
                {MESSAGES.map((msg, i) => (
                  <div
                    key={i}
                    className={`px-4 py-3 border-b border-white/5 cursor-pointer transition-colors ${
                      msg.active ? 'bg-white/10' : 'hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                        {msg.unread && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff]" />
                        )}
                        {msg.sender}
                      </span>
                      <span className="text-[10px] text-white/40">{msg.time}</span>
                    </div>
                    <p className="text-xs text-white/80 mt-1 truncate">
                      {msg.subject}
                    </p>
                    <p className="text-[10px] text-white/40 mt-0.5 truncate">
                      {msg.preview}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 阅读区 */}
            <div className="col-span-5 flex flex-col">
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
                <div className="flex items-center gap-1">
                  {[Reply, Forward, Archive, Trash2].map((Icon, i) => (
                    <button
                      key={i}
                      type="button"
                      className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center text-white/60"
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center text-white/60"
                >
                  <MoreHorizontal className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-5">
                <h3 className="text-base font-semibold text-white">
                  Weekly product digest
                </h3>
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00d2ff] to-[#0B2551] flex items-center justify-center text-xs font-semibold text-white">
                    L
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-white">Linear</p>
                    <p className="text-[10px] text-white/40">
                      to me · 9:41 AM
                    </p>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#00d2ff]/20 text-[#A4F4FD] text-[10px]">
                    Work
                  </span>
                </div>

                <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-3.5 h-3.5" style={{ color: '#A4F4FD' }} />
                    <span className="text-xs font-semibold text-white">
                      Summary by Aura
                    </span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Your team closed 23 issues, merged 14 PRs, and shipped 2
                    features. Top contributor: Marcus. No action needed.
                  </p>
                </div>

                <div className="mt-5 space-y-3 text-xs text-white/50 leading-relaxed">
                  <p>Hi team,</p>
                  <p>
                    Here is your weekly digest of everything happening across
                    your projects. This was a strong week with significant
                    progress on the Q3 roadmap.
                  </p>
                  <p>
                    Twenty-three issues were closed, fourteen pull requests were
                    merged, and two customer-facing features went out. The
                    velocity trend continues to climb.
                  </p>
                  <p>
                    Let me know if you would like a deeper breakdown by project
                    or contributor.
                  </p>
                  <p>— The Linear team</p>
                </div>

                <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-white/70">
                  <Paperclip className="w-3.5 h-3.5" />
                  digest-may-6.pdf
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===== Triage 功能区 ===== */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionEyebrow label="Triage" tag="AI-native" />
            <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
              Clear your inbox
              <br />
              in a single pass.
            </h2>
            <p className="mt-6 text-white/60 text-base leading-[1.6] max-w-md">
              Aura reads every message, understands intent, and routes the noise
              away from the signal. Focus on what moves your day forward — the
              rest handles itself.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                'Auto-categorize',
                'Snooze for later',
                'Silent newsletters',
                'One-tap unsubscribe',
              ].map((chip) => (
                <span
                  key={chip}
                  className="text-xs text-white/70 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="liquid-glass rounded-2xl p-5"
          >
            <p className="text-xs text-white/50 mb-4">
              Today · 42 messages triaged
            </p>
            <div className="flex flex-col gap-3">
              {TRIAGE_GROUPS.map((group) => (
                <div
                  key={group.label}
                  className="liquid-glass rounded-lg p-3"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-sm font-semibold"
                      style={{ color: group.color }}
                    >
                      {group.label}
                    </span>
                    <span className="text-xs text-white/40">
                      {group.count}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {group.items.map((item) => (
                      <li key={item} className="text-xs text-white/60">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== Logo 云 ===== */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-20">
        <p className="text-center text-xs uppercase tracking-widest text-white/40">
          Trusted by the world's most thoughtful teams
        </p>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {LOGOS.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-center text-sm font-semibold tracking-tight text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10">
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="liquid-glass rounded-2xl p-6"
            >
              <blockquote className="text-sm text-white/80 leading-[1.6]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-white/10">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-white/50">{t.role}</p>
                <p className="text-xs text-white font-semibold tracking-wide mt-1">
                  {t.company}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* ===== Pricing ===== */}
      <section className="c3-pricing-section relative z-10">
        <svg className="absolute w-0 h-0" aria-hidden="true">
          <defs>
            <filter id="c3-noise-pricing">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.5"
                numOctaves="2"
                stitchTiles="stitch"
              />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.075" />
              </feComponentTransfer>
              <feComposite in2="SourceGraphic" operator="in" result="noise" />
              <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
            </filter>
          </defs>
        </svg>

        <div className="c3-watermark-container">
          <div className="c3-watermark-main">
            <span className="c3-watermark-line-1">Your email.</span>
            <span className="c3-watermark-line-2">Revitalized</span>
          </div>
        </div>

        <div className="c3-grid">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`c3-card ${plan.pro ? 'c3-card-pro' : ''}`}
            >
              <div className="c3-tier-small">{plan.name}</div>
              <div className="c3-tier-large">
                {yearly ? plan.priceYearly : plan.priceMonthly}
              </div>
              <p className="c3-desc">{plan.desc}</p>
              <ul className="c3-list">
                {plan.features.map((feat) => (
                  <li key={feat}>
                    <span className="c3-check">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <button type="button" className="c3-btn">
                Choose Plan
              </button>
            </div>
          ))}
        </div>

        <div className="c3-toggle-wrap">
          <span className="text-xs text-white/60">Yearly</span>
          <button
            type="button"
            className={`c3-toggle ${yearly ? 'active' : ''}`}
            onClick={() => setYearly((v) => !v)}
            aria-label="Toggle yearly billing"
          >
            <span className="c3-toggle-knob" />
          </button>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="liquid-glass relative overflow-hidden rounded-3xl px-8 py-16 md:py-24 text-center"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(600px circle at 50% 0%, rgba(255,255,255,0.15), transparent 70%)',
              opacity: 0.3,
            }}
          />
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
              Close the tabs.
              <br />
              Open your day.
            </h2>
            <p className="mt-6 text-white/60 max-w-md mx-auto text-sm leading-[1.6]">
              Join thousands of builders, founders, and operators who treat email
              like a tool — not an obligation.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <AppleButton label="Download Aura" />
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 text-white text-sm font-medium px-5 py-3 hover:bg-white/5 transition-colors"
              >
                Talk to sales
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
