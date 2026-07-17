/* ============================================================
 *  Halo / USD Halo — Fintech 稳定币落地页
 *  字体:TT Norms Pro(本地使用 @fontsource/inter 替代)
 *  核心:#F5F5F5 背景 + 视频卡片 Hero + 双跑马灯 + 信息卡组
 *  Tech:React + TS + Tailwind + Lucide
 * ============================================================ */
import { ArrowRight } from 'lucide-react'

/* ===== 资源(原 CloudFront 已本地化) ===== */
const HERO_VIDEO = '/videos/c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4'
const USECASES_VIDEO = '/videos/ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4'
const SAVINGS_IMG = '/images/halo-savings.webp'

/* ===== 导航链接 ===== */
const NAV_LINKS = ['Network', 'Ecosystem', 'Rewards', 'Help', 'News'] as const

/* ===== Hero 品牌跑马灯(每个品牌独立字体样式) ===== */
type Brand = { name: string; style: React.CSSProperties }

const HERO_BRANDS: Brand[] = [
  {
    name: 'Stripe',
    style: { fontFamily: 'Georgia, serif', fontWeight: 700, letterSpacing: '-0.02em', fontSize: '15px' },
  },
  {
    name: 'Coinbase',
    style: { fontFamily: 'Arial, sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: '13px', textTransform: 'uppercase' },
  },
  {
    name: 'Uniswap',
    style: { fontFamily: '"Trebuchet MS", sans-serif', fontWeight: 600, letterSpacing: '0.01em', fontSize: '15px', fontStyle: 'italic' },
  },
  {
    name: 'Aave',
    style: { fontFamily: '"Courier New", monospace', fontWeight: 700, letterSpacing: '0.12em', fontSize: '13px', textTransform: 'uppercase' },
  },
  {
    name: 'Compound',
    style: { fontFamily: 'Palatino, "Book Antiqua", serif', fontWeight: 400, letterSpacing: '-0.01em', fontSize: '16px' },
  },
  {
    name: 'MakerDAO',
    style: { fontFamily: 'Impact, "Arial Narrow", sans-serif', fontWeight: 400, letterSpacing: '0.04em', fontSize: '14px' },
  },
  {
    name: 'Chainlink',
    style: { fontFamily: 'Verdana, sans-serif', fontWeight: 700, letterSpacing: '-0.03em', fontSize: '13px' },
  },
]

/* ===== Backers 跑马灯 ===== */
const BACKERS: Brand[] = [
  {
    name: 'Fundamental Labs',
    style: { fontFamily: '"Times New Roman", serif', fontWeight: 400, letterSpacing: '0.02em', fontSize: '14px' },
  },
  {
    name: 'KUCOIN',
    style: { fontFamily: '"Arial Black", sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: '16px' },
  },
  {
    name: 'NGC',
    style: { fontFamily: 'Impact, sans-serif', fontWeight: 700, letterSpacing: '0.05em', fontSize: '18px' },
  },
  {
    name: 'NxGen',
    style: { fontFamily: 'Georgia, serif', fontWeight: 600, letterSpacing: '-0.02em', fontSize: '17px' },
  },
  {
    name: 'Matter Labs',
    style: { fontFamily: 'Helvetica, sans-serif', fontWeight: 700, letterSpacing: '-0.01em', fontSize: '15px' },
  },
  {
    name: 'DEXTools',
    style: { fontFamily: 'Verdana, sans-serif', fontWeight: 700, letterSpacing: '0.06em', fontSize: '14px', textTransform: 'uppercase' },
  },
  {
    name: 'NGRAVE',
    style: { fontFamily: '"Courier New", monospace', fontWeight: 700, letterSpacing: '0.18em', fontSize: '14px' },
  },
  {
    name: 'Polychain',
    style: { fontFamily: 'Palatino, serif', fontWeight: 500, letterSpacing: '0.03em', fontSize: '15px' },
  },
]

/* ============================================================
 *  LogoIcon — 自定义 Halo 标志(两个互锁圆角方形)
 * ============================================================ */
function LogoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="currentColor" aria-hidden="true">
      <path d="M 128.005 191.173 C 128.448 156.208 156.93 128 192 128 L 192 64 L 128 64 C 128 99.346 99.346 128 64 128 L 64 192 L 128 192 Z M 192 256 L 64 256 C 28.654 256 0 227.346 0 192 L 0 64 L 64 64 L 64 0 L 192 0 C 227.346 0 256 28.654 256 64 L 256 192 L 192 192 Z" />
    </svg>
  )
}

