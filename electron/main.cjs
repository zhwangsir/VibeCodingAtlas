/* ============================================================
 *  Electron 主进程 — Vibe Coding Atlas 桌面端
 *  生产模式：内嵌 HTTP 服务器服务 dist/ 目录
 *  - 相对路径 ./assets/xxx 与绝对路径 /videos/xxx 均天然正确
 *  - 支持 Range 请求（视频 seek 必需）
 *  - 仅监听 127.0.0.1，外部不可访问
 * ============================================================ */
const { app, BrowserWindow, shell, Menu } = require('electron')
const path = require('path')
const fs = require('fs')
const http = require('http')

const isDev = !app.isPackaged
const distPath = path.join(__dirname, '..', 'dist')

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.map': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mov': 'video/quicktime',
  '.m4v': 'video/mp4',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.m4a': 'audio/mp4',
  '.ogg': 'audio/ogg',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.eot': 'application/vnd.ms-fontobject',
  '.glb': 'model/gltf-binary',
  '.gltf': 'model/gltf+json',
}

/* ============================================================
 *  内嵌静态文件服务器（生产模式）
 * ============================================================ */
function createStaticServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      let urlPath
      try {
        urlPath = decodeURIComponent(req.url.split('?')[0])
      } catch {
        res.writeHead(400)
        res.end('Bad Request')
        return
      }

      if (urlPath === '/') urlPath = '/index.html'

      // 路径穿越防护：解析后必须仍在 distPath 内
      const filePath = path.join(distPath, path.normalize(urlPath))
      if (!filePath.startsWith(distPath)) {
        res.writeHead(403)
        res.end('Forbidden')
        return
      }

      fs.stat(filePath, (err, stat) => {
        if (err || !stat.isFile()) {
          // SPA fallback：非资源请求回退到 index.html（HashRouter 双保险）
          if (!path.extname(urlPath)) {
            const indexPath = path.join(distPath, 'index.html')
            res.writeHead(200, { 'Content-Type': MIME['.html'] })
            fs.createReadStream(indexPath).pipe(res)
            return
          }
          res.writeHead(404)
          res.end('Not Found')
          return
        }

        const ext = path.extname(filePath).toLowerCase()
        const mime = MIME[ext] || 'application/octet-stream'
        const total = stat.size

        // Range 请求支持（视频 seek 必需）
        const range = req.headers.range
        if (range) {
          const match = range.match(/bytes=(\d*)-(\d*)/)
          if (match) {
            const start = match[1] ? parseInt(match[1], 10) : 0
            const end = match[2] ? Math.min(parseInt(match[2], 10), total - 1) : total - 1
            if (start >= total || end < start) {
              res.writeHead(416, { 'Content-Range': `bytes */${total}` })
              res.end()
              return
            }
            res.writeHead(206, {
              'Content-Range': `bytes ${start}-${end}/${total}`,
              'Accept-Ranges': 'bytes',
              'Content-Length': end - start + 1,
              'Content-Type': mime,
            })
            fs.createReadStream(filePath, { start, end }).pipe(res)
            return
          }
        }

        res.writeHead(200, {
          'Content-Length': total,
          'Content-Type': mime,
          'Accept-Ranges': 'bytes',
          // 资源带 hash 的可长缓存；html 不缓存
          'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable',
        })
        fs.createReadStream(filePath).pipe(res)
      })
    })

    server.on('error', reject)
    // 端口 0 = 随机可用端口，避免与其他应用冲突
    server.listen(0, '127.0.0.1', () => {
      resolve({ server, port: server.address().port })
    })
  })
}

/* ============================================================
 *  窗口创建
 * ============================================================ */
function createWindow(serverPort) {
  const win = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 1024,
    minHeight: 700,
    title: 'Vibe Coding Atlas',
    backgroundColor: '#0a0a0a',
    show: false,
    autoHideMenuBar: true,
    titleBarStyle: process.platform === 'darwin' ? 'hiddenInset' : 'default',
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  })

  if (isDev) {
    // 开发模式：加载 Vite dev server
    win.loadURL('http://localhost:5195')
    win.webContents.openDevTools({ mode: 'detach' })
  } else {
    // 生产模式：加载内嵌服务器
    win.loadURL(`http://127.0.0.1:${serverPort}/index.html`)
  }

  // 窗口就绪后显示（避免白屏闪烁）
  win.once('ready-to-show', () => {
    win.show()
  })

  // 加载失败兜底：显示错误信息而非静默黑屏
  win.webContents.on('did-fail-load', (_event, errorCode, errorDescription) => {
    console.error(`[load failed] ${errorCode}: ${errorDescription}`)
    win.show() // 强制显示窗口，让用户看到错误而不是黑屏
  })

  // 外部链接用系统浏览器打开
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http')) {
      shell.openExternal(url)
      return { action: 'deny' }
    }
    return { action: 'allow' }
  })

  return win
}

/* ============================================================
 *  App 生命周期
 * ============================================================ */
let staticServer = null
let serverPort = 0

app.whenReady().then(async () => {
  // 移除默认菜单栏
  Menu.setApplicationMenu(null)

  if (!isDev) {
    try {
      const result = await createStaticServer()
      staticServer = result.server
      serverPort = result.port
      console.log(`[static server] http://127.0.0.1:${serverPort}`)
    } catch (err) {
      console.error('[static server] failed to start:', err)
      app.quit()
      return
    }
  }

  createWindow(serverPort)

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow(serverPort)
  })
})

app.on('window-all-closed', () => {
  if (staticServer) staticServer.close()
  if (process.platform !== 'darwin') app.quit()
})

app.on('quit', () => {
  if (staticServer) staticServer.close()
})
