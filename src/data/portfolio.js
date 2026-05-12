// Portfolio data — proyectos reales con videos locales y screenshots en /public.
// Categorías espejean las páginas de servicios (src/data/services.js).

export const categories = [
  { slug: 'brand-identity',       label: 'Brand Identity' },
  { slug: 'website-development',  label: 'Web Development' },
  { slug: 'marketing-campaigns',  label: 'Marketing' },
  { slug: 'video-production',     label: 'Video Production' },
  { slug: 'ai-automation',        label: 'AI Automation' },
]

const cdn = (id) => `https://cdn.myportfolio.com/4be979e0-07d6-4385-8cac-816b19e45893/${id}`

// 1280w cover variants (hashes from myportfolio responsive set) — usados como poster de videos
export const covers = {
  finestDental: cdn('a6d3de66-3ff0-4204-9b0f-883339df3a1d_carw_4x3x1280.png?h=c9db3087f99db766bec75fa3206d2949'),
  maqSmile: cdn('41f3e3c4-f7d3-4c7f-ac93-a1738c04b7c8_carw_4x3x1280.png?h=7a5142b8f74a01619e9e85522ae9f6ce'),
  hvac: cdn('ed51e0d4-d046-4381-86d1-d4d694dddf6a_carw_4x3x1280.png?h=27285f6e13c6545c57d03fbed89ec359'),
  altech: cdn('198577e7-1fc9-4b01-aae1-59dd6d147d2b_carw_4x3x1280.png?h=1cd17137f194e614a8ebfecc8e1050b6'),
  motion3d: cdn('99cb2f5c-0e15-4545-9b03-273d739b05d5_carw_4x3x1280.png?h=20359b73edc81a18eb80cea0ff877218'),
  granMuthu: cdn('5c87a6cd-5771-4e7d-82f8-2038d548fc70_carw_4x3x1280.JPG?h=c1b7692f98bc10b8544a0cc265995c8c'),
  smartChoice: cdn('ebaf49d4-621f-4eba-94ed-4197847ea148_carw_4x3x1280.jpg?h=061031c65d12c53cc4771879c2756c9d'),
  immigration: cdn('12f7971d-8870-4c49-b9f5-34d9a1814323_carw_4x3x1280.png?h=2396714b97d04630174eeffb130fac7a'),
}

