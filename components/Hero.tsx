import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <Card className="bg-white dark:bg-gray-800 border-none transition-colors duration-300">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/3">
                <Image
                  src="https://i.ibb.co/TM0g3CDk/Whats-App-Image-2025-02-07-at-21-27-32-a1a26003.jpg"
                  alt="Karan Mohite"
                  width={400}
                  height={400}
                  className="rounded-full mx-auto border-4 border-blue-500 dark:border-blue-400"
                />
              </div>
              <div className="lg:w-2/3 text-center lg:text-left">
                <h1 className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">Karan Mohite</h1>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">Computer Engineering Student</p>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  I'm a Computer Engineering student at PCET's Nutan Maharashtra Institute of Engineering and Technology, Pune, with a passion for building innovative web solutions. As a full-stack Java developer, I combine technical expertise with creative problem-solving to create impactful digital experiences.
                </p>
                <div className="flex justify-center flex-wrap gap-2 items-center lg:justify-start space-x-2">
                  <Button asChild variant="outline" className="bg-transparent text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white">
                    <a href="https://github.com/karan-mohite" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>

                  <Button asChild variant="outline" className="bg-transparent text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white">
                    <a href="https://www.linkedin.com/in/karan-mohite" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                    </a>
                  </Button>
                  <br></br>

                  <Button asChild variant="outline" className="bg-transparent text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white">
                  <a href="mailto:mohitekaran18@gmail.com" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" className="mr-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    Email
                  </a>
                </Button>
                <br></br>

                  <Button asChild variant="outline" className="bg-transparent text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white">
                <a 
                  href="https://drive.google.com/file/d/1kUAu4kfU3ev07UnXz8wONaS09jYXStzl/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >

    
                  <svg 
                    viewBox="0 0 24 24" 
                    className="mr-2 h-4 w-4" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
                  Resume
                </a>
              </Button>
              <br />
              <Button asChild variant="outline" className="bg-transparent text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white">
              <a href="https://www.hackerrank.com/profile/mohitekaran18" target="_blank" rel="noopener noreferrer">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M477.5 128.3L277.4 6.1c-22.7-13.1-50.9-13.1-73.5 0L34.5 128.3c-22.7 13.1-36.8 37.4-36.8 63.6v128.3c0 26.2 14.1 50.5 36.8 63.6l169.4 122.2c22.7 13.1 50.9 13.1 73.5 0l200.1-122.2c22.7-13.1 36.8-37.4 36.8-63.6V191.9c0-26.2-14.1-50.5-36.8-63.6zM321.2 348.2h-51.3v-75.5h-27.7v75.5h-51.3V163.8h51.3v73.5h27.7v-73.5h51.3v184.4z"/>
                </svg>
                HackerRank
              </a>
            </Button>

                <br></br>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

