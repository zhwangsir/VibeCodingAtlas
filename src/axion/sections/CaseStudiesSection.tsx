import { ArrowRight, Link } from 'lucide-react'

type CaseCardProps = {
  /** 视频容器宽高比 */
  aspect: string
  /** 视频容器背景色 */
  bg: string
  /** 视频 URL */
  videoSrc: string
  /** 描述 */
  description: string
  /** 标题 */
  title: string
  /** hover 按钮类型 */
  buttonVariant: 'light' | 'dark'
  /** 按钮文本 */
  buttonText: string
  /** 按钮展开宽度 */
  expandedWidth: string
}

function CaseCard({
  aspect,
  bg,
  videoSrc,
  description,
  title,
  buttonVariant,
  buttonText,
  expandedWidth,
}: CaseCardProps) {
  const isDark = buttonVariant === 'dark'
  return (
    <div>
      {/* 视频容器 */}
      <div
        className={`group cursor-pointer relative rounded-2xl overflow-hidden ${bg}`}
        style={{ aspectRatio: aspect.replace(' / ', '/') }}
      >
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        {/* hover 按钮 */}
        <div
          className={`absolute bottom-4 left-4 h-9 ${
            isDark ? 'bg-gray-900' : 'bg-white'
          } rounded-full flex items-center justify-start transition-all duration-300 ease-in-out overflow-hidden group-hover:pr-5`}
          // 基础/展开宽度均由下方 <style> 控制（内联 style 会压过 hover 规则导致无法展开）
          data-expand={expandedWidth}
        >
          {/* 文本 */}
          <span
            className={`text-[13px] font-medium whitespace-nowrap pl-0 group-hover:pl-4 transition-opacity duration-200 delay-100 ${
              isDark ? 'text-white' : 'text-gray-900'
            } opacity-0 group-hover:opacity-100`}
          >
            {buttonText}
          </span>
          {/* 图标圆圈 */}
          <span className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center">
            {isDark ? (
              <ArrowRight
                size={14}
                className="text-white transition-transform duration-300 group-hover:rotate-0 -rotate-45"
              />
            ) : (
              <Link
                size={14}
                className="text-gray-900 transition-transform duration-300 group-hover:rotate-0 -rotate-45"
              />
            )}
          </span>
        </div>
        {/* 内联 CSS 实现 group-hover 宽度变化（Tailwind 不能动态读 prop） */}
        <style>{`
          [data-expand="${expandedWidth}"] {
            width: 36px;
            transition: width 0.3s ease-in-out;
          }
          .group:hover [data-expand="${expandedWidth}"] {
            width: ${expandedWidth};
          }
        `}</style>
      </div>

      {/* 描述 */}
      <p className="text-[13px] sm:text-[14px] text-gray-600 mt-4 leading-relaxed">
        {description}
      </p>
      <h3 className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-1">
        {title}
      </h3>
    </div>
  )
}

/**
 * CaseStudiesSection — 案例展示区
 *
 * - bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28
 * - badge 行：编号圆 2 + "Featured client work" 胶囊
 * - h2 "Our projects"（同 hero clamp）
 * - 2 卡片 grid：Narrativ（白按钮 Learn more + link 图标）/ Luminar（深按钮 View case study + ArrowRight）
 */
export default function CaseStudiesSection() {
  return (
    <section className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
      <div className="max-w-[1440px] mx-auto">
        {/* Badge 行 */}
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            2
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-300 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900">
            Featured client work
          </span>
        </div>

        {/* Heading */}
        <h2
          className="axion-clamp-heading px-5 sm:px-8 lg:px-12 font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-10 sm:mb-14 lg:mb-16"
        >
          Our projects
        </h2>

        {/* 卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 px-5 sm:px-8 lg:px-12">
          <CaseCard
            aspect="329 / 246"
            bg="bg-[#1a1d2e]"
            videoSrc="/videos/390f5305-8719-41d5-ae80-d23ab3796c28.mp4"
            description="Winner of Site of the Month 2025 - an interactive 3D showcase driving record engagement"
            title="Narrativ"
            buttonVariant="light"
            buttonText="Learn more"
            expandedWidth="148px"
          />
          <CaseCard
            aspect="1 / 1"
            bg="bg-[#6b6b6b]"
            videoSrc="/videos/f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4"
            description="Transforming a dated platform into a conversion-focused brand experience"
            title="Luminar"
            buttonVariant="dark"
            buttonText="View case study"
            expandedWidth="168px"
          />
        </div>
      </div>
    </section>
  )
}
