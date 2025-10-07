import { MetadataRoute } from 'next'

// Data de início da carreira
const startDate = new Date(2010, 2, 8); // março é mês 2 (zero-based)
const today = new Date();

// Calcula anos completos
const diffYears = today.getFullYear() - startDate.getFullYear();
const hasHadAnniversary =
  today.getMonth() > startDate.getMonth() ||
  (today.getMonth() === startDate.getMonth() && today.getDate() >= startDate.getDate());

const yearsOfExperience = hasHadAnniversary ? diffYears : diffYears - 1;

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Wellington Alexander - UX/UI Designer Portfolio',
    short_name: 'Wellington Alexander',
    description: `Professional UX/UI Designer with ${yearsOfExperience}+ years of experience creating exceptional digital experiences in Portugal.`,
    start_url: '/',
    display: 'standalone',
    background_color: '#FDFAEF',
    theme_color: '#0F0F0F',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}