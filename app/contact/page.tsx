import { Mail, Phone, Linkedin, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light tracking-tight text-purple-900 dark:text-purple-100 sm:text-5xl">Contact</h1>
          <p className="mt-4 text-base text-purple-700 dark:text-purple-300 max-w-xl mx-auto">
            Let's discuss your next project.
          </p>
        </div>

        <div className="space-y-4">
          <a
            href="mailto:jointovandish@gmail.com"
            className="flex items-center gap-4 p-4 border border-purple-200 dark:border-purple-800 rounded-sm hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-purple-100 dark:bg-purple-900/50">
              <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-purple-900 dark:text-purple-200">Email</p>
              <p className="text-sm text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300">
                jointovandish@gmail.com
              </p>
            </div>
          </a>

          <a
            href="tel:+919879245045"
            className="flex items-center gap-4 p-4 border border-purple-200 dark:border-purple-800 rounded-sm hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-purple-100 dark:bg-purple-900/50">
              <Phone className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-purple-900 dark:text-purple-200">Phone</p>
              <p className="text-sm text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300">
                +91 9879245045
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/vandish-chauhan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 border border-purple-200 dark:border-purple-800 rounded-sm hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-purple-100 dark:bg-purple-900/50">
              <Linkedin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-purple-900 dark:text-purple-200">LinkedIn</p>
              <p className="text-sm text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300">
                linkedin.com/in/vandish-chauhan
              </p>
            </div>
          </a>

          <a
            href="https://github.com/Vandishh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 border border-purple-200 dark:border-purple-800 rounded-sm hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-purple-100 dark:bg-purple-900/50">
              <Github className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-purple-900 dark:text-purple-200">GitHub</p>
              <p className="text-sm text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300">
                github.com/Vandishh
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
