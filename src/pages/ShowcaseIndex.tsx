import { useNavigate } from 'react-router-dom'
import { showcases } from '../showcases/registry'

export default function ShowcaseIndex() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#08080a] text-white overflow-x-hidden">
      {/* Ambient atmosphere */}
      <div
        className="pointer-events-none fixed inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(80% 60% at 50% -10%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 60%), radial-gradient(60% 50% at 100% 100%, rgba(232,112,42,0.05) 0%, rgba(255,255,255,0) 60%), radial-gradient(60% 50% at 0% 100%, rgba(107,173,196,0.05) 0%, rgba(255,255,255,0) 60%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-28">
        {/* Header */}
        <header className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/40">
            <span className="h-px w-8 bg-white/20" />
            <span>Showcase Index</span>
          </div>
          <h1 className="mt-6 font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl leading-[0.95] text-white">
            Landing<span className="text-white/30"> · </span>studies
          </h1>
          <p className="mt-6 max-w-xl text-sm md:text-base text-white/50 leading-relaxed">
            A curated set of full-screen brand landings. Select a study to enter its immersive
            page — press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/70 text-xs">Esc</kbd> or use the
            indicator at the bottom to return here.
          </p>
        </header>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {showcases.map((s, i) => (
            <button
              key={s.slug}
              onClick={() => navigate(`/${s.slug}`)}
              className="group relative text-left rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] transition-all duration-500 hover:border-white/20 hover:-translate-y-1"
              style={{ animation: `cardIn 0.8s cubic-bezier(0.16,1,0.3,1) both`, animationDelay: `${0.1 + i * 0.12}s` }}
            >
              {/* Visual field */}
              <div
                className="relative h-56 md:h-64 overflow-hidden"
                style={{ background: s.field }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: `inset 0 0 80px 0 ${s.accent}40` }}
                />
                {/* Brand wordmark on field */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className={`text-5xl md:text-6xl text-white/85 ${s.titleFont} transition-transform duration-700 group-hover:scale-[1.04]`}
                  >
                    {s.title}
                  </span>
                </div>
                {/* Category chip */}
                <div className="absolute top-4 left-4">
                  <span
                    className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm"
                    style={{ color: s.accent }}
                  >
                    {s.category}
                  </span>
                </div>
                {/* Index number */}
                <div className="absolute top-4 right-4 text-xs text-white/40 tabular-nums">
                  {String(i + 1).padStart(2, '0')} / {String(showcases.length).padStart(2, '0')}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 md:p-7">
                <h2 className="text-xl md:text-2xl font-medium text-white">{s.tagline}</h2>
                <p className="mt-3 text-sm text-white/50 leading-relaxed line-clamp-3">{s.description}</p>
                <div className="mt-5 flex items-center gap-2 text-sm text-white/70 group-hover:text-white transition-colors">
                  <span>Enter study</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>

              {/* Accent bottom line */}
              <div
                className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700"
                style={{ background: s.accent }}
              />
            </button>
          ))}

          {/* Placeholder slot for upcoming studies */}
          <div className="relative rounded-2xl border border-dashed border-white/10 flex flex-col items-center justify-center min-h-[20rem] text-center px-6">
            <div className="text-white/30 text-3xl">+</div>
            <p className="mt-3 text-sm text-white/40 max-w-[16rem]">
              More landing studies will appear here as new prompts arrive.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 flex items-center justify-between text-xs text-white/30">
          <span>{showcases.length} studies</span>
          <span className="font-playfair italic text-white/40">curated</span>
        </footer>
      </div>

      <style>{`
        @keyframes cardIn {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
