/* ============================================================
 *  Marketeam — 营销人才平台全屏 Hero
 *  字体:Inter(400-700) + Urbanist(600,700)
 *  核心:打字机标题 + conic-gradient 旋转边框按钮 + 4 层同心圆轨道头像
 *  背景:全屏图片 + 底部 logo ticker 无限滚动
 * ============================================================ */
import { useState, useEffect, useRef, type CSSProperties } from 'react'
import { ChevronRight, MousePointer } from 'lucide-react'

/* ===== 资源 URL(已本地化) ===== */
const BG_IMAGE = '/images/56af5012-2263-45d3-849a-8688084d7c2a_1280.webp'

const LOGO_URL = '/marketeam/logo.png'

const NAV_LINKS = ['Your Team', 'Solutions', 'Blog', 'Pricing']

const HEADING_TEXT =
  'Unlock Top Marketing Talent You Thought Was Out of Reach -- Now Just One Click Away!'

/* 前 67 字符黑色,其余白色 */
const HEADING_SPLIT = 67

/* ===== 头像数据 ===== */
type AvatarDef = {
  src: string
  orbit: number
  angle: number
  radius: number
  size: number
  shape: 'round' | 'square'
  borderRadius?: number
  glow: string
  delay: number
}

const AVATARS: AvatarDef[] = [
  {
    src: '/marketeam/avatar-1.png',
    orbit: 1,
    angle: 270,
    radius: 177,
    size: 58,
    shape: 'square',
    borderRadius: 20,
    glow: 'mk-glow-purple',
    delay: 0.6,
  },
  {
    src: '/marketeam/avatar-2.png',
    orbit: 2,
    angle: 60,
    radius: 251,
    size: 58,
    shape: 'round',
    glow: 'mk-glow-yellow',
    delay: 0.8,
  },
  {
    src: '/marketeam/avatar-3.png',
    orbit: 2,
    angle: 180,
    radius: 251,
    size: 78,
    shape: 'round',
    glow: 'mk-glow-pink',
    delay: 1.0,
  },
  {
    src: '/marketeam/avatar-4.png',
    orbit: 2,
    angle: 300,
    radius: 251,
    size: 58,
    shape: 'square',
    borderRadius: 20,
    glow: 'mk-glow-blue',
    delay: 1.2,
  },
  {
    src: '/marketeam/avatar-5.png',
    orbit: 3,
    angle: 130,
    radius: 325,
    size: 88,
    shape: 'round',
    glow: 'mk-glow-pink',
    delay: 1.5,
  },
  {
    src: '/marketeam/avatar-6.png',
    orbit: 4,
    angle: 30,
    radius: 399,
    size: 58,
    shape: 'round',
    glow: 'mk-glow-purple',
    delay: 1.8,
  },
  {
    src: '/marketeam/avatar-7.png',
    orbit: 4,
    angle: 95,
    radius: 399,
    size: 88,
    shape: 'square',
    borderRadius: 24,
    glow: 'mk-glow-orange',
    delay: 2.0,
  },
  {
    src: '/marketeam/avatar-8.png',
    orbit: 4,
    angle: 220,
    radius: 399,
    size: 88,
    shape: 'square',
    borderRadius: 24,
    glow: 'mk-glow-pink',
    delay: 2.2,
  },
  {
    src: '/marketeam/avatar-9.png',
    orbit: 4,
    angle: 320,
    radius: 399,
    size: 58,
    shape: 'round',
    glow: 'mk-glow-purple',
    delay: 2.3,
  },
]

/* ===== 轨道数据 ===== */
const ORBITS = [
  { id: 1, size: 353, spinClass: 'mk-spin-left' },
  { id: 2, size: 501, spinClass: 'mk-spin-right-40' },
  { id: 3, size: 649, spinClass: 'mk-spin-right-50' },
  { id: 4, size: 797, spinClass: 'mk-spin-left-60' },
]

/* ===== Logo ticker SVGs(已本地化) ===== */
const LOGO_SVGS = [
  '/marketeam/1e7b0e6fcc016cd28aec5c68990118b8c54c35a5.svg',
  '/marketeam/3eac03c183db2ae080d910159211c14843398b61.svg',
  '/marketeam/17705a4c0023a0e5a99154dfb10582adbbf4260b.svg',
  '/marketeam/0e5f442b09dc5c248e3e60d40a65505fb1887228.svg',
  '/marketeam/63f99030ceb459e3c9ab9e429cfa2353491d3816.svg',
]

/* 5 个 logo × 4 = 20 个为一组,复制 2 组用于无缝滚动 */
const TICKER_LOGOS = [...LOGO_SVGS, ...LOGO_SVGS, ...LOGO_SVGS, ...LOGO_SVGS]

