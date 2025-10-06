import "./globals.css";
import type { Metadata } from "next";
import ClientAnimatedCursor from "@/components/ClientAnimatedCursor";
import ClientSideAnalytics from "@/components/ClientSideAnalytics";

// Metadados globais otimizados para SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://www.creative-ton.com'),
  title: {
    default: "Wellington Alexander - UX/UI Designer & Digital Experience Expert",
    template: "%s | Wellington Alexander - UX/UI Designer"
  },
  description: "Wellington Alexander, a UX/UI Designer with over 14 years of experience in Portugal. Specializing in user-centered design, UX research, digital strategy, and front-end development. Creating impactful digital experiences for leading brands.",
  keywords: [
    "Wellington Alexander", 
    "UX/UI Designer Portugal", 
    "Digital Experience Designer",
    "User Research Expert", 
    "Front-end Development", 
    "User-Centered Design", 
    "Design Thinking",
    "Product Design",
    "Interface Design",
    "Figma Expert",
    "Adobe Creative Suite",
    "Responsive Design",
    "Accessibility Design",
    "Design Systems",
    "Prototyping",
    "Usability Testing",
    "Information Architecture",
    "Interaction Design",
    "Visual Design",
    "Brand Design"
  ],
  authors: [{ name: "Wellington Alexander" }],
  creator: "Wellington Alexander",
  publisher: "Wellington Alexander",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.creative-ton.com',
    siteName: 'Wellington Alexander - UX/UI Designer Portfolio',
    title: 'Wellington Alexander - UX/UI Designer & Digital Experience Expert',
    description: 'Explore Wellington Alexander\'s portfolio showcasing 14+ years of UX/UI design expertise. Discover impactful digital experiences, user research projects, and innovative design solutions.',
    images: [
      {
        url: '/assets/seo/seo-homepage.png',
        width: 1200,
        height: 630,
        alt: 'Wellington Alexander - UX/UI Designer Portfolio Preview',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wellington Alexander - UX/UI Designer & Digital Experience Expert',
    description: 'Wellington Alexander, a UX/UI Designer with over 14 years of experience in user-centered design, UX research, and digital innovation.',
    images: ['/assets/seo/seo-homepage.png'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: 'https://www.creative-ton.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.creative-ton.com" />
        <meta name="color-scheme" content="dark light" />
        
        {/* JSON-LD Structured Data - Enhanced Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://www.creative-ton.com/#website",
                "name": "Wellington Alexander - UX/UI Designer Portfolio",
                "description": "Professional UX/UI Designer portfolio showcasing 14+ years of digital experience expertise in Portugal",
                "url": "https://www.creative-ton.com",
                "inLanguage": "en-US",
                "publisher": {
                  "@id": "https://www.creative-ton.com/#person"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://www.creative-ton.com/search?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": ["Person", "Organization"],
                "@id": "https://www.creative-ton.com/#person",
                "name": "Wellington Alexander",
                "alternateName": "Wellington Alexander Design",
                "jobTitle": "Senior UX/UI Designer & Digital Experience Expert",
                "description": "Senior UX/UI Designer with over 14 years of experience specializing in user-centered design, UX research, digital strategy, and innovative front-end development. Based in Portimão, Portugal.",
                "url": "https://www.creative-ton.com",
                "image": "https://www.creative-ton.com/assets/seo/seo-homepage.png",
                "sameAs": [
                  "https://www.linkedin.com/in/wellington-alexander",
                  "https://github.com/wellington-alexander",
                  "https://www.behance.net/wellington-alexander"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Portimão",
                  "addressRegion": "Algarve",
                  "addressCountry": "PT"
                },
                "hasOccupation": {
                  "@type": "Occupation",
                  "name": "UX/UI Designer",
                  "occupationLocation": {
                    "@type": "Place",
                    "name": "Portugal"
                  },
                  "experienceRequirements": "14+ years",
                  "skills": [
                    "User Experience Design",
                    "User Interface Design",
                    "User Research",
                    "Information Architecture",
                    "Interaction Design",
                    "Visual Design",
                    "Prototyping",
                    "Usability Testing"
                  ]
                },
                "knowsAbout": [
                  {
                    "@type": "DefinedTerm",
                    "name": "UX Design",
                    "description": "User Experience Design"
                  },
                  {
                    "@type": "DefinedTerm", 
                    "name": "UI Design",
                    "description": "User Interface Design"
                  },
                  {
                    "@type": "DefinedTerm",
                    "name": "User Research",
                    "description": "User behavior analysis and testing"
                  },
                  {
                    "@type": "DefinedTerm",
                    "name": "Digital Strategy",
                    "description": "Strategic digital product planning"
                  },
                  {
                    "@type": "DefinedTerm",
                    "name": "Front-end Development", 
                    "description": "HTML, CSS, JavaScript development"
                  },
                  {
                    "@type": "DefinedTerm",
                    "name": "Design Systems",
                    "description": "Scalable design component libraries"
                  },
                  {
                    "@type": "DefinedTerm",
                    "name": "Figma",
                    "description": "Professional design and prototyping tool"
                  },
                  {
                    "@type": "DefinedTerm",
                    "name": "Adobe Creative Suite",
                    "description": "Professional design software suite"
                  }
                ],
                "worksFor": {
                  "@type": "Organization",
                  "name": "Freelance",
                  "description": "Independent UX/UI Design Consultant"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "Professional Inquiries",
                  "availableLanguage": ["English", "Portuguese"],
                  "url": "https://www.creative-ton.com/#contact"
                },
                "award": [
                  "14+ Years Professional Experience",
                  "Leading Brands Portfolio Experience"
                ],
                "makesOffer": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "UX/UI Design Services",
                      "description": "Professional user experience and interface design services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "User Research & Testing",
                      "description": "Comprehensive user research and usability testing services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Design Systems & Prototyping",
                      "description": "Creation of scalable design systems and interactive prototypes"
                    }
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "https://www.creative-ton.com/#navigation",
                "name": "Main Navigation",
                "hasPart": [
                  {
                    "@type": "SiteNavigationElement",
                    "name": "Home",
                    "url": "https://www.creative-ton.com",
                    "description": "Wellington Alexander UX/UI Designer homepage"
                  },
                  {
                    "@type": "SiteNavigationElement", 
                    "name": "What I Do",
                    "url": "https://www.creative-ton.com/what-i-do",
                    "description": "UX/UI Design process and services"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "name": "Work",
                    "url": "https://www.creative-ton.com/work", 
                    "description": "Portfolio and case studies"
                  }
                ]
              }
            ])
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ClientAnimatedCursor />
        <ClientSideAnalytics />
        {children}
      </body>
    </html>
  );
}

