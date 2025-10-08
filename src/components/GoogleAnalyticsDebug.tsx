"use client";

import { useEffect, useState } from "react";

export default function GoogleAnalyticsDebug() {
  const [gaStatus, setGaStatus] = useState<string>("Checking...");
  const [gaId, setGaId] = useState<string>("");
  const [eventCount, setEventCount] = useState<number>(0);

  useEffect(() => {
    const checkGA = () => {
      // Verifica se o gtag está carregado
      if (typeof window !== "undefined") {
        if (typeof (window as any).gtag === "function") {
          setGaStatus("✅ Google Analytics loaded successfully");
          setGaId("G-3KXKWNJVLJ");
          
          // Envia evento de página automaticamente
          (window as any).gtag("event", "page_view", {
            page_title: document.title,
            page_location: window.location.href,
            custom_parameter: "debug_mode"
          });
          
          console.log("✅ Automatic page_view event sent to G-3KXKWNJVLJ");
          
        } else if (typeof (window as any).dataLayer !== "undefined") {
          setGaStatus("⚠️ DataLayer exists but gtag not ready");
          setGaId("G-3KXKWNJVLJ (not ready)");
        } else {
          setGaStatus("❌ Google Analytics not loaded");
          setGaId("G-3KXKWNJVLJ (failed)");
        }
      }
    };

    // Verifica imediatamente
    checkGA();

    // E depois de 2 segundos e 5 segundos
    const timer1 = setTimeout(checkGA, 2000);
    const timer2 = setTimeout(checkGA, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Mostra sempre, mas com informações diferentes para produção
  const isProduction = process.env.NODE_ENV === 'production';
  
  // Em produção, só mostra se houver problemas ou se for solicitado
  if (isProduction && gaStatus.includes('✅') && eventCount === 0) {
    return (
      <div style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        background: 'rgba(0,128,0,0.8)',
        color: 'white',
        padding: '5px 8px',
        borderRadius: '5px',
        fontSize: '10px',
        zIndex: 9999,
        cursor: 'pointer'
      }}
      onClick={() => setEventCount(-1)} // Flag para mostrar painel completo
      >
        GA ✅
      </div>
    );
  }
  
  if (isProduction && eventCount === 0) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'rgba(0,0,0,0.9)',
      color: 'white',
      padding: '12px',
      borderRadius: '8px',
      fontSize: '11px',
      zIndex: 9999,
      maxWidth: '320px',
      border: '1px solid #333'
    }}>
      <strong>🔍 GA Debug Panel</strong><br />
      <div style={{ marginTop: '8px' }}>
        Status: {gaStatus}<br />
        ID: {gaId}<br />
        Events sent: {eventCount}<br />
      </div>
      
      <div style={{ marginTop: '8px', display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
        <button 
          onClick={() => {
            if (typeof (window as any).gtag === "function") {
              const newCount = eventCount + 1;
              setEventCount(newCount);
              
              // Envia evento de teste específico
              (window as any).gtag("event", "test_button_click", {
                event_category: "engagement",
                event_label: "Debug Test",
                value: newCount,
                custom_parameter_1: "debug_mode",
                custom_parameter_2: new Date().toISOString()
              });
              
              console.log(`✅ Test event sent to G-3KXKWNJVLJ (count: ${newCount})`);
              console.log("📊 Check GA Real-time: https://analytics.google.com/analytics/web/#/a218580109p301285383/reports/realtime");
              
              alert(`✅ Event sent! Count: ${newCount}\n\nCheck:\n1. Console for logs\n2. GA Real-time reports\n3. Should appear in ~30 seconds`);
            } else {
              alert("❌ GA not loaded!");
            }
          }}
          style={{
            padding: '4px 8px',
            fontSize: '9px',
            background: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer'
          }}
        >
          🚀 Send Event ({eventCount})
        </button>
        
        <button 
          onClick={() => {
            window.open('https://analytics.google.com/analytics/web/#/a218580109p301285383/reports/realtime', '_blank');
          }}
          style={{
            padding: '4px 8px',
            fontSize: '9px',
            background: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer'
          }}
        >
          📊 Open GA
        </button>
      </div>
    </div>
  );
}