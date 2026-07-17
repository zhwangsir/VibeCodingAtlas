import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { X, ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

type ExplorationItem = {
  image: string
  title: string
}

const ITEMS: ExplorationItem[] = [
  {
    image:
      '/images/ed9845ab-f5b2-4018-8ce7-07cc01823522_640.webp',
    title: 'Color Study 01',
  },
  {
    image:
      '/images/f56666dc-c099-4778-ad82-9ad4f209567b_640.webp',
    title: 'Texture Play',
  },
  {
    image:
      '/images/4a5edc79-d78f-4637-ac8b-53c43c220606_640.webp',
    title: 'Light & Shadow',
  },
  {
    image:
      '/images/ed9845ab-f5b2-4018-8ce7-07cc01823522_640.webp',
    title: 'Form Study',
  },
  {
    image:
      '/images/f56666dc-c099-4778-ad82-9ad4f209567b_640.webp',
    title: 'Gradient Lab',
  },
  {
    image:
      '/images/4a5edc79-d78f-4637-ac8b-53c43c220606_640.webp',
    title: 'Type Sketch',
  },
]

/**
 * Explorations — 视差画廊
 * - min-h-[300vh] 容器
 * - Layer 1：居中 pinned 内容（GSAP ScrollTrigger pin）— 标题 + 副文本 + Dribbble 按钮
 * - Layer 2：两列视差卡片（左列向下移动 / 右列向上移动），点击触发 lightbox
 */
export default function Explorations() {
  const rootRef = useRef<HTMLDivElement>(null)
  const pinnedRef = useRef<HTMLDivElement>(null)
  const leftColRef = useRef<HTMLDivElement>(null)
  const rightColRef = useRef<HTMLDivElement>(null)
  const [lightbox, setLightbox] = useState<ExplorationItem | null>(null)

  // Esc 关闭 lightbox
  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [lightbox])

  // GSAP ScrollTrigger — pin + parallax
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin 中心内容
      if (pinnedRef.current && rootRef.current) {
        ScrollTrigger.create({
          trigger: rootRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: pinnedRef.current,
          pinSpacing: false,
        })
      }

      // 视差：左列向下，右列向上
      if (leftColRef.current && rightColRef.current && rootRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { y: -100 },
          {
            y: 200,
            ease: 'none',
            scrollTrigger: {
              trigger: rootRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 1,
            },
          }
        )
        gsap.fromTo(
          rightColRef.current,
          { y: 100 },
          {
            y: -200,
            ease: 'none',
            scrollTrigger: {
              trigger: rootRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 1,
            },
          }
        )
      }
    }, rootRef)

    return () => ctx.revert()
  }, [])

  const leftItems = ITEMS.filter((_, i) => i % 2 === 0)
  const rightItems = ITEMS.filter((_, i) => i % 2 !== 0)

  return (
    <section
      ref={rootRef}
      className="relative bg-bg min-h-[300vh] overflow-hidden"
    >
      {/* Layer 1 — pinned 居中内容 */}
      <div
        ref={pinnedRef}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="pointer-events-auto"
        >
          <div className="flex items-center gap-3 mb-4 justify-center">
            <span className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Explorations</span>
            <span className="w-8 h-px bg-stroke" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal text-text-primary tracking-tight mb-4">
            Visual <span className="font-display italic">playground</span>
          </h2>
          <p className="text-sm md:text-base text-muted max-w-md mx-auto mb-6">
            A collection of visual experiments — color, form, light, and texture studies from the
            edges of the studio.
          </p>
          <a
            href="#"
            className="group relative inline-flex rounded-full text-sm px-6 py-3 text-text-primary"
          >
            <span
              className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            />
            <span className="relative bg-surface border border-stroke rounded-full px-6 py-3 group-hover:bg-bg transition-colors inline-flex items-center gap-1">
              View on Dribbble
              <ArrowUpRight size={14} strokeWidth={2} />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Layer 2 — 视差列 */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-12 md:gap-40 max-w-[1400px] w-full px-6">
          <div ref={leftColRef} className="flex flex-col gap-12 md:gap-40">
            {leftItems.map((item) => (
              <ExplorationCard key={item.title} item={item} onClick={() => setLightbox(item)} />
            ))}
          </div>
          <div ref={rightColRef} className="flex flex-col gap-12 md:gap-40 mt-32">
            {rightItems.map((item) => (
              <ExplorationCard key={item.title} item={item} onClick={() => setLightbox(item)} />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors"
          >
            <X size={28} strokeWidth={2} />
          </button>
          <img
            src={lightbox.image}
            alt={lightbox.title}
            className="max-w-full max-h-full object-contain rounded-2xl"
          />
        </div>
      )}
    </section>
  )
}

function ExplorationCard({
  item,
  onClick,
}: {
  item: ExplorationItem
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group block w-full max-w-[320px] mx-auto aspect-square rounded-2xl overflow-hidden bg-surface border border-stroke relative cursor-pointer"
      style={{ transform: 'rotate(-2deg)' }}
      aria-label={`Open ${item.title}`}
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-bg/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <span className="text-sm text-text-primary font-medium">{item.title}</span>
      </div>
    </button>
  )
}
