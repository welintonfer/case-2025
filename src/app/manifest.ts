import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Wellington Alexander - UX/UI Designer Portfolio',
    short_name: 'Wellington Alexander',
    description: 'Professional UX/UI Designer with 14+ years of experience creating exceptional digital experiences in Portugal.',
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