/* ============================================================
 *  useCountUp — 从 0 到 target,duration 内 easeOutCubic,delay 后启动
 * ============================================================ */
function useCountUp(target: number, duration: number, delay: number) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let rafId = 0
    const startTimer = setTimeout(() => {
      const startTime = performance.now()
      const tick = (now: number) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(eased * target))
        if (progress < 1) {
          rafId = requestAnimationFrame(tick)
        }
      }
      rafId = requestAnimationFrame(tick)
    }, delay)

    return () => {
      clearTimeout(startTimer)
      cancelAnimationFrame(rafId)
    }
  }, [target, duration, delay])

  return count
}

/* ============================================================
 *  TypewriterHeading — 逐字符打字,前 splitIndex 字符黑色其余白色
 * ============================================================ */
function TypewriterHeading({
  text,
  speed,
  delay,
  splitIndex,
}: {
  text: string
  speed: number
  delay: number
  splitIndex: number
}) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    let i = 0
    const startTimer = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        i++
        setDisplayed(text.substring(0, i))
        if (i >= text.length) {
          if (intervalRef.current) clearInterval(intervalRef.current)
          setDone(true)
        }
      }, speed)
    }, delay)

    return () => {
      clearTimeout(startTimer)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [text, speed, delay])

  return (
    <h1
      className="mk-urbanist mk-heading mk-anim-fade-up"
      style={{
        fontSize: '64px',
        fontWeight: 600,
        lineHeight: '64px',
        letterSpacing: '-1.5px',
        margin: 0,
        maxWidth: '600px',
      }}
    >
      <span style={{ color: '#000000' }}>{displayed.substring(0, splitIndex)}</span>
      <span style={{ color: '#ffffff' }}>{displayed.substring(splitIndex)}</span>
      {!done && <span className="mk-cursor-bar" />}
    </h1>
  )
}

/* ============================================================
 *  Avatar — 轨道上的头像,带 fly-in 动画
 * ============================================================ */
function Avatar({ avatar }: { avatar: AvatarDef }) {
  const transform = `translate(-50%, -50%) rotate(${avatar.angle}deg) translate(${avatar.radius}px) rotate(-${avatar.angle}deg)`

  const style: CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: avatar.size,
    height: avatar.size,
    transform,
    borderRadius:
      avatar.shape === 'round' ? '50%' : `${avatar.borderRadius || 20}px`,
    overflow: 'hidden',
  }

  return (
    <div className={avatar.glow} style={style}>
      <img
        src={avatar.src}
        alt=""
        className="mk-anim-pop"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          borderRadius: 'inherit',
          animationDelay: `${avatar.delay}s`,
        }}
      />
    </div>
  )
}

/* ============================================================
 *  CirclesVisualization — 4 层同心圆轨道 + 中心计数
 * ============================================================ */
