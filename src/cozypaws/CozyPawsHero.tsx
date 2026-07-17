import {
  Search,
  ShoppingCart,
  Star,
  ArrowUpRight,
  Play,
  ArrowRight,
  Plus,
} from 'lucide-react'

/* ===== 资源 URL ===== */
const LOGO_URL = '/cozypaws/logo.svg'
const AVATAR_URL = '/cozypaws/avatar.png'
const PRODUCT_CARD_URL = '/cozypaws/product-card.png'
const VIDEO_CARD_URL = '/cozypaws/video-card.png'
const BOTTOM_LEFT_URL = '/cozypaws/bottom-left.png'
const BOTTOM_CENTER_URL = '/cozypaws/bottom-center.png'
const BOTTOM_RIGHT_URL = '/cozypaws/bottom-right.png'

const NAV_LINKS = ['Home', 'Shop', 'Delivery and payment', 'Brands', 'Blog']

/* ===== 标题词（每词独立 animate-word-pop） ===== */
const HEADING_WORDS = ['Everything', 'Your', 'Pets', 'Love']

/* ============================================================
 *  CozyPaws — 宠物商店 hero（视口高度，无滚动，3 响应断点）
 *  Inter（body/UI） + DM Serif Display（仅 hero heading）
 *  配色：#EFFDF0 bg / #1a3d1a dark green / #E86A10 orange
 * ============================================================ */
export default function CozyPawsHero() {
  return (
    <div data-theme="cozypaws" className="h-screen flex flex-col overflow-hidden">
      <Header />
      <section className="flex-1 flex flex-col overflow-hidden">
        {/* 桌面 lg+ */}
        <DesktopHero />
        {/* 平板 md..lg */}
        <TabletHero />
        {/* 移动 below md */}
        <MobileHero />
      </section>
    </div>
  )
}

/* ============================================================
 *  Header — 全宽，px-12 桌面，py-4，z-30
 *  左：logo / 中：nav / 右：search + favorites + cart + avatar
 * ============================================================ */
function Header() {
  return (
    <header className="relative z-30 flex shrink-0 items-center justify-between px-6 md:px-8 lg:px-12 py-4 animate-fade-in delay-100">
      {/* 左：Logo */}
      <a href="#" aria-label="CozyPaws" className="shrink-0">
        <img
          src={LOGO_URL}
          alt="CozyPaws"
          className="h-[33px] w-[130px] md:h-[42px] md:w-[165px] lg:h-[52px] lg:w-[205px] object-contain"
        />
      </a>

      {/* 中：nav（hidden below md） */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
        {NAV_LINKS.map((label, i) => (
          <a
            key={label}
            href="#"
            className={
              i === 0
                ? 'text-gray-900 hover:text-[#1a3d1a] transition-colors'
                : 'text-gray-600 hover:text-[#1a3d1a] transition-colors'
            }
          >
            {label}
          </a>
        ))}
      </nav>

      {/* 右：search + favorites + cart + avatar */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Search — hidden below sm */}
        <button
          type="button"
          aria-label="Search"
          className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:border-[#1a3d1a] hover:text-[#1a3d1a] transition-colors"
        >
          <Search size={18} />
        </button>

        {/* Favorites — orange 圆 */}
        <button
          type="button"
          aria-label="Favorites"
          className="relative h-10 w-10 flex items-center justify-center rounded-full bg-[#E86A10] text-white hover:bg-[#d45e0d] transition-colors"
        >
          <Star size={18} fill="white" />
          <Badge>4</Badge>
        </button>

        {/* Cart — border 圆 */}
        <button
          type="button"
          aria-label="Cart"
          className="relative h-10 w-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:border-[#1a3d1a] hover:text-[#1a3d1a] transition-colors"
        >
          <ShoppingCart size={18} />
          <Badge>1</Badge>
        </button>

        {/* Avatar */}
        <img
          src={AVATAR_URL}
          alt="User"
          className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
        />
      </div>
    </header>
  )
}

/* 角标 — absolute -top-1 -right-1, 20x20, bg-orange, border-2 border-background */
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="absolute -top-1 -right-1 h-5 w-5 min-w-5 rounded-full bg-[#E86A10] border-2 border-[#EFFDF0] text-white text-[10px] font-bold flex items-center justify-center leading-none"
    >
      {children}
    </span>
  )
}

