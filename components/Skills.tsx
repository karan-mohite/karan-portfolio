import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Code, Database, Server, Globe, Terminal, Cpu } from 'lucide-react'

const skills = [
  { name: 'Programming Languages', icon: Code, items: ['C','C++', 'Java', 'Advance Java','Python'] },
  { name: 'Web Development', icon: Globe, items: ['HTML/CSS', 'React','JavaScript', 'Node.js', 'Express'] },
  { name: 'Databases', icon: Database, items: ['MySQL', 'MongoDB', 'PostgreSQL'] },
   { name: 'Version Control', icon: Terminal, items: ['Git', 'GitHub'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <Card className="bg-gray-50 dark:bg-gray-900 shadow-lg border-none transition-colors duration-300">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400">Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill) => (
                <Card key={skill.name} className="bg-white dark:bg-gray-800 border-t-4 border-blue-500 dark:border-blue-400 transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg font-semibold text-gray-800 dark:text-white">
                      <skill.icon className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                      {skill.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside">
                      {skill.items.map((item) => (
                        <li key={item} className="text-gray-700 dark:text-gray-300">{item}</li>
                      ))}
                    </ul>
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

