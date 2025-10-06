// src/types/global.d.ts

// Declaração para arquivos de vídeo .mp4 e .webm
declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module "*.webm" {
  const src: string;
  export default src;
}

// Declarações para SVGs
declare module "*.svg" {
  const content: string;
  export default content;
}

// Declarações para arquivos de imagem (png, jpg, jpeg, gif, webp)
declare module "*.png" {
  const value: StaticImageData;
  export default value;
}

declare module "*.jpg" {
  const value: StaticImageData;
  export default value;
}

declare module "*.jpeg" {
  const value: StaticImageData;
  export default value;
}

declare module "*.gif" {
  const value: StaticImageData;
  export default value;
}

declare module "*.webp" {
  const value: StaticImageData;
  export default value;
}

// Define o tipo StaticImageData
type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

// Declaração global para `gtag` no objeto `window`
declare global {
  interface Window {
    gtag?: (
      command: "config" | "event",
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

// Necessário para que TypeScript trate este arquivo como um módulo
export {};
