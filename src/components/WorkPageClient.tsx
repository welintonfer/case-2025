"use client";

import { useState, useEffect, useRef } from "react";
import TemplateMain from "@/components/TemplateMain";
import ContactForm from "@/components/ContactForm";
import CopyRight from "@/components/CopyRight";
import HeaderSubpage from "@/components/HeaderSubpage";
import Image, { StaticImageData } from "next/image";

// @ts-ignore
import europcarCover from "../assets/video/animated-mockup-i-phone-14-pro.webm";
import eirCover from "../assets/img/eir/cover-casestudy-eir.png";
import helenCover from "../assets/img/helen/helen-turkington-cover.png";
import caroCover from "../assets/img/caro/caro-cover.png";
// @ts-ignore
import habitusCover from "../assets/video/habitushealth.webm";
import lisneyCover from "../assets/img/lisney/lisney@2x.png";

export default function WorkPageClient() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Inicializa como dark mode
  const [mounted, setMounted] = useState(false);
  const contactFormRef = useRef<HTMLDivElement>(null);

  const toggleDarkMode = () => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", !isDarkMode);
      setIsDarkMode(!isDarkMode);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Sempre inicia no dark mode como padrão
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      setMounted(true);
    }
  }, []);

  const toggleForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
  };

  const projects = [
    {
      id: 1,
      href: "/work/eir",
      bgClass: "theme__bg-soap",
      categories: ["Case Study", "UX Design", "UI Design", "Interaction Design", "UX Research", "Information Architecture"],
      media: { type: "image", src: eirCover },
    },
    {
      id: 2,
      href: "/work/habitushealth",
      bgClass: "hh-temp",
      categories: ["Case Study", "UX Design", "UI Design", "Interaction Design", "UX Research", "Information Architecture"],
      media: { type: "video", src: habitusCover },
    },
    {
      id: 3,
      href: "/work/europcar",
      bgClass: "theme__bg-calamansi",
      categories: ["Case Study", "UX Design", "UI Design", "Interaction Design", "UX Research", "Information Architecture", "Service Design"],
      media: { type: "video", src: europcarCover },
    },
    {
      id: 4,
      href: "/work/helenturkington",
      bgClass: "theme__bg-vivid-red-tangelo",
      categories: ["Information Architecture", "UX Design"],
      media: { type: "image", src: helenCover },
    },
    {
      id: 5,
      href: "/work/lisney",
      bgClass: "theme__bg-vivid-red-tangelo",
      categories: ["Case Study", "UI Design", "UX Design", "UX Research", "Content Strategy", "Information Architecture", "UX Design"],
      media: { type: "image", src: lisneyCover },
    },   
    {
      id: 6,
      href: "/work/caro",
      bgClass: "theme__bg-soap",
      categories: ["Case Study", "UI Design", "UX Research", "Interaction Design", "Service Design"],
      media: { type: "image", src: caroCover },
    },   
  ];

  const filteredProjects = activeFilter === "All" ? projects : projects.filter((project) => project.categories.includes(activeFilter));

  if (!mounted) return null;

  return (
    <div className="overflow-hidden">
      <HeaderSubpage
        titlePage="Peek into my latest design projects"
        toggleDarkMode={toggleDarkMode}
        isLightMode={!isDarkMode}
        toggleForm={toggleForm}
        descriptionProject=""
      />

      <TemplateMain>
        <section className="flex flex-col gap-4 w-full pb-8 pt-12">
          <div className="max-w-9xl mx-auto px-4">
            <div className="flex flex-row flex-wrap rounded-lg gap-3">
              {[
                "All",
                "Case Study",
                "UI Design",
                "Interaction Design",
                "UX Research",
                "Content Strategy",
                "Information Architecture",
                "UX Design",
                "Service Design",
              ].map((category) => (
                <button
                  key={category}
                  onClick={() => handleFilterChange(category)}
                  className={`hidden lg:inline-flex px-4 py-2 rounded-full border-2 font-semibold shadow-md transition-colors duration-300 ${
                    activeFilter === category
                      ? isDarkMode
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-white text-gray-900 border-white"
                      : isDarkMode
                      ? "bg-transparent text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white"
                      : "bg-transparent text-white border-white hover:bg-white hover:text-gray-900"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="project-container flex flex-col md:flex-row md:flex-wrap gap-6 md:gap-8 pt-12">
              {filteredProjects.map((project) => (
                <ProjectLink
                  key={project.id}
                  href={project.href}
                  bgClass={project.bgClass}
                  media={project.media}
                />
              ))}
            </div>
          </div>
        </section>

        <div ref={contactFormRef}>
          <ContactForm />
        </div>

        <CopyRight />
      </TemplateMain>
    </div>
  );
}

interface ProjectLinkProps {
  href: string;
  bgClass: string;
  media: { type: string; src: string | StaticImageData };
}

function ProjectLink({ href, bgClass, media }: ProjectLinkProps) {
  return (
    <a
      href={href}
      className="project-item w-full md:w-[calc(50%-16px)] hover:scale-95 transition-transform duration-300 ease-in-out block hoverable"
    >
      <div className={`relative rounded-xl overflow-hidden flex flex-col aspect-[4/3] justify-between ${bgClass}`}>
        <div className="absolute top-0 left-0 z-0 w-full h-full"></div>
        <div className="z-10 grow relative w-full h-full">
          <div className="h-full w-full relative">
            {media.type === "video" ? (
              <video
                className="transition-opacity duration-300 opacity-100 h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="/fallback-poster.png"
              >
                <source src={media.src as string} type="video/webm" />
              </video>
            ) : (
              <Image
                src={media.src}
                alt={`${href.split('/').pop()?.replace('-', ' ').toUpperCase()} UX/UI Design Case Study - Portfolio by Welinton Fernandes`}
                className="transition-opacity duration-300 opacity-100 h-full w-full object-cover"
                width={800}
                height={600}
                priority={true}
              />
            )}
          </div>
        </div>
      </div>
    </a>
  );
}