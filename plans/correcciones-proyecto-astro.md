# Plan de Corrección - Proyecto Astro Personal

**Fecha**: 2026-03-26  
**Estado**: Planificación completada  
**Prioridad**: Alta  
**Modo requerido**: 💻 Code

## 📊 Diagnóstico Inicial
**Calificación**: 7.5/10  
**Problemas identificados**: 12 categorías  
**Tiempo estimado de implementación**: 2-3 horas

## 🎯 Objetivos
1. Elevar calidad a 9.5/10
2. Corregir todos los problemas de seguridad
3. Mejorar performance y SEO
4. Establecer consistencia en configuración
5. Simplificar código innecesario

## 📋 Lista de Tareas Detalladas

### 1. Configuración de Proyecto (CRÍTICO)

#### 1.1 Corregir carácter inválido en `astro.config.mjs`
**Archivo**: [`astro.config.mjs:11`](astro.config.mjs:11)  
**Problema**: Carácter `ß` después del comentario  
**Solución**: Eliminar el carácter `ß`
```javascript
// ANTES:
site: 'https://dcerbero.github.io',  // dominio baseß    

// DESPUÉS:
site: 'https://dcerbero.github.io',  // dominio base
```

#### 1.2 Verificar y actualizar `.gitignore`
**Archivo**: `.gitignore`  
**Verificar que incluya**:
```
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
node_modules/
dist/
.DS_Store
*.log
```

### 2. TypeScript y Seguridad de Tipos

#### 2.1 Actualizar `tsconfig.json`
**Archivo**: `tsconfig.json`  
**Cambios necesarios**:
```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts", "**/*.spec.ts"]
}
```

### 3. Seguridad

#### 3.1 Agregar headers de seguridad en `astro.config.mjs`
**Archivo**: `astro.config.mjs`  
**Implementar**:
```javascript
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://dcerbero.github.io',
  security: {
    checkOrigin: true,
    xFrameOptions: 'DENY',
    xContentTypeOptions: 'nosniff',
    referrerPolicy: 'strict-origin-when-cross-origin'
  }
});
```

#### 3.2 Revisar dependencias con `npm audit`
**Comando**: `npm audit`

### 4. Performance y SEO

#### 4.1 Instalar y configurar `@astrojs/sitemap`
**Pasos**:
1. Instalar dependencia: `npm install @astrojs/sitemap`
2. Actualizar `astro.config.mjs`:
```javascript
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://dcerbero.github.io',
  integrations: [sitemap()]
});
```

#### 4.2 Configurar `astro:assets` para optimización de imágenes
**Pasos**:
1. Verificar que `astro:assets` esté disponible (viene con Astro)
2. Usar componente `<Image />` en lugar de `<img>` para imágenes

#### 4.3 Corregir referencia a fuente en `BaseLayout.astro`
**Archivo**: [`src/layouts/BaseLayout.astro:19`](src/layouts/BaseLayout.astro:19)  
**Opciones**:
- **Opción A** (Recomendada): Eliminar `@font-face` si no se usa
- **Opción B**: Agregar archivo `/fonts/inter-var.woff2` en `public/fonts/`

### 5. Consistencia y Configuración

#### 5.1 Unificar URLs entre `siteConfig.ts` y `astro.config.mjs`
**Archivo**: `src/data/siteConfig.ts`  
**Actualizar con valores reales**:
```typescript
export const siteConfig: SiteConfig = {
  name: 'Diego C - Ingeniero de Software',
  description: 'Sitio personal de Diego C, Ingeniero de Software y Arquitecto de Soluciones',
  url: 'https://dcerbero.github.io',
  author: 'Diego C',
  socialLinks: {
    github: 'https://github.com/dcerbero',
    // twitter y linkedin si existen
  },
  seo: {
    defaultTitle: 'Diego C - Ingeniero de Software',
    defaultDescription: 'Sitio personal de Diego C, Ingeniero de Software',
    ogImage: '/og-image.png'
  }
};
```

#### 5.2 Actualizar `astro.config.mjs` para usar misma URL

### 6. Limpieza de Código

