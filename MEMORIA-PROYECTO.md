# Memoria del proyecto — IRIS Digital Lab

> Volcado consolidado de toda la memoria persistente de Claude sobre este proyecto.
> Generado: 2026-05-30. Las fechas entre paréntesis indican cuándo se registró cada observación.
> Nota: son observaciones puntuales; verificar contra el código actual antes de darlo por hecho.

---

## 1. Perfil del usuario

Fundador/operador de **IRIS Digital Lab**, agencia digital en el sur de Florida que ofrece identidad de marca, desarrollo web, campañas de marketing, producción de video y automatización con agentes de IA.

- Técnico suficiente para moverse por código, Netlify y GitHub, pero **no es un desarrollador frontend profundo** — las explicaciones deben centrarse en el *qué* y el *por qué*, no en minucias de implementación.
- Construye webs para clientes (HVAC, dental, veterinaria, coaching, hostelería, hipotecas) — muchas ya desplegadas en el mismo equipo de Netlify.
- Mantiene varios repos de GitHub (`mister-mortgage-usa`, `dr-alliance-website`, `candela-cafe-market`, `vitalis-animal-hospital`, etc.).
- Idioma de trabajo preferido: **español**. El sitio en sí es bilingüe (ES/EN).

---

## 2. Preferencias de comunicación

- **Idioma: español** por defecto (con algún término técnico en inglés).
- **Respuestas concisas, cero relleno.** Sin saludos ni cierres.
- **Pragmático sobre exhaustivo.** Ante tradeoffs, recomendar un camino y explicar el *por qué* brevemente — no enumerar todas las opciones salvo que se pida.
- **Preguntar antes de trabajo arriesgado/caro.** Al usuario le gusta que se le hagan preguntas aclaratorias cuando el siguiente paso tiene varias direcciones válidas (ej. "modal vs página", "video vs foto para hover").
- **Listar dependencias pendientes explícitamente al final.** Cuando el trabajo depende de assets que el usuario no ha entregado, listar lo que falta en un bloque pequeño "Pendientes".

**Por qué:** Dirige una agencia y tiene tiempo limitado. Quiere que se ejecute, no prosa para leer.

---

## 3. Visión general del sitio

Sitio de marketing público de IRIS Digital Lab. Bilingüe ES/EN con toggle de idioma (por defecto desde el navegador).

**Stack**
- React 19 + Vite 8
- React Router DOM 7 (rutas: `/` y `/services/:slug`)
- GSAP + ScrollTrigger para animaciones de reveal y coreografía del Hero
- Componente canvas de partículas personalizado
- Netlify Forms para el asistente de presupuesto (quote wizard)

**Páginas / secciones clave**
- Home: Hero → Acordeón de servicios → Portfolio → CTA → Testimonios → QuoteForm (asistente de 4 pasos).
- ServicePage (`/services/[slug]`): hero con video/foto, grid "What's included", proceso (4 pasos), portfolio relacionado, FAQ, CTA final, navegación al siguiente servicio, CTA sticky en móvil.

**Características de UI distintivas**
- Cursor personalizado = isotipo de Iris en desktop (oculto en táctil).
- Hero: marquee animado "IRIS DIGITAL LAB", pill glassmorphism con borde de gradiente que sigue el ratón, efecto máquina de escribir en la línea de acento amarilla, CTA pulsante + botón magnético.
- Acordeón de servicios: tarjeta de media que sigue al cursor (rectangular 16:9 para videos, cuadrada para fotos) por fila.
- Componente TypewriterText aplicado a cada título de acento amarillo.
- Portfolio: 5 categorías que coinciden con los slugs de servicios; las cards web abren la URL directamente, las de video abren un `VideoPopup` minimalista que reproduce el mp4 local.

**Por qué:** Diferenciarse de webs de agencia genéricas y mostrar trabajo real directamente (videos y enlaces web reales en vez de embeds).

---

## 4. Preferencias de estilo (fijadas)

