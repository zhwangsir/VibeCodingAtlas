import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import WordsPullUp from '../components/WordsPullUp'

const VIDEO_URL =
  '/videos/8a9ccda6-5cff-4628-b164-059c500a2b41.mp4'

const NAV_ITEMS = ['Our story', 'Collective', 'Workshops', 'Programs', 'Inquiries']

const EASE = [0.16, 1, 0.3, 1] as const

/** 导航链接 — 用 CSS class 控制 hover 颜色 */
function NavLink({ item }: { item: string }) {
  return (
    <a
      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
      className="text-[10px] sm:text-xs md:text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-md prisma-nav-link"
    >
      {item}
      <style>{`
        .prisma-nav-link { color: rgba(225, 224, 204, 0.8); }
        .prisma-nav-link:hover { color: #E1E0CC; }
      `}</style>
    </a>
  )
}

export default function HeroSection() {
  return (
    <section className="relative h-screen p-4 md:p-6">
      {/* 内嵌容器 — 圆角 + 裁剪 */}
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* 背景视频 */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />

        {/* 噪点叠加 */}
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />

        {/* 渐变叠加 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        {/* 导航栏 — 顶部居中黑色胶囊 */}
        <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item} item={item} />
            ))}
          </div>
        </nav>

        {/* Hero 内容 — 底部对齐，12 列网格 */}
        <div className="absolute bottom-0 left-0 right-0 grid grid-cols-12 gap-4 p-4 sm:p-6 md:p-8 lg:p-12 z-10">
          {/* 左 8 列：巨型标题 */}
          <div className="col-span-12 md:col-span-8">
            <h1
              className="font-medium leading-[0.85] tracking-[-0.07em] text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
              style={{ color: '#E1E0CC' }}
            >
              <WordsPullUp text="Prisma" showAsterisk />
            </h1>
          </div>

          {/* 右 4 列：描述 + CTA */}
          <div className="col-span-12 md:col-span-4 flex flex-col justify-end gap-4 md:gap-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              className="text-primary/70 text-xs sm:text-sm md:text-base"
              style={{ lineHeight: 1.2 }}
            >
              Prisma is a worldwide network of visual artists, filmmakers and storytellers bound
              not by place, status or labels but by passion and hunger to unlock potential through
              our unique perspectives.
            </motion.p>

            <motion.button
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
              className="group bg-primary text-black font-medium text-sm sm:text-base rounded-full pl-6 pr-1 py-1 inline-flex items-center gap-2 hover:gap-3 transition-all w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              Join the lab
              <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform group-hover:scale-110">
                <ArrowRight size={16} className="text-primary" />
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
