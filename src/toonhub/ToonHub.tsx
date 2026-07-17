/* ============================================================
 *  TOONHUB — 角色手办轮播(Full-viewport hero)
 *  字体:Inter(body)+ Anton(ghost text + DISCOVER IT)
 *  核心:4 张角色图按角色(center/left/right/back)定位 + 缩放 + 模糊
 *  背景:随 activeIndex 切换纯色 + 650ms 缓动过渡
 *  SVG fractalNoise 颗粒叠加 + 巨型 "3D SHAPE" ghost 文字
 * ============================================================ */
import { useState, useEffect, useCallback, type CSSProperties } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

/* ===== 4 张角色图(精确 URL + 配色)===== */
const IMAGES = [
  {
    src: '/toonhub/1.02464a56.png',
    bg: '#F4845F',
    panel: '#F79B7F',
  },
  {
    src: '/toonhub/2.b977faab.png',
    bg: '#6BBF7A',
    panel: '#85CC92',
  },
  {
    src: '/toonhub/3.4df853b4.png',
    bg: '#E882B4',
    panel: '#ED9DC4',
  },
  {
    src: '/toonhub/4.4457fbce.png',
    bg: '#6EB5FF',
    panel: '#8DC4FF',
  },
] as const

/* SVG fractalNoise 颗粒 data URI(opacity 0.08 inside SVG) */
const GRAIN_DATA_URI =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")"

/* 650ms 缓动函数 */
const EASE = 'cubic-bezier(0.4,0,0.2,1)'
const DURATION = 650

/* ============================================================
 *  useIsMobile — 监听 innerWidth < 640
 * ============================================================ */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 640 : false
  )
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return isMobile
}

/* ============================================================
 *  getItemStyle — 根据角色返回定位样式
 *  center/left/right/back 各有不同的位置、缩放、模糊、不透明度
 * ============================================================ */
type Role = 'center' | 'left' | 'right' | 'back'

function getItemStyle(role: Role, isMobile: boolean): CSSProperties {
  const base: CSSProperties = {
    position: 'absolute',
    aspectRatio: '0.6 / 1',
    transform: 'translateX(-50%) scale(1)',
    transition: `transform ${DURATION}ms ${EASE}, filter ${DURATION}ms ${EASE}, opacity ${DURATION}ms ${EASE}, left ${DURATION}ms ${EASE}`,
    willChange: 'transform, filter, opacity',
  }

  switch (role) {
    case 'center':
      return {
        ...base,
        left: '50%',
        bottom: isMobile ? '22%' : 0,
        height: isMobile ? '60%' : '92%',
        transform: `translateX(-50%) scale(${isMobile ? 1.25 : 1.68})`,
        filter: 'blur(0px)',
        opacity: 1,
        zIndex: 20,
      }
    case 'left':
      return {
        ...base,
        left: isMobile ? '20%' : '30%',
        bottom: isMobile ? '32%' : '12%',
        height: isMobile ? '16%' : '28%',
        transform: 'translateX(-50%) scale(1)',
        filter: 'blur(2px)',
        opacity: 0.85,
        zIndex: 10,
      }
    case 'right':
      return {
        ...base,
        left: isMobile ? '80%' : '70%',
        bottom: isMobile ? '32%' : '12%',
        height: isMobile ? '16%' : '28%',
        transform: 'translateX(-50%) scale(1)',
        filter: 'blur(2px)',
        opacity: 0.85,
        zIndex: 10,
      }
    case 'back':
      return {
        ...base,
        left: '50%',
        bottom: isMobile ? '32%' : '12%',
        height: isMobile ? '13%' : '22%',
        transform: 'translateX(-50%) scale(1)',
        filter: 'blur(4px)',
        opacity: 1,
        zIndex: 5,
      }
  }
}

/* ============================================================
 *  NavButton — 圆形导航按钮(hover 缩放 + 半透白背景)
 * ============================================================ */
function NavButton({
  direction,
  onClick,
  label,
}: {
  direction: 'prev' | 'next'
  onClick: () => void
  label: string
}) {
  const Icon = direction === 'prev' ? ArrowLeft : ArrowRight
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="group rounded-full flex items-center justify-center text-white w-12 h-12 sm:w-16 sm:h-16 bg-transparent hover:scale-[1.08] hover:bg-white/[0.12] border-2 border-white"
      style={{ transition: 'transform 150ms, background-color 150ms' }}
    >
      <Icon size={26} strokeWidth={2.25} />
    </button>
  )
}

/* ============================================================
 *  ToonHub — 主入口
 * ============================================================ */
