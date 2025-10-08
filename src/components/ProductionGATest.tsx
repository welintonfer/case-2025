"use client";

import { useEffect } from "react";

export default function ProductionGATest() {
  useEffect(() => {
    const runProductionTest = () => {
      if (typeof window !== "undefined") {
        // Aguarda 3 segundos para ter certeza que o GA carregou
        setTimeout(() => {
          if (typeof (window as any).gtag === "function") {
            // Envia eventos de teste específicos para produção
            (window as any).gtag("event", "production_test", {
              event_category: "site_health",
              event_label: "Production GA Test",
              value: 1,
              custom_parameter: "auto_test_on_load"
            });
            
            (window as any).gtag("event", "page_view", {
              page_title: document.title,
              page_location: window.location.href,
              environment: "production",
              timestamp: new Date().toISOString()
            });
            
            // Eventos de teste enviados silenciosamente
            
            // Envia eventos a cada 60 segundos para manter ativo (reduzido)
            const interval = setInterval(() => {
              (window as any).gtag("event", "user_active", {
                event_category: "engagement",
                event_label: "Active User",
                value: Math.floor(Date.now() / 1000)
              });
            }, 60000);
            
            // Para depois de 5 minutos
            setTimeout(() => clearInterval(interval), 300000);
            
          }
        }, 3000);
      }
    };
    
    runProductionTest();
  }, []);

  return null; // Componente invisível
}