/* ============================================================
 *  Desktop Hero (lg+) — hidden below lg
 * ============================================================ */
function DesktopHero() {
  return (
    <div className="hidden lg:flex flex-1 relative overflow-hidden">
      {/* 文字层 z-5 */}
      <div className="absolute inset-0 z-[5] flex flex-col items-center px-12 pt-[5.4rem] pointer-events-none">
        <h1
          className="font-serif-display text-[#1a3d1a] text-[clamp(60px,7.5vw,110px)] leading-[0.95] tracking-tight text-center"
        >
          <span className="block">
            <Word delay="delay-200">{HEADING_WORDS[0]}</Word>
          </span>
          <span className="block">
            <Word delay="delay-300">{HEADING_WORDS[1]}</Word>{' '}
            <Word delay="delay-400">{HEADING_WORDS[2]}</Word>{' '}
            <Word delay="delay-500">{HEADING_WORDS[3]}</Word>
          </span>
        </h1>
      </div>

      {/* 左 product card */}
      <ProductCard
        className="absolute top-[50px] left-12 z-20 animate-slide-in-left delay-600"
        width="clamp(160px,14vw,260px)"
      />

      {/* 右 video card */}
      <VideoCard
        className="absolute top-[50px] right-12 z-20 animate-slide-in-right delay-700"
        width="clamp(120px,10vw,177px)"
      />

      {/* 底部 3 图 + overlay */}
      <BottomImages variant="desktop" />
    </div>
  )
}

/* ============================================================
 *  Tablet Hero (md..lg) — hidden below md, hidden above lg
 * ============================================================ */
function TabletHero() {
  return (
    <div className="hidden md:flex lg:hidden flex-1 relative overflow-hidden">
      {/* 文字层 */}
      <div className="absolute inset-0 z-[5] flex flex-col items-center px-4 pt-20 pointer-events-none">
        <h1 className="font-serif-display text-[#1a3d1a] text-7xl leading-[0.95] tracking-tight text-center">
          <span className="block">
            <Word delay="delay-200">{HEADING_WORDS[0]}</Word>
          </span>
          <span className="block">
            <Word delay="delay-300">{HEADING_WORDS[1]}</Word>{' '}
            <Word delay="delay-400">{HEADING_WORDS[2]}</Word>{' '}
            <Word delay="delay-500">{HEADING_WORDS[3]}</Word>
          </span>
        </h1>
      </div>

      {/* 左 product card */}
      <ProductCard
        className="absolute top-[80px] left-4 z-20 animate-slide-in-left delay-600"
        width="160px"
      />

      {/* 右 video card */}
      <VideoCard
        className="absolute top-[80px] right-4 z-20 animate-slide-in-right delay-700"
        width="120px"
      />

      {/* 底部 3 图 */}
      <BottomImages variant="tablet" />
    </div>
  )
}

/* ============================================================
 *  Mobile Hero (below md) — md:hidden
 * ============================================================ */
