"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import TemplateMain from "@/components/TemplateMain";
import ContactForm from "@/components/ContactForm";
import CopyRight from "@/components/CopyRight";
import HeaderSubpage from "@/components/HeaderSubpage";

import logo from "../../../assets/img/eir/eir-logo@2x.png";
import img01 from "../../../assets/img/eir/01@2x.png";
import img02 from "../../../assets/img/eir/02@2x.png";
import img03 from "../../../assets/img/eir/register-flow@2x.png";
import img04 from "../../../assets/img/eir/notification-centre.png";
import img05 from "../../../assets/img/eir/notification-centre-mobile.png";
import img06 from "../../../assets/img/eir/user-flow-map.png";
import img08 from "../../../assets/img/eir/bottom-navigation.png";
import img09 from "../../../assets/img/eir/vote-options.png";
import img10 from "../../../assets/img/eir/streamlined-porting-flow.png";
import img11 from "../../../assets/img/eir/material-ui-eir.png";
// @ts-ignore
import video01 from "../../../assets/video/my-eir-workshop.mp4";

// JSON-LD Schema for EIR Case Study
const eirCaseStudySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.creative-ton.com/work/eir#breadcrumbs",
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
          "name": "EIR Case Study",
          "item": "https://www.creative-ton.com/work/eir"
        }
      ]
    },
    {
      "@type": "CreativeWork",
      "@id": "https://www.creative-ton.com/work/eir#casestudy",
      "name": "EIR Telecommunications UX/UI Design Case Study",
      "headline": "Redesigning Digital Experience for Ireland's Leading Telecom Provider",
      "description": "Comprehensive case study documenting the UX/UI design process for EIR telecommunications, focusing on mobile app optimization, user research, and interface design improvements.",
      "creator": {
        "@id": "https://www.creative-ton.com/#person"
      },
      "author": {
        "@id": "https://www.creative-ton.com/#person"
      },
      "publisher": {
        "@id": "https://www.creative-ton.com/#person"
      },
      "dateCreated": "2024",
      "inLanguage": "en-US",
      "url": "https://www.creative-ton.com/work/eir",
      "image": "https://www.creative-ton.com/assets/img/eir/cover-casestudy-eir.png",
      "about": {
        "@type": "Thing",
        "name": "Telecommunications User Experience Design",
        "description": "Mobile application and digital platform design for telecommunications services"
      },
      "keywords": [
        "UX Design",
        "UI Design", 
        "Telecommunications",
        "Mobile App Design",
        "User Research",
        "Interface Design",
        "Digital Strategy",
        "User Experience"
      ],
      "workExample": {
        "@type": "SoftwareApplication",
        "name": "EIR Mobile Application",
        "description": "Redesigned mobile application for EIR telecommunications services",
        "applicationCategory": "MobileApplication",
        "operatingSystem": ["iOS", "Android"]
      },
      "client": {
        "@type": "Organization",
        "name": "EIR",
        "description": "Ireland's leading telecommunications provider",
        "url": "https://www.eir.ie",
        "industry": "Telecommunications"
      },
      "genre": "Case Study",
      "learningResourceType": "Case Study",
      "teaches": [
        "UX Design Methodology",
        "Telecommunications UI Design",
        "Mobile App Optimization",
        "User Research Techniques"
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
          __html: JSON.stringify(eirCaseStudySchema)
        }}
      />
      <div className="overflow-hidden">
        <HeaderSubpage 
          titlePage="Eir Project Evolution with a Focus on User Experience"
          descriptionProject="As Lead Product Designer at Eir, I spearheaded the reimagining of the user onboarding experience, ensuring a seamless journey that aligns with Eir's mission of intuitive and efficient digital engagement. Using a structured Design Thinking approach empathise, define, ideate, prototype, and test I led a cohesive design process that delivered a user-focused solution across all interaction points."
          toggleDarkMode={toggleDarkMode} 
          isLightMode={!isDarkMode} 
          toggleForm={toggleForm}
        />

        <TemplateMain>
          <section className="flex flex-col gap-4 w-full pb-8 pt-12 single-project">
            <article className="w-full sm:w-full md:w-full lg:max-w-5xl xl:max-w-5xl px-4 mx-auto">

              <div className="max-w-3xl mx-auto">
                <h2 className="h3 h3__400 pb-6">Design Process</h2>
                <p>
                  With the five-phase Design Thinking framework from Stanford's Hasso Plattner Institute as a foundation, I refined each step of the user journey:
                </p>
                <div className="list pb-8">
                  <ul>
                    <li><p><strong>Empathise</strong>: Deeply understood user needs and pain points.</p></li>
                    <li><p><strong>Define</strong>: Clearly articulated challenges to address.</p></li>
                    <li><p><strong>Ideate</strong>: Conceptualized solutions to optimize user flow.</p></li>
                    <li><p><strong>Prototype</strong>: Built models to visualize ideas.</p></li>
                    <li><p><strong>Test</strong>: Iteratively tested and refined interactions.</p></li>
                  </ul>
                </div>
              </div>

              <div className="max-w-3xl mx-auto">
                <h2 className="h3 h3__400 pb-6">Revolutionizing Eir's Onboarding Experience</h2>
                <p>
                  Onboarding is not just an introduction; it's a transformative user journey that establishes trust, empowerment, and engagement. For Eir, this was redefined as a high value entry point where users are warmly welcomed, informed, and supported. Each interaction—whether for financial services, account settings, or billing is designed to be intuitive and impactful, setting the stage for an empowering, user-centric experience.
                </p>
              </div>

              <Image
                  src={img01}
                  alt="EIR telecommunications onboarding user interface design showing mobile app screens with improved user experience flow and intuitive navigation"
                  className="w-full h-auto max-w-full rounded__16 my-12"
              />

              <div className="max-w-3xl mx-auto">
                <p>
                  <strong>Illustrations to Bridge Gaps</strong> <br />
                  In underutilised areas, I incorporated targeted illustrations, creating a cohesive aesthetic and visual flow across the interface. This not only enhanced usability but also conveyed the brand's identity in a consistent and engaging way.
                </p>
              </div>

              <Image
                src={img02}
                alt="EIR mobile app interface design featuring custom illustrations that enhance brand identity and create visual cohesion across the user experience"
                className="w-full h-auto max-w-full rounded__6 my-12"
              />

              <div className="max-w-3xl mx-auto">
                <h2 className="h3 h3__400 pb-6">Addressing Legacy System Challenges</h2>
                <p>
                  Navigating legacy systems required meticulous planning to ensure smooth transitions, secure data handling, and uninterrupted user access. Our solution was a robust yet flexible registration flow offering users the choice of email or mobile registration, providing enhanced accessibility and user freedom.
                </p>
              </div>

              <Image
                src={img03}
                alt={`Addressing Legacy System Challenges`}
                className="w-full h-auto max-w-full rounded__16 my-12"
              />

              <div className="max-w-3xl mx-auto">
                <h2 className="h3 h3__400 pb-6 pt-8">Optimized User Flow</h2>
                <p>
                  Developing the user flow map allowed me to identify potential friction points, such as dead ends and redundant loops, ensuring a seamless journey. Post-launch, continuous monitoring and testing allowed for ongoing optimization to keep the user experience relevant and engaging.
                </p>
              </div>

              <Image
                src={img06}
                alt={`Optimized User Flow`}
                className="w-full h-auto max-w-full rounded__16 my-12"
              />

              <div className="max-w-3xl mx-auto">
                <h2 className="h3 h3__400 pb-6 pt-8">Notification Center: Empowering User Control</h2>
                <p>
                  The Notification Center within Eir's platform was designed to enhance user control with streamlined options. By introducing selective notification views ("All," "Unread," "Unseen") and simplifying actions like "Mark all as read," the Notification Center became a central point for easy navigation and timely engagement.
                </p>
              </div>
              
              <Image
                src={img04}
                alt={`Notification Center`}
                className=" h-auto mx-auto my-12"
              />

              <div className="max-w-3xl mx-auto">
                <h2 className="h3 h3__400 pb-6 pt-8">Simplified portability flow</h2>
                <p>
                  To enhance the user experience during number portability, I designed a streamlined, three-step process focusing on validation, essential information input, and scheduling. Each step is intuitive, secure, and user-friendly, allowing users to transition seamlessly while addressing the demands of data security and system integrity.
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto">
                <h2 className="h3 h3__400 pb-6 pt-8">Workshop: Card Sorting</h2>
                <p>
                  To enhance the navigation experience, a workshop was conducted utilizing the Card Sorting technique. In this workshop, a set of cards representing various features of our SaaS platform was prepared. The workshop brought together cross-functional teams, including members from marketing, design, and development, to collaboratively organize these cards into logical groups or categories that made sense to them.
                </p>
              </div>
              
              <video
                src={video01}
                className="w-full h-auto max-w-full rounded__16 my-12"
                autoPlay
                muted
                loop
              ></video>

              <div className="max-w-3xl mx-auto">
                <p>
                  Participants were encouraged to arrange the cards into groups based on the logic they deemed most suitable. This process was instrumental in shaping the navigation structure of the application.
                </p>
                <p>
                  Throughout the workshop, lively discussions were encouraged among the participants. They were asked to articulate the rationale behind their card groupings, and valuable insights were recorded. Subsequently, an in-depth analysis of the collected data was conducted to identify emerging patterns and trends. This analysis will serve as a foundation for informing the design of the application's navigation.
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <h2 className="h3 h3__400 pb-6 pt-8">Bottom Navigation</h2>
                <p>
                  Based on these insights from our Card Sorting workshop, we arrived at a refined site map that includes key navigation elements: 'Bill,' 'Services,' 'Home,' 'Offers,' and 'Help.' These choices represent the collective wisdom of our cross-functional teams, including members from marketing, design, and development, who collaboratively organized these elements into logical groups that resonated with our user-centric approach
                </p>
              </div>

              <Image
                src={img08}
                alt={`Bottom Navigation`}
                className="w-full h-auto max-w-full rounded__16 my-12"
              />

              <div className="max-w-3xl mx-auto">
                <p>
                  The workshop discussions were lively, as we deliberated over each element's placement within the UI. Participants voiced their thoughts on the best positioning, with phrases like 'Services should be easy to find, that's what our customers need!' emphasizing the user-centric perspective. 'Bill on the menu is very important to our clients' further validated the decision.
                </p>
                <p>
                  The debate continued with considerations about 'Home,' the heart of the app, and 'Help,' the ever-reliable guiding hand for users. 'Offers' presented an exciting opportunity, with our team pondering the ideal spot to showcase these promotions. 'Think about what you'd click first; it's Bill for me!' captured the essence of our thoughtful deliberations.
                </p>
                <p>
                  'Services - where do you expect to see it? Share your thoughts' spurred valuable insights, while 'Bill or Home? Let's decide which comes first!' reflected our commitment to a user-focused experience. 'Help is essential; where's its home in the menu?' summed up the importance of accessible support.
                </p>
              </div>

              <Image
                src={img09}
                alt={`Bottom Navigation`}
                className="w-full h-auto max-w-full rounded__16 my-12"
              />

              <div className="max-w-3xl mx-auto">
                <p>
                  At Eir, as a leading telecom and broadband provider, data security for our customers is a paramount concern. Given the ever-evolving technological landscape, I embarked on a challenge: to condense the user journey for number portability into just three essential steps. This streamlined process ensures a seamless and secure transition for our users.
                </p>
                <p>
                  As part of this effort, we're introducing a new feature called 'Register.' This feature is designed to segregate users with distinct databases, addressing certain temporary limitations intelligently.
                </p>
                <p>
                  In the context of the 'Register' feature, we'll present a series of mockups showcasing three crucial steps to facilitate the portability process for our users:
                </p>
                <div className="list"><ul><li><p>1. <strong>Validate Number</strong>: In this initial step, users will validate their mobile numbers, ensuring that they are eligible for the portability process. This step is designed to verify the user's current phone number's status.</p></li><li><p>2. <strong>Input Account Info</strong>: The second step involves users providing essential account information. This input is crucial for a smooth transition and ensures that their new account will be seamlessly integrated with our services</p></li><li><p>3. <strong>Schedule Move</strong>: The final step empowers users to schedule the actual number move. This step allows users to pick a suitable date and time for the transition, providing them with the flexibility and convenience they deserve.</p></li></ul></div>
              </div>

              <Image
                src={img10}
                alt={`Onboarding example`}
                className="w-full h-auto max-w-full rounded__6 my-12"
              />

              <div className="max-w-3xl mx-auto">
                <p>
                  These mockups and steps underscore our commitment to delivering a secure, user-friendly experience while overcoming temporary challenges. They represent our dedication to providing top-notch services to our valued customers.
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <h2 className="h3 h3__400 pb-6 pt-8">Unlocking User-Centric Brilliance: A Design System Journey with Material UI</h2>
                <p>
                 In the ever-evolving landscape of UX design, we embarked on a transformative journey to create a Design System that would not only streamline our design processes but also elevate our user experience to new heights. Our destination? An interface that resonates with finesse, a harmonious marriage of beauty and functionality.
                </p>
                <p>
                  With a commitment to user-centric design, we recognized the paramount importance of a stellar Design System. It's the North Star guiding our design endeavors, ensuring consistency, efficiency, and, most importantly, a design that truly speaks to our users.
                </p>
                <p>
                  Our journey is fueled by Material UI, a versatile and dynamic UI framework, harmoniously bridging the worlds of Figma and React on the front-end. This dynamic synergy offers the best of both worlds: the pixel-perfect precision of Figma's design tools and the fluid responsiveness of React's front-end capabilities. This union translates into seamless transitions from design to implementation, allowing us to craft a user interface that oozes fidelity and agility.
                </p>
                <p>
                  The power of Material UI lies in its adaptability and scalability. It empowers us to infuse our designs with the life and vibrancy our users deserve. The reusable components and design patterns within Material UI ensure that our interface is not just beautiful but also highly functional and responsive.
                </p>
                <p>
                  In this case study snippet, we unravel the profound impact of our Design System journey, offering a glimpse into the mechanics that power our interface's elegance and efficiency. Our commitment to user-centric brilliance is at the heart of every pixel, every component, and every interaction.
                </p>
              </div>
              
              <Image
                src={img11}
                alt={`Onboarding example`}
                className="w-full h-auto max-w-full rounded__16 my-12"
              />
              
              <div className="max-w-3xl mx-auto">
                <p>Join us as we journey through the world of Design Systems, where creativity meets structure, and where user-centricity reigns supreme. Our voyage is a testament to our unwavering dedication to creating an exceptional user experience, one pixel at a time.</p>
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