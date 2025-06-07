"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Terminal, BookOpen, Star, Zap, Award, Sparkles, Crown, Trophy } from "lucide-react"

const skills = [
  {
    name: "Programming Languages",
    icon: Code,
    items: ["C", "C++", "Java", "Advanced Java", "Python"],
    category: "programming",
    level: "Expert",
    experience: "4+ Years",
    proficiency: 95,
    projects: 12,
  },
  {
    name: "Web Development",
    icon: Globe,
    items: ["HTML/CSS", "React", "JavaScript", "Node.js", "Express"],
    category: "web",
    level: "Advanced",
    experience: "3+ Years",
    proficiency: 90,
    projects: 8,
  },
  {
    name: "Databases",
    icon: Database,
    items: ["MySQL", "MongoDB", "PostgreSQL"],
    category: "database",
    level: "Advanced",
    experience: "3+ Years",
    proficiency: 85,
    projects: 6,
  },
  {
    name: "Version Control",
    icon: Terminal,
    items: ["Git", "GitHub"],
    category: "tools",
    level: "Expert",
    experience: "4+ Years",
    proficiency: 98,
    projects: 15,
  },
  {
    name: "Core Subjects",
    icon: BookOpen,
    items: ["Database Management System", "Operating System", "Computer Networking"],
    category: "academic",
    level: "Advanced",
    experience: "Academic",
    proficiency: 88,
    projects: 4,
  },
  {
    name: "Areas of Interest",
    icon: Star,
    items: ["Web Development", "Java Development"],
    category: "interest",
    level: "Passionate",
    experience: "Ongoing",
    proficiency: 92,
    projects: 10,
  },
]

const getCategoryColors = (category: string) => {
  const colorSchemes = {
    programming: {
      primary: "from-blue-600 via-indigo-600 to-purple-700",
      secondary: "from-blue-500/30 via-indigo-500/30 to-purple-500/30",
      light: "from-blue-50/95 via-indigo-50/95 to-purple-50/95",
      dark: "from-blue-950/60 via-indigo-950/60 to-purple-950/60",
      ring: "ring-blue-400/40",
      glow: "shadow-blue-500/30",
      text: "text-blue-700 dark:text-blue-300",
      accent: "bg-gradient-to-r from-blue-500 to-indigo-600",
      particle: "bg-blue-400",
    },
    web: {
      primary: "from-emerald-600 via-teal-600 to-cyan-700",
      secondary: "from-emerald-500/30 via-teal-500/30 to-cyan-500/30",
      light: "from-emerald-50/95 via-teal-50/95 to-cyan-50/95",
      dark: "from-emerald-950/60 via-teal-950/60 to-cyan-950/60",
      ring: "ring-emerald-400/40",
      glow: "shadow-emerald-500/30",
      text: "text-emerald-700 dark:text-emerald-300",
      accent: "bg-gradient-to-r from-emerald-500 to-teal-600",
      particle: "bg-emerald-400",
    },
    database: {
      primary: "from-orange-600 via-amber-600 to-yellow-700",
      secondary: "from-orange-500/30 via-amber-500/30 to-yellow-500/30",
      light: "from-orange-50/95 via-amber-50/95 to-yellow-50/95",
      dark: "from-orange-950/60 via-amber-950/60 to-yellow-950/60",
      ring: "ring-orange-400/40",
      glow: "shadow-orange-500/30",
      text: "text-orange-700 dark:text-orange-300",
      accent: "bg-gradient-to-r from-orange-500 to-amber-600",
      particle: "bg-orange-400",
    },
    tools: {
      primary: "from-slate-600 via-gray-600 to-zinc-700",
      secondary: "from-slate-500/30 via-gray-500/30 to-zinc-500/30",
      light: "from-slate-50/95 via-gray-50/95 to-zinc-50/95",
      dark: "from-slate-950/60 via-gray-950/60 to-zinc-950/60",
      ring: "ring-slate-400/40",
      glow: "shadow-slate-500/30",
      text: "text-slate-700 dark:text-slate-300",
      accent: "bg-gradient-to-r from-slate-500 to-gray-600",
      particle: "bg-slate-400",
    },
    academic: {
      primary: "from-violet-600 via-purple-600 to-fuchsia-700",
      secondary: "from-violet-500/30 via-purple-500/30 to-fuchsia-500/30",
      light: "from-violet-50/95 via-purple-50/95 to-fuchsia-50/95",
      dark: "from-violet-950/60 via-purple-950/60 to-fuchsia-950/60",
      ring: "ring-violet-400/40",
      glow: "shadow-violet-500/30",
      text: "text-violet-700 dark:text-violet-300",
      accent: "bg-gradient-to-r from-violet-500 to-purple-600",
      particle: "bg-violet-400",
    },
    interest: {
      primary: "from-rose-600 via-pink-600 to-red-700",
      secondary: "from-rose-500/30 via-pink-500/30 to-red-500/30",
      light: "from-rose-50/95 via-pink-50/95 to-red-50/95",
      dark: "from-rose-950/60 via-pink-950/60 to-red-950/60",
      ring: "ring-rose-400/40",
      glow: "shadow-rose-500/30",
      text: "text-rose-700 dark:text-rose-300",
      accent: "bg-gradient-to-r from-rose-500 to-pink-600",
      particle: "bg-rose-400",
    },
  }
  return colorSchemes[category as keyof typeof colorSchemes] || colorSchemes.programming
}

