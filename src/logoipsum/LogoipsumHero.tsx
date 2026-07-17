/* ============================================================
 *  Logoipsum — 视频背景 + 玻璃态导航 + 数据洞察 Hero
 *  字体: Schibsted Grotesk + Inter (@fontsource) + Fustat (Google Fonts)
 *  核心: 自定义 rAF 视频淡入淡出系统(250ms)+ 居中搜索框
 * ============================================================ */
import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ChevronDown,
  Star,
  Sparkles,
  Paperclip,
  Mic,
  Search,
  ArrowUp,
  Menu,
  X,
} from 'lucide-react'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

/* ===== 背景视频 URL ===== */
const BG_VIDEO =
  '/videos/be71947f-f16e-4a14-810c-06e83d23ddb5.mp4'

/* ===== 导航数据 ===== */
const NAV_LINKS = ['Platform', 'Features', 'Projects', 'Community', 'Contact']

/* ============================================================
 *  useVideoFade — 自定义 rAF 淡入淡出系统
 *  - 加载/循环开始: 250ms 淡入
 *  - 距结束 0.55s 时: 250ms 淡出
 *  - ended: 重置并重新播放
 *  - 每次淡入/淡出取消正在运行的 rAF,避免竞争
 *  - 从当前 opacity 续算,无跳变
 * ============================================================ */
function useVideoFade() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const fadingOutRef = useRef(false)

  const cancelRaf = () => {
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }

  const fadeTo = useCallback((target: number, duration: number) => {
    const video = videoRef.current
    if (!video) return
    cancelRaf()
    const startOpacity = video.style.opacity ? parseFloat(video.style.opacity) : 0
    const start = performance.now()
    const step = (now: number) => {
      if (!video) return
      const elapsed = now - start
      const t = Math.min(elapsed / duration, 1)
      const value = startOpacity + (target - startOpacity) * t
      video.style.opacity = String(value)
      if (t < 1) {
        rafRef.current = requestAnimationFrame(step)
      } else {
        rafRef.current = null
      }
    }
    rafRef.current = requestAnimationFrame(step)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onLoadedData = () => {
      fadingOutRef.current = false
      video.style.opacity = '0'
      fadeTo(1, 250)
    }

    const onTimeUpdate = () => {
      if (fadingOutRef.current) return
      const remaining = video.duration - video.currentTime
      if (!isNaN(video.duration) && remaining <= 0.55) {
        fadingOutRef.current = true
        fadeTo(0, 250)
      }
    }

    const onEnded = () => {
      video.style.opacity = '0'
      fadingOutRef.current = false
      window.setTimeout(() => {
        video.currentTime = 0
        video.play().catch(() => {})
        fadeTo(1, 250)
      }, 100)
    }

    video.addEventListener('loadeddata', onLoadedData)
    video.addEventListener('timeupdate', onTimeUpdate)
    video.addEventListener('ended', onEnded)

    return () => {
      cancelRaf()
      video.removeEventListener('loadeddata', onLoadedData)
      video.removeEventListener('timeupdate', onTimeUpdate)
      video.removeEventListener('ended', onEnded)
    }
  }, [fadeTo])

  return videoRef
}

/* ============================================================
 *  LogoipsumHero — 主入口
 * ============================================================ */
