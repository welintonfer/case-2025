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

  

console.log("Video Path:", europcarCover); // Teste rápido para confirmar o carregamento do caminho

  
  interface TemplateCaseStudyProps {
    isLightMode: boolean;
  }
  
  export default function TemplateCaseStudy({ isLightMode }: TemplateCaseStudyProps) {
    return (
      <section className="flex flex-col gap-4 w-full pb-8">
        <div className="max-w-9xl mx-auto">
          <h3 className="richtext h1__500 h3 inline-block text-pretty py-8">
            Latest projects
          </h3>
  
          {/* Container dos Projetos */}
          <div className="flex flex-wrap project-container md:flex-row justify-between">
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
            {isLightMode ? (
              <Link
                href="/work"
                className="mt-6 inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-gray-950 hover:bg-slate-100 font-semibold hoverable"
              >
                View Projects
              </Link>
            ) : (
              <Link
                href="/work"
                className="mt-6 inline-flex items-center justify-center px-8 py-4 rounded-full bg-gray-950 text-white hover:bg-gray-800 font-semibold hoverable"
              >
                View Projects
              </Link>
            )}
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
        className="hover:scale-95 transition-transform duration-300 ease-in-out block hoverable"
        style={{
          flex: "1 1 calc(50% - 16px)",
          width: "100%",
        }}
      >
        <div
          className={`relative rounded-xl overflow-hidden flex flex-col h-[400px] sm:h-auto justify-between ${bgClass}`}
          style={{ position: "relative", width: "100%", height: "100%" }}
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
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity ease-out-cubic duration-300 opacity-100"
                />
              )}
            </div>
          </div>
        </div>
      </a>
    );
  }
  