- **Acento amarillo (`var(--accent)`)** es la señal de marca. Usar con moderación: títulos amarillos, glow del CTA, puntos de acento en pills. Nunca amarillo para texto de cuerpo.
- **Máquina de escribir en títulos de acento amarillo** es obligatorio. Usar `<TypewriterText>` con `triggerOnView` para títulos in-section y `startDelay` para títulos de hero / carga de página.
- **Glassmorphism** en pills/cards flotantes (hero pill, etc.) con **borde de gradiente radial que sigue el ratón** — replicar la técnica (CSS vars `--mx`/`--my` + máscara `::before`) al añadir nuevos elementos flotantes prominentes.
- **Cursor personalizado (isotipo Iris) solo en desktop** es parte de la experiencia. Si una sección tiene su propio overlay de cursor (cursor-card de servicios), dejar que coexistan.
- **No más motion dinámico del necesario** — el usuario descartó explícitamente las medialunas animadas del Hero por coste; el motion existente (marquee, typewriter, glow) ya da sensación de vida.
- **El cursor-card de servicios es rectangular (16:9) para videos y cuadrado (~280×200) para fotos** — mantener la distinción; los videos necesitan espacio horizontal.

**Por qué:** El usuario pidió un look "premium / cinematográfico" pero no quiere que cada elemento vibre. El presupuesto de motion es finito.
**Cómo aplicar:** Al añadir una sección nueva, por defecto layout estático + una animación ancla (reveal de entrada, micro-interacción hover). Recurrir al typewriter solo si el título es amarillo.

---

## 5. Convenciones de assets

**Carpetas de origen en bruto** (NO commiteadas — en `.gitignore`):
- `videos de servicios/` — videos originales de clientes (enormes, 30-180MB cada uno). El usuario deja los nuevos aquí.
- `fotos/` — imágenes de diseño/referencia en bruto.

**Assets publicados** (commiteados, servidos por Vite/Netlify desde `/`):
- `public/videos/services/*.mp4` — clips de 12s, 720p crf 30, sin audio, para cursor-card y hero de ServicePage.
- `public/videos/portfolio/*.mp4` — completos, 720p crf 28, con audio, para reproducción en VideoPopup.
- `public/portfolio/web/*.jpg` — capturas de webs de clientes (descargadas vía `https://s.wordpress.com/mshots/v1/...`).
- `public/assets/*` — logos, fondo del hero sin texto, isotipo 3D de IRIS, etc.

**Receta de compresión** (ffmpeg en `C:\Users\rmace\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-8.1-full_build\bin\ffmpeg.exe`):
- Cursor-card / hero de servicio: `-t 12 -vf scale=720:-2,fps=24 -c:v libx264 -crf 30 -preset slow -an -movflags +faststart`
- Modal de portfolio: `-vf scale=-2:720,fps=30 -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 96k -movflags +faststart`

**Tip mshots de WordPress:** La primera petición devuelve un placeholder (8.7 KB). Re-pedir tras ~10s obtiene la captura real. Usar un pequeño bucle de polling.

**Por qué:** Mantiene el repo pequeño (bajo 50MB) sirviendo media rica. Los masters en bruto quedan localmente en la máquina del usuario.

---

## 6. Pipeline de deploy

**Repo**: `irisdigitllab/iris-digital-lab` en GitHub (rama `master`).
**URL de producción**: `https://iris-digital-lab.netlify.app` (renombrada 2026-05-12 desde `jazzy-hamster-7c8e9d`; `irisportfolio` estaba tomado).
**Netlify site ID**: `7a36a492-b92a-4c8b-872b-3f5920bff644`.

**MÉTODO PREFERIDO — Netlify CLI (comprobar PRIMERO):** El CLI de Netlify está instalado (`netlify-cli`, npm global) y autenticado como *Iris Digital Lab*, proyecto vinculado vía `.netlify/state.json`. En Windows el comando `netlify` NO está en el PATH — resolver el binario: `$bin = Join-Path (npm prefix -g) "netlify.cmd"`. Deploy a prod: `npm run build; & $bin deploy --prod --dir=dist`. El usuario quiere explícitamente que se compruebe el CLI primero.

