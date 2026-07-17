import { Mail, Twitter, Github, ChevronRight } from 'lucide-react'

/* ===== 视频 URL ===== */
const HERO_VIDEO =
  '/videos/e1c98c76-1265-4f5c-882a-4276f2080894.mp4'
const ABOUT_VIDEO =
  '/videos/992053d1-3d3e-4b8c-abac-45f22158f411.mp4'
const CTA_VIDEO =
  '/videos/72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4'

const NFT_VIDEOS = [
  {
    url: '/videos/22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4',
    score: '8.7/10',
  },
  {
    url: '/videos/511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4',
    score: '9/10',
  },
  {
    url: '/videos/ac7035b5-9f3b-4289-86fc-941b2432317d.mp4',
    score: '8.2/10',
  },
]

const NAV_LINKS = ['Homepage', 'Gallery', 'Buy NFT', 'FAQ', 'Contact']

const ABOUT_PARAGRAPH =
  'A digital object fixed beyond time and place. An exploration of distance, form, and silence in space'

/* ============================================================
 *  Orbis.Nft — 太空 NFT 落地页（4 section）
 *  字体：Anton（标题/nav）+ Condiment（装饰手写）+ 系统等宽（正文）
 *  配色：#010828 深蓝 / #EFF4FF cream / #6FFF00 neon
 *  复用全局 .liquid-glass 类
 * ============================================================ */
export default function OrbisNftHero() {
  return (
    <div data-theme="orbis-nft" className="relative min-h-screen bg-[#010828] text-cream">
      {/* 全屏纹理叠加 */}
      <div className="orbis-texture" aria-hidden="true" />

      {/* SECTION 1 — HERO */}
      <HeroSection />

      {/* SECTION 2 — ABOUT / INTRO */}
      <AboutSection />

      {/* SECTION 3 — NFT COLLECTION GRID */}
      <CollectionSection />

      {/* SECTION 4 — CTA / FINAL */}
      <CtaSection />
    </div>
  )
}

/* ============================================================
 *  通用：社交图标按钮（3 个，Mail/Twitter/Github）
 * ============================================================ */
function SocialIconButtons({
  variant = 'stacked',
  className = '',
}: {
  variant?: 'stacked' | 'row'
  className?: string
}) {
  const icons = [
    { Icon: Mail, label: 'Email' },
    { Icon: Twitter, label: 'Twitter' },
    { Icon: Github, label: 'Github' },
  ]
  const containerClass =
    variant === 'stacked' ? 'flex flex-col gap-3' : 'flex gap-3 justify-center'

  return (
    <div className={`${containerClass} ${className}`}>
      {icons.map(({ Icon, label }) => (
        <button
          key={label}
          type="button"
          aria-label={label}
          className="orbis-glass h-14 w-14 rounded-[1rem] flex items-center justify-center text-cream hover:bg-white/10 transition"
        >
          <Icon size={20} />
        </button>
      ))}
    </div>
  )
}

/* ============================================================
 *  SECTION 1 — HERO
 * ============================================================ */
function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden rounded-b-[32px]">
      {/* 背景视频 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={HERO_VIDEO}
      />

      {/* 暗色叠加层 — 提升文字对比度 */}
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

      {/* 底部渐变 fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#010828] to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-4 sm:px-6 lg:px-12 py-6">
          {/* 左：logo */}
          <div className="font-grotesk text-[16px] uppercase tracking-wide">Orbis.Nft</div>

          {/* 中：nav（hidden below lg） */}
          <nav className="hidden lg:block">
            <div className="orbis-glass rounded-[28px] px-[52px] py-[24px] flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-grotesk text-[13px] uppercase tracking-wide hover:text-neon transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>

          {/* 右：占位（保持 header 平衡） */}
          <div className="hidden lg:block w-[16px]" />
        </header>

        {/* Hero 内容 */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-12 lg:ml-32">
          <div className="relative max-w-[780px]">
            <h1
              className="font-grotesk uppercase text-cream text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] leading-[1.05] sm:leading-[1] tracking-wide"
              style={{ textShadow: '0 2px 24px rgba(0,0,0,0.5)' }}
            >
              Beyond earth
              <br />
              and ( its ) familiar boundaries
            </h1>

            {/* Condiment 手写装饰 — 右侧 */}
            <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[110%] hidden sm:block font-condiment text-neon text-[24px] md:text-[36px] lg:text-[48px] -rotate-1 mix-blend-exclusion opacity-90 whitespace-nowrap">
              Nft collection
            </span>
          </div>

          {/* 移动端社交图标（below lg） */}
          <div className="lg:hidden mt-10">
            <SocialIconButtons variant="row" />
          </div>
        </div>

        {/* 桌面端社交图标 — 右上角垂直堆叠 */}
        <div className="hidden lg:block absolute top-28 right-12">
          <SocialIconButtons variant="stacked" />
        </div>
      </div>
    </section>
  )
}

