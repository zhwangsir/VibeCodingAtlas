import type { ComponentType } from 'react'
import LithosHero from '../lithos/LithosHero'
import JackPortfolio from '../jack/JackPortfolio'
import AsmeHero from '../asme/AsmeHero'
import PrismaLanding from '../prisma/PrismaLanding'
import DriftLanding from '../drift/DriftLanding'
import VanguardHero from '../vanguard/VanguardHero'
import SmithPortfolio from '../smith/SmithPortfolio'
import BloomHero from '../bloom/BloomHero'
import CosmosLanding from '../cosmos/CosmosLanding'
import SereneLanding from '../serene/SereneLanding'
import VelorahHero from '../velorah/VelorahHero'
import VexHero from '../vex/VexHero'
import SkyEliteHero from '../skyelite/SkyEliteHero'
import LumoraHero from '../lumora/LumoraHero'
import AxionStudio from '../axion/AxionStudio'
import AetheraHero from '../aethera/AetheraHero'
import NeuralKineticsHero from '../neuralkinetics/NeuralKineticsHero'
import NoraHero from '../nora/NoraHero'
import PrmptHero from '../prmpt/PrmptHero'
import TerraElixHero from '../terraelix/TerraElixHero'
import AsmeStudio from '../asme-studio/AsmeStudio'
import CozyPawsHero from '../cozypaws/CozyPawsHero'
import OrbisNftHero from '../orbis-nft/OrbisNftHero'
import DentalHealthHero from '../dental/DentalHealthHero'
import SecurifyHero from '../securify/SecurifyHero'
import ToonHub from '../toonhub/ToonHub'
import CinematicHero from '../cinematic/CinematicHero'
import MarketeamHero from '../marketeam/MarketeamHero'
import FoldcraftHero from '../foldcraft/FoldcraftHero'
import Mindloop from '../mindloop/Mindloop'
import FlowpathHero from '../flowpath/FlowpathHero'
import RivrHero from '../rivr/RivrHero'
import AlwayzzHero from '../alwayzz/AlwayzzHero'
import ViktorHero from '../viktor/ViktorHero'
import ViktorOddyLanding from '../viktor-oddy/ViktorOddyLanding'
import CodeNestHero from '../codenest/CodeNestHero'
import SynapseXLanding from '../synapse-x/SynapseXLanding'
import PowerAiHero from '../power-ai/PowerAiHero'
import AtelierHero from '../atelier/AtelierHero'
import OrganicVisionsHero from '../organic-visions/OrganicVisionsHero'
import HaloHero from '../halo/HaloHero'
import SentinelHero from '../sentinel/SentinelHero'
import DesignProHero from '../designpro/DesignProHero'
import NexoraHero from '../nexora/NexoraHero'
import AuraiHero from '../aurai/AuraiHero'
import HaloUsdHero from '../halousd/HaloUsdHero'
import Mainframe from '../mainframe/Mainframe'
import AuraEmail from '../aura-email/AuraEmail'
import LinkFlow from '../linkflow/LinkFlow'
import Equilibrium from '../equilibrium/Equilibrium'
import FearlessVision from '../fearless-vision/FearlessVision'
import NHM from '../nhm/NHM'
import Epoch from '../epoch/Epoch'
import PulsestreamLanding from '../pulsestream/PulsestreamLanding'
import LogoipsumHero from '../logoipsum/LogoipsumHero'
import VaultShieldHero from '../vaultshield/VaultShieldHero'
import MentalityHero from '../mentality/MentalityHero'
import QuestlyHero from '../questly/QuestlyHero'
import MicroVisualsHero from '../microvisuals/MicroVisualsHero'
import AriaStudioLanding from '../aria-studio/AriaStudioLanding'
import Forma from '../forma/Forma'
import Wanderful from '../wanderful/Wanderful'
import ConvixSoftware from '../convix-software/ConvixSoftware'
import AiBuilder from '../ai-builder/AiBuilder'
import Neuralyn from '../neuralyn/Neuralyn'
import Dot from '../dot/Dot'
import Taskly from '../taskly/Taskly'
import FutureHero from '../future/FutureHero'
import StellarAi from '../stellar-ai/StellarAi'
import DesignRocket from '../design-rocket/DesignRocket'
import Xero from '../xero/Xero'
import Quietpress from '../quietpress/Quietpress'
import Duolingo from '../duolingo/Duolingo'
import Measured from '../measured/Measured'
import TinyTrails from '../tiny-trails/TinyTrails'
import Axon from '../axon/Axon'

/**
 * 中英双语文本
 * 后续填入 showcase 时，所有展示文本字段都需提供 zh + en 两个版本。
 */
export type Bilingual = {
  zh: string
  en: string
}

/**
 * Showcase 注册表类型定义
 * 新增 showcase 时在 showcases 数组追加一条即可，
 * 路由由 main.tsx 根据 slug 自动注册。
 */
export type Showcase = {
  /** URL path segment, e.g. "lithos" → "/lithos" */
  slug: string
  /** Display title（通常不翻译，保留品牌原名） */
  title: string
  /** Brand / client name */
  brand: string
  /** One-line tagline shown large on the card（中英双语） */
  tagline: Bilingual
  /** Short description（中英双语） */
  description: Bilingual
  /** Category label, e.g. "Geology", "Beauty & Wellness"（中英双语） */
  category: Bilingual
  /** Accent hex used for hover glow / label color */
  accent: string
  /** CSS background for the card's visual field */
  field: string
  /** Display font class for the card title (ties back to the brand) */
  titleFont: string
  /** The React component rendered at /slug */
  component: ComponentType
  /**
   * Original creation prompt for this showcase (raw, archived).
   * Undefined means no original prompt is on file yet.
   */
  prompt?: string
}

/**
 * Showcase 注册表 — 当前为空，等待新 prompt 驱动开发后填入。
 * 填入示例：
 *
 *   {
 *     slug: 'my-brand',
 *     title: 'MyBrand',
 *     brand: 'MyBrand',
 *     tagline: { zh: '一句话标语', en: 'One-line tagline' },
 *     description: {
 *       zh: '卡片上展示的简短描述。',
 *       en: 'Short description shown on the card.',
 *     },
 *     category: { zh: '类别 · 子类', en: 'Category · Subcategory' },
 *     accent: '#hex',
 *     field: 'radial-gradient(...)',
 *     titleFont: 'font-instrument italic',
 *     component: MyBrandApp,
 *     prompt: '原始创建 prompt 原文',
 *   },
 */
/**
 * Lithos — 原始创建 prompt 归档
 */
const LITHOS_PROMPT = `Build a full-screen, dark-themed hero section for a geology brand called **Lithos**, using **React 18 + TypeScript + Vite + Tailwind CSS** and **lucide-react** for icons. The signature feature is a **cursor-following spotlight that reveals a second image** through a soft circular mask on top of a base image. Match every detail below exactly.

### Fonts
Add this to the top of \`src/index.css\`, then \`@tailwind base/components/utilities\`:
\`\`\`css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@1,400;1,500;1,600&display=swap');
* { font-family: 'Inter', sans-serif; }
.font-playfair { font-family: 'Playfair Display', serif; }
\`\`\`
- Body/UI font: **Inter**.
- Display/wordmark accent: **Playfair Display, italic**.

### Asset URLs (use these exactly)
- Base image (\`BG_IMAGE_1\`):
  \`https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85\`
- Reveal image (\`BG_IMAGE_2\`):
  \`https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85\`

### Layout & structure
Root wrapper: \`min-h-screen bg-white tracking-[-0.02em]\`, inline \`fontFamily: "'Inter', sans-serif"\`.

**Section** (\`<section>\`): \`relative w-full overflow-hidden h-screen bg-black\`, inline \`style={{ height: '100dvh' }}\`. Layers, by z-index:
1. **Base image** (\`z-10\`): \`absolute inset-0 bg-center bg-cover bg-no-repeat\`, background = \`BG_IMAGE_1\`.
2. **Reveal layer** (\`z-30\`): a \`RevealLayer\` component (see below) showing \`BG_IMAGE_2\`.
3. **Heading** (\`z-50\`): \`absolute top-[14%] left-0 right-0 flex flex-col items-center text-center px-5 pointer-events-none\`. An \`<h1>\` with \`text-white leading-[0.95]\` containing two block spans:
   - Line 1: \`block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl\`, inline \`letterSpacing: '-0.05em'\`, text **"Layers hold"**.
   - Line 2: \`block font-normal text-5xl sm:text-7xl md:text-8xl -mt-1\`, inline \`letterSpacing: '-0.08em'\`, text **"tales of time"**.
4. **Bottom-left paragraph** (\`z-50\`): \`hidden sm:block absolute bottom-14 left-10 md:left-14 max-w-[260px]\`. \`<p className="text-sm text-white/80 leading-relaxed">\` — "Every layer of sediment records a chapter of our planet, from ancient seabeds to drifting ash, layered across millions of years beneath us."
5. **Bottom-right block** (\`z-50\`): \`absolute bottom-10 sm:bottom-24 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[260px] flex flex-col items-start gap-4 sm:gap-5\`. Contains a \`<p className="text-xs sm:text-sm text-white/80 leading-relaxed">\` — "Our interactive maps let you peel back the crust to trace how stones, fossils, and deep time combine to shape the ground beneath your feet." — and a **Start Digging** button: \`bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-medium px-7 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-[#e8702a]/30\`.

### The cursor spotlight reveal (core mechanic)
In the parent, define \`const SPOTLIGHT_R = 260;\` and track the mouse with smoothing:
- Refs: \`mouse\` (raw), \`smooth\` (eased), \`rafRef\`; state \`cursorPos\` (init \`{x:-999,y:-999}\`).
- \`mousemove\` listener stores raw \`e.clientX/clientY\`.
- A \`requestAnimationFrame\` loop lerps: \`smooth.x += (mouse.x - smooth.x) * 0.1\` (same for y), then \`setCursorPos\`. Clean up listener + cancel RAF on unmount.

\`RevealLayer({ image, cursorX, cursorY })\`:
- Holds a hidden \`<canvas>\` (\`absolute inset-0 pointer-events-none\`, \`style={{display:'none'}}\`) sized to \`window.innerWidth/Height\` on mount + resize.
- A reveal \`<div>\` (\`absolute inset-0 bg-center bg-cover bg-no-repeat z-30 pointer-events-none\`) with the reveal image as background.
- On every render: clear canvas, build a **radial gradient** at \`(cursorX, cursorY)\` from radius 0 → \`SPOTLIGHT_R\` with stops:
  \`0 → rgba(255,255,255,1)\`, \`0.4 → 1\`, \`0.6 → 0.75\`, \`0.75 → 0.4\`, \`0.88 → 0.12\`, \`1 → 0\`.
  Fill an arc of radius \`SPOTLIGHT_R\` with it. Then \`canvas.toDataURL()\` and apply it as \`maskImage\`/\`webkitMaskImage\` on the reveal div with \`maskSize: '100% 100%'\`. This makes the second image visible only inside the soft glowing circle that trails the cursor.

### Navigation (fixed, over hero)
\`<nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5">\`:
- **Left**: an inline SVG logo (26×26, viewBox \`0 0 256 256\`, \`fill="#ffffff"\`, path \`M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z\`) + wordmark \`<span className="text-white text-2xl font-playfair italic">Lithos</span>\`.
- **Center pill** (\`hidden md:flex absolute left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-2 py-2 items-center gap-1\`): buttons **Course** (active: full white text), then **Field Guides, Geology, Plans, Live Tour** (\`text-white/80 ... hover:bg-white/20 hover:text-white transition-colors\`, \`px-4 py-1.5 rounded-full text-sm font-medium\`).
- **Right (desktop)**: \`hidden md:block bg-white text-gray-900 text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-gray-100\` — **Sign Up**.

### Animations (premium, on load)
Add to \`index.css\`:
\`\`\`css
@keyframes heroReveal { 0%{opacity:0;transform:translateY(28px);filter:blur(12px)} 100%{opacity:1;transform:translateY(0);filter:blur(0)} }
@keyframes heroFadeUp { 0%{opacity:0;transform:translateY(20px)} 100%{opacity:1;transform:translateY(0)} }
@keyframes heroZoom { 0%{transform:scale(1.12)} 100%{transform:scale(1)} }
.hero-anim { opacity:0; animation-fill-mode:forwards; animation-timing-function:cubic-bezier(0.16,1,0.3,1); }
.hero-reveal { animation-name:heroReveal; animation-duration:1.1s; }
.hero-fade { animation-name:heroFadeUp; animation-duration:1s; }
.hero-zoom { animation:heroZoom 1.8s cubic-bezier(0.16,1,0.3,1) forwards; }
@media (prefers-reduced-motion: reduce){ .hero-anim,.hero-zoom{ animation:none; opacity:1; } }
\`\`\`
Apply:
- Base image div → add \`hero-zoom\` (slow Ken Burns zoom-out).
- Heading line 1 → \`hero-anim hero-reveal\`, inline \`animationDelay: '0.25s'\`; line 2 → same with \`'0.42s'\` (blur-rise, staggered).
- Bottom-left paragraph wrapper → \`hero-anim hero-fade\`, \`animationDelay: '0.7s'\`.
- Bottom-right wrapper → \`hero-anim hero-fade\`, \`animationDelay: '0.85s'\`.

### Responsiveness
- Heading scales \`text-5xl\` → \`sm:text-7xl\` → \`md:text-8xl\`.
- Center nav pill and desktop Sign Up are \`hidden\` below \`md\`; the mobile hamburger is \`md:hidden\`.
- Bottom-left paragraph is \`hidden sm:block\`; bottom-right block is full-width on mobile (\`left-5 right-5\`) and right-anchored from \`sm\`.
- Use \`100dvh\` so mobile browser chrome doesn't clip the section.`

/**
 * Jack — 原始创建 prompt 归档
 */
const JACK_PROMPT = `Build a 3D Creator portfolio landing page for "Jack" using React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React. The page has a dark theme (#0C0C0C background) with the font Kanit (Google Fonts, weights 300-900). The page title is "Jack -- 3D Creator".

GLOBAL STYLES
Background: #0C0C0C on html, body, #root, and the main wrapper
Font family: 'Kanit', sans-serif
Global reset: box-sizing border-box, margin 0, padding 0
CSS class .hero-heading: gradient text using background: linear-gradient(180deg, #646973 0%, #BBCCD7 100%) with -webkit-background-clip: text and -webkit-text-fill-color: transparent
Main wrapper has overflowX: 'clip'
SECTION ORDER
HeroSection
MarqueeSection
AboutSection
ServicesSection
ProjectsSection
1. HERO SECTION
Full viewport height (h-screen), flex column layout with overflowX: clip.

Navbar: Horizontal nav bar with 4 links -- "About", "Price", "Projects", "Contact" -- evenly spaced with justify-between. Text color #D7E2EA, font-medium, uppercase, tracking-wider. Sizes: text-sm md:text-lg lg:text-[1.4rem]. Padding: px-6 md:px-10 pt-6 md:pt-8. Hover: opacity 70% with 200ms transition.

Hero Heading: Massive h1 with text "Hi, i'm jack" (lowercase "i", curly apostrophe via &apos;). Uses the .hero-heading gradient text class. Font-black, uppercase, tracking-tight, leading-none, whitespace-nowrap, w-full. Font sizes: text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]. Margin top: mt-6 sm:mt-4 md:-mt-5. Wrapped in overflow-hidden container.

Bottom bar: Flexbox justify-between items-end with pb-7 sm:pb-8 md:pb-10:

Left: paragraph text "a 3d creator driven by crafting striking and unforgettable projects", color #D7E2EA, font-light, uppercase, tracking-wide, leading-snug. Font size: clamp(0.75rem, 1.4vw, 1.5rem). Max-width: max-w-[160px] sm:max-w-[220px] md:max-w-[260px].
Right: ContactButton component (see below)
Hero Portrait: Centered absolutely. Uses a Magnet component (mouse-following magnetic effect) wrapping an image. Image URL: https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png. Magnet settings: padding 150, strength 3, activeTransition "transform 0.3s ease-out", inactiveTransition "transform 0.6s ease-in-out". Positioning: absolute left-1/2 -translate-x-1/2 z-10. Width: w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]. On mobile: top-1/2 -translate-y-1/2. On sm+: sm:top-auto sm:translate-y-0 sm:bottom-0.

FadeIn animations: Navbar fades in with delay 0, y -20. Heading: delay 0.15, y 40. Left text: delay 0.35, y 20. Contact button: delay 0.5, y 20. Portrait: delay 0.6, y 30.

2. MARQUEE SECTION
Two rows of images that scroll horizontally based on page scroll position. Background #0C0C0C. Padding: pt-24 sm:pt-32 md:pt-40 pb-10.

21 GIF images from motionsites.ai (exact URLs):


https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif
https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif
https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif
https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif
https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif
https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif
https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif
https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif
https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif
https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif
https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif
https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif
https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif
https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif
https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif
https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif
https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif
https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif
https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif
https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif
https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif
Row 1: first 11 images, tripled for seamless scrolling. Moves RIGHT on scroll (translateX(offset - 200)).
Row 2: remaining 10 images, tripled. Moves LEFT on scroll (translateX(-(offset - 200))).
Scroll offset calculated as: (window.scrollY - sectionTop + window.innerHeight) * 0.3
Each image tile: 420px x 270px, rounded-2xl, object-cover, lazy loaded.
Gap between tiles: gap-3. Gap between rows: gap-3.
Uses willChange: 'transform' for performance. Scroll listener is passive.
3. ABOUT SECTION
Full-height centered section with min-h-screen, padding px-5 sm:px-8 md:px-10 py-20.

Four decorative 3D images positioned absolutely in corners:

Top-left: Moon icon -- https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png -- w-[120px] sm:w-[160px] md:w-[210px], positioned top-[4%] left-[1%] sm:left-[2%] md:left-[4%]. FadeIn: delay 0.1, x -80, y 0, duration 0.9.
Bottom-left: 3D object -- https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png -- w-[100px] sm:w-[140px] md:w-[180px], positioned bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]. FadeIn: delay 0.25, x -80, y 0, duration 0.9.
Top-right: Lego icon -- https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png -- w-[120px] sm:w-[160px] md:w-[210px], positioned top-[4%] right-[1%] sm:right-[2%] md:right-[4%]. FadeIn: delay 0.15, x 80, y 0, duration 0.9.
Bottom-right: 3D group -- https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png -- w-[130px] sm:w-[170px] md:w-[220px], positioned bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]. FadeIn: delay 0.3, x 80, y 0, duration 0.9.
Heading: "About me" using .hero-heading gradient text, font-black, uppercase, leading-none, tracking-tight, centered. Font size: clamp(3rem, 12vw, 160px). FadeIn: delay 0, y 40.

Animated paragraph: Uses a character-by-character scroll-driven opacity animation. Text: "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!" -- color #D7E2EA, font-medium, centered, leading-relaxed, max-w-[560px], font size clamp(1rem, 2vw, 1.35rem). Each character animates from opacity 0.2 to 1 based on scroll progress, with scroll offset ['start 0.8', 'end 0.2'].

Contact button below the text block. Gap between heading/text: gap-10 sm:gap-14 md:gap-16. Gap between text block and button: gap-16 sm:gap-20 md:gap-24.

4. SERVICES SECTION
White background (#FFFFFF), with rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] top corners. Padding: px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32.

Heading: "Services" in #0C0C0C, font-black, uppercase, centered, font size clamp(3rem, 12vw, 160px). Margin bottom: mb-16 sm:mb-20 md:mb-28.

5 service items in a vertical list, max-w-5xl, centered:

01 - 3D Modeling: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations."
02 - Rendering: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life."
03 - Motion Design: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences."
04 - Branding: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence."
05 - Web Design: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience."
Each item: horizontal layout with number (font-black, font size clamp(3rem, 10vw, 140px), color #0C0C0C) on the left and name + description stacked vertically on the right. Name: font-medium, uppercase, font size clamp(1rem, 2.2vw, 2.1rem). Description: font-light, leading-relaxed, max-w-2xl, font size clamp(0.85rem, 1.6vw, 1.25rem), opacity 0.6. Items separated by 1px borders (rgba(12, 12, 12, 0.15)). Padding: py-8 sm:py-10 md:py-12. Staggered FadeIn: each item delays by i * 0.1.

5. PROJECTS SECTION
Dark background (#0C0C0C), rounded top corners rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px], pulled up with -mt-10 sm:-mt-12 md:-mt-14, z-10.

Heading: "Project" (singular) using .hero-heading gradient, same styling as other headings.

3 sticky-stacking project cards that scale down as you scroll past them (card stacking effect using Framer Motion useScroll and useTransform). Each card is sticky top-24 md:top-32 inside an h-[85vh] container.

Scale calculation: targetScale = 1 - (totalCards - 1 - index) * 0.03. Each card offset by top: \${index * 28}px.

Each card has: rounded-[40px] sm:rounded-[50px] md:rounded-[60px], border-2 border-[#D7E2EA], background #0C0C0C, padding p-4 sm:p-6 md:p-8.

Card layout:

Top row: Number (huge, same style as services), category label, project name, and a "Live Project" ghost button (rounded-full, border-2 #D7E2EA, uppercase, tracking-widest).
Bottom row: Two-column image grid -- left column (40% width) has 2 stacked images, right column (60%) has 1 tall image. All images have heavy border radius rounded-[40px] sm:rounded-[50px] md:rounded-[60px]. Left top image height: clamp(130px, 16vw, 230px). Left bottom image height: clamp(160px, 22vw, 340px).
Project data with CloudFront image URLs:

Project 01 - "Nextlevel Studio" (Client):

Col1 image 1: https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85
Col1 image 2: https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85
Col2 image: https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85
Project 02 - "Aura Brand Identity" (Personal):

Col1 image 1: https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85
Col1 image 2: https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85
Col2 image: https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85
Project 03 - "Solaris Digital" (Client):

Col1 image 1: https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85
Col1 image 2: https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85
Col2 image: https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85
REUSABLE COMPONENTS
ContactButton: Rounded-full pill button with gradient background linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%), inner box-shadow 0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset, white 2px outline with -3px offset. Text: white, font-medium, uppercase, tracking-widest. Sizes: px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4, text text-xs sm:text-sm md:text-base. Label: "Contact Me".

LiveProjectButton: Ghost/outline pill button. Rounded-full, border-2 border-[#D7E2EA], text color #D7E2EA, font-medium, uppercase, tracking-widest. Sizes: px-8 py-3 sm:px-10 sm:py-3.5, text text-sm sm:text-base. Hover: bg-[#D7E2EA]/10. Label: "Live Project".

FadeIn: Framer Motion wrapper using whileInView with viewport={{ once: true, margin: "50px", amount: 0 }}. Accepts delay, duration (default 0.7), x (default 0), y (default 30). Easing: [0.25, 0.1, 0.25, 1]. Uses motion.create() for dynamic element types.

Magnet: Mouse-following magnetic hover effect. Tracks mouse position relative to element center, applies translate3d transform divided by strength factor. Activates when cursor is within padding distance of element edge. Smooth transition in (0.3s ease-out) and out (0.6s ease-in-out). Uses willChange: 'transform'.

AnimatedText: Character-by-character scroll-reveal text animation. Each character goes from opacity 0.2 to 1 based on its position in the text relative to scroll progress. Uses Framer Motion useScroll targeting the paragraph element with offset ['start 0.8', 'end 0.2']. Each character uses invisible placeholder + absolute positioned animated span.

KEY DEPENDENCIES
react, react-dom (^18.3.1)
framer-motion (^12.38.0)
lucide-react (^0.344.0)
tailwindcss (^3.4.1)
vite, typescript
RESPONSIVE BREAKPOINTS
All sections use Tailwind's default breakpoints (sm: 640px, md: 768px, lg: 1024px) with mobile-first approach. Heavy use of clamp() for fluid typography. The entire design scales gracefully from mobile to ultra-wide screens.`

/**
 * Asme — 原始创建 prompt 归档
 */
const ASME_PROMPT = `Build a single-page hero section with a full-screen looping background video, liquid glass UI elements, and a dark cinematic aesthetic. Use React, TypeScript, Tailwind CSS, and Lucide React icons. Here are the exact specifications:

Background Video:

Full-screen muted autoplaying video covering the entire viewport, positioned absolutely with object-cover
Video source URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4
The video is shifted down by 17% (translate-y-[17%]) so the top portion of the video is cropped -- the interesting content is in the lower portion of the frame
The video loops seamlessly with a custom JavaScript fade system (no CSS transitions): 500ms requestAnimationFrame-based fade-in on load/loop start, 500ms fade-out when 0.55 seconds remain before the video ends. A fadingOutRef boolean prevents re-triggering the fade-out from repeated timeUpdate events. On ended, opacity is set to 0, then after 100ms the video resets to currentTime = 0, plays, and fades back in. Each new fade cancels any running animation frame to prevent competing animations. Fades resume from the current opacity rather than snapping.
The outer container is min-h-screen bg-black with overflow-hidden

Font:

Import Google Font "Instrument Serif" (both regular and italic) via CSS @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap')
The heading uses fontFamily: "'Instrument Serif', serif" applied via inline style

Liquid Glass CSS (.liquid-glass class):

background: rgba(255, 255, 255, 0.01) with background-blend-mode: luminosity
backdrop-filter: blur(4px) and -webkit-backdrop-filter: blur(4px)
border: none
box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1)
position: relative; overflow: hidden
A ::before pseudo-element creates the glass border effect:
position: absolute; inset: 0; border-radius: inherit; padding: 1.4px
background: linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%)
Mask trick for border-only rendering: -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude
pointer-events: none

Layout (all inside one full-screen flex column):

Navigation bar (relative z-20, padding pl-6 pr-6 py-6):
Inner container: rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto
Left side: Logo area with a Globe icon (size 24) and text "Asme" in white, font-semibold text-lg, with gap-2
Next to the logo (with gap-8): three nav links ("Features", "Pricing", "About") -- hidden on mobile, shown on md: -- styled text-white/80 hover:text-white transition-colors text-sm font-medium
Right side (gap-4): "Sign Up" as plain white text button, "Login" as a liquid-glass rounded-full px-6 py-2 button

Hero content area (relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]):
Heading: "Built for the curious" -- text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight whitespace-nowrap with Instrument Serif font
Below the heading, a max-w-xl w-full space-y-4 container:
Email input bar: liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3. Inside: a transparent email input (placeholder: "Enter your email", text-white placeholder:text-white/40 text-base) and a white circular submit button (bg-white rounded-full p-3 text-black) containing an ArrowRight icon (size 20)
Subtitle text: text-white text-sm leading-relaxed px-4 -- "Stay updated with the latest news and insights. Subscribe to our newsletter today and never miss out on exciting updates."
Manifesto button: centered, liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors

Social icons footer (relative z-10 flex justify-center gap-4 pb-12):
Three circular icon buttons, each liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all
Icons: Instagram, Twitter, Globe (all size 20) from lucide-react
Each has an aria-label

Tech stack: Vite + React 18 + TypeScript, Tailwind CSS 3, lucide-react for all icons. Default Tailwind config with no extensions. No other UI libraries.`

/**
 * Prisma — 原始创建 prompt 归档
 */
const PRISMA_PROMPT = `Create a React + Vite + TypeScript + Tailwind CSS landing page for a creative studio called "Prisma". The page has 3 sections: Hero, About, and Features. Use framer-motion for animations and lucide-react for icons. The design is dark, moody, and cinematic with a warm cream color palette.

FONTS

Load two Google Fonts in index.html:

Almarai (weights: 300, 400, 700, 800) -- used as the global default font
Instrument Serif (italic only) -- used for italic accent text in the About section
In index.css, set the global font family:


* { font-family: 'Almarai', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif; }
In tailwind.config.js, extend:

colors.primary: #DEDBC8 (warm cream, used for all primary text and accents)
fontFamily.serif: ['"Instrument Serif"', 'serif']
COLOR SYSTEM

Background: black (#000000) globally, #101010 for the About card, #212121 for Features cards
Primary text color: #E1E0CC (applied via inline style, slightly different from Tailwind primary)
Tailwind primary: #DEDBC8 (used for utility classes like text-primary, text-primary/70)
Gray text: text-gray-400, text-gray-500
Navbar link color: rgba(225, 224, 204, 0.8) with hover: #E1E0CC
CUSTOM CSS UTILITIES (index.css)

Two SVG noise texture utilities:

.noise-overlay: fractal noise (baseFrequency: 0.85, numOctaves: 3) used as overlay on hero video
.bg-noise: fractal noise (baseFrequency: 0.9, numOctaves: 4) used as subtle background in Features section
Both use inline SVG data URIs with feTurbulence filter.

SECTION 1: HERO

Full viewport height (h-screen). The entire section has p-4 md:p-6 padding creating an inset effect. Inside is a container with rounded-2xl md:rounded-[2rem] and overflow-hidden.

Background video:

URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4
autoPlay loop muted playsInline, object-cover, fills entire container
Noise overlay on top: .noise-overlay with opacity-[0.7] mix-blend-overlay pointer-events-none
Gradient overlay: bg-gradient-to-b from-black/30 via-transparent to-black/60
Navbar:

Absolutely positioned at top center
Black background pill that hangs from top edge: bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8
5 nav items: "Our story", "Collective", "Workshops", "Programs", "Inquiries"
Text size: text-[10px] sm:text-xs md:text-sm
Gap between items: gap-3 sm:gap-6 md:gap-12 lg:gap-14
Link color: rgba(225, 224, 204, 0.8), hover: #E1E0CC (inline styles)
Hero Content (bottom-aligned):

Absolutely positioned at bottom: absolute bottom-0 left-0 right-0
12-column grid: left 8 columns for heading, right 4 columns for text + button
Giant heading "Prisma" using WordsPullUp component:
Responsive sizes: text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]
font-medium leading-[0.85] tracking-[-0.07em]
Color: #E1E0CC
Has a superscript asterisk (*) on the final "a" of "Prisma": positioned with absolute top-[0.65em] -right-[0.3em] text-[0.31em]
Pull-up animation: each word slides up from y:20 with staggered delay of 0.08s, triggered by useInView
Description paragraph (right column):
"Prisma is a worldwide network of visual artists, filmmakers and storytellers bound not by place, status or labels but by passion and hunger to unlock potential through our unique perspectives."
text-primary/70 text-xs sm:text-sm md:text-base, line-height: 1.2
Framer motion: fade up from y:20, delay 0.5s, custom ease [0.16, 1, 0.3, 1]
CTA Button "Join the lab":
Pill shape: bg-primary rounded-full
Black text, font-medium, text-sm sm:text-base
Right side has a black circle (bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10) containing a white/cream ArrowRight icon
Hover: gap increases (hover:gap-3), circle scales up (group-hover:scale-110)
Framer motion: fade up from y:20, delay 0.7s, same custom ease
SECTION 2: ABOUT

bg-black, padded section with centered content
Inner card: bg-[#101010], centered text, max-w-6xl
Top: small label "Visual arts" in text-primary, text-[10px] sm:text-xs
Main heading uses WordsPullUpMultiStyle component with 3 segments:
"I am Marcus Chen," -- font-normal (Almarai)
"a self-taught director." -- italic font-serif (Instrument Serif italic)
"I have skills in color grading, visual effects, and narrative design." -- font-normal
Container: text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9]
Each word animates in with pull-up effect (y:20 to y:0), staggered at 0.08s delay
Body paragraph below with scroll-linked character opacity animation:
Text: "Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals."
text-[#DEDBC8], text-xs sm:text-sm md:text-base
Each character is individually wrapped in an AnimatedLetter component
Uses useScroll with target offset ['start 0.8', 'end 0.2']
Each character's opacity transitions from 0.2 to 1 based on scroll position, creating a progressive text reveal effect
Character staggering: charProgress = index / totalChars, range [charProgress - 0.1, charProgress + 0.05]
SECTION 3: FEATURES

min-h-screen bg-black, with subtle .bg-noise overlay at opacity-[0.15]
Header text uses WordsPullUpMultiStyle:
Line 1: "Studio-grade workflows for visionary creators." in cream
Line 2: "Built for pure vision. Powered by art." in text-gray-500
Both: text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal
4-column card grid (lg:h-[480px], gap-3 sm:gap-2 md:gap-1):

Each card has staggered entrance animation: scale from 0.95 + fade in, triggered by useInView (once, margin "-100px"), staggered at 0.15s intervals with ease [0.22, 1, 0.36, 1].

Card 1 - Video card: Full video background (URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4), autoPlay loop muted playsInline, object-cover. Bottom text: "Your creative canvas." in #E1E0CC.

Card 2 - "Project Storyboard." (01): bg-[#212121], small image icon at top (https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85, 10x10 sm:12x12 rounded), title with number, 4 checklist items with green Check icons, "Learn more" link with rotated arrow (-45deg).

Card 3 - "Smart Critiques." (02): Same layout as Card 2. Icon: https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85. 3 checklist items about AI analysis, creative notes, tool integrations.

Card 4 - "Immersion Capsule." (03): Same layout. Icon: https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85. 3 checklist items about notification silencing, ambient soundscapes, schedule syncing.

All feature card checklist items use Check icon from lucide-react in text-primary color, with text-gray-400 description text. "Learn more" buttons use ArrowRight rotated -45deg.

SHARED ANIMATION COMPONENTS

WordsPullUp: Splits text by spaces, each word is a motion.span that slides up (y:20 to 0) with staggered delay. Uses useInView (once: true). Supports showAsterisk prop that adds a superscript * after the last character "a" of the final word.

WordsPullUpMultiStyle: Takes an array of {text, className} segments, splits all into individual words preserving per-word className. Same pull-up animation. Words are wrapped in inline-flex flex-wrap justify-center.

RESPONSIVE BREAKPOINTS

The page is fully responsive across mobile, tablet, and desktop. Cards in Features switch from 1-col (mobile) to 2-col (md) to 4-col (lg). Hero text scales from 26vw down to 19vw. Navbar items compress with smaller gaps on mobile. All padding, font sizes, and spacing use Tailwind responsive prefixes (sm/md/lg/xl/2xl).

TECH STACK

Vite + React 18 + TypeScript
Tailwind CSS 3
framer-motion (for all animations: pull-up text, fade-in, scroll-linked opacity, card entrances)
lucide-react (ArrowRight, Check icons)`

/**
 * Drift — 原始创建 prompt 归档
 */
const DRIFT_PROMPT = `Build a single-page landing site for "Drift" -- a calm, ADHD-friendly planner app. Use React + Vite + TypeScript + Tailwind CSS + lucide-react for icons. No other UI libraries.

### Fonts

Import via Google Fonts in \`index.css\`:
- **Inter** (weights 400, 500, 600) -- used as base body font
- **Instrument Serif** (italic only) -- used for the italic word "the stress" in the hero heading

\`\`\`css
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=Inter:wght@400;500;600&display=swap');
\`\`\`

Body: \`font-family: 'Inter', sans-serif;\` with antialiased rendering. \`overflow-x: clip\` on body.

### Color Palette

- Hero overlay: \`bg-black/20\`
- About section background: \`#F6E4CF\`
- Dark text / icons in About: \`#321C04\`
- Light cream (button backgrounds in About): \`#FFF9F2\`
- Muted accent (divider, secondary button bg): \`#D9C4AA\`
- Secondary button hover: \`#CEBA9E\`
- Dark button hover: \`#1F1003\`

### Tailwind Config

Add a custom keyframe \`fade-in-down\` (0%: opacity 0, translateY -8px; 100%: opacity 1, translateY 0) with 0.2s ease-out animation.

---

### SECTION 1: HERO (full viewport height)

- Full-screen section (\`h-screen\`, \`overflow-hidden\`, \`mb-[-25px]\` negative bottom margin so the next section overlaps it slightly)
- **Background video** (autoPlay, muted, loop, playsInline, object-cover, absolute inset-0):
  \`\`\`
  https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260711_090308_1dd0cea7-f9ba-4db4-8147-c7d746061c9e.mp4
  \`\`\`
- **Semi-transparent overlay**: \`absolute inset-0 bg-black/20\`

#### Navbar (centered floating pill)
- Positioned \`absolute top-6 left-1/2 -translate-x-1/2 z-50\`
- White rounded-full pill with shadow-lg containing:
  - Brand text "Drift." (text-lg, font-bold, tracking-tight, text-black)
  - Animated hamburger icon (two lines that animate to an X on click using rotate-45/-rotate-45 with cubic-bezier(0.77,0,0.175,1) easing, 300ms)
- Dropdown (below the pill): white rounded-2xl container with links "Features", "Drift AI", "FAQ". Animated with opacity/scale/translate transitions. Hidden by default, pointer-events-none when closed.

#### Hero Content (bottom-aligned)
- Flex column, \`justify-end\`, padding bottom 12 (md:16)
- **Heading** (centered):
  - Line 1: "Own your time" -- text-5xl / sm:text-7xl / md:text-8xl / lg:text-[96px], font-normal, text-white, leading-[1.1], tracking-tight
  - Line 2: "without *the stress*" -- same sizing. The words "the stress" are rendered in Instrument Serif italic via inline style \`fontFamily: "'Instrument Serif', serif", fontStyle: 'italic'\` inside an \`<em>\` tag with className \`not-italic\`
- **Subtitle**: "Drift is a calm, ADHD-friendly planner that turns scattered ideas into a clear path" -- text-white/80, text-sm md:text-base, font-medium, max-w-[420px], centered
- **CTA Bar** (centered below heading with gap):
  - Container: \`bg-black/25 backdrop-blur-md rounded-xl\`, flex row, items-center, pl-6 pr-1 py-1
  - Desktop text: "No noise. No complicated systems. Just your day, gently sorted." (text-white, text-sm, font-medium, hidden on mobile)
  - Mobile text (sm:hidden): "No noise. Just your day, gently sorted."
  - Button: "Start for free" -- bg-white, text-black, text-sm, font-medium, px-5, py-2.5, rounded-xl, hover:bg-white/90

---

### SECTION 2: ABOUT SECTION

- Background: \`bg-[#F6E4CF]\`
- **Rounded top corners**: \`rounded-t-[25px]\` with \`relative z-10\` (overlaps hero by 25px)
- Padding: py-20 md:py-32, px-6

#### Top Area (centered, max-w-3xl)
- Paragraph: "We craft tools that move with your rhythm, not over it. Designed for ease, presence, and flow." -- text-[#321C04], text-base md:text-lg, text-center, leading-relaxed, max-w-lg
- Two buttons (flex-wrap, centered, gap-4):
  1. **"Say hello"** -- dark pill button (\`bg-[#321C04]\`, \`text-[#FFF9F2]\`, rounded-full). Has a white circle on the left containing a Mail icon (lucide-react, size 16). Text is uppercase, tracking-wide, font-medium.
  2. **"Stay informed"** -- muted pill button (\`bg-[#D9C4AA]\`, \`text-[#321C04]\`, rounded-full). Has a white circle on the left containing a Plus icon. Same text styling.

#### Decorative Divider
- Full-width flex row with: small circle (w-2 h-2 rounded-full bg-[#D9C4AA]) + 2px gap + horizontal line (flex-1 h-[2px] bg-[#D9C4AA]) + 2px gap + small circle

#### Bottom Area (max-w-6xl, flex-col md:flex-row)
- Left: Custom SVG logo (40x40, viewBox 0 0 256 256, abstract geometric shape with rounded quadrants, fill #321C04) + label "Calm / Amplified" (text-xs, uppercase, tracking-widest, font-semibold, line break between words)
- Right: Large paragraph: "We make AI tools and assistants. But, most importantly, we help you remember what gentle productivity looks like when software moves with you, not over you. We create systems that carry the cognitive weight, so you can attend to what truly counts." -- text-2xl / sm:text-3xl / md:text-4xl / lg:text-[42px], leading-[1.3], font-normal, text-[#321C04]

---

### SECTION 3: FEATURES SECTION (scroll-driven cards)

- **Fixed background image** (behind content, -z-10):
  \`\`\`
  https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260709_082449_46df5cc4-ad98-4541-9236-a2659c1478a4.png&w=1920&q=85
  \`\`\`
- Padding: px-5 md:px-10 lg:px-16, py-20 md:py-40 lg:py-48

#### Layout: CSS Grid on lg+ (400px / xl:460px left column, 1fr right column, gap-24 / xl:gap-48)

#### Left Column (sticky on desktop)
- \`lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between lg:py-32\`
- Heading: "Software that flows with your mind, not over it" -- text-white, text-2xl / sm:text-3xl / lg:text-[46px], leading-[1.2], font-normal
- Feature nav buttons (hidden below lg): list of feature titles as buttons. Active state: \`bg-black/20 text-white\`. Inactive: \`bg-black/20 text-white/40\`. Clicking scrolls to card (smooth, block: center).
- Bottom CTA (hidden below lg): "No noise. No complicated systems. Just your day, gently sorted." + "Start for free" button (same style as hero)

#### Right Column (scrolling cards)
- 3 feature cards with IntersectionObserver:
  - **Active detection** (threshold 0.6): highlights corresponding nav button
  - **Reveal animation** (threshold 0.15): cards slide in from right (translate-x-16 to translate-x-0, opacity 0 to 1, duration-700, ease-out). Once revealed, stays visible.

Each card (\`bg-black/20 backdrop-blur-sm rounded-3xl p-6 md:p-10\`):
- Same SVG logo (40x40, fill rgba(255,255,255,0.8))
- Title (text-white, text-xl md:text-2xl, font-medium)
- Video (aspect-video, rounded-2xl, overflow-hidden, bg-black/30, autoPlay/muted/loop/playsInline)
- Description (text-white/60, font-medium, text-sm md:text-base, leading-relaxed)

**Feature data:**

1. Title: "Built for ease, not urgency"
   Description: "Drift strips away the noise that makes organizing feel draining. Every surface is made to be soft, quiet, and intuitive so you can move forward, not get stuck decoding."
   Video: \`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_102608_5fa1187d-9ac6-44fb-82ab-54376200abc0.mp4\`

2. Title: "The gentlest way to start"
   Description: "Beginning your day should feel natural, not daunting. Drift eases you into motion with subtle cues and a quiet view of what deserves your energy right now."
   Video: \`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260625_174131_395bc785-bb21-4e65-abf6-27c56f0764b6.mp4\`

3. Title: "Deep, undivided focus"
   Description: "No interruptions, no clutter. Drift holds you in the present task with a stripped-back layout that softens all else until you are truly ready to shift."
   Video: \`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260525_052706_d2e390fd-1846-4fe7-a4d8-8d2f1c875358.mp4\`

---

### SVG Logo (used in About + Feature cards)

\`\`\`svg
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256" fill="none">
  <path d="M 256 256 L 178 256 C 150.386 256 128 233.614 128 206 L 128 256 L 0 256 L 0 192 C 0 156.654 28.654 128 64 128 C 99.346 128 128 156.654 128 192 L 128 128 L 256 128 Z M 78 0 C 105.614 0 128 22.386 128 50 L 128 0 L 256 0 L 256 64 C 256 99.346 227.346 128 192 128 C 156.654 128 128 99.346 128 64 L 128 128 L 0 128 L 0 0 Z" fill="#321C04" />
</svg>
\`\`\`

---

### File Structure

\`\`\`
src/
  App.tsx          -- Hero section + renders AboutSection + FeaturesSection
  main.tsx         -- ReactDOM render
  index.css        -- Font imports + Tailwind directives + body styles
  components/
    Navbar.tsx     -- Floating pill navbar with animated hamburger
    AboutSection.tsx -- Cream-colored about section
    FeaturesSection.tsx -- Dark features with sticky left + scrolling cards
\`\`\``

/**
 * Vanguard — 原始创建 prompt 归档
 */
const VANGUARD_PROMPT = `Build a fullscreen hero landing page for a creative agency called "VANGUARD" using React, Tailwind CSS, and Vite. The page should be a single viewport-height section with a looping background video and all content overlaid on top.

**Background video:**
Use this exact CloudFront URL as a fullscreen \`<video>\` element with \`autoPlay\`, \`muted\`, \`loop\`, and \`playsInline\` attributes, set to \`object-cover\` to fill the entire viewport:
\`\`\`
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4
\`\`\`

**Fonts (loaded in index.html):**
1. "FSP DEMO - PODIUM Sharp 4.11" from \`https://db.onlinewebfonts.com/c/8b75d9dcff6a48c35a46656192adf019?family=FSP+DEMO+-+PODIUM+Sharp+4.11\` -- used for the brand name and main heading. Create a \`.font-podium\` utility class for it and register it in tailwind.config.js as \`fontFamily.podium\`.
2. "Inter" from Google Fonts (weights 400, 500, 600, 700) -- used for body text, nav links, stats, and CTAs. Register it in tailwind.config.js as \`fontFamily.inter\`.

**Icons:** Use \`lucide-react\` for all icons: \`ArrowUpRight\`, \`Award\`, \`Crown\`, and \`X\`.

**Navbar:**
- Horizontal bar at the top with responsive padding (\`px-6 sm:px-10 lg:px-16\`, \`py-5 lg:py-7\`).
- Left: brand name "VANGUARD" in \`font-podium\`, white, bold, uppercase, \`text-2xl sm:text-3xl\`, \`tracking-wider\`.
- Center (hidden below \`md\`): four nav links -- "Projects", "Studio", "Offerings", "Inquire" -- in \`font-inter\`, \`text-sm\`, \`text-white/80\`, \`tracking-widest\`, uppercase, with \`hover:text-white\` transition.
- Right (hidden below \`md\`): a "GET IN TOUCH" link with an \`ArrowUpRight\` icon, styled as a bordered button (\`border border-white/30 hover:border-white/60\`, \`px-6 py-3\`, \`text-xs\`, \`tracking-widest\`, uppercase, \`hover:bg-white/10\`).
- Right (visible below \`md\`): a hamburger button made of three white \`div\` bars (\`w-6 h-0.5\`, \`w-6 h-0.5\`, \`w-4 h-0.5\` with \`space-y-1.5\`).

**Mobile Menu Overlay (below \`md\` only):**
- Fixed fullscreen overlay (\`fixed inset-0 z-50\`) with \`bg-black/95 backdrop-blur-sm\`.
- Toggles visibility via React \`useState\` -- when open: \`opacity-100 visible\`, when closed: \`opacity-0 invisible\`, with \`transition-all duration-500\`.
- Header row matches the navbar: brand name on left, \`X\` close icon on right.
- Centered vertically: each of the 4 nav links rendered in \`font-podium\`, \`text-4xl sm:text-5xl\`, white, uppercase, with staggered entrance animations using inline \`style\` -- each item gets \`transitionDelay: i * 80 + 100ms\`, \`opacity\` and \`translateY(20px)\` transitions based on the open state.
- Below the links: a "GET IN TOUCH" bordered button with the same staggered animation pattern.
- All links call \`setMenuOpen(false)\` on click.

**Hero Content (vertically centered, left-aligned):**
All hero elements use staggered \`animate-fade-up\` animations (defined in CSS as \`@keyframes fade-up\` translating from \`translateY(30px), opacity:0\` to \`translateY(0), opacity:1\` over \`0.8s ease-out\`). Each successive element has an additional \`0.2s\` delay. Elements start with \`opacity: 0\` and use \`animation-fill-mode: forwards\`.

1. **Tagline:** A \`Crown\` icon (lucide, \`w-4 h-4\`, \`text-white/70\`) followed by "World-Class Digital Collective" in \`text-white/70\`, \`text-xs sm:text-sm\`, \`font-inter\`, \`tracking-[0.3em]\`, uppercase. Uses \`animate-fade-up\` (no delay). Has \`mb-6 lg:mb-8\`.

2. **Main Heading:** Three lines in \`font-podium\`, white, uppercase, \`leading-[0.92]\`, \`tracking-tight\`, each using \`text-[clamp(2.8rem,8vw,7rem)]\`:
   - "Design."
   - "Disrupt."
   - "Conquer."
   Uses \`animate-fade-up-delay-1\` (0.2s delay).

3. **Subtext:** "We build fierce brand identities" (line break) "that don't just turn heads --" then bold white "they lead." in \`text-white/70\`, \`text-sm sm:text-base\`, \`font-inter\`, \`leading-relaxed\`, \`max-w-md\`. Uses \`animate-fade-up-delay-2\` (0.4s delay). \`mt-6 lg:mt-8\`.

4. **CTA Row:** Uses \`animate-fade-up-delay-3\` (0.6s delay), \`mt-8 lg:mt-10\`, \`flex flex-wrap items-center gap-4 sm:gap-6\`.
   - Black button "SEE OUR WORK" with \`ArrowUpRight\` icon. \`bg-black hover:bg-neutral-900\`, \`px-5 sm:px-7 py-3 sm:py-4\`, \`text-[11px] sm:text-xs\`, \`tracking-widest\`, uppercase. Arrow has \`group-hover:translate-x-0.5 group-hover:-translate-y-0.5\` transition.
   - Beside it (hidden on mobile, \`hidden sm:flex\`): an \`Award\` icon (\`w-8 h-8\`, \`text-white/50\`) with two lines of text: "Top-Rated" / "Brand Studio" in \`text-white/60\`, \`text-xs\`, \`tracking-wider\`, uppercase.

5. **Stats Row:** Uses \`animate-fade-up-delay-4\` (0.8s delay), \`mt-8 sm:mt-10 lg:mt-14\`, \`flex flex-wrap gap-6 sm:gap-12 lg:gap-16\`. Three stats:
   - "250+" / "Brands Transformed"
   - "95%" / "Client Retention"
   - "10+" / "Years in the Game"
   Values in \`font-inter\`, white, \`text-2xl sm:text-4xl lg:text-5xl\`, bold, \`tracking-tight\`. Labels in \`text-white/50\`, \`text-[9px] sm:text-xs\`, \`tracking-widest\`, uppercase, \`mt-1\`.

**CSS Animations (defined in index.css under \`@layer utilities\`):**
\`\`\`css
@keyframes fade-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes scale-in {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
\`\`\`
With classes: \`.animate-fade-up\` (0s delay), \`.animate-fade-up-delay-1\` through \`.animate-fade-up-delay-4\` (0.2s increments, starting \`opacity: 0\`), \`.animate-fade-in\`, \`.animate-fade-in-delay\`.

**Responsive behavior:**
- Full layout is mobile-first with breakpoints at \`sm\` (640px), \`md\` (768px), and \`lg\` (1024px).
- Nav links and "GET IN TOUCH" button show at \`md\`+; hamburger shows below \`md\`.
- Award badge hides on mobile (\`hidden sm:flex\`).
- All text sizes, paddings, gaps, and margins scale up through \`sm:\` and \`lg:\` prefixes.
- Stats and CTA row use \`flex-wrap\` to prevent overflow on small screens.

Make everything fully mobile responsive. Use a single \`App.tsx\` component with \`useState\` for the menu toggle. No routing needed.`

/**
 * Smith Portfolio — 原始创建 prompt 归档
 */
const SMITH_PROMPT = `Prompt to recreate this landing page:

Build a single-page dark portfolio landing page using React + Vite + Tailwind CSS + TypeScript + GSAP + Framer Motion + hls.js.

---

## Global Design System

### Fonts
Google Fonts import: Inter (300–700) and Instrument Serif (italic, 400).
- --font-body: 'Inter', sans-serif → Tailwind font-body
- --font-display: 'Instrument Serif', serif → Tailwind font-display

### CSS Custom Properties (HSL, no hsl() wrapper — Tailwind adds it)
--bg: 0 0% 4%;
--surface: 0 0% 8%;
--text: 0 0% 96%;
--muted: 0 0% 53%;
--stroke: 0 0% 12%;
--accent: 0 0% 96%;

### Tailwind Custom Colors
bg: "hsl(var(--bg))",
surface: "hsl(var(--surface))",
"text-primary": "hsl(var(--text))",
muted: "hsl(var(--muted))",
stroke: "hsl(var(--stroke))",

### Accent Gradient
linear-gradient(90deg, #89AACC 0%, #4E85BF 100%) — used on logo ring, hover borders, progress bars. CSS utility class .accent-gradient.

### Custom Animations (in index.css)
- @keyframes scroll-down — translateY(-100%) → translateY(200%), 1.5s ease-in-out infinite
- @keyframes role-fade-in — opacity 0 + translateY(8px) → opacity 1 + translateY(0), 0.4s ease-out
- @keyframes gradient-shift — background-position 0% 50% → 100% 50% → 0% 50%, 6s ease infinite (for animated gradient borders)

### Forced dark theme — no light mode toggle. body gets bg-bg text-text-primary.

---

## Page Structure (Index.tsx)

{isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

---

## Section 1: Loading Screen

Full-screen overlay (fixed inset-0 z-[9999] bg-bg). Uses requestAnimationFrame counter from 000→100 over 2700ms.

- Top-left: "Portfolio" label — text-xs text-muted uppercase tracking-[0.3em]. Animates y:-20→0, opacity 0→1.
- Center: Rotating words ["Design", "Create", "Inspire"] cycling every 900ms. AnimatePresence mode="wait" with y:20→0→-20 transitions. text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80.
- Bottom-right: Counter display — text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums. Shows String(count).padStart(3, "0").
- Bottom progress bar: h-[3px] bg-stroke/50, inner div with .accent-gradient, scaleX(count/100) transform, box-shadow: 0 0 8px rgba(137, 170, 204, 0.35).
- On complete (count reaches 100): 400ms delay then calls onComplete.

---

## Section 2: Hero

Full-viewport section with background HLS video and centered content.

### Background Video
- HLS source: https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8
- Uses hls.js — if Hls.isSupported(), create HLS instance; else if native HLS support, set video.src directly.
- Video: autoPlay muted loop playsInline, absolutely positioned and centered with min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2.
- Dark overlay: bg-black/20
- Bottom fade: h-48 bg-gradient-to-t from-bg to-transparent

### Navbar (fixed, floats at top center)
fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4.

Inner pill: inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2. Gets shadow-md shadow-black/10 when scrollY > 100.

Contents (left to right):
1. Logo: 9×9 circle with accent gradient border (reverses direction on hover). Inner bg-bg circle with "JA" in font-display italic text-[13px]. Scales 110% on hover.
2. Divider: w-px h-5 bg-stroke mx-1 (hidden on mobile)
3. Nav links: ["Home", "Work", "Resume"] — text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2. Active: text-text-primary bg-stroke/50. Inactive: text-muted hover:text-text-primary hover:bg-stroke/50.
4. Divider
5. "Say hi" button: Same size as nav links. On hover, shows accent gradient border behind (using absolute span with inset: -2px). Inner content wrapped in bg-surface rounded-full backdrop-blur-md. Includes "↗" arrow.

### Hero Content (centered, z-10)
- Eyebrow: text-xs text-muted uppercase tracking-[0.3em] mb-8 — "COLLECTION '26". Class blur-in.
- Name: text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6 — "Michael Smith". Class name-reveal.
- Role line: "A {role} lives in Chicago." — roles cycle every 2s through ["Creative", "Fullstack", "Founder", "Scholar"]. Role word uses font-display italic text-text-primary animate-role-fade-in inline-block with key={roleIndex} for re-triggering animation.
- Description: text-sm md:text-base text-muted max-w-md mb-12 — "Designing seamless digital interactions by focusing on the unique nuances which bring systems to life."
- CTA Buttons (inline-flex gap-4):
  - "See Works": Solid button. Default: bg-text-primary text-bg. Hover: bg-bg text-text-primary with accent gradient border ring.
  - "Reach out...": Outlined button. Default: border-2 border-stroke bg-bg text-text-primary. Hover: border-transparent with accent gradient border ring.
  - Both: rounded-full text-sm px-7 py-3.5 hover:scale-105.

### GSAP Entrance
Timeline with ease: "power3.out":
- .name-reveal: opacity 0→1, y 50→0, duration 1.2s, delay 0.1s
- .blur-in: opacity 0→1, filter blur(10px)→blur(0px), y 20→0, duration 1s, stagger 0.1, delay 0.3s

### Scroll Indicator
Bottom-center, text-xs text-muted uppercase tracking-[0.2em] "SCROLL" label above a w-px h-10 bg-stroke line with animated highlight using .animate-scroll-down.

---

## Section 3: Selected Works

bg-bg py-12 md:py-16. Inner: max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16.

### Header
Framer Motion whileInView — opacity 0→1, y 30→0, duration 1s, ease [0.25,0.1,0.25,1], viewport once margin "-100px".
- Eyebrow: w-8 h-px bg-stroke + "Selected Work" text-xs text-muted uppercase tracking-[0.3em]
- Heading: "Featured *projects*" — italic word in font-display italic
- Subtext: "A selection of projects I've worked on, from concept to launch."
- "View all work" button (desktop only, hidden md:inline-flex) — rounded-full with gradient hover border ring + right arrow

### Bento Grid
grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6. Column spans alternate: 7/5/5/7.

4 project cards with titles: Automotive Motion, Urban Architecture, Human Perspective, Brand Identity.

Each card: bg-surface border border-stroke rounded-3xl with aspect ratios. Contains:
- Background image with object-cover group-hover:scale-105
- Halftone overlay: radial-gradient(circle, #000 1px, transparent 1px) at 4×4px, opacity-20 mix-blend-multiply
- Hover: bg-bg/70 opacity-0→1 + backdrop-blur-lg
- Hover label: pill with animated gradient border, white bg, "View — *Title*" (title in font-display italic)

---

## Section 4: Journal

bg-bg py-16 md:py-24. Same header pattern (eyebrow + "Recent *thoughts*" + subtext + "View all" button).

4 journal entries displayed as horizontal pills (rounded-[40px] sm:rounded-full) with titles, images, read times, and dates.

Each entry: flex items-center gap-6 p-4 bg-surface/30 hover:bg-surface border border-stroke.

---

## Section 5: Explorations (Parallax Gallery)

min-h-[300vh] section for scroll-driven parallax.

### Layer 1: Pinned Center (z-10)
h-screen div pinned with GSAP ScrollTrigger.create({ pin: contentRef, pinSpacing: false }).
- Eyebrow: "Explorations"
- Heading: "Visual *playground*"
- Subtext + Dribbble button

### Layer 2: Parallax Columns (z-20, absolute)
grid grid-cols-2 gap-12 md:gap-40 inside max-w-[1400px].

6 items split into 2 columns with GSAP scroll-driven parallax movement.
Cards: aspect-square max-w-[320px], with rotation and lightbox on click.

---

## Section 6: Stats

bg-bg py-16 md:py-24. 3-column grid with stats: 20+ Years Experience, 95+ Projects Done, 200% Satisfied Clients.

---

## Section 7: Contact / Footer

bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden.

### Background Video
Same HLS source as hero, but flipped vertically (scale-y-[-1]). Heavier overlay: bg-black/60.

### GSAP Marquee
"BUILDING THE FUTURE • " repeated 10×. GSAP xPercent: -50, duration 40, ease "none", repeat -1.

### CTA
Email button: mailto:hello@michaelsmith.com with gradient hover border ring.

### Footer Bar
Social links [Twitter, LinkedIn, Dribbble, GitHub] + Green pulsing dot + "Available for projects"

---

## Dependencies
gsap, framer-motion, hls.js, react-router-dom, tailwindcss-animate

Add smooth scroll nav and page transitions.`

/**
 * Bloom — 原始创建 prompt 归档
 */
const BLOOM_PROMPT = `Create a full-screen hero landing page for "Bloom" — an AI-powered plant/floral design platform. The design uses a liquid glass morphism aesthetic over a looping video background.

Background
Full-screen autoplaying, looping, muted video background: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4
Video covers entire viewport with object-cover, sits at z-0. All content floats above at z-10.

Fonts
Display/Body: Poppins (Google Fonts) — used for headings and body text
Serif accent: Source Serif 4 (Google Fonts) — used only for italic/emphasis text inside headings (e.g., <em>, <i>, .italic inside h1-h3)
Headings use font-weight: 500

Color Palette
Strict grayscale only — all CSS variables are 0 0% X% HSL values
Text is text-white, text-white/80, text-white/60, text-white/50 for hierarchy
No colored accents whatsoever

Liquid Glass CSS (two tiers)
Define under @layer components:

.liquid-glass (light)
background: rgba(255,255,255,0.01);
background-blend-mode: luminosity;
backdrop-filter: blur(4px);
border: none;
box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
position: relative; overflow: hidden;
::before pseudo-element: gradient border using linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%, transparent 40%, transparent 60%, rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%) with padding: 1.4px, masked via -webkit-mask-composite: xor; mask-composite: exclude;

.liquid-glass-strong (heavy, for CTA/panels)
Same structure but backdrop-filter: blur(50px), box-shadow: 4px 4px 4px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.15), and ::before uses 0.5/0.2 alpha instead of 0.45/0.15.

Layout — Two-Panel Split
Flex row, min-h-screen. Left panel w-[52%], right panel w-[48%] (hidden on mobile lg:flex).

Left Panel
Has a liquid-glass-strong overlay (absolute inset-4 lg:inset-6 rounded-3xl)
Nav: Logo image (/logo.png, 32×32) + "bloom" text (semibold, 2xl, tracking-tighter, white) on left. "Menu" button with Menu icon on right, liquid-glass pill.
Hero center (flex-1, centered):
Logo image again (80×80)
h1: "Innovating the / spirit of bloom AI" — text-6xl lg:text-7xl, tracking-[-0.05em], white. The italic part uses font-serif text-white/80
CTA button: "Explore Now" with Download icon in a w-7 h-7 rounded-full bg-white/15 circle. Button is liquid-glass-strong, rounded-full, hover:scale-105 active:scale-95
Three pills: "Artistic Gallery", "AI Generation", "3D Structures" — liquid-glass, rounded-full, text-xs text-white/80
Bottom quote:
"VISIONARY DESIGN" label (text-xs tracking-widest uppercase text-white/50)
Quote: "We imagined a realm with no ending." — mixed font-display/font-serif italic spans
Author: "MARCUS AURELIO" with horizontal lines on each side

Right Panel (desktop only)
Top bar: Social icons (Twitter, LinkedIn, Instagram) in a liquid-glass pill with ArrowRight. Account button with Sparkles icon button, both liquid-glass.
Community card: Small liquid-glass card (w-56), "Enter our ecosystem" title + description
Bottom feature section (mt-auto): Outer liquid-glass container with rounded-[2.5rem]
Two side-by-side cards: "Processing" (Wand2 icon) and "Growth Archive" (BookOpen icon), each liquid-glass rounded-3xl
Bottom card: flower image thumbnail (from @/assets/hero-flowers.png, 96×64), "Advanced Plant Sculpting" title + description, and a "+" button. All liquid-glass.

Icons
All from lucide-react: Sparkles, Download, Wand2, BookOpen, ArrowRight, Twitter, Linkedin, Instagram, Menu

Key Details
All interactive elements: hover:scale-105 transition-transform
Social icon links: text-white hover:text-white/80 transition-colors
Icon containers: w-8 h-8 rounded-full bg-white/10 flex items-center justify-center
No border classes anywhere — glass effect handles all borders via ::before
border-radius token: --radius: 1rem`

/**
 * Cosmos — 原始创建 prompt 归档
 */
const COSMOS_PROMPT = `Build Prompt: Cinematic Space-Travel Landing Page
Build a single-page landing site with two full-height sections (Hero + Capabilities), both using looping background videos with custom JS crossfade, a shared liquid-glass design system, and Framer Motion entrance animations.

Tech stack (pinned, CDN-only)
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>
<script src="https://unpkg.com/framer-motion@11.11.17/dist/framer-motion.js"></script>
<script>window.Motion = window.FramerMotion;</script>
Body is bg: #000. Page is a React app mounted on #root, all components are <script type="text/babel"> files exporting via window.X = X.

Fonts
Google Fonts:

family=Instrument+Serif:ital@0;1&family=Barlow:wght@300;400;500;600
Tailwind config adds:

font-heading → 'Instrument Serif', serif (always italic in use)
font-body → 'Barlow', sans-serif
Default border radius override: DEFAULT: "9999px" (so bare rounded → pill).

Liquid-glass utilities (exact CSS, in a <style> block)
Two variants — .liquid-glass (subtle, for nav/chips/cards) and .liquid-glass-strong (heavier blur, for primary CTA):

.liquid-glass {
background: rgba(255,255,255,0.01);
background-blend-mode: luminosity;
backdrop-filter: blur(4px);
-webkit-backdrop-filter: blur(4px);
border: none;
box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
position: relative;
overflow: hidden;
}
.liquid-glass::before {
content: "";
position: absolute; inset: 0;
border-radius: inherit;
padding: 1.4px;
background: linear-gradient(180deg,
rgba(255,255,255,0.45) 0%,
rgba(255,255,255,0.15) 20%,
rgba(255,255,255,0) 40%,
rgba(255,255,255,0) 60%,
rgba(255,255,255,0.15) 80%,
rgba(255,255,255,0.45) 100%);
-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
-webkit-mask-composite: xor;
mask-composite: exclude;
pointer-events: none;
}
.liquid-glass-strong { /* same but: */
backdrop-filter: blur(50px);
box-shadow: 4px 4px 4px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.15);
}
.liquid-glass-strong::before { /* same but 0.5 / 0.2 / 0 / 0 / 0.2 / 0.5 stops */ }
FadingVideo component (custom JS crossfade, no CSS transitions)
Wraps a <video autoPlay muted playsInline preload="auto"> starting at opacity: 0. Behavior:

FADE_MS = 500, FADE_OUT_LEAD = 0.55 seconds.
fadeTo(target, duration) uses requestAnimationFrame; reads current opacity from http://video.style.opacity so each new fade resumes from wherever the last one left off. Each call calls cancelAnimationFrame on the previous rAF id before starting.
On loadeddata: set opacity 0, play(), fadeTo(1).
On timeupdate: if fadingOutRef not set and duration - currentTime <= 0.55 and > 0, flip the ref and fadeTo(0).
On ended: set opacity 0; after setTimeout(100ms) reset currentTime = 0, play(), clear fadingOutRef, fadeTo(1).
loop attribute is OFF (we implement looping manually via ended).
Cleanup on unmount: cancel rAF, remove listeners.
Section 1 — Hero (full viewport, black bg)
Background video (120% width/height, top-aligned, centered horizontally — focal point is the top of frame):

src: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4
class: absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0
style: { width: "120%", height: "120%" }
No overlay. z-10 layer holds: Navbar → Hero content (flex-1, centered) → Partners.

Navbar (fixed top-4, px-8 / lg:px-16, z-50)
Left: 48×48 liquid-glass circle with italic serif lowercase "a" (Instrument Serif).
Center (desktop only): liquid-glass pill, px-1.5 py-1.5, holding 5 text links — Home, Voyages, Worlds, Innovation, Plan Launch — each px-3 py-2 text-sm font-medium text-white/90 font-body. Followed by a white pill button Claim a Spot + ArrowUpRight icon (bg-white text-black, whitespace-nowrap).
Right: 48×48 invisible spacer to balance logo.
Hero content (centered, pt-24 px-4)
All animated with Framer Motion, initial: {filter: blur(10px), opacity: 0, y: 20}, easeOut.

Badge (delay 0.4s): liquid-glass rounded-full pill. Contains white pill chip "New" (bg-white text-black px-3 py-1 text-xs font-semibold) + text "Maiden Crewed Voyage to Mars Arrives 2026" (text-sm text-white/90, pr-3).
Headline — BlurText component (word-by-word animation, see below). Text: "Venture Past Our Sky Across the Universe". Classes: text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl justify-center tracking-[-4px].
Subheading (delay 0.8s, mt-4 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight): "Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough engineering bring deep-space exploration within reach—secure and extraordinary."
CTAs (delay 1.1s, flex items-center gap-6 mt-6):
Primary: liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white with "Start Your Voyage" + ArrowUpRight (h-5 w-5).
Secondary: bare text link, "View Liftoff" + Play icon (h-4 w-4, filled).
Stats row (delay 1.3s, flex items-stretch gap-4 mt-8): two liquid-glass cards, p-5 w-[220px] rounded-[1.25rem], each:
Top: white 28×28 outline SVG icon (clock for card 1, globe for card 2).
Bottom: large number in Instrument Serif italic white (text-4xl tracking-[-1px] leading-none): "34.5 Min" / "2.8B+". Label below (text-xs text-white font-body font-light mt-2): "Average Videos Watch Time" / "Users Across the Globe".
Partners (bottom of hero, delay 1.4s)
flex flex-col items-center gap-4 pb-8:

liquid-glass rounded-full chip (px-3.5 py-1 text-xs font-medium text-white): "Collaborating with top aerospace pioneers globally".
Row of 5 names in Instrument Serif italic white, text-2xl md:text-3xl tracking-tight, gap-12/md:gap-16: Aeon · Vela · Apex · Orbit · Zeno.
BlurText component (word-by-word blur-in)
IntersectionObserver triggers on 10% visibility. Splits text by spaces. Each word is a motion.span with:

initial: {filter: 'blur(10px)', opacity: 0, y: 50}
3-step keyframes to {filter: 'blur(5px)', opacity: 0.5, y: -5} → {filter: 'blur(0px)', opacity: 1, y: 0}
duration: 0.7 (stepDuration 0.35 × 2), times: [0, 0.5, 1], ease: easeOut
Stagger: delay = (i * 100) / 1000 seconds
display: inline-block, marginRight: 0.28em (not non-breaking-space — letter-spacing -4px eats nbsp).
Parent <p> is display: flex; flexWrap: wrap; justifyContent: center; rowGap: 0.1em.
Section 2 — Capabilities (min-h-screen, black bg)
Background video (full-bleed, no 120% scale):

src: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4
class: absolute inset-0 w-full h-full object-cover z-0
Same FadingVideo treatment. No overlay.

Content (relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen):

Header (mb-auto):

Kicker: text-sm font-body text-white/80 mb-6 → // Capabilities
Heading: font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]:
Production
evolved
(two lines, <br/> between).
Three cards (grid grid-cols-1 md:grid-cols-3 gap-6 mt-16): each is liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col.

Top row of each card (flex items-start justify-between gap-4):

Left: 44×44 nested liquid-glass square (rounded-[0.75rem]) with a white Material Icons SVG (fill currentColor, h-6 w-6 text-white). Use random Material icons — these three used:
AI Scenery: image icon — path M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21H5Zm1-4h12l-3.75-5-3 4L9 13l-3 4Z
Batch Production: movie icon — path M4 6.47 5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.89-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4Z
Smart Lighting: lightbulb icon — path M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1Zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7Z
Right: flex flex-wrap justify-end gap-1.5 max-w-[70%] — 4 small liquid-glass pill tags (rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap):
Card 1: Natural Context · Photo Realism · Infinite Settings · Eco-Vibe
Card 2: Scale Fast · Visual Consistency · Time Saver · Ready to Post
Card 3: Ray Tracing · Physical Shadows · Studio Quality · Sunlight Sync
Middle: flex-1 spacer.

Bottom of each card (mt-6):

Title h3: font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none — "AI Scenery" / "Batch Production" / "Smart Lighting"
Body p (mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]):
"AI analyzes your product to create indistinguishable natural environments — from Icelandic cliffs to misty forests."
"Style your entire product line in minutes. Create a unified visual identity for catalogues and social media without weeks of retouching."
"Automatic lighting and material adjustment. Achieve flawless integration with realistic shadows and sunlight."
Icons (inline lucide-style SVGs, currentColor stroke)
ArrowUpRight: 24×24, M7 17L17 7 + M7 7h10v10, strokeWidth 2, round caps.
Play: 24×24 filled polygon 6 4 20 12 6 20 6 4.
Notes
All text white; no green, no gradient backgrounds.
No CSS transitions on the videos — fades must be rAF-driven per the FadingVideo spec.
Videos are full-bleed with no dark overlay; contrast comes from the liquid-glass chrome.
Framer Motion dev warnings about list keys can be suppressed with a console.error filter wrapper — they're benign.
The detailed prompt above captures every element, style, animation, video URL, and font to recreate the landing page exactly.`

/**
 * Serene — 原始创建 prompt 归档
 */
const SERENE_PROMPT = `**Build a React + Vite + Tailwind CSS landing page with two full-screen sections for a luxury beauty/wellness brand called "Serene". Use TypeScript.**

---

### Fonts (loaded via Google Fonts in index.html)

Load these three font families from Google Fonts:
- **Dancing Script** (weights: 400, 500, 600, 700) -- used for the brand logo
- **Instrument Serif** (italic: 0, 1) -- used for the hero heading and the quote text
- **Inter** (weights: 300, 400, 500, 600, 700, 800, 900) -- used for body text, navbar links, and buttons

\`\`\`html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
\`\`\`

---

### Global CSS (index.css)

\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: #0a0a0c;
  overflow-x: hidden;
}

.font-inter {
  font-family: 'Inter', sans-serif;
}

.font-instrument {
  font-family: 'Instrument Serif', serif;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.text-glow {
  text-shadow: 0 0 40px rgba(255, 255, 255, 0.4), 0 0 80px rgba(255, 255, 255, 0.2), 0 0 120px rgba(255, 255, 255, 0.1);
}

.button-glow {
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.1);
}
\`\`\`

---

### App Layout (App.tsx)

The wrapper div has \`bg-[#0a0608]\`. It renders \`<Hero />\` followed by \`<QuoteSection />\`.

---

### SECTION 1: Hero

A full-viewport (\`h-screen\`) section with:

1. **Background video** -- autoplays, muted, loops, playsInline, covers the full section with \`object-cover\`:
   \`\`\`
   https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260613_180732_a54afbf6-b30d-470e-861f-669871f09f67.mp4
   \`\`\`

2. **Dark overlay** -- \`absolute inset-0 bg-black/20\`

3. **Fixed Navbar** -- \`fixed top-0 left-0 right-0 z-50\`, flex row, space-between, \`px-6 md:px-12 py-5\`:
   - **Left**: Brand name "Serene" in Dancing Script cursive, white, \`text-2xl md:text-3xl\`
   - **Center (desktop only, hidden on mobile)**: Navigation links -- "About", "Services", "Journal", "Contact" -- \`text-white/80 hover:text-white text-sm tracking-wide\`, spaced \`gap-12\`
   - **Right (desktop)**: White pill button "Book a consultation"
   - **Right (mobile)**: Hamburger icon (3 lines, animated to X on open). Uses cubic-bezier(0.22,1,0.36,1) easing. On open: top line rotates 45deg + translates down 9px; middle line fades/scales to 0; bottom line rotates -45deg + translates up 9px.
   - **Mobile menu**: Slide-in panel from right, \`w-[85%] max-w-[340px]\`, \`bg-[#0a0608]/95 backdrop-blur-xl border-l border-white/10\`. Links stagger-animate in (opacity + translateX, 75ms delay between each, starting at 150ms). Button at bottom with 450ms delay.

4. **Center content** -- absolutely positioned, flex column, centered, with \`-mt-[120px]\` to shift up:
   - **Heading**: \`font-instrument text-white text-[36px] md:text-7xl lg:text-[110px] leading-[0.9] tracking-tight text-center text-glow\` -- text: "Gentle touch. Radiant presence."
   - **Subtext**: \`text-white/70 text-sm md:text-base text-center mt-5 md:mt-7 max-w-xl\` -- text: "Expert beauty and holistic wellness, delivered with warmth and intention."
   - **CTA Button**: White pill button "Begin your renewal", \`mt-6 md:mt-9\`

5. **Sound indicator (desktop only)** -- bottom-left corner (\`bottom-8 left-8\`), a 40px circle with \`border border-white/20\` containing a small horizontal bar, next to two lines of text: "Experience" / "with sound" in \`text-white/60 text-xs\`

**Button component**: \`bg-white text-black px-8 py-3.5 rounded-full font-medium text-sm tracking-wide hover:bg-white/90 transition-all duration-300 button-glow\`

---

### SECTION 2: Quote Section (with parallax scroll animations)

A full-viewport (\`h-screen\`) section with:

**Background**: CSS linear-gradient top to bottom:
\`\`\`
#010A17 0% -> #0A4267 30% -> #20658E 60% -> #6BADC4 100%
\`\`\`

**Animated layers (requestAnimationFrame-based parallax with lerp smoothing):**

The animation uses a \`progress\` value (0 to 1) based on how far the section has scrolled through the viewport:
\`\`\`
progress = clamp(0, 1, (windowHeight - rect.top) / (windowHeight + rect.height))
\`\`\`

1. **Rainbow image** -- full-width, positioned \`absolute inset-x-0 top-0 z-30\`. Parallax: moves vertically from +120px to -160px based on scroll progress. Lerp factor: 0.06.
   \`\`\`
   https://soft-zoom-63098134.figma.site/_assets/v11/8d520a7515d06cbfc403d0125e3d05b1a7ccd29c.png
   \`\`\`

2. **Left cloud** -- \`absolute left-0 bottom-[10%] z-10\`, hidden on mobile (\`hidden sm:block\`). Width: \`w-[500px] md:w-[650px]\`. Has \`marginLeft: '-50%'\` to let it overflow left. Slides in from -200px on X when in view (progress 0.12-0.92), slides back out when not. Also drifts up (cloudY = progress * -50). Opacity tied to X distance. Lerp factor: 0.04.
   \`\`\`
   https://soft-zoom-63098134.figma.site/_assets/v11/0d6dfd3f90b930f21726f2ed56a3320d79b7a797.png
   \`\`\`

3. **Right cloud** -- same image as left but \`scale-x-[-1]\` (flipped), \`absolute right-0 bottom-[15%] z-10\`. Has \`marginRight: '-75%'\`. Slides in from +200px. Same lerp/timing as left cloud.

4. **Quote content** -- centered, \`z-20\`, \`max-w-4xl\`:
   - **Quote text**: \`font-instrument text-white text-xl sm:text-2xl md:text-4xl lg:text-[42px] leading-[1.45] md:leading-[1.5]\` -- text: "Serene was founded on a belief in beauty that honors your nature. We pursue refined outcomes, considered approaches, and lasting vitality. We spend time learning what matters to you before deciding what serves you best. No rushing, no excess -- just support that lets you feel radiant." (wrapped in curly quotes)
   - **Attribution**: \`mt-6 md:mt-8 text-white/80 text-sm md:text-base tracking-wide\` -- text: "Dr. Mia Callahan -- Founder"

**Key animation implementation detail**: All transforms use \`translate3d\` for GPU acceleration with \`will-change-transform\`. Initial cloud state is \`opacity: 0\` and translated off-screen. The lerp function smoothly interpolates current values toward targets each frame: \`current + (target - current) * factor\`.

---

### Tailwind Config

Default Tailwind config with no extensions -- all custom styling handled via CSS utility classes in index.css.`

/**
 * Velorah — 原始创建 prompt 归档
 */
const VELORAH_PROMPT = `Create a single-page hero section with a fullscreen looping background video, glassmorphic navigation, and cinematic typography. Use React + Vite + Tailwind CSS + TypeScript with shadcn/ui.

Video Background:

Fullscreen <video> element with autoPlay, loop, muted, playsInline
Source URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4
Positioned absolute inset-0 w-full h-full object-cover z-0

Fonts:

Import from Google Fonts: Instrumental Serif (display) and Inter weights 400/500 (body)
CSS variables: --font-display: 'Instrument Serif', serif and --font-body: 'Inter', sans-serif
Body uses var(--font-body), headings use inline fontFamily: "'Instrument Serif', serif"

Color Theme (dark, HSL values for CSS variables):

--background: 201 100% 13% (deep navy blue)
--foreground: 0 0% 100% (white)
--muted-foreground: 240 4% 66% (muted gray)
--primary: 0 0% 100%, --primary-foreground: 0 0% 4%
--secondary: 0 0% 10%, --muted: 0 0% 10%, --accent: 0 0% 10%
--border: 0 0% 18%, --input: 0 0% 18%

Navigation Bar:

relative z-10, flex row, justify-between, px-8 py-6, max-w-7xl mx-auto
Logo: "Velorah®" (® as <sup className="text-xs">), text-3xl tracking-tight, Instrument Serif font, text-foreground
Nav links (hidden on mobile, md:flex): Home (active, text-foreground), Studio, About, Journal, Reach Us — all text-sm text-muted-foreground with hover:text-foreground transition-colors
CTA button: "Begin Journey", liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground, hover:scale-[1.03]

Hero Section:

relative z-10, flex column, centered, text-center, px-6 pt-32 pb-40 py-[90px]
H1: "Where dreams rise through the silence." — text-5xl sm:text-7xl md:text-8xl, leading-[0.95], tracking-[-2.46px], max-w-7xl, font-normal, Instrument Serif. The words "dreams" and "through the silence." wrapped in <em className="not-italic text-muted-foreground"> for color contrast
Subtext: text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed — "We're designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos, we build digital spaces for sharp focus and inspired work."
CTA button: "Begin Journey", liquid-glass rounded-full px-14 py-5 text-base text-foreground mt-12, hover:scale-[1.03] cursor-pointer

Liquid Glass Effect (CSS class .liquid-glass):

.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

Animations (CSS keyframes + classes):

@keyframes fade-rise {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-rise { animation: fade-rise 0.8s ease-out both; }
.animate-fade-rise-delay { animation: fade-rise 0.8s ease-out 0.2s both; }
.animate-fade-rise-delay-2 { animation: fade-rise 0.8s ease-out 0.4s both; }

H1 gets animate-fade-rise
Subtext gets animate-fade-rise-delay
Hero CTA button gets animate-fade-rise-delay-2

Layout: No decorative blobs, radial gradients, or overlays. Minimalist, cinematic, vertically centered hero. The video provides all visual depth.`

/**
 * Vex — 原始创建 prompt 归档
 */
const VEX_PROMPT = `Recreate this hero section exactly. Here are the complete specifications:

Video Background:

Full-screen background video, absolutely positioned, covering the entire viewport (object-cover)
Video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4
Autoplay, loop, muted, playsInline
NO dark overlay, NO gradient overlay, NO semi-transparent layer on top of the video. The video plays raw with no dimming whatsoever.
Typography (CRITICAL - must be applied globally):

Import the Google Font Inter via a <link> tag in index.html:

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
Set the body font-family in CSS to: 'Inter', sans-serif
Apply -webkit-font-smoothing: antialiased and -moz-osx-font-smoothing: grayscale on the body
Also extend the Tailwind config to set fontFamily: { sans: ['Inter', 'sans-serif'] } so all Tailwind font-sans usage picks up Inter automatically
Navbar:

Wrapped in horizontal page padding: px-6 md:px-12 lg:px-16 with pt-6 top padding
The navbar bar itself uses the .liquid-glass class and has rounded-xl, px-4 py-2, flex layout with items-center justify-between
Left: Logo text "VEX" - text-2xl font-semibold tracking-tight
Center (hidden on mobile, visible md+): Links "Story", "Investing", "Building", "Advisory" - text-sm, gap-8, hover transitions to gray-300
Right: "Start a Chat" button - bg-white text-black px-6 py-2 rounded-lg text-sm font-medium, hover to gray-100
Hero Content (Bottom of viewport):

Container: same horizontal padding as navbar, flex column filling remaining height, content pushed to bottom with flex-1 flex flex-col justify-end, bottom padding pb-12 lg:pb-16
On large screens: 2-column grid (lg:grid lg:grid-cols-2 lg:items-end)
Left Column - Main content:

Heading: "Shaping tomorrow\\nwith vision and action." (literal line break between "tomorrow" and "with")

Responsive sizes: text-4xl md:text-5xl lg:text-6xl xl:text-7xl
font-normal, mb-4
Inline style: letterSpacing: '-0.04em'
Character-by-character entrance animation: Each character starts at opacity: 0 and translateX(-18px), then transitions to opacity: 1 and translateX(0). Each character gets a staggered delay calculated as: (lineIndex * lineLength * charDelay) + (charIndex * charDelay) where charDelay = 30ms. The whole animation starts after 200ms initial delay. Each character transition is 500ms.
Spaces render as \\u00A0 (non-breaking space)
Subheading: "We back visionaries and craft ventures that define what comes next."

text-base md:text-lg text-gray-300 mb-5
Fade-in animation: starts at 800ms delay, 1000ms duration
Buttons row: flex-wrap with gap-4

"Start a Chat" - bg-white text-black px-8 py-3 rounded-lg font-medium
"Explore Now" - liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium, hover transitions to white bg + black text
Fade-in animation: starts at 1200ms delay, 1000ms duration
Right Column - Tag:

Aligned to bottom-right on large screens (flex items-end justify-start lg:justify-end)
Glass card: liquid-glass border border-white/20 px-6 py-3 rounded-xl
Text: "Investing. Building. Advisory." - text-lg md:text-xl lg:text-2xl font-light
Fade-in animation: starts at 1400ms delay, 1000ms duration
Liquid Glass CSS (place in global CSS):


.liquid-glass {
  background: rgba(0, 0, 0, 0.4);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.1) 80%, rgba(255,255,255,0.3) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
FadeIn component: A wrapper that starts with opacity: 0 and transitions to opacity: 1 after a configurable delay (ms) using a setTimeout + React state. Transition duration is also configurable. Uses inline transitionDuration style and Tailwind's transition-opacity class.

AnimatedHeading component: Splits text by \\n into lines, then each line into individual characters. Each character is an inline-block <span> with CSS transitions on opacity and transform (translateX). Animation triggers via React state after the initial delay.

Color scheme: Black background, white text, gray-300 for secondary text, white/20 for borders. No purple, no indigo.

Stack: React + TypeScript, Tailwind CSS, Vite. No extra UI libraries needed. Icons from lucide-react if needed (none currently used in the hero).`

/**
 * SkyElite — 原始创建 prompt 归档
 */
const SKYELITE_PROMPT = `Create a premium private jet landing page hero section with the following specifications:

Video Background:
Use this exact CloudFront video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4
Video should autoplay, be muted, loop continuously, and include playsInline attribute
Video covers entire viewport (100vh) using object-cover

Navigation Bar:
Brand name "SkyElite" on the left (text-2xl, font-semibold, text-gray-900)
Desktop menu items (hidden on mobile, visible md:flex): Start, Story, Rates, Benefits, FAQ
Navigation links in gray-900 with hover:text-gray-700 transition
Mobile hamburger menu button using Lucide React icons (Menu/X)
Mobile menu appears as dropdown with white/95 opacity background, backdrop blur, rounded corners, shadow
Max width 7xl, centered with px-8 py-6

Hero Content (centered, -mt-80 to pull up):
Small uppercase label: "PRIVATE JETS" (text-sm, font-semibold, gray-600, tracking-wider, mb-4)
Large two-line heading with overlapping effect:
Line 1: "Premium." (text-6xl md:text-7xl lg:text-8xl, font-normal, text-gray-500, leading-none, tracking-tighter)
Line 2: "Accessible." (same size, color: #202A36, negative margin-top: -12px for overlap)
Subtitle: "Your dedication deserves recognition." (text-lg md:text-xl, gray-600, mb-6, max-w-2xl)
Two call-to-action buttons (gap-4, centered):
"Discover" button: px-4 py-2, rounded-full, bg-gray-300, text-gray-800, font-medium, hover:bg-gray-400
"Book Now" button: px-4 py-2, rounded-full, white text, bg-color #202A36, hover color #1a2229 with smooth transitions

Typography:
Use Inter font (import from Google Fonts: 400, 500, 600, 700 weights)
Apply to entire body via CSS

Technical Setup:
React with TypeScript
Tailwind CSS for styling
Lucide React for icons
useState hook for mobile menu toggle
Full screen height container (h-screen)
Responsive breakpoints: mobile-first, md, lg
All transitions use transition-colors class

Layout Structure:
Outer container: min-h-screen, bg-gray-50
Hero section: relative, h-screen, overflow-hidden
Content wrapper: relative, h-full, flex flex-col
Main content area: flex-1, flex items-center justify-center

Make it clean, modern, and premium-looking with smooth interactions.`

/**
 * Lumora — 原始创建 prompt 归档
 */
const LUMORA_PROMPT = `Create a fullscreen cinematic hero section for a mindfulness/focus app called "Lumora" using React, Tailwind CSS, and Lucide React icons.

## Font

Use **Instrument Serif** (Google Fonts, italic for the logo). Load it in index.html:
\`\`\`
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
\`\`\`

Set \`font-family: 'Instrument Serif', serif\` on html/body. Use \`system-ui, sans-serif\` inline for body text (subtext, buttons, stats, video labels).

---

## Background Video Layer

Stack 4 fullscreen looping videos absolutely positioned. Only the active one has \`opacity-100\`; others have \`opacity-0\`. Transition opacity over 1000ms ease-in-out. Videos autoPlay, muted, loop, playsInline.

**Video URLs (in order):**
1. \`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_081127_0992a171-d3c6-4978-8213-0ec5df8b6d63.mp4\`
2. \`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_092026_dd05b805-ea0f-40b2-8c52-332b88502592.mp4\`
3. \`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_081042_df7202bf-bd80-4b2b-bbc6-1f09ba2870e9.mp4\`
4. \`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_080959_4cac5234-3573-464e-a5b7-76b94b8a7d61.mp4\`

**Labels:** Golden Hour, Still Water, Deep Woods, Quiet Dawn

---

## Transparent PNG Overlay (z-index 1)

Place this image over the videos as an absolutely positioned overlay covering the full viewport:
\`\`\`
https://soft-zoom-63098134.figma.site/_assets/v11/0b4a435b2df2747593c43d7a1c9b4578f7d8d90c.png
\`\`\`

Apply a continuous "train-bob" animation: translateY oscillates between 0 and -6px over 3s ease-in-out infinite, with a constant scale(1.03) to prevent edges from showing during the motion.

---

## Liquid Glass Effect (CSS class \`.liquid-glass\`)

\`\`\`css
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}
\`\`\`

With a \`::before\` pseudo-element for a subtle gradient border:
\`\`\`css
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
\`\`\`

---

## Content Layer (z-index 2) - Flex Column Full Height

### Navigation (top)
- Left: "Lumora" in white, italic, text-xl (sm:text-2xl)
- Right (desktop md+): A \`.liquid-glass\` pill containing nav links ("How It Works", "Features", "Pricing", "Community") in white/90 text-sm with hover to white, plus a solid white "Get Started" button at the end
- Right (mobile): A \`.liquid-glass\` rounded hamburger button using Lucide \`Menu\`/\`X\` icons with a crossfade rotation animation (300ms). The Menu icon rotates out 90deg and scales to 75%; the X icon rotates in from -90deg

### Mobile Menu Overlay (fixed, z-50)
- Backdrop: \`bg-black/60 backdrop-blur-sm\`
- Centered fullscreen panel with staggered entrance (each link delays 50ms more: 100ms, 150ms, 200ms, 250ms, 300ms)
- Links: white text-3xl, translate-y-4 to 0 on open
- "Get Started" button at bottom with scale animation
- Cubic-bezier easing: \`cubic-bezier(0.4,0,0.2,1)\`, duration 500ms

### Hero Content (centered, below nav)
- **Badge**: \`.liquid-glass\` rounded-full pill with text "Over 10,000 minds already finding their clarity"
- **Heading**: "Clarity in an Endlessly / Noisy Universe" (line break after "Endlessly"). Sizes: text-4xl / sm:text-5xl / md:text-7xl / lg:text-[5.5rem], leading-[1.1], max-w-4xl
- **Subtext**: "Rise above the chaos of pings, infinite scrolling, and relentless demands. Discover how to protect your presence and create with intention." max-w-xl, leading-relaxed
- **Email Input**: \`.liquid-glass\` rounded-full pill containing a text input ("Your Best Email") and a solid white "Get Early Access" button. Max-width 320px on mobile, sm:max-w-sm
- **Video Switcher**: Row of 4 text buttons with labels. Active button has solid color + bottom border. Inactive buttons are 50% opacity with transparent border, hover to 80%

### Dark Mode for "Deep Woods" (3rd video, index 2)
When the 3rd video is active, all hero content (badge, heading, subtext, input, video switcher) transitions to dark color \`#182C41\` with 700ms duration. The navbar and bottom stats remain white always.

### Bottom Stats (pushed to bottom via flex-1 spacer)
- Row of stats separated by \`|\` dividers (hidden on mobile): "60+ Deep Sessions", "12,000+ Creators", "4.8 User Satisfaction", "Intentional-First Design"
- text-white/70, text-xs sm:text-sm, system-ui font

---

## Video Switching Logic
- Track \`activeVideo\` state (default 0) and \`isTransitioning\` boolean
- On click, if not already active and not mid-transition, set new active video and start a 1000ms cooldown (matching the CSS crossfade duration)
- During cooldown, ignore additional clicks

---

## Responsive Behavior
- Mobile: Smaller text sizes, tighter padding, hamburger nav, stats wrap naturally
- Tablet/Desktop: Larger heading, more padding, inline nav pill, stats with pipe separators

---

## Section Container
\`\`\`html
<section className="relative w-full h-screen overflow-hidden bg-black">
\`\`\`

Black background prevents flash before videos load. Everything is a single viewport-height section with no scroll.

---

That's the complete specification. The entire app lives in a single \`App.tsx\` component with the CSS in \`index.css\`.`

/**
 * Axion — 原始创建 prompt 归档
 */
const AXION_PROMPT = `Build a React + Vite + Tailwind CSS landing page for "Axion Studio" - a design agency site. Use the \`shaders\` package (npm: \`shaders\`) for the hero background, \`lucide-react\` for icons. The page has 3 sections. Match every detail exactly:

---

## SECTION 1: HERO (Full viewport height)

**Background:** Light gray \`#EFEFEF\` with a full-screen animated shader overlay (positioned absolute, inset-0, z-10, pointer-events-none). The shader stack uses components from \`shaders/react\`:
- \`Swirl\` - colorA: \`#ffffff\`, colorB: \`#f0f0f0\`, detail: 1.7
- \`ChromaFlow\` - baseColor: \`#ffffff\`, downColor/leftColor/rightColor/upColor: \`#ff5f03\`, momentum: 13, radius: 3.5
- \`FlutedGlass\` - aberration: 0.61, angle: 31, frequency: 8, highlight: 0.12, highlightSoftness: 0, lightAngle: -90, refraction: 4, shape: "rounded", softness: 1, speed: 0.15
- \`FilmGrain\` - strength: 0.05

**Navigation (z-20, relative):** A pill-shaped white navbar (\`bg-white rounded-full\`) with 5px padding, inside a max-w-[1440px] container with p-2 sm:p-3.

- LEFT: Dark circle logo (w-9 h-9 sm:w-10 sm:h-10, bg-gray-900, rounded-full) with white text "AX" (10px/11px, font-bold, tracking-tight). Next to it (hidden on mobile, shown md+): nav links "Projects", "Studio", "Journal", "Connect" - 14px, text-gray-900, hover:text-gray-500, transition-colors duration-300, gap-6.

- RIGHT (hidden on mobile, shown md+): 
  - Text "Taking on projects for Q1 2026" (13px, text-gray-600, hidden below lg)
  - Clock icon (lucide, size 14) + live London time "{HH:MM} in London" (13px, text-gray-600)
  - CTA button: bg-gray-900, text-white, 13px font-medium, rounded-full, pl-5 pr-2 py-2. Text "Book a strategy call" with a HOVER TEXT ROLL animation: the text is duplicated inside a flex-col container with overflow-hidden h-[20px], on group-hover it translates -50% vertically (duration-500, ease cubic-bezier(0.25,0.1,0.25,1)). Arrow icon in a white circle (w-6 h-6) that rotates -45deg on hover (same easing).

- MOBILE: A "Menu"/"Close" toggle button (md:hidden), bg-gray-900, rounded-full, with Menu/X icons from lucide-react.

**Mobile Menu Overlay:** Fixed inset-0, z-50. Black/60 backdrop. A white bottom sheet (rounded-2xl, mx-3 mb-3) that slides up (translate-y-full to translate-y-0, duration-500, ease cubic-bezier(0.32,0.72,0,1)). Contains: time badge, nav links (28px/32px font-medium), and a "Start a project" button with arrow.

**Hero Content (z-20):** Positioned at the bottom of the viewport using flexbox (flex-1 spacer above). Max-w-[1440px], px-5 sm:px-8 lg:px-12, pb-14 sm:pb-16 lg:pb-20.

- Small label: "Axion Studio" (13px/14px, text-gray-900, tracking-wide, mb-5 sm:mb-8)
- Headline h1: "We craft digital experiences / for brands ready to dominate / their category online." - clamp(1.75rem,7vw,4.2rem) on mobile, clamp(2.5rem,5vw,4.2rem) on sm+. font-medium, leading-[1.08], tracking-[-0.03em], text-gray-900. Line breaks hidden on mobile (uses \`<br className="hidden sm:block" />\` with \`<span className="sm:hidden"> </span>\` fallback spaces).
- CTA row (mt-8 sm:mt-12, flex-col sm:flex-row, gap-4 sm:gap-5):
  - Orange button: bg-[#F26522], hover:bg-[#e05a1a], text-white, 13px/14px, rounded-full, pl-5 sm:pl-6 pr-2 py-2. Same text-roll hover animation for "Start a project". White circle (w-7 h-7 sm:w-8 sm:h-8) with orange ArrowRight that rotates -45deg on hover.
  - Partner badge: White pill with subtle shadow (0_2px_8px_rgba(0,0,0,0.08)), hover shadow (0_4px_16px_rgba(0,0,0,0.12)), rounded-[4px]. Contains an inline SVG icon (the starburst/compass shape below, w-5 h-5 sm:w-6 sm:h-6, fill-current text-[#E8704E]), text "Certified Partner" (13px/14px font-medium), and a dark badge "Featured" (10px/11px, bg-gray-900, text-white, px-1.5 sm:px-2 py-0.5, rounded).

**SVG Icon for partner badge:**
\`\`\`svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z"/></svg>
\`\`\`

---

## SECTION 2: ABOUT (White background)

\`bg-white\`, pt-16 sm:pt-20 lg:pt-32, pb-12 sm:pb-16 lg:pb-24, overflow-hidden. Max-w-[1440px] container.

**Badge row:** px-5 sm:px-8 lg:px-12, flex items-center gap-3, mb-6 sm:mb-8.
- Numbered circle: w-6 h-6 sm:w-7 sm:h-7, rounded-full, bg-gray-900, text-white, 11px/12px font-semibold. Shows "1".
- Pill label: "Introducing Axion" - 12px/13px, font-medium, border border-gray-200, rounded-full, px-3 sm:px-4 py-1 sm:py-1.5.

**Heading h2:** "Strategy-led creatives, delivering / results in digital and beyond." - clamp(1.5rem,4vw,3.2rem), font-medium, leading-[1.12], tracking-[-0.02em], text-gray-900, mb-12 sm:mb-16 lg:mb-28.

**Content area (responsive):**

- MOBILE/TABLET (lg:hidden): Stacked - paragraph + button, then images.
  - Paragraph: "Through research, creative thinking and iteration we help growing brands realize their digital full potential." - 15px/17px, leading-[1.6], font-medium, text-gray-900.
  - Button: "About our studio" - orange (#F26522), same text-roll animation, white arrow circle rotates -45deg.
  - Two images: flex-col sm:flex-row, gap-4 sm:gap-5. First: sm:w-[45%] aspect-[438/346]. Second: sm:w-[55%] aspect-[900/600]. Both rounded-xl sm:rounded-2xl, object-cover.

- DESKTOP (hidden lg:grid): \`grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8\`.
  - Left column (self-end): Small image, aspect-[438/346], rounded-2xl.
  - Center column (self-start, flex justify-end): Paragraph (16px/18px, leading-[1.65], whitespace-nowrap, with \`<br/>\` between lines) + orange button.
  - Right column (self-end): Large image, aspect-[3/2], rounded-2xl.

**Image URLs:**
- Small image: \`https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85\`
- Large image: \`https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85\`

---

## SECTION 3: CASE STUDIES (Light gray background)

\`bg-[#F5F5F5]\`, pt-16 sm:pt-20 lg:pt-28, pb-16 sm:pb-20 lg:pb-28. Max-w-[1440px] container.

**Badge row:** Same pattern as Section 2, but number is "2", label is "Featured client work", border-gray-300.

**Heading h2:** "Our projects" - same clamp sizing as hero headline (clamp(1.75rem,7vw,4.2rem) / clamp(2.5rem,5vw,4.2rem)), font-medium, leading-[1.08], tracking-[-0.03em], mb-10 sm:mb-14 lg:mb-16.

**Cards Grid:** \`grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7\`, px-5 sm:px-8 lg:px-12.

**Card 1 (Narrativ):**
- Video container: aspect-[329/246], rounded-2xl, overflow-hidden, bg-[#1a1d2e], group, cursor-pointer.
- Video: \`src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4"\`, autoPlay, muted, loop, playsInline, w-full h-full object-cover.
- Hover button (absolute bottom-4 left-4): A white circle (h-9 w-9) that expands to w-[148px] on group-hover (transition-all duration-300 ease-in-out). Contains "Learn more" text (13px, font-medium, opacity-0 to opacity-100 on hover with delay-100) and a link/chain SVG icon (14x14, -rotate-45 to rotate-0 on hover). The SVG is the lucide "link" icon drawn manually with two arc paths.
- Description: "Winner of Site of the Month 2025 - an interactive 3D showcase driving record engagement" - 13px/14px, text-gray-600, mt-4, leading-relaxed.
- Title: "Narrativ" - 14px/15px, font-semibold, text-gray-900, mt-1.

**Card 2 (Luminar):**
- Video container: aspect-square, rounded-2xl, overflow-hidden, bg-[#6b6b6b], group, cursor-pointer.
- Video: \`src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4"\`, autoPlay, muted, loop, playsInline, w-full h-full object-cover.
- Hover button (absolute bottom-4 left-4): A DARK circle (bg-gray-900, h-9 w-9) that expands to w-[168px] on group-hover. Contains "View case study" text (13px, font-medium, text-white) and a white ArrowRight icon (size 14) that transitions from -rotate-45 to rotate-0 on hover.
- Description: "Transforming a dated platform into a conversion-focused brand experience" - 13px/14px, text-gray-600, mt-4, leading-relaxed.
- Title: "Luminar" - 14px/15px, font-semibold, text-gray-900, mt-1.

---

## GLOBAL STYLES (index.css):

Standard Tailwind directives plus two utility classes (not actively used in current layout but defined):
- \`.liquid-glass\`: rgba(255,255,255,0.01) bg, backdrop-filter blur(4px), inset box-shadow, pseudo-element gradient border using mask-composite.
- \`.liquid-glass-strong\`: Same but blur(50px), no pseudo-element.

---

## TECHNICAL DETAILS:
- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS 3.4 (default config, no custom theme extensions)
- **Packages:** \`shaders\` (for Shader, ChromaFlow, FilmGrain, FlutedGlass, Swirl from \`shaders/react\`), \`lucide-react\` (ArrowRight, Clock, Menu, X)
- **Font:** System default (no custom font loaded)
- **All animations use:** \`duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]\` unless noted otherwise
- **Max content width:** 1440px, centered with mx-auto
- **Responsive breakpoints:** Default Tailwind (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
- **Live clock:** Updates every second, shows London timezone in HH:MM format`

/**
 * Aethera — 原始创建 prompt 归档
 */
const AETHERA_PROMPT = `Prompt: Cinematic Hero Section with Looping Video Background

Create a fullscreen single-page hero section using React + Vite + Tailwind CSS + TypeScript with the following specifications:

Fonts:
Display text (headings, logo): Instrument Serif
Body text (navigation, descriptions): Inter
Import both fonts in /src/styles/fonts.css

Video Background:
URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4
Position: top: '300px' with inset: 'auto 0 0 0'
Implement custom fade-in/fade-out loop logic using React useEffect and useRef:
Use requestAnimationFrame to continuously monitor currentTime and duration
Fade in over 0.5s at the start (opacity 0 to 1)
Fade out over 0.5s before the end (opacity 1 to 0)
On ended event: set opacity to 0, wait 100ms, reset currentTime = 0, then play() again
This creates a seamless manual loop with smooth fade transitions
Add gradient overlays: absolute inset-0 bg-gradient-to-b from-background via-transparent to-background positioned over the video

Navigation Bar:
Logo: "Aethera®" (with registered trademark symbol as superscript)
Logo styling: text-3xl, tracking-tight, Instrument Serif, color #000000
Menu items: Home (color #000000), Studio, About, Journal, Reach Us (all others #6F6F6F)
Menu items: text-sm with transition-colors
CTA button: "Begin Journey", rounded-full, px-6 py-2.5, text-sm, black background (#000000), white text, hover scale 1.03
Layout: flex justify-between, px-8 py-6, max-w-7xl mx-auto

Hero Section:
Positioning: paddingTop: 'calc(8rem - 75px)', pb-40
Layout: centered (flex flex-col items-center justify-center text-center), px-6
Headline:
Text: "Beyond silence, we build the eternal."
Styling: text-5xl sm:text-7xl md:text-8xl, max-w-7xl, font-normal
Font: Instrument Serif
Line height: 0.95
Letter spacing: -2.46px
Color: #000000 for main text, #6F6F6F for italic emphasized words ("silence," and "the eternal.")
Animation: animate-fade-rise

Description:
Text: "Building platforms for brilliant minds, fearless makers, and thoughtful souls. Through the noise, we craft digital havens for deep work and pure flows."
Styling: text-base sm:text-lg, max-w-2xl, mt-8, leading-relaxed
Color: #6F6F6F
Animation: animate-fade-rise-delay

Hero CTA Button:
Text: "Begin Journey"
Styling: rounded-full, px-14 py-5, text-base, mt-12
Colors: black background (#000000), white text (#FFFFFF)
Hover: scale 1.03
Animation: animate-fade-rise-delay-2

Colors:
Background: white (#FFFFFF)
Headlines/logos/buttons: black (#000000)
Descriptions/menu items: gray (#6F6F6F)
Button text: white (#FFFFFF)

Animations (in /src/styles/theme.css):
fade-rise: opacity 0 to 1, translateY 20px to 0, duration 0.8s, ease-out
fade-rise-delay: same as fade-rise but with 0.2s delay
fade-rise-delay-2: same as fade-rise but with 0.4s delay

Layout Structure:
Container: relative min-h-screen w-full overflow-hidden
Background video layer (z-0)
Gradient overlay on video
Navigation bar (z-10)
Hero section (z-10)
All elements should be responsive and maintain the glassmorphic aesthetic with the specified padding, positioning, and smooth animations.`

/**
 * NeuralKinetics — 原始创建 prompt 归档
 */
const NEURALKINETICS_PROMPT = `Build a React + TypeScript + Tailwind CSS single-page hero section using Vite. The entire page lives in \`src/App.tsx\`. No extra libraries beyond \`react\`, \`react-dom\`, \`lucide-react\`, and Tailwind.

**Background:**
- A fullscreen autoplaying, muted, looping, \`playsInline\` background \`<video>\` element absolutely positioned \`inset-0 w-full h-full object-cover\`.
- Video URL (exact): \`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4\`
- Root wrapper: \`relative min-h-screen overflow-hidden bg-[#f0f0ee]\`.
- Foreground content wrapper: \`relative z-10 flex flex-col min-h-screen\`.

**Logo (inline SVG component):**
- \`width="18" height="18"\`, \`viewBox="0 0 256 256"\`, \`fill="none"\`.
- Single path with \`fill="rgb(84, 84, 84)"\` and \`d="M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z"\`.

**Navbar (centered, pill-style, two separate pills):**
- \`<nav>\` classes: \`flex items-center justify-center pt-4 sm:pt-6 px-4 sm:px-8 gap-2 sm:gap-3\`.
- Left circular logo container: \`flex items-center justify-center rounded-full w-10 h-10 sm:w-11 sm:h-11 shrink-0\`, inline style \`backgroundColor: '#EDEDED'\`, contains the Logo.
- Right pill container: \`flex items-center gap-4 sm:gap-10 rounded-xl px-4 sm:px-8 py-2.5 sm:py-3\`, inline style \`backgroundColor: '#EDEDED'\`.
- Nav links array: \`['Story', 'Products', 'Help', 'Support']\`. Each anchor: \`text-[12px] sm:text-[14px] font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200\`.

**Hero content (bottom-left aligned):**
- Outer: \`flex-1 flex items-end pb-10 sm:pb-16 lg:pb-20 px-6 sm:px-12 md:px-20 lg:px-28\`.
- Inner: \`max-w-xs\`. Four stacked elements, each with \`mb-3\`:

1. Badge link: \`inline-flex items-center gap-1.5 text-[11.5px] font-medium text-blue-500 hover:text-blue-600 transition-colors mb-3 group\`. Text: \`Seen on Shark Tank in India\` followed by an arrow \`→\` in a span with \`inline-block transition-transform duration-200 group-hover:translate-x-0.5\`.

2. Headline \`<h1>\`: \`text-[1.5rem] sm:text-[1.75rem] leading-[1.15] font-medium text-gray-900 tracking-tight mb-3\`. Text: \`Simple, smart prosthetics made for people who keep fighting.\`

3. Subtext \`<p>\`: \`text-[13px] text-gray-400 font-normal mb-3\`. Text: \`Reclaim your movement now.\`

4. CTA anchor: \`inline-flex items-center gap-2 text-[13px] font-medium text-blue-500 border border-blue-400 rounded-full px-5 py-2.5 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200 group\`. Text: \`Try a free fitting\` plus arrow \`→\` in span with \`transition-transform duration-200 group-hover:translate-x-0.5\`.

**Animations / micro-interactions:**
- Arrow spans translate right by \`0.5\` on group hover (\`group-hover:translate-x-0.5\`).
- CTA fills blue on hover (bg + text + border transitions, 200ms).
- Nav links shift from gray-700 to gray-900 on hover.

**Fonts:** Default Tailwind sans-serif system font stack (no custom font). All sizes are exact pixel/rem values above (\`11.5px\`, \`12px\`, \`13px\`, \`14px\`, \`1.5rem\`, \`1.75rem\`).

**Colors:** Page background \`#f0f0ee\`; pill backgrounds \`#EDEDED\`; accent \`blue-500/600/400\`; text \`gray-900/700/400\`.

Do not add any other sections, no Supabase wiring, no routing. Only the single hero page as described.`

const NORA_PROMPT = `Convert the provided complete HTML file (a creative studio showcase for "Nora Kessler") into a React + TypeScript component-based landing page. Use Inter font (weights 300, 400, 500, 600, 700) from Google Fonts. The design palette is: background #E4E4E4 (light gray), foreground #F4F1E8 (warm off-white text), accent #75C5DE (soft blue), menu panel dark rgba(17,17,17,0.95).

SPLASH ANIMATION (10 boxes):
- 2 rows of 5 boxes, each box width 20% / height 50%
- Box background: #75C5DE
- Top row: translateY(0 → -100%) over 1s
- Bottom row: translateY(0 → +100%) over 1s
- Staggered animation-delay per child: i * 0.05s (0, 0.05s, 0.1s, 0.15s, 0.2s)
- cubic-bezier(0.96, -0.02, 0.38, 1.01) overshoot easing
- After 1.35s total, the splash container fades out (opacity 0, visibility hidden) over 0.3s ease
- Pointer-events: none on splash container

HERO IMAGE ENTRANCE:
- Base image (background-image, cover, center) animates in:
  from { opacity: 0; transform: scale(1.5) rotate(3deg); }
  to   { opacity: 1; transform: scale(1) rotate(0deg); }
- Duration 1.2s, cubic-bezier(0.25, 0.46, 0.45, 0.94), delay 1s

WORD REVEAL (headline):
- Headline text: "I build compelling visual stories & motion that make ideas shine."
- Split into words, each word wrapped in an inline-block span
- Per word: from { opacity: 0; translateY(10px); filter: blur(10px); } → to { opacity: 1; translateY(0); blur(0); }
- Duration 0.4s ease, staggered animation-delay: 1 + i * 0.05s

CTA ENTRANCE:
- from { opacity: 0; transform: translateY(60px) scale(0.4); } → to { opacity: 1; translateY(0) scale(1); }
- Duration 0.8s, cubic-bezier(0.25, 0.46, 0.45, 0.94), delay 1s

CTA BUTTON (two-part expand on hover):
- Pill button, padding 8px, gap 12px, border-radius 9999px
- White background element absolutely positioned (top 5px, bottom 5px, left 8px) with width transition
- Default: width = calc(100% - 8px - 8px - 48px - 12px) (just covers text area)
- Hover: width = calc(100% - 16px) (expands to cover arrow circle too)
- Text (z-index 1): #111111, font-weight 500, padding 12px 32px (mobile) / 16px 40px (desktop)
- Arrow circle (z-index 1): 48px (mobile) / 54px (desktop) circle, bg #75C5DE, hover translateX(-7px)
- Circle contains SVG arrow path: M5 13L13 5M13 5H6M13 5V12 (stroke white, width 2, round caps)
- Desktop (768px+) sizes scale up

MENU CTA (smaller variant):
- Same two-part pattern, smaller dimensions
- Circle 38px, text padding 8px 40px, font-size 14px
- Default bg width: calc(100% - 8px - 8px - 38px - 8px), hover width: calc(100% - 12px)
- Hover circle translateX(-4px)

"VISUALS" BIG TEXT (creator text):
- Position absolute, bottom of hero
- font-size clamp(180px, 28vw, 560px), color #F4F1E8, font-weight 500, letter-spacing -0.04em, line-height 80%
- Entrance: from translateY(330px) → translateY(0), 1s, cubic-bezier(0.16, 1, 0.3, 1), delay 1.5s

NAVIGATION:
- Logo wrapper: position fixed, top 30px (mobile) / 40px (desktop), left 0, width 50%, z-index 10
- mix-blend-mode: difference (auto-adapts contrast against background)
- Inner padding-left 20px (mobile) / 40px (desktop)
- Logo is an SVG (link to framerusercontent.com image)
- Burger wrapper: position fixed, top 16px / 27px, right 0, width 50%, z-index 10, justify-content flex-end
- Inner padding-right 20px / 40px
- Burger button: 59px circle, bg #F4F1E8, border none
- Two horizontal bars (24px × 2px, gap 4px), bg #111111
- Hover: button bg → #0B0B0B, bars → #F4F1E8
- Open state: button bg #0B0B0B, bars #F4F1E8, first bar rotate(45deg) translate(2px, 2px), last bar rotate(-45deg) translate(2px, -2px)

MENU PANEL (slide down from top):
- Position fixed, z-index 9
- Mobile: left 8px, right 8px, border-radius 20px
- Desktop: right 7px, width 420px, padding 60px
- Background rgba(17,17,17,0.95), backdrop-filter blur(26px), -webkit-backdrop-filter blur(26px)
- Padding 90px 32px 32px 32px (mobile) / 60px (desktop)
- Closed: top -600px, opacity 0, pointer-events none
- Open: top 0 (mobile) / 7px (desktop), opacity 1, pointer-events auto
- Transition: top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s ease
- Nav links: column, gap 8px, font-size 36px (mobile) / 42px (desktop), font-weight 500, color #F4F1E8, line-height 130%, hover opacity 0.7
- Links: Work, About, Blog
- Email link: #9A9590, font-size 18px / 20px, hover #F4F1E8
- Socials: Pinterest, Behance, Letterboxd, color #9A9590, font-size 14px, underlined, hover #F4F1E8
- Menu CTA button at bottom

HERO LAYOUT:
- Position relative, width 100%, overflow hidden, bg #E4E4E4
- Mobile: min-height 100vh / Desktop: height 100vh, min-height 800px
- Big text layer (z-index 2): position absolute, bottom -30px (mobile) / -40px (desktop), pointer-events none, text-align center
- Base image (z-index 5): position absolute, top 30vh (mobile) / 0 (desktop), left 0, right 0, bottom 0, bg-size cover, bg-position 60% center (mobile) / center (desktop), bg-repeat no-repeat
- Reveal image (z-index 7): same positioning as base, masked by canvas spotlight
- Content (z-index 8): position relative (mobile) / absolute inset 0 (desktop), display flex column flex-start, max-width 1600px, margin auto, padding 110px 16px 24px 16px (mobile) / 160px 40px 100px 40px (desktop)
- Headline: font-size 22px (mobile) / 28px (desktop), font-weight 500, line-height 120%, letter-spacing -0.02em, color #111111, max-width 447px

CANVAS SPOTLIGHT REVEAL (the key interaction):
- A hidden <canvas id="reveal-canvas"> fills the viewport
- A visible <div id="reveal-img"> with background-image sits above the base image
- Mouse tracking: mouse {x, y} captured via window mousemove, initialized to -999/-999 (off-screen)
- Smoothed position: smooth {x, y} lerps toward mouse with factor 0.1 per frame
- rAF loop:
  1. clearRect(0, 0, canvas.width, canvas.height)
  2. createRadialGradient at (smooth.x, smooth.y) with radius SPOTLIGHT_R = 260
  3. Color stops:
     - 0 → rgba(255,255,255,1) (fully opaque center)
     - 0.4 → rgba(255,255,255,1)
     - 0.6 → rgba(255,255,255,0.75)
     - 0.75 → rgba(255,255,255,0.4)
     - 0.88 → rgba(255,255,255,0.12)
     - 1 → rgba(255,255,255,0) (fully transparent edge)
  4. ctx.beginPath, arc at (smooth.x, smooth.y, SPOTLIGHT_R), fillStyle = grad, fill
  5. canvas.toDataURL() → set as imgLayer.style.webkitMaskImage and imgLayer.style.maskImage
  6. Set maskSize: 100% 100%
  7. requestAnimationFrame(loop)
- Canvas resize on window resize
- Result: as the mouse moves, a soft spotlight reveals the second image through the mask — the rest of the reveal image stays hidden

IMAGE URLs:
- Base image: https://soft-zoom-63098134.figma.site/_assets/v11/5c9f982199fde1d9b85a20e5396f0fa7bacaf9a3.png?w=2560
- Reveal image: https://soft-zoom-63098134.figma.site/_assets/v11/6be2165e31648955b4e071f4cf2a50bc572b9bfd.png?w=1536
- Logo SVG: https://framerusercontent.com/images/VMcS7YYTM5PXfXvlHc9u3hSCMM.svg

ESCAPE KEY: Pressing ESC closes the menu panel.

REDUCED MOTION: When prefers-reduced-motion: reduce is active, disable all animations (splash, hero image, word reveal, CTA, creator text) — set opacity 1, transform none, filter none, visibility visible.

Responsive (mobile-first, breakpoint at 768px): All sizes have separate mobile/desktop values as listed above.`

const PRMPT_PROMPT = `Build a full-screen, scroll-driven fashion/archive landing page for a brand called "prmpt". Tech stack: React 19 + TypeScript + Vite 6 + Tailwind CSS v4 (@tailwindcss/vite) + GSAP 3.15 with @gsap/react (ScrollTrigger) + Motion (Framer Motion) 12 (motion/react). Font: "Inter Tight" (Google Fonts, weight 500).

TWO MAIN PHASES:
1. Hero phase (first 100vh of scroll): Full-viewport video background with overlaid UI (logo, nav, product info, custom cursor). A black panel slides up from below covering the video.
2. Gallery phase (continues scrolling): The black panel contains a scattered grid of product images that scale in/out as they enter/exit the viewport. At the end, a white overlay fades in with a "view" CTA button.

ASSETS:
- LEFT video: https://d8j0ntlcm91z4.cloudfront.net/user_39ca84eAE1ODL9hbR5VhoEj8tBf/hf_20260625_154433_532a85d3-dabf-4265-b8bd-19ac6af31842.mp4
- RIGHT video: https://d8j0ntlcm91z4.cloudfront.net/user_39ca84eAE1ODL9hbR5VhoEj8tBf/hf_20260625_154401_a664f076-b971-4557-8728-40ef9ea4c49b.mp4
- 10 gallery images via images.higgs.ai webp proxy (URLs provided).

SECTION 1 — HERO:
Root: id="scroll-spacer", position relative, user-select none, bg white. Height dynamically vh + maxScroll + 2*vh (initially 500vh). Custom cursor hidden on desktop (cursor none), default on touch.

1A. Custom Cursor (desktop >= 1024px only): fixed, pointer-events-none, z-index 50, follows mousemove via direct DOM style.left/top, transform translate(-50%,-50%), mix-blend-mode exclusion. Contains 48x48 SVG: circle r=22.75 strokeWidth 2.5 + decorative glyph path, all white.

1B. Logo (top left): fixed, pointer-events-none, z-index 20, mix-blend-mode exclusion. Responsive width 124/266/355px. Position top/left 16px (mobile) / 32px (desktop). Motion fade in + slide up (opacity 0->1, y 12->0), duration 0.6s, ease [0.25,0.1,0.25,1], delay 0s. SVG viewBox 0 0 355 110 with "prmpt" wordmark + circled "R" mark, white.

1C. Caption (below logo, left): fixed, pointer-events-none, z-index 20, mix-blend-mode exclusion. Left 32px (desktop) / 16px (mobile). Top 244/180/118 (desktop/tablet/mobile). Width 692px / calc(50vw-48px) / calc(100vw-32px). Inter Tight 500, 12px, line-height 140%, letter-spacing -0.04em, white. Same motion, delay 0.3s. Text content (verbatim): "When switching between videos near the center, do not reset currentTime to 0 abruptly. Add a small dead zone: if cursor is within +/-50px of center, keep both videos at currentTime = 0 and show whichever was last active."

1D. Header Nav (top right): fixed, z-index 20, pointer-events-none, mix-blend-mode exclusion. Position top/right 32px (desktop) / 16px (mobile). Width 330px (desktop). Height 30px. Flex row space-between. Motion delay 0.15s. Contains "ABOUT" (hidden mobile, Inter Tight 500 15px uppercase white) + flex row gap 50px (desktop) / 20px (mobile) with hamburger SVG (viewBox 0 0 40 40, paths M0 14H40 and M0 26H40, stroke white strokeWidth 2.5, size 30/24) and "[ CART ]" text (15/13px white).

1E. Product Info (bottom right): id="outro-info", fixed, pointer-events-none, z-index 20, mix-blend-mode exclusion. Desktop: right 32px, bottom 80px, width 330px, flex-column align center. Mobile: left/right 0, bottom 48px. Motion opacity 0->1 delay 0.45s. data-outro-offset 166 (desktop) / 132 (mobile). Contains top block (flex-column align flex-start, width 100% desktop / 252px mobile, margin-bottom 32/12): circle icon (relative div 30x30 / 20x20 with SVG circle cx=20 cy=20 r=18.75 stroke white strokeWidth 2.5/2 + span#circle-symbol centered showing "8" initially, changing to random symbol from ['8','$','^^','%','/'] on scroll throttled 80ms, Inter Tight 500 15/10px letter-spacing -0.04em uppercase white) + collection label (Inter Tight 500 30/20px line-height 100% center letter-spacing -0.04em uppercase white: "ARCHIVE COLLECTION" + line break + "\"PROMPT\""). Price (Inter Tight 500 80/60px line-height 100% center letter-spacing -0.04em white: "$97,33").

1F. View Button (bottom right, initially hidden): id="outro-buy", fixed, pointer-events-none, z-index 20, mix-blend-mode exclusion. Desktop: right 32px, bottom 32px, width 330px, height 174px. Mobile: left/right 16px, bottom 60px, height 100px. transform-origin right bottom, transform scale(0) (scales to 1 via scroll). Background #fff, border-radius 1335px (pill), flex center. Text "view": Inter Tight 500 110/72px letter-spacing -0.04em color #fff mix-blend-mode exclusion.

1G. Video Container: id="main-canvas", pointer-events-none. Desktop: fixed inset 0 width 100% height 100% z-index 0. Mobile: fixed left 0 top 220px width 100vw height calc(100vh - 220px) z-index 0. Opacity 0->1 when both videos loaded (opacity 0.3s ease), overflow hidden. Two <video> muted playsInline preload auto, absolute fill, object-fit cover. Left video starts display none, right starts display block.

1H. Video Interaction Logic:
- Desktop (non-touch): Videos NOT auto-played. Scrubbed based on cursor X via requestAnimationFrame. Dead zone = Math.max(30, width*0.05) from center. If cursor in dead zone: keep current video at currentTime=0. If cursor left of dead zone: show RIGHT video, scrub based on distance from center-deadZone to left edge. If cursor right of dead zone: show LEFT video, scrub based on distance from center+deadZone to right edge. activeSideRef tracks last active side, only changes when cursor exceeds dead zone. Progress = (distance from dead zone edge)/(available range) mapped to 0..video.duration. CRITICAL: Only update currentTime when !video.seeking (prevents jittery playback).
- Mobile/Tablet (touch): Videos auto-play alternately — left plays first, on ended switches to right, on right ended switches back to left. Respects prefers-reduced-motion.

1I. White Overlay: id="outro-overlay", fixed inset 0, pointer-events-none, z-index 12, bg #fff, opacity 0 (scroll controlled).

1J. Footer: id="outro-footer", fixed, pointer-events-none, left 16px, bottom 32/24px, mix-blend-mode exclusion, opacity 0 (scroll controlled). Flex row gap 80px (desktop) / space-between (mobile). Two spans "PRMPT (R) 2026" and "PRIVACY POLICY". Inter Tight 500 13/11px letter-spacing -0.02em uppercase white.

SECTION 2 — BLACK PANEL (Gallery):
Container: fixed inset 0, bg black, z-index 10. Initially translateY(100vh) (off-screen below). Slides up to translateY(0) during first 100vh of scroll via GSAP ScrollTrigger (scrub true, ease none).

Inner Wrapper: width 100%, padding-top min(400px, 40vh).

Grid Layout Algorithm: Responsive columns 2 (< 640) / 3 (640-1024) / 4 (>= 1024). Each cell aspect-ratio 2/3. Layout function buildLayout(count, cols) creates rows: for each row r compute a = (r*2 + (r%2)) % cols, place one image at column a; every 3rd row (r%3===0) place a second image at b = (a+2)%cols (or (a+1)%cols if same as a); empty cells get -1 (rendered as empty spacer divs).

Card Behavior: Each card class "bp-card", will-change transform. transform scale(0) initially. transform-origin: cards in left half of grid get "right bottom", right half get "left bottom". Scale computed per-frame in RAF based on card's vertical position: Enter = Math.min(1, (vh - top)/(vh*0.6)); Exit = Math.min(1, bottom/(vh*0.4)); Final = Math.min(enter, exit). If card off-screen (bottom<=0 or top>=vh): scale(0).

Scroll Phases (RAF-based, NOT scroll events):
- Phase 1 (scrollY 0 to vh): Panel slides up. Cards computed with panelOffset = vh - scrollY.
- Phase 2 (scrollY > vh): Panel fixed at top. Inner wrapper translates up translateY(-(scrollY - vh)). Cards recomputed with phase2 offset.
- Outro (scrollY > vh + maxScroll): White overlay fades in, product info slides up by outroOffset px, "view" button scales 0 to 1, footer fades in. Progress = (scrollY - vh - maxScroll)/(vh - 100).

Spacer Height: vh + maxScroll + 2*vh where maxScroll = wrapScrollHeight - vh.

CSS: .bp-card { will-change: transform; } @media (prefers-reduced-motion: reduce) { .bp-card { will-change: auto; } }

Responsive Breakpoints: Mobile < 640px, Tablet 640-1024px, Desktop >= 1024px.

Key Design Principles: All text overlays use mix-blend-mode exclusion to remain visible against both light and dark backgrounds. No visible scroll bar interaction — entirely RAF-driven position tracking. pointer-events-none on all overlaid UI elements. user-select none on root. Videos hidden (visibility hidden) once scroll passes first viewport height. Circle symbol randomizes on scroll (throttled 80ms). Entry animations staggered: logo (0s), nav (0.15s), caption (0.3s), product info (0.45s).`

const TERRAELIX_PROMPT = `Create a single-page hero landing for a wellness/supplements brand called "TerraElix" using React + Tailwind CSS + Lucide React icons. The page is a full-viewport hero with a background image, navbar, headline with word-by-word reveal animations, CTA section, and a 3-panel footer strip. It must be fully responsive (mobile, tablet, desktop).

---

## Fonts

Import from Google Fonts:
- **DM Sans** (weights 400, 500) -- used for brand name, nav links, headline, panel 1 text
- **Inter** (weights 400, 500) -- used for buttons, body text, panel 2/3 text

---

## Background

Full-screen background image covering the entire viewport:
\`\`\`
url: https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_110248_b62f758d-f68c-4045-a7b4-91771d6d0a0f.png&w=1280&q=85
background-size: cover; background-position: center; background-repeat: no-repeat;
\`\`\`

---

## Layout Structure

\`\`\`
<div> (min-h-screen, flex flex-col, relative, overflow-hidden)
  <nav> -- navbar
  <section> -- hero content (flex-1, flex col, justify-center)
  <div> -- mobile/tablet product image (visible below lg)
  <div> -- 3-panel grid footer
  <img> -- desktop floating product image (absolute, hidden below lg)
</div>
\`\`\`

---

## Navbar

- **Left:** Brand name "TerraElix" -- white, DM Sans 500, 30px, letter-spacing -0.05em
- **Center (desktop only, hidden on mobile):** Nav links "About", "Products", "Promotions", "Contact" -- DM Sans 500, 18px, text-white/90, gap 10 (lg)
- **Right:** Row of icon buttons + avatar + mobile menu toggle
  - Search icon (Lucide \`Search\`, size 20, strokeWidth 1.5)
  - Shopping bag icon (Lucide \`ShoppingBag\`, size 20, strokeWidth 1.5)
  - Return icon (Lucide \`CornerUpLeft\`, size 20, strokeWidth 1.5)
  - Round avatar image (w-8 h-8, lg:w-10 lg:h-10, rounded-full, object-cover):
    \`\`\`
    https://polo-pecan-73837341.figma.site/_assets/v11/ca8093996e970200cbcf8bde8744175e52da5a79.png
    \`\`\`
  - Hamburger menu button (md:hidden, Lucide \`Menu\` / \`X\` toggle)

- **Mobile overlay menu:** fixed inset-0 bg-black/90 z-30 with centered nav links (text-2xl, white)

Padding: px-5 sm:px-8 lg:px-10, py-4 lg:py-5

---

## Hero Headline

Font: DM Sans, weight 400, letter-spacing -0.05em

Responsive sizes:
- Base: 48px/50px line-height
- sm: 80px/72px
- md: 110px/95px
- lg: 130px/110px
- xl: 155px/125px

Text layout (3 lines):
\`\`\`
Line 1: "The" (white) "Power" (white) "of" (white/45 -- dimmed)
Line 2: "Nature" (dimmed) "in" (dimmed) "Every" (white)
Line 3: "Capsule" (white) + inline image
\`\`\`

Each word is wrapped in a container with overflow-hidden, and the inner span animates with \`wordReveal\` (translateY 100% + blur to visible). Staggered delays: 0.3s, 0.4s, 0.5s, 0.6s, 0.7s, 0.8s, 0.9s.

**Inline image** after "Capsule" (hidden on mobile, sm:inline-block, align-middle, ml-2 lg:ml-4):
\`\`\`
https://polo-pecan-73837341.figma.site/_assets/v11/6a7de4fbe9c9e2315040607320a9ff5e93117bf4.png
height: clamp(60px, 10vw, 160px); width: auto;
\`\`\`

---

## CTA Section

Below the headline, mt-8 sm:mt-12 lg:mt-[75px]. Flex row on sm+, column on mobile. Gap: 5 (mobile), 8 (sm), 50px (lg).

- **Button:** "Explore Now" + ArrowUpRight icon. bg-black text-white rounded-md. Sizes: w-full sm:w-[240px] md:w-[280px] lg:w-[310px], h-14 sm:h-16 lg:h-[72px]. Font: Inter 500, responsive text (base to 2xl), letter-spacing -0.03em.
- **Paragraph:** "Discover our new plant-based supplements for daily balance and clean energy." -- white, max-w-[310px], Inter 400, text-sm sm:text-base lg:text-lg, line-height 1.45, letter-spacing -0.03em.

---

## Mobile/Tablet Product Image (lg:hidden)

Visible below lg breakpoint. Oversized, bleeding off edges:
\`\`\`
https://polo-pecan-73837341.figma.site/_assets/v11/50ad042b3cd48a2e120ea3ba17c8cfeaf3cc334c.png
w-[180%] sm:w-[151%] max-w-[1296px], object-contain, mx-auto, drop-shadow-2xl
margin-bottom: -180px sm:-220px (overlaps panels below)
\`\`\`

---

## Bottom 3-Panel Grid

\`grid grid-cols-1 md:grid-cols-[2fr_1fr_2fr]\`, relative z-10.

### Panel 1 (bg-[#ECEDEC])
- Text: "Start your personalized path to natural balance" -- DM Sans 400, text-2xl sm:text-[28px] lg:text-[35px], leading-[1.1], letter-spacing -0.05em, max-w-[350px]
- Link: "Personal Assessment" -- underline, Inter 400, text-base lg:text-lg, letter-spacing -0.03em
- Decorative image (absolute right-0 bottom-0, h-full, mix-blend-multiply):
  \`\`\`
  https://polo-pecan-73837341.figma.site/_assets/v11/6736cbe6e26afa2cd7c04a91892a79f7640785b5.png
  \`\`\`

### Panel 2 (bg-[#FEFDF9]) -- Auto-rotating card carousel
4 cards cycling every 3500ms with fade/slide transition:
1. FlaskConical icon, bg-black circle: "Experience our newly enhanced natural formula"
2. Leaf icon, bg-emerald-800 circle: "Pure organic ingredients sourced sustainably"
3. Droplets icon, bg-cyan-800 circle: "Advanced bioavailability for maximum absorption"
4. Sun icon, bg-amber-700 circle: "Clinically tested for daily energy & vitality"

Each card: icon in a 40px (sm:48px) round colored circle + text (Inter 400, text-sm sm:text-base lg:text-lg, text-black/80, line-height 1.2, letter-spacing -0.03em).

Active card: opacity-100 translate-y-0. Inactive: opacity-0 translate-y-4 absolute.

Bottom dots: 4 thin bars (h-0.5, flex-1, rounded-full). Active: bg-black. Inactive: bg-black/20.

### Panel 3 (bg-black)
- Left: Product image (w-[120px] h-[82px] sm:w-[160px] h-[110px] lg:w-[208px] h-[142px]):
  \`\`\`
  https://polo-pecan-73837341.figma.site/_assets/v11/30e8f38d1f993c357a3be2721557fc899d5640fc.png
  \`\`\`
- Right: "+14K" (white, Inter 400, text-2xl sm:text-3xl lg:text-[35px], letter-spacing -0.05em) + "People have already optimized their wellness" (text-white/60, Inter 400, text-sm sm:text-base lg:text-lg, line-height 1.2)

---

## Desktop Floating Product (lg+ only)

Same image as mobile product, but absolutely positioned for desktop:
\`\`\`
https://polo-pecan-73837341.figma.site/_assets/v11/50ad042b3cd48a2e120ea3ba17c8cfeaf3cc334c.png
position: absolute; z-0; hidden lg:block;
width: clamp(600px, 80vw, 1412px); height: auto;
bottom: -10%; right: clamp(-400px, -20vw, -100px);
\`\`\`

---

## Animations (CSS keyframes)

\`\`\`css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-40px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes slideInRight {
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes wordReveal {
  from { opacity: 0; transform: translateY(100%); filter: blur(4px); }
  to { opacity: 1; transform: translateY(0); filter: blur(0px); }
}
\`\`\`

All use \`cubic-bezier(0.16, 1, 0.3, 1)\` easing with \`both\` fill mode.

**Classes and their animations:**
- \`.animate-fade-up\` -- fadeUp 0.8s
- \`.animate-fade-in\` -- fadeIn 0.7s
- \`.animate-slide-left\` -- slideInLeft 0.8s
- \`.animate-slide-right\` -- slideInRight 0.8s
- \`.animate-scale-in\` -- scaleIn 1s
- \`.animate-word-reveal > span\` -- wordReveal 0.7s

**Delay classes:** .delay-200 through .delay-1100 (increments of 0.1s)

**Animation assignments:**
- Navbar container: animate-fade-in
- Brand name: animate-slide-left delay-200
- Nav links: animate-fade-in delay-400
- Right icons: animate-slide-right delay-300
- CTA row: animate-fade-up delay-600
- Desktop product image: animate-scale-in delay-700
- Mobile product image: animate-scale-in delay-800
- Panel 1: animate-fade-up delay-900
- Panel 2: animate-fade-up delay-1000
- Panel 3: animate-fade-up delay-1100
- Inline capsule image: animate-scale-in delay-1000`

const ASME_STUDIO_PROMPT = `RECREATION PROMPT

Build a single-page landing site using React + TypeScript + Vite + Tailwind CSS + framer-motion + lucide-react. The entire page has a bg-black background. The font loaded via Google Fonts is Instrument Serif (italic and regular). Import it in index.css:


@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
LIQUID GLASS CSS (in index.css, inside @layer components)
Create a reusable .liquid-glass class used on every glass element:


.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.45) 0%,
    rgba(255, 255, 255, 0.15) 20%,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 0) 60%,
    rgba(255, 255, 255, 0.15) 80%,
    rgba(255, 255, 255, 0.45) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
SECTION 1 -- HERO (full-viewport, in Index.tsx)
Full-screen (min-h-screen) container with overflow-hidden relative flex flex-col.

Background video: absolute, covers the entire viewport (absolute inset-0 w-full h-full object-cover object-bottom). URL:


https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4
Attributes: muted, autoPlay, playsInline, preload="auto". Starts at opacity: 0.

Video fade logic (vanilla JS via refs, no CSS transitions):

On canplay: play the video, then animate opacity from 0 to 1 over 500ms using requestAnimationFrame.
On timeupdate: when remaining time <= 0.55s, animate opacity from current to 0 over 500ms.
On ended: set opacity to 0, wait 100ms, reset currentTime to 0, play again, fade back to 1 over 500ms.
This creates a seamless loop with smooth crossfade to black between plays.
Navbar (relative z-20, px-6 py-6):

A liquid-glass rounded-full pill, max-w-5xl mx-auto, px-6 py-3, flex between left/right.
Left: Globe icon (24px, white) + "Asme" text (white, font-semibold, text-lg). Hidden on mobile: nav links "Features", "Pricing", "About" (text-white/80 hover:text-white text-sm font-medium, gap-8 ml-8).
Right: "Sign Up" text button (white, text-sm, font-medium) + "Login" button (liquid-glass rounded-full px-6 py-2, white text-sm font-medium).
Hero content (relative z-10, flex-1 flex flex-col items-center justify-center, px-6 py-12 text-center, -translate-y-[20%]):

Heading: text-7xl md:text-8xl lg:text-9xl, white, tracking-tight whitespace-nowrap, font-family 'Instrument Serif', serif. Text: Know it then <em className="italic">all</em>.
Email input: max-w-xl w-full. A liquid-glass rounded-full pill with pl-6 pr-2 py-2 flex items-center gap-3. Inside: transparent <input> with placeholder "Enter your email" (text-white placeholder:text-white/40). A white circular submit button (bg-white rounded-full p-3 text-black) containing ArrowRight icon (20px).
Subtitle: text-white text-sm leading-relaxed px-4. Text: "Stay updated with the latest news and insights. Subscribe to our newsletter today and never miss out on exciting updates."
Manifesto button: liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors.
Social icons footer (relative z-10, flex justify-center gap-4 pb-12):

Three liquid-glass rounded-full p-4 buttons for Instagram, Twitter, Globe icons (20px). text-white/80 hover:text-white hover:bg-white/5 transition-all.
SECTION 2 -- ABOUT SECTION (separate component AboutSection.tsx)
Uses framer-motion useInView (ref, { once: true, margin: "-100px" }).
bg-black pt-32 md:pt-44 pb-10 md:pb-14 px-6 overflow-hidden.
Subtle radial gradient overlay: bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)].
Label: "About Us" -- text-white/40 text-sm tracking-widest uppercase. Animates: opacity: 0, y: 20 -> opacity: 1, y: 0, duration 0.6.
Heading: text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight. Animates: opacity: 0, y: 40 -> opacity: 1, y: 0, duration 0.8, delay 0.1. Text structure:
Pioneering then ideas (Instrument Serif italic, text-white/60) for
Line break (hidden on mobile)
minds that then create, build, and inspire. (all Instrument Serif italic, text-white/60)
SECTION 3 -- FEATURED VIDEO (separate component FeaturedVideoSection.tsx)
bg-black pt-6 md:pt-10 pb-20 md:pb-32 px-6 overflow-hidden. Max-w-6xl.
A rounded-3xl overflow-hidden aspect-video container that animates opacity: 0, y: 60 -> opacity: 1, y: 0, duration 0.9.
Video: w-full h-full object-cover, muted, autoPlay, loop, playsInline, preload="auto". URL:

https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4
Gradient overlay on video: bg-gradient-to-t from-black/60 via-transparent to-transparent.
Bottom overlay content (absolute bottom-0 left-0 right-0 p-6 md:p-10):
Flex row on desktop, column on mobile.
Left: a liquid-glass rounded-2xl p-6 md:p-8 max-w-md card. Label "Our Approach" (text-white/50 text-xs tracking-widest uppercase mb-3). Body text (text-white text-sm md:text-base leading-relaxed): "We believe in the power of curiosity-driven exploration. Every project starts with a question, and every answer opens a new door to innovation."
Right: "Explore more" button (liquid-glass rounded-full px-8 py-3, white text-sm font-medium) with whileHover={{ scale: 1.05 }} and whileTap={{ scale: 0.95 }}.
SECTION 4 -- PHILOSOPHY / INNOVATION x VISION (separate component PhilosophySection.tsx)
bg-black py-28 md:py-40 px-6 overflow-hidden. Max-w-6xl.
Heading: text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24. Animates opacity: 0, y: 40 -> opacity: 1, y: 0, duration 0.8. Text: Innovation then x in Instrument Serif italic text-white/40, then Vision.
Two-column grid (grid-cols-1 md:grid-cols-2 gap-8 md:gap-12):
Left: Video in rounded-3xl overflow-hidden aspect-[4/3]. Animates from opacity: 0, x: -40. URL:

https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4
muted, autoPlay, loop, playsInline, preload="auto".
Right: Animates from opacity: 0, x: 40. Two text blocks separated by a w-full h-px bg-white/10 divider.
Block 1: Label "Choose your space" (text-white/40 text-xs tracking-widest uppercase mb-4). Body (text-white/70 text-base md:text-lg leading-relaxed): "Every meaningful breakthrough begins at the intersection of disciplined strategy and remarkable creative vision. We operate at that crossroads, turning bold thinking into tangible outcomes that move people and reshape industries."
Block 2: Label "Shape the future". Body: "We believe that the best work emerges when curiosity meets conviction. Our process is designed to uncover hidden opportunities and translate them into experiences that resonate long after the first impression."
SECTION 5 -- SERVICES / WHAT WE DO (separate component ServicesSection.tsx)
bg-black py-28 md:py-40 px-6 overflow-hidden. Max-w-6xl.
Subtle radial gradient: bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)].
Header row: flex between "What we do" (text-3xl md:text-5xl text-white tracking-tight) and "Our services" label (text-white/40 text-sm, hidden on mobile). Animates opacity: 0, y: 30 -> visible, duration 0.7.
Two-card grid (grid-cols-1 md:grid-cols-2 gap-6 md:gap-8):
Each card: liquid-glass rounded-3xl overflow-hidden with group class. Animates opacity: 0, y: 50 -> visible, duration 0.8, staggered by 0.15s.
Card video area: aspect-video, object-cover, transition-transform duration-700 group-hover:scale-105. Gradient overlay: bg-gradient-to-t from-black/40 to-transparent.
Card body (p-6 md:p-8): tag label (uppercase, tracking-widest, text-white/40 text-xs), ArrowUpRight icon in a liquid-glass rounded-full p-2 circle, title (text-white text-xl md:text-2xl mb-3 tracking-tight), description (text-white/50 text-sm leading-relaxed).
Card 1: Video URL:

https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4
Tag: "Strategy". Title: "Research & Insight". Description: "We dig deep into data, culture, and human behavior to surface the insights that drive meaningful, lasting change."
Card 2: Video URL:

https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4
Tag: "Craft". Title: "Design & Execution". Description: "From concept to launch, we obsess over every detail to deliver experiences that feel effortless and look extraordinary."`

/**
 * CozyPaws — 原始创建 prompt 归档
 */
const COZYPAWS_PROMPT = `## Prompt to Recreate CozyPaws Hero Section

**Build a single-page "CozyPaws" pet store hero section using React, Tailwind CSS, and Lucide React icons. The layout is viewport-height (h-screen), no scroll, with three responsive breakpoints (mobile, tablet md, desktop lg+). Use Vite + TypeScript.**

---

### Fonts (Google Fonts)
- **Inter** (weights: 400, 500, 600) — body/UI text
- **DM Serif Display** (weight: 400) — hero heading only

Load via \`<link>\` in \`index.html\`:
\`\`\`
https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600&display=swap
\`\`\`

Apply with CSS utility class \`.font-serif-display { font-family: 'DM Serif Display', serif; }\` and \`body { font-family: 'Inter', sans-serif; }\`

---

### Color Palette
- Background: \`#EFFDF0\` (light mint green)
- Primary dark green: \`#1a3d1a\`
- Hover green: \`#2a5a2a\`
- Orange accent: \`#E86A10\`
- Orange hover: \`#d45e0d\`

---

### Asset URLs (all external, do not download)

| Asset | URL |
|-------|-----|
| Logo SVG | \`https://polo-pecan-73837341.figma.site/_assets/v11/0ae29d6d9628bede667f90d57bebe81b8f1ec2bf.svg\` |
| Avatar | \`https://polo-pecan-73837341.figma.site/_assets/v11/e62173d41f91350a59628e8a9a55ae078a886fb9.png?w=128\` |
| Product card (Cat House) | \`https://polo-pecan-73837341.figma.site/_assets/v11/3e5158dad63d392ade022e81890edc9f54d750bc.png\` |
| Video card (TikTok/YouTube) | \`https://polo-pecan-73837341.figma.site/_assets/v11/76be6ec3a93a703b15e9cc01e764a4e3f9d7d2c0.png\` |
| Bottom left image | \`https://polo-pecan-73837341.figma.site/_assets/v11/8d44b25186ef45a5789c74668fb781cea4e1ff49.png\` |
| Bottom center image (tallest) | \`https://polo-pecan-73837341.figma.site/_assets/v11/96745c4e72ad5c5208e53a885df797fd82cd854a.png?h=1024\` |
| Bottom right image | \`https://polo-pecan-73837341.figma.site/_assets/v11/81bd2e7a66b58f3d8f3ad78fd1ebf01af8dfdee1.png\` |

---

### Header
- Full-width, \`px-12\` on desktop, \`py-4\`, relative z-30
- **Left:** Logo image (205x52px desktop, 130x33px mobile)
- **Center nav (hidden below md):** Links "Home" (text-gray-900), "Shop", "Delivery and payment", "Brands", "Blog" (text-gray-600), text-sm font-medium, gap-8
- **Right:** Search button (circle, border, hidden below sm), Favorites button (orange circle, white star icon, badge "4"), Cart button (circle, border, cart icon, badge "1"), Avatar (circle, 40x40)
- Badges: absolute -top-1 -right-1, 20x20, bg-orange, border-2 border-background, white text 10px bold

---

### Desktop Hero Layout (lg+)

**Text layer (z-5):** Centered, \`px-12 pt-[5.4rem]\`
- Heading: \`font-serif-display\`, color \`#1a3d1a\`, \`text-[clamp(60px,7.5vw,110px)]\`, \`leading-[0.95]\`, tracking-tight
- Text reads: "Everything" (line 1), "Your Pets Love" (line 2)
- Each word is an \`inline-block\` with staggered \`animate-word-pop\` animation

**Left product card:** Absolutely positioned \`top-[50px] left-12\`
- Width: \`clamp(160px,14vw,260px)\`
- Image: aspect-ratio 260/257, rounded-2xl, overflow-hidden
- Arrow button bottom-right corner (dark green circle, ArrowUpRight icon)
- Text below: "Cozy Cat House" in gray-700, "$49.99" in dark green bold
- Responsive font sizes via clamp

**Right video card:** Absolutely positioned \`top-[50px] right-12\`
- Width: \`clamp(120px,10vw,177px)\`
- Image: aspect-ratio 177/287, rounded-2xl
- Play button (dark green circle) centered near bottom
- Text below play button: "Watch Product Reviews on TikTok and YouTube"

**Bottom 3 images:** Absolutely positioned \`bottom-0 left-0 right-0\`, z-10, flex items-end, no gaps
- Left image: \`flex-1\`, max-height \`min(70vh, 55vw)\`
- Center image: \`flex-[1.265]\` (wider), max-height \`min(85vh, 70vw)\`
- Right image: \`flex-1\`, max-height \`min(70vh, 55vw)\`
- All images: \`w-full h-auto block\`

**Overlays on bottom images:**
- Left: "98K+" stat with avatar stack (avatar + green circle with Plus icon)
- Center: "Best Products for Your Pet" white heading + "Explore Products" orange pill button with ArrowRight icon
- Right: "4.6" rating with orange filled Star icon
- All positioned with \`bottom: clamp(20px, 4vh, 50px)\`

---

### Tablet Layout (md to lg) — Similar to desktop but smaller
- Heading: text-7xl
- Side cards at \`top-[80px]\`, left-4/right-4, smaller fixed widths (160px/120px)
- Bottom images: same 3-panel flex, maxHeight 60vh/75vh/60vh

---

### Mobile Layout (below md)
- Top section: centered title (36px), subtitle, "Explore Products" button
- Two cards side-by-side (flex, gap-3): product card (aspect-square) + video card (aspect-3/4)
- Stats row: "98K+" with avatars left, divider, "4.6" star right
- Bottom images: same 3-panel flex, no max-height constraint

---

### Animations (CSS keyframes, custom classes)

| Class | Keyframe | Duration | Easing |
|-------|----------|----------|--------|
| \`.animate-fade-up\` | 0→30px translateY, 0→1 opacity | 0.8s | cubic-bezier(0.16, 1, 0.3, 1) |
| \`.animate-fade-in\` | 0→1 opacity | 0.6s | ease-out |
| \`.animate-slide-up\` | 0→60px translateY | 0.9s | cubic-bezier(0.16, 1, 0.3, 1) |
| \`.animate-slide-in-left\` | -40px→0 translateX | 0.8s | cubic-bezier(0.16, 1, 0.3, 1) |
| \`.animate-slide-in-right\` | 40px→0 translateX | 0.8s | cubic-bezier(0.16, 1, 0.3, 1) |
| \`.animate-text-reveal\` | translateY(40px) skewY(3deg) blur(4px) → none | 1s | cubic-bezier(0.16, 1, 0.3, 1) |
| \`.animate-word-pop\` | translateY(60px) scale(0.7) rotate(-4deg) blur(8px) → bounce overshoot → settle | 0.9s | cubic-bezier(0.34, 1.56, 0.64, 1) |
| \`.animate-scale-in\` | scale(0.85)→1 | 0.7s | cubic-bezier(0.16, 1, 0.3, 1) |
| \`.animate-photo-reveal\` | translateY(80px) scale(1.02) → normal | 1.1s | cubic-bezier(0.16, 1, 0.3, 1) |

All use \`animation-fill-mode: both\`. \`.animate-word-pop\` starts with \`opacity: 0\`.

**Delay classes:** \`.delay-100\` through \`.delay-1200\` in 100ms increments.

---

### Stagger Order
1. Header fades in (100-300ms)
2. Hero heading words pop in (200-600ms stagger)
3. Side cards slide in (600-700ms)
4. Bottom photos reveal upward (600-900ms stagger, center first)
5. Overlay stats/buttons pop in (1000-1200ms)

---

### Key Technical Details
- Container: \`h-screen flex flex-col overflow-hidden\` (no scrolling)
- Header: \`shrink-0\`
- Hero section: \`flex-1 flex flex-col overflow-hidden\`
- All responsive layouts use show/hide (\`hidden lg:flex\`, etc.), not CSS-only media queries
- Extensive use of \`clamp()\` for fluid typography and spacing
- Lucide icons used: Search, ShoppingCart, Star, ArrowUpRight, Play, ArrowRight, Plus`

/**
 * Orbis.Nft — 原始创建 prompt 归档
 */
const ORBIS_NFT_PROMPT = `Create an NFT landing page called "Orbis.Nft" with 4 sections, using a dark space theme. The page uses video backgrounds served from CloudFront, a liquid glass UI effect, and a specific color/font system. Recreate it exactly as described below.

FONTS (Google Fonts)

Anton - Used for all headings and navigation text (aliased as font-grotesk in Tailwind)

Condiment - A cursive script used for accent/overlay text (aliased as font-condiment in Tailwind)

System monospace font (font-mono) - Used for body/description paragraphs

Load via Google Fonts in index.html:

https://fonts.googleapis.com/css2?family=Anton&family=Condiment&display=swap


COLOR SYSTEM (Tailwind config)

Background: #010828 (deep dark navy blue)

cream: #EFF4FF (off-white, used for all text)

neon: #6FFF00 (bright green, used for accent cursive text and underline bars)

LIQUID GLASS CSS EFFECT

Applied via a .liquid-glass class. This is used on the navbar, social icon buttons, NFT cards, and card overlays:

.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}


TEXTURE OVERLAY

A full-screen fixed texture overlay sits on top of everything (z-50, pointer-events-none). It uses a /texture.png image with mix-blend-mode: lighten at opacity: 0.6, covering the entire viewport with background-size: cover.

SECTION 1: HERO (Full viewport)

Background: Full-bleed looping muted autoplaying video covering the entire section with object-cover

Video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4

Container: max-w-[1831px] centered with responsive horizontal padding

Section has rounded-b-[32px] bottom corners, clipping the video

Header:

Left: "Orbis.Nft" logo text in Anton, 16px, uppercase

Center: Navigation bar with liquid-glass effect, rounded-[28px], px-[52px] py-[24px]. Contains 5 links: Homepage, Gallery, Buy NFT, FAQ, Contact. Each link is Anton 13px uppercase. Links have hover:text-neon transition. Nav is hidden on mobile (hidden lg:block).

Hero Content:

Large heading in Anton font, responsive sizing: 40px mobile / 60px sm / 75px md / 90px lg. Uppercase. leading-[1.05] mobile, leading-[1] tablet+. Max width 780px on desktop, offset with lg:ml-32.

Text reads:

Beyond earth
and ( its ) familiar boundaries


Overlaid cursive accent text "Nft collection" in Condiment font (24px-48px responsive), positioned absolute to the right side of the heading, slightly rotated (-rotate-1), in neon green (text-neon), with mix-blend-exclusion and opacity-90.

Social Icons (Desktop):

3 square buttons (56x56px) stacked vertically in top-right corner, each with liquid-glass and rounded-[1rem]. Icons: Mail, Twitter, Github from lucide-react (20x20px). hover:bg-white/10 transition.

Social Icons (Mobile):

Same 3 buttons but centered horizontally below the heading, shown only below lg breakpoint.

SECTION 2: ABOUT / INTRO (Full viewport)

Background: Full-bleed looping muted autoplaying video with object-cover

Video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4

Container: Same max-w-[1831px] centered, with generous vertical padding (64px-96px responsive)

Top Row (flex row on desktop, column on mobile):

Left: Heading in Anton, responsive 32px-60px, uppercase:

Hello!
I'm orbis


With an overlaid "Orbis" in Condiment cursive, neon green, mix-blend-exclusion, 36px-68px responsive, positioned absolute at bottom-right of heading, slightly rotated.

Right: Short paragraph in monospace 14px-16px, uppercase, cream color, max-width 266px: "A digital object fixed beyond time and place. An exploration of distance, form, and silence in space"

Bottom Row (flex row, space-between):

Two columns (left and right), each containing 2 identical paragraphs. Same monospace text as above but at opacity-10 (nearly invisible, decorative). Right column hidden below lg. On mobile, text uses text-[#010828] (dark) so it's effectively invisible against the video.

SECTION 3: NFT COLLECTION GRID

Background: Solid #010828 (no video)

Container: Same max-w-[1831px] centered

Header Row:

Left: Heading in Anton, 32px-60px responsive, uppercase:

Collection of
  [indented] Space objects


Where "Space" is in Condiment cursive neon green, and "objects" is in Anton. The second line is indented with ml-12 / ml-24 / ml-32 responsive.

Right: A "SEE ALL CREATORS" button. "SEE" is large (32px-60px), "ALL" and "CREATORS" are stacked smaller (20px-36px) next to it. Below the text is a neon green bar (bg-neon, height 6px-10px responsive, full width of button).

NFT Card Grid:

3-column grid on desktop (lg:grid-cols-3), 2 on tablet, 1 on mobile. Gap 24px.

Each card: liquid-glass container with rounded-[32px], padding 18px, hover:bg-white/10 transition.

Inside each card: a square video container (pb-[100%] aspect ratio trick) with rounded-[24px] overflow hidden.

Video URLs:

https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4 (Score: 8.7/10)

https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4 (Score: 9/10)

https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4 (Score: 8.2/10)

Each card has an overlay bar at the bottom: a liquid-glass bar with rounded-[20px], px-5 py-4, showing "RARITY SCORE:" label (11px, cream/70% opacity) and score value (16px). On the right side of the bar is a circular purple gradient button (48x48px, bg-gradient-to-br from-[#b724ff] to-[#7c3aed]) with a right-arrow chevron SVG inside, with shadow-lg shadow-purple-500/50 and hover:scale-110 transition.

SECTION 4: CTA / FINAL SECTION

Background: Full-width video (NOT object-cover, instead w-full h-auto block so it displays at native aspect ratio)

Video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4

Text Content (positioned absolute over the video):

Right-aligned block, offset with lg:pr-[20%] lg:pl-[15%]

Small "Go beyond" text in Condiment cursive, neon green, mix-blend-exclusion, positioned absolute at top-left of the heading block. Sizes: 17px-68px responsive.

Heading in Anton, responsive 16px-60px, uppercase:

JOIN US.
REVEAL WHAT'S HIDDEN.
DEFINE WHAT'S NEXT.
FOLLOW THE SIGNAL.


"JOIN US." has extra bottom margin (mb-4 to mb-12 responsive) before the remaining lines.

Social Icons (Bottom-left, absolute positioned):

Positioned at left-[8%], bottom-[12%] to bottom-[20%] with responsive breakpoints.

A vertical liquid-glass container with rounded-[0.5rem] to rounded-[1.25rem] responsive, containing 3 stacked icon buttons (Mail, Twitter, Github).

Buttons have responsive widths using viewport units and rem values (e.g., w-[14vw] sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem]) and similar responsive heights.

Buttons are separated by border-b border-white/10 dividers (except the last one).

KEY TECHNICAL DETAILS

Framework: React + TypeScript + Vite + Tailwind CSS

Icons: lucide-react (Mail, Twitter, Github)

No additional packages needed beyond what Vite + React + Tailwind provides

All videos: autoPlay loop muted playsInline attributes

Responsive: Mobile-first with sm:, md:, lg: breakpoints throughout

Max content width: 1831px across all sections

All text is uppercase except the Condiment cursive accents which are normal-case`

/**
 * Dental Health — 原始创建 prompt 归档
 */
const DENTAL_PROMPT = `Create a single-page dental clinic landing page using React + Vite + TypeScript + Tailwind CSS. No external UI libraries, no icon libraries. Everything lives in one App.tsx file. The page has 3 full-screen sections, a splash screen, and a fixed navbar.

SETUP:
Font: "Open Sauce One" loaded via these exact links in index.html <head>:
<link href="https://db.onlinewebfonts.com/c/1cd1e7d71e048159076fd90b39846902?family=Open+Sauce+One" rel="stylesheet">
<link href="https://db.onlinewebfonts.com/c/42acf9aa4a6dc2f2886a3f682e337ead?family=Open+Sauce+One+Bold" rel="stylesheet">
Title: "Dental Health - Quality Healthcare"
Global CSS (index.css): @tailwind base/components/utilities. @layer base { html, body, #root { height: 100%; margin: 0; padding: 0; } body { font-family: 'Open Sauce One', -apple-system, BlinkMacSystemFont, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; } }
Tailwind config: Default, no extensions. Content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'].

IMAGE URLS (use these EXACT URLs):
HERO_IMAGE = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_113640_ccf3cf97-d447-425b-a134-d7b09fc743fc.png&w=1280&q=85'
SECTION2_IMAGE = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_114219_414dfe80-f15c-4e25-bf52-b13721f4bd88.png&w=1280&q=85'
SECTION3_IMG1 = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_115253_c19ab167-8dd5-48b4-967d-b9f0d9d6e8fb.png&w=1280&q=85'
SECTION3_IMG2 = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_115237_fc519057-6e87-4abf-999a-9610b8b085b4.png&w=1280&q=85'
SECTION3_BG = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_114355_752ba9e6-0942-4abb-9047-5d9bb16632e9.png&w=1280&q=85'

DATA CONSTANTS:
featureBars = ['Advanced Dentistry', 'High Quality Equipment', 'Friendly Staff']
services = [{ name: 'Dental\\nVeneers', num: '01', active: true }, { name: 'Dental\\nCrowns', num: '02', active: false }, { name: 'Teeth\\nWhitening', num: '03', active: false }, { name: 'Dental\\nImplants', num: null, active: false }]

CORE TECHNICAL CONCEPT: "MASKED CARDS" - Sections 1 and 2 use a single large background image shared across multiple cards. Each card shows a different "window" into the same image, creating a cohesive mosaic effect.

useMaskPositions hook: Takes a ref to the section container and a ref to an array of card elements. Uses ResizeObserver on the section container. For each card, computes { x, y, sw, sh } where x/y is the card's top-left offset relative to the section, sw/sh is the section's width/height.

useImageWidth hook: Loads the image in a new Image() object. Calculates: renderWidth = img.naturalWidth * (sectionHeight / img.naturalHeight). Returns how wide the image would be if scaled to fill the section height.

MaskedCard component: Props: bgImage, position (from useMaskPositions), imageWidth (from useImageWidth), focalX (0-1 float), className, children, cardRef, style. Calculates overflow = imageWidth > position.sw ? imageWidth - position.sw : 0, then focalOffset = overflow * focalX. Applies inline style: backgroundImage: url(bgImage), backgroundSize: auto [position.sh]px, backgroundPosition: -[position.x + focalOffset]px -[position.y]px, backgroundRepeat: no-repeat. focalX values: Section 1 mobile=0.7, desktop=0.8. Section 2 mobile=0.65, desktop=0.8.

useIsMobile hook: Listens to window.matchMedia('(max-width: 767px)') change events. Returns boolean.

ANIMATION: useStaggeredReveal hook - Takes count (number of elements) and threshold (IntersectionObserver threshold, default 0.15). Returns { containerRef, getAnimStyle }. containerRef is attached to the section; when it crosses the threshold, visible becomes true (fires once). getAnimStyle(index) returns: opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: opacity 0.6s cubic-bezier(0.16,1,0.3,1) [index*120]ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) [index*120]ms.

SPLASH SCREEN: Fixed overlay covering viewport, z-[100], white background. Number counter displayed at bottom-left (items-end justify-start). Counter style: text-7xl md:text-9xl font-bold tabular-nums p-6 md:p-10 leading-none, black text. Counts from 0 to 100 over exactly 2000ms (20ms per step, 100 steps). After reaching 100: wait 200ms, then set exiting=true which triggers opacity-0 with transition-opacity duration-700. After 900ms total from reaching 100, call onComplete() which removes splash from DOM.

NAVBAR: Container: fixed top-0 left-0 right-0 z-50, flex items-center justify-between, px-4 md:px-6 py-2 md:py-3, bg-white/80 backdrop-blur-md. Logo (left side): Two lines stacked: "Dental" and "Health". Wrapper: flex flex-col. Text: text-xl md:text-2xl font-extrabold uppercase tracking-tight leading-none. Second line has -mt-1.5 md:-mt-2 for tight spacing. Below logo text: "quality healthcare" in text-[8px] md:text-[9px] font-medium leading-none mt-1.5 md:mt-2. Desktop nav (hidden on mobile with hidden md:block): "Menu" button: px-6 py-3 bg-white rounded-full border border-black text-sm font-semibold, hover: hover:bg-black hover:text-white transition-colors duration-200. "Dental Emergency" text: text-sm font-semibold text-black. Mobile hamburger (visible only on mobile with md:hidden): Container: w-10 h-10 flex items-center justify-center, relative. 3 spans, each: absolute h-0.5 w-6 bg-black rounded-full. Transition: transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]. Closed state: top span -translate-y-2, middle opacity-100 scale-x-100, bottom translate-y-2. Open state: top rotate-45 translate-y-0, middle opacity-0 scale-x-0, bottom -rotate-45 translate-y-0. Mobile menu overlay (md:hidden): Outer: fixed inset-0 z-40, pointer-events toggled based on open state. Backdrop: absolute inset-0 bg-black/20 backdrop-blur-sm, fades opacity. Clicking closes menu. Panel: absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl, slides with translate-x-0 (open) / translate-x-full (closed), duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]. Content: flex flex-col justify-center h-full px-8 gap-1. Nav links: ['Home', 'Services', 'About', 'Gallery', 'Contact']. Each: text-4xl font-bold text-black hover:text-neutral-500. Staggered entrance: opacity-0 translate-x-8 -> opacity-100 translate-x-0, transitionDelay: \${100 + i * 60}ms when open. transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]. Bottom section: mt-8 pt-8 border-t border-neutral-200, delayed 450ms. "Dental Emergency" text: text-sm font-semibold text-black mb-4. Button: w-full px-6 py-4 bg-black rounded-full text-white text-sm font-semibold hover:bg-neutral-800 transition-colors duration-200, text "Book Appointment". When open: document.body.style.overflow = 'hidden'. Cleanup on unmount.

SECTION 1 - HERO: Container: <section>, h-screen w-full overflow-hidden flex flex-col, pt-24 md:pt-24 px-3 md:px-5 pb-1.5 md:pb-2 gap-1.5 md:gap-2. Attach both section1Ref and s1Reveal.containerRef to this element. Uses HERO_IMAGE as shared background via MaskedCard technique. 3 Feature Bars (mapped from featureBars array): Each is a MaskedCard with: w-full h-14 md:h-20 shrink-0 rounded-xl md:rounded-2xl overflow-hidden relative. Animated with s1Reveal.getAnimStyle(i) for i=0,1,2. Content: <span> centered vertically and horizontally (flex items-center justify-center h-full), text-black text-lg md:text-3xl font-bold text-center, relative z-10. Main Hero Card (4th card, index 3): MaskedCard: w-full flex-1 min-h-0 rounded-xl md:rounded-2xl overflow-hidden relative. Animated with s1Reveal.getAnimStyle(3). Top-left text: absolute top-4 left-4 md:top-7 md:left-7, text-black text-xs md:text-sm font-semibold leading-4 md:leading-5 max-w-[200px] md:max-w-[300px] z-10. Content: "We wish to provide professional dental services" <br/> "that match the current technologies". Bottom-left block: absolute bottom-5 left-3 md:bottom-8 md:left-4 z-10. Label: block text-black text-xs md:text-sm font-semibold mb-1 md:mb-2, text "Trusted Dentist in West New York". Heading: <h1> with text-black text-[clamp(3rem,11vw,11rem)] font-bold leading-[0.79] tracking-tight, content: "Dental" <br/> "Care". Bottom-right text: absolute bottom-6 right-4 md:bottom-10 md:right-8, text-white text-xs md:text-sm font-semibold z-10, content: "Free Consultation".

SECTION 2 - SMILE GALLERY: Container: <section>, min-h-screen md:h-screen w-full overflow-hidden flex flex-col, pt-1.5 md:pt-2 px-3 md:px-5 pb-1.5 md:pb-2 gap-1.5 md:gap-2. Attach both section2Ref and s2Reveal.containerRef to this element. Uses SECTION2_IMAGE as shared background via MaskedCard technique. Grid container: flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto_auto_auto] md:grid-rows-[1fr_1fr_0.8fr] gap-1.5 md:gap-2. Card 0 - Top Left ("Smile Gallery"): MaskedCard: rounded-xl md:rounded-2xl overflow-hidden relative min-h-[160px] md:min-h-0. Animated: s2Reveal.getAnimStyle(0). Heading: absolute top-4 left-5 md:top-6 md:left-7, text-white md:text-black text-2xl md:text-3xl font-bold z-10, text "Smile Gallery". Subtitle: absolute bottom-4 left-5 md:bottom-6 md:left-7, text-white md:text-black text-xs md:text-sm font-semibold z-10, text "Our cosmetic dental work". Card 1 - Top Right (spans 2 rows on desktop): MaskedCard: md:row-span-2 rounded-xl md:rounded-2xl overflow-hidden relative min-h-[200px] md:min-h-0. Animated: s2Reveal.getAnimStyle(1). Text: absolute bottom-16 left-5 md:bottom-20 md:left-7, text-white text-xs md:text-sm font-semibold leading-4 md:leading-5 z-10, content: "If you want a gorgeous smile," <br/> "call us to ask about a smile makeover." Button: absolute bottom-4 right-4 md:bottom-6 md:right-6, px-5 py-3 md:px-8 md:py-5 bg-white rounded-full text-black text-base md:text-xl font-bold z-10 hover:scale-105 transition-transform, text "Call Us". Card 2 - Bottom Left ("Smile makeover"): MaskedCard: rounded-xl md:rounded-2xl overflow-hidden relative min-h-[160px] md:min-h-0. Animated: s2Reveal.getAnimStyle(2). Heading: absolute top-4 left-5 md:top-6 md:left-7, text-white md:text-black text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.9] z-10, content: "Smile" <br/> "makeover". Card 3 - Bottom Full Width (Services): MaskedCard: col-span-1 md:col-span-2 rounded-xl md:rounded-2xl overflow-hidden relative min-h-[200px] md:min-h-0. Animated: s2Reveal.getAnimStyle(3). Inner container: absolute inset-0 z-10 flex flex-wrap md:flex-nowrap gap-1.5 md:gap-2 p-2 md:p-3. 4 service sub-cards mapped from services array: Container: flex-1 min-w-[calc(50%-4px)] md:min-w-0 rounded-xl md:rounded-2xl p-3 md:p-5 flex flex-col justify-between. Active: bg-white/90 backdrop-blur-md. Inactive: bg-white/20 backdrop-blur-xl. Service name: <h3> with text-xl md:text-4xl font-bold leading-[1.05] whitespace-pre-line, color: active=text-black, inactive=text-white. Number badge (if svc.num exists): self-end w-8 h-8 md:w-12 md:h-12 rounded-full border flex items-center justify-center text-xs md:text-sm font-semibold. Active: border-black text-black. Inactive: border-white text-white.

SECTION 3 - IMPLANT DENTISTRY: Container: <section>, min-h-screen md:h-screen w-full overflow-hidden flex flex-col, pt-1.5 md:pt-2 px-3 md:px-5 pb-1.5 md:pb-2 gap-1.5 md:gap-2. Attach s3Reveal.containerRef to this element. Does NOT use MaskedCard technique. Uses regular <img> tags and solid backgrounds. Grid: flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2. LEFT COLUMN: flex flex-col gap-1.5 md:gap-2. 1. Heading Card: <div>: rounded-xl md:rounded-2xl bg-stone-50 p-5 md:p-7 flex flex-col justify-between flex-[1.2] min-h-[180px] md:min-h-0. Animated: s3Reveal.getAnimStyle(0). Heading: <h2> with text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[0.95] text-black, content: "Implant" <br/> "Dentistry". Subtitle: <p> with text-xs md:text-sm font-semibold text-black, text "Restore Missing Teeth". 2. Two Image Cards (side by side): Wrapper: <div> with flex gap-1.5 md:gap-2 flex-1 min-h-[140px] md:min-h-0. Animated: s3Reveal.getAnimStyle(1). Left image: <div className="flex-1 rounded-xl md:rounded-2xl overflow-hidden"><img src={SECTION3_IMG1} alt="Dental implant procedure" className="w-full h-full object-cover" /></div>. Right image: <div className="flex-1 rounded-xl md:rounded-2xl overflow-hidden"><img src={SECTION3_IMG2} alt="Dental restoration" className="w-full h-full object-cover" /></div>. 3. Consultation Card: <div>: rounded-xl md:rounded-2xl bg-zinc-200 p-5 md:p-7 flex items-end justify-between flex-[0.8] min-h-[160px] md:min-h-0. Animated: s3Reveal.getAnimStyle(2). Left content block: Label: <p> with text-xs md:text-sm font-semibold text-black mb-2 md:mb-3, text "Consultation". Heading: <h3> with text-xl md:text-3xl font-bold text-black leading-6 md:leading-8, content: "Dental" <br/> "Restoration" <br/> "Services". Button: px-5 py-3 md:px-8 md:py-5 bg-white rounded-full text-black text-base md:text-xl font-bold hover:scale-105 transition-transform, text "Book Online". RIGHT COLUMN: Single tall image card. <div>: rounded-xl md:rounded-2xl overflow-hidden relative min-h-[350px] md:min-h-0. Animated: s3Reveal.getAnimStyle(3). Background image: <img src={SECTION3_BG} alt="Smiling patient" className="w-full h-full object-cover" />. Overlay container: absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-5 flex gap-1.5 md:gap-2. Overlay Card 1 (white, left): flex-1 bg-white rounded-xl md:rounded-2xl p-3 md:p-5 flex flex-col justify-between h-36 md:h-52. Heading: <h4> with text-lg md:text-2xl font-bold text-black leading-5 md:leading-7, content: "The Process" <br/> "of Installing" <br/> "Implants". Arrow icon: self-end w-9 h-9 md:w-12 md:h-12 rounded-full border border-black flex items-center justify-center. SVG: width="14" height="14" viewBox="0 0 14 14" fill="none", class rotate-[-45deg]. Path: d="M1 7h12m0 0L8 2m5 5L8 12" with stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round". Overlay Card 2 (glass, right): flex-1 bg-white/20 backdrop-blur-xl rounded-xl md:rounded-2xl p-3 md:p-5 flex flex-col justify-between h-36 md:h-52. Heading: <h4> with text-lg md:text-2xl font-bold text-white leading-5 md:leading-7, content: "Caring" <br/> "for Dental" <br/> "Implants". Arrow icon: self-end w-9 h-9 md:w-12 md:h-12 rounded-full border border-white flex items-center justify-center. Same SVG as above but with added class text-white.

OUTER WRAPPER: The entire app is wrapped in <div className="bg-white"> containing: 1. {showSplash && <SplashScreen />} (conditionally rendered) 2. <Navbar /> 3. Section 1 4. Section 2 5. Section 3.

KEY DESIGN RULES: Spacing between sections: Only pb-1.5 md:pb-2 on each section and pt-1.5 md:pt-2 on sections 2 and 3 -- virtually seamless. Border radius: All cards use rounded-xl md:rounded-2xl with overflow-hidden. Color palette: Strictly black, white, and translucent white (bg-white/20, bg-white/90) with backdrop-blur-md or backdrop-blur-xl. Background fills: bg-stone-50 and bg-zinc-200 for Section 3 solid cards. Typography: Heavy bold/extrabold, clamp() for responsive headings, extremely tight leading (0.79, 0.9, 0.95, 1.05). Interactions: hover:scale-105 transition-transform on CTA buttons. Responsive: Single md: (768px) breakpoint. Stacked on mobile, grid on desktop. No external packages beyond React and Tailwind.`

/**
 * Securify — 原始创建 prompt 归档
 */
const SECURIFY_PROMPT = `Build a full-screen hero section for a data-security SaaS landing page called "securify" using React + TypeScript + Tailwind CSS, with a looping fullscreen background video, a floating pill-shaped navbar, and large staggered typography.

Fonts & Global Styles

Load Google font "Readex Pro" weights 300, 400, 500, 600, 700.
Set body font-family: 'Readex Pro', system-ui, -apple-system, sans-serif;, background #000, color #fff, antialiased.
Make html, body, #root height 100%.
Add a .hero-title class with letter-spacing: -0.04em; line-height: 0.95;.
Section container

A <section> with classes: relative h-screen w-full overflow-hidden bg-black.
Background video

<video> with className="absolute inset-0 w-full h-full object-cover", autoPlay loop muted playsInline, and src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_063509_7d167302-4fd4-480b-8260-18ab572333d4.mp4".
Navbar (absolute, z-20, px-6 md:px-10 pt-6, top-0 left-0 right-0)

A <nav> with flex items-center justify-between gap-4.
Left pill: flex items-center gap-2 bg-neutral-900/90 backdrop-blur rounded-full pl-4 pr-6 py-3 containing:
A custom white SVG logo (viewBox 0 0 256 256, class h-5 w-5) with path: M 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 128 L 64 128 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z M 128 64 L 128 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 Z M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 128 0 L 192 0 Z filled #ffffff.
Brand text "securify" (text-white text-sm font-normal tracking-tight).
Center pill (hidden on mobile): hidden md:flex items-center gap-1 bg-neutral-900/90 backdrop-blur rounded-full px-3 py-2 with four anchor links: "platform", "solutions", "company", "support" — each text-neutral-300 hover:text-white transition-colors text-sm px-5 py-2 rounded-full.
Right button: "get started" — bg-white text-black text-sm font-normal rounded-full px-6 py-3 hover:bg-neutral-200 transition-colors.
Foreground content wrapper: relative h-full w-full (rendered after Navbar, above the video).

Three giant staggered headline words (each an <h1> with class hero-title absolute text-white font-medium text-[14vw] md:text-[13vw]):

"protect" — left-4 md:left-10 top-[18%]
"your" — right-4 md:right-10 top-[38%]
"data" — left-[18%] md:left-[28%] top-[58%]
All lowercase.

Description paragraph (absolute, left-6 md:left-10 top-[46%], max-w-[240px] text-[15px] leading-snug text-white/90):

"we can guarding your data with utmost care, empowering you with privacy everywhere"

Stat block — top-right (absolute right-6 md:right-24 top-[14%]):

Row: flex items-center gap-3 justify-end — a diagonal divider (hidden md:block h-px w-24 bg-white/40 rotate-[20deg]) then number "+65k" (text-4xl md:text-5xl font-medium tracking-tight).
Sublabel: "startups use" (text-xs md:text-sm text-white/70 mt-1 text-right).
Bottom gradient overlay: pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black.

Stat block — bottom-left (absolute left-6 md:left-20 bottom-20 md:bottom-24):

Row: number "+1.5b" then divider hidden md:block h-px w-24 bg-white/40 rotate-[-20deg].
Sublabel: "gb data was protected" (text-xs md:text-sm text-white/70 mt-1).
Stat block — bottom-right (absolute right-6 md:right-20 bottom-16 md:bottom-20):

Row: diagonal divider rotate-[-20deg] then "+300k".
Sublabel: "downloads" (right-aligned, text-white/70).
Notes

All text is lowercase.
Navbar pills use bg-neutral-900/90 backdrop-blur.
Only transitions: hover:text-white on nav links, hover:bg-neutral-200 on the button.
No purple/indigo anywhere; palette is pure black, white, neutral-900, and white opacity variants (white/40, white/70, white/90).
Responsive: mobile hides nav links and diagonal dividers; typography scales via vw units.`

/**
 * TOONHUB — 原始创建 prompt 归档
 */
const TOONHUB_PROMPT = `Build a single full-viewport hero section in React + TypeScript + Vite + Tailwind CSS, using \`lucide-react\` for icons. The component is a character-figurine carousel called "TOONHUB".

**Fonts (load in \`index.html\` head):**
\`\`\`html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
\`\`\`
Body font: \`'Inter', sans-serif\`. Display font (huge ghost text + bottom-right link): \`'Anton', sans-serif\`.

**Image data (4 items, exact URLs and colors):**
\`\`\`ts
const IMAGES = [
  { src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/1.02464a56.png', bg: '#F4845F', panel: '#F79B7F' },
  { src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/2.b977faab.png', bg: '#6BBF7A', panel: '#85CC92' },
  { src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/3.4df853b4.png', bg: '#E882B4', panel: '#ED9DC4' },
  { src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/4.4457fbce.png', bg: '#6EB5FF', panel: '#8DC4FF' },
];
\`\`\`
Preload all 4 images on mount via \`new Image()\`.

**State & logic:**
- \`activeIndex\` (0–3), \`isAnimating\` boolean lock, \`isMobile\` (\`window.innerWidth < 640\`, updated on resize).
- \`navigate('next' | 'prev')\`: ignore if animating; set \`isAnimating=true\`; bump \`activeIndex\` \`(prev+1)%4\` or \`(prev+3)%4\`; release lock after \`650ms\`.
- Roles derived from activeIndex: \`center=activeIndex\`, \`left=(activeIndex+3)%4\`, \`right=(activeIndex+1)%4\`, \`back=(activeIndex+2)%4\`.

**Layout structure:**
Outer \`<div>\` has \`backgroundColor: IMAGES[activeIndex].bg\`, transition \`background-color 650ms cubic-bezier(0.4,0,0.2,1)\`, \`fontFamily: 'Inter, sans-serif'\`, \`relative w-full overflow-hidden\`. Inside, a \`relative w-full\` div with \`height: 100vh; overflow: hidden\`.

1. **Grain overlay** (\`absolute inset-0 pointer-events-none\`, zIndex 50): SVG fractalNoise data URI, \`baseFrequency=0.9\`, \`numOctaves=4\`, opacity 0.08 inside SVG, container \`opacity: 0.4\`, \`backgroundSize: 200px 200px\`, repeat.

2. **Giant ghost text "3D SHAPE"** (\`absolute inset-x-0 flex items-center justify-center pointer-events-none select-none\`, zIndex 2, \`top: 18%\`): font Anton, \`fontSize: clamp(90px, 28vw, 380px)\`, weight 900, color white, opacity 1, lineHeight 1, uppercase, letterSpacing \`-0.02em\`, whiteSpace nowrap.

3. **Top-left brand label "TOONHUB"** (\`absolute top-6 left-4 sm:left-8\`, zIndex 60): \`text-xs font-semibold uppercase\`, white, opacity 0.9, letterSpacing \`0.18em\`.

4. **Carousel** (\`absolute inset-0\`, zIndex 3): map all 4 IMAGES; each item is \`position:absolute\`, \`aspectRatio: '0.6 / 1'\`, with role-based styles below. Inside, an \`<img>\` \`width:100%; height:100%; objectFit:contain; objectPosition:bottom center; draggable=false\`.

   Per-role style:
   - **center**: \`transform: translateX(-50%) scale(\${isMobile?1.25:1.68})\`, no blur, opacity 1, zIndex 20, \`left:50%\`, \`height: isMobile?'60%':'92%'\`, \`bottom: isMobile?'22%':0\`.
   - **left**: \`translateX(-50%) scale(1)\`, blur 2px, opacity 0.85, zIndex 10, \`left: isMobile?'20%':'30%'\`, \`height: isMobile?'16%':'28%'\`, \`bottom: isMobile?'32%':'12%'\`.
   - **right**: same as left but \`left: isMobile?'80%':'70%'\`.
   - **back**: \`translateX(-50%) scale(1)\`, blur 4px, opacity 1, zIndex 5, \`left:50%\`, \`height: isMobile?'13%':'22%'\`, \`bottom: isMobile?'32%':'12%'\`.

   Transition on each item: \`transform 650ms cubic-bezier(0.4,0,0.2,1), filter 650ms ..., opacity 650ms ..., left 650ms ...\`. \`willChange: transform, filter, opacity\`.

5. **Bottom-left text + nav buttons** (\`absolute bottom-6 left-4 sm:bottom-20 sm:left-24\`, zIndex 60, \`maxWidth:320px\`):
   - \`<p>\` "TOONHUB FIGURINES" — bold uppercase, tracking-widest, \`mb-2 sm:mb-3 text-base sm:text-[22px]\`, white, opacity 0.95, letterSpacing \`0.02em\`.
   - \`<p>\` (hidden on mobile, \`hidden sm:block\`): "The artwork is stunning, shipped fully prepared. The finish is a vision, the 3D craft is flawless. Many thanks! Wishing you the win. Order now." — \`text-xs sm:text-sm\`, white, opacity 0.85, lineHeight 1.6, \`mb-4 sm:mb-5\`.
   - Two circular buttons (\`w-12 h-12 sm:w-16 sm:h-16\`, transparent bg, 2px white border, white icon): \`ArrowLeft\` and \`ArrowRight\` from lucide-react, size 26, strokeWidth 2.25. On hover: scale 1.08 + bg \`rgba(255,255,255,0.12)\`. Transition \`transform 150ms, background-color 150ms\`. Click triggers \`navigate('prev')\` / \`navigate('next')\`.

6. **Bottom-right link "DISCOVER IT"** (\`absolute bottom-6 right-4 sm:bottom-20 sm:right-10\`, zIndex 60): \`<a>\` flex items-center, font Anton, \`fontSize: clamp(20px, 4vw, 56px)\`, weight 400, white, opacity 0.95→1 on hover (200ms), letterSpacing \`-0.02em\`, lineHeight 1, uppercase, no underline. Followed by \`ArrowRight\` (\`w-5 h-5 sm:w-8 sm:h-8\`, strokeWidth 2.25).

**Behavior summary:** clicking arrows rotates roles; background color, image positions, scales, blurs, and opacities all crossfade simultaneously over 650ms with \`cubic-bezier(0.4,0,0.2,1)\`. The character images sit at the bottom of the screen overlapping the giant "3D SHAPE" text behind them.`

/**
 * Cinematic — 原始创建 prompt 归档
 */
const CINEMATIC_PROMPT = `PROMPT:

Build a full-viewport cinematic movie/streaming hero section using React, Tailwind CSS, and Lucide React icons. Use the Inter font from Google Fonts. The entire page is a single full-height hero -- no scrolling, no additional sections.

BACKGROUND VIDEO:

A full-screen background video plays on loop, muted, autoplaying, covering the entire viewport with object-cover. The video is fixed-positioned behind everything at z-index 0.

Video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4

BOTTOM BLUR OVERLAY (no gradient darkening):

Over the video, there is a single fixed, full-screen overlay div that applies a strong backdrop-blur-xl. This div uses a CSS mask so the blur only appears at the bottom and fades to transparent toward the middle of the screen. There is NO dark gradient overlay -- only blur.

The mask: mask-image: linear-gradient(to top, black 0%, transparent 45%) (with the -webkit- prefix too).

This overlay is pointer-events-none and sits at z-index 1.

FONT:

Import Inter from Google Fonts (weights 300-700). Set font-family: 'Inter', sans-serif on the body.

LIQUID GLASS EFFECT (used on multiple buttons):

Create a reusable .liquid-glass CSS class with these exact properties:

background: rgba(255, 255, 255, 0.01) with background-blend-mode: luminosity
backdrop-filter: blur(4px) (with -webkit- prefix)
border: none
box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1)
position: relative; overflow: hidden
A ::before pseudo-element that creates a thin glowing border effect:
position: absolute; inset: 0; border-radius: inherit; padding: 1.4px
background: linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%)
Uses -webkit-mask with linear-gradient(#fff 0 0) content-box and linear-gradient(#fff 0 0) combined with -webkit-mask-composite: xor and mask-composite: exclude to create a border-only gradient stroke
pointer-events: none
BLUR-FADE-UP ANIMATION (used on every element with staggered delays):

Create a @keyframes blurFadeUp animation:

From: opacity: 0; filter: blur(20px); transform: translateY(40px)
To: opacity: 1; filter: blur(0); transform: translateY(0)
The .animate-blur-fade-up class applies this as animation: blurFadeUp 1s ease-out forwards with initial opacity: 0. Each element on the page gets a staggered animationDelay via inline style.

NAVBAR (z-index 50, relative positioned):

A horizontal navbar with justify-between, padding px-4 sm:px-6 md:px-12 py-4 md:py-6.

Left: A text logo (e.g. your brand name like "CINEMATIC" or similar) styled as h-8 md:h-10, with blur-fade-up animation at delay 0ms.

Center (desktop only, hidden below lg): Navigation links -- "Movies", "TV Series", "Editor's Pick", "Interviews", "User Reviews" -- each as an anchor with text-sm, hover:text-gray-300 transition-colors, and staggered blur-fade-up delays from 100ms to 300ms (50ms increments).

Right: Two buttons visible on sm and up:

A "Search" button -- rounded-full liquid-glass pill with the text "Search" and a Lucide Search icon (size 18), padding px-4 md:px-6 py-2, blur-fade-up at 350ms.
A user/profile circle button -- w-10 h-10 rounded-full liquid-glass with a Lucide User icon (size 18), blur-fade-up at 400ms.
A hamburger menu button visible only below lg -- w-10 h-10 rounded-full liquid-glass with animated icon transition between Lucide Menu and X icons. The transition uses rotate-180, opacity, and scale-50 with duration-500 ease-out. Blur-fade-up at 350ms.
MOBILE MENU (below lg breakpoint):

An absolutely positioned dropdown below the navbar (top-[72px]), z-index 40. It slides in with translate-y-0 opacity-100 when open, -translate-y-4 opacity-0 pointer-events-none when closed, duration-500 ease-out.

Background: bg-gray-900/95 backdrop-blur-lg with border-t border-b border-gray-800 shadow-2xl.
Contains the same 5 nav links, each in a column with py-3 px-3 rounded-lg, hover:bg-gray-800/50, and staggered slide-in animations (translate-x based, 50ms delay increments).
Below sm, also shows Search and Profile buttons in a bordered section at the bottom.
HERO CONTENT (bottom of viewport):

A flex container that grows to fill remaining space and aligns content to the bottom (flex-1 flex flex-col justify-end), with padding px-4 sm:px-6 md:px-12 pb-8 md:pb-16, z-index 10.

Inside, a flex-col md:flex-row items-end gap-8 layout:

Left side (flex-1):

Metadata row -- a horizontal flex-wrap row with gap-3 sm:gap-6 mb-6 md:mb-8 text-xs sm:text-sm, blur-fade-up at 300ms:

Star icon (size 16, fill-white, responsive to sm:w-5 sm:h-5) + "8.7/10 IMDB" (font-medium)
Clock icon (size 16) + "132 min"
Calendar icon (size 16) + "April, 2025"
Title -- text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal, letter-spacing -0.04em, mb-4 md:mb-6, blur-fade-up at 400ms. Text: "Step Through. Work Smarter."

Description -- text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-12 max-w-2xl, blur-fade-up at 500ms. Text: "A voyage through forgotten realms, where past and future intertwine."

CTA buttons -- flex-wrap row with gap-3 sm:gap-4:

"Watch Now" -- bg-white text-black rounded-full font-medium, px-6 sm:px-8 py-2.5 sm:py-3, with a Lucide Play icon (size 18, fill-black), hover:bg-gray-200, blur-fade-up at 600ms.
"Learn More" -- rounded-full font-medium liquid-glass, same padding, blur-fade-up at 700ms.
Right side (navigation arrows):

A row of two pill buttons (md:w-auto, aligned right on desktop, left on mobile):

"Previous" button -- rounded-full liquid-glass, px-4 sm:px-6 py-2.5 sm:py-3, with Lucide ChevronLeft icon, blur-fade-up at 800ms.
"Next" button -- same styling with Lucide ChevronRight icon, blur-fade-up at 900ms.
COLOR PALETTE:

Background: pure black (bg-black)
Text: white, with text-gray-400 for the subtitle
All interactive glass elements use the .liquid-glass class (nearly transparent white with blur)
The only solid-colored element is the "Watch Now" button (white background, black text)
STAGGER TIMING SUMMARY:

Logo: 0ms
Nav links: 100ms, 150ms, 200ms, 250ms, 300ms
Search button: 350ms
User button: 400ms
Metadata row: 300ms
Title: 400ms
Description: 500ms
Watch Now: 600ms
Learn More: 700ms
Previous: 800ms
Next: 900ms
RESPONSIVE BREAKPOINTS:

Below sm (< 640px): Smaller text, tighter padding, Search/User buttons hidden (available in mobile menu)
Below lg (< 1024px): Nav links hidden, hamburger menu shown
md and up: Side-by-side layout for hero content and navigation arrows
lg and up: Full desktop navbar with all links visible`

/**
 * Marketeam — 原始创建 prompt 归档
 */
const MARKETEAM_PROMPT = `Create a single-page React + Vite landing page for "Marketeam" -- a marketing talent platform. Use Inter (400, 500, 600, 700) and Urbanist (600, 700) from Google Fonts. The page is a full-viewport hero with a header, left content area, right animated circles visualization, and a bottom logo ticker strip.

BACKGROUND: Full-page background image covering the entire viewport: https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_111401_56af5012-2263-45d3-849a-8688084d7c2a.png&w=1280&q=85. Applied as background: url(...) center center / cover no-repeat on the root .app container.

HEADER: Flexbox row, justify-content: space-between, padding 24px 64px, max-width 1920px, centered. Left side: Logo image + nav links. Logo: <img> with height 32px from: https://polo-pecan-73837341.figma.site/_assets/v11/17ae538989a509947a8de3892c644664895e69b1.png. Nav links: "Your Team", "Solutions", "Blog", "Pricing" -- color #000000, 15px, font-weight 400, with underline animation on hover (scaleX from 0 to 1, transform-origin left, 0.3s ease). Right side: "Log In" link + "Join Now" button. Log In: color #ffffff, 15px, weight 500, same underline hover as nav but white. Join Now: pill button (border-radius 50px), black bg (#000000), white text, padding 12px 26px, 15px, weight 500. On hover a #A068FF fill slides in from left using ::after with translateX(-100%) to translateX(0), cubic-bezier(0.22, 1, 0.36, 1), 0.4s. Button uses overflow: hidden. The button is wrapped in a .btn-border-wrap div that has a rotating conic-gradient border using ::before with inset: -3px, padding: 3px, mask technique for border-only effect. The gradient is: conic-gradient(from var(--border-angle), #A068FF, #070319, #A068FF, #070319, #A068FF). It rotates via CSS @property --border-angle from 0deg to 360deg in 3s linear infinite.

HERO LEFT: flex: 0 1 600px, padding-top: 40px. Heading: Typewriter effect, font Urbanist, 64px, weight 600, line-height 64px, letter-spacing -1.5px. Text: "Unlock Top Marketing Talent You Thought Was Out of Reach -- Now Just One Click Away!". The first 67 characters are colored #000000, the rest #ffffff. A blinking purple cursor (#A068FF) appears during typing. Typing speed: 35ms per character, starts after 400ms delay. "Start Project" button: Same pill style as Join Now but slightly larger (padding 14px 28px, 16px), bg #060218. Has a right-arrow chevron SVG icon (18x18). Hover fill slides from right (translateX(100%) to translateX(0)). Also wrapped in .btn-border-wrap with the same rotating gradient border. Appears after typing finishes (animation-delay 3.2s). Cursor element: A purple cursor icon (SVG: pointer arrow filled #A068FF) + "David" label (pill badge, bg #A068FF, white text, 16px, weight 500, padding 8px 16px, border-radius 20px). Positioned margin-left: 290px, margin-top: 40px. Appears with animation-delay 3.6s.

HERO RIGHT -- CIRCLES VISUALIZATION: Container: 720x720px, centered. 4 concentric circles (orbits), each rotating slowly: Orbit 1 (innermost): 353px diameter, spins left (counterclockwise) 30s. Orbit 2: 501px diameter, spins right 40s. Orbit 3: 649px diameter, spins right 50s. Orbit 4 (outermost): 797px diameter, spins left 60s. Each circle has a 1px gradient border: linear-gradient(180deg, rgba(217, 161, 255, 0) 0%, rgba(217, 161, 255, 1) 43%, rgba(217, 161, 255, 0) 100%) applied via the mask technique. Center circle (orbit-1): Displays an animated count-up number "20k+" (Urbanist 64px, weight 500) and "Specialists" label (Urbanist 16px, weight 600). Counter-rotates to stay upright. Avatars placed on orbits using transform: translate(-50%, -50%) rotate(Xdeg) translate(radius) rotate(-Xdeg). Avatar images (58px default, some 78px/88px) from these URLs:
- https://polo-pecan-73837341.figma.site/_assets/v11/aa51718fb3af3637e6d666b6543fc27a175fada6.png (orbit 1, at 270deg, 177px radius, square with border-radius 20px, purple glow)
- https://polo-pecan-73837341.figma.site/_assets/v11/ca755f7f93c1126fb8bdbf99ab364a33aa9ab272.png (orbit 2, at 60deg, 251px, round, yellow glow)
- https://polo-pecan-73837341.figma.site/_assets/v11/dc01064c7093dcc32674876ee3cf5e41c4a485c6.png (orbit 2, at 180deg, 251px, 78px, pink glow)
- https://polo-pecan-73837341.figma.site/_assets/v11/d5470a58b02388336141575048720f19a50de832.png (orbit 2, at 300deg, 251px, square border-radius 20px, blue glow)
- https://polo-pecan-73837341.figma.site/_assets/v11/018736aa5d0275c4ce56cfebaf2ae3007d81ca1e.png (orbit 3, at 130deg, 325px, 88px, pink glow)
- https://polo-pecan-73837341.figma.site/_assets/v11/c76d8a0b99676de31c014344bfaf75bad090758d.png (orbit 4, at 30deg, 399px, purple glow)
- https://polo-pecan-73837341.figma.site/_assets/v11/7b1b5f039de7b54cc9913e96c1923c3b15a157fa.png (orbit 4, at 95deg, 399px, 88px, square border-radius 24px, orange glow)
- https://polo-pecan-73837341.figma.site/_assets/v11/9ae171d8895199349755c43fbff00e122221a027.png (orbit 4, at 220deg, 399px, 88px, square border-radius 24px, pink glow)
- https://polo-pecan-73837341.figma.site/_assets/v11/926c9eb7b4bc1df846fa0e39f0b0dc3fefd80671.png (orbit 4, at 320deg, 399px, purple glow)
Each avatar has a staggered fly-in animation (scale 0.3 + rotate -180deg + blur -> normal), delays from 0.6s to 2.3s.

LOGO TICKER (BOTTOM): Horizontal infinitely scrolling strip of partner logos, gap: 64px, 20s animation. Fade masks on left/right edges (linear-gradient mask). 5 unique SVG logos repeated 4x for seamless loop:
- https://polo-pecan-73837341.figma.site/_assets/v11/1e7b0e6fcc016cd28aec5c68990118b8c54c35a5.svg
- https://polo-pecan-73837341.figma.site/_assets/v11/3eac03c183db2ae080d910159211c14843398b61.svg
- https://polo-pecan-73837341.figma.site/_assets/v11/17705a4c0023a0e5a99154dfb10582adbbf4260b.svg
- https://polo-pecan-73837341.figma.site/_assets/v11/0e5f442b09dc5c248e3e60d40a65505fb1887228.svg
- https://polo-pecan-73837341.figma.site/_assets/v11/63f99030ceb459e3c9ab9e429cfa2353491d3816.svg
Each logo: width: 137px, height: 40px, object-fit: contain.

ENTRANCE ANIMATIONS: Header: fade-down (translateY -20px to 0, 0.8s). Hero left: fade-up (translateY 40px to 0, 1s). Hero right circles: scale-in (scale 0.85 to 1 + opacity, 1.2s, delay 0.3s). Logos section: fade-up, delay 0.6s. All using cubic-bezier(0.22, 1, 0.36, 1) easing.

RESPONSIVE BREAKPOINTS: 1280px: circles scale 0.85. 1024px: stack layout (flex-direction column), heading 48px, circles scale 0.7, nav gap shrinks. 768px: hide nav, heading 36px, circles scale 0.5. 480px: heading 28px, circles scale 0.4, smaller buttons/logos.

KEY COLORS: Primary accent: #A068FF. Background dark: #060218 / #070319. Text dark: #000000. Text light: #ffffff. Body bg fallback: #0a0a0a.

TECHNICAL DETAILS: React (useState, useEffect, useRef), Vite build. Custom useCountUp hook: animates 0 to 20 over 2s with easeOutCubic, starts after 1.2s delay. TypewriterHeading component: types char by char at configurable speed. CSS @property --border-angle for the animated border gradient. No external animation libraries -- pure CSS animations + JS for typewriter/counter.`

/**
 * Foldcraft — 原始创建 prompt 归档
 */
const FOLDCRAFT_PROMPT = `Create a fullscreen hero landing page for a creative studio called "Foldcraft" using React, Tailwind CSS, and Lucide React icons. The page is a single viewport-height section with a looping background video, a responsive navbar, a mobile menu, and staggered-animated hero text.

**Video Background:**
- URL: \`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4\`
- Attributes: autoPlay, muted, loop, playsInline
- Styling: absolute positioned, full width/height, object-cover, object-position at 70% horizontal center
- The video sits behind all content (no z-index or z-0)

**Font:**
- Google Fonts: Geist (weights 300-700), loaded via \`<link>\` in index.html
- Tailwind config extends fontFamily with \`geist: ['Geist', 'sans-serif']\`
- Applied as \`font-geist\` on the root container
- Body CSS: \`-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale\`

**Root Container:**
- \`relative h-screen w-full overflow-hidden bg-black font-geist\`

**Navbar (z-30):**
- Flex, space-between, padding: \`px-6 py-5 md:px-12 lg:px-16\`
- Left side: Logo text "Foldcraft" (\`text-lg font-semibold tracking-tight text-white sm:text-xl\`) followed by desktop nav links (hidden on mobile, flex on md+)
- Nav links: Home, Projects, Studio, Reach Us (\`text-sm text-white/80 hover:text-white transition-colors\`)
- Right side (desktop): "Let's Talk" button (\`rounded-lg bg-white px-5 py-2 text-sm font-medium text-black hover:scale-105 transition-transform\`)
- Right side (mobile): hamburger toggle button (40x40, z-50) with animated Menu/X icons from lucide-react. Menu rotates 90deg out and X rotates in with opacity and scale transitions (duration-300). Button has \`active:scale-90\`.

**Mobile Menu (z-20):**
- Absolute, \`inset-x-0 top-0\`, full-screen overlay with \`bg-black/98 backdrop-blur-xl\`
- Transition: \`duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]\` toggling between \`h-screen opacity-100\` and \`h-0 opacity-0 pointer-events-none\`
- Inner content: centered vertically (\`flex h-full flex-col justify-center px-8\`), with a delayed fade + translate animation (delay-100, translate-y-8)
- Links: Home, Projects, Studio, Reach Us (\`text-3xl font-medium text-white/90 hover:text-white\`)
- Button: "Let's Talk" (\`mt-6 rounded-full bg-white px-8 py-3.5 text-base font-medium text-black hover:scale-105\`)
- All links/button call \`setMobileMenuOpen(false)\` on click

**Hero Content (z-10):**
- Flex column, justify-between, fills remaining height: \`h-[calc(100vh-80px)]\`
- Padding: \`px-6 pb-10 pt-12 sm:pb-12 sm:pt-16 md:px-12 md:pb-16 md:pt-20 lg:px-16\`

**Top Section (max-w-3xl):**
- Badge: "Brand & Visual Storytelling" (\`text-xs sm:text-sm text-white/90\`), with \`animate-[fadeSlideUp_0.8s_ease_0.2s_both]\`, margin-bottom 4 (sm:6)
- Heading h1: "Shaping visual / narratives, / one pixel at a time." with \`<br/>\` line breaks
  - Sizing: \`text-3xl sm:text-5xl md:text-6xl lg:text-7xl\`
  - Style: \`font-medium leading-[1.1] tracking-tight text-white\`
  - Animation: \`animate-[fadeSlideUp_0.8s_ease_0.4s_both]\`

**Bottom Section:**
- Paragraph: "Turning vision into reality through craft, motion, and an endless pursuit of beauty."
  - Style: \`text-sm sm:text-base md:text-lg leading-relaxed text-white/60 max-w-sm sm:max-w-lg mb-5 sm:mb-6\`
  - Animation: \`animate-[fadeSlideUp_0.8s_ease_0.7s_both]\`
- CTA Button: "Explore Work" with ArrowRight icon (size 16)
  - Style: \`rounded-lg bg-white px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-medium text-black hover:scale-105 transition-transform inline-flex items-center gap-2\`
  - Animation: \`animate-[fadeSlideUp_0.8s_ease_0.9s_both]\`

**CSS Animation (in index.css):**
\`\`\`css
@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
\`\`\`

**CSS Reset (in index.css):**
\`\`\`css
* { margin: 0; padding: 0; box-sizing: border-box; }
\`\`\`

**Dependencies:** React, lucide-react (ArrowRight, Menu, X), Tailwind CSS, Google Fonts Geist.`

/**
 * Mindloop — 原始创建 prompt 归档
 */
const MINDLOOP_PROMPT = `Build a dark monochrome landing page called Mindloop — a newsletter/content platform. Use React + Vite + TypeScript + Tailwind CSS + shadcn/ui + Framer Motion. Fonts: Inter (sans) and Instrument Serif (serif, used for italic accent words). The entire theme is pure black (#000) background with white foreground — no colors or gradients beyond monochrome. Install hls.js and framer-motion.

Design System (index.css)
All CSS variables in HSL (no hsl() wrapper in the variable, just the values):

--background: 0 0% 0%
--foreground: 0 0% 100%
--card: 0 0% 5%
--card-foreground: 0 0% 100%
--primary: 0 0% 100%
--primary-foreground: 0 0% 0%
--secondary: 0 0% 12%
--secondary-foreground: 0 0% 85%
--muted: 0 0% 15%
--muted-foreground: 0 0% 65%
--accent: 170 15% 45%
--accent-foreground: 0 0% 100%
--border: 0 0% 20%
--input: 0 0% 18%
--ring: 0 0% 40%
--hero-subtitle: 210 17% 95%
Liquid Glass Effect (global CSS class .liquid-glass)

.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
Animation Pattern
All sections use a reusable fadeUp helper with staggered delays:

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

Page Structure (top to bottom)
1. Navbar (fixed, transparent)
Left: Logo (concentric circles icon — outer w-7 h-7 with border-2 border-foreground/60, inner w-3 h-3 with border border-foreground/60) + "Mindloop" bold text.
Center-left: Nav links ["Home", "How It Works", "Philosophy", "Use Cases"] separated by • dots. Links are text-muted-foreground hover:text-foreground.
Right: 3 social icons (Instagram, Linkedin, Twitter from lucide-react) in liquid-glass circular buttons (w-10 h-10 rounded-full).
No background — fully transparent, fixed top-0 z-50, padding px-8 md:px-28 py-4.

2. Hero Section (full viewport height)
Background: autoplaying looping muted MP4 video covering the entire section.
Video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4
Bottom gradient: h-64 bg-gradient-to-t from-background to-transparent for smooth fade to black.
Content (centered, z-10, pt-28 md:pt-32):
Avatar row: 3 overlapping circular avatars (-space-x-2, w-8 h-8 rounded-full border-2 border-background) + "7,000+ people already subscribed" in text-muted-foreground text-sm.
Heading: text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] — "Get Inspired with Us" where "Inspired" is font-serif italic font-normal.
Subtitle: text-lg in hsl(var(--hero-subtitle)) color — "Join our feed for meaningful updates, news around technology and a shared journey toward depth and direction."
Email form: liquid-glass rounded-full p-2 max-w-lg container with email input and a white bg-foreground text-background rounded-full px-8 py-3 "SUBSCRIBE" button with whileHover scale 1.03 and whileTap scale 0.98.

3. "Search has changed" Section
Top padding pt-52 md:pt-64, bottom padding pb-6 md:pb-9.
Heading: text-5xl md:text-7xl lg:text-8xl — "Search has changed. Have you?" with "changed." in serif italic.
Subtitle: text-muted-foreground text-lg max-w-2xl mx-auto mb-24.
3 platform cards (grid md:grid-cols-3 gap-12 md:gap-8 mb-20): Each card has a 200x200 icon image centered, platform name (font-semibold text-base), and description (text-muted-foreground text-sm).
ChatGPT icon: local asset icon-chatgpt.png
Perplexity icon: local asset icon-perplexity.png
Google AI icon: local asset icon-google.png
Bottom tagline: "If you don't answer the questions, someone else will." in text-muted-foreground text-sm text-center.

4. Mission Section
Padding pt-0 pb-32 md:pb-44.
Video: Large 800x800 looping autoplaying muted video centered.
Video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4
Scroll-driven word-by-word reveal using useScroll and useTransform from framer-motion:
Paragraph 1 (text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px]): "We're building a space where curiosity meets clarity — where readers find depth, writers find reach, and every newsletter becomes a conversation worth having." Words "curiosity", "meets", "clarity" are highlighted in --foreground, rest in --hero-subtitle.
Paragraph 2 (text-xl md:text-2xl lg:text-3xl font-medium mt-10): "A platform where content, community, and insight flow together — with less noise, less friction, and more meaning for everyone involved."
Each word transitions opacity from 0.15 to 1 based on scroll progress.

5. Solution Section
Padding py-32 md:py-44, border-t border-border/30.
Label: "SOLUTION" in text-xs tracking-[3px] uppercase text-muted-foreground.
Heading: text-4xl md:text-6xl — "The platform for meaningful content" (serif italic on "meaningful").
Video: Rounded rounded-2xl, aspect-[3/1] object-cover.
Video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4
4-column feature grid (md:grid-cols-4 gap-8): Curated Feed, Writer Tools, Community, Distribution — each with title (font-semibold text-base) and description (text-muted-foreground text-sm).

6. CTA Section
Padding py-32 md:py-44, border-t border-border/30, overflow-hidden.
Background video (HLS via hls.js): absolute inset-0 object-cover z-0.
HLS URL: https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8
Uses Hls.isSupported() check with fallback to native HLS for Safari.
Overlay: absolute inset-0 bg-background/45 z-[1].
Content (z-10, centered):
Concentric circles logo icon (w-10 h-10 outer, w-5 h-5 inner).
Heading: "Start Your Journey" (serif italic).
Subtitle in text-muted-foreground.
Two buttons: "Subscribe Now" (bg-foreground text-background rounded-lg px-8 py-3.5) and "Start Writing" (liquid-glass rounded-lg).

7. Footer
Simple py-12 px-8 md:px-28 footer.
Left: "© 2026 Mindloop. All rights reserved." in text-muted-foreground text-sm.
Right: Privacy, Terms, Contact links in text-muted-foreground text-sm hover:text-foreground.

Key Dependencies
framer-motion for all animations
hls.js for the CTA background video streaming
@fontsource/inter (400, 500, 600, 700)
@fontsource/instrument-serif (400, 400-italic)
lucide-react for icons
tailwindcss-animate plugin

Assets Needed
3 avatar images (avatar-1.png, avatar-2.png, avatar-3.png)
3 platform icons (icon-chatgpt.png, icon-perplexity.png, icon-google.png)`

/**
 * Flowpath — 原始创建 prompt 归档
 */
const FLOWPATH_PROMPT = `Create a fullscreen hero section for a SaaS product called "flowpath" using React, Tailwind CSS, and Lucide React icons. The section should be a single \`<section>\` filling the viewport (\`h-screen w-full overflow-hidden\`).

**Background:**
- A looping, muted, autoplaying \`<video>\` element covering the full section with \`object-cover\`. Video URL: \`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260703_053131_1ec3dd1c-d627-44fb-ab20-6e1fce41b0d5.mp4\`
- A subtle dark overlay on top of the video: \`bg-black/10\`

**Font:**
- Use "Helvetica Now Text" as the primary font, loaded from: \`https://db.onlinewebfonts.com/c/08e020de1811ec4489f82d1247a42c09?family=Helvetica+Now+Text\`
- Fallback stack: \`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif\`
- Applied globally via \`* { font-family: ... }\` in CSS

**Navigation (top, not fixed/sticky):**
- Full-width with responsive horizontal padding (\`px-5 sm:px-6 md:px-12 lg:px-16\`) and vertical padding (\`py-4 sm:py-5\`)
- Logo: An inline SVG diamond shape (28x28) with two overlapping diamond paths at 0.9 and 0.5 opacity, followed by the text "flowpath" in white, \`text-lg sm:text-xl font-medium tracking-tight\`
- Desktop nav (hidden on mobile): horizontal flex with items "Product" (dropdown: Connections, Workflows, Insights), "Solutions" (dropdown: Guides, Use cases, API reference), "About" (dropdown: Our story, Open roles, Reach us), "Plans" (no dropdown)
- Nav buttons: \`text-white/90 hover:text-white text-sm font-medium\`, with a \`ChevronDown\` icon (3.5x3.5) that rotates 180 degrees when dropdown is open
- Dropdowns open on hover (onMouseEnter/onMouseLeave), positioned \`absolute top-full left-0\`, using a custom \`.liquid-glass\` class, \`rounded-xl py-3 px-2 min-w-[160px] shadow-xl\`. Dropdown items: \`text-white/80 hover:text-white text-sm rounded-lg hover:bg-white/5\`
- Desktop CTA: "Log in" link (\`text-white/90 hover:text-white text-sm font-medium\`) and "Try it free" button using \`.liquid-glass rounded-full px-5 py-2 text-white text-sm font-medium\`
- Mobile menu button: animated toggle between \`Menu\` and \`X\` icons with rotation/scale/opacity transitions (duration-300)
- Mobile menu: absolutely positioned below nav, slides in with \`cubic-bezier(0.16,1,0.3,1)\` easing over 400ms. Background: \`bg-[#2C221C]/95 backdrop-blur-xl rounded-2xl p-6\`. Shows all nav items with sub-items indented, plus a bordered footer with Log in and Try it free

**Hero Content (below nav, top-aligned, not vertically centered):**
- Container: \`flex-1 flex items-start justify-center\` with \`pt-16 sm:pt-20 md:pt-24\` for spacing from the nav
- Text wrapper: \`text-center max-w-3xl\`
- Heading \`<h1>\`: \`text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-[-0.02em]\`
  - Content (with line breaks):
    \`\`\`
    Bridge the
    gaps. <span class="text-white/60">Ditch the</span>
    <span class="text-white/60">grindwork.</span>
    \`\`\`
- Subheading \`<p>\`: \`text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto mt-6 sm:mt-8\`
  - Text: "Flowpath unifies your complete wellness tools, so your crew spends less energy plugging gaps and more on real progress."
- Two CTA buttons side by side (\`flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8\`):
  1. "Begin your journey" - solid white button: \`px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-gray-900 text-sm font-semibold rounded-full hover:bg-white/90\`
  2. "See it live" - glass button: \`px-5 sm:px-6 py-2.5 sm:py-3 liquid-glass rounded-full text-white text-sm font-semibold hover:bg-white/10\`

**Custom CSS (\`.liquid-glass\` class):**
\`\`\`css
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
\`\`\`

**Additional CSS utilities:**
\`\`\`css
@keyframes dropdown-in {
  from { opacity: 0; transform: translateY(-4px) scale(0.96); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
.animate-dropdown { animation: dropdown-in 0.2s ease-out; }
.duration-400 { transition-duration: 400ms; }
\`\`\`

**Important notes:**
- Dropdown elements need \`!absolute\` (Tailwind important modifier) to override the \`position: relative\` from \`.liquid-glass\`
- The entire section is fully responsive with breakpoints at sm, md, lg, xl
- No external UI libraries beyond Lucide React for icons
- Tailwind config is default with no extensions`

/**
 * RIVR — 原始创建 prompt 归档
 */
const RIVR_PROMPT = `Build a Hero section for a DeFi dashboard named RIVR showcasing a sleek, glassmorphism aesthetic. Please mimic these exact specifications to ensure a premium UI.

Dependencies: 
- Use \`lucide-react\` for icons.
- Use \`motion\` (imported from \`'motion/react'\`) for animations.

1. Global Styles (\`src/index.css\`)
Import the custom 'Helvetica Regular' font, set the Tailwind theme properly, and reset the body. Exact CSS to include:
@import "tailwindcss";

@font-face {
    font-family: "Helvetica Regular";
    src: url("https://db.onlinewebfonts.com/t/a64ff11d2c24584c767f6257e880dc65.eot");
    src: url("https://db.onlinewebfonts.com/t/a64ff11d2c24584c767f6257e880dc65.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/a64ff11d2c24584c767f6257e880dc65.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/a64ff11d2c24584c767f6257e880dc65.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/a64ff11d2c24584c767f6257e880dc65.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/a64ff11d2c24584c767f6257e880dc65.svg#Helvetica Regular")format("svg");
}

@theme {
  --font-helvetica: "Helvetica Regular", ui-sans-serif, system-ui, sans-serif;
}

:root {
  font-family: var(--font-helvetica);
}

body {
  margin: 0;
  overflow-x: hidden;
  background-color: #f0f0f0;
}

2. App Structure (\`src/App.tsx\`)
Create a single \`<main className="min-h-screen bg-[#f0f0f0]">\` instance that returns the \`<Hero />\` component.

3. Hero Component (\`src/components/Hero.tsx\`)
Outer wrapper: \`<div className="w-full h-screen flex items-center justify-center p-3 md:p-5 bg-[#f0f0f0]">\`.
Inner container: \`<section className="relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-none flex flex-col items-center bg-white/10 group">\`
Inside the \`<section>\`:
- The Video Background: 
  A \`<video>\` element with \`autoPlay muted loop playsInline\`. 
  Classes: \`absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0\`. 
  Source URL: \`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260428_193507_4286c423-2fd9-4efd-92bd-91a939453fc1.mp4\` (Must use exactly this URL).
- The Content Layer:
  A \`<div className="relative z-10 w-full h-full flex flex-col items-center">\`.
  Inside it, place: \`<Navbar />\`, the text container, \`<BottomLeftCard />\`, and \`<BottomRightCorner />\`.
- Text Container:
  \`<div className="w-full flex flex-col items-center pt-8 px-6 text-center max-w-4xl">\`. Inside it:
  - \`<HeroBadge />\`
  - A \`<motion.h1>\` with class: \`text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-normal text-[#5E6470] mb-2 tracking-tight leading-[1.05]\`. Text: "Fluid Asset Streams". Animation: initial={{ opacity: 0, scale: 0.98 }}, animate={{ opacity: 1, scale: 1 }}, transition={{ duration: 0.8, delay: 0.2 }}.
  - A \`<motion.p>\` with class: \`text-sm sm:text-base md:text-lg text-[#5E6470] opacity-80 leading-relaxed max-w-xl font-normal\`. Text: "Access Smart Vaults, stake RIVR, NFTs, transform rigid holdings into liquid cash instantly.". Animation: initial={{ opacity: 0 }}, animate={{ opacity: 1 }}, transition={{ duration: 0.8, delay: 0.4 }}.

4. Navbar Component (\`src/components/Navbar.tsx\`)
Wrapper: \`<nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full relative z-10">\`.
- Left Side (hidden spacer for centering): \`<div className="flex-1 hidden md:block" />\`
- Center Menu: \`<ul className="hidden md:flex items-center gap-8 text-[rgb(45,45,45)] font-normal text-sm">\`. Include items: Ecosystem, Economics (hasDropdown), Developers, Governance (hasDropdown). List items need: \`cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group\`. Append a \`ChevronRight\` icon (classes: \`w-4 h-4 transition-transform group-hover:translate-x-0.5\`) if hasDropdown is true.
- Mobile Logo: \`<div className="md:hidden"><span className="font-regular tracking-tighter text-xl text-[rgba(30,50,90,0.9)]">RIVR</span></div>\`
- Right Button: \`<div className="flex-1 flex justify-end">\` wrapping a \`<motion.button>\` (whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}). 
  Button classes: \`flex items-center bg-[rgba(30,50,90,0.8)] text-white rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-[rgba(30,50,90,1)] transition-colors group\`. Inside button: Add an icon wrapper \`<div className="bg-white/20 p-1 md:p-1.5 rounded-full flex items-center justify-center">\` containing \`ArrowUpRight\` (w-4 h-4 md:w-5 md:h-5 text-white), and a text node "Book Demo" (\`text-xs md:text-sm font-normal\`).

5. HeroBadge Component (\`src/components/HeroBadge.tsx\`)
Returns a \`<motion.div>\` (initial opacity 0, y 20; animate opacity 1, y 0; transition duration 0.6, ease "easeOut").
Classes: \`flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/20 mx-auto mb-3 w-fit\`.
Contents: \`<Sparkles className="w-4 h-4 text-[rgba(30,50,90,0.8)]" />\` and text \`<span className="text-[14px] font-normal text-[rgba(30,50,90,0.9)]">Fluid Staking</span>\`.

6. BottomLeftCard Component (\`src/components/BottomLeftCard.tsx\`)
Returns a \`<motion.div>\` (initial x: -20, opacity: 0; animate x: 0, opacity: 1; transition: duration 0.8, delay 0.2).
Position/Styling: \`absolute bottom-28 right-4 left-auto md:left-6 md:right-auto md:bottom-6 lg:bottom-10 lg:left-10 p-3 md:p-4 lg:p-5 rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[2.2rem] bg-white/30 backdrop-blur-xl flex flex-col gap-2 lg:gap-3 min-w-[140px] md:min-w-[150px] lg:min-w-[180px] w-fit\`.
- Top text block: column with "5.2K" (classes: \`text-2xl md:text-3xl font-normal text-[rgba(30,50,90,0.9)] tracking-tight\`) and "Active Yielders" (classes: \`text-[10px] md:text-[12px] font-normal text-[rgba(30,50,90,0.6)] uppercase tracking-wider\`).
- Join Discord \`<motion.button>\` (hover/tap scale 1.02/0.98). Classes: \`flex items-center bg-white rounded-full pl-1.5 pr-5 py-1.5 gap-2 hover:bg-white/90 transition-colors self-start group\`. Inside: wrap \`ArrowUpRight\` in \`<div className="bg-[rgba(30,50,90,0.1)] p-1 rounded-full ...">\` (using \`text-[rgba(30,50,90,0.9)]\` for icon) and append "Join Discord" text (\`text-[14px] font-normal text-[rgba(30,50,90,0.9)]\`).

7. BottomRightCorner Component (\`src/components/BottomRightCorner.tsx\`)
This requires a complex faux-cutout layout. Use a \`<motion.div>\` (initial y: 20, opacity: 0; animate y: 0, opacity: 1; duration: 0.8, delay: 0.4).
Classes: \`absolute bottom-0 right-0 p-3 pt-5 pl-8 sm:p-4 sm:pt-6 sm:pl-10 md:p-6 md:pt-8 md:pl-14 bg-[#f0f0f0] rounded-tl-[1.5rem] sm:rounded-tl-[2rem] md:rounded-tl-[3.5rem] flex items-center gap-3 sm:gap-4 md:gap-6\`.
CRITICAL corner masks to include inside this container:
- Top intersection mask: \`<div className="absolute -top-[1.5rem] sm:-top-[2rem] md:-top-[3.5rem] right-0 w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none"><svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M56 56V0C56 30.9279 30.9279 56 0 56H56Z" fill="#f0f0f0"/></svg></div>\`
- Left intersection mask: \`<div className="absolute bottom-0 -left-[1.5rem] sm:-left-[2rem] md:-left-[3.5rem] w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none"><svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M56 56H0C30.9279 56 56 30.9279 56 0V56Z" fill="#f0f0f0"/></svg></div>\`
Content: 
- Circle Icon: A div with \`bg-[rgba(30,50,90,0.05)] w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-[rgba(30,50,90,0.1)]\` using \`ArrowUpRight\` (\`text-[rgba(30,50,90,0.8)]\`).
- Info column containing title "Documentation" (\`text-[16px] md:text-[20px] font-normal text-[rgba(30,50,90,0.95)]\`). Below it, a line containing text "Library" and a \`ChevronRight\` icon wrapped in \`<div className="flex items-center gap-1 text-[rgba(30,50,90,0.6)] cursor-pointer hover:text-[rgba(30,50,90,0.8)] transition-colors"><span className="text-[12px] md:text-[15px] font-normal">...\``

/**
 * Alwayzz — 原始创建 prompt 归档
 */
const ALWAYZZ_PROMPT = `Build a creative agency hero landing page for "Alwayzz" using React + TypeScript with custom CSS (not Tailwind). Features: Inter (400-700) + Source Serif 4 (400/600 normal+italic) fonts. CSS variables: --bg #ffffff / --text #0a0a0a / --muted #6b6b6b / --button-bg #0a0a0a / --button-text #ffffff / --border-soft rgba(0,0,0,0.08) / --green #17c964. Navbar (fixed top z-100, max-width 1200px): left "Alwayzz" logo (Source Serif 4 30px weight 600 italic letter-spacing -0.08em + ® Inter 14px sup) + right Menu black pill button (14px weight 500 + ChevronUp 16px). Full-screen drawer (white bg, fade 0.4s): 5 links (Projects/Plans/Team/FAQs/Get in Touch) 48px weight 500 letter-spacing -0.04em + bottom copyright. Hero (min-height 850px, padding 160px 36px): ::before background image (higgs.ai webp object-cover center) + 20 decorative curves per side (2.5px solid #FCFAF8 border, line-pulse 5s ease-in-out infinite, 0.25s stagger) + marquee ticker (5 items: Brand Identity/App Development/Visual Design/Creative Video/Iconography, 30s linear infinite, edge fade mask) + title "Premium creative alwayzz® on demand." (82px, alwayzz in italic serif, ® sup 24px) + subtitle + dual CTA (View Plans black pill + Chat for 15 minutes white pill with avatar + green dot). TrustedBy marquee with 10 companies. Responsive breakpoints at 1200px and 810px.`

/**
 * Viktor — 原始创建 prompt 归档
 */
const VIKTOR_PROMPT = `626f6c742d63632d6167656e74Let me read all the relevant files to compile the full recreation prompt.
Here's the full recreation prompt:

---

## Prompt to Recreate This Hero Section

Build a full-screen hero section for a creative portfolio using React, Vite, Tailwind CSS, and the Figtree Google Font. The page has two components: a **Navbar** and a **Hero**. No additional packages beyond \`lucide-react\` (though it's not used here). The entire page is black background with white text.

---

### Setup

- **Font:** Figtree (400, 500, 600) from Google Fonts, loaded in \`index.html\`
- **Tailwind custom breakpoints (max-width based):**
  - \`mobile\`: max 809.98px
  - \`md-tablet\`: min 810px, max 1199.98px
- **CSS variable:** \`--ease-spring: cubic-bezier(0.16, 1, 0.3, 1)\`

---

### Video Background

Three full-screen looping videos (muted, autoPlay, playsInline, loop) stacked absolutely with crossfade switching. All three render simultaneously; only the active one has \`opacity-100\`, the others have \`opacity-0\` with \`transition-opacity duration-[1200ms] ease-in-out\`.

**Video URLs (CloudFront):**
1. \`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260629_030107_874273ea-684a-4e90-bb96-8fdfde48d53d.mp4\`
2. \`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260629_032424_3c9c2a9d-807b-4482-80e6-dd6d9dfd4545.mp4\`
3. \`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260627_094019_4214ea73-b963-46a4-8327-61489192de99.mp4\`

**Preloading:** On mount, fetch all videos as blobs and create object URLs for instant playback. Fall back to original URL on failure.

A \`bg-black/10\` overlay sits above videos at \`z-[1]\`.

---

### Navbar (absolute positioned, z-10, on top of hero)

- **Layout:** Centered container, max-width 1340px, \`py-9 px-[15px]\`
- **Left side:** Navigation items formatted as \`01 / Works\`, \`02 / Services\`, \`03 / About\`, \`04 / Contact\`
  - Index number: \`text-[8px] leading-3 tracking-[-0.08px] font-medium uppercase\`
  - Label: \`text-xs leading-4 tracking-[-0.12px] font-medium uppercase\`
  - Each link has a \`.nav-link-underline\` effect (underline slides in from right on hover via \`scaleX\` transform)
- **Right side (aligned right):** Email \`Davies@gmail.com\` and live clock showing \`CUP HH:MM:SS\` (24h format, updates every second using \`Intl.DateTimeFormat('en-GB')\`)
- **Mobile:** Nav items hidden, replaced by a \`Menu\`/\`Close\` toggle button. Mobile panel uses CSS Grid \`grid-rows-[0fr]\`/\`grid-rows-[1fr]\` transition (420ms, spring ease) for smooth expand/collapse. Mobile nav links are large: \`text-[28px] leading-8 tracking-[-0.84px]\`

---

### Hero Content (z-[2], relative)

Container: \`max-w-[1340px]\`, full height, flex column, \`justify-end items-end\`, \`gap-[150px]\`, \`pt-[190px] px-[15px]\`

**Section 1 - Video Switcher + Availability (upper area):**
- Left column (\`flex-[4]\`): Three buttons labeled \`01 / WATER WAVE\`, \`02 / GRIDWAVE\`, \`03 / LIGHT TUNNEL\`. Active button is full opacity, inactive is \`opacity-55\` with \`hover:opacity-75\`. On click, sets \`activeIndex\` to crossfade videos. Each has a \`.role-link\` class that translates 4px right on hover.
- Right column (\`flex-1\`): Pulsing dot + "Available for work" text. Dot is 7px circle with glow shadow and infinite pulse animation (scale 1 to 1.45, opacity 1 to 0.45, 1.6s). On slide 1, dot is \`#F598F2\` pink with pink glow. On slides 2-3, dot is white with white glow.

**Section 2 - Name + CTA (bottom area, pb-[60px]):**
- Left column (\`flex-[2]\`): Giant name "Viktor." in \`text-[200px] leading-[81%] tracking-[-6px] font-medium uppercase\`. The period is accent-colored: pink \`#F598F2\` on slide 1, white on slides 2-3. Animate in with \`revealUp\` (translateY 80px to 0, 0.9s spring ease).
- Right column (\`flex-1\`, \`pl-[50px]\`): Paragraph text ("I craft bold brands and modern websites with purpose...") at \`text-base leading-6 tracking-[-0.16px] font-medium\`. Below it, a "start a project" button (lowercase) with white border. Button has a fill-up hover effect: \`::before\` pseudo-element with \`#F598F2\` background that translateY from 101% to 0 on hover, text turns black, border turns pink. Both animate in with \`revealRight\` (translateX 100px to 0, 0.9s spring ease), button delayed by 0.08s.

**Reveal animations** trigger once via IntersectionObserver at 0.35 threshold.

---

### Responsive Tablet (810px-1199px)
- Navbar: \`py-[30px] px-[18px]\`, nav gaps shrink to \`gap-4\`
- Hero name: \`text-[129.6px] leading-[113.4px] tracking-[-7.7px]\`
- Bottom section: gap 28px, pb 52px, left padding 24px

### Responsive Mobile (<810px)
- Navbar: \`py-6 px-[18px]\`, desktop nav hidden, hamburger menu shown
- Hero content: \`justify-end items-start gap-[72px] pt-[140px] px-[18px]\`
- Switcher + availability stack vertically with \`gap-7\`
- Bottom section: column layout, \`gap-8 pb-11\`
- Name: \`text-[clamp(68px,21vw,80px)] leading-[96px] tracking-[-4.8px]\`
- Paragraph: \`max-w-[420px]\`

---

### Custom CSS Animations

\`\`\`css
@keyframes videoFadeIn { from { opacity: 0 } to { opacity: 1 } }
@keyframes revealUp { from { opacity: 0; transform: translateY(80px) } to { opacity: 1; transform: translateY(0) } }
@keyframes revealRight { from { opacity: 0; transform: translateX(100px) } to { opacity: 1; transform: translateX(0) } }
@keyframes dotPulse { 0%,100% { opacity:1; transform:scale(1) } 50% { opacity:0.45; transform:scale(1.45) } }
\`\`\`

### Accessibility
- \`prefers-reduced-motion: reduce\` disables all animations
- Semantic landmarks: \`<header>\`, \`<main>\`, \`<nav>\`, \`<section>\`
- ARIA labels on navigation regions and status elements
- Videos are \`aria-hidden="true"\``

/**
 * Viktor Oddy — 原始创建 prompt 归档
 */
const VIKTOR_ODDY_PROMPT = `Create a single-page landing page for a creative design studio called "Viktor Oddy" using React, TypeScript, Vite, and Tailwind CSS. Use lucide-react for icons. The page has a white background throughout and uses two custom fonts: "PP Neue Montreal" (body text, loaded from Webflow CDN) and "PP Mondwest" (serif accent font, loaded from a local /PPMondwest-Regular.woff2 file). The body default font is PP Neue Montreal with system fallbacks.

The page consists of these sections in order:

1. HERO SECTION (centered, narrow column max-w-[440px], px-6, pt-12 md:pt-16)

Logo text: "Viktor Oddy" in PP Mondwest serif font, text-[32px] md:text-[40px] lg:text-[44px], font-semibold, color #051A24, tracking-tight, mb-4. Fades in with staggered animation (delay 0.1s).
Tagline: "The creative studio of Viktor Oddy" in monospace font (font-mono), text-xs md:text-sm, color #051A24, mb-2. Animation delay 0.2s.
Main Heading: Two lines: "Build the next wave," and "the bold way." where "next wave" and "bold way." are in PP Mondwest serif. Text is text-[32px] md:text-[40px] lg:text-[44px], leading-[1.1], color #0D212C, tracking-tight, whitespace-nowrap. Animation delay 0.3s.
Description: Three paragraphs in a flex-col gap-6 container, text-sm md:text-base, color #051A24, leading-relaxed, mt-5 md:mt-6. Animation delay 0.4s.
Paragraph 1: "I spent seven years at Apple crafting products used by over a billion people. I founded Vortex Studio to bring that same level of thinking to innovators shaping what comes next."
Paragraph 2: "The studio is deliberately small. I guide the creative vision on every project, backed by a veteran design crew that moves fast without cutting corners."
Paragraph 3: "Projects start at $5,000 per month."
Two buttons in flex-col sm:flex-row, gap-3 md:gap-4, mt-5 md:mt-6. Animation delay 0.5s:
"Start a chat" (primary: bg-[#051A24], text white, rounded-full, px-7 py-3, with a complex multi-layered box-shadow including an inset highlight)
"View projects" (secondary: bg-white, text #051A24, no border, with subtle shadow)
2. INFINITE MARQUEE (full width, mt-16 md:mt-20, mb-16)

Horizontally scrolling image strip. Uses 8 GIF images duplicated (total 16) in a flex row with animate-marquee CSS animation (translateX(0) to translateX(-50%), 30s linear infinite on desktop, 10s on mobile). Images are h-[280px] md:h-[500px], object-cover, mx-3, rounded-2xl, shadow-lg.

Image URLs (all from motionsites.ai):

https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif
https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif
https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif
https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif
https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif
https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif
https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif
https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif
3. TESTIMONIAL QUOTE SECTION (py-12, px-6, max-w-2xl, centered)

A quote icon (lucide-react Quote, w-6 h-6, text-slate-900). Animation delay 0.1s.
Large quote text: 'I left Apple to build the studio I always wanted to work with' where "Apple" is in PP Mondwest serif. Text sizing: text-[32px] md:text-[40px] lg:text-[44px], leading-[1.1], color #0D212C, tracking-tight. Animation delay 0.2s.
Author: "Viktor Oddy" in italic, text-sm, color #273C46. Animation delay 0.3s.
Three company logo names displayed as text: "Apple" (80px wide, 24px font), "IDEO" (83px wide, 24px font), "Polygon" (110px wide, 24px font). Font-medium, text-slate-900. Animation delay 0.4s.
Below logos: A parallax image (scrolls with a parallax effect based on viewport position, max offset 200px). The image URL is: https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260330_103804_7aa5494f-4d5b-432e-9dc7-20715275f143.png&w=1280&q=85. Alt text "Chris Halaska". w-full max-w-xs rounded-2xl shadow-lg. Animation delay 0.5s. The parallax uses IntersectionObserver + scroll listener with requestAnimationFrame.
4. PRICING SECTION (full width, py-12, px-6)

Two cards in a grid (grid-cols-1 md:grid-cols-2, gap-8), aligned right on desktop (md:justify-end, md:max-w-4xl). Each card has rounded-[40px], pl-10 pr-10 md:pr-24 pt-3 pb-10.

Card 1 (Dark): bg-[#051A24], inset shadow. Text color #F6FCFF / #E0EBF0. Animation delay 0.1s.

Title: "Monthly Partnership" (text-[22px], font-medium)
Description: "A dedicated creative design team. / You work directly with Viktor."
Price: "$5,000" (text-2xl, color #F6FCFF), "Monthly" below
Two buttons: "Start a chat" (primary) + "How it works" (secondary), both linking to https://halaskastudio.com/./book
Card 2 (Light): bg-white, shadow-[0_4px_16px_rgba(0,0,0,0.08)]. Animation delay 0.2s.

Title: "Custom Project" (text-[22px], font-medium)
Description: "Fixed scope, fixed timeline. / Same team, same standards."
Price: "$5,000" (text-2xl, color #0D212C), "Minimum" below
One button: "Start a chat" (tertiary variant: white bg with combined shadow)
5. TESTIMONIAL CAROUSEL (full width, py-20)

Header row (md:max-w-4xl, md:ml-auto): Title "What builders say" (where "builders" is in PP Mondwest serif, same large heading size) on left. On the right: 5 filled black star icons (lucide-react Star, w-5 h-5, fill-black) + "Clutch 5/5" text.
Auto-scrolling carousel (3s interval, pauses on hover) with prev/next circular buttons (w-12 h-12 rounded-full, border border-[#0D212C]/20, lucide ChevronLeft/ChevronRight).
Cards are 427.5px wide on desktop (full width minus 48px on mobile), gap-6, with exit animation (opacity fade + scale down). Each card: bg-white, rounded-[32px] md:rounded-[40px], shadow-[0_4px_16px_rgba(0,0,0,0.08)], px-6 md:pl-10 md:pr-24 py-8.
Card content: SVG quote mark icon (custom path), quote text (text-base, color #0D212C, leading-relaxed), author row with circular avatar (w-12 h-12), name (font-semibold, text-sm), role/company with arrow prefix.
Testimonials array uses Pexels avatar images. The testimonials are tripled for infinite scroll effect. Transform uses cubic-bezier(0.4, 0, 0.2, 1) with 0.8s transition.
5 testimonials:

Marcus Anderson, CEO, Data.storage - "With very little guidance team delivered designs that were consistently spot on..."
alexwu, Founder, Nexgate - "Viktor led the creation of our best fundraising deck to date!..."
James Mitchell, VP Product, LaunchPad - "Working with Viktor transformed our product vision..."
Rachel Foster, Co-founder, Nexus Labs - "The design quality exceeded our expectations..."
David Zhang, Head of Design, Paradigm Labs - "Incredible work from start to finish..."
6. PROJECTS SECTION (max-w-[1200px], px-6, py-12)

Vertical stack of 3 project items (gap-16 md:gap-20). Each has:

Text block offset left (ml-20 md:ml-28): Project name in PP Mondwest serif (text-2xl md:text-3xl, font-semibold, color #051A24) + description (text-sm md:text-base, color #051A24/70)
Full-width image below (rounded-2xl, shadow-lg, object-cover)
Each item independently triggers fade-in animation via IntersectionObserver.
Projects:

"evr" - "From idea to millions raised for a web3 AI product" - https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif
"Automation Machines" - "Streamlining industrial automation processes" - https://motionsites.ai/assets/hero-automation-machines-preview-DlTveRIN.gif
"xPortfolio" - "Modern portfolio management platform" - https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif
7. PARTNER SECTION (full width, py-12, px-6)

Large white container (max-w-7xl, py-48, rounded-[40px], subtle shadow). On mouse hover, GIF thumbnails (from the marquee images array) spawn at cursor position with random rotation (-10 to +10 deg), fade out over 1000ms with scale-down, spawning every 80ms minimum. Uses requestAnimationFrame-style cleanup.

Centered heading: "Partner with us" in PP Mondwest serif, text-[48px] md:text-[64px] lg:text-[80px], color #0D212C, mb-12.
CTA button: Dark pill with circular avatar image (Pexels photo 415829, w-10 h-10 rounded-full) + "Start chat with Viktor". Same primary button shadow style.
8. FOOTER (full width, py-12, px-6, max-w-[1200px])

Flex row (md:flex-row). Left side: "Start a chat" primary button. Right side: ArrowUpRight icon (lucide-react), then two columns of links:

Column 1: Services, Work, About (anchor links)
Column 2: x.com, LinkedIn (external links, target _blank)
All links: text-base, color #051A24, hover:opacity-70 transition.

9. COPYRIGHT BAR (max-w-[1200px], px-6, py-4)

Flex row justify-between: "Vortex Studio Limited" on left, "Austin, USA" on right. Text-sm, color #051A24.

10. FIXED BOTTOM NAV (z-50, centered)

Floating pill fixed to bottom (bottom-6, centered via left-1/2 -translate-x-1/2). White bg, rounded-full, px-8 py-2, complex layered shadow. Contains: "V" letter in PP Mondwest serif (text-2xl, font-semibold, color #051A24) + "Start a chat" primary button.

ANIMATIONS:

All sections use a custom useInViewAnimation hook (IntersectionObserver with threshold 0.1, triggers once). Elements get class animate-fade-in-up when in view (otherwise opacity-0). The animation is defined in CSS:


@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}
Each element within a section has staggered animationDelay values (0.1s, 0.2s, 0.3s, etc.).

COLOR PALETTE:

Primary dark: #051A24
Secondary dark: #0D212C
Light text on dark: #F6FCFF, #E0EBF0
Body text: #051A24
Muted text: #273C46
Background: white throughout
BUTTON SHADOWS (critical for the design feel):

Primary: 0_1px_2px_0_rgba(5,26,36,0.1), 0_4px_4px_0_rgba(5,26,36,0.09), 0_9px_6px_0_rgba(5,26,36,0.05), 0_17px_7px_0_rgba(5,26,36,0.01), 0_26px_7px_0_rgba(5,26,36,0), inset_0_2px_8px_0_rgba(255,255,255,0.5)
Secondary: 0_0_0_0.5px_rgba(0,0,0,0.05), 0_4px_30px_rgba(0,0,0,0.08)
FONTS (CSS):


@font-face {
  font-family: 'PP Neue Montreal';
  src: url('https://assets.website-files.com/6009ec8cda7f305645c9d91b/60176f9bb43e36419997ecfe_PPNeueMontreal-Book.otf') format('opentype');
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: 'PP Neue Montreal';
  src: url('https://assets.website-files.com/6009ec8cda7f305645c9d91b/60176f9b39c5673e51a86f5a_PPNeueMontreal-Medium.otf') format('opentype');
  font-weight: 500;
  font-display: swap;
}
@font-face {
  font-family: 'PP Mondwest';
  src: url('/PPMondwest-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
FILE STRUCTURE:

src/App.tsx - Main layout with hero, marquee, and section composition
src/components/Button.tsx - Reusable button (primary/secondary/tertiary variants)
src/components/TestimonialSection.tsx - Quote with parallax image
src/components/PricingSection.tsx - Two pricing cards
src/components/TestimonialCarousel.tsx - Auto-scrolling testimonial cards
src/components/ProjectsSection.tsx - Project showcase items
src/components/PartnerSection.tsx - Interactive mouse-trail CTA section
src/components/Footer.tsx - Footer with links
src/components/CopyrightBar.tsx - Copyright line
src/components/BottomNav.tsx - Fixed floating bottom nav
src/hooks/useInViewAnimation.ts - IntersectionObserver scroll-trigger hook
src/index.css - Font faces, marquee animation, fade-in-up animation`

/**
 * CodeNest — 原始创建 prompt 归档
 */
const CODENEST_PROMPT = `Create a high-end, dark-themed hero section for a coding education platform called 'CodeNest' using React and Tailwind CSS. The design must be responsive and follow these precise specifications:

1. Background & Layout:

Background: Implement a full-screen background video using the HLS stream: https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8. Use hls.js and set enableWorker: false to ensure stability in sandboxed environments.

Overlays: Set the video to 60% opacity. Add a dark linear gradient from the left (#070b0a to transparent) and a bottom-up gradient for readability.

Grid System: Add three thin vertical grid lines (white/10 opacity) at the 25%, 50%, and 75% marks across the screen (visible on desktop).

Central Glow: Place a large horizontal SVG ellipse glow in the center-top area with a cyan/dark green hue, using a 25px Gaussian blur filter.

2. The Liquid Glass Card:

Component: Create a 200x200px floating card positioned above the main headline, shifted exactly 50px upwards using translate-y-[-50px].

CSS Styling (Liquid Glass):

background: rgba(255, 255, 255, 0.01) with background-blend-mode: luminosity.

backdrop-filter: blur(4px).

box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1).

Border Effect: A ::before pseudo-element with inset: 0, padding: 1.4px, and a 180-degree white linear gradient. Use -webkit-mask-composite: xor and mask-composite: exclude to create a sharp, high-end border frame.

Content: '[ 2025 ]' tag (14px), 'Taught by Industry Professionals' headline (18px, using Instrument Serif italic for 'Industry'), and a small description (11px).

3. Hero Content & Typography:

Eyebrow: 'Career-Ready Curriculum' in Plus Jakarta Sans, bold, 11px, color #5ed29c.

Main Headline: 'LAUNCH YOUR CODING CAREER.' in Inter Extra Bold, uppercase, tracking-tight. Scale from 40px (mobile) to 72px (desktop). The final period must be green (#5ed29c).

Description: 'Master in-demand coding skills...' in Inter, 14px, 70% white opacity, max-width 512px.

Primary CTA: 'Get Started' button with an ArrowRight icon. Rounded-full, background #5ed29c, text #070b0a, uppercase, bold.

4. Global Navigation:

Header: Sticky/Absolute header with a white minimalist logo.

Desktop Menu: Links for 'PROJECTS', 'BLOG', 'ABOUT', 'RESUME' in Inter, 16px. Hover state: #5ed29c.

Mobile Menu: A functional hamburger menu that toggles a full-screen dark overlay.

5. Required Imports:

Fonts: Inter, Plus Jakarta Sans, and Instrument Serif (italic).

Icons: lucide-react (ArrowRight, Menu, X).

Library: hls.js for video streaming.`

/**
 * SynapseX — 原始创建 prompt 归档
 */
const SYNAPSE_X_PROMPT = `Build a single-page landing site for "SynapseX" -- a futuristic neural-AI interface product. The entire site uses a black background with white text and full-viewport video backgrounds. The primary font is "Space Mono" (monospace) for all text. Use React + TypeScript + Vite + Tailwind CSS + Framer Motion.

### Fonts & External Assets

- **Primary font:** "Space Mono" (all weights: 400, 700, italic) from Google Fonts
- **Display font (background watermark only):** "Anton SC" from Google Fonts
- **Icons:** Bootstrap Icons CDN (\`https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css\`) -- used only for the Apple icon (\`bi bi-apple\`) in the download button
- **All Tailwind \`fontFamily\` keys** (\`sans\`, \`serif\`, \`mono\`) are overridden to \`"Space Mono", monospace\`

### Video URLs (CloudFront -- use exactly these)

1. **Hero (mouse-scrubbed, NOT autoplay):**
   \`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_083515_290e5a10-0b95-41af-a5e2-32b6389baa4d.mp4\`

2. **Second Section (autoplay, muted, loop):**
   \`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_092455_089c54f8-3b03-4966-9df1-e9746063d0ef.mp4\`

3. **Metrics Section (autoplay, muted, loop):**
   \`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_095810_ecea3dd2-fc5e-4e41-8696-4219290b6589.mp4\`

4. **Technology Section (autoplay, muted, loop):**
   \`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_095750_32a52ce0-2005-45c9-9093-41f03fde9530.mp4\`

5. **Footer (autoplay, muted, loop):**
   \`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_080203_fd7f4f85-3a86-4837-8192-85e7bfe68e75.mp4\`

### Dependencies

\`\`\`json
"framer-motion": "^12.40.0",
"lucide-react": "^0.344.0",
"react": "^18.3.1",
"react-dom": "^18.3.1"
\`\`\`

### Global CSS (\`index.css\`)

- Import Space Mono from Google Fonts
- Import Bootstrap Icons CSS
- Tailwind directives (\`@tailwind base/components/utilities\`)
- CSS variables: all \`--font-*\` set to \`"Space Mono", monospace\`
- Global reset: \`* { margin: 0; padding: 0; box-sizing: border-box; }\`
- \`html, body\`: \`background: #000; color: #fff; overflow-x: hidden; overflow-y: auto; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;\`
- Lenis smooth scroll utility classes (\`.lenis.lenis-smooth\`, \`.lenis.lenis-stopped\`, \`.lenis.lenis-scrolling iframe\`)

### Custom Text Animation Components

#### 1. \`ScrambleIn\` -- entrance reveal animation
- Props: \`text: string\`, \`delay: number\` (ms before start), \`triggered: boolean\`
- Character set: \`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><\`
- On trigger (after delay): runs interval every 25ms, revealing characters left-to-right at 0.5 chars/frame
- Characters not yet revealed show random chars (up to 3 ahead of the reveal cursor); characters beyond that are empty
- Spaces always show as spaces
- Before triggered: renders \`&nbsp;\`

#### 2. \`ScrambleText\` -- hover-driven scramble
- Props: \`text: string\`, \`isHovered: boolean\`, \`className?: string\`
- On hover: scrambles all chars with random chars, then reveals left-to-right at 4 frames/char, interval 25ms
- On unhover: immediately resets to original text

### Custom SVG Logo (\`SynapseXLogo\`)

A 4-fold rotationally symmetric abstract shape rendered in an SVG with \`viewBox="-50 -50 100 100"\`. Each quadrant is the same path rotated 0/90/180/270 degrees:

\`\`\`
M 1.5,23 L 1.5,33 C 1.5,38.5 6,43 11.5,43 L 16.5,43 C 22,43 26.5,38.5 26.5,33 Q 28,28 33,26.5 C 38.5,26.5 43,22 43,16.5 L 43,11.5 C 43,6 38.5,1.5 33,1.5 L 23,1.5 Q 12,12 1.5,23 Z
\`\`\`

### Animated Hamburger (\`SquashHamburger\`)

- 3 horizontal bars (absolute positioned spans)
- Desktop: container 18x12px, bar height 1.5px
- Mobile: container 15x10px, bar height 1.2px
- On open: top bar rotates 45deg + translates down to center; middle bar fades/scales out; bottom bar rotates -45deg + translates up to center
- Spring animation: stiffness 300, damping 20

---

### Page Sections (in order)

---

#### SECTION 1: Hero (full viewport height)

- **Background:** Video #1, \`object-cover\`, paused on load. Controlled by mouse-scrub: horizontal mouse movement across viewport scrubs the video timeline forward/backward. Sensitivity factor: \`0.8\`. Uses \`seeked\` event to chain seeks without dropping frames.
- **Entrance animation:** After 800ms delay, \`entranceComplete\` state becomes true -- all hero content fades in (opacity 0 -> 1, duration 1s).
- **Dot grid overlay:** \`radial-gradient(#ffffff 1px, transparent 1px)\` with 24x24px grid, opacity 0.05, pointer-events-none
- **Large background watermark text:** The word "TRANSCENDENCE" in "Anton SC" font, centered vertically (offset +50px from center), \`clamp(120px, 30vw, 521px)\` font size, uppercase, letter-spacing -4px. Opacity 0.10. Color achieved via \`radial-gradient(circle, rgba(142,127,148,0) 0%, #8E7F94 70%)\` as \`background-clip: text\` with transparent fill.
- **Layout:** Flexbox column, padding \`px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 pb-8 sm:pb-12\`. Content is pushed to the bottom using \`flex-1\` spacer.
- **Bottom row:** \`flex-col gap-6 md:flex-row md:items-end md:justify-between\`
  - **Left column** (\`flex flex-col gap-4\`):
    - **h1** "Brain" / "And Body" (two lines via \`<br>\`): \`text-white font-light leading-[0.95] tracking-[-0.03em] text-[clamp(40px,10vw,100px)]\`. Each line uses \`ScrambleIn\` with delays 200ms and 500ms.
    - **Description paragraph** (motion.p): fade-up animation (y:25->0, opacity 0->1, duration 0.9s, cubic-bezier ease \`[0.215, 0.610, 0.355, 1.000]\`, delay 0.2s). Text: "Built at the intersection of neuroscience and artificial intelligence. SynapseX continuously maps neural pathways, cognitive load, and physiological states into a single adaptive intelligence layer." Style: \`max-w-sm text-[13px] sm:text-[15px] text-white/60 leading-relaxed\`
  - **Right h1** "One" / "Network": Same styling as left h1 but with \`text-left md:text-right\`. ScrambleIn delays: 700ms and 1000ms.

---

#### NAVBAR (fixed, z-50)

- Fixed to top, height 80px (h-20), transparent background, full width
- Fades in with \`entranceComplete\` (opacity 0->1, duration 0.8s)

**Desktop (hidden below \`sm\`):**
- Left group: two pills side by side with gap-2
  - **Logo pill:** h-12, px-5, \`bg-white/15 backdrop-blur-md rounded-[14px]\`. Contains SynapseXLogo (18x18px white) + "SynapseX" text (16px font-medium tracking-tight white). WhileHover: scale 1.02 + bg rgba(255,255,255,0.22). WhileTap: scale 0.98. Hides on \`sm\` when menu open (\`hidden md:flex\`), shows normally otherwise.
  - **Expanding menu pill:** Animates width from 48px (closed) to 290px (open) with spring (stiffness 350, damping 28). h-12, \`rounded-[14px]\`, \`bg-white/15 backdrop-blur-md\`. Contains:
    - Hamburger button: when closed = 48x48px rounded-[14px]; when open = 36x36px rounded-[11px] with \`bg-white/10 hover:bg-white/20 ml-1.5\`
    - Nav links (fade in when open, offset x:15->0): "About" and "Metrics" with ScrambleText on hover. 16px font-normal text-white/85 hover:text-white. Smooth-scroll to \`window.innerHeight\` and \`window.innerHeight * 2\` respectively.
- Right: **Download button** -- \`h-12 px-6 bg-white rounded-full\`, black text. Apple icon + "Download" with ScrambleText on hover. WhileHover: scale 1.03 + bg #e2e2e6. WhileTap: scale 0.97.

**Mobile (visible below \`sm\`):**
- Scaled-down version: h-9 pills, rounded-[10px], smaller text (13px), logo pill animates to width 0 when menu open (spring stiffness 350, damping 28). Menu capsule expands to 100% width when open. Download button: h-9 px-3.5 rounded-full.

---

#### SECTION 2: Cinematic Text (full viewport height)

- **Background:** Video #2, autoplay muted loop, object-cover
- **Top gradient overlay:** 180px height, linear-gradient from \`#010103\` to transparent, z-10
- **Content:** Centered large paragraph in a \`max-w-5xl\` container with 3D perspective (400px)
  - Framer Motion: \`rotateX(24deg) translateY(\${yScaleValue}px) translateZ(15px)\` where \`yScaleValue\` transforms from 60 to -120 based on smooth scroll progress (spring: stiffness 15, damping 32, mass 1.8). Opacity fades in from 0 to 1 between scroll progress 0.3-0.5.
  - Text: "A neural-AI interface built on the architecture of the human nervous system. SynapseX translates synaptic activity into computational intelligence. Every signal becomes measurable, structured, and visible. It continuously reconstructs internal state as a dynamic neural map. Biological noise is filtered into actionable cognitive patterns."
  - Style: \`font-sans font-normal text-[22px] sm:text-[30px] md:text-[36px] lg:text-[42px] text-white leading-[1.35] tracking-[-0.02em] select-none px-6 sm:px-12 text-center\`

---

#### SECTION 3: Metrics (min-h-screen)

- **Background:** Video #3, autoplay muted loop, object-cover
- **Layout:** Centered content, \`pt-32 pb-32 px-6\`, max-w-6xl
- **Subtitle:** "Performance Metrics" -- \`text-white/40 text-[13px] sm:text-[14px] tracking-[0.2em] uppercase mb-20 text-center\`. Fades in on scroll (whileInView, duration 1.2s, once, amount 0.3).
- **Metrics grid:** 3 columns on md, 1 on mobile, gap-16 md:gap-8. Each metric fades up (y:30->0, opacity, duration 0.8s, staggered 0.15s delay per item):
  - "2.4ms" -- Synaptic Latency
  - "99.7%" -- Signal Accuracy
  - "140B" -- Neural Parameters
  - Value: \`text-white text-[clamp(48px,10vw,96px)] font-light tracking-[-0.04em] leading-none\`
  - Label: \`text-white/40 text-[13px] sm:text-[15px] mt-4 tracking-wide\`

---

#### SECTION 4: Technology / Adaptive Intelligence (full viewport height)

- **Background:** Video #4, autoplay muted loop, object-cover
- **Layout:** Flexbox column, \`px-8 sm:px-12 md:px-16 py-12 sm:py-16\`
- **Top area:** flex-col md:flex-row md:justify-between md:items-start gap-6
  - **Left heading:** "Adaptive / Intelligence" (two lines), \`text-white font-light text-[clamp(36px,8vw,72px)] leading-[0.95] tracking-[-0.03em]\`. Fades up (y:40->0, duration 1.0s, whileInView once amount 0.3).
  - **Right paragraph:** "The system learns your neural baseline within 72 hours. From there, every cognitive state is mapped, predicted, and optimized in real time." \`text-white/50 text-[13px] sm:text-[15px] leading-relaxed max-w-xs md:text-right md:pt-2\`. Fades up (y:20->0, duration 1.0s, delay 0.2s).
- **Spacer** (\`flex-1\`)
- **Bottom grid:** 2 cols on mobile, 4 cols on md, gap-8 md:gap-6. Fades in on scroll (duration 1.0s, delay 0.3s). Each item staggered (y:20->0, duration 0.7s, delay i*0.1):
  1. "Cortical Mapping" -- "Real-time spatial reconstruction of active neural regions."
  2. "Signal Isolation" -- "Separates cognitive intent from biological noise."
  3. "State Prediction" -- "Anticipates cognitive transitions before they occur."
  4. "Loop Feedback" -- "Closed-loop adjustment based on outcome correlation."
  - Title: \`text-white text-[14px] sm:text-[16px] font-normal mb-2\`
  - Desc: \`text-white/40 text-[12px] sm:text-[14px] leading-relaxed\`

---

#### SECTION 5: Architecture (min-h-screen, pure black background, no video)

- Centered content, max-w-3xl, \`px-6 py-32\`
- **Heading block** (fades up y:30->0, duration 1.0s, whileInView once amount 0.4):
  - Subtitle: "Architecture" -- \`text-white/40 text-[13px] sm:text-[14px] tracking-[0.2em] uppercase mb-8\`
  - Heading: "Three layers. Zero friction." -- \`text-white font-light text-[clamp(28px,6vw,56px)] leading-[1.15] tracking-[-0.02em] mb-10\`
  - Description: "Sensor layer captures raw bioelectric signals. Processing layer isolates intent. Interface layer delivers structured output to any connected system." -- \`text-white/45 text-[15px] sm:text-[17px] leading-relaxed max-w-xl mx-auto\`
- **Layer cards** (fade in, duration 1.2s, delay 0.4s, whileInView once amount 0.4): 3 stacked cards, \`mt-20 flex-col items-center gap-4\`. Each card: \`max-w-md h-[72px] border border-white/10 rounded-lg flex items-center justify-between px-6\`
  - Left: "Layer 1/2/3" -- \`text-white/30 text-[12px] tracking-[0.15em] uppercase\`
  - Right: "Capture" / "Process" / "Interface" -- \`text-white text-[16px] sm:text-[18px] font-light\`

---

#### FOOTER

- Black background, overflow hidden
- Two-column layout (stacked on mobile): \`flex-col md:flex-row min-h-[400px]\`
- **Left:** Video #5, \`object-cover\`, fills half width (h-[300px] on mobile, auto height on md)
- **Right:** Flex column justify-between, \`p-10 sm:p-16\`
  - Top: SynapseXLogo (18x18px, text-white/70) + "SynapseX" text (15px font-medium text-white/70 tracking-tight), mb-8. Below: "The next evolution of human-machine interaction. Built for those who refuse to be limited by biology alone." \`text-white/40 text-[14px] sm:text-[15px] leading-relaxed max-w-sm\`
  - Bottom: "(c) 2026 SynapseX Labs. All rights reserved." \`text-white/25 text-[12px] mt-12\`

---

### Key Technical Details

- The entire app wrapper has inline style: \`fontFamily: '"Space Mono", monospace'\`
- All \`h-screen\` elements also have \`h-[100dvh]\` for mobile viewport compatibility
- The hero video is NOT autoplay -- it starts paused at time 0 and is scrubbed by horizontal mouse movement (delta-based, not absolute position). The seek logic chains via \`seeked\` event to avoid frame-dropping.
- Framer Motion \`useScroll\` tracks the second section with offset \`["start end", "end start"]\`, piped through \`useSpring\` (stiffness 15, damping 32, mass 1.8) then \`useTransform\` and \`useMotionTemplate\` for the 3D text rotation effect.
- No external state management, no routing, no database -- pure single-page React app.`

/**
 * Power AI — 原始创建 prompt 归档
 */
const POWER_AI_PROMPT = `Create a full-screen dark hero section with a looping background video, navbar, headline, subtitle, CTA button, and a logo marquee at the bottom. Here are the exact specifications:

Theme & Colors (index.css CSS variables):
Background: 260 87% 3% (deep dark blue-purple)
Foreground: 40 6% 95% (off-white)
Hero sub text: 40 6% 82%
Body font: Geist Sans (via @fontsource/geist-sans)
Headline font: General Sans (loaded from Fontshare: https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap)

Background Video (Index page wrapper):
Video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4
Positioned absolute inset-0 w-full h-full object-cover behind all content
Starts with opacity: 0
Custom JS-controlled fade loop: 0.5s fade-in at start, 0.5s fade-out at end, using requestAnimationFrame. On ended, opacity resets to 0, waits 100ms, then replays from 0
No gradient overlays on the video
The wrapper div has overflow-hidden, the hero content sits in a relative z-10 div above

Blurred overlay shape (centered behind content):
w-[984px] h-[527px] opacity-90 bg-gray-950 blur-[82px]
Absolutely positioned at top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
pointer-events-none
The hero section has overflow-visible so the blur is not clipped

Navbar:
Full width, py-5 px-8, flex row with justify-between
Left: logo image (src/assets/logo.png, height 32px)
Center: nav items — "Features" (with ChevronDown), "Solutions", "Plans", "Learning" (with ChevronDown). Each is a button with text-foreground/90 and hover transition
Right: "Sign Up" button using heroSecondary variant, rounded-full px-4 py-2
Below navbar: a 1px divider line with gradient from-transparent via-foreground/20 to-transparent, offset mt-[3px]

Hero content (vertically centered in remaining space via flex-1):
Headline: "Power AI" at text-[220px], font-normal, leading-[1.02], tracking-[-0.024em], font-family General Sans
"Power " is plain text-foreground
"AI" uses bg-clip-text text-transparent with backgroundImage: linear-gradient(to left, #6366f1, #a855f7, #fcd34d) (indigo → purple → amber)
Subtitle: "The most powerful AI ever deployed / in talent acquisition" — text-hero-sub, text-lg, leading-8, max-w-md, mt-[9px], opacity-80
CTA: "Schedule a Consult" button, heroSecondary variant, px-[29px] py-[24px], mt-[25px]

Logo marquee (pinned to bottom of hero, pb-10):
Container: max-w-5xl mx-auto
Left side: static text "Relied on by brands / across the globe" in text-foreground/50 text-sm
Right side: infinite scrolling marquee with logos: Vortex, Nimbus, Prysma, Cirrus, Kynder, Halcyn (duplicated for seamless loop)
Each logo: a liquid-glass 24x24 rounded-lg icon showing the first letter, plus the name in text-base font-semibold text-foreground
Marquee animation: translateX(0%) → translateX(-50%), 20s linear infinite
gap-16 between logos, gap-12 between text and marquee

Liquid glass utility class (in index.css):
.liquid-glass { background: rgba(255, 255, 255, 0.01); background-blend-mode: luminosity; backdrop-filter: blur(4px); border: none; box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1); position: relative; overflow: hidden; }
.liquid-glass::before { content: ""; position: absolute; inset: 0; border-radius: inherit; padding: 1.4px; background: linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; }

Section structure: min-h-screen flex flex-col — navbar at top, content centered via flex-1 flex items-center justify-center, marquee at bottom.`

/**
 * Atelier — 原始创建 prompt 归档
 */
const ATELIER_PROMPT = `Create a fullscreen hero landing page section for a design agency called "Atelier" using React, Tailwind CSS, and Lucide React icons. The section must be fully mobile responsive with an animated hamburger mobile menu. Here are the exact specifications:

**Fonts (Google Fonts):**
- "Instrument Serif" (regular + italic) for headings and mobile menu links
- "Inter" (weights 300, 400, 500, 600) as the sans-serif body font

Load them in index.html:
\`\`\`html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
\`\`\`

**Tailwind Config** - extend fontFamily:
\`\`\`js
fontFamily: {
  'instrument-serif': ['"Instrument Serif"', 'serif'],
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
\`\`\`

**Background:**
A fullscreen looping autoplay muted video covering the entire viewport with \`object-cover\`. Video URL:
\`\`\`
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204103_f607742e-09da-4cf5-bb06-4e67b0a531de.mp4
\`\`\`

**Layout:** The entire section is \`w-full h-screen overflow-hidden\` with the video absolutely positioned behind a \`relative z-10\` content layer that is \`flex flex-col h-full\`.

**Navbar:**
- Horizontal flex bar with padding \`px-6 md:px-12 lg:px-16 py-5 md:py-6\`
- Left side: Logo text "Atelier" (white, font-semibold, text-lg, tracking-tight, font-sans) followed by desktop nav links (hidden on mobile, shown md+): "Projects", "Expertise", "Studio", "Insights" - styled as \`text-white/80 hover:text-white text-sm font-light transition-colors duration-200\`
- Right side: "Reach Out" text link (hidden mobile) + "Let's Talk" button (white bg, black text, rounded-full, px-5 py-2, hidden mobile) + hamburger button (shown only on mobile, md:hidden)
- Hamburger: 3 lines (2px height, white, rounded-full) with the middle line shorter (w-4 vs w-6). On open, top/bottom lines rotate 45/-45 degrees and translate, middle fades out. Uses \`cubic-bezier(0.76,0,0.24,1)\` easing with 500ms duration.

**Mobile Menu Overlay (fixed inset-0 z-50, md:hidden):**
- Backdrop: \`bg-black/90 backdrop-blur-xl\` fading in with 700ms transition
- Content fades in with same 700ms cubic-bezier easing
- Header: matches navbar layout with logo + close button (X formed by rotated lines)
- Nav links: Stacked vertically, centered, \`text-4xl sm:text-5xl font-instrument-serif\`, white text, each with \`border-b border-white/10\`, \`py-4\`. On open they animate in with staggered delays (150ms + index*80ms), translating from \`translate-y-8\` to \`translate-y-0\`. Hover shifts text right with \`hover:pl-4\`
- Items: "Projects", "Expertise", "Studio", "Insights", "Reach Out"
- Footer: Full-width "Let's Talk" button (white bg, black text, rounded-full, py-4) with 550ms delay fade-in

**Hero Content (centered below navbar):**
- Container: \`flex-1 flex flex-col items-center justify-start pt-4 sm:pt-6 md:pt-8 lg:pt-10 px-6 text-center\`
- Heading (h1): \`font-instrument-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] max-w-5xl\`
  - Text content (with line breaks):
    \`\`\`
    UX <italic>and</italic> APP
    DESIGN <italic>for</italic> BOLD
    VENTURES
    \`\`\`
  - The italic words "and" and "for" use \`italic font-instrument-serif\` spans
- Subtext (p): \`mt-4 md:mt-5 text-white/70 text-sm md:text-base font-light max-w-md leading-relaxed\`
  - "We shape digital products that define brands" + line break (hidden sm:block) + "and unlock exponential growth."
- Buttons row: \`mt-5 md:mt-6 flex flex-col sm:flex-row items-center gap-4\`
  - Primary: "See Cases" with ArrowRight icon (lucide-react), white bg, black text, rounded-full, px-7 py-3, text-sm font-medium. On hover the arrow translates 0.5 right.
  - Secondary: "Watch Reel" with Play icon (lucide-react), transparent with \`border border-white/40\`, white text, rounded-full, px-7 py-3. On hover: \`bg-white/10 border-white/60\`

**Global CSS (index.css):**
\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
\`\`\`

**Dependencies:** React, lucide-react (for ArrowRight and Play icons), Tailwind CSS. No other UI libraries.`

/**
 * Organic Visions — 原始创建 prompt 归档
 */
const ORGANIC_VISIONS_PROMPT = `Create a full-screen cinematic hero section using React, Tailwind CSS, and Framer Motion. Use Vite with TypeScript. The dependencies required are: \`react\`, \`react-dom\`, \`framer-motion\`, \`lucide-react\`, and \`tailwindcss\`.

**VIDEO BACKGROUND:**
- Full-screen looping background video, absolutely positioned to fill the viewport
- Video URL: \`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4\`
- Properties: autoPlay, muted, loop, playsInline, object-cover, object-center
- Page background: \`#010101\`, full viewport height, overflow hidden

**FONTS (load via index.html link tags):**
- Garamond from: \`https://db.onlinewebfonts.com/c/2bf40ab72ea4897a3fd9b6e48b233a19?family=Garamond\`
- Geist from Google Fonts: weights 300, 400, 500
- Body font: \`'Geist', -apple-system, BlinkMacSystemFont, sans-serif\`
- Heading font class \`.font-garamond\`: \`'Garamond', 'Times New Roman', serif\`

**NAVIGATION:**
- Relative positioned, z-20, flexbox centered on desktop, space-between on mobile
- Brand name "Organic Visions" -- white, uppercase, letter-spacing 0.25em (mobile) / 0.3em (desktop), font-light
- Desktop nav links: "Wander", "Archive", "Story", "Connect" -- white/80, uppercase, 0.2em tracking, hover to white, 300ms transition
- Mobile: hamburger toggle using lucide-react \`Menu\` and \`X\` icons (size 22)

**MOBILE MENU (hamburger dropdown):**
- Fixed position, top-16, left-4, right-4, z-50, hidden on md+
- Uses \`AnimatePresence\` from framer-motion for mount/unmount animation
- Animation: fade in from y:-10 to y:0, duration 0.3s, ease 'easeOut'; reverse on exit
- Each link staggers in with opacity 0 to 1, y:-8 to 0, delay 0.05 + index*0.06
- Links: white/90, 0.25em tracking, uppercase, font-light, hover to white
- Custom glass class \`.mobile-menu-glass\`:
  \`\`\`css
  background: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  \`\`\`
- Rounded-2xl, py-8, gap-5, flex-col centered

**HERO CONTENT:**
- Relative z-10, flex-col centered, text-center
- Padding: px-5 (sm:px-8), pt-12 (sm:pt-16, md:pt-24)
- Heading: Two lines -- "WITNESS THE" and "HIDDEN REALM"
- Font: Garamond, sizes 4xl/6xl/8xl/9xl responsive, font-normal, white, line-height 1.08, tracking-tight, mb-6 (sm:mb-8)
- Each line uses a \`StaggeredFade\` component that splits text into individual characters and animates each with 0.07s stagger delay (opacity 0 to 1), triggered once when in view

**STAGGERED FADE COMPONENT:**
- Accepts \`text\` string prop
- Splits into individual \`<motion.span>\` characters
- Uses \`useInView\` hook (once: true) to trigger animation
- Variants: hidden = opacity 0; show = opacity 1, y:0, with delay \`i * 0.07\` per character

**SUBTITLE:**
- Framer Motion animated paragraph, initial opacity:0 y:20, animate opacity:1 y:0, duration 0.8s, delay 1.6s
- Text: "An odyssey through delicate living forms," (line break hidden on mobile, visible sm+) "revealed by lens and curiosity."
- White/70, font-light, leading-relaxed, max-w-xs (sm:max-w-md), mb-8 (sm:mb-10)
- Responsive sizes: text-sm / text-base / text-lg

**CTA BUTTON:**
- Framer Motion animated, initial opacity:0 y:20, animate opacity:1 y:0, duration 0.8s, delay 2.0s
- Text: "Begin the Experience"
- Uses \`.liquid-glass\` class, rounded-full, responsive padding px-7/px-10 py-3.5/py-4
- White/90, uppercase, tracking 0.18em/0.2em responsive

**LIQUID GLASS CSS (.liquid-glass):**
\`\`\`css
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.liquid-glass:hover {
  background: rgba(255, 255, 255, 0.04);
  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.15);
}

.liquid-glass:active {
  transform: scale(0.98);
}
\`\`\`

**GLOBAL CSS:**
- Reset: margin 0, padding 0, box-sizing border-box on all elements
- Body: antialiased font smoothing, white text, #010101 background
- Uses Tailwind directives: @tailwind base/components/utilities

**PAGE TITLE:** "Synthetic Nature"`

/**
 * Halo — 原始创建 prompt 归档
 */
const HALO_PROMPT = `Create a modern React landing page with a full-screen HLS video background, glassmorphic navigation header, and hero content positioned in the bottom-left corner.`

const SENTINEL_PROMPT = `Create a full-screen dark hero landing page for a security company called "SENTINEL AI" using React, Vite, TypeScript, Tailwind CSS, shadcn/ui, and an embedded Spline 3D scene as the background. The tech stack uses @splinetool/react-spline and @splinetool/runtime for the 3D embed. Here is every detail:

FONT:
Google Fonts "Sora" with weights 300, 400, 500, 600, 700. Load it in index.html:


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap" rel="stylesheet">
Set font-sora as the body font via Tailwind config: fontFamily: { sora: ["Sora", "sans-serif"] } and apply font-sora antialiased on body.

COLOR THEME (all HSL CSS custom properties, dark only, no light mode):

--background: 0 0% 10% (dark charcoal)
--foreground: 0 0% 96% (near-white)
--primary: 119 99% 46% (vivid green)
--primary-foreground: 0 0% 4% (near-black)
--secondary: 0 0% 18%
--secondary-foreground: 0 0% 96%
--muted: 0 0% 16%
--muted-foreground: 0 0% 60%
--accent: 119 99% 46% (same vivid green as primary)
--accent-foreground: 0 0% 4%
--destructive: 0 84% 60%
--border: 0 0% 20%
--input: 0 0% 20%
--ring: 119 99% 46%
--radius: 0.5rem
--nav-button: 0 0% 18%
--hero-bg: 0 0% 8% (the darkest background, nearly black)
Map these in Tailwind config using hsl(var(--variable)) pattern. Add custom color tokens: nav-button and hero-bg.

CUSTOM ANIMATIONS (Tailwind config keyframes + animation):

fade-up keyframe:

0%: opacity: 0, transform: translateY(20px), filter: blur(4px)
100%: opacity: 1, transform: translateY(0), filter: blur(0)
Animation: fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards
fade-in keyframe:

0%: opacity: 0
100%: opacity: 1
Animation: fade-in 0.5s ease-out forwards
NAVBAR (fixed, transparent, floating over the Spline scene):

fixed top-0 left-0 right-0 z-50, horizontal flex, justify-between, padding px-8 lg:px-16 py-5
Left: Logo text "SENTINEL" -- text-foreground text-xl font-semibold tracking-tight
Center: Nav links array: ["Services", "About Us", "Projects", "Team", "Contacts"] -- each is text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest. Links use href={#section-name}. Hidden on mobile (hidden md:flex), with gap-8.
Right: "Get Quote" button using shadcn Button with a custom navCta variant: text-foreground bg-nav-button hover:bg-nav-button/80 active:scale-[0.97] transition-all. Size lg, with classes hidden md:inline-flex rounded-lg uppercase text-xs tracking-widest px-6.
HERO SECTION (full-screen, content at bottom-left):

Structure:

Outer <section>: relative min-h-screen flex items-end bg-hero-bg overflow-hidden
Spline 3D Background (absolute, full-size): Lazy-loaded via React.lazy(() => import("@splinetool/react-spline")) wrapped in <Suspense> with a fallback <div className="absolute inset-0 bg-hero-bg" />. The Spline component uses scene="https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode" and className="w-full h-full". Placed inside <div className="absolute inset-0">.
Dark overlay: <div className="absolute inset-0 bg-black/30 z-[1] pointer-events-none" />
Content container: relative z-10 pointer-events-none w-full max-w-[90%] sm:max-w-md lg:max-w-2xl px-6 md:px-10 pb-10 md:pb-10 pt-32
Content elements (all with staggered animate-fade-up, starting opacity-0):

Heading (delay 0.2s): <h1> with text "SENTINEL" in white + " AI" in primary green. Classes: text-[clamp(3rem,8vw,6rem)] font-bold leading-[1.05] tracking-[-0.05em] text-foreground mb-2 md:mb-4 uppercase. The "AI" part is wrapped in <span className="text-primary">.

Subheading (delay 0.4s): <p> -- "We implement security correctly." -- text-foreground/80 text-[clamp(1.125rem,2.5vw,1.875rem)] font-light mb-3 md:mb-6

Description (delay 0.55s): <p> -- "Enterprise security systems built in days. AI-powered surveillance deployed with zero-trust architecture. Smart access control set up for your entire facility. All of it done right, not just fast." -- text-muted-foreground text-[clamp(0.875rem,1.5vw,1.25rem)] font-light mb-4 md:mb-8

Two CTA buttons (delay 0.7s): Wrapped in flex flex-wrap gap-3 font-bold. Both are plain <button> elements (not shadcn Button) with pointer-events-auto (to re-enable clicks since parent is pointer-events-none):

"Book a Call": bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm cursor-pointer hover:brightness-110 transition-all active:scale-[0.97]
"Our Work": bg-white text-background px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm cursor-pointer hover:brightness-90 transition-all active:scale-[0.97]
Trust line (delay 0.85s): <p> -- "Trusted security partner. Columbus, OH. 12 systems deployed." -- text-muted-foreground/60 text-xs font-light mt-4 md:mt-6

All animated elements use style={{ animationDelay: "Xs" }} for the stagger, combined with the opacity-0 animate-fade-up classes.

PAGE WRAPPER (Index.tsx):
Simple wrapper: <div className="bg-hero-bg min-h-screen"> containing <Navbar /> and <HeroSection />.

KEY DEPENDENCIES:

@splinetool/react-spline and @splinetool/runtime for the 3D Spline embed
tailwindcss-animate plugin
shadcn/ui Button component with custom variants (navCta, hero, heroOutline)
class-variance-authority for button variants
IMPORTANT NOTES:

The Spline scene URL is https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode -- this is the exact 3D scene used
The entire content area has pointer-events-none so clicks pass through to the Spline scene, but buttons re-enable with pointer-events-auto
Responsive fluid typography uses clamp() for the heading, subheading, and description
The content is anchored to the bottom-left of the viewport (flex items-end on the section + padding-bottom on the content)
No hamburger menu on mobile -- the nav links and CTA simply hide (hidden md:flex / hidden md:inline-flex)`

const DESIGNPRO_PROMPT = `Create a full-screen hero section for a product design education platform called "DesignPro" using React + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide React.

BACKGROUND:
- Full-screen looping video background. (Local note: project downloads CloudFront MP4 to public/videos/ for offline-first performance.)
- Video: autoPlay, loop, muted, playsInline, absolute inset-0 object-cover.
- Background color: black (#000000).

NAVIGATION BAR:
- Logo: circular design with white border (2px), containing a smaller filled white circle inside, followed by "DesignPro" text.
- Nav links inside a rounded pill container with gray-700 border: Home, About Us, Courses, Instructors, Testimonials, Blog, Contact us (with arrow icon from lucide-react).
- All nav links: white/80 opacity, hover to full white, text-sm.
- Mobile: show hamburger menu icon on screens smaller than lg.
- Max-width 7xl container with proper padding.

CONTENT LAYOUT:
Top section (below nav): two-column layout on large screens, stacked on mobile.
- Left column: "We deliver transformative programs that empower emerging product designers with cutting-edge expertise and vision to thrive globally."
- Right column (right-aligned on lg+): "8000+ Talented Designers Launched !"
- Both paragraphs: white/80 opacity, text-sm on mobile, text-base on desktop.

HERO SECTION (center):
- Small uppercase text above heading: "Seats for Next Program Opening Soon" (white/80 opacity, text-xs mobile / text-sm desktop, tight tracking).
- Main heading with two lines:
  - Line 1: "Become" in white, font-medium.
  - Line 2: "Product Leader." with animated shiny gradient effect.
  - Font sizes: text-5xl (mobile) scaling up to text-9xl (xl).
  - Line height: 0.85.
  - Letter spacing: tracking-tighter.

SHINYTEXT COMPONENT:
- Use framer-motion for animation.
- Base color: #64CEFB (light blue).
- Shine color: #ffffff (white).
- Animation speed: 3 seconds.
- Gradient spread: 100 degrees.
- Gradient sweeps continuously left to right.
- Use CSS gradient with backgroundClip: text and transparent text fill.

CTA BUTTON:
- Text: "Apply for Next Enrollment" with arrow icon (lucide-react).
- Black background, hover: gray-900.
- Rounded-full shape.
- Padding: px-6 md:px-8, py-3 md:py-4.
- Arrow should translate right on hover (group-hover).
- Group hover animation on arrow icon.

TYPOGRAPHY:
- Font family: Inter (sans-serif).
- All text colors: white/80 opacity for body text, full white for headings and hover states.

TECHNICAL STACK: React + TypeScript, Vite, Tailwind CSS, Framer Motion, Lucide React.

RESPONSIVE BREAKPOINTS: Mobile-first. sm 640px, md 768px, lg 1024px, xl 1280px.

KEY CSS: Container max-w-7xl with centered margins. Section height h-screen. Video absolute positioning inset-0 object-cover. Content relative z-10 to appear above video. Smooth transitions on all interactive elements.`

const NEXORA_PROMPT = `Create a SaaS landing page hero section with the following exact specifications:

Page Layout

The entire page is h-screen flex flex-col bg-background overflow-hidden — the Navbar + Hero fill exactly 100vh with no scroll.
The page uses two Google Fonts imported via CSS: Instrument Serif (display/headings, including italic) and Inter (body text).
Fonts & Design Tokens (index.css)

Import fonts:

@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap');
CSS variables (:root):

--background: 0 0% 100% (white)
--foreground: 210 14% 17% (dark charcoal)
--primary: 210 14% 17% / --primary-foreground: 0 0% 100%
--secondary: 0 0% 96% / --secondary-foreground: 0 0% 9%
--muted: 0 0% 96% / --muted-foreground: 184 5% 55%
--accent: 239 84% 67% (indigo/blue) / --accent-foreground: 0 0% 100%
--border: 0 0% 90%
--ring: 239 84% 67%
--radius: 0.5rem
--font-display: 'Instrument Serif', serif
--font-body: 'Inter', sans-serif
--shadow-dashboard: 0 25px 80px -12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.06)
Tailwind config extends fontFamily with display and body mapped to the CSS vars. All colors use hsl(var(--token)) pattern.

Navbar

flex items-center justify-between px-6 md:px-12 lg:px-20 py-5 font-body
Left: Logo text ✦ Nexora — text-xl font-semibold tracking-tight text-foreground
Right (hidden on mobile): Nav links "Home", "Pricing", "About", "Contact" — text-sm text-muted-foreground hover:text-foreground with gap-8
CTA button: rounded-full px-5 text-sm font-medium using primary styling
Hero Section




Background Video: Fullscreen muted autoplay loop video, absolute inset-0 w-full h-full object-cover z-0
Video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_015952_e1deeb12-8fb7-4071-a42a-60779fc64ab6.mp4
All content wrapped in relative z-10 flex flex-col items-center w-full
1. Badge (top)

Framer Motion: fade up from y:10, duration 0.5s
inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground font-body
Text: "Now with GPT-5 support ✨"
mb-6
2. Headline

Framer Motion: fade up from y:16, duration 0.6s, delay 0.1s
text-center font-display text-5xl md:text-6xl lg:text-[5rem] leading-[0.95] tracking-tight text-foreground max-w-xl
Content: The Future of Smarter Automation — the word "Smarter" renders in Instrument Serif italic
3. Subheadline

Framer Motion: fade up from y:16, duration 0.6s, delay 0.2s
mt-4 text-center text-base md:text-lg text-muted-foreground max-w-[650px] leading-relaxed font-body
Text: "Automate your busywork with intelligent agents that learn, adapt, and execute—so your team can focus on what matters most."
4. CTA Buttons

Framer Motion: fade up from y:16, duration 0.6s, delay 0.3s
mt-5 flex items-center gap-3
Primary button: rounded-full px-6 py-5 text-sm font-medium font-body — text "Book a demo"
Play button: ghost variant, h-11 w-11 rounded-full border-0 bg-background shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:bg-background/80 with a Play icon (lucide) h-4 w-4 fill-foreground
5. Dashboard Preview (custom coded, NOT an image)

Framer Motion: fade up from y:30, duration 0.8s, delay 0.5s
Container: mt-8 w-full max-w-5xl
Frosted glass wrapper: rounded-2xl overflow-hidden p-3 md:p-4 with inline styles:
background: rgba(255, 255, 255, 0.4)
border: 1px solid rgba(255, 255, 255, 0.5)
boxShadow: var(--shadow-dashboard)
Dashboard internals (all coded in React, text-[11px], select-none pointer-events-none):

Top bar: Logo "N" in rounded box + "Nexora" + chevron | Search bar with ⌘K shortcut | "Move Money" + bell + avatar "JB"
Sidebar (w-40): Items — Home (active), Tasks (badge "10"), Transactions, Payments (chevron), Cards, Capital, Accounts (chevron). Section "Workflows": Trake rutes, Payments, Notifications, Settings
Main content (bg-secondary/30):
Greeting: "Welcome, Jane" — text-sm font-semibold
Action buttons row: Send (primary/accent), Request, Transfer, Deposit, Pay Bill, Create Invoice — rounded-full pill buttons text-[10px], + "Customize" text
Two equal-width cards (flex-1 basis-0) side by side:
Balance card: "Mercury Balance" with checkmark, amount $8,450,190.32 (cents in text-xs text-muted-foreground), stats (Last 30 Days, +$1.8M green, -$900K red), SVG area chart (h-20) with smooth cubic Bézier curve, linear gradient fill from accent at 15% opacity to transparent, stroke in accent color strokeWidth="1.5"
Accounts card: Header "Accounts" with + and ⋮ icons. Three rows (py-3, no dividers, text-xs, justify-between): Credit $98,125.50, Treasury $6,750,200.00, Operations $1,592,864.82
Transactions table: "Recent Transactions" heading, table with columns Date/Description/Amount/Status. 4 rows: AWS -$5,200 Pending (amber), Client Payment +$125,000 Completed (green), Payroll -$85,450 Completed, Office Supplies -$1,200 Completed
Dependencies

framer-motion for all animations
lucide-react for all icons
shadcn/ui Button component
Tailwind CSS with tailwindcss-animate plugin
Key Design Decisions

The dashboard overflows toward the bottom of the viewport and is clipped by overflow-hidden on the parent
No dark mode — light only
All colors use semantic Tailwind tokens, never raw color values in components
The SVG chart uses a hand-crafted cubic Bézier path, not a charting library`

const AURAI_PROMPT = `Build a full-screen hero section landing page for "Aurai" - an always-on AI wellness companion. The page is a single viewport-height section with a looping background video and overlaid content.

## Video Background

- Full-screen \`<video>\` element with \`autoPlay\`, \`loop\`, \`muted\`, \`playsInline\` attributes
- Video URL: \`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260618_174853_aac61aa2-0f3f-4cf1-bc78-7f657dd11164.mp4\`
- Video covers entire viewport with \`object-cover\`
- Focal point positioning:
  - Mobile (default): \`object-position: 80% center\`
  - Tablet (md breakpoint): \`object-position: right center\`
  - Desktop (lg breakpoint): \`object-position: center center\`

## Fonts

- **Askan Light** loaded from: \`https://db.onlinewebfonts.com/c/304a6edcec9f8858eeaafc2ac18243f4?family=Askan+Light\` - used for the brand name and heading
- **Inter** (weights 300, 400, 500, 600) from Google Fonts - used as the body/UI font
- Tailwind config extends fontFamily with \`askan: ['"Askan Light"', 'serif']\` and \`inter: ['Inter', 'sans-serif']\`

## Layout Structure

The content is layered on top of the video using \`absolute inset-0 z-10\` with a flex column layout. Padding: \`px-4 sm:px-10 lg:px-12 py-4 sm:py-8\`.

## Navigation (Top)

A \`<nav>\` with \`flex items-center justify-between\`:

**Left nav pill (glassmorphism):**
- \`bg-black/20 backdrop-blur-md rounded-2xl border border-white/10\`
- Padding: \`px-4 py-2.5 sm:px-6 sm:py-4\`
- Contains:
  - A custom SVG logo (4-petal pinwheel shape, \`w-5 h-5 sm:w-7 sm:h-7\`, white)
  - Brand text "Aurai" in \`font-askan text-white text-base sm:text-xl tracking-wide\`
  - Hamburger menu icon (lucide-react \`Menu\`/\`X\`) with left margin: \`ml-4 sm:ml-32 md:ml-64 lg:ml-96\`

**Right button (desktop only):**
- \`hidden sm:block bg-white text-gray-900 font-medium text-sm px-6 py-3 rounded-full\`
- Text: "Join the list"

## Mobile Menu (shown on toggle)

- \`sm:hidden\`, positioned \`absolute top-[4.5rem] left-4 right-4\`
- \`bg-black/30 backdrop-blur-xl rounded-2xl p-5 border border-white/10\`
- Contains links: "Story", "Benefits", "Connect" (white text) and a full-width "Join the list" button

## Main Content (Bottom-aligned)

On mobile: a spacer \`flex-1 sm:hidden\` pushes content to the bottom.

The content container: \`flex flex-col sm:flex-1 sm:flex-row sm:items-end pb-4 sm:pb-12 lg:pb-16 sm:mt-auto\`

**Left column:**

1. **Heading:** \`font-askan text-white text-[2rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.05] tracking-tight max-w-[700px]\`
   - Text: "Your calm is always within."

2. **Subtitle:** \`text-white/70 text-xs sm:text-base md:text-lg max-w-[520px] leading-relaxed\`
   - Text: "Aurai is your always-on wellness companion. Built by leading therapists, it brings you the care and clarity right when you need it."

3. **Email form:** A rounded pill input with inline submit button
   - Container: \`bg-black/30 backdrop-blur-md rounded-full border border-white/10\`
   - Input: transparent background, white text, placeholder "Your email address", \`px-4 sm:px-6 py-3 sm:py-4 text-sm\`
   - Submit button (absolute right-1.5): \`bg-white text-gray-900 text-xs sm:text-sm font-medium px-3 sm:px-6 py-2 sm:py-3 rounded-full\`
   - Text: "Join the list"
   - On submit: shows alert with entered email

4. **Feature pills (mobile only):** \`flex sm:hidden flex-wrap gap-2 mt-2\`
   - Three pills with \`bg-black/30 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-white/10\`
   - Labels: "Smart Therapy", "Real-time Healing", "Insights into outcomes"

**Right column (desktop only):**
- \`hidden sm:flex flex-col items-end gap-2 self-end\`
- Same three feature pills as mobile but with \`text-xs sm:text-sm px-4 py-2\`

## Custom SVG Logo

A pinwheel/4-quadrant shape with this path:
\`\`\`
M 228 0 C 172.772 0 128 44.772 128 100 L 128 0 L 0 0 L 0 28 C 0 83.228 44.772 128 100 128 L 0 128 L 0 256 L 28 256 C 83.228 256 128 211.228 128 156 L 128 256 L 256 256 L 256 228 C 256 172.772 211.228 128 156 128 L 256 128 L 256 0 Z
\`\`\`
ViewBox: \`0 0 256 256\`, fill: \`currentColor\`

## Global CSS

\`\`\`css
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
\`\`\`

## Key Design Principles

- No dark overlay on the video - content relies on glassmorphism pills and text contrast
- All interactive glass elements use \`bg-black/20\` or \`bg-black/30\` with \`backdrop-blur-md\` or \`backdrop-blur-xl\`
- Borders are \`border-white/10\` throughout
- White text with \`/70\` opacity for secondary text
- Rounded-full for buttons and inputs, rounded-2xl for containers
- Page title: "Aurai - Always-On Wellness Companion"`

const HALO_USD_PROMPT = `Build a premium, fintech-style landing page for a stablecoin product called "Halo / USD Halo" using React + TypeScript + Vite + Tailwind CSS, with lucide-react for icons. No other UI libraries. Background color of the page is #F5F5F5.

Global Setup
Use TT Norms Pro as the primary font, loaded via @font-face from /fonts/tt-norms-pro-regular.woff2 (weight 400) and /fonts/tt-norms-pro-semibold.woff2 (weight 600), with font-display: swap. Apply it to html, body, and inherit on *.
Tailwind base + components + utilities at the top of src/index.css.
Page wrapper: flex flex-col bg-[#F5F5F5]. The first section (Navbar + Hero) is wrapped in a h-screen flex flex-col overflow-hidden container.
Inner content max width across sections: max-w-[88rem] mx-auto.
Custom Logo Icon
Create an SVG component LogoIcon using currentColor, viewBox 0 0 256 256, with this path (a stylized "halo" mark made of two interlocking rounded squares):


M 128.005 191.173 C 128.448 156.208 156.93 128 192 128 L 192 64 L 128 64 C 128 99.346 99.346 128 64 128 L 64 192 L 128 192 Z M 192 256 L 64 256 C 28.654 256 0 227.346 0 192 L 0 64 L 64 64 L 64 0 L 192 0 C 227.346 0 256 28.654 256 64 L 256 192 L 192 192 Z
1. Navbar (absolute, transparent over hero)
nav is absolute top-0 left-0 right-0 z-20 px-6 py-5.
Inner row: flex items-center justify-between.
Left: LogoIcon (w-7 h-7, black) + word "Halo" (text-2xl font-medium tracking-tight text-black).
Center (hidden below md): links Network · Ecosystem · Rewards · Help · News, gap-8, text-base text-gray-700 hover:text-black font-medium transition-colors duration-200.
Right: black pill button "Open Wallet" — bg-black text-white text-base font-medium px-7 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200.
2. Hero Section
Outer: flex-1 px-6 pt-20 pb-6 flex items-end.
Inner card: relative w-full rounded-2xl overflow-hidden, inline style height: calc(100vh - 96px).
Background video (autoplay, muted, loop, playsInline, object-cover absolute inset-0 w-full h-full): 
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4

Content overlay: relative z-10 flex flex-col items-start justify-start h-full p-12 pt-36.
h1: "Your Wealth\\nWorks" (with <br/>) — text-black text-5xl md:text-6xl font-medium leading-tight max-w-xl mb-4, inline letterSpacing: '-0.04em'.
p: "An automated, reward-powered digital dollar built for native passive earnings and effortless connection into DeFi." — text-black/70 text-base md:text-lg max-w-md mb-8 leading-relaxed, inline fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif".
Pill button "Join us" with arrow circle: inline-flex items-center gap-3 bg-black text-white text-base md:text-lg font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800. Trailing arrow inside bg-white rounded-full p-2, using ArrowRight w-5 h-5 text-black from lucide-react.
Followed by the Brand Marquee below.
Brand Marquee (inside hero, below button)
Container: mt-24 w-full max-w-md overflow-hidden.
Inject scoped <style> with keyframes marquee translating 0 → -50%, applied to .marquee-track { display:flex; width:max-content; animation: marquee 22s linear infinite; }.
Render the brand list twice (so it loops seamlessly).
Each item: mx-7 shrink-0 text-black/60 whitespace-nowrap with these inline styles:
Stripe — Georgia serif, weight 700, letterSpacing -0.02em, fontSize 15px
Coinbase — Arial sans, weight 900, letterSpacing 0.08em, fontSize 13px, uppercase
Uniswap — Trebuchet MS, weight 600, letterSpacing 0.01em, fontSize 15px, italic
Aave — Courier New monospace, weight 700, letterSpacing 0.12em, fontSize 13px, uppercase
Compound — Palatino, Book Antiqua, weight 400, letterSpacing -0.01em, fontSize 16px
MakerDAO — Impact, Arial Narrow, weight 400, letterSpacing 0.04em, fontSize 14px
Chainlink — Verdana, weight 700, letterSpacing -0.03em, fontSize 13px
3. Info Section ("Meet USD Halo.")
section bg-[#F5F5F5] px-6 py-24.
Row 1: 2-col grid (grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start).
Left: h2 "Meet USD Halo." — text-black text-4xl md:text-5xl font-medium leading-tight mb-8, letterSpacing -0.03em. Below it, black pill "Discover it" button with white arrow circle (same pattern as "Join us" but text-base).
Right: paragraph "USD Halo is a reward-earning dollar coin that lets your savings grow while remaining tied to the U.S. dollar." — text-black/70 text-2xl md:text-3xl leading-relaxed.
Row 2 — 4-col card grid (grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4):
Card 1 (spans 2 cols on lg): rounded-2xl with background image: 
https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260423_164207_f243351d-ed59-48ec-83a0-a5e996bdbe3c.png&w=1280&q=85

 backgroundSize: cover; backgroundPosition: center. Inside: p-7 min-h-80 flex flex-col justify-between. Title (top): "Savings that bloom" — text-black text-2xl font-medium leading-snug letterSpacing -0.02em. Body (bottom): "Gain steady returns as your dollar tokens are routed into top-performing DeFi strategies." — text-black/70 text-base max-w-xs.
Card 2: solid #2B2644, rounded-2xl, p-7, min-h-80, flex-col-justify-between. White heading "Always fluid,\\nalways pegged." text-2xl font-medium, body "Keep fully dollar-anchored with on-demand access to funds — no lockups or waits." text-white/60 text-base.
Card 3: same #2B2644 styling. Heading "Fully\\nautomated". Body "Skip the task of tuning positions yourself. USD Halo runs in the background for you."
4. Backed By Section (marquee row)
section bg-[#F5F5F5] px-6 with inner max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center.
Left col (1/4): text-black/70 text-base leading-relaxed — "Funded by premier partners\\nand forward-thinking leaders."
Right col (3/4): infinite marquee (same pattern as hero marquee but 30s linear infinite, class .backers-track, keyframes backers-marquee). Items use mx-10 shrink-0 text-black/50 whitespace-nowrap with these inline styles:
Fundamental Labs — Times New Roman serif, 400, ls 0.02em, 14px
KUCOIN — Arial Black, 900, ls 0.08em, 16px
NGC — Impact, 700, ls 0.05em, 18px
NxGen — Georgia, 600, ls -0.02em, 17px
Matter Labs — Helvetica, 700, ls -0.01em, 15px
DEXTools — Verdana, 700, ls 0.06em, 14px, uppercase
NGRAVE — Courier New, 700, ls 0.18em, 14px
Polychain — Palatino, 500, ls 0.03em, 15px
Render brands twice for the loop.
5. Use Cases Section
section bg-[#F5F5F5] px-6 py-24. Inner: 2-col grid grid-cols-1 md:grid-cols-2 gap-8 items-start.
Left column (md:pr-12 md:pt-2):
Eyebrow: "USD Halo in Practice" — text-black/60 text-sm mb-2.
h2 "Use modes" — text-5xl md:text-6xl font-medium leading-none mb-6, ls -0.04em.
Paragraph: "USD Halo powers a wide range of modes for builders, companies and treasuries wanting safe and rewarding stablecoin integrations plus more" — text-black/60 text-base leading-relaxed max-w-sm.
Right column: large relative rounded-3xl overflow-hidden min-h-[720px] with background video (autoplay/muted/loop/playsInline, object-cover absolute inset-0): 
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4

Overlay content relative z-10 p-10 md:p-12:
h3 "Commerce" — text-4xl md:text-5xl font-medium leading-tight mb-5, ls -0.03em.
Paragraph: "Lift customer retention by offering USD Halo, a trusted dollar-backed stablecoin with strong yields, letting your patrons earn with zero effort on your platform." — text-black/70 text-base max-w-md mb-8.
Inline-flex link "Know more" with leading circular icon: w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center group-hover:bg-white transition-colors containing ArrowRight w-4 h-4 text-black.
Animations & Interactions
Two CSS keyframe marquees (22s for hero brands, 30s for backers), both translating 0 → -50% on a duplicated track for seamless looping.
All buttons use transition-colors duration-200 with hover state hover:bg-gray-800 (or hover:bg-white for the white circle).
Nav links transition on hover from text-gray-700 to text-black.
Videos autoplay muted with playsInline for mobile compatibility.
Composition
App renders, in order:

h-screen overflow-hidden wrapper containing Navbar (absolute) + HeroSection.
InfoSection
BackedBySection
UseCasesSection
All section backgrounds are #F5F5F5. All headings use negative letter-spacing for the tight, modern fintech feel. Use font-medium (600) as the heaviest weight throughout.`

/**
 * Mainframe — 原始创建 prompt 归档
 */
const MAINFRAME_PROMPT = `Build a modern, interactive hero section using React, Tailwind CSS, and Framer Motion (motion/react). Ensure you follow these precise architecture and styling instructions:
1. Fonts & Global Animations
Import the Inter font from Google Fonts.
In your CSS setup, configure Tailwind to use it by default (--font-sans: 'Inter', ...).
Create a keyframe animation in CSS named blink for the typewriter cursor:
code
CSS
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.animate-blink { animation: blink 1s step-end infinite; }
2. General Page Structure
Wrap the entire application in a container div with the following classes: relative bg-white text-neutral-900 font-sans selection:bg-[#EAECE9] selection:text-[#1C2E1E] antialiased overflow-x-hidden flex flex-col lg:block lg:min-h-screen.
3. Background Video Component (with Native Scrubbing)
Container element: Add a div containing the background video with classes: order-last lg:order-none relative lg:absolute lg:inset-0 lg:z-0 overflow-hidden pointer-events-none w-full aspect-square md:aspect-video lg:aspect-auto lg:h-full bg-neutral-50 lg:bg-transparent.
Video element: Use <video> with muted, playsInline, preload="auto".
Video Source URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4
Classes: w-full h-full object-cover object-right lg:object-right-bottom.
Scrubbing/Playback Logic via useEffect hooks:
Desktop Mouse Scrubbing Hook: Listen to the window mousemove event. If window.innerWidth < 1024, ignore (disable scrubbing). Store the mouse 'previous X' coordinate to calculate the delta against 'current X'. Update the target scrub time based on (delta / window.innerWidth) * 0.8 * video.duration. Clamp the time between 0 and duration. Set video.currentTime = targetTime. Bind a seeked event listener to ensure smooth tracking frame to frame.
Mobile Autoplay Hook: Because scrubbing is disabled on mobile frames, trigger normal playback for screens < 1024 width: video.autoplay = true and video.play().
4. Interactive Navbar
Header wrapper: Wrap the Navbar in <header className="fixed top-0 inset-x-0 z-10 px-5 sm:px-8 py-4 sm:py-5 flex flex-row justify-between items-center bg-transparent">
Logo (Left side): Flex row with gap-3.
Text: Mainframe&reg; (using the ® symbol). Classes: text-[21px] sm:text-[26px] tracking-tight text-black font-medium select-none.
Icon block right beside it: An asterisk &#10033;. Classes: text-[25px] sm:text-[30px] text-black select-none tracking-[-0.02em] font-medium leading-none mb-1.
Desktop Nav Links (Center): Flex row, hidden md:flex, text-[23px] text-black. Links are "Labs", "Studio", "Openings", "Shop" separated by <span className="opacity-40">,&nbsp;</span> dividers. Hover states should use hover:opacity-60 transition-opacity.
Desktop CTA (Right): Hidden on mobile. A link reading "Get in touch" mapped with text-[23px] text-black underline underline-offset-2 hover:opacity-60 transition-opacity.
Mobile Menu Logic:
Hamburger <button> visible below md. Has three w-6 h-[2px] bg-black spans.
Hook it to a local state isMobileMenuOpen. When open, animate the burger into an 'X' (top bar rotate-45 translate-y-[7px], middle bar opacity-0, bottom bar -rotate-45 -translate-y-[7px]). All spans need transition-all duration-300.
Create a full screen Mobile Navigation Overlay div hidden on Desktop. Fixed inset-0 z-[9] with bg-white/95 backdrop-blur-sm. Apply opacity-100 pointer-events-auto when isMobileMenuOpen is true; otherwise, opacity-0 pointer-events-none.
5. Content Layout Container
Below the background video and relative to it, add a content grouping layer: <div className="relative z-10 flex flex-col order-first lg:order-none w-full bg-white lg:bg-transparent pb-8 lg:pb-0 lg:min-h-screen">
Inside that, the overarching layout engine: <main id="spade-hero" className="w-full max-w-7xl mx-auto px-6 py-12 flex-1 flex flex-col justify-center">
6. Typewriter Hook and Headline
Implement a custom useTypewriter(text, speed = 38, startDelay = 600) React hook. It uses setTimeout and setInterval to iteratively build a string slice by slice. It must return an object: { displayed: string, done: boolean }.
Run the hook with the string "we'd love to\\nhear from you!".
Wrap the headline securely in a motion.div configured to drop-in (initial: opacity: 0, y: 20, animate: opacity: 1, y: 0, transition duration 0.6).
Render your hook text inside <h1 className="text-5xl md:text-6xl lg:text-[76px] font-normal tracking-tight text-black leading-[1.08] mb-8 select-none w-full whitespace-pre-wrap">.
While typing (!done), output a <span className="inline-block w-[2px] h-[1.1em] bg-black align-middle ml-[2px] animate-blink" /> cursor at the end of the displayed text string.
7. Secondary Description Text
Another motion.div (delay 0.1s from the headline).
Content: <p> tag that reads: Whether you have questions, feedback, <br /> drop us a message and we'll get back to you as soon as possible.
Classes: text-lg md:text-xl text-[#5A635A] leading-relaxed font-normal mb-14 max-w-2xl.
8. Interactive Multi-Select Service Pills
Using setServices track an array ["Brand", "Digital", "Campaign", "Other"].
The prompt Title: "What sort of service?" (text-2xl font-medium tracking-tight mb-2). Subtitle: "Select all that apply" (opacity-85 text-[#738273] mb-8).
Iterate over the options natively outputting motion.button wrapper tags allowing multiple selections inside a flex wrap container.
Pill active traits classes: bg-[#1C2E1E] text-white shadow-md shadow-emerald-950/5 transform. Show a check icon (lucide-react) dropping in using type: "spring", stiffness: 300, damping: 20.
Pill inactive traits classes: bg-white text-[#1C2E1E] border border-[#F1F3F1] hover:bg-[#F1F3F1]/55.
Contingent Feedback Status Banner: Underneath your service pills, write an <AnimatePresence mode="wait"> that tracks user state array length:
Empty: Show a generic placeholder indicating "Please click to select services above." at fifty percent opacity (opacity: 0.5, italic, text-xs).
Active Selection: Swap cleanly into a container <motion.div> that springs height gracefully (height: "auto"). Inside, display an acknowledgment banner reading "Ready to inquire about: [array.join(", ")]" combined with an arrow call-to-action button "Let's Go" (text-[#4D6D47] uppercase text-xs). Style the banner with bg-[#FAFBF9] border rounded-2xl.`

/**
 * Aura Email — 原始创建 prompt 归档
 */
const AURA_EMAIL_PROMPT = `Build a premium, AI-native email client landing page called "Aura" using **React 18 + TypeScript + Vite + Tailwind CSS + motion/react (framer motion) + lucide-react**. The aesthetic is dark (bg \`#0c0c0c\`), cinematic, glassy, with a looping fullscreen background video, a shiny gradient headline, a macOS-style menu bar, a realistic inbox mockup, and a custom "liquid-glass" card treatment.

## Stack / setup

- \`package.json\` dependencies: \`react\`, \`react-dom\`, \`@supabase/supabase-js\`, \`motion\` (v12+, import from \`motion/react\`), \`lucide-react\`.
- Tailwind config extends colors with \`brand: '#3D81E3'\` and fontFamily sans with \`['Inter','system-ui','sans-serif']\`.
- Font: Google Fonts Inter weights 400, 500, 600, 700, 800, 900. Import in \`index.css\` via \`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');\`.
- \`html,body { font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; }\`.
- Background color base \`#0c0c0c\`, text white, selection \`bg-brand/30\`.

## Global background video (fixed, behind everything)

Inside the root wrapper (\`relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white\`), render a fixed full-screen video:

\`\`\`
<div className="fixed inset-0 z-0 pointer-events-none">
  <video autoPlay loop muted playsInline
    className="w-full h-full object-cover pointer-events-none"
    src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4" />
</div>
\`\`\`

Also render two hidden-on-mobile fixed vertical guide lines at the 36rem container edges:
\`\`\`
<div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+36rem)] w-px bg-white/10 z-[5]" />
<div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+36rem)] w-px bg-white/10 z-[5]" />
\`\`\`

## Global SVG noise filters (two, both id \`c3-noise\`)

- One at root level (subtle grain, multiply blend) for the shiny headline.
- One inside the pricing section (fractal noise, overlay blend) for the watermark.

Root filter:
\`\`\`
<filter id="c3-noise">
  <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
  <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0" />
  <feComposite in2="SourceGraphic" operator="in" result="noise" />
  <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
</filter>
\`\`\`

Pricing filter:
\`\`\`
<filter id="c3-noise">
  <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" stitchTiles="stitch" />
  <feComponentTransfer><feFuncA type="linear" slope="0.075" /></feComponentTransfer>
  <feComposite in2="SourceGraphic" operator="in" result="noise" />
  <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
</filter>
\`\`\`

## Shared primitives

**AppleLogo** — inline SVG Apple mark, \`viewBox="0 0 384 512"\`, \`fill="currentColor"\`, default \`w-4 h-4\`. Path:
\`M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z\`.

**LogoMark** — abstract 4-quadrant curve mark, \`viewBox="0 0 256 256"\`, default \`w-8 h-8\`, white fill. Path:
\`M 0 128 C 70.692 128 128 185.308 128 256 L 64 256 C 64 220.654 35.346 192 0 192 Z M 256 192 C 220.654 192 192 220.654 192 256 L 128 256 C 128 185.308 185.308 128 256 128 Z M 128 0 C 128 70.692 70.692 128 0 128 L 0 64 C 35.346 64 64 35.346 64 0 Z M 192 0 C 192 35.346 220.654 64 256 64 L 256 128 C 185.308 128 128 70.692 128 0 Z\`.

**AppleButton** — rounded-full white pill, Apple logo + "Download Aura" label + ChevronRight. Chevron translates \`+1px\` on group hover. Classes: \`group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium text-sm px-5 py-3 transition-all hover:bg-white/90 active:scale-[0.98]\`. Accepts \`label\` and \`full\` props.

**SectionEyebrow** — \`<span className="w-1.5 h-1.5 rounded-full bg-white" />\` + label, optional tag pill with \`px-2 py-0.5 rounded-full border border-white/10 text-white/50\`.

**gradientStyle** used on the headline word "Revitalized":
\`\`\`
backgroundImage: 'linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)'
backgroundSize: '200% auto'
WebkitBackgroundClip: 'text' (+ backgroundClip text)
color: 'transparent'; WebkitTextFillColor: 'transparent'
filter: 'url(#c3-noise)'
\`\`\`

Shiny animation (\`.animate-shiny\`): 6s linear infinite, keyframes shiny \`{0%: background-position: -200% center; 100%: 200% center;}\`.

## Liquid-glass utility (used across cards)

\`\`\`
.liquid-glass {
  background: rgba(255,255,255,0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
  position: relative; overflow: hidden;
}
.liquid-glass::before {
  content: ''; position: absolute; inset: 0; border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor; mask-composite: exclude;
  pointer-events: none;
}
\`\`\`

## Section 1 — Navbar

Max-width \`max-w-6xl mx-auto px-6\`. Motion nav fades/slides down (opacity 0 -> 1, y -10 -> 0, 0.6s easeOut). Left: just the \`LogoMark\` (NO "Aura" word). Center (\`hidden md:flex gap-8\`): links \`['Solutions','Pricing','Blog','Documentation','Careers']\` each \`text-white/70 text-sm font-medium hover:text-white\` with staggered y animation (delay 0.1 + i*0.05). Right desktop: \`<AppleButton />\` default label "Download Aura". Mobile right: \`w-10 h-10 rounded-full border border-white/10 bg-white/5\` Menu icon button.

## Section 2 — Hero

Centered section, \`pt-16 md:pt-28 pb-20 text-center flex flex-col items-center\`.
Motion h1 (delay 0.3, 0.8s cubic-bezier(.22,1,.36,1)), classes \`text-4xl md:text-7xl font-semibold tracking-tight leading-[0.9]\`:
- Line 1: "Your email." (white)
- Line 2: "Revitalized" — apply \`animate-shiny\` and the \`gradientStyle\` inline.

Then motion paragraph (delay 0.5): \`mt-8 text-white/60 max-w-md text-base leading-[1.5]\`:
> "Aura is the premier inbox platform for the current era. It leverages powerful AI to organize, prioritize, and refine your messages into total clarity."

Then motion div (delay 0.7) with \`<AppleButton />\` and \`text-xs text-white/40\` "Download for Intel / Apple Silicon".

## Section 3 — macOS menu bar strip

Full-width bar \`h-10 bg-black/40 backdrop-blur-md border-t border-b border-white/10\`. Inside \`max-w-6xl mx-auto px-6 h-full flex items-center justify-between text-xs\`. Left: \`AppleLogo w-3.5 h-3.5\`, bold white "Aura", then menu items \`['File','Edit','View','Go','Window','Help']\` (progressive hiding: index>2 \`hidden sm:inline\`, index>3 \`hidden md:inline\`). Right: \`Search w-3.5 h-3.5\` + "Wed May 6 1:09 PM". Enters with delay 0.9.

## Section 4 — Inbox mockup

\`max-w-6xl mx-auto px-6 py-16 md:py-24\`. Outer container \`relative rounded-2xl overflow-hidden border border-white/10 bg-[#0e1014]/90 backdrop-blur-2xl\`. Motion enters from y:40 at delay 1.1.

Title bar: three traffic lights \`#ff5f57\`, \`#febc2e\`, \`#28c840\` (each \`w-3 h-3 rounded-full\`); center label "Aura — Inbox" \`text-xs text-white/50\`.

Body \`grid grid-cols-12 h-[520px]\`:

**Sidebar (col-span-3, border-r, bg-black/30, p-4):**
- White "Compose with Aura" button with \`Sparkles\` icon (\`rounded-lg bg-white text-black text-xs font-semibold px-3 py-2\`).
- Nav items (icon + label + optional count): Inbox (12, active), Starred (3), Sent, Drafts (2), Archive, Trash. Active uses \`bg-white/10 text-white\`, others \`text-white/60 hover:bg-white/5\`.
- Labels section: uppercase tracking "Labels" small title, then 4 color dots: Work \`#00d2ff\`, Personal \`#A4F4FD\`, Travel \`#f59e0b\`, Finance \`#10b981\`.

**Message list (col-span-4, border-r):**
- Search header: \`Search\` icon + placeholder "Search mail".
- 6 messages with name, subject, preview, time, unread/active flags:
  - Linear — "Weekly product digest" — "Your team shipped 23 issues this week..." — 9:41 AM — unread + active
  - Sophia Chen — "Re: Q3 roadmap review" — "Thanks for sending the deck over. I had a few thoughts..." — 8:12 AM — unread
  - Figma — "Marcus commented on your file" — "Love the new direction on the landing hero." — Yesterday
  - Stripe — "Payout of $12,480.00 sent" — "Your payout is on its way to your bank..." — Yesterday
  - Vercel — "Deployment ready for aura-web" — "Preview is live at aura-web-g3f.vercel.app" — Mon
  - GitHub — "[aura/core] PR #482 approved" — "david-lim approved your pull request." — Mon

**Reader (col-span-5):**
- Toolbar with Reply, Forward, Archive, Trash2 icon buttons (each \`w-7 h-7 rounded-md hover:bg-white/5\`) and a MoreHorizontal on the right.
- Header: "Weekly product digest"; sender avatar gradient bubble \`w-7 h-7 rounded-full bg-gradient-to-br from-[#00d2ff] to-[#0B2551]\` with "L"; "Linear" + "to me · 9:41 AM"; "Work" pill.
- Body:
  - Card with \`Sparkles\` icon (color \`#A4F4FD\`) labeled "Summary by Aura" and text "Your team closed 23 issues, merged 14 PRs, and shipped 2 features. Top contributor: Marcus. No action needed."
  - Paragraphs: "Hi team,", "Here is your weekly digest of everything happening across your projects. This was a strong week with significant progress on the Q3 roadmap.", "Twenty-three issues were closed, fourteen pull requests were merged, and two customer-facing features went out. The velocity trend continues to climb.", "Let me know if you would like a deeper breakdown by project or contributor.", "— The Linear team" (\`text-white/50\`).
  - Attachment pill with \`Paperclip\` icon: "digest-may-6.pdf".

## Section 5 — FeatureTriage

\`max-w-6xl mx-auto px-6 py-20 md:py-28\`, two-column grid \`grid md:grid-cols-2 gap-10 md:gap-16 items-start\`.

Left column motion (y 20 -> 0, 0.7s): \`SectionEyebrow label="Triage" tag="AI-native"\`, h2 \`mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]\`: "Clear your inbox" <br/> "in a single pass.". Paragraph \`mt-6 text-white/60 text-base leading-[1.6] max-w-md\`: "Aura reads every message, understands intent, and routes the noise away from the signal. Focus on what moves your day forward — the rest handles itself." Chips row (\`text-xs text-white/70 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]\`): "Auto-categorize", "Snooze for later", "Silent newsletters", "One-tap unsubscribe".

Right column: \`liquid-glass rounded-2xl p-5\` card. Eyebrow text: "Today · 42 messages triaged". Four sub-cards (each \`liquid-glass rounded-lg p-3\`):
- Priority (4) \`#ffffff\` — items: "Sophia Chen — Q3 review", "David Lim — contract signoff"
- Follow-up (7) \`#e5e5e5\` — items: "Marcus — design review", "Figma — comment thread"
- Updates (18) \`#a3a3a3\` — items: "Vercel — deploy ready", "GitHub — PR #482 merged"
- Archived (13) \`#525252\` — items: "Stripe payout · Newsletter · Receipts"

## Section 6 — LogoCloud

\`max-w-6xl mx-auto px-6 py-16 md:py-20\`. Centered kicker \`text-xs uppercase tracking-widest text-white/40\`: "Trusted by the world's most thoughtful teams". Grid \`mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6\`, each logo name as \`text-sm font-semibold tracking-tight text-white/50 hover:text-white\`. Names: Linear, Vercel, Figma, Stripe, Ramp, Notion, Loom, Arc. Each fades in with stagger 0.05.

## Section 7 — Testimonials

\`max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10\`. 3-col grid of \`liquid-glass rounded-2xl p-6\` figures. Each: blockquote \`text-sm text-white/80 leading-[1.6]\` wrapped in quotes, \`figcaption mt-6 pt-5 border-t border-white/10\` with name \`text-sm font-semibold\`, role \`text-xs text-white/50\`, company uppercased \`text-xs text-white font-semibold tracking-wide\`.
- "Aura gave our leadership team four hours of their week back. It reads like email from the future." — Parker Wilf, Group Product Manager, MERCURY
- "The command palette alone has changed how I process messages. I can't imagine going back to a traditional client." — Andrew von Rosenbach, Senior Engineering Program Manager, COHERE
- "Triage that actually understands context. Our team stopped dreading Monday morning inboxes." — Mathies Christensen, Engineering Manager, LUNAR

## Section 8 — Pricing

Uses custom CSS classes (not Tailwind) for cinematic typography.

Outer \`<section className="c3-pricing-section">\` with its own \`<svg>\` defining the \`c3-noise\` pricing filter described earlier.

Watermark (giant hero headline as backdrop):
\`\`\`
<div className="c3-watermark-container">
  <div className="c3-watermark-main">
    <span className="c3-watermark-line-1">Your email.</span>
    <span className="c3-watermark-line-2">Revitalized</span>
  </div>
</div>
\`\`\`

State: \`yearly\` boolean toggle. Three plans:
- **Free** — "Free" — "For creators taking their first steps with Forma." — Up to 3 projects in the cloud / Image export up to 1080p / Basic editing tools / Free templates and icons / Access via web and mobile app.
- **Standard** — monthly "$9,99/m" yearly "$99,99/y" — "For freelancers and small teams who need more freedom and flexibility." — Up to 50 projects in the cloud / Export up to 4K / Advanced editing toolkit / Team collaboration (up to 5 members) / Access to premium template library.
- **Pro** (\`c3-card-pro\`) — monthly "$19,99/m" yearly "$199,99/y" — "For studios, agencies, and professional creators working with brands." — Unlimited projects / Export up to 8K + animations / AI-powered content generation tools / Unlimited team members / Brand customization.

Each card renders: \`c3-tier-small\` (tier), \`c3-tier-large\` (price), \`c3-desc\`, \`c3-list\` of checkmark rows (white circle \`c3-check\` with white SVG check), \`c3-btn\` "Choose Plan".

Below: \`c3-toggle-wrap\` with "Yearly" label and a pill toggle (white knob black when off; when \`.active\`, background \`rgba(255,255,255,0.2)\`, knob white, translated 24px).

Pricing CSS (key values, include exactly):
- \`.c3-pricing-section { position: relative; padding: 40px 20px 80px; display: flex; flex-direction: column; align-items: center; overflow-x: hidden; }\`
- \`.c3-watermark-container { position: relative; width: 100%; max-width: 1100px; text-align: center; margin-top: 40px; z-index: 2; }\`
- \`.c3-watermark-main { font-size: 9rem; font-weight: 800; line-height: 0.9; letter-spacing: -0.05em; filter: url(#c3-noise); display: flex; flex-direction: column; align-items: center; }\`
- \`.c3-watermark-line-1 { color: #fff; }\`
- \`.c3-watermark-line-2 { background: linear-gradient(to right, #091020 0%, #0B2551 25%, #A4F4FD 65%, #00d2ff 100%); -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent; }\`
- \`.c3-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; width: 100%; max-width: 1100px; margin-top: 60px; transform: translateX(20px); position: relative; z-index: 3; }\`
- \`.c3-card { background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4)); backdrop-filter: blur(14px) brightness(0.91); border: 1px solid rgba(255,255,255,1); border-radius: 44px; padding: 50px 24px; min-height: 580px; display: flex; flex-direction: column; transition: all 0.6s cubic-bezier(.22,1,.36,1); overflow: hidden; position: relative; }\`
- \`.c3-card::before { content:''; position:absolute; inset:0; border-radius:inherit; background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%); pointer-events:none; }\`
- \`.c3-card:hover { background: rgba(15,15,15,0.6); border-color: rgba(34,211,238,0.7); transform: translateY(-12px) scale(1.01); }\`
- \`.c3-card-pro { background: linear-gradient(135deg, rgba(0,0,0,0.85), rgba(0,0,0,0.55)); }\`
- \`.c3-tier-small { font-size: 1.1rem; font-weight: 400; color: rgba(255,255,255,0.6); }\`
- \`.c3-tier-large { font-size: 2.8rem; font-weight: 500; letter-spacing: -0.02em; color: #fff; margin-top: 8px; }\`
- \`.c3-desc { font-size: 0.88rem; color: rgba(255,255,255,0.45); min-height: 3.2em; margin-top: 16px; margin-bottom: 40px; line-height: 1.5; }\`
- \`.c3-list li { display:flex; align-items:flex-start; gap: 14px; font-size: 0.92rem; color: rgba(255,255,255,0.8); margin-bottom: 18px; line-height: 1.4; }\`
- \`.c3-check { width:28px; height:28px; border-radius:50%; background: rgba(255,255,255,0.15); display:inline-flex; align-items:center; justify-content:center; flex-shrink:0; }\`
- \`.c3-btn { background:#fff; color:#000; padding: 10px 32px; border-radius: 100px; font-weight:600; font-size: 0.88rem; margin-top:auto; border:none; cursor:pointer; align-self:center; transition: all 0.3s cubic-bezier(.22,1,.36,1); }\`
- \`.c3-btn:hover { background:#f5f5f5; transform:scale(1.02); box-shadow: 0 8px 24px rgba(255,255,255,0.15); }\`
- \`.c3-toggle-wrap { display:flex; align-items:center; justify-content:flex-end; gap:12px; width:100%; max-width:1100px; margin-top:32px; padding-right:20px; }\`
- \`.c3-toggle { width:52px; height:28px; background:#fff; border-radius:100px; position:relative; cursor:pointer; border:none; transition: background 0.3s cubic-bezier(.4,0,.2,1); padding:0; }\`
- \`.c3-toggle-knob { width:20px; height:20px; background:#000; border-radius:50%; position:absolute; top:4px; left:4px; transition: all 0.3s cubic-bezier(.4,0,.2,1); }\`
- \`.c3-toggle.active { background: rgba(255,255,255,0.2); }\`
- \`.c3-toggle.active .c3-toggle-knob { transform: translateX(24px); background:#fff; }\`
- Media query \`(max-width:1024px)\`: \`.c3-watermark-main { font-size: 3.5rem; filter:none; }\`, \`.c3-watermark-line-2 { background:none; -webkit-text-fill-color:#00d2ff; color:#00d2ff; }\`, \`.c3-grid\` becomes horizontal scroll-snap flex (\`display:flex; overflow-x:auto; scroll-snap-type:x mandatory; transform:none; width:100vw; padding:0 20px; gap:16px; scrollbar-width:none\`), cards \`flex: 0 0 320px; scroll-snap-align:center\`, \`.c3-grid::-webkit-scrollbar{display:none}\`, \`.c3-toggle-wrap { justify-content:center; padding-right:0; }\`.

## Section 9 — FinalCTA

\`max-w-6xl mx-auto px-6 py-20 md:py-32\`. Motion \`liquid-glass relative overflow-hidden rounded-3xl px-8 py-16 md:py-24 text-center\`. Radial glow overlay: \`radial-gradient(600px circle at 50% 0%, rgba(255,255,255,0.15), transparent 70%)\` at opacity 0.3.
- h2 \`text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]\`: "Close the tabs." / "Open your day.".
- Paragraph \`mt-6 text-white/60 max-w-md mx-auto text-sm leading-[1.6]\`: "Join thousands of builders, founders, and operators who treat email like a tool — not an obligation."
- Buttons: \`<AppleButton label="Download Aura" />\` and \`rounded-full border border-white/15 text-white text-sm font-medium px-5 py-3 hover:bg-white/5\` "Talk to sales" + ChevronRight.


Reproduce exactly — fonts, gradient stops, noise filters, copy strings, animation delays, and the CloudFront video URL \`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4\`.`

/**
 * LinkFlow — 原始创建 prompt 归档
 */
const LINKFLOW_PROMPT = `### Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS 3.4**
- **lucide-react** for icons (\`LogIn\`, \`UserPlus\`, \`Play\`, \`Sparkles\`, \`Menu\`, \`X\`)
- No Framer Motion -- all animations are CSS \`transition-*\` classes

---

### Fonts (loaded in \`index.html\`)

\`\`\`html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
<link href="https://db.onlinewebfonts.com/c/6e47ef470dd19698c911332a9b4d1cf4?family=Neue+Haas+Grotesk+Text+Pro" rel="stylesheet" />
<link href="https://db.onlinewebfonts.com/c/dec0d9b4e22ca588dc20e1e2e09a59b5?family=Neue+Haas+Grotesk+Display+Pro+55+Roman" rel="stylesheet" />
\`\`\`

Body/root font stack (in \`index.css\`):

\`\`\`css
html, body, #root {
  height: 100%;
  margin: 0;
  font-family: 'Neue Haas Grotesk Display Pro 55 Roman', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
\`\`\`

---

### Video URL (CloudFront)

\`\`\`
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4
\`\`\`

---

### Color Palette

| Token | Hex |
|-------|-----|
| Dark green (text, buttons) | \`#1f2a1d\` |
| Medium dark green | \`#2d3a2a\` |
| Button hover | \`#2a3827\` |
| Body text green | \`#4b5b47\` |
| Heading primary | \`#336443\` |
| Heading accent | \`#85AB8B\` |
| Bottom-left text | \`#3d5638\` |
| Bottom-left button bg | \`#3d5638\`, hover \`#2d4228\` |

---

### Architecture

Two files:

1. **\`BoomerangVideoBg.tsx\`** -- captures video frames into canvas, then plays them forward/backward in a seamless boomerang loop at 30fps (960px max capture width).
2. **\`App.tsx\`** -- the full hero section.

---

### \`BoomerangVideoBg.tsx\` (exact)

\`\`\`tsx
import { useEffect, useRef, useState } from 'react';

type Props = {
  src: string;
  className?: string;
};

export default function BoomerangVideoBg({ src, className }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const displayCanvasRef = useRef<HTMLCanvasElement>(null);
  const [framesReady, setFramesReady] = useState(false);
  const framesRef = useRef<HTMLCanvasElement[]>([]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const frames: HTMLCanvasElement[] = [];
    let capturing = true;
    let lastTime = -1;
    const MAX_WIDTH = 960;

    const captureFrame = () => {
      if (!capturing || video.readyState < 2) return;
      if (video.currentTime === lastTime) return;
      lastTime = video.currentTime;

      const vw = video.videoWidth;
      const vh = video.videoHeight;
      if (!vw || !vh) return;

      const scale = Math.min(1, MAX_WIDTH / vw);
      const w = Math.round(vw * scale);
      const h = Math.round(vh * scale);

      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(video, 0, 0, w, h);
      frames.push(canvas);
    };

    type VFCVideo = HTMLVideoElement & {
      requestVideoFrameCallback?: (cb: () => void) => number;
    };
    const vfcVideo = video as VFCVideo;
    const hasVFC = typeof vfcVideo.requestVideoFrameCallback === 'function';

    let rafId = 0;
    const rafLoop = () => {
      captureFrame();
      if (capturing) rafId = requestAnimationFrame(rafLoop);
    };

    const vfcLoop = () => {
      captureFrame();
      if (capturing && vfcVideo.requestVideoFrameCallback) {
        vfcVideo.requestVideoFrameCallback(vfcLoop);
      }
    };

    const onEnded = () => {
      capturing = false;
      if (frames.length > 0) {
        framesRef.current = frames;
        setFramesReady(true);
      }
    };

    const onLoaded = () => {
      video.play().catch(() => {});
      if (hasVFC) {
        vfcVideo.requestVideoFrameCallback!(vfcLoop);
      } else {
        rafId = requestAnimationFrame(rafLoop);
      }
    };

    video.addEventListener('loadedmetadata', onLoaded);
    video.addEventListener('ended', onEnded);
    if (video.readyState >= 1) onLoaded();

    return () => {
      capturing = false;
      cancelAnimationFrame(rafId);
      video.removeEventListener('loadedmetadata', onLoaded);
      video.removeEventListener('ended', onEnded);
    };
  }, [src]);

  useEffect(() => {
    if (!framesReady) return;
    const canvas = displayCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const frames = framesRef.current;
    if (frames.length === 0) return;

    const first = frames[0];
    canvas.width = first.width;
    canvas.height = first.height;

    let index = 0;
    let direction = 1;
    let last = performance.now();
    const interval = 1000 / 30;
    let rafId = 0;

    const render = (now: number) => {
      if (now - last >= interval) {
        last = now;
        ctx.drawImage(frames[index], 0, 0);
        index += direction;
        if (index >= frames.length - 1) {
          index = frames.length - 1;
          direction = -1;
        } else if (index <= 0) {
          index = 0;
          direction = 1;
        }
      }
      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafId);
  }, [framesReady]);

  return (
    <div className={className ?? 'absolute inset-0 w-full h-full'}>
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        style={{ display: framesReady ? 'none' : 'block' }}
        muted
        playsInline
        preload="auto"
        crossOrigin="anonymous"
      />
      <canvas
        ref={displayCanvasRef}
        className="w-full h-full object-cover"
        style={{ display: framesReady ? 'block' : 'none' }}
      />
    </div>
  );
}
\`\`\`

---

### \`App.tsx\` (exact)

\`\`\`tsx
import { useState, useEffect } from 'react';
import { LogIn, UserPlus, Play, Sparkles, Menu, X } from 'lucide-react';
import BoomerangVideoBg from './BoomerangVideoBg';

const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks = [
    { href: '#mission', label: 'Purpose' },
    { href: '#how', label: 'The Process' },
    { href: '#pricing', label: 'Tariffs' },
  ];

  return (
    <section className="relative w-full min-h-screen sm:h-screen overflow-hidden">
      <BoomerangVideoBg src={BG_VIDEO} className="absolute inset-0 w-full h-full" />
      <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 sm:py-6">
        <div className="flex items-center gap-2 text-[#2d3a2a]">
          <span className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight">
            LinkFlow<sup className="text-[10px] sm:text-xs font-medium">TM</sup>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md rounded-full pl-6 pr-1 py-1 shadow-sm border border-white/60">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={\`text-sm px-3 py-2 transition-colors \${
                i === 0 ? 'font-semibold text-[#1f2a1d]' : 'font-medium text-[#4b5b47] hover:text-[#1f2a1d]'
              }\`}
            >
              {link.label}
            </a>
          ))}
          <button className="ml-2 bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors">
            Try it Live
          </button>
        </div>

        <div className="flex items-center gap-3 sm:gap-6 text-[#2d3a2a]">
          <a href="#signup" className="hidden sm:flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity">
            <UserPlus className="w-4 h-4" />
            Sign Me Up!
          </a>
          <a href="#login" className="hidden sm:flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity">
            <LogIn className="w-4 h-4" />
            Enter
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden relative flex items-center justify-center w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-white/60 text-[#1f2a1d] transition-all duration-300 hover:bg-white/90"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <Menu
              className={\`w-5 h-5 absolute transition-all duration-300 \${
                menuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
              }\`}
            />
            <X
              className={\`w-5 h-5 absolute transition-all duration-300 \${
                menuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
              }\`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={\`lg:hidden fixed inset-0 z-20 transition-opacity duration-300 \${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }\`}
        onClick={() => setMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-[#1f2a1d]/40 backdrop-blur-sm" />
      </div>

      {/* Mobile menu drawer */}
      <div
        className={\`lg:hidden fixed top-0 right-0 bottom-0 z-20 w-[85%] max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] \${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }\`}
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-8">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={\`text-2xl font-semibold text-[#1f2a1d] py-4 border-b border-[#1f2a1d]/10 transition-all duration-500 \${
                  menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }\`}
                style={{ transitionDelay: menuOpen ? \`\${150 + i * 70}ms\` : '0ms' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div
            className={\`mt-8 flex flex-col gap-4 transition-all duration-500 \${
              menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }\`}
            style={{ transitionDelay: menuOpen ? '400ms' : '0ms' }}
          >
            <a href="#signup" className="flex items-center gap-2 text-sm font-medium text-[#2d3a2a] sm:hidden">
              <UserPlus className="w-4 h-4" />
              Sign Me Up!
            </a>
            <a href="#login" className="flex items-center gap-2 text-sm font-medium text-[#2d3a2a] sm:hidden">
              <LogIn className="w-4 h-4" />
              Enter
            </a>
            <button className="mt-2 bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors">
              Try it Live
            </button>
          </div>
        </div>
      </div>

      {/* Hero copy */}
      <div className="relative z-10 flex flex-col items-center text-center pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6">
        <h1
          className="font-normal leading-[0.95] text-[#336443] text-[2rem] sm:text-4xl md:text-5xl lg:text-[4.75rem] xl:text-[5.25rem] max-w-5xl"
          style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif', letterSpacing: '-0.035em' }}
        >
          Close the rift{' '}
          <span className="text-[#85AB8B]">
            linking
            <br className="hidden sm:block" /> signals and action
          </span>
        </h1>
        <p className="mt-6 sm:mt-8 text-[#4b5b47] text-sm sm:text-base md:text-lg leading-relaxed max-w-md px-2">
          Shape scattered signals into meaningful outcomes via AI-driven workflows.
        </p>
      </div>

      {/* Bottom-left CTA block */}
      <div className="absolute left-4 right-4 sm:right-auto sm:left-6 md:left-10 bottom-6 sm:bottom-8 md:bottom-10 z-10 max-w-sm">
        <div className="flex items-center gap-2 text-[#3d5638] sm:text-white/95 mb-3">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-semibold sm:font-medium">
            FluxEngine<sup className="text-[10px]">TM</sup>
          </span>
        </div>
        <p className="text-[#3d5638]/90 sm:text-white/85 text-xs leading-relaxed mb-6 max-w-xs font-medium sm:font-normal">
          LinkFlow smoothly unites your company systems, streamlining data paths between services without having to write custom scripts.
        </p>
        <div className="flex items-center gap-4 flex-wrap">
          <button className="bg-[#3d5638] sm:bg-white hover:bg-[#2d4228] sm:hover:bg-white/90 text-white sm:text-[#1f2a1d] text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-colors shadow-sm">
            Try it Live
          </button>
          <button className="text-[#3d5638] sm:text-white text-sm font-semibold sm:font-medium hover:opacity-80 transition-opacity">
            Know More.
          </button>
        </div>
      </div>

      {/* Bottom-right video link */}
      <div className="hidden sm:flex absolute right-6 md:right-10 bottom-8 md:bottom-10 z-10 items-center gap-2 text-white/90 text-sm">
        <button className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
          <Play className="w-3 h-3 fill-white text-white ml-0.5" />
        </button>
        <span className="font-medium">How we build?</span>
        <span className="text-white/60">1:35</span>
      </div>
    </section>
  );
}

export default App;
\`\`\`

---

### Animation Details (all CSS, no Framer Motion)

| Element | Property | Values |
|---------|----------|--------|
| Hamburger Menu/X icon swap | \`transition-all duration-300\` | Open: Menu gets \`opacity-0 rotate-90 scale-50\`, X gets \`opacity-100 rotate-0 scale-100\`. Closed: reverse. |
| Mobile overlay backdrop | \`transition-opacity duration-300\` | Open: \`opacity-100 pointer-events-auto\`. Closed: \`opacity-0 pointer-events-none\`. |
| Mobile drawer slide | \`transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]\` | Open: \`translate-x-0\`. Closed: \`translate-x-full\`. |
| Mobile nav links stagger | \`transition-all duration-500\` | Open: \`translate-x-0 opacity-100\`, delay per item: \`150ms + i * 70ms\`. Closed: \`translate-x-8 opacity-0\`, delay \`0ms\`. |
| Mobile CTA group | \`transition-all duration-500\` | Open: \`translate-x-0 opacity-100\`, delay \`400ms\`. Closed: \`translate-x-8 opacity-0\`, delay \`0ms\`. |
| Nav buttons | \`transition-colors\` | Default Tailwind duration (150ms). |
| Opacity links | \`transition-opacity\` | \`hover:opacity-80\`. |

---

### Key Layout/Spacing Notes

- Root section: \`relative w-full min-h-screen sm:h-screen overflow-hidden\`
- Navbar padding: \`px-4 sm:px-6 md:px-10 py-4 sm:py-6\`
- Desktop pill nav: \`bg-white/70 backdrop-blur-md rounded-full pl-6 pr-1 py-1 shadow-sm border border-white/60\`
- Hero heading: \`pt-24 sm:pt-28 md:pt-32\`, font sizes \`text-[2rem] sm:text-4xl md:text-5xl lg:text-[4.75rem] xl:text-[5.25rem]\`, \`leading-[0.95]\`, \`letterSpacing: '-0.035em'\`
- Bottom-left block: \`absolute left-4 right-4 sm:right-auto sm:left-6 md:left-10 bottom-6 sm:bottom-8 md:bottom-10\`
- Bottom-right video: \`absolute right-6 md:right-10 bottom-8 md:bottom-10\`

---

### Dependencies (package.json)

\`\`\`json
{
  "dependencies": {
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "vite": "^5.4.2"
  }
}
\`\`\``

/**
 * Equilibrium — 原始创建 prompt 归档
 */
const EQUILIBRIUM_PROMPT = `Build a full-screen, single-page React + TypeScript + Vite + Tailwind CSS hero section with a "liquid glass" aesthetic on top of a looping background video. Use \`lucide-react\` for icons. No other UI libraries.

**Font & Global CSS (\`src/index.css\`):**
- Import Geist from Google Fonts: \`https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap\`
- Apply \`Geist\` globally via \`* { font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }\`
- Include \`@tailwind base; @tailwind components; @tailwind utilities;\`
- Define a \`.liquid-glass\` class:
  - \`background: rgba(255,255,255,0.01);\`
  - \`background-blend-mode: luminosity;\`
  - \`backdrop-filter: blur(4px);\` plus \`-webkit-backdrop-filter\`
  - \`border: none;\`
  - \`box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);\`
  - \`position: relative; overflow: hidden;\`
- Add a \`.liquid-glass::before\` pseudo-element creating a gradient border via mask compositing:
  - \`content:''; position:absolute; inset:0; border-radius:inherit; padding:1.4px;\`
  - \`background: linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);\`
  - \`-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; pointer-events:none;\`

**Component (\`src/App.tsx\`):**
- Import from \`lucide-react\`: \`ChevronDown\`, \`Infinity\`, \`Menu\`, \`X\`. Import \`useState\` from React.
- Constant \`BG_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_230229_7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4'\`
- \`navLinks\` array: \`{ label: 'Home', active: true }\`, \`{ label: 'Wellness', dropdown: true }\`, \`{ label: 'Routine' }\`, \`{ label: 'Our Team' }\`.
- \`menuOpen\` state via \`useState(false)\`.

**Layout:**
- Root: \`<div class="relative w-full h-screen overflow-hidden">\`.
- Background \`<video>\` absolutely positioned, \`w-full h-full object-cover\`, \`autoPlay muted loop playsInline\`, \`src={BG_VIDEO}\`.

**Navbar** (\`absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-5 sm:px-8 py-5\`):
- Logo (left): flex with \`gap-2 text-white font-medium text-base\`. \`<Infinity size={22} strokeWidth={1.5} />\` followed by \`<span>Equilibrium</span>\`.
- Nav pill (center, \`hidden md:flex\`): \`liquid-glass items-center gap-1 rounded-xl px-2 py-2\`. Map \`navLinks\`. Each button: \`flex items-center gap-0.5 px-3 py-1.5 rounded-md text-sm transition-colors\`; active gets \`bg-white/15 text-white\`, others \`text-white/70 hover:text-white\`. Dropdown items render a \`<ChevronDown size={13} class="mt-px" />\`.
- CTAs (right, \`hidden md:flex items-center gap-3\`):
  - "Log in": \`liquid-glass text-white text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/5 transition-colors\`
  - "Begin Now": \`bg-white text-black text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/90 transition-colors\`
- Mobile toggle (\`md:hidden\`): \`liquid-glass text-white p-2 rounded-lg\`; shows \`X\` when open else \`Menu\` (size 18).

**Mobile menu** (when \`menuOpen\`): \`absolute top-[72px] left-4 right-4 z-30 md:hidden liquid-glass rounded-2xl p-4 flex flex-col gap-1\`. Same nav links as buttons \`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm\`. Bottom CTA row: \`flex gap-2 mt-2 pt-3 border-t border-white/10\` with two \`flex-1\` buttons ("Log in", "Begin Now") matching desktop styles.

**Hero content (bottom-left)** \`absolute bottom-0 left-0 z-20 px-6 sm:px-12 pb-10 sm:pb-16 max-w-2xl\`:
- \`<h1>\`: \`text-white text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight tracking-tight mb-4\` — text: \`Live Better, Feel Whole Every Day\`.
- \`<p>\`: \`text-white/60 text-sm leading-relaxed mb-7 max-w-md\` — text: \`Take charge of how you feel with a companion built for your journey—build routines, follow your growth, and unlock tailored insights for a steadier, more vibrant life each day.\`
- Buttons row \`flex flex-wrap items-center gap-3\`:
  - "Start Today": \`bg-white text-black text-sm sm:text-base font-medium px-6 sm:px-7 py-3 rounded-full hover:bg-white/90 transition-colors\`
  - "Discover How": \`liquid-glass text-white text-sm sm:text-base font-medium px-6 sm:px-7 py-3 rounded-full hover:bg-white/5 transition-colors\`

**Animations/interactions:** all buttons use Tailwind \`transition-colors\`; liquid-glass effect uses \`backdrop-filter: blur(4px)\` plus the animated-looking gradient border pseudo. No additional keyframe animations. The background video itself provides motion.

**Dependencies:** \`react\`, \`react-dom\`, \`lucide-react\`, \`tailwindcss\`, \`vite\`, \`@vitejs/plugin-react\`, TypeScript. Tailwind configured with default content globs for \`./index.html\` and \`./src/**/*.{ts,tsx}\`.`

/**
 * Fearless Vision — 原始创建 prompt 归档
 */
const FEARLESS_VISION_PROMPT = `Build a full-screen hero section using React, Tailwind CSS, Framer Motion, and Lucide React icons. Use the Inter font. The page is fully mobile-responsive. Here are the exact specifications:

---

**BACKGROUND:**
- A full-screen autoplaying, looping, muted video covering the entire viewport as a background.
- Video URL: \`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4\`
- The video is positioned absolute, inset-0, with \`object-cover\` to fill the viewport.

---

**COLOR:**
- Accent color: \`#5E0ED7\` (deep purple). Used for the logo dot, the "+" symbols in stats, and the CTA link text.
- All body text is black (#000).

---

**FONT:**
- Font family: \`'Inter', sans-serif\` applied to the root container.
- All text is uppercase with wide letter-spacing (\`tracking-widest\` or \`tracking-wide\`).
- Font weights: 600 (semibold) throughout.

---

**LAYOUT (flex column, min-h-screen):**
The page is a flex column with three vertical sections:
1. **Nav** (top, fixed height)
2. **Stats row** (flex-1, vertically centered, right-aligned)
3. **Bottom content** (pinned to bottom with padding)

---

**NAVIGATION BAR:**
- Horizontal flex, items centered, justified between. Padding: \`px-5 sm:px-8 md:px-12 pt-5 md:pt-6\`.
- **Left:** A circular logo — 32px round div with 2px border in accent color, containing a 10px solid circle in accent color.
- **Center (hidden on mobile, visible md+):** Four nav links: "Story", "Expertise", "Studios", "Feedback". Text: 14px, font-semibold, tracking-widest, uppercase, black.
- **Right:** A 36px round black button with three horizontal white lines (hamburger icon — three \`span\` elements, each \`w-4 h-0.5 bg-white\` with \`gap-1\`). This opens the mobile menu on click.

---

**MOBILE MENU OVERLAY:**
- Triggered by hamburger click. Fixed, full-screen, z-50, white background.
- Top row: same logo (left) and a 36px round black close button with an X icon (right).
- Below: vertical list of the 4 nav links at \`text-3xl\`, font-semibold, tracking-widest, uppercase, with \`gap-8\` and \`mt-16\`.
- Bottom (mt-auto): "Work With Us" CTA in accent color with ArrowUpRight icon, \`text-xl\`.

---

**STATS ROW (middle section):**
- Container: \`flex-1 flex items-center justify-end\`, with same horizontal padding. \`py-8 md:py-0\`.
- Three stat items in a horizontal row with \`gap-5 sm:gap-8 md:gap-10\`, each right-aligned:
  - **+300** / CRAFTED BRANDS
  - **+200** / DIGITAL PRODUCTS
  - **+100** / VENTURES FUNDED
- Number styling: \`fontSize: clamp(1.5rem, 5vw, 3.5rem)\`, weight 600. The "+" is rendered separately in accent color at 0.5em size. The number is black.
- Label: \`text-[10px] sm:text-xs md:text-sm\`, font-semibold, tracking-widest, uppercase, black, \`whitespace-pre-line leading-tight\` (each label has a line break between the two words).

---

**BOTTOM SECTION:**
- Padding: \`px-5 sm:px-8 md:px-12 pb-8 md:pb-12\`. Flex column with \`gap-6 md:gap-12\`.

**Row A (tagline + CTA):**
- Flex row, items-center, justify-between, gap-4.
- **Left:** Small uppercase tagline paragraph: "Shaping Bold / Visions Into Power / For Your Tribe" (with \`<br />\` line breaks). Text: \`text-[10px] sm:text-xs md:text-sm\`, font-semibold, tracking-widest, max-width \`130px sm:160px md:max-w-xs\`.
- **Right:** CTA link "Work With Us" with ArrowUpRight icon. Text: \`text-base sm:text-xl md:text-2xl\`, accent color, weight 600, \`whitespace-nowrap\`. Icon: 18px on mobile, 22px on sm+.

**Row B (description + main heading):**
- Flex row, \`items-end\`, justify-between, \`gap-3 sm:gap-4\`.
- **Left:** A fixed-width container (\`w-[120px] sm:w-[180px] md:w-[280px]\`, shrink-0) containing a paragraph: "Creative Studios Built Around Elevating Your Vision Into Striking Reality". Text: \`text-[9px] sm:text-xs md:text-sm\`, font-semibold, tracking-widest, uppercase, \`text-left md:text-right\`.
- **Right:** The main heading — three words stacked vertically: "Fearless", "Vision", "Delivered". Each word in its own \`overflow-hidden\` wrapper. Text: \`fontSize: clamp(2rem, 9vw, 9rem)\`, \`lineHeight: 0.88\`, weight 600, uppercase, black, text-right.

---

**ANIMATIONS (Framer Motion):**

All animations fire on page load (initial -> animate).

1. **fadeDown variant** (nav elements):
   - From: \`{ opacity: 0, y: -20 }\`
   - To: \`{ opacity: 1, y: 0 }\`
   - Each element has a custom stagger index. Delay: \`index * 0.1s\`. Duration: 0.5s. Ease: \`[0.22, 1, 0.36, 1]\`.
   - Applied to: logo (custom=0), each nav link (custom=1-4), hamburger (custom=5).

2. **fadeUp variant** (stats + bottom content):
   - From: \`{ opacity: 0, y: 32 }\`
   - To: \`{ opacity: 1, y: 0 }\`
   - Delay: \`index * 0.12s\`. Duration: 0.6s. Ease: \`[0.22, 1, 0.36, 1]\`.
   - Applied to: each stat card (custom=2,3,4), tagline paragraph (custom=5), CTA link (custom=6), description block (custom=7).

3. **Heading slide-up** (main heading words):
   - Each word slides up from \`y: "110%"\` to \`y: 0\` within its overflow-hidden parent (clip reveal effect).
   - Delay: \`0.4 + wordIndex * 0.14\` (so 0.4s, 0.54s, 0.68s). Duration: 0.7s. Ease: \`[0.22, 1, 0.36, 1]\`.

---

**RESPONSIVE BREAKPOINTS:**
- Mobile-first. Three tiers: default (mobile), \`sm:\` (640px), \`md:\` (768px).
- Nav links hidden on mobile, shown md+.
- Spacing, font sizes, and widths scale up at each breakpoint.
- Mobile menu provides full navigation on small screens.

---

**DEPENDENCIES:**
- React 18
- Tailwind CSS 3
- framer-motion
- lucide-react (ArrowUpRight, X icons)`

/**
 * NHM — 原始创建 prompt 归档
 */
const NHM_PROMPT = `Project Setup

Stack: React 19 + Vite 6 + Tailwind CSS 4 + Motion (Framer Motion) + Lucide React icons + TypeScript

package.json dependencies:
- \`react\`, \`react-dom\` ^19.0.1
- \`vite\` ^6.2.3
- \`@tailwindcss/vite\` ^4.1.14, \`tailwindcss\` ^4.1.14
- \`motion\` ^12.23.24
- \`lucide-react\` ^0.546.0
- \`@vitejs/plugin-react\` ^5.0.4
- \`typescript\` ~5.8.2

Fonts (loaded via Google Fonts in \`index.css\`):
- Sans: Inter (weights: 300, 400, 500, 600)
- Mono: JetBrains Mono (weights: 400, 500)

\`\`\`css
/* index.css */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
}

@layer utilities {
  .text-mega {
    font-size: 21vw;
    line-height: 0.75;
    letter-spacing: -0.04em;
  }
}
\`\`\`

Global styling: Background \`#fcfcfc\`, text \`#111\`, selection color \`bg-black text-white\`, \`overflow-x-hidden\`, \`font-sans\` (Inter).

---

DATA

\`\`\`tsx
const chaptersData = [
  { name: "Age of Dinosaurs", image: "https://res.cloudinary.com/dsdxaxkiz/image/upload/v1779624247/01_udnber.png" },
  { name: "Fossils of Ancient Life", image: "https://res.cloudinary.com/dsdxaxkiz/image/upload/v1779624374/02_pmvxxl.png" },
  { name: "Reptiles of the Mesozoic", image: "https://res.cloudinary.com/dsdxaxkiz/image/upload/v1779624236/03_hcp3jc.png" },
  { name: "Marine Fossil Gallery", image: "https://res.cloudinary.com/dsdxaxkiz/image/upload/v1779624256/04_get63z.png" },
  { name: "Prehistoric Giants", image: "https://res.cloudinary.com/dsdxaxkiz/image/upload/v1779624251/05_kz1tyu.png" }
];
\`\`\`

---

STATE

\`\`\`tsx
const [showVideo, setShowVideo] = useState(false);
const [activeChapter, setActiveChapter] = useState(2); // starts at "Reptiles of the Mesozoic"
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
\`\`\`

- \`showVideo\` flips to \`true\` after a 2800ms delay (setTimeout)
- \`activeChapter\` auto-cycles every 3500ms via setInterval, wrapping \`(prev + 1) % 5\`

---

ANIMATION VARIANTS

\`\`\`tsx
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const letterBlock = {
  initial: { y: 120, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
  }
};
\`\`\`

---

SECTION 1: HERO (full viewport height)

Container: \`relative w-full min-h-screen flex flex-col overflow-hidden\`

1A. HEADER (NHM Logo)

- \`motion.header\` with \`staggerChildren: 0.1, delayChildren: 0.1\`
- Padding: \`pt-6 px-6 md:px-16\`, \`z-20\`
- The "NHM" logo is a custom inline SVG with \`viewBox="0 0 840 100"\`, \`fill-[#111]\`, full width
- The SVG is wrapped in \`motion.h1\` with \`variants\` that animate from \`scale: 1.03\` to \`scale: 1\` with \`staggerChildren: 0.06, delayChildren: 0.1\`
- Each polygon of each letter uses the \`letterBlock\` variant (slides up from \`y: 120\`)
- Letter N (translate 0,0): Three polygons -- left vertical \`0,0 14,0 14,100 0,100\`, right vertical \`200,0 214,0 214,100 200,100\`, diagonal \`0,0 33,0 214,100 181,100\`
- Letter H (translate 280,0): Three polygons -- left vertical \`0,0 14,0 14,100 0,100\`, right vertical \`200,0 214,0 214,100 200,100\`, crossbar \`14,43 200,43 200,57 14,57\`
- Letter M (translate 560,0): Four polygons -- left vertical \`0,0 14,0 14,100 0,100\`, right vertical \`266,0 280,0 280,100 266,100\`, left diagonal \`0,0 26,0 153,100 127,100\`, right diagonal \`254,0 280,0 153,100 127,100\`

1B. SUB-NAV BAR

- Below the SVG logo, \`flex justify-between items-start mt-8\`
- Font: \`text-[10px] md:text-[11px] font-mono tracking-[0.2em] uppercase\`
- Uses \`fadeUp\` variant with \`duration: 0.8, ease: "easeOut"\`

Left column (15% width): Three lines -- "Natura" / "History" / "Museum"

Arrow separator (5% width, hidden on mobile): \`ArrowRight\` from lucide, size 14, strokeWidth 1, \`text-gray-400\`

Center column (flex-1 on mobile, 30% on desktop): "Exploring the story of life on earth through science, discovery and wonder." -- Split differently on desktop (3 lines) vs mobile (4 lines). \`text-gray-800 leading-relaxed font-mono\`

Arrow separator (5% width, hidden on mobile): Same as above

Right column (15% width, hidden on mobile): Nav links list -- Visit, Exhibitions, Discover, Learn, About. \`text-gray-800\`, \`hover:text-black hover:underline\`

Hamburger button (far right, z-60): Two horizontal lines (\`w-8 h-[1.5px] bg-black\`), \`gap-[6px]\`. Hover: first line shrinks to \`w-6\`, second expands to \`w-10\`. When open: first rotates 45deg + translateY, second rotates -45deg + translateY (forming an X). Transition: \`duration-300\`.

1C. MOBILE MENU OVERLAY

- \`AnimatePresence\` wrapping a \`motion.div\`
- Appears below the header, slides in from \`y: -20\`, \`opacity: 0\` to \`y: 0, opacity: 1\`
- \`bg-[#fcfcfc] border-b border-gray-200 shadow-xl\`, only visible on \`md:hidden\`
- Contains the same nav links as the desktop version, \`text-sm font-mono tracking-[0.2em] uppercase\`, \`space-y-6\`

1D. BACKGROUND VIDEO

- Appears after 2800ms delay (controlled by \`showVideo\` state)
- \`absolute top-0 left-0 w-full h-full pointer-events-none z-0\`
- Video: \`autoPlay loop muted playsInline\`, \`w-full h-full object-cover\`
- Video URL: \`https://res.cloudinary.com/dsdxaxkiz/video/upload/v1779624998/magnific_use-img-2-as-the-exact-ba_Piu3X0W42C_wnrc8f.mp4\`

1E. LEFT SIDEBAR CONTENT

- \`motion.div\` with \`staggerChildren: 0.15, delayChildren: 0.6\`
- Position: \`px-10 md:px-16\`, \`mt-20 sm:mt-28 md:mt-32\`, \`w-[320px]\`, \`z-10\`

Section indicator: \`01\` + horizontal line (\`w-16 h-[1.5px] bg-black/20\`), \`text-xs font-mono\`

Headline: "TIMELESS WONDERS" -- \`text-[3.5rem] md:text-[5rem] font-normal tracking-tight leading-[1]\`. Line break between "TIMELESS" and "WONDERS".

Description: "Step into the natural world and / discover the stories written / millions of years ago." -- \`text-[13px] md:text-[14px] text-gray-700 w-[240px] leading-[1.6]\`

CTA Button ("Explore Now"):
- Container: \`bg-[#1a1a1a] px-6 py-3.5 border border-[#1a1a1a] rounded-md shadow-sm\`
- Hover: slides up 0.5px, adds \`shadow-[3px_3px_0px_rgba(17,17,17,0.5)]\`
- Active: resets translate and shadow
- Has a sliding background panel: \`bg-[#fcfcfc]\` that slides from \`-translate-x-[101%]\` to \`translate-x-0\` on hover, \`duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]\`
- Icon: Custom SVG leaf/plant shape (4 paths forming a stylized leaf), white by default, turns \`#111\` on hover with \`scale-110 -rotate-12 -translate-y-1\` transform
- Text: "Explore Now", \`text-[15px] font-medium\`, white turning to \`#111\` on hover

1F. RIGHT SIDEBAR (hidden on mobile)

- \`motion.div\` with \`staggerChildren: 0.15, delayChildren: 0.9\`
- Position: \`w-[200px] mt-12 md:mt-20\`, \`hidden md:flex\`

Specimen info: "Tyrannosaurus Rex" heading (\`text-[10px] font-bold font-mono tracking-widest uppercase\`), subtext "Late Cretaceous period / 68-66 million years ago" (\`text-[12px] text-gray-600 leading-[1.6]\`)

Stats: "Length" label + "12.3 m" value, "Height" label + "4.0 m" value. Labels: \`text-[10px] font-mono tracking-widest uppercase text-gray-500\`. Values: \`text-[13px] font-medium\`.

View Details button: Circle (\`w-10 h-10 rounded-full border border-gray-400\`) with \`Plus\` icon (size 16, strokeWidth 1.5), text "View Details" (\`text-[10px] font-mono uppercase tracking-widest font-bold\`). Hover: circle gets \`border-black bg-[#111]\`, icon turns white.

1G. BOTTOM-LEFT "SCROLL TO EXPLORE"

- \`absolute bottom-10 left-[2.5rem] md:left-[4rem]\`, \`hidden md:flex\`
- Fade up animation: \`delay: 1.2\`
- Circle (\`w-12 h-12 rounded-full border border-gray-300\`) containing two thin vertical lines (\`w-[1px] h-[12px] bg-gray-600\`, \`gap-[4px]\`) representing a pause icon
- Text: "Scroll to explore" -- \`text-[10px] font-mono tracking-widest uppercase text-gray-500 font-semibold\`

---

SECTION 2: "EXPLORE OUR WORLD"

Container: \`relative w-full min-h-[75vh] md:min-h-screen bg-[#fcfcfc]\`, flex column centered, \`pt-24 md:pt-32 pb-0 z-20\`

2A. SECTION LABEL

\`[ 02 ] Explore Our World\` -- \`text-[10px] md:text-[11px] font-mono tracking-[0.2em]\`, \`mb-12\`. "02" in \`text-gray-500\`, "Explore Our World" in \`text-gray-900 font-bold uppercase\`.

2B. MAIN HEADING

"Unearth the stories of our planet's past through fossils, minerals, and ancient wonders." -- \`text-[2.2rem] md:text-[3.5rem] lg:text-[4.2rem] leading-[1.1] font-medium tracking-tight text-[#111]\`, max-width 1000px, text-center. Line break on desktop after "past". Animates with \`whileInView\` from \`y: 40, opacity: 0\` to \`y: 0, opacity: 1\`, \`once: true\`, margin \`-100px\`.

2C. ACTION PILLS

Five pill buttons in a flex-wrap row, \`gap-3 md:gap-4\`, \`mb-10 md:mb-24\`. Staggered reveal animation (\`staggerChildren: 0.1, delayChildren: 0.3\`). Each pill: \`rounded-full border border-gray-300 text-[11px] font-medium uppercase tracking-wider bg-white/50 backdrop-blur-sm text-gray-800\`. Hover: \`border-black bg-black text-white\`. Icons from lucide (size 14, strokeWidth 2):

1. \`Bone\` + "Dinosaurs"
2. \`Dna\` + "Ancient Life"
3. \`Gem\` + "Minerals"
4. \`Leaf\` + "Fossils"
5. \`BookOpen\` + "Learn More"

2D. SPACER

\`min-h-[220px] md:min-h-[450px]\` -- provides room for the pterodactyl image from Section 3 to overlap upward.

2E. BOTTOM TEXT

Absolute positioned at bottom, \`px-8 md:px-16 pb-8 md:pb-12\`, \`pointer-events-none\`. Two text elements at \`justify-between\`:
- Left: "WE DON'T JUST TELL STORIES."
- Right: "PALEONTOLOGY (C) 2026"
- Both: \`text-[10px] font-mono tracking-widest uppercase text-gray-500 font-medium\`, hidden on mobile.

---

SECTION 3: "ANCIENT COLLECTION" (Dark Section)

Container: \`relative w-full bg-[#0a0a0a] text-white flex flex-col z-30\`

3A. PTERODACTYL IMAGE (Overlapping)

- Absolute positioned at top, centered horizontally (\`left-1/2 -translate-x-1/2\`)
- Width: \`w-[160vw] md:w-[1100px]\`
- Image URL: \`https://res.cloudinary.com/dsdxaxkiz/image/upload/v1779625001/ChatGPT_Image_May_23_2026_12_24_44_PM_1_lv1dne.png\`
- Animates with \`whileInView\` from \`y: "-65%", opacity: 0\` to \`y: "-78%", opacity: 1\`, \`duration: 1.4, ease: "easeOut"\`, viewport margin \`100px\`
- \`pointer-events-none z-0\`, \`mix-blend\` not applied here

3B. HEADING AREA

- Padding: \`px-8 md:px-16 pt-32 md:pt-48 mb-16\`, \`z-10\`
- Two-column layout on xl (\`flex-col xl:flex-row justify-between\`)

Left -- Main heading: "Curated from millions of years of wonder [3 circle icons] & discovery." -- \`text-[1.8rem] md:text-[3rem] lg:text-[3.8rem] xl:text-[4rem] leading-[1.15] font-medium tracking-tight text-white\`. The three circle icons are inline (\`inline-flex gap-2 md:gap-3 align-middle mx-2 md:mx-4 translate-y-[-4px]\`), each \`w-10 h-10 md:w-14 md:h-14 rounded-full border border-gray-600 bg-black text-gray-400\`. Hover: \`bg-white text-black border-white\`. Icons: \`Bone\`, \`Dna\`, \`Leaf\` (size 22).

Right -- Tagline + pills:
- Tagline: "WE DON'T JUST DISPLAY FOSSILS / WE SHARE EARTH'S STORY" -- \`text-[9px] md:text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-6 leading-relaxed\`
- Three pills: "Educational", "Authentic", "Inspiring" -- \`px-5 py-2 rounded-full border border-gray-600 text-[9px] font-mono tracking-widest uppercase text-gray-300\`. Hover: \`bg-white text-black border-white\`.

3C. TWO-COLUMN PANEL

Separated by \`h-[1px] bg-gray-800\` line. Flex row on desktop, column on mobile.

Left panel (35% width):
- \`border-r border-gray-800\` on desktop, \`border-b\` on mobile
- \`min-h-[400px] md:min-h-[500px]\`
- Top: \`***\` text (\`text-gray-500 text-xl tracking-[0.3em]\`)
- Center: Chapter image using \`SandTransitionImage\` component (SVG filter-based sand/dissolve transition). Image: \`absolute inset-0 w-[80%] h-[80%] m-auto object-contain mix-blend-lighten\`. Uses \`AnimatePresence mode="wait"\`.
- Bottom: Chapter counter \`01 / 05\` style, with animated number (\`motion.div\` slides vertically). \`text-[10px] font-mono tracking-widest text-[#888] uppercase\`. Counter numeral color \`#888\`, divider \`text-[#333]\`.

Right panel (65% width):
- Top bar: "Explore the past. Understand the present." + animated "Chapter 0X" label. \`border-b border-gray-800 p-8 text-[10px] font-mono text-gray-400 tracking-widest\`.
- Chapter list: 5 items, each \`border-b border-gray-800/80 py-8\`. Active: \`text-white\`, inactive: \`text-[#444] hover:text-[#999]\`. Chapter name: \`text-2xl md:text-[2rem] font-medium tracking-tight\`. Active item shows \`ArrowUpRight\` icon (size 22, strokeWidth 1, \`text-gray-400\`) that animates in/out.
- Clicking a chapter sets \`activeChapter\`.

3D. BOTTOM FOOTER

- \`h-[1px] bg-gray-800\` divider
- Text: "DIGGING INTO OUR PLANET'S PAST" -- \`px-8 py-8 text-[10px] font-mono tracking-widest text-gray-500 uppercase bg-[#0a0a0a]\`

---

SandTransitionImage COMPONENT

A custom component that creates a sand/particle dissolve effect using SVG filters:

\`\`\`tsx
function SandTransitionImage({ src, alt, className }) {
  // Uses usePresence() from motion/react for AnimatePresence awareness
  // Unique filterId per instance via useRef
  // requestAnimationFrame loop over 900ms
  // Easing: entering = quartic ease-out (1 - Math.pow(1-t, 4)), exiting = cubic (Math.pow(t, 3))
  // SVG filter chain:
  //   1. feTurbulence: fractalNoise, baseFrequency 1.8, numOctaves 4
  //   2. feDisplacementMap: scale up to 150 based on progress
  //   3. feOffset: dy up to -80 (enter) or 120 (exit), dx up to -30/+30
  //   4. feGaussianBlur: up to 6px
  //   5. feColorMatrix: opacity fades (1 - progress * 1.2)
  // Image has crossOrigin="anonymous" and referrerPolicy="no-referrer"
}
\`\`\`

---

ALL EXTERNAL ASSET URLs

Video:
- \`https://res.cloudinary.com/dsdxaxkiz/video/upload/v1779624998/magnific_use-img-2-as-the-exact-ba_Piu3X0W42C_wnrc8f.mp4\`

Images:
- Chapter 1: \`https://res.cloudinary.com/dsdxaxkiz/image/upload/v1779624247/01_udnber.png\`
- Chapter 2: \`https://res.cloudinary.com/dsdxaxkiz/image/upload/v1779624374/02_pmvxxl.png\`
- Chapter 3: \`https://res.cloudinary.com/dsdxaxkiz/image/upload/v1779624236/03_hcp3jc.png\`
- Chapter 4: \`https://res.cloudinary.com/dsdxaxkiz/image/upload/v1779624256/04_get63z.png\`
- Chapter 5: \`https://res.cloudinary.com/dsdxaxkiz/image/upload/v1779624251/05_kz1tyu.png\`
- Pterodactyl: \`https://res.cloudinary.com/dsdxaxkiz/image/upload/v1779625001/ChatGPT_Image_May_23_2026_12_24_44_PM_1_lv1dne.png\`

(Note: these are Cloudinary URLs, not CloudFront. The project uses Cloudinary for all hosted media assets.)

---

KEY DESIGN DETAILS

- Color palette: \`#fcfcfc\` (off-white bg), \`#111\` / \`#1a1a1a\` (near-black), \`#0a0a0a\` (dark section bg). Gray scale via Tailwind: \`gray-300\` through \`gray-800\`.
- No purple/indigo anywhere. Strictly monochrome black/white/gray.
- Typography hierarchy: Large display headings (3.5-5rem), mono labels (10-11px), body text (13-14px).
- Spacing: 8px base system throughout.
- Transitions: Most hover transitions 300-700ms. Button slide effect uses \`cubic-bezier(0.16, 1, 0.3, 1)\`. Letter animations use same cubic bezier.
- The page is entirely a single \`App.tsx\` component plus the \`SandTransitionImage\` helper function in the same file.`

/**
 * Epoch — 原始创建 prompt 归档
 */
const EPOCH_PROMPT = `Build a modern, high-performance landing page section using React, TypeScript, Tailwind CSS v4, and Motion. The application should match the following exact specifications:
1. Dependencies & Setup
Libraries: Install lucide-react, motion, clsx, and tailwind-merge.
Fonts & CSS: In index.css, import the Inter and Outfit fonts from Google Fonts: @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600&display=swap');
Configure the Tailwind theme in your CSS to use Inter as --font-sans and Outfit as --font-display.
The global body background should be #f9fafb.
2. Main Hero Container & Video Background
Create a hero section container with these exact classes: relative w-full max-w-[1400px] mx-auto rounded-[48px] bg-white border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] overflow-hidden h-[600px] flex flex-col.
Inside, add an absolutely positioned underlying layer (absolute inset-0 pointer-events-none z-0 overflow-hidden select-none) for the background video.
The video tag must point to exactly this URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4. It must include autoPlay, loop, muted, and playsInline attributes, with the classes: w-full h-full object-cover scale-105 transition-transform duration-1000. No overlays.
3. Hero Text Content
Create a content wrapper positioned relative (z-20 flex-1 px-8 md:px-16 pt-12 md:pt-16 flex flex-col items-start).
Use motion.div from motion/react to animate the text layer in (fade in, slide up slightly).
Headline: "Foundation of the<br />new digital epoch". Should use the font-display font, sizes text-[42px] md:text-[56px], medium weight, tight tracking, color #0a1b33.
Subheadline: "Designing products, powering ecosystems and laying the foundation of a decentralized web for enterprises, builders and communities alike." Should use font-sans, sizes text-[14px] md:text-[15px], color #64748b.
Contact Button: Text "Contact Us", using a dark background (bg-[#0a152d]), white text, rounded-full, with hover scale animations via motion.button.
4. Floating Bottom Navbar
Create an absolutely positioned navbar wrapper at the bottom center of the hero: absolute bottom-10 left-1/2 -translate-x-1/2 z-30.
The nav element should use motion.nav to fade in and slide up (delayed after the text). It must have the classes: flex items-center bg-white/90 backdrop-blur-2xl px-1.5 py-1.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-200/40.
Nav Elements:
A small circular logo placeholder on the left (w-9 h-9 bg-white border-slate-100 shadow-sm) containing the star character "✦".
Two standard text buttons: "Products" and "Docs" (text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33]).
A "Get in touch" button on the right containing the text and a small ChevronRight (from lucide-react). Styled identically to the marquee cards: bg-white px-5 py-2 rounded-full text-[12px] font-semibold text-[#0a1b33] border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all.
5. Seamless Marquee Logo Scroller Component
Below the hero container (mt-10), add a custom highly-performant Marquee Scroller component.
The scroller must use a pure CSS @keyframes animation (transform: translateX(0) to translateX(-50%)) for infinite scrolling, pausing on hover. It needs a left/right masking gradient (maskImage linear-gradient fading to transparent on the edges). No title or description text above the scroller.
The Logos List: Supply an array of 8 objects with src URLs from svgl.app, alt names, and hex gradient objects:
Procure (procure.svg, blue gradient)
Shopify (shopify.svg, yellow gradient)
Blender (blender.svg, blue gradient)
Figma (figma.svg, purple gradient)
Spotify (spotify.svg, pink/red gradient)
Lottielab (lottielab.svg, yellow/green)
Google Cloud (google-cloud.svg, light blue)
Bing (bing.svg, cyan/teal)
Render the list twice inline to ensure a seamless loop.
Card Design: Make each logo's container card exactly match the "Get in touch" navbar button's styling. The container classes must be exactly: group relative h-24 w-40 shrink-0 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all overflow-hidden.
Inside the card, add an absolute div using the specific gradient colors, scaled at 1.5 and 0 opacity, which drops to scale 1 and opacity 100 on group-hover.
The image tag should invert/turn black on hover (group-hover:brightness-0 group-hover:invert).`

/**
 * Pulsestream — 原始创建 prompt 归档
 */
const PULSESTREAM_PROMPT = `Build a "Pulsestream" landing — fullscreen video background, glassmorphic navigation, bottom-left hero content, and a scroll hint. Fonts: Sora (display) + DM Sans (body). React + Vite + Tailwind + Framer Motion + lucide-react. Mute toggle, mobile menu, fadeUp entrance animations.`

/**
 * Logoipsum — 原始创建 prompt 归档
 */
const LOGOIPSUM_PROMPT = `HERO SECTION CREATION PROMPT

Create a modern hero section with a looping video background and the following specifications:

Video Background:

URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260329_050842_be71947f-f16e-4a14-810c-06e83d23ddb5.mp4

Size: 115% width and height

Position: Centered horizontally, anchored to top with object-top focal point

Custom JavaScript fade system (NO CSS transitions):

250ms requestAnimationFrame-based fade-in on load/loop start

250ms fade-out when 0.55 seconds remain before video end

fadingOutRef boolean prevents re-triggering fade-out from repeated timeUpdate events

On ended: opacity set to 0, 100ms delay, reset to currentTime = 0, play, fade back in

Each new fade cancels running animation frames to prevent competing animations

Fades resume from current opacity (no snapping)

Fonts Required:

Schibsted Grotesk (weights: 400, 500, 600, 700)

Inter (weights: 400, 500, 600, 700)

Noto Sans (weights: 400, 500, 600, 700)

Fustat (weights: 400, 500, 600, 700)

Navigation Bar:

Logo: "Logoipsum" (Schibsted Grotesk SemiBold, 24px, -1.44px tracking)

Menu items (Schibsted Grotesk Medium, 16px, -0.2px tracking):

Platform

Features (with dropdown chevron icon)

Projects

Community

Contact

Right side buttons:

"Sign Up" (transparent background, 82px width)

"Log In" (black background, white text, 101px width)

Padding: 120px horizontal, 16px vertical

Hero Content (moved up 50px with -mt-[50px]):

Badge Component:

Dark badge with star icon + "New" text

Light background with text: "Discover what's possible"

Font: Inter Regular, 14px

Rounded corners with subtle shadow

Main Headline:

Text: "Transform Data Quickly"

Font: Fustat Bold, 80px, -4.8px tracking, line-height: none

Color: Black, center-aligned

Subtitle:

Text: "Upload your information and get powerful insights right away. Work smarter and achieve goals effortlessly."

Font: Fustat Medium, 20px, -0.4px tracking

Color: #505050

Max-width: 736px, width: 542px

Search Input Box:

Backdrop blur with dark transparent background (rgba(0,0,0,0.24))

Dimensions: 728px max-width, 200px height, rounded 18px

Top row: Credit info

Left: "60/450 credits" with green "Upgrade" button

Right: AI icon + "Powered by GPT-4o"

Font: Schibsted Grotesk Medium, 12px, white text

Main input area:

White background, rounded 12px, shadow

Placeholder: "Type question..." (16px, rgba(0,0,0,0.6))

Black circular submit button with up arrow icon (36px size)

Bottom row:

Left: Three action buttons (gray backgrounds, rounded 6px):

"Attach" with paperclip icon

"Voice" with microphone icon

"Prompts" with search icon

Right: Character counter "0/3,000" (12px, gray)

Icons (SVG paths from imported file):

Chevron down arrow

Up arrow

Star icon

AI sparkle icon

Attach/paperclip icon

Voice/microphone icon

Search icon

Spacing:

Gap between navigation and hero: 60px

Gap between header and search box: 44px

Gap within header elements: 34px (badge to title, title to subtitle)

Hero content moved up: 50px negative margin

Horizontal padding: 120px

Color Scheme:

Black text: #000000

Gray text: #505050

Light gray backgrounds: #f8f8f8

Green upgrade button: rgba(90,225,76,0.89)

Dark badge: #0e1311

White: #ffffff

Transparent overlay: rgba(0,0,0,0.24)

Component Structure:

VideoBackground component with custom fade logic

Navigation bar (fixed spacing, horizontal layout)

Hero content container (centered, max-width constraints)

Nested components for badge, header, and search input

All elements positioned over full-screen video background`

/**
 * VaultShield — 原始创建 prompt 归档
 */
const VAULTSHIELD_PROMPT = `Create a fullscreen hero section for a password manager app called "VaultShield" using React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React icons.

---

## Fonts

- **Heading font:** \`Helvetica Now Display Bold\` loaded from \`https://db.onlinewebfonts.com/c/04e6981992c0e2e7642af2074ebe3901?family=Helvetica+Now+Display+Bold\` (add as a \`<link>\` in \`index.html\`)
- **Body font:** \`Inter\` (weights 300-900) loaded from Google Fonts: \`https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap\` (imported in CSS)

## CSS Variables

\`\`\`css
:root {
  --font-heading: 'Helvetica Now Display Bold', sans-serif;
  --font-body: 'Inter', sans-serif;
  --color-text: #192837;
  --color-accent: #7342E2;
  --color-login-bg: #F2F2EE;
}
\`\`\`

## Background Video

Full-screen background video covering the entire viewport (\`absolute inset-0, object-cover\`):

\`\`\`
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_003132_8b7edcb6-c64d-4a52-a9ca-879942e122ad.mp4
\`\`\`

Attributes: \`autoPlay\`, \`muted\`, \`loop\`, \`playsInline\`

## Layout Structure

1. **Container:** \`relative w-full min-h-screen\`, font-family from \`--font-body\`, color from \`--color-text\`
2. **Navbar:** max-width 1280px, centered, z-10, \`px-5 sm:px-8 py-4 sm:py-5\`, flex with items centered and space-between
3. **Hero content:** max-width 1280px centered container with \`paddingTop: clamp(40px, 8vw, 72px)\`, content block capped at \`max-width: 560px\`

## Logo (SVG)

Custom SVG logo, 32x32, fill \`#192837\`, geometric angular shape:

\`\`\`svg
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" overflow="visible" viewBox="0 0 256 256">
  <path d="M 64 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 L 128 64 L 128 64.5 L 161 32 L 192 0 L 256 0 L 256 64 L 192 128 L 128 128 L 128 192 L 96 223 L 63.5 256 L 0 256 L 0 192 Z M 256 192 L 224 223 L 191.5 256 L 128 256 L 128 192 L 192 128 L 256 128 Z" fill="#192837"/>
</svg>
\`\`\`

## Navbar Elements

- **Left:** Logo
- **Center (desktop only, \`hidden md:flex\`):** 5 links — \`['Vault', 'Plans', 'Install', 'News', 'Help']\`, text-sm font-medium, opacity hover effect
- **Right (desktop only):**
  - "Start For Free" button — \`background: #7342E2\`, white text, rounded-full, \`px-5 py-2.5\`
  - "Sign In" button — \`background: #F2F2EE\`, dark text, rounded-full, \`px-5 py-2.5\`
- **Mobile:** Hamburger icon (Menu/X from lucide-react), opens a right-side slide-in sheet

## Mobile Menu Sheet (AnimatePresence + Framer Motion)

- **Backdrop:** fixed inset-0, \`rgba(25,40,55,0.35)\` background with \`blur(4px)\` backdrop-filter
- **Sheet:** fixed right-0 top-0, width \`min(88vw, 360px)\`, height \`100dvh\`, background \`#CFC8C5\`, box-shadow \`-12px 0 48px rgba(25,40,55,0.18)\`
- **Sheet animation:** slides from \`x: '100%'\` to \`x: 0\`, ease \`[0.22, 1, 0.36, 1]\`, duration 0.45s
- **Sheet content:** Logo + close button header, 1px divider, staggered nav links (delay \`0.18 + i * 0.07\`), bottom CTA buttons matching desktop style

## Hero Heading

- Font: \`var(--font-heading)\`
- Size: \`clamp(1.65rem, 5vw, 3rem)\`
- Line-height: \`1.05\`
- Letter-spacing: \`-0.01em\`
- Color: \`#192837\`
- Margin-bottom: \`24px\`
- Contains inline Lucide icons (Zap, LockKeyhole, Fingerprint) at 24px, color \`#192837\`, vertically aligned middle, positioned \`top: -2px\`
- Text: "Lock Down Your Passwords with Ironclad Security"
  - Zap icon before "Lock"
  - LockKeyhole icon between "Passwords" and "with"
  - Fingerprint icon after "Security"

## Hero Subtext

- Font: \`var(--font-body)\`
- Size: \`clamp(0.9rem, 2.5vw, 1.1rem)\`
- Line-height: \`1.65\`
- Opacity: \`0.8\`
- Max-width: \`560px\`
- Text: "Zero stress, total control. VaultShield keeps you covered with unbreakable storage, one-tap access, and pro-grade tools for your non-stop world."

## CTA Button

- Background: \`#7342E2\`
- Color: white
- Border-radius: \`50px\`
- Padding: \`17px 24px\`
- Font: \`var(--font-body)\`, font-weight semibold
- Size: \`clamp(0.9rem, 2vw, 1rem)\`
- Box-shadow: \`0 4px 24px rgba(115,66,226,0.28)\`
- Min-width: \`210px\`
- Flex with space-between, gap \`32px\`
- Text: "Get It Free" with ArrowRightCircle icon (20px) on the right
- Hover: \`scale(1.04)\` + \`brightness(1.1)\`
- Tap: \`scale(0.96)\`

## Animations (Framer Motion)

**fadeUp variant** applied to heading (delay 0), subtext (delay 0.15s), and CTA button (delay 0.30s):

\`\`\`js
hidden: { opacity: 0, y: 28 }
visible: { opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
\`\`\`

## Dependencies

- \`react\`, \`react-dom\`
- \`framer-motion\`
- \`lucide-react\` (icons: ArrowRightCircle, Zap, LockKeyhole, Fingerprint, Menu, X)
- Tailwind CSS

---

That is every detail needed to reproduce the hero section exactly as built.`

/**
 * Mentality — 原始创建 prompt 归档
 */
const MENTALITY_PROMPT = `Prompt:
Build a modern React landing page using Vite, Tailwind CSS, and motion/react for elegant animations. The application must feature a highly polished, aesthetic hero section and a glassmorphic navigation bar.
1. Typography & Global CSS (src/index.css)
Import the fonts "Inter" and "Outfit" from Google Fonts.
Set --font-sans to Inter and --font-display to Outfit.
Set --color-brand-green to #9fff00 and --color-bg-base strictly to #EDEEF5.
Ensure the body uses @apply bg-bg-base text-zinc-900 font-sans antialiased; to carry the #EDEEF5 background throughout the entire page.
2. Component Structure (src/App.tsx)
Import Navbar and Hero.
Return a div containing the <Navbar /> and <main><Hero /></main>.
Set the wrapper container classes to min-h-screen bg-bg-base selection:bg-brand-green selection:text-black.
3. Navbar Component (src/components/Navbar.tsx)
Give it fixed styling: fixed top-0 left-0 w-full z-50 py-6 md:py-10 bg-gradient-to-b from-[#f1f1f1]/80 to-transparent backdrop-blur-[2px].
Container layout: A 12-column grid (grid-cols-12 max-w-7xl mx-auto).
Left (Cols 1-3): A geometric flower/clover SVG icon (fill: #1a1a1a) beside the brand name "mėntality" using the display font.
Center (Cols 4-9): Desktop-only hidden nav links: "service", "patient resources", "about us", "education center". Styled small and lowercase.
Right (Cols 10-12): "find help" anchor link, a black rounded button reading "get started →", and an elegant animated hamburger toggle icon for mobile.
Include an AnimatePresence and motion.div drawer that slides down for mobile with the navigation links.
4. Hero Component (src/components/Hero.tsx)
Main styling: <section className="relative min-h-[110vh] sm:min-h-[140vh] w-full flex flex-col items-center justify-start overflow-hidden bg-bg-base">
Background Video Container:
Absolute wrapper: <div className="absolute top-[15vh] sm:top-[20vh] left-0 w-full h-[95vh] sm:h-[120vh] z-0 pointer-events-none">
The video itself should be <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-100" />
Exact CloudFront URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260603_132049_036591b8-6e92-4760-b94c-a7ea6eef315c.mp4
Gradient Mask: Below the video in the wrapper, add <div className="absolute top-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-b from-bg-base to-transparent"></div> to smoothly blend the video into the #EDEEF5 background.
Hero Content Alignment: Use <div className="max-w-7xl w-full mx-auto px-8 md:px-16 lg:px-20 relative z-10 grid grid-cols-12 gap-x-4 md:gap-x-8">. Place the text in col-span-12 md:col-span-10 md:col-start-2.
Hero Header (motion.h1): Needs a slide-up fade (initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}).
Exact text formatting:
[#1a1a1a] Remix: Mentality offers
[#8e8e8e] information
(line break)
[#8e8e8e] and resources to help you manage
(line break)
[#8e8e8e] your [Eye Icon Puipl UI Element] mental wellbeing.
For the Eye Icon Element between "your" and "mental", create an inline pill-shaped visual: w-[16px] md:w-[42px] lg:w-[62px] border-[2px] border-[#1a1a1a] rounded-full inline-flex items-center justify-center containing a tiny solid black dot (w-2 h-2).
Search Pill Component:
Add a delayed slide-up animation (delay: 0.15) under the header text.
Make a custom capsule <div className="bg-white rounded-[6px] border border-black/[0.05] p-1 pl-4 flex items-center shadow-sm">.
Include an <input placeholder="Ask me anything..."> with transparent background so it looks integrated.
Trailing action button: <button className="bg-[#1a1a1a] text-white w-9 h-9 rounded-full relative"> containing an SVG chevron/arrow icon.
Architectural Edge Anchors:
Absolute middle right edge: Create a glassmorphic pill button for language switching (pl — en).
Absolute bottom left corner: Place "2024" in small neat text.
Absolute bottom right corner: Place "mental health tools" in small neat text.
Ensure there are no artificial margins/padding below the video to make sure the video takes exactly 100% of the Hero viewport, while allowing the #EDEEF5 background base to anchor the entire page cleanly.`

/**
 * Questly — 原始创建 prompt 归档
 */
const QUESTLY_PROMPT = `Build a full-viewport hero section for a SaaS landing page called "Questly" using React, TypeScript, Tailwind CSS 3, and Vite. Use \`lucide-react\` for all icons. No other UI libraries.

---

FONT

Use the font "Nimbus Sans TW01" loaded from this stylesheet in \`index.html\`:

\`\`\`
https://db.onlinewebfonts.com/c/bb5de19d87c09a95216dc6ccd96e37c6?family=Nimbus+Sans+TW01
\`\`\`

Set the font stack in both \`tailwind.config.js\` and \`index.css\`:

\`\`\`
'Nimbus Sans TW01', 'Helvetica Neue', Helvetica, Arial, sans-serif
\`\`\`

Enable \`-webkit-font-smoothing: antialiased\` and \`-moz-osx-font-smoothing: grayscale\` on \`html\`.

---

BACKGROUND IMAGE

The full hero section uses this image as a \`background-image\` (cover, centered):

\`\`\`
https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260611_133301_d5f2a94a-b22e-4e4a-a6b6-eacdddf1f5b0.png&w=1280&q=85
\`\`\`

Applied via inline \`style={{ backgroundImage: url(...) }}\` on the \`

\`. The section is \`relative min-h-[100svh] overflow-hidden bg-cover bg-center flex flex-col\`.

---

GRASS OVERLAY

An absolutely positioned grass PNG sits at the bottom of the section, full width, \`z-10\`, pointer-events-none, select-none:

\`\`\`
https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1781191264/grass_eam204.png
\`\`\`

Classes: \`pointer-events-none absolute bottom-0 left-0 z-10 w-full select-none\`

---

LOGO (SVG Component)

A custom SVG logo component used in the navbar and dashboard sidebar. It uses \`currentColor\` for fill so it inherits text color. ViewBox: \`0 0 256 256\`. Path data:

\`\`\`
M 144 256 L 27.598 256 L 144 139.598 Z M 256 207.5 L 200 256 L 200 56 L 0 56 L 48 0 L 256 0 Z M 0 204.402 L 0 112 L 92.402 112 Z
\`\`\`

---

NAVBAR

- Positioned with \`animate-fade-down relative z-20\`
- Flex row: logo left, nav links center, CTA + hamburger right
- Horizontal padding: \`px-5 sm:px-8 lg:px-10\`, vertical: \`py-4 sm:py-5\`
- Logo: \`text-gray-900\`, icon sized \`w-5 h-5 sm:w-6 sm:h-6\`
- Desktop nav links (hidden below \`md\`): \`text-[13px] text-gray-700\`, hover \`text-gray-900\`, gap-8. Items: "Toolkit" (with \`ChevronDown\` icon \`w-3.5 h-3.5\`), "Plans", "News"
- CTA button: \`bg-gray-900 text-white text-[13px] font-medium px-4 sm:px-5 py-2 rounded-full hover:bg-gray-800\`
- Hamburger (md:hidden): \`w-9 h-9 rounded-full text-gray-900 hover:bg-gray-900/10\`, toggles \`Menu\`/\`X\` icons (\`w-5 h-5\`)
- Mobile dropdown (when open): \`absolute left-4 right-4 top-full rounded-2xl bg-white/80 backdrop-blur-xl ring-1 ring-gray-200 px-5 py-3 animate-fade-up\`. Links: \`text-[15px] text-gray-700 hover:text-gray-900 border-b border-gray-200 last:border-b-0\`

---

HERO CONTENT (centered, text-center)

Spacing between navbar and content uses a flex spacer: \`flex-1 min-h-8 sm:min-h-12 lg:min-h-16 shrink-0\`

Headline (h1)
- \`text-gray-900 font-normal leading-[1.05] tracking-tight\`
- Sizes: \`text-[40px] min-[400px]:text-[44px] sm:text-6xl lg:text-7xl xl:text-[80px]\`
- Two lines, each a \`\` with staggered \`animate-fade-up\`:
  - Line 1: "Get cited." (no delay)
  - Line 2: "Effortlessly." (\`[animation-delay:100ms]\`)

### Search Bar (form)
- \`animate-fade-up [animation-delay:220ms] mt-5 sm:mt-6 w-full max-w-xl\`
- Pill container: \`flex items-center gap-3 rounded-full bg-white/60 backdrop-blur-md ring-1 ring-gray-200 pl-5 pr-1.5 py-1.5\`
- Input: \`flex-1 bg-transparent text-sm sm:text-base text-gray-900 placeholder-gray-500 outline-none py-2\`, placeholder: "What makes content rank in AI search?"
- Submit button: \`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-900 text-white hover:scale-105 active:scale-95 transition-transform shrink-0\`, contains \`ArrowUp\` icon \`w-4 h-4 sm:w-[18px] sm:h-[18px]\`

### Description
- \`animate-fade-up [animation-delay:340ms] mt-4 sm:mt-5 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md\`
- Text: "Ship articles that answer actual customer questions -- and be seen on [Sparkles icon] ChatGPT"
- Line break \`
\` before the dash
- \`Sparkles\` icon: \`inline w-4 h-4 -mt-1\`

### CTA Buttons
- \`animate-fade-up [animation-delay:460ms] mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-3\`
- **Primary**: \`bg-gray-900 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-gray-800 hover:shadow-lg transition-all\` -- "Try It Free"
- **Secondary**: \`text-gray-700 text-sm font-medium px-6 py-2.5 rounded-full ring-1 ring-gray-300 hover:bg-gray-100 transition-colors\` -- "Talk to sales"

---

## DASHBOARD MOCKUP (below the hero content)

Another flex spacer (\`flex-1 min-h-10 sm:min-h-12 lg:min-h-16 shrink-0\`) separates the content from the dashboard.

### Container
- \`animate-hero-rise [animation-delay:620ms] relative z-0 w-[92%] sm:w-[84%] lg:w-[72%] max-w-4xl mx-auto shrink-0 -mb-10 sm:-mb-20 lg:-mb-32\`
- Uses a **ScaledDashboard** wrapper: a \`ResizeObserver\`-based component that renders the mockup at a fixed design width of **896px** and scales it down via CSS \`transform: scale()\` to fit its container, with \`transformOrigin: 'top left'\`. The outer div's height is set to \`inner.offsetHeight * scale\` to prevent layout overflow.

### Mockup Chrome
- Outer: \`rounded-t-2xl overflow-hidden bg-[#1a1a1c] shadow-[0_-20px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/10 text-left\`
- **Title bar**: \`bg-[#242427] border-b border-white/5 px-4 py-2.5\`
  - Traffic lights: three spans \`w-2.5 h-2.5 rounded-full\` colored \`#ff5f57\`, \`#febc2e\`, \`#28c840\`
  - Icons (all \`w-3.5 h-3.5 text-white/40\`): \`PanelLeft\`, \`ChevronLeft\`, \`ChevronRight\` (text-white/25)
  - Center URL bar: \`bg-[#1a1a1c] rounded-md px-6 py-1 text-[10px] text-white/60\` with \`Monitor\` icon -- text "questly.ai"
  - Right icons: \`RotateCw\`, \`Share\`, \`Plus\`, \`Copy\`

### Sidebar (22% width)
- \`border-r border-white/5 bg-[#1e1e21] px-3 py-3.5\`
- Logo icon \`w-4 h-4 text-white/70\` + \`Grid\` icon \`w-3.5 h-3.5 text-white/30\`
- Workspace badge: \`w-4 h-4 rounded bg-[#e8553f]\` with "C" letter, label "CareNest" \`text-[10px] text-white/80\`
- Nav items: Compass/Uncover, Layers/Subjects, ListTodo/Inbox -- \`text-[10px] text-white/60\`
- Recent articles list with "Ready to Release" green dots \`text-[#28c840]/70\`

### Main Content Area
- Header: workspace icon (larger \`w-9 h-9 rounded-lg bg-[#e8553f]\`), "CareNest" \`text-sm font-medium text-white\`, subtitle \`text-[10px] text-white/45\`, and a "Generate" button with \`Sparkles\` icon
- **Stats grid** (4 columns): \`grid-cols-4 divide-x divide-white/5 rounded-xl bg-white/[0.03] ring-1 ring-white/5\`
  - RELEASED: 62 / Posts indexed
  - BREADTH: 12 / Subject groups
  - REMAINING: 412 / Ready to draft
  - MAX REACH: 3,156,200 / Searches a month
  - Values: \`text-xl font-medium text-white\`, labels: \`text-[8px] tracking-wider text-white/35\`
- **Subject cards** (3 columns): Elder Care, Mobility, Home Safety -- \`rounded-lg bg-white/[0.03] ring-1 ring-white/5\`
- **Drafting inbox** table: 5 rows with question, volume, difficulty, status columns. "Drafting" status colored \`text-[#febc2e]/80\`

---

## ANIMATIONS (defined in index.css)

\`\`\`css
@keyframes fade-up {
  from { opacity: 0; transform: translateY(24px); filter: blur(6px); }
  to { opacity: 1; transform: translateY(0); filter: blur(0); }
}

@keyframes fade-down {
  from { opacity: 0; transform: translateY(-16px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes hero-rise {
  from { opacity: 0; transform: translateY(64px) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.animate-fade-up { animation: fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both; }
.animate-fade-down { animation: fade-down 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
.animate-hero-rise { animation: hero-rise 1.1s cubic-bezier(0.22, 1, 0.36, 1) both; }
\`\`\`

Staggered delays applied via inline \`[animation-delay:Xms]\` Tailwind arbitrary values. Respect \`prefers-reduced-motion: reduce\` by disabling all three animations.

---

RESPONSIVE BREAKPOINTS SUMMARY

| Element | Mobile (<640) | SM (640+) | MD (768+) | LG (1024+) | XL (1280+) |
|---|---|---|---|---|---|
| Headline | 40px / 44px@400 | 60px | -- | 70px | 80px |
| Nav links | Hidden (hamburger) | -- | Visible | -- | -- |
| Search bar width | full | -- | -- | -- | max-w-xl |
| Dashboard width | 92% | 84% | -- | 72% | -- |
| Dashboard bottom overlap | -mb-10 | -mb-20 | -- | -mb-32 | -- |

---

FILE STRUCTURE

\`\`\`
src/
  App.tsx            -- renders <Hero />
  main.tsx           -- ReactDOM.createRoot
  index.css          -- Tailwind directives + custom keyframes
  components/
    Hero.tsx          -- main section with bg image, content, ScaledDashboard, grass overlay
    Navbar.tsx        -- top nav with mobile drawer
    Logo.tsx          -- SVG logo component
    DashboardMockup.tsx -- full browser-chrome dashboard mockup
\`\`\``

/**
 * MicroVisuals — 原始创建 prompt 归档
 */
const MICROVISUALS_PROMPT = `**Build a fullscreen hero section in a Vite + React + TypeScript + Tailwind CSS project. Use \`gsap\` and \`lucide-react\`. No other UI libraries.**

### Fonts (in \`src/index.css\`)
Import at the top of index.css BEFORE \`
@tailwind
\` directives:
\`\`\`css
@import
 url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Barlow:wght@300;400;500;600&display=swap');

@font
-face {
  font-family: 'Dirtyline';
  src: url('https://fonts.cdnfonts.com/s/15011/Dirtyline36DaysofType.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
\`\`\`
Body font: \`'Barlow', sans-serif\`, background \`#000\`.

### Tailwind config (\`tailwind.config.js\`)
\`\`\`js
theme: {
  extend: {
    fontFamily: {
      heading: ['Instrument Serif', 'serif'],
      body: ['Barlow', 'sans-serif'],
      dirtyline: ['Dirtyline', 'sans-serif'],
    },
    borderRadius: { DEFAULT: '9999px' },
  },
},
\`\`\`

### CSS (append to \`src/index.css\`)
\`\`\`css
.liquid-glass {
  background: rgba(255,255,255,0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: "";
  position: absolute; inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%,
    rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0)    40%,
    rgba(255,255,255,0)    60%,
    rgba(255,255,255,0.15) 80%,
    rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.liquid-glass-strong {
  background: rgba(255,255,255,0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  border: none;
  box-shadow: 4px 4px 4px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.15);
  position: relative;
  overflow: hidden;
}
.liquid-glass-strong::before {
  content: "";
  position: absolute; inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.5) 0%,
    rgba(255,255,255,0.2) 20%,
    rgba(255,255,255,0)   40%,
    rgba(255,255,255,0)   60%,
    rgba(255,255,255,0.2) 80%,
    rgba(255,255,255,0.5) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.hero-title {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-size: clamp(96px, 18vw, 280px);
  line-height: 0.92;
  letter-spacing: -0.02em;
  color: white;
  text-align: center;
}
\`\`\`

### Component (\`src/App.tsx\`)

**Constants:**
- \`NAV_LINKS = ['Gallery', 'Styles', 'API', 'Pricing', 'Blog']\`
- \`VIDEO_SRC = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_080827_a9e5ad52-b6ee-4e79-b393-d936f179cfd7.mp4'\`

**LogoMark** — inline SVG, 44x26, viewBox \`0 0 44 26\`, three white rects at x=0/16/30, y=3, widths 14/12/14, height 20, rx=3.

**State/refs:**
- \`mounted\` (boolean, set true in a mount effect for fade-in).
- \`videoRef\` (HTMLVideoElement), \`videoBgRef\` (HTMLDivElement), \`displayCanvasRef\` (HTMLCanvasElement).
- \`framesReady\` boolean state, \`framesRef\` = \`useRef<HTMLCanvasElement[]>([])\`.

**Effect 1 — Frame capture (boomerang setup):**
- On mount, get \`videoRef.current\`. Set \`capturing = true\`, \`lastTime = -1\`, \`MAX_WIDTH = 960\`, \`frames: HTMLCanvasElement[] = []\`.
- \`captureFrame()\`: bail if \`!capturing\` or \`readyState < 2\` or \`currentTime === lastTime\`. Update \`lastTime\`. Scale = \`min(1, 960/videoWidth)\`. Create offscreen canvas at scaled w/h, \`ctx.drawImage(video, 0, 0, w, h)\`, push to frames.
- Use \`requestVideoFrameCallback\` when available, else \`requestAnimationFrame\` fallback.
- On \`loadedmetadata\`: call \`http://video.play().catch(()=>{})\` then start the capture loop.
- On \`ended\`: set \`capturing = false\`, store frames in \`framesRef.current\`, \`setFramesReady(true)\`.
- If \`readyState >= 1\`, invoke \`onLoaded()\` immediately.
- Cleanup: cancel raf + remove listeners.

**Effect 2 — Boomerang render:**
- When \`framesReady\` true, grab \`displayCanvasRef\`, set its \`width/height\` from \`frames[0]\`.
- Variables: \`index = 0\`, \`direction = 1\`, \`last = http://performance.now()\`, \`interval = 1000/30\`.
- In an \`requestAnimationFrame(render)\` loop: if \`now - last >= interval\`, draw \`frames[index]\`, advance \`index += direction\`. When \`index >= frames.length - 1\`, clamp and flip to \`-1\`. When \`index <= 0\`, clamp and flip to \`+1\`.
- Cleanup: cancelAnimationFrame.

**Effect 3 — Parallax mouse tracking (gsap):**
- \`strength = 20\`. Track \`targetX/Y\`, smoothly lerp \`currentX/Y += (target - current) * 0.06\` each frame.
- On \`mousemove\`: \`targetX = ((clientX - cx)/cx) * strength\` (same for Y).
- Each frame: \`gsap.set(videoBgRef.current, { x: currentX, y: currentY })\`.

**JSX structure:**
Root: \`<div className="min-h-screen bg-black text-white font-body overflow-x-hidden">\`

1. **Video background layer:** \`<div ref={videoBgRef} className="fixed top-0 left-0 w-full h-full z-0 scale-[1.08] origin-center">\` containing:
   - \`<video>\` with \`src={VIDEO_SRC}\`, \`muted\`, \`playsInline\`, \`preload="auto"\`, \`crossOrigin="anonymous"\`, \`className="w-full h-full object-cover"\`, \`style={{ display: framesReady ? 'none' : 'block' }}\`.
   - \`<canvas ref={displayCanvasRef} className="w-full h-full object-cover" style={{ display: framesReady ? 'block' : 'none' }}>\`.

2. **Hero title:** fixed div, \`left-0 right-0 z-20 w-full px-4\`, \`style={{ top: '126px' }}\`, fades in via \`transition-all duration-1000\` toggling \`opacity-100 translate-y-0\` vs \`opacity-0 translate-y-6\` based on \`mounted\`. Inside: \`<h1 className="hero-title select-none">MicroVisuals</h1>\`.

3. **Nav:** \`<nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap">\` containing a \`liquid-glass flex items-center gap-6 rounded px-4 py-2.5\` pill:
   - \`<LogoMark />\`
   - \`<div className="flex items-center gap-5">\` of \`NAV_LINKS\` as \`<a>\` with classes \`text-sm font-body font-light text-white/70 hover:text-white transition-colors duration-200\`.
   - Right cluster \`flex items-center gap-3 ml-4\`: "Sign in" link (same style), then "Try it free" with \`liquid-glass-strong text-sm font-body font-medium text-white rounded px-4 py-1.5 transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_0_16px_2px_rgba(255,255,255,0.12)] active:scale-[0.97]\`.

4. **Bottom row:** fixed, \`bottom-12 left-0 right-0 px-10 flex items-end justify-between z-20\`, fade-in with \`transition-all duration-1000 delay-300\`.
   - Left \`<p>\`: \`text-sm font-body font-light text-white/75 max-w-[220px] leading-relaxed\`, text: "Forma's AI understands context, composition, and style like a creative director would."
   - Center absolute \`left-1/2 -translate-x-1/2 bottom-0 flex items-center gap-3\` with two buttons:
     - Primary: \`group relative bg-white text-black text-sm font-body font-medium rounded px-6 py-3 overflow-hidden active:scale-[0.97] transition-all duration-200 shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_24px_4px_rgba(255,255,255,0.25)] hover:scale-[1.03]\`. Contents: \`<span className="relative z-10">Start generating</span>\` + overlay \`<span className="absolute inset-0 bg-gradient-to-b from-white to-white/85 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />\`.
     - Secondary: \`liquid-glass group text-white text-sm font-body font-medium rounded px-6 py-3 active:scale-[0.97] transition-all duration-200 hover:scale-[1.03] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_20px_2px_rgba(255,255,255,0.07)]\` — label "See templates".
   - Right \`<p>\`: same classes as left plus \`text-right\`, text: "Describe what you see in your head — get images that actually match."

### Notes
- Tailwind default border-radius is overridden to \`9999px\` (full pill) — every \`rounded\` in the markup produces pill corners.
- Do NOT use \`video.currentTime\` to reverse — the boomerang uses the captured \`frames[]\` array only.
- The video element stays mounted (hidden once \`framesReady\`) so the canvas keeps drawing snapshots.`

/**
 * Aria Studio — 原始创建 prompt 归档
 */
const ARIA_STUDIO_PROMPT = `## Prompt

Build a single-page React + Vite + TypeScript + Tailwind CSS site with exactly two full-screen sections (Hero and Capabilities). The page is a dark, cinematic web design agency landing page with "liquid glass" morphism UI elements and smooth blur/fade animations using Framer Motion.

---

### Fonts (Google Fonts)

Load via \`<link>\` in \`index.html\`:
- **Instrument Serif** (italic) -- used for all headings (\`font-heading\`)
- **Barlow** (weights 300, 400, 500, 600) -- used for body text (\`font-body\`)

Tailwind config extends \`fontFamily\`:
\`\`\`js
heading: ["'Instrument Serif'", 'serif'],
body: ["'Barlow'", 'sans-serif'],
\`\`\`

Base CSS: \`html, body { background: #000; color: #fff; font-family: 'Barlow', sans-serif; }\`

---

### Liquid Glass CSS (in index.css)

Two variants defined as plain CSS classes:

**\`.liquid-glass\`** (subtle):
- \`background: rgba(255, 255, 255, 0.01)\` with \`background-blend-mode: luminosity\`
- \`backdrop-filter: blur(4px)\` / \`-webkit-backdrop-filter: blur(4px)\`
- No border; \`box-shadow: inset 0 1px 1px rgba(255,255,255,0.1)\`
- \`position: relative; overflow: hidden\`
- \`::before\` pseudo-element creates a gradient stroke border:
- \`position: absolute; inset: 0; border-radius: inherit; padding: 1.4px\`
- \`background: linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%)\`
- Masked with \`-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;\`
- \`pointer-events: none\`

**\`.liquid-glass-strong\`** (bolder):
- Same structure but \`backdrop-filter: blur(50px)\`
- \`box-shadow: 4px 4px 4px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.15)\`
- \`::before\` gradient uses 0.5 alpha at edges, 0.2 at 20%/80%

---

### FadingVideo Component

A reusable \`<video>\` component accepting \`src\` (string or string[]), \`className\`, and \`style\`. It:
1. Starts with \`opacity: 0\`
2. On \`loadeddata\`, fades in over 500ms using \`requestAnimationFrame\`
3. On \`timeupdate\`, when remaining time <= 0.55s, fades out over 550ms
4. On \`ended\`, if single source: resets \`currentTime\` to 0, replays, fades back in. If array: advances to next index (cycling).
5. Video is \`autoPlay\`, \`muted\`, \`playsInline\`, \`preload="auto"\`

---

### BlurText Component

A word-by-word staggered blur-in animation component using Framer Motion:
- Splits \`text\` prop by spaces
- Each word is a \`motion.span\` with \`display: inline-block\`, \`marginRight: 0.28em\`
- Triggers on IntersectionObserver (threshold 0.1)
- Each word animates: \`filter\` from \`blur(10px)\` to \`blur(0px)\`, \`opacity\` 0 to 1, \`y\` from 50 to 0
- Duration 0.7s per word, stagger delay of 100ms per word index
- Container uses \`display: flex; flexWrap: wrap; justifyContent: center; rowGap: 0.1em\`

---

### Section 1: Hero

- Full viewport height (\`h-screen\`), \`overflow-hidden\`, \`bg-black\`
- **Background video**: Single \`<FadingVideo>\` with:
- \`src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4"\`
- Positioned: \`absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0\`
- Inline style: \`width: 120%; height: 120%\`

- **Content** (\`relative z-10, flex flex-col h-full\`):

**Navbar** (fixed, \`top-4 left-0 right-0 z-50\`, flex between, \`px-8 lg:px-16\`):
- Left: \`liquid-glass\` circle (h-12 w-12 rounded-full) with italic "a" in \`font-heading text-2xl\`
- Center (hidden on mobile, \`md:flex\`): \`liquid-glass rounded-full px-1.5 py-1.5\` pill containing links ["Work", "Studio", "Services", "Journal", "Contact"] as \`px-3 py-2 text-sm font-medium text-white/90 font-body\` + a white CTA button "Start a Project" with ArrowUpRight icon
- Right: empty \`h-12 w-12\` spacer div

**Main content** (centered, \`flex-1 flex flex-col items-center justify-center pt-24 px-4 text-center\`):
- **Badge** (motion.div, delay 0.4): \`liquid-glass rounded-full\` pill with a white "New" badge inside + text "Booking Q3 2026 engagements -- limited capacity"
- **Headline** (mt-6, max-w-3xl): \`<BlurText>\` with text "Crafted Digital Experiences Built to Outlast Trends", classes: \`text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] tracking-[-4px]\`
- **Subtext** (motion.p, delay 0.8, mt-4): "We are a small studio of designers and engineers shaping brand-defining websites for ambitious companies. Precise typography, cinematic motion, and code you can be proud of." -- \`text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight\`
- **CTA buttons** (motion.div, delay 1.1, mt-6, flex gap-6): "Start a Project" in \`liquid-glass-strong rounded-full px-5 py-2.5\` with ArrowUpRight + "Watch Showreel" plain text with Play icon
- **Stats cards** (motion.div, delay 1.3, mt-8, flex gap-4): Two \`liquid-glass p-5 w-[220px] rounded-[1.25rem]\` cards:
- Card 1: ClockIcon, "6 Weeks", "Average End-to-End Launch Time"
- Card 2: GlobeIcon, "140+", "Brands Shipped Across Four Continents"
- Numbers: \`text-4xl font-heading italic tracking-[-1px] leading-none mt-4\`

**Bottom trust bar** (motion.div, delay 1.4, flex-col items-center gap-4 pb-8):
- \`liquid-glass rounded-full\` pill: "Trusted by founders, operators, and creative directors worldwide"
- Logo names in a flex row (gap-12 md:gap-16): ["Aeon", "Vela", "Apex", "Orbit", "Zeno"] each as \`font-heading italic text-2xl md:text-3xl tracking-tight\`

- **All motion elements** use shared initial/animate: \`{ filter: 'blur(10px)', opacity: 0, y: 20 }\` -> \`{ filter: 'blur(0px)', opacity: 1, y: 0 }\`, duration 0.8s, easeOut

---

### Section 2: Capabilities

- \`min-h-screen\`, \`overflow-hidden\`, \`bg-black\`, relative
- **Background video**: \`<FadingVideo>\` with:
- \`src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_093722_ccfc7ebf-182f-419f-8a62-2dc02db7dd9d.mp4"\`
- \`absolute inset-0 w-full h-full object-cover z-0\`

- **Content** (\`relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen\`):
- **Header** (mb-auto):
- Label: \`text-sm font-body text-white/80 mb-6\` -- "// Capabilities"
- Heading: \`font-heading italic text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]\` -- "Studio craft,\\nend to end"

- **Cards grid** (mt-16, \`grid grid-cols-1 md:grid-cols-3 gap-6\`), three cards:
1. **Design** -- Icon: ImageIcon (filled image icon), Tags: ["Brand Systems", "Art Direction", "Visual Identity", "Motion"], Body: "We shape identities and interfaces that feel unmistakably yours -- typographic systems, component libraries, and art-directed pages that scale without losing soul."
2. **Engineering** -- Icon: MovieIcon (film/clapboard), Tags: ["React", "Next.js", "Headless CMS", "Edge-Ready"], Body: "Production-grade front-ends built on modern stacks. Performant, accessible, and instrumented -- with code your team will enjoy extending long after launch."
3. **Growth** -- Icon: LightbulbIcon, Tags: ["SEO", "Analytics", "A/B Testing", "Retention"], Body: "Launch is the starting line. We partner with your team on conversion, content, and iteration loops that turn a beautiful site into a compounding asset."

- Each card: \`liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col\`
- Top row: icon in a nested \`liquid-glass h-11 w-11 rounded-[0.75rem]\` square + tags (flex-wrap, gap-1.5) right-aligned, each tag is \`liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap\`
- Spacer: \`flex-1\`
- Bottom: title in \`font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none\` + body in \`text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]\`

---

### Custom SVG Icons (no external icon library needed for these)

- **ArrowUpRight**: 24x24, stroke, paths "M7 17L17 7" and "M7 7h10v10"
- **Play**: 24x24, filled polygon "6 4 20 12 6 20 6 4"
- **ClockIcon**: 24x24, stroke (1.5), circle r=9 + "M12 7v5l3 2"
- **GlobeIcon**: 24x24, stroke (1.5), circle r=9 + horizontal line + two arc paths
- **ImageIcon**: 24x24, filled Material-style image icon
- **MovieIcon**: 24x24, filled Material-style movie icon
- **LightbulbIcon**: 24x24, filled Material-style bulb icon

---

### Dependencies

- react, react-dom
- framer-motion
- tailwindcss, postcss, autoprefixer
- vite, @vitejs/plugin-react
- typescript

---

### Key Design Principles

- Everything is on a pure black (#000) background
- All text is white; subtle text uses \`white/80\` or \`white/90\`
- Liquid glass elements have near-invisible fills with gradient-stroke borders via CSS masks
- Videos cover sections as atmospheric backgrounds, fading in/out smoothly
- Typography: heading font is always italic with very tight tracking (negative), body font is light weight
- Responsive: nav links hidden on mobile, grid collapses to single column, text sizes scale with breakpoints
- Animations: staggered blur-in on load for hero content, intersection-triggered for BlurText`

/**
 * Forma — 原始创建 prompt 归档
 */
const FORMA_PROMPT = `Build a single-page React + TypeScript + Vite + Tailwind site that is a full-screen video-background landing page with a contact form. Use \`lucide-react\` for icons.

**Layout & Sizing**
- Root: \`min-h-screen\` white background with padding \`p-3 sm:p-4 md:p-6\`.
- Inside the root, one large rounded card with \`rounded-2xl sm:rounded-3xl\`, \`overflow-hidden\`. Heights: \`min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] lg:h-[calc(100vh-48px)]\`. On desktop it locks to viewport; on tablet/mobile it expands to content.
- Background video fills the card (\`absolute inset-0 w-full h-full object-cover\`). The video element has \`autoPlay muted loop playsInline\`. Use this exact URL:
  \`\`\`
  https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260602_150901_c45b90ec-18d7-42ff-90e2-b95d7109e330.mp4
  \`\`\`
- Content layer: \`relative z-10 flex flex-col\` with the same min-height ladder as the card and \`lg:h-full\`, padding \`p-4 sm:p-6 md:p-8\`, \`gap-6\`.

**Fonts**
- Import from Google Fonts in \`index.css\`: \`Inter\` (weights 300–700) and \`Instrument Serif\` (italic + regular).
- Set \`* { font-family: 'Inter', sans-serif; }\` globally.
- Use \`Instrument Serif\` italic for one accent word inline (see headline below).

**Navbar (top)**
- Pill bar with \`bg-white/60 backdrop-blur-md rounded-2xl shadow-sm\`, padding \`pl-3 sm:pl-4 pr-2 py-2\`, \`w-full sm:w-auto\`, \`flex items-center gap-3 sm:gap-6\`.
- Logo: 32x32 inline SVG (\`viewBox="0 0 256 256"\`) with two black filled paths forming a stylized "M":
  \`M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z\`.
- Links (hidden on mobile, shown \`sm:flex\`): \`Our story\`, \`Expertise\`, \`Our work\`, \`Journal\` — class \`text-gray-800 text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap\`.
- CTA button on the right: black pill \`bg-black text-white text-sm font-medium px-4 sm:px-5 py-2 rounded-xl hover:bg-gray-800\` with label \`Start a project\`. On mobile it floats right with \`ml-auto\`.

**Spacer**
- A \`<div className="flex-1 min-h-[2rem]" />\` between nav and the bottom row.

**Bottom row (headline + form)**
- Container: \`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6\`.

**Headline (left)**
- \`<p>\` with white text, \`text-3xl sm:text-4xl xl:text-5xl font-medium leading-tight drop-shadow-lg lg:max-w-lg xl:max-w-2xl shrink-0\`.
- Content (with \`<br />\`):
  \`We craft bold ideas\` / \`and ship them as *products*\`
- The word \`products\` is wrapped in a \`<span>\` with inline style: \`fontFamily: "'Instrument Serif', serif"\`, \`fontStyle: 'italic'\`, \`fontWeight: 400\`.

**Contact form card (right)**
- Outer: \`w-full lg:w-[min(480px,45%)] shrink-0\`.
- Card: \`bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden\`, inner padding \`p-4 sm:p-6\`, \`flex flex-col gap-4\`.

1. **Heading:** \`Say hello! 👋\` — \`text-xl sm:text-2xl font-semibold text-black tracking-tight\`.

2. **Email + socials row** (always horizontal): \`flex flex-row items-center justify-between gap-3 bg-gray-50 rounded-2xl px-4 py-2.5\`.
   - Left: small grey label \`Drop us a line\`, then mailto link \`hello@forma.co\` in \`text-blue-600 font-semibold hover:underline truncate\`.
   - Right: four 32x32 rounded-xl buttons (\`w-8 h-8 rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity\`) using lucide icons size 13:
     - Twitter — \`bg-gray-100 text-gray-800\`
     - Circle — \`bg-pink-100 text-pink-500\`
     - Instagram — \`bg-orange-100 text-orange-400\`
     - Linkedin — \`bg-blue-100 text-blue-600\`
   - Extract this into a small \`SocialBtn\` helper component.

3. **OR divider:** horizontal lines on either side of the word \`OR\` (\`text-gray-400 font-medium text-sm\`, lines \`flex-1 h-px bg-gray-200\`).

4. **Form** (\`flex flex-col gap-4\`):
   - Label \`Tell us about your vision\` (\`text-sm font-medium text-black\`).
   - Name + Email inputs side by side on \`sm:\` (\`flex flex-col sm:flex-row gap-2\`), placeholders \`Full name\` and \`Email\`. Input style: \`flex-1 min-w-0 text-sm px-3 py-2.5 rounded-xl border border-gray-200 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition\`.
   - Textarea, 4 rows, placeholder \`What are you looking to build or improve...\`, same input style plus \`resize-none\`.
   - Service tags section: label \`I need help with...\`. Tags wrap (\`flex flex-wrap gap-1.5\`). Each tag is a button \`text-xs font-medium px-3 py-2 rounded-lg border transition-all\`. Inactive: \`bg-white text-gray-700 border-gray-200 hover:border-gray-400\`. Active (selected): \`bg-gray-100 text-black border-black\`. Multi-select toggle via state.
     - Services list (exact order): \`Website\`, \`Mobile App\`, \`Web App\`, \`E-Commerce\`, \`Visual Identity\`, \`3D & Motion\`, \`Digital Marketing\`, \`Growth & Consulting\`, \`Other\`.
   - Submit button: \`w-full bg-black text-white text-sm font-semibold py-3 rounded-2xl hover:bg-gray-800 transition-colors disabled:opacity-60\`. Label: \`Send my message\` (or \`Sending...\` while submitting).

5. **Submit behavior:** On submit, set \`sending=true\`, await a 1-second fake delay (\`new Promise(r => setTimeout(r, 1000))\`), then show a success state in place of the form: centered column with \`py-6 gap-3\`, a 48x48 green check pill (\`w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-xl\` containing \`✓\`), heading \`You're all set!\` (\`text-base font-semibold text-gray-900\`), and subtext \`Expect a reply within 24 hours.\` (\`text-sm text-gray-500\`).

**State (useState)**
- \`selected: string[]\` (toggled service chips)
- \`name\`, \`email\`, \`message\`: strings
- \`sending\`, \`sent\`: booleans

**Transitions/animations**
- All interactive elements use Tailwind \`transition-*\` utilities (opacity, colors, all).
- No external animation library; rely on Tailwind hover/focus transitions and \`backdrop-blur-md\` on the navbar.

**Constants at the top of the file**
- \`VIDEO_URL\` (the CloudFront URL above) and \`SERVICES\` array.

**Files**
- \`src/App.tsx\` — entire component plus \`SocialBtn\` helper.
- \`src/index.css\` — Google Fonts import + Tailwind directives + global \`* { font-family: 'Inter', sans-serif; }\`.
- Standard Vite + Tailwind config (\`tailwind.config.js\` scanning \`./index.html\` and \`./src/**/*.{ts,tsx}\`).`

/**
 * Wanderful — 原始创建 prompt 归档
 */
const WANDERFUL_PROMPT = `Build a full-viewport cinematic hero section for a travel brand called "Wanderful" using React + TypeScript + Vite + Tailwind CSS. Use GSAP for animation and \`lucide-react\` for icons.

**Fonts (load via Google Fonts in \`src/index.css\`):**
\`\`\`css
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Barlow:wght@300;400;500;600&family=Inter:wght@300;400;500;600;700&display=swap');
\`\`\`
Also load a custom display font:
\`\`\`css
@font-face {
  font-family: 'Dirtyline';
  src: url('https://fonts.cdnfonts.com/s/15011/Dirtyline36DaysofType.woff') format('woff');
  font-weight: normal; font-style: normal; font-display: swap;
}
\`\`\`
Body font: \`Barlow\`. Hero headings: \`Inter\`. Body background: \`#000\`.

**Video background (fixed, full screen, z-0):**
- Use this exact CloudFront URL as the \`<video>\` src:
  \`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260510_060007_60275ce7-030c-4668-a160-8f364ec537d3.mp4\`
- Attributes: \`autoPlay muted loop playsInline\`, \`object-cover\`, wrapper scaled \`scale-[1.08]\` with \`origin-center\`.
- On \`onLoadedMetadata\`, set \`playbackRate = 1.25\`.
- Add GSAP-driven mouse parallax: listen to \`mousemove\`, compute \`targetX/Y = ((clientX - cx)/cx) * 20\`, lerp \`currentX/Y += (target - current) * 0.06\` inside \`requestAnimationFrame\`, and apply via \`gsap.set(videoBg, { x, y })\`.

**Liquid-glass utility (add to \`index.css\`):**
\`\`\`css
.liquid-glass {
  background: rgba(255,255,255,0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: "";
  position: absolute; inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%,
    rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%,
    rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%,
    rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
\`\`\`

**Header (fixed top, z-50, \`px-10 py-8\`, flex justify-between items-center):**
- Left: wordmark \`Wanderful\` followed by \`<sup>TM</sup>\`, \`text-[17px] font-semibold tracking-tight\`.
- Center: \`<nav>\` using \`.liquid-glass rounded-full px-2 py-2 flex items-center gap-1\`. Links: \`JOURNEY\`, \`BENEFITS\`, \`JOURNAL\`, \`GUIDEBOOK\`. Each link: \`text-[11px] font-medium tracking-[0.12em] text-white/90 hover:text-white px-4 py-1.5 rounded-full transition-colors duration-200\`.
- Right: "GET ROAMING" anchor with same \`.liquid-glass rounded-full px-5 py-2.5 text-[11px] font-medium tracking-[0.12em] text-white/90 hover:text-white\`.

**Hero headline (fixed, \`top: 120px\`, centered, z-20):**
Two lines, both centered, \`Inter\` 400, \`font-size: clamp(40px, 5.4vw, 72px)\`, \`line-height: 1.1\`, \`letter-spacing: -0.02em\`:
- Line 1 (white): \`Venture without edges.\`
- Line 2 (\`rgba(255,255,255,0.55)\`): \`Uncover with keen instinct.\`

Fade-in on mount: \`opacity 0 → 100\` and \`translate-y-6 → 0\` with \`transition-all duration-1000\`.

**Bottom block (fixed \`bottom-14\`, z-20, flex-col items-center gap-6), fade-in with \`delay-300\`:**
1. Paragraph, \`max-w-[620px] text-[15px] leading-relaxed\` centered:
   - White: "Our smart itineraries shape around you — your rhythm, your vibe, your hunger for adventure."
   - \`text-white/55\`: " Each getaway is tailored, seamless, and wholly yours."
2. Button: white bg, black text, \`text-[15px] font-medium rounded-full px-8 py-3.5\`, hover \`scale-[1.03]\` + \`shadow-[0_0_32px_4px_rgba(255,255,255,0.2)]\`, active \`scale-[0.97]\`. Label: \`Plan my escape today\`.
3. Row: \`Lock\` icon from lucide-react (\`size={13} strokeWidth={1.5}\`) + \`text-[11px] font-medium tracking-[0.14em] text-white/70\`, text: \`SECURE BY DESIGN. ZERO DATA LEAKS.\`

**Root container:** \`min-h-screen bg-black text-white overflow-x-hidden\` with inline \`fontFamily: "'Inter', sans-serif"\`.

Dependencies: \`gsap\`, \`lucide-react\`, \`react\`, \`react-dom\`, tailwind configured with content globs \`./index.html\` and \`./src/**/*.{js,ts,jsx,tsx}\`.`

/**
 * Convix Software — 原始创建 prompt 归档
 */
const CONVIX_SOFTWARE_PROMPT = `Build a fully responsive, full-viewport hero section for a PR-agency SaaS called "Convix Software" with these exact specs:

Page Frame
Outer wrapper: min-h-screen w-full bg-[#ededed] p-3 sm:p-4, font-family Inter
Hero container (clips everything inside): relative w-full h-[calc(100vh-24px)] sm:h-[calc(100vh-32px)] overflow-hidden bg-[#d9d9d9] rounded-2xl sm:rounded-3xl
Background Video
URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260424_064411_9e9d7f84-9277-41f4-ab10-59172d89e6be.mp4
Absolutely positioned, inset-0 w-full h-full object-cover pointer-events-none
Attributes: autoPlay, loop, muted, playsInline, preload="auto", disableRemotePlayback, webkit-playsinline="true", x5-playsinline="true"
Poster fallback: https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&q=60
Above the video: absolute inset-0 bg-white/10 overlay
Foreground content wrapper: relative z-10
Fonts (/src/styles/fonts.css)
Import from Google Fonts:

Inter weights 400, 500, 600, 700
Instrument Serif regular + italic
Navbar (floating pill, responsive with hamburger)
Wrapper: flex justify-center pt-4 sm:pt-6 px-3 sm:px-4
Pill: bg-white rounded-full shadow-sm border border-neutral-200 pl-2 pr-2 py-2 w-full max-w-[760px] relative
Logo (left, shrink-0): orange #ef4d23 8-petal flower SVG — 8 circles at radius 10 around center (16,16) plus center circle, all r=3.5, viewBox 32×32, rendered w-7 h-7 sm:w-8 sm:h-8
Desktop links (hidden md:flex, gap-6, 14px): "Home" (with 1.5px black dot), "Features", "About", "Pages" (#ef4d23 + ChevronDown 3.5)
Right cluster (ml-auto): ShoppingCart icon (hidden on mobile), then orange #ef4d23 rounded-full button "Get early access" (desktop) / "Early access" (mobile) with white/20 inner circle holding ChevronRight
Mobile-only Menu (lucide) hamburger button (md:hidden)
When open: dropdown panel absolute top-full left-2 right-2 mt-2 bg-white rounded-2xl shadow-lg border border-neutral-200 p-3 z-20 listing the same nav items vertically
useState open toggles the menu
Hero Content (centered)
flex flex-col items-center px-4 pt-10 sm:pt-16 pb-8 sm:pb-12 text-center
Badge: inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow-sm, 13px — orange dot + "Convix Software"
Headline <h1> with inline style fontSize: clamp(36px, 8vw, 72px); lineHeight: 1.05; fontWeight: 500; letterSpacing: -0.02em, mt-5 sm:mt-6 max-w-4xl:
"Shaping " + <span style={{fontFamily:"'Instrument Serif', serif", fontStyle:"italic", fontWeight:400}}>Agencies</span> + <br> + "of tomorrow"
Subtitle <p> mt-4 sm:mt-6 text-neutral-700 px-2, fontSize: clamp(13px, 3.5vw, 16px): "The All-In-One Software Powering the Future of PR Agencies"
CTA button mt-6 sm:mt-8 inline-flex items-center gap-3 bg-[#0b0f1a] text-white rounded-full pl-6 sm:pl-7 pr-2 py-2 sm:py-2.5, 14px: "Get Started" + w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/15 containing ChevronRight (4×4)
Dashboard Preview
Wrapper: bg-[#f5f2ee] rounded-3xl p-4 sm:p-6 w-full max-w-[880px] mx-auto
Grid: grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4
Outer container around it: px-3 sm:px-4
Card 1 — Clicks (white, rounded-2xl, p-5)
Header: orange "Clicks" + neutral "This Month" (13px)
Big number "6,896" (28px, weight 600) + red pill bg-red-50 text-red-600 rounded-full px-2 py-0.5 with TrendingDown icon "-3,382 (33%)" (11px)
Small caption "Compared to yesterday"
Centered "Month Target achieved" label
Gauge at 92% in #ef4d23, with end labels "389K" / "425K"
Toggle pill bottom: bg-neutral-100 rounded-full p-1 flex — "Impressions" active (white card + shadow) / "Clicks" inactive
Card 2 — Form (white, rounded-2xl, p-5, flex flex-col gap-3)
Two label+dropdown groups (label 12px neutral-700, button bordered rounded-lg px-3 py-2 with ChevronDown):
"Show figures for" → "This month"
"Compare period by" → "Month-to-date (MTD)"
Two label+input groups with # prefix:
"Ste targets (This month)" → 10
"Ste targets (This year)" → 100
Footer: orange #ef4d23 "Save" button (rounded-lg px-5 py-2), underlined "Cancel", X icon pushed to right (ml-auto)
Card 3 — Video Starts (white, rounded-2xl, p-5)
Header: orange "Video Starts" + "today"
Big "0" + neutral pill with TrendingUp + "0"
"Compared to yesterday"
Gauge at 68% in #9ca3af (no end labels)
Toggle pill: "Video Clicks" active / "Video Starts"
Gauge Component (reusable)
Props: value, color="#ef4d23", showLabels, min, max
SVG viewBox 0 0 200 120, max-width 260px
40 tick marks spanning a 180° arc (start at angle π, sweep to 2π); active count = round(value/100 * 40)
Each tick: <line> from radius (r-10) to r=80 around center (100,100), strokeWidth=2.5, strokeLinecap="round", active uses color, inactive #d4d4d8
Center text: <text x=100 y=105 textAnchor="middle">{value}%</text>, fontSize 22, fontWeight 600
If showLabels: small flex row below SVG, 11px neutral-500, justify-between, showing min and max
Colors
Primary orange: #ef4d23
Dark CTA: #0b0f1a
Page bg: #ededed; hero bg: #d9d9d9; dashboard tray: #f5f2ee
Icons (lucide-react)
ChevronDown, ChevronRight, ShoppingCart, Menu, TrendingDown, TrendingUp, X

File Structure
src/app/App.tsx
src/app/components/Navbar.tsx
src/app/components/DashboardPreview.tsx
src/app/components/Gauge.tsx
src/styles/fonts.css
Behavior
No custom animations; only the native looping muted background video
Entire hero (video + content + dashboard) is clipped together by the rounded container, so the dashboard cards bleed off the bottom edge
Fully responsive: navbar collapses to hamburger under md, headline/CTA scale via clamp(), dashboard grid steps from 1 → 2 → 3 columns`

/**
 * Ai Builder — 原始创建 prompt 归档
 */
const AI_BUILDER_PROMPT = `Create a dark mode hero section for an AI website builder with the following exact specifications:

## Technical Setup

### Required Packages
Install these packages:
- \`motion\` (version 12.23.24 or later) - for animations
- \`hls.js\` (version 1.6.15 or later) - for video streaming
- \`lucide-react\` (version 0.487.0 or later) - for icons

### Fonts
Import these Google Fonts:
\`\`\`css
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Instrument+Serif:ital@0;1&display=swap');
\`\`\`

## Layout Structure

### Navbar Component
Create a fixed, transparent navbar with:

**Position & Styling:**
- Fixed to top, full width, z-index 50
- Background: fully transparent (bg-transparent)
- Padding: px-6 py-4
- Flexbox layout: items-center justify-between

**Left Section:**
- Sunburst icon (24x24px SVG) in white color

**Center Section** (hidden on mobile, visible md:flex):
- Navigation links: "Products" (with ChevronDown icon), "Customer Stories", "Resources", "Pricing"
- Font: Instrument Sans, text-sm, font-medium
- Color: text-white/80, hover:text-white
- Gap: gap-8

**Right Section:**
- "Book A Demo" link (hidden on small screens, sm:block)
- "Get Started" button: white background, black text, rounded-full, px-5 py-2.5, font-semibold

### Hero Section Component

**Container:**
- Relative positioning, full width, min-h-screen
- Background color: #000000 (pure black)
- Text color: white
- Overflow hidden

**Background Video Layer:**
- Video URL: https://stream.mux.com/T6oQJQ02cQ6N01TR6iHwZkKFkbepS34dkkIc9iukgy400g.m3u8
- Video implementation using HLS.js with Safari fallback
- Video properties: muted, loop, playsInline
- Object-fit: cover, opacity: 60%
- Poster image fallback: https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjB0ZWNobm9sb2d5JTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3Njg5NzIyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080

**Video Overlay:**
- Black overlay: bg-black/60 with backdrop-blur-[2px]

**Decorative Gradients:**
- Top-left gradient: position top-[-20%] left-[20%], size 600x600px, bg-blue-900/20, blur-[120px], mix-blend-screen
- Bottom-right gradient: position bottom-[-10%] right-[20%], size 500x500px, bg-indigo-900/20, blur-[120px], mix-blend-screen

**Content Container:**
- Max-width: 5xl (max-w-5xl)
- Center aligned (mx-auto, items-center, text-center)
- Z-index: 10, top margin: mt-20
- Vertical spacing: space-y-12

**Pre-headline:**
- Text: "Design at the speed of thought"
- Font: Instrument Serif
- Size: text-3xl (mobile), sm:text-5xl, lg:text-[48px]
- Line height: leading-[1.1]
- Color: white
- Animation: Motion fade up (opacity 0→1, y 20→0, duration 0.6s)

**Main Headline:**
- Text: "Build Faster"
- Font: Instrument Sans, font-semibold
- Size: text-6xl (mobile), sm:text-8xl, lg:text-[136px]
- Line height: leading-[0.9], letter spacing: tracking-tighter
- Gradient: bg-gradient-to-b from-white via-white to-[#b4c0ff]
- Text effect: bg-clip-text text-transparent
- Animation: Motion scale (opacity 0→1, scale 0.9→1, delay 0.2s, duration 0.6s)

**Subheadline:**
- Text: "Create fully functional, SEO-optimized websites in seconds with our advanced AI engine."
- Font: Instrument Sans
- Size: text-lg (mobile), sm:text-[20px]
- Line height: leading-[1.65]
- Color: white, opacity-70
- Max width: max-w-xl
- Animation: Motion fade (opacity 0→0.7, delay 0.4s, duration 0.6s)

**CTA Buttons:**

Primary Button:
- Style: White pill-shaped with blue arrow
- Layout: pl-6 pr-2 py-2, rounded-full
- Background: white
- Text: "Start Building Free" (font-medium, text-lg, Instrument Sans, color #0a0400)
- Arrow container: 40x40px circle, bg-[#3054ff], hover:bg-[#2040e0]
- Icon: ArrowRight (lucide-react), white, 20x20px
- Hover effect: shadow-[0_0_20px_rgba(255,255,255,0.3)], scale-105

Secondary Button:
- Text: "See Examples"
- Style: text link with arrow
- Color: text-white/70, hover:text-white
- Background: backdrop-blur-sm, hover:bg-white/5
- Padding: px-4 py-2, rounded-lg
- Icon: ArrowRight with group-hover:translate-x-1 transition

Button Container:
- Layout: flex-col (mobile), sm:flex-row
- Gap: gap-6, items centered
- Animation: Motion fade up (opacity 0→1, y 20→0, delay 0.6s, duration 0.5s)

## HLS.js Video Implementation
\`\`\`tsx
import { useEffect, useRef } from "react";
import Hls from "hls.js";

const videoRef = useRef<HTMLVideoElement>(null);
const videoSrc = "https://stream.mux.com/T6oQJQ02cQ6N01TR6iHwZkKFkbepS34dkkIc9iukgy400g.m3u8";

useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      video.play().catch((e) => console.log("Auto-play prevented:", e));
    });
    return () => {
      hls.destroy();
    };
  } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = videoSrc;
    video.addEventListener("loadedmetadata", () => {
      video.play().catch((e) => console.log("Auto-play prevented:", e));
    });
  }
}, []);
\`\`\`

## Motion Animations
Import: \`import { motion } from "motion/react"\`

- Pre-headline: initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
- Main headline: initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
- Subheadline: initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 0.4, duration: 0.6 }}
- Buttons: initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}

## Color Palette
- Background: #000000
- Primary text: white
- Secondary text: white/80, white/70
- Primary button background: white
- Primary button text: #0a0400
- Primary button accent: #3054ff, hover #2040e0
- Gradient end color: #b4c0ff
- Decorative gradients: blue-900/20, indigo-900/20`

/**
 * Neuralyn — 原始创建 prompt 归档
 */
const NEURALYN_PROMPT = `Create a dark landing page for "Neuralyn" — an analytics dashboard SaaS. Use React + Vite + Tailwind CSS + TypeScript + Framer Motion + shadcn/ui.

Fonts
Inter (400, 500, 600, 700) for body/UI via @fontsource/inter
Instrument Serif (400, 400-italic) for the italic accent word via @fontsource/instrument-serif

Color Theme (all HSL, dark mode by default in :root)
Background: 0 0% 0% (pure black)
Foreground: 0 0% 100% (pure white)
Muted foreground: 0 0% 65%
Card: 0 0% 5%
Border: 0 0% 20%
Hero subtitle: 210 17% 95%

Page Structure
Section 1: Hero (full viewport height, overflow-hidden)

Navbar — horizontal, padded px-8 md:px-28 py-4:

Left: Logo image + "Neuralyn" text (text-xl font-bold tracking-tight) + nav links (Home, Services with ChevronDown icon, Reviews, Contact us) — links hidden on mobile, gap-1 between links, gap-12 md:gap-20 between logo and links
Right: "Sign In" button — solid white background (bg-foreground), black text (text-background), rounded-lg text-sm font-semibold, hover opacity transition

Hero Content — centered column, mt-16 md:mt-20 px-4:

Tag pill: A "liquid glass" styled pill (liquid-glass class) with inner "New" badge (white bg, black text, rounded-md text-sm font-medium px-2 py-0.5) + "Say Hello to Corewave v3.2" in text-sm font-medium text-muted-foreground. Pill has px-3 py-2 rounded-lg mb-6.
Title: text-5xl md:text-7xl, tracking-[-2px], font-medium, leading-tight md:leading-[1.15] mb-3. Text: "Your Insights." / "One Clear Overview." — the word "Overview" is in Instrument Serif italic (font-serif italic font-normal)
Subtitle: text-lg font-normal leading-6 opacity-90 mb-8, color uses CSS variable --hero-subtitle. Text: "Neuralyn helps teams track metrics, goals, and progress with precision." with a <br/> after "goals,"
CTA Button: "Get Started for Free" — solid white (bg-foreground text-background), rounded-full px-8 py-3.5 text-base font-medium, whileHover: scale 1.03, whileTap: scale 0.98

Dashboard + Video Area — full viewport width using w-screen with marginLeft: calc(-50vw + 50%) trick, aspect-ratio: 16/9, positioned relative:

Background video: <video>, absolutely positioned inset-0 w-full h-full object-cover. URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4
Dashboard image: Absolutely positioned, centered, max-w-5xl w-[90%] rounded-2xl, mixBlendMode: "luminosity". Has parallax scroll (y: 0→-250).
Bottom gradient fade: Absolutely positioned at bottom of section, h-40, gradient from background to transparent, z-30, pointer-events-none.

Parallax Scroll Effects (Framer Motion useScroll({ target: sectionRef, offset: ["start start", "end start"] }) + useTransform):

Hero text content group: y: [0, -200] and opacity: [1, 0] (fades over first 50% of scroll)
Dashboard image: y: [0, -250]

Entrance Animations: Staggered initial={{ opacity: 0, y }} / animate={{ opacity: 1, y: 0 }}:

Tag pill: y: 10, duration 0.5s, delay 0
Title: y: 20, duration 0.6s, delay 0.1
Subtitle: y: 20, duration 0.6s, delay 0.2
CTA: y: 20, duration 0.6s, delay 0.3
Dashboard area: y: 40, duration 0.8s, delay 0.4

Liquid Glass CSS

.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

Section 2: Testimonial (min-h-screen, centered, py-24 md:py-32 px-8 md:px-28)

Quote symbol image (w-14 h-10 object-contain)
Testimonial text (text-4xl md:text-5xl font-medium leading-[1.2], wrapped in flex flex-wrap): "Neuralyn revolutionized how we handle financial insights using smart analytics. We are now driving better outcomes quicker than we ever imagined! Neuralyn revolutionized how we handle financial insights using smart analytics."
Scroll-driven word reveal: Each word is a <motion.span> with mr-[0.3em]. Uses useScroll({ target: containerRef, offset: ["start end", "end center"] }). Each word maps to a sequential range [i/total, (i+1)/total] → opacity: [0.2, 1] and color: ["hsl(0 0% 35%)", "hsl(0 0% 100%)"].
Closing " quotation mark in text-muted-foreground ml-2
Author row (flex items-center gap-4): Avatar image (w-14 h-14 rounded-full border-[3px] border-foreground object-cover) + name "Brooklyn Simmons" (text-base font-semibold leading-7 text-foreground) + role "Product Manager" (text-sm font-normal leading-5 text-muted-foreground)
Layout: max-w-3xl mx-auto, content left-aligned (items-start), gap-10 between elements

Assets needed:
logo.png — small logo icon
hero-dashboard.png — dashboard screenshot
quote-symbol.png — decorative quote mark
testimonial-avatar.png — circular headshot`

/**
 * dot — 原始创建 prompt 归档
 */
const DOT_PROMPT = `Build a React landing page exactly as specified below. Use React 19, Tailwind CSS v4, and motion/react for animations.
1. Fonts & Global CSS Setup:
In index.html, import these Google Fonts:
Instrument Serif (weights 400, italic 400)
Inter (weights 100 to 900)
In src/index.css, import this custom font for the Nokia text:
@import url('https://db.onlinewebfonts.com/c/440b53b1a1c65037f944ff19259d8014?family=Nokia+Cellphone+FC+Small');
Configure the Tailwind theme variables in index.css:
--font-instrument: "Instrument Serif", serif;
--font-serif: "Instrument Serif", serif;
--font-sans: "Inter", sans-serif;
--font-nokia: "Nokia Cellphone FC Small", monospace;
Create a @utility font-instrument { font-family: "Instrument Serif", serif; }
Set the root font-family to var(--font-sans) and apply anti-aliasing.
2. Component Structure:
Create one main App.tsx file containing 4 components: TypingMessages, Navbar, Hero, and App.
3. Navbar Component:
Container: Fixed to the top top-6, centered horizontally left-1/2 -translate-x-1/2, width 95% w-[95%] max-w-5xl. z-50, pointer-events-none.
Nav Tag: pointer-events-auto, backdrop blur, rounded full pill shape, transparent background with border border-black/10. Flex between items.
Logo: Text "dot." using font-instrument text-[28px] tracking-tight text-[#1a1a1a].
Links: "Philosophy", "Trust", "Access", "Tribe". Hidden on mobile, flex on desktop (gap-10). font-sans text-[14px] text-[#1a1a1a] with hover opacity fading.
CTA Button ("Link up"):
Background #0871E7, rounded full, white text font-sans text-[14px].
Shadow: shadow-[inset_0_-4px_4px_rgba(255,255,255,0.39)] outline-1 outline-[#0871E7] -outline-offset-1.
Add a subtle top glint effect using an absolutely positioned rectangle inside the button: w-[80%] h-4 left-[10%] top-[1px] bg-gradient-to-b from-[#DEF0FC] to-transparent rounded-[12px]. Make it scale wider on group hover (group-hover:scale-x-105).
4. Hero Component:
Container: min-h-screen bg-[#F3F4ED] pt-24 md:pt-32 flex column centered.
Video Background: Absolute positioning inset-0 z-0. Use an HTML5 <video> set to autoplay, loop, muted, playsInline, scaling with object-cover.
Video Source: EXACTLY https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260427_054418_a6d194f0-ac86-4df9-abe5-ded73e596d7c.mp4. Add an overlaid empty div with bg-white/5 for a slight tint.
Hero Text Container: Relative z-20, pointer-events-none, text-centered layout.
Main Headline: "Short notes. <br /> Daily calm."
Animate using motion.div (from opacity: 0, scale: 0.95 to opacity: 1, scale: 1 over 1.5s with ease [0.16, 1, 0.3, 1]).
Style: font-instrument text-[38px] md:text-[56px] lg:text-[72px] leading-[0.85] tracking-tight text-[#1a1a1a] mb-6.
Sub-headline: "Linked with a single anonymous peer. One message every day. A quiet rhythm in the digital noise."
Animate using motion.div (from opacity: 0, y: 20 to opacity: 1, y: 0 over 1.2s, delay: 0.3, ease [0.16, 1, 0.3, 1]).
Style: font-sans text-[16px] md:text-[18px] text-[#1a1a1a]/70 leading-relaxed font-normal max-w-xl mx-auto.
Include the TypingMessages component inside the hero to overlap on the phone screen in the video.
5. TypingMessages Component:
Logic: Cycle through an array of messages: ["Are you here?", "Yes, I am.", "Speak soon."].
Typing speed: 100ms. Deleting speed: 50ms. Pause before deleting: 2000ms.
Positioning: Absolute position it to sit perfectly on the phone screen inside the video:
absolute left-[48.5%] md:left-[47.5%] lg:left-[48.5%] -translate-x-1/2 bottom-[32%] z-30 w-[110px] sm:w-[130px] flex justify-start text-left.
Text Style: font-nokia text-[#2A3616] text-[10px] sm:text-[14px] leading-tight break-words min-h-[1.5em].
Cursor: Add a blinking Framer Motion cursor motion.span (w-1.5 h-3 bg-[#2A3616] ml-1 align-middle) animating opacity from 0 to 1 to 0 over 0.8s, repeating infinitely, linearly.`

/**
 * Taskly — 原始创建 prompt 归档
 */
const TASKLY_PROMPT = `System Prompt: High-Fidelity "Liquid Glass" Hero Section

Core Layout: Create a 1600px max-width landing page hero section. The background should be pure white with a subtle, layered gradient glow in the top-left (using blurred ellipses in light blue #60B1FF and #319AFF). The design must be fully responsive, transitioning from a single-column mobile view to a dual-column desktop layout.

Typography:

Headlines & Brand: Use Fustat (Bold).
Body & UI: Use Inter (Normal/Medium).
Hero Headline: "Work smarter, achieve faster" (75px, 1.05 line-height, -2px tracking).

The "Strong Liquid Glass" Navbar:

Position: Sticky at top-[30px], centered, w-fit.
Visuals: backdrop-blur-[50px], background rgba(255,255,255,0.3), rounded-[16px].
Fidelity Details:
Outer Stroke: 1px solid rgba(0,0,0,0.1).
Inner Highlight Shadow: inset 0px 4px 4px 0px rgba(255,255,255,0.25).
Items: Logo "Taskly" (Fustat), Nav links (Home, Features, Company, Pricing), and a glassy "SignUp" button with an arrow icon.

The Glassy Orb (Hero Right):

Source URL: https://future.co/images/homepage/glassy-orb/orb-purple.webm
Blending Mode: Must use mix-blend-screen to filter the black background.
Scaling: scale-125 to make it massive and bleed slightly off-center.
Exact Color Grade (CSS Filter): hue-rotate(-55deg) saturate(250%) brightness(1.2) contrast(1.1). This transforms the purple asset into a vibrant, high-end "Electric Brand Blue" that matches the primary CTA.

Hero Content (Hero Left):

Social Proof: A "Rated 4.9/5 by 2700+ customers" badge with five orange #FF801E stars.
Subheadline: "Effortlessly manage your projects, collaborate with your team, and achieve your goals with our intuitive task management tool." (18px, Inter, -1px tracking).
Primary CTA: "Get Started Now" button.
Color: rgba(0,132,255,0.8) with backdrop-blur-[2px].
Details: rounded-[16px], white text, inner highlight shadow inset 0px 4px 4px 0px rgba(255,255,255,0.35), and a white circular arrow icon.
Animation: Scale 1.02 on hover with a smooth transition.

Footer Logos: Include a "Trusted by Top-tier product companies" section at the bottom with 5 grayscale SVG logos (e.g., placeholder logos for tech companies) spaced at gap-[100px].

Key Technical Specs for the Developer:

Video Tag: autoPlay loop muted playsInline.
Container: Use a relative wrapper for the background glow and a z-10 main container for the content.
Smoothing: Apply -webkit-font-smoothing: antialiased for the sharpest typography.`

/**
 * Future — 原始创建 prompt 归档
 */
const FUTURE_PROMPT = `Create a responsive, full-screen hero section for a web application using React and Tailwind CSS.

Design System & Assets:

Fonts: Load and use 'Manrope' (for UI/Nav), 'Cabin' (for buttons/tags), 'Instrument Serif' (for headlines), and 'Inter' (for body text).

Primary Color: Purple #7b39fc
Secondary/Dark Color: Dark Purple #2b2344
Background: Use a full-screen, absolute-positioned HTML5 video background. The video should autoplay, loop, mute, and play inline. Ensure it covers the viewport (min-h-screen, object-cover) without an overlay (keep it opaque).

Video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260210_031346_d87182fb-b0af-4273-84d1-c6fd17d6bf0f.mp4

1. Navbar Component (Top Overlay)

Layout: Full width, transparent background, z-20 relative positioning.
Padding: px-6 (mobile) to px-[120px] (desktop), py-[16px].

Logo (Left): Use this specific SVG path filled with white:
Path: M1.04356 6.35771L13.6437 0.666504... (Future logo shape).

Navigation Links (Center-Left, Desktop Only):
Items: "Home", "Services" (with a ChevronDown icon), "Reviews", "Contact us".
Style: Manrope font, Medium weight, 14px size, White.
Hover effect: opacity-80.

Action Buttons (Right, Desktop Only):
Sign In: White background, thin gray border (#d4d4d4), rounded 8px, Black text (#171717), Manrope Semibold 14px.
Get Started: Primary Purple background (#7b39fc), rounded 8px, White text (#fafafa), Manrope Semibold 14px, subtle shadow.

Mobile: Hide links/buttons and show a White Menu icon (hamburger) that toggles a full-screen black overlay menu.

2. Hero Content (Centered)

Container: Centered vertically and horizontally (flex-col items-center text-center), z-10 relative, top margin mt-32.

Tagline Pill:
Style: Glassmorphism effect (bg-[rgba(85,80,110,0.4)], backdrop-blur, border rgba(164,132,215,0.5)).
Shape: Rounded 10px, Height 38px.
Content: A small inner badge (#7b39fc bg, rounded 6px) saying "New" followed by text "Say Hello to Datacore v3.2".
Font: Cabin, Medium, 14px, White.

Headline:
Text: "Book your perfect stay instantly and hassle-free".
Typography: Instrument Serif font, White.
Size: 5xl (mobile) to 96px (desktop).
Styling: Line-height 1.1. The word "and" should be italicized with specific spacing.

Subtext:
Text: "Discover handpicked hotels, resorts, and stays across your favorite destinations. Enjoy exclusive deals, fast booking, and 24/7 support."
Typography: Inter font, Normal weight, 18px.
Color: White with 70% opacity (text-white/70).
Width: Max width 662px.

Call to Action Buttons (Row):
Button 1: "Book a Free Demo" — Primary Purple (#7b39fc), rounded 10px, Cabin Medium 16px, White.
Button 2: "Get Started Now" — Dark Purple (#2b2344), rounded 10px, Cabin Medium 16px, Off-white (#f6f7f9).
Hover effects: Slightly lighten backgrounds on hover.`

/**
 * Stellar AI — 原始创建 prompt 归档
 */
const STELLAR_AI_PROMPT = `Create a "Stellar.ai" landing page hero section using React, Tailwind CSS, and Lucide React icons. Use the Inter font (imported from Google Fonts). The page has a white background (bg-white), max-width max-w-7xl, and is centered with mx-auto.

Font: Import Inter (weights 400, 500, 600, 700) from Google Fonts. Set font-family: 'Inter', sans-serif on the body.

Custom CSS animations (in index.css):

@keyframes fadeInUp -- from opacity: 0; transform: translateY(30px) to opacity: 1; transform: translateY(0). Class .animate-fade-in-up uses this with 0.6s ease-out forwards.
@keyframes fadeInOverlay -- from opacity: 0 to opacity: 1. Class .animate-fade-in-overlay uses this with 0.4s ease-out forwards.
@keyframes fadeInDialog -- from opacity: 0 to opacity: 1. Class .animate-slide-up-overlay uses this with 0.5s ease-out forwards and has transform: translate(-50%, -50%).
Every major section uses .animate-fade-in-up with staggered animationDelay inline styles (starting at 0.1s and incrementing by 0.1s). Each element starts with opacity: 0 inline so the animation fills it to visible.

Tailwind config: Default config with no custom theme extensions. Uses standard content paths.

NAVIGATION (animationDelay: 0.1s):
px-6 py-4 flex items-center justify-between max-w-7xl mx-auto
Left: Lucide Star icon (w-5 h-5, fill-black) + "Stellar.ai" text (text-lg font-semibold)
Center (hidden on mobile, hidden md:flex items-center gap-8): "Solutions" with ChevronDown, "For Teams" with ChevronDown, "About Us", "Learn Hub" -- all text-sm text-gray-700 hover:text-black
Right: "Login" link (text-sm text-gray-700) + "Get started free" button (bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors)

HERO SECTION (px-6 pt-24 pb-32 max-w-7xl mx-auto text-center):
Reviews Badge (delay: 0.2s): inline-flex items-center gap-2 mb-8. Contains a bordered square (w-6 h-6 border border-gray-300 rounded) with a filled Star icon inside, plus "4.9 rating from 18.3K+ users" (text-sm font-medium text-black).

Main Heading (delay: 0.3s): text-6xl md:text-7xl lg:text-[80px] font-normal leading-[1.1] tracking-tight mb-5. First line: "Work Smarter. Move Faster." Second line: "AI Powers You Up." with gradient text (bg-gradient-to-r from-black via-gray-500 to-gray-400 bg-clip-text text-transparent).

Subheading (delay: 0.4s): text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto. Text: "Intelligent automation syncs with the tools you love to streamline tasks, boost output, and save time."

CTA Button (delay: 0.5s): bg-black text-white px-8 py-3 rounded-full text-base font-medium hover:bg-gray-800 transition-colors mb-12. Text: "Begin Free Trial".

Tab Bar (delay: 0.6s): Centered bg-gray-100 rounded-lg p-1 container.
Mobile (md:hidden): 2x2 grid with 4 buttons: Analyse (BarChart3), Train (BookOpen), Testing (Users), Deploy (Rocket). Active: bg-white text-black shadow-sm. Inactive: text-gray-600.
Desktop (hidden md:flex): Same 4 buttons in row with vertical dividers (w-px h-5 bg-gray-300).
Tabs auto-cycle every 4s using setInterval. State: useState('analyse').

Video + Overlay Section (delay: 0.7s):
Container: relative rounded-3xl overflow-hidden h-[400px] md:h-[500px]
Video: src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_165750_358b1e72-c921-48b7-aaac-f200994f32fb.mp4", autoPlay, loop, muted, playsInline, w-full h-full object-cover.

4 Conditional Overlays per tab with animate-fade-in-overlay outer and animate-slide-up-overlay inner card:
a. Analyse: "Set Up Your AI Workspace" wizard with purple progress bar at 25%, 4 steps
b. Train: "AI Model Training" with orange progress at 67%, 4 metrics
c. Testing: "Test Suite Results" with green success, 127/127 tests
d. Deploy: "Deploy to Production" with 4 checklist items, Deploy Now button

Company Logos (delay: 0.8s): mt-24 flex with INTERSCOPE, SPOTIFY, Nexera (dot grid), M3 (serif italic), LAURA COLE (LC circle), vertex (dots)`

/**
 * Design Rocket — 原始创建 prompt 归档
 */
const DESIGN_ROCKET_PROMPT = `Prompt: Recreate "Design Rocket Certificates" Email-Style Landing Page
Build a single-page React + TypeScript + Vite + Tailwind CSS project that renders an email-style marketing page for a "Design Rocket Certificates" AI leadership course, built in collaboration with Microsoft. Use lucide-react for icons. No other UI libraries.

Global setup
index.html

Title: Newsletter Design Build Out
Preconnect to fonts.googleapis.com and fonts.gstatic.com
Load Google Fonts: Instrument Serif (ital 0,1) and Inter (weights 400, 500, 600, 700)
src/index.css


@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-display: 'Instrument Serif', serif;
  --font-body: 'Inter', sans-serif;
}

body {
  font-family: var(--font-body);
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}
Headings use inline style={{ fontFamily: "'Instrument Serif', serif" }}. Body copy uses Inter (default).

Page shell
Outer page: min-h-screen bg-[#050505] py-10 px-4 font-sans
Email container: max-w-[640px] mx-auto shadow-2xl overflow-hidden ring-1 ring-white/5
Content card: bg-[#111111] text-[#F2F2F2]
Shared components
Step — numbered row

Wrapper: flex items-start gap-5 mb-6 last:mb-0
Number badge: flex-shrink-0 w-7 h-7 rounded-md bg-[#DCFF00] flex items-center justify-center text-[#0A0A0A] font-bold text-xs mt-1 showing {number}.
Text: text-[17px] leading-[1.55] text-[#E8E8E8]
Divider

py-8 flex justify-center containing h-px w-24 bg-white/20
PrimaryButton (lime CTA, with arrow)

inline-flex items-center gap-3 bg-[#DCFF00] text-[#0A0A0A] font-bold rounded-lg px-6 py-3 hover:bg-[#c9ea00] hover:-translate-y-0.5 transition-all duration-200
Contains the label and a lucide-react ArrowRight icon w-5 h-5 strokeWidth={2.5}
SolidButton (white pill)

inline-block bg-white text-[#0A0A0A] font-bold rounded-lg px-8 py-3 hover:bg-[#E8E8E8] hover:-translate-y-0.5 transition-all duration-200
Section 1 — Hero (video background)
Wrapper: relative w-full overflow-hidden with inline style={{ aspectRatio: '640 / 820' }}
Background video (absolutely filling container, object-cover, autoplay muted loop playsInline): https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260419_064822_f120e48a-d545-45dd-a02d-facb07829888.mp4
Overlay gradient (absolute inset-0): linear-gradient(to bottom, rgba(17,17,17,0) 45%, rgba(17,17,17,0.45) 68%, rgba(17,17,17,0.9) 88%, rgba(17,17,17,1) 100%)
Foreground stack: relative z-10 h-full flex flex-col items-center text-center px-6 pt-12 pb-10
Top brand block (white):
"Design Rocket" — Instrument Serif, text-[28px] leading-[0.95] tracking-tight
"CERTIFICATES" — text-[13px] tracking-[0.22em] font-medium mt-1
Spacer mt-40, then "NOW AVAILABLE" — text-white text-[13px] tracking-[0.28em] font-semibold
flex-1 spacer pushing headline to bottom
Headline (Instrument Serif): text-white text-[58px] leading-[1.02] tracking-tight max-w-[560px]
Text: Learn to lead AI
and unlock new value
CTA pill (note: uses #D8F90A not the card lime):
mt-10 inline-flex items-center gap-3 bg-[#D8F90A] text-[#1E1E1E] font-semibold rounded-full px-8 py-4 hover:bg-[#c9ea00] hover:-translate-y-0.5 transition-all duration-200
Label "Enroll Now" + ArrowRight w-5 h-5 strokeWidth={2.5}
Section 2 — Intro copy + CTA
Container px-[78px] pb-8 pt-4, centered paragraph text-[18px] leading-[1.55]:
Built in collaboration with Microsoft, this certificate course gives you the toolkit to lead AI transformation across your organization. Learn to spot opportunities, launch AI pilots, and scale adoption grounded in responsible practices and proven frameworks.

flex justify-center pb-14 with <PrimaryButton label="Get Started" />
<Divider />
Section 3 — "Transform how you lead with AI"
Heading container px-9 pb-8, Instrument Serif text-center text-[46px] leading-[1.05] tracking-tight: Transform how you lead with AI
Video card px-[42px] pb-10:
Anchor: block overflow-hidden rounded-[14px] group
Video: autoplay/muted/loop/playsInline, w-full h-[370px] object-cover rounded-[14px] transition-transform duration-700 group-hover:scale-[1.03]
Src: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260419_065931_e3ca7b53-d32e-4ad5-81de-dc9d6fcfda6d.mp4
Steps list container px-[76px] pb-10, inner max-w-[489px] mx-auto, rendering four <Step>s:
Learn how to spot AI opportunities that boost productivity across roles and deliver visible results.
Build structures that support your team so AI efficiencies multiply across the organization.
Gain the skills to drive culture change like securing buy-in and reducing resistance.
Get frameworks to deliver AI pilots that prove impact fast and build credibility with measurable results.
flex justify-center pb-14 with <SolidButton label="Enroll Now" />
<Divider />
Section 4 — "Build your AI transformation roadmap"
Heading container pb-7 px-9, Instrument Serif text-center text-[46px] leading-[1.05] tracking-tight:
Build your AI
transformation roadmap
Video card px-[42px] pb-10 (same classes as Section 3) with src:
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260417_110451_9f82b157-dc92-4a9f-a341-c25594ec20e1.mp4
Paragraph container px-[78px] pb-8, centered text-[18px] leading-[1.55]:
You'll finish this hands-on course with a personal AI Transformation Plan: your playbook for pilot proposals, data strategy and governance. Use it to help secure buy-in, guide rollout, and scale adoption responsibly.

flex justify-center pb-14 with <SolidButton label="Learn More" />
Section 5 — Lime CTA card
Outer px-14 pb-12
Card: bg-[#D8F90A] rounded-[10px] px-8 py-12 text-center
Heading (Instrument Serif): text-[#1E1E1E] text-[52px] leading-[1.02] tracking-tight mb-3
Ready to lead AI
at work?
Subtext: text-[#1E1E1E] text-[18px] leading-[1.5] mb-8 px-4 — Enroll now and be the leader your team has been waiting for.
Centered <PrimaryButton label="Enroll Now" />
Footer
bg-[#080808] text-white pt-12 px-10 text-center border-t border-white/5
Wordmark link text-[30px] font-bold tracking-tight text-white hover:text-[#DCFF00] transition-colors → "Design Rocket" (wrapped in pb-8 flex justify-center)
Disclaimer paragraph text-[12px] text-[#83837D] leading-[1.5] pb-8:
Microsoft is a collaborator on this specific course. Microsoft does not endorse
Design Rocket generally or other Design Rocket products.

Divider: flex justify-center pb-8 with inner h-px w-24 bg-white/20
Social icon row flex justify-center gap-5 pb-5 — six circular buttons mapping [Facebook, Twitter, Instagram, Youtube, Linkedin, Music2] from lucide-react. Each:
w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1E1E1E] hover:border-white transition-colors, icon w-[18px] h-[18px]
Unsubscribe note text-[10px] text-[#83837D] pb-4 leading-[1.6]:
If you no longer want to receive updates on Design Rocket Certificates,
you can unsubscribe at any time by clicking "unsubscribe" below.

Link row text-[12px] pb-3 space-x-2: Support | Privacy | Terms | Unsubscribe (pipes text-[#8F8E88], links hover:underline)
Copyright anchor text-[12px] text-white/80 hover:text-white inline-block:
©2026 Design Rocket, 660 4th Street #443, San Francisco, CA 94107 USA
Trailing pb-10 spacer
Animation / interaction summary
All buttons: hover:-translate-y-0.5 transition-all duration-200 plus background-color change on hover.
Video cards: wrapper overflow-hidden rounded-[14px] group; video scales on hover via transition-transform duration-700 group-hover:scale-[1.03].
Footer wordmark and social icons: smooth color transitions via transition-colors.
Videos auto-play muted, loop, and playsInline for mobile autoplay.
Color palette
Page bg #050505, card bg #111111, footer bg #080808
Text #F2F2F2, secondary #E8E8E8, muted #83837D, divider #8F8E88
Lime primary #DCFF00, lime variant #D8F90A, lime hover #c9ea00
Dark text on lime #0A0A0A / #1E1E1E
Fonts
Display: Instrument Serif (all large headings, wordmark in hero)
Body / UI: Inter`

/**
 * Xero — 原始创建 prompt 归档
 */
const QUIETPRESS_PROMPT = `Build a full-screen hero section for a fictional vinyl record label called **"quietpress"** using React, TypeScript, Tailwind CSS, and Vite. The page is a single viewport-height hero with no scrolling. Use **lucide-react** for icons. No other UI libraries.

---

### Font

Load **Helvetica Regular** via this stylesheet in \`index.html\`:
\`\`\`
https://db.onlinewebfonts.com/c/a64ff11d2c24584c767f6257e880dc65?family=Helvetica+Regular
\`\`\`
Set the base font in CSS:
\`\`\`css
html { font-family: 'Helvetica Regular', Helvetica, Arial, sans-serif; }
\`\`\`

---

### Background: Boomerang Video Loop

Use this CloudFront video as the background:
\`\`\`
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260611_183632_c311af08-e4b7-458f-81e7-79847a49b3d3.mp4
\`\`\`

Create a \`BoomerangVideoBg\` component that:
1. Plays the video once (muted, playsInline, crossOrigin="anonymous"), capturing every frame into off-screen canvases (max width 960px, scaled proportionally).
2. Uses \`requestVideoFrameCallback\` when available, falling back to \`requestAnimationFrame\`.
3. When the video ends, hides the \`<video>\` element and renders a \`<canvas>\` that plays the captured frames in a ping-pong (boomerang) loop at 30fps -- forward then backward, endlessly.
4. The container is \`absolute inset-0 z-0\` with \`scale-[1.08] origin-center overflow-hidden\` to slightly zoom the video and hide edges.

---

### Liquid Glass CSS Effect

Create a reusable \`.liquid-glass\` CSS class:
\`\`\`css
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
\`\`\`

---

### Fade-Up Entrance Animation

\`\`\`css
@keyframes fade-up {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: none; }
}
.animate-fade-up {
  animation: fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) backwards;
}
.delay-1 { animation-delay: 0.1s; }
.delay-2 { animation-delay: 0.25s; }
.delay-3 { animation-delay: 0.4s; }
.delay-4 { animation-delay: 0.55s; }
.delay-5 { animation-delay: 0.75s; }
@media (prefers-reduced-motion: reduce) {
  .animate-fade-up { animation: none; }
}
\`\`\`

**CRITICAL:** Use \`animation-fill-mode: backwards\` (not \`both\` or \`forwards\`). Using \`both\` or \`forwards\` leaves a \`transform\` on the element after the animation ends, which breaks \`backdrop-filter\` on any child using \`.liquid-glass\`. \`backwards\` applies the "from" state before the animation starts but fully releases all properties when it finishes, so the glass blur works correctly.

---

### Header (absolute, top, z-20)

- **Logo (left):** A custom SVG icon (a quarter-circle shape with a centered dot, white fill, 20x20px) next to the text "quietpress" in \`text-base tracking-tight text-white\`.
  - SVG path: \`M 256 256 L 128 256 C 198.692 256 256 198.692 256 128 C 256 57.308 198.692 0 128 0 C 57.308 0 0 57.308 0 128 C 0 198.692 57.308 256 128 256 L 0 256 L 0 0 L 256 0 Z M 128 104 C 141.255 104 152 114.745 152 128 C 152 141.255 141.255 152 128 152 C 114.745 152 104 141.255 104 128 C 104 114.745 114.745 104 128 104 Z\` (viewBox \`0 0 256 256\`)

- **Nav links (center, hidden on mobile):** "Anthology", "Talents", "Sound diary", "Playback salon" -- \`text-sm text-white/90 hover:text-white\`, gap-8.

- **Right side:**
  - **Cart button:** White pill shape (\`rounded-xl bg-white p-1 pr-3 sm:pr-4\`). Contains a blue-700 icon square (\`h-7 w-7 rounded-lg bg-blue-700\`) with a \`ShoppingCart\` icon (size 14, strokeWidth 2), then text "Cart (0)" (hidden on mobile, showing just "(0)" on small screens). Has \`hover:scale-105 active:scale-95\`.
  - **Mobile menu toggle:** \`liquid-glass\` square button (\`h-9 w-9 rounded-xl\`), shows \`Menu\` or \`X\` icon (size 18). Hidden on \`md:\` and above.

- **Mobile nav dropdown** (shown when menu is open): \`liquid-glass mx-4 rounded-2xl p-2\`, each link is \`rounded-xl px-4 py-3 text-sm text-white/90 hover:bg-white/10\`.

---

### Hero Content (centered, z-10)

Padding: \`pt-28 sm:pt-36 md:pt-44\`, \`px-4 sm:px-6\`.

1. **Tag badge** (animate-fade-up delay-1): \`liquid-glass rounded-lg px-4 py-1.5 text-xs sm:text-sm text-white\` with inline style \`background: rgba(255, 255, 255, 0.16)\`. Text: "Press 04 . Vernal woods". Bottom margin \`mb-5 sm:mb-6\`.

2. **Headline** (animate-fade-up delay-2): \`max-w-3xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white\`. Two lines:
   \`\`\`
   records cut for the
   calm listener.
   \`\`\`

3. **Subtext** (animate-fade-up delay-3): \`mt-5 sm:mt-6 max-w-md text-sm sm:text-base md:text-lg leading-relaxed text-white/90\`. Text: "Drone, roots, and nature-captured sound on wax LPs. Every disc cut just once, snag it or miss."

4. **Two buttons** (animate-fade-up delay-4, \`mt-8\`, stack vertically on mobile, row on \`sm:\`):
   - **Primary:** \`rounded-xl bg-white px-7 py-2.5 text-sm text-gray-900 hover:scale-105 active:scale-95\`. Label: "Browse the shelves"
   - **Secondary:** \`liquid-glass rounded-xl px-7 py-2.5 text-sm text-white hover:scale-105 active:scale-95\`. Label: "Newest arrivals"

---

### Now Playing Widget (bottom-right, z-20)

Positioned \`absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-10\`. Max width \`270px\` on mobile, \`w-72\` on sm+. Has \`animate-fade-up delay-5\`.

- **Track card:** \`rounded-2xl bg-white p-2.5 pr-4 shadow-lg\`. Contains:
  - Blue icon square (\`h-11 w-11 rounded-xl bg-blue-700\`) with \`BarChart3\` icon (size 20, strokeWidth 2.5).
  - Track info: "Helia Marsh -- Fern Light" (truncated, \`text-sm text-gray-900\`).
  - Progress bar: \`h-1 rounded-full bg-gray-200\` with \`w-[30%] bg-blue-700\` fill.
  - Times: "0:33" and "-1:21" in \`text-[10px] text-gray-500\`.

- **Controls row** (gap-2):
  - "Prev" and "Next" buttons: \`flex-1 rounded-2xl bg-white py-2 text-sm text-gray-900 shadow-lg hover:scale-105 active:scale-95\`.
  - Heart button (center): \`h-10 w-10 rounded-full bg-white shadow-lg hover:scale-110 active:scale-95\`. Uses \`Heart\` icon (size 16) in \`text-blue-700\`, filled when liked (\`fill-blue-700\`). Toggles on click.

---

### Key Technical Notes
- The outer wrapper is \`relative h-screen w-full overflow-hidden\`.
- All interactive elements use \`transition-transform duration-200\`.
- The accent color throughout is Tailwind's \`blue-700\`.
- No Supabase or backend needed -- this is purely a static hero.`

/**
 * Quietpress — 原始创建 prompt 归档
 */
const XERO_PROMPT = `Build a **single-page React + TypeScript (Vite)** landing hero for a product called **"Xero"** that recreates the following section exactly. Use the **Inter** Google Font (weights 300, 400, 500, 600, 700, 800). Do not use Tailwind utility classes for the hero — write plain CSS in a global stylesheet. No purple/indigo branding outside the specified pink-magenta gradient arc.

## Layout & Structure

Render three top-level blocks centered on a black page (\`#0a0a0f\`), each constrained to \`max-width: 1600px\`, in this vertical order:

1. **\`<nav>\`** — sticky-style top bar (not actually sticky, just at top)
2. **\`<section class="hero-card">\`** — the rounded dark hero card with the animated icon pipeline
3. **\`<div class="brands">\`** — a row of 5 monochrome brand logos

The body uses \`display: flex; flex-direction: column; align-items: center; padding: 14px;\` and \`font-family: 'Inter', sans-serif;\`.

### CSS Variables (on \`:root\`)
\`\`\`
--bg: #0a0a0f;
--surface: #111118;
--text: #f0f0f5;
--text-muted: #8888a8;
--accent: #c8a0e0;
--accent-pink: #b04090;
--border: rgba(255, 255, 255, 0.08);
\`\`\`

## NAVBAR

- Grid layout: \`grid-template-columns: 1fr auto 1fr; padding: 12px 24px; margin-bottom: 14px;\`
- **Left**: \`<span class="nav-logo">Xero</span>\` — \`font-size: 1.05rem; font-weight: 700; letter-spacing: -0.01em;\`
- **Center**: \`<ul class="nav-links">\` with three \`<a>\` items: **Method**, **Pricing**, **Docs**. Color \`--text-muted\`, \`font-size: 0.85rem\`, gap 32px, hover transitions to \`--text\` over 0.2s.
- **Right**: \`<div class="nav-actions">\` containing two pill buttons:
  - \`.btn-login\` — \`rgba(255,255,255,0.06)\` bg, 1px border \`--border\`, white text, padding \`7px 18px\`, \`border-radius: 999px\`, \`font-size: 0.82rem\`, \`font-weight: 500\`. Hover: bg \`rgba(255,255,255,0.12)\`.
  - \`.btn-signup\` — solid white bg, black \`#0a0a0f\` text, same dimensions, \`font-weight: 600\`. Hover: \`opacity: 0.88\`.
- The \`.nav-menu\` wrapper uses \`display: contents\` on desktop so the \`ul\` and actions become direct grid children.

### Mobile (≤ 768px)
- Nav becomes flex with space-between.
- A \`.menu-toggle\` hamburger appears: 24×14 button with two 2px-tall white spans. When \`.active\`, span 1 rotates \`translateY(6px) rotate(45deg)\` and span 2 rotates \`translateY(-6px) rotate(-45deg)\` to form an X.
- \`.nav-menu.active\` slides in from \`right: -100%\` to \`right: 0\` over 0.4s \`cubic-bezier(0.4, 0, 0.2, 1)\` as a full-screen \`var(--bg)\` overlay with column-stacked links and full-width buttons.
- Toggling sets \`document.body.style.overflow = 'hidden'\`.

## HERO CARD

Outer \`.hero-card\` styles:
- \`width: 100%; max-width: 1600px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.07); overflow: hidden; position: relative; background: #0d0b12; padding: 80px 40px 70px; min-height: 640px;\`
- \`display: flex; flex-direction: column; align-items: center; text-align: center;\`

### \`::before\` Gradient Arc (the signature visual)
A radial gradient positioned at \`50% -70%\` with **many manually-tuned stops** producing a smooth dark→pink→white arc near the top:
\`\`\`
background:
  radial-gradient(circle at 50% -70%,
    transparent 60%,
    rgba(176,48,136,0.03) 63%,
    rgba(176,48,136,0.08) 65%,
    rgba(176,48,136,0.16) 67%,
    rgba(176,48,136,0.28) 69%,
    rgba(176,48,136,0.40) 71%,
    rgba(176,48,136,0.52) 73%,
    rgba(176,48,136,0.64) 75%,
    rgba(176,48,136,0.74) 77%,
    rgba(176,48,136,0.82) 79%,
    rgba(210,70,175,0.92) 85%,
    rgba(240,110,210,0.88) 87%,
    rgba(255,205,250,0.92) 91%,
    rgba(255,240,255,0.98) 93%,
    #ffffff 95%),
  radial-gradient(circle at 50% 35%, rgba(120,40,180,0.08) 0%, transparent 50%);
z-index: 0; pointer-events: none;
\`\`\`

### \`.hero-grid\` Overlay
A separate absolutely-positioned div with crosshatch grid:
\`\`\`
background-image:
  linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px);
background-size: 40px 40px;
mask-image: radial-gradient(circle at 50% -70%, transparent 60%, black 78%);
\`\`\`
This makes the grid only visible inside the arc area.

## ICON PIPELINE (the animated centerpiece)

Container \`.icon-pipeline\`: \`position: relative; display: flex; align-items: center; justify-content: center; max-width: 700px; margin-bottom: 52px; z-index: 1;\`

Children in this exact order:

1. **\`<svg class="beam-svg">\`** — absolutely-positioned over the whole pipeline (\`overflow: visible\`), containing:
   - A \`<filter id="glow">\` with \`feGaussianBlur stdDeviation="2"\` then \`feComposite ... operator="over"\`.
   - A \`<linearGradient id="beam-gradient" gradientUnits="userSpaceOnUse">\` with stops:
     - \`0%\` \`#b04090\` opacity 0
     - \`20%\` \`#b04090\` opacity 0.8
     - \`50%\` \`#fff\` opacity 1
     - \`80%\` \`#c8a0e0\` opacity 0.8
     - \`100%\` \`#c8a0e0\` opacity 0
   - Two \`<path>\` elements both stroked with \`url(#beam-gradient)\`:
     - Glow path: \`stroke-width="2"\`, \`filter="url(#glow)"\`, \`opacity: 0.6\`.
     - Core path: \`stroke-width="0.8"\`.

2. **Left node** \`.icon-node.node-light-right\` (id \`node-stack\`) — Lucide-style **layers** SVG (3 stacked diamonds): \`<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>\`.

3. **\`.pipeline-line\`** — \`width: 160px; height: 1px;\` linear gradient \`90deg, rgba(255,255,255,0.15), rgba(255,255,255,0.07)\`.

4. **Center wrapper** with \`position: relative;\` containing:
   - **\`.splash\`** — 100×100 absolutely centered, \`border-radius: 50%\`, \`background: radial-gradient(circle, rgba(255,77,200,0.6) 0%, transparent 70%)\`, initial \`opacity: 0; transform: scale(0.4); z-index: 2;\`
   - **\`.icon-node-center\`** (id \`node-x\`) — 64×64 round, \`background: #1e1e2c\`, neumorphic shadow (see below), containing the **Xero "X" logoipsum** SVG (\`viewBox="0 0 40 40"\`) — the multi-cut path provided in the source.

5. **\`.pipeline-line.right\`** — same 160×1 line, gradient reversed.

6. **Right node** \`.icon-node.node-light-left\` (id \`node-shield\`) — Lucide-style **shield-check** SVG: \`<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>\`.

### Side Node Styling
\`.icon-node\`: 46×46 round, \`background: #1a1a24\`, \`cursor: pointer\`, \`z-index: 3\`, with **neumorphic** shadow stack:
\`\`\`
box-shadow:
  6px 6px 12px rgba(0,0,0,0.4),
  -4px -4px 10px rgba(255,255,255,0.03),
  inset 1px 1px 1px rgba(255,255,255,0.05),
  inset 4px 4px 8px rgba(0,0,0,0.4);
\`\`\`
Plus an \`::after\` dotted outer ring at \`inset: -7px\` (\`border: 1px dotted #1a1a24\`).
Hover: \`translateY(-1px)\` and stronger shadows. Active: inset-only shadows.
Inner SVG: 20×20, stroke \`rgba(255,255,255,0.7)\`, \`stroke-width: 1.5\`, fill none, round caps.

### Center Node Styling
\`.icon-node-center\`: 64×64, \`background: #1e1e2c\`, similar but stronger neumorphic shadow:
\`\`\`
8px 8px 16px rgba(0,0,0,0.5),
-6px -6px 14px rgba(255,255,255,0.04),
inset 1px 1px 2px rgba(255,255,255,0.06),
inset 6px 6px 12px rgba(0,0,0,0.5);
\`\`\`
Inner Xero SVG: 28×28, \`fill: white\`.

### Side-Light Glows
- \`.node-light-right::before\` — half-circle radial glow on the right side: \`radial-gradient(circle at right, rgba(200,200,200,0.45) 0%, transparent 70%)\`, \`opacity: 0\` default, \`opacity: 1\` when \`.active\` (300ms transition).
- \`.node-light-left::before\` — same but on left, color \`rgba(200,100,255,0.5)\`.

### Splash Keyframe
\`\`\`
@keyframes splash-anim {
  0%   { transform: scale(0.4); opacity: 0.8; }
  40%  { opacity: 0.6; }
  100% { transform: scale(1.4); opacity: 0; }
}
\`\`\`
Triggered by adding \`.animate\` (0.8s ease-out forwards).

## BEAM ANIMATION (JavaScript / requestAnimationFrame)

Implement a state machine with four phases. On mount and on every window \`resize\`, recompute the SVG path:

\`\`\`
const pRect = pipeline.getBoundingClientRect();
const sRect = nodeStack.getBoundingClientRect();
const xRect = nodeX.getBoundingClientRect();
const shRect = nodeShield.getBoundingClientRect();
const startX = sRect.left + sRect.width/2 - pRect.left;
const startY = sRect.top  + sRect.height/2 - pRect.top;
// midX/midY from nodeX, endX/endY from nodeShield
const d = \`M \${startX},\${startY} L \${midX},\${midY} L \${endX},\${endY}\`;
\`\`\`
Set this \`d\` on **both** beam paths.

The gradient is animated by mutating \`x1\` / \`x2\` of \`#beam-gradient\` (in \`userSpaceOnUse\`) so the bright window slides along. Use \`halfWidth = 5\` (percentage units), \`center = percentage * 100\`:
\`\`\`
gradient.x1 = (center - 5) + '%'
gradient.x2 = (center + 5) + '%'
y1 = y2 = '0%'
\`\`\`

State machine in a \`requestAnimationFrame\` loop, tracking \`lastStateChange\` timestamp:

| State | Duration | Behavior |
|---|---|---|
| **\`p1\`** | 800 ms | \`percentage\` interpolates \`0 → 0.5\`. While \`p < 0.4\`, add \`.active\` to \`node-stack\`; remove after. At end: switch to \`splash\`, hide both beam paths (\`opacity: 0\`), add \`.animate\` to splash. |
| **\`splash\`** | 800 ms | Wait. After elapsed: switch to \`p2\`, remove \`.animate\`, restore \`opacity: 1\` on both beam paths. |
| **\`p2\`** | 800 ms | \`percentage\` interpolates \`0.5 → 1.0\`. While \`p > 0.6\`, add \`.active\` to \`node-shield\`. At end: remove \`.active\`, switch to \`idle\`. |
| **\`idle\`** | 1000 ms | Wait, then loop back to \`p1\`. |

Total cycle ≈ 3.4 seconds, infinite.

## HERO TEXT

\`.hero-content\` \`max-width: 620px; z-index: 1;\`

\`\`\`html
<h1 class="hero-heading">
  The simple way
  <strong>encryption your data</strong>
</h1>
<p class="hero-sub">
  Fully managed data encrypting service and annotation<br>
  platform for teams of all industries.
</p>
<a href="#" class="btn-cta">Get Started</a>
\`\`\`

- \`.hero-heading\`: \`font-size: clamp(2.4rem, 5.5vw, 4rem); font-weight: 300; line-height: 1.1; letter-spacing: -0.02em;\`
- \`.hero-heading strong\`: \`display: block; font-weight: 400; margin-top: 4px;\` with \`background: linear-gradient(to right, #ffffff, #a98597); -webkit-background-clip: text; -webkit-text-fill-color: transparent;\`
- \`.hero-sub\`: 0.9rem, \`rgba(255,255,255,0.4)\`, \`max-width: 440px\`, \`margin: 0 auto 36px\`.
- \`.btn-cta\`: white pill, black text, \`padding: 12px 32px; border-radius: 999px; font-weight: 600;\`. Hover: \`opacity: 0.9; translateY(-1px)\`.

## BRANDS ROW

\`.brands\`: flex row, \`gap: 64px; padding: 32px 24px 10px; flex-wrap: wrap; justify-content: center;\`

Five \`.brand-item\` blocks (each: flex, gap 10, color \`rgba(255,255,255,0.35)\`, font-size 1.1rem, font-weight 500, white-space nowrap, with a 22×22 SVG):

1. **Expedia** — \`<circle cx=12 cy=12 r=10 fill=current /><path fill="var(--bg)" d="M8 9h8v2H8zm0 4h6v2H8z"/>\` then text \`Expedia\`.
2. **asana** — three filled circles: \`(12,7,r=4)\`, \`(5,16,r=3.5)\`, \`(19,16,r=3.5)\`, text \`asana\`.
3. **zenefits** — three stroked horizontal polylines (lengths 16/8/16) at y=8/12/16, text \`zenefits\`.
4. **HubSpot** — small filled circle \`(15.5,8.5,r=2.5)\`, stroked circle \`(8.5,8.5,r=2)\`, paths connecting them; text \`HubSp<span class="hubspot-dot"></span>t\` where \`.hubspot-dot\` is a 6×6 round superscript dot.
5. **loom** — circle \`(12,12,r=9)\` plus vertical/horizontal/diagonal stroke lines forming a globe-with-X, text \`loom\`.

## Responsive Breakpoints

- \`≤ 860px\`: pipeline \`gap: 0; margin-bottom: 40px;\` \`.pipeline-line { width: 80px }\`.
- \`≤ 768px\`: enable mobile hamburger menu, \`.icon-node\` shrinks to 38×38, \`.icon-node-center\` to 52×52, \`.hero-card { padding: 60px 20px 60px; min-height: auto }\`, \`.brands { gap: 32px }\`.
- \`≤ 480px\`: \`.hero-card { border-radius: 16px }\`, \`.brands { gap: 24px }\`.

## Z-Index Stack (critical for splash/beam layering)

- \`0\` — gradient arc + grid overlay
- \`1\` — pipeline container, hero text
- \`2\` — beam SVG, splash
- \`3\` — all icon nodes
- \`4\` — node side-light glows
- \`1000-1001\` — mobile nav overlay and toggle

Implement all of the above exactly. Use \`useRef\` for the pipeline, the three nodes, both beam paths, the gradient, and the splash. Use one \`useEffect\` to set up the resize listener and the \`requestAnimationFrame\` loop, and clean both up on unmount.`

/**
 * Duolingo — 原始创建 prompt 归档
 */
const DUOLINGO_PROMPT = `Fonts
Primary font: 'Nunito' from Google Fonts (weights: 400, 500, 600, 700, 800, 900)
Display/heading font: 'Feather Bold' from https://db.onlinewebfonts.com/c/14936bb7a4b6575fd2eee80a3ab52cc2?family=Feather+Bold
Font stack fallback: 'Nunito', 'DIN Round Pro', -apple-system, BlinkMacSystemFont, sans-serif
Color Variables (CSS custom properties)

--green: rgb(88, 204, 2)
--green-hover: rgb(75, 178, 0)
--green-shadow: #61B800
--dark-blue: rgb(16, 15, 62)
--blue: rgb(28, 176, 246)
--gray-text: rgb(75, 75, 75)
--gray-light: rgb(119, 119, 119)
--border-color: rgb(229, 229, 229)
--nav-text: rgb(175, 175, 175)
--footer-green: #4EC604
--red: #FF4B4B
--orange: #FF9600
--golden: #FFC800
Structure & Layout
Fixed Navbar (64px height, white background, bottom border)
Left side: Duolingo logo image (https://d35aaqx5ub95lt.cloudfront.net/images/splash/f92d5f2f7d56636846861c458c0d0b6c.svg, 140x33px), followed by a 1px vertical divider (24px tall), then "STYLE GUIDE" label (11px, uppercase, letter-spacing 1.5px, gray)
Right side: Horizontal nav links - "Colors", "Type", "Buttons", "Cards", "Components" (13px, bold, uppercase, 0.5px letter-spacing, gray, with green hover/active states and subtle green background on hover)
Max-width: 1440px, centered
Hero Section (centered, green-to-white gradient background)
Headline: "duolingo design" in Feather Bold font, 52px, green color (#58CC02), lowercase
Description: "A comprehensive visual reference for the Duolingo design system covering colors, typography, button variants, cards, and UI components." -- 17px, gray-light color, max-width 520px, 1.5 line-height
Two buttons below: Primary "GET STARTED" button (green, white text, 12px border-radius, 4px green box-shadow for 3D effect, uppercase bold) and Secondary "I ALREADY HAVE AN ACCOUNT" button (transparent with 2px gray border, blue text, 4px gray box-shadow for 3D effect)
Both buttons: 48px height, 24px horizontal padding, 15px font-size, 700 weight, uppercase
Buttons have active state: box-shadow removed, translateY(4px)
Padding: 56px top, 40px sides, 40px bottom
Main Grid (2-column grid, no gap, max-width 1440px)
Each panel has 36px vertical and 40px horizontal padding, bottom border and right border (border-color). Even panels have no right border.

Each panel has a section label: 11px, 800 weight, uppercase, 2px letter-spacing, gray (nav-text), with a 1px line extending to the right via ::after pseudo-element.

Panels in order (left-to-right, top-to-bottom):

Panel 1: Color Palette (light)
Grid of 12 color swatches, grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)), 12px gap. Each swatch:

Square (aspect-ratio: 1), 12px border-radius, 1px border rgba(0,0,0,0.06)
Hover: scale(1.05) with box-shadow 0 8px 24px rgba(0,0,0,0.12)
Below swatch: name (12px, bold, gray-text) and hex value (10px, gray-light, semi-bold)
Colors in order:

Green -- rgb(88, 204, 2) -- #58CC02
Green Hover -- rgb(75, 178, 0) -- #4BB200
Blue -- rgb(28, 176, 246) -- #1CB0F6
Dark Blue -- rgb(16, 15, 62) -- #100F3E
Red -- #FF4B4B
Orange -- #FF9600
Golden -- #FFC800
Footer Green -- #4EC604
Gray Text -- rgb(75, 75, 75) -- #4B4B4B
Gray Light -- rgb(119, 119, 119) -- #777777
Nav Text -- rgb(175, 175, 175) -- #AFAFAF
Border -- rgb(229, 229, 229) -- #E5E5E5
Panel 2: Typography (light)
Vertical stack with 20px gap. Each row is a flex row (baseline-aligned, 20px gap) with a meta column (80px wide, right-aligned) showing size in blue (11px bold) and weight label below (10px, nav-text color), then the sample text.

Rows:

48px / Feather Bold -- "Display" -- green color, Feather Bold font
32px / Bold 700 -- "Heading One" -- gray-text color
28px / Feather Bold -- "heading two" (lowercase) -- green color, Feather Bold font
18px / Medium 500 -- "Body text for paragraphs and descriptions with comfortable reading line-height." -- gray-light color, 1.6 line-height
14px / Bold 700 -- "CAPTION LABEL" -- uppercase, nav-text color, 0.5px letter-spacing
12px / Semi 600 -- "Small utility text for metadata and hints" -- gray-light color
Panel 3: Button Variants (light)
Vertical stack with 16px gap. Each row has an 80px label (10px, bold, uppercase, 1px letter-spacing, nav-text) then buttons with 12px gap, flex-wrap.

Rows:

"Primary" -- 3 buttons: "GET STARTED" (green bg, white text, 4px green shadow), "SMALL" (same but 36px height, 13px font, 16px padding, 10px radius, 3px shadow), "DISABLED" (same as primary but opacity 0.45, pointer-events none)
"Secondary" -- 3 buttons: "LEARN MORE" (transparent, 2px #CFCFCF border, blue text, 4px #CFCFCF shadow), "SMALL" (same sizing as small primary), "DISABLED" (opacity 0.45)
"Danger" -- 2 buttons: "DELETE" (#FF4B4B bg, white text, 4px #CC3C3C shadow), "REMOVE" (small variant)
"Ghost" -- 1 button: "VIEW ALL" (no bg/border/shadow, green text, green bg on hover at 0.08 opacity)
Panel 4: Dark Theme Buttons (dark-blue background)
Section label and ::after line use white at 35% and 10% opacity respectively.

Two rows:

"GET STARTED" primary + "TRY 1 WEEK FREE" (white bg, dark-blue text, 4px #88879F shadow, hover bg #c8f040)
Small variants of both
Panel 5: Cards (light)
2-column grid, 16px gap. Each card: white bg, 2px border (border-color), 16px border-radius. Hover: translateY(-4px), box-shadow 0 12px 32px rgba(0,0,0,0.08).

Card 1:

Image: https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop (120px height, cover)
Tag: "NEW" (green text, green bg at 10% opacity, 11px, 800 weight, uppercase, 6px radius, 3px/8px padding)
Title: "Spanish for Beginners" (16px, bold, gray-text)
Description: "Start your language journey with interactive lessons designed to build fluency." (13px, gray-light, 1.5 line-height)
Footer (12px top border, 12px/16px padding): left "12 UNITS" (12px bold uppercase nav-text), right "START" (12px bold uppercase blue, hover opacity 0.7)
Card 2:

Image: https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop
Tag: "POPULAR" (blue text, blue bg at 10% opacity)
Title: "French Conversations"
Description: "Practice real-world dialogue and improve pronunciation with native speakers."
Footer: "8 UNITS" / "CONTINUE"
Panel 6: Dark Theme Cards (dark-blue background)
2-column grid, same structure but no images. Cards have bg rgba(255,255,255,0.06), border rgba(255,255,255,0.08). Titles are white, descriptions are white at 50% opacity, footer border is white at 8% opacity, footer text is white at 30% opacity.

Card 1:

Tag: "SUPER" (golden #FFC800 text, golden bg at 15% opacity)
Title: "Unlimited Hearts"
Desc: "Keep learning without interruption with Super Duolingo benefits."
Footer: "PREMIUM" / "UPGRADE"
Card 2:

Tag: "PRO" (orange #FF9600 text, orange bg at 15% opacity)
Title: "Mastery Quizzes"
Desc: "Challenge yourself with advanced assessments to test your skill level."
Footer: "ADVANCED" / "TRY NOW"
Panel 7: Components (light)
Vertical stack with 20px gap. Each group has a label (10px bold uppercase, 1px letter-spacing, nav-text).

Badges: Flex row, 8px gap. Pill-shaped badges (4px/10px padding, 20px radius, 12px bold uppercase):

"COMPLETED" (green text, green bg 12%)
"IN PROGRESS" (blue text, blue bg 12%)
"FAILED" (red text, red bg 12%)
"STREAK" (orange text, orange bg 12%)
"PREMIUM" (golden-brown #b8920f text, golden bg 15%)
Input + Button: Flex row, 12px gap. Input (flex:1, 48px height, 16px padding, 2px border border-color, 12px radius, 15px font, 600 weight, focus border turns blue, placeholder is nav-text color 500 weight) + Primary "SUBSCRIBE" button.

Toggle: Flex row with two toggle switches. Each toggle is 48x28px. Track is border-color bg, 14px radius. Thumb is 22x22px white circle, 3px from edges, with 1px 3px rgba(0,0,0,0.15) shadow. Checked state: track turns green, thumb translates 20px right. Labels "Sound effects" and "Animations" (14px, 600 weight). First toggle is checked by default.

Progress: 3 progress bars in a column, 10px gap. Each row: flex, 12px gap, bar (flex:1, 12px height, border-color bg, 6px radius, overflow hidden), fill (6px radius, 0.6s ease width transition), value (12px bold, 32px wide, right-aligned).

85% green fill
60% blue fill
35% orange fill
Tooltips & Streak: Flex row, 16px gap, center-aligned.

Tooltip trigger: "Hover me" (13px, bold, green text, green bg 8%, 8px/16px padding, 8px radius). On hover shows tooltip bubble above (dark-blue bg, white 12px 600-weight text, 6px/12px padding, 8px radius, 5px triangle arrow pointing down via ::after border trick).
Streak counter: Inline-flex, 6px gap, 6px/14px padding, orange bg 10%, 20px radius. Fire emoji (18px) + "42" (16px, 800 weight, orange).
Panel 8: Dark Theme Components (dark-blue background)
Labels use white at 30% opacity.

Language Pills: Flex row, 8px gap. Each pill: inline-flex, 6px gap, 6px/12px padding, 2px border, 12px radius, cursor pointer, hover turns border green with subtle green bg.

"Spanish" (ACTIVE -- green border, green bg 8%, white text) with flag https://d35aaqx5ub95lt.cloudfront.net/vendor/59a90a2cedd48b751a8fd22014768fd7.svg
"French" (inactive -- white border 12%, white text 70%) with flag https://d35aaqx5ub95lt.cloudfront.net/vendor/482fda142ee4abd728ebf4ccce5d3307.svg
"German" with flag https://d35aaqx5ub95lt.cloudfront.net/vendor/c71db846ffab7e0a74bc6971e34ad82e.svg
"Japanese" with flag https://d35aaqx5ub95lt.cloudfront.net/vendor/edea4fa18ff3e7d8c0282de3f102aaed.svg
Flag images: 24x18px, object-fit contain. Pill text: 13px, bold.
Avatar Group: Flex row with overlapping circular avatars (36px, 50% radius, 2px white border, -8px margin-left except first). Images:

https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop
https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop
https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop
Count badge "+5" (same 36px circle, #f0f0f0 bg, 11px 800 weight, gray-light)
Text next to group: "8 learners active" (13px, 600 weight, white 50% opacity)
Progress (Dark): 2 bars, track bg is white 8%, values are white 60%:

72% golden fill
45% green fill
Badges (Dark):

"MASTERED" (green bg 15%, #7ADB2E text)
"REVIEW" (blue bg 15%, #4DC4F8 text)
"CROWN" (golden bg 15%, #FFC800 text)
Responsive Breakpoints
900px and below:

Grid becomes single column, no right borders
Hero h1: 36px
Nav links hidden
Cards grid becomes single column
Hero buttons stack vertically, max-width 280px
600px and below:

Hero padding: 40px 20px 32px
Hero h1: 28px
Panel padding: 28px 20px
Color grid: 3 columns
Type meta column: hidden
Display type: 32px
Button labels: hidden
Input row: column direction`

/**
 * Measured — 原始创建 prompt 归档
 */
const MEASURED_PROMPT = `Build a single-page hero section for a product called "Measured" — a health/wellness wearable device landing page. The page is fullscreen (100vh), dark/moody aesthetic with layered imagery, a cursor-following spotlight reveal effect, and a frosted-glass navigation. Use React + Vite + Tailwind CSS + TypeScript.

---

## Fonts

1. **Google Fonts — Inter** (weights 300-700): Used as the global default font on all elements (\`* { font-family: 'Inter', sans-serif; }\`)
2. **Google Fonts — Instrument Serif** (regular + italic): Used for the hero heading "Measured". Load via \`<link>\` in index.html: \`https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap\`
3. **Helvetica Neue Roman** (self-hosted woff2/woff in \`/public/fonts/\`): Applied via a \`.font-helvetica-neue\` class on the hero section wrapper. Declare with \`@font-face\`.

---

## Asset URLs (exact)

- **Background Image (BG_IMAGE_1):** \`https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260713_140344_79e1296a-86d7-43fd-9b5f-63ffe560f291.png&w=1280&q=85\`
- **Front Video (FRONT_VIDEO):** \`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260713_162101_0d7498c5-29bb-47bf-a99f-2773c0a880a9.mp4\`
- **Overlay Image (OVERLAY_IMAGE):** \`https://soft-zoom-63098134.figma.site/_assets/v11/3f10f1876e118f72a396e05a6c2d099569478272.png\`

---

## Page Structure & Layers (z-index order)

### Navigation (z-50, fixed)
- **Logo (top-left):** Custom SVG geometric logo (white, 28x28), resembling angular interlocking shapes. The exact SVG path: \`M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 96 95 L 63.5 128 L 64 128 L 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 64 L 64 0 L 192 0 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z\` (viewBox 0 0 256 256, fill white)
- **Desktop center pill nav (hidden on mobile):** Fixed horizontally centered, contains buttons: "Device", "Real Stories", "Science", "Plans", "Reach Us". Uses \`.liquid-glass\` styling (frosted glass). Buttons are \`text-white/70\`, \`text-sm\`, \`font-medium\`, rounded-full, hover to white.
- **Desktop CTA (top-right, hidden on mobile):** \`.liquid-glass\` pill button with a small green dot (w-2 h-2 rounded-full bg-green-400) and text "Reserve Yours", white text-sm font-medium.
- **Mobile hamburger (top-right, hidden md+):** \`.liquid-glass\` rounded-full pill, contains two white lines (w-5 h-[1.5px] and w-3.5 h-[1.5px]).

### Mobile Fullscreen Menu (z-55)
- Background: \`#0a0a0a\` solid
- Close button: top-right, \`.liquid-glass\` rounded-full with X made of two rotated white lines (+45deg, -45deg)
- Nav items stacked vertically, centered, \`text-3xl sm:text-4xl\`, white/90, font-medium
- "Reserve Yours" CTA at bottom with green dot, \`.liquid-glass\` pill
- Staggered entry animations: each item slides up from 24px with opacity 0->1, delays incremented by 60ms starting at 100ms. Uses \`cubic-bezier(0.77, 0, 0.18, 1)\` easing. Close button rotates in from -90deg with scale 0.8.

### Hero Section (100vh, overflow hidden)

**Layer 1 — Grid Background (z-0, opacity 0.1):**
- SVG with a repeating pattern of 48px cells. Pattern draws an L-shaped path (\`M 48 0 L 0 0 0 48\`), stroke \`#64748b\`, strokeWidth 0.6, no fill.
- The grid subtly parallax-shifts based on cursor position (offset calculated as cursor position relative to section center * 16, eased at 0.06 factor).

**Layer 2 — Background Image (z-10):**
- \`BG_IMAGE_1\` displayed as \`background-image\`, \`bg-center bg-cover bg-no-repeat\`, absolutely positioned inset-0.

**Layer 3 — Hero Text (z-20):**
- The word "Measured" in huge uppercase text
- Font: \`'Instrument Serif', serif\`
- Sizes: \`text-[4.5rem]\` default, \`xs:text-[5.5rem]\`, \`sm:text-[10rem]\`, \`md:text-[13rem]\`, \`lg:text-[16rem]\`
- \`leading-[0.9]\`, white, centered, positioned \`top-20 sm:top-28 md:top-32\`

**Layer 4 — Overlay Image (z-25):**
- \`OVERLAY_IMAGE\` as an \`<img>\` tag, absolutely positioned inset-0, \`w-full h-full object-cover\`, pointer-events-none. This is a semi-transparent PNG that sits on top of the background to add depth/atmosphere.

**Layer 5 — Spotlight Reveal (z-30):**
- A cursor-following radial reveal mask that shows a video underneath only where the cursor hovers.
- **Radius:** 260px
- **Mask gradient stops:** center full white (0-40%), then feathers out: 60% at 0.75 alpha, 75% at 0.4, 88% at 0.12, 100% at 0 (fully transparent).
- **Implementation:** A hidden \`<canvas>\` draws the radial gradient at the smoothed cursor position. The canvas is exported as a dataURL and applied as a CSS mask (\`-webkit-mask-image\` / \`mask-image\`) on a div that contains the video.
- **Cursor smoothing:** Uses \`requestAnimationFrame\` loop with lerp factor 0.1 (\`smooth += (target - smooth) * 0.1\`).
- **Video placement:** The video (\`FRONT_VIDEO\`) is clipped to the bottom 60% of the viewport using \`clipPath: 'inset(40% 0 0 0)'\`. It autoplays, loops, is muted, and uses playsInline.

---

## Liquid Glass CSS Effect (\`.liquid-glass\`)

\`\`\`css
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
\`\`\`

This creates a near-invisible frosted glass background with a subtle gradient border using the mask-composite trick (border-only gradient).

---

## Key Behaviors

1. **Body overflow locks** when mobile menu is open
2. **No scrolling** — single viewport hero only
3. **Background is white** on the root container (\`bg-white\`), but the hero section fills the entire viewport with dark imagery
4. **The reveal effect only shows video in the bottom 60%** of the screen (the top 40% is masked out via clipPath), so hovering over the top portion shows nothing extra — just the base layers

---

## Summary of the Visual Effect

The user sees a dark, atmospheric product shot (wearable device on a wrist) with "Measured" in giant serif text overlaid. A semi-transparent overlay adds haze/depth. As the user moves their cursor, a soft spotlight circle reveals an underlying looping video (showing the product in motion) — but only in the lower portion of the screen. The grid background subtly shifts with parallax. Navigation uses an elegant frosted-glass pill aesthetic.`

/**
 * Tiny Trails — 原始创建 prompt 归档
 */
const TINY_TRAILS_PROMPT = `Build a full-screen animated 404 error page for a children's brand called "TinyTrails" using React, Tailwind CSS, and Lucide React icons. The page must be a single \`App.tsx\` component. Use the Inter font (weights 400–900) loaded from Google Fonts. The page is a single viewport-height screen with no scrolling.

---

**LAYOUT & BACKGROUND:**

- The full page is \`w-full h-screen overflow-hidden flex flex-col\` with a CSS linear gradient background from \`#FF8233\` (top) to \`#FDAC55\` (bottom).

---

**BACKGROUND "404" TEXT EFFECT:**

- Behind everything, centered in the viewport, render the text "404" in white (\`#FFFFFF\`), \`font-black\`, \`leading-none\`, \`tracking-tighter\`, \`whitespace-nowrap\`.
- Font size: \`clamp(200px, 48vw, 800px)\`.
- The text is scaled horizontally by \`1.15\` and vertically dynamically: on mount (and resize), measure the text element's \`offsetHeight\`, divide \`window.innerHeight\` by that height, and multiply by \`1.4\` to get the Y scale. Apply via \`transform: scale(1.15, \${scaleY * 1.4})\`.
- Over the "404" text (same centered container), render a white (\`#FFFFFF\`) oval: a \`div\` with \`rounded-full\`, height \`h-[22vh] sm:h-[26vh] md:h-[50vh]\`, width \`clamp(120px, 20vw, 400px)\`, scaled vertically by the same dynamic \`scaleY\` value with \`transformOrigin: center\`.
- The entire background layer (text + oval) is wrapped in a container with \`opacity: 0.8\` and a CSS mask that fades to transparent at the bottom: \`mask-image: linear-gradient(to bottom, black 40%, transparent 95%)\` (with \`-webkit-mask-image\` for Safari).
- This layer is \`absolute inset-0 pointer-events-none\`.

---

**NAVIGATION BAR:**

- \`relative z-20\`, flex row, items centered, \`justify-between\`, padding \`px-4 sm:px-6 md:px-12 py-4 sm:py-5\`.
- **Logo (left):** A 2x2 grid of white circles (\`grid-cols-2 gap-0.5\`), each circle \`w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full\`. Next to it, the text "TinyTrails" in \`text-white font-bold text-lg sm:text-xl ml-1\`.
- **Desktop nav links (center/right):** Hidden on mobile (\`hidden md:flex\`), a row of pill buttons with \`gap-1\`. Items: "About Us", "Programs", "Reviews", "FAQ", "Contacts". Each is an \`<a>\` with \`px-4 py-1.5 text-sm font-medium rounded-full bg-white\` and text color \`#F16524\`, with \`hover:opacity-90 transition-colors\`.
- **Menu button (right):** A pill button with \`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-white\` and background color \`#F16524\`. Contains a Lucide \`Menu\` icon (\`w-4 h-4\`) and the text "Menu" (\`text-sm font-medium hidden sm:inline\`). Has \`hover:opacity-90 transition-colors\`.

---

**MOBILE MENU OVERLAY:**

- Fixed fullscreen (\`fixed inset-0 z-50\`), with visibility toggled. Transition: \`duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]\`.
- **Backdrop:** \`absolute inset-0 bg-black/40 backdrop-blur-sm\`, fades in/out with \`opacity\` transition over 500ms. Clicking it closes the menu.
- **Panel:** Slides in from right. \`absolute top-0 right-0 h-full w-full sm:w-[380px]\`, translates between \`translate-x-full\` (closed) and \`translate-x-0\` (open). Background: \`linear-gradient(135deg, #FF6B1A 0%, #FF9642 100%)\`.
  - **Panel header:** Same logo as nav (2x2 white dots + "TinyTrails" bold white text). Close button: \`w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white/30\` with Lucide \`X\` icon (\`w-5 h-5\`).
  - **Menu items:** Staggered animation. Each item is \`px-6 py-4 text-lg font-semibold text-white rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300\`. When open: \`opacity-100 translate-y-0\`; when closed: \`opacity-0 translate-y-4\`. Transition delay per item: \`150 + i * 60\`ms when opening, \`0ms\` when closing.
  - **Bottom CTA:** Absolutely positioned at bottom (\`absolute bottom-0 left-0 right-0 p-6\`). A pill link: \`w-full py-4 rounded-full bg-white font-semibold text-base\` with text color \`#F16524\`, \`hover:scale-[1.02]\`. Contains Lucide \`ArrowLeft\` icon + "Back to Home". Fades in with 450ms delay when opening.
- Body scroll is locked (\`overflow: hidden\`) when menu is open.

---

**CENTER VIDEO:**

- An absolutely positioned container (\`absolute inset-0 flex items-center justify-center pointer-events-none\`) with \`margin-top: calc(-6vh - 40px)\` to shift it upward.
- Inside, a responsive container: \`w-[120vw] h-[85vh] sm:w-[70vw] sm:h-[70vh] md:w-[62vw] md:h-[78vh]\`.
- Contains a \`<video>\` element with \`autoPlay loop muted playsInline\`, class \`w-full h-full object-contain pointer-events-none mix-blend-darken\`.
- **Video source URL:** \`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260713_234424_b1332b69-2e69-4302-8dbc-40f86846afbd.mp4\`

---

**BOTTOM CONTENT:**

- \`relative z-30 mt-auto pb-8 sm:pb-16 flex flex-col items-center text-center px-4\`.
- Heading: "Oops, something went wrong!" in \`text-white text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4\`.
- Button/link: An \`<a href="/">\` pill with \`inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-white font-semibold text-sm sm:text-base\` and background \`#F16524\`. Has \`hover:scale-105 hover:shadow-lg transition-all\`. Contains Lucide \`ArrowLeft\` icon (\`w-4 h-4 sm:w-5 sm:h-5\`) + "Back to Home".

---

**GLOBAL CSS (\`index.css\`):**

\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
\`\`\`

---

**HTML HEAD:**

- Load Inter font from Google Fonts: \`https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap\` with preconnect to \`fonts.googleapis.com\` and \`fonts.gstatic.com\`.
- Title: "404 - Page Not Found".

---

**KEY COLOR PALETTE:**
- Page gradient: \`#FF8233\` to \`#FDAC55\`
- Accent/buttons: \`#F16524\`
- Text & shapes: \`#FFFFFF\`
- Menu gradient: \`#FF6B1A\` to \`#FF9642\`
- Menu overlay backdrop: \`black/40\` with \`backdrop-blur-sm\`
- Menu item backgrounds: \`white/10\`, \`white/20\` on hover

---

**DEPENDENCIES:** React, Tailwind CSS, Lucide React (\`ArrowLeft\`, \`Menu\`, \`X\` icons). Vite build system. No other libraries.`

/**
 * Axon — 原始创建 prompt 归档
 */
const AXON_PROMPT = `Build a single-page hero landing page for a product called "Axon" — a platform that deploys digital workers for mundane workflows. The page is a full-viewport hero section with a looping background video and overlaid content.

**Fonts:**
- Load Google Fonts: \`Instrument Serif\` (regular + italic) and \`Inter\` (weights 400, 500, 600).
- Body font: \`Inter\`, color \`#1B133C\`.
- Heading font: \`Instrument Serif\`.

**Page structure (single full-screen section, 100vh):**

1. **Navigation bar** — centered at the top with \`pt-4 md:pt-6\` padding. A horizontal nav pill with \`bg-white/70 backdrop-blur-md rounded-xl px-4 md:px-6 py-3 shadow-sm\`. Contains:
   - A custom SVG logo (two geometric arrow/chevron shapes in \`#1B133C\`, 24x24px). The SVG paths are: \`M 256 256 L 128 256 L 0 128 L 128 128 Z\` and \`M 256 128 L 128 128 L 0 0 L 128 0 Z\` inside a 256x256 viewBox.
   - Navigation links (hidden on mobile, shown \`sm:\` and up): "Features", "Plans", "Security", "About" — styled as \`text-sm font-medium text-[#1B133C]/80\` with hover transition to full opacity.

2. **Hero content** — centered below nav with \`mt-8 md:mt-16\`, stacked vertically:
   - **Badge**: \`mb-6\`, inline-flex pill with \`rounded-xl border border-[#1B133C]/10 bg-white/70 backdrop-blur-sm px-4 py-2 text-sm font-medium\`. Contains an orange square icon (\`bg-orange-500 rounded w-5 h-5\`) with a bold white "Y" letter, followed by text "Funded by Y Combinator".
   - **Heading**: \`font-['Instrument_Serif'] text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-[#1B133C] max-w-4xl\`. Two lines:
     - "Deploy digital workers"
     - "for mundane workflows"
   - **Subtitle**: \`mt-5 sm:mt-6 max-w-3xl text-xs sm:text-sm md:text-base leading-relaxed text-[#1B133C]/70\`. Text: "Eliminate your tedious browser work and 10x your team's capacity. Put intelligent agents on every routine process so you grow faster and deliver more for clients — effortlessly."
   - **CTA button**: \`mt-7 sm:mt-8\`, styled as \`rounded-xl bg-[#FEFEFE] px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-semibold text-[#1B133C] shadow-[0px_4px_12px_rgba(0,0,0,0.15)]\` with hover shadow \`shadow-[0px_6px_16px_rgba(0,0,0,0.2)]\` and \`transition-all duration-300\`. Text: "Get Early Access".

3. **Background video** — absolutely positioned (\`absolute inset-0 z-0\`) behind all content. The video element uses:
   - URL: \`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260714_113715_c7e0daa0-8bdd-4486-a2da-040901f8f0ea.mp4\`
   - Attributes: \`autoPlay muted loop playsInline\`
   - Styling: \`w-full h-[130%] object-cover object-top\` — full width, 130% height so it overflows vertically, with the focal point anchored to the top.

**CSS reset in index.css:**
\`\`\`
body { font-family: 'Inter', sans-serif; color: #1B133C; }
\`\`\`

**Key details:**
- The hero section uses \`relative h-screen w-full overflow-hidden flex flex-col\`.
- All content elements are \`relative z-10\` to sit above the video (\`z-0\`).
- No other sections or pages — just this single hero.
- Color palette: deep navy \`#1B133C\` for text, white/translucent for glass elements, orange-500 for the Y Combinator badge accent.
- Page title: "Axon — Digital Workers for Mundane Workflows"`

export const showcases: Showcase[] = [
  {
    slug: 'lithos',
    title: 'Lithos',
    brand: 'Lithos',
    tagline: {
      zh: '地层承载时间的故事',
      en: 'Layers hold tales of time',
    },
    description: {
      zh: '地质学品牌暗色 hero。光标追踪聚光灯通过柔和圆形遮罩，在底图之上揭示第二张图片，配合 Ken Burns 缓慢缩出与 Playfair Display 斜体标题。',
      en: 'Dark geology hero with a cursor-following spotlight that reveals a second image through a soft circular mask. Ken Burns zoom-out, staggered blur-rise heading, Playfair Display italic wordmark.',
    },
    category: { zh: '地质学 · Hero', en: 'Geology · Hero' },
    accent: '#e8702a',
    field: 'radial-gradient(120% 100% at 20% 10%, #2a2118 0%, #120e0a 45%, #050403 100%)',
    titleFont: 'font-playfair italic',
    component: LithosHero,
    prompt: LITHOS_PROMPT,
  },
  {
    slug: 'jack',
    title: 'Jack',
    brand: 'Jack — 3D Creator',
    tagline: {
      zh: '3D 创作者，打造惊艳难忘的项目',
      en: 'A 3D creator driven by crafting striking and unforgettable projects',
    },
    description: {
      zh: '3D 创作者作品集。暗色主题 + Kanit 字体 + 渐变标题 + 磁性悬浮人像 + 滚动驱动双行跑马灯 + 逐字滚动揭示 + sticky-stacking 项目卡片堆叠效果。5 个 section 完整呈现 Hero、作品流、关于、服务、项目。',
      en: '3D Creator portfolio. Dark theme #0C0C0C + Kanit font + gradient heading + magnetic portrait + scroll-driven dual-row marquee + character-by-character scroll reveal + sticky-stacking project cards. 5 sections: Hero, Marquee, About, Services, Projects.',
    },
    category: { zh: '作品集 · 3D 创作者', en: 'Portfolio · 3D Creator' },
    accent: '#B600A8',
    field: 'linear-gradient(135deg, #0C0C0C 0%, #1a0a1a 50%, #0C0C0C 100%)',
    titleFont: 'font-kanit font-black',
    component: JackPortfolio,
    prompt: JACK_PROMPT,
  },
  {
    slug: 'asme',
    title: 'Asme',
    brand: 'Asme',
    tagline: { zh: '为好奇者而生', en: 'Built for the curious' },
    description: {
      zh: '全屏循环背景视频 + 液态玻璃 UI + 暗色电影质感。自定义 rAF 淡入淡出循环系统、邮箱订阅栏、社交图标底栏。',
      en: 'Full-screen looping background video + liquid glass UI + dark cinematic aesthetic. Custom rAF fade system, email subscribe bar, social icons footer.',
    },
    category: { zh: '科技 · Hero', en: 'Tech · Hero' },
    accent: '#9ca3af',
    field: 'radial-gradient(circle at 50% 60%, rgba(40,40,40,0.4) 0%, #000 70%)',
    titleFont: 'font-instrument',
    component: AsmeHero,
    prompt: ASME_PROMPT,
  },
  {
    slug: 'prisma',
    title: 'Prisma',
    brand: 'Prisma',
    tagline: { zh: '全球视觉艺术家网络', en: 'Worldwide network of visual artists' },
    description: {
      zh: '创意工作室落地页。暗色电影质感 + 暖奶油色调 + Almarai/Instrument Serif 字体。3 个 section：Hero（视频+巨型标题）、About（多样式标题+逐字滚动揭示）、Features（4 卡网格+视频卡+checklist 卡）。framer-motion 全动画驱动。',
      en: 'Creative studio landing page. Dark cinematic aesthetic + warm cream palette + Almarai/Instrument Serif fonts. 3 sections: Hero (video + giant title), About (multi-style title + scroll-driven character reveal), Features (4-card grid + video card + checklist cards). All animations powered by framer-motion.',
    },
    category: { zh: '创意工作室 · 落地页', en: 'Creative Studio · Landing' },
    accent: '#DEDBC8',
    field: 'radial-gradient(circle at 50% 50%, #101010 0%, #000 80%)',
    titleFont: 'font-almarai font-medium',
    component: PrismaLanding,
    prompt: PRISMA_PROMPT,
  },
  {
    slug: 'drift',
    title: 'Drift',
    brand: 'Drift',
    tagline: {
      zh: '掌握你的时间，不再焦虑',
      en: 'Own your time without the stress',
    },
    description: {
      zh: 'ADHD 友好型计划器落地页。Inter 基础字体 + Instrument Serif 斜体点缀。3 个 section：Hero（全屏视频背景 + 浮动胶囊导航 + 动画汉堡→X）、About（奶油色 #F6E4CF + rounded-t-[25px] 重叠过渡 + 双胶囊按钮 + 装饰分隔线 + 双栏大段落）、Features（固定背景图 + sticky 左列 + 滚动卡片 + IntersectionObserver 双检测：active 0.6 高亮导航 + reveal 0.15 从右滑入）。',
      en: 'ADHD-friendly planner landing page. Inter base font + Instrument Serif italic accent. 3 sections: Hero (full-screen video bg + floating pill navbar + animated hamburger→X), About (cream #F6E4CF + rounded-t-[25px] overlap + dual pill buttons + decorative divider + 2-col large paragraph), Features (fixed bg image + sticky left column + scrolling cards + dual IntersectionObserver: active 0.6 nav highlight + reveal 0.15 slide-in from right).',
    },
    category: { zh: '生产力 · 落地页', en: 'Productivity · Landing' },
    accent: '#F6E4CF',
    field: 'radial-gradient(circle at 50% 30%, #2a1f14 0%, #0a0807 70%)',
    titleFont: 'font-inter font-bold',
    component: DriftLanding,
    prompt: DRIFT_PROMPT,
  },
  {
    slug: 'vanguard',
    title: 'Vanguard',
    brand: 'VANGUARD',
    tagline: {
      zh: '设计。颠覆。征服。',
      en: 'Design. Disrupt. Conquer.',
    },
    description: {
      zh: '创意机构全屏 hero 落地页。FSP DEMO PODIUM Sharp 标题字体 + Inter 正文 + 全屏循环视频背景 + 暗化叠加。单文件组件包含 Navbar（响应式 + 汉堡）、移动菜单 Overlay（fixed inset-0 + bg-black/95 + staggered entrance）、Hero 内容（5 段 staggered fade-up 入场：tagline + 三行主标题 + 副文本 + CTA 行 + 统计行）。所有按钮、徽章、统计数字均按 sm/md/lg 断点缩放。',
      en: 'Creative agency fullscreen hero landing. FSP DEMO PODIUM Sharp display font + Inter body + fullscreen looping video bg + darkening overlay. Single-file component includes Navbar (responsive + hamburger), Mobile Menu Overlay (fixed inset-0 + bg-black/95 + staggered entrance), and Hero content (5-stage staggered fade-up: tagline + 3-line main heading + subtext + CTA row + stats row). All buttons, badges, and stats scale through sm/md/lg breakpoints.',
    },
    category: { zh: '创意机构 · Hero', en: 'Creative Agency · Hero' },
    accent: '#ffffff',
    field: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #000 80%)',
    titleFont: 'font-podium font-bold',
    component: VanguardHero,
    prompt: VANGUARD_PROMPT,
  },
  {
    slug: 'smith',
    title: 'Michael Smith',
    brand: 'Michael Smith',
    tagline: {
      zh: '设计无缝的数字交互',
      en: 'Designing seamless digital interactions',
    },
    description: {
      zh: 'Michael Smith 暗色作品集落地页。Inter + Instrument Serif 字体组合 + HSL CSS 自定义属性（bg/surface/text/muted/stroke）+ accent 渐变（#89AACC → #4E85BF）。7 个 section：LoadingScreen（rAF 000→100 + 旋转词 + 进度条）、Hero（HLS 视频背景 + GSAP name-reveal + blur-in 入场时间线 + role 循环 + CTA）、SelectedWorks（bento 7/5/5/7 网格 + halftone 叠加 + hover 标签）、Journal（4 条水平胶囊列表）、Explorations（GSAP ScrollTrigger pin + 双列视差 + lightbox）、Stats、Contact（翻转 HLS 视频 + GSAP 跑马灯 + mailto CTA + 绿色脉动状态点）。',
      en: 'Michael Smith dark portfolio landing page. Inter + Instrument Serif font pairing + HSL CSS custom properties (bg/surface/text/muted/stroke) + accent gradient (#89AACC → #4E85BF). 7 sections: LoadingScreen (rAF 000→100 + rotating words + progress bar), Hero (HLS video bg + GSAP name-reveal + blur-in entrance timeline + role cycling + CTA), SelectedWorks (bento 7/5/5/7 grid + halftone overlay + hover label), Journal (4 horizontal pill entries), Explorations (GSAP ScrollTrigger pin + dual-column parallax + lightbox), Stats, Contact (flipped HLS video + GSAP marquee + mailto CTA + green pulsing status dot).',
    },
    category: { zh: '作品集 · 暗色', en: 'Portfolio · Dark' },
    accent: '#4E85BF',
    field: 'radial-gradient(circle at 50% 50%, #141414 0%, #0a0a0a 80%)',
    titleFont: 'font-display italic',
    component: SmithPortfolio,
    prompt: SMITH_PROMPT,
  },
  {
    slug: 'bloom',
    title: 'Bloom',
    brand: 'bloom',
    tagline: {
      zh: '创新 bloom AI 的精神',
      en: 'Innovating the spirit of bloom AI',
    },
    description: {
      zh: 'AI 植物设计平台全屏 hero 落地页。液态玻璃拟态美学覆盖循环视频背景。严格灰阶调色板（仅 white/白透明度梯度，无任何彩色强调）。Poppins 显示/正文字体 + Source Serif 4 italic 强调字体。双栏布局：左 52%（liquid-glass-strong 全覆盖面板 + Logo + bloom 标题 + hero 中心 logo 80×80 + 三 pill + 底部 VISIONARY DESIGN 引用）/ 右 48%（仅 lg+，社交 pill + 账户按钮 + 社区卡片 + 底部 Processing/Growth Archive 双卡 + Advanced Plant Sculpting 花朵卡）。两层液态玻璃：.liquid-glass（blur 4px + inset 高光 + ::before 渐变边框 0.45/0.15 alpha）和 .liquid-glass-strong（blur 50px + 4px 阴影 + ::before 0.5/0.2 alpha），均通过 -webkit-mask-composite: xor 实现纯渐变边框无 border 类。',
      en: 'AI plant design platform fullscreen hero landing. Liquid glass morphism aesthetic over looping video background. Strict grayscale palette (white/white-opacity tiers only, no colored accents). Poppins display/body + Source Serif 4 italic emphasis. Two-panel split: left 52% (liquid-glass-strong full overlay + logo + bloom title + hero center 80×80 logo + three pills + bottom VISIONARY DESIGN quote) / right 48% (lg+ only: social pill + account button + community card + bottom Processing/Growth Archive dual cards + Advanced Plant Sculpting flower card). Two glass tiers: .liquid-glass (blur 4px + inset highlight + ::before gradient border 0.45/0.15 alpha) and .liquid-glass-strong (blur 50px + 4px shadow + ::before 0.5/0.2 alpha), both via -webkit-mask-composite: xor for pure gradient borders without any border classes.',
    },
    category: { zh: 'AI 平台 · 液态玻璃', en: 'AI Platform · Liquid Glass' },
    accent: '#ffffff',
    field: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #000 80%)',
    titleFont: 'font-poppins font-medium',
    component: BloomHero,
    prompt: BLOOM_PROMPT,
  },
  {
    slug: 'cosmos',
    title: 'Cosmos',
    brand: 'Cosmos',
    tagline: {
      zh: '穿越天空，跨越宇宙',
      en: 'Venture Past Our Sky Across the Universe',
    },
    description: {
      zh: '电影感太空旅行落地页。两个全屏 section：Hero（120% 宽高视频背景 + object-top 焦点对齐 + BlurText 逐词模糊入场标题 + 统计卡 + 合伙人）与 Capabilities（全屏视频背景 + "Production evolved" 标题 + 3 张液态玻璃卡片）。共享液态玻璃设计系统（.liquid-glass blur 4px + .liquid-glass-strong blur 50px，均通过 -webkit-mask-composite: xor 实现纯渐变边框）。FadingVideo 组件用 rAF 驱动自定义交叉淡入淡出（FADE_MS=500, FADE_OUT_LEAD=0.55s，手动循环 via ended，无 CSS transitions）。BlurText 组件 IntersectionObserver 10% 触发，3 步关键帧 blur(10→5→0) 配合 stagger delay。Instrument Serif 斜体标题 + Barlow 正文字体。无叠加层，对比度来自液态玻璃 chrome。',
      en: 'Cinematic space-travel landing page. Two full-height sections: Hero (120% scale video bg + object-top focal alignment + BlurText word-by-word blur-in headline + stat cards + partners) and Capabilities (full-bleed video bg + "Production evolved" heading + 3 liquid-glass cards). Shared liquid-glass design system (.liquid-glass blur 4px + .liquid-glass-strong blur 50px, both via -webkit-mask-composite: xor for pure gradient borders). FadingVideo component uses rAF-driven custom crossfade (FADE_MS=500, FADE_OUT_LEAD=0.55s, manual loop via ended, no CSS transitions). BlurText component IntersectionObserver 10% trigger, 3-step keyframes blur(10->5->0) with stagger delay. Instrument Serif italic heading + Barlow body font. No overlays — contrast comes from the liquid-glass chrome.',
    },
    category: { zh: '太空旅行 · 电影感', en: 'Space Travel · Cinematic' },
    accent: '#ffffff',
    field: 'radial-gradient(circle at 50% 30%, #0a1428 0%, #000 80%)',
    titleFont: 'font-heading italic',
    component: CosmosLanding,
    prompt: COSMOS_PROMPT,
  },
  {
    slug: 'serene',
    title: 'Serene',
    brand: 'Serene',
    tagline: {
      zh: '温柔触碰，光彩绽放',
      en: 'Gentle touch. Radiant presence.',
    },
    description: {
      zh: '奢华美容/养生品牌落地页。两个全屏 section：Hero（视频背景 + bg-black/20 叠加 + 固定 Navbar 含 Dancing Script 手写品牌 + 动画汉堡→X cubic-bezier(0.22,1,0.36,1) + 右侧滑入移动菜单 staggered 链接 75ms 间隔 + 居中标题 text-glow + 副文本 + 白胶囊 CTA + 左下声音指示器）与 Quote（线性渐变背景 #010A17→#0A4267→#20658E→#6BADC4 + rAF lerp 视差：彩虹图垂直 +120→-160px lerp 0.06 + 左云 X -200→0 lerp 0.04 + 右云 scaleX(-1) X +200→0 + 双云 Y=progress*-50 + opacity 随 X 距离 + Instrument Serif 引用）。三种字体：Dancing Script（品牌 logo）+ Instrument Serif（标题+引用）+ Inter（正文/导航/按钮）。液态玻璃 + text-glow + button-glow 工具类。',
      en: 'Luxury beauty/wellness brand landing page. Two full-screen sections: Hero (video bg + bg-black/20 overlay + fixed Navbar with Dancing Script cursive brand + animated hamburger→X cubic-bezier(0.22,1,0.36,1) + right slide-in mobile menu with staggered links 75ms intervals + centered text-glow heading + subtext + white pill CTA + bottom-left sound indicator) and Quote (linear gradient bg #010A17→#0A4267→#20658E→#6BADC4 + rAF lerp parallax: rainbow image vertical +120→-160px lerp 0.06 + left cloud X -200→0 lerp 0.04 + right cloud scaleX(-1) X +200→0 + both clouds Y=progress*-50 + opacity tied to X distance + Instrument Serif quote). Three fonts: Dancing Script (brand logo) + Instrument Serif (heading + quote) + Inter (body/nav/buttons). Liquid-glass + text-glow + button-glow utility classes.',
    },
    category: { zh: '奢华美容 · 视差', en: 'Luxury Beauty · Parallax' },
    accent: '#6BADC4',
    field: 'linear-gradient(to bottom, #010A17 0%, #0A4267 30%, #20658E 60%, #6BADC4 100%)',
    titleFont: 'font-instrument italic',
    component: SereneLanding,
    prompt: SERENE_PROMPT,
  },
  {
    slug: 'velorah',
    title: 'Velorah',
    brand: 'Velorah®',
    tagline: {
      zh: '梦境在寂静中升起',
      en: 'Where dreams rise through the silence.',
    },
    description: {
      zh: '电影感 hero 落地页。全屏循环视频背景提供全部视觉深度（无装饰 blob / 径向渐变 / 叠加层）。玻璃态导航：Velorah® logo（Instrument Serif）+ 5 链接（Home active + Studio/About/Journal/Reach Us）+ "Begin Journey" 液态玻璃胶囊按钮。居中 hero：H1 "Where dreams rise through the silence." 其中 "dreams" 与 "through the silence." 用 <em class="not-italic text-muted-foreground"> 灰化对比 + 副文本 + 大 CTA。HSL CSS 变量深海军蓝主题（background 201 100% 13%）。fade-rise 0.8s ease-out 三段 staggered 入场（H1 → 副文本 0.2s → CTA 0.4s）。',
      en: 'Cinematic hero landing page. Fullscreen looping video background provides all visual depth (no decorative blobs, radial gradients, or overlays). Glassmorphic navbar: Velorah® logo (Instrument Serif) + 5 links (Home active + Studio/About/Journal/Reach Us) + "Begin Journey" liquid-glass pill button. Centered hero: H1 "Where dreams rise through the silence." with "dreams" and "through the silence." wrapped in <em class="not-italic text-muted-foreground"> for color contrast + subtext + large CTA. HSL CSS variables deep navy theme (background 201 100% 13%). fade-rise 0.8s ease-out three-stage staggered entrance (H1 → subtext 0.2s → CTA 0.4s).',
    },
    category: { zh: '电影感 · Hero', en: 'Cinematic · Hero' },
    accent: '#6b7280',
    field: 'radial-gradient(circle at 50% 50%, #001f3f 0%, #001020 80%)',
    titleFont: 'font-instrument',
    component: VelorahHero,
    prompt: VELORAH_PROMPT,
  },
  {
    slug: 'vex',
    title: 'VEX',
    brand: 'VEX',
    tagline: {
      zh: '以远见与行动塑造明天',
      en: 'Shaping tomorrow with vision and action.',
    },
    description: {
      zh: '全屏视频背景 hero 落地页（无任何叠加层，视频原始播放）。玻璃态导航：.vex-glass（黑色 0.4 透明度变体）rounded-xl px-4 py-2，左 VEX logo + 中 4 链接（Story/Investing/Building/Advisory）hover:gray-300 + 右白底 "Start a Chat"。底部对齐 hero：lg 两列网格。左列 AnimatedHeading 逐字 staggered 入场（每字 opacity 0+translateX(-18px) → 1+0，delay = lineIdx*lineLen*30 + charIdx*30 + 200ms 初始，500ms 过渡，空格渲染为 \\u00A0）+ FadeIn 副文本（800ms 延迟）+ 双 CTA "Start a Chat"（白底）/"Explore Now"（vex-glass + border white/20 hover 反转，1200ms 延迟）。右列 vex-glass tag "Investing. Building. Advisory."（1400ms 延迟）。配色：黑底白字 gray-300 次要 white/20 边框，无紫无 indigo。Inter 字体 + antialiased。',
      en: 'Fullscreen video background hero landing page (NO overlay, video plays raw). Glassmorphic navbar: .vex-glass (black 0.4 alpha variant) rounded-xl px-4 py-2, left VEX logo + center 4 links (Story/Investing/Building/Advisory) hover:gray-300 + right white "Start a Chat". Bottom-aligned hero: lg two-column grid. Left column AnimatedHeading character-by-character staggered entrance (each char opacity 0+translateX(-18px) → 1+0, delay = lineIdx*lineLen*30 + charIdx*30 + 200ms initial, 500ms transition, spaces as \\u00A0) + FadeIn subtext (800ms delay) + dual CTA "Start a Chat" (white bg) / "Explore Now" (vex-glass + border white/20 hover invert, 1200ms delay). Right column vex-glass tag "Investing. Building. Advisory." (1400ms delay). Color: black bg, white text, gray-300 secondary, white/20 borders, no purple, no indigo. Inter font + antialiased.',
    },
    category: { zh: '投资 · Hero', en: 'Investment · Hero' },
    accent: '#9ca3af',
    field: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
    titleFont: 'font-inter',
    component: VexHero,
    prompt: VEX_PROMPT,
  },
  {
    slug: 'skyelite',
    title: 'SkyElite',
    brand: 'SkyElite',
    tagline: {
      zh: '高端。触手可及。',
      en: 'Premium. Accessible.',
    },
    description: {
      zh: '高端私人飞机落地页 hero。全屏视频背景（100vh object-cover）+ Navbar（max-w-7xl 居中，左 SkyElite logo + 中 5 链接 Start/Story/Rates/Benefits/FAQ hover:gray-700 + 右 Lucide Menu/X 菜单按钮，移动端下拉 white/95 backdrop-blur rounded shadow）。Hero 内容（-mt-80 上拉居中）：PRIVATE JETS 小标签（gray-600 tracking-wider）+ 双行重叠标题 "Premium."（gray-500）/"Accessible."（#202A36，marginTop -12px 重叠）+ 副文本 "Your dedication deserves recognition." + 双 CTA "Discover"（bg-gray-300 hover:gray-400）/"Book Now"（bg #202A36 hover #1a2229）。Inter 字体 + antialiased，gray-50 外层 + #202A36 深炭灰强调。',
      en: 'Premium private jet landing page hero. Fullscreen video background (100vh object-cover) + Navbar (max-w-7xl centered, left SkyElite logo + center 5 links Start/Story/Rates/Benefits/FAQ hover:gray-700 + right Lucide Menu/X button, mobile dropdown white/95 backdrop-blur rounded shadow). Hero content (-mt-80 pulled up centered): PRIVATE JETS label (gray-600 tracking-wider) + two-line overlapping heading "Premium." (gray-500) / "Accessible." (#202A36, marginTop -12px overlap) + subtitle "Your dedication deserves recognition." + dual CTA "Discover" (bg-gray-300 hover:gray-400) / "Book Now" (bg #202A36 hover #1a2229). Inter font + antialiased, gray-50 outer + #202A36 charcoal accent.',
    },
    category: { zh: '私人飞机 · Hero', en: 'Private Jet · Hero' },
    accent: '#202A36',
    field: 'linear-gradient(135deg, #f9fafb 0%, #d1d5db 100%)',
    titleFont: 'font-inter',
    component: SkyEliteHero,
    prompt: SKYELITE_PROMPT,
  },
  {
    slug: 'lumora',
    title: 'Lumora',
    brand: 'Lumora',
    tagline: {
      zh: '无尽喧嚣宇宙中的清明',
      en: 'Clarity in an Endlessly Noisy Universe',
    },
    description: {
      zh: '正念/专注应用电影感 hero。4 个全屏循环视频堆叠交叉淡入淡出（1000ms ease-in-out + 1s 冷却防连击）+ PNG 透明叠加层（lumora-bob 3s 浮动 + scale(1.03) 防边缘）。Navbar：左 Lumora italic logo + 右 liquid-glass 胶囊（4 链接 + Get Started）/ 移动 Lucide Menu/X 交叉旋转 300ms。Hero 内容：badge + 双行标题 "Clarity in an Endlessly / Noisy Universe" + 副文本 + liquid-glass email 输入胶囊 + 4 标签视频切换器（active 实色 + 下边框）。Deep Woods（第 3 视频）激活时 hero 内容转暗色 #182C41（700ms 过渡），导航与底部统计保持白色。底部统计 4 项 + | 分隔符（移动隐藏）。Instrument Serif + system-ui 双字体。',
      en: 'Mindfulness/focus app cinematic hero. 4 fullscreen looping videos stacked with crossfade (1000ms ease-in-out + 1s cooldown preventing rapid clicks) + transparent PNG overlay (lumora-bob 3s float + scale(1.03) edge prevention). Navbar: left Lumora italic logo + right liquid-glass pill (4 links + Get Started) / mobile Lucide Menu/X crossfade rotation 300ms. Hero content: badge + two-line heading "Clarity in an Endlessly / Noisy Universe" + subtext + liquid-glass email input pill + 4-label video switcher (active solid + bottom border). Deep Woods (3rd video) active triggers hero content dark mode #182C41 (700ms transition), navbar and bottom stats stay white. Bottom stats 4 items + pipe dividers (hidden on mobile). Instrument Serif + system-ui dual fonts.',
    },
    category: { zh: '正念应用 · 电影感', en: 'Mindfulness · Cinematic' },
    accent: '#182C41',
    field: 'linear-gradient(135deg, #0a0a0c 0%, #182C41 100%)',
    titleFont: 'font-instrument italic',
    component: LumoraHero,
    prompt: LUMORA_PROMPT,
  },
  {
    slug: 'axion',
    title: 'Axion Studio',
    brand: 'Axion',
    tagline: {
      zh: '为线上品类称霸品牌打造数字体验',
      en: 'We craft digital experiences for brands ready to dominate',
    },
    description: {
      zh: '设计代理 3 section 落地页。Section 1 Hero：浅灰 #EFEFEF 背景 + shaders 全屏叠加（Swirl + ChromaFlow + FlutedGlass + FilmGrain），胶囊白色导航（深色 AX logo + 4 链接 + 伦敦实时时钟 + 文本滚动 Book a strategy call 按钮），底部 hero 内容（Axion Studio 标签 + clamp 标题 + 橙色 Start a project 文本滚动 + 白色 Certified Partner 徽章含星形 SVG + Featured 标签）。Section 2 About：白底，badge 编号 1 + Introducing Axion 胶囊 + Strategy-led creatives 标题，响应式图片布局（移动堆叠 / 桌面 grid-cols-[26%_1fr_48%]）。Section 3 Case Studies：浅灰 #F5F5F5 底，2 卡片（Narrativ 白按钮 hover 展开为 148px + link 图标 / Luminar 深按钮 hover 展开为 168px + ArrowRight）。系统默认字体 + 橙色 #F26522 强调。',
      en: 'Design agency 3-section landing page. Section 1 Hero: light gray #EFEFEF bg + shaders fullscreen overlay (Swirl + ChromaFlow + FlutedGlass + FilmGrain), pill white navbar (dark AX logo + 4 links + live London clock + text-roll Book a strategy call button), bottom hero content (Axion Studio label + clamp headline + orange Start a project text-roll + white Certified Partner badge with starburst SVG + Featured tag). Section 2 About: white bg, badge number 1 + Introducing Axion pill + Strategy-led creatives heading, responsive image layout (mobile stacked / desktop grid-cols-[26%_1fr_48%]). Section 3 Case Studies: light gray #F5F5F5 bg, 2 cards (Narrativ white button expands to 148px on hover + link icon / Luminar dark button expands to 168px + ArrowRight). System default font + orange #F26522 accent.',
    },
    category: { zh: '设计代理 · 多区段', en: 'Design Agency · Multi-section' },
    accent: '#F26522',
    field: 'linear-gradient(135deg, #EFEFEF 0%, #F5F5F5 100%)',
    titleFont: 'font-medium tracking-[-0.03em]',
    component: AxionStudio,
    prompt: AXION_PROMPT,
  },
  {
    slug: 'aethera',
    title: 'Aethera',
    brand: 'Aethera',
    tagline: {
      zh: '超越寂静，构筑永恒',
      en: 'Beyond silence, we build the eternal.',
    },
    description: {
      zh: '电影感视频背景 hero 落地页。视频背景 top:300px + inset:auto 0 0 0 定位，rAF 自定义淡入淡出循环（loadeddata 触发 0→1 淡入 500ms，timeupdate 监测剩余 ≤0.5s 触发 1→0 淡出，ended 后 opacity 0 → 100ms 延迟 → currentTime 重置 → play → 重新淡入，loop 关闭手动循环）。渐变叠加 from-white via-transparent to-white 上下渐隐。Navbar：max-w-7xl，左 Aethera® logo（Instrument Serif text-3xl）+ 中 5 链接（Home 黑色 / 其余 #6F6F6F）+ 右黑底 Begin Journey 按钮 hover:scale-1.03。Hero：居中 paddingTop calc(8rem-75px) pb-40，Instrument Serif 标题（"silence," 和 "the eternal." <em> 灰化 #6F6F6F）+ 副文本 + 黑底 CTA。三段 fade-rise staggered 入场（0/0.2s/0.4s）。白底黑字 #6F6F6F 灰色次要。',
      en: 'Cinematic video background hero landing page. Video positioned top:300px + inset:auto 0 0 0, rAF custom fade-in/fade-out loop (loadeddata triggers 0→1 fade-in 500ms, timeupdate monitors remaining ≤0.5s triggers 1→0 fade-out, ended sets opacity 0 → 100ms delay → currentTime reset → play → re-fade-in, loop off manual looping). Gradient overlay from-white via-transparent to-white top/bottom fade. Navbar: max-w-7xl, left Aethera® logo (Instrument Serif text-3xl) + center 5 links (Home black / others #6F6F6F) + right black Begin Journey button hover:scale-1.03. Hero: centered paddingTop calc(8rem-75px) pb-40, Instrument Serif heading ("silence," and "the eternal." <em> grayed #6F6F6F) + subtext + black CTA. Three-stage fade-rise staggered entrance (0/0.2s/0.4s). White bg, black text, #6F6F6F gray secondary.',
    },
    category: { zh: '电影感 · Hero', en: 'Cinematic · Hero' },
    accent: '#6F6F6F',
    field: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)',
    titleFont: 'font-instrument',
    component: AetheraHero,
    prompt: AETHERA_PROMPT,
  },
  {
    slug: 'neuralkinetics',
    title: 'NeuralKinetics',
    brand: 'NeuralKinetics',
    tagline: {
      zh: '一卡零界限，全球通行',
      en: 'One Card, Zero Limits. Worldwide.',
    },
    description: {
      zh: '极简黑白全屏视频背景 hero。内联 CSS（无 Tailwind）。固定 Navbar：左 Logo（两个 -35deg 旋转圆角矩形 SVG）+ NeuralKinetics 品牌名（桌面）+ 黑色 Menu 胶囊（白圆 + Plus 图标 lucide）+ #F4F4F6 浅灰 Tags 胶囊（Advanced Bionics / Cognitive AI 桌面），右 #F4F4F6 胶囊 + 黑圆 4 点网格按钮 + Adaptive Systems（桌面）。背景视频 autoPlay muted playsInline object-cover（移动 80% 尺寸 / 桌面 100%）。底部白色渐变叠加（to top 0%→50%→透明）+ 左块（黑点 + 副标题 + 双行标题 "One Card, Zero / Limits. Worldwide." font-weight 300 clamp 字号 + 双按钮 See Features 黑底 / How It Works 透明带边框）+ 右块（3 标签胶囊 Neuromorphic / AGI / Cybernetics）。motion 动画：Navbar slide-down 0.8s / Video fade+scale 1.8s / Footer staggered slide-up（0.5s/0.6s/0.8s/1.0s/1.2s delay）。Inter 字体 + ease [0.16,1,0.3,1]。',
      en: 'Minimal black-and-white fullscreen video background hero. Inline CSS (no Tailwind). Fixed Navbar: left Logo (two -35deg rotated rounded rectangle SVG) + NeuralKinetics brand (desktop) + black Menu pill (white circle + Plus icon lucide) + #F4F4F6 light gray Tags pill (Advanced Bionics / Cognitive AI desktop), right #F4F4F6 pill + black circle 4-dot grid button + Adaptive Systems (desktop). Background video autoPlay muted playsInline object-cover (mobile 80% size / desktop 100%). Bottom white gradient overlay (to top 0%→50%→transparent) + left block (black dot + subtitle + two-line heading "One Card, Zero / Limits. Worldwide." font-weight 300 clamp sizing + dual buttons See Features black bg / How It Works transparent bordered) + right block (3 tag pills Neuromorphic / AGI / Cybernetics). motion animations: Navbar slide-down 0.8s / Video fade+scale 1.8s / Footer staggered slide-up (0.5s/0.6s/0.8s/1.0s/1.2s delay). Inter font + ease [0.16,1,0.3,1].',
    },
    category: { zh: '科技 · Hero', en: 'Tech · Hero' },
    accent: '#000000',
    field: 'linear-gradient(135deg, #FFFFFF 0%, #F4F4F6 100%)',
    titleFont: 'font-light tracking-[-0.03em]',
    component: NeuralKineticsHero,
    prompt: NEURALKINETICS_PROMPT,
  },
  {
    slug: 'nora',
    title: 'Nora Kessler',
    brand: 'Nora Kessler',
    tagline: {
      zh: '视觉故事与动态的交汇',
      en: 'Where visual stories meet motion',
    },
    description: {
      zh: '创意工作室展示页。10 盒开屏动画（5 顶 + 5 底，#75C5DE 蓝色，staggered 0.05s）+ 顶部下滑菜单面板（rgba(17,17,17,0.95) + backdrop-blur 26px）+ 双图 hero（底图 + canvas 聚光蒙版揭示图）+ 鼠标聚光 rAF 径向渐变（半径 260px，6 段渐变 stop 0→1）+ 逐词模糊揭示标题 + #75C5DE 蓝色箭头 CTA 按钮展开动画 + "Visuals" 大字 clamp(180px, 28vw, 560px) 上滑入场 + mix-blend-mode: difference Logo 自适应对比度。Inter 字体。配色 #E4E4E4 底 / #F4F1E8 前景 / #75C5DE 蓝色点缀。',
      en: 'Creative studio showcase. 10-box splash animation (5 top + 5 bottom, #75C5DE blue, staggered 0.05s) + top slide-down menu panel (rgba(17,17,17,0.95) + backdrop-blur 26px) + dual-image hero (base image + canvas spotlight mask reveal image) + mouse spotlight rAF radial gradient (radius 260px, 6-stop gradient 0→1) + word-by-word blur-reveal headline + #75C5DE blue arrow CTA button expand animation + "Visuals" big text clamp(180px, 28vw, 560px) slide-up entrance + mix-blend-mode: difference Logo auto contrast. Inter font. Palette #E4E4E4 bg / #F4F1E8 fg / #75C5DE accent.',
    },
    category: { zh: '创意 · 工作室', en: 'Creative · Studio' },
    accent: '#75C5DE',
    field: 'linear-gradient(135deg, #E4E4E4 0%, #F4F1E8 100%)',
    titleFont: 'font-medium tracking-[-0.02em]',
    component: NoraHero,
    prompt: NORA_PROMPT,
  },
  {
    slug: 'prmpt',
    title: 'prmpt',
    brand: 'prmpt',
    tagline: {
      zh: '滚动驱动的档案，视频擦洗与散落网格',
      en: 'Scroll-driven archive, video scrubbing & scattered grid',
    },
    description: {
      zh: '滚动驱动时尚档案落地页。双阶段：Hero（首屏 100vh）双视频背景 + 光标 X 擦洗（死区 max(30, w*5%)，仅 !video.seeking 时更新 currentTime，左移显右视频/右移显左视频）+ 自定义光标（mix-blend exclusion 圆形字形）+ Logo/Caption/Nav/ProductInfo 错位入场动画（delay 0/0.15/0.3/0.45s）+ ProductInfo 圆圈符号滚动随机化（节流 80ms，8/$/^^/%//）+ View 胶囊按钮 scale(0→1)；Gallery 阶段黑色面板 GSAP ScrollTrigger 上滑（translateY 100vh→0，scrub）+ 散落网格（buildLayout 算法 a=(r*2+r%2)%cols，每 3 行第二张 b=(a+2)%cols）+ 卡片 RAF 缩放（Enter (vh-top)/(vh*0.6) / Exit bottom/(vh*0.4)，左半 origin right bottom / 右半 left bottom）+ Outro 白色叠加层淡入 + ProductInfo 上移 outroOffset + View 按钮 scale + Footer 淡入。GSAP ScrollTrigger + Framer Motion + 纯 RAF 位置追踪。Inter Tight 字体。mix-blend-mode: exclusion 全局叠加层。',
      en: 'Scroll-driven fashion archive landing. Two phases: Hero (first 100vh) dual-video background + cursor-X scrubbing (dead zone max(30, w*5%), currentTime only updated when !video.seeking, left → show right video / right → show left video) + custom cursor (mix-blend exclusion circle glyph) + Logo/Caption/Nav/ProductInfo staggered entrance (delay 0/0.15/0.3/0.45s) + ProductInfo circle symbol scroll randomization (throttled 80ms, 8/$/^^/%//) + View pill button scale(0→1); Gallery phase black panel GSAP ScrollTrigger slide-up (translateY 100vh→0, scrub) + scattered grid (buildLayout algorithm a=(r*2+r%2)%cols, every 3rd row second image b=(a+2)%cols) + card RAF scaling (Enter (vh-top)/(vh*0.6) / Exit bottom/(vh*0.4), left half origin right bottom / right half left bottom) + Outro white overlay fade-in + ProductInfo slide up by outroOffset + View button scale + Footer fade-in. GSAP ScrollTrigger + Framer Motion + pure RAF position tracking. Inter Tight font. mix-blend-mode: exclusion on all overlays.',
    },
    category: { zh: '时尚 · 档案', en: 'Fashion · Archive' },
    accent: '#000000',
    field: 'linear-gradient(135deg, #FFFFFF 0%, #000000 100%)',
    titleFont: 'font-medium tracking-[-0.04em]',
    component: PrmptHero,
    prompt: PRMPT_PROMPT,
  },
  {
    slug: 'terraelix',
    title: 'TerraElix',
    brand: 'TerraElix',
    tagline: {
      zh: '自然之力,蕴含于每一粒胶囊',
      en: 'The Power of Nature in Every Capsule',
    },
    description: {
      zh: '健康补剂品牌单页 hero。全屏背景图 + Navbar(品牌 + 4 链接 + Search/ShoppingBag/CornerUpLeft 图标 + 圆形头像 + Menu/X 移动菜单遮罩)+ 三行标题"The Power of / Nature in Every / Capsule + 内联图"逐词 wordReveal 揭示(translateY 100% + blur 4px → 0,延迟 0.3-0.9s 递增 0.1s,亮/暗 white/45 切换)+ CTA "Explore Now" + ArrowUpRight + 副文。底部 3 面板网格(2fr_1fr_2fr):Panel 1 米色 #ECEDEC 个性化文案 + 装饰图 mix-blend-multiply;Panel 2 米白 #FEFDF9 自动轮播 4 卡片(FlaskConical 黑 / Leaf emerald-800 / Droplets cyan-800 / Sun amber-700,3500ms 切换,fade+slide)+ 4 进度条;Panel 3 黑色 + 产品图 + "+14K" + 用户文案。桌面浮动产品图 absolute right clamp(-400px,-20vw,-100px) bottom -10%。DM Sans + Inter 双字体。6 个关键帧动画(fadeUp/fadeIn/slideInLeft/slideInRight/scaleIn/wordReveal)+ 0.2-1.1s 错位延迟。Lucide React 图标。全响应式(移动/平板/桌面)。',
      en: 'Wellness/supplements brand single-page hero. Full-screen background image + Navbar (brand + 4 links + Search/ShoppingBag/CornerUpLeft icons + round avatar + Menu/X mobile overlay) + 3-line headline "The Power of / Nature in Every / Capsule + inline image" word-by-word wordReveal (translateY 100% + blur 4px → 0, staggered 0.3-0.9s increments 0.1s, bright/dim white/45 toggle) + CTA "Explore Now" + ArrowUpRight + subtext. Bottom 3-panel grid (2fr_1fr_2fr): Panel 1 beige #ECEDEC personalization copy + decorative image mix-blend-multiply; Panel 2 off-white #FEFDF9 auto-rotating 4-card carousel (FlaskConical black / Leaf emerald-800 / Droplets cyan-800 / Sun amber-700, 3500ms cycle, fade+slide) + 4 progress bars; Panel 3 black + product image + "+14K" + user copy. Desktop floating product image absolute right clamp(-400px,-20vw,-100px) bottom -10%. DM Sans + Inter dual fonts. 6 keyframe animations (fadeUp/fadeIn/slideInLeft/slideInRight/scaleIn/wordReveal) + 0.2-1.1s staggered delays. Lucide React icons. Fully responsive (mobile/tablet/desktop).',
    },
    category: { zh: '健康 · 补剂', en: 'Wellness · Supplements' },
    accent: '#000000',
    field: 'linear-gradient(135deg, #ECEDEC 0%, #FEFDF9 50%, #000000 100%)',
    titleFont: 'font-dm-sans font-medium tracking-[-0.05em]',
    component: TerraElixHero,
    prompt: TERRAELIX_PROMPT,
  },
  {
    slug: 'asme-studio',
    title: 'Asme Studio',
    brand: 'Asme',
    tagline: {
      zh: '好奇驱动探索,创新塑造未来',
      en: 'Curiosity-driven exploration, innovation shaping the future',
    },
    description: {
      zh: '暗色多 section 落地页复刻。5 个 section:Hero（全屏 rAF 视频淡入淡出循环 + 液态玻璃 Navbar 胶囊 + "Know it all." Instrument Serif 大字 + 邮箱输入 + Manifesto 按钮 + 3 个社交图标液态玻璃圆形按钮）、About（useInView 滚动揭示 + 径向渐变 + "Pioneering ideas for minds that create, build, and inspire." Instrument Serif italic text-white/60）、FeaturedVideo（圆角 aspect-video 视频卡片 + 底部液态玻璃 Our Approach 文案卡 + Explore more whileHover scale 按钮）、Philosophy（"Innovation x Vision" 标题 + 双栏:左 aspect-[4/3] 视频 + 右两个文本块 + bg-white/10 分割线）、Services（双卡片液态玻璃 + group-hover scale-105 视频缩放 + ArrowUpRight 圆形按钮 + Strategy/Craft 标签）。Instrument Serif 字体（italic + regular）。复用全局 .liquid-glass 类（backdrop-filter blur 4px + ::before 渐变边框 mask-composite xor）。framer-motion useInView 滚动入场动画 + whileHover/whileTap 微交互。Lucide React 图标（Globe/ArrowRight/Instagram/Twitter/ArrowUpRight）。',
      en: 'Dark multi-section landing recreation. 5 sections: Hero (full-screen rAF video fade-in/out loop + liquid-glass Navbar pill + "Know it all." Instrument Serif large heading + email input + Manifesto button + 3 social icon liquid-glass round buttons), About (useInView scroll reveal + radial gradient + "Pioneering ideas for minds that create, build, and inspire." Instrument Serif italic text-white/60), FeaturedVideo (rounded aspect-video video card + bottom liquid-glass Our Approach text card + Explore more whileHover scale button), Philosophy ("Innovation x Vision" heading + two-column: left aspect-[4/3] video + right two text blocks + bg-white/10 divider), Services (two-card liquid-glass grid + group-hover scale-105 video zoom + ArrowUpRight round button + Strategy/Craft tags). Instrument Serif font (italic + regular). Reuses global .liquid-glass class (backdrop-filter blur 4px + ::before gradient border mask-composite xor). framer-motion useInView scroll entrance animations + whileHover/whileTap micro-interactions. Lucide React icons (Globe/ArrowRight/Instagram/Twitter/ArrowUpRight).',
    },
    category: { zh: '创意 · 工作室', en: 'Creative · Studio' },
    accent: '#ffffff',
    field: 'radial-gradient(circle at 50% 30%, rgba(255,255,255,0.04) 0%, #000 70%)',
    titleFont: 'font-instrument italic',
    component: AsmeStudio,
    prompt: ASME_STUDIO_PROMPT,
  },
  {
    slug: 'cozypaws',
    title: 'CozyPaws',
    brand: 'CozyPaws',
    tagline: {
      zh: '宠物所需的一切热爱',
      en: 'Everything Your Pets Love',
    },
    description: {
      zh: '宠物商店视口高度 hero。容器 h-screen flex flex-col overflow-hidden 无滚动 + 三响应断点（移动/平板 md/桌面 lg+）使用 show/hide 切换。Inter（body/UI）+ DM Serif Display（仅 hero heading）双字体。配色 #EFFDF0 薄荷绿底 / #1a3d1a 深绿 / #E86A10 橙色强调。Header（logo 205x52 桌面 / 130x33 移动 + 中 nav Home/Shop/Delivery and payment/Brands/Blog + 右 Search 圆/Favorites 橙圆白星 badge 4/Cart 圆 badge 1/Avatar 40x40 + 角标 absolute -top-1 -right-1 20x20 bg-orange border-2）。桌面 hero：文字层 "Everything Your Pets Love" clamp(60px,7.5vw,110px) 逐词 animate-word-pop 弹跳过冲 cubic-bezier(0.34,1.56,0.64,1) + 左 product card（Cozy Cat House $49.99 clamp(160px,14vw,260px) aspect 260/257 + ArrowUpRight 深绿圆）+ 右 video card（TikTok/YouTube clamp(120px,10vw,177px) aspect 177/287 + Play 深绿圆）+ 底部 3 图 flex items-end 无 gap（左 flex-1 / 中 flex-[1.265] 最宽 / 右 flex-1，maxHeight min(70vh,55vw)/min(85vh,70vw)/min(70vh,55vw)）+ overlay（左 98K+ avatar stack + 绿圆 Plus / 中 "Best Products for Your Pet" 白字 + "Explore Products" 橙色 pill + ArrowRight / 右 4.6 橙色填充 Star，bottom clamp(20px,4vh,50px)）。平板 text-7xl 侧卡 top-[80px] 固定 160px/120px。移动顶部标题 36px + 副标 + Explore Products 按钮 + 双卡并排 aspect-square/aspect-3/4 + 统计行 98K+ avatar / divider / 4.6 star + 底部 3 图无 maxHeight。9 个关键帧动画类（fade-up/fade-in/slide-up/slide-in-left/slide-in-right/text-reveal skewY3deg blur4px/word-pop 弹跳过冲/scale-in/photo-reveal translateY80px scale1.02）+ delay-100..1200 错位延迟。Lucide React 图标（Search/ShoppingCart/Star/ArrowUpRight/Play/ArrowRight/Plus）。',
      en: 'Pet store viewport-height hero. Container h-screen flex flex-col overflow-hidden no-scroll + 3 responsive breakpoints (mobile/tablet md/desktop lg+) using show/hide toggle. Inter (body/UI) + DM Serif Display (hero heading only) dual fonts. Palette #EFFDF0 mint green bg / #1a3d1a dark green / #E86A10 orange accent. Header (logo 205x52 desktop / 130x33 mobile + center nav Home/Shop/Delivery and payment/Brands/Blog + right Search circle/Favorites orange circle white star badge 4/Cart circle badge 1/Avatar 40x40 + badges absolute -top-1 -right-1 20x20 bg-orange border-2). Desktop hero: text layer "Everything Your Pets Love" clamp(60px,7.5vw,110px) word-by-word animate-word-pop bounce overshoot cubic-bezier(0.34,1.56,0.64,1) + left product card (Cozy Cat House $49.99 clamp(160px,14vw,260px) aspect 260/257 + ArrowUpRight dark green circle) + right video card (TikTok/YouTube clamp(120px,10vw,177px) aspect 177/287 + Play dark green circle) + bottom 3 images flex items-end no gap (left flex-1 / center flex-[1.265] widest / right flex-1, maxHeight min(70vh,55vw)/min(85vh,70vw)/min(70vh,55vw)) + overlays (left 98K+ avatar stack + green circle Plus / center "Best Products for Your Pet" white heading + "Explore Products" orange pill + ArrowRight / right 4.6 orange filled Star, bottom clamp(20px,4vh,50px)). Tablet text-7xl side cards top-[80px] fixed 160px/120px. Mobile top title 36px + subtitle + Explore Products button + dual cards side-by-side aspect-square/aspect-3/4 + stats row 98K+ avatar / divider / 4.6 star + bottom 3 images no maxHeight. 9 keyframe animation classes (fade-up/fade-in/slide-up/slide-in-left/slide-in-right/text-reveal skewY3deg blur4px/word-pop bounce overshoot/scale-in/photo-reveal translateY80px scale1.02) + delay-100..1200 staggered delays. Lucide React icons (Search/ShoppingCart/Star/ArrowUpRight/Play/ArrowRight/Plus).',
    },
    category: { zh: '电商 · 宠物', en: 'E-commerce · Pets' },
    accent: '#E86A10',
    field: 'linear-gradient(135deg, #EFFDF0 0%, #1a3d1a 100%)',
    titleFont: 'font-serif-display',
    component: CozyPawsHero,
    prompt: COZYPAWS_PROMPT,
  },
  {
    slug: 'orbis-nft',
    title: 'Orbis.Nft',
    brand: 'Orbis.Nft',
    tagline: {
      zh: '超越地球,探索熟悉的边界',
      en: 'Beyond earth and familiar boundaries',
    },
    description: {
      zh: `深空主题 NFT 落地页 4 section 复刻。Anton（标题/nav, font-grotesk 别名）+ Condiment（手写装饰 font-condiment 别名）+ 系统等宽（正文）三字体。配色 #010828 深蓝 / #EFF4FF cream / #6FFF00 neon 绿。复用全局 .liquid-glass 类（backdrop-filter blur 4px + ::before 渐变边框 mask-composite xor）。全屏 fixed 纹理叠加层（z-50, SVG noise, mix-blend-mode: lighten, opacity 0.6）。Section 1 Hero：全屏视频 object-cover + rounded-b-[32px] + Header（logo Anton 16px + 中 nav 液态玻璃胶囊 rounded-[28px] px-[52px] py-[24px] 含 5 链接 hover:text-neon, hidden below lg）+ 标题 "Beyond earth / and ( its ) familiar boundaries" Anton 响应式 40/60/75/90px leading-[1.05]/[1] max-w-780 lg:ml-32 + 右侧 "Nft collection" Condiment 24-48px -rotate-1 text-neon mix-blend-exclusion opacity-90 + 桌面右上 3 液态玻璃方钮 56x56 Mail/Twitter/Github / 移动居中。Section 2 About：全屏视频 + 标题 "Hello! / I'm orbis" Anton 32-60px + 右下角 "Orbis" Condiment 36-68px neon -rotate mix-blend-exclusion + 右栏 monospace 14-16px cream max-w-266 + 底部双栏装饰文字 opacity-10（移动用 #010828 不可见）。Section 3 Collection：纯色背景 + "Collection of / [缩进] Space objects"（Space 是 Condiment neon）+ "SEE ALL CREATORS" 按钮 + neon 绿条 bg-neon 6-10px + 3 列 NFT 卡片网格 lg:grid-cols-3 gap-24px liquid-glass rounded-[32px] p-18 + 方形视频 pb-[100%] rounded-[24px] + 底部 overlay 液态玻璃 bar rounded-[20px] RARITY SCORE + 紫色渐变圆钮 from-[#b724ff] to-[#7c3aed] shadow-purple-500/50 hover:scale-110。Section 4 CTA：原生比例视频 w-full h-auto + 右对齐文字 "JOIN US. / REVEAL WHAT'S HIDDEN. / DEFINE WHAT'S NEXT. / FOLLOW THE SIGNAL." Anton 16-60px + "Go beyond" Condiment neon mix-blend-exclusion + 左下垂直液态玻璃容器 3 钮 Mail/Twitter/Github 响应式尺寸 w-[14vw]/sm:w-[14.375rem]/md:w-[10.78125rem]/lg:w-[16.77rem] border-b border-white/10 分隔。Lucide React 图标（Mail/Twitter/Github）。全响应式（移动/平板/桌面）max-w-1831px。`,
      en: `Deep space themed NFT landing page 4-section recreation. Anton (headings/nav, alias font-grotesk) + Condiment (cursive accent, alias font-condiment) + system monospace (body) three fonts. Palette #010828 deep navy / #EFF4FF cream / #6FFF00 neon green. Reuses global .liquid-glass class (backdrop-filter blur 4px + ::before gradient border mask-composite xor). Full-screen fixed texture overlay (z-50, SVG noise, mix-blend-mode: lighten, opacity 0.6). Section 1 Hero: full-bleed video object-cover + rounded-b-[32px] + Header (logo Anton 16px + center nav liquid-glass pill rounded-[28px] px-[52px] py-[24px] with 5 links hover:text-neon, hidden below lg) + heading "Beyond earth / and ( its ) familiar boundaries" Anton responsive 40/60/75/90px leading-[1.05]/[1] max-w-780 lg:ml-32 + right-side "Nft collection" Condiment 24-48px -rotate-1 text-neon mix-blend-exclusion opacity-90 + desktop top-right 3 liquid-glass square buttons 56x56 Mail/Twitter/Github / mobile centered. Section 2 About: full-bleed video + heading "Hello! / I'm orbis" Anton 32-60px + bottom-right "Orbis" Condiment 36-68px neon -rotate mix-blend-exclusion + right column monospace 14-16px cream max-w-266 + bottom two-column decorative text opacity-10 (mobile uses #010828 invisible). Section 3 Collection: solid bg + "Collection of / [indented] Space objects" (Space is Condiment neon) + "SEE ALL CREATORS" button + neon green bar bg-neon 6-10px + 3-column NFT card grid lg:grid-cols-3 gap-24px liquid-glass rounded-[32px] p-18 + square video pb-[100%] rounded-[24px] + bottom overlay liquid-glass bar rounded-[20px] RARITY SCORE + purple gradient circle button from-[#b724ff] to-[#7c3aed] shadow-purple-500/50 hover:scale-110. Section 4 CTA: native-aspect video w-full h-auto + right-aligned text "JOIN US. / REVEAL WHAT'S HIDDEN. / DEFINE WHAT'S NEXT. / FOLLOW THE SIGNAL." Anton 16-60px + "Go beyond" Condiment neon mix-blend-exclusion + bottom-left vertical liquid-glass container 3 buttons Mail/Twitter/Github responsive sizes w-[14vw]/sm:w-[14.375rem]/md:w-[10.78125rem]/lg:w-[16.77rem] border-b border-white/10 dividers. Lucide React icons (Mail/Twitter/Github). Fully responsive (mobile/tablet/desktop) max-w-1831px.`,
    },
    category: { zh: '加密 · NFT', en: 'Crypto · NFT' },
    accent: '#6FFF00',
    field: 'radial-gradient(circle at 50% 30%, #6FFF00 0%, #010828 70%)',
    titleFont: 'font-grotesk uppercase',
    component: OrbisNftHero,
    prompt: ORBIS_NFT_PROMPT,
  },
  {
    slug: 'dental',
    title: 'Dental Health',
    brand: 'Dental Health',
    tagline: {
      zh: '专业牙科护理,质量医疗',
      en: 'Quality dental care, quality healthcare',
    },
    description: {
      zh: `牙科诊所落地页 3 section 复刻。Open Sauce One + Open Sauce One Bold 双字重(通过 db.onlinewebfonts.com 加载,在 [data-theme='dental'] 作用域内激活,不影响其他 showcase)。3 个全屏 section + splash 屏 + 固定 navbar。核心 MaskedCard 技术:Section 1/2 多张卡片共享同一背景图,每张卡通过 backgroundPosition 显示不同"窗口",focalX 控制焦点偏移(mobile/desktop 不同值)。useMaskPositions hook(ResizeObserver 计算卡片相对 section 的 {x,y,sw,sh})+ useImageWidth hook(naturalWidth * sectionHeight/naturalHeight 计算 imageWidth)+ MaskedCard 组件(overflow * focalX 计算 focalOffset,backgroundSize: auto [sh]px)。useStaggeredReveal hook(IntersectionObserver threshold 0.15 触发可见,opacity + translateY(24px)→0,每项 120ms 错位)。SplashScreen:fixed z-[100] 白底,左下角计数器 000→100(20ms/step,100 steps,2000ms 完成),到达 100 后 200ms 触发 opacity-0 duration-700 淡出,900ms 后 onComplete 移除 DOM。Navbar:fixed top-0 z-50 bg-white/80 backdrop-blur-md,左侧 Dental/Health 双行 logo + quality healthcare 小字标签,桌面 Menu 按钮(白底黑边 hover 反色)+ Dental Emergency 文字,移动 hamburger 三横变 X(cubic-bezier 0.76,0,0.24,1,250ms)。移动 menu overlay:fixed inset-0 z-40,backdrop bg-black/20 backdrop-blur-sm 点击关闭,右侧面板 w-[85%] max-w-sm 滑入(translate-x-full→0),5 个 nav 链接 4xl font-bold 错位入场(100+i*60ms 延迟),底部 Book Appointment 按钮(450ms 延迟)。Section 1 Hero:h-screen flex-col pt-24 px-3 gap-1.5,3 feature bars(MaskedCard h-14/md:h-20 居中黑字)+ 主 hero 卡(flex-1 min-h-0:左上文字 + 左下 Trusted Dentist + h1 Dental/Care clamp(3rem,11vw,11rem) leading-[0.79] + 右下 Free Consultation)。Section 2 Smile Gallery:grid grid-cols-2 md:grid-rows-[1fr_1fr_0.8fr],Card 0 标题卡 + Card 1 md:row-span-2 Call Us 按钮 + Card 2 Smile/makeover clamp 标题 + Card 3 col-span-2 内嵌 4 个服务子卡(active bg-white/90 backdrop-blur-md / inactive bg-white/20 backdrop-blur-xl,编号 01/02/03/null)。Section 3 Implant Dentistry:不使用 MaskedCard,纯 img + 纯色背景,grid grid-cols-2:左列(bg-stone-50 标题 + 两张 img 并排 + bg-zinc-200 Consultation 卡),右列单张 SECTION3_BG 高图 + 底部双 overlay 卡(白色 The Process of Installing Implants + 玻璃 Caring for Dental Implants,含 rotate-[-45deg] SVG 箭头)。配色严格黑白 + 半透白(bg-white/20, bg-white/90)+ backdrop-blur-md/xl。所有卡 rounded-xl md:rounded-2xl overflow-hidden。无外部 UI 库,无图标库,SVG 内联。单 md: 768px 断点,移动堆叠桌面 grid。`,
      en: `Dental clinic landing page 3-section recreation. Open Sauce One + Open Sauce One Bold dual weights (loaded via db.onlinewebfonts.com, activated within [data-theme='dental'] scope so other showcases unaffected). 3 full-screen sections + splash screen + fixed navbar. Core MaskedCard technique: Sections 1/2 share a single background image across multiple cards, each card showing a different "window" via backgroundPosition, with focalX controlling focal offset (different values for mobile/desktop). useMaskPositions hook (ResizeObserver computing each card's {x,y,sw,sh} relative to section) + useImageWidth hook (naturalWidth * sectionHeight/naturalHeight computes imageWidth) + MaskedCard component (overflow * focalX computes focalOffset, backgroundSize: auto [sh]px). useStaggeredReveal hook (IntersectionObserver threshold 0.15 triggers visibility, opacity + translateY(24px)→0, 120ms stagger per item). SplashScreen: fixed z-[100] white bg, bottom-left counter 000→100 (20ms/step, 100 steps, 2000ms total), 200ms after reaching 100 triggers opacity-0 duration-700 fade, 900ms later onComplete removes from DOM. Navbar: fixed top-0 z-50 bg-white/80 backdrop-blur-md, left side Dental/Health two-line logo + quality healthcare small label, desktop Menu button (white bg black border hover invert) + Dental Emergency text, mobile hamburger three-line-to-X (cubic-bezier 0.76,0,0.24,1, 250ms). Mobile menu overlay: fixed inset-0 z-40, backdrop bg-black/20 backdrop-blur-sm click to close, right-side panel w-[85%] max-w-sm slides in (translate-x-full→0), 5 nav links 4xl font-bold staggered entrance (100+i*60ms delay), bottom Book Appointment button (450ms delay). Section 1 Hero: h-screen flex-col pt-24 px-3 gap-1.5, 3 feature bars (MaskedCard h-14/md:h-20 centered black text) + main hero card (flex-1 min-h-0: top-left text + bottom-left Trusted Dentist + h1 Dental/Care clamp(3rem,11vw,11rem) leading-[0.79] + bottom-right Free Consultation). Section 2 Smile Gallery: grid grid-cols-2 md:grid-rows-[1fr_1fr_0.8fr], Card 0 title card + Card 1 md:row-span-2 Call Us button + Card 2 Smile/makeover clamp title + Card 3 col-span-2 embedding 4 service sub-cards (active bg-white/90 backdrop-blur-md / inactive bg-white/20 backdrop-blur-xl, numbered 01/02/03/null). Section 3 Implant Dentistry: no MaskedCard, pure img + solid bg, grid grid-cols-2: left column (bg-stone-50 title + two side-by-side imgs + bg-zinc-200 Consultation card), right column single SECTION3_BG tall image + bottom dual overlay cards (white The Process of Installing Implants + glass Caring for Dental Implants, with rotate-[-45deg] SVG arrow). Strict black/white + translucent white palette (bg-white/20, bg-white/90) + backdrop-blur-md/xl. All cards rounded-xl md:rounded-2xl overflow-hidden. No external UI libs, no icon libs, inline SVG. Single md: 768px breakpoint, mobile stacked / desktop grid.`,
    },
    category: { zh: '医疗 · 健康', en: 'Healthcare · Dental' },
    accent: '#000000',
    field: 'linear-gradient(135deg, #ffffff 0%, #e5e5e5 50%, #000000 100%)',
    titleFont: 'font-extrabold uppercase tracking-tight',
    component: DentalHealthHero,
    prompt: DENTAL_PROMPT,
  },
  {
    slug: 'securify',
    title: 'Securify',
    brand: 'Securify',
    tagline: {
      zh: '守护你的数据,无处不在的隐私',
      en: 'protect your data, privacy everywhere',
    },
    description: {
      zh: `数据安全 SaaS Hero 落地页复刻。Readex Pro 字体(300-700 全字重,通过 Google Fonts 加载,在 [data-theme='securify'] 作用域内激活)。全屏 h-screen section,循环自动播放背景视频(object-cover,autoPlay loop muted playsInline)。浮动胶囊 navbar(absolute z-20 top-0 px-6 md:px-10 pt-6):左 pill(bg-neutral-900/90 backdrop-blur rounded-full)含自定义白色 SVG logo(256x256 viewBox,4 个 L 形几何拼合,fill #ffffff,h-5 w-5)+ securify 品牌名(text-white text-sm tracking-tight);中 pill(hidden md:flex bg-neutral-900/90 backdrop-blur rounded-full px-3 py-2)含 4 个链接 platform/solutions/company/support(text-neutral-300 hover:text-white transition-colors text-sm px-5 py-2 rounded-full);右 get started 按钮(bg-white text-black text-sm rounded-full px-6 py-3 hover:bg-neutral-200)。前景 3 个错位大字标题(每个 <h1> hero-title class:letter-spacing -0.04em,line-height 0.95;text-white font-medium text-[14vw] md:text-[13vw]):"protect" 左对齐 left-4 md:left-10 top-[18%];"your" 右对齐 right-4 md:right-10 top-[38%];"data" 左偏 left-[18%] md:left-[28%] top-[58%]。全部小写。描述段落(absolute left-6 md:left-10 top-[46%] max-w-[240px] text-[15px] leading-snug text-white/90):"we can guarding your data with utmost care, empowering you with privacy everywhere"。3 个统计块:absolute 定位,数字 text-4xl md:text-5xl font-medium tracking-tight + 对角分隔线(hidden md:block h-px w-24 bg-white/40 rotate-[±20deg])+ 小标签 text-xs md:text-sm text-white/70 mt-1。右上(right-6 md:right-24 top-[14%]):+65k / startups use(右对齐);左下(left-6 md:left-20 bottom-20 md:bottom-24):+1.5b / gb data was protected;右下(right-6 md:right-20 bottom-16 md:bottom-20):+300k / downloads(右对齐)。底部渐变叠加(pointer-events-none absolute bottom-0 h-48 bg-gradient-to-b from-transparent to-black)。配色严格纯黑/白/neutral-900/white opacity 变体(white/40, white/70, white/90),无紫靛色。移动隐藏 nav 链接和对角分隔线,vw 单位响应缩放。仅 hover:text-white 与 hover:bg-neutral-200 过渡。`,
      en: `Data-security SaaS hero landing page recreation. Readex Pro font (weights 300-700, loaded via Google Fonts, activated within [data-theme='securify'] scope). Full-screen h-screen section with looping autoplay background video (object-cover, autoPlay loop muted playsInline). Floating pill navbar (absolute z-20 top-0 px-6 md:px-10 pt-6): left pill (bg-neutral-900/90 backdrop-blur rounded-full) containing custom white SVG logo (256x256 viewBox, 4 L-shaped geometric pieces, fill #ffffff, h-5 w-5) + securify brand name (text-white text-sm tracking-tight); center pill (hidden md:flex bg-neutral-900/90 backdrop-blur rounded-full px-3 py-2) with 4 links platform/solutions/company/support (text-neutral-300 hover:text-white transition-colors text-sm px-5 py-2 rounded-full); right get started button (bg-white text-black text-sm rounded-full px-6 py-3 hover:bg-neutral-200). Foreground 3 staggered giant headline words (each <h1> with hero-title class: letter-spacing -0.04em, line-height 0.95; text-white font-medium text-[14vw] md:text-[13vw]): "protect" left-aligned left-4 md:left-10 top-[18%]; "your" right-aligned right-4 md:right-10 top-[38%]; "data" offset left-[18%] md:left-[28%] top-[58%]. All lowercase. Description paragraph (absolute left-6 md:left-10 top-[46%] max-w-[240px] text-[15px] leading-snug text-white/90): "we can guarding your data with utmost care, empowering you with privacy everywhere". 3 stat blocks: absolute positioned, number text-4xl md:text-5xl font-medium tracking-tight + diagonal divider (hidden md:block h-px w-24 bg-white/40 rotate-[±20deg]) + small label text-xs md:text-sm text-white/70 mt-1. Top-right (right-6 md:right-24 top-[14%]): +65k / startups use (right-aligned); bottom-left (left-6 md:left-20 bottom-20 md:bottom-24): +1.5b / gb data was protected; bottom-right (right-6 md:right-20 bottom-16 md:bottom-20): +300k / downloads (right-aligned). Bottom gradient overlay (pointer-events-none absolute bottom-0 h-48 bg-gradient-to-b from-transparent to-black). Strict palette of pure black/white/neutral-900/white opacity variants (white/40, white/70, white/90), no purple/indigo. Mobile hides nav links and diagonal dividers, vw units scale typography. Only hover:text-white and hover:bg-neutral-200 transitions.`,
    },
    category: { zh: '安全 · SaaS', en: 'Security · SaaS' },
    accent: '#ffffff',
    field: 'radial-gradient(circle at 50% 40%, #1a1a1a 0%, #000000 70%)',
    titleFont: 'hero-title font-medium lowercase',
    component: SecurifyHero,
    prompt: SECURIFY_PROMPT,
  },
  {
    slug: 'toonhub',
    title: 'TOONHUB',
    brand: 'TOONHUB',
    tagline: {
      zh: '角色手办 3D 轮播,四种配色切换',
      en: 'Character figurine 3D carousel, four color palette switches',
    },
    description: {
      zh: `角色手办轮播 Hero 复刻。Inter(body)+ Anton(ghost 文字 + DISCOVER IT)双字体,通过 [data-theme='toonhub'] 作用域激活。全屏 100vh 单 section,4 张角色手办图按角色(center/left/right/back)定位 + 缩放 + 模糊切换。4 个角色图(IMAGES 数组:src + bg + panel 三字段),挂载时通过 new Image() 预加载全部。状态:activeIndex(0-3)、isAnimating(650ms 动画锁)、isMobile(innerWidth < 640,resize 监听)。navigate('next'|'prev'):动画中忽略;next 时 (prev+1)%4,prev 时 (prev+3)%4;650ms 后释放锁。角色派生:center=activeIndex,left=(activeIndex+3)%4,right=(activeIndex+1)%4,back=(activeIndex+2)%4。外层 div backgroundColor 随 IMAGES[activeIndex].bg 切换(650ms cubic-bezier(0.4,0,0.2,1) 过渡)。6 层结构:(1) 颗粒叠加 absolute inset-0 z-50:SVG fractalNoise data URI,baseFrequency=0.9,numOctaves=4,opacity 0.08(SVG 内)+ 0.4(容器),backgroundSize 200px×200px repeat;(2) 巨型 ghost 文字 "3D SHAPE" absolute inset-x-0 z-2 top 18%:Anton 字体,clamp(90px,28vw,380px),weight 900,color white,opacity 1,lineHeight 1,uppercase,letterSpacing -0.02em,whiteSpace nowrap;(3) 左上品牌标签 "TOONHUB" absolute top-6 left-4 sm:left-8 z-60:text-xs font-semibold uppercase white opacity 0.9 letterSpacing 0.18em;(4) 轮播 absolute inset-0 z-3:4 个 div position absolute aspectRatio 0.6/1,内含 img width 100% height 100% objectFit contain objectPosition bottom center draggable false。角色样式:center translateX(-50%) scale(isMobile?1.25:1.68) blur 0 opacity 1 z-20 left 50% height(isMobile?60%:92%) bottom(isMobile?22%:0);left translateX(-50%) scale 1 blur 2px opacity 0.85 z-10 left(isMobile?20%:30%) height(isMobile?16%:28%) bottom(isMobile?32%:12%);right 同 left 但 left(isMobile?80%:70%);back translateX(-50%) scale 1 blur 4px opacity 1 z-5 left 50% height(isMobile?13%:22%) bottom(isMobile?32%:12%)。transition:transform/filter/opacity/left 各 650ms cubic-bezier(0.4,0,0.2,1),willChange transform/filter/opacity。(5) 左下文字+导航按钮 absolute bottom-6 left-4 sm:bottom-20 sm:left-24 z-60 maxWidth 320px:TOONHUB FIGURINES(bold uppercase tracking-widest text-base sm:text-[22px] white opacity 0.95 letterSpacing 0.02em mb-2 sm:mb-3)+ 描述段(hidden sm:block text-xs sm:text-sm white opacity 0.85 lineHeight 1.6 mb-4 sm:mb-5:"The artwork is stunning, shipped fully prepared. The finish is a vision, the 3D craft is flawless. Many thanks! Wishing you the win. Order now.")+ 2 个圆形按钮(w-12 h-12 sm:w-16 sm:h-16 透明 bg + 2px 白边 + 白色 lucide-react ArrowLeft/ArrowRight size 26 strokeWidth 2.25;hover:scale 1.08 + bg rgba(255,255,255,0.12);transition transform/background-color 150ms;点击触发 navigate)。(6) 右下链接 "DISCOVER IT" absolute bottom-6 right-4 sm:bottom-20 sm:right-10 z-60:a flex items-center,Anton 字体 clamp(20px,4vw,56px) weight 400 white opacity 0.95→1 on hover(200ms)letterSpacing -0.02em lineHeight 1 uppercase no underline,后跟 ArrowRight(w-5 h-5 sm:w-8 sm:h-8 strokeWidth 2.25)。行为:点击箭头旋转角色;背景色、图像位置、缩放、模糊、不透明度全部在 650ms cubic-bezier(0.4,0,0.2,1) 内同步交叉淡入。角色图位于屏幕底部,覆盖后方巨型 "3D SHAPE" 文字。Lucide React 图标(ArrowLeft/ArrowRight)。`,
      en: `Character figurine carousel hero recreation. Inter (body) + Anton (ghost text + DISCOVER IT) dual fonts, activated within [data-theme='toonhub'] scope. Full-screen 100vh single section, 4 character figurine images positioned by role (center/left/right/back) with scale + blur transitions. 4 image items (IMAGES array: src + bg + panel fields), preloaded via new Image() on mount. State: activeIndex (0-3), isAnimating (650ms animation lock), isMobile (innerWidth < 640, resize listener). navigate('next'|'prev'): ignored while animating; next does (prev+1)%4, prev does (prev+3)%4; releases lock after 650ms. Role derivation: center=activeIndex, left=(activeIndex+3)%4, right=(activeIndex+1)%4, back=(activeIndex+2)%4. Outer div backgroundColor switches with IMAGES[activeIndex].bg (650ms cubic-bezier(0.4,0,0.2,1) transition). 6-layer structure: (1) grain overlay absolute inset-0 z-50: SVG fractalNoise data URI, baseFrequency=0.9, numOctaves=4, opacity 0.08 (inside SVG) + 0.4 (container), backgroundSize 200px×200px repeat; (2) giant ghost text "3D SHAPE" absolute inset-x-0 z-2 top 18%: Anton font, clamp(90px,28vw,380px), weight 900, color white, opacity 1, lineHeight 1, uppercase, letterSpacing -0.02em, whiteSpace nowrap; (3) top-left brand label "TOONHUB" absolute top-6 left-4 sm:left-8 z-60: text-xs font-semibold uppercase white opacity 0.9 letterSpacing 0.18em; (4) carousel absolute inset-0 z-3: 4 divs position absolute aspectRatio 0.6/1, containing img width 100% height 100% objectFit contain objectPosition bottom center draggable false. Per-role style: center translateX(-50%) scale(isMobile?1.25:1.68) blur 0 opacity 1 z-20 left 50% height(isMobile?60%:92%) bottom(isMobile?22%:0); left translateX(-50%) scale 1 blur 2px opacity 0.85 z-10 left(isMobile?20%:30%) height(isMobile?16%:28%) bottom(isMobile?32%:12%); right same as left but left(isMobile?80%:70%); back translateX(-50%) scale 1 blur 4px opacity 1 z-5 left 50% height(isMobile?13%:22%) bottom(isMobile?32%:12%). transition: transform/filter/opacity/left all 650ms cubic-bezier(0.4,0,0.2,1), willChange transform/filter/opacity. (5) bottom-left text + nav buttons absolute bottom-6 left-4 sm:bottom-20 sm:left-24 z-60 maxWidth 320px: TOONHUB FIGURINES (bold uppercase tracking-widest text-base sm:text-[22px] white opacity 0.95 letterSpacing 0.02em mb-2 sm:mb-3) + description (hidden sm:block text-xs sm:text-sm white opacity 0.85 lineHeight 1.6 mb-4 sm:mb-5: "The artwork is stunning, shipped fully prepared. The finish is a vision, the 3D craft is flawless. Many thanks! Wishing you the win. Order now.") + 2 circular buttons (w-12 h-12 sm:w-16 sm:h-16 transparent bg + 2px white border + white lucide-react ArrowLeft/ArrowRight size 26 strokeWidth 2.25; hover:scale 1.08 + bg rgba(255,255,255,0.12); transition transform/background-color 150ms; click triggers navigate). (6) bottom-right link "DISCOVER IT" absolute bottom-6 right-4 sm:bottom-20 sm:right-10 z-60: a flex items-center, Anton font clamp(20px,4vw,56px) weight 400 white opacity 0.95→1 on hover (200ms) letterSpacing -0.02em lineHeight 1 uppercase no underline, followed by ArrowRight (w-5 h-5 sm:w-8 sm:h-8 strokeWidth 2.25). Behavior: clicking arrows rotates roles; background color, image positions, scales, blurs, and opacities all crossfade simultaneously over 650ms cubic-bezier(0.4,0,0.2,1). Character images sit at the bottom of the screen overlapping the giant "3D SHAPE" text behind them. Lucide React icons (ArrowLeft/ArrowRight).`,
    },
    category: { zh: '电商 · 玩具', en: 'E-commerce · Toys' },
    accent: '#F4845F',
    field:
      'linear-gradient(135deg, #F4845F 0%, #6BBF7A 33%, #E882B4 66%, #6EB5FF 100%)',
    titleFont: 'toonhub-display uppercase',
    component: ToonHub,
    prompt: TOONHUB_PROMPT,
  },
  {
    slug: 'cinematic',
    title: 'Cinematic',
    brand: 'CINEMATIC',
    tagline: {
      zh: '踏入未知,智行未来',
      en: 'Step through, work smarter',
    },
    description: {
      zh: `电影/流媒体全屏 Hero 复刻。Inter 字体(300-700,已在 index.html 加载,通过 [data-theme='cinematic'] 作用域激活)。单屏 h-screen 无滚动,3 层结构:(1) 固定背景视频(z-0)object-cover autoPlay loop muted playsInline;(2) 底部 backdrop-blur-xl 蒙版(z-1,pointer-events-none,mask-image linear-gradient(to top, black 0%, transparent 45%) 仅底部模糊无暗色叠加);(3) 前景内容(z-10+)。复用全局 .liquid-glass 类(rgba(255,255,255,0.01) + background-blend-mode luminosity + backdrop-filter blur(4px) + inset 高光 + ::before 渐变描边 mask-composite exclude)。@keyframes blurFadeUp 入场动画(from opacity 0 + filter blur(20px) + transform translateY(40px) → to opacity 1 + filter blur(0) + transform translateY(0)),.animate-blur-fade-up 类 1s ease-out forwards + 初始 opacity 0,每个元素 animationDelay 错位。Navbar(relative z-50 px-4 sm:px-6 md:px-12 py-4 md:py-6 justify-between):左 logo "CINEMATIC"(h-8 md:h-10,blur-fade-up 0ms);中 nav 链接(hidden lg:flex,5 项 Movies/TV Series/Editor's Pick/Interviews/User Reviews,text-sm hover:text-gray-300 transition-colors,错位 100-300ms 50ms 递增);右 Search 按钮(sm+ liquid-glass rounded-full Search icon size 18 + "Search" 文字 px-4 md:px-6 py-2,350ms)+ User 按钮(sm+ liquid-glass w-10 h-10 rounded-full User icon size 18,400ms)+ hamburger(lg 以下 liquid-glass w-10 h-10,Menu↔X 图标 transition rotate-180 + opacity + scale-50 duration-500 ease-out,350ms)。MobileMenu(absolute top-[72px] z-40,open 时 translate-y-0 opacity-100 / closed -translate-y-4 opacity-0 pointer-events-none duration-500 ease-out,bg-gray-900/95 backdrop-blur-lg border-t border-b border-gray-800 shadow-2xl):5 个 nav 链接纵向 py-3 px-3 rounded-lg hover:bg-gray-800/50,translateX 错位入场 50ms 递增;sm 以下底部额外显示 Search + Profile 按钮(border-t border-gray-800)。HeroContent(flex-1 flex-col justify-end px-4 sm:px-6 md:px-12 pb-8 md:pb-16,flex-col md:flex-row items-end gap-8):左 flex-1 — Metadata 行(blur-fade-up 300ms,flex-wrap gap-3 sm:gap-6 mb-6 md:mb-8 text-xs sm:text-sm:Star fill-white 8.7/10 IMDB font-medium + Clock 132 min + Calendar April 2025)+ 标题(blur-fade-up 400ms,text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal letterSpacing -0.04em mb-4 md:mb-6 "Step Through. Work Smarter.")+ 描述(blur-fade-up 500ms,text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-12 max-w-2xl "A voyage through forgotten realms, where past and future intertwine.")+ CTA 按钮(blur-fade-up 600/700ms:Watch Now bg-white text-black rounded-full font-medium px-6 sm:px-8 py-2.5 sm:py-3 Play icon fill-black hover:bg-gray-200;Learn More liquid-glass 同尺寸);右 — 导航箭头(blur-fade-up 800/900ms:Previous liquid-glass rounded-full px-4 sm:px-6 py-2.5 sm:py-3 ChevronLeft;Next 同样式 ChevronRight,sm 以下仅图标)。配色纯黑/白/gray-400 副标题,唯一实色元素是 Watch Now 按钮(bg-white text-black)。响应式:sm 以下隐藏 Search/User(在移动菜单内),lg 以下隐藏 nav 链接显示 hamburger,md+ 左右并排,lg+ 完整桌面 nav。Lucide React 图标(Search/User/Menu/X/Star/Clock/Calendar/Play/ChevronLeft/ChevronRight)。`,
      en: `Cinematic / streaming full-viewport hero recreation. Inter font (weights 300-700, already loaded in index.html, activated within [data-theme='cinematic'] scope). Single h-screen no-scroll, 3-layer structure: (1) fixed background video (z-0) object-cover autoPlay loop muted playsInline; (2) bottom backdrop-blur-xl overlay (z-1, pointer-events-none, mask-image linear-gradient(to top, black 0%, transparent 45%) blur only at bottom, no dark gradient); (3) foreground content (z-10+). Reuses global .liquid-glass class (rgba(255,255,255,0.01) + background-blend-mode luminosity + backdrop-filter blur(4px) + inset highlight + ::before gradient stroke mask-composite exclude). @keyframes blurFadeUp entrance animation (from opacity 0 + filter blur(20px) + transform translateY(40px) → to opacity 1 + filter blur(0) + transform translateY(0)), .animate-blur-fade-up class 1s ease-out forwards + initial opacity 0, each element animationDelay staggered. Navbar (relative z-50 px-4 sm:px-6 md:px-12 py-4 md:py-6 justify-between): left logo "CINEMATIC" (h-8 md:h-10, blur-fade-up 0ms); center nav links (hidden lg:flex, 5 items Movies/TV Series/Editor's Pick/Interviews/User Reviews, text-sm hover:text-gray-300 transition-colors, staggered 100-300ms 50ms increments); right Search button (sm+ liquid-glass rounded-full Search icon size 18 + "Search" text px-4 md:px-6 py-2, 350ms) + User button (sm+ liquid-glass w-10 h-10 rounded-full User icon size 18, 400ms) + hamburger (below lg liquid-glass w-10 h-10, Menu↔X icon transition rotate-180 + opacity + scale-50 duration-500 ease-out, 350ms). MobileMenu (absolute top-[72px] z-40, open translate-y-0 opacity-100 / closed -translate-y-4 opacity-0 pointer-events-none duration-500 ease-out, bg-gray-900/95 backdrop-blur-lg border-t border-b border-gray-800 shadow-2xl): 5 nav links vertical py-3 px-3 rounded-lg hover:bg-gray-800/50, translateX staggered entrance 50ms increments; below sm shows Search + Profile buttons at bottom (border-t border-gray-800). HeroContent (flex-1 flex-col justify-end px-4 sm:px-6 md:px-12 pb-8 md:pb-16, flex-col md:flex-row items-end gap-8): left flex-1 — Metadata row (blur-fade-up 300ms, flex-wrap gap-3 sm:gap-6 mb-6 md:mb-8 text-xs sm:text-sm: Star fill-white 8.7/10 IMDB font-medium + Clock 132 min + Calendar April 2025) + Title (blur-fade-up 400ms, text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal letterSpacing -0.04em mb-4 md:mb-6 "Step Through. Work Smarter.") + Description (blur-fade-up 500ms, text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-12 max-w-2xl "A voyage through forgotten realms, where past and future intertwine.") + CTA buttons (blur-fade-up 600/700ms: Watch Now bg-white text-black rounded-full font-medium px-6 sm:px-8 py-2.5 sm:py-3 Play icon fill-black hover:bg-gray-200; Learn More liquid-glass same size); right — nav arrows (blur-fade-up 800/900ms: Previous liquid-glass rounded-full px-4 sm:px-6 py-2.5 sm:py-3 ChevronLeft; Next same style ChevronRight, below sm icon-only). Palette pure black/white/gray-400 subtitle, only solid-colored element is Watch Now button (bg-white text-black). Responsive: below sm hides Search/User (in mobile menu), below lg hides nav links shows hamburger, md+ side-by-side, lg+ full desktop nav. Lucide React icons (Search/User/Menu/X/Star/Clock/Calendar/Play/ChevronLeft/ChevronRight).`,
    },
    category: { zh: '娱乐 · 流媒体', en: 'Entertainment · Streaming' },
    accent: '#ffffff',
    field:
      'linear-gradient(180deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
    titleFont: 'font-semibold tracking-tight',
    component: CinematicHero,
    prompt: CINEMATIC_PROMPT,
  },
  {
    slug: 'marketeam',
    title: 'Marketeam',
    brand: 'Marketeam',
    tagline: {
      zh: '解锁顶尖营销人才,一键触达',
      en: 'Unlock top marketing talent, one click away',
    },
    description: {
      zh: `营销人才平台全屏 Hero。Inter(400-700) + Urbanist(600,700)字体。全屏背景图 cover no-repeat。Header(logo + 4 nav 链接 + Log In + Join Now 按钮,conic-gradient 旋转边框 3s @property --border-angle 0→360deg)。Hero 左:TypewriterHeading 组件逐字符打字(35ms/char,400ms 延迟,Urbanist 64px weight 600 letter-spacing -1.5px line-height 64px,前 67 字符 #000000 其余 #ffffff,紫色 #A068FF 闪烁光标),Start Project 按钮(打字结束后 3.2s delay 出现,bg #060218,右箭头 chevron 18×18,hover fill 从右侧滑入 mk-btn-reverse),Cursor 元素(紫色指针 SVG + David 徽章 bg #A068FF pill,3.6s delay,margin-left 290px margin-top 40px)。Hero 右:CirclesVisualization 4 层同心圆轨道(353/501/649/797px,spin left 30s / right 40s / right 50s / left 60s,渐变边框 linear-gradient 180deg rgba(217,161,255,0)→1@43%→0 via mask-composite exclude),9 个头像通过 transform translate(-50%,-50%) rotate(X) translate(R) rotate(-X) 定位,scale 0.3+rotate-180+blur→normal fly-in 错位入场(0.6-2.3s),各色光晕(purple/yellow/pink/blue/orange),中心 20k+ 计数(useCountUp 0→20 easeOutCubic 2s,1.2s delay)反向旋转保持正向。底部 LogoTicker 无限滚动(5 SVG ×4 = 20 个为一组 ×2 = 40,translateX 0→-50% 20s linear,左右 linear-gradient mask 淡入淡出,137×40px contain)。入场动画 fade-down/fade-up/scale-in/pop-in 全部 cubic-bezier(0.22,1,0.36,1)。响应式:1280px circles scale 0.85,1024px 堆叠+标题 48px+scale 0.7,768px 隐藏 nav+标题 36px+scale 0.5,480px 标题 28px+scale 0.4。配色 #A068FF 紫 + #060218/#070319 深色 + #000 黑文字 + #fff 白文字。纯 CSS + JS 无外部动画库。`,
      en: `Marketing talent platform full-viewport hero. Inter (400-700) + Urbanist (600,700) fonts. Full-page background image cover no-repeat. Header (logo + 4 nav links + Log In + Join Now button with conic-gradient rotating border 3s via @property --border-angle 0→360deg). Hero left: TypewriterHeading component char-by-char typing (35ms/char, 400ms delay, Urbanist 64px weight 600 letter-spacing -1.5px line-height 64px, first 67 chars #000000 rest #ffffff, purple #A068FF blinking cursor), Start Project button (appears after typing at 3.2s delay, bg #060218, right-arrow chevron 18×18, hover fill slides from right mk-btn-reverse), Cursor element (purple pointer SVG + David badge bg #A068FF pill, 3.6s delay, margin-left 290px margin-top 40px). Hero right: CirclesVisualization 4 concentric orbits (353/501/649/797px, spin left 30s / right 40s / right 50s / left 60s, gradient border linear-gradient 180deg rgba(217,161,255,0)→1@43%→0 via mask-composite exclude), 9 avatars positioned via transform translate(-50%,-50%) rotate(X) translate(R) rotate(-X), scale 0.3+rotate-180+blur→normal fly-in staggered (0.6-2.3s), colored glows (purple/yellow/pink/blue/orange), center 20k+ count-up (useCountUp 0→20 easeOutCubic 2s, 1.2s delay) counter-rotating to stay upright. Bottom LogoTicker infinite scroll (5 SVG ×4 = 20 per set ×2 = 40, translateX 0→-50% 20s linear, left/right linear-gradient mask fade, 137×40px contain). Entrance animations fade-down/fade-up/scale-in/pop-in all cubic-bezier(0.22,1,0.36,1). Responsive: 1280px circles scale 0.85, 1024px stack + heading 48px + scale 0.7, 768px hide nav + heading 36px + scale 0.5, 480px heading 28px + scale 0.4. Palette #A068FF purple + #060218/#070319 dark + #000 black text + #fff white text. Pure CSS + JS, no external animation libraries.`,
    },
    category: { zh: '营销 · 人才平台', en: 'Marketing · Talent Platform' },
    accent: '#A068FF',
    field:
      'radial-gradient(circle at 70% 50%, rgba(160,104,255,0.15) 0%, rgba(6,2,24,0.9) 50%, rgba(10,10,10,1) 100%)',
    titleFont: 'font-semibold tracking-tight',
    component: MarketeamHero,
    prompt: MARKETEAM_PROMPT,
  },
  {
    slug: 'foldcraft',
    title: 'Foldcraft',
    brand: 'Foldcraft',
    tagline: {
      zh: '逐像素塑造视觉叙事',
      en: 'Shaping visual narratives, one pixel at a time',
    },
    description: {
      zh: `创意工作室全屏 Hero。Geist 字体(300-700,已在 index.html 加载,tailwind fontFamily geist 已扩展,font-geist 应用到根容器)。背景:循环背景视频(absolute inset-0 h-full w-full object-cover,object-position 70% center,autoPlay muted loop playsInline)。Navbar(z-30 flex justify-between px-6 py-5 md:px-12 lg:px-16):左 logo "Foldcraft"(text-lg font-semibold tracking-tight text-white sm:text-xl)+ 桌面 nav 链接(hidden md:flex gap-6 lg:gap-8:Home/Projects/Studio/Reach Us,text-sm text-white/80 hover:text-white transition-colors);右 桌面 "Let's Talk" 按钮(hidden md:inline-block rounded-lg bg-white px-5 py-2 text-sm font-medium text-black hover:scale-105 transition-transform)+ 移动 hamburger(40×40 z-50,Lucide Menu↔X 图标 rotate-90 + scale-0 + opacity-0 transition duration-300,active:scale-90)。MobileMenu(z-20 absolute inset-x-0 top-0,bg-black/98 backdrop-blur-xl,duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] 切换 h-screen opacity-100 ↔ h-0 opacity-0 pointer-events-none):flex h-full flex-col justify-center px-8,延迟 100ms fadeSlideUp + translate-y-8;链接 text-3xl font-medium text-white/90 hover:text-white;Let's Talk 按钮 mt-6 rounded-full bg-white px-8 py-3.5 text-base font-medium text-black hover:scale-105;点击后 setMobileMenuOpen(false)。HeroContent(z-10 flex h-[calc(100vh-80px)] flex-col justify-between px-6 pb-10 pt-12 sm:pb-12 sm:pt-16 md:px-12 md:pb-16 md:pt-20 lg:px-16):顶部 max-w-3xl — Badge "Brand & Visual Storytelling"(text-xs sm:text-sm text-white/90,fadeSlideUp 0.2s)+ h1 标题 "Shaping visual / narratives, / one pixel at a time."(<br/> 换行,text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-white,fadeSlideUp 0.4s);底部 — 段落 "Turning vision into reality through craft, motion, and an endless pursuit of beauty."(text-sm sm:text-base md:text-lg leading-relaxed text-white/60 max-w-sm sm:max-w-lg mb-5 sm:mb-6,fadeSlideUp 0.7s)+ CTA "Explore Work" 按钮(rounded-lg bg-white px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-medium text-black hover:scale-105 transition-transform inline-flex items-center gap-2 + Lucide ArrowRight size 16,fadeSlideUp 0.9s)。@keyframes fadeSlideUp(opacity 0 + translateY(24px) → opacity 1 + translateY(0))。CSS reset * { margin: 0; padding: 0; box-sizing: border-box; }。依赖:React + lucide-react(ArrowRight/Menu/X)+ Tailwind CSS + Google Fonts Geist。`,
      en: `Creative studio full-viewport hero. Geist font (weights 300-700, loaded via <link> in index.html, tailwind fontFamily geist extended, font-geist applied to root). Background: looping background video (absolute inset-0 h-full w-full object-cover, object-position 70% center, autoPlay muted loop playsInline). Navbar (z-30 flex justify-between px-6 py-5 md:px-12 lg:px-16): left logo "Foldcraft" (text-lg font-semibold tracking-tight text-white sm:text-xl) + desktop nav links (hidden md:flex gap-6 lg:gap-8: Home/Projects/Studio/Reach Us, text-sm text-white/80 hover:text-white transition-colors); right desktop "Let's Talk" button (hidden md:inline-block rounded-lg bg-white px-5 py-2 text-sm font-medium text-black hover:scale-105 transition-transform) + mobile hamburger (40×40 z-50, Lucide Menu↔X icons rotate-90 + scale-0 + opacity-0 transition duration-300, active:scale-90). MobileMenu (z-20 absolute inset-x-0 top-0, bg-black/98 backdrop-blur-xl, duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] toggling h-screen opacity-100 ↔ h-0 opacity-0 pointer-events-none): flex h-full flex-col justify-center px-8, delayed 100ms fadeSlideUp + translate-y-8; links text-3xl font-medium text-white/90 hover:text-white; Let's Talk button mt-6 rounded-full bg-white px-8 py-3.5 text-base font-medium text-black hover:scale-105; click calls setMobileMenuOpen(false). HeroContent (z-10 flex h-[calc(100vh-80px)] flex-col justify-between px-6 pb-10 pt-12 sm:pb-12 sm:pt-16 md:px-12 md:pb-16 md:pt-20 lg:px-16): top max-w-3xl — Badge "Brand & Visual Storytelling" (text-xs sm:text-sm text-white/90, fadeSlideUp 0.2s) + h1 heading "Shaping visual / narratives, / one pixel at a time." (<br/> line breaks, text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-white, fadeSlideUp 0.4s); bottom — paragraph "Turning vision into reality through craft, motion, and an endless pursuit of beauty." (text-sm sm:text-base md:text-lg leading-relaxed text-white/60 max-w-sm sm:max-w-lg mb-5 sm:mb-6, fadeSlideUp 0.7s) + CTA "Explore Work" button (rounded-lg bg-white px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-medium text-black hover:scale-105 transition-transform inline-flex items-center gap-2 + Lucide ArrowRight size 16, fadeSlideUp 0.9s). @keyframes fadeSlideUp (opacity 0 + translateY(24px) → opacity 1 + translateY(0)). CSS reset * { margin: 0; padding: 0; box-sizing: border-box; }. Dependencies: React + lucide-react (ArrowRight/Menu/X) + Tailwind CSS + Google Fonts Geist.`,
    },
    category: { zh: '创意 · 工作室', en: 'Creative · Studio' },
    accent: '#ffffff',
    field:
      'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
    titleFont: 'font-geist font-semibold tracking-tight',
    component: FoldcraftHero,
    prompt: FOLDCRAFT_PROMPT,
  },
  {
    slug: 'mindloop',
    title: 'Mindloop',
    brand: 'Mindloop',
    tagline: {
      zh: '深度内容,静默生长',
      en: 'Where curiosity meets clarity',
    },
    description: {
      zh: `暗色单色 newsletter/content 平台落地页。Inter (sans) + Instrument Serif (serif italic 强调词) 字体。纯黑 #000 背景 + 纯白前景,无彩色无渐变(除底部黑色渐变)。7 个 section:(1) Navbar fixed transparent top-0 z-50 px-8 md:px-28 py-4 — 左 logo(同心圆图标 w-7 h-7 border-2 border-foreground/60 + 内 w-3 h-3 border + Mindloop bold)+ 4 nav 链接(Home/How It Works/Philosophy/Use Cases • 分隔,text-muted-foreground hover:text-foreground)+ 右 3 社交图标(Instagram/Linkedin/Twitter liquid-glass w-10 h-10 rounded-full)。(2) Hero h-screen 全屏 — 背景循环 MP4 视频 cloudfront URL object-cover + 底部 h-64 bg-gradient-to-t from-background to-transparent;内容 z-10 pt-28 md:pt-32 居中:3 头像 -space-x-2 w-8 h-8 rounded-full border-2 border-background + "7,000+ people already subscribed" text-muted-foreground text-sm + 标题 "Get Inspired with Us" text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px](Inspired 用 Instrument Serif italic font-normal)+ 副标题 text-lg text-hero-subtitle + 邮箱表单 liquid-glass rounded-full p-2 max-w-lg(输入框 + SUBSCRIBE 按钮 bg-foreground text-background rounded-full px-8 py-3,whileHover scale 1.03 whileTap scale 0.98)。fadeUp 错位入场(0/0.1/0.2/0.3s delays,opacity 0+y 20→1+0,duration 0.6 ease easeOut,once viewport margin -100px)。(3) "Search has changed" Section pt-52 md:pt-64 pb-6 md:pb-9 — 标题 "Search has changed. Have you?"(changed. 用 serif italic)+ 副标题 + 3 平台卡片(grid md:grid-cols-3 gap-12 md:gap-8,200×200 图标 + 名称 + 描述:ChatGPT/Perplexity/Google AI)+ 底部 tagline "If you don't answer the questions, someone else will."。(4) Mission pt-0 pb-32 md:pb-44 — 800×800 循环视频 + 滚动驱动逐词显示(useScroll + useTransform,每个词 opacity 0.15→1 基于滚动进度,段落 1 "We're building a space where curiosity meets clarity..." curiosity/meets/clarity 用 --foreground 高亮其余 --hero-subtitle,段落 2 "A platform where content, community, and insight flow together...")。(5) Solution py-32 md:py-44 border-t border-border/30 — "SOLUTION" label text-xs tracking-[3px] uppercase + 标题 "The platform for meaningful content"(meaningful serif italic)+ rounded-2xl aspect-[3/1] 视频 + 4 列特性 grid md:grid-cols-4 gap-8(Curated Feed/Writer Tools/Community/Distribution)。(6) CTA py-32 md:py-44 border-t border-border/30 overflow-hidden — HLS 背景视频(hls.js,Hls.isSupported() + Safari 原生回退,mux.com stream URL)+ bg-background/45 叠加 + 同心圆 logo lg + "Start Your Journey"(Journey serif italic)+ 两按钮(Subscribe Now bg-foreground text-background + Start Writing liquid-glass)。(7) Footer py-12 px-8 md:px-28 — 左 "© 2026 Mindloop. All rights reserved." + 右 Privacy/Terms/Contact。依赖:framer-motion + hls.js + @fontsource/inter + @fontsource/instrument-serif + lucide-react + tailwindcss-animate。设计系统 HSL CSS 变量(--background 0 0% 0% / --foreground 0 0% 100% / --card 0 0% 5% / --muted-foreground 0 0% 65% / --border 0 0% 20% / --hero-subtitle 210 17% 95% 等),全局 .liquid-glass 类(rgba(255,255,255,0.01) + backdrop-blur(4px) + ::before 渐变描边 mask-composite exclude)。`,
      en: `Dark monochrome newsletter/content platform landing page. Inter (sans) + Instrument Serif (serif italic accent words) fonts. Pure black #000 background with white foreground — no colors or gradients beyond monochrome. 7 sections: (1) Navbar fixed transparent top-0 z-50 px-8 md:px-28 py-4 — left logo (concentric circles w-7 h-7 border-2 border-foreground/60 + inner w-3 h-3 + Mindloop bold) + 4 nav links (Home/How It Works/Philosophy/Use Cases • separated, text-muted-foreground hover:text-foreground) + right 3 social icons (Instagram/Linkedin/Twitter liquid-glass w-10 h-10 rounded-full). (2) Hero h-screen full viewport — autoplaying looping muted MP4 background video cloudfront URL object-cover + bottom h-64 bg-gradient-to-t from-background to-transparent; content z-10 pt-28 md:pt-32 centered: 3 avatars -space-x-2 w-8 h-8 rounded-full border-2 border-background + "7,000+ people already subscribed" text-muted-foreground text-sm + heading "Get Inspired with Us" text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] (Inspired in Instrument Serif italic font-normal) + subtitle text-lg text-hero-subtitle + email form liquid-glass rounded-full p-2 max-w-lg (input + SUBSCRIBE button bg-foreground text-background rounded-full px-8 py-3, whileHover scale 1.03 whileTap scale 0.98). fadeUp staggered entrance (0/0.1/0.2/0.3s delays, opacity 0+y 20→1+0, duration 0.6 ease easeOut, once viewport margin -100px). (3) "Search has changed" Section pt-52 md:pt-64 pb-6 md:pb-9 — heading "Search has changed. Have you?" (changed. in serif italic) + subtitle + 3 platform cards (grid md:grid-cols-3 gap-12 md:gap-8, 200×200 icon + name + description: ChatGPT/Perplexity/Google AI) + bottom tagline "If you don't answer the questions, someone else will." (4) Mission pt-0 pb-32 md:pb-44 — 800×800 looping video + scroll-driven word-by-word reveal (useScroll + useTransform, each word opacity 0.15→1 based on scroll progress, paragraph 1 "We're building a space where curiosity meets clarity..." curiosity/meets/clarity highlighted in --foreground rest in --hero-subtitle, paragraph 2 "A platform where content, community, and insight flow together..."). (5) Solution py-32 md:py-44 border-t border-border/30 — "SOLUTION" label text-xs tracking-[3px] uppercase + heading "The platform for meaningful content" (meaningful serif italic) + rounded-2xl aspect-[3/1] video + 4-column feature grid md:grid-cols-4 gap-8 (Curated Feed/Writer Tools/Community/Distribution). (6) CTA py-32 md:py-44 border-t border-border/30 overflow-hidden — HLS background video (hls.js, Hls.isSupported() + Safari native fallback, mux.com stream URL) + bg-background/45 overlay + concentric logo lg + "Start Your Journey" (Journey serif italic) + two buttons (Subscribe Now bg-foreground text-background + Start Writing liquid-glass). (7) Footer py-12 px-8 md:px-28 — left "© 2026 Mindloop. All rights reserved." + right Privacy/Terms/Contact. Dependencies: framer-motion + hls.js + @fontsource/inter + @fontsource/instrument-serif + lucide-react + tailwindcss-animate. Design system HSL CSS variables (--background 0 0% 0% / --foreground 0 0% 100% / --card 0 0% 5% / --muted-foreground 0 0% 65% / --border 0 0% 20% / --hero-subtitle 210 17% 95% etc), global .liquid-glass class (rgba(255,255,255,0.01) + backdrop-blur(4px) + ::before gradient border mask-composite exclude).`,
    },
    category: { zh: '内容 · 平台', en: 'Content · Platform' },
    accent: '#ffffff',
    field:
      'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
    titleFont: 'font-bold tracking-tight',
    component: Mindloop,
    prompt: MINDLOOP_PROMPT,
  },
  {
    slug: 'flowpath',
    title: 'Flowpath',
    brand: 'Flowpath',
    tagline: {
      zh: '弥合缝隙,告别繁琐',
      en: 'Bridge the gaps, ditch the grindwork',
    },
    description: {
      zh: `SaaS 产品全屏 Hero。Helvetica Now Text 字体(db.onlinewebfonts.com 加载,回退 -apple-system/BlinkMacSystemFont/Segoe UI/Roboto/sans-serif)。单 section h-screen w-full overflow-hidden flex flex-col。背景:循环 muted autoplay MP4 视频 object-cover + bg-black/10 暗色叠加。Navbar(px-5 sm:px-6 md:px-12 lg:px-16 py-4 sm:py-5,非 fixed):左 logo(28×28 双重叠菱形 SVG,外层 fillOpacity 0.9 + 内层 0.5 + "flowpath" text-lg sm:text-xl font-medium tracking-tight text-white)+ 桌面 nav(hidden md:flex,gap-1,4 项:Product/Solutions/About/Plans,text-white/90 hover:text-white text-sm font-medium + ChevronDown 14×14 rotate-180 下拉,hover 打开 onMouseEnter/onMouseLeave);下拉菜单 !absolute top-full left-0 liquid-glass rounded-xl py-3 px-2 min-w-[160px] shadow-xl animate-dropdown 0.2s ease-out,子项 text-white/80 hover:text-white text-sm rounded-lg hover:bg-white/5(Product→Connections/Workflows/Insights;Solutions→Guides/Use cases/API reference;About→Our story/Open roles/Reach us;Plans 无下拉);右 Log in 链接 + Try it free 按钮(liquid-glass rounded-full px-5 py-2 text-white text-sm font-medium)+ 移动 hamburger(40×40 md:hidden,Menu↔X rotate-90+scale-0+opacity-0 duration-300)。MobileMenu(md:hidden,duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] 滑入,bg-[#2C221C]/95 backdrop-blur-xl rounded-2xl p-6):所有 nav 项 + 子项缩进 + 底部 border-t border-white/10 Log in + Try it free。Hero 内容(flex-1 flex items-start justify-center pt-16 sm:pt-20 md:pt-24):max-w-3xl text-center — h1 "Bridge the / gaps. Ditch the / grindwork."(text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-[-0.02em],"Ditch the" 和 "grindwork" 用 text-white/60)+ p 副标题 "Flowpath unifies your complete wellness tools..."(text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto mt-6 sm:mt-8)+ 两按钮(Begin your journey bg-white text-gray-900 rounded-full hover:bg-white/90;See it live liquid-glass rounded-full text-white hover:bg-white/10)。全局 .liquid-glass 类(rgba(255,255,255,0.01)+backdrop-blur(4px)+::before 渐变描边 mask-composite exclude)。dropdown-in @keyframes(opacity 0 + translateY(-4px) scale(0.96)→1+0+1,0.2s ease-out)。duration-400 工具类(transition-duration 400ms)。依赖:lucide-react(ChevronDown/Menu/X)+ Tailwind CSS。`,
      en: `SaaS product fullscreen hero. Helvetica Now Text font (loaded from db.onlinewebfonts.com, fallback -apple-system/BlinkMacSystemFont/Segoe UI/Roboto/sans-serif). Single section h-screen w-full overflow-hidden flex flex-col. Background: looping muted autoplay MP4 video object-cover + bg-black/10 dark overlay. Navbar (px-5 sm:px-6 md:px-12 lg:px-16 py-4 sm:py-5, not fixed): left logo (28×28 double overlapping diamond SVG, outer fillOpacity 0.9 + inner 0.5 + "flowpath" text-lg sm:text-xl font-medium tracking-tight text-white) + desktop nav (hidden md:flex, gap-1, 4 items: Product/Solutions/About/Plans, text-white/90 hover:text-white text-sm font-medium + ChevronDown 14×14 rotate-180 dropdown, hover open onMouseEnter/onMouseLeave); dropdown menu !absolute top-full left-0 liquid-glass rounded-xl py-3 px-2 min-w-[160px] shadow-xl animate-dropdown 0.2s ease-out, items text-white/80 hover:text-white text-sm rounded-lg hover:bg-white/5 (Product→Connections/Workflows/Insights; Solutions→Guides/Use cases/API reference; About→Our story/Open roles/Reach us; Plans no dropdown); right Log in link + Try it free button (liquid-glass rounded-full px-5 py-2 text-white text-sm font-medium) + mobile hamburger (40×40 md:hidden, Menu↔X rotate-90+scale-0+opacity-0 duration-300). MobileMenu (md:hidden, duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] slide-in, bg-[#2C221C]/95 backdrop-blur-xl rounded-2xl p-6): all nav items + sub-items indented + bottom border-t border-white/10 Log in + Try it free. Hero content (flex-1 flex items-start justify-center pt-16 sm:pt-20 md:pt-24): max-w-3xl text-center — h1 "Bridge the / gaps. Ditch the / grindwork." (text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-[-0.02em], "Ditch the" and "grindwork" in text-white/60) + p subtitle "Flowpath unifies your complete wellness tools..." (text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto mt-6 sm:mt-8) + two buttons (Begin your journey bg-white text-gray-900 rounded-full hover:bg-white/90; See it live liquid-glass rounded-full text-white hover:bg-white/10). Global .liquid-glass class (rgba(255,255,255,0.01)+backdrop-blur(4px)+::before gradient border mask-composite exclude). dropdown-in @keyframes (opacity 0 + translateY(-4px) scale(0.96)→1+0+1, 0.2s ease-out). duration-400 utility (transition-duration 400ms). Dependencies: lucide-react (ChevronDown/Menu/X) + Tailwind CSS.`,
    },
    category: { zh: 'SaaS · 效率工具', en: 'SaaS · Productivity' },
    accent: '#ffffff',
    field:
      'linear-gradient(135deg, #2C221C 0%, #1a1410 50%, #2C221C 100%)',
    titleFont: 'font-medium tracking-tight',
    component: FlowpathHero,
    prompt: FLOWPATH_PROMPT,
  },
  {
    slug: 'rivr',
    title: 'RIVR',
    brand: 'RIVR',
    tagline: {
      zh: 'DeFi 流动性仪表盘',
      en: 'Fluid Asset Streams',
    },
    description: {
      zh: `DeFi 仪表盘 Hero,Glassmorphism 毛玻璃美学。Helvetica Regular 字体(db.onlinewebfonts.com @font-face 加载)。外层 main min-h-screen bg-[#f0f0f0],内层 div w-full h-screen flex items-center justify-center p-3 md:p-5,核心 section relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden bg-white/10。背景视频 cloudfront MP4 absolute inset-0 object-cover object-[65%] lg:object-center z-0。内容层 relative z-10 flex flex-col items-center:Navbar(flex justify-between py-6 px-6 md:px-10 — 左 flex-1 hidden md:block spacer + 中 ul hidden md:flex gap-8 text-[rgb(45,45,45)] text-sm:Ecosystem/Economics(dropdown)/Developers/Governance(dropdown),hover:opacity-70 + ChevronRight w-4 h-4 group-hover:translate-x-0.5 + 移动 md:hidden RIVR text-xl tracking-tighter text-[rgba(30,50,90,0.9)] + 右 motion.button whileHover scale 1.02 whileTap 0.98 bg-[rgba(30,50,90,0.8)] text-white rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2,内含 bg-white/20 p-1 圆形图标 + ArrowUpRight w-4 h-4 + "Book Demo" text-xs md:text-sm)。HeroBadge(motion.div initial opacity 0/y 20 animate 1/0 transition 0.6 ease easeOut — flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/20 mb-3 w-fit,Sparkles w-4 h-4 text-[rgba(30,50,90,0.8)] + "Fluid Staking" text-[14px] text-[rgba(30,50,90,0.9)])。h1 motion.h1 initial opacity 0/scale 0.98 animate 1/1 transition 0.8 delay 0.2 — "Fluid Asset Streams" text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-normal text-[#5E6470] mb-2 tracking-tight leading-[1.05]。p motion.p initial opacity 0 animate 1 transition 0.8 delay 0.4 — "Access Smart Vaults, stake RIVR, NFTs..." text-sm sm:text-base md:text-lg text-[#5E6470] opacity-80 leading-relaxed max-w-xl。BottomLeftCard(motion.div initial x -20/opacity 0 animate 0/1 transition 0.8 delay 0.2 — absolute bottom-28 right-4 md:left-6 md:right-auto md:bottom-6 lg:bottom-10 lg:left-10,rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[2.2rem] bg-white/30 backdrop-blur-xl — "5.2K" text-2xl md:text-3xl text-[rgba(30,50,90,0.9)] tracking-tight + "Active Yielders" text-[10px] md:text-[12px] uppercase tracking-wider text-[rgba(30,50,90,0.6)] + Join Discord motion.button bg-white rounded-full pl-1.5 pr-5 py-1.5,ArrowUpRight bg-[rgba(30,50,90,0.1)] p-1 圆 + "Join Discord" text-[14px])。BottomRightCorner(motion.div initial y 20/opacity 0 animate 0/1 transition 0.8 delay 0.4 — absolute bottom-0 right-0 bg-[#f0f0f0] rounded-tl-[1.5rem] sm:rounded-tl-[2rem] md:rounded-tl-[3.5rem],含 2 个 faux-cutout SVG 蒙版(顶部 -top + 左侧 -left,56×56 viewBox path fill #f0f0f0)+ 圆形图标 bg-[rgba(30,50,90,0.05)] w-10 h-10 md:w-14 md:h-14 rounded-full border border-[rgba(30,50,90,0.1)] ArrowUpRight + "Documentation" text-[16px] md:text-[20px] text-[rgba(30,50,90,0.95)] + "Library" text-[12px] md:text-[15px] ChevronRight)。依赖:motion(motion/react)+ lucide-react(Sparkles/ArrowUpRight/ChevronRight)。`,
      en: `DeFi dashboard Hero with Glassmorphism aesthetic. Helvetica Regular font (loaded via @font-face from db.onlinewebfonts.com). Outer main min-h-screen bg-[#f0f0f0], inner div w-full h-screen flex items-center justify-center p-3 md:p-5, core section relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden bg-white/10. Background video cloudfront MP4 absolute inset-0 object-cover object-[65%] lg:object-center z-0. Content layer relative z-10 flex flex-col items-center: Navbar (flex justify-between py-6 px-6 md:px-10 — left flex-1 hidden md:block spacer + center ul hidden md:flex gap-8 text-[rgb(45,45,45)] text-sm: Ecosystem/Economics(dropdown)/Developers/Governance(dropdown), hover:opacity-70 + ChevronRight w-4 h-4 group-hover:translate-x-0.5 + mobile md:hidden RIVR text-xl tracking-tighter text-[rgba(30,50,90,0.9)] + right motion.button whileHover scale 1.02 whileTap 0.98 bg-[rgba(30,50,90,0.8)] text-white rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2, with bg-white/20 p-1 circular icon + ArrowUpRight w-4 h-4 + "Book Demo" text-xs md:text-sm). HeroBadge (motion.div initial opacity 0/y 20 animate 1/0 transition 0.6 ease easeOut — flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/20 mb-3 w-fit, Sparkles w-4 h-4 text-[rgba(30,50,90,0.8)] + "Fluid Staking" text-[14px] text-[rgba(30,50,90,0.9)]). h1 motion.h1 initial opacity 0/scale 0.98 animate 1/1 transition 0.8 delay 0.2 — "Fluid Asset Streams" text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-normal text-[#5E6470] mb-2 tracking-tight leading-[1.05]. p motion.p initial opacity 0 animate 1 transition 0.8 delay 0.4 — "Access Smart Vaults, stake RIVR, NFTs..." text-sm sm:text-base md:text-lg text-[#5E6470] opacity-80 leading-relaxed max-w-xl. BottomLeftCard (motion.div initial x -20/opacity 0 animate 0/1 transition 0.8 delay 0.2 — absolute bottom-28 right-4 md:left-6 md:right-auto md:bottom-6 lg:bottom-10 lg:left-10, rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[2.2rem] bg-white/30 backdrop-blur-xl — "5.2K" text-2xl md:text-3xl text-[rgba(30,50,90,0.9)] tracking-tight + "Active Yielders" text-[10px] md:text-[12px] uppercase tracking-wider text-[rgba(30,50,90,0.6)] + Join Discord motion.button bg-white rounded-full pl-1.5 pr-5 py-1.5, ArrowUpRight bg-[rgba(30,50,90,0.1)] p-1 circle + "Join Discord" text-[14px]). BottomRightCorner (motion.div initial y 20/opacity 0 animate 0/1 transition 0.8 delay 0.4 — absolute bottom-0 right-0 bg-[#f0f0f0] rounded-tl-[1.5rem] sm:rounded-tl-[2rem] md:rounded-tl-[3.5rem], with 2 faux-cutout SVG masks (top -top + left -left, 56×56 viewBox path fill #f0f0f0) + circle icon bg-[rgba(30,50,90,0.05)] w-10 h-10 md:w-14 md:h-14 rounded-full border border-[rgba(30,50,90,0.1)] ArrowUpRight + "Documentation" text-[16px] md:text-[20px] text-[rgba(30,50,90,0.95)] + "Library" text-[12px] md:text-[15px] ChevronRight). Dependencies: motion (motion/react) + lucide-react (Sparkles/ArrowUpRight/ChevronRight).`,
    },
    category: { zh: 'DeFi · 仪表盘', en: 'DeFi · Dashboard' },
    accent: '#1e325a',
    field:
      'linear-gradient(135deg, #f0f0f0 0%, #e8e8ec 50%, #f0f0f0 100%)',
    titleFont: 'font-normal tracking-tight',
    component: RivrHero,
    prompt: RIVR_PROMPT,
  },
  {
    slug: 'alwayzz',
    title: 'Alwayzz',
    brand: 'Alwayzz',
    tagline: {
      zh: '按需顶级创意服务',
      en: 'Premium creative on demand',
    },
    description: {
      zh: `创意机构 Hero 落地页,自定义 CSS(非 Tailwind)。Inter (400-700) + Source Serif 4 (400/600 normal+italic) 字体。CSS 变量:--bg #ffffff / --text #0a0a0a / --muted #6b6b6b / --button-bg #0a0a0a / --button-text #ffffff / --border-soft rgba(0,0,0,0.08) / --green #17c964。Navbar(fixed top z-100,padding 19px 36px,max-width 1200px):左 Logo "Alwayzz" Source Serif 4 30px weight 600 italic letter-spacing -0.08em + ® Inter 14px weight 600 sup;右 Menu 黑色 pill 按钮 14px weight 500 + ChevronUp 16px。全屏抽屉(白底,fade 0.4s):5 个链接 Projects/Plans/Team/FAQs/Get in Touch 48px weight 500 letter-spacing -0.04em + 底部版权。Hero(min-height 850px,padding 160px 36px):::before 背景图 higgs.ai webp object-cover center;装饰曲线左右各 20 条(2.5px solid #FCFAF8 border,一侧无 border + 80% border-radius,宽度从 60px 每条 +10px,line-pulse 5s ease-in-out infinite,stagger 0.25s);Ticker(max-width 500px,height 36px,marquee-left 30s linear infinite,5 项 Brand Identity/App Development/Visual Design/Creative Video/Iconography,13px weight 500 var(--muted),padding 6px 14px rounded-full bg rgb(251,251,251),edge fade mask linear-gradient 90deg);标题 "Premium creative alwayzz® on demand."(max-width 550px,82px,letter-spacing -0.07em,weight 600,alwayzz Source Serif 4 italic weight 600 letter-spacing -0.08em,® sup 24px weight 600);副标题 17px var(--muted) max-width 476px;CTA 两按钮(View Plans 黑底白字 56px height pill + Chat for 15 minutes 白底 4px border rgb(248,248,248) pill,含 40px 头像 + "Chat for 15 minutes" 14px weight 600 + "Pick a slot" 12px weight 500 rgb(152,152,152) + green dot 8px rgb(29,204,93));底部渐变 blur 178px。TrustedBy(padding 36px,max-width 1200px):左 label 14px weight 500 var(--muted) max-width 163px + 右 marquee 30s 10 家公司各独特字体 16px weight 600。响应式:<1200px hero padding 140px 32px,标题 clamp(60px,8vw,72px);<810px min-height 760px,侧线隐藏顶部水平线显示,标题 clamp(44px,13vw,52px),CTA 垂直堆叠 max-width 320px。`,
      en: `Creative agency hero landing page with custom CSS (not Tailwind). Inter (400-700) + Source Serif 4 (400/600 normal+italic) fonts. CSS variables: --bg #ffffff / --text #0a0a0a / --muted #6b6b6b / --button-bg #0a0a0a / --button-text #ffffff / --border-soft rgba(0,0,0,0.08) / --green #17c964. Navbar (fixed top z-100, padding 19px 36px, max-width 1200px): left Logo "Alwayzz" Source Serif 4 30px weight 600 italic letter-spacing -0.08em + ® Inter 14px weight 600 sup; right Menu black pill button 14px weight 500 + ChevronUp 16px. Full-screen drawer (white bg, fade 0.4s): 5 links Projects/Plans/Team/FAQs/Get in Touch 48px weight 500 letter-spacing -0.04em + bottom copyright. Hero (min-height 850px, padding 160px 36px): ::before background image higgs.ai webp object-cover center; decorative curves left/right 20 each (2.5px solid #FCFAF8 border, one-sided missing + 80% border-radius, width from 60px +10px each, line-pulse 5s ease-in-out infinite, stagger 0.25s); Ticker (max-width 500px, height 36px, marquee-left 30s linear infinite, 5 items Brand Identity/App Development/Visual Design/Creative Video/Iconography, 13px weight 500 var(--muted), padding 6px 14px rounded-full bg rgb(251,251,251), edge fade mask linear-gradient 90deg); title "Premium creative alwayzz® on demand." (max-width 550px, 82px, letter-spacing -0.07em, weight 600, alwayzz Source Serif 4 italic weight 600 letter-spacing -0.08em, ® sup 24px weight 600); subtitle 17px var(--muted) max-width 476px; CTA two buttons (View Plans black bg white text 56px height pill + Chat for 15 minutes white bg 4px border rgb(248,248,248) pill, with 40px avatar + "Chat for 15 minutes" 14px weight 600 + "Pick a slot" 12px weight 500 rgb(152,152,152) + green dot 8px rgb(29,204,93)); bottom gradient blur 178px. TrustedBy (padding 36px, max-width 1200px): left label 14px weight 500 var(--muted) max-width 163px + right marquee 30s 10 companies each unique font 16px weight 600. Responsive: <1200px hero padding 140px 32px, title clamp(60px,8vw,72px); <810px min-height 760px, side lines hidden top horizontal shown, title clamp(44px,13vw,52px), CTA vertical stack max-width 320px.`,
    },
    category: { zh: '创意 · 机构', en: 'Creative · Agency' },
    accent: '#0a0a0a',
    field:
      'linear-gradient(135deg, #ffffff 0%, #f5f5f5 50%, #ffffff 100%)',
    titleFont: 'font-semibold tracking-tight',
    component: AlwayzzHero,
    prompt: ALWAYZZ_PROMPT,
  },
  {
    slug: 'viktor',
    title: 'Viktor',
    brand: 'Viktor',
    tagline: {
      zh: '个人作品集 · 视频交叉淡入',
      en: 'Personal portfolio · Video crossfade',
    },
    description: {
      zh: '全屏创意作品集 hero,黑底白字,Figtree 字体,三段循环视频交叉淡入切换,视频预加载为 blob 加速播放。顶部 navbar 含 01-04 索引导航 + 邮箱 + CUP 实时时钟。移动端使用 CSS Grid 0fr→1fr 平滑展开菜单。Hero 含视频切换器(WATER WAVE / GRIDWAVE / LIGHT TUNNEL)+ 粉色脉动可用性指示点。底部巨型 "Viktor." 名字 200px(响应式 129.6px / clamp 68-80px),slide 1 句号变粉色 #F598F2。CTA "start a project" 按钮带 ::before 填充上升悬停效果。revealUp / revealRight IntersectionObserver 入场动画。响应式断点:md-tablet 810-1199.98px,mobile <810px。',
      en: 'Full-screen creative portfolio hero, black bg + white text, Figtree font, three looping videos crossfade-switched with blob preloading. Top navbar with 01-04 indexed nav + email + live CUP clock. Mobile uses CSS Grid 0fr→1fr smooth expand menu. Hero has video switcher (WATER WAVE / GRIDWAVE / LIGHT TUNNEL) + pink pulsing availability dot. Bottom giant "Viktor." name at 200px (responsive 129.6px / clamp 68-80px), slide 1 period turns pink #F598F2. CTA "start a project" button with ::before fill-up hover effect. revealUp / revealRight IntersectionObserver entrance animations. Breakpoints: md-tablet 810-1199.98px, mobile <810px.',
    },
    category: { zh: '作品集 · 个人', en: 'Portfolio · Personal' },
    accent: '#F598F2',
    field:
      'radial-gradient(ellipse at top, #1a1a1a 0%, #000000 70%)',
    titleFont: 'font-medium tracking-tight uppercase',
    component: ViktorHero,
    prompt: VIKTOR_PROMPT,
  },
  {
    slug: 'viktor-oddy',
    title: 'Viktor Oddy',
    brand: 'Viktor Oddy',
    tagline: {
      zh: '创意工作室单页落地页',
      en: 'Creative studio single-page landing',
    },
    description: {
      zh: '白底单页落地页,使用 PP Neue Montreal(Webflow CDN) + PP Mondwest(本地 serif)双字体。10 段布局:Hero 居中窄列(440px)带交错渐入;8 图水平跑马灯(30s 桌面 / 10s 移动);引用区含视差图(IntersectionObserver + scroll + rAF,最大偏移 200px);定价卡片(暗色 + 亮色,带复杂多层阴影按钮);评价轮播(3s 自动切换,鼠标悬停暂停,上一/下一按钮,exit 动画 scale 0.95 + opacity 0,5 条评价三倍化);3 个项目竖向堆叠(独立触发渐入);Partner 区鼠标移动 80ms 生成随机旋转 GIF 轨迹(1000ms 淡出);Footer 含外链;Copyright 底栏;固定悬浮底部导航(V 字母 + CTA 按钮)。按钮阴影 6 层叠加含 inset 高光。响应式断点 768px。',
      en: 'White-bg single-page landing, PP Neue Montreal (Webflow CDN) + PP Mondwest (local serif). 10 sections: centered narrow Hero (440px) with staggered fade-in; 8-image marquee (30s desktop / 10s mobile); quote section with parallax image (IntersectionObserver + scroll + rAF, max 200px offset); pricing cards (dark + light, multi-layer shadow buttons); testimonial carousel (3s auto, hover-pause, prev/next, exit animation scale 0.95 + opacity 0, 5 testimonials tripled); 3 vertical projects (independent fade-in); Partner section with 80ms mouse-move GIF trail spawn (1000ms fade, random rotation); footer with external links; copyright bar; fixed bottom nav (V letter + CTA). 6-layer button shadows with inset highlight. Breakpoint 768px.',
    },
    category: { zh: '工作室 · 落地页', en: 'Studio · Landing' },
    accent: '#051A24',
    field: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)',
    titleFont: 'font-semibold tracking-tight',
    component: ViktorOddyLanding,
    prompt: VIKTOR_ODDY_PROMPT,
  },
  {
    slug: 'codenest',
    title: 'CodeNest',
    brand: 'CodeNest',
    tagline: {
      zh: '编程教育平台暗色 Hero',
      en: 'Coding education platform dark hero',
    },
    description: {
      zh: 'HLS 全屏背景视频 + 液态玻璃卡片 + 网格线 + 中心辉光',
      en: 'HLS full-screen background video + liquid glass card + grid lines + central glow',
    },
    category: { zh: '教育 · Hero', en: 'Education · Hero' },
    accent: '#5ed29c',
    field: 'radial-gradient(125% 100% at 50% 0%, #0d1714 0%, #070b0a 60%)',
    titleFont: 'font-extrabold uppercase tracking-tight',
    component: CodeNestHero,
    prompt: CODENEST_PROMPT,
  },
  {
    slug: 'synapse-x',
    title: 'SynapseX',
    brand: 'SynapseX',
    tagline: {
      zh: '神经 AI 接口产品单页落地页',
      en: 'Neural-AI interface product single-page landing',
    },
    description: {
      zh: 'Space Mono 全字体 + 5 个全屏视频背景 + 鼠标 scrub 英雄视频 + 3D 透视文本 + 字符乱码动画',
      en: 'Space Mono font + 5 full-viewport video backgrounds + mouse-scrubbed hero video + 3D perspective text + scramble text animations',
    },
    category: { zh: '科技 · 落地页', en: 'Tech · Landing' },
    accent: '#8E7F94',
    field: 'radial-gradient(circle at 50% 30%, #0a0a0c 0%, #000 60%)',
    titleFont: 'font-light tracking-[-0.03em]',
    component: SynapseXLanding,
    prompt: SYNAPSE_X_PROMPT,
  },
  {
    slug: 'power-ai',
    title: 'Power AI',
    brand: 'Power AI',
    tagline: {
      zh: '暗色 Hero(循环视频背景 + 液态玻璃 + Logo Marquee)',
      en: 'Dark hero with looping video background + liquid glass + logo marquee',
    },
    description: {
      zh: 'Geist Sans + General Sans 字体 + JS 控制视频淡入淡出循环 + 模糊覆盖形状 + 无缝 Logo 跑马灯',
      en: 'Geist Sans + General Sans fonts + JS-controlled video fade loop + blurred overlay shape + seamless logo marquee',
    },
    category: { zh: 'AI · Hero', en: 'AI · Hero' },
    accent: '#a855f7',
    field: 'radial-gradient(circle at 50% 50%, #1a1030 0%, #0a0814 70%)',
    titleFont: 'font-normal tracking-[-0.024em]',
    component: PowerAiHero,
    prompt: POWER_AI_PROMPT,
  },
  {
    slug: 'atelier',
    title: 'Atelier',
    brand: 'Atelier',
    tagline: {
      zh: '设计机构全屏 Hero(循环视频背景 + Instrument Serif 标题)',
      en: 'Design agency fullscreen hero with looping video + Instrument Serif headline',
    },
    description: {
      zh: 'Instrument Serif + Inter 字体 + 全屏循环视频 + 动画汉堡菜单(中间线更短)+ 移动端错位动画覆盖层 + 斜体衬线标题',
      en: 'Instrument Serif + Inter fonts + fullscreen looping video + animated hamburger (shorter middle line) + mobile menu overlay with staggered animations + italic serif headline',
    },
    category: { zh: '设计机构 · Hero', en: 'Design Agency · Hero' },
    accent: '#ffffff',
    field: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #050505 70%)',
    titleFont: 'font-normal tracking-[-0.02em]',
    component: AtelierHero,
    prompt: ATELIER_PROMPT,
  },
  {
    slug: 'organic-visions',
    title: 'Organic Visions',
    brand: 'Organic Visions',
    tagline: {
      zh: '电影感全屏 Hero(循环视频 + Garamond 衬线标题 + 液态玻璃)',
      en: 'Cinematic fullscreen hero with looping video + Garamond serif headline + liquid glass',
    },
    description: {
      zh: 'Garamond + Geist 字体 + 全屏循环视频 + StaggeredFade 逐字符入场动画 + Framer Motion 移动菜单 + 液态玻璃 CTA 按钮',
      en: 'Garamond + Geist fonts + fullscreen looping video + StaggeredFade character animation + Framer Motion mobile menu + liquid glass CTA',
    },
    category: { zh: '自然摄影 · Hero', en: 'Nature · Hero' },
    accent: '#ffffff',
    field: 'radial-gradient(circle at 50% 50%, #0a0a0a 0%, #010101 70%)',
    titleFont: 'font-normal tracking-[-0.02em]',
    component: OrganicVisionsHero,
    prompt: ORGANIC_VISIONS_PROMPT,
  },
  {
    slug: 'halo',
    title: 'Halo',
    brand: 'Halo',
    tagline: {
      zh: 'HLS 视频背景 + 玻璃拟态导航 + 左下角 Hero',
      en: 'HLS video background + glassmorphic nav + bottom-left hero',
    },
    description: {
      zh: `Inter + Instrument Serif 字体。全屏 HLS 流背景视频(Mux m3u8, hls.js 加载)。顶部固定居中玻璃拟态导航 pill(backdrop-blur 20px + saturate 180% + 半透明边框 + inset 高光):左 Logo + 中导航链接 + 右白色 CTA。移动端玻璃下拉菜单(staggered slide-in)。Hero 内容定位左下角:玻璃 eyebrow 胶囊(青色脉动指示点)+ Instrument Serif 斜体标题(living/post-digital 青色高亮)+ 副标题 + 双 CTA(白色 primary 带青色发光 + 玻璃 secondary)。右下角滚动指示器(线条滑入动画)。双层渐变遮罩(顶 65% → 0% → 底 85% + 左 55% → 右 0% 突出左下角文字)。入场动画序列:导航 0.2s → eyebrow 0.5s → 标题 0.7s → 副标题 1s → CTA 1.3s → 滚动指示 1.8s(fade-up + blur)。`,
      en: `Inter + Instrument Serif fonts. Full-screen HLS stream background video (Mux m3u8, loaded via hls.js). Fixed top-centered glassmorphic nav pill (backdrop-blur 20px + saturate 180% + translucent border + inset highlight): left Logo + center nav links + right white CTA. Mobile glass dropdown menu (staggered slide-in). Hero content positioned bottom-left: glass eyebrow capsule (cyan pulsing dot) + Instrument Serif italic headline (living/post-digital cyan highlights) + subtitle + dual CTA (white primary with cyan glow + glass secondary). Bottom-right scroll indicator (line slide-in animation). Dual-layer gradient overlay (top 65% → 0% → bottom 85% + left 55% → right 0% to emphasize bottom-left text). Entrance animation sequence: nav 0.2s → eyebrow 0.5s → headline 0.7s → subtitle 1s → CTA 1.3s → scroll indicator 1.8s (fade-up + blur).`,
    },
    category: { zh: '设计工作室 · Hero', en: 'Studio · Hero' },
    accent: '#7dd3fc',
    field: 'radial-gradient(circle at 70% 30%, #0e1820 0%, #060708 70%)',
    titleFont: 'font-normal tracking-[-0.02em]',
    component: HaloHero,
    prompt: HALO_PROMPT,
  },
  {
    slug: 'sentinel',
    title: 'Sentinel AI',
    brand: 'Sentinel AI',
    tagline: {
      zh: 'Spline 3D 场景背景 + 深色安全 Hero + 亮绿强调色',
      en: 'Spline 3D scene background + dark security hero + vivid green accent',
    },
    description: {
      zh: 'Sora 字体 + 嵌入式 Spline 3D 场景(@splinetool/react-spline)+ 固定透明导航 + 左下角 Hero 内容(超大标题 clamp + 双 CTA + 信任标签)+ staggered fade-up 入场动画 + HSL 主题变量 + shadcn Button 自定义 navCta 变体',
      en: 'Sora font + embedded Spline 3D scene (@splinetool/react-spline) + fixed transparent navbar + bottom-left hero content (giant clamp headline + dual CTA + trust line) + staggered fade-up entrance + HSL theme tokens + shadcn Button custom navCta variant',
    },
    category: { zh: '企业安全 · Hero', en: 'Enterprise Security · Hero' },
    accent: '#26d04f',
    field: 'radial-gradient(circle at 30% 80%, #161616 0%, #0a0a0a 70%)',
    titleFont: 'font-bold tracking-[-0.05em] uppercase',
    component: SentinelHero,
    prompt: SENTINEL_PROMPT,
  },
  {
    slug: 'designpro',
    title: 'DesignPro',
    brand: 'DesignPro',
    tagline: {
      zh: '全屏视频背景 + 圆形 Logo 导航 + ShinyText 扫光主标题',
      en: 'Fullscreen video background + circular logo nav + ShinyText sweep headline',
    },
    description: {
      zh: 'Inter 字体 + 全屏循环视频背景 + 圆形 Logo + 胶囊导航(gray-700 边框 + 移动汉堡)+ 双栏顶部文本 + 居中 Hero(小标题 + Become/Product Leader. 双行标题,第二行用 ShinyText Framer Motion 100deg 渐变扫光:浅蓝 #64CEFB → 白 #ffffff → 浅蓝,3s 循环)+ 黑色圆角 CTA 按钮(箭头 hover 右移)',
      en: 'Inter font + fullscreen looping video background + circular logo + pill nav (gray-700 border + mobile hamburger) + dual-column top text + centered hero (small kicker + Become/Product Leader. two-line headline, second line uses ShinyText Framer Motion 100deg gradient sweep: light blue #64CEFB → white #ffffff → light blue, 3s loop) + black rounded-full CTA button (arrow hover translate-right)',
    },
    category: {
      zh: '设计教育 · Hero',
      en: 'Design Education · Hero',
    },
    accent: '#64CEFB',
    field: 'radial-gradient(circle at 50% 50%, #0a0a0a 0%, #000000 70%)',
    titleFont: 'font-medium tracking-tighter',
    component: DesignProHero,
    prompt: DESIGNPRO_PROMPT,
  },
  {
    slug: 'nexora',
    title: 'Nexora',
    brand: 'Nexora',
    tagline: {
      zh: 'SaaS 浅色 Hero + 毛玻璃仪表盘预览(Inter + Instrument Serif)',
      en: 'SaaS light hero + frosted dashboard preview (Inter + Instrument Serif)',
    },
    description: {
      zh: 'Inter + Instrument Serif 字体 + 全屏循环视频背景(白色渐变遮罩)+ 居中 Hero(GPT-5 徽章 + Smarter 斜体标题 + 双 CTA)+ 手写毛玻璃仪表盘(侧边栏 + 余额卡 SVG 区域图 + 账户列表 + 交易表格)+ Framer Motion staggered 入场 + 浅色主题 HSL 变量',
      en: 'Inter + Instrument Serif fonts + fullscreen looping video background (white gradient mask) + centered hero (GPT-5 badge + Smarter italic headline + dual CTA) + hand-coded frosted dashboard (sidebar + balance card with SVG area chart + accounts list + transactions table) + Framer Motion staggered entrance + light theme HSL tokens',
    },
    category: { zh: 'SaaS · Hero', en: 'SaaS · Hero' },
    accent: '#4f6bed',
    field: 'radial-gradient(circle at 50% 30%, #ffffff 0%, #f4f4f5 70%)',
    titleFont: 'font-display tracking-tight',
    component: NexoraHero,
    prompt: NEXORA_PROMPT,
  },
  {
    slug: 'aurai',
    title: 'Aurai',
    brand: 'Aurai',
    tagline: {
      zh: 'AI 健康伴侣全屏视频 Hero(Askan Light + 玻璃拟态)',
      en: 'AI wellness companion fullscreen video hero (Askan Light + glassmorphism)',
    },
    description: {
      zh: 'Askan Light(标题)+ Inter(正文)字体 + 全屏循环视频背景(响应式 object-position 焦点)+ 玻璃拟态导航胶囊(4 瓣风车 SVG Logo + 品牌名 + 汉堡菜单)+ 桌面端 CTA 按钮 + 移动端展开菜单 + 底部对齐主内容(标题 + 副标题 + 邮件表单 + 功能标签)+ 黑色玻璃 + 白色文字 + 无视频遮罩',
      en: 'Askan Light (heading) + Inter (body) fonts + fullscreen looping video background (responsive object-position focal point) + glassmorphism nav pill (4-petal pinwheel SVG logo + brand name + hamburger menu) + desktop CTA button + mobile dropdown menu + bottom-aligned main content (headline + subtitle + email form + feature pills) + black glass + white text + no video overlay',
    },
    category: { zh: 'Wellness · Hero', en: 'Wellness · Hero' },
    accent: '#ffffff',
    field: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #000000 70%)',
    titleFont: 'font-askan tracking-tight',
    component: AuraiHero,
    prompt: AURAI_PROMPT,
  },
  {
    slug: 'halousd',
    title: 'Halo / USD Halo',
    brand: 'Halo',
    tagline: {
      zh: '稳定币 Fintech 落地页(视频卡片 + 双跑马灯 + 深紫卡组)',
      en: 'Stablecoin fintech landing page (video card + dual marquees + deep-purple card group)',
    },
    description: {
      zh: 'TT Norms Pro(本地用 Inter 替代)字体 + #F5F5F5 浅灰背景 + 绝对定位透明导航(自定义 Halo SVG 标志)+ 100vh 视频卡片 Hero("Your Wealth Works" 负字距标题 + Join us 胶囊按钮 + 7 品牌跑马灯 22s)+ 信息区("Meet USD Halo." 标题 + 4 卡片网格:背景图卡 + 两张深紫 #2B2644 卡)+ 投资方跑马灯行(8 家机构 30s)+ 用例区(Commerce 视频卡片 min-h-720px)+ 所有标题负字距 + font-medium 最重字重',
      en: 'TT Norms Pro (local Inter substitute) font + #F5F5F5 light gray background + absolute transparent navbar (custom Halo SVG logo) + 100vh video card hero ("Your Wealth Works" negative-tracking headline + Join us pill button + 7-brand marquee 22s) + info section ("Meet USD Halo." title + 4-card grid: image card + two deep-purple #2B2644 cards) + backers marquee row (8 institutions 30s) + use cases section (Commerce video card min-h-720px) + all headings negative tracking + font-medium heaviest weight',
    },
    category: { zh: 'Fintech · 稳定币', en: 'Fintech · Stablecoin' },
    accent: '#2B2644',
    field: 'linear-gradient(135deg, #F5F5F5 0%, #E8E8E8 100%)',
    titleFont: 'font-medium tracking-tight',
    component: HaloUsdHero,
    prompt: HALO_USD_PROMPT,
  },
  {
    slug: 'mainframe',
    title: 'Mainframe',
    brand: 'Mainframe',
    tagline: {
      zh: '创意机构联系页 Hero',
      en: 'Creative agency contact hero',
    },
    description: {
      zh: 'Framer Motion 驱动的暗色视频 Hero,鼠标 scrub 控制视频播放,打字机标题揭示,多选服务胶囊(Brand/Digital/Campaign/Other),"Reach us: hello@mainframe.co" 一键复制胶囊按钮。Inter 字体 + 白色文字 + 电影质感。',
      en: 'Framer Motion dark video hero with mouse-scrub playback, typewriter headline reveal, multi-select service pills (Brand/Digital/Campaign/Other), and a "Reach us: hello@mainframe.co" copy-to-clipboard pill. Inter font, white text, cinematic mood.',
    },
    category: { zh: '机构 · 联系 Hero', en: 'Agency · Contact Hero' },
    accent: '#f5f5f5',
    field: 'radial-gradient(circle at 50% 60%, rgba(30,30,30,0.5) 0%, #000 75%)',
    titleFont: 'font-medium tracking-tight',
    component: Mainframe,
    prompt: MAINFRAME_PROMPT,
  },
  {
    slug: 'aura-email',
    title: 'Aura',
    brand: 'Aura',
    tagline: {
      zh: 'AI 原生邮件客户端',
      en: 'AI-native email client',
    },
    description: {
      zh: '暗色 #0c0c0c 电影质感 + 全屏循环背景视频 + 闪亮渐变标题 + macOS 风格菜单栏 + 真实收件箱 mockup + 液态玻璃卡片。featured 推荐语 + 3 档定价。',
      en: 'Dark #0c0c0c cinematic aesthetic + fullscreen looping background video + shiny gradient headline + macOS-style menu bar + realistic inbox mockup + liquid-glass cards. Featured testimonial + 3-tier pricing.',
    },
    category: { zh: 'AI · 邮件客户端', en: 'AI · Email Client' },
    accent: '#a855f7',
    field: 'radial-gradient(circle at 50% 50%, #1a0a1a 0%, #0c0c0c 80%)',
    titleFont: 'font-medium tracking-tight',
    component: AuraEmail,
    prompt: AURA_EMAIL_PROMPT,
  },
  {
    slug: 'linkflow',
    title: 'LinkFlow',
    brand: 'LinkFlow',
    tagline: {
      zh: '无缝打通企业系统数据通路',
      en: 'Unite company systems without custom scripts',
    },
    description: {
      zh: 'LinkFlow 平台落地页,平滑连接企业系统、无需自定义脚本即可在服务间梳理数据通路。Neue Haas Grotesk Display 字体,LinkFlow™ 标志 + 产品叙事 + 集成跑马灯 + CTA,响应式三端。',
      en: 'LinkFlow platform landing page that smoothly unites company systems and streamlines data paths between services without custom scripts. Neue Haas Grotesk Display typography, LinkFlow™ wordmark + product narrative + integration marquee + CTA. Fully responsive.',
    },
    category: { zh: 'SaaS · 集成平台', en: 'SaaS · Integration' },
    accent: '#2563eb',
    field: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    titleFont: 'font-medium tracking-tight',
    component: LinkFlow,
    prompt: LINKFLOW_PROMPT,
  },
  {
    slug: 'equilibrium',
    title: 'Equilibrium',
    brand: 'Equilibrium',
    tagline: {
      zh: 'DeFi 仪表盘 · 玻璃拟态',
      en: 'DeFi dashboard · glassmorphism',
    },
    description: {
      zh: 'DeFi 仪表盘 Hero,Infinity 图标 + Equilibrium 标志,玻璃卡片 + 渐变强调 + 仪表盘预览,高级感 UI。',
      en: 'DeFi dashboard hero with an Infinity icon + Equilibrium wordmark, glass cards, gradient accents, and a dashboard preview. Premium UI.',
    },
    category: { zh: 'DeFi · 仪表盘', en: 'DeFi · Dashboard' },
    accent: '#22d3ee',
    field: 'radial-gradient(circle at 50% 50%, #0b1620 0%, #000 80%)',
    titleFont: 'font-medium tracking-tight',
    component: Equilibrium,
    prompt: EQUILIBRIUM_PROMPT,
  },
  {
    slug: 'fearless-vision',
    title: 'Fearless Vision',
    brand: 'Fearless Vision',
    tagline: {
      zh: 'Fearless · Vision · Delivered',
      en: 'Fearless · Vision · Delivered',
    },
    description: {
      zh: '右侧三行垂直堆叠大字 "Fearless / Vision / Delivered",clamp(2rem,9vw,9rem) 排版,overflow-hidden 逐行揭示,搭配 fadeDown 导航与 fadeUp 数据动画,大胆自信的机构风格。',
      en: 'Right side stacks three uppercase words "Fearless / Vision / Delivered" vertically with clamp(2rem,9vw,9rem) typography, overflow-hidden line reveals, fadeDown nav and fadeUp stat animations. Bold, confident agency aesthetic.',
    },
    category: { zh: '机构 · Hero', en: 'Agency · Hero' },
    accent: '#ef4444',
    field: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
    titleFont: 'font-medium tracking-tight',
    component: FearlessVision,
    prompt: FEARLESS_VISION_PROMPT,
  },
  {
    slug: 'nhm',
    title: 'NHM',
    brand: 'NHM',
    tagline: {
      zh: 'NHM 标志动画落地页',
      en: 'NHM logo animation landing',
    },
    description: {
      zh: '核心为自定义内联 "NHM" SVG 标志(viewBox 0 0 840 100, fill #111),motion.h1 驱动每个字母多边形 staggerChildren 上滑入场。React 19 + Vite 6 + Tailwind 4 + Motion + Lucide + JetBrains Mono。',
      en: 'Centerpiece is a custom inline "NHM" SVG logo (viewBox 0 0 840 100, fill #111) animated as motion.h1 — each letter\'s polygons slide up via staggerChildren. React 19 + Vite 6 + Tailwind 4 + Motion + Lucide + JetBrains Mono.',
    },
    category: { zh: '品牌 · Hero', en: 'Brand · Hero' },
    accent: '#111111',
    field: 'linear-gradient(135deg, #fafafa 0%, #e5e5e5 100%)',
    titleFont: 'font-medium tracking-tight',
    component: NHM,
    prompt: NHM_PROMPT,
  },
  {
    slug: 'epoch',
    title: 'Epoch',
    brand: 'Epoch',
    tagline: {
      zh: '新数字纪元的基石',
      en: 'Foundation of the new digital epoch',
    },
    description: {
      zh: '高性能落地段,圆角白色 Hero 卡(max-w-1400, h-600)+ 背景视频 + Outfit 展示标题 + 深海军蓝 #0a1b33 文字 + "Contact Us" 胶囊 + 底部浮动玻璃导航,下方无缝跑马灯 logo 滚动器。React + TS + Tailwind v4 + Motion。',
      en: 'High-performance section: rounded white hero card (max-w-1400, h-600) + background video + Outfit display headline + dark navy #0a1b33 text + "Contact Us" pill + floating bottom glass navbar, with a seamless marquee logo scroller below. React + TS + Tailwind v4 + Motion.',
    },
    category: { zh: 'Web3 · Hero', en: 'Web3 · Hero' },
    accent: '#0a1b33',
    field: 'linear-gradient(135deg, #ffffff 0%, #eef2f7 100%)',
    titleFont: 'font-medium tracking-tight',
    component: Epoch,
    prompt: EPOCH_PROMPT,
  },
  {
    slug: 'pulsestream',
    title: 'Pulsestream',
    brand: 'Pulsestream',
    tagline: {
      zh: '全屏视频 + 玻璃导航 + 左下角 Hero',
      en: 'Fullscreen video + glass nav + bottom-left hero',
    },
    description: {
      zh: '全屏视频背景 + 玻璃拟态导航 + 左下角 Hero 内容 + 滚动提示。Sora(display)+ DM Sans(body),静音切换、移动菜单、fadeUp 入场动画。React + Vite + Tailwind + Framer Motion + lucide-react。',
      en: 'Fullscreen video background + glassmorphic nav + bottom-left hero content + scroll hint. Sora (display) + DM Sans (body), mute toggle, mobile menu, fadeUp entrance animations. React + Vite + Tailwind + Framer Motion + lucide-react.',
    },
    category: { zh: 'SaaS · 视频 Hero', en: 'SaaS · Video Hero' },
    accent: '#38bdf8',
    field: 'radial-gradient(circle at 50% 60%, rgba(20,30,40,0.5) 0%, #000 75%)',
    titleFont: 'font-medium tracking-tight',
    component: PulsestreamLanding,
    prompt: PULSESTREAM_PROMPT,
  },
  {
    slug: 'logoipsum',
    title: 'Logoipsum',
    brand: 'Logoipsum',
    tagline: {
      zh: 'Discover what\u2019s possible',
      en: 'Discover what\u2019s possible',
    },
    description: {
      zh: '视频背景 + 自定义 rAF 淡入淡出系统(250ms 淡入 / 距结束 0.55s 时 250ms 淡出,无缝循环)+ 玻璃态导航(Schibsted Grotesk + Inter + Fustat)+ 居中搜索框 + 星标 badge + "Discover what\u2019s possible" 标题。',
      en: 'Video background + custom rAF fade system (250ms fade-in / 250ms fade-out starting 0.55s before end, seamless loop) + glassmorphic navbar (Schibsted Grotesk + Inter + Fustat) + centered search box + star badge + "Discover what\u2019s possible" headline.',
    },
    category: { zh: 'SaaS · 数据洞察 Hero', en: 'SaaS · Data Insights Hero' },
    accent: '#111827',
    field: 'radial-gradient(circle at 50% 50%, #1c1c1c 0%, #000 80%)',
    titleFont: 'font-medium tracking-tight',
    component: LogoipsumHero,
    prompt: LOGOIPSUM_PROMPT,
  },
  {
    slug: 'vaultshield',
    title: 'VaultShield',
    brand: 'VaultShield',
    tagline: {
      zh: '密码管理器 · 安全玻璃 Hero',
      en: 'Password manager · secure glass hero',
    },
    description: {
      zh: 'VaultShield 密码管理器全屏 Hero。玻璃拟态 UI + 安全感暗色风格 + 逐字模糊入场标题 + 功能胶囊 + CTA。CSS 变量主题,标题/副文/CTA 交错 fadeUp。',
      en: 'VaultShield password-manager fullscreen hero. Glassmorphic UI + security-focused dark aesthetic + staggered blur-in headline + feature pills + CTA. CSS variable theming, staggered fadeUp across heading/subtext/CTA.',
    },
    category: { zh: '安全 · 密码管理', en: 'Security · Password Manager' },
    accent: '#22c55e',
    field: 'radial-gradient(circle at 50% 50%, #0d1f14 0%, #000 80%)',
    titleFont: 'font-medium tracking-tight',
    component: VaultShieldHero,
    prompt: VAULTSHIELD_PROMPT,
  },
  {
    slug: 'mentality',
    title: 'mentality',
    brand: 'mėntality',
    tagline: {
      zh: '心理健康平台 · 草绿色调',
      en: 'Mental-health platform · lime accent',
    },
    description: {
      zh: 'mėntality 心理健康平台。Inter + Outfit 字体,品牌绿 #9fff00 配 #EDEEF5 背景。玻璃拟态固定导航 + 三叶草 SVG logo + 背景视频融入页面 + 小写导航链接 + 黑色 "get started" 胶囊 + 移动端抽屉动画。',
      en: 'mėntality mental-health platform. Inter + Outfit fonts, brand green #9fff00 on #EDEEF5. Glassmorphic fixed navbar + clover SVG logo + background video blended into the page + lowercase nav links + black "get started" pill + animated mobile drawer.',
    },
    category: { zh: '健康 · 心理健康', en: 'Health · Mental Health' },
    accent: '#9fff00',
    field: 'linear-gradient(135deg, #EDEEF5 0%, #dfe1ec 100%)',
    titleFont: 'font-medium tracking-tight',
    component: MentalityHero,
    prompt: MENTALITY_PROMPT,
  },
  {
    slug: 'questly',
    title: 'Questly',
    brand: 'Questly',
    tagline: {
      zh: 'SaaS 落地页全屏 Hero',
      en: 'SaaS landing fullscreen hero',
    },
    description: {
      zh: 'Questly SaaS 全屏 Hero。单 <section> 填满视口,简洁现代 SaaS 风格,标题 + 副文 + CTA + 产品视觉。React + TS + Tailwind 3 + Vite + lucide-react,无其他 UI 库。',
      en: 'Questly SaaS fullscreen hero. A single <section> filling the viewport, clean modern SaaS aesthetic, headline + subtext + CTA + product visual. React + TS + Tailwind 3 + Vite + lucide-react, no other UI libraries.',
    },
    category: { zh: 'SaaS · Hero', en: 'SaaS · Hero' },
    accent: '#6366f1',
    field: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8f0 100%)',
    titleFont: 'font-medium tracking-tight',
    component: QuestlyHero,
    prompt: QUESTLY_PROMPT,
  },
  {
    slug: 'microvisuals',
    title: 'MicroVisuals',
    brand: 'MicroVisuals',
    tagline: {
      zh: 'Motion 设计工作室 Hero',
      en: 'Motion-design studio hero',
    },
    description: {
      zh: 'MicroVisuals 全屏 Hero。Instrument Serif + Barlow + 自定义 "Dirtyline" 展示字体,黑底,固定标题挂载淡入,1000/30 帧循环动画,"Forma\u2019s AI understands context…" 副文。Vite + React + TS + Tailwind + gsap + lucide-react。',
      en: 'MicroVisuals fullscreen hero. Instrument Serif + Barlow + custom "Dirtyline" display face, black background, fixed title mount-fade, 1000/30 frame loop, "Forma\u2019s AI understands context…" subtext. Vite + React + TS + Tailwind + gsap + lucide-react.',
    },
    category: { zh: '工作室 · Motion Hero', en: 'Studio · Motion Hero' },
    accent: '#f43f5e',
    field: 'radial-gradient(circle at 50% 50%, #1a0a12 0%, #000 80%)',
    titleFont: 'font-medium tracking-tight',
    component: MicroVisualsHero,
    prompt: MICROVISUALS_PROMPT,
  },
  {
    slug: 'aria-studio',
    title: 'Aria Studio',
    brand: 'Aria Studio',
    tagline: {
      zh: '暗色电影感网页设计机构',
      en: 'Dark cinematic web-design agency',
    },
    description: {
      zh: '两个全屏 section(Hero + Capabilities)+ 液态玻璃 + Framer Motion 模糊/淡入动画。Instrument Serif(斜体标题)+ Barlow(正文)。可复用 FadingVideo(rAF 交叉淡入淡出)+ BlurText 逐词 stagger +"Start a Project" CTA + 数据卡 + 信任 logo 行(Aeon/Vela/Apex/Orbit/Zeno)。',
      en: 'Two full-screen sections (Hero + Capabilities) + liquid glass + Framer Motion blur/fade animations. Instrument Serif (italic headings) + Barlow (body). Reusable FadingVideo (rAF crossfade) + BlurText word stagger + "Start a Project" CTA + stats cards + trust-logo row (Aeon/Vela/Apex/Orbit/Zeno).',
    },
    category: { zh: '机构 · 工作室落地', en: 'Agency · Studio Landing' },
    accent: '#f5f5f5',
    field: 'radial-gradient(circle at 50% 50%, #181818 0%, #000 80%)',
    titleFont: 'font-medium tracking-tight',
    component: AriaStudioLanding,
    prompt: ARIA_STUDIO_PROMPT,
  },
  {
    slug: 'forma',
    title: 'Forma',
    brand: 'Forma',
    tagline: {
      zh: '视频背景 + 联系表单落地页',
      en: 'Video background + contact form landing',
    },
    description: {
      zh: 'Forma 全屏视频背景 + 联系表单。Inter 正文 + Instrument Serif 斜体点缀。桌面端大圆角卡片锁定视口,背景视频填充。"M" 形 SVG logo 胶囊导航 + 多选服务标签(Website/Mobile App/3D & Motion 等)+ 成功态。页脚 hello@forma.co。',
      en: 'Forma fullscreen video background + contact form. Inter body + Instrument Serif italic accent. Large rounded card locks to viewport on desktop, background video fills it. "M" SVG logo pill navbar + multi-select service tags (Website/Mobile App/3D & Motion etc.) + success state. Footer hello@forma.co.',
    },
    category: { zh: '工作室 · 联系页', en: 'Studio · Contact' },
    accent: '#111111',
    field: 'radial-gradient(circle at 50% 60%, rgba(30,30,30,0.5) 0%, #000 75%)',
    titleFont: 'font-medium tracking-tight',
    component: Forma,
    prompt: FORMA_PROMPT,
  },
  {
    slug: 'wanderful',
    title: 'Wanderful',
    brand: 'Wanderful',
    tagline: {
      zh: '旅行品牌 · 电影感 Hero',
      en: 'Travel brand · cinematic hero',
    },
    description: {
      zh: 'Wanderful 旅行品牌全屏电影感 Hero。Wanderful™ 标志 + 分层图像 + 滚动驱动视差 + 旅程感。React + TS + Vite + Tailwind + GSAP + lucide-react,移动优先响应式排版。',
      en: 'Wanderful travel-brand fullscreen cinematic hero. Wanderful™ wordmark + layered imagery + scroll-driven parallax + sense of voyage. React + TS + Vite + Tailwind + GSAP + lucide-react, mobile-first responsive typography.',
    },
    category: { zh: '旅行 · Hero', en: 'Travel · Hero' },
    accent: '#f59e0b',
    field: 'radial-gradient(circle at 50% 50%, #2a1f0a 0%, #000 80%)',
    titleFont: 'font-medium tracking-tight',
    component: Wanderful,
    prompt: WANDERFUL_PROMPT,
  },
  {
    slug: 'convix-software',
    title: 'Convix Software',
    brand: 'Convix Software',
    tagline: {
      zh: 'PR 机构 SaaS 全屏 Hero',
      en: 'PR-agency SaaS fullscreen hero',
    },
    description: {
      zh: 'Convix Software PR 机构 SaaS 全屏 Hero。橙色圆点 + "Convix Software" badge,标题 "The All-In-One Software Powering the Future of PR Agencies",中性配色,简洁 SaaS 布局。React + Vite + Tailwind + lucide-react。',
      en: 'Convix Software PR-agency SaaS fullscreen hero. Orange-dot + "Convix Software" badge, headline "The All-In-One Software Powering the Future of PR Agencies", neutral palette, clean SaaS layout. React + Vite + Tailwind + lucide-react.',
    },
    category: { zh: 'SaaS · PR 机构', en: 'SaaS · PR Agency' },
    accent: '#f97316',
    field: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
    titleFont: 'font-medium tracking-tight',
    component: ConvixSoftware,
    prompt: CONVIX_SOFTWARE_PROMPT,
  },
  {
    slug: 'ai-builder',
    title: 'AI Builder',
    brand: 'AI Builder',
    tagline: {
      zh: 'AI 网站构建器 · 暗色 Hero',
      en: 'AI website builder · dark hero',
    },
    description: {
      zh: 'AI 网站构建器暗色 Hero。全屏背景视频(HLS via hls.js)+ 装饰渐变光晕 + Instrument Sans/Instrument Serif + Inter 字体 + motion 入场动画 + 标题 + CTA。高端现代 AI 产品风格。',
      en: 'AI website-builder dark hero. Fullscreen background video (HLS via hls.js) + decorative gradient glow + Instrument Sans/Instrument Serif + Inter typography + motion entrance animations + headline + CTA. Premium modern AI-product aesthetic.',
    },
    category: { zh: 'AI · 网站构建器', en: 'AI · Website Builder' },
    accent: '#8b5cf6',
    field: 'radial-gradient(circle at 50% 50%, #1a1230 0%, #000 80%)',
    titleFont: 'font-medium tracking-tight',
    component: AiBuilder,
    prompt: AI_BUILDER_PROMPT,
  },
  {
    slug: 'neuralyn',
    title: 'Neuralyn',
    brand: 'Neuralyn',
    tagline: {
      zh: '分析仪表盘 SaaS · 暗色',
      en: 'Analytics dashboard SaaS · dark',
    },
    description: {
      zh: 'Neuralyn 分析仪表盘 SaaS 暗色落地页。--hero-subtitle CSS 变量标题,副文 "Neuralyn helps teams track metrics, goals, and progress with precision.",仪表盘预览 + 功能网格 + 高级暗色 UI。React + Vite + Tailwind + TS + Framer Motion + shadcn/ui。',
      en: 'Neuralyn analytics-dashboard SaaS dark landing. --hero-subtitle CSS var headline, subtitle "Neuralyn helps teams track metrics, goals, and progress with precision.", dashboard preview + feature grid + premium dark UI. React + Vite + Tailwind + TS + Framer Motion + shadcn/ui.',
    },
    category: { zh: 'SaaS · 数据分析', en: 'SaaS · Analytics' },
    accent: '#22d3ee',
    field: 'radial-gradient(circle at 50% 50%, #0b1620 0%, #000 80%)',
    titleFont: 'font-medium tracking-tight',
    component: Neuralyn,
    prompt: NEURALYN_PROMPT,
  },
  {
    slug: 'dot',
    title: 'dot.',
    brand: 'dot.',
    tagline: {
      zh: '安静的每日笔记落地页',
      en: 'Quiet daily-notes landing',
    },
    description: {
      zh: 'dot. 每日笔记落地页。Inter(正文)+ Instrument Serif(标题)+ Nokia Cellphone FC Small(打字)。全屏背景视频 + 居中胶囊导航(Philosophy/Trust/Access/Tribe)+ 主副标题入场 + 手机屏位置循环打字消息("Are you here?" / "Yes, I am." / "Speak soon.")配闪烁光标。',
      en: 'dot. daily-notes landing. Inter (body) + Instrument Serif (title) + Nokia Cellphone FC Small (typing). Fullscreen background video + centered pill navbar (Philosophy/Trust/Access/Tribe) + main/subtitle entrance + looping typed messages ("Are you here?" / "Yes, I am." / "Speak soon.") with blinking cursor on the phone screen.',
    },
    category: { zh: '效率 · 笔记', en: 'Productivity · Notes' },
    accent: '#a3e635',
    field: 'radial-gradient(circle at 50% 60%, rgba(20,30,15,0.5) 0%, #000 75%)',
    titleFont: 'font-medium tracking-tight',
    component: Dot,
    prompt: DOT_PROMPT,
  },
  {
    slug: 'taskly',
    title: 'Taskly',
    brand: 'Taskly',
    tagline: {
      zh: 'Work smarter, achieve faster',
      en: 'Work smarter, achieve faster',
    },
    description: {
      zh: 'Taskly 高保真 "Liquid Glass" Hero。1600px 宽,纯白背景 + 左上蓝色光晕(#60B1FF / #319AFF)。Fustat(粗体)品牌/标题 + Inter 正文。Sticky 强液态玻璃导航 + 右侧玻璃球(mix-blend-screen, hue-rotate -55deg)+ 4.9/5 社交证明 + "Get Started Now" CTA + 信任 logo 行。',
      en: 'Taskly high-fidelity "Liquid Glass" hero. 1600px width, pure-white background + top-left blue glow (#60B1FF / #319AFF). Fustat (bold) brand/headlines + Inter body. Sticky strong-liquid-glass navbar + right-side glassy orb (mix-blend-screen, hue-rotate -55deg) + 4.9/5 social proof + "Get Started Now" CTA + trusted-by logo row.',
    },
    category: { zh: 'SaaS · 任务管理', en: 'SaaS · Task Management' },
    accent: '#319AFF',
    field: 'linear-gradient(135deg, #ffffff 0%, #eaf4ff 100%)',
    titleFont: 'font-medium tracking-tight',
    component: Taskly,
    prompt: TASKLY_PROMPT,
  },
  {
    slug: 'future',
    title: 'Future',
    brand: 'Future',
    tagline: {
      zh: '全屏视频背景 · 紫色品牌',
      en: 'Fullscreen video · purple brand',
    },
    description: {
      zh: 'Future 响应式全屏 Hero。全屏绝对定位 HTML5 视频背景(autoplay/loop/muted/inline)。Manrope(UI/导航)+ Cabin(按钮/标签)+ Instrument Serif(标题)+ Inter(正文)。主紫 #7b39fc,深紫 #2b2344,自定义 Future SVG logo + 导航(Home/Services/Reviews/Contact us)。',
      en: 'Future responsive fullscreen hero. Fullscreen absolute HTML5 video background (autoplay/loop/muted/inline). Manrope (UI/nav) + Cabin (buttons/tags) + Instrument Serif (headlines) + Inter (body). Primary purple #7b39fc, dark purple #2b2344, custom Future SVG logo + nav (Home/Services/Reviews/Contact us).',
    },
    category: { zh: '机构 · Hero', en: 'Agency · Hero' },
    accent: '#7b39fc',
    field: 'radial-gradient(circle at 50% 50%, #1a1030 0%, #000 80%)',
    titleFont: 'font-medium tracking-tight',
    component: FutureHero,
    prompt: FUTURE_PROMPT,
  },
  {
    slug: 'stellar-ai',
    title: 'Stellar.ai',
    brand: 'Stellar.ai',
    tagline: {
      zh: 'AI 平台 · 简洁白底 Hero',
      en: 'AI platform · clean white hero',
    },
    description: {
      zh: 'Stellar.ai 落地 Hero。白底(bg-white),max-w-7xl 居中。左侧 Lucide Star 图标(fill-black)+ "Stellar.ai" 标志。简洁 AI 平台 Hero:导航 + 标题 + CTA + 产品视觉。Inter 字体(Google Fonts)。',
      en: 'Stellar.ai landing hero. White background (bg-white), max-w-7xl centered. Left: Lucide Star icon (fill-black) + "Stellar.ai" wordmark. Clean AI-platform hero with nav, headline, CTA, and product visual. Inter font (Google Fonts).',
    },
    category: { zh: 'AI 平台 · Hero', en: 'AI Platform · Hero' },
    accent: '#0f172a',
    field: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
    titleFont: 'font-medium tracking-tight',
    component: StellarAi,
    prompt: STELLAR_AI_PROMPT,
  },
  {
    slug: 'design-rocket',
    title: 'Design Rocket',
    brand: 'Design Rocket Certificates',
    tagline: {
      zh: 'AI 领导力课程 · 邮件风营销页',
      en: 'AI leadership course · email-style marketing',
    },
    description: {
      zh: 'Design Rocket Certificates AI 领导力课程(与 Microsoft 合作)邮件风营销落地页。区段:Hero、"Build your AI transformation roadmap"、实操课程、个人 AI Transformation Plan 交付物。邮件客户端美学 + 证书图像。React + TS + Vite + Tailwind + lucide-react。',
      en: 'Design Rocket Certificates AI leadership course (with Microsoft) email-style marketing landing. Sections: hero, "Build your AI transformation roadmap", hands-on curriculum, personal AI Transformation Plan deliverable. Email-client aesthetic + certificate imagery. React + TS + Vite + Tailwind + lucide-react.',
    },
    category: { zh: '教育 · AI 领导力', en: 'Education · AI Leadership' },
    accent: '#f59e0b',
    field: 'linear-gradient(135deg, #fffaf0 0%, #fde8c4 100%)',
    titleFont: 'font-medium tracking-tight',
    component: DesignRocket,
    prompt: DESIGN_ROCKET_PROMPT,
  },
  {
    slug: 'xero',
    title: 'Xero',
    brand: 'Xero',
    tagline: {
      zh: '粉紫渐变弧 · 单页 Hero',
      en: 'Pink-magenta gradient arc · single-page hero',
    },
    description: {
      zh: 'Xero 单页 Hero。React + TS + Vite + Inter(300–800)。Hero 使用纯全局 CSS(无 Tailwind 工具类)。粉紫渐变弧是唯一紫/靛色品牌元素,其余中性。按规范精确还原布局与排版。',
      en: 'Xero single-page hero. React + TS + Vite + Inter (300–800). Hero uses plain global CSS (no Tailwind utilities). A pink-magenta gradient arc is the only purple/indigo branding; the rest is neutral. Recreates the specified layout and typography exactly.',
    },
    category: { zh: 'SaaS · Hero', en: 'SaaS · Hero' },
    accent: '#ec4899',
    field: 'linear-gradient(135deg, #fff5fb 0%, #ffe0ef 100%)',
    titleFont: 'font-medium tracking-tight',
    component: Xero,
    prompt: XERO_PROMPT,
  },
  {
    slug: 'quietpress',
    title: 'quietpress',
    brand: 'quietpress',
    tagline: {
      zh: '黑胶唱片厂牌 · 暗色 Hero',
      en: 'Vinyl record label · dark hero',
    },
    description: {
      zh: 'quietpress 虚构黑胶唱片厂牌全屏 Hero。单视口高度无滚动。Helvetica Regular 正文,暗色电影质感,唱片/黑胶意象,标题 + 发行 CTA。React + TS + Tailwind + Vite + lucide-react,无其他 UI 库。',
      en: 'quietpress fictional vinyl-record label fullscreen hero. Single viewport height, no scroll. Helvetica Regular body, dark cinematic mood, record/vinyl iconography, headline + release CTA. React + TS + Tailwind + Vite + lucide-react, no other UI libraries.',
    },
    category: { zh: '音乐 · 唱片厂牌', en: 'Music · Record Label' },
    accent: '#b91c1c',
    field: 'radial-gradient(circle at 50% 50%, #1a0808 0%, #000 80%)',
    titleFont: 'font-medium tracking-tight',
    component: Quietpress,
    prompt: QUIETPRESS_PROMPT,
  },
  {
    slug: 'duolingo',
    title: 'Duolingo',
    brand: 'Duolingo',
    tagline: {
      zh: 'Duolingo 设计系统风格指南',
      en: 'Duolingo design-system style guide',
    },
    description: {
      zh: 'Duolingo 设计系统风格指南落地页。Nunito(400–900)+ "Feather Bold" 展示字体。CSS 颜色变量:--green #58CC02、--dark-blue #10103E、--blue #1CB0F6,加红/橙/金。固定白色导航(Duolingo logo + "STYLE GUIDE" + Colors/Type/Buttons/Cards/Components)+ 绿到白渐变 Hero + 颜色/排版/按钮(主/成功/危险)/卡片面板。',
      en: 'Duolingo design-system style-guide landing. Nunito (400–900) + "Feather Bold" display. CSS color vars: --green #58CC02, --dark-blue #10103E, --blue #1CB0F6, plus red/orange/golden. Fixed white navbar (Duolingo logo + "STYLE GUIDE" + Colors/Type/Buttons/Cards/Components) + green-to-white gradient hero + colors/typography/button (primary/success/danger)/cards panels.',
    },
    category: { zh: '设计系统 · 风格指南', en: 'Design System · Style Guide' },
    accent: '#58CC02',
    field: 'linear-gradient(135deg, #e7fbe0 0%, #ffffff 50%, #e0e7ff 100%)',
    titleFont: 'font-medium tracking-tight',
    component: Duolingo,
    prompt: DUOLINGO_PROMPT,
  },
  {
    slug: 'measured',
    title: 'Measured',
    brand: 'Measured',
    tagline: {
      zh: '健康穿戴 · 光标聚光灯 Hero',
      en: 'Wellness wearable · cursor spotlight hero',
    },
    description: {
      zh: 'Measured 健康/养生穿戴设备全屏 Hero。暗色/情绪化美学 + 分层图像 + 光标跟随聚光灯揭示效果 + 磨砂玻璃导航。单 100vh 视口,高端产品摄影质感。React + Vite + Tailwind + TS。',
      en: 'Measured health/wellness wearable fullscreen hero. Dark/moody aesthetic + layered imagery + cursor-following spotlight reveal + frosted-glass navigation. Single 100vh viewport, premium product-photography mood. React + Vite + Tailwind + TS.',
    },
    category: { zh: '健康 · 穿戴设备', en: 'Health · Wearable' },
    accent: '#0ea5e9',
    field: 'radial-gradient(circle at 50% 50%, #0a1420 0%, #000 80%)',
    titleFont: 'font-medium tracking-tight',
    component: Measured,
    prompt: MEASURED_PROMPT,
  },
  {
    slug: 'tiny-trails',
    title: 'TinyTrails',
    brand: 'TinyTrails',
    tagline: {
      zh: '儿童品牌 · 动画 404 页',
      en: 'Kids brand · animated 404 page',
    },
    description: {
      zh: 'TinyTrails 儿童品牌全屏动画 404 错误页。单 App.tsx,Inter(400–900,Google Fonts)。单视口高度无滚动,趣味儿童友好插画与动效,友好的 "page not found" 文案。React + Tailwind + Lucide。',
      en: 'TinyTrails children\'s brand fullscreen animated 404 page. Single App.tsx, Inter (400–900, Google Fonts). Single viewport height, no scroll, playful kid-friendly illustration and motion, friendly "page not found" messaging. React + Tailwind + Lucide.',
    },
    category: { zh: '儿童 · 404 页', en: 'Kids · 404 Page' },
    accent: '#fb7185',
    field: 'linear-gradient(135deg, #fff5f7 0%, #ffe4ec 100%)',
    titleFont: 'font-medium tracking-tight',
    component: TinyTrails,
    prompt: TINY_TRAILS_PROMPT,
  },
  {
    slug: 'axon',
    title: 'Axon',
    brand: 'Axon',
    tagline: {
      zh: '数字员工平台 · 全屏视频 Hero',
      en: 'Digital workers platform · fullscreen video hero',
    },
    description: {
      zh: 'Axon 部署数字员工处理日常流程的平台全屏 Hero。循环背景视频 + 叠加内容。Instrument Serif(常规+斜体)+ Inter(400/500/600),正文色 #1B133C。居中玻璃胶囊导航(自定义 V 形 SVG logo,Features/Plans/Security/About)+ "Funded by Y Combinator" badge(橙色 Y 图标)+ 标题 + CTA。',
      en: 'Axon platform (deploys digital workers for mundane workflows) fullscreen hero. Looping background video + overlaid content. Instrument Serif (regular+italic) + Inter (400/500/600), body color #1B133C. Centered glass pill navbar (custom chevron SVG logo, Features/Plans/Security/About) + "Funded by Y Combinator" badge (orange Y icon) + headline + CTA.',
    },
    category: { zh: 'SaaS · 数字员工', en: 'SaaS · Digital Workers' },
    accent: '#1B133C',
    field: 'radial-gradient(circle at 50% 60%, rgba(27,19,60,0.4) 0%, #f5f5f7 80%)',
    titleFont: 'font-medium tracking-tight',
    component: Axon,
    prompt: AXON_PROMPT,
  },
]
