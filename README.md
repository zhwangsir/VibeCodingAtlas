# test（VibeCodingAtlas）

ALLProject 试验场：前端设计 Showcase（大量 hero / landing）+ Electron 桌面壳。本地文件夹名是 `test`，远程仓名是 **VibeCodingAtlas**。

> **路径**：ALLProject/test  
> **状态**：基建/试验 · 在用  
> **最后更新**：2026-08-27

## 身份与远程

- origin（Gitee）：gitee.com/Winery_z/VibeCodingAtlas
- github（备份）：github.com/zhwangsir/VibeCodingAtlas
- 分支：main 跟踪 origin/main
- package.json：name `frontend-showcase`，version `1.0.1`，productName（electron-builder）Vibe Coding Atlas
- appId：com.vibecoding.atlas

集群真相源：../ToIV/AGENTS.md

## 文档五件套

README / AGENTS / DEVELOPMENT / STATE.json / TEST_LOG。STATE.json / TEST_LOG 体积大（含 M5–M11 等历史）。

## Gitee 体积警告

本地 `git count-objects` 约 **1.37 GiB**。Gitee 对仓库有 **1024MB** 配额限制——**当前体积已超过配额**，继续 push 大资源会失败。GitHub 远程 zhwangsir/VibeCodingAtlas 仍可用作备份。需要瘦身（清理 videos/public、LFS、历史）后再往 Gitee 推大变更。

## 目录里实际有什么

- `src/`：Showcases 注册表 `src/showcases/registry.ts`（约 **78** 个 slug）+ 大量独立页面目录（lithos、serene、bloom、velorah、jack、cosmos、…）
- `public/`：字体、图片、各品牌静态资源与 videos
- `electron/`：main.cjs、preload.cjs
- `electron-builder.yml`、`build/`、`release/`、`dist/`
- `scripts/`：download 相关脚本
- `verification/`、`verification-shots/`、`.audit/`
- Vite 端口：**4801**（vite.config.ts；规划一致）
- 旧 DEVELOPMENT 写的「仅 6 套 showcase / :5173 / frontend-showcase 远程名」已过时

## 启动

```
npm install
npm run dev
```

打开 http://localhost:4801 。Electron：`npm run electron:dev`；打包见 dist:win / dist:mac。

## 注意

- 不是业务产品，是设计实验与 Electron 打包试验
- node_modules / dist / release 体积大，勿盲目提交
- push 时两边都推；Gitee 先处理配额
