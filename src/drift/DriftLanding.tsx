import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import FeaturesSection from './sections/FeaturesSection'

/**
 * Drift — 平静的 ADHD 友好型计划器落地页
 * 3 个 section：Hero → About → Features
 * - 字体：Inter（基础）+ Instrument Serif 斜体（hero 标题中 "the stress"）
 * - 调色板：奶油色 #F6E4CF + 深棕 #321C04 + 柔米 #FFF9F2 + 暖灰 #D9C4AA
 * - 特殊：fade-in-down keyframe（tailwind config 中已扩展）
 * - 增强：浮动胶囊导航 + 动画汉堡（→X）+ IntersectionObserver 卡片揭示
 */
export default function DriftLanding() {
  return (
    <div
      data-theme="drift"
      className="min-h-screen overflow-x-clip"
      style={{ fontFamily: "'Inter', sans-serif", WebkitFontSmoothing: 'antialiased' }}
    >
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
    </div>
  )
}
