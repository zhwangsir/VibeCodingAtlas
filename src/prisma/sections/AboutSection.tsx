import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'
import AnimatedLetter from '../components/AnimatedLetter'

const BODY_TEXT =
  'Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.'

export default function AboutSection() {
  return (
    <section className="bg-black px-4 md:px-6 py-20 md:py-32">
      {/* 内卡片 */}
      <div className="bg-[#101010] rounded-3xl px-6 py-16 md:px-16 md:py-24 max-w-6xl mx-auto text-center">
        {/* 顶部小标签 */}
        <p className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-8 md:mb-12">
          Visual arts
        </p>

        {/* 主标题 — 多样式 pull-up */}
        <div className="mb-12 md:mb-16">
          <WordsPullUpMultiStyle
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] text-[#E1E0CC]"
            segments={[
              { text: 'I am Marcus Chen,', className: 'font-normal' },
              { text: 'a self-taught director.', className: 'italic font-serif' },
              {
                text: 'I have skills in color grading, visual effects, and narrative design.',
                className: 'font-normal',
              },
            ]}
          />
        </div>

        {/* 滚动逐字揭示段落 */}
        <AnimatedLetter
          text={BODY_TEXT}
          className="text-[#DEDBC8] text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
        />
      </div>
    </section>
  )
}
