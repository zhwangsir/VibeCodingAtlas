import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { showcases } from '../showcases/registry'

type Lang = 'zh' | 'en'

const I18N = {
  back: { zh: '←', en: '←' },
  crumb: { zh: '胶片暗房 · 设计提示词', en: 'Film Atelier · Design Prompt' },
  archived: { zh: '已归档', en: 'archived' },
  notOnFile: { zh: '未归档', en: 'not on file' },
  sectionLabel: { zh: '原始创建提示词', en: 'Original creation prompt' },
  emptyTitle: { zh: '尚未归档', en: 'Not on file' },
  emptyBody: {
    zh: '此研究尚无原始创建提示词归档。提供提示词后将原文存档于此。',
    en: 'No original creation prompt is on file for this study yet. Provide the prompt and it will be archived here verbatim.',
  },
  enterStudy: { zh: '进入研究', en: 'Enter study' },
  index: { zh: '索引', en: 'Index' },
  notFound: { zh: '未找到研究：', en: 'Study not found: ' },
  return: { zh: '← 返回索引', en: '← Return to index' },
  metaSlug: { zh: '路径', en: 'Slug' },
  metaBrand: { zh: '品牌', en: 'Brand' },
  metaAccent: { zh: '主色', en: 'Accent' },
  metaFont: { zh: '字体', en: 'Font' },
}

/**
 * PromptDetail — 单个 showcase 的原始创建 prompt 独立详情页
 * 暗房卡片视觉语言延续索引页，prompt 原文以等宽预格式展示
 */
export default function PromptDetail() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [lang, setLang] = useState<Lang>('zh')
  const showcase = showcases.find((s) => s.slug === slug)

  if (!showcase) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0807] text-[#e8e2d8]">
        <div className="text-center">
          <p className="text-sm text-[#6b6359]">
            {I18N.notFound[lang]}
            {slug}
          </p>
          <Link to="/" className="mt-4 inline-block text-sm underline" style={{ color: '#c8843a' }}>
            {I18N.return[lang]}
          </Link>
        </div>
      </div>
    )
  }

  const hasPrompt = Boolean(showcase.prompt)

  return (
    <div className="atelier-root relative min-h-screen overflow-x-hidden" data-theme="darkroom">
      <div className="atelier-grain" />
      <div className="atelier-vignette" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 md:py-24">
        {/* 顶部标签 + 语言切换 */}
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-3 text-[10px] uppercase tracking-[0.35em]"
            style={{ color: 'var(--atelier-muted)' }}
          >
            <button
              onClick={() => navigate(-1)}
              className="hover:text-[var(--atelier-text)] transition-colors"
              style={{ color: 'var(--atelier-muted)' }}
            >
              {I18N.back[lang]}
            </button>
            <span className="h-px w-8" style={{ background: 'var(--atelier-line)' }} />
            <span>{I18N.crumb[lang]}</span>
          </div>

          {/* 语言切换 */}
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
        </div>

        {/* 标题区 */}
        <header className="mt-8 mb-12">
          <div className="flex items-baseline gap-4">
            <h1
              className={`text-5xl md:text-7xl font-normal ${showcase.titleFont}`}
              style={{ color: 'rgba(255,255,255,0.92)' }}
            >
              {showcase.title}
            </h1>
            <span className="atelier-tabular text-[11px]" style={{ color: 'var(--atelier-muted)' }}>
              {showcase.category[lang]}
            </span>
          </div>
          <p
            className="mt-4 font-instrument italic text-2xl md:text-3xl"
            style={{ color: 'var(--atelier-muted)' }}
          >
            {showcase.tagline[lang]}
          </p>
        </header>

        {/* 元信息 */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px mb-12 rounded-xl overflow-hidden"
          style={{ background: 'var(--atelier-line)' }}
        >
          {[
            { k: I18N.metaSlug[lang], v: `/${showcase.slug}` },
            { k: I18N.metaBrand[lang], v: showcase.brand },
            { k: I18N.metaAccent[lang], v: showcase.accent },
            { k: I18N.metaFont[lang], v: showcase.titleFont },
          ].map((m) => (
            <div key={m.k} className="p-5" style={{ background: 'var(--atelier-surface)' }}>
              <div
                className="text-[10px] uppercase tracking-[0.2em] mb-2"
                style={{ color: 'var(--atelier-muted)' }}
              >
                {m.k}
              </div>
              <div className="text-sm atelier-tabular" style={{ color: 'var(--atelier-text)' }}>
                {m.v}
              </div>
            </div>
          ))}
        </div>

        {/* Prompt 主体 */}
        <section>
          <div
            className="flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] mb-6"
            style={{ color: 'var(--atelier-muted)' }}
          >
            <span className="h-px w-8" style={{ background: 'var(--atelier-line)' }} />
            <span>{I18N.sectionLabel[lang]}</span>
            {hasPrompt ? (
              <span
                className="px-2 py-0.5 rounded-full text-[9px]"
                style={{
                  background: 'var(--atelier-accent-soft)',
                  color: 'var(--atelier-accent)',
                }}
              >
                {I18N.archived[lang]}
              </span>
            ) : (
              <span
                className="px-2 py-0.5 rounded-full text-[9px]"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  color: 'var(--atelier-muted)',
                }}
              >
                {I18N.notOnFile[lang]}
              </span>
            )}
          </div>

          {hasPrompt ? (
            <pre
              className="p-6 md:p-8 rounded-xl overflow-x-auto whitespace-pre-wrap break-words text-[13px] md:text-[14px] leading-[1.75] font-mono"
              style={{
                background: 'var(--atelier-surface)',
                border: '1px solid var(--atelier-line)',
                color: 'var(--atelier-text)',
              }}
            >
              {showcase.prompt}
            </pre>
          ) : (
            <div
              className="p-8 md:p-12 rounded-xl text-center"
              style={{
                background: 'var(--atelier-surface)',
                border: '1px dashed var(--atelier-line)',
              }}
            >
              <p
                className="text-sm md:text-base max-w-md mx-auto"
                style={{ color: 'var(--atelier-muted)' }}
              >
                {I18N.emptyBody[lang]}
              </p>
            </div>
          )}
        </section>

        {/* 底部导航 */}
        <footer className="mt-16 flex items-center justify-between">
          <Link
            to={`/${showcase.slug}`}
            className="inline-flex items-center gap-2 text-sm transition-all hover:gap-3"
            style={{ color: 'var(--atelier-text)' }}
          >
            <span>{I18N.enterStudy[lang]}</span>
            <span>→</span>
          </Link>
          <Link
            to="/"
            className="text-sm transition-colors"
            style={{ color: 'var(--atelier-muted)' }}
          >
            {I18N.index[lang]}
          </Link>
        </footer>
      </div>
    </div>
  )
}
