import { useEffect, useState } from 'react'

/**
 * Splash — 10 盒子开屏动画
 *
 * 上下两行各 5 个 #75C5DE 盒子，上行 translateY(0→-100%) 下行 translateY(0→100%)
 * staggered delay 0/0.05/0.1/0.15/0.2s，整体 1.35s 后淡出隐藏
 */
export default function Splash() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    // 1.35s 后触发淡出动画，再 300ms 后从 DOM 移除
    const hideTimer = setTimeout(() => setHidden(true), 1350)
    return () => clearTimeout(hideTimer)
  }, [])

  return (
    <div
      className="nora-splash"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        pointerEvents: 'none',
        overflow: 'hidden',
        opacity: hidden ? 0 : 1,
        visibility: hidden ? 'hidden' : 'visible',
        transition: 'opacity 0.3s ease, visibility 0.3s ease',
      }}
    >
      <div className="nora-splash-row">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={`top-${i}`}
            className="nora-splash-box nora-splash-top"
            style={{ animationDelay: `${i * 0.05}s` }}
          />
        ))}
      </div>
      <div className="nora-splash-row">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={`bottom-${i}`}
            className="nora-splash-box nora-splash-bottom"
            style={{ animationDelay: `${i * 0.05}s` }}
          />
        ))}
      </div>
    </div>
  )
}
