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
  name: 'Diego C - Ingeniero de Software',
  description: 'Sitio personal de Diego C, Ingeniero de Software y Arquitecto de Soluciones',
  url: 'https://www.dcerbero.com',
  author: 'Diego C',
  socialLinks: {
    github: 'https://github.com/dcerbero',
    linkedin: 'https://www.linkedin.com/in/d176768',
  },
  seo: {
    defaultTitle: 'Diego C - Ingeniero de Software',
    defaultDescription: 'Sitio personal de Diego C, Ingeniero de Software especializado en arquitectura de soluciones y sistemas de alta disponibilidad',
    ogImage: '/og-image.svg',
  },
};