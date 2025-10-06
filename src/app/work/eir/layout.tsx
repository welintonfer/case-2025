import { Metadata } from "next";

// Metadados SEO específicos para EIR Case Study
export const metadata: Metadata = {
  title: "EIR Telecommunications UX/UI Design Case Study - Wellington Alexander",
  description: "Comprehensive case study documenting the UX/UI design process for EIR telecommunications, focusing on mobile app optimization, user research, and interface design improvements.",
  keywords: [
    "EIR Case Study",
    "Telecommunications UX Design", 
    "Mobile App Design",
    "UX Research",
    "Interface Design",
    "Design Thinking",
    "User Experience Ireland",
    "Wellington Alexander Portfolio"
  ],
  openGraph: {
    title: "EIR Telecommunications UX/UI Design Case Study",
    description: "Redesigning Digital Experience for Ireland's Leading Telecom Provider through comprehensive UX/UI design methodology.",
    url: "https://www.creative-ton.com/work/eir",
    type: "article",
    images: [
      {
        url: "https://www.creative-ton.com/assets/img/eir/cover-casestudy-eir.png",
        width: 1200,
        height: 630,
        alt: "EIR telecommunications UX/UI design case study by Wellington Alexander"
      }
    ],
    locale: "en_US",
    siteName: "Wellington Alexander - UX/UI Designer Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "EIR Telecommunications UX/UI Design Case Study",
    description: "Redesigning Digital Experience for Ireland's Leading Telecom Provider.",
    images: ["https://www.creative-ton.com/assets/img/eir/cover-casestudy-eir.png"]
  },
  alternates: {
    canonical: "https://www.creative-ton.com/work/eir"
  }
};

export default function EirLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}