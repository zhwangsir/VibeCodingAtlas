import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import LiveProjectButton from '../components/LiveProjectButton'

type Project = {
  num: string
  category: string
  name: string
  col1img1: string
  col1img2: string
  col2img: string
}

const PROJECTS: Project[] = [
  {
    num: '01',
    category: 'Client',
    name: 'Nextlevel Studio',
    col1img1: '/images/5eff02e0-87a5-41ce-b64f-eb08da8f33db_1280.webp',
    col1img2: '/images/11d841fd-8b41-46a5-82e4-b04f2407a7d8_1280.webp',
    col2img: '/images/e317bf2d-28d4-48cc-86b0-6f72f25b6327_1280.webp',
  },
  {
    num: '02',
    category: 'Personal',
    name: 'Aura Brand Identity',
    col1img1: '/images/911201c5-36d9-4bc6-bac7-331adfce159f_1280.webp',
    col1img2: '/images/5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1_1280.webp',
    col2img: '/images/adc5dcbd-a8e6-49c0-b43a-9b030d835cea_1280.webp',
  },
  {
    num: '03',
    category: 'Client',
    name: 'Solaris Digital',
    col1img1: '/images/963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f_1280.webp',
    col1img2: '/images/438f781a-9846-4dcc-89ab-c4e6cb830f5b_1280.webp',
    col2img: '/images/9d062121-ad7e-46b9-999a-1a6a692ef1ee_1280.webp',
  },
]

/**
 * 单个 sticky 项目卡片
 * 关键：每张卡片用自己的 ref 监听 scroll progress，
 * 当下一张卡片覆盖上来时，当前卡片缩小并轻微下沉。
 */
function ProjectCard({
  project,
  index,
  total,
}: {
  project: Project
  index: number
  total: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start'],
  })

  // 当卡片滚出视口时缩小：[0, 1] → [1, targetScale]
  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])
  const y = useTransform(scrollYProgress, [0, 1], [0, -20])

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 h-[85vh] flex items-center"
      style={{ top: `${96 + index * 28}px` }}
    >
      <motion.div
        style={{ scale, y }}
        className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8"
      >
        {/* 顶部行：编号 + 类别 + 名称 + Live Project 按钮 */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 md:mb-8">
          <div className="flex items-center gap-4 md:gap-8">
            <span
              className="font-black text-white leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.num}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA]/60 text-sm uppercase tracking-widest">
                {project.category}
              </span>
              <span
                className="text-white font-medium uppercase"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton className="hidden md:inline-flex" />
        </div>

        {/* 底部行：双列图片网格 */}
        <div className="flex gap-3 sm:gap-4 md:gap-6">
          {/* 左列 40% — 2 张堆叠 */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 w-[40%]">
            <div
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#1a1a1a]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1img1}
                alt={`${project.name} 1`}
                className="w-full h-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>
            <div
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#1a1a1a]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1img2}
                alt={`${project.name} 2`}
                className="w-full h-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>
          {/* 右列 60% — 1 张高图 */}
          <div className="w-[60%] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#1a1a1a]">
            <img
              src={project.col2img}
              alt={`${project.name} 3`}
              className="w-full h-full object-cover"
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>

        {/* 移动端按钮 */}
        <div className="mt-6 md:hidden">
          <LiveProjectButton />
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      {/* 标题 */}
      <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-20 md:mb-28">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      {/* sticky-stacking 卡片容器 */}
      <div className="max-w-6xl mx-auto">
        {PROJECTS.map((p, i) => (
          <ProjectCard
            key={p.num}
            project={p}
            index={i}
            total={PROJECTS.length}
          />
        ))}
      </div>

      {/* 底部 Contact 区 */}
      <div id="contact" className="mt-20 sm:mt-24 md:mt-32 text-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight mb-8"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Contact
          </h2>
        </FadeIn>
        <FadeIn delay={0.2} y={30}>
          <p
            className="text-[#D7E2EA]/60 font-light max-w-md mx-auto"
            style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)' }}
          >
            Have a project in mind? Let&apos;s create something incredible together.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
