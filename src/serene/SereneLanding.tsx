import HeroSection from './sections/HeroSection'
import QuoteSection from './sections/QuoteSection'

/**
 * SereneLanding — 奢华美容/养生品牌落地页
 *
 * 两个全屏 section：
 * - Hero：视频背景 + bg-black/20 叠加 + 固定 Navbar（Dancing Script 品牌 + 动画汉堡 + 右侧滑入移动菜单）+ 居中内容 + 左下声音指示器
 * - Quote：渐变背景（#010A17 → #0A4267 → #20658E → #6BADC4）+ rAF lerp 视差（彩虹图 + 双云 + 引用）
 *
 * 字体：Dancing Script（品牌 logo）+ Instrument Serif（标题 + 引用）+ Inter（正文/导航/按钮）
 * 液态玻璃设计系统（.liquid-glass + .text-glow + .button-glow）
 */
export default function SereneLanding() {
  return (
    <div data-theme="serene" className="bg-[#0a0608] min-h-screen overflow-x-hidden">
      <HeroSection />
      <QuoteSection />
    </div>
  )
}
