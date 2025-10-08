"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GoogleTagManager() {
  const pathname = usePathname();
  const GTM_ID = "GTM-XXXXXXX"; // Substitua pelo seu GTM ID se tiver

  useEffect(() => {
    // Track page changes
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'page_view',
        page_path: pathname,
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }, [pathname]);

  return (
    <>
      {/* Google Tag Manager - Head */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
    </>
  );
}