import { ThemeProvider } from '@/contexts/ThemeContext'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Achievements from '@/components/Achievements'
import CoursesAndCertifications from '@/components/CoursesAndCertifications'
import GetInTouch from '@/components/GetInTouch'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <Header />
        <Hero />
        <Skills />
        <Education />
        <Projects />
        <Achievements />
        <CoursesAndCertifications />
        <GetInTouch />
        <Footer />
      </main>
    </ThemeProvider>
  )
}

