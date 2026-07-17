import { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { X, LayoutGrid, List, LayoutTemplate, ArrowUp, Search } from 'lucide-react'
import { showcases } from '../showcases/registry'

/* ============================================================
 *  类型与常量
 * ============================================================ */
type Theme = 'darkroom' | 'steel' | 'vine' | 'ash'
type Lang = 'zh' | 'en'
type View = 'grid' | 'compact' | 'dense'
type MainCat =
  | 'all'
  | 'ai-tech'
  | 'saas'
  | 'creative'
  | 'agency'
  | 'finance'
  | 'visual'
  | 'lifestyle'
  | 'system'

const THEMES: { id: Theme; label: string; dot: string }[] = [
  { id: 'darkroom', label: 'Darkroom', dot: '#c8843a' },
  { id: 'steel', label: 'Steel', dot: '#6b8caa' },
  { id: 'vine', label: 'Vine', dot: '#8a6b9e' },
  { id: 'ash', label: 'Ash', dot: '#b0a8a0' },
]

const ACCENT: Record<Theme, string> = {
  darkroom: '#c8843a',
  steel: '#6b8caa',
  vine: '#8a6b9e',
  ash: '#b0a8a0',
}

/** 主分类定义 */
const MAIN_CATS: { id: MainCat; zh: string; en: string }[] = [
  { id: 'all', zh: '全部', en: 'All' },
  { id: 'ai-tech', zh: 'AI 与科技', en: 'AI & Tech' },
  { id: 'saas', zh: 'SaaS 与产品', en: 'SaaS & Product' },
  { id: 'creative', zh: '创意与工作室', en: 'Creative & Studio' },
  { id: 'agency', zh: '机构与作品集', en: 'Agency & Portfolio' },
  { id: 'finance', zh: '金融与商业', en: 'Finance & Business' },
  { id: 'visual', zh: '影像与电影', en: 'Visual & Cinematic' },
  { id: 'lifestyle', zh: '生活方式', en: 'Lifestyle' },
  { id: 'system', zh: '设计系统', en: 'Design System' },
]

/** 根据 category.en 归并到主分类 */
function toMainCat(catEn: string): MainCat {
  const c = catEn.toLowerCase()
  if (c.includes('design system') || c.includes('style guide') || c.includes('category'))
    return 'system'
  if (
    c.includes('defi') ||
    c.includes('fintech') ||
    c.includes('investment') ||
    c.includes('crypto') ||
    c.includes('nft') ||
    c.includes('private jet')
  )
    return 'finance'
  if (
    c.includes('cinematic') ||
    c.includes('nature') ||
    c.includes('streaming') ||
    c.includes('beauty') ||
    c.includes('fashion') ||
    c.includes('travel')
  )
    return 'visual'
  if (
    c.includes('wellness') ||
    c.includes('health') ||
    c.includes('mindful') ||
    c.includes('e-commerce') ||
    c.includes('education') ||
    c.includes('children') ||
    c.includes('medical') ||
    c.includes('notes') ||
    c.includes('productivity')
  )
    return 'lifestyle'
  if (c.includes('ai') || c.includes('tech') || c.includes('space') || c.includes('geology') || c.includes('web3'))
    return 'ai-tech'
  if (c.includes('saas') || c.includes('content') || c.includes('security') || c.includes('password'))
    return 'saas'
  if (c.includes('agency') || c.includes('portfolio') || c.includes('brand') || c.includes('marketing') || c.includes('talent'))
    return 'agency'
  return 'creative'
}

/** field 亮度基调：从渐变字符串提取全部 hex 色，估算平均相对亮度 */
type FieldTone = 'light' | 'mid' | 'dark'
function fieldTone(field: string): FieldTone {
  const hexes = field.match(/#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/g)
  if (!hexes || hexes.length === 0) return 'dark'
  let sum = 0
  for (const raw of hexes) {
    let h = raw.slice(1)
    if (h.length === 3) h = h.split('').map((c) => c + c).join('')
    const r = parseInt(h.slice(0, 2), 16) / 255
    const g = parseInt(h.slice(2, 4), 16) / 255
    const b = parseInt(h.slice(4, 6), 16) / 255
    sum += 0.2126 * r + 0.7152 * g + 0.0722 * b
  }
  const lum = sum / hexes.length
  return lum >= 0.55 ? 'light' : lum >= 0.38 ? 'mid' : 'dark'
}

/**
 * BlurReveal — 逐字/逐词模糊升起入场
 * 借鉴合集内页面（nora 词级 reveal、lithos 行级 blur-rise）的入场模式：
 * opacity 0 + translateY(0.35em) + blur(10px) → 清晰，级联 45ms。
 * 中文按字拆分，英文按词拆分。
 */
function BlurReveal({
  text,
  by = 'char',
  delay = 0,
  mounted,
}: {
  text: string
  by?: 'char' | 'word'
  delay?: number
  mounted: boolean
}) {
  const units = by === 'word' ? text.split(' ') : Array.from(text)
  return (
    <>
      {units.map((u, i) => (
        <span
          key={`${u}-${i}`}
          className="inline-block will-change-transform"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(0.35em)',
            filter: mounted ? 'blur(0)' : 'blur(10px)',
            transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay + i * 0.045}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay + i * 0.045}s, filter 0.7s cubic-bezier(0.16,1,0.3,1) ${delay + i * 0.045}s`,
          }}
        >
          {by === 'word' && i < units.length - 1 ? u + '\u00A0' : u}
        </span>
      ))}
    </>
  )
}

/** 框架文案中英双语 — Vibe Coding 合集定位 */
const I18N = {
  atelier: { zh: 'Vibe Coding 合集', en: 'Vibe Coding Atlas' },
  titleA: { zh: '一句提示词，', en: 'One prompt,' },
  titleB: { zh: '一个世界。', en: 'one world.' },
  intro: {
    zh: '这里收录 76 个全屏品牌页面，每一个都由单条提示词经 Vibe Coding 直接生成。选择任意实验，走进一句话构建的世界 — 按',
    en: 'A collection of 76 full-screen brand landings, each generated from a single prompt via Vibe Coding. Pick an experiment and step into a world built from one sentence — press',
  },
  escHint: { zh: '返回合集。', en: 'to return.' },
  develop: { zh: '进入实验', en: 'Enter' },
  viewPrompt: { zh: '查看提示词', en: 'View prompt' },
  addPrompt: { zh: '补充提示词', en: 'Add prompt' },
  promptOn: { zh: '已收录', en: 'prompt' },
  promptOff: { zh: '未收录', en: 'no prompt' },
  search: { zh: '搜索实验…', en: 'Search experiments…' },
  viewGrid: { zh: '网格', en: 'Grid' },
  viewCompact: { zh: '列表', en: 'List' },
  viewDense: { zh: '密集', en: 'Dense' },
  results: { zh: '个实验匹配', en: 'matches' },
  noResults: { zh: '没有匹配的实验。', en: 'No experiments found.' },
  noResultsHint: { zh: '换个关键词或分类试试。', en: 'Try a different keyword or category.' },
  backToTop: { zh: '回到顶部', en: 'Back to top' },
  footerCount: { zh: '个实验 · 持续生成中', en: 'experiments · still generating' },
  footerSig: { zh: 'Vibe Coding 合集', en: 'Vibe Coding Atlas' },
  categories: { zh: '个分类', en: 'categories' },
  metaCmd: { zh: 'vibe generate --count 76', en: 'vibe generate --count 76' },
  metaRange: { zh: '实验', en: 'EXP' },
}

/* ============================================================
 *  AtelierField — 暗房微粒场
 *  · 三层视差景深（远层模糊 / 近层锐利）
 *  · 水波纹（点击触发，慢速 3s 大范围 500px）
 *  · 粒子聚集形成按钮（点击时强力聚拢 + 圆形 outline）
 *  · 呼吸式 baseAlpha 随时间微浮动
 * ============================================================ */
type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  layer: 0 | 1 | 2
  baseAlpha: number
  parallax: number
  phase: number
}

type Ripple = {
  x: number
  y: number
  start: number
  color: string
  maxR: number
  duration: number
}

type FormBtn = {
  x: number
  y: number
  start: number
  duration: number
  radius: number
}

function AtelierField({
  accent,
  attractRef,
  rippleRef,
  formRef,
}: {
  accent: string
  attractRef: React.MutableRefObject<{ x: number; y: number; strength: number }>
  rippleRef: React.MutableRefObject<Ripple[]>
  formRef: React.MutableRefObject<FormBtn | null>
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const scrollRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w = window.innerWidth
    let h = window.innerHeight
    canvas.width = w * dpr
    canvas.height = h * dpr
    canvas.style.width = w + 'px'
    canvas.style.height = h + 'px'
    ctx.scale(dpr, dpr)
    let raf = 0

    const COUNT = 130
    const particles: Particle[] = []
    for (let i = 0; i < COUNT; i++) {
      const layer = (i < 45 ? 0 : i < 95 ? 1 : 2) as 0 | 1 | 2
      const r =
        layer === 0
          ? 0.5 + Math.random() * 0.5
          : layer === 1
            ? 0.8 + Math.random() * 0.7
            : 1.1 + Math.random() * 1.0
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
        r,
        layer,
        baseAlpha: layer === 0 ? 0.1 : layer === 1 ? 0.2 : 0.38,
        parallax: layer === 0 ? 0.02 : layer === 1 ? 0.05 : 0.09,
        phase: Math.random() * Math.PI * 2,
      })
    }

    const onResize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.scale(dpr, dpr)
    }
    const onScroll = () => {
      scrollRef.current = window.scrollY
    }
    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', onScroll, { passive: true })

    const draw = (now: number) => {
      ctx.clearRect(0, 0, w, h)
      const att = attractRef.current
      const scrollY = scrollRef.current

      /* === 1. 水波纹（最底层，慢速扩散） === */
      const ripples = rippleRef.current
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i]
        const t = (now - rp.start) / rp.duration
        if (t >= 1) {
          ripples.splice(i, 1)
          continue
        }
        const eased = 1 - Math.pow(1 - t, 3)
        const radius = rp.maxR * eased
        const alpha = (1 - t) * 0.42
        /* 外圈 */
        ctx.beginPath()
        ctx.arc(rp.x, rp.y, radius, 0, Math.PI * 2)
        ctx.strokeStyle = rp.color
        ctx.globalAlpha = alpha
        ctx.lineWidth = 1.2
        ctx.stroke()
        /* 内圈柔光 */
        ctx.beginPath()
        ctx.arc(rp.x, rp.y, radius * 0.6, 0, Math.PI * 2)
        ctx.strokeStyle = rp.color
        ctx.globalAlpha = alpha * 0.5
        ctx.lineWidth = 0.8
        ctx.stroke()
      }
      ctx.globalAlpha = 1

      /* === 2. 粒子（带视差 + 景深 + 呼吸 alpha） === */
      for (const p of particles) {
        const parallaxOffset = scrollY * p.parallax

        if (att.strength > 0) {
          const dx = att.x - p.x
          const dy = att.y - (p.y - parallaxOffset)
          const d2 = dx * dx + dy * dy
          if (d2 < 320 * 320) {
            const d = Math.sqrt(d2) + 0.01
            /* 点击时 strength 可达 1.5，让粒子明显聚拢形成按钮 */
            const f =
              att.strength *
              (1 - d / 320) *
              (p.layer === 2 ? 0.085 : p.layer === 1 ? 0.055 : 0.03)
            p.vx += (dx / d) * f
            p.vy += (dy / d) * f
          }
        }

        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.96
        p.vy *= 0.96
        p.vx += (Math.random() - 0.5) * 0.02
        p.vy += (Math.random() - 0.5) * 0.02

        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        if (p.y > h + 10) p.y = -10

        const renderY = p.y - parallaxOffset
        const wrappedY = ((renderY % h) + h) % h

        /* 呼吸式 alpha 微浮动 */
        const breath = 0.85 + 0.15 * Math.sin(now * 0.0008 + p.phase)
        const alpha = Math.min(p.baseAlpha * breath + att.strength * 0.25, 0.8)

        ctx.beginPath()
        ctx.arc(p.x, wrappedY, p.r, 0, Math.PI * 2)
        if (p.layer === 2) {
          /* 近层：accent 色 + 锐利 */
          ctx.fillStyle = accent
          ctx.globalAlpha = alpha
        } else if (p.layer === 1) {
          /* 中层：白色 */
          ctx.fillStyle = '#ffffff'
          ctx.globalAlpha = alpha
        } else {
          /* 远层：白色 + shadowBlur 模拟景深模糊 */
          ctx.fillStyle = '#ffffff'
          ctx.globalAlpha = alpha
          ctx.shadowBlur = 1.5
          ctx.shadowColor = '#ffffff'
        }
        ctx.fill()
        ctx.shadowBlur = 0
      }
      ctx.globalAlpha = 1

      /* === 3. 粒子聚集形成的"显影按钮"轮廓 === */
      const fb = formRef.current
      if (fb) {
        const t = (now - fb.start) / fb.duration
        if (t >= 1) {
          formRef.current = null
        } else {
          /* 三阶段：0-0.4 淡入扩张 / 0.4-0.7 稳定 / 0.7-1 淡出收缩 */
          let scale: number
          let alpha: number
          if (t < 0.4) {
            const k = t / 0.4
            scale = 0.6 + 0.4 * (1 - Math.pow(1 - k, 3))
            alpha = k
          } else if (t < 0.7) {
            scale = 1
            alpha = 1
          } else {
            const k = (t - 0.7) / 0.3
            scale = 1 + 0.15 * k
            alpha = 1 - k
          }
          const r = fb.radius * scale
          /* 外圈描边 */
          ctx.beginPath()
          ctx.arc(fb.x, fb.y, r, 0, Math.PI * 2)
          ctx.strokeStyle = accent
          ctx.globalAlpha = alpha * 0.55
          ctx.lineWidth = 1.4
          ctx.stroke()
          /* 内圈柔光填充 */
          const grad = ctx.createRadialGradient(fb.x, fb.y, 0, fb.x, fb.y, r)
          grad.addColorStop(0, accent + 'cc')
          grad.addColorStop(0.6, accent + '33')
          grad.addColorStop(1, 'transparent')
          ctx.beginPath()
          ctx.arc(fb.x, fb.y, r * 0.85, 0, Math.PI * 2)
          ctx.fillStyle = grad
          ctx.globalAlpha = alpha * 0.35
          ctx.fill()
          /* 中心十字标记（暗房对焦感） */
          ctx.globalAlpha = alpha * 0.7
          ctx.strokeStyle = accent
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(fb.x - 6, fb.y)
          ctx.lineTo(fb.x + 6, fb.y)
          ctx.moveTo(fb.x, fb.y - 6)
          ctx.lineTo(fb.x, fb.y + 6)
          ctx.stroke()
        }
        ctx.globalAlpha = 1
      }

      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [accent, attractRef, rippleRef, formRef])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0" />
}

/* ============================================================
 *  ShowcaseIndex — 主入口（美化优化版）
 *  保留：4 色主题 / 中英双语 / 粒子场 / 暗房美学
 *  优化：滚动视差 / 入场动画 / 分组标题增强 / 滚动进度 /
 *        主题过渡 / 分类 accent / 卡片微交互
 * ============================================================ */
export default function ShowcaseIndex() {
  const navigate = useNavigate()
  const [theme, setTheme] = useState<Theme>('darkroom')
  const [lang, setLang] = useState<Lang>('zh')
  const [view, setView] = useState<View>('grid')
  const [mainCat, setMainCat] = useState<MainCat>('all')
  const [queryInput, setQueryInput] = useState('')
  const [query, setQuery] = useState('')
  const [showTop, setShowTop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mounted, setMounted] = useState(false)
  const attractRef = useRef({ x: 0, y: 0, strength: 0 })
  const rippleRef = useRef<Ripple[]>([])
  const formRef = useRef<FormBtn | null>(null)
  const searchRef = useRef<HTMLInputElement>(null)
  const accent = ACCENT[theme]

  /* 触发水波纹 — 慢速 3s，大范围 500px，多层 */
  const triggerRipple = useCallback((x: number, y: number, color: string) => {
    const now = performance.now()
    rippleRef.current.push(
      { x, y, start: now, color, maxR: 520, duration: 3000 },
      { x, y, start: now + 180, color, maxR: 380, duration: 2600 },
      { x, y, start: now + 360, color, maxR: 240, duration: 2200 },
    )
  }, [])

  /* 触发"粒子聚集形成按钮" — 800ms 三阶段淡入/稳定/淡出 */
  const triggerForm = useCallback((x: number, y: number) => {
    formRef.current = {
      x,
      y,
      start: performance.now(),
      duration: 800,
      radius: 56,
    }
  }, [])

  /* 挂载动画 */
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(t)
  }, [])

  /* 搜索防抖 150ms */
  useEffect(() => {
    const t = setTimeout(() => setQuery(queryInput.trim()), 150)
    return () => clearTimeout(t)
  }, [queryInput])

  /* 滚动监听 — 回到顶部按钮 + 进度条 */
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setShowTop(scrollY > 800)
      setScrollProgress(docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* 键盘快捷键 */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName
      const inInput = tag === 'INPUT' || tag === 'TEXTAREA'
      if (e.key === '/' && !inInput) {
        e.preventDefault()
        searchRef.current?.focus()
      } else if (e.key === 'Escape' && inInput) {
        setQueryInput('')
        searchRef.current?.blur()
      } else if (!inInput) {
        if (e.key === 'g') setView('grid')
        else if (e.key === 'c') setView('compact')
        else if (e.key === 'd') setView('dense')
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  /* 点击卡片：粒子聚集形成"显影按钮" → 水波纹扩散 → 导航 */
  const enterStudy = useCallback(
    (slug: string, e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      attractRef.current.x = cx
      attractRef.current.y = cy
      /* strength=1.5 让粒子明显聚拢形成按钮 */
      attractRef.current.strength = 1.5
      triggerRipple(cx, cy, accent)
      triggerForm(cx, cy)
      /* 800ms 后波纹与按钮完成，再导航 */
      window.setTimeout(() => navigate(`/${slug}`), 480)
      /* 1.2s 后释放吸引（导航已发生） */
      window.setTimeout(() => {
        attractRef.current.strength = 0
      }, 1200)
    },
    [navigate, accent, triggerRipple, triggerForm],
  )

  const onCardHover = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    attractRef.current.x = rect.left + rect.width / 2
    attractRef.current.y = rect.top + rect.height / 2
    attractRef.current.strength = 0.4
  }
  const onCardLeave = () => {
    attractRef.current.strength = 0
  }

  /* 主题切换：从 swatch 位置扩散波纹（强化主题切换的物理感） */
  const switchTheme = useCallback(
    (t: Theme, e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      triggerRipple(rect.left + 8, rect.top + 8, ACCENT[t])
      setTheme(t)
    },
    [triggerRipple],
  )

  /* 筛选 */
  const filtered = useMemo(() => {
    return showcases.filter((s) => {
      if (mainCat !== 'all' && toMainCat(s.category.en) !== mainCat) return false
      if (!query) return true
      const q = query.toLowerCase()
      return (
        s.title.toLowerCase().includes(q) ||
        s.brand.toLowerCase().includes(q) ||
        s.tagline.zh.toLowerCase().includes(q) ||
        s.tagline.en.toLowerCase().includes(q) ||
        s.description.zh.toLowerCase().includes(q) ||
        s.description.en.toLowerCase().includes(q) ||
        s.category.zh.toLowerCase().includes(q) ||
        s.category.en.toLowerCase().includes(q)
      )
    })
  }, [mainCat, query])

  /* 分组：浏览全部且无搜索时按主分类分组 */
  const grouped = useMemo(() => {
    if (mainCat !== 'all' || query) {
      return [{ cat: mainCat === 'all' ? ('all' as MainCat) : mainCat, items: filtered }]
    }
    const groups: { cat: MainCat; items: typeof filtered }[] = []
    for (const cat of MAIN_CATS) {
      if (cat.id === 'all') continue
      const items = filtered.filter((s) => toMainCat(s.category.en) === cat.id)
      if (items.length > 0) groups.push({ cat: cat.id, items })
    }
    return groups
  }, [filtered, mainCat, query])

  const catLabel = (cat: MainCat) => {
    const found = MAIN_CATS.find((c) => c.id === cat)
    return found ? found[lang] : cat
  }

  /* 全局编号映射 */
  const globalIndex = (slug: string) => {
    const idx = showcases.findIndex((s) => s.slug === slug)
    return idx >= 0 ? idx + 1 : 0
  }

  /* 入场动画 style 工厂 */
  const revealStyle = (delay: number): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  })

  return (
    <div
      data-theme={theme}
      className="atelier-root relative min-h-screen overflow-x-hidden"
      style={{
        transition: 'background 0.6s cubic-bezier(0.16,1,0.3,1), color 0.6s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <AtelierField
        accent={accent}
        attractRef={attractRef}
        rippleRef={rippleRef}
        formRef={formRef}
      />
      <div className="atelier-grain" />
      <div className="atelier-vignette" />

      {/* ===== 滚动进度条（克制版：1.5px + 弱辉光） ===== */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-[1.5px] pointer-events-none"
        style={{ background: 'transparent' }}
      >
        <div
          className="h-full transition-[width] duration-150 ease-out"
          style={{
            width: `${scrollProgress * 100}%`,
            background: `linear-gradient(90deg, transparent, ${accent} 40%, ${accent})`,
            boxShadow: `0 0 4px ${accent}55`,
          }}
        />
      </div>

      {/* 组件内局部样式：终端光标闪烁 + 液态玻璃高光 */}
      <style>{`
        @keyframes vibe-caret-blink {
          0%, 45% { opacity: 1; }
          50%, 95% { opacity: 0; }
          100% { opacity: 1; }
        }
        .vibe-caret {
          display: inline-block;
          width: 0.5em;
          height: 0.9em;
          margin-left: 0.08em;
          vertical-align: -0.05em;
          animation: vibe-caret-blink 1.2s steps(1) infinite;
        }
        .vibe-glass {
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);
        }
      `}</style>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
        {/* ===== Header ===== */}
        <header className="mb-14 md:mb-20" style={revealStyle(0)}>
          {/* 终端元信息条：命令行 + 实验编号范围 */}
          <div
            className="atelier-tabular flex items-center justify-between text-[9px] uppercase tracking-[0.3em] mb-8 pb-3"
            style={{ color: 'var(--atelier-muted)', borderBottom: '1px solid var(--atelier-line)' }}
          >
            <span className="flex items-center gap-2">
              <span style={{ color: accent, opacity: 0.9 }}>$</span>
              <span>{I18N.metaCmd[lang]}</span>
              <span
                className="vibe-caret"
                style={{ background: accent }}
                aria-hidden
              />
            </span>
            <span className="hidden sm:inline" style={{ opacity: 0.7 }}>
              PROMPT → INTERFACE
            </span>
            <span className="flex items-center gap-2">
              <span style={{ opacity: 0.6 }}>
                {I18N.metaRange[lang]} 001–{String(showcases.length).padStart(3, '0')}
              </span>
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ background: accent, opacity: 0.6 }}
              />
            </span>
          </div>

          <div className="flex items-start justify-between gap-6">
            <div className="min-w-0">
              <div
                className="flex items-center gap-3 text-[10px] uppercase tracking-[0.35em]"
                style={{ color: 'var(--atelier-muted)' }}
              >
                <span
                  className="h-px w-8 transition-all duration-700"
                  style={{ background: accent, opacity: 0.6 }}
                />
                <span>{I18N.atelier[lang]}</span>
                <span
                  className="h-px w-3 transition-all duration-700"
                  style={{ background: accent, opacity: 0.3 }}
                />
              </div>
              {/* 主标题：sans 粗体 + serif 斜体混排，逐字模糊升起 */}
              <h1
                className="mt-6 font-semibold text-[clamp(2.6rem,7.5vw,6.5rem)] leading-[1.04] tracking-[-0.03em]"
                style={{ color: 'var(--atelier-text)' }}
              >
                <BlurReveal
                  key={`a-${lang}`}
                  text={I18N.titleA[lang]}
                  by={lang === 'zh' ? 'char' : 'word'}
                  mounted={mounted}
                  delay={0.12}
                />
                <br />
                <span className="font-instrument italic font-normal" style={{ color: accent }}>
                  <BlurReveal
                    key={`b-${lang}`}
                    text={I18N.titleB[lang]}
                    by={lang === 'zh' ? 'char' : 'word'}
                    mounted={mounted}
                    delay={0.42}
                  />
                </span>
              </h1>
            </div>

            {/* 右上角：语言 + 色系 */}
            <div className="flex items-center gap-4 pt-2 shrink-0">
              <div
                className="flex items-center rounded-full overflow-hidden"
                style={{ border: '1px solid var(--atelier-line)' }}
              >
                {(['zh', 'en'] as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className="px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] transition-colors"
                    style={{
                      background: lang === l ? 'var(--atelier-surface-2)' : 'transparent',
                      color: lang === l ? 'var(--atelier-text)' : 'var(--atelier-muted)',
                    }}
                  >
                    {l === 'zh' ? '中' : 'EN'}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2.5">
                {THEMES.map((t) => (
                  <button
                    key={t.id}
                    onClick={(e) => switchTheme(t.id, e)}
                    className="atelier-swatch"
                    style={{ background: t.dot }}
                    data-active={theme === t.id}
                    aria-label={`${t.label} palette`}
                    title={t.label}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 副标题 + 统计 */}
          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <p
              className="max-w-xl text-sm md:text-[15px] leading-relaxed"
              style={{ color: 'var(--atelier-muted)' }}
            >
              {I18N.intro[lang]}{' '}
              <kbd
                className="px-1.5 py-0.5 rounded text-[11px]"
                style={{ background: 'var(--atelier-surface-2)', color: 'var(--atelier-text)' }}
              >
                Esc
              </kbd>{' '}
              {I18N.escHint[lang]}
            </p>
            <div
              className="atelier-tabular flex items-center gap-3 text-[11px] shrink-0"
              style={{ color: 'var(--atelier-muted)' }}
            >
              <span>
                <span style={{ color: 'var(--atelier-text)' }}>{showcases.length}</span>{' '}
                {I18N.footerCount[lang].split(' · ')[0]}
              </span>
              <span style={{ color: accent, opacity: 0.4 }}>·</span>
              <span>
                <span style={{ color: 'var(--atelier-text)' }}>{MAIN_CATS.length - 1}</span>{' '}
                {I18N.categories[lang]}
              </span>
              <span style={{ color: accent, opacity: 0.4 }}>·</span>
              <span style={{ opacity: 0.7 }}>1 page / prompt</span>
            </div>
          </div>
        </header>

        {/* ===== Sticky Toolbar ===== */}
        <div
          className="vibe-glass sticky top-0 z-20 -mx-5 px-5 md:-mx-8 md:px-8 py-3 mb-8 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between"
          style={{
            background: 'color-mix(in srgb, var(--atelier-bg) 88%, transparent)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderBottom: `1px solid var(--atelier-line)`,
          }}
        >
          {/* 搜索框 */}
          <div className="relative flex-1 max-w-md">
            <Search
              size={14}
              strokeWidth={1.5}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: 'var(--atelier-muted)' }}
            />
            <input
              ref={searchRef}
              type="text"
              value={queryInput}
              onChange={(e) => setQueryInput(e.target.value)}
              placeholder={I18N.search[lang]}
              className="w-full rounded-full pl-9 pr-4 py-2 text-sm outline-none transition-all"
              style={{
                background: 'var(--atelier-surface)',
                border: '1px solid var(--atelier-line)',
                color: 'var(--atelier-text)',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = accent + '44'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--atelier-line)'
              }}
            />
            {queryInput && (
              <button
                onClick={() => setQueryInput('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
                style={{ color: 'var(--atelier-muted)' }}
                aria-label="Clear"
              >
                <X size={16} strokeWidth={1.5} />
              </button>
            )}
          </div>

          {/* 分类 chips + 视图切换 */}
          <div className="flex items-center gap-3 overflow-x-auto">
            <div className="flex items-center gap-1.5 shrink-0">
              {MAIN_CATS.map((c) => {
                const isActive = mainCat === c.id
                return (
                  <button
                    key={c.id}
                    onClick={() => setMainCat(c.id)}
                    className="px-3 py-1.5 rounded-full text-[11px] uppercase tracking-[0.1em] whitespace-nowrap transition-all duration-300"
                    style={{
                      background: isActive ? accent + '18' : 'transparent',
                      border: `1px solid ${isActive ? accent + '40' : 'var(--atelier-line)'}`,
                      color: isActive ? 'var(--atelier-text)' : 'var(--atelier-muted)',
                    }}
                  >
                    {c[lang]}
                  </button>
                )
              })}
            </div>

            {/* 视图模式 */}
            <div
              className="flex items-center rounded-full overflow-hidden shrink-0"
              style={{ border: '1px solid var(--atelier-line)' }}
            >
              {(['grid', 'compact', 'dense'] as View[]).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className="px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] transition-colors"
                  style={{
                    background: view === v ? 'var(--atelier-surface-2)' : 'transparent',
                    color: view === v ? accent : 'var(--atelier-muted)',
                  }}
                  title={
                    v === 'grid'
                      ? I18N.viewGrid[lang] + ' (g)'
                      : v === 'compact'
                        ? I18N.viewCompact[lang] + ' (c)'
                        : I18N.viewDense[lang] + ' (d)'
                  }
                >
                  {v === 'grid' ? (
                    <LayoutGrid size={14} strokeWidth={1.5} />
                  ) : v === 'compact' ? (
                    <List size={14} strokeWidth={1.5} />
                  ) : (
                    <LayoutTemplate size={14} strokeWidth={1.5} />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ===== 结果计数（搜索/筛选时） ===== */}
        {(query || mainCat !== 'all') && (
          <div
            className="atelier-tabular mb-6 text-[11px] flex items-center gap-2"
            style={{ color: 'var(--atelier-muted)' }}
          >
            <span style={{ color: accent, fontSize: '8px' }}>●</span>
            <span style={{ color: 'var(--atelier-text)' }}>{filtered.length}</span>{' '}
            {I18N.results[lang]}
            {query && (
              <>
                {' · '}
                <span style={{ color: 'var(--atelier-muted)' }}>「{query}」</span>
              </>
            )}
          </div>
        )}

        {/* ===== 内容区 ===== */}
        {filtered.length > 0 ? (
          <>
            {grouped.map((group, groupIdx) => (
              <section key={group.cat} className="mb-14 last:mb-0" style={revealStyle(0.1 + groupIdx * 0.05)}>
                {/* 分组标题 — 仅在多分组时显示 */}
                {grouped.length > 1 && (
                  <div
                    className="flex items-center gap-4 mb-6"
                    style={{ color: 'var(--atelier-muted)' }}
                  >
                    <span
                      className="h-3 w-[3px] rounded-full shrink-0"
                      style={{ background: accent, opacity: 0.6 }}
                    />
                    <span className="text-[11px] uppercase tracking-[0.3em]">
                      {catLabel(group.cat)}
                    </span>
                    <span
                      className="h-px flex-1"
                      style={{
                        background: `linear-gradient(90deg, var(--atelier-line), transparent)`,
                      }}
                    />
                    <span className="atelier-tabular text-[11px]">
                      <span style={{ opacity: 0.55 }}>{I18N.metaRange[lang]}&nbsp;</span>
                      <span style={{ color: 'var(--atelier-text)' }}>
                        {String(group.items.length).padStart(2, '0')}
                      </span>
                    </span>
                  </div>
                )}

                {/* Grid 视图 */}
                {view === 'grid' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                    {group.items.map((s, idx) => {
                      const gi = globalIndex(s.slug)
                      const tone = fieldTone(s.field)
                      return (
                        <div
                          key={s.slug}
                          onClick={(e) => enterStudy(s.slug, e)}
                          onMouseMove={onCardHover}
                          onMouseLeave={onCardLeave}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault()
                              navigate(`/${s.slug}`)
                            }
                          }}
                          className="atelier-develop group relative text-left rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                          style={{
                            background: 'var(--atelier-surface)',
                            border: '1px solid var(--atelier-line)',
                            animationDelay: `${Math.min(idx * 40, 400)}ms`,
                          }}
                        >
                          <div
                            className="relative h-36 md:h-40 overflow-hidden"
                            style={{
                              background: s.field,
                              borderBottom: '1px solid var(--atelier-line)',
                            }}
                          >
                            <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                              style={{ boxShadow: `inset 0 0 80px -10px ${s.accent}55` }}
                            />
                            <div
                              className="atelier-breathe absolute -top-5 -right-5 w-24 h-24 rounded-full pointer-events-none"
                              style={{
                                background: `radial-gradient(circle, ${s.accent}33 0%, transparent 70%)`,
                              }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span
                                className={`text-3xl md:text-4xl transition-transform duration-500 group-hover:scale-[1.03] ${s.titleFont}`}
                                style={{
                                  color:
                                    tone === 'light'
                                      ? 'rgba(18,18,18,0.88)'
                                      : 'rgba(255,255,255,0.88)',
                                  textShadow:
                                    tone === 'mid'
                                      ? '0 1px 14px rgba(0,0,0,0.45), 0 0 4px rgba(0,0,0,0.25)'
                                      : 'none',
                                }}
                              >
                                {s.title}
                              </span>
                            </div>
                            <div className="absolute top-3 left-3">
                              <span
                                className="text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 rounded-full border transition-colors duration-300"
                                style={{
                                  color: s.accent,
                                  borderColor:
                                    tone === 'light' ? 'rgba(0,0,0,0.14)' : 'rgba(255,255,255,0.18)',
                                  background:
                                    tone === 'light' ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.25)',
                                }}
                              >
                                {s.category[lang]}
                              </span>
                            </div>
                            <div
                              className="atelier-tabular absolute top-3 right-3 text-[10px]"
                              style={{
                                color:
                                  tone === 'light'
                                    ? 'rgba(18,18,18,0.5)'
                                    : 'rgba(255,255,255,0.5)',
                              }}
                            >
                              {String(gi).padStart(3, '0')}
                            </div>
                          </div>
                          <div className="p-4 md:p-5">
                            <h3
                              className="text-sm md:text-base font-medium"
                              style={{ color: 'var(--atelier-text)' }}
                            >
                              {s.tagline[lang]}
                            </h3>
                            <p
                              className="mt-2 text-xs leading-relaxed line-clamp-2"
                              style={{ color: 'var(--atelier-muted)' }}
                            >
                              {s.description[lang]}
                            </p>
                            <div className="mt-3 flex items-center justify-between gap-2 text-xs">
                              <div
                                className="flex items-center gap-1.5"
                                style={{ color: 'var(--atelier-text)' }}
                              >
                                <span>{I18N.develop[lang]}</span>
                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                                  →
                                </span>
                              </div>
                              <Link
                                to={`/prompt/${s.slug}`}
                                onClick={(e) => e.stopPropagation()}
                                className="text-[10px] uppercase tracking-[0.15em] transition-colors hover:underline"
                                style={{ color: 'var(--atelier-muted)' }}
                              >
                                {s.prompt ? I18N.viewPrompt[lang] : I18N.addPrompt[lang]}
                              </Link>
                            </div>
                          </div>
                          <div
                            className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-[800ms] ease-out"
                            style={{ background: s.accent }}
                          />
                        </div>
                      )
                    })}
                  </div>
                )}

                {/* Compact 视图 — 紧凑列表 */}
                {view === 'compact' && (
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{ border: '1px solid var(--atelier-line)' }}
                  >
                    {group.items.map((s, i) => {
                      const gi = globalIndex(s.slug)
                      return (
                        <div
                          key={s.slug}
                          onClick={(e) => enterStudy(s.slug, e)}
                          onMouseMove={onCardHover}
                          onMouseLeave={onCardLeave}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault()
                              navigate(`/${s.slug}`)
                            }
                          }}
                          className="group relative flex items-center gap-4 px-4 py-3 cursor-pointer transition-colors"
                          style={{
                            background: 'var(--atelier-surface)',
                            borderTop: i > 0 ? '1px solid var(--atelier-line)' : 'none',
                          }}
                        >
                          <span
                            className="atelier-tabular text-[10px] w-8 text-right shrink-0"
                            style={{ color: 'var(--atelier-muted)' }}
                          >
                            {String(gi).padStart(3, '0')}
                          </span>
                          <div
                            className="w-1 h-10 rounded-full shrink-0 transition-all duration-300 group-hover:h-12"
                            style={{ background: s.accent }}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-baseline gap-2 flex-wrap">
                              <span
                                className={`text-base md:text-lg transition-transform duration-300 group-hover:translate-x-0.5 ${s.titleFont}`}
                                style={{ color: 'var(--atelier-text)' }}
                              >
                                {s.title}
                              </span>
                              <span
                                className="text-[10px] uppercase tracking-[0.15em]"
                                style={{ color: 'var(--atelier-muted)' }}
                              >
                                {s.category[lang]}
                              </span>
                              {!s.prompt && (
                                <span
                                  className="text-[9px] px-1.5 py-0.5 rounded"
                                  style={{
                                    color: 'var(--atelier-muted)',
                                    border: '1px solid var(--atelier-line)',
                                  }}
                                >
                                  {I18N.promptOff[lang]}
                                </span>
                              )}
                            </div>
                            <p
                              className="text-xs line-clamp-1 mt-0.5"
                              style={{ color: 'var(--atelier-muted)' }}
                            >
                              {s.description[lang]}
                            </p>
                          </div>
                          <span
                            className="text-sm shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                            style={{ color: 'var(--atelier-text)' }}
                          >
                            →
                          </span>
                        </div>
                      )
                    })}
                  </div>
                )}

                {/* Dense 视图 — 密集迷你卡 */}
                {view === 'dense' && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {group.items.map((s) => {
                      const gi = globalIndex(s.slug)
                      const tone = fieldTone(s.field)
                      return (
                        <div
                          key={s.slug}
                          onClick={(e) => enterStudy(s.slug, e)}
                          onMouseMove={onCardHover}
                          onMouseLeave={onCardLeave}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault()
                              navigate(`/${s.slug}`)
                            }
                          }}
                          className="group relative aspect-[4/5] rounded-lg overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-0.5"
                          style={{
                            background: s.field,
                            border: '1px solid var(--atelier-line)',
                          }}
                        >
                          <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{ boxShadow: `inset 0 0 60px -10px ${s.accent}66` }}
                          />
                          <div className="relative h-full flex flex-col items-center justify-center p-3">
                            <span
                              className={`text-xl md:text-2xl text-center transition-transform duration-500 group-hover:scale-[1.05] ${s.titleFont}`}
                              style={{
                                color:
                                  tone === 'light'
                                    ? 'rgba(18,18,18,0.9)'
                                    : 'rgba(255,255,255,0.9)',
                                textShadow:
                                  tone === 'mid'
                                    ? '0 1px 12px rgba(0,0,0,0.45), 0 0 4px rgba(0,0,0,0.25)'
                                    : 'none',
                              }}
                            >
                              {s.title}
                            </span>
                            <span
                              className="mt-2 text-[8px] uppercase tracking-[0.15em] text-center line-clamp-1"
                              style={{
                                color:
                                  tone === 'light'
                                    ? 'rgba(18,18,18,0.5)'
                                    : 'rgba(255,255,255,0.45)',
                              }}
                            >
                              {s.category[lang]}
                            </span>
                          </div>
                          <div
                            className="atelier-tabular absolute bottom-2 right-2 text-[9px]"
                            style={{
                              color:
                                tone === 'light'
                                  ? 'rgba(18,18,18,0.4)'
                                  : 'rgba(255,255,255,0.4)',
                            }}
                          >
                            {String(gi).padStart(3, '0')}
                          </div>
                          {/* Dense 视图：缩短底部 accent 线，避免视觉压缩 */}
                          <div
                            className="absolute bottom-0 left-1/2 h-[2px] w-0 group-hover:w-1/2 transition-all duration-[500ms] ease-out"
                            style={{
                              background: s.accent,
                              transform: 'translateX(-50%)',
                            }}
                          />
                        </div>
                      )
                    })}
                  </div>
                )}
              </section>
            ))}
          </>
        ) : (
          /* 空状态 */
          <div
            className="relative rounded-2xl flex flex-col items-center justify-center min-h-[24rem] text-center px-6 py-16"
            style={{
              background: 'var(--atelier-surface)',
              border: '1px dashed var(--atelier-line)',
            }}
          >
            <div
              className="atelier-breathe absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: `radial-gradient(circle, ${accent}22 0%, transparent 70%)` }}
            />
            <div className="relative">
              <div
                className="text-3xl font-instrument italic mb-4"
                style={{ color: 'var(--atelier-text)' }}
              >
                {I18N.noResults[lang]}
              </div>
              <p
                className="text-sm max-w-sm mx-auto leading-relaxed"
                style={{ color: 'var(--atelier-muted)' }}
              >
                {I18N.noResultsHint[lang]}
              </p>
            </div>
          </div>
        )}

        {/* ===== Footer ===== */}
        <footer
          className="mt-20 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-[11px] atelier-tabular"
          style={{ color: 'var(--atelier-muted)' }}
        >
          <div className="flex items-center gap-3">
            <span
              className="h-px w-6"
              style={{ background: accent, opacity: 0.4 }}
            />
            <span>
              <span style={{ color: 'var(--atelier-text)' }}>{showcases.length}</span>{' '}
              {I18N.footerCount[lang]}
            </span>
          </div>
          <span className="font-instrument italic text-sm" style={{ color: 'var(--atelier-text)', opacity: 0.6 }}>
            {I18N.footerSig[lang]}
          </span>
        </footer>
      </div>

      {/* ===== 回到顶部 ===== */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-4 z-30 flex items-center gap-2 rounded-full px-3 py-2 text-[11px] transition-all duration-300 hover:scale-105"
          style={{
            color: 'var(--atelier-text)',
            background: 'color-mix(in srgb, var(--atelier-surface) 85%, transparent)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: `1px solid ${accent}30`,
            boxShadow: `0 4px 24px -8px ${accent}33`,
          }}
          title={I18N.backToTop[lang]}
        >
          <ArrowUp size={14} strokeWidth={1.5} style={{ color: accent }} />
          <span className="hidden sm:inline">{I18N.backToTop[lang]}</span>
        </button>
      )}
    </div>
  )
}
