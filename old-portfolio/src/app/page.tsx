import TeamplateHome from "@/components/TemplateHome";
import Image from "next/image";
import "./globals.css"; // Certifique-se de que o caminho está correto
import "../../styles/globals.css"; // Certifique-se de que o caminho está correto

export const metadata = {
  title: "Wellington Alexander - UX/UI Designer & Digital Experience Expert",
  description: "Wellington Alexander, a UX/UI Designer with over 14 years of experience. Specializing in user-centered design, UX research, and front-end development.",
  keywords: [
    "Wellington Alexander", 
    "UX/UI Designer", 
    "Digital Experience", 
    "User Research", 
    "Front-end Development", 
    "User-Centered Design", 
    "HTML/CSS", 
    "JavaScript", 
    "Figma", 
    "Adobe Photoshop"
  ],
  openGraph: {
    title: "Wellington Alexander - UX/UI Designer & Digital Experience Expert",
    description: "Explore Wellington Alexander's portfolio, showcasing impactful and long-lasting UX/UI design projects.",
    url: "https://www.creative-ton.com",
    images: [
      {
        url: "../../assets/seo/seo-homepage.png",  
        width: 1200,
        height: 630,
        alt: "Wellington Alexander - UX/UI Designer Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellington Alexander - UX/UI Designer & Digital Experience Expert",
    description: "Wellington Alexander, a UX/UI Designer with over 14 years of experience in user-centered design, UX research, and front-end development.",
    image: "../../assets/seo/seo-homepage.png", 
  },
};


export default function Home() {
  return (
    <TeamplateHome />
  );
}
