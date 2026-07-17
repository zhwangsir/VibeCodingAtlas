import { Volume2 } from 'lucide-react'
import Navbar from '../components/Navbar'
import Button from '../components/Button'

const HERO_VIDEO_SRC =
  '/videos/a54afbf6-b30d-470e-861f-669871f09f67.mp4'

/**
 * HeroSection — Section 1
 *
 * 全屏视频背景 + bg-black/20 暗叠加 + 固定 Navbar + 居中内容（标题 + 副文本 + CTA） + 左下声音指示器
 */
export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* 背景视频 */}
      <video
        src={HERO_VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      {/* 暗叠加 */}
      <div className="absolute inset-0 bg-black/20" />

      {/* 固定导航 */}
      <Navbar />

      {/* 居中内容 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 -mt-[120px]">
        <h1
          className="font-instrument text-white text-[36px] md:text-7xl lg:text-[110px] leading-[0.9] tracking-tight text-center text-glow"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Gentle touch. Radiant presence.
        </h1>
        <p className="text-white/70 text-sm md:text-base text-center mt-5 md:mt-7 max-w-xl font-inter">
          Expert beauty and holistic wellness, delivered with warmth and intention.
        </p>
        <div className="mt-6 md:mt-9">
          <Button>Begin your renewal</Button>
        </div>
      </div>

      {/* 声音指示器（desktop only） */}
      <div className="hidden md:flex absolute bottom-8 left-8 items-center gap-3">
        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
          <Volume2 size={18} className="text-white/60" aria-hidden="true" />
        </div>
        <div className="text-white/60 text-xs font-inter leading-tight">
          <div>Experience</div>
          <div>with sound</div>
        </div>
      </div>
    </section>
  )
}
