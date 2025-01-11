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
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=mohitekaran18@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

