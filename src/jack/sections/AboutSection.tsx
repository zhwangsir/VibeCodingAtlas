import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import ContactButton from '../components/ContactButton'

const MOON_ICON = '/jack/moon_icon.11395d36.png'
const OBJ_P59 = '/jack/p59_1.4659672e.png'
const LEGO_ICON = '/jack/lego_icon-1.703bb594.png'
const GROUP_134 = '/jack/Group_134-1.2e04f3ce.png'

const ABOUT_TEXT =
  "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
    >
      {/* 四角装饰 3D 图标 — 移动端隐藏避免拥挤 */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none"
      >
        <img src={MOON_ICON} alt="" className="w-full h-auto" draggable={false} />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none"
      >
        <img src={OBJ_P59} alt="" className="w-full h-auto" draggable={false} />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none"
      >
        <img src={LEGO_ICON} alt="" className="w-full h-auto" draggable={false} />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none"
      >
        <img src={GROUP_134} alt="" className="w-full h-auto" draggable={false} />
      </FadeIn>

      {/* 内容容器 — 垂直排列：标题 → 文本 → 按钮，用 flex + gap 统一间距 */}
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 relative z-10">
        {/* 标题 */}
        <FadeIn delay={0} y={40} className="text-center">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* 逐字滚动揭示文本 */}
        <AnimatedText
          text={ABOUT_TEXT}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
        />

        {/* Contact 按钮 — 文本块与按钮间距 gap-16 sm:gap-20 md:gap-24（容器 gap 基础上补齐） */}
        <div className="mt-6 md:mt-8">
          <ContactButton />
        </div>
      </div>
    </section>
  )
}
