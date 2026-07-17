import HeroSection from './sections/HeroSection'
import MarqueeSection from './sections/MarqueeSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import ProjectsSection from './sections/ProjectsSection'

/**
 * Jack — 3D Creator 作品集落地页
 * 5 个 section 顺序：Hero → Marquee → About → Services → Projects
 * 暗色主题 #0C0C0C，Kanit 字体，渐变标题，磁性人像，滚动驱动跑马灯，逐字揭示，sticky-stacking 卡片
 */
export default function JackPortfolio() {
  return (
    <div
      data-theme="jack"
      className="min-h-screen bg-[#0C0C0C]"
      style={{ fontFamily: "'Kanit', sans-serif", overflowX: 'clip' }}
    >
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </div>
  )
}