const getLevelIcon = (level: string) => {
  const icons = {
    Expert: Crown,
    Advanced: Trophy,
    Intermediate: Award,
    Passionate: Sparkles,
  }
  return icons[level as keyof typeof icons] || Award
}

const getLevelColor = (level: string) => {
  const levelColors = {
    Beginner: "bg-green-500/20 text-green-700 dark:text-green-300 border-green-300/50",
    Intermediate: "bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-300/50",
    Advanced: "bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-300/50",
    Expert: "bg-red-500/20 text-red-700 dark:text-red-300 border-red-300/50",
    Passionate: "bg-pink-500/20 text-pink-700 dark:text-pink-300 border-pink-300/50",
  }
  return levelColors[level as keyof typeof levelColors] || levelColors.Intermediate
}

export default function Skills() {
  const totalSkills = skills.reduce((acc, skill) => acc + skill.items.length, 0)
  const expertSkills = skills.filter((skill) => skill.level === "Expert").length
  const avgProficiency = Math.round(skills.reduce((acc, skill) => acc + skill.proficiency, 0) / skills.length)

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Ultra-Premium Animated Background */}
      <div className="absolute inset-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/80 to-indigo-100/80 dark:from-slate-900 dark:via-blue-950/80 dark:to-indigo-950/80"></div>

        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-cyan-400/20 via-indigo-400/20 to-violet-400/20 animate-pulse delay-1000"></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-2/3 right-1/6 w-80 h-80 bg-gradient-to-r from-emerald-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-violet-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse delay-1400"></div>

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-blue-300 dark:border-blue-700 rotate-45 animate-spin-slow"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-purple-300 dark:border-purple-700 rotate-12 animate-bounce-slow"></div>
          <div className="absolute bottom-32 left-40 w-28 h-28 border border-emerald-300 dark:border-emerald-700 -rotate-12 animate-pulse"></div>
        </div>

        {/* Particle Effects */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      <section className="relative py-32 transition-all duration-700">
        <div className="container mx-auto px-6">
          {/* Ultra-Luxury Header */}
          <div className="text-center mb-24">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-4 bg-white/95 dark:bg-black/95 backdrop-blur-2xl px-10 py-5 rounded-full shadow-2xl border border-white/40 dark:border-gray-800/40 mb-10 hover:shadow-3xl transition-all duration-700 group">
              <div className="relative">
                <Zap className="h-7 w-7 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-blue-600 dark:bg-blue-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
              </div>
              <span className="text-xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Technical Mastery
              </span>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-200"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-pulse delay-400"></div>
              </div>
            </div>

            {/* Massive Typography */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-10 leading-none">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 dark:from-gray-100 dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent block">
                Skills &
              </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent block relative">
                Expertise
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 blur-3xl -z-10"></div>
              </span>
            </h1>

            {/* Premium Description */}
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 max-w-5xl mx-auto mb-16 leading-relaxed font-light">
              Mastering the art of{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                software development
              </span>{" "}
              through comprehensive expertise in{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                modern technologies
              </span>{" "}
              and{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                innovative solutions
              </span>
            </p>

            {/* Ultra-Premium Stats */}
            <div className="flex justify-center gap-16 mb-20">
              <div className="text-center group cursor-pointer">
                <div className="relative mb-4">
                  <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 group-hover:scale-110 transition-transform duration-500">
                    {totalSkills}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                </div>
                <div className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest">
                  Total Skills
                </div>
              </div>

              <div className="w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

              <div className="text-center group cursor-pointer">
                <div className="relative mb-4">
                  <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 group-hover:scale-110 transition-transform duration-500">
                    {avgProficiency}%
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                </div>
                <div className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest">
                  Avg Proficiency
                </div>
              </div>

              <div className="w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

              <div className="text-center group cursor-pointer">
                <div className="relative mb-4">
                  <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 group-hover:scale-110 transition-transform duration-500">
                    {expertSkills}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                </div>
                <div className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest">
                  Expert Level
                </div>
              </div>
            </div>
          </div>

          {/* Ultra-Luxury Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-8xl mx-auto">
            {skills.map((skill, index) => {
              const colors = getCategoryColors(skill.category)
              const levelColor = getLevelColor(skill.level)
              const LevelIcon = getLevelIcon(skill.level)

              return (
                <Card
                  key={skill.name}
                  className={`group relative overflow-hidden bg-white/98 dark:bg-black/98 backdrop-blur-2xl border-0 shadow-2xl hover:shadow-4xl transition-all duration-700 transform hover:-translate-y-8 hover:scale-[1.03] ${colors.ring} hover:ring-12`}
                  style={{
                    background: `linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 100%)`,
                  }}
                >
                  {/* Dynamic Background Effects */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${colors.light} dark:${colors.dark} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${colors.secondary} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Floating Particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-1 h-1 ${colors.particle} rounded-full animate-float opacity-60`}
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${2 + Math.random() * 3}s`,
                        }}
                      />
                    ))}
                  </div>

                  <CardHeader className="relative z-10 pb-6">
                    <div className="flex items-start justify-between mb-6">
                      {/* Premium Icon */}
                      <div className="relative">
                        <div
                          className={`p-5 rounded-3xl bg-gradient-to-br ${colors.primary} shadow-2xl ${colors.glow} group-hover:shadow-4xl transition-all duration-700 group-hover:scale-125 group-hover:rotate-6`}
                        >
                          <skill.icon className="h-10 w-10 text-white" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
                      </div>

                      {/* Level Badge */}
                      <div className="text-right space-y-2">
                        <Badge
                          className={`${levelColor} text-sm font-bold px-4 py-2 border backdrop-blur-sm flex items-center gap-2`}
                        >
                          <LevelIcon className="h-4 w-4" />
                          {skill.level}
                        </Badge>
                        <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold bg-gray-100/80 dark:bg-gray-800/80 px-3 py-1 rounded-full backdrop-blur-sm">
                          {skill.experience}
                        </div>
                      </div>
                    </div>

                    <CardTitle className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300 leading-tight mb-4">
                      {skill.name}
                    </CardTitle>

                    {/* Proficiency Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Proficiency</span>
                        <span className="text-sm font-bold text-gray-800 dark:text-gray-200">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${colors.primary} rounded-full transition-all duration-1000 ease-out shadow-lg ${colors.glow}`}
                          style={{
                            width: `${skill.proficiency}%`,
                            transform: `translateX(-${100 - skill.proficiency}%)`,
                            animation: "slideIn 1.5s ease-out forwards",
                          }}
                        />
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10 pt-0">
                    {/* Skills List */}
                    <div className="space-y-4 mb-8">
                      {skill.items.map((item, itemIndex) => (
                        <div
                          key={item}
                          className="group/item flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-gray-50/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-700/90 backdrop-blur-sm border border-gray-200/60 dark:border-gray-600/60 hover:from-gray-100/90 hover:to-gray-200/90 dark:hover:from-gray-700/90 dark:hover:to-gray-600/90 transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
                          style={{
                            animationDelay: `${itemIndex * 150}ms`,
                          }}
                        >
                          <div
                            className={`w-3 h-3 rounded-full bg-gradient-to-r ${colors.primary} shadow-lg group-hover/item:scale-150 group-hover/item:shadow-xl transition-all duration-300 ${colors.glow}`}
                          />
                          <span className="text-gray-700 dark:text-gray-300 group-hover/item:text-gray-900 dark:group-hover/item:text-gray-100 transition-colors duration-300 font-semibold flex-1">
                            {item}
                          </span>
                          <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                            <Award className="h-5 w-5 text-gray-400 dark:text-gray-500 group-hover/item:text-gray-600 dark:group-hover/item:text-gray-300 transition-colors duration-300" />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Stats */}
                    <div className="flex justify-between items-center">
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${colors.primary} text-white shadow-xl ${colors.glow} group-hover:shadow-2xl transition-all duration-500 text-sm font-bold`}
                      >
                        <Star className="h-4 w-4" />
                        {skill.items.length} Skills
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-black text-gray-800 dark:text-gray-200">{skill.projects}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Projects</div>
                      </div>
                    </div>
                  </CardContent>

                  {/* Ultra-Premium Shine Effect */}
                  <div className="absolute inset-0 -top-6 -left-6 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 group-hover:animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                  {/* Border Glow */}
                  <div
                    className={`absolute inset-0 rounded-lg bg-gradient-to-r ${colors.primary} opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl`}
                  />
                </Card>
              )
            })}
          </div>

          {/* Ultra-Luxury Bottom Section */}
          <div className="mt-32 text-center">
            <div className="inline-flex items-center gap-8 bg-white/95 dark:bg-black/95 backdrop-blur-2xl px-16 py-8 rounded-full shadow-2xl border border-white/40 dark:border-gray-800/40 hover:shadow-4xl transition-all duration-700 group">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-5 h-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-5 h-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
                </div>
                <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100">
                  Continuously Evolving & Mastering New Technologies
                </span>
              </div>
              <div className="w-px h-10 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
              <div className="text-lg text-gray-600 dark:text-gray-400 font-semibold">
                Always Learning, Always Growing
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0%);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
