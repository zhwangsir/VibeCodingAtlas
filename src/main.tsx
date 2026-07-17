import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { showcases } from './showcases/registry'
import App from './App'
import ShowcaseIndex from './pages/ShowcaseIndex'
import PromptDetail from './pages/PromptDetail'

/* ===== 本地 @fontsource 字体(替代 Google Fonts CDN) ===== */
import '@fontsource/inter'
import '@fontsource/playfair-display'
import '@fontsource/almarai'
import '@fontsource/anton'
import '@fontsource/barlow'
import '@fontsource/condiment'
import '@fontsource/dancing-script'
import '@fontsource/dm-sans'
import '@fontsource/dm-serif-display'
import '@fontsource/instrument-serif'
import '@fontsource/inter-tight'
import '@fontsource/kanit'
import '@fontsource/poppins'
import '@fontsource/source-serif-4'
import '@fontsource/sora'
import '@fontsource/outfit'
import '@fontsource/readex-pro'
import '@fontsource/urbanist'
import '@fontsource/geist'
import '@fontsource/figtree'
import '@fontsource/plus-jakarta-sans'
import '@fontsource/space-mono'
import '@fontsource/fustat'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ShowcaseIndex />} />
          {/* 每个 showcase 的原始创建 prompt 详情页 */}
          <Route path="prompt/:slug" element={<PromptDetail />} />
          {showcases.map(({ slug, component: Component }) => (
            <Route key={slug} path={slug} element={<Component />} />
          ))}
          {/* Catch-all: unknown slugs redirect to index */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
