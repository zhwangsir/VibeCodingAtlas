# test · 项目初始化文档

> 由项目管理中枢自动生成 | 更新日期: 2026-07-12 | 负责人: zhwangsir

## 一、项目基本信息

| 字段       | 值                                                                      |
| ---------- | ----------------------------------------------------------------------- |
| 项目名称   | test（前端设计 Showcase，package.json name 为 `lithos-serene-landing`） |
| 当前版本   | 0.1.0                                                                   |
| 创建日期   | 未明确记录（仓库提交历史可追溯）                                        |
| 负责人     | zhwangsir                                                               |
| 项目路径   | /Users/wangzhenyu/Desktop/ALLProject/test                               |
| 远程仓库   | https://github.com/zhwangsir/frontend-showcase                          |
| 仓库可见性 | 私有（Private）                                                         |
| 线上地址   | 暂无（本地开发，Vite :5173）                                            |

## 二、项目概述与核心功能

### 2.1 项目定位

test（远程名 `frontend-showcase`）是一个**前端设计 Showcase 项目**，用于**记录与展示所有优秀的前端页面设计**。通过统一的注册表（`src/showcases/registry.ts`）驱动路由，每个 showcase 是一个独立的 React 组件，呈现一种设计风格或品牌 hero。

### 2.2 核心功能列表

- **Showcase 索引页**：`src/pages/ShowcaseIndex.tsx` 展示所有收录设计的卡片网格。
- **6 套收录设计**（由 `registry.ts` 驱动）：
  - **lithos** — Lithos：暗色地质学 hero，光标跟随聚光灯效果，揭示第二张图（Geology · Hero）。
  - **serene** — Serene：奢华美容 & 健康落地页，视频 hero + 动画菜单 + 视差引言（Beauty & Wellness · Landing）。
  - **space-travel** — Aether：电影级太空旅行落地页，循环背景视频 + rAF 交叉淡入 + 液态玻璃 chrome + Framer Motion 模糊入场（Space Travel · Cinematic）。
  - **bloom** — Bloom：AI 驱动的植物 / 花卉设计平台，双面板液态玻璃分屏 + 灰度 + Poppins + Source Serif 4（AI · Floral Design）。
  - **velorah** — Velorah®：电影级极简 hero，深海军蓝 + Instrument Serif + 淡入上升入场（Studio · Cinematic）。
  - **jack** — Jack 3D Creator 作品集：暗色 Kanit 字体 + 磁吸头像 + 滚动双跑马灯 + 逐字 About 揭示 + 白色 Services 面板 + sticky 堆叠项目卡（Portfolio · 3D Creator）。
- **Esc 返回索引**：在任意 showcase 子页按 Esc 键返回索引页（`src/App.tsx` 实现）。
- **液态玻璃返回按钮**：右下角固定按钮，非索引页可见。

### 2.3 目标用户

前端设计爱好者与学习者，希望**汇集、对比、参考各种优秀的 hero / landing 设计风格**，作为个人灵感库与设计语言试验场。

## 三、技术架构

### 3.1 技术栈

| 层级 | 技术                                                                               |
| ---- | ---------------------------------------------------------------------------------- |
| 框架 | React 18                                                                           |
| 构建 | Vite 5                                                                             |
| 语言 | TypeScript ~5.6                                                                    |
| 样式 | Tailwind CSS v3 + PostCSS + Autoprefixer                                           |
| 动画 | framer-motion ^11                                                                  |
| 图标 | lucide-react ^0.460                                                                |
| 路由 | react-router-dom v6                                                                |
| 字体 | Playfair / Instrument Serif / Poppins / Kanit / Source Serif 4（按 showcase 引入） |

### 3.2 架构说明

```
浏览器
  │
  ▼
React Router v6
  ├─ /                       ShowcaseIndex（卡片网格，注册表驱动）
  └─ /:slug                  对应 showcase 组件（Outlet 渲染）
       ├─ /lithos            LithosHero
       ├─ /serene            SereneApp
       ├─ /space-travel      SpaceTravelApp
       ├─ /bloom             BloomHero
       ├─ /velorah           VelorahHero
       └─ /jack              JackPortfolio
       │
       └─ Esc 键 / 右下角按钮 → 回到 /
```

