import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Star, Sparkles } from "lucide-react"

const projects = [
  {
    title: "Covid-19 Vaccination Management System",
    description:
      "A vaccine management system that allows users to signup, signin, search for vaccines, book appointments, view appointments,...",
    image: "/vacciness.png?height=200&width=300",
    github: "https://github.com/karan-mohite/vaccine-management-system-using-java",
    demo: "#",
    technologies: ["Java", "Swing", "MySQL", "JDBC"],
    category: "healthcare",
  },
  {
    title: "Chat App with Sentiment Analysis",
    description:
      "A realtime chat application that allows users to signup, signin, search for users and chat with anyone with sentiment analysis that...",
    image: "/chatappss.png?height=200&width=300",
    github: "https://github.com/karan-mohite/chatapp_sentiment_analysis",
    demo: "https://chat-app-sentiment.netlify.app/",
    technologies: ["React", "Node.js", "Express.js", "Firebase", "Sentiment.js"],
    category: "ai",
  },
  {
    title: "E-learning Platform",
    description:
      "Teacher add their subject and post their subject related videos, questions.Students login and watch videos who was uploaded by teacher and solve coding problems...",
    image: "https://i.ibb.co/3yqryBL/Screenshot-77.png",
    github: "https://github.com/karan-mohite/E-Learning-website-main",
    demo: "#",
    technologies: ["Node.js", "Express.js", "MongoDB", "HTML/CSS"],
    category: "education",
  },
  {
    title: "Hotel Management System",
    description:
      "A desktop application to manage hotel operations like booking, check-in, check-out, and billing using Java and MySQL.",
    image: "hotel.png",
    github: "https://github.com/karan-mohite/Hotel-Management-Website-Using-Java",
    demo: "#",
    technologies: ["Java (Swing)", "MySQL", "GUI", "Object-Oriented Programming"],
    category: "business",
  },
]

const getCategoryColors = (category: string) => {
  const colors = {
    healthcare: {
      gradient: "from-emerald-400 via-teal-400 to-cyan-500",
      bg: "from-emerald-50/90 via-teal-50/90 to-cyan-50/90 dark:from-emerald-950/60 dark:via-teal-950/60 dark:to-cyan-950/60",
      border: "border-emerald-400 dark:border-emerald-300",
      text: "text-emerald-600 dark:text-emerald-400",
      button: "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600",
      ring: "ring-emerald-400/30",
      glow: "shadow-emerald-500/25",
    },
    ai: {
      gradient: "from-violet-400 via-purple-400 to-fuchsia-500",
      bg: "from-violet-50/90 via-purple-50/90 to-fuchsia-50/90 dark:from-violet-950/60 dark:via-purple-950/60 dark:to-fuchsia-950/60",
      border: "border-violet-400 dark:border-violet-300",
      text: "text-violet-600 dark:text-violet-400",
      button: "bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600",
      ring: "ring-violet-400/30",
      glow: "shadow-violet-500/25",
    },
    education: {
      gradient: "from-blue-400 via-indigo-400 to-purple-500",
      bg: "from-blue-50/90 via-indigo-50/90 to-purple-50/90 dark:from-blue-950/60 dark:via-indigo-950/60 dark:to-purple-950/60",
      border: "border-blue-400 dark:border-blue-300",
      text: "text-blue-600 dark:text-blue-400",
      button: "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600",
      ring: "ring-blue-400/30",
      glow: "shadow-blue-500/25",
    },
    business: {
      gradient: "from-amber-400 via-orange-400 to-red-500",
      bg: "from-amber-50/90 via-orange-50/90 to-red-50/90 dark:from-amber-950/60 dark:via-orange-950/60 dark:to-red-950/60",
      border: "border-amber-400 dark:border-amber-300",
      text: "text-amber-600 dark:text-amber-400",
      button: "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600",
      ring: "ring-amber-400/30",
      glow: "shadow-amber-500/25",
    },
  }
  return colors[category as keyof typeof colors] || colors.ai
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50/80 to-purple-100/80 dark:from-slate-900 dark:via-indigo-950/80 dark:to-purple-950/80 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-violet-400/10 to-fuchsia-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 relative z-10">
        <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-none transition-all duration-500 hover:shadow-3xl ring-2 ring-purple-400/20 hover:ring-purple-400/40">
          <div className="h-3 bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-rose-500 shadow-lg"></div>
          <CardHeader className="text-center pb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg group hover:shadow-xl transition-all duration-300 hover:scale-110">
                <Sparkles className="h-6 w-6 text-white animate-pulse" />
              </div>
              <CardTitle className="text-5xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                Featured Projects
              </CardTitle>
              <div className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 shadow-lg group hover:shadow-xl transition-all duration-300 hover:scale-110">
                <Star className="h-6 w-6 text-white animate-pulse" />
              </div>
            </div>
            <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-rose-500 mx-auto rounded-full shadow-lg"></div>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
              {projects.map((project, index) => {
                const colors = getCategoryColors(project.category)
                return (
                  <Card
                    key={index}
                    className={`group flex flex-col bg-gradient-to-br ${colors.bg} backdrop-blur-sm border-t-4 ${colors.border} transition-all duration-700 hover:shadow-2xl ${colors.glow} hover:${colors.glow} transform hover:-translate-y-4 hover:scale-105 ring-2 ring-transparent hover:ring-4 hover:${colors.ring} overflow-hidden`}
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={300}
                        height={400}
                        className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>

                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300 leading-tight">
                        {project.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex-grow space-y-6">
                      <p className="text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300 leading-relaxed text-base">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm ${colors.text} px-3 py-2 rounded-full text-sm font-semibold border border-current/30 hover:scale-105 hover:shadow-lg transition-all duration-300 shadow-sm`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4 mt-auto pt-6">
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className={`flex-1 bg-white dark:bg-gray-800 backdrop-blur-sm ${colors.text} border-2 border-current/50 hover:bg-current hover:text-white focus:bg-current focus:text-white active:bg-current active:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-semibold focus:ring-2 focus:ring-current/50 focus:outline-none`}
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> GitHub
                          </a>
                        </Button>

                        <Button
                          asChild
                          size="sm"
                          className={`flex-1 ${colors.button} text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-semibold shadow-lg`}
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
