import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-black text-gray-600 dark:text-gray-400 py-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 Karan Mohite. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://github.com/karan-mohite" className="hover:text-blue-600 dark:hover:text-blue-400">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/karan-mohite" className="hover:text-blue-600 dark:hover:text-blue-400">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link 
              href="mailto:mohitekaran18@gmail.com" 
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="h-6 w-6" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span className="sr-only">Email</span>
            </Link>

          </div>
        </div>
      </div>
    </footer>
  )
}

