import FadeIn from '../components/FadeIn'

const SERVICES = [
  {
    num: '01',
    name: '3D Modeling',
    desc: 'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    num: '02',
    name: 'Rendering',
    desc: 'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    num: '03',
    name: 'Motion Design',
    desc: 'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    num: '04',
    name: 'Branding',
    desc: 'Crafting cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence.',
  },
  {
    num: '05',
    name: 'Web Design',
    desc: 'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="price"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0"
    >
      {/* 标题 */}
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center leading-none mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Services
      </h2>

      {/* 服务列表 */}
      <div className="max-w-5xl mx-auto">
        {SERVICES.map((s, i) => (
          <FadeIn
            key={s.num}
            delay={i * 0.1}
            y={30}
            className="flex items-center gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
            style={{
              borderBottom:
                i < SERVICES.length - 1 ? '1px solid rgba(12, 12, 12, 0.15)' : 'none',
            }}
          >
            {/* 编号 */}
            <span
              className="font-black text-[#0C0C0C] shrink-0 leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {s.num}
            </span>
            {/* 名称 + 描述 */}
            <div className="flex flex-col gap-1 sm:gap-2 min-w-0">
              <h3
                className="font-medium uppercase text-[#0C0C0C]"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {s.name}
              </h3>
              <p
                className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]/60"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
              >
                {s.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
