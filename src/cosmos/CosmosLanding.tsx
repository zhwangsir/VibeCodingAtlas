import HeroSection from './sections/HeroSection'
import CapabilitiesSection from './sections/CapabilitiesSection'

/**
 * CosmosLanding — 电影感太空旅行落地页
 *
 * 两个全屏 section：
 * - Hero：120% 宽高视频背景 + object-top + BlurText 标题 + 统计卡 + 合伙人
 * - Capabilities：全屏视频背景 + "Production evolved" 标题 + 3 张液态玻璃卡片
 *
 * 共享液态玻璃设计系统（.liquid-glass + .liquid-glass-strong）
 * 字体：Instrument Serif（heading, italic） + Barlow（body）
 */
export default function CosmosLanding() {
  return (
    <div data-theme="cosmos" className="bg-black min-h-screen overflow-x-hidden">
      <HeroSection />
      <CapabilitiesSection />
    </div>
  )
}