function CirclesVisualization() {
  const count = useCountUp(20, 2000, 1200)

  return (
    <div
      className="mk-circles-wrap mk-anim-scale-in"
      style={{
        position: 'relative',
        width: '720px',
        height: '720px',
        animationDelay: '0.3s',
      }}
    >
      {ORBITS.map((orbit) => {
        const orbitAvatars = AVATARS.filter((a) => a.orbit === orbit.id)
        return (
          <div
            key={orbit.id}
            className={`mk-orbit-container ${orbit.spinClass}`}
            style={{ width: orbit.size, height: orbit.size }}
          >
            {/* 轨道环视觉层 */}
            <div className="mk-orbit-ring" />
            {/* 头像 */}
            {orbitAvatars.map((avatar, i) => (
              <Avatar key={i} avatar={avatar} />
            ))}
            {/* 轨道 1 内中心内容,反向旋转保持正向 */}
            {orbit.id === 1 && (
              <div
                className="mk-counter-left-30"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                  pointerEvents: 'none',
                }}
              >
                <div
                  className="mk-urbanist"
                  style={{ fontSize: '64px', fontWeight: 500, lineHeight: 1, color: '#000' }}
                >
                  {count}k+
                </div>
                <div
                  className="mk-urbanist"
                  style={{ fontSize: '16px', fontWeight: 600, color: '#000', marginTop: '8px' }}
                >
                  Specialists
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

/* ============================================================
 *  LogoTicker — 底部 logo 无限滚动条
 * ============================================================ */
function LogoTicker() {
  return (
    <div
      className="mk-ticker-mask mk-anim-fade-up"
      style={{
        overflow: 'hidden',
        animationDelay: '0.6s',
      }}
    >
      <div className="mk-ticker-track">
        {/* 复制两组实现无缝循环 */}
        {[...TICKER_LOGOS, ...TICKER_LOGOS].map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            style={{
              width: '137px',
              height: '40px',
              objectFit: 'contain',
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </div>
  )
}

/* ============================================================
 *  MarketeamHero — 主入口
 * ============================================================ */
export default function MarketeamHero() {
  return (
    <div
      data-theme="marketeam"
      className="app"
      style={{
        background: `url(${BG_IMAGE}) center center / cover no-repeat`,
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ===== Header ===== */}
      <header
        className="mk-anim-fade-down"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px 64px',
          maxWidth: '1920px',
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* 左:logo + nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
          <img src={LOGO_URL} alt="Marketeam" style={{ height: '32px' }} />
          <nav className="mk-nav-links" style={{ display: 'flex', gap: '32px' }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="mk-link"
                style={{ color: '#000000', fontSize: '15px', fontWeight: 400, textDecoration: 'none' }}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* 右:Log In + Join Now */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <a
            href="#"
            className="mk-link"
            style={{ color: '#ffffff', fontSize: '15px', fontWeight: 500, textDecoration: 'none' }}
          >
            Log In
          </a>
          <div className="btn-border-wrap">
            <button
              type="button"
              className="mk-btn"
              style={{
                position: 'relative',
                borderRadius: '50px',
                background: '#000000',
                color: '#ffffff',
                padding: '12px 26px',
                fontSize: '15px',
                fontWeight: 500,
                border: 'none',
                cursor: 'pointer',
                overflow: 'hidden',
                zIndex: 1,
              }}
            >
              <span style={{ position: 'relative', zIndex: 2 }}>Join Now</span>
            </button>
          </div>
        </div>
      </header>

      {/* ===== Hero 行(左内容 + 右圆环) ===== */}
      <div
        className="mk-hero-row"
        style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          padding: '0 64px',
          maxWidth: '1920px',
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
          gap: '40px',
        }}
      >
        {/* 左:标题 + 按钮 + cursor */}
        <div style={{ flex: '0 1 600px', paddingTop: '40px', position: 'relative' }}>
          <TypewriterHeading
            text={HEADING_TEXT}
            speed={35}
            delay={400}
            splitIndex={HEADING_SPLIT}
          />

          {/* Start Project 按钮 — 打字结束后出现(3.2s) */}
          <div
            className="mk-anim-fade-up btn-border-wrap"
            style={{ marginTop: '32px', animationDelay: '3.2s' }}
          >
            <button
              type="button"
              className="mk-btn mk-btn-reverse"
              style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                borderRadius: '50px',
                background: '#060218',
                color: '#ffffff',
                padding: '14px 28px',
                fontSize: '16px',
                fontWeight: 500,
                border: 'none',
                cursor: 'pointer',
                overflow: 'hidden',
                zIndex: 1,
              }}
            >
              <span style={{ position: 'relative', zIndex: 2 }}>Start Project</span>
              {/* 右箭头 chevron */}
              <ChevronRight style={{ position: 'relative', zIndex: 2, width: 18, height: 18, color: '#ffffff' }} />
            </button>
          </div>

          {/* Cursor 元素 — 紫色指针 + David 徽章 */}
          <div
            className="mk-anim-fade-up"
            style={{
              marginLeft: '290px',
              marginTop: '40px',
              animationDelay: '3.6s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            {/* 紫色指针 */}
            <MousePointer style={{ width: 20, height: 24, color: '#A068FF', fill: '#A068FF' }} />
            {/* David 徽章 */}
            <span
              style={{
                background: '#A068FF',
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: 500,
                padding: '8px 16px',
                borderRadius: '20px',
                whiteSpace: 'nowrap',
              }}
            >
              David
            </span>
          </div>
        </div>

        {/* 右:圆环可视化 */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="mk-circles-responsive">
            <CirclesVisualization />
          </div>
        </div>
      </div>

      {/* ===== Logo Ticker 底部(PROMPT 仅指定 logo 条带,无文本标签)===== */}
      <div style={{ padding: '0 0 24px 0', marginTop: 'auto' }}>
        <LogoTicker />
      </div>

      {/* 矮视口(≤820px 高)桌面端适配:缩小标题与圆环,避免 CTA/ticker 被裁切
           注意:transform:scale 不改变布局高度,需给外层固定高度并让内层居中溢出 */}
      <style>{`
        @media (min-width: 1024px) and (max-height: 820px) {
          [data-theme='marketeam'] .mk-heading {
            font-size: 42px !important;
            line-height: 44px !important;
          }
          [data-theme='marketeam'] .mk-circles-responsive {
            height: 470px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: visible;
            transform: scale(0.62) !important;
          }
          [data-theme='marketeam'] .mk-circles-responsive .mk-circles-wrap {
            flex: none;
          }
        }
      `}</style>
    </div>
  )
}