**Pipeline de GitHub Actions (ARREGLADO Y FUNCIONANDO a 2026-05-25):**
1. `git push origin master` → dispara `.github/workflows/deploy.yml`
2. El workflow corre `npm ci` + `npm run build` y despliega `./dist` vía `nwtgck/actions-netlify@v3.0`
3. Secrets requeridos en el repo: `NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID`
4. `netlify.toml` declara: publish=dist, command=npm run build, NODE_VERSION=20, redirect SPA `/* → /index.html`
5. **Arreglado 2026-05-25:** ambos secrets estaban obsoletos. `NETLIFY_SITE_ID` corregido a `7a36a492-...` y `NETLIFY_AUTH_TOKEN` reemplazado con un PAT nuevo (cuenta info@irisdigitallab.com). **Gotcha:** fijar secrets de GitHub con `gh secret set NAME --body "value"`, NO por pipe (`"value" | gh secret set` añade un newline → `Not Found` / error de HTTP header).

**Por qué:** Dos veces el sitio en vivo se quedó atrás de GitHub porque el deploy de Actions falló en silencio; el CLI es el camino fiable.
**Cómo aplicar:** Para publicar, build + `netlify deploy --prod` vía CLI. No confiar en el checkmark verde de Actions — verificar el bundle en vivo (curl al `/assets/index-*.js` y grep del código nuevo) tras cualquier deploy.

---

## 7. Gotcha técnico — overlay fixed dentro de contenedor animado con GSAP

El overlay del menú hamburguesa móvil (`.navbar__mobile`) se veía transparente porque se renderizaba **dentro de `<header className="navbar">`**, y el navbar recibe una animación de entrada GSAP (`gsap.fromTo(navRef, {y:-80}, {y:0})`) que deja un `transform: translate(0,0)` inline persistente en el header. Un ancestro con `transform` se convierte en el bloque contenedor de los descendientes `position: fixed` — así que el overlay fixed se posicionó contra la caja del header (~90px) en vez del viewport, colapsando `inset:70px 0 0` a una franja de ~20px. El fondo opaco `#121212` solo pintaba esa franja; los links del nav desbordaban visiblemente sobre la página, leyéndose como "transparente".

**Fix aplicado (2026-05-25):** mover `.navbar__mobile` FUERA de `<header>` (hermano en un fragment) para que su posicionamiento fixed sea relativo al viewport de nuevo. El color de fondo nunca fue el bug real.

**Cómo aplicar:** En este codebase, nunca anidar un overlay `position: fixed` a pantalla completa dentro de un elemento animado con GSAP. Renderizar overlays como hermano del contenedor animado (o vía portal). Si un elemento fixed se comporta raro, revisar ancestros por `transform`/`filter`/`will-change`/`perspective` — incluyendo transforms inline de GSAP.

---

## 8. Proyectos Netlify del equipo IRIS (referencia)

Todos bajo el equipo `6993616b718d0c1f9bfaa17c`. Listados por nombre de proyecto Netlify → URL primaria → cliente.

**Sitios de clientes activos:**
- `mister-mortgage-usa` → mister-mortgage-usa.netlify.app → Mister Mortgage USA
- `mentalidad-invicta` → mentalidad-invicta.netlify.app → **Cris Vega** (marca de coaching)
- `dr-alliance` → dr-alliance.netlify.app → Dr. Alliance (HVAC, *no* médico — confusión común)
- `candela-cafe-menu` → candela-cafe-menu.netlify.app → Candela & Café Market (menú digital)
- `candela-cafe-market` → candela-cafe-market.netlify.app → Candela & Café Market (sitio principal)
- `praxis-graphics-signs` → **go.praxisgraphics.com** (dominio propio) → Praxis Graphics & Signs
- `vitalis-animal-hospital` → vitalis-animal-hospital.netlify.app → Vitalis Animal Hospital (Cutler Bay, FL)
- `miami-lux-resort` → miami-lux-resort.netlify.app → Miami Lux Resort

**En vivo con hosting propio (no en Netlify):** `airbestpros.com` — Air Best Pros (HVAC).

**Omitir al listar trabajo de clientes** (internos/backend, NO comercializables):
- `iris-digital-lab` (este sitio, site-id `7a36a492-b92a-4c8b-872b-3f5920bff644`, URL https://iris-digital-lab.netlify.app)
- `deepframe-unified` y cualquier cosa con "deepframe" en el nombre (portal interno)
- Repos con "discord", "bridge", "ai-messaging-service", "plane-railway", "empire-ai-docs" (backend / bots)

**Cómo aplicar:** Cuando el usuario menciona un cliente por nombre, cruzar referencia aquí antes de asumir. Especialmente Dr. Alliance — es HVAC, no médico.
