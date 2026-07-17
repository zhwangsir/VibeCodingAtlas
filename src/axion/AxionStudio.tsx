import { useState, useEffect } from 'react'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import CaseStudiesSection from './sections/CaseStudiesSection'
import MobileMenu from './components/MobileMenu'

/** 获取伦敦时区当前 HH:MM */
function useLondonTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const update = () => {
      const t = new Date().toLocaleTimeString('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
      setTime(t)
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

/**
 * AxionStudio — 设计代理落地页主组件
 *
 * 3 个 section：
 * - Hero（浅灰 + shaders 叠加 + 胶囊导航 + 底部 hero 内容）
 * - About（白底 + badge + 标题 + 响应式图片布局）
 * - Case Studies（浅灰 + 2 卡片视频 + hover 展开按钮）
 *
 * 顶层管理菜单状态 + 伦敦时间，传递给 Navbar 与 MobileMenu
 */
export default function AxionStudio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const londonTime = useLondonTime()

  return (
    <div data-theme="axion" className="bg-white">
      <HeroSection
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        londonTime={londonTime}
      />
      <AboutSection />
      <CaseStudiesSection />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} londonTime={londonTime} />
    </div>
  )
}
