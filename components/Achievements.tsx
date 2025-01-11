import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Award, Code, Trophy } from 'lucide-react'

const achievements = [
  {
    title: 'English Communication & Public Speaking Program.',
    description: '"Earned a certificate and a trophy with an A rating in the English Communication & Public Speaking Program by Nobel Communication, enhancing skills in communication, public speaking, and soft skills development."',
    icon: Trophy,
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <Card className="bg-white dark:bg-black shadow-lg border-none transition-colors duration-300">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-yellow-600 dark:text-yellow-400">Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-gray-50 dark:bg-gray-800 border-l-4 border-yellow-500 dark:border-yellow-400 transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg font-semibold text-gray-800 dark:text-white">
                      <achievement.icon className="mr-2 h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">{achievement.description}</p>
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

