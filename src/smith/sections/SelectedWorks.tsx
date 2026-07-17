import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

type Project = {
  title: string
  image: string
  /** bento 网格中占据的列数（md+） */
  span: '7' | '5'
  aspect: 'aspect-[16/10]' | 'aspect-[16/12]' | 'aspect-square'
}

const PROJECTS: Project[] = [
  {
    title: 'Automotive Motion',
    image:
      '/images/4a5edc79-d78f-4637-ac8b-53c43c220606_1280.webp',
    span: '7',
    aspect: 'aspect-[16/10]',
  },
  {
    title: 'Urban Architecture',
    image:
      '/images/ed9845ab-f5b2-4018-8ce7-07cc01823522_1280.webp',
    span: '5',
    aspect: 'aspect-[16/12]',
  },
  {
    title: 'Human Perspective',
    image:
      '/images/f56666dc-c099-4778-ad82-9ad4f209567b_1280.webp',
    span: '5',
    aspect: 'aspect-[16/12]',
  },
  {
    title: 'Brand Identity',
    image:
      '/images/74be96d4-9c1b-40cf-932a-96f4f4babed3_1280.webp',
    span: '7',
    aspect: 'aspect-[16/10]',
  },
]

/** SectionHeader — eyebrow + 标题 + 副文本 + 右侧按钮（共享给 Journal） */
export function SectionHeader({
  eyebrow,
  title,
  italicWord,
  subtext,
  buttonText,
}: {
  eyebrow: string
  title: string
  italicWord: string
  subtext: string
  buttonText: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14"
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">{eyebrow}</span>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal text-text-primary tracking-tight">
          {title} <span className="font-display italic">{italicWord}</span>
        </h2>
        <p className="mt-4 text-sm md:text-base text-muted max-w-md">{subtext}</p>
      </div>

      {/* View all 按钮 — 桌面端 */}
      <a
        href="#"
        className="hidden md:inline-flex group relative items-center gap-2 rounded-full text-sm px-6 py-3 text-text-primary"
      >
        <span
          className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        />
        <span className="relative bg-surface border border-stroke rounded-full px-6 py-3 group-hover:bg-bg transition-colors">
          {buttonText}
          <ArrowUpRight
            size={14}
            strokeWidth={2}
            className="inline ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </a>
    </motion.div>
  )
}

/**
 * SelectedWorks — bento 网格作品展示
 * - md+ 12 列网格，列跨度交替 7/5/5/7
 * - 卡片：bg-surface + border-stroke + halftone overlay + hover 显示查看标签
 */
export default function SelectedWorks() {
  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Selected Work"
          title="Featured"
          italicWord="projects"
          subtext="A selection of projects I've worked on, from concept to launch."
          buttonText="View all work"
        />

        {/* Bento 网格 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const spanClass =
    project.span === '7' ? 'md:col-span-7' : 'md:col-span-5'

  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={`group relative block ${spanClass} bg-surface border border-stroke rounded-3xl overflow-hidden ${project.aspect}`}
    >
      {/* 背景图 */}
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Halftone 叠加 */}
      <div
        className="absolute inset-0 halftone-overlay opacity-20 mix-blend-multiply pointer-events-none"
        aria-hidden="true"
      />

      {/* Hover 暗化 + blur */}
      <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-opacity duration-300 flex items-center justify-center">
        {/* 查看标签 — pill + 动画 gradient border */}
        <span className="relative inline-flex rounded-full bg-white px-6 py-2.5 text-sm text-bg">
          <span
            className="absolute inset-[-2px] rounded-full accent-gradient-animated opacity-100"
            aria-hidden="true"
          />
          <span className="relative bg-white rounded-full px-4 py-1.5">
            View — <span className="font-display italic">{project.title}</span>
          </span>
        </span>
      </div>
    </motion.a>
  )
}