`src/App.tsx` 是路由根：监听 Esc 键全局返回索引；非索引页显示液态玻璃返回按钮。具体路由表（slug → component）由 `src/showcases/registry.ts` 的 `showcases` 数组定义，新增 showcase 只需在 registry 添加一条并实现对应组件。

### 3.3 核心依赖

- `react@^18.3.1`, `react-dom@^18.3.1`
- `react-router-dom@^6.28`
- `framer-motion@^11.11.17`（动画）
- `lucide-react@^0.460`（图标）
- `tailwindcss@^3.4.15`, `postcss@^8.4.49`, `autoprefixer@^10.4.20`
- `vite@^5.4.11`, `@vitejs/plugin-react@^4.3.4`
- `typescript@^5.6.3`

## 四、目录结构

```
test/
├── package.json                    # name=lithos-serene-landing, version=0.1.0
├── package-lock.json
├── vite.config.ts                  # Vite 配置（:5173，host: true）
├── vite.config.js                  # 编译产物（与 .ts 并存，建议清理）
├── vite.config.d.ts                # 编译产物
├── tsconfig.json                   # TS 配置
├── tsconfig.node.json              # Node 端 TS 配置
├── tsconfig.node.tsbuildinfo       # 增量编译缓存
├── tsconfig.tsbuildinfo            # 增量编译缓存
├── tailwind.config.js              # Tailwind v3 配置（content: index.html + src/**/*）
├── postcss.config.js               # PostCSS 配置
├── index.html                      # SPA 入口
├── 2botec.py                       # Python 脚本（用途待确认，疑似机器人控制）
├── smart自动工程2025111.abe         # 自动化工程文件（Aelos Smart 机器人，见同目录 PDF 手册）
├── Aelos Smart 使用手册V1.44-基于镜像1.0.4.1及1.0.4.2.pdf  # 机器人使用手册
└── src/
    ├── App.tsx                     # ★ 路由根（Esc 返回 + 液态玻璃返回按钮 + Outlet）
    ├── main.tsx                   # React 入口
    ├── index.css                  # 全局样式（含 Tailwind 指令与液态玻璃工具类）
    ├── vite-env.d.ts              # Vite 环境类型声明
    ├── pages/
    │   └── ShowcaseIndex.tsx      # ★ 索引页（卡片网格，遍历 showcases 注册表）
    ├── showcases/
    │   └── registry.ts            # ★ 注册表（6 条 Showcase 定义，驱动路由与索引）
    ├── lithos/
    │   └── LithosHero.tsx         # 光标跟随聚光灯 hero
    ├── serene/
    │   └── SereneApp.tsx          # 美容 wellness 落地页
    ├── spacetravel/
    │   ├── SpaceTravelApp.tsx     # 太空旅行电影级落地页
    │   ├── BlurText.tsx           # 模糊文字入场组件
    │   ├── FadingVideo.tsx        # rAF 交叉淡入视频组件
    │   └── icons.tsx              # 自定义图标
    ├── bloom/
    │   └── BloomHero.tsx          # AI 花卉双面板 hero
    ├── velorah/
    │   └── VelorahHero.tsx        # 深海军蓝极简 hero
    └── jack/
        ├── JackPortfolio.tsx      # 3D Creator 作品集入口
        ├── components.tsx         # 共享组件
        └── sections/
            ├── AboutServices.tsx  # 关于 + 服务面板
            ├── HeroMarquee.tsx    # 跑马灯 hero
            └── Projects.tsx       # sticky 堆叠项目卡
```

### 关键文件功能说明

