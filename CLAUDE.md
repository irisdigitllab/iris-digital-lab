# CLAUDE.md — IRIS Digital Lab (sitio web)

> Hereda las reglas globales de `X:\Proyectos\CLAUDE.md` (Iris · push solo con la cuenta Iris · GitHub = fuente de verdad · nunca push sin OK visual de Robert).

## Proyecto
- Repo: `irisdigitllab/iris-digital-lab` · rama `master`
- Stack: Vite + React (sin TypeScript) + GSAP + ScrollTrigger + CSS puro con variables (sin Tailwind)
- Deploy Netlify · Figma source file `i8khdC1vnhbDPeGXe10oNG`
- Componentes: `src/components/<Nombre>/<Nombre>.{jsx,css}` · variables globales en `src/styles/variables.css`

## Reglas de diseño (CRITICAS — repetidas por Robert, evitar regresiones)
- **SIN glows en textos amarillos**: nada de `drop-shadow` / `filter` / `text-shadow` que brille sobre `var(--accent)`.
- **Fondo SIEMPRE `#121212`** (nunca marrón/rojizo aunque el Figma lo insinúe por contraste).
- **Stroke `1px #6f6f72`** en todas las cards.
- **Logo del footer en una sola línea** horizontal (no apilado en 3).
- Wordmark del banner de servicios en gris/negro (no amarillo).
- Partículas SOLO en secciones de fondo plano oscuro (NO en el CTA "Let's Work Together").
- La tipografía del wordmark es un PNG (`iris-wordmark.png`); no existe el .ttf/.otf.

## Tokens
- `--bg-primary #121212` · acento `#e8d300` (general) / `#f2df23` (testimonios/CTA) · texto soft `#c2b5b5`
- **NUNCA commitear tokens/keys** (el PAT de Figma se filtró una vez → usar `.env`, que está en `.gitignore`).
