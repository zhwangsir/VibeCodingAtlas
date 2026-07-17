import FadingVideo from './components/FadingVideo'

const HERO_VIDEO_SRC = '/videos/283f3553-e28f-428b-a723-d639c617eb2b.mp4'

const NAV_LINKS = ['Home', 'Studio', 'About', 'Journal', 'Reach Us']

/**
 * AetheraHero — 电影感视频背景 hero
 *
 * - 视频背景：top 300px + inset auto 0 0 0，rAF 淡入淡出循环
 * - 渐变叠加：from-white via-transparent to-white（上下渐隐）
 * - Navbar：max-w-7xl，左 Aethera® logo（Instrument Serif）+ 中 5 链接 + 右黑底 Begin Journey
 * - Hero：居中，Instrument Serif 标题（"silence," 和 "the eternal." <em> 灰化）+ 副文本 + 黑底 CTA
 *
 * 配色：白底黑字 #6F6F6F 灰色次要
 * 字体：Instrument Serif（标题）+ Inter（正文）
 */
export default function AetheraHero() {
  return (
    <div data-theme="aethera" className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* 视频背景层（z-0） */}
      <div className="absolute inset-0 z-0">
        <FadingVideo
          src={HERO_VIDEO_SRC}
          top="300px"
          inset="auto 0 0 0"
        />
      </div>

      {/* 渐变叠加层（from-white via-transparent to-white） */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />

      {/* Navbar（z-10） */}
      <nav className="relative z-10 max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
        {/* Logo */}
        <a
          href="#"
          className="text-3xl tracking-tight"
          style={{ fontFamily: "'Instrument Serif', serif", color: '#000000' }}
        >
          Aethera<sup className="text-xs">®</sup>
        </a>

        {/* 中：导航链接 */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href="#"
              className="text-sm transition-colors"
              style={{ color: i === 0 ? '#000000' : '#6F6F6F' }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* 右：CTA */}
        <button
          type="button"
          className="rounded-full px-6 py-2.5 text-sm transition-transform duration-300 hover:scale-[1.03]"
          style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
        >
          Begin Journey
        </button>
      </nav>

      {/* Hero 内容（z-10） */}
      <section
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        style={{ paddingTop: 'calc(8rem - 75px)', paddingBottom: '10rem' }}
      >
        {/* 标题 */}
        <h1
          className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl max-w-7xl font-normal"
          style={{
            fontFamily: "'Instrument Serif', serif",
            lineHeight: 0.95,
            letterSpacing: '-2.46px',
            color: '#000000',
          }}
        >
          Beyond <em className="not-italic" style={{ color: '#6F6F6F' }}>silence,</em> we build{' '}
          <em className="not-italic" style={{ color: '#6F6F6F' }}>
            the eternal.
          </em>
        </h1>

        {/* 副文本 */}
        <p
          className="animate-fade-rise-delay text-base sm:text-lg max-w-2xl mt-8 leading-relaxed"
          style={{ color: '#6F6F6F' }}
        >
          Building platforms for brilliant minds, fearless makers, and thoughtful souls. Through
          the noise, we craft digital havens for deep work and pure flows.
        </p>

        {/* CTA 按钮 */}
        <button
          type="button"
          className="animate-fade-rise-delay-2 rounded-full px-14 py-5 text-base mt-12 transition-transform duration-300 hover:scale-[1.03]"
          style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
        >
          Begin Journey
        </button>
      </section>
    </div>
  )
}
