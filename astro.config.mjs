// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://www.dcerbero.com',  // dominio base corregido
  security: {
    checkOrigin: true
    // Nota: Los headers de seguridad se configuran en el servidor
    // Ver archivos public/_headers (Netlify/Vercel) y public/.htaccess (Apache)
  },
  integrations: [sitemap()]
});