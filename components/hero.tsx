import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
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
          Available for DevOps / Cloud Engineering
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-[0.95] tracking-tighter">
          Samson
          <br />
          Tesfamichael
        </h1>

        <div className="flex flex-col gap-6 mb-12 items-center">
          <div className="animate-fade-in-up">
            <span className="text-xl sm:text-2xl lg:text-4xl font-bold bg-primary/10 text-primary px-8 py-3 rounded-2xl border border-primary/20 backdrop-blur-md inline-block">
              Cloud Platform &amp; DevOps Engineer
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up">
            <span className="text-lg sm:text-xl lg:text-3xl font-semibold text-foreground italic">
              Hypervisor Virtualization
            </span>
            <span className="hidden sm:inline text-2xl text-muted-foreground/20 text-center self-center">|</span>
            <span className="text-lg sm:text-xl lg:text-3xl font-semibold text-accent italic">
              Infrastructure Automation Specialist
            </span>
          </div>
        </div>

        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Information Technology graduate from{" "}
          <strong className="text-foreground">Mekelle Institute of Technology</strong>. Specializing in declarative infrastructure automation,
          enterprise-grade virtualization, and high-availability systems engineering.
          Proven track record of orchestrating multi-node Proxmox/Ceph clusters, writing
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
