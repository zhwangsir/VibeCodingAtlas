import animate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        instrument: ['Instrument Serif', 'serif'],
        kanit: ['Kanit', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        'source-serif': ['Source Serif 4', 'serif'],
        almarai: ['Almarai', 'sans-serif'],
        podium: ['FSP DEMO PODIUM Sharp 4.11', 'Anton', 'Inter', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
        // Smith portfolio — body / display
        body: ['Inter', 'sans-serif'],
        display: ['Instrument Serif', 'serif'],
        // Cosmos — heading / body
        heading: ['Instrument Serif', 'serif'],
        barlow: ['Barlow', 'sans-serif'],
        // Orbis.Nft — Anton 标题 / Condiment 装饰
        grotesk: ['Anton', 'sans-serif'],
        condiment: ['Condiment', 'cursive'],
        // Foldcraft — Geist 字体
        geist: ['Geist', 'sans-serif'],
        // Viktor portfolio — Figtree 字体
        figtree: ['Figtree', 'sans-serif'],
        // CodeNest — Plus Jakarta Sans 字体
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        // SynapseX — Space Mono 字体(覆盖 sans/serif/mono)
        spacemono: ['"Space Mono"', 'monospace'],
        antonsc: ['"Anton SC"', 'sans-serif'],
        // Power AI — General Sans 字体(标题)
        generalsans: ['"General Sans"', 'sans-serif'],
        // Organic Visions — Garamond 标题字体
        garamond: ['Garamond', '"Times New Roman"', 'serif'],
        // Aurai — Askan Light 标题字体(在线引入)
        askan: ['"Askan Light"', 'serif'],
      },
      screens: {
        mobile: { max: '809.98px' },
        'md-tablet': { min: '810px', max: '1199.98px' },
      },
      colors: {
        // Smith portfolio — HSL custom properties
        bg: 'hsl(var(--bg))',
        surface: 'hsl(var(--surface))',
        // Orbis.Nft — 太空 NFT 色板
        cream: '#EFF4FF',
        neon: '#6FFF00',
        'text-primary': 'hsl(var(--text))',
        stroke: 'hsl(var(--stroke))',
        // shadcn/ui HSL 变量映射模式 — 通用基础
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        // Mindloop — hero subtitle 颜色
        'hero-subtitle': 'hsl(var(--hero-subtitle))',
        // Sentinel AI — 导航按钮 + 最深背景
        'nav-button': 'hsl(var(--nav-button))',
        'hero-bg': 'hsl(var(--hero-bg))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)', filter: 'blur(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-in-down': 'fade-in-down 0.2s ease-out forwards',
      },
    },
  },
  plugins: [animate],
}
