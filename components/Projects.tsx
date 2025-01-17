import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Covid-19 Vaccination Management System',
    description: 'A vaccine management system that allows users to signup, signin, search for vaccines, book appointments, view appointments,...',
    image: '/placeholder.svg?height=200&width=300',
    github: 'https://github.com/karan-mohite/vaccine-management-system-using-java',
    demo: 'https://smart-home-iot-demo.com',
    technologies: ['Java', 'Swing', 'MySQL', 'JDBC'],
  },
  {
    title: 'Chat App with Sentiment Analysis',
    description: 'A realtime chat application that allows users to signup, signin, search for users and chat with anyone with sentiment analysis that...',
    image: '/placeholder.svg?height=200&width=300',
    github: 'https://github.com/karan-mohite/chatapp_sentiment_analysis',
    demo: 'https://ecommerce-app-demo.com',
    technologies: ['React', 'Node.js', 'Express.js', 'Firebase', 'Sentiment.js'],
  },
  {
    title: 'E-learning Platform',
    description: 'Teacher add their subject and post their subject related videos, questions.Students login and watch videos who was uploaded by teacher and solve coding problems...',
    image: '/placeholder.svg?height=200&width=300',
    github: 'https://github.com/karan-mohite/E-Learning-website-main',
    demo: 'https://facial-recognition-demo.com',
    technologies: ['Python', 'OpenCV', 'dlib', 'Flask'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <Card className="bg-gray-50 dark:bg-gray-900 shadow-lg border-none transition-colors duration-300">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-purple-600 dark:text-purple-400">Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="flex flex-col bg-white dark:bg-gray-800 border-t-4 border-purple-500 dark:border-purple-400 transition-colors duration-300">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between mt-auto">
                      <Button asChild variant="outline" size="sm" className="bg-transparent text-purple-600 dark:text-purple-400 border-purple-600 dark:border-purple-400 hover:bg-purple-600 dark:hover:bg-purple-400 hover:text-white">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> GitHub
                        </a>
                      </Button>
                      <Button asChild size="sm" className="bg-purple-500 hover:bg-purple-600 text-white">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                    </div>
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

