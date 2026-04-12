import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 -z-10" />

      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold mb-8 leading-[0.9] tracking-tighter">
          Samson
          <br />
          Tesfamichael
        </h1>

        <div className="flex flex-col gap-6 mb-12 items-center">
          <div className="animate-fade-in-up">
            <span className="text-2xl sm:text-3xl lg:text-5xl font-bold bg-primary/10 text-primary px-8 py-3 rounded-2xl border border-primary/20 backdrop-blur-md inline-block">
              Machine Learning & Data‑Driven Modelling Researcher
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up">
            <span className="text-xl sm:text-2xl lg:text-4xl font-semibold text-foreground italic">
              Systems Engineer
            </span>
            <span className="hidden sm:inline text-3xl text-muted-foreground/20 text-center self-center">|</span>
            <span className="text-xl sm:text-2xl lg:text-4xl font-semibold text-accent italic">
              Applied AI for Sustainability
            </span>
          </div>
        </div>

        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          I am an Information Technology graduate specializing in machine learning, statistical modelling, and data‑driven system analysis.
          My research interests include predictive modelling, simulation, and the application of computational methods to sustainable food and agricultural systems.
        </p>



        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
          >
            View My Work <ArrowRight size={20} />
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
