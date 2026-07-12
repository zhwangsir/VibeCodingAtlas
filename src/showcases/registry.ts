import type { ComponentType } from 'react'
import LithosHero from '../lithos/LithosHero'
import SereneApp from '../serene/SereneApp'
import SpaceTravelApp from '../spacetravel/SpaceTravelApp'
import BloomHero from '../bloom/BloomHero'
import VelorahHero from '../velorah/VelorahHero'
import JackPortfolio from '../jack/JackPortfolio'

export type Showcase = {
  /** URL path segment, e.g. "lithos" → "/lithos" */
  slug: string
  /** Display title */
  title: string
  /** Brand / client name */
  brand: string
  /** One-line tagline shown large on the card */
  tagline: string
  /** Short description */
  description: string
  /** Category label, e.g. "Geology", "Beauty & Wellness" */
  category: string
  /** Accent hex used for hover glow / label color */
  accent: string
  /** CSS background for the card's visual field */
  field: string
  /** Display font class for the card title (ties back to the brand) */
  titleFont: string
  /** The React component rendered at /slug */
  component: ComponentType
}

export const showcases: Showcase[] = [
  {
    slug: 'lithos',
    title: 'Lithos',
    brand: 'Lithos',
    tagline: 'Layers hold tales of time',
    description:
      'Dark geology hero with a cursor-following spotlight that reveals a second image through a soft circular mask.',
    category: 'Geology · Hero',
    accent: '#e8702a',
    field:
      'radial-gradient(120% 100% at 20% 10%, #2a2118 0%, #120e0a 45%, #050403 100%)',
    titleFont: 'font-playfair italic',
    component: LithosHero,
  },
  {
    slug: 'serene',
    title: 'Serene',
    brand: 'Serene',
    tagline: 'Gentle touch. Radiant presence.',
    description:
      'Luxury beauty & wellness landing with a video hero, animated mobile menu, and a parallax quote section.',
    category: 'Beauty & Wellness · Landing',
    accent: '#6BADC4',
    field:
      'linear-gradient(160deg, #010A17 0%, #0A4267 45%, #20658E 75%, #6BADC4 100%)',
    titleFont: 'font-instrument',
    component: SereneApp,
  },
  {
    slug: 'space-travel',
    title: 'Aether',
    brand: 'Aether Voyages',
    tagline: 'Venture Past Our Sky',
    description:
      'Cinematic space-travel landing with looping background videos, rAF-driven crossfades, liquid-glass chrome, and Framer Motion blur-in entrances.',
    category: 'Space Travel · Cinematic',
    accent: '#9bb8ff',
    field:
      'radial-gradient(120% 100% at 50% 0%, #1a2238 0%, #0a0e1a 45%, #000000 100%)',
    titleFont: 'font-instrument italic',
    component: SpaceTravelApp,
  },
  {
    slug: 'bloom',
    title: 'Bloom',
    brand: 'Bloom',
    tagline: 'Innovating the spirit of bloom AI',
    description:
      'AI-powered plant/floral design platform. Two-panel liquid-glass split over a looping video, strict grayscale, Poppins + Source Serif 4 italic accents.',
    category: 'AI · Floral Design',
    accent: '#e6e6e6',
    field:
      'radial-gradient(120% 100% at 30% 20%, #1a1f1a 0%, #0a0d0a 50%, #030403 100%)',
    titleFont: 'font-poppins',
    component: BloomHero,
  },
  {
    slug: 'velorah',
    title: 'Velorah',
    brand: 'Velorah®',
    tagline: 'Where dreams rise through the silence',
    description:
      'Cinematic minimalist hero over a fullscreen looping video. Deep navy theme, Instrument Serif display, fade-rise staggered entrances, liquid-glass CTA.',
    category: 'Studio · Cinematic',
    accent: '#a8c4e6',
    field:
      'radial-gradient(120% 100% at 50% 30%, #0a2740 0%, #051a2e 50%, #02101f 100%)',
    titleFont: 'font-instrument italic',
    component: VelorahHero,
  },
  {
    slug: 'jack',
    title: 'Jack',
    brand: 'Jack — 3D Creator',
    tagline: "Hi, i'm jack",
    description:
      '3D Creator portfolio. Dark Kanit typography, magnetic portrait, scroll-driven dual marquee, char-by-char About reveal, white Services panel, and sticky-stacking project cards.',
    category: 'Portfolio · 3D Creator',
    accent: '#bbccd7',
    field:
      'radial-gradient(120% 100% at 50% 0%, #1a1d22 0%, #0c0c0c 60%, #050505 100%)',
    titleFont: 'font-kanit',
    component: JackPortfolio,
  },
]
