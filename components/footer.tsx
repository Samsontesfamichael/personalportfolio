import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-card/20 backdrop-blur-sm pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Samson Tesfamichael
            </h3>
            <p className="text-muted-foreground max-w-sm">
              Cybersecurity Researcher & IT Graduate specializing in Network Security, Penetration Testing, and Advanced Threat Analysis.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              <Link href="https://github.com/Samsontesfamichael" target="_blank" className="p-2 rounded-full bg-background border border-border hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com/in/samsontesfamichael" target="_blank" className="p-2 rounded-full bg-background border border-border hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:contact@example.com" className="p-2 rounded-full bg-background border border-border hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Samson Tesfamichael. All rights reserved.</p>
            <span className="hidden md:inline text-border">|</span>
            <a href="/LICENSE.txt" target="_blank" className="hover:text-primary transition-colors">
              MIT License
            </a>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <span className="text-red-500 animate-pulse">❤️</span> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
