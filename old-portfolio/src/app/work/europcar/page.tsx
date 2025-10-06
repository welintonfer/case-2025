"use client";

import Image from "next/image";

import { useState, useEffect, useRef } from "react";
import TemplateMain from "@/components/TemplateMain";
import ContactForm from "@/components/ContactForm";
import CopyRight from "@/components/CopyRight";
import HeaderSubpage from "@/components/HeaderSubpage";


import europcarLogo from "../../../assets/img/europcar/Europcar-logo@2x.png"
import europcarPhase1 from "../../../assets/img/europcar/europcar-phase-1@2x.png"
import europcarPhase2 from "../../../assets/img/europcar/europcar-phase-2@2x.png"
import europcarWireframe from "../../../assets/img/europcar/europcar-wireframe.png"
import europcarUI from "../../../assets/img/europcar/europcar-ui.png"
import invisionApp from "../../../assets/img/europcar/europcar-invisionapp@2x.png"



export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false); // Adiciona um estado para verificar se o componente foi montado
  const contactFormRef = useRef<HTMLDivElement>(null);

  // Modo escuro, só no cliente
  const toggleDarkMode = () => {
    if (typeof window !== 'undefined') {
      const html = document.documentElement;
      html.classList.toggle("dark", !isDarkMode);
      setIsDarkMode(!isDarkMode);
    }
  };

  // Efeito para aplicar o tema escuro ao montar o componente no cliente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
      setMounted(true); // Marca o componente como montado
    }
  }, []);

  // Função para rolar até o formulário
  const toggleForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-hidden">
      <HeaderSubpage 
        titlePage="Europcar Project Overview"
        descriptionProject="Redefining Car Rentals for Europcar During COVID-19: During the unprecedented times of 2020, our team reimagined Europcar's rental experience. With public health measures in place, we designed a seamless, contactless journey that allowed customers to rent and pick up cars directly from the garage eliminating the need for in-person contact at kiosks."
        toggleDarkMode={toggleDarkMode} 
        isLightMode={!isDarkMode} 
        toggleForm={toggleForm} // Passa a função para o header
      />

      <TemplateMain>
        <section className="flex flex-col gap-4 w-full pb-8 pt-12 single-project">
          <article className="w-full sm:w-full md:w-full lg:max-w-5xl xl:max-w-5xl px-4 mx-auto">


            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <h2 className="h3 h3__400 pb-6">Design Process</h2>
                <p><strong>Design Framework and Strategy: Inspired by Jake Knapp’s Sprint: </strong>While the sprint process extended beyond the typical five days outlined in Jake Knapp's <em>"Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days,"</em> we applied its core principles to design, prototype, and validate a full user journey within two weeks. The use of iterative design, rapid prototyping, and cross-functional collaboration ensured alignment between user needs and <strong>business goals</strong>.</p>
            </div>

            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <h2 className="h3 h3__400 pb-6">Objectives and Challenges</h2>
                
              <div className="list pb-8">
                <ul>
                  <li><p>1. <strong>Create</strong> a fully digital, contactless rental experience.</p></li>
                  <li><p>2. <strong>Enable fast verification</strong> with real-time photo uploads.</p></li>
                  <li><p>3. <strong>esign an intuitive user journey</strong> for seamless pick-up and return processes.</p></li>
                </ul>
              </div>
            </div>



            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <h2 className="h3 h3__400 pb-6">Process and Workflow</h2>
              <p>
              <strong>Phase 1: Wireframing and User Flow Design</strong> <br />
              This phase mapped the core touchpoints such as ID uploads, vehicle unlocking, and return inspections ensuring every interaction was intuitive.
              </p>
            </div>

            <Image
                src={europcarPhase1}
                alt={`Wireframing and User Flow Design`}
                className="w-full h-auto max-w-full rounded__16 my-12"
            />


            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <p>
               <strong>Wireframe at full user journey</strong> 
             </p>
            </div>


            <Image
                src={europcarPhase2}
                alt={`Wireframing and User Flow Design`}
                className="w-full h-auto max-w-full rounded__16 my-12"
            />


            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <h2 className="h3 h3__400 pb-6">Phase 2: UI Design and Prototyping (InVision App)</h2>
            </div>

            <Image
                src={europcarWireframe}
                alt={`Phase 2: UI Design and Prototyping (InVision App)`}
                className="w-full h-auto max-w-full rounded__16 my-12"
            />

            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <p>
                The wireframes were refined into high-fidelity designs, ready for seamless developer handoff. These prototypes were built pixel-perfect, ensuring consistency.
             </p>
            </div>

            <Image
                src={europcarUI}
                alt={`Phase 2: UI Design and Prototyping (InVision App)`}
                className="w-full h-auto max-w-full rounded__16 my-12"
            />

            <div className="max-w-3xl mx-auto">
              {/* text here */}
                <p>A <strong>flowchart</strong>of the full user journey will be included to visually represent the end-to-end process, helping stakeholders grasp the complete flow at a glance.</p>
            </div>

            <Image
                src={invisionApp}
                alt={`Phase 2: UI Design and Prototyping (InVision App)`}
                className="w-full h-auto max-w-full rounded__16 my-12"
            />


            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <h2 className="h3 h3__400 pb-6">Phase 3: Validation and Iteration</h2>
              <p>
                Regular feedback loops with Europcar stakeholders enabled fast adjustments. We conducted usability testing and refined the prototypes based on real-time feedback, guaranteeing a smooth experience across various scenarios.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <h3 className="h5 h5__400 py-6">Solution:</h3>
              <div className="list"><ul><li><strong>ID and License Verification:</strong> Customers could quickly upload photos, starting the rental within minutes.</li><li><strong>Contactless Car Access:</strong> Real-time photo validation allowed car unlocks without visiting a counter.</li><li><strong>Automated Return Process:</strong>  Customers followed a photo-based checklist for transparent returns, reducing disputes.</li></ul></div>
            </div>

            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <h2 className="h3 h3__400 pb-6">Results and Impact</h2>
              <p>
              This project set a new benchmark for Europcar’s digital transformation, offering a future-ready, scalable rental model.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <h3 className="h5 h5__400 py-6">Key Outcomes:</h3>
              <div className="list"><ul><li><strong>Improved customer satisfaction:</strong> with a self-service model.</li><li><strong>Reduced rental times:</strong> Reduced rental times by eliminating wait times at counters.</li><li><strong>Scalable solution:</strong> ready for other Europcar locations.</li></ul></div>
            </div>


            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <h2 className="h3 h3__400 pb-6">Conclusion: A New Standard in Car Rentals</h2>
              <p>This project stands as a testament to how <strong>thoughtful UX design</strong>, agile collaboration, and innovation can transform industries even in the most challenging times. The contactless journey we developed not only met public health requirements but also aligned perfectly with Europcar’s goals to enhance the user experience.</p>
              <p>This case study exemplifies how I combine <strong>design thinking, rapid prototyping, and a user-centered approach</strong> to deliver impactful solutions that drive business success.</p>
            </div>

          </article>
        </section>

        {/* Formulário de Contato */}
        <div ref={contactFormRef}>
          <ContactForm />
        </div>

        <CopyRight />
      </TemplateMain>
    </div>
  );
}


