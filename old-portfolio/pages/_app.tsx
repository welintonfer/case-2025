// src/app/layout.tsx ou src/pages/_app.tsx

import "../styles/globals.css";
import ScrollComponent from "@/components/ScrollComponent";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ScrollComponent /> {/* Ativa o monitoramento de rolagem globalmente */}
        {children}
      </body>
    </html>
  );
}
