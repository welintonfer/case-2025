"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import TemplateMain from "@/components/TemplateMain";
import ContactForm from "@/components/ContactForm";
import CopyRight from "@/components/CopyRight";
import HeaderSubpage from "@/components/HeaderSubpage";

import logo from "../../../assets/img/habitus/logo@2x.png";
import img01 from "../../../assets/img/habitus/01@2x.png";
import img02 from "../../../assets/img/habitus/02@2x.png";
import img03 from "../../../assets/img/habitus/03@2x.png";
import img04 from "../../../assets/img/habitus/04@2x.png";
import img05 from "../../../assets/img/habitus/05@2x.png";
import img06 from "../../../assets/img/habitus/06-registration-steps@2x.png";
import img07 from "../../../assets/img/habitus/07-onboarding@2x.png";
import img08 from "../../../assets/img/habitus/08-onboarding-example@2x.png";
import img09 from "../../../assets/img/habitus/09-ui-kit@2x.png";
import img10 from "../../../assets/img/habitus/blender-cameras-for-photos-min.png";
import img11 from "../../../assets/img/habitus/3d-back-isometric.png";
import img12 from "../../../assets/img/habitus/3d-front-isometric.png";
import img13 from "../../../assets/img/habitus/php-croper-img.png";
import img14 from "../../../assets/img/habitus/habitus-health-logo-2d@2x.png";
// @ts-ignore
import video01 from "../../../assets/video/habitus-health-logo-3d.mp4";

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false); // Marca se o componente foi montado no cliente
  const contactFormRef = useRef<HTMLDivElement>(null);

  // Modo escuro, aplicado apenas após a montagem no cliente
  const toggleDarkMode = () => {
    if (mounted) {
      const html = document.documentElement;
      html.classList.toggle("dark", !isDarkMode);
      setIsDarkMode(!isDarkMode);
    }
  };

  // Detecta preferência de tema apenas no cliente
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDark);
    setMounted(true); // Marca o componente como montado para evitar renderizações inconsistentes
  }, []);

  // Função para rolar até o formulário
  const toggleForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Evita renderizar o componente até que ele esteja montado, para evitar erro de hidratação
  if (!mounted) return null;

  return (
    <div className="overflow-hidden">
      <HeaderSubpage 
        titlePage="Habitus Health Project Overview"
        descriptionProject="In my role with Habitus Health, I tackled diverse design and technical responsibilities aimed at enhancing user experience, optimising workflow efficiency, and supporting the brand's mission to improve workplace well-being. The platform addresses ergonomic health by promoting correct posture, ultimately benefiting both physical and mental wellness. My work spanned UX auditing, strategic enhancements, and the implementation of robust design systems that collectively elevated the user experience and strengthened brand loyalty."
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
              <p>
              The design process prioritised refining the user journey to create a seamless, impactful, and intuitive experience across the platform. Key tasks included:
              </p>
              
              <div className="list py-8">
                <ul>
                  <li><p><strong>1. </strong><strong>Structuring Information Hierarchy</strong>: Introduced clear section dividers and icons to categorise elements logically, ensuring users can navigate the content effortlessly.</p></li>
                  <li><p><strong>2. </strong><strong>Optimising Spacing and Alignment</strong>: Established consistent padding, font sizes, and component alignment to create a balanced, polished interface across all screens.</p></li>
                  <li><p><strong>3. </strong><strong>Enhancing Visual Flow</strong>: Used visual hierarchy to intuitively guide users through the app, prioritising ease of navigation and fluid interactions.</p></li>
                </ul>
              </div>

            </div>



            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <h2 className="h3 h3__400 pb-6">Aligning System Design with Real-World Interaction</h2>
              <p>
              As part of our UX strategy, we identified and addressed underutilised spaces within the interface. To maintain a clean, purposeful design, these gaps were selectively filled, reinforcing the visual hierarchy. This approach created a balanced composition that directed user focus on core content, resulting in a seamless and engaging experience.
              </p>
            </div>

            <Image
                src={img01}
                alt={`Match between system and the real world`}
                className="w-full h-auto max-w-full rounded__16 my-12"
            />


            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <p>
                <strong>Illustrations to Bridge Gaps</strong> <br />
                In underutilised areas, I incorporated targeted illustrations, creating a cohesive aesthetic and visual flow across the interface. This not only enhanced usability but also conveyed the brand's identity in a consistent and engaging way.
              </p>
            </div>

            <Image
              src={img02}
              alt={`Bridging the Gap with Illustrations`}
              className="w-full h-auto max-w-full rounded__16 my-12"
            />

            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <h2 className="h3 h3__400 pb-6">Consistency and standards</h2>
              <p>
                <strong>Issue</strong>: The user profile section had a solid foundation but lacked consistency in layout and clarity in information hierarchy, which introduced subtle friction points and impacted user comprehension.
              </p>
              <h3 className="h5 h5__400 py-6">Solution:</h3>
              <div className="list"><ul><li><p><strong>1. </strong><strong>Information Hierarchy</strong>: Introduce section dividers and utilize icons to categorize key elements logically.</p></li><li><p><strong>2. </strong><strong>Spacing and Alignment</strong>: Ensure consistent padding and font sizes across all components.</p></li><li><p><strong>3. </strong><strong>User Journey Optimisation</strong>: Use visual hierarchy to guide users through the interface intuitively, ensuring a smooth navigation flow.</p></li></ul></div>
            </div>

            <Image
              src={img03}
              alt={`Consistency and standards`}
              className="w-full h-auto max-w-full rounded__16 my-12"
            />
            

            <div className="max-w-3xl mx-auto">
              <h3 className="h5 h5__400 py-6">Key Improvements:</h3>
              <div className="list"><ul><li><p><strong>1. </strong>Strategic use of information hierarchy.</p></li><li><p><strong>2. </strong>Effective iconography for segmentation.</p></li><li><p><strong>3. </strong>Optimized user journey and seamless interactions.</p></li></ul></div>
            </div>

            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <h2 className="h3 h3__400 pb-6 pt-8">Aesthetic and Minimalist Design</h2>
              <p>
                During the review of the Workout section, we identified that the extensive use of white space created a visually cold experience. To improve the user experience, the design should focus on creating visual balance with warmer tones or inviting elements that promote engagement.
              </p>
              <h3 className="h5 h5__400 py-6">Key Improvements:</h3>
              <div className="list"><ul><li><p><strong>1. </strong><strong>Introduce Warm Visual Elements</strong>: Soften the interface with subtle colors.</p></li><li><p><strong>2. </strong><strong>Clarify Section Divisions</strong>: Use imagery strategically to segment content and improve readability.</p></li><li><p><strong>3. </strong><strong>Enhance Design Consistency</strong>: Maintain uniformity across all elements to create a more cohesive and friendly user interface.</p></li></ul></div>
            </div>

            <Image
              src={img04}
              alt={`Aesthetic and minimalist design`}
              className="w-full h-auto max-w-full rounded__16 my-12"
            />
            
            <div className="max-w-3xl mx-auto">
              {/* text here */}
              
              <p>
                <strong>Suggestions - Improving Consistency</strong>: In the proposed design iteration, I strategically emphasized section division by incorporating images to exemplify each exercise for the user. Through meticulous attention to consistency, I aimed to bring prominence to each section, fostering a more visually cohesive and user-friendly interface.
              </p>
              <h3 className="h5 h5__400 py-6">Key Improvements:</h3>
              <div className="list"><ul><li><p><strong>1. </strong>Sectional Clarity Emphasis.</p></li><li><p><strong>2. </strong>Consistency Refinement.</p></li><li><p><strong>3. </strong>Prominence for User Engagement.</p></li></ul></div>
            </div>



            <div className="max-w-3xl mx-auto">
              {/* text here  */}
              <h2 className="h3 h3__400 pb-6 pt-8">Elevating UI Design Through Brand Integration</h2>
            </div>
            
            <Image
              src={img05}
              alt={`Elevating UI Design Through Brand Integration`}
              className="w-full h-auto max-w-full rounded__16 my-12"
            />
            
            <div className="max-w-3xl mx-auto">
              {/* text here  */}
              <p><strong>Suggestions</strong>: Incorporating the brand into UI design, I utilised the logo as a key element, serving as both an inspiration and a focal point for additional design elements. An example of this approach is the implementation of a counter. However, the design possibilities are extensive, offering various avenues for exploration and expression</p>
              <h3 className="h5 h5__400 py-6">Improvements:</h3>
              <div className="list"><ul><li><p><strong>1. </strong>Strategic Brand Integration.</p></li><li><p><strong>2. </strong>Inspired Design Elements.</p></li><li><p><strong>3. </strong>Functional Example.</p></li></ul></div>
            </div>

            <div className="max-w-3xl mx-auto">
              {/* text here  */}
              <h2 className="h3 h3__400 pb-6 pt-8">Registration steps</h2>
            </div>

            <Image
              src={img06}
              alt={`Registration steps`}
              className="w-full h-auto max-w-full rounded__16 my-12"
            />
            
            <div className="max-w-3xl mx-auto">
              {/* text here  */}
              <h2 className="h3 h3__400 pb-6 pt-8">The Significance of Onboarding in UX Design</h2>
            </div>

            <Image
                src={img07}
              alt={`The Significance of Onboarding in UX Design`}
              className="w-full h-auto max-w-full rounded__16 my-12"
            />
            
            
            <div className="max-w-3xl mx-auto">
              {/* text here  */}
              <p><strong>Suggestions</strong>: Onboarding serves as a valuable mechanism within UI/UX design, presenting essential information about the fundamental functionality of the application. Beyond its informative role, Onboarding also serves as an avenue to empower users by providing the opportunity to initiate their initial configurations and update user data. This strategic approach not only ensures a smooth introduction to the application but also actively involves users in shaping their individualised experience from the outset.</p>
            </div>

            <div className="max-w-3xl mx-auto">
              {/* text here  */}
              <h2 className="h3 h3__400 pb-6 pt-8">Onboarding example</h2>
            </div>
            
            <Image
              src={img08}
              alt={`Onboarding example`}
              className="w-full h-auto max-w-full rounded__16 my-12"
            />
            
            
            <div className="max-w-3xl mx-auto">
              {/* text here  */}
              <h2 className="h3 h3__400 pb-6 pt-8">Unleashing the Power of a Design System at Habitus Health</h2>
              <p><strong>Suggestions</strong>: In the dynamic world of digital design, the creation and implementation of a Design System stand as a pivotal cornerstone for a brand's visual consistency and user experience. While Habitus Health currently doesn't boast a comprehensive Design System, the recent introduction of new colours and a basic UI Kit hierarchy marks an essential step towards establishing a cohesive design language.</p>
            </div>
            
            <Image
              src={img09}
              alt={`Unleashing the Power of a Design System at Habitus Health`}
              className="w-full h-auto max-w-full rounded__16 my-12"
            />
            

            <div className="max-w-3xl mx-auto">
              {/* text here  */}
              <div className="list"><ul><li><p><strong>1. </strong>Consistency Across Touchpoints.</p></li><li><p><strong>2. </strong>Efficiency in Design Iterations.</p></li><li><p><strong>3. </strong>Scalability and Adaptability.</p></li><li><p><strong>4. </strong>Enhancing User Experience.</p></li></ul></div>
            </div>


            <div className="max-w-3xl mx-auto">
              {/* text here  */}
              <h3 className="h5 h5__400 py-6">Looking Forward</h3>
              <p>While the current introduction of new colours and a basic UI Kit sets the groundwork, considering the development of a comprehensive Design System will be instrumental in unleashing the full potential of design at Habitus Health. This strategic investment will not only elevate the brand's visual identity but also fortify its position as a leader in delivering a seamless and delightful user experience.</p>
            </div>

            <div className="max-w-3xl mx-auto">
              {/* text here  */}
              <h2 className="h3 h3__400 pb-6 pt-8">3D Simulation and Image Processing Workflow at Habitus Health</h2>
              <p><strong>1. Creating and Exporting the Simulation in Blender</strong>: To ensure ergonomic accuracy, we developed a 3D avatar in Blender, articulating correct postures for the workplace. Using <strong>Python automation</strong>, multiple cameras were positioned in circular layers to capture various angles effortlessly.ssential step towards establishing a cohesive design language.</p>
            </div>

            <Image
              src={img10}
              alt={`Unleashing the Power of a Design System at Habitus Health`}
              className="w-full h-auto max-w-full rounded__6 my-12"
            />
            

            <div className="max-w-3xl mx-auto">
              {/* text here  */}
              <p><strong>2. Batch Exporting the Rendered Images</strong>: The rendered images are batch-exported using custom scripts, ensuring high quality and transparency. This automation streamlines the capture process without manual effort.</p>
            </div>

            <Image
              src={img11}
              alt={`3d Back Isometric`}
              className="w-full h-auto max-w-full rounded__16 my-12"
            />
            
            <Image
              src={img12}
              alt={`3d Front Isometric`}
              className="w-full h-auto max-w-full rounded__16 my-12"
            />
            

            <div className="max-w-3xl mx-auto">
              {/* text here  */}
              <p><strong>3. Image Processing with PHP</strong>: Once exported, a PHP web tool resizes, rotates, and optimizes the images to maintain quality and compress the files. This ensures smooth integration across the Habitus Health platform.</p>
            </div>

            <Image
              src={img13}
              alt={`Processing with PHP`}
              className="w-full h-auto max-w-full rounded__16 my-12"
            />
            

            <div className="max-w-3xl mx-auto">
              {/* text here  */}
              <h3 className="h5 h5__400 py-6">The Importance of This Feature for Users</h3>
              <p>This 3D simulation feature offers an immersive and user-friendly way to educate users on <strong>ergonomically correct postures</strong>. It promotes well-being by guiding posture correction visually, supporting compliance with <strong>occupational health standards</strong>. This enhances the user experience while fostering healthier workplace habits.</p>
            </div>

            <div className="max-w-3xl mx-auto">
              {/* text here  */}
              <h2 className="h3 h3__400 pb-6 pt-8">Habitus Health Logo Evolution From 2D to 3D Design</h2>
              <p>This section showcases the creative process behind the <strong>Habitus Health</strong> logo, transitioning from a flat <strong>2D concept</strong> to a <strong>3D render</strong> using Spline Design. Each step reflects the brand’s commitment to innovation and well-being through modern and organic aesthetics.</p>
              <h3 className="h5 h5__400 py-6">1. 2D Logo Creation</h3>
              <p>The initial design explores soft shapes and colors aligned with the brand's identity.</p>
            </div>

            <Image
              src={img14}
              alt={`2D Logo Creation`}
              className="w-full h-auto max-w-full rounded__16 my-12"
             />
  

            <div className="max-w-3xl mx-auto">
              {/* text here  */}
              <h3 className="h5 h5__400 py-6">2. 3D Modeling and Rendering</h3>
              <p>Using <strong>Spline Design</strong>, the logo gains depth and volume, reinforcing the brand’s digital presence and offering flexibility for interactive applications.</p>
            </div>

            <video
              src={video01}
              className="w-full h-auto max-w-full rounded__16 my-12"
              autoPlay
              muted
              loop
              aria-label="3D Modeling and Rendering" // Use aria-label para acessibilidade
            ></video>

            

            <div className="max-w-3xl mx-auto">
              {/* text here  */}
              <h3 className="h5 h5__400 py-6">Why This Design Matters for User Experience</h3>
              <p>A well-crafted logo fosters <strong>emotional connections</strong> with users and builds trust, aligning with Habitus Health's mission to promote well-being. The 3D version also opens new opportunities for animations and interactive experiences, enhancing user engagement.</p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {/* text here  */}
              <h2 className="h3 h3__400 pb-6 pt-8">Conclusion</h2>
              <div className="list"><ul><li><p><strong>1. Onboarding Screens</strong>: Five screens focused on assessments, insights, and compliance.</p></li><li><p><strong>2. Design System</strong>: Emphasized the importance of a unified visual language.</p></li><li><p><strong>3. User Flow Optimisation</strong>: Improved navigation and consistency for better user satisfaction.</p></li><li><p><strong>4. 3D Simulation</strong>: Enhanced user engagement through ergonomic posture modeling.</p></li><li><p><strong>5. Brand Identity</strong>: Strengthened through logo evolution and consistent visual design.</p></li></ul></div>
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


