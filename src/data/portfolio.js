// Portfolio data — proyectos reales (videos extraídos del portfolio de Yandy)
// Para añadir nuevas categorías, añádelas a `categories` y asigna `category: 'slug'` al proyecto.

export const categories = [
  { slug: 'marketing-digital', label: 'Marketing Digital' },
  { slug: 'video', label: 'Video Production' },
]

const cdn = (id) => `https://cdn.myportfolio.com/4be979e0-07d6-4385-8cac-816b19e45893/${id}`

// 1280w cover variants (hashes from myportfolio responsive set)
const covers = {
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
  // Video Production
  {
    slug: 'finest-dental',
    title: 'Finest Dental — Branded Video Content',
    client: 'Finest Dental, Naples FL',
    category: 'video',
    year: 2026,
    cover: covers.finestDental,
    summary: 'Contenido de marca para campañas de social media y publicidad digital.',
    services: ['Edición', 'Pacing', 'Color grading', 'Post-producción'],
    description:
      'Branded video content desarrollado para Finest Dental en Naples, Florida. Pieza pensada para campañas de social media y advertising digital, con foco en ritmo, color y consistencia visual.',
    videos: [
      { type: 'vimeo', id: '1166566124' },
      { type: 'vimeo', id: '1166566145' },
    ],
    externalUrl: 'https://yandyniebla.myportfolio.com/finest-dental-branded-video-content',
  },
  {
    slug: 'maq-smile',
    title: 'MAQ Smile — Branded Video Content',
    client: 'MAQ Smile',
    category: 'video',
    year: 2026,
    cover: covers.maqSmile,
    summary: 'Storytelling visual para fortalecer la percepción de marca.',
    services: ['Branded content', 'Storytelling', 'Edición'],
    description:
      'Contenido audiovisual centrado en marca para MAQ Smile. Énfasis en storytelling, ritmo y consistencia estética para reforzar la percepción de la marca.',
    videos: [
      { type: 'vimeo', id: '1166563674' },
      { type: 'vimeo', id: '1166563704' },
    ],
    externalUrl: 'https://yandyniebla.myportfolio.com/maq-smile-branded-video-content',
  },
  {
    slug: 'hvac-projects',
    title: 'HVAC & Air Conditioning — Video Projects',
    client: 'Varios clientes HVAC',
    category: 'video',
    year: 2026,
    cover: covers.hvac,
    summary: 'Promocionales, testimonios y contenido de campaña para empresas HVAC.',
    services: ['Promo', 'Testimoniales', 'Edición'],
    description:
      'Producción de medios visuales de marca para empresas de HVAC y aire acondicionado: videos promocionales, testimonios de clientes y contenido orientado a campañas digitales.',
    videos: [
      { type: 'vimeo', id: '1166544944' },
      { type: 'vimeo', id: '1166549754' },
      { type: 'vimeo', id: '1166549785' },
    ],
    externalUrl: 'https://yandyniebla.myportfolio.com/hvac-air-conditioning-video-projects',
  },
  {
    slug: 'altech-web-design',
    title: 'Altech Web Design — Editing & VFX',
    client: 'Altech Web Design',
    category: 'video',
    year: 2026,
    cover: covers.altech,
    summary: 'Demo reel de edición, ritmo y efectos visuales.',
    services: ['Edición', 'VFX', 'Demo reel'],
    description:
      'Proyectos de video de marca y publicidad para Altech Web Design. Demo reel que muestra técnicas de edición, ritmo y trabajo de efectos visuales.',
    videos: [
      { type: 'youtube', id: '5cpm1TvhYAQ' },
      { type: 'youtube', id: 'dB4NOITIQro' },
    ],
    externalUrl: 'https://yandyniebla.myportfolio.com/altech-web-design-visual-media-advertising',
  },
  {
    slug: 'cinematic-3d-opener',
    title: 'Cinematic 3D Opener — Motion Graphics',
    client: 'Pieza de autor',
    category: 'video',
    year: 2017,
    cover: covers.motion3d,
    summary: 'Apertura 3D cinematográfica para video promocional de destino.',
    services: ['3D', 'Motion graphics', 'Render'],
    description:
      'Apertura 3D cinematográfica desarrollada para presentar un video promocional de destino. Enfoque en impacto visual, motion design y estética de render.',
    videos: [{ type: 'youtube', id: 'VrWsGNuI0oc' }],
    externalUrl: 'https://yandyniebla.myportfolio.com/3d-motion-graphics-animation',
  },
  {
    slug: 'gran-muthu-imperial',
    title: 'Gran Muthu Imperial — Destination Film',
    client: 'Gran Muthu Imperial',
    category: 'video',
    year: 2018,
    cover: covers.granMuthu,
    summary: 'Pieza fílmica de destino con storytelling experiencial.',
    services: ['Dirección', 'Edición', 'Color'],
    description:
      'Destination film cinematográfico para Gran Muthu Imperial. Énfasis en ritmo, atmósfera visual y storytelling experiencial.',
    videos: [{ type: 'youtube', id: 'Gl8gN6fZ0dw' }],
    externalUrl: 'https://yandyniebla.myportfolio.com/gran-muthu-imperial-destination-film',
  },

  // Marketing Digital
  {
    slug: 'smart-choice-dental',
    title: 'Smart Choice Dental — Social Media Video Campaign',
    client: 'Smart Choice Dental',
    category: 'marketing-digital',
    year: 2026,
    cover: covers.smartChoice,
    summary: 'Campaña de video vertical optimizada para social y advertising digital.',
    services: ['Edición', 'Color', 'Optimización vertical'],
    description:
      'Branded video content para Smart Choice Dental como parte de campañas de social media y digital advertising. Edición, pacing, color grading y optimización para plataformas verticales.',
    videos: [
      { type: 'youtube', id: '2ZtxQcBVTBs' },
      { type: 'youtube', id: 'F8_6xE2jg58' },
    ],
    externalUrl:
      'https://yandyniebla.myportfolio.com/smart-choice-dental-social-media-video-campaign',
  },
  {
    slug: 'immigration-pro',
    title: 'Immigration Pro — Social Media Reel',
    client: 'Immigration Pro',
    category: 'marketing-digital',
    year: 2026,
    cover: covers.immigration,
    summary: 'Reel publicitario con foco en ritmo visual y post-producción pulida.',
    services: ['Reel', 'Edición', 'Post-producción'],
    description:
      'Reel publicitario para Immigration Pro con énfasis en ritmo visual, pacing y una post-producción cuidada.',
    videos: [{ type: 'youtube', id: 'IviobY00Cu0' }],
    externalUrl: 'https://yandyniebla.myportfolio.com/immigration-pro-social-media-reel',
  },
]

export const getProjectsByCategory = (slug) =>
  projects.filter((p) => p.category === slug)

export const getProjectBySlug = (slug) =>
  projects.find((p) => p.slug === slug)
