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
  name: 'Mi Página Personal',
  description: 'Un sitio web personal minimalista construido con Astro y Tailwind CSS',
  url: 'https://ejemplo.com',
  author: 'Tu Nombre',
  socialLinks: {
    github: 'https://github.com/tuusuario',
    twitter: 'https://twitter.com/tuusuario',
    linkedin: 'https://linkedin.com/in/tuusuario',
  },
  seo: {
    defaultTitle: 'Mi Página Personal | Desarrollo Web',
    defaultDescription: 'Portafolio personal y blog sobre desarrollo web, Astro y TypeScript',
    ogImage: '/og-image.png',
  },
};