import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { showcases } from './showcases/registry'
import App from './App'
import ShowcaseIndex from './pages/ShowcaseIndex'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ShowcaseIndex />} />
          {showcases.map(({ slug, component: Component }) => (
            <Route key={slug} path={slug} element={<Component />} />
          ))}
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