/* ============================================================
 *  PillButton — 黑色胶囊按钮 + 白色圆形箭头
 * ============================================================ */
function PillButton({
  label,
  className = '',
}: {
  label: string
  className?: string
}) {
  return (
    <button
      type="button"
      className={`inline-flex items-center gap-3 bg-black text-white font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 ${className}`}
    >
      <span>{label}</span>
      <span className="bg-white rounded-full p-2">
        <ArrowRight className="w-5 h-5 text-black" />
      </span>
    </button>
  )
}

/* ============================================================
 *  Navbar — 绝对定位透明导航
 * ============================================================ */
function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-5">
      <div className="max-w-[88rem] mx-auto flex items-center justify-between">
        {/* 左:Logo + 品牌名 */}
        <div className="flex items-center gap-2">
          <LogoIcon className="w-7 h-7 text-black" />
          <span className="text-2xl font-medium tracking-tight text-black">Halo</span>
        </div>

        {/* 中:导航链接 */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-base text-gray-700 hover:text-black font-medium transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* 右:CTA */}
        <button
          type="button"
          className="bg-black text-white text-base font-medium px-7 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200"
        >
          Open Wallet
        </button>
      </div>
    </nav>
  )
}

/* ============================================================
 *  HeroSection — 视频卡片 + 标题 + 品牌跑马灯
 * ============================================================ */
