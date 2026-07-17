import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from 'shaders/react'
import { Sparkles } from 'lucide-react'
import TextRollButton from '../components/TextRollButton'
import Navbar from '../components/Navbar'

/** 合作伙伴徽章内的星形图标（Lucide） */
function PartnerIcon({ className = '' }: { className?: string }) {
  return <Sparkles className={className} aria-hidden="true" />
}

type HeroSectionProps = {
  menuOpen: boolean
  setMenuOpen: (v: boolean) => void
  londonTime: string
}

/**
 * HeroSection — 全屏 hero
 *
 * - 浅灰背景 #EFEFEF + shaders 全屏叠加层（Swirl + ChromaFlow + FlutedGlass + FilmGrain）
 * - 顶部 Navbar（胶囊白）
 * - 底部 hero 内容：Axion Studio 标签 + 多行标题 + CTA 行（橙色 Start a project + 白色 Certified Partner 徽章）
 */
export default function HeroSection({ menuOpen, setMenuOpen, londonTime }: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-screen flex flex-col bg-[#EFEFEF] overflow-hidden">
      {/* Shader 叠加层 — 必须包裹在 <Shader> 父组件内 */}
      {/* 渐变回退：当 WebGL/WebGPU 不可用时保证视觉背景不丢失 */}
      <div
        className="absolute inset-0 z-[9] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 30% 20%, rgba(242,101,34,0.10) 0%, transparent 45%), radial-gradient(circle at 80% 80%, rgba(255,95,3,0.08) 0%, transparent 40%), linear-gradient(135deg, #EFEFEF 0%, #E8E8E8 100%)',
        }}
      />
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Shader>
          <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
          <ChromaFlow
            baseColor="#ffffff"
            downColor="#ff5f03"
            leftColor="#ff5f03"
            rightColor="#ff5f03"
            upColor="#ff5f03"
            momentum={13}
            radius={3.5}
          />
          <FlutedGlass
            aberration={0.61}
            angle={31}
            frequency={8}
            highlight={0.12}
            highlightSoftness={0}
            lightAngle={-90}
            refraction={4}
            shape="rounded"
            softness={1}
            speed={0.15}
          />
          <FilmGrain strength={0.05} />
        </Shader>
      </div>

      {/* Navbar */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} londonTime={londonTime} />

      {/* spacer */}
      <div className="flex-1" />

      {/* Hero 内容（底部对齐） */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20">
        {/* 小标签 */}
        <p className="text-[13px] sm:text-[14px] text-gray-900 tracking-wide mb-5 sm:mb-8">
          Axion Studio
        </p>

        {/* 标题 */}
        <h1 className="axion-clamp-heading font-medium leading-[1.08] tracking-[-0.03em] text-gray-900">
          <span className="sm:hidden">We craft digital experiences for brands ready to dominate their category online.</span>
          <span className="hidden sm:block">
            We craft digital experiences
            <br />
            for brands ready to dominate
            <br />
            their category online.
          </span>
        </h1>

        {/* CTA 行 */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5">
          {/* 橙色按钮 */}
          <TextRollButton
            className="bg-[#F26522] hover:bg-[#e05a1a] text-white"
            circleClassName="bg-white"
            arrowClassName="text-[#F26522]"
            textClassName="text-[13px] sm:text-[14px] font-medium text-white"
            circleSize="w-7 h-7 sm:w-8 sm:h-8"
          >
            Start a project
          </TextRollButton>

          {/* 合作伙伴徽章 */}
          <button
            type="button"
            className="group inline-flex items-center gap-2 sm:gap-3 bg-white rounded-[4px] pl-3 pr-3 sm:pr-4 py-2 transition-shadow duration-300"
            style={{
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLButtonElement).style.boxShadow =
                '0 4px 16px rgba(0,0,0,0.12)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLButtonElement).style.boxShadow =
                '0 2px 8px rgba(0,0,0,0.08)'
            }}
          >
            <PartnerIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#E8704E]" />
            <span className="text-[13px] sm:text-[14px] font-medium text-gray-900">
              Certified Partner
            </span>
            <span className="text-[10px] sm:text-[11px] bg-gray-900 text-white px-1.5 sm:px-2 py-0.5 rounded">
              Featured
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
