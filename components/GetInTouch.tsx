import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, Mail, User, MessageSquare } from "lucide-react"

export default function GetInTouch() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50/80 to-pink-50/80 dark:from-indigo-950 dark:via-purple-950/80 dark:to-pink-950/80 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <Card className="bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-2xl max-w-2xl mx-auto border-none transition-all duration-500 hover:shadow-3xl ring-2 ring-purple-500/20 hover:ring-purple-500/30">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 rounded-xl"></div>
          <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-t-xl"></div>

          <CardHeader>
            <CardTitle className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Get In Touch
            </CardTitle>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full mt-2"></div>
          </CardHeader>

          <CardContent className="relative z-10">
            <form className="space-y-6">
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2"
                >
                  <User className="h-4 w-4 text-purple-500 dark:text-purple-400" />
                  Name
                </label>
                <div className="relative">
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="mt-1 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm text-gray-900 dark:text-white border-gray-200 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 pl-3"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2"
                >
                  <Mail className="h-4 w-4 text-pink-500 dark:text-pink-400" />
                  Email
                </label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="mt-1 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm text-gray-900 dark:text-white border-gray-200 dark:border-gray-700 focus:border-pink-500 dark:focus:border-pink-400 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 pl-3"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2"
                >
                  <MessageSquare className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  rows={4}
                  className="mt-1 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm text-gray-900 dark:text-white border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-medium py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
