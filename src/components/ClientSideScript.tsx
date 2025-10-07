"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script"; // Importa o Script corretamente
import * as gtag from "@/lib/gtag";

export default function ClientSideScript() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function" && pathname) {
      gtag.pageview(pathname);
    }
  }, [pathname]);

  return (
    <>
      {process.env.NEXT_PUBLIC_GA_TRACKING_ID && (
        <>
          {/* Google tag (gtag.js) */}
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
            `}
          </Script>
        </>
      )}
    </>
  );
}
