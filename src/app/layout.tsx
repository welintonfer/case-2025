import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientSideScript from "@/components/ClientSideScript";
import ClientAnimatedCursor from "@/components/ClientAnimatedCursor";
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
  title: "Welinton Fernandes - Senior UX/UI Designer & Frontend Developer",
  description: `Welinton Fernandes is a Senior UX/UI Designer and Frontend Developer with ${experienceDescription} of experience creating digital experiences. Specializing in user-centered design, responsive web development, and modern frontend technologies.`,
  keywords: "UX Designer, UI Designer, Frontend Developer, Web Design, User Experience, User Interface, React, Next.js, TypeScript, Responsive Design, Dublin Ireland",
  authors: [{ name: "Welinton Fernandes" }],
  creator: "Welinton Fernandes",
  publisher: "Welinton Fernandes",
  metadataBase: new URL('https://welintonfer.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Welinton Fernandes - Senior UX/UI Designer & Frontend Developer",
    description: `Welinton Fernandes is a Senior UX/UI Designer and Frontend Developer with ${experienceDescription} of experience creating digital experiences. Specializing in user-centered design, responsive web development, and modern frontend technologies.`,
    url: 'https://welintonfer.com',
    siteName: 'Welinton Fernandes Portfolio',
    images: [
      {
        url: '/assets/seo/seo-homepage.png',
        width: 1200,
        height: 630,
        alt: 'Welinton Fernandes - Senior UX/UI Designer & Frontend Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Welinton Fernandes - Senior UX/UI Designer & Frontend Developer",
    description: `Welinton Fernandes is a Senior UX/UI Designer and Frontend Developer with ${experienceDescription} of experience creating digital experiences. Specializing in user-centered design, responsive web development, and modern frontend technologies.`,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Welinton Fernandes',
    jobTitle: 'Senior UX/UI Designer & Frontend Developer',
    description: `Senior UX/UI Designer and Frontend Developer with ${experienceDescription} of experience creating digital experiences. Specializing in user-centered design, responsive web development, and modern frontend technologies.`,
    url: 'https://welintonfer.com',
    sameAs: [
      'https://www.linkedin.com/in/welintonfer',
      'https://github.com/welintonfer',
      'https://dribbble.com/welintonfer',
      'https://behance.net/welintonfer'
    ],
    image: 'https://welintonfer.com/assets/seo/seo-homepage.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dublin',
      addressCountry: 'Ireland'
    },
    email: 'hello@welintonfer.com',
    telephone: '+353-1-234-5678',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance'
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Design Institute'
    },
    knowsAbout: [
      'UX Design',
      'UI Design', 
      'Frontend Development',
      'React',
      'Next.js',
      'TypeScript',
      'User Experience',
      'Web Design',
      'Responsive Design',
      'JavaScript',
      'CSS',
      'HTML'
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Senior UX/UI Designer & Frontend Developer',
      occupationLocation: {
        '@type': 'Place',
        name: 'Dublin, Ireland'
      },
      skills: [
        'UX Design',
        'UI Design',
        'Frontend Development', 
        'React',
        'Next.js',
        'TypeScript',
        'User Experience',
        'Web Design',
        'Responsive Design'
      ],
      experienceLevel: 'Senior',
      yearsOfExperience: experienceYears
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientAnimatedCursor />
        {children}
        <ClientSideScript />
      </body>
    </html>
  );
}
