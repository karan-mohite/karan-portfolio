import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Trophy } from "lucide-react"

const achievements = [
  {
    title: "English Communication & Public Speaking Program",
    description:
      "Earned a certificate and a trophy with an A rating in the English Communication & Public Speaking Program by Nobel Communication, enhancing skills in communication, public speaking, and soft skills development.",
    icon: Trophy,
    gradient: "from-amber-400 via-orange-500 to-red-500",
    bgGradient:
      "from-amber-50 via-orange-50 to-red-50 dark:from-amber-900/20 dark:via-orange-900/20 dark:to-red-900/20",
    borderColor: "border-amber-400 dark:border-amber-300",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  {
    title: "HackerRank Proficiency Badges",
    description:
      "Achieved 5-star ratings in Problem Solving, C++, Java, and SQL on HackerRank, demonstrating advanced technical proficiency and algorithmic expertise across multiple programming languages and database technologies.",
    icon: Code,
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    bgGradient:
      "from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-cyan-900/20",
    borderColor: "border-emerald-400 dark:border-emerald-300",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
]

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-900/20 dark:to-purple-900/20 transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        <Card className="bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-2xl border-none rounded-2xl transition-all duration-500 hover:shadow-3xl">
          <CardHeader className="pb-8">
            <CardTitle className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Professional Achievements
            </CardTitle>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className={`bg-gradient-to-br ${achievement.bgGradient} border-l-4 ${achievement.borderColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 rounded-xl overflow-hidden group`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${achievement.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>
                  <CardHeader className="relative z-10">
                    <CardTitle className="flex items-center text-xl font-bold text-gray-800 dark:text-white group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                      <div className={`mr-4 p-2 rounded-full bg-gradient-to-r ${achievement.gradient} shadow-lg`}>
                        <achievement.icon className="h-6 w-6 text-white" />
                      </div>
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
