// Tipos TypeScript globales para el proyecto
// Exporta interfaces y tipos reutilizables

export interface PageProps {
  title?: string;
  description?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Tipos para props de componentes comunes
export interface LayoutProps {
  children: any;
  title?: string;
  description?: string;
}

// Utility types
export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
export type Nullable<T> = T | null;