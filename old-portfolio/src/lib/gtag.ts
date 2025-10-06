// src/lib/gtag.ts

// ID de rastreamento do Google Analytics, vindo das variáveis de ambiente
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || "";

// Função de visualização de página
export const pageview = (url: string) => {
  if (typeof window !== "undefined") {
    // Declara `gtag` dinamicamente para o TypeScript
    const gtag = (window as any).gtag;
    if (typeof gtag === "function") {
      gtag("config", GA_TRACKING_ID, {
        page_path: url,
      });
    }
  }
};

// Interface para eventos personalizados do Google Analytics
interface GtagEvent {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}

// Função para enviar eventos personalizados para o Google Analytics.
export const event = ({ action, category, label, value }: GtagEvent) => {
  if (typeof window !== "undefined") {
    // Declara `gtag` dinamicamente para o TypeScript
    const gtag = (window as any).gtag;
    if (typeof gtag === "function") {
      gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  }
};
