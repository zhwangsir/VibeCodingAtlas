import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Menu, Move } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ============================================================
   常量与资源
   ============================================================ */

const LEFT_VIDEO =
  '/videos/532a85d3-dabf-4265-b8bd-19ac6af31842.mp4'
const RIGHT_VIDEO =
  '/videos/a664f076-b971-4557-8728-40ef9ea4c49b.mp4'

const GALLERY_IMAGES = [
  '/images/521b2f85-c0f3-4d0e-9704-b578315b4cb9_1920.webp',
  '/images/76ccdb8b-5043-4f47-9c54-4379713393ea_1920.webp',
  '/images/394f6a1b-85e2-4386-a4f6-408472a0a5b7_1920.webp',
  '/images/86743e0e-16a7-4bee-bf38-dd67985344dc_1920.webp',
  '/images/b2215dc8-a3a7-470d-b19a-5b87fa7d0c37_1920.webp',
  '/images/e919ce72-5c9d-4b87-9be6-d7647b34825c_1920.webp',
  '/images/013583d0-3386-4547-9832-37c7d8edb3ac_1920.webp',
  '/images/a0c49d0a-33eb-4ead-aea6-c1baf241acbc_1920.webp',
  '/images/d18ed8fd-7b6f-4b86-91f9-20010fe38670_1920.webp',
  '/images/ba5a9963-87ff-4008-a545-6bd686c088b5_1920.webp',
]

const SYMBOLS = ['8', '$', '^^', '%', '/']

const CAPTION_TEXT =
  'When switching between videos near the center, do not reset currentTime to 0 abruptly. Add a small dead zone: if cursor is within +/-50px of center, keep both videos at currentTime = 0 and show whichever was last active.'

/* ============================================================
   布局算法 —— 散落式网格
   ============================================================ */

/** 生成行数组：每个单元格为图片索引或 -1（空） */
function buildLayout(count: number, cols: number): number[][] {
  const rows: number[][] = []
  let imgIdx = 0
  let r = 0
  while (imgIdx < count) {
    const row = new Array(cols).fill(-1)
    const a = (r * 2 + (r % 2)) % cols
    if (imgIdx < count) {
      row[a] = imgIdx
      imgIdx++
    }
    if (r % 3 === 0 && imgIdx < count) {
      let b = (a + 2) % cols
      if (b === a) b = (a + 1) % cols
      row[b] = imgIdx
      imgIdx++
    }
    rows.push(row)
    r++
  }
  return rows
}

/* ============================================================
   品牌资源
   ============================================================ */

/** Logo：prmpt 字标 + 圆圈 R 标记 */
function PrmptLogo() {
  return (
    <svg viewBox="0 0 355 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="prmpt">
      <text
        x="0"
        y="82"
        fill="white"
        style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500, fontSize: '92px', letterSpacing: '-0.04em' }}
      >
        prmpt
      </text>
      <circle cx="328" cy="28" r="18" stroke="white" strokeWidth="2.5" fill="none" />
      <text
        x="328"
        y="35"
        textAnchor="middle"
        fill="white"
        style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600, fontSize: '20px' }}
      >
        R
      </text>
    </svg>
  )
}

/* ============================================================
   主组件
   ============================================================ */

type Mq = 'mobile' | 'tablet' | 'desktop'

function getMq(w: number): Mq {
  if (w < 640) return 'mobile'
  if (w < 1024) return 'tablet'
  return 'desktop'
}

