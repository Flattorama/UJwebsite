# Design Guidelines: Unapologetically Jewish

## Design Approach
**Brutalist Activism Aesthetic** - Bold, unapologetic design inspired by protest movements and direct action campaigns. Think aggressive typography, stark contrasts, and industrial design elements. Reference: protest posters, street activism graphics, punk aesthetics.

## Typography System

**Heading Hierarchy:**
- H1 (Hero): text-6xl md:text-8xl lg:text-9xl, font-black, uppercase, tracking-tighter
- H2 (Section): text-5xl md:text-7xl, font-black, uppercase, tracking-tighter  
- H3 (Subsection): text-2xl md:text-4xl, font-black, uppercase
- Body: text-lg md:text-xl for primary, text-base for secondary

**Font Families:**
- Primary: System sans-serif with font-black weights
- Accent/Technical: font-mono for quotes, statistics, and data points

**Typography Techniques:**
- Aggressive letter-spacing with tracking-tighter for impact
- ALL CAPS for major headings and CTAs
- Mix regular weight body with font-black emphasis
- Italic for quotes and voice

## Layout System

**Spacing Units:** Use Tailwind's standard scale with emphasis on generous spacing
- Section padding: py-24 md:py-32
- Component gaps: gap-8 to gap-12
- Container: max-w-7xl with px-4 sm:px-6 lg:px-8

**Layout Patterns:**
- Full-screen hero sections (h-screen)
- Split-screen 50/50 layouts (md:flex-row with w-1/2)
- Centered content with max-w-4xl for readability
- Grid layouts for pillar/feature cards (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)

## Component Library

**Navigation:**
- Fixed position with bg-black on scroll, transparent initially
- Bold uppercase links with tracking-widest
- Red hover states throughout
- Prominent DONATE CTA button
- Full-screen mobile overlay menu

**Buttons:**
- Primary: bg-white text-black with border-4 border-white, hover:bg-red-600
- Bold CTAs: px-8 py-4, font-black, font-mono
- Include chevron/arrow icons for directional actions
- Box shadows on important CTAs

**Cards/Containers:**
- Heavy borders: border-4 border-black
- Brutalist shadows: shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]
- Slight rotation for emphasis: -rotate-1 or rotate-1
- Background overlays: bg-white/5 with border-white/10 on dark backgrounds

**Content Boxes:**
- Border-left accents: border-l-4 border-red-600 pl-4 for quotes
- Inline highlights: bg-black text-white px-2 for emphasis
- Box overlays: p-6 bg-white/5 border border-white/10

**Icons:**
- Use Lucide React icons throughout
- Size: w-12 h-12 for featured icons
- Red accent color for list bullets and decorative elements

## Visual Treatment

**Color Usage:**
- Backgrounds: Strict black (#000000) and white (#FFFFFF) alternation
- Accent: Red (#DC2626 / red-600) for CTAs, borders, emphasis
- Grays: Only for subtle overlays (gray-800, gray-300) and backgrounds (zinc-900)

**Image Treatment:**
- Grayscale filter on all photos (grayscale)
- High contrast: contrast-125 brightness-50
- Dark overlays: bg-black/60 mix-blend-multiply
- Gradient overlays: bg-gradient-to-t from-black via-transparent

**Effects:**
- Minimal animations: Only animate-bounce for scroll indicator, subtle hover transforms
- Text effects: text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400
- Blend modes: mix-blend-difference for white text over varying backgrounds

## Images

**Hero Section:** Large background image with protest/crowd imagery, heavily treated with grayscale, high contrast, and dark overlay (opacity-40 to 60%)

**Fighter Profile:** Professional headshot treated with grayscale, high contrast, gradient overlay from bottom, positioned left side of split layout

**Background Textures:** Urban/gritty textures as subtle overlays where needed

## Page Structure

Full-screen sections alternating black/white backgrounds: Hero (black) → Mission (white) → Fighter (black split) → Pillars (zinc-900) → Media → Merch → Get Involved → Footer (black)

Each section should feel complete and impactful with bold headings, supporting content, and clear CTAs.