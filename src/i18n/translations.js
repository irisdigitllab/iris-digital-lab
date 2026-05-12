// All UI copy lives here. Add a key in BOTH `es` and `en` to add a new string.
export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      portfolio: 'Portfolio',
      contact: 'Contacto',
    },
    hero: {
      line1: 'CONSTRUIMOS',
      line2: 'MARCAS QUE',
      line3: 'GENERAN NEGOCIO.',
      pillText:
        'Desarrollo web y diseño de identidad de marca para empresas listas para crecer.',
      pillCta: 'Contáctanos',
      chips: [
        'Marketing',
        'Desarrollo Web',
        'Diseño Gráfico',
        'Producción de Video',
        'Meta y Google Ads',
        'Workflows de Agentes IA',
      ],
    },
    services: {
      eyebrow: '{ Nuestros Servicios }',
      titleA: 'Soluciones creativas',
      titleB: 'diseñadas para inspirar...',
      cta: 'Ver nuestro portfolio',
      items: [
        {
          title: 'Diseño de Identidad de Marca',
          desc: 'Creamos identidades visuales distintivas que capturan la esencia de tu marca.',
        },
        {
          title: 'Desarrollo Web y Automatización',
          desc: 'Webs rápidas y optimizadas para conversión que funcionan perfectamente en cada dispositivo, especialmente en mobile.',
        },
        {
          title: 'Campañas de Marketing',
          desc: 'Estrategia y ejecución de marketing práctica enfocada en alcanzar a la audiencia correcta y generar crecimiento medible. Meta y Google Ads.',
        },
        {
          title: 'Producción de Video',
          desc: 'Damos vida a tus ideas con motion de alta calidad y diseño visual estratégico.',
        },
        {
          title: 'Automatización con Agentes IA',
          desc: 'Workflows personalizados de agentes IA que automatizan operaciones repetitivas, aceleran tiempos de respuesta y mejoran la consistencia.',
        },
      ],
    },
    portfolio: {
      eyebrow: '{ Nuestro Portfolio }',
      titleA: 'Trabajos que',
      titleB: 'hablan por sí solos.',
      filterAll: 'Todos',
      ctaSingle: 'Ver proyecto',
      ctaMultiple: (n) => `Ver ${n} videos`,
      cardOpenLabel: (title) => `${title} — abrir detalle`,
    },
    modal: {
      close: 'Cerrar',
      sectionTitle: 'El proyecto',
      client: 'Cliente',
      year: 'Año',
      services: 'Servicios',
      stack: 'Stack',
      externalLabel: 'Ver original',
      externalCta: 'Abrir',
      webLabel: 'Web',
      webCta: 'Visitar',
    },
    cta: {
      lets: 'CREEMOS',
      connect: 'Conectar',
      work: 'TRABAJO',
      together: 'JUNTOS',
      letsCreate: 'CREEMOS JUNTOS.',
      portfolio: 'VER NUESTRO PORTFOLIO',
    },
    testimonials: {
      titleA: 'LO QUE DICEN',
      titleB: 'NUESTROS CLIENTES',
      benefits: [
        'Excelencia Creativa',
        'Centrado en el Cliente',
        'Orientado a Resultados',
        'Alcance Global',
        'Clientes Satisfechos',
      ],
    },
    servicesGrid: {
      website: { title: 'Desarrollo', titleAccent: 'Web', desc: 'Webs rápidas y optimizadas para conversión que funcionan perfectamente en cada dispositivo, especialmente en mobile.' },
      marketing: { title: 'Marketing', desc: 'Estrategia y ejecución práctica enfocada en alcanzar a la audiencia correcta y generar crecimiento medible.', metaAds: 'Meta', googleAds: 'Google Ads' },
      graphic: { title: 'Gráfico', subtitle: 'y Diseño de Marca', desc: 'Creamos identidades visuales distintivas que capturan la esencia de tu marca.' },
      video: { title: 'Producción de Video', desc: 'Damos vida a tus ideas con motion de alta calidad y diseño visual estratégico.' },
      ai: { title: 'Automatización con Agentes IA', desc: 'Workflows personalizados de agentes IA que automatizan operaciones repetitivas, aceleran tiempos de respuesta y mejoran la consistencia.', highlight: 'workflows de agentes IA' },
    },
    footer: {
      helpTitle: '¿Necesitas ayuda?',
      helpDesc:
        'Te brindaremos información detallada sobre nuestros servicios, tipos de trabajo y proyectos destacados. Calcularemos el costo y prepararemos una propuesta comercial.',
      helpCta: 'Solicitar consulta',
      copy: (year) => `© ${year} Iris Digital Lab.`,
      rights: 'Todos los derechos reservados.',
    },
    lang: {
      label: 'Idioma',
      es: 'ES',
      en: 'EN',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Our Portfolio',
      contact: 'Contact Us',
    },
    hero: {
      line1: 'WE BUILD',
      line2: 'BRANDS THAT',
      line3: 'MEAN BUSINESS.',
      pillText:
        'Website development & brand identity design for South Florida companies ready to grow.',
      pillCta: 'Contact Us',
      chips: [
        'Marketing',
        'Website Development',
        'Graphic Design',
        'Video Production',
        'Meta and Google Ads',
        'AI agent workflows',
      ],
    },
    services: {
      eyebrow: '{ Our Services }',
      titleA: 'Creative Solutions',
      titleB: 'Designed To Inspire...',
      cta: 'View Our Portfolio',
      items: [
        {
          title: 'Brand Identity Design',
          desc: "Crafting distinctive visual identities that capture your brand's essence.",
        },
        {
          title: 'Website Development & Automation',
          desc: 'Fast, conversion-optimized websites that work flawlessly on every device, especially mobile.',
        },
        {
          title: 'Marketing Campaigns',
          desc: 'Practical marketing strategy and execution focused on reaching the right audience and driving measurable growth. Meta and Google ADS.',
        },
        {
          title: 'Video Production',
          desc: 'Bringing your ideas to life through high quality motion and strategic visual design.',
        },
        {
          title: 'AI Agent Automation',
          desc: 'Custom AI agent workflows that automate repetitive operations, speed up response time and improve consistency.',
        },
      ],
    },
    portfolio: {
      eyebrow: '{ Our Portfolio }',
      titleA: 'Work that',
      titleB: 'speaks for itself.',
      filterAll: 'All',
      ctaSingle: 'View project',
      ctaMultiple: (n) => `Watch ${n} videos`,
      cardOpenLabel: (title) => `${title} — open details`,
    },
    modal: {
      close: 'Close',
      sectionTitle: 'The project',
      client: 'Client',
      year: 'Year',
      services: 'Services',
      stack: 'Stack',
      externalLabel: 'View original',
      externalCta: 'Open',
      webLabel: 'Website',
      webCta: 'Visit',
    },
    cta: {
      lets: "LET'S",
      connect: 'Connect',
      work: 'WORK',
      together: 'GETHER',
      letsCreate: "LET'S CREATE.",
      portfolio: 'VIEW OUR PORTFOLIO',
    },
    testimonials: {
      titleA: 'WHAT OUR',
      titleB: 'CLIENTS SAY',
      benefits: [
        'Creative Excellence',
        'Client-Centered',
        'Results-Driven',
        'Global Reach',
        'Satisfied Clients',
      ],
    },
    servicesGrid: {
      website: { title: 'Website', titleAccent: 'Development', desc: 'Fast, conversion-optimized websites that work flawlessly on every device, especially mobile.' },
      marketing: { title: 'Marketing', desc: 'Practical marketing strategy and execution focused on reaching the right audience and driving measurable growth.', metaAds: 'Meta', googleAds: 'Google ADS' },
      graphic: { title: 'Graphic', subtitle: 'and Brand Design', desc: "Crafting distinctive visual identities that capture your brand's essence" },
      video: { title: 'Video Production', desc: 'Bringing your ideas to life through high-quality motion and strategic visual design' },
      ai: { title: 'AI Agent Automation', desc: 'Custom AI agent workflows that automate repetitive operations, speed up response time and improve consistency', highlight: 'AI agent workflows' },
    },
    footer: {
      helpTitle: 'Do you need help?',
      helpDesc:
        'We will provide detailed information about our services, types of work, and top projects. We will calculate the cost and prepare a commercial proposal.',
      helpCta: 'Get consultation',
      copy: (year) => `© ${year} Iris Digital Lab.`,
      rights: 'All rights reserved.',
    },
    lang: {
      label: 'Language',
      es: 'ES',
      en: 'EN',
    },
  },
}
