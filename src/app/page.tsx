import TeamplateHome from "@/components/TemplateHome";
import Image from "next/image";

export const metadata = {
  title: "Welinton Fernandes - Senior Technical UI/UX Designer | 15+ Years Experience | Portugal",
  description: "Welinton Fernandes, Senior Technical UI/UX Designer based in Portimão, Portugal. Specializing in WCAG accessibility, design systems, user research, and Figma expertise. 15+ years creating user-centered digital products for global brands including Apple, Samsung, and EIR.",
  keywords: [
    "Wellington Alexander", 
    "UX/UI Designer Portugal", 
    "Digital Experience Designer Portimão",
    "User Research Expert", 
    "Front-end Development Portugal", 
    "User-Centered Design", 
    "Design Thinking Portugal",
    "Product Designer",
    "Interface Design Expert",
    "Figma Specialist",
    "Adobe Creative Professional",
    "Responsive Web Design",
    "Accessibility Expert",
    "Design Systems Architect",
    "Prototyping Specialist",
    "Usability Testing Professional",
    "Information Architecture",
    "Interaction Design",
    "Visual Design Expert",
    "Brand Design Portugal"
  ],
  openGraph: {
    title: "Wellington Alexander - Leading UX/UI Designer in Portugal",
    description: "Discover Wellington Alexander's award-winning portfolio featuring 14+ years of UX/UI design excellence. From digital strategy to innovative user experiences - transforming brands through exceptional design.",
    url: "https://www.creative-ton.com",
    type: "website",
    locale: "en_US",
    siteName: "Wellington Alexander - UX/UI Designer Portfolio",
    images: [
      {
        url: "https://www.creative-ton.com/assets/seo/seo-homepage.png",  
        width: 1200,
        height: 630,
        alt: "Wellington Alexander - UX/UI Designer Portfolio showcasing innovative digital experiences and user-centered design projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellington Alexander - Leading UX/UI Designer in Portugal",
    description: "Award-winning UX/UI Designer with 14+ years of experience creating exceptional digital experiences. Based in Portugal, specializing in user research, design systems, and innovative interface design.",
    images: ["https://www.creative-ton.com/assets/seo/seo-homepage.png"],
  },
  alternates: {
    canonical: "https://www.creative-ton.com",
  },
};


export default function Home() {
  return (
    <TeamplateHome />
  );
}
