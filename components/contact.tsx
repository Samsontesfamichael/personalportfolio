import { Mail, Linkedin, Github, MapPin, Phone, MessageSquare } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Inline Telegram SVG icon component
function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn('size-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.371 0 0 5.371 0 12c0 5.302 3.438 9.8 8.205 11.385.6.111.82-.261.82-.577 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.762-1.604-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.51 11.51 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.476 5.921.43.371.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.286 0 .319.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.629-5.371-12-12-12z" />
    </svg>
  );
}


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
            <Link
              href="https://wa.me/251962600752"
              className="p-6 rounded-lg border border-border hover:border-accent/50 bg-background/50 hover:bg-background/80 transition-all group"
            >
              <MessageSquare className="size-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <p className="text-sm text-muted-foreground">Chat on WhatsApp</p>
            </Link>
            <Link
              href="https://t.me/samsontesfamichael"
              className="p-6 rounded-lg border border-border hover:border-accent/50 bg-background/50 hover:bg-background/80 transition-all group"
            >
              <TelegramIcon className="size-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">Telegram</h3>
              <p className="text-sm text-muted-foreground">Chat on Telegram</p>
            </Link>
          </div>

          {/* Location with Map */}
          <div className="rounded-lg border border-border bg-background/50 overflow-hidden mb-12">
            <div className="p-6 flex items-center gap-3 border-b border-border">
              <MapPin className="size-6 text-accent" />
              <p className="text-muted-foreground font-medium">Near Gerji St. Mariam Church, Bole, Addis Ababa, Ethiopia</p>
            </div>
            <div className="w-full h-64 md:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.2891234567!2d38.7993682!3d8.9991202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f3a6aa0aaf%3A0x4c69dfae97e0b50a!2sGerji%20St.%20Mariam%20Church!5e0!3m2!1sen!2set!4v1732722000000!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map - Near Gerji St. Mariam Church, Bole, Addis Ababa, Ethiopia"
              />
            </div>
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