function MobileHero() {
  return (
    <div className="md:hidden flex-1 flex flex-col overflow-hidden pt-2">
      {/* 顶部：标题 + 副标 + 按钮 */}
      <div className="px-4 text-center animate-fade-up delay-200">
        <h1 className="font-serif-display text-[#1a3d1a] text-[36px] leading-[0.95] tracking-tight">
          <span className="block">Everything</span>
          <span className="block">Your Pets Love</span>
        </h1>
        <p className="mt-3 text-sm text-gray-600">
          Premium pet supplies, curated for comfort and care.
        </p>
        <button
          type="button"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#E86A10] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#d45e0d] transition-colors"
        >
          Explore Products
          <ArrowRight size={16} />
        </button>
      </div>

      {/* 双卡并排 */}
      <div className="mt-4 px-4 flex gap-3 animate-fade-up delay-500">
        <div className="flex-1">
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <img
              src={PRODUCT_CARD_URL}
              alt="Cozy Cat House"
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              aria-label="View product"
              className="absolute bottom-2 right-2 h-9 w-9 rounded-full bg-[#1a3d1a] text-white flex items-center justify-center hover:bg-[#2a5a2a] transition-colors"
            >
              <ArrowUpRight size={16} />
            </button>
          </div>
          <p className="mt-2 text-xs text-gray-700">Cozy Cat House</p>
          <p className="text-sm font-bold text-[#1a3d1a]">$49.99</p>
        </div>

        <div className="flex-1">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <img
              src={VIDEO_CARD_URL}
              alt="Product reviews"
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              aria-label="Play"
              className="absolute bottom-2 left-1/2 -translate-x-1/2 h-9 w-9 rounded-full bg-[#1a3d1a] text-white flex items-center justify-center hover:bg-[#2a5a2a] transition-colors"
            >
              <Play size={16} fill="white" />
            </button>
          </div>
          <p className="mt-2 text-xs text-gray-700 leading-snug">
            Watch Product Reviews on TikTok and YouTube
          </p>
        </div>
      </div>

      {/* 统计行 */}
      <div className="mt-4 px-4 flex items-center justify-center gap-4 animate-fade-in delay-700">
        <div className="flex items-center gap-2">
          <img src={AVATAR_URL} alt="" className="h-7 w-7 rounded-full object-cover" />
          <div className="h-7 w-7 rounded-full bg-[#1a3d1a] text-white flex items-center justify-center">
            <Plus size={14} />
          </div>
          <span className="text-sm font-bold text-[#1a3d1a]">98K+</span>
        </div>
        <div className="h-6 w-px bg-gray-300" />
        <div className="flex items-center gap-1">
          <Star size={16} className="text-[#E86A10]" fill="#E86A10" />
          <span className="text-sm font-bold text-[#1a3d1a]">4.6</span>
        </div>
      </div>

      {/* 底部 3 图（无 max-height 约束） */}
      <BottomImages variant="mobile" />
    </div>
  )
}

/* ============================================================
 *  Word — 标题词，inline-block + animate-word-pop
 * ============================================================ */
function Word({ children, delay }: { children: React.ReactNode; delay: string }) {
  return (
    <span className={`inline-block animate-word-pop ${delay}`}>
      {children}
    </span>
  )
}

/* ============================================================
 *  ProductCard — 左侧商品卡（Cozy Cat House $49.99）
 * ============================================================ */
function ProductCard({ className, width }: { className?: string; width: string }) {
  return (
    <div className={className} style={{ width }}>
      <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '260 / 257' }}>
        <img
          src={PRODUCT_CARD_URL}
          alt="Cozy Cat House"
          className="w-full h-full object-cover"
        />
        <button
          type="button"
          aria-label="View product"
          className="absolute bottom-2 right-2 h-9 w-9 md:h-10 md:w-10 rounded-full bg-[#1a3d1a] text-white flex items-center justify-center hover:bg-[#2a5a2a] transition-colors"
        >
          <ArrowUpRight size={18} />
        </button>
      </div>
      <p
        className="mt-2 text-gray-700"
        style={{ fontSize: 'clamp(11px,0.9vw,14px)' }}
      >
        Cozy Cat House
      </p>
      <p
        className="font-bold text-[#1a3d1a]"
        style={{ fontSize: 'clamp(13px,1.1vw,17px)' }}
      >
        $49.99
      </p>
    </div>
  )
}

/* ============================================================
 *  VideoCard — 右侧视频卡（TikTok / YouTube reviews）
 * ============================================================ */
function VideoCard({ className, width }: { className?: string; width: string }) {
  return (
    <div className={className} style={{ width }}>
      <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '177 / 287' }}>
        <img
          src={VIDEO_CARD_URL}
          alt="Product reviews"
          className="w-full h-full object-cover"
        />
        <button
          type="button"
          aria-label="Play"
          className="absolute bottom-3 left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-[#1a3d1a] text-white flex items-center justify-center hover:bg-[#2a5a2a] transition-colors"
        >
          <Play size={18} fill="white" />
        </button>
      </div>
      <p
        className="mt-2 text-gray-700 leading-snug text-center"
        style={{ fontSize: 'clamp(9px,0.75vw,12px)' }}
      >
        Watch Product Reviews on TikTok and YouTube
      </p>
    </div>
  )
}

