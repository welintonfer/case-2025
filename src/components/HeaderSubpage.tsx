"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IconMenu2, IconX, IconSun, IconMoon } from "@tabler/icons-react";

interface HeaderProps {
  titlePage: string;
  descriptionProject: string;
  isLightMode: boolean;
  toggleDarkMode: () => void;
  toggleForm: () => void;
}

export default function HeaderSubpage({
  titlePage,
  descriptionProject,
  isLightMode,
  toggleDarkMode,
  toggleForm,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Controle de hidratação
  useEffect(() => {
    setHydrated(true); // Marca que o componente foi hidratado no cliente
  }, []);

  useEffect(() => {
    if (!hydrated) return; // Garante que o efeito de tema é aplicado somente após a hidratação
    const html = document.documentElement;
    html.classList.toggle("dark", !isLightMode);
  }, [isLightMode, hydrated]);

  if (!hydrated) return null; // Suprime a renderização até que o componente esteja hidratado

  return (
    <header
      className="header-container relative m-3 flex flex-col justify-center overflow-hidden isolate rounded-[2rem] bg-white border-solid border-4 border-gray-900"
      suppressHydrationWarning // Suprime avisos de hidratação
    >
      {/* Container adicional para iOS fix */}
      <div className="header-animation-container absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
        <div className="absolute inset-2 -z-10">
          <div className="bg-1"></div>
          <div className="bg-2"></div>
          <div className="bg-3"></div>
        </div>
      </div>

      <div className="w-full px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-full">
          <div className="pt-12 sm:pt-4 flex justify-between items-center">
            
            <div className="flex flex-col relative z-10" style={{ pointerEvents: 'auto' }}>
              <Link href="/" className="hover:scale-105 transition-transform duration-200">
                <span className="isolate-color text-xl font-bold">Welinton Fernandes</span> <br />
                <span className="text-sm isolate-color">Portimão, Portugal</span>
              </Link>
            </div>

            <button className="lg:hidden isolate-color transition-colors duration-200 hover:opacity-70 active:scale-95 relative z-10" onClick={toggleMenu} aria-label="Toggle Menu" style={{ pointerEvents: 'auto' }}>
              {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
            </button>

            <nav className="hidden lg:flex space-x-8 isolate-color relative z-10" style={{ pointerEvents: 'auto' }}>
              <Link href="/" className="hover:underline font-medium transition-colors duration-200">
                Home
              </Link>
              <Link href="/what-i-do" className="hover:underline font-medium transition-colors duration-200">
                What I Do
              </Link>
              <Link href="/work" className="hover:underline font-medium transition-colors duration-200">
                Work
              </Link>
            </nav>

            <div className="flex items-center space-x-4 relative z-10" style={{ pointerEvents: 'auto' }}>
              <button onClick={toggleDarkMode} className="p-2 rounded-full bg-transparent isolate-color">
                {isLightMode ? <IconSun size={24} /> : <IconMoon size={24} />}
              </button>
              <button
                onClick={toggleForm}
                className="hidden lg:inline-flex px-4 py-2 rounded-full bg-gray-950 text-white hover:bg-gray-800 hoverable relative z-50"
                style={{ pointerEvents: 'auto' }}
              >
                Hire me
              </button>
            </div>
          </div>

          {/* Overlay */}
          {isOpen && (
            <div 
              className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300"
              onClick={toggleMenu}
            />
          )}

          {/* Menu Mobile */}
          <div
            className={`fixed inset-y-0 right-0 z-50 w-3/4 max-w-xs p-6 shadow-lg transform transition-transform duration-300 theme__bg-glass ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button className="absolute top-4 right-4 isolate-color transition-colors duration-200 hover:opacity-70" onClick={toggleMenu} aria-label="Close Menu">
              <IconX size={24} />
            </button>
            <nav className="mt-12 space-y-6 text-white">
              <Link href="/" className="block hover:underline font-medium transition-colors duration-200" onClick={toggleMenu}>
                Home
              </Link>
              <Link href="/what-i-do" className="block hover:underline font-medium transition-colors duration-200" onClick={toggleMenu}>
                What I Do
              </Link>
              <Link href="/work" className="block hover:underline font-medium transition-colors duration-200" onClick={toggleMenu}>
                Work
              </Link>
            </nav>
          </div>

          {/* Título e Descrição */}
          <div className="hero-isolated pt-12 pb-24 text-center flex flex-col justify-center items-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-gray-950 max-w-6xl transition-colors duration-200">
              {titlePage}
            </h1>
            <p className="mt-8 max-w-6xl mx-auto text-base sm:text-base md:text-lg lg:text-xl xl:text-xl text-gray-600  transition-colors duration-200">
              {descriptionProject}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
