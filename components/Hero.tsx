import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50/80 to-pink-50/80 dark:from-indigo-950 dark:via-purple-950/80 dark:to-pink-950/80 transition-colors duration-300 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-none transition-all duration-500 shadow-2xl hover:shadow-3xl ring-2 ring-purple-500/20 hover:ring-purple-500/30">
          <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/3">
                <div className="relative group">
                  <Image
                    src="https://i.ibb.co/TM0g3CDk/Whats-App-Image-2025-02-07-at-21-27-32-a1a26003.jpg"
                    alt="Karan Mohite"
                    width={400}
                    height={400}
                    className="rounded-full mx-auto border-4 border-white dark:border-gray-700 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105"
                  />
                  {/* Hover-only glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              <div className="lg:w-2/3 text-center lg:text-left">
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Karan Mohite
                </h1>
                <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6 bg-gradient-to-r from-purple-500/80 via-pink-500/80 to-blue-500/80 bg-clip-text text-transparent">
                  Computer Engineering Student
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  I'm a Computer Engineering student at PCET's Nutan Maharashtra Institute of Engineering and
                  Technology, Pune, with a passion for building innovative web solutions. As a full-stack Java
                  developer, I combine technical expertise with creative problem-solving to create impactful digital
                  experiences.
                </p>

                <div className="flex justify-center flex-wrap gap-4 items-center lg:justify-start">
                  <Button
                    asChild
                    variant="outline"
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-purple-600 dark:text-purple-400 border-2 border-purple-500/50 hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    <a href="https://github.com/karan-mohite" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-blue-600 dark:text-blue-400 border-2 border-blue-500/50 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    <a href="https://www.linkedin.com/in/karan-mohite" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-pink-600 dark:text-pink-400 border-2 border-pink-500/50 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25"
                  >
                    <a href="mailto:mohitekaran234@gmail.com" target="_blank" rel="noopener noreferrer">
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-emerald-600 dark:text-emerald-400 border-2 border-emerald-500/50 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
                  >
                    <a
                      href="https://drive.google.com/file/d/1AttWHsPH2JsdkwnVT0AN5IfGdkZsIzvk/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Resume
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-orange-600 dark:text-orange-400 border-2 border-orange-500/50 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
                  >
                    <a
                      href="https://www.hackerrank.com/profile/mohitekaran18"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code className="mr-2 h-4 w-4" />
                      HackerRank
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
