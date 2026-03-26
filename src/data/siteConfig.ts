// Configuración global del sitio
// Centraliza todos los datos estáticos para evitar hardcoding en componentes

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  author: string;
  socialLinks: {
    github: string;
    twitter?: string;
    linkedin?: string;
  };
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    ogImage: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Diego Cruz - Ingeniero de Software',
  description: 'Sitio personal de Diego Cruz, Ingeniero de Software y Arquitecto de Soluciones',
  url: 'https://dcerbero.github.io',
  author: 'Diego Cruz',
  socialLinks: {
    github: 'https://github.com/dcerbero',
    // twitter: 'https://twitter.com/dcerbero', // Opcional
    // linkedin: 'https://linkedin.com/in/dcerbero', // Opcional
  },
  seo: {
    defaultTitle: 'Diego Cruz - Ingeniero de Software',
    defaultDescription: 'Sitio personal de Diego Cruz, Ingeniero de Software especializado en arquitectura de soluciones y sistemas de alta disponibilidad',
    ogImage: '/og-image.png',
  },
};