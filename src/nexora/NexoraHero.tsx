/* ============================================================
 *  Nexora — SaaS 落地页 Hero(浅色 + 仪表盘预览)
 *  字体:Inter(body)+ Instrument Serif(display)
 *  核心:全屏视频背景 + 居中 Hero 内容 + Frosted Dashboard Preview
 *  Tech:React + TS + Tailwind + Framer Motion + Lucide + shadcn Button
 * ============================================================ */
import { motion } from 'framer-motion'
import {
  Bell,
  ChevronDown,
  Play,
  Plus,
  Search,
  MoreHorizontal,
  Sparkles,
} from 'lucide-react'
import { Button } from '../components/ui/button'

/* ===== 背景视频(本地,原 CloudFront 已下载至 public/videos/) ===== */
const BG_VIDEO = '/videos/e1deeb12-8fb7-4071-a42a-60779fc64ab6.mp4'

/* ===== 导航链接 ===== */
const NAV_LINKS = ['Home', 'Pricing', 'About', 'Contact'] as const

/* ===== 侧边栏主项 ===== */
type SidebarItem = {
  label: string
  active?: boolean
  badge?: string
  chevron?: boolean
}

const SIDEBAR_MAIN: SidebarItem[] = [
  { label: 'Home', active: true },
  { label: 'Tasks', badge: '10' },
  { label: 'Transactions' },
  { label: 'Payments', chevron: true },
  { label: 'Cards' },
  { label: 'Capital' },
  { label: 'Accounts', chevron: true },
]

/* ===== 侧边栏 Workflows 分组 ===== */
const SIDEBAR_WORKFLOWS = [
  'Trake rutes',
  'Payments',
  'Notifications',
  'Settings',
] as const

/* ===== 操作按钮 ===== */
type ActionButton = {
  label: string
  primary?: boolean
}

const ACTION_BUTTONS: ActionButton[] = [
  { label: 'Send', primary: true },
  { label: 'Request' },
  { label: 'Transfer' },
  { label: 'Deposit' },
  { label: 'Pay Bill' },
  { label: 'Create Invoice' },
]

/* ===== 账户列表 ===== */
const ACCOUNTS = [
  { label: 'Credit', amount: '$98,125.50' },
  { label: 'Treasury', amount: '$6,750,200.00' },
  { label: 'Operations', amount: '$1,592,864.82' },
] as const

/* ===== 交易记录 ===== */
const TRANSACTIONS = [
  { date: 'Jul 12', desc: 'AWS', amount: '-$5,200', status: 'Pending', amber: true },
  { date: 'Jul 11', desc: 'Client Payment', amount: '+$125,000', status: 'Completed', green: true },
  { date: 'Jul 10', desc: 'Payroll', amount: '-$85,450', status: 'Completed' },
  { date: 'Jul 09', desc: 'Office Supplies', amount: '-$1,200', status: 'Completed' },
] as const

/* ============================================================
 *  DashboardPreview — 手写仪表盘(非图片)
 *  全部使用 select-none pointer-events-none,仅作视觉展示
 * ============================================================ */
