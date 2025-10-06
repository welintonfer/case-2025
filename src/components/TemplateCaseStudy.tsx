type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };

  
  import Link from "next/link";
  import Image from "next/image";
  // @ts-ignore
  import europcarCover from "../assets/video/animated-mockup-i-phone-14-pro.webm";
  import eirCover from "../assets/img/eir/cover-casestudy-eir.png";
  import helenCover from "../assets/img/helen/helen-turkington-cover.png";
  // @ts-ignore
  import habitusCover from "../assets/video/habitushealth.webm";

  

interface TemplateCaseStudyProps {
    isLightMode: boolean;
  }
  
  export default function TemplateCaseStudy({ isLightMode }: TemplateCaseStudyProps) {
    return (
      <section className="flex flex-col gap-4 w-full pb-8">
        <div className="max-w-9xl mx-auto px-4">
          <h3 className="richtext h1__500 h3 inline-block text-pretty py-8 text-gray-100 dark:text-gray-950 transition-colors duration-200">
            Latest projects
          </h3>
  
          {/* Container dos Projetos */}
          <div className="project-container flex flex-col md:flex-row md:flex-wrap gap-6 md:gap-8">
            <ProjectLink
              href="/work/eir"
              bgClass="theme__bg-soap hoverable"
              mediaType="image"
              mediaSrc={eirCover}
            />
            <ProjectLink
              href="/work/habitushealth"
              bgClass="hh-temp hoverable"
              mediaType="video"
              mediaSrc={habitusCover}
              poster="https://cdn.shopify.com/b/shopify-brochure2-assets/5da0487c841eaac5914a2c5ffbe47302.png"
            />
            <ProjectLink
              href="/work/europcar"
              bgClass="theme__bg-calamansi hoverable"
              mediaType="video"
              mediaSrc={europcarCover}
              poster="https://cdn.shopify.com/b/shopify-brochure2-assets/5da0487c841eaac5914a2c5ffbe47302.png"
            />
            <ProjectLink
              href="/work/helenturkington"
              bgClass="theme__bg-vivid-red-tangelo hoverable"
              mediaType="image"
              mediaSrc={helenCover}
            />
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/work"
              className="mt-6 inline-flex items-center justify-center px-8 py-4 rounded-full dark:bg-gray-950 dark:text-white bg-white text-gray-950 hover:bg-gray-800 dark:hover:bg-gray-200 font-semibold hoverable transition-colors duration-200"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>
    );
  }
  
  // Componente de Projeto Individual
  interface ProjectLinkProps {
    href: string;
    bgClass: string;
    mediaType: "video" | "image";
    mediaSrc: string | StaticImageData;
    poster?: string;
  }
  
  function ProjectLink({ href, bgClass, mediaType, mediaSrc, poster }: ProjectLinkProps) {
    return (
      <a
        href={href}
        className="project-item w-full md:w-[calc(50%-16px)] hover:scale-95 transition-transform duration-300 ease-in-out block hoverable"
      >
        <div
          className={`relative rounded-xl overflow-hidden flex flex-col aspect-[4/3] justify-between ${bgClass}`}
        >
          <div className="absolute top-0 left-0 z-0 w-full h-full"></div>
          <div className="z-10 grow relative">
            <div className="h-full w-full relative">
              {mediaType === "video" ? (
                <video
                  className="transition-opacity ease-out-cubic duration-300 opacity-100 h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  poster={poster}
                >
                  <source src={typeof mediaSrc === 'string' ? mediaSrc : ''} type="video/webm" />
                </video>
              ) : (
                <Image
                  src={mediaSrc}
                  alt="Project Media"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-opacity ease-out-cubic duration-300 opacity-100"
                />
              )}
            </div>
          </div>
        </div>
      </a>
    );
  }
  