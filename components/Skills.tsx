"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Globe, Terminal, BookOpen, Sparkles } from "lucide-react"

const skills = [
  {
    name: "Programming Languages",
    icon: Code,
    items: ["C", "C++", "Java", "Advanced Java", "Python"],
    category: "programming",
  },
  {
    name: "Web Development",
    icon: Globe,
    items: ["HTML/CSS", "React", "JavaScript", "Node.js", "Express"],
    category: "web",
  },
  {
    name: "Databases",
    icon: Database,
    items: ["MySQL", "MongoDB", "PostgreSQL"],
    category: "database",
  },
  {
    name: "Version Control",
    icon: Terminal,
    items: ["Git", "GitHub"],
    category: "tools",
  },
  {
    name: "Core Subjects",
    icon: BookOpen,
    items: ["Database Management System", "Operating System", "Computer Networking"],
    category: "academic",
  },
  {
    name: "Areas of Interest",
    icon: Sparkles,
    items: ["Web Development", "Java Development"],
    category: "interest",
  },
]

const getCategoryColors = (category: string) => {
  const colorSchemes = {
    programming: {
      gradient: "from-indigo-600 via-purple-600 to-blue-700",
      lightBg: "from-indigo-50 via-purple-50 to-blue-50",
      darkBg: "from-indigo-950/50 via-purple-950/50 to-blue-950/50",
      border: "border-indigo-500 dark:border-indigo-400",
      icon: "text-indigo-600 dark:text-indigo-400",
      ring: "ring-indigo-500/30",
      glow: "shadow-indigo-500/25",
    },
    web: {
      gradient: "from-emerald-600 via-teal-600 to-cyan-700",
      lightBg: "from-emerald-50 via-teal-50 to-cyan-50",
      darkBg: "from-emerald-950/50 via-teal-950/50 to-cyan-950/50",
      border: "border-emerald-500 dark:border-emerald-400",
      icon: "text-emerald-600 dark:text-emerald-400",
      ring: "ring-emerald-500/30",
      glow: "shadow-emerald-500/25",
    },
    database: {
      gradient: "from-orange-600 via-amber-600 to-yellow-700",
      lightBg: "from-orange-50 via-amber-50 to-yellow-50",
      darkBg: "from-orange-950/50 via-amber-950/50 to-yellow-950/50",
      border: "border-orange-500 dark:border-orange-400",
      icon: "text-orange-600 dark:text-orange-400",
      ring: "ring-orange-500/30",
      glow: "shadow-orange-500/25",
    },
    tools: {
      gradient: "from-slate-600 via-gray-600 to-zinc-700",
      lightBg: "from-slate-50 via-gray-50 to-zinc-50",
      darkBg: "from-slate-950/50 via-gray-950/50 to-zinc-950/50",
      border: "border-slate-500 dark:border-slate-400",
      icon: "text-slate-600 dark:text-slate-400",
      ring: "ring-slate-500/30",
      glow: "shadow-slate-500/25",
    },
    academic: {
      gradient: "from-violet-600 via-purple-600 to-fuchsia-700",
      lightBg: "from-violet-50 via-purple-50 to-fuchsia-50",
      darkBg: "from-violet-950/50 via-purple-950/50 to-fuchsia-950/50",
      border: "border-violet-500 dark:border-violet-400",
      icon: "text-violet-600 dark:text-violet-400",
      ring: "ring-violet-500/30",
      glow: "shadow-violet-500/25",
    },
    interest: {
      gradient: "from-rose-600 via-pink-600 to-red-700",
      lightBg: "from-rose-50 via-pink-50 to-red-50",
      darkBg: "from-rose-950/50 via-pink-950/50 to-red-950/50",
      border: "border-rose-500 dark:border-rose-400",
      icon: "text-rose-600 dark:text-rose-400",
      ring: "ring-rose-500/30",
      glow: "shadow-rose-500/25",
    },
  }
  return colorSchemes[category as keyof typeof colorSchemes] || colorSchemes.programming
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/50 dark:from-slate-900 dark:via-blue-950/50 dark:to-indigo-950/50 transition-all duration-700"
    >
      <div className="container mx-auto px-4">
        <Card className="bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-2xl border-none transition-all duration-500 hover:shadow-3xl">
          <CardHeader className="pb-8">
            <CardTitle className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Skills & Expertise
            </CardTitle>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mx-auto rounded-full"></div>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill) => {
                const colors = getCategoryColors(skill.category)
                return (
                  <Card
                    key={skill.name}
                    className={`group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-t-4 ${colors.border} transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-3 hover:scale-105 ${colors.ring} hover:ring-4 ${colors.glow} hover:shadow-xl`}
                  >
                    {/* Background Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${colors.lightBg} dark:${colors.darkBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}
                    />

                    <CardHeader className="relative z-10">
                      <CardTitle className="flex items-center text-lg font-semibold text-gray-800 dark:text-white group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                        <div
                          className={`mr-3 p-2 rounded-xl bg-gradient-to-br ${colors.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                        >
                          <skill.icon className="h-5 w-5 text-white" />
                        </div>
                        {skill.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <ul className="space-y-2">
                        {skill.items.map((item, index) => (
                          <li
                            key={item}
                            className="flex items-center text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-all duration-300"
                            style={{
                              animationDelay: `${index * 100}ms`,
                            }}
                          >
                            <div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.gradient} mr-3 shadow-sm group-hover:scale-125 transition-transform duration-300`}
                            />
                            <span className="font-medium group-hover:font-semibold transition-all duration-300">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg" />
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
