import { Metadata } from "next";

// Metadados SEO específicos para Lisney Case Study
export const metadata: Metadata = {
  title: "Lisney Real Estate UX/UI Design Case Study - Wellington Alexander",
  description: "Comprehensive case study of Lisney real estate platform design focusing on property search optimization, user journey improvements, and enhanced customer experience.",
  keywords: [
    "Lisney Case Study",
    "Real Estate UX Design", 
    "Property Search Design",
    "Real Estate Platform UI",
    "Property Listing Design",
    "Customer Journey UX",
    "User Experience Design",
    "Wellington Alexander Portfolio"
  ],
  openGraph: {
    title: "Lisney Real Estate UX/UI Design Case Study",
    description: "Enhancing property search and customer experience through strategic UX/UI design for Ireland's leading real estate agency.",
    url: "https://www.creative-ton.com/work/lisney",
    type: "article",
    images: [
      {
        url: "https://www.creative-ton.com/assets/img/lisney/lisney-cover.png",
        width: 1200,
        height: 630,
        alt: "Lisney real estate UX/UI design case study by Wellington Alexander"
      }
    ],
    locale: "en_US",
    siteName: "Wellington Alexander - UX/UI Designer Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Lisney Real Estate UX/UI Design Case Study",
    description: "Enhancing property search and customer experience through strategic UX/UI design.",
    images: ["https://www.creative-ton.com/assets/img/lisney/lisney-cover.png"]
  },
  alternates: {
    canonical: "https://www.creative-ton.com/work/lisney"
  }
};

export default function LisneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}