export const projects = [
  // ──────────────────────────────────────────────────────────────────
  // Video Production — videos locales optimizados
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'finest-dental',
    title: 'Finest Dental — Branded Video Content',
    client: 'Finest Dental, Naples FL',
    category: 'video-production',
    year: 2026,
    cover: covers.finestDental,
    summary: 'Contenido de marca para campañas de social media y publicidad digital.',
    services: ['Edición', 'Pacing', 'Color grading', 'Post-producción'],
    description:
      'Branded video content desarrollado para Finest Dental en Naples, Florida. Pieza pensada para campañas de social media y advertising digital, con foco en ritmo, color y consistencia visual.',
    videos: [{ type: 'local', src: '/videos/portfolio/finest-dental.mp4' }],
  },
  {
    slug: 'maq-smile',
    title: 'MAQ Smile — Branded Video Content',
    client: 'MAQ Smile',
    category: 'video-production',
    year: 2026,
    cover: covers.maqSmile,
    summary: 'Storytelling visual para fortalecer la percepción de marca.',
    services: ['Branded content', 'Storytelling', 'Edición'],
    description:
      'Contenido audiovisual centrado en marca para MAQ Smile. Énfasis en storytelling, ritmo y consistencia estética para reforzar la percepción de la marca.',
    videos: [{ type: 'local', src: '/videos/portfolio/maq-smile.mp4' }],
  },
  {
    slug: 'air-solution',
    title: 'Air Solution — HVAC Promo',
    client: 'Air Solution',
    category: 'video-production',
    year: 2026,
    cover: covers.hvac,
    summary: 'Video promocional para empresa de aires acondicionados.',
    services: ['Promo', 'Edición', 'Color'],
    description:
      'Video promocional para Air Solution. Pieza enfocada en presentar servicios HVAC con un tono profesional y dinámico para campañas digitales.',
    videos: [{ type: 'local', src: '/videos/portfolio/air-solution.mp4' }],
  },
  {
    slug: 'migenes-air',
    title: 'Migenes Air — Reel',
    client: 'Migenes Air',
    category: 'video-production',
    year: 2026,
    cover: '/portfolio/web/migenes-air.jpg',
    summary: 'Reel publicitario para servicio HVAC.',
    services: ['Reel', 'Edición', 'Post-producción'],
    description:
      'Reel publicitario para Migenes Air enfocado en captar atención en social media con ritmo visual rápido y mensaje claro.',
    videos: [{ type: 'local', src: '/videos/portfolio/migenes-air.mp4' }],
  },
  {
    slug: 'vitalis-vet-video',
    title: 'Vitalis Animal Hospital — Branded Video',
    client: 'Vitalis Animal Hospital',
    category: 'video-production',
    year: 2026,
    cover: '/portfolio/web/vitalis-vet-video.jpg',
    summary: 'Pieza audiovisual de marca para hospital veterinario en Cutler Bay, FL.',
    services: ['Branded content', 'Edición', 'Color'],
    description:
      'Video de marca completo para Vitalis Animal Hospital. Foco en transmitir cercanía, profesionalismo y confianza con clientes y sus mascotas.',
    videos: [{ type: 'local', src: '/videos/portfolio/vet-clinic.mp4' }],
  },

  // ──────────────────────────────────────────────────────────────────
  // Marketing Campaigns
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'smart-choice-dental',
    title: 'Smart Choice Dental — Social Media Video Campaign',
    client: 'Smart Choice Dental',
    category: 'marketing-campaigns',
    year: 2026,
    cover: covers.smartChoice,
    summary: 'Campaña de video vertical optimizada para social y advertising digital.',
    services: ['Edición', 'Color', 'Optimización vertical'],
    description:
      'Branded video content para Smart Choice Dental como parte de campañas de social media y digital advertising. Edición, pacing, color grading y optimización para plataformas verticales.',
    videos: [{ type: 'local', src: '/videos/portfolio/smart-choice.mp4' }],
  },
  {
    slug: 'immigration-pro',
    title: 'Immigration Pro — Social Media Reel',
    client: 'Immigration Pro',
    category: 'marketing-campaigns',
    year: 2026,
    cover: covers.immigration,
    summary: 'Reel publicitario con foco en ritmo visual y post-producción pulida.',
    services: ['Reel', 'Edición', 'Post-producción'],
    description:
      'Reel publicitario para Immigration Pro con énfasis en ritmo visual, pacing y una post-producción cuidada.',
    videos: [{ type: 'local', src: '/videos/portfolio/immigration-pro.mp4' }],
  },

  // ──────────────────────────────────────────────────────────────────
  // Website Development — capturas locales en /public/portfolio/web/
  // Cards de tipo web abren directamente la URL en una nueva pestaña.
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'air-best-pros',
    title: 'Air Best Pros — HVAC Website',
    client: 'Air Best Pros',
    category: 'website-development',
    year: 2026,
    cover: '/portfolio/web/air-best-pros.jpg',
    summary: 'Sitio corporativo para empresa HVAC en Florida con foco en conversión.',
    services: ['Diseño', 'Desarrollo', 'SEO técnico'],
    url: 'https://www.airbestpros.com',
  },
  {
    slug: 'praxis-graphics-signs',
    title: 'Praxis Graphics & Signs',
    client: 'Praxis Graphics',
    category: 'website-development',
    year: 2026,
    cover: '/portfolio/web/praxis-graphics-signs.jpg',
    summary: 'Web corporativa con formularios para empresa de rotulación y diseño gráfico.',
    services: ['Diseño', 'Desarrollo', 'Formularios', 'Dominio propio'],
    url: 'https://go.praxisgraphics.com',
  },
  {
    slug: 'mister-mortgage-usa',
    title: 'Mister Mortgage USA',
    client: 'Mister Mortgage USA',
    category: 'website-development',
    year: 2026,
    cover: '/portfolio/web/mister-mortgage-usa.jpg',
    summary: 'Landing para broker hipotecario con simulador y captación de leads.',
    services: ['Diseño', 'Desarrollo', 'Lead capture'],
    url: 'https://mister-mortgage-usa.netlify.app',
  },
  {
    slug: 'dr-alliance',
    title: 'Dr. Alliance — HVAC Website',
    client: 'Dr. Alliance',
    category: 'website-development',
    year: 2026,
    cover: '/portfolio/web/dr-alliance.jpg',
    summary: 'Sitio para empresa de aires acondicionados con captación de leads y servicios destacados.',
    services: ['Diseño', 'Desarrollo', 'Lead capture', 'Responsive'],
    url: 'https://dr-alliance.netlify.app',
  },
  {
    slug: 'candela-cafe-market',
    title: 'Candela & Café Market — Miami',
    client: 'Candela & Café Market',
    category: 'website-development',
    year: 2026,
    cover: '/portfolio/web/candela-cafe-market.jpg',
    summary: 'Sitio web para deli, café y mercado en Miami. Menú digital integrado.',
    services: ['Diseño', 'Desarrollo', 'Menú digital'],
    url: 'https://candela-cafe-market.netlify.app',
  },
  {
    slug: 'candela-cafe-menu',
    title: 'Candela Café — Menú Digital',
    client: 'Candela & Café Market',
    category: 'website-development',
    year: 2026,
    cover: '/portfolio/web/candela-cafe-menu.jpg',
    summary: 'Menú digital optimizado para mobile, integrado con el sitio principal.',
    services: ['Diseño', 'Desarrollo', 'Menú digital', 'Mobile-first'],
    url: 'https://candela-cafe-menu.netlify.app',
  },
  {
    slug: 'vitalis-animal-hospital',
    title: 'Vitalis Animal Hospital',
    client: 'Vitalis Animal Hospital, Cutler Bay FL',
    category: 'website-development',
    year: 2026,
    cover: '/portfolio/web/vitalis-animal-hospital.jpg',
    summary: 'Landing page para hospital veterinario en Cutler Bay, Florida.',
    services: ['Diseño', 'Desarrollo', 'Citas online'],
    url: 'https://vitalis-animal-hospital.netlify.app',
  },
  {
    slug: 'miami-lux-resort',
    title: 'Miami Lux Resort',
    client: 'Miami Lux Resort',
    category: 'website-development',
    year: 2026,
    cover: '/portfolio/web/miami-lux-resort.jpg',
    summary: 'Sitio premium para resort de lujo con galería inmersiva y reservas.',
    services: ['Diseño premium', 'Desarrollo', 'Galería', 'Booking flow'],
    url: 'https://miami-lux-resort.netlify.app',
  },
  {
    slug: 'cris-vega',
    title: 'Cris Vega — Mentalidad Invicta',
    client: 'Cris Vega',
    category: 'website-development',
    year: 2026,
    cover: '/portfolio/web/cris-vega.jpg',
    summary: 'Sitio personal de Cris Vega — coaching y desarrollo de mentalidad ganadora.',
    services: ['Diseño', 'Desarrollo', 'Lead capture', 'Testimonios'],
    url: 'https://mentalidad-invicta.netlify.app',
  },
]

export const getProjectsByCategory = (slug) =>
  projects.filter((p) => p.category === slug)

export const getProjectBySlug = (slug) =>
  projects.find((p) => p.slug === slug)
