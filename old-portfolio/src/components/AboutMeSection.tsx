"use client";

import {
  IconBrandSketch,
  IconChartPie,
  IconSearch,
  IconBrandGoogle,
  IconBrowser,
  IconGraph,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function AboutMeSection() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [key, setKey] = useState(0); // Key para forçar re-renderização do iframe

  useEffect(() => {
    const updateDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
      setKey((prev) => prev + 1); // Incrementa para forçar renderização
    };

    // Inicializa o tema
    updateDarkMode();

    // Observa mudanças na classe do <html> para detectar troca de tema
    const observer = new MutationObserver(updateDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Limpa o observador ao desmontar
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative flex flex-col justify-center py-12">
      <div className="w-full px-6 lg:px-8">
        <div className="max-w-9xl mx-auto">
          <div className="flex lg:flex-row flex-col-reverse justify-between items-center gap-8">
            {/* Coluna de Texto */}
            <div className="flex-1">
              <h2 className="h3 h3__400 text-center lg:text-left">
              Hey, I'm Wellington, and I <em>design experiences</em> that <em>capture attention</em> and inspire curiosity.
              </h2>
              <p className="mt-8 max-w-6xl text-xl text-center lg:text-left">
                

                With a holistic approach to design, I combine core <strong>UX principles</strong> with deep expertise in <strong>Product Marketing</strong>,
                <strong>Digital Analysis</strong>, <strong>Market Research</strong>, and <strong>Brand Management</strong>. This transdisciplinary mindset enables me to create
                engaging, user-centered solutions that align business goals with meaningful user experiences. Just as my 3D cat
                keeps its eyes on the floating ball, I <strong>design journeys</strong> that keep users engaged, curious, and focused every step of the way.
              </p>

              {/* Ícones e Descrições */}
              <div className="flex flex-wrap gap-6 mt-8 justify-center lg:justify-start">
                <Feature icon={<IconBrandSketch size={20} />} label="UX Design" />
                <Feature icon={<IconChartPie size={20} />} label="Digital Strategy" />
                <Feature icon={<IconSearch size={20} />} label="Research" />
                <Feature icon={<IconBrandGoogle size={20} />} label="Branding" />
                <Feature icon={<IconBrowser size={20} />} label="Product Strategy" />
                <Feature icon={<IconGraph size={20} />} label="Marketing" />
              </div>
            </div>

            {/* Coluna de Iframe */}
            <div className="flex-1 hidden lg:flex h-[500px]">
              <IframeComponent key={key} isDarkMode={isDarkMode} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface IframeComponentProps {
  isDarkMode: boolean;
}

// Componente do Iframe, atualizado com a key para forçar re-renderização
function IframeComponent({ isDarkMode }: IframeComponentProps) {
  const src = isDarkMode
    ? "https://my.spline.design/catfollowingthemouse-b74c8d364a3f1661ae0238711c7c4c00/"
    : "https://my.spline.design/catdarkmode-00d5b537f01c8791b9c882f6d5af34ec/";

  return (
    <iframe
      className="w-full h-full rounded-xl"
      src={src}
      frameBorder="0"
      allow="fullscreen"
    ></iframe>
  );
}

interface FeatureProps {
  icon: JSX.Element;
  label: string;
}

function Feature({ icon, label }: FeatureProps) {
  return (
    <div className="flex items-center gap-4 theme__bg-soap rounded-full px-4 py-2">
      <div className="flex justify-center items-center isolate-color">{icon}</div>
      <p className="paragraph-no-margin isolate-color">{label}</p>
    </div>
  );
}
