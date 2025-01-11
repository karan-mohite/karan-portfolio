import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function GetInTouch() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <Card className="bg-white dark:bg-black shadow-lg max-w-2xl mx-auto border-none transition-colors duration-300">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400">Get In Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <Input id="name" placeholder="Your name" className="mt-1 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" className="mt-1 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <Textarea id="message" placeholder="Your message" rows={4} className="mt-1 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700" />
              </div>
              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

