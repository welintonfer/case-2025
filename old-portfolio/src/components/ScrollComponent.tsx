// src/components/ScrollComponent.tsx

import { useEffect } from "react";

export default function ScrollComponent() {
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        // Coloque aqui a lógica para a rolagem
        console.log("A página está rolando");
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null; // Como é um componente de monitoramento, ele não precisa renderizar nada
}
