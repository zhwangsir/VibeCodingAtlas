/* ============================================================
 *  Viktor — 创意作品集全屏 Hero
 *  字体:Figtree(400/500/600,@fontsource 本地加载)
 *  核心:三段视频交叉淡入 + 实时时钟 + 视频切换器 + 巨型名字
 * ============================================================ */
import { useEffect, useRef, useState } from 'react'
import '@fontsource/figtree/400.css'
import '@fontsource/figtree/500.css'
import '@fontsource/figtree/600.css'

/* ===== 三段背景视频 URL(本地) ===== */
const VIDEOS = [
  '/videos/874273ea-684a-4e90-bb96-8fdfde48d53d.mp4',
  '/videos/3c9c2a9d-807b-4482-80e6-dd6d9dfd4545.mp4',
  '/videos/4214ea73-b963-46a4-8327-61489192de99.mp4',
]

/* ===== 视频切换按钮标签 ===== */
const ROLE_LINKS = [
  { idx: '01', label: 'WATER WAVE' },
  { idx: '02', label: 'GRIDWAVE' },
  { idx: '03', label: 'LIGHT TUNNEL' },
]

/* ===== 桌面导航链接 ===== */
const NAV_LINKS = [
  { idx: '01', label: 'Works' },
  { idx: '02', label: 'Services' },
  { idx: '03', label: 'About' },
  { idx: '04', label: 'Contact' },
]

const EMAIL = 'Davies@gmail.com'

/* ============================================================
 *  useClock — 实时时钟 (CUP HH:MM:SS, 24h, en-GB)
 * ============================================================ */
function useClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })
    const tick = () => setTime(`CUP ${fmt.format(new Date())}`)
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

/* ============================================================
 *  useVideoPreload — 预加载所有视频为 blob,加速切换
 *  失败时回退到原始 URL
 * ============================================================ */
function useVideoPreload(urls: string[]) {
  const [srcMap, setSrcMap] = useState<Record<number, string>>({})

  useEffect(() => {
    let cancelled = false
    const objUrls: string[] = []

    Promise.all(
      urls.map(async (url, i) => {
        try {
          const res = await fetch(url, { mode: 'cors' })
          if (!res.ok) throw new Error('bad status')
          const blob = await res.blob()
          const objUrl = URL.createObjectURL(blob)
          objUrls.push(objUrl)
          return [i, objUrl] as const
        } catch {
          return [i, url] as const
        }
      })
    ).then((entries) => {
      if (cancelled) {
        objUrls.forEach((u) => URL.revokeObjectURL(u))
        return
      }
      const map: Record<number, string> = {}
      entries.forEach(([i, u]) => {
        map[i] = u
      })
      setSrcMap(map)
    })

    return () => {
      cancelled = true
      objUrls.forEach((u) => URL.revokeObjectURL(u))
    }
  }, [urls])

  return srcMap
}

/* ============================================================
 *  useReveal — IntersectionObserver 一次性入场
 * ============================================================ */
function useReveal<T extends HTMLElement>(threshold = 0.35) {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true)
            obs.disconnect()
          }
        })
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, visible }
}

/* ============================================================
 *  Navbar — 顶部导航 + 桌面链接 + 邮箱时钟 + 移动菜单
 * ============================================================ */
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const clock = useClock()

  return (
    <header className="vk-navbar">
      <nav className="vk-navbar-inner" aria-label="Primary">
        {/* 左:桌面导航 */}
        <ul className="vk-nav-links">
          {NAV_LINKS.map((item) => (
            <li key={item.idx}>
              <a className="vk-nav-link" href={`#${item.label.toLowerCase()}`}>
                <span className="vk-nav-link-idx">{item.idx} /</span>
                <span className="vk-nav-link-label">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* 右:邮箱 + 时钟 */}
        <div className="vk-nav-right">
          <a className="vk-nav-email" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <span className="vk-nav-clock" role="status" aria-live="polite">
            {clock}
          </span>
        </div>

        {/* 移动:菜单切换 */}
        <button
          className="vk-menu-toggle"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="vk-mobile-panel"
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {/* 移动菜单面板 (CSS Grid 0fr -> 1fr 平滑展开) */}
      <div
        id="vk-mobile-panel"
        className={`vk-mobile-panel${mobileOpen ? ' is-open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <div className="vk-mobile-panel-inner">
          <ul className="vk-mobile-links">
            {NAV_LINKS.map((item) => (
              <li key={item.idx}>
                <a
                  className="vk-mobile-link"
                  href={`#${item.label.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="vk-mobile-link-idx">{item.idx} /</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="vk-mobile-footer">
            <a className="vk-mobile-email" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            <span className="vk-mobile-clock">{clock}</span>
          </div>
        </div>
      </div>
    </header>
  )
}

/* ============================================================
 *  ViktorHero — 主入口
 * ============================================================ */
export default function ViktorHero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const preloaded = useVideoPreload(VIDEOS)
  const nameReveal = useReveal<HTMLHeadingElement>()
  const ctaTextReveal = useReveal<HTMLParagraphElement>()
  const ctaBtnReveal = useReveal<HTMLButtonElement>()

  // slide 1 (index 0) 为粉色主题;其他为白色主题
  const isAccent = activeIndex === 0

  return (
    <div data-theme="viktor">
      {/* ===== 背景视频层 (z-0) ===== */}
      <div className="vk-video-stack" aria-hidden="true">
        {VIDEOS.map((url, i) => (
          <video
            key={i}
            className={`vk-video${i === activeIndex ? ' is-active' : ''}`}
            src={preloaded[i] || url}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        ))}
      </div>
      <div className="vk-video-overlay" aria-hidden="true" />

      {/* ===== Navbar (z-10) ===== */}
      <Navbar />

      {/* ===== Hero (z-2) ===== */}
      <main className="vk-hero">
        <div className="vk-hero-inner">
          {/* ===== 上区:视频切换器 + 可用状态 ===== */}
          <section className="vk-hero-top" aria-label="Showcase selector">
            <div className="vk-switcher">
              {ROLE_LINKS.map((role, i) => (
                <button
                  key={role.idx}
                  className={`vk-role-link${i === activeIndex ? ' is-active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                  aria-pressed={i === activeIndex}
                >
                  <span className="vk-role-idx">{role.idx} /</span>
                  {role.label}
                </button>
              ))}
            </div>

            <div className="vk-availability" role="status" aria-live="polite">
              <span className={`vk-dot${isAccent ? ' is-accent' : ''}`} />
              <span className="vk-availability-text">Available for work</span>
            </div>
          </section>

          {/* ===== 下区:巨型名字 + CTA ===== */}
          <section className="vk-hero-bottom" aria-label="Introduction">
            <div className="vk-name-col">
              <h1
                ref={nameReveal.ref}
                className={`vk-name vk-reveal-up${nameReveal.visible ? ' is-visible' : ''}`}
              >
                Viktor
                <span className={`vk-name-period${isAccent ? ' is-accent' : ''}`}>.</span>
              </h1>
            </div>

            <div className="vk-cta-col">
              <p
                ref={ctaTextReveal.ref}
                className={`vk-cta-text vk-reveal-right${ctaTextReveal.visible ? ' is-visible' : ''}`}
              >
                I craft bold brands and modern websites with purpose — blending
                strategy, design, and motion into experiences that feel alive.
              </p>

              <button
                ref={ctaBtnReveal.ref}
                className={`vk-start-btn vk-reveal-right vk-reveal-right-delay${ctaBtnReveal.visible ? ' is-visible' : ''}`}
              >
                <span className="vk-start-btn-label">start a project</span>
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