#### 6.1 Simplificar `src/utils/index.ts`
**Archivo**: `src/utils/index.ts` (78 líneas actuales)  
**Acciones**:
1. Eliminar funciones no utilizadas
2. Mantener solo utilidades esenciales
3. Si hay muchas funciones, dividir en archivos por categoría

**Funciones a evaluar**:
- `formatDate` - ¿Se usa?
- `generateResponsiveClass` - ¿Se usa?
- `debounce` - ¿Se necesita?
- `throttle` - ¿Se necesita?

#### 6.2 Revisar `src/types/index.ts`
**Archivo**: `src/types/index.ts`  
**Evaluar**: Tipos no utilizados en componentes actuales

#### 6.3 Simplificar `src/styles/global.css`
**Archivo**: `src/styles/global.css`  
**Objetivo**: Reducir CSS custom, usar más Tailwind

### 7. CI/CD y Testing

#### 7.1 Optimizar cache en GitHub Actions
**Archivo**: `.github/workflows/deploy.yml`  
**Mejoras**:
```yaml
- name: Setup Node
  uses: actions/setup-node@v4
  with:
    node-version: lts/*
    cache: 'npm'

- name: Cache dependencies
  uses: actions/cache@v3
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-
```

#### 7.2 Agregar paso de `npm audit`
```yaml
- name: Security audit
  run: npm audit --audit-level=moderate
```

#### 7.3 Agregar tests básicos (opcional)
```yaml
- name: Run tests
  run: npm test
```

### 8. Documentación

#### 8.1 Actualizar `README.md`
**Secciones a actualizar**:
- URLs reales
- Comandos actualizados
- Estructura de archivos

## 🚀 Orden de Implementación Recomendado

1. **Fase 1 (30 minutos)** - Correcciones críticas
   - 1.1 Carácter `ß` en `astro.config.mjs`
   - 1.2 Verificar `.gitignore`
   - 3.2 `npm audit`

2. **Fase 2 (45 minutos)** - Configuración y seguridad
   - 2.1 Actualizar `tsconfig.json`
   - 3.1 Headers de seguridad
   - 4.1 Instalar `@astrojs/sitemap`

3. **Fase 3 (60 minutos)** - Consistencia y limpieza
   - 5.1 Unificar URLs
   - 6.1 Simplificar `src/utils/index.ts`
   - 4.3 Corregir fuente en layout

4. **Fase 4 (30 minutos)** - CI/CD y documentación
   - 7.1 Optimizar cache GitHub Actions
   - 8.1 Actualizar `README.md`

## ✅ Criterios de Éxito

- [ ] Build sin errores: `npm run build`
- [ ] Dev server funciona: `npm run dev`
- [ ] `npm audit` sin vulnerabilidades críticas
- [ ] Configuración consistente entre archivos
- [ ] Código más limpio y mantenible
- [ ] SEO mejorado con sitemap
- [ ] Headers de seguridad implementados

## 📝 Notas Adicionales

### Consideraciones de Performance
- Astro ya genera HTML estático (óptimo)
- Tailwind CSS v4 con Vite (optimizado)
- Cero JavaScript por defecto (mantener)

### Consideraciones de Seguridad
- No hay formularios → menos riesgo
- Headers de seguridad protegen contra ataques comunes
- `.env` debe mantenerse fuera del repositorio

### Consideraciones de Mantenibilidad
- Estructura de carpetas ya es buena (no cambiar)
- Convenciones de nombrado ya establecidas (seguir)
- TypeScript estricto ya configurado (mantener)

## 🔄 Verificación Post-Implementación

Después de implementar todas las correcciones:

1. Ejecutar `npm run build` - debe completarse sin errores
2. Ejecutar `npm run dev` - verificar que el sitio funciona
3. Ejecutar `npm audit` - verificar seguridad
4. Revisar consola del navegador - sin errores
5. Verificar headers de seguridad con herramienta de desarrollador

## 📞 Soporte

Para cualquier problema durante la implementación:
1. Revisar logs de error
2. Verificar versiones de dependencias
3. Consultar documentación de Astro
4. Revertir cambios paso a paso si es necesario

---

**Documentación creada por**: Roo (Architect Mode)  
**Fecha de creación**: 2026-03-26  
**Próxima revisión**: Después de implementación completa