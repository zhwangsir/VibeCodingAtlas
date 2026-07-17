import { useRef, useEffect } from 'react'

const RAINBOW_IMG_SRC = '/serene/rainbow.png'
const CLOUD_IMG_SRC = '/serene/cloud.png'

const QUOTE_TEXT =
  '"Serene was founded on a belief in beauty that honors your nature. We pursue refined outcomes, considered approaches, and lasting vitality. We spend time learning what matters to you before deciding what serves you best. No rushing, no excess — just support that lets you feel radiant."'
const ATTRIBUTION = 'Dr. Mia Callahan — Founder'

/**
 * lerp 平滑插值
 * current + (target - current) * factor
 */
const lerp = (current: number, target: number, factor: number) =>
  current + (target - current) * factor

/**
 * QuoteSection — Section 2
 *
 * 全屏渐变背景 + rAF lerp 视差：
 * - 彩虹图（顶部全宽，z-30）：垂直从 +120px → -160px，lerp 0.06
 * - 左云（z-10，marginLeft -50%）：progress 0.12-0.92 时 X=0 入场，否则 X=-200 退场；Y = progress * -50；lerp 0.04
 * - 右云（z-10，scale-x-[-1]，marginRight -75%）：同左云但 X=+200 退场
 * - 引用内容（z-20，居中）
 *
 * progress = clamp(0, 1, (windowHeight - rect.top) / (windowHeight + rect.height))
 * 所有 transform 使用 translate3d + will-change-transform
 */
export default function QuoteSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const rainbowRef = useRef<HTMLImageElement>(null)
  const leftCloudRef = useRef<HTMLImageElement>(null)
  const rightCloudRef = useRef<HTMLImageElement>(null)

  // 当前 lerp 值
  const rainbowY = useRef(120)
  const leftX = useRef(-200)
  const leftY = useRef(0)
  const rightX = useRef(200)
  const rightY = useRef(0)

  useEffect(() => {
    let rafId: number | null = null

    const tick = () => {
      const section = sectionRef.current
      if (section) {
        const rect = section.getBoundingClientRect()
        const wh = window.innerHeight
        // progress: 0 (section below viewport) → 1 (section above viewport)
        const raw = (wh - rect.top) / (wh + rect.height)
        const progress = Math.max(0, Math.min(1, raw))

        // 1. 彩虹图：+120 → -160
        const rainbowTarget = 120 + (-160 - 120) * progress
        rainbowY.current = lerp(rainbowY.current, rainbowTarget, 0.06)
        if (rainbowRef.current) {
          rainbowRef.current.style.transform = `translate3d(0, ${rainbowY.current}px, 0)`
        }

        // 2. 左云：progress 0.12-0.92 时 X=0，否则 X=-200；Y = progress * -50
        const leftInview = progress >= 0.12 && progress <= 0.92
        const leftTargetX = leftInview ? 0 : -200
        const cloudTargetY = progress * -50
        leftX.current = lerp(leftX.current, leftTargetX, 0.04)
        leftY.current = lerp(leftY.current, cloudTargetY, 0.04)
        // opacity 基于距离 0 的远近
        const leftOpacity = Math.max(0, 1 - Math.abs(leftX.current) / 200)
        if (leftCloudRef.current) {
          // -50% 相对云图自身宽度（translate3d 百分比语义），实现 marginLeft:-50% 的"半图溢出左缘"意图
          leftCloudRef.current.style.transform = `translate3d(calc(${leftX.current}px - 50%), ${leftY.current}px, 0)`
          leftCloudRef.current.style.opacity = String(leftOpacity)
        }

        // 3. 右云：同左云但 X=+200 退场
        const rightTargetX = leftInview ? 0 : 200
        rightX.current = lerp(rightX.current, rightTargetX, 0.04)
        rightY.current = lerp(rightY.current, cloudTargetY, 0.04)
        const rightOpacity = Math.max(0, 1 - Math.abs(rightX.current) / 200)
        if (rightCloudRef.current) {
          // 注意 transform 顺序：translate3d 在前，scaleX(-1) 在后
          // 这样 translate 发生在正常坐标系，视觉上向右移动；翻转最后应用
          // +75% 相对云图自身宽度，实现 marginRight:-75% 的"3/4 图溢出右缘"意图
          rightCloudRef.current.style.transform = `translate3d(calc(${rightX.current}px + 75%), ${rightY.current}px, 0) scaleX(-1)`
          rightCloudRef.current.style.opacity = String(rightOpacity)
        }
      }

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(to bottom, #010A17 0%, #0A4267 30%, #20658E 60%, #6BADC4 100%)',
      }}
    >
      {/* 左云（mobile 隐藏） */}
      <img
        ref={leftCloudRef}
        src={CLOUD_IMG_SRC}
        alt=""
        aria-hidden="true"
        className="hidden sm:block absolute left-0 bottom-[10%] z-10 w-[500px] md:w-[650px] will-change-transform"
        style={{
          opacity: 0,
          transform: 'translate3d(calc(-200px - 50%), 0, 0)',
        }}
      />

      {/* 右云（水平翻转，mobile 隐藏） */}
      <img
        ref={rightCloudRef}
        src={CLOUD_IMG_SRC}
        alt=""
        aria-hidden="true"
        className="hidden sm:block absolute right-0 bottom-[15%] z-10 w-[500px] md:w-[650px] will-change-transform"
        style={{
          opacity: 0,
          transform: 'translate3d(calc(200px + 75%), 0, 0) scaleX(-1)',
        }}
      />

      {/* 引用内容 */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 max-w-4xl mx-auto text-center">
        <p
          className="font-instrument text-white text-xl sm:text-2xl md:text-4xl lg:text-[42px] leading-[1.45] md:leading-[1.5]"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {QUOTE_TEXT}
        </p>
        <p className="mt-6 md:mt-8 text-white/80 text-sm md:text-base tracking-wide font-inter">
          {ATTRIBUTION}
        </p>
      </div>

      {/* 彩虹图（顶部全宽，最高 z） */}
      <img
        ref={rainbowRef}
        src={RAINBOW_IMG_SRC}
        alt=""
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-30 w-full will-change-transform pointer-events-none"
        style={{ transform: 'translate3d(0, 120px, 0)' }}
      />
    </section>
  )
}
