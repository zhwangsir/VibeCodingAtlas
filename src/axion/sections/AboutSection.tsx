import TextRollButton from '../components/TextRollButton'

const SMALL_IMG = '/images/74be96d4-9c1b-40cf-932a-96f4f4babed3_1280.webp'
const LARGE_IMG = '/images/c157d30b-a99a-4477-bec1-a446149ec3f2_1280.webp'

/**
 * AboutSection — 白底 about 区
 *
 * - bg-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden
 * - badge 行：编号圆 1 + "Introducing Axion" 胶囊
 * - h2 "Strategy-led creatives, delivering / results in digital and beyond."
 * - 内容区响应式：移动/平板 堆叠（段落+按钮+图） / 桌面 grid-cols-[26%_1fr_48%]
 */
export default function AboutSection() {
  return (
    <section className="bg-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Badge 行 */}
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            1
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900">
            Introducing Axion
          </span>
        </div>

        {/* Heading */}
        <h2
          className="px-5 sm:px-8 lg:px-12 font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-12 sm:mb-16 lg:mb-28"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 3.2rem)' }}
        >
          Strategy-led creatives, delivering
          <br />
          results in digital and beyond.
        </h2>

        {/* 移动/平板 堆叠布局 */}
        <div className="lg:hidden px-5 sm:px-8">
          <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium text-gray-900 mb-6">
            Through research, creative thinking and iteration we help growing brands realize their
            digital full potential.
          </p>
          <div className="mb-8">
            <TextRollButton
              className="bg-[#F26522] hover:bg-[#e05a1a] text-white"
              circleClassName="bg-white"
              arrowClassName="text-[#F26522]"
              textClassName="text-[13px] sm:text-[14px] font-medium text-white"
              circleSize="w-7 h-7 sm:w-8 sm:h-8"
            >
              About our studio
            </TextRollButton>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <div className="sm:w-[45%]">
              <img
                src={SMALL_IMG}
                alt=""
                className="w-full rounded-xl sm:rounded-2xl object-cover"
                style={{ aspectRatio: '438 / 346' }}
              />
            </div>
            <div className="sm:w-[55%]">
              <img
                src={LARGE_IMG}
                alt=""
                className="w-full rounded-xl sm:rounded-2xl object-cover"
                style={{ aspectRatio: '900 / 600' }}
              />
            </div>
          </div>
        </div>

        {/* 桌面 grid 布局 */}
        <div
          className="hidden lg:grid items-end gap-6 xl:gap-8 px-5 sm:px-8 lg:px-12"
          style={{ gridTemplateColumns: '26% 1fr 48%' }}
        >
          {/* 左列：小图 */}
          <div className="self-end">
            <img
              src={SMALL_IMG}
              alt=""
              className="w-full rounded-2xl object-cover"
              style={{ aspectRatio: '438 / 346' }}
            />
          </div>

          {/* 中列：段落 + 按钮 */}
          <div className="self-start flex flex-col items-end gap-6">
            <p className="text-[16px] sm:text-[18px] leading-[1.65] font-medium text-gray-900 whitespace-nowrap text-right">
              Through research, creative
              <br />
              thinking and iteration we help
              <br />
              growing brands realize their
              <br />
              digital full potential.
            </p>
            <TextRollButton
              className="bg-[#F26522] hover:bg-[#e05a1a] text-white"
              circleClassName="bg-white"
              arrowClassName="text-[#F26522]"
              textClassName="text-[13px] sm:text-[14px] font-medium text-white"
              circleSize="w-8 h-8"
            >
              About our studio
            </TextRollButton>
          </div>

          {/* 右列：大图 */}
          <div className="self-end">
            <img
              src={LARGE_IMG}
              alt=""
              className="w-full rounded-2xl object-cover"
              style={{ aspectRatio: '3 / 2' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
