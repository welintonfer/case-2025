import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found - Welinton Fernandes',
  description: 'The page you are looking for could not be found. Explore Welinton Fernandes\'s UX/UI design portfolio and services.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FDFAEF] to-[#CFC9F3]">
      <div className="text-center px-6">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            Oops! The page you're looking for seems to have wandered off. 
            Let's get you back on track.
          </p>
        </div>
        
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-200 font-semibold"
          >
            Go Home
          </Link>
          <Link 
            href="/work"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200 font-semibold"
          >
            View Portfolio
          </Link>
        </div>
        
        <div className="mt-12">
          <p className="text-sm text-gray-500">
            If you believe this is an error, please{' '}
            <Link href="/#contact" className="underline hover:text-gray-700">
              contact me
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}