export default function PrmptHero() {
  const [width, setWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1280)
  const mq: Mq = getMq(width)
  const isTouch =
    typeof window !== 'undefined' &&
    (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window)
  const isDesktop = mq === 'desktop' && !isTouch

  const cols = mq === 'mobile' ? 2 : mq === 'tablet' ? 3 : 4
  const layout = buildLayout(GALLERY_IMAGES.length, cols)

  /* Refs */
  const spacerRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const leftVideoRef = useRef<HTMLVideoElement>(null)
  const rightVideoRef = useRef<HTMLVideoElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const outroInfoRef = useRef<HTMLDivElement>(null)
  const outroBuyRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const circleSymbolRef = useRef<HTMLSpanElement>(null)

  /* State */
  const [videosLoaded, setVideosLoaded] = useState(0)
  const [spacerHeight, setSpacerHeight] = useState<string>('500vh')
  const [showCursor, setShowCursor] = useState(false)

  /* 用于滚动逻辑的 ref 值 */
  const maxScrollRef = useRef(0)
  const mouseRef = useRef({ x: -999, y: -999 })
  const activeSideRef = useRef<'left' | 'right'>('right')
  const rafRef = useRef<number>(0)
  const lastSymbolRef = useRef(0)

  /* ---- 自定义光标跟随（桌面） ---- */
  useEffect(() => {
    if (!isDesktop) {
      setShowCursor(false)
      return
    }
    setShowCursor(true)
    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      if (cursorRef.current) {
        /* transform 为合成层属性（GPU 处理，不触发 layout），
           替代旧实现每帧写 left/top 引发的 layout 开销；
           末尾 translate(-50%,-50%) 保留光标中心对齐 */
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [isDesktop])

  /* ---- 视频加载完成计数 ---- */
  const onVideoLoaded = useCallback(() => {
    setVideosLoaded((n) => n + 1)
  }, [])

  /* ---- 移动端自动交替播放 ---- */
  useEffect(() => {
    if (!isTouch) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const left = leftVideoRef.current
    const right = rightVideoRef.current
    if (!left || !right || reduce) return

    left.style.display = 'block'
    right.style.display = 'none'
    left.currentTime = 0
    const pL = left.play()
    if (pL) pL.catch(() => {})
    const onLeftEnd = () => {
      left.style.display = 'none'
      right.style.display = 'block'
      right.currentTime = 0
      const p = right.play()
      if (p) p.catch(() => {})
    }
    const onRightEnd = () => {
      right.style.display = 'none'
      left.style.display = 'block'
      left.currentTime = 0
      const p = left.play()
      if (p) p.catch(() => {})
    }
    left.addEventListener('ended', onLeftEnd)
    right.addEventListener('ended', onRightEnd)
    return () => {
      left.removeEventListener('ended', onLeftEnd)
      right.removeEventListener('ended', onRightEnd)
    }
  }, [isTouch])

  /* ---- 圆圈符号随机化（滚动节流 80ms） ---- */
  useEffect(() => {
    const onScroll = () => {
      const now = performance.now()
      if (now - lastSymbolRef.current < 80) return
      lastSymbolRef.current = now
      const sym = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
      if (circleSymbolRef.current) circleSymbolRef.current.textContent = sym
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ---- 测量 maxScroll + 设置 spacer 高度 ---- */
  const measure = useCallback(() => {
    const vh = window.innerHeight
    const inner = innerRef.current
    if (!inner) return
    const wrapScrollHeight = inner.scrollHeight
    const maxScroll = Math.max(0, wrapScrollHeight - vh)
    maxScrollRef.current = maxScroll
    setSpacerHeight(`${vh + maxScroll + 2 * vh}px`)
    ScrollTrigger.refresh()
  }, [])

  /* ---- GSAP ScrollTrigger：黑色面板上滑 ---- */
  useLayoutEffect(() => {
    if (!panelRef.current || !spacerRef.current) return
    const vh = window.innerHeight
    gsap.set(panelRef.current, { y: vh })
    const ctx = gsap.context(() => {
      gsap.to(panelRef.current, {
        y: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: spacerRef.current,
          start: 'top top',
          end: `+=${vh}`,
          scrub: true,
        },
      })
    }, spacerRef)
    return () => ctx.revert()
  }, [])

  /* ---- 主 RAF 循环：卡片缩放 + inner 偏移 + outro ---- */
  useEffect(() => {
    const tick = () => {
      const vh = window.innerHeight
      const scrollY = window.scrollY
      const maxScroll = maxScrollRef.current

      /* Phase 2：内部容器上移 */
      if (innerRef.current) {
        const innerY = scrollY > vh ? -(scrollY - vh) : 0
        innerRef.current.style.transform = `translateY(${innerY}px)`
      }

      /* 卡片缩放计算 */
      const cards = panelRef.current ? panelRef.current.querySelectorAll<HTMLElement>('.bp-card') : []
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect()
        const top = rect.top
        const bottom = rect.bottom
        let scale = 0
        if (bottom > 0 && top < vh) {
          const enter = Math.min(1, (vh - top) / (vh * 0.6))
          const exit = Math.min(1, bottom / (vh * 0.4))
          scale = Math.min(enter, exit)
        } else if (bottom <= 0 || top >= vh) {
          scale = 0
        }
        scale = Math.max(0, Math.min(1, scale))
        card.style.transform = `scale(${scale})`
      })

      /* 视频容器可见性：越过第一屏后隐藏 */
      if (videoContainerRef.current) {
        videoContainerRef.current.style.visibility = scrollY > vh ? 'hidden' : 'visible'
      }

      /* Outro 阶段 */
      const outroStart = vh + maxScroll
      const outroProgress = Math.max(0, Math.min(1, (scrollY - outroStart) / Math.max(1, vh - 100)))
      if (overlayRef.current) overlayRef.current.style.opacity = String(outroProgress)
      if (outroInfoRef.current) {
        const offset = Number(outroInfoRef.current.dataset.outroOffset || '166')
        outroInfoRef.current.style.transform = `translateY(${-outroProgress * offset}px)`
      }
      if (outroBuyRef.current) {
        outroBuyRef.current.style.transform = `scale(${outroProgress})`
      }
      if (footerRef.current) {
        footerRef.current.style.opacity = String(outroProgress)
      }

      /* 桌面端：基于光标 X 的视频擦洗 */
      if (isDesktop && leftVideoRef.current && rightVideoRef.current) {
        const w = window.innerWidth
        const center = w / 2
        const deadZone = Math.max(30, w * 0.05)
        const mx = mouseRef.current.x
        const left = leftVideoRef.current
        const right = rightVideoRef.current

        if (mx >= 0) {
          const dist = mx - center
          if (Math.abs(dist) < deadZone) {
            /* 死区：两视频保持 currentTime = 0 */
            if (!left.seeking) left.currentTime = 0
            if (!right.seeking) right.currentTime = 0
          } else if (dist < 0) {
            /* 光标在左侧 → 显示 RIGHT 视频 */
            activeSideRef.current = 'right'
            right.style.display = 'block'
            left.style.display = 'none'
            const range = Math.max(1, center - deadZone)
            const progress = Math.min(1, Math.max(0, (center - deadZone - mx) / range))
            if (!right.seeking && right.duration) {
              right.currentTime = progress * right.duration
            }
          } else {
            /* 光标在右侧 → 显示 LEFT 视频 */
            activeSideRef.current = 'left'
            left.style.display = 'block'
            right.style.display = 'none'
            const range = Math.max(1, w - (center + deadZone))
            const progress = Math.min(1, Math.max(0, (mx - (center + deadZone)) / range))
            if (!left.seeking && left.duration) {
              left.currentTime = progress * left.duration
            }
          }
        }
      }

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [isDesktop])

  /* ---- resize 处理 ---- */
  useEffect(() => {
    const onResize = () => {
      setWidth(window.innerWidth)
      measure()
      const vh = window.innerHeight
      if (panelRef.current) {
        /* 同步 GSAP 初始值 */
        const st = gsap.getById('prmpt-panel')
        if (!st && window.scrollY < vh) {
          gsap.set(panelRef.current, { y: Math.max(0, vh - window.scrollY) })
        }
      }
    }
    window.addEventListener('resize', onResize)
    /* 初次测量 */
    measure()
    return () => window.removeEventListener('resize', onResize)
  }, [measure])

  /* ---- 响应式样式辅助 ---- */
  const logoWidth = mq === 'mobile' ? 124 : mq === 'tablet' ? 266 : 355
  const logoTop = mq === 'mobile' ? 16 : 32
  const logoLeft = mq === 'mobile' ? 16 : 32
  const captionTop = mq === 'mobile' ? 118 : mq === 'tablet' ? 180 : 244
  const captionLeft = mq === 'mobile' ? 16 : 32
  const captionWidth = mq === 'mobile' ? 'calc(100vw - 32px)' : mq === 'tablet' ? 'calc(50vw - 48px)' : 692
  const navTop = mq === 'mobile' ? 16 : 32
  const navRight = mq === 'mobile' ? 16 : 32
  const burgerSize = mq === 'mobile' ? 24 : 30
  const cartFontSize = mq === 'mobile' ? 13 : 15
  const infoOffset = mq === 'mobile' ? 132 : 166

  const ease = [0.25, 0.1, 0.25, 1] as const
  const motionTransition = { duration: 0.6, ease }

  return (
    <div
      data-theme="prmpt"
      className={isDesktop ? 'prmpt-desktop' : ''}
      style={{ width: '100%', minHeight: '100vh', background: '#ffffff' }}
    >
      <div
        ref={spacerRef}
        id="scroll-spacer"
        className="prmpt-root"
        style={{ position: 'relative', width: '100%', height: spacerHeight }}
      >
        {/* ===== 1A. 自定义光标 ===== */}
        {showCursor && (
          <div
            ref={cursorRef}
            style={{
              position: 'fixed',
              left: 0,
              top: 0,
              pointerEvents: 'none',
              zIndex: 50,
              transform: 'translate(-50%, -50%)',
              mixBlendMode: 'exclusion',
            }}
          >
            <div
            style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              border: '2.5px solid white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Move color="#fff" size={24} strokeWidth={2} />
          </div>
          </div>
        )}

        {/* ===== 1B. Logo ===== */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...motionTransition, delay: 0 }}
          style={{
            position: 'fixed',
            top: logoTop,
            left: logoLeft,
            width: logoWidth,
            pointerEvents: 'none',
            zIndex: 20,
            mixBlendMode: 'exclusion',
          }}
        >
          <PrmptLogo />
        </motion.div>

        {/* ===== 1C. Caption ===== */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...motionTransition, delay: 0.3 }}
          style={{
            position: 'fixed',
            top: captionTop,
            left: captionLeft,
            width: captionWidth,
            pointerEvents: 'none',
            zIndex: 20,
            mixBlendMode: 'exclusion',
            fontFamily: "'Inter Tight', sans-serif",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: '140%',
            letterSpacing: '-0.04em',
            color: '#FFFFFF',
          }}
        >
          {CAPTION_TEXT}
        </motion.div>

        {/* ===== 1D. Header Navigation ===== */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...motionTransition, delay: 0.15 }}
          style={{
            position: 'fixed',
            top: navTop,
            right: navRight,
            height: 30,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            pointerEvents: 'none',
            zIndex: 20,
            mixBlendMode: 'exclusion',
            fontFamily: "'Inter Tight', sans-serif",
            fontWeight: 500,
            color: '#FFFFFF',
          }}
        >
          {mq !== 'mobile' && (
            <span style={{ fontSize: 15, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>ABOUT</span>
          )}
          <div style={{ display: 'flex', flexDirection: 'row', gap: mq === 'mobile' ? 20 : 50, alignItems: 'center' }}>
            <Menu color="#fff" size={burgerSize} strokeWidth={2.5} />
            <span style={{ fontSize: cartFontSize, letterSpacing: '-0.02em' }}>[ CART ]</span>
          </div>
        </motion.div>

        {/* ===== 1E. Product Info ===== */}
        <motion.div
          ref={outroInfoRef}
          data-outro-offset={infoOffset}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...motionTransition, delay: 0.45 }}
          style={{
            position: 'fixed',
            right: mq === 'mobile' ? 0 : 32,
            left: mq === 'mobile' ? 0 : 'auto',
            bottom: mq === 'mobile' ? 48 : 80,
            width: mq === 'mobile' ? 'auto' : 330,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pointerEvents: 'none',
            zIndex: 20,
            mixBlendMode: 'exclusion',
            fontFamily: "'Inter Tight', sans-serif",
            fontWeight: 500,
            color: '#FFFFFF',
          }}
        >
          {/* 顶部块 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: '100%',
              marginBottom: mq === 'mobile' ? 12 : 32,
            }}
          >
            {/* 圆圈图标 */}
            <div
              style={{
                position: 'relative',
                width: mq === 'mobile' ? 20 : 30,
                height: mq === 'mobile' ? 20 : 30,
                marginBottom: 8,
                borderRadius: '50%',
                border: `${mq === 'mobile' ? 2 : 2.5}px solid white`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                ref={circleSymbolRef}
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontWeight: 500,
                  fontSize: mq === 'mobile' ? 10 : 15,
                  letterSpacing: '-0.04em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                }}
              >
                8
              </span>
            </div>
            {/* 集合标签 */}
            <div
              style={{
                fontSize: mq === 'mobile' ? 20 : 30,
                lineHeight: '100%',
                textAlign: 'center',
                letterSpacing: '-0.04em',
                textTransform: 'uppercase',
                width: '100%',
              }}
            >
              ARCHIVE COLLECTION
              <br />
              &ldquo;PROMPT&rdquo;
            </div>
          </div>
          {/* 价格 */}
          <div
            style={{
              fontSize: mq === 'mobile' ? 60 : 80,
              lineHeight: '100%',
              textAlign: 'center',
              letterSpacing: '-0.04em',
            }}
          >
            $97,33
          </div>
        </motion.div>

        {/* ===== 1F. View 按钮 ===== */}
        <div
          ref={outroBuyRef}
          style={{
            position: 'fixed',
            right: mq === 'mobile' ? 16 : 32,
            left: mq === 'mobile' ? 16 : 'auto',
            bottom: mq === 'mobile' ? 60 : 32,
            width: mq === 'mobile' ? 'auto' : 330,
            height: mq === 'mobile' ? 100 : 174,
            transformOrigin: 'right bottom',
            transform: 'scale(0)',
            pointerEvents: 'none',
            zIndex: 20,
            mixBlendMode: 'exclusion',
            background: '#fff',
            borderRadius: 1335,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontWeight: 500,
              fontSize: mq === 'mobile' ? 72 : 110,
              letterSpacing: '-0.04em',
              color: '#fff',
              mixBlendMode: 'exclusion',
              lineHeight: 1,
            }}
          >
            view
          </span>
        </div>

        {/* ===== 1G. 视频容器 ===== */}
        <div
          ref={videoContainerRef}
          id="main-canvas"
          style={{
            position: 'fixed',
            inset: mq === 'mobile' ? 'auto 0 0 0' : 0,
            left: mq === 'mobile' ? 0 : 'auto',
            top: mq === 'mobile' ? 220 : 'auto',
            width: '100%',
            height: mq === 'mobile' ? 'calc(100vh - 220px)' : '100%',
            zIndex: 0,
            overflow: 'hidden',
            opacity: videosLoaded >= 2 ? 1 : 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none',
          }}
        >
          <video
            ref={leftVideoRef}
            src={LEFT_VIDEO}
            muted
            playsInline
            preload="auto"
            onLoadedData={onVideoLoaded}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'none',
            }}
          />
          <video
            ref={rightVideoRef}
            src={RIGHT_VIDEO}
            muted
            playsInline
            preload="auto"
            onLoadedData={onVideoLoaded}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>

        {/* ===== 1I. 白色叠加层 ===== */}
        <div
          ref={overlayRef}
          id="outro-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 12,
            background: '#fff',
            opacity: 0,
          }}
        />

        {/* ===== 1J. Footer ===== */}
        <div
          ref={footerRef}
          id="outro-footer"
          style={{
            position: 'fixed',
            left: 16,
            bottom: mq === 'mobile' ? 24 : 32,
            display: 'flex',
            flexDirection: 'row',
            gap: mq === 'mobile' ? 0 : 80,
            justifyContent: mq === 'mobile' ? 'space-between' : 'flex-start',
            right: mq === 'mobile' ? 16 : 'auto',
            pointerEvents: 'none',
            zIndex: 20,
            mixBlendMode: 'exclusion',
            opacity: 0,
            fontFamily: "'Inter Tight', sans-serif",
            fontWeight: 500,
            fontSize: mq === 'mobile' ? 11 : 13,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
          }}
        >
          <span>PRMPT (R) 2026</span>
          <span>PRIVACY POLICY</span>
        </div>

        {/* ===== SECTION 2: 黑色面板（画廊） ===== */}
        <div
          ref={panelRef}
          style={{
            position: 'fixed',
            inset: 0,
            background: '#000',
            zIndex: 10,
            willChange: 'transform',
          }}
        >
          <div
            ref={innerRef}
            style={{
              width: '100%',
              paddingTop: 'min(400px, 40vh)',
              paddingLeft: mq === 'mobile' ? 16 : 32,
              paddingRight: mq === 'mobile' ? 16 : 32,
              paddingBottom: '20vh',
              willChange: 'transform',
            }}
          >
            {layout.map((row, ri) => (
              <div
                key={ri}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: mq === 'mobile' ? 8 : mq === 'tablet' ? 12 : 16,
                  marginBottom: mq === 'mobile' ? 8 : mq === 'tablet' ? 12 : 16,
                }}
              >
                {row.map((cell, ci) => {
                  if (cell === -1) {
                    return <div key={ci} style={{ flex: 1, aspectRatio: '2 / 3' }} />
                  }
                  const origin = ci < cols / 2 ? 'right bottom' : 'left bottom'
                  return (
                    <div
                      key={ci}
                      className="bp-card"
                      style={{
                        flex: 1,
                        aspectRatio: '2 / 3',
                        transformOrigin: origin,
                        transform: 'scale(0)',
                        backgroundImage: `url("${GALLERY_IMAGES[cell]}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 4,
                      }}
                    />
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
