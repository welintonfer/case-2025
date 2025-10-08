import { Metadata } from "next";

// Metadados SEO específicos para Helen Turkington Case Study
export const metadata: Metadata = {
  title: "Helen Turkington Legal Services UX/UI Design Case Study - Welinton Fernandes",
  description: "Detailed case study of Helen Turkington legal services website design focusing on professional presentation, client accessibility, and user-friendly legal information architecture.",
  keywords: [
    "Helen Turkington Case Study",
    "Legal Services UX Design", 
    "Law Firm Website Design",
    "Legal Industry UI",
    "Professional Services Design",
    "Client Experience Design",
    "Legal Information Architecture",
    "Welinton Fernandes Portfolio"
  ],
  openGraph: {
    title: "Helen Turkington Legal Services UX/UI Design Case Study",
    description: "Creating professional and accessible legal services experience through strategic UX/UI design methodology.",
    url: "https://www.creative-ton.com/work/helenturkington",
    type: "article",
    images: [
      {
        url: "https://www.creative-ton.com/assets/img/helen/helen-cover.png",
        width: 1200,
        height: 630,
        alt: "Helen Turkington legal services UX/UI design case study by Welinton Fernandes"
      }
    ],
    locale: "en_US",
    siteName: "Welinton Fernandes - UX/UI Designer Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Helen Turkington Legal Services UX/UI Design Case Study",
    description: "Creating professional and accessible legal services experience through strategic UX/UI design.",
    images: ["https://www.creative-ton.com/assets/img/helen/helen-cover.png"]
  },
  alternates: {
    canonical: "https://www.creative-ton.com/work/helenturkington"
  }
};

export default function HelenTurkingtonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}