import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-12">
            I'm always interested in new opportunities and interesting projects. Feel free to reach out through any of
            the channels below.
          </p>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Link
              href="mailto:samsontesfamichael11@gmail.com"
              className="p-6 rounded-lg border border-border hover:border-accent/50 bg-background/50 hover:bg-background/80 transition-all group"
            >
              <Mail className="size-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">samsontesfamichael11@gmail.com</p>
            </Link>

            <Link
              href="tel:+251962600752"
              className="p-6 rounded-lg border border-border hover:border-accent/50 bg-background/50 hover:bg-background/80 transition-all group"
            >
              <Phone className="size-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground">+251 962 600 752</p>
            </Link>
          </div>

          {/* Location */}
          <div className="p-6 rounded-lg border border-border bg-background/50 mb-12">
            <MapPin className="size-6 text-accent mx-auto mb-3" />
            <p className="text-muted-foreground">Bole, Addis Ababa, Ethiopia</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <Link
              href="https://github.com/Samsontesfamichael"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card border border-border hover:border-accent hover:text-accent transition-colors"
            >
              <Github size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/samson-tesfamichael-914b582b6"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card border border-border hover:border-accent hover:text-accent transition-colors"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="mailto:samsontesfamichael11@gmail.com"
              className="p-3 rounded-lg bg-card border border-border hover:border-accent hover:text-accent transition-colors"
            >
              <Mail size={24} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
