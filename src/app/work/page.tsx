import { Metadata } from "next";
import WorkPageClient from "@/components/WorkPageClient";

export const metadata: Metadata = {
  title: "UX/UI Design Portfolio & Case Studies - Welinton Fernandes",
  description: "Explore Welinton Fernandes's comprehensive UX/UI design portfolio featuring detailed case studies from leading brands including Eir, Europcar, Habitus Health, and more.",
  alternates: {
    canonical: "https://www.creative-ton.com/work",
  },
};

// JSON-LD Schema for Work Portfolio page
const workPortfolioSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.creative-ton.com/work#breadcrumbs",
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
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.creative-ton.com/work#portfolio",
      "name": "Welinton Fernandes Design Portfolio",
      "description": "Comprehensive portfolio showcasing UX/UI design projects for leading brands and companies",
      "numberOfItems": 6,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "CreativeWork",
            "@id": "https://www.creative-ton.com/work/eir",
            "name": "EIR Telecommunications UX/UI Design",
            "description": "User experience and interface design for major telecommunications company in Ireland",
            "creator": {
              "@id": "https://www.creative-ton.com/#person"
            },
            "about": "Telecommunications",
            "keywords": ["UX Design", "UI Design", "Telecommunications", "Mobile App", "User Research"],
            "client": {
              "@type": "Organization",
              "name": "EIR",
              "description": "Leading telecommunications company in Ireland"
            },
            "workExample": "https://www.creative-ton.com/work/eir"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "CreativeWork",
            "@id": "https://www.creative-ton.com/work/europcar",
            "name": "Europcar Mobile Application Design",
            "description": "Mobile application UX/UI design for European car rental leader",
            "creator": {
              "@id": "https://www.creative-ton.com/#person"
            },
            "about": "Automotive & Travel",
            "keywords": ["Mobile App", "UX Design", "UI Design", "Car Rental", "Travel Technology"],
            "client": {
              "@type": "Organization",
              "name": "Europcar",
              "description": "Leading European car rental company"
            },
            "workExample": "https://www.creative-ton.com/work/europcar"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "CreativeWork",
            "@id": "https://www.creative-ton.com/work/habitushealth",
            "name": "Habitus Health Platform Design",
            "description": "Healthcare platform UX/UI design focusing on user wellness and health management",
            "creator": {
              "@id": "https://www.creative-ton.com/#person"
            },
            "about": "Healthcare Technology",
            "keywords": ["Healthcare", "UX Design", "UI Design", "Health Platform", "Wellness"],
            "client": {
              "@type": "Organization",
              "name": "Habitus Health",
              "description": "Digital health and wellness platform"
            },
            "workExample": "https://www.creative-ton.com/work/habitushealth"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "CreativeWork",
            "@id": "https://www.creative-ton.com/work/helenturkington",
            "name": "Helen Turkington Personal Brand Website",
            "description": "Personal brand website design with focus on professional identity and user experience",
            "creator": {
              "@id": "https://www.creative-ton.com/#person"
            },
            "about": "Personal Branding",
            "keywords": ["Personal Brand", "Website Design", "UX Design", "Professional Identity"],
            "client": {
              "@type": "Person",
              "name": "Helen Turkington"
            },
            "workExample": "https://www.creative-ton.com/work/helenturkington"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "CreativeWork",
            "@id": "https://www.creative-ton.com/work/lisney",
            "name": "Lisney Real Estate Platform",
            "description": "Comprehensive real estate platform UX/UI design with advanced property search and management features",
            "creator": {
              "@id": "https://www.creative-ton.com/#person"
            },
            "about": "Real Estate Technology",
            "keywords": ["Real Estate", "Property Search", "UX Design", "UI Design", "Platform Design"],
            "client": {
              "@type": "Organization",
              "name": "Lisney",
              "description": "Premium real estate agency"
            },
            "workExample": "https://www.creative-ton.com/work/lisney"
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "CreativeWork",
            "@id": "https://www.creative-ton.com/work/caro",
            "name": "Caro Service Design Project",
            "description": "Service design project focusing on user experience optimization and service innovation",
            "creator": {
              "@id": "https://www.creative-ton.com/#person"
            },
            "about": "Service Design",
            "keywords": ["Service Design", "UX Research", "User Experience", "Service Innovation"],
            "client": {
              "@type": "Organization",
              "name": "Caro"
            },
            "workExample": "https://www.creative-ton.com/work/caro"
          }
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(workPortfolioSchema)
        }}
      />
      <WorkPageClient />
    </>
  );
}
