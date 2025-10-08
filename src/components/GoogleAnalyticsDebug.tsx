"use client";

import { useEffect, useState } from "react";

export default function GoogleAnalyticsDebug() {
  const [gaStatus, setGaStatus] = useState<string>("Checking...");
  const [gaId, setGaId] = useState<string>("");

  useEffect(() => {
    const checkGA = () => {
      // Verifica se a variável de ambiente está disponível
      const trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
      setGaId(trackingId || "Not found");

      // Verifica se o gtag está carregado
      if (typeof window !== "undefined") {
        if (typeof (window as any).gtag === "function") {
          setGaStatus("✅ Google Analytics loaded successfully");
          
          // Testa envio de evento
          (window as any).gtag("event", "test_event", {
            event_category: "debug",
            event_label: "GA Debug Test",
            value: 1,
          });
          
          console.log("Test event sent to GA");
        } else if (typeof (window as any).dataLayer !== "undefined") {
          setGaStatus("⚠️ DataLayer exists but gtag not ready");
        } else {
          setGaStatus("❌ Google Analytics not loaded");
        }
      }
    };

    // Verifica imediatamente
    checkGA();

    // E depois de 3 segundos (para dar tempo do script carregar)
    const timer = setTimeout(checkGA, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Só mostra em desenvolvimento
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 9999,
      maxWidth: '300px'
    }}>
      <strong>GA Debug:</strong><br />
      Status: {gaStatus}<br />
      ID: {gaId}<br />
      <button 
        onClick={() => {
          if (typeof (window as any).gtag === "function") {
            (window as any).gtag("event", "manual_test", {
              event_category: "debug",
              event_label: "Manual Test Button",
              value: 1,
            });
            alert("Test event sent! Check console.");
          } else {
            alert("GA not loaded!");
          }
        }}
        style={{
          marginTop: '5px',
          padding: '2px 5px',
          fontSize: '10px'
        }}
      >
        Send Test Event
      </button>
    </div>
  );
}