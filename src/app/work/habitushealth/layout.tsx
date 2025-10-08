import { Metadata } from "next";

// Metadados SEO específicos para Habitus Health Case Study
export const metadata: Metadata = {
  title: "Habitus Health Workplace Wellness UX/UI Design Case Study - Welinton Fernandes",
  description: "Comprehensive case study of Habitus Health platform design focusing on workplace ergonomics, posture optimization, and user experience improvements for better health outcomes.",
  keywords: [
    "Habitus Health Case Study",
    "Workplace Wellness Design", 
    "Ergonomic UX Design",
    "Health Tech UI Design",
    "Posture Optimization",
    "Employee Wellness Platform",
    "Health App Design",
    "Welinton Fernandes Portfolio"
  ],
  openGraph: {
    title: "Habitus Health Workplace Wellness UX/UI Design Case Study",
    description: "Enhancing Workplace Well-being Through Ergonomic Design Solutions and comprehensive user experience methodology.",
    url: "https://www.creative-ton.com/work/habitushealth",
    type: "article",
    images: [
      {
        url: "https://www.creative-ton.com/assets/img/habitus/logo@2x.png",
        width: 1200,
        height: 630,
        alt: "Habitus Health workplace wellness UX/UI design case study by Welinton Fernandes"
      }
    ],
    locale: "en_US",
    siteName: "Welinton Fernandes - UX/UI Designer Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Habitus Health Workplace Wellness UX/UI Design Case Study",
    description: "Enhancing Workplace Well-being Through Ergonomic Design Solutions.",
    images: ["https://www.creative-ton.com/assets/img/habitus/logo@2x.png"]
  },
  alternates: {
    canonical: "https://www.creative-ton.com/work/habitushealth"
  }
};

export default function HabitusHealthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}