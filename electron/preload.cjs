/* ============================================================
 *  Electron preload — 安全桥接
 *  contextIsolation: true 下向 renderer 暴露最小 API
 * ============================================================ */
const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  platform: process.platform,
  isElectron: true,
})
