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
  const [isDarkMode, setIsDarkMode] = useState(false); // Inicia como false para evitar hydration mismatch
  const [hydrated, setHydrated] = useState(false);
  const formRef = useRef<HTMLDivElement>(null); // Referência ao formulário de contato

  // Função para alternar o modo escuro/claro
  const toggleDarkMode = () => {
    if (hydrated) {
      const html = document.documentElement;
      const newMode = !isDarkMode;
      html.classList.toggle("dark", newMode);
      setIsDarkMode(newMode);
    }
  };

  useEffect(() => {
    // Sempre inicia no dark mode como padrão, mas só após a hidratação
    setIsDarkMode(true);
    const html = document.documentElement;
    html.classList.add("dark");
    setHydrated(true); // Marca o componente como montado no cliente
  }, []);

  // Função para rolar até o formulário de contato ao clicar em "Hire me"
  const toggleForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
