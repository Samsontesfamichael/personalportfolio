export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Sidebar Navigation */}
          <div className="hidden md:block">
            <div className="border-l-2 border-primary pl-6 space-y-8">
              <div>
                <h3 className="font-mono text-sm text-muted-foreground mb-2">Sections</h3>
                <p className="text-lg font-semibold text-foreground">About Me</p>
              </div>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Profile</p>
                <p>Location</p>
                <p>Expertise</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="space-y-6">
              <div>
                <p className="text-muted-foreground text-sm font-mono mb-4">📍 Bole, Addis Ababa, Ethiopia</p>
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
              </div>

              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  I'm <strong>Samson Tesfamichael</strong>, a motivated IT graduate and cybersecurity enthusiast
                  currently developing hands-on expertise through a self-hosted home lab while seeking professional
                  opportunities. Skilled in Python automation, penetration testing, and network defence, I'm passionate
                  about designing secure systems and advancing digital resilience through continuous learning and applied
                  research.
                </p>

                <p>
                  My expertise spans network security, vulnerability assessment, penetration testing, and compliance
                  frameworks including ISO 27001, NIST RMF, and PCI DSS. I've demonstrated strong proficiency in
                  security tools like Splunk SIEM, Snort/Suricata IDS/IPS, and network simulation platforms for
                  2G/3G/4G/5G architectures.
                </p>

                <p>
                  Through independent research, freelance consulting, and professional experience in healthcare and
                  telecom sectors, I've developed comprehensive understanding of threat landscapes, risk management, and
                  secure system architecture. I'm committed to continuous learning and applied research to deliver
                  impactful cybersecurity solutions.
                </p>

                <div className="pt-4 grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-background/50 border border-border">
                    <p className="text-xs text-foreground/70 font-mono">Years Experience</p>
                    <p className="text-lg font-bold text-accent">3+</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background/50 border border-border">
                    <p className="text-xs text-foreground/70 font-mono">Certifications</p>
                    <p className="text-lg font-bold text-accent">4+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
