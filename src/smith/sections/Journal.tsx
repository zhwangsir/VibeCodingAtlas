import { motion } from 'framer-motion'
import { SectionHeader } from './SelectedWorks'

type JournalEntry = {
  title: string
  image: string
  readTime: string
  date: string
}

const ENTRIES: JournalEntry[] = [
  {
    title: 'The art of whitespace in modern interfaces',
    image:
      '/images/ed9845ab-f5b2-4018-8ce7-07cc01823522_640.webp',
    readTime: '5 min read',
    date: 'Apr 12, 2026',
  },
  {
    title: 'Designing for motion: timing & easing',
    image:
      '/images/f56666dc-c099-4778-ad82-9ad4f209567b_640.webp',
    readTime: '7 min read',
    date: 'Mar 28, 2026',
  },
  {
    title: 'Why every portfolio needs a story arc',
    image:
      '/images/4a5edc79-d78f-4637-ac8b-53c43c220606_640.webp',
    readTime: '4 min read',
    date: 'Mar 10, 2026',
  },
  {
    title: 'Building design systems that scale',
    image:
      '/images/ed9845ab-f5b2-4018-8ce7-07cc01823522_640.webp',
    readTime: '6 min read',
    date: 'Feb 22, 2026',
  },
]

/**
 * Journal — 4 篇日志，水平胶囊列表
 * 每条：rounded-[40px] sm:rounded-full + 缩略图 + 标题 + 阅读时长 + 日期
 */
export default function Journal() {
  return (
    <section id="journal" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Journal"
          title="Recent"
          italicWord="thoughts"
          subtext="Notes on design, code, and the craft of building digital things."
          buttonText="View all entries"
        />

        <div className="flex flex-col gap-3 md:gap-4">
          {ENTRIES.map((entry, i) => (
            <motion.a
              key={entry.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="group flex items-center gap-6 p-4 rounded-[40px] sm:rounded-full bg-surface/30 hover:bg-surface border border-stroke transition-colors"
            >
              {/* 缩略图 */}
              <span className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0">
                <img
                  src={entry.image}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </span>

              {/* 标题 */}
              <span className="flex-1 text-sm sm:text-base text-text-primary font-medium truncate">
                {entry.title}
              </span>

              {/* 阅读时长 + 日期 */}
              <span className="hidden sm:flex items-center gap-4 text-xs text-muted">
                <span>{entry.readTime}</span>
                <span className="w-1 h-1 rounded-full bg-stroke" />
                <span>{entry.date}</span>
              </span>

              {/* 移动端日期 */}
              <span className="sm:hidden text-xs text-muted">{entry.date}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