| 路径                                 | 功能                                                                                                                                                                |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `package.json`                       | 依赖与 scripts（dev/build/preview，均基于 vite，`--host` 开放网络访问）                                                                                             |
| `vite.config.ts`                     | Vite 配置；`server.host: true`，`server.port: 5173`                                                                                                                 |
| `tailwind.config.js`                 | Tailwind v3 配置；content 扫描 `index.html` + `src/**/*.{js,ts,jsx,tsx}`                                                                                            |
| `tsconfig.json`                      | TypeScript 配置                                                                                                                                                     |
| `index.html`                         | SPA 入口                                                                                                                                                            |
| `src/App.tsx`                        | 路由根；Esc 键监听返回索引；非索引页显示液态玻璃返回按钮；`<Outlet />` 渲染子路由                                                                                   |
| `src/main.tsx`                       | React 渲染入口                                                                                                                                                      |
| `src/index.css`                      | 全局样式；含 Tailwind 指令与 `.liquid-glass` 等工具类                                                                                                               |
| `src/pages/ShowcaseIndex.tsx`        | 索引页；遍历 `showcases` 注册表渲染卡片网格                                                                                                                         |
| `src/showcases/registry.ts`          | ★ **注册表核心**：定义 `Showcase` 类型（slug/title/brand/tagline/description/category/accent/field/titleFont/component）与 `showcases` 数组（6 条）；驱动路由与索引 |
| `src/lithos/LithosHero.tsx`          | Lithos：光标跟随聚光灯揭示第二张图                                                                                                                                  |
| `src/serene/SereneApp.tsx`           | Serene：视频 hero + 视差引言                                                                                                                                        |
| `src/spacetravel/SpaceTravelApp.tsx` | Aether：循环背景视频 + 液态玻璃 chrome                                                                                                                              |
| `src/spacetravel/BlurText.tsx`       | 模糊文字入场动画组件                                                                                                                                                |
| `src/spacetravel/FadingVideo.tsx`    | rAF 驱动的视频交叉淡入组件                                                                                                                                          |
| `src/bloom/BloomHero.tsx`            | Bloom：双面板液态玻璃分屏                                                                                                                                           |
| `src/velorah/VelorahHero.tsx`        | Velorah：深海军蓝极简 hero                                                                                                                                          |
| `src/jack/JackPortfolio.tsx`         | Jack：3D Creator 作品集入口                                                                                                                                         |
| `src/jack/sections/*.tsx`            | Jack 的子章节（HeroMarquee / AboutServices / Projects）                                                                                                             |
| `2botec.py`                          | Python 脚本（用途待确认，疑似与 Aelos Smart 机器人相关）                                                                                                            |
| `smart自动工程2025111.abe`           | Aelos Smart 机器人自动化工程文件                                                                                                                                    |
| `Aelos Smart 使用手册*.pdf`          | Aelos Smart 机器人使用手册 V1.44                                                                                                                                    |

## 五、环境搭建

### 5.1 前置环境要求

- Node.js（建议 18+，依赖 React 18 / Vite 5）
- npm（`package-lock.json` 表明使用 npm）

### 5.2 依赖安装步骤

```bash
npm install
```

### 5.3 环境变量配置

本项目为纯前端 Showcase，**无环境变量依赖**。Vite 默认配置即可运行。

如需自定义端口，编辑 `vite.config.ts` 的 `server.port`。

## 六、启动与运行

### 6.1 开发模式启动

```bash
npm run dev      # vite --host，启动开发服务器
```

访问 `http://localhost:5173`（`--host` 模式下同网段设备可访问）。

### 6.2 生产构建

```bash
npm run build    # tsc -b && vite build
npm run preview  # vite preview --host，预览生产构建
```

### 6.3 部署方式

本项目**无后端**，生产部署即将 `dist/` 静态文件托管至任意静态主机：

- Vercel / Netlify / Cloudflare Pages：连接 GitHub 仓库自动部署
- GitHub Pages：`dist/` 推送到 `gh-pages` 分支
- Nginx / Caddy：直接 serve `dist/`

当前无线上地址（仓库为私有，本地开发为主）。

## 七、主要接口说明

本项目为**纯前端 Showcase，无后端接口**。

### 路由表（前端）

