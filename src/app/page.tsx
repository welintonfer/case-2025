import TeamplateHome from "@/components/TemplateHome";
import Image from "next/image";

export const metadata = {
  title: "Wellington Alexander - UX/UI Designer & Digital Experience Expert in Portugal",
  description: "Wellington Alexander, an experienced UX/UI Designer based in Portimão, Portugal with 14+ years creating exceptional digital experiences. Specializing in user-centered design, UX research, digital strategy, and innovative front-end development for leading brands.",
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
