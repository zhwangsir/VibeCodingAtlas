import HeroSection, { MarqueeSection } from './sections/HeroMarquee'
import { AboutSection, ServicesSection } from './sections/AboutServices'
import { ProjectsSection } from './sections/Projects'

export default function JackPortfolio() {
  return (
    <div
      className="font-kanit"
      style={{ background: '#0C0C0C', color: '#D7E2EA', overflowX: 'clip' }}
    >
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </div>
  )
}
