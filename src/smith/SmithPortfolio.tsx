import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import SelectedWorks from './sections/SelectedWorks'
import Journal from './sections/Journal'
import Explorations from './sections/Explorations'
import Stats from './sections/Stats'
import Contact from './sections/Contact'

/**
 * SmithPortfolio — Michael Smith 暗色作品集
 * 7 个 section：
 *   LoadingScreen → Hero (HLS 视频 + GSAP) → SelectedWorks (bento) →
 *   Journal (胶囊列表) → Explorations (parallax + pin) → Stats → Contact (翻转视频 + marquee)
 *
 * 全局：data-theme="smith" 激活 HSL token；强制暗色；Inter + Instrument Serif
 * 增强：Esc 关闭 lightbox、scroll 锁定、平滑滚动锚点、prefers-reduced-motion 降级
 */
export default function SmithPortfolio() {
  const [isLoading, setIsLoading] = useState(true)

  // 加载期间锁定滚动
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isLoading])

  return (
    <div
      data-theme="smith"
      className="bg-bg text-text-primary min-h-screen overflow-x-clip"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Navbar />

      <main>
        <HeroSection />
        <SelectedWorks />
        <Journal />
        <Explorations />
        <Stats />
        <Contact />
      </main>
    </div>
  )
}
