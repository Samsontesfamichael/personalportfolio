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
              <Link href="mailto:samsontesfamichael11@gmail.com" className="p-2 rounded-full bg-background border border-border hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="https://orcid.org/0009-0008-0325-2111" target="_blank" className="p-2 rounded-full bg-background border border-border hover:border-[#A6CE39] hover:text-[#A6CE39] hover:shadow-lg hover:shadow-[#A6CE39]/20 transition-all duration-300">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.306v7.444h2.297c3.125 0 4.05-2.094 4.05-3.719 0-2.438-1.572-3.725-3.9-3.725h-2.447z" />
                </svg>
                <span className="sr-only">ORCID</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear-2} Samson Tesfamichael. All rights reserved.</p>
            <span className="hidden md:inline text-border">|</span>
            <Link href="/LICENSE.txt" target="_blank" className="hover:text-primary transition-colors">
              MIT License
            </Link>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <span className="text-red-500 animate-pulse">❤️</span> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