function HeroSection() {
  return (
    <section className="flex-1 px-6 pt-20 pb-6 flex items-end">
      <div
        className="relative w-full rounded-2xl overflow-hidden max-w-[88rem] mx-auto"
        style={{ height: 'calc(100vh - 96px)' }}
      >
        {/* 背景视频 */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={HERO_VIDEO}
        />

        {/* 内容覆盖层 */}
        <div className="relative z-10 flex flex-col items-start justify-start h-full p-12 pt-36">
          <h1
            className="text-black text-5xl md:text-6xl font-medium leading-tight max-w-xl mb-4"
            style={{ letterSpacing: '-0.04em' }}
          >
            Your Wealth<br />
            Works
          </h1>
          <p
            className="text-black/70 text-base md:text-lg max-w-md mb-8 leading-relaxed"
            style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
          >
            An automated, reward-powered digital dollar built for native passive earnings and effortless connection into DeFi.
          </p>

          <PillButton label="Join us" className="text-base md:text-lg" />

          {/* 品牌跑马灯 */}
          <div className="mt-24 w-full max-w-md overflow-hidden">
            <div className="halo-marquee-track">
              {[...HERO_BRANDS, ...HERO_BRANDS].map((brand, i) => (
                <span
                  key={`${brand.name}-${i}`}
                  className="mx-7 shrink-0 text-black/60 whitespace-nowrap"
                  style={brand.style}
                >
                  {brand.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
 *  InfoSection — "Meet USD Halo." + 4 卡片网格
 * ============================================================ */
function InfoSection() {
  return (
    <section className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        {/* 行 1:2 列(标题 + 段落) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <h2
              className="text-black text-4xl md:text-5xl font-medium leading-tight mb-8"
              style={{ letterSpacing: '-0.03em' }}
            >
              Meet USD Halo.
            </h2>
            <PillButton label="Discover it" className="text-base" />
          </div>
          <p className="text-black/70 text-2xl md:text-3xl leading-relaxed">
            USD Halo is a reward-earning dollar coin that lets your savings grow while remaining tied to the U.S. dollar.
          </p>
        </div>

        {/* 行 2:4 列卡片网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 卡片 1:背景图,lg 跨 2 列 */}
          <div
            className="rounded-2xl p-7 min-h-80 flex flex-col justify-between lg:col-span-2"
            style={{
              backgroundImage: `url(${SAVINGS_IMG})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h3
              className="text-black text-2xl font-medium leading-snug"
              style={{ letterSpacing: '-0.02em' }}
            >
              Savings that bloom
            </h3>
            <p className="text-black/70 text-base max-w-xs">
              Gain steady returns as your dollar tokens are routed into top-performing DeFi strategies.
            </p>
          </div>

          {/* 卡片 2:深紫 */}
          <div className="rounded-2xl p-7 min-h-80 flex flex-col justify-between" style={{ background: '#2B2644' }}>
            <h3 className="text-white text-2xl font-medium leading-tight">
              Always fluid,<br />
              always pegged.
            </h3>
            <p className="text-white/60 text-base">
              Keep fully dollar-anchored with on-demand access to funds — no lockups or waits.
            </p>
          </div>

          {/* 卡片 3:深紫 */}
          <div className="rounded-2xl p-7 min-h-80 flex flex-col justify-between" style={{ background: '#2B2644' }}>
            <h3 className="text-white text-2xl font-medium leading-tight">
              Fully<br />
              automated
            </h3>
            <p className="text-white/60 text-base">
              Skip the task of tuning positions yourself. USD Halo runs in the background for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
 *  BackedBySection — 投资方跑马灯行
 * ============================================================ */
function BackedBySection() {
  return (
    <section className="bg-[#F5F5F5] px-6">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        <p className="text-black/70 text-base leading-relaxed">
          Funded by premier partners<br />
          and forward-thinking leaders.
        </p>
        <div className="md:col-span-3 overflow-hidden">
          <div className="halo-backers-track">
            {[...BACKERS, ...BACKERS].map((backer, i) => (
              <span
                key={`${backer.name}-${i}`}
                className="mx-10 shrink-0 text-black/50 whitespace-nowrap"
                style={backer.style}
              >
                {backer.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
 *  UseCasesSection — 用例视频卡片
 * ============================================================ */
function UseCasesSection() {
  return (
    <section className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* 左列 */}
        <div className="md:pr-12 md:pt-2">
          <p className="text-black/60 text-sm mb-2">USD Halo in Practice</p>
          <h2
            className="text-5xl md:text-6xl font-medium leading-none mb-6"
            style={{ letterSpacing: '-0.04em' }}
          >
            Use modes
          </h2>
          <p className="text-black/60 text-base leading-relaxed max-w-sm">
            USD Halo powers a wide range of modes for builders, companies and treasuries wanting safe and rewarding stablecoin integrations plus more
          </p>
        </div>

        {/* 右列:视频卡片 */}
        <div className="relative rounded-3xl overflow-hidden min-h-[720px]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src={USECASES_VIDEO}
          />
          <div className="relative z-10 p-10 md:p-12 h-full flex flex-col justify-end">
            <h3
              className="text-4xl md:text-5xl font-medium leading-tight mb-5 text-black"
              style={{ letterSpacing: '-0.03em' }}
            >
              Commerce
            </h3>
            <p className="text-black/70 text-base max-w-md mb-8">
              Lift customer retention by offering USD Halo, a trusted dollar-backed stablecoin with strong yields, letting your patrons earn with zero effort on your platform.
            </p>
            <a
              href="#"
              className="group inline-flex items-center gap-3 text-black font-medium"
            >
              <span className="w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center group-hover:bg-white transition-colors">
                <ArrowRight className="w-4 h-4 text-black" />
              </span>
              <span>Know more</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
 *  HaloUsdHero — 主入口
 * ============================================================ */
export default function HaloUsdHero() {
  return (
    <div data-theme="halousd" className="flex flex-col bg-[#F5F5F5] min-h-screen">
      {/* 首屏:Navbar + Hero(100vh) */}
      <div className="h-screen flex flex-col overflow-hidden">
        <Navbar />
        <HeroSection />
      </div>

      {/* 信息区 */}
      <InfoSection />

      {/* 投资方跑马灯 */}
      <BackedBySection />

      {/* 用例区 */}
      <UseCasesSection />
    </div>
  )
}
