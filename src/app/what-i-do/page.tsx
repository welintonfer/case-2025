import { Metadata } from "next";
import WhatIDoPageClient from "@/components/WhatIDoPageClient";

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
  const description = `Learn about Welinton Fernandes's systematic approach to UX/UI design. 5 comprehensive phases from understanding to testing, refined over ${yearsOfExperience}+ years of experience.`;

export const metadata: Metadata = {
  title: "UX/UI Design Process & Services - Welinton Fernandes",
  description: `Discover Welinton Fernandes's comprehensive UX/UI design process - from user research and wireframing to prototyping and testing. ${yearsOfExperience}+ years of experience in user-centered design, information architecture, and digital strategy in Portugal.`,
  keywords: [
    "UX Design Process",
    "UI Design Services",
    "User Research Methods",
    "Design Thinking Process",
    "Information Architecture",
    "Wireframing Services",
    "Prototyping Expert",
    "User Testing",
    "Design Systems",
    "UX Audit Services",
    "Digital Strategy Portugal",
    "User-Centered Design",
    "Design Workshops",
    "Sprint Methodology",
    "Persona Development",
    "User Journey Mapping",
    "Cross-Browser Testing",
    "UX Monitoring",
    "Welinton Fernandes Services",
    "Portugal UX Designer"
  ],
  openGraph: {
    title: "UX/UI Design Process & Services - Welinton Fernandes",
    description: "Explore Welinton Fernandes's proven UX/UI design methodology. From initial briefing to final monitoring - discover the 5-phase process that creates exceptional digital experiences.",
    url: "https://www.creative-ton.com/what-i-do",
    type: "website",
    images: [
      {
        url: "https://www.creative-ton.com/assets/seo/seo-homepage.png",
        width: 1200,
        height: 630,
        alt: "Welinton Fernandes UX/UI Design Process and Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional UX/UI Design Services - Welinton Fernandes",
    description: description,
    images: ["https://www.creative-ton.com/assets/seo/seo-homepage.png"],
  },
  alternates: {
    canonical: "https://www.creative-ton.com/what-i-do",
  },
};

// JSON-LD Schema for What I Do page - COMPLETE DETAILED SCHEMA
const whatIDoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.creative-ton.com/what-i-do#breadcrumbs",
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
          "name": "What I Do",
          "item": "https://www.creative-ton.com/what-i-do"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.creative-ton.com/what-i-do#service",
      "name": "UX/UI Design Process & Services",
      "description": `Comprehensive UX/UI design process from understanding to testing, refined over ${yearsOfExperience}+ years of experience`,
      "provider": {
        "@id": "https://www.creative-ton.com/#person"
      },
      "serviceType": "UX/UI Design Consulting",
      "areaServed": {
        "@type": "Country",
        "name": "Portugal"
      }
    },
    {
      "@type": "HowTo",
      "@id": "https://www.creative-ton.com/what-i-do#process",
      "name": "5-Phase UX/UI Design Methodology",
      "description": "Welinton Fernandes's comprehensive methodology for creating exceptional digital experiences",
      "totalTime": "PT8W",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "EUR",
        "value": "Variable"
      },
      "supply": [
        {
          "@type": "HowToSupply",
          "name": "Figma"
        },
        {
          "@type": "HowToSupply", 
          "name": "Adobe Creative Suite"
        },
        {
          "@type": "HowToSupply",
          "name": "Research Tools"
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Understanding",
          "text": "Briefing, UX Audit, and Information Architecture planning",
          "url": "https://www.creative-ton.com/what-i-do#understanding"
        },
        {
          "@type": "HowToStep",
          "position": 2, 
          "name": "Discover",
          "text": "Workshops, sprints, persona development, research, and user journey mapping",
          "url": "https://www.creative-ton.com/what-i-do#discover"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Wireframe", 
          "text": "Low-fidelity design, wireframing, and initial testing",
          "url": "https://www.creative-ton.com/what-i-do#wireframe"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Prototype",
          "text": "Tool lab setup, design systems, and comprehensive prototyping",
          "url": "https://www.creative-ton.com/what-i-do#prototype"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Testing",
          "text": "Cross-browser testing and ongoing monitoring",
          "url": "https://www.creative-ton.com/what-i-do#testing"
        }
      ]
    },
    // PHASE 1: UNDERSTANDING - Detailed Schema
    {
      "@type": "Service",
      "@id": "https://www.creative-ton.com/what-i-do#understanding",
      "name": "Phase 1: Understanding",
      "description": "Initial project analysis focusing on briefing, UX audit, and information architecture planning",
      "provider": {
        "@id": "https://www.creative-ton.com/#person"
      },
      "serviceType": "UX Research & Analysis",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Understanding Phase Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "@id": "https://www.creative-ton.com/what-i-do#briefing",
            "name": "Briefing",
            "description": "Strategic briefing process involving client vision understanding and market landscape analysis",
            "itemOffered": {
              "@type": "Service",
              "name": "Strategic Briefing",
              "serviceType": "UX Strategy",
              "audience": {
                "@type": "Audience",
                "audienceType": "Business Stakeholders"
              }
            }
          },
          {
            "@type": "Offer",
            "@id": "https://www.creative-ton.com/what-i-do#ux-audit",
            "name": "UX Audit",
            "description": "Comprehensive user experience audit identifying accessibility and conversion challenges using Jakob Nielsen's 10 heuristic principles",
            "itemOffered": {
              "@type": "Service",
              "name": "User Experience Audit",
              "serviceType": "UX Analysis",
              "teaches": [
                "Nielsen's Heuristic Principles",
                "Accessibility Assessment",
                "Conversion Optimization"
              ]
            }
          },
          {
            "@type": "Offer",
            "@id": "https://www.creative-ton.com/what-i-do#information-architecture-1",
            "name": "Information Architecture Part 1",
            "description": "Initial information architecture covering 40-60% of project considerations through briefing and audit insights",
            "itemOffered": {
              "@type": "Service",
              "name": "Information Architecture Planning",
              "serviceType": "Content Strategy",
              "workExample": "Structural content organization and navigation planning"
            }
          }
        ]
      }
    },
    // PHASE 2: DISCOVER - Detailed Schema
    {
      "@type": "Service",
      "@id": "https://www.creative-ton.com/what-i-do#discover",
      "name": "Phase 2: Discover",
      "description": "Deep discovery phase involving workshops, research, persona development, and user journey mapping",
      "provider": {
        "@id": "https://www.creative-ton.com/#person"
      },
      "serviceType": "UX Research & Discovery",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Discovery Phase Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "@id": "https://www.creative-ton.com/what-i-do#workshop",
            "name": "Workshop",
            "description": "Strategic workshops uncovering communication barriers and authentic user challenges within company interfaces",
            "itemOffered": {
              "@type": "Service",
              "name": "UX Strategy Workshop",
              "serviceType": "Collaborative Research",
              "audience": {
                "@type": "Audience",
                "audienceType": "Cross-functional Teams"
              }
            }
          },
          {
            "@type": "Offer",
            "@id": "https://www.creative-ton.com/what-i-do#sprint",
            "name": "Sprint",
            "description": "Accelerated problem-solving methodology for time-critical projects and marketing campaign optimization",
            "itemOffered": {
              "@type": "Service",
              "name": "Design Sprint",
              "serviceType": "Rapid Prototyping",
              "duration": "PT5D"
            }
          },
          {
            "@type": "Offer",
            "@id": "https://www.creative-ton.com/what-i-do#persona",
            "name": "Persona",
            "description": "Development of proto-personas and detailed personas based on authentic product data while avoiding assumptions",
            "itemOffered": {
              "@type": "Service",
              "name": "User Persona Development",
              "serviceType": "User Research",
              "workExample": "Data-driven user archetype creation"
            }
          },
          {
            "@type": "Offer",
            "@id": "https://www.creative-ton.com/what-i-do#research",
            "name": "Research",
            "description": "Comprehensive user research and A/B testing methodology understanding product integration in daily user routines",
            "itemOffered": {
              "@type": "Service",
              "name": "User Research & A/B Testing",
              "serviceType": "Behavioral Analysis",
              "teaches": [
                "User Behavior Analysis",
                "A/B Testing Methodology",
                "Product Integration Assessment"
              ]
            }
          },
          {
            "@type": "Offer",
            "@id": "https://www.creative-ton.com/what-i-do#user-journey",
            "name": "User Journey",
            "description": "Detailed user journey mapping uncovering user expectations and frustrations with meticulous attention to detail",
            "itemOffered": {
              "@type": "Service",
              "name": "User Journey Mapping",
              "serviceType": "Experience Design",
              "workExample": "Comprehensive user experience flow documentation"
            }
          }
        ]
      }
    },
    // PHASE 3: WIREFRAME - Detailed Schema
    {
      "@type": "Service",
      "@id": "https://www.creative-ton.com/what-i-do#wireframe",
      "name": "Phase 3: Wireframe",
      "description": "Mobile-first wireframing approach with low-fidelity design, testing, and refined information architecture",
      "provider": {
        "@id": "https://www.creative-ton.com/#person"
      },
      "serviceType": "Interface Design",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Wireframing Phase Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "@id": "https://www.creative-ton.com/what-i-do#low-fidelity",
            "name": "Low-fidelity Design",
            "description": "Collaborative low-fidelity design process bringing diverse team ideas to life on paper and digital formats",
            "itemOffered": {
              "@type": "Service",
              "name": "Low-fidelity Prototyping",
              "serviceType": "Concept Design",
              "approach": "Mobile-first Design"
            }
          },
          {
            "@type": "Offer",
            "@id": "https://www.creative-ton.com/what-i-do#wireframe-service",
            "name": "Wireframe",
            "description": "Comprehensive wireframing serving as project documentation, development guidance, and cost optimization tool",
            "itemOffered": {
              "@type": "Service",
              "name": "Wireframe Development",
              "serviceType": "Information Design",
              "workExample": "Interactive wireframe prototypes for development guidance"
            }
          },
          {
            "@type": "Offer",
            "@id": "https://www.creative-ton.com/what-i-do#testing-1",
            "name": "Testing Part 1",
            "description": "Initial testing phase using wireframes and low-fidelity prototypes for early validation",
            "itemOffered": {
              "@type": "Service",
              "name": "Early-stage Usability Testing",
              "serviceType": "Validation Testing",
              "method": "Low-fidelity Prototype Testing"
            }
          },
          {
            "@type": "Offer",
            "@id": "https://www.creative-ton.com/what-i-do#information-architecture-2",
            "name": "Information Architecture Part 2",
            "description": "Advanced information architecture serving as the foundation for user-centric design and future digital landscapes",
            "itemOffered": {
              "@type": "Service",
              "name": "Advanced Information Architecture",
              "serviceType": "Content Strategy",
              "workExample": "Comprehensive site structure and navigation systems"
            }
          }
        ]
      }
    },
    // PHASE 4: PROTOTYPE - Detailed Schema
    {
      "@type": "Service",
      "@id": "https://www.creative-ton.com/what-i-do#prototype",
      "name": "Phase 4: Prototype",
      "description": "High-fidelity prototyping using advanced tools, design systems, and comprehensive testing methodologies",
      "provider": {
        "@id": "https://www.creative-ton.com/#person"
      },
      "serviceType": "Prototype Development",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Prototyping Phase Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "@id": "https://www.creative-ton.com/what-i-do#tool-lab",
            "name": "Tool Lab",
            "description": "Professional tool utilization including Invision, UXPin, Sketch, and Figma for seamless front-end development preparation",
            "itemOffered": {
              "@type": "Service",
              "name": "Design Tool Optimization",
              "serviceType": "Technical Setup",
              "tool": ["Figma", "Sketch", "InVision", "UXPin"],
              "workExample": "Devmode-ready design file preparation"
            }
          },
          {
            "@type": "Offer",
            "@id": "https://www.creative-ton.com/what-i-do#design-system",
            "name": "Design System",
            "description": "Comprehensive design system development extending beyond Figma to CSS Global for enhanced code maintenance",
            "itemOffered": {
              "@type": "Service",
              "name": "Design System Development",
              "serviceType": "System Design",
              "workExample": "Scalable component libraries and style guides",
              "teaches": [
                "Component-based Design",
                "CSS Global Systems",
                "Brand Consistency"
              ]
            }
          },
          {
            "@type": "Offer",
            "@id": "https://www.creative-ton.com/what-i-do#testing-2",
            "name": "Testing Part 2",
            "description": "Advanced A/B testing using prepared design systems and high-fidelity prototypes for real-world validation",
            "itemOffered": {
              "@type": "Service",
              "name": "Advanced Prototype Testing",
              "serviceType": "Validation Testing",
              "method": "High-fidelity A/B Testing",
              "workExample": "Design system variation testing for optimization"
            }
          }
        ]
      }
    },
    // PHASE 5: TESTING - Detailed Schema
    {
      "@type": "Service",
      "@id": "https://www.creative-ton.com/what-i-do#testing",
      "name": "Phase 5: Testing",
      "description": "Comprehensive testing and monitoring including cross-browser compatibility and ongoing user behavior analysis",
      "provider": {
        "@id": "https://www.creative-ton.com/#person"
      },
      "serviceType": "Quality Assurance & Monitoring",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Testing Phase Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "@id": "https://www.creative-ton.com/what-i-do#cross-browser",
            "name": "Cross-Browser Testing",
            "description": `Comprehensive cross-browser compatibility testing ensuring consistent user experience across all platforms with over ${yearsOfExperience}+ years expertise`,
            "itemOffered": {
              "@type": "Service",
              "name": "Cross-Browser Compatibility Testing",
              "serviceType": "Technical Testing",
              "experience": `${yearsOfExperience}+ years since 2010`,
              "workExample": "Multi-browser optimization and consistency validation"
            }
          },
          {
            "@type": "Offer",
            "@id": "https://www.creative-ton.com/what-i-do#monitoring",
            "name": "Monitoring",
            "description": "Ongoing user behavior monitoring using tools like Hotjar for continuous optimization and cultural adaptation",
            "itemOffered": {
              "@type": "Service",
              "name": "User Behavior Monitoring",
              "serviceType": "Analytics & Optimization",
              "tool": ["Hotjar", "Analytics Tools"],
              "workExample": "Continuous user interaction analysis and optimization recommendations"
            }
          }
        ]
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(whatIDoSchema)
        }}
      />
      <WhatIDoPageClient />
    </>
  );
}
