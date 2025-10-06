"use client";

import "./globals.css"; // Certifique-se de que o caminho está correto
import "../../styles/globals.css"; // Certifique-se de que o caminho está correto
import type { Metadata } from "next";
import ClientAnimatedCursor from "@/components/ClientAnimatedCursor";
import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation"; // Usa usePathname para o monitoramento
import { pageview } from "@/lib/gtag";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || "";

// Define os metadados
const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname && GA_TRACKING_ID) {
      pageview(pathname); // Registra a visualização de página para o Google Analytics
    }
  }, [pathname]);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
        <link rel="icon" href="/favicon.ico" />

        {GA_TRACKING_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className="antialiased">
        <ClientAnimatedCursor />
        {children}
      </body>
    </html>
  );
}

