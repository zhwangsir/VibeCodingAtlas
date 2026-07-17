import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import FeaturesSection from './sections/FeaturesSection'

/**
 * Prisma — 创意工作室落地页
 * 3 个 section：Hero → About → Features
 * 暗色电影质感 + 暖奶油色调 + Almarai/Instrument Serif 字体
 * framer-motion 全动画驱动：pull-up 标题 + 逐字滚动揭示 + staggered 卡片入场
 */
export default function PrismaLanding() {
  return (
    <div data-theme="prisma" className="bg-black min-h-screen overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
    </div>
  )
}
