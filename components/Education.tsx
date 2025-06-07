import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, MapPin, Calendar, Mail } from "lucide-react"
import Link from "next/link"

const educationData = [
  {
    degree: "Bachelor of Science in Computer Engineering",
    school: "PCETs Nutan Maharashtra Institute of Engineering and Technology(NMIET)",
    location: "Pune, Maharashtra",
    year: "2023 - 2026",
    email: "info@nmiet.edu.in",
    level: "bachelor",
  },
  {
    degree: "Diploma in Computer Engineering",
    school: "Shivnagar Vidya Prasak Mandal (SVPM)",
    location: "Malegaon, Maharashtra",
    year: "2020 - 2023",
    email: "info@svpm.edu.in",
    level: "diploma",
  },
]

const getLevelColors = (level: string) => {
  const colors = {
    bachelor: {
      bg: "from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/50 dark:via-indigo-950/50 dark:to-purple-950/50",
      accent: "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500",
      icon: "text-blue-600 dark:text-blue-400",
      hover: "hover:text-blue-600 dark:hover:text-blue-400",
      ring: "ring-blue-500/20 hover:ring-blue-500/40",
    },
    diploma: {
      bg: "from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/50 dark:via-teal-950/50 dark:to-cyan-950/50",
      accent: "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500",
      icon: "text-emerald-600 dark:text-emerald-400",
      hover: "hover:text-emerald-600 dark:hover:text-emerald-400",
      ring: "ring-emerald-500/20 hover:ring-emerald-500/40",
    },
  }
  return colors[level as keyof typeof colors] || colors.bachelor
}

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/50 dark:from-slate-900 dark:via-gray-900 dark:to-blue-950/50 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Educational Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {educationData.map((edu, index) => {
            const colors = getLevelColors(edu.level)
            return (
              <Card
                key={index}
                className={`bg-gradient-to-br ${colors.bg} backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 hover:scale-105 ring-2 ${colors.ring} border-0`}
              >
                <div className={`h-3 ${colors.accent} shadow-lg`} />
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-xl font-semibold text-gray-800 dark:text-white">
                    <div className="mr-3 p-2 rounded-xl bg-white/80 dark:bg-gray-800/80 shadow-lg backdrop-blur-sm">
                      <GraduationCap className={`h-6 w-6 ${colors.icon} flex-shrink-0`} />
                    </div>
                    <span className="truncate font-bold">{edu.degree}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-semibold text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{edu.school}</p>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300">
                      <div className="mr-3 p-1.5 rounded-lg bg-white/60 dark:bg-gray-700/60 shadow-sm">
                        <Calendar className={`h-4 w-4 ${colors.icon} flex-shrink-0`} />
                      </div>
                      <span className="font-medium">{edu.year}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300">
                      <div className="mr-3 p-1.5 rounded-lg bg-white/60 dark:bg-gray-700/60 shadow-sm">
                        <MapPin className={`h-4 w-4 ${colors.icon} flex-shrink-0`} />
                      </div>
                      <span className="font-medium">{edu.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 transition-colors duration-300">
                      <div className="mr-3 p-1.5 rounded-lg bg-white/60 dark:bg-gray-700/60 shadow-sm">
                        <Mail className={`h-4 w-4 ${colors.icon} flex-shrink-0`} />
                      </div>
                      <Link
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${edu.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${colors.hover} transition-all duration-300 truncate font-medium hover:underline hover:scale-105 transform`}
                      >
                        {edu.email}
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
