# Prompt: IECC 2026 Poster (Mission 1)

## Role
You are a poster designer and Remotion developer. Build one poster as a Remotion `Still`, render it to PNG and PDF, then check the result yourself and revise it.

## Context
Competition: **International Environmental Coding Competition (IECC) 2026**
Mission 1: **"Power Your City's First Needs."**

Official brief:
- The poster must present **a problem or need in my city**.
- The poster must explain **how a coding project could help solve it**.
- It must be submitted before taking the Qualifier Test.

## My Details (fill in before running)
- Name / team: `[NAMA]`
- City: `[KOTA]`
- Problem or need: `[MASALAH, contoh: boros listrik di sekolah, sampah menumpuk, krisis air bersih]`
- Key facts or data (optional): `[DATA / ANGKA / SUMBER]`
- Coding project idea: `[IDE PROYEK, contoh: sensor + dashboard, game edukasi Scratch, simulasi di Roblox]`
- Tools used: `[Scratch / Roblox Studio / Python / dll]`
- Language: English

## Poster Content Structure
Keep text short. Poster text must be readable from 2 meters away.

1. **Title**: catchy, max 8 words, tied to the Mission 1 theme
2. **The Problem**: what is happening in `[KOTA]`, with 1-2 facts or numbers
3. **Why It Matters**: effect on people and the environment
4. **Our Coding Solution**: what the project does, in 3 simple steps (Input → Process → Output)
5. **Expected Impact**: 2-3 concrete results
6. **Call to Action**: one closing line
7. **Footer**: name/team, "IECC 2026 - Mission 1"

Do not invent statistics. If a number is not provided above, leave it out or use a clearly marked placeholder.

## Visual Style
Match the look of the competition's official banner (see `references/`):
- Bright, friendly, youthful but clean, not childish
- Light sky-blue gradient background, soft and airy
- Yellow as the main accent (headline highlight, section badges, buttons)
- Dark teal / green for headings and environmental accents
- Rounded, bold sans-serif for titles; a clean sans-serif for body text
- Style the "CODING" element with a techy touch (monospace label, small code-like details)
- Flat illustrations or simple icons: leaf, globe, lightbulb, city skyline, circuit lines
- Generous whitespace, strong hierarchy, one clear focal point
- Avoid: generic purple gradients, cluttered layouts, tiny text, stock-photo look

Optional: place the logo at `assets/logo.svg` in the header if it exists.

## Technical Requirements
- Remotion project in `src/`, with one `Still` composition named `Poster`
- Size: A3 portrait, composition `1191 x 1684`, rendered with `--scale=3` for print quality
- Load fonts from `assets/fonts/` using local files (no remote font loading)
- Put all text content in one `content.ts` file so I can edit it easily
- Use CSS variables or a `theme.ts` for colors and spacing
- Illustrations as inline SVG or CSS shapes (no remote images)

Render commands:
```bash
npx remotion still src/index.ts Poster out/poster.png --scale=3
```
Also export a PDF version (via Playwright or Remotion's output) at `out/poster.pdf`.

## Workflow
1. Read everything in `references/`, `assets/`, and `AGENTS.md` first.
2. Propose the layout in a short outline (zones, hierarchy, palette), then build it.
3. Render the PNG, open it, and critique it honestly: text size, contrast, alignment, empty areas, overflow.
4. Fix the issues and re-render. Repeat at least 2 rounds.
5. Finish with the final files in `out/` and a 3-line summary of design choices.

## Checklist Before Finishing
- [ ] Problem and coding solution are both clearly visible
- [ ] No text is cut off or overlapping
- [ ] Body text is at least ~24px at composition size
- [ ] Contrast is readable on the light background
- [ ] Colors and fonts feel consistent with the IECC banner
- [ ] Mission 1 title appears correctly: "Power Your City's First Needs"
- [ ] Output exists as PNG and PDF
