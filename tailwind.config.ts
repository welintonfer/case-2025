
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Garante que todas as pastas dentro de src sejam verificadas
    "./public/**/*.html", // Se houver HTML estático em public
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      maxWidth: {
        '8xl': '90rem', // Exemplo adicional de tamanho
        '9xl': '96rem',
      },
      zIndex: {
        500: '500',
      },
    },
  },
  darkMode: "class", // Ativa o modo escuro baseado em classe
  corePlugins: {
    preflight: true, // Garante que o Tailwind aplique estilos base corretamente
  },
  plugins: [],
};

export default config;


