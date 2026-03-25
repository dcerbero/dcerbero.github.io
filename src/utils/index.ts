// Funciones utilitarias reutilizables
// Mantener funciones pequeñas y descriptivas (máximo ~30 líneas)

/**
 * Formatea una fecha a un string legible
 * @param date - Fecha a formatear
 * @param locale - Locale (por defecto 'es-CO')
 * @returns String formateado
 */
export function formatDate(date: Date | string, locale = 'es-CO'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Genera una clase CSS de Tailwind para breakpoints responsivos
 * @param base - Clase base (ej: 'text-center')
 * @param overrides - Overrides por breakpoint
 * @returns String de clases concatenadas
 */
export function responsiveClass(
  base: string,
  overrides: Partial<Record<'sm' | 'md' | 'lg' | 'xl' | '2xl', string>> = {}
): string {
  const classes = [base];
  Object.entries(overrides).forEach(([breakpoint, className]) => {
    if (className) {
      classes.push(`${breakpoint}:${className}`);
    }
  });
  return classes.join(' ');
}

/**
 * Valida si un string es una URL válida
 * @param url - String a validar
 * @returns boolean
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Sanitiza un string para uso seguro en HTML
 * @param input - String a sanitizar
 * @returns String sanitizado
 */
export function sanitizeHtml(input: string): string {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}

/**
 * Debounce function para optimizar eventos frecuentes
 * @param fn - Función a ejecutar
 * @param delay - Tiempo de espera en ms
 * @returns Función debounced
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}