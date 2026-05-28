// Portfolio data — proyectos reales con videos locales y screenshots en /public.
// Categorías espejean las páginas de servicios (src/data/services.js).

export const categories = [
  { slug: 'brand-identity',       label: 'Brand Identity' },
  { slug: 'website-development',  label: 'Web Development' },
  { slug: 'marketing-campaigns',  label: 'Marketing' },
  { slug: 'video-production',     label: 'Video Production' },
  { slug: 'ai-automation',        label: 'AI Automation' },
]

export const projects = [
  // ──────────────────────────────────────────────────────────────────
  // Video Production — videos locales optimizados
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'beyond-health',
    title: 'Beyond Health — Nuevo Espacio',
    client: 'Beyond Health',
    category: 'video-production',
    year: 2026,
    cover: '/portfolio/covers/beyond-health-cover.jpg',
    summary: 'Video de inauguración de nuevo espacio para clínica de estética avanzada.',
    services: ['Branded content', 'Dirección creativa', 'Color grading', 'Post-producción'],
    description:
      'Pieza audiovisual de apertura para el nuevo espacio de Beyond Health. Foco en transmitir lujo, modernidad y confianza médica a través de ritmo visual y dirección de arte cuidada.',
    videos: [{ type: 'local', src: '/videos/portfolio/beyond-health.mp4' }],
  },
  {
    slug: 'hilos-pdo',
    title: 'Beyond Health — Hilos PDO',
    client: 'Beyond Health',
    category: 'video-production',
    year: 2026,
    cover: '/portfolio/covers/hilos-pdo-cover.jpg',
    summary: 'Contenido de marca para tratamiento estético de Hilos PDO.',
    services: ['Branded content', 'Edición', 'Color grading'],
    description:
      'Video educativo y de marca para el procedimiento de Hilos PDO de Beyond Health. Diseñado para comunicar confianza médica y elevar la percepción del servicio.',
    videos: [{ type: 'local', src: '/videos/portfolio/hilos-pdo.mp4' }],
  },
  {
    slug: 'finest-dental',
    title: 'Finest Dental — Branded Video Content',
    client: 'Finest Dental, Naples FL',
    category: 'video-production',
    year: 2026,
    cover: '/portfolio/covers/finest-dental-cover.jpg',
    summary: 'Contenido de marca para campañas de social media y publicidad digital.',
    services: ['Edición', 'Pacing', 'Color grading', 'Post-producción'],
    description:
      'Branded video content desarrollado para Finest Dental en Naples, Florida. Pieza pensada para campañas de social media y advertising digital, con foco en ritmo, color y consistencia visual.',
    videos: [{ type: 'local', src: '/videos/portfolio/finest-dental.mp4' }],
  },
  {
    slug: 'vitalis-coming-soon',
    title: 'Vitalis Animal Hospital — Coming Soon',
    client: 'Vitalis Animal Hospital',
    category: 'video-production',
    year: 2026,
    cover: '/portfolio/covers/vitalis-coming-soon-cover.jpg',
    summary: 'Teaser de apertura para hospital veterinario en Cutler Bay, FL.',
    services: ['Motion graphics', 'Edición', 'Color'],
    description:
      'Pieza de anticipación para el lanzamiento de Vitalis Animal Hospital. Diseñada para generar expectativa en redes sociales y comunicar profesionalismo desde el primer contacto.',
    videos: [{ type: 'local', src: '/videos/portfolio/vitalis-coming-soon.mp4' }],
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
    slug: 'mister-mortgage-campaign',
    title: 'Mister Mortgage — Social Media Campaign',
    client: 'Mister Mortgage USA',
    category: 'marketing-campaigns',
    year: 2026,
    cover: '/portfolio/covers/mister-mortgage-cover.jpg',
    summary: 'Video de advertencia para campaña hipotecaria en redes sociales.',
    services: ['Edición', 'Motion', 'Optimización vertical'],
    description:
      'Pieza de video para campaña de awareness en redes sociales de Mister Mortgage USA. Foco en impacto inmediato y retención de la audiencia con mensaje directo.',
    videos: [{ type: 'local', src: '/videos/portfolio/mister-mortgage.mp4' }],
  },
  {
    slug: 'smart-choice-dental',
    title: 'Smart Choice Dental — Social Media Video Campaign',
    client: 'Smart Choice Dental',
    category: 'marketing-campaigns',
    year: 2026,
    cover: '/portfolio/covers/smart-choice-cover.jpg',
    summary: 'Campaña de video vertical optimizada para social y advertising digital.',
    services: ['Edición', 'Color', 'Optimización vertical'],
    description:
      'Branded video content para Smart Choice Dental como parte de campañas de social media y digital advertising. Edición, pacing, color grading y optimización para plataformas verticales.',
    videos: [{ type: 'local', src: '/videos/portfolio/smart-choice.mp4' }],
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
