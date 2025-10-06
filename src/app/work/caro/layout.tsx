import { Metadata } from "next";

// Metadados SEO específicos para CARO Case Study
export const metadata: Metadata = {
  title: "CARO Climate Action UX/UI Design Case Study - Wellington Alexander",
  description: "Detailed case study of CARO Climate Action Regional Offices website design focusing on accessibility, WCAG compliance, and environmental awareness through user-centered design.",
  keywords: [
    "CARO Case Study",
    "Climate Action Web Design", 
    "UI Design Portugal",
    "Accessibility Design",
    "WCAG Compliance",
    "Environmental Web Design",
    "Jakob Nielsen Principles",
    "User Experience Design",
    "Wellington Alexander Portfolio"
  ],
  openGraph: {
    title: "CARO Climate Action UX/UI Design Case Study",
    description: "Modern and accessible web design for climate action awareness using Jakob Nielsen's usability principles.",
    url: "https://www.creative-ton.com/work/caro",
    type: "article",
    images: [
      {
        url: "https://www.creative-ton.com/assets/img/caro/caro-presentation@2x.png",
        width: 1200,
        height: 630,
        alt: "CARO Climate Action website design case study by Wellington Alexander"
      }
    ],
    locale: "en_US",
    siteName: "Wellington Alexander - UX/UI Designer Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "CARO Climate Action UX/UI Design Case Study",
    description: "Modern and accessible web design for climate action awareness using Jakob Nielsen's usability principles.",
    images: ["https://www.creative-ton.com/assets/img/caro/caro-presentation@2x.png"]
  },
  alternates: {
    canonical: "https://www.creative-ton.com/work/caro"
  }
};

export default function CaroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}