"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Award, ExternalLink, Calendar, Building2, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const coursesAndCertifications = [
  {
    title: "C Language",
    provider: "VJTech Academy",
    date: "April 2021",
    type: "Certification",
    link: "https://drive.google.com/file/d/1kR9wIdDsaPEYkGeglAinVLmcqpvTmg3B/view?usp=sharing",
    category: "programming",
    level: "Intermediate",
    featured: false,
  },
  {
    title: "C++ Language",
    provider: "VJTech Academy",
    date: "October 2021",
    type: "Certification",
    link: "https://drive.google.com/file/d/12BbWgus0hgDox-ni6LiNrWM3ROA0_2CW/view?usp=sharing",
    category: "programming",
    level: "Advanced",
    featured: false,
  },
  {
    title: "Core Java",
    provider: "VJTech Academy",
    date: "March 2022",
    type: "Certification",
    link: "https://drive.google.com/file/d/179L51u-UiQi7tKE0z4n99e9SZnB14K96/view?usp=sharing",
    category: "programming",
    level: "Advanced",
    featured: true,
  },
  {
    title: "Advanced Java",
    provider: "VJTech Academy",
    date: "June 2022",
    type: "Course",
    link: "https://drive.google.com/file/d/16lwY9NhbmStWwj_yS1krLwLfPT8F0He9/view?usp=sharing",
    category: "programming",
    level: "Expert",
    featured: true,
  },
  {
    title: "Python",
    provider: "VJTech Academy",
    date: "January 2023",
    type: "Certification",
    link: "https://drive.google.com/file/d/12EUYLn1GrIEj17sdgGHQJBsCQ8QE1bDP/view?usp=sharing",
    category: "programming",
    level: "Advanced",
    featured: true,
  },
  {
    title: "PHP",
    provider: "VJTech Academy",
    date: "June 2023",
    type: "Certification",
    link: "https://drive.google.com/file/d/12B66U6LTLp77T1LN1cmBYliUX7Ep2KXG/view?usp=sharing",
    category: "web",
    level: "Intermediate",
    featured: false,
  },
  {
    title: "VB.NET",
    provider: "VJTech Academy",
    date: "September 2023",
    type: "Certification",
    link: "https://drive.google.com/file/d/12D5865cjhAQT_KKo7h2sm7q8Dr7ejjaw/view?usp=sharing",
    category: "programming",
    level: "Intermediate",
    featured: false,
  },
  {
    title: "Linux",
    provider: "VJTech Academy",
    date: "November 2023",
    type: "Certification",
    link: "https://drive.google.com/file/d/1jpbdA-WxzopNMCDLwd0wlutzxjA25EzV/view?usp=sharing",
    category: "system",
    level: "Advanced",
    featured: false,
  },
  {
    title: "Angular Basics",
    provider: "Simpli Learn",
    date: "January 2025",
    type: "Course",
    link: "https://drive.google.com/file/d/1780q9k-Cwp8uMFsJUnIKdR6DoAeh-Ok7/view?usp=sharing",
    category: "web",
    level: "Intermediate",
    featured: false,
  },
  {
    title: "JavaScript Fundamentals",
    provider: "Great Stack",
    date: "January 2025",
    type: "Course",
    link: "https://drive.google.com/file/d/16y2tt5rDkG_xjpAqTUulXXTLq2aU53H0/view?usp=sharing",
    category: "web",
    level: "Advanced",
    featured: true,
  },
  {
    title: "React Hooks",
    provider: "Great Stack",
    date: "January 2025",
    type: "Course",
    link: "https://drive.google.com/file/d/16y2tt5rDkG_xjpAqTUulXXTLq2aU53H0/view?usp=sharing",
    category: "web",
    level: "Advanced",
    featured: true,
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    provider: "AWS",
    date: "March 2025",
    type: "Course",
    link: "https://drive.google.com/file/d/1999_EnLLcLGorg8_5r4ai2zS7dNxqzT2/view?usp=sharing",
    category: "cloud",
    level: "Professional",
    featured: true,
  },
  {
    title: "Artificial Intelligence for All",
    provider: "Infosys Springboard",
    date: "April 2025",
    type: "Course",
    link: "https://drive.google.com/file/d/19I3VWFK0uuSAg74A9nGGvkPbw4_uT9C9/view?usp=sharing",
    category: "ai",
    level: "Advanced",
    featured: true,
  },
  {
    title: "Gen AI And Chat GPT Application in the Industry",
    provider: "ExcelR",
    date: "January 2025",
    type: "Course",
    link: "https://drive.google.com/file/d/19RrYW_Izb9v-DF_tuzFveWxk4xzQnUqV/view?usp=sharing",
    category: "ai",
    level: "Expert",
    featured: true,
  },
  {
    title: "Data Science And Analytics",
    provider: "HP Life",
    date: "January 2025",
    type: "Course",
    link: "https://drive.google.com/file/d/19hNHmvtFv4oekxi5DYdfdQ1RUUB93Izm/view?usp=sharing",
    category: "data",
    level: "Advanced",
    featured: false,
  },
  {
    title: "Cyber Security",
    provider: "ExcelR",
    date: "April 2025",
    type: "Course",
    link: "https://drive.google.com/file/d/19S22I9U4py8Mq9Se5xIJlZA5cH7Fb4eL/view?usp=sharing",
    category: "security",
    level: "Professional",
    featured: true,
  },
  {
    title: "Business Intelligence Using Advanced Excel And Power BI",
    provider: "ExcelR",
    date: "February 2025",
    type: "Course",
    link: "https://drive.google.com/file/d/19WiSWdZ93O0A2F1BLU2OcQQVZoOXDpwS/view?usp=sharing",
    category: "data",
    level: "Professional",
    featured: true,
  },
  {
    title: "DSA Mastery With Java",
    provider: "ExcelR",
    date: "January 2025",
    type: "Course",
    link: "https://drive.google.com/file/d/19cP10RMGekszm0b2zhaN7dMrnVa6ZSnZ/view?usp=sharing",
    category: "programming",
    level: "Expert",
    featured: true,
  },
]

