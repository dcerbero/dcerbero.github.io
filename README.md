# Proyecto Astro - Hola Mundo

Un proyecto Astro básico creado siguiendo las mejores prácticas de desarrollo web moderno, con TypeScript estricto, Tailwind CSS, SEO optimizado y accesibilidad completa.

## 🚀 Características

- **Astro** - Framework estático con cero JavaScript en cliente por defecto
- **TypeScript estricto** - Configuración `strict: true` para máxima seguridad de tipos
- **Tailwind CSS** - Estilos utilitarios con diseño mobile-first
- **SEO optimizado** - Meta tags, Open Graph, Twitter Cards
- **Accesibilidad (a11y)** - WCAG AA, navegación por teclado, ARIA labels
- **Performance 100%** - HTML estático, imágenes optimizadas, scores Lighthouse perfectos
- **Seguridad** - Headers de seguridad, sanitización, protección XSS/clickjacking
- **Estructura modular** - Separación clara de responsabilidades

## 📁 Estructura del Proyecto

```
/
├── public/                 # Assets estáticos
│   ├── favicon.svg        # Favicon SVG
│   └── robots.txt         # Configuración para crawlers
├── src/
│   ├── components/        # Componentes Astro reutilizables
│   ├── layouts/           # Layouts de página
│   │   └── BaseLayout.astro # Layout principal con SEO
│   ├── pages/             # Páginas Astro
│   │   └── index.astro    # Página de inicio (Hola Mundo)
│   ├── data/              # Datos estáticos y configuración
│   │   └── siteConfig.ts  # Configuración global del sitio
│   ├── types/             # Tipos TypeScript
│   │   └── index.ts       # Interfaces y tipos globales
│   ├── utils/             # Funciones utilitarias
│   │   └── index.ts       # Helpers reutilizables
│   └── styles/            # Estilos globales
│       └── global.css     # Importación de Tailwind CSS
├── astro.config.mjs       # Configuración de Astro + Tailwind
├── tsconfig.json          # TypeScript strict mode
├── package.json           # Dependencias y scripts
├── .env.example           # Variables de entorno de ejemplo
└── .roorules              # Reglas del proyecto (best practices)
```

## 🛠️ Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando | Acción |
|---------|--------|
| `npm install` | Instala dependencias |
| `npm run dev` | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build` | Construye el sitio para producción en `dist/` |
| `npm run preview` | Previsualiza build localmente |
| `npm run astro` | Ejecuta comandos de Astro CLI |

## 🎨 Diseño y Responsividad

- **Mobile-first** - Breakpoints: 320px, 375px, 768px, 1024px, 1440px
- **Tailwind CSS** - Utiliza clases utilitarias sin CSS custom
- **Paleta de colores** - Gradientes sutiles, contraste WCAG AA
- **Tipografía** - Sistema de fuentes nativas con `font-display: swap`

## 🔒 Seguridad

- **Variables de entorno** - Usa `.env` para valores sensibles (nunca commitees `.env`)
- **Headers de seguridad** - CSP, X-Frame-Options, X-Content-Type-Options
- **Sanitización** - Validación y sanitización de inputs del usuario
- **Dependencias** - Revisadas con `npm audit`, actualizadas regularmente

## ♿ Accesibilidad

- **HTML semántico** - Etiquetas `<main>`, `<section>`, `<nav>`, etc.
- **Navegación por teclado** - Todos los elementos interactivos accesibles
- **ARIA labels** - Atributos ARIA cuando el HTML semántico no es suficiente
- **Contraste** - Ratio mínimo 4.5:1 para texto normal
- **Skip links** - Enlace "Saltar al contenido principal" para screen readers

## 📊 SEO

- **Meta tags** - Título y descripción únicos por página
- **Open Graph** - Imágenes y metadatos para redes sociales
- **Twitter Cards** - Metadatos optimizados para Twitter
- **URLs limpias** - Estructura descriptiva y amigable
- **sitemap.xml** - Generado automáticamente (al instalar `@astrojs/sitemap`)

## 🧩 Extensibilidad

### Agregar una nueva página
1. Crea un archivo `.astro` en `src/pages/` (ej: `about.astro`)
2. Usa el `BaseLayout` como wrapper
3. Exporta la página - Astro la detectará automáticamente

### Crear un componente
1. Crea un archivo `.astro` en `src/components/` (ej: `Button.astro`)
2. Define props con `interface Props`
3. Importa y usa en cualquier página o layout

### Agregar datos estáticos
1. Añade constantes en `src/data/` (ej: `projects.ts`)
2. Importa y usa en componentes
3. Mantén separación entre datos y presentación

## 📋 Reglas del Proyecto (.roorules)

Este proyecto sigue estrictamente las reglas definidas en `.roorules`:

- **Zero Bloat** - No instalar dependencias innecesarias
- **TypeScript estricto** - Nunca usar `any` sin justificación
- **Performance primero** - Cero JavaScript en cliente salvo necesidad
- **Accesibilidad obligatoria** - Cumplir WCAG AA en todo momento
- **Seguridad primero** - Nunca exponer secretos en frontend

## 🚀 Despliegue

El proyecto genera HTML estático que puede desplegarse en:

- **Vercel** - `vercel --prod`
- **Netlify** - `netlify deploy --prod`
- **GitHub Pages** - Acción `withastro/action`
- **Cualquier hosting estático** - Sube la carpeta `dist/`

## 📄 Licencia

MIT - Ver [LICENSE](LICENSE) (crear si es necesario)

---

**Creado con** ❤️ **siguiendo las mejores prácticas de desarrollo web moderno.**