function DashboardPreview() {
  return (
    <div
      className="rounded-2xl overflow-hidden p-3 md:p-4 select-none pointer-events-none"
      style={{
        background: 'rgba(255, 255, 255, 0.4)',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        boxShadow: 'var(--shadow-dashboard)',
      }}
    >
      <div className="flex bg-white/60 rounded-xl overflow-hidden text-[11px]">
        {/* ===== 侧边栏 ===== */}
        <aside className="w-40 shrink-0 border-r border-border p-3 flex flex-col gap-1">
          {SIDEBAR_MAIN.map((item) => (
            <div
              key={item.label}
              className={`flex items-center justify-between px-2 py-1.5 rounded-md ${
                item.active
                  ? 'bg-secondary text-secondary-foreground font-medium'
                  : 'text-muted-foreground'
              }`}
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="bg-accent text-accent-foreground text-[9px] px-1.5 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
              {item.chevron && (
                <ChevronDown size={10} className="opacity-50" />
              )}
            </div>
          ))}

          {/* Workflows 分组 */}
          <div className="mt-3 mb-1 text-[9px] uppercase tracking-wider text-muted-foreground/70 px-2">
            Workflows
          </div>
          {SIDEBAR_WORKFLOWS.map((label) => (
            <div
              key={label}
              className="px-2 py-1.5 rounded-md text-muted-foreground"
            >
              {label}
            </div>
          ))}
        </aside>

        {/* ===== 主内容区 ===== */}
        <main className="flex-1 bg-secondary/30 p-3 flex flex-col gap-3 min-w-0">
          {/* 顶部栏 */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-md bg-foreground text-background flex items-center justify-center font-semibold text-[10px]">
                N
              </div>
              <span className="font-medium">Nexora</span>
              <ChevronDown size={10} className="opacity-50" />
            </div>
            <div className="flex-1 max-w-[180px] flex items-center gap-1.5 bg-background border border-border rounded-md px-2 py-1 text-muted-foreground">
              <Search size={10} />
              <span className="flex-1 truncate">Search...</span>
              <kbd className="text-[9px] bg-secondary px-1 rounded">⌘K</kbd>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Move Money</span>
              <Bell size={11} className="text-muted-foreground" />
              <div className="w-5 h-5 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-[9px] font-medium">
                JB
              </div>
            </div>
          </div>

          {/* 问候 + 操作按钮 */}
          <div className="text-sm font-semibold">Welcome, Jane</div>
          <div className="flex flex-wrap gap-1.5">
            {ACTION_BUTTONS.map((btn) => (
              <button
                key={btn.label}
                type="button"
                className={`rounded-full px-2.5 py-1 text-[10px] ${
                  btn.primary
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-background border border-border text-foreground'
                }`}
              >
                {btn.label}
              </button>
            ))}
            <span className="text-[10px] text-muted-foreground self-center ml-1">
              Customize
            </span>
          </div>

          {/* 双卡片并排 */}
          <div className="flex gap-2 flex-1 min-h-0">
            {/* Balance 卡片 */}
            <div className="flex-1 basis-0 bg-background rounded-lg p-2.5 flex flex-col gap-1.5 min-w-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <span className="w-3 h-3 rounded-full border border-border flex items-center justify-center">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                  </span>
                  Mercury Balance
                </div>
                <Bell size={9} className="text-muted-foreground/60" />
              </div>
              <div className="flex items-baseline gap-0.5">
                <span className="text-base font-semibold">$8,450,190</span>
                <span className="text-xs text-muted-foreground">.32</span>
              </div>
              <div className="flex items-center gap-3 text-[9px]">
                <span className="text-muted-foreground">Last 30 Days</span>
                <span className="text-green-600">+$1.8M</span>
                <span className="text-red-600">-$900K</span>
              </div>
              {/* SVG 区域图 */}
              <svg
                viewBox="0 0 200 60"
                preserveAspectRatio="none"
                className="h-20 w-full mt-1"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="nx-balance-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(239 84% 67%)" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="hsl(239 84% 67%)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,45 C20,42 35,38 50,32 C65,26 75,30 90,28 C105,26 115,18 130,15 C145,12 160,22 175,12 C185,6 195,4 200,3 L200,60 L0,60 Z"
                  fill="url(#nx-balance-grad)"
                />
                <path
                  d="M0,45 C20,42 35,38 50,32 C65,26 75,30 90,28 C105,26 115,18 130,15 C145,12 160,22 175,12 C185,6 195,4 200,3"
                  fill="none"
                  stroke="hsl(239 84% 67%)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Accounts 卡片 */}
            <div className="flex-1 basis-0 bg-background rounded-lg p-2.5 flex flex-col gap-1.5 min-w-0">
              <div className="flex items-center justify-between">
                <span className="font-medium">Accounts</span>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Plus size={11} />
                  <MoreHorizontal size={11} />
                </div>
              </div>
              {ACCOUNTS.map((acc) => (
                <div
                  key={acc.label}
                  className="flex items-center justify-between py-3 text-xs"
                >
                  <span className="text-muted-foreground">{acc.label}</span>
                  <span className="font-medium">{acc.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 交易表格 */}
          <div className="bg-background rounded-lg p-2.5">
            <div className="font-medium mb-1.5">Recent Transactions</div>
            <table className="w-full text-[10px]">
              <thead>
                <tr className="text-muted-foreground text-left">
                  <th className="font-normal py-1">Date</th>
                  <th className="font-normal py-1">Description</th>
                  <th className="font-normal py-1 text-right">Amount</th>
                  <th className="font-normal py-1 text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {TRANSACTIONS.map((tx, i) => (
                  <tr key={i}>
                    <td className="py-1 text-muted-foreground">{tx.date}</td>
                    <td className="py-1">{tx.desc}</td>
                    <td className="py-1 text-right">{tx.amount}</td>
                    <td className="py-1 text-right">
                      <span
                        className={
                          'amber' in tx && tx.amber
                            ? 'text-amber-600'
                            : 'text-green-600'
                        }
                      >
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}

/* ============================================================
 *  Navbar
 * ============================================================ */
function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-5 font-body">
      {/* 左:Logo */}
      <a href="#" className="flex items-center gap-1.5 text-xl font-semibold tracking-tight text-foreground">
        <Sparkles size={18} className="text-foreground" />
        Nexora
      </a>

      {/* 右:导航链接 + CTA(移动端隐藏) */}
      <div className="hidden md:flex items-center gap-8">
        <nav className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>
        <Button className="rounded-full px-5 text-sm font-medium">
          Get Started
        </Button>
      </div>
    </header>
  )
}

/* ============================================================
 *  NexoraHero — 主入口
 * ============================================================ */
export default function NexoraHero() {
  return (
    <div
      data-theme="nexora"
      className="h-screen flex flex-col bg-background overflow-hidden font-body antialiased"
    >
      {/* ===== 导航 ===== */}
      <Navbar />

      {/* ===== Hero 区(含视频背景) ===== */}
      <section className="relative flex-1 flex flex-col items-center justify-start w-full overflow-hidden">
        {/* 背景视频 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={BG_VIDEO}
        />
        {/* 白色渐变遮罩(让视频淡化,突出浅色主题) */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0.5) 70%, rgba(255,255,255,0.85) 100%)',
          }}
        />

        {/* 内容层 */}
        <div className="relative z-10 flex flex-col items-center w-full px-4 md:px-6 pt-4 md:pt-6">
          {/* 1. Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground font-body mb-6"
          >
            <Sparkles size={14} className="text-muted-foreground" />
            <span>Now with GPT-5 support</span>
          </motion.div>

          {/* 2. Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center font-display text-5xl md:text-6xl lg:text-[5rem] leading-[0.95] tracking-tight text-foreground max-w-xl"
          >
            The Future of <em className="italic">Smarter</em> Automation
          </motion.h1>

          {/* 3. Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-center text-base md:text-lg text-muted-foreground max-w-[650px] leading-relaxed font-body"
          >
            Automate your busywork with intelligent agents that learn, adapt, and
            execute—so your team can focus on what matters most.
          </motion.p>

          {/* 4. CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 flex items-center gap-3"
          >
            <Button className="rounded-full px-6 py-5 text-sm font-medium font-body">
              Book a demo
            </Button>
            <Button
              variant="ghost"
              className="h-11 w-11 rounded-full border-0 bg-background shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:bg-background/80 p-0"
              aria-label="Play video"
            >
              <Play className="h-4 w-4 fill-foreground" />
            </Button>
          </motion.div>

          {/* 5. Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 w-full max-w-5xl"
          >
            <DashboardPreview />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
