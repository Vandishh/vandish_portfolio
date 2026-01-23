import Link from "next/link"
import { Github, Mail, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-purple-200 dark:border-purple-800">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-lg font-semibold text-purple-900 dark:text-purple-100">
              Vandish Chauhan
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/Vandishh"
              className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link 
              href="mailto:jointovandish@gmail.com" 
              className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/vandish-chauhan"
              className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-6 border-t border-purple-200 dark:border-purple-800 pt-6 text-center">
          <p className="text-xs text-purple-700 dark:text-purple-400">© {new Date().getFullYear()} Vandish Chauhan</p>
        </div>
      </div>
    </footer>
  )
}