/* ============================================================
 *  SECTION 2 — ABOUT / INTRO
 * ============================================================ */
function AboutSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* 背景视频 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={ABOUT_VIDEO}
      />

      {/* 暗色渐变叠加 — 提升文字对比度 */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#010828]/40 via-black/20 to-[#010828]/60"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1831px] mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24 flex flex-col gap-16 lg:gap-24 min-h-screen justify-center">
        {/* 顶部行 */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-12 lg:gap-0 lg:justify-between">
          {/* 左：标题 + Orbis 手写 */}
          <div className="relative inline-block">
            <h2
              className="font-grotesk uppercase text-cream text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] leading-[1] tracking-wide"
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
            >
              Hello!
              <br />
              I'm orbis
            </h2>
            <span className="absolute bottom-0 right-0 translate-x-[60%] translate-y-[10%] font-condiment text-neon text-[36px] sm:text-[44px] md:text-[56px] lg:text-[68px] -rotate-2 mix-blend-exclusion whitespace-nowrap">
              Orbis
            </span>
          </div>

          {/* 右：短文 */}
          <p
            className="font-mono uppercase text-cream text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-[266px]"
            style={{ textShadow: '0 1px 12px rgba(0,0,0,0.6)' }}
          >
            {ABOUT_PARAGRAPH}
          </p>
        </div>

        {/* 底部行 — 装饰性文字（opacity-10 几乎不可见） */}
        <div className="hidden lg:flex justify-between items-start">
          <div className="flex flex-col gap-6 max-w-[266px]">
            <p className="font-mono uppercase text-cream text-[14px] opacity-10 leading-relaxed">
              {ABOUT_PARAGRAPH}
            </p>
            <p className="font-mono uppercase text-cream text-[14px] opacity-10 leading-relaxed">
              {ABOUT_PARAGRAPH}
            </p>
          </div>
          <div className="flex flex-col gap-6 max-w-[266px]">
            <p className="font-mono uppercase text-cream text-[14px] opacity-10 leading-relaxed">
              {ABOUT_PARAGRAPH}
            </p>
            <p className="font-mono uppercase text-cream text-[14px] opacity-10 leading-relaxed">
              {ABOUT_PARAGRAPH}
            </p>
          </div>
        </div>

        {/* 移动端 — 使用 #010828 文字颜色（在视频上几乎不可见） */}
        <div className="lg:hidden flex justify-between items-start">
          <div className="flex flex-col gap-6 max-w-[266px]">
            <p className="font-mono uppercase text-[#010828] text-[14px] leading-relaxed">
              {ABOUT_PARAGRAPH}
            </p>
            <p className="font-mono uppercase text-[#010828] text-[14px] leading-relaxed">
              {ABOUT_PARAGRAPH}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
 *  SECTION 3 — NFT COLLECTION GRID
 * ============================================================ */
function CollectionSection() {
  return (
    <section className="relative bg-[#010828] py-20 lg:py-32">
      <div className="max-w-[1831px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header 行 */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-16">
          {/* 左：标题 */}
          <h2 className="font-grotesk uppercase text-cream text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] leading-[1] tracking-wide">
            Collection of
            <br />
            <span className="inline-block ml-12 md:ml-24 lg:ml-32">
              <span className="font-condiment text-neon text-[36px] sm:text-[44px] md:text-[56px] lg:text-[68px] normal-case">
                Space
              </span>{' '}
              objects
            </span>
          </h2>

          {/* 右：SEE ALL CREATORS 按钮 */}
          <button type="button" className="group text-left">
            <div className="flex items-end gap-2">
              <span className="font-grotesk uppercase text-cream text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] leading-[1] tracking-wide">
                SEE
              </span>
              <div className="flex flex-col">
                <span className="font-grotesk uppercase text-cream text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] leading-[1] tracking-wide">
                  ALL
                </span>
                <span className="font-grotesk uppercase text-cream text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] leading-[1] tracking-wide">
                  CREATORS
                </span>
              </div>
            </div>
            <div className="mt-2 h-[6px] sm:h-[7px] md:h-[8px] lg:h-[10px] w-full bg-neon rounded-full" />
          </button>
        </div>

        {/* NFT 卡片网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {NFT_VIDEOS.map((item, i) => (
            <NftCard key={i} videoUrl={item.url} score={item.score} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
 *  NftCard — 液态玻璃容器 + 方形视频 + 底部 overlay bar
 * ============================================================ */
function NftCard({ videoUrl, score }: { videoUrl: string; score: string }) {
  return (
    <div className="orbis-glass rounded-[32px] p-[18px] hover:bg-white/10 transition">
      {/* 方形视频容器（pb-[100%] aspect ratio trick） */}
      <div className="relative pb-[100%] rounded-[24px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={videoUrl}
        />

        {/* 底部 overlay bar */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="orbis-glass rounded-[20px] px-5 py-4 flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[11px] uppercase text-cream/70 tracking-wide">
                RARITY SCORE:
              </span>
              <span className="font-grotesk text-cream text-[16px] uppercase tracking-wide">
                {score}
              </span>
            </div>
            {/* 紫色渐变圆形按钮 */}
            <button
              type="button"
              aria-label="View"
              className="h-12 w-12 rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-purple-500/50 hover:scale-110 transition-transform"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ============================================================
 *  SECTION 4 — CTA / FINAL
 * ============================================================ */
function CtaSection() {
  return (
    <section className="relative overflow-hidden">
      {/* 背景视频 — 原生比例，非 object-cover */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto block"
        src={CTA_VIDEO}
      />

      {/* 暗色叠加层 — bg-black/60 提升文字对比度 */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* 文字层（absolute 定位于视频上） */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full lg:pr-[20%] lg:pl-[15%] px-4 sm:px-6 lg:px-12">
          <div className="relative ml-auto text-right">
            {/* "Go beyond" 手写装饰 */}
            <span className="absolute top-0 left-0 -translate-x-[10%] -translate-y-[110%] font-condiment text-neon text-[17px] sm:text-[28px] md:text-[44px] lg:text-[68px] -rotate-1 mix-blend-exclusion opacity-90 whitespace-nowrap">
              Go beyond
            </span>

            {/* 标题 */}
            <h2
              className="font-grotesk uppercase text-cream text-[16px] sm:text-[28px] md:text-[44px] lg:text-[60px] leading-[1.05] tracking-wide"
              style={{ textShadow: '0 2px 24px rgba(0,0,0,0.7)' }}
            >
              <span className="block mb-4 sm:mb-6 md:mb-8 lg:mb-12">JOIN US.</span>
              <span className="block">REVEAL WHAT'S HIDDEN.</span>
              <span className="block">DEFINE WHAT'S NEXT.</span>
              <span className="block">FOLLOW THE SIGNAL.</span>
            </h2>
          </div>
        </div>
      </div>

      {/* 底部左侧社交图标 */}
      <div className="absolute left-[8%] bottom-[12%] md:bottom-[16%] lg:bottom-[20%]">
        <div className="orbis-glass rounded-[0.5rem] sm:rounded-[0.75rem] md:rounded-[1rem] lg:rounded-[1.25rem] flex flex-col overflow-hidden">
          {[
            { Icon: Mail, label: 'Email' },
            { Icon: Twitter, label: 'Twitter' },
            { Icon: Github, label: 'Github' },
          ].map(({ Icon, label }, idx, arr) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              className={`w-[14vw] sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem] h-[14vw] sm:h-[14.375rem] md:h-[10.78125rem] lg:h-[16.77rem] flex items-center justify-center text-cream hover:bg-white/15 transition-colors ${
                idx < arr.length - 1 ? 'border-b border-white/10' : ''
              }`}
            >
              <Icon size={32} />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
