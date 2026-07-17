/* ============================================================
 *  RIVR — DeFi 仪表盘 Hero(Glassmorphism 美学)
 *  字体:Helvetica Regular(db.onlinewebfonts.com @font-face)
 *  动画:motion/react
 *  核心:背景视频 + 毛玻璃卡片 + faux-cutout 底角
 * ============================================================ */
import { motion } from 'motion/react'
import { Sparkles, ArrowUpRight, ChevronRight } from 'lucide-react'

/* ===== 背景视频 URL ===== */
const BG_VIDEO =
  '/videos/4286c423-2fd9-4efd-92bd-91a939453fc1.mp4'

/* ===== 导航数据 ===== */
const NAV_ITEMS = [
  { label: 'Ecosystem', hasDropdown: false },
  { label: 'Economics', hasDropdown: true },
  { label: 'Developers', hasDropdown: false },
  { label: 'Governance', hasDropdown: true },
]

/* ============================================================
 *  Navbar — 顶部导航
 * ============================================================ */
function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full relative z-10">
      {/* 左侧 spacer(居中用) */}
      <div className="flex-1 hidden md:block" />

      {/* 中间菜单 */}
      <ul className="hidden md:flex items-center gap-8 text-[rgb(45,45,45)] font-normal text-sm">
        {NAV_ITEMS.map((item) => (
          <li
            key={item.label}
            className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group"
          >
            {item.label}
            {item.hasDropdown && (
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            )}
          </li>
        ))}
      </ul>

      {/* 移动端 Logo */}
      <div className="md:hidden">
        <span className="font-regular tracking-tighter text-xl text-[rgba(30,50,90,0.9)]">
          RIVR
        </span>
      </div>

      {/* 右侧按钮 */}
      <div className="flex-1 flex justify-end">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center bg-[rgba(30,50,90,0.8)] text-white rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-[rgba(30,50,90,1)] transition-colors group"
        >
          <div className="bg-white/20 p-1 md:p-1.5 rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <span className="text-xs md:text-sm font-normal">Book Demo</span>
        </motion.button>
      </div>
    </nav>
  )
}

/* ============================================================
 *  HeroBadge — "Fluid Staking" 徽章
 * ============================================================ */
function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/20 mx-auto mb-3 w-fit"
    >
      <Sparkles className="w-4 h-4 text-[rgba(30,50,90,0.8)]" />
      <span className="text-[14px] font-normal text-[rgba(30,50,90,0.9)]">
        Fluid Staking
      </span>
    </motion.div>
  )
}

/* ============================================================
 *  BottomLeftCard — 左下角统计卡片
 * ============================================================ */
function BottomLeftCard() {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="absolute bottom-28 right-4 left-auto md:left-6 md:right-auto md:bottom-6 lg:bottom-10 lg:left-10 p-3 md:p-4 lg:p-5 rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[2.2rem] bg-white/30 backdrop-blur-xl flex flex-col gap-2 lg:gap-3 min-w-[140px] md:min-w-[150px] lg:min-w-[180px] w-fit"
    >
      {/* 统计数据 */}
      <div className="flex flex-col">
        <span className="text-2xl md:text-3xl font-normal text-[rgba(30,50,90,0.9)] tracking-tight">
          5.2K
        </span>
        <span className="text-[10px] md:text-[12px] font-normal text-[rgba(30,50,90,0.6)] uppercase tracking-wider">
          Active Yielders
        </span>
      </div>

      {/* Join Discord 按钮 */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center bg-white rounded-full pl-1.5 pr-5 py-1.5 gap-2 hover:bg-white/90 transition-colors self-start group"
      >
        <div className="bg-[rgba(30,50,90,0.1)] p-1 rounded-full flex items-center justify-center">
          <ArrowUpRight className="w-4 h-4 text-[rgba(30,50,90,0.9)]" />
        </div>
        <span className="text-[14px] font-normal text-[rgba(30,50,90,0.9)]">
          Join Discord
        </span>
      </motion.button>
    </motion.div>
  )
}

/* ============================================================
 *  BottomRightCorner — 右下角 faux-cutout 卡片
 * ============================================================ */
function BottomRightCorner() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="absolute bottom-0 right-0 p-3 pt-5 pl-8 sm:p-4 sm:pt-6 sm:pl-10 md:p-6 md:pt-8 md:pl-14 bg-[#f0f0f0] rounded-tl-[1.5rem] sm:rounded-tl-[2rem] md:rounded-tl-[3.5rem] flex items-center gap-3 sm:gap-4 md:gap-6"
    >
      {/* 顶部交叉蒙版 */}
      <div className="absolute -top-[1.5rem] sm:-top-[2rem] md:-top-[3.5rem] right-0 w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M56 56V0C56 30.9279 30.9279 56 0 56H56Z" fill="#f0f0f0" />
        </svg>
      </div>

      {/* 左侧交叉蒙版 */}
      <div className="absolute bottom-0 -left-[1.5rem] sm:-left-[2rem] md:-left-[3.5rem] w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M56 56H0C30.9279 56 56 30.9279 56 0V56Z" fill="#f0f0f0" />
        </svg>
      </div>

      {/* 圆形图标 */}
      <div className="bg-[rgba(30,50,90,0.05)] w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-[rgba(30,50,90,0.1)]">
        <ArrowUpRight className="text-[rgba(30,50,90,0.8)]" />
      </div>

      {/* 信息列 */}
      <div className="flex flex-col">
        <span className="text-[16px] md:text-[20px] font-normal text-[rgba(30,50,90,0.95)]">
          Documentation
        </span>
        <div className="flex items-center gap-1 text-[rgba(30,50,90,0.6)] cursor-pointer hover:text-[rgba(30,50,90,0.8)] transition-colors">
          <span className="text-[12px] md:text-[15px] font-normal">Library</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  )
}

/* ============================================================
 *  RivrHero — 主入口
 * ============================================================ */
export default function RivrHero() {
  return (
    <main data-theme="rivr" className="min-h-screen bg-[#f0f0f0]">
      <div className="w-full h-screen flex items-center justify-center p-3 md:p-5 bg-[#f0f0f0]">
        <section className="relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-none flex flex-col items-center bg-white/10 group">
          {/* ===== 背景视频 ===== */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0"
            src={BG_VIDEO}
          />

          {/* ===== 内容层 ===== */}
          <div className="relative z-10 w-full h-full flex flex-col items-center">
            <Navbar />

            {/* 文字容器 */}
            <div className="w-full flex flex-col items-center pt-8 px-6 text-center max-w-4xl">
              <HeroBadge />

              <motion.h1
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-normal text-[#5E6470] mb-2 tracking-tight leading-[1.05]"
              >
                Fluid Asset Streams
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-sm sm:text-base md:text-lg text-[#5E6470] opacity-80 leading-relaxed max-w-xl font-normal"
              >
                Access Smart Vaults, stake RIVR, NFTs, transform rigid holdings into liquid cash instantly.
              </motion.p>
            </div>

            <BottomLeftCard />
            <BottomRightCorner />
          </div>
        </section>
      </div>
    </main>
  )
}
