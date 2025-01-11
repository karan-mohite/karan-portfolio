'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/contexts/ThemeContext'

const navItems = [
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Courses', href: '#courses' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="bg-gray-100 dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Karan Mohite
        </Link>
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="mr-2 text-gray-800 dark:text-gray-200"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-gray-800 dark:text-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          <ul className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row absolute lg:relative top-16 lg:top-0 left-0 right-0 bg-gray-100 dark:bg-gray-900 lg:bg-transparent z-20 lg:z-auto gap-2 lg:gap-8 p-4 lg:p-0 shadow-md lg:shadow-none transition-colors duration-300`}>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

