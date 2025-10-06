"use client";

import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import TemplateMain from "./TemplateMain";
import TemplateLogos from "./TemplateLogos";
import TemplateCaseStudy from "./TemplateCaseStudy";
import ContactForm from "./ContactForm";
import AboutMeSection from "./AboutMeSection";
import SkillsIcons from "./SkillsIcons";
import CopyRight from "./CopyRight";

export default function TemplateHome() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Inicia como true para evitar hydration mismatch
  const [mounted, setMounted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null); // Referência ao formulário de contato

  // Função para alternar o modo escuro/claro
  const toggleDarkMode = () => {
    if (mounted) {
      const html = document.documentElement;
      const newMode = !isDarkMode;
      html.classList.toggle("dark", newMode);
      setIsDarkMode(newMode);
    }
  };

  useEffect(() => {
    // Marca como montado e configura o tema
    setMounted(true);
    const html = document.documentElement;
    html.classList.add("dark");
  }, []);

  // Função para rolar até o formulário de contato ao clicar em "Hire me"
  const toggleForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Não renderiza nada até estar montado para evitar hydration mismatch
  if (!mounted) {
    return (
      <div className="overflow-hidden">
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900" />
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <Header toggleDarkMode={toggleDarkMode} isLightMode={!isDarkMode} toggleForm={toggleForm} />
      <TemplateMain>
        <TemplateLogos isLightMode={!isDarkMode} />
        <div>
          <AboutMeSection />
        </div>
        <div>
          <SkillsIcons />
        </div>
        <div>
          <TemplateCaseStudy isLightMode={!isDarkMode} />
        </div>
        {/* O formulário agora tem a referência `formRef` */}
        <div ref={formRef}>
          <ContactForm />
        </div>
        <CopyRight />
      </TemplateMain>
    </div>
  );
}
