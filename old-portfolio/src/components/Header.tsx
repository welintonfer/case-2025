
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IconMenu2, IconX, IconSun, IconMoon } from "@tabler/icons-react";

interface HeaderProps {
  isLightMode: boolean;
  toggleDarkMode: () => void;
  toggleForm: () => void;
}

export default function Header({
  isLightMode,
  toggleDarkMode,
  toggleForm,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const html = document.documentElement;
    if (isLightMode) {
      html.classList.remove("dark");
    } else {
      html.classList.add("dark");
    }
  }, [isLightMode]);

  return (
    <header className="relative m-3 flex flex-col justify-center overflow-hidden isolate rounded-[2rem] bg-white border-solid border-4 border-gray-900">
      <div className="absolute inset-2 -z-10">
        <div className="bg-1"></div>
        <div className="bg-2"></div>
        <div className="bg-3"></div>
      </div>

      <div className="w-full px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-full">
          <div className="pt-12 sm:pt-4 flex justify-between items-center">
          <div className="flex flex-col">
              <Link href="/" className="hover:scale-105 transition-transform duration-200">
                <span className="isolate-color text-xl font-bold">Wellington Alexander</span> <br />
                <span className="text-sm isolate-color">Portimão, Portugal</span>
              </Link>
          </div>

            <button className="lg:hidden hoverable" onClick={toggleMenu} aria-label="Toggle Menu">
              {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
            </button>

            <nav className="hidden lg:flex space-x-8 isolate-color">
              <Link href="/" className="hover:underline font-medium hoverable">Home</Link>
              <Link href="/what-i-do" className="hover:underline font-medium hoverable">What I Do</Link>
              <Link href="/work" className="hover:underline font-medium hoverable">Work</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <button onClick={toggleDarkMode} className="p-2 rounded-full bg-transparent isolate-color hoverable">
                {isLightMode ? <IconSun size={24} /> : <IconMoon size={24} />}
              </button>
              <button
                onClick={toggleForm}
                className="hidden lg:inline-flex px-4 py-2 rounded-full bg-gray-950 text-white hover:bg-gray-800 hoverable"
              >
                Hire me
              </button>
            </div>
          </div>

          {/* Menu Mobile */}
          <div
            className={`fixed inset-y-0 right-0 z-50 w-3/4 max-w-xs p-6 shadow-lg transform transition-transform duration-300 theme__bg-glass ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button className="absolute top-4 right-4" onClick={toggleMenu} aria-label="Close Menu">
              <IconX size={24} />
            </button>
            <nav className="mt-12 space-y-6 text-gray-900 dark:text-white">
              <Link href="/" className="block hover:underline font-medium hoverable">Home</Link>
              <Link href="/what-i-do" className="block hover:underline font-medium hoverable">What I Do</Link>
              <Link href="/work" className="block hover:underline font-medium hoverable">Work</Link>
            </nav>
          </div>

          <div className="hero-isolated py-12 text-center flex flex-col justify-center items-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-gray-950 max-w-6xl">
              Experience Designer currently based in Portugal.
            </h1>
            <p className="mt-8 max-w-6xl mx-auto text-base sm:text-base md:text-lg lg:text-xl xl:text-xl text-gray-600">
              I craft engaging and innovative experiences that connect brands with their customers. Leveraging my
              marketing background, I design solutions that seamlessly meet user needs while driving business
              objectives.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/assets/resume/wellington-alexander-resume.pdf" className="inline-flex items-center justify-center px-6 py-4 rounded-full bg-gray-950 text-white hover:bg-gray-800 font-semibold hoverable" target="_blank">Download Resume</Link>
                <Link href="/work" className="relative inline-flex items-center justify-center px-6 py-4 rounded-full border-2 border-solid border-gray-900 font-semibold bg-transparent shadow-md ring-1 ring-[#D15052]/15 text-gray-950 hover:bg-white/20 hoverable">View Projects</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