const getCategoryColors = (category: string) => {
  const colorSchemes = {
    programming: {
      gradient: "from-indigo-600 via-purple-600 to-blue-700",
      lightGradient: "from-indigo-50 via-purple-50 to-blue-50",
      darkGradient: "from-indigo-950/50 via-purple-950/50 to-blue-950/50",
      accent: "indigo",
      ring: "ring-indigo-500/20",
    },
    web: {
      gradient: "from-emerald-600 via-teal-600 to-cyan-700",
      lightGradient: "from-emerald-50 via-teal-50 to-cyan-50",
      darkGradient: "from-emerald-950/50 via-teal-950/50 to-cyan-950/50",
      accent: "emerald",
      ring: "ring-emerald-500/20",
    },
    ai: {
      gradient: "from-rose-600 via-pink-600 to-fuchsia-700",
      lightGradient: "from-rose-50 via-pink-50 to-fuchsia-50",
      darkGradient: "from-rose-950/50 via-pink-950/50 to-fuchsia-950/50",
      accent: "rose",
      ring: "ring-rose-500/20",
    },
    data: {
      gradient: "from-amber-600 via-orange-600 to-red-700",
      lightGradient: "from-amber-50 via-orange-50 to-red-50",
      darkGradient: "from-amber-950/50 via-orange-950/50 to-red-950/50",
      accent: "amber",
      ring: "ring-amber-500/20",
    },
    cloud: {
      gradient: "from-sky-600 via-blue-600 to-indigo-700",
      lightGradient: "from-sky-50 via-blue-50 to-indigo-50",
      darkGradient: "from-sky-950/50 via-blue-950/50 to-indigo-950/50",
      accent: "sky",
      ring: "ring-sky-500/20",
    },
    security: {
      gradient: "from-red-600 via-rose-600 to-pink-700",
      lightGradient: "from-red-50 via-rose-50 to-pink-50",
      darkGradient: "from-red-950/50 via-rose-950/50 to-pink-950/50",
      accent: "red",
      ring: "ring-red-500/20",
    },
    system: {
      gradient: "from-slate-600 via-gray-600 to-zinc-700",
      lightGradient: "from-slate-50 via-gray-50 to-zinc-50",
      darkGradient: "from-slate-950/50 via-gray-950/50 to-zinc-950/50",
      accent: "slate",
      ring: "ring-slate-500/20",
    },
  }
  return colorSchemes[category as keyof typeof colorSchemes] || colorSchemes.programming
}

const getLevelColor = (level: string) => {
  const levels = {
    Beginner: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    Intermediate: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    Advanced: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    Expert: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
    Professional: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  }
  return levels[level as keyof typeof levels] || levels.Intermediate
}

export default function CoursesAndCertifications() {
  const navigateUser = (link: string) => () => {
    if (link) {
      window.open(link, "_blank")
    }
  }

  const totalCertifications = coursesAndCertifications.filter((item) => item.type === "Certification").length
  const totalCourses = coursesAndCertifications.filter((item) => item.type === "Course").length

  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950 transition-all duration-700">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20 dark:border-gray-800/20 mb-6">
            <Star className="h-5 w-5 text-amber-500" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Professional Development</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-100 dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent mb-6">
            Courses & Certifications
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            A comprehensive collection of professional certifications and specialized courses across cutting-edge
            technologies and industry best practices.
          </p>

          <div className="flex justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{totalCertifications}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Certifications</div>
            </div>
            <div className="w-px bg-gray-300 dark:bg-gray-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">{totalCourses}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Courses</div>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {coursesAndCertifications.map((item, index) => {
            const colors = getCategoryColors(item.category)
            const levelColor = getLevelColor(item.level)

            return (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-white/80 dark:bg-black/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] ${colors.ring} hover:ring-4 ${item.featured ? "ring-2 ring-amber-400/30" : ""}`}
              >
                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                      Featured
                    </div>
                  </div>
                )}

                {/* Background Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${colors.lightGradient} dark:${colors.darkGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Animated Border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />

                <CardHeader className="relative z-10 pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${colors.gradient} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      {item.type === "Course" ? (
                        <BookOpen className="h-6 w-6 text-white" />
                      ) : (
                        <Award className="h-6 w-6 text-white" />
                      )}
                    </div>
                    <Badge className={`${levelColor} text-xs font-semibold px-2 py-1`}>{item.level}</Badge>
                  </div>

                  <CardTitle className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300 leading-tight min-h-[3.5rem] flex items-start">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 pt-0 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                      <Building2 className="h-4 w-4 flex-shrink-0" />
                      <span className="font-semibold text-sm truncate">{item.provider}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-300">
                      <Calendar className="h-4 w-4 flex-shrink-0" />
                      <span className="text-sm">{item.date}</span>
                    </div>
                  </div>

                  <Button
                    onClick={navigateUser(item.link)}
                    className={`w-full bg-gradient-to-r ${colors.gradient} hover:shadow-lg hover:shadow-current/25 text-white border-0 font-semibold transition-all duration-300 transform hover:scale-105 group-hover:shadow-xl`}
                    size="sm"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Credential
                  </Button>
                </CardContent>

                {/* Shine Effect */}
                <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </Card>
            )
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 bg-white/80 dark:bg-black/80 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg border border-white/20 dark:border-gray-800/20">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Continuously Learning</span>
            </div>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-700"></div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {coursesAndCertifications.length} Total Achievements
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