export default function LogoipsumHero() {
  const videoRef = useVideoFade()
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')

  return (
    <div
      data-theme="logoipsum"
      className="logoipsum-root relative min-h-screen w-full overflow-hidden bg-white"
    >
      {/* ===== 背景视频(115% / 居中 / 顶部对齐) ===== */}
      <video
        ref={videoRef}
        src={BG_VIDEO}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: '115%', height: '115%', opacity: 0 }}
      />

      {/* ===== 顶部柔化渐变 ===== */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-white/40 via-transparent to-white/30" />

      {/* ===== 导航栏 ===== */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-[120px] py-4">
        {/* Logo */}
        <a href="#" className="li-logo">
          Logoipsum
        </a>

        {/* 桌面导航 */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className="li-nav-link flex items-center gap-1">
              {link}
              {link === 'Features' && <ChevronDown className="h-3.5 w-3.5" />}
            </a>
          ))}
        </nav>

        {/* 右侧按钮 */}
        <div className="hidden md:flex items-center gap-3">
          <button type="button" className="li-signup">
            Sign Up
          </button>
          <button type="button" className="li-login">
            Log In
          </button>
        </div>

        {/* 移动端汉堡 */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex items-center justify-center md:hidden li-menu-toggle"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {/* 移动端下拉 */}
      {menuOpen && (
        <div className="md:hidden relative z-20 px-6 pb-4 flex flex-col gap-2 bg-white/80 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className="li-nav-link py-2 flex items-center gap-1">
              {link}
              {link === 'Features' && <ChevronDown className="h-3.5 w-3.5" />}
            </a>
          ))}
          <div className="flex gap-2 mt-2">
            <button type="button" className="li-signup flex-1">Sign Up</button>
            <button type="button" className="li-login flex-1">Log In</button>
          </div>
        </div>
      )}

      {/* ===== Hero 内容(向上偏移 50px) ===== */}
      <main className="relative z-10 -mt-[50px] flex flex-col items-center px-6 md:px-8 pt-[60px]">
        {/* Badge */}
        <div className="flex items-center gap-2 mb-[34px]">
          <span className="li-badge-dark">
            <Star className="h-3 w-3 fill-current" />
            <span>New</span>
          </span>
          <span className="li-badge-light">Discover what's possible</span>
        </div>

        {/* 主标题 */}
        <h1 className="li-headline text-center">Transform Data Quickly</h1>

        {/* 副标题 */}
        <p className="li-subtext text-center mt-[34px]">
          Upload your information and get powerful insights right away. Work smarter and achieve
          goals effortlessly.
        </p>

        {/* 搜索输入框 */}
        <div className="li-search-wrap mt-[44px]">
          {/* 顶部 credits 行 */}
          <div className="li-search-top">
            <div className="li-credits-left">
              <span className="li-credits-text">60/450 credits</span>
              <button type="button" className="li-upgrade">Upgrade</button>
            </div>
            <div className="li-credits-right">
              <Sparkles className="h-3 w-3" />
              <span className="li-credits-text">Powered by GPT-4o</span>
            </div>
          </div>

          {/* 主输入区 */}
          <div className="li-search-main">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value.slice(0, 3000))}
              placeholder="Type question..."
              className="li-search-input"
              maxLength={3000}
            />
            <button type="submit" className="li-search-submit" aria-label="Submit">
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>

          {/* 底部操作行 */}
          <div className="li-search-bottom">
            <div className="li-action-group">
              <button type="button" className="li-action-btn">
                <Paperclip className="h-3.5 w-3.5" />
                <span>Attach</span>
              </button>
              <button type="button" className="li-action-btn">
                <Mic className="h-3.5 w-3.5" />
                <span>Voice</span>
              </button>
              <button type="button" className="li-action-btn">
                <Search className="h-3.5 w-3.5" />
                <span>Prompts</span>
              </button>
            </div>
            <span className="li-counter">{query.length}/3,000</span>
          </div>
        </div>
      </main>

      {/* ===== 内联样式 ===== */}
      <style>{`
        @import url('/logoipsum/fonts.css');

        .logoipsum-root {
          font-family: 'Inter', 'Noto Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Logo */
        .li-logo {
          font-family: 'Schibsted Grotesk', sans-serif;
          font-weight: 600; font-size: 24px; letter-spacing: -1.44px;
          color: #000; text-decoration: none;
        }

        /* 导航链接 */
        .li-nav-link {
          font-family: 'Schibsted Grotesk', sans-serif;
          font-weight: 500; font-size: 16px; letter-spacing: -0.2px;
          color: #000; text-decoration: none;
          transition: opacity 0.2s ease;
        }
        .li-nav-link:hover { opacity: 0.65; }

        .li-signup {
          width: 82px; height: 40px;
          font-family: 'Schibsted Grotesk', sans-serif;
          font-weight: 500; font-size: 14px;
          color: #000; background: transparent;
          border: 1px solid rgba(0,0,0,0.15);
          border-radius: 8px; cursor: pointer;
          transition: all 0.2s ease;
        }
        .li-signup:hover { background: #f8f8f8; }

        .li-login {
          width: 101px; height: 40px;
          font-family: 'Schibsted Grotesk', sans-serif;
          font-weight: 500; font-size: 14px;
          color: #fff; background: #000;
          border: none; border-radius: 8px; cursor: pointer;
          transition: all 0.2s ease;
        }
        .li-login:hover { background: #1a1a1a; transform: translateY(-1px); }

        .li-menu-toggle {
          width: 40px; height: 40px; border-radius: 8px;
          background: #f8f8f8; border: 1px solid rgba(0,0,0,0.08); color: #000;
        }

        /* Badge */
        .li-badge-dark {
          display: inline-flex; align-items: center; gap: 4px;
          background: #0e1311; color: #fff;
          padding: 4px 10px; border-radius: 9999px;
          font-family: 'Inter', sans-serif; font-weight: 500; font-size: 12px;
        }
        .li-badge-light {
          display: inline-flex; align-items: center;
          background: #f8f8f8; color: #000;
          padding: 4px 12px; border-radius: 9999px;
          font-family: 'Inter', sans-serif; font-weight: 400; font-size: 14px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.04);
        }

        /* 主标题 */
        .li-headline {
          font-family: 'Fustat', sans-serif;
          font-weight: 700; font-size: clamp(40px, 8vw, 80px);
          letter-spacing: -4.8px; line-height: 1; color: #000;
        }

        /* 副标题 */
        .li-subtext {
          font-family: 'Fustat', sans-serif;
          font-weight: 500; font-size: clamp(16px, 2vw, 20px);
          letter-spacing: -0.4px; line-height: 1.5;
          color: #505050;
          max-width: 736px; width: 100%;
        }

        /* 搜索框 */
        .li-search-wrap {
          width: 100%; max-width: 728px;
          background: rgba(0,0,0,0.24);
          backdrop-filter: blur(16px) saturate(140%);
          -webkit-backdrop-filter: blur(16px) saturate(140%);
          border-radius: 18px; padding: 14px;
          display: flex; flex-direction: column; gap: 12px;
        }

        .li-search-top {
          display: flex; align-items: center; justify-content: space-between;
        }
        .li-credits-left { display: flex; align-items: center; gap: 10px; }
        .li-credits-right {
          display: flex; align-items: center; gap: 6px; color: #fff;
        }
        .li-credits-text {
          font-family: 'Schibsted Grotesk', sans-serif;
          font-weight: 500; font-size: 12px; color: #fff;
        }
        .li-upgrade {
          font-family: 'Schibsted Grotesk', sans-serif;
          font-weight: 500; font-size: 12px;
          background: rgba(90,225,76,0.89); color: #0e1311;
          padding: 3px 10px; border-radius: 9999px; border: none; cursor: pointer;
          transition: all 0.2s ease;
        }
        .li-upgrade:hover { background: rgba(90,225,76,1); }

        .li-search-main {
          display: flex; align-items: center; gap: 10px;
          background: #fff; border-radius: 12px; padding: 10px 12px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        }
        .li-search-input {
          flex: 1; background: transparent; border: none; outline: none;
          font-family: 'Schibsted Grotesk', sans-serif;
          font-size: 16px; color: #000;
        }
        .li-search-input::placeholder { color: rgba(0,0,0,0.6); }
        .li-search-submit {
          display: inline-flex; align-items: center; justify-content: center;
          width: 36px; height: 36px; border-radius: 9999px;
          background: #000; color: #fff; border: none; cursor: pointer;
          transition: all 0.2s ease;
        }
        .li-search-submit:hover { transform: scale(1.06); background: #1a1a1a; }

        .li-search-bottom {
          display: flex; align-items: center; justify-content: space-between;
        }
        .li-action-group { display: flex; align-items: center; gap: 8px; }
        .li-action-btn {
          display: inline-flex; align-items: center; gap: 5px;
          font-family: 'Schibsted Grotesk', sans-serif;
          font-weight: 500; font-size: 12px; color: #fff;
          background: rgba(255,255,255,0.12);
          padding: 5px 10px; border-radius: 6px; border: none; cursor: pointer;
          transition: all 0.2s ease;
        }
        .li-action-btn:hover { background: rgba(255,255,255,0.22); }
        .li-counter {
          font-family: 'Schibsted Grotesk', sans-serif;
          font-weight: 500; font-size: 12px; color: rgba(255,255,255,0.6);
        }
      `}</style>
    </div>
  )
}
