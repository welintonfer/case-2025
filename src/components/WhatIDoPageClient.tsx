"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import TemplateMain from "@/components/TemplateMain";
import ContactForm from "@/components/ContactForm";
import CopyRight from "@/components/CopyRight";
import HeaderSubpage from "@/components/HeaderSubpage";

// Import all images
import briefing from "../assets/img/what-i-do/briefing@2x.png";
import uxAldit from "../assets/img/what-i-do/ux-audit@2x.png";
import informationArchitecturePart1 from "../assets/img/what-i-do/information-architecture-part-1@2x.png";
import workshop from "../assets/img/what-i-do/workshop@2x.png";
import sprint from "../assets/img/what-i-do/sprint@2x.png";
import persona from "../assets/img/what-i-do/persona@2x.png";
import research from "../assets/img/what-i-do/research@2x.png";
import userJourney from "../assets/img/what-i-do/user-journey@2x.png";
import lowFidelityDesign from "../assets/img/what-i-do/Low-fidelity-design@2x.png";
import wireframe from "../assets/img/what-i-do/wireframe@2x.png";
import testingPart1 from "../assets/img/what-i-do/testing-part-1@2x.png";
import informationArchitecturePart2 from "../assets/img/what-i-do/information-architecture-part-2@2x.png";
import toolLab from "../assets/img/what-i-do/tool-lab@2x.png";
import designSystem from "../assets/img/what-i-do/design-system@2x.png";
import testingPart2 from "../assets/img/what-i-do/testing-part-2@2x.png";
import crossBrowserTesting from "../assets/img/what-i-do/cross-browser-testing@2x.png";
import monitoring from "../assets/img/what-i-do/monitoring@2x.png";

