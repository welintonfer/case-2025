import { Metadata } from "next";

// Metadados SEO específicos para Europcar Case Study
export const metadata: Metadata = {
  title: "Europcar Car Rental UX/UI Design Case Study - Welinton Fernandes",
  description: "Detailed case study of Europcar car rental platform redesign focusing on user journey optimization, booking flow improvements, and enhanced customer experience.",
  keywords: [
    "Europcar Case Study",
    "Car Rental UX Design", 
    "Booking Platform Design",
    "Travel Industry UX",
    "Customer Journey Design",
    "Rental Service UI",
    "User Experience Design",
    "Welinton Fernandes Portfolio"
  ],
  openGraph: {
    title: "Europcar Car Rental UX/UI Design Case Study",
    description: "Optimizing car rental experience through strategic UX/UI design improvements and user-centered methodology.",
    url: "https://www.creative-ton.com/work/europcar",
    type: "article",
    images: [
      {
        url: "https://www.creative-ton.com/assets/img/europcar/europcar-cover.png",
        width: 1200,
        height: 630,
        alt: "Europcar car rental UX/UI design case study by Welinton Fernandes"
      }
    ],
    locale: "en_US",
    siteName: "Welinton Fernandes - UX/UI Designer Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Europcar Car Rental UX/UI Design Case Study",
    description: "Optimizing car rental experience through strategic UX/UI design improvements.",
    images: ["https://www.creative-ton.com/assets/img/europcar/europcar-cover.png"]
  },
  alternates: {
    canonical: "https://www.creative-ton.com/work/europcar"
  }
};

export default function EuropcarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}