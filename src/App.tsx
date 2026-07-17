import { useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'

export default function App() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const onIndex = pathname === '/'

  // Esc returns to the showcase index from any study
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !onIndex) navigate('/')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onIndex, navigate])

  return (
    <div className="relative h-full w-full">
      <Outlet />
      {/* Subtle back-to-index indicator — hidden on the index itself */}
      {!onIndex && (
        <button
          onClick={() => navigate('/')}
          className="liquid-glass fixed bottom-4 right-4 z-[100] flex items-center gap-2 rounded-full px-4 py-2 text-xs text-white/70 hover:text-white transition-colors"
          title="Back to index (Esc)"
        >
          <span className="inline-block">←</span>
          <span className="hidden sm:inline">Showcase index</span>
        </button>
      )}
    </div>
  )
}
