// Funciones utilitarias esenciales
// Mantener solo funciones que se usan actualmente en el proyecto

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