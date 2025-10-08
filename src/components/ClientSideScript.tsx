"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import * as gtag from "@/lib/gtag";

export default function ClientSideScript() {
  const pathname = usePathname();

  useEffect(() => {
    // Aguarda um pouco para garantir que o gtag esteja carregado
    const timer = setTimeout(() => {
      if (typeof window !== "undefined" && typeof (window as any).gtag === "function" && pathname) {
        gtag.pageview(pathname);
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

  if (!GA_TRACKING_ID) {
    console.warn('Google Analytics Tracking ID not found');
    return null;
  }

  return (
    <>
      {/* Google Analytics Global Site Tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Google Analytics script loaded successfully');
        }}
        onError={(e) => {
          console.error('Failed to load Google Analytics script:', e);
        }}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){
            dataLayer.push(arguments);
            console.log('GA Event:', arguments[0], arguments[1], arguments[2]);
          }
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true
          });
          console.log('Google Analytics initialized with ID: ${GA_TRACKING_ID}');
          
          // Enviar evento de teste imediatamente
          gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href
          });
        `}
      </Script>
    </>
  );
}
