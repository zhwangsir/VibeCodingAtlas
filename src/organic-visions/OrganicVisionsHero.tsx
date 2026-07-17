/* ============================================================
 *  Organic Visions — 电影感全屏 Hero
 *  字体:Garamond(标题)+ Geist(正文)
 *  核心:全屏循环视频 + StaggeredFade 字符入场 + 液态玻璃 CTA + 玻璃移动菜单
 * ============================================================ */
import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Menu, X } from 'lucide-react'

/* ===== 背景视频地址 ===== */
const BG_VIDEO =
  '/videos/9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4'

/* ===== 导航链接 ===== */
const NAV_LINKS = ['Wander', 'Archive', 'Story', 'Connect']

/* ============================================================
 *  StaggeredFade — 逐字符淡入动画
 * ============================================================ */
function StaggeredFade({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <span ref={ref} className="ov-staggered">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          className="ov-char"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

/* ============================================================
 *  OrganicVisionsHero — 主入口
 * ============================================================ */
export default function OrganicVisionsHero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div data-theme="organic-visions" className="ov-root" style={{ height: '100vh' }}>
      {/* 标题内逐字符 span 需继承 Garamond(全局 * 规则会覆盖为 Geist) */}
      <style>{`
        [data-theme='organic-visions'] .ov-headline,
        [data-theme='organic-visions'] .ov-headline * {
          font-family: 'Garamond', 'Times New Roman', serif;
        }
      `}</style>
      {/* ===== 全屏背景视频 ===== */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="ov-bg-video"
        src={BG_VIDEO}
      />

      {/* ===== 视频渐变遮罩 ===== */}
      <div className="ov-overlay" />

      {/* ===== 导航栏 ===== */}
      <nav className="ov-navbar">
        {/* 品牌 */}
        <span className="ov-brand">Organic Visions</span>

        {/* 桌面导航链接 */}
        <div className="ov-nav-links">
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className="ov-nav-link">
              {link}
            </a>
          ))}
        </div>

        {/* 移动端汉堡按钮 */}
        <button
          type="button"
          className="ov-hamburger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ===== 移动端菜单 ===== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="ov-mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link}
                href="#"
                className="ov-m-link"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 + i * 0.06, ease: 'easeOut' }}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Hero 内容 ===== */}
      <div className="ov-hero">
        <h1 className="ov-headline">
          <span className="ov-line">
            <StaggeredFade text="WITNESS THE" />
          </span>
          <span className="ov-line">
            <StaggeredFade text="HIDDEN REALM" />
          </span>
        </h1>

        <motion.p
          className="ov-subtext"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          An odyssey through delicate living forms,
          <br className="ov-br" /> revealed by lens and curiosity.
        </motion.p>

        <motion.a
          href="#"
          className="liquid-glass ov-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          Begin the Experience
        </motion.a>
      </div>
    </div>
  )
}
