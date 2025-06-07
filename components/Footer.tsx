import Link from "next/link"
import { Github, Linkedin, Mail, Heart, Sparkles } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 dark:from-black dark:via-purple-950 dark:to-black text-gray-300 dark:text-gray-400 py-16 transition-all duration-300 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent shadow-lg"></div>

      {/* Multiple Floating Orbs */}
      <div className="absolute top-8 left-1/6 w-40 h-40 bg-purple-500/15 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-8 right-1/6 w-32 h-32 bg-pink-500/15 rounded-full blur-2xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1400"></div>

      {/* Sparkle Effects */}
      <div className="absolute top-12 left-12 text-purple-400/30 animate-pulse">
        <Sparkles className="h-4 w-4" />
      </div>
      <div className="absolute top-20 right-16 text-pink-400/30 animate-pulse delay-500">
        <Sparkles className="h-3 w-3" />
      </div>
      <div className="absolute bottom-16 left-20 text-blue-400/30 animate-pulse delay-1000">
        <Sparkles className="h-5 w-5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <p className="text-xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent mb-2">
              &copy; 2025 Karan Mohite
            </p>
            <p className="text-sm text-gray-400 font-medium">All rights reserved.</p>
          </div>

          <div className="flex space-x-8">
            <Link
              href="https://github.com/karan-mohite"
              className="group relative p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-purple-400/40 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 hover:rotate-3"
            >
              <Github className="h-7 w-7 text-gray-300 group-hover:text-white transition-colors duration-300" />
              <span className="sr-only">GitHub</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>

            <Link
              href="https://www.linkedin.com/in/karan-mohite"
              className="group relative p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-blue-500/30 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 hover:rotate-3"
            >
              <Linkedin className="h-7 w-7 text-gray-300 group-hover:text-blue-300 transition-colors duration-300" />
              <span className="sr-only">LinkedIn</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>

            <Link
              href="mailto:mohitekaran18@gmail.com"
              className="group relative p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-purple-500/30 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 hover:rotate-3"
            >
              <Mail className="h-7 w-7 text-gray-300 group-hover:text-purple-300 transition-colors duration-300" />
              <span className="sr-only">Email</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
          </div>
        </div>

        {/* Beautiful Quote Section */}
        <div className="mt-12 pt-8 border-t border-gradient-to-r from-transparent via-white/20 to-transparent">
          <div className="text-center">
            <div className="inline-flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10 hover:bg-white/10 transition-all duration-500 group">
              <Heart className="h-5 w-5 text-pink-400 animate-pulse group-hover:scale-110 transition-transform duration-300" />
              <span className="text-lg font-medium bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
                "Code is poetry written in logic"
              </span>
              <Sparkles className="h-5 w-5 text-purple-400 animate-pulse group-hover:scale-110 transition-transform duration-300" />
            </div>

            <div className="mt-6 flex justify-center space-x-3">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full animate-pulse delay-300"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse delay-600"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-60"></div>
    </footer>
  )
}
