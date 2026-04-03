# Página Personal

Sitio web personal construido con Astro, TypeScript y Tailwind CSS. Minimalista, rápido y accesible.

## 🚀 Características

- **Framework**: Astro 6.0.8 (HTML estático, cero JavaScript en cliente por defecto)
- **Lenguaje**: TypeScript estricto (`strict: true` con configuración mejorada)
- **Estilos**: Tailwind CSS v4 (diseño mobile-first, utilidades optimizadas)
- **Hosting**: GitHub Pages con deploy automático
- **CI/CD**: GitHub Actions con cache y seguridad integrada
- **SEO**: Meta tags optimizados + sitemap automático (`@astrojs/sitemap`)
- **Seguridad**: Headers de seguridad, `npm audit` en CI, zero vulnerabilities
- **Accesibilidad**: WCAG 2.1 AA compliant, semántica HTML5
- **Performance**: Lighthouse score >90, build en <500ms

## 📁 Estructura del Proyecto

```
/
├── .github/workflows/deploy.yml      # CI/CD con seguridad y cache
├── public/                           # Assets estáticos
├── src/
│   ├── components/                   # Componentes Astro (PascalCase)
│   ├── layouts/                      # Layouts reutilizables
│   ├── pages/                        # Páginas (kebab-case)
│   ├── data/                         # Configuración y contenido
│   ├── types/                        # Tipos TypeScript
│   ├── utils/                        # Funciones utilitarias
│   └── styles/                       # Estilos globales
├── astro.config.mjs                  # Configuración de Astro + seguridad
├── tsconfig.json                     # TypeScript estricto con paths
├── package.json                      # Dependencias mínimas (zero bloat)
├── .gitignore                        # Excluye .env, node_modules, etc.
└── .roorules                         # Reglas del proyecto
```

## 🛠️ Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (localhost:4321)
npm run dev

# Build para producción
npm run build

# Previsualizar build local
npm run preview

# Auditoría de seguridad
npm audit

# Limpiar cache y reinstalar
rm -rf node_modules && npm install
```

## 🔧 Configuración Técnica

### TypeScript
- Configuración estricta (`strict: true`)
- Paths absolutos (`@/*` → `src/*`)
- Excluye `node_modules` y `dist`

### Seguridad
- Headers de seguridad en `astro.config.mjs`
- `npm audit` integrado en CI/CD
- Variables de entorno en `.env` (no committeadas)
- `.gitignore` actualizado para archivos sensibles

### Performance
- Tailwind CSS v4 con Vite (optimizado)
- Zero JavaScript runtime por defecto
- Imágenes optimizadas (usar `<Image />` de `astro:assets`)
- Sitemap automático para SEO

## 🚀 Deployment

El sitio se despliega automáticamente a GitHub Pages en cada push a `main`:
1. GitHub Actions ejecuta `npm ci`, `npm audit`, `npm run build`
2. Cache de dependencias para builds más rápidos
3. Sube artefactos a GitHub Pages
4. URL: https://dcerbero.github.io

## 📄 Licencia

MIT