export default function WhatIDoPageClient() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Inicializa como dark mode
  const [mounted, setMounted] = useState(false);
  const contactFormRef = useRef<HTMLDivElement>(null);

  const toggleDarkMode = () => {
    if (typeof window !== "undefined") {
      const newMode = !isDarkMode;
      setIsDarkMode(newMode);
      
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
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

  // Data de início da carreira
  const startDate = new Date(2010, 2, 8); // março é mês 2 (zero-based)
  const today = new Date();

  // Calcula anos completos
  const diffYears = today.getFullYear() - startDate.getFullYear();
  const hasHadAnniversary =
    today.getMonth() > startDate.getMonth() ||
    (today.getMonth() === startDate.getMonth() && today.getDate() >= startDate.getDate());

  const yearsOfExperience = hasHadAnniversary ? diffYears : diffYears - 1;

  // Texto dinâmico
  const description = `Hello world! With over ${yearsOfExperience} years in the UX/UI design arena, I've honed my craft in navigating complex challenges, sculpting visually stunning UI designs, conducting impactful UX research, all while dancing to the rhythm of user-centered design principles.`;

  return (
    <div className="overflow-hidden">
      <HeaderSubpage 
        titlePage="What I do"
        descriptionProject={description}
        toggleDarkMode={toggleDarkMode} 
        isLightMode={!isDarkMode} 
        toggleForm={toggleForm}
      />

      <TemplateMain>
        
      <section className="relative mt-12 flex flex-col justify-center py-12 overflow-hidden isolate bg-white border-t-4 border-b-4 border-solid border-gray-900">
          <div className="absolute inset-2 -z-10">
            <div className="bg-1"></div>
            <div className="bg-2"></div>
            <div className="bg-3"></div>
          </div>
          <div className="container mx-auto flex flex-col justify-center items-center">
            <div className="flex flex-col gap-5 md:flex-row md:items-end justify-between">
              <div>
                <h2 className="h3 pb-6 text-center font-semibold text-gray-950">01. Understanding</h2>
                <p className="text-center max-w-3xl mx-auto text-gray-600">
                  Effective UX design prioritises user needs with intuitive navigation, clear messaging, and visually appealing design for a seamless experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex flex-col justify-center py-12">
          <div className="w-full px-6 lg:px-8 py-16">
            <div className="max-w-9xl mx-auto">
              <div className="flex lg:flex-row flex-col-reverse justify-center items-center gap-8">
                <div className="flex-1">
                  <h3 className="h4 font-medium text-center lg:text-left">Briefing</h3>
                  <p className="mt-8 max-w-6xl text-lg leading-8 text-center lg:text-left opacity-80">
                    In crafting my design process, I infuse a strategic essence by immersing myself in the art of the attentive briefing. I don't just listen; I empathetically step into the client's shoes, delving into their vision amidst the dynamic market landscape. This briefing goes beyond mere notes on interface features it's a profound dive into the intricacies
                  </p>
                </div>
                <div className="flex-1 lg:flex  w-full">
                  <Image
                    src={briefing}
                    alt={`briefing`}
                    className="h-auto w-full"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-6 lg:px-8 py-16">
            <div className="max-w-9xl mx-auto">
              <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                
              <div className="flex-1 lg:flex  w-full">
                  <Image
                    src={uxAldit}
                    alt={`uxAldit`}
                    className="h-auto w-full"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="h4 font-medium text-center lg:text-left">UX Audit</h3>
                  <p className="mt-8 max-w-6xl text-lg leading-8 text-center lg:text-left opacity-80">
                    The User Experience Audit (UX Audit) strategically elevates digital products by unveiling accessibility and conversion challenges. While corrective, it's not the final solution; rather, a catalyst for substantial improvements.
                  </p>
                  <p className="mt-8 max-w-6xl text-lg leading-8 text-center lg:text-left opacity-80">
                    This assessment discerns issues impeding the user experience, enabling swift resolutions in harmony with Jakob Nielsen's 10 heuristic principles. The UX Audit signifies a pivotal genesis in the pursuit of success, providing comprehensive insights preluding workshops, including those pivotal in sculpting the overall user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-6 lg:px-8 py-16">
            <div className="max-w-9xl mx-auto">
              <div className="flex lg:flex-row flex-col-reverse justify-center items-center gap-8">
                <div className="flex-1">
                  <h3 className="h4 font-medium text-center lg:text-left">Information Architecture Part 1</h3>
                  <p className="mt-8 max-w-6xl text-lg leading-8 text-center lg:text-left opacity-80">
                    In the pursuit of sculpting a robust digital landscape, the intricate interplay between Briefing and UX Audit reveals foundational truths. Briefing sketches the project canvas, outlining goals and stakeholder intricacies, while UX Audit dissects existing challenges. These strategic strides form the cornerstone of Information Architecture (IA), covering 40% to 60% of initial considerations. Yet, true IA mastery calls for a profound understanding of user dynamics. Augmenting these insights through meticulous research and testing unveils user-centric architectures, ensuring a harmonious blend of project requisites and the ever-shifting user landscape. As we embark on this journey, Information Architecture Insights takes center stage—a symphony of foresight and an intimate grasp of user-centric intricacies.
                  </p>
                </div>
                <div className="flex-1 lg:flex  w-full">
                  <Image
                    src={informationArchitecturePart1}
                    alt={`Information Architecture Part 1`}
                    className="h-auto w-full"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mt-12 flex flex-col justify-center py-12 overflow-hidden isolate bg-white border-t-4 border-b-4 border-solid border-gray-900">
          <div className="absolute inset-2 -z-10">
            <div className="bg-1"></div>
            <div className="bg-2"></div>
            <div className="bg-3"></div>
          </div>
          <div className="container mx-auto flex flex-col justify-center items-center">
            <div className="flex flex-col gap-5 md:flex-row md:items-end justify-between">
              <div>
                <h2 className="h3 pb-6 text-center font-semibold text-gray-950">02. Discover</h2>
                <p className="text-center max-w-3xl mx-auto text-gray-600">
                  In crafting a seamless user experience, wireframing is our pivotal step. With a mobile-first approach, we create low-fidelity wireframes a symphony of design simplicity. Each element plays a carefully orchestrated note in the pursuit of an optimal user experience. Testing becomes our compass, guiding us toward a transformative destination. This isn't just wireframing; it's sculpting the digital canvas with precision and foresight.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex flex-col justify-center py-12">
          <div className="w-full px-6 lg:px-8 py-16">
            <div className="max-w-9xl mx-auto">
              <div className="flex lg:flex-row flex-col-reverse justify-center items-center gap-8">
                <div className="flex-1">
                  <h3 className="h4 font-medium text-center lg:text-left">Workshop</h3>
                  <p className="mt-8 max-w-6xl text-lg leading-8 text-center lg:text-left opacity-80">
                    Workshops stand as crucial catalysts, unraveling the profound tapestry of communication barriers within a company's interface. They go beyond the surface, delving deep into the authentic challenges, nuanced operations, and cultural intricacies of users. In these sessions, we illuminate the minute details, paving the way for a tailored approach that not only addresses specific user needs but elevates the entire user experience.
                  </p>
                </div>
                <div className="flex-1 lg:flex  w-full">
                  <Image
                    src={workshop}
                    alt={`Workshop`}
                    className="h-auto w-full"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-6 lg:px-8 py-16">
            <div className="max-w-9xl mx-auto">
              <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                
              <div className="flex-1 lg:flex  w-full">
                  <Image
                    src={sprint}
                    alt={`Sprint`}
                    className="h-auto w-full"
                    style={{ objectFit: "contain" }}
                  />
                </div>

                <div className="flex-1">
                  <h3 className="h4 font-medium text-center lg:text-left">Sprint</h3>
                  <p className="mt-8 max-w-6xl text-lg leading-8 text-center lg:text-left opacity-80">
                    Strategically, I harness Sprints as a dynamic tool to accelerate problem-solving, especially when time is of the essence. Beyond that, I deploy Sprints as a key driver in fine-tuning marketing campaigns, acknowledging the profound influence an adept UX Designer can wield in these strategic endeavors.
                  </p>
                  <p className="mt-8 max-w-6xl text-lg leading-8 text-center lg:text-left opacity-80">
                    This assessment discerns issues impeding the user experience, enabling swift resolutions in harmony with Jakob Nielsen's 10 heuristic principles. The UX Audit signifies a pivotal genesis in the pursuit of success, providing comprehensive insights preluding workshops, including those pivotal in sculpting the overall user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-6 lg:px-8 py-16">
            <div className="max-w-9xl mx-auto">
              <div className="flex lg:flex-row flex-col-reverse justify-center items-center gap-8">
                <div className="flex-1">
                  <h3 className="h4 font-medium text-center lg:text-left">Persona</h3>
                  <p className="mt-8 max-w-6xl text-lg leading-8 text-center lg:text-left opacity-80">
                    In my customary approach, I intricately carve out two personas: proto-personas and personas, both meticulously sculpted from authentic data extracted from the evolving product. Proto-personas delicately sketch out characteristics, all while maintaining a prudent awareness of inherent limitations steering clear of unwarranted assumptions. It remains paramount to embrace the fundamental truth that every user is inherently distinctive throughout this meticulous process. this process.
                  </p>
                </div>
                <div className="flex-1 lg:flex  w-full">
                  <Image
                    src={persona}
                    alt={`Persona`}
                    className="h-auto w-full"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-6 lg:px-8 py-16">
            <div className="max-w-9xl mx-auto">
              <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                
              <div className="flex-1 lg:flex  w-full">
                  <Image
                    src={research}
                    alt={`Research`}
                    className="h-auto w-full"
                    style={{ objectFit: "contain" }}
                  />
                </div>

                <div className="flex-1">
                  <h3 className="h4 font-medium text-center lg:text-left">Research</h3>
                  <p className="mt-8 max-w-6xl text-lg leading-8 text-center lg:text-left opacity-80">
                    In my research and A/B testing methodology, it's not just about observing user behavior; it's about truly understanding the product's role in the user's daily rhythm. By transcending conventional demographics, I aim for nuanced insights that paint a broader picture. This approach offers a holistic understanding, going beyond surface-level interactions and providing a comprehensive view of user engagement and seamless product integration into their everyday experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-6 lg:px-8 py-16">
            <div className="max-w-9xl mx-auto">
              <div className="flex lg:flex-row flex-col-reverse justify-center items-center gap-8">
                <div className="flex-1">
                  <h3 className="h4 font-medium text-center lg:text-left">User Journey</h3>
                  <p className="mt-8 max-w-6xl text-lg leading-8 text-center lg:text-left opacity-80">
                    Delving into the subtleties mentioned earlier, it's the intricacies of the user journey that truly captivate me within the realm of UX design. At this pivotal moment, we ascend to a heightened understanding of the user's perspective, unraveling the complexities of their expectations and frustrations with a meticulous eye for detail.
                  </p>
                </div>
                <div className="flex-1 lg:flex  w-full">
                  <Image
                    src={userJourney}
                    alt={`User Journey`}
                    className="h-auto w-full"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mt-12 flex flex-col justify-center py-12 overflow-hidden isolate bg-white border-t-4 border-b-4 border-solid border-gray-900">
          <div className="absolute inset-2 -z-10">
            <div className="bg-1"></div>
            <div className="bg-2"></div>
            <div className="bg-3"></div>
          </div>
          <div className="container mx-auto flex flex-col justify-center items-center">
            <div className="flex flex-col gap-5 md:flex-row md:items-end justify-between">
              <div>
                <h2 className="h3 pb-6 text-center font-semibold text-gray-950">03. Wireframe</h2>
                <p className="text-center max-w-3xl mx-auto text-gray-600">
                  In the realm of UX design, a comprehensive discovery phase isn't just crucial—it's the heartbeat. We embark on a strategic odyssey, navigating with meticulous planning, in-depth research, and wielding tools like proto-personas, mood boards, and journey maps as our compass. This isn't just design; it's a journey to understand and transcend user experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex flex-col justify-center py-12">
          <div className="w-full px-6 lg:px-8 py-16">
            <div className="max-w-9xl mx-auto">
              <div className="flex lg:flex-row flex-col-reverse justify-center items-center gap-8">
                <div className="flex-1">
                  <h3 className="h4 font-medium text-center lg:text-left">Low-fidelity Design</h3>
                  <p className="mt-8 max-w-6xl text-lg leading-8 text-center lg:text-left opacity-80">
                    I have a profound affinity for engaging with low-fidelity design—not merely for its technical significance in the process, but for the juncture it provides. It's the moment where the diverse array of ideas, meticulously inked on paper by our team, comes to life.
                  </p>
                </div>
                <div className="flex-1 lg:flex  w-full">
                  <Image
                    src={lowFidelityDesign}
                    alt={`Low-fidelity Design`}
                    className="h-auto w-full"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-6 lg:px-8 py-16">
            <div className="max-w-9xl mx-auto">
              <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                
              <div className="flex-1 lg:flex  w-full">
                  <Image
                    src={wireframe}
                    alt={`Wireframe`}
                    className="h-auto w-full"
                    style={{ objectFit: "contain" }}
                  />
                </div>

                <div className="flex-1">
                  <h3 className="h4 font-medium text-center lg:text-left">Wireframe</h3>
                  <p className="mt-8 max-w-6xl text-lg leading-8 text-center lg:text-left opacity-80">
                  In the realm of intricate projects, wireframes emerge not just as a mere tool but as a compelling narrative a living case study etched into the project's chronicles. They transcend the conventional, weaving a continuous tapestry that not only guides the design team but also extends a helping hand to our visionary developers. Picture this: a roadmap for testing, a portal to low-fidelity prototypes—these wireframes transcend pixels. They are the silent architects, sculpting the project's destiny even before the UI dances into the limelight. And in this dance, they don't just optimise; they elevate—the unsung heroes in the symphony of cost efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-6 lg:px-8 py-16">
            <div className="max-w-9xl mx-auto">
              <div className="flex lg:flex-row flex-col-reverse justify-center items-center gap-8">
                <div className="flex-1">
                  <h3 className="h4 font-medium text-center lg:text-left">Testing part 1</h3>
                  <p className="mt-8 max-w-6xl text-lg leading-8 text-center lg:text-left opacity-80">
                    In my customary approach, I intricately carve out two personas: proto-personas and personas, both meticulously sculpted from authentic data extracted from the evolving product. Proto-personas delicately sketch out characteristics, all while maintaining a prudent awareness of inherent limitations—steering clear of unwarranted assumptions. It remains paramount to embrace the fundamental truth that every user is inherently distinctive throughout this meticulous process. this process.
                  </p>
                </div>
                <div className="flex-1 lg:flex  w-full">
                  <Image
                    src={testingPart1}
                    alt={`Testing part 1`}
                    className="h-auto w-full"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-6 lg:px-8 py-16">
            <div className="max-w-9xl mx-auto">
              <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                
              <div className="flex-1 lg:flex  w-full">
                  <Image
                    src={informationArchitecturePart2}
                    alt={`Information Architecture Part 2`}
                    className="h-auto w-full"
                    style={{ objectFit: "contain" }}
                  />
                </div>

                <div className="flex-1">
                  <h3 className="h4 font-medium text-center lg:text-left">Information Architecture Part 2</h3>
                  <p className="mt-8 max-w-6xl text-lg leading-8 text-center lg:text-left opacity-80">
                    In the intricate dance of digital creation, Information Architecture (IA) emerges as the unsung conductor, not merely constructing layouts but infusing life into user experiences. It's not just about how it looks; it's about how it works. From the foundational Briefing to the meticulous choreography of a UX Audit, IA is the quiet maestro orchestrating a narrative where every user journey unfolds like a revelation. It's not navigation; it's a seamless glide through an experience. As we venture into Information Architecture Part 2, we don the mantle of visionaries, shaping not just digital landscapes but the very future of user-centric design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mt-12 flex flex-col justify-center py-12 overflow-hidden isolate bg-white border-t-4 border-b-4 border-solid border-gray-900">
          <div className="absolute inset-2 -z-10">
            <div className="bg-1"></div>
            <div className="bg-2"></div>
            <div className="bg-3"></div>
          </div>
          <div className="container mx-auto flex flex-col justify-center items-center">
            <div className="flex flex-col gap-5 md:flex-row md:items-end justify-between">
              <div>
                <h2 className="h3 pb-6 text-center font-semibold text-gray-950">04. Prototype</h2>
                <p className="text-center max-w-3xl mx-auto text-gray-600">
                  Prototyping with Figma, Invisionapp, and UXPin is a crucial UX design phase that involves creating interactive mockups, testing, and refining the user experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex flex-col justify-center py-12">
          <div className="w-full px-6 lg:px-8 py-16">
            <div className="max-w-9xl mx-auto">
              <div className="flex lg:flex-row flex-col-reverse justify-center items-center gap-8">
                <div className="flex-1">
                  <h3 className="h4 font-medium text-center lg:text-left">Tool Lab</h3>
                  <p className="mt-8 max-w-6xl text-lg leading-8 text-center lg:text-left opacity-80">
                    In my arsenal, I wield tools like Invision, UXPin, Sketch, and Figma my personal J.A.R.V.I.S. Ensuring the project is finely tuned for devmode, I make front-end development a seamless journey, just like a Stark-tech creation coming to life.
                  </p>
                </div>
                <div className="flex-1 lg:flex  w-full">
                  <Image
                    src={toolLab}
                    alt={`Tool Lab`}
                    className="h-auto w-full"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-6 lg:px-8 py-16">
            <div className="max-w-9xl mx-auto">
              <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                
              <div className="flex-1 lg:flex  w-full">
                  <Image
                    src={designSystem}
                    alt={`Design System`}
                    className="h-auto w-full"
                    style={{ objectFit: "contain" }}
                  />
                </div>

                <div className="flex-1">
                  <h3 className="h4 font-medium text-center lg:text-left">Design System</h3>
                  <p className="mt-8 max-w-6xl text-lg leading-8 text-center lg:text-left opacity-80">
                    In my journey from Graphic Design, the Brand Guide has been my compass since the early days of my career. Engaging with the Design System extends beyond Figma it resonates in CSS Global. Here, the Design System, embodied in CSS, elevates the essence of code maintenance, ensuring a harmonious blend of quality and precision.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-6 lg:px-8 py-16">
            <div className="max-w-9xl mx-auto">
              <div className="flex lg:flex-row flex-col-reverse justify-center items-center gap-8">
                <div className="flex-1">
                  <h3 className="h4 font-medium text-center lg:text-left">Testing part 2</h3>
                  <p className="mt-8 max-w-6xl text-lg leading-8 text-center lg:text-left opacity-80">
                    In leveraging the prepared Design System and high-fidelity Prototype, our strategic move is to initiate the second round of A/B tests. This pivotal step allows us to rigorously validate the real-world behaviour of these implemented elements. The beauty lies in the seamless integration of A/B tests with nuanced variations in both the Design System and the Prototype. This targeted approach directs our focus to specific areas, maximising our ability to discern and optimise elements that wield substantial influence on the user experience.
                  </p>
                </div>
                <div className="flex-1 lg:flex  w-full">
                  <Image
                    src={testingPart2}
                    alt={`Testing part 2`}
                    className="h-auto w-full"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mt-12 flex flex-col justify-center py-12 overflow-hidden isolate bg-white border-t-4 border-b-4 border-solid border-gray-900">
          <div className="absolute inset-2 -z-10">
            <div className="bg-1"></div>
            <div className="bg-2"></div>
            <div className="bg-3"></div>
          </div>
          <div className="container mx-auto flex flex-col justify-center items-center">
            <div className="flex flex-col gap-5 md:flex-row md:items-end justify-between">
              <div>
                <h2 className="h3 pb-6 text-center font-semibold text-gray-950">05. Testing</h2>
                <p className="text-center max-w-3xl mx-auto text-gray-600">
                  Testing and monitoring user behaviour with tools like Hotjar is crucial in UX design, enhancing the user experience to align with your audience's needs and preferences.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex flex-col justify-center py-12">
          <div className="w-full px-6 lg:px-8 py-16">
            <div className="max-w-9xl mx-auto">
              <div className="flex lg:flex-row flex-col-reverse justify-center items-center gap-8">
                <div className="flex-1">
                  <h3 className="h4 font-medium text-center lg:text-left">Cross-Browser Testing</h3>
                  <p className="mt-8 max-w-6xl text-lg leading-8 text-center lg:text-left opacity-80">
                    With over a decade of experience since 2010, I've honed the ability to identify and address the classic browser issues. I recognise the crucial importance of ensuring the solutions we develop provide a consistent and optimised experience, regardless of the user's choice of browser. This not only enhances usability but also strengthens user confidence, contributing to the overall success of the digital experience.
                  </p>
                </div>
                <div className="flex-1 lg:flex  w-full">
                  <Image
                    src={crossBrowserTesting}
                    alt={`Cross-Browser Testing`}
                    className="h-auto w-full"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-6 lg:px-8 py-16">
            <div className="max-w-9xl mx-auto">
              <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                
              <div className="flex-1 lg:flex  w-full">
                  <Image
                    src={monitoring}
                    alt={`Monitoring`}
                    className="h-auto w-full"
                    style={{ objectFit: "contain" }}
                  />
                </div>

                <div className="flex-1">
                  <h3 className="h4 font-medium text-center lg:text-left">Monitoring</h3>
                  <p className="mt-8 max-w-6xl text-lg leading-8 text-center lg:text-left opacity-80">
                    Monitoring isn't about surveillance; quite the opposite it's about observing your user's behaviour, delving into their interactions, and uncovering new possibilities we might not have imagined. I accomplish this through tools like Hotjar. It's crucial to understand that monitoring is an ongoing process, aligning with the ever-evolving cultural landscape we find ourselves in. Embracing this constant vigilance ensures that we adapt and innovate in step with the dynamic nature of our digital ecosystem. precision.
                  </p>
                </div>
              </div>
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
