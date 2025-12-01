import { Mail, Linkedin, Github, MapPin, Phone, MessageSquare } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Inline Telegram SVG icon component
function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={cn('size-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7225)" />
        <path d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z" fill="white" />
        <defs>
          <linearGradient id="paint0_linear_87_7225" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
            <stop stop-color="#37BBFE" />
            <stop offset="1" stop-color="#007DBB" />
          </linearGradient>
        </defs>
      </g>
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
              href="https://t.me/Willow_Gretena"
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
