"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import TemplateMain from "@/components/TemplateMain";
import ContactForm from "@/components/ContactForm";
import CopyRight from "@/components/CopyRight";
import HeaderSubpage from "@/components/HeaderSubpage";

// Note: Metadata cannot be exported from client components in Next.js
// SEO optimization handled via Head component and schema markup

import europcarLogo from "../../../assets/img/europcar/Europcar-logo@2x.png"
import europcarPhase1 from "../../../assets/img/europcar/europcar-phase-1@2x.png"
import europcarPhase2 from "../../../assets/img/europcar/europcar-phase-2@2x.png"
import europcarWireframe from "../../../assets/img/europcar/europcar-wireframe.png"
import europcarUI from "../../../assets/img/europcar/europcar-ui.png"
import invisionApp from "../../../assets/img/europcar/europcar-invisionapp@2x.png"

// JSON-LD Schema for Europcar Case Study
const europcarCaseStudySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.creative-ton.com/work/europcar#breadcrumbs",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.creative-ton.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Work",
          "item": "https://www.creative-ton.com/work"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Europcar Case Study",
          "item": "https://www.creative-ton.com/work/europcar"
        }
      ]
    },
    {
      "@type": "CreativeWork",
      "@id": "https://www.creative-ton.com/work/europcar#casestudy",
      "name": "Europcar Contactless Car Rental UX/UI Design Case Study",
      "headline": "Redefining Car Rentals for the COVID-19 Era",
      "description": "Comprehensive case study of Europcar's contactless car rental experience designed during COVID-19, featuring user journey optimization, digital verification, and seamless pick-up processes.",
      "creator": {
        "@id": "https://www.creative-ton.com/#person"
      },
      "author": {
        "@id": "https://www.creative-ton.com/#person"
      },
      "publisher": {
        "@id": "https://www.creative-ton.com/#person"
      },
      "dateCreated": "2020",
      "inLanguage": "en-US",
      "url": "https://www.creative-ton.com/work/europcar",
      "image": "https://www.creative-ton.com/assets/img/europcar/Europcar-logo@2x.png",
      "about": {
        "@type": "Thing",
        "name": "Contactless Car Rental Experience Design",
        "description": "Digital transformation of car rental services for pandemic-era requirements"
      },
      "keywords": [
        "UX Design",
        "UI Design",
        "Car Rental",
        "Contactless Experience",
        "COVID-19 Solutions",
        "Digital Transformation",
        "User Journey Design",
        "Mobile App Design"
      ],
      "workExample": {
        "@type": "MobileApplication",
        "name": "Europcar Contactless Rental App",
        "description": "Mobile application enabling contactless car rental with digital verification and automated processes",
        "applicationCategory": "TravelApplication"
      },
      "client": {
        "@type": "Organization",
        "name": "Europcar",
        "description": "Leading car rental company in Europe",
        "url": "https://www.europcar.com",
        "industry": "Car Rental Services"
      },
      "genre": "Case Study",
      "learningResourceType": "Case Study",
      "teaches": [
        "Contactless UX Design",
        "Digital Verification Systems",
        "Sprint Methodology",
        "Crisis-Driven Innovation"
      ],
      "designProcess": [
        "Wireframing and User Flow Design",
        "UI Design and Prototyping",
        "Validation and Iteration"
      ]
    }
  ]
};

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode como padrão
  const [mounted, setMounted] = useState(false);
  const contactFormRef = useRef<HTMLDivElement>(null);

  const toggleDarkMode = () => {
    if (typeof window !== 'undefined') {
      const html = document.documentElement;
      html.classList.toggle("dark", !isDarkMode);
      setIsDarkMode(!isDarkMode);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Inicia no dark mode como padrão
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(europcarCaseStudySchema)
        }}
      />
      <div className="overflow-hidden">
        <HeaderSubpage 
          titlePage="Europcar Project Overview"
          descriptionProject="Redefining Car Rentals for Europcar During COVID-19: During the unprecedented times of 2020, our team reimagined Europcar's rental experience. With public health measures in place, we designed a seamless, contactless journey that allowed customers to rent and pick up cars directly from the garage eliminating the need for in-person contact at kiosks."
          toggleDarkMode={toggleDarkMode} 
          isLightMode={!isDarkMode} 
          toggleForm={toggleForm}
        />

        <TemplateMain>
          <section className="flex flex-col gap-4 w-full pb-8 pt-12 single-project">
            <article className="w-full sm:w-full md:w-full lg:max-w-5xl xl:max-w-5xl px-4 mx-auto">

              <div className="max-w-3xl mx-auto">
                <h2 className="h3 h3__400 pb-6">Design Process</h2>
                  <p><strong>Design Framework and Strategy: Inspired by Jake Knapp's Sprint: </strong>While the sprint process extended beyond the typical five days outlined in Jake Knapp's <em>"Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days,"</em> we applied its core principles to design, prototype, and validate a full user journey within two weeks. The use of iterative design, rapid prototyping, and cross-functional collaboration ensured alignment between user needs and <strong>business goals</strong>.</p>
              </div>

              <div className="max-w-3xl mx-auto">
                <h2 className="h3 h3__400 pb-6">Objectives and Challenges</h2>
                  
                <div className="list pb-8">
                  <ul>
                    <li><p>1. <strong>Create</strong> a fully digital, contactless rental experience.</p></li>
                    <li><p>2. <strong>Enable fast verification</strong> with real-time photo uploads.</p></li>
                    <li><p>3. <strong>Design an intuitive user journey</strong> for seamless pick-up and return processes.</p></li>
                  </ul>
                </div>
              </div>

              <div className="max-w-3xl mx-auto">
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
                <h2 className="h3 h3__400 pb-6">Phase 2: UI Design and Prototyping (InVision App)</h2>
              </div>

              <Image
                  src={europcarWireframe}
                  alt={`Phase 2: UI Design and Prototyping (InVision App)`}
                  className="w-full h-auto max-w-full rounded__16 my-12"
              />

              <div className="max-w-3xl mx-auto">
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
                  <p>A <strong>flowchart</strong>of the full user journey will be included to visually represent the end-to-end process, helping stakeholders grasp the complete flow at a glance.</p>
              </div>

              <Image
                  src={invisionApp}
                  alt={`Phase 2: UI Design and Prototyping (InVision App)`}
                  className="w-full h-auto max-w-full rounded__16 my-12"
              />

              <div className="max-w-3xl mx-auto">
                <h2 className="h3 h3__400 pb-6">Phase 3: Validation and Iteration</h2>
                <p>
                  Regular feedback loops with Europcar stakeholders enabled fast adjustments. We conducted usability testing and refined the prototypes based on real-time feedback, guaranteeing a smooth experience across various scenarios.
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <h3 className="h5 h5__400 py-6">Solution:</h3>
                <div className="list"><ul><li><strong>ID and License Verification:</strong> Customers could quickly upload photos, starting the rental within minutes.</li><li><strong>Contactless Car Access:</strong> Real-time photo validation allowed car unlocks without visiting a counter.</li><li><strong>Automated Return Process:</strong>  Customers followed a photo-based checklist for transparent returns, reducing disputes.</li></ul></div>
              </div>

              <div className="max-w-3xl mx-auto">
                <h2 className="h3 h3__400 pb-6">Results and Impact</h2>
                <p>
                This project set a new benchmark for Europcar's digital transformation, offering a future-ready, scalable rental model.
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <h3 className="h5 h5__400 py-6">Key Outcomes:</h3>
                <div className="list"><ul><li><strong>Improved customer satisfaction:</strong> with a self-service model.</li><li><strong>Reduced rental times:</strong> Reduced rental times by eliminating wait times at counters.</li><li><strong>Scalable solution:</strong> ready for other Europcar locations.</li></ul></div>
              </div>

              <div className="max-w-3xl mx-auto">
                <h2 className="h3 h3__400 pb-6">Conclusion: A New Standard in Car Rentals</h2>
                <p>This project stands as a testament to how <strong>thoughtful UX design</strong>, agile collaboration, and innovation can transform industries even in the most challenging times. The contactless journey we developed not only met public health requirements but also aligned perfectly with Europcar's goals to enhance the user experience.</p>
                <p>This case study exemplifies how I combine <strong>design thinking, rapid prototyping, and a user-centered approach</strong> to deliver impactful solutions that drive business success.</p>
              </div>

            </article>
          </section>

          <div ref={contactFormRef}>
            <ContactForm />
          </div>

          <CopyRight />
        </TemplateMain>
      </div>
    </>
  );
}