/* ============================================================
 *  BottomImages — 底部 3 图 + overlay（flex items-end, no gap）
 * ============================================================ */
function BottomImages({
  variant,
}: {
  variant: 'desktop' | 'tablet' | 'mobile'
}) {
  // 不同断点的 maxHeight 约束
  const leftRightMax =
    variant === 'desktop'
      ? 'min(70vh, 55vw)'
      : variant === 'tablet'
        ? '60vh'
        : 'none'
  const centerMax =
    variant === 'desktop'
      ? 'min(85vh, 70vw)'
      : variant === 'tablet'
        ? '75vh'
        : 'none'

  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end">
      {/* 左图 + overlay: 98K+ */}
      <div
        className="relative flex-1 animate-photo-reveal delay-700"
        style={{ maxHeight: leftRightMax }}
      >
        <img
          src={BOTTOM_LEFT_URL}
          alt=""
          className="w-full h-auto block"
          style={{ maxHeight: leftRightMax, objectFit: 'cover' }}
        />
        <Overlay98K />
      </div>

      {/* 中图（最宽） + overlay: Best Products + Explore Products 按钮 */}
      <div
        className="relative flex-[1.265] animate-photo-reveal delay-600"
        style={{ maxHeight: centerMax }}
      >
        <img
          src={BOTTOM_CENTER_URL}
          alt=""
          className="w-full h-auto block"
          style={{ maxHeight: centerMax, objectFit: 'cover' }}
        />
        <OverlayBestProducts />
      </div>

      {/* 右图 + overlay: 4.6 rating */}
      <div
        className="relative flex-1 animate-photo-reveal delay-800"
        style={{ maxHeight: leftRightMax }}
      >
        <img
          src={BOTTOM_RIGHT_URL}
          alt=""
          className="w-full h-auto block"
          style={{ maxHeight: leftRightMax, objectFit: 'cover' }}
        />
        <OverlayRating />
      </div>
    </div>
  )
}

/* ============================================================
 *  Overlays — 位于底部图上，bottom: clamp(20px, 4vh, 50px)
 * ============================================================ */

/* 左：98K+ + avatar stack */
function Overlay98K() {
  return (
    <div
      className="absolute left-0 right-0 flex items-center gap-2 animate-scale-in delay-1000"
      style={{ bottom: 'clamp(20px, 4vh, 50px)', left: 'clamp(12px, 2vw, 24px)' }}
    >
      <div className="flex -space-x-2">
        <img
          src={AVATAR_URL}
          alt=""
          className="h-8 w-8 rounded-full object-cover ring-2 ring-white"
        />
        <div className="h-8 w-8 rounded-full bg-[#1a3d1a] text-white flex items-center justify-center ring-2 ring-white">
          <Plus size={14} />
        </div>
      </div>
      <span className="text-base font-bold text-white drop-shadow-sm">98K+</span>
    </div>
  )
}

/* 中：Best Products for Your Pet + Explore Products pill button */
function OverlayBestProducts() {
  return (
    <div
      className="absolute left-0 right-0 flex flex-col items-center gap-3 animate-scale-in delay-1100"
      style={{ bottom: 'clamp(20px, 4vh, 50px)' }}
    >
      <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold text-center drop-shadow-sm">
        Best Products for Your Pet
      </h2>
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full bg-[#E86A10] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#d45e0d] transition-colors shadow-lg"
      >
        Explore Products
        <ArrowRight size={16} />
      </button>
    </div>
  )
}

/* 右：4.6 rating */
function OverlayRating() {
  return (
    <div
      className="absolute flex items-center gap-1.5 animate-scale-in delay-1200"
      style={{ bottom: 'clamp(20px, 4vh, 50px)', right: 'clamp(12px, 2vw, 24px)' }}
    >
      <Star size={20} className="text-[#E86A10]" fill="#E86A10" />
      <span className="text-base font-bold text-white drop-shadow-sm">4.6</span>
    </div>
  )
}
