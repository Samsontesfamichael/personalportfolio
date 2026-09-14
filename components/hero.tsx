import { ArrowRight, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 -z-10" />

      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">

        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-medium text-emerald-400 bg-emerald-950/50 border border-emerald-800/60 rounded-full w-fit mb-8 mx-auto">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Augsburg Relocation Ready
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[0.95] tracking-tighter">
          Samson
          <br />
          Tesfamichael
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-8">
          <span className="text-xl sm:text-2xl lg:text-3xl font-bold bg-primary/10 text-primary px-6 py-2.5 rounded-2xl border border-primary/20 backdrop-blur-md inline-block">
            Systems &amp; Virtualization Associate
          </span>
          <span className="hidden sm:inline text-2xl text-muted-foreground/30">|</span>
          <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-accent italic">
            DevOps Trainee Applicant
          </span>
        </div>

        {/* Contact Strip */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-sm sm:text-base font-mono text-muted-foreground mb-10 bg-card/60 py-3 px-6 rounded-full border border-border/80 max-w-fit mx-auto shadow-sm">
          <a href="mailto:samsontesfamichael11@gmail.com" className="hover:text-accent transition-colors flex items-center gap-2">
            <Mail size={16} className="text-accent" />
            <span>samsontesfamichael11@gmail.com</span>
          </a>
          <span className="hidden sm:inline text-muted-foreground/30">|</span>
          <a href="tel:+251962600752" className="hover:text-accent transition-colors flex items-center gap-2">
            <Phone size={16} className="text-accent" />
            <span>+251 962 600 752</span>
          </a>
          <span className="hidden sm:inline text-muted-foreground/30">|</span>
          <span className="flex items-center gap-2 text-emerald-400 font-semibold">
            <MapPin size={16} className="text-emerald-400" />
            <span>Augsburg Relocation Ready</span>
          </span>
        </div>

        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Hold a <strong className="text-foreground">Bachelor of Science in Information Technology</strong> from{" "}
          <strong className="text-foreground">Mekelle University (MIT Campus)</strong>. Specializing in declarative infrastructure automation,
          enterprise-grade virtualization, and resilient systems engineering.
          Proven track record of engineering single-node Proxmox VE environments, writing
          system-level Bash/Python automation tools, and hardening production Linux environments.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
          >
            View Infrastructure Labs <ArrowRight size={20} />
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors flex items-center gap-2"
          >
            Get in Touch <ArrowRight size={20} />
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <Link
            href="https://github.com/Samsontesfamichael"
            className="p-3 rounded-lg bg-card hover:bg-card/80 transition-colors text-muted-foreground hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://linkedin.com/in/samsontesfamichael"
            className="p-3 rounded-lg bg-card hover:bg-card/80 transition-colors text-muted-foreground hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </Link>
          <Link
            href="mailto:samsontesfamichael11@gmail.com"
            className="p-3 rounded-lg bg-card hover:bg-card/80 transition-colors text-muted-foreground hover:text-accent"
            aria-label="Email Contact"
          >
            <Mail size={24} />
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-2 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-muted-foreground rounded-full animate-glow" />
          </div>
        </div>
      </div>
    </section>
  )
}
