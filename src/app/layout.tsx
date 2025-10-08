import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientSideScript from "@/components/ClientSideScript";
import ClientAnimatedCursor from "@/components/ClientAnimatedCursor";
import ProductionGATest from "@/components/ProductionGATest";
import { calculateExperienceYears, getExperienceDescription } from "@/lib/utils";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const experienceYears = calculateExperienceYears();
const experienceDescription = getExperienceDescription();

export const metadata: Metadata = {
  title: "Welinton Fernandes - Senior Technical UI/UX Designer Portfolio",
  description: `Senior Technical UI/UX Designer based in Portimão, Portugal, with over ${experienceYears} years of experience creating user-centred, accessible, and visually engaging digital products for global brands.`,
  keywords: "UX Designer, UI Designer, Technical Designer, User Experience, User Interface, Figma, WCAG, Design Systems, Accessibility, Portimão Portugal",
  authors: [{ name: "Welinton Fernandes" }],
  creator: "Welinton Fernandes",
  publisher: "Welinton Fernandes",
  metadataBase: new URL('https://www.creative-ton.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Welinton Fernandes - Senior Technical UI/UX Designer Portfolio",
    description: `Senior Technical UI/UX Designer based in Portimão, Portugal, with over ${experienceYears} years of experience creating user-centred, accessible, and visually engaging digital products for global brands.`,
    url: 'https://www.creative-ton.com',
    siteName: 'Welinton Fernandes - Senior UX/UI Designer Portfolio',
    images: [
      {
        url: '/assets/seo/seo-homepage.png',
        width: 1200,
        height: 630,
        alt: 'Welinton Fernandes - Senior Technical UI/UX Designer Portfolio',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Welinton Fernandes - Senior Technical UI/UX Designer Portfolio",
    description: `Senior Technical UI/UX Designer based in Portimão, Portugal, with over ${experienceYears} years of experience creating user-centred, accessible, and visually engaging digital products for global brands.`,
    images: ['/assets/seo/seo-homepage.png'],
  },
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
  verification: {
    google: 'rnUGv4gGNnror_CS8ZiTTxPeJY3hIL-hF_X9EmZ6_sE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.creative-ton.com/#website",
    "name": "Welinton Fernandes - Senior UX/UI Designer Portfolio",
    "url": "https://www.creative-ton.com/",
    "description": `Senior Technical UI/UX Designer based in Portimão, Portugal, with over ${experienceYears} years of experience creating user-centred, accessible, and visually engaging digital products for global brands.`,
    "inLanguage": "en-GB",
    "publisher": {
      "@type": "Person",
      "@id": "https://www.creative-ton.com/#person",
      "name": "Welinton Fernandes",
      "alternateName": "Welinton Fernandes Design",
      "jobTitle": "Senior Technical UI/UX Designer",
      "worksFor": {
        "@type": "Organization",
        "name": "Multivision.pt",
        "url": "https://www.multivision.pt",
        "description": "A leading technology and innovation company based in Portugal."
      },
      "image": "https://www.creative-ton.com/assets/seo/seo-homepage.png",
      "url": "https://www.creative-ton.com/",
      "sameAs": [
        "https://www.linkedin.com/in/welintonfernandes/",
        "https://github.com/welintonfer",
        "https://dribbble.com/welintonfer"
      ],
      "award": [
        `${experienceYears} Years Professional Experience`,
        "Global Brand Portfolio including Apple, Samsung, and Eir"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Portimão",
        "addressRegion": "Algarve",
        "addressCountry": {
          "@type": "Country",
          "name": "PT"
        }
      },
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Senior Technical UI/UX Designer",
        "description": "Specialised in Figma, WCAG accessibility, design systems, and UX strategy.",
        "experienceRequirements": `${experienceYears} years`,
        "skills": [
          "User Experience Design",
          "User Interface Design",
          "User Research",
          "Information Architecture",
          "Prototyping",
          "Design Systems",
          "Accessibility (WCAG)",
          "Visual Design"
        ]
      },
      "knowsAbout": [
        {
          "@type": "DefinedTerm",
          "name": "UX Design",
          "description": "User experience research, testing, and information architecture."
        },
        {
          "@type": "DefinedTerm",
          "name": "UI Design",
          "description": "Visual interface and interaction design."
        },
        {
          "@type": "DefinedTerm",
          "name": "Figma",
          "description": "Collaborative design and prototyping platform."
        },
        {
          "@type": "DefinedTerm",
          "name": "Design Systems",
          "description": "Frameworks for consistent and scalable design implementation."
        },
        {
          "@type": "DefinedTerm",
          "name": "Accessibility Standards (WCAG)",
          "description": "Web Content Accessibility Guidelines ensuring inclusive design."
        },
        {
          "@type": "DefinedTerm",
          "name": "Front-end Development",
          "description": "HTML, CSS, JavaScript integration for design fidelity."
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Professional Inquiries",
        "email": "portfolio.fernandes@gmail.com",
        "availableLanguage": ["English", "Portuguese"],
        "url": "https://www.creative-ton.com/#contact"
      },
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UX/UI Design Services",
            "description": "Professional design and user experience services for digital products."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "User Research & Usability Testing",
            "description": "Comprehensive user testing and product validation."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Design Systems & Prototyping",
            "description": "Creation of scalable design systems and interactive prototypes in Figma."
          }
        }
      ]
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.creative-ton.com/search?q={search_term_string}"
      },
      "query-input": {
        "@type": "PropertyValueSpecification",
        "valueRequired": true,
        "valueName": "search_term_string"
      }
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Google Analytics - Production Ready */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3KXKWNJVLJ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3KXKWNJVLJ', {
                send_page_view: true,
                page_title: document.title,
                page_location: window.location.href,
                custom_map: {'custom_parameter_1': 'dimension1'}
              });
              
              // Força envio de page_view após 1 segundo
              setTimeout(function() {
                gtag('event', 'page_view', {
                  page_title: document.title,
                  page_location: window.location.href,
                  site_version: window.location.hostname.includes('creative-ton.com') ? 'production' : 'development',
                  domain: window.location.hostname
                });
              }, 1000);
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ProductionGATest />
        <ClientAnimatedCursor />
        {children}
      </body>
    </html>
  );
}
