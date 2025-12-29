import { Mail, Linkedin, Github, MapPin, Phone, MessageSquare, ExternalLink } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Inline Telegram SVG icon component
// function TelegramIcon({ className }: { className?: string }) {
//   return (
//     <svg
//       viewBox="0 0 32 32"
//       fill="none"
//       className={cn('size-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform', className)}
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//       <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
//       <g id="SVGRepo_iconCarrier">
//         <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7225)" />
//         <path d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z" fill="white" />
//         <defs>
//           <linearGradient id="paint0_linear_87_7225" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
//             <stop stop-color="var(--accent)" />
//             <stop offset="1" stop-color="var(--accent)" />
//           </linearGradient>
//         </defs>
//       </g>
//     </svg>
//   );
// }

function TelegramOutlineIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`size-8 text-accent mx-auto mb-4 transition-transform duration-300 hover:scale-110 ${className}`}
    >
      <path d="M21.5 4.5l-3.8 15.1c-.2.8-1.1 1.1-1.7.7l-4.4-3.2-2.1 2
      c-.5.5-1.3.2-1.5-.5L7.4 14l-4.1-1.3c-.8-.2-.8-1.3-.1-1.6L20.2 3.8
      c.7-.3 1.4.4 1.3 1.1z"/>
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
              <TelegramOutlineIcon className="size-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">Telegram</h3>
              <p className="text-sm text-muted-foreground">Chat on Telegram</p>
            </Link>
          </div>

          {/* Location with Map */}
          <div className="rounded-lg border border-border bg-background/50 overflow-hidden mb-12">
            <div className="p-6 flex items-center gap-3 border-b border-border">
              <MapPin className="size-6 text-accent" />
              <p className="text-muted-foreground font-medium">Mekelle, Tigray, Ethiopia</p>
            </div>
            <div className="w-full h-64 md:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.2625292416!2d39.4635962!3d13.4808505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x166afd153428efcb%3A0x20b487872920ec84!2sMekelle%20Hotel!5e0!3m2!1sen!2set!4v1735500000000!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map - Mekelle Hotel, Mekelle, Tigray, Ethiopia"
              />
            </div>
            <div className="p-4 text-center border-t border-border">
              <Link
                href="https://www.google.com/maps/place/Mekelle+Hotel+%E1%88%98%E1%89%90%E1%88%88+%E1%88%86%E1%89%B4%E1%88%8D/@13.4785676,39.4558808,15.07z/data=!4m9!3m8!1s0x166afd153428efcb:0x20b487872920ec84!5m2!4m1!1i2!8m2!3d13.4808505!4d39.4661711!16s%2Fg%2F11f5qswpqc?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="text-accent hover:underline text-sm inline-flex items-center gap-2"
              >
                <ExternalLink size={16} /> View on Google Maps
              </Link>
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