| 路径            | 组件             | 说明                               |
| --------------- | ---------------- | ---------------------------------- |
| `/`             | `ShowcaseIndex`  | 索引页，展示所有收录设计的卡片网格 |
| `/lithos`       | `LithosHero`     | Lithos 地质学 hero                 |
| `/serene`       | `SereneApp`      | Serene 美容 wellness 落地页        |
| `/space-travel` | `SpaceTravelApp` | Aether 太空旅行电影级落地页        |
| `/bloom`        | `BloomHero`      | Bloom AI 花卉双面板 hero           |
| `/velorah`      | `VelorahHero`    | Velorah 深海军蓝极简 hero          |
| `/jack`         | `JackPortfolio`  | Jack 3D Creator 作品集             |

### 注册表数据结构（`src/showcases/registry.ts`）

```ts
type Showcase = {
  slug: string // URL 路径段，如 "lithos" → "/lithos"
  title: string // 显示标题
  brand: string // 品牌 / 客户名
  tagline: string // 卡片大字标语
  description: string // 简短描述
  category: string // 分类标签，如 "Geology · Hero"
  accent: string // 强调色（hover 光晕 / 标签颜色）
  field: string // 卡片视觉区背景 CSS
  titleFont: string // 卡片标题字体类
  component: ComponentType // 渲染组件
}
```

**新增 showcase 流程**：

1. 在 `src/<name>/` 下实现组件
2. 在 `src/showcases/registry.ts` 的 `showcases` 数组追加一条 `Showcase` 定义
3. 索引页与路由自动生效（无需手改路由表）

## 八、已知问题与注意事项

- **项目名 `test` 过于通用**：本地目录名为 `test`，package.json name 为 `lithos-serene-landing`，远程仓库名为 `frontend-showcase`，三者不一致，容易混淆。建议统一为 `frontend-showcase`。
- **`vite.config.js` / `vite.config.d.ts` 与 `vite.config.ts` 并存**：`.js` 与 `.d.ts` 为编译产物，应清理并加入 `.gitignore`。
- **`tsconfig.node.tsbuildinfo` / `tsconfig.tsbuildinfo` 提交到仓库**：增量编译缓存不应入库，应加入 `.gitignore`。
- **`2botec.py` / `smart自动工程2025111.abe` / `Aelos Smart 使用手册*.pdf` 与前端项目无关**：这些是 Aelos Smart 机器人相关文件，混放在前端项目根目录，建议移出或归档到独立目录。
- **Tailwind v3 配置极简**：`tailwind.config.js` 的 `theme.extend` 为空，所有自定义样式靠 `index.css` 工具类与内联样式实现。
- **无测试**：项目未配置任何测试框架（无 vitest / jest / playwright），作为设计 Showcase 可接受，但新增交互逻辑时建议补测。
- **无 ESLint / Prettier**：未配置代码规范工具，团队协作前需补充。
- **字体加载**：多个 showcase 依赖 Google Fonts（Playfair / Instrument Serif / Poppins / Kanit / Source Serif 4），离线环境会退化。
- **视频资源**：space-travel / serene / velorah / bloom 依赖循环背景视频，`public/` 下视频体积可能较大（仓库未明确，需检查）。
- **路由无 404 处理**：`App.tsx` 未配置 catch-all 路由，访问未注册的 slug 会显示空白。

## 九、与其他项目的关系

- **test 是 ALLProject 体系中的"前端设计灵感库"**：独立运行，与 WeBrain / LoveStar / WineryBlog 无代码依赖。
- **与 WineryBlog 技术栈相近**：两者均用 React + Vite + Tailwind，但 test 用 React 18 + Tailwind v3 + framer-motion，WineryBlog 用 React 19 + Tailwind v4 + Motion；test 是设计 Showcase，WineryBlog 是功能性博客。
- **可作为 WineryBlog / LoveStar 的设计参考**：test 收录的 hero / landing 设计风格可被 WineryBlog 首页或 LoveStar 入口页借鉴。
- **与 WeBrain 无直接关系**：WeBrain 前端用 Ant Design 5，与 test 的 Tailwind 风格不同；test 不涉及 AI / 后端。
- **仓库虽私有但可公开**：test 不含敏感数据，如需公开分享设计可改为 public。