export default function ToonHub() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const isMobile = useIsMobile()

  // 挂载时预加载所有图片
  useEffect(() => {
    IMAGES.forEach((img) => {
      const pre = new Image()
      pre.src = img.src
    })
  }, [])

  // 导航:next/prev 切换 activeIndex,带 650ms 动画锁
  const navigate = useCallback(
    (dir: 'next' | 'prev') => {
      if (isAnimating) return
      setIsAnimating(true)
      setActiveIndex((prev) =>
        dir === 'next' ? (prev + 1) % 4 : (prev + 3) % 4
      )
      setTimeout(() => setIsAnimating(false), DURATION)
    },
    [isAnimating]
  )

  // 由 activeIndex 派生 4 个角色
  const center = activeIndex
  const left = (activeIndex + 3) % 4
  const right = (activeIndex + 1) % 4
  // back = (activeIndex + 2) % 4,在 getRole 内作为默认值返回

  // 获取每个 index 的角色
  const getRole = (i: number): Role => {
    if (i === center) return 'center'
    if (i === left) return 'left'
    if (i === right) return 'right'
    return 'back'
  }

  return (
    <div
      data-theme="toonhub"
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: IMAGES[activeIndex].bg,
        transition: `background-color ${DURATION}ms ${EASE}`,
      }}
    >
      <div className="relative w-full" style={{ height: '100vh', overflow: 'hidden' }}>
        {/* ===== 1. 颗粒叠加 ===== */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 50,
            backgroundImage: GRAIN_DATA_URI,
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat',
            opacity: 0.4,
          }}
          aria-hidden="true"
        />

        {/* ===== 2. 巨型 ghost 文字 "3D SHAPE" ===== */}
        <div
          className="absolute inset-x-0 flex items-center justify-center pointer-events-none select-none"
          style={{ zIndex: 2, top: '18%' }}
          aria-hidden="true"
        >
          <span
            className="toonhub-display"
            style={{
              fontSize: 'clamp(90px, 28vw, 380px)',
              fontWeight: 900,
              color: 'white',
              opacity: 1,
              lineHeight: 1,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              whiteSpace: 'nowrap',
            }}
          >
            3D SHAPE
          </span>
        </div>

        {/* ===== 3. 左上角品牌标签 ===== */}
        <div className="absolute top-6 left-4 sm:left-8" style={{ zIndex: 60 }}>
          <span
            className="text-xs font-semibold uppercase text-white"
            style={{ opacity: 0.9, letterSpacing: '0.18em' }}
          >
            TOONHUB
          </span>
        </div>

        {/* ===== 4. 轮播 ===== */}
        <div className="absolute inset-0" style={{ zIndex: 3 }}>
          {IMAGES.map((img, i) => {
            const role = getRole(i)
            const style = getItemStyle(role, isMobile)
            return (
              <div key={i} style={style}>
                <img
                  src={img.src}
                  alt={`Figurine ${i + 1}`}
                  draggable={false}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'bottom center',
                  }}
                />
              </div>
            )
          })}
        </div>

        {/* ===== 5. 左下角文字 + 导航按钮 ===== */}
        <div
          className="absolute bottom-6 left-4 sm:bottom-20 sm:left-24"
          style={{ zIndex: 60, maxWidth: '320px' }}
        >
          <h1
            className="font-bold uppercase tracking-widest text-white mb-2 sm:mb-3 text-base sm:text-[22px]"
            style={{ opacity: 0.95, letterSpacing: '0.02em' }}
          >
            TOONHUB FIGURINES
          </h1>
          <p
            className="hidden sm:block text-xs sm:text-sm text-white mb-4 sm:mb-5"
            style={{ opacity: 0.85, lineHeight: 1.6 }}
          >
            The artwork is stunning, shipped fully prepared. The finish is a
            vision, the 3D craft is flawless. Many thanks! Wishing you the
            win. Order now.
          </p>
          <div className="flex gap-3">
            <NavButton
              direction="prev"
              onClick={() => navigate('prev')}
              label="Previous figurine"
            />
            <NavButton
              direction="next"
              onClick={() => navigate('next')}
              label="Next figurine"
            />
          </div>
        </div>

        {/* ===== 6. 右下角 DISCOVER IT 链接 ===== */}
        <a
          href="#"
          className="toonhub-link absolute bottom-6 right-4 sm:bottom-20 sm:right-10 flex items-center text-white no-underline"
          style={{ zIndex: 60, transition: 'opacity 200ms', opacity: 0.95 }}
        >
          <span
            className="toonhub-display"
            style={{
              fontSize: 'clamp(20px, 4vw, 56px)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              textTransform: 'uppercase',
            }}
          >
            DISCOVER IT
          </span>
          <ArrowRight
            className="ml-2 sm:ml-3 w-5 h-5 sm:w-8 sm:h-8"
            strokeWidth={2.25}
          />
        </a>
      </div>

      {/* hover 微调:opacity 0.95→1 */}
      <style>{`
        [data-theme='toonhub'] .toonhub-link:hover { opacity: 1 !important; }
      `}</style>
    </div>
  )
}
