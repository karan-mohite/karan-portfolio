import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Smart Home IoT System',
    description: 'Developed a smart home system using Raspberry Pi and various IoT sensors. Implemented machine learning algorithms for predictive maintenance and energy optimization.',
    image: '/placeholder.svg?height=200&width=300',
    github: 'https://github.com/johndoe/smart-home-iot',
    demo: 'https://smart-home-iot-demo.com',
    technologies: ['Python', 'TensorFlow', 'Raspberry Pi', 'MQTT'],
  },
  {
    title: 'E-commerce Web Application',
    description: 'Built a full-stack e-commerce platform with features like user authentication, product catalog, shopping cart, and payment integration.',
    image: '/placeholder.svg?height=200&width=300',
    github: 'https://github.com/johndoe/ecommerce-app',
    demo: 'https://ecommerce-app-demo.com',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
  },
  {
    title: 'Facial Recognition Attendance System',
    description: 'Created an automated attendance system using facial recognition technology. Implemented real-time face detection and recognition algorithms.',
    image: '/placeholder.svg?height=200&width=300',
    github: 'https://github.com/johndoe/facial-recognition-attendance',
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

