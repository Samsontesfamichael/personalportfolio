export default function Education() {
  const achievements = [
    { icon: "🎓", label: "IT Graduate", description: "BSc Information Technology" },
    { icon: "🖥️", label: "Virtualization Lab", description: "Self-hosted Proxmox/Ceph enterprise cluster" },
    { icon: "⚙️", label: "DevOps Practitioner", description: "Infrastructure automation & IaC workflows" },
    { icon: "🌐", label: "Network Engineer", description: "CCNA, DNS, SSL/TLS, UFW/Iptables hardening" },
  ]

  const coursework = [
    "Network Security & Design",
    "Cybersecurity Fundamentals",
    "Database Management Systems",
    "Web Application Development",
    "Cryptography & Encryption",
    "System Administration",
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Education</h2>

        <div className="max-w-4xl space-y-8">
          <div className="p-8 rounded-lg border-2 border-accent/30 bg-card/50 hover:border-accent/60 transition-colors">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  Bachelor of Science in Information Technology
                </h3>
                <p className="text-lg font-semibold text-accent">Mekelle Institute of Technology</p>
              </div>
              <span className="text-sm text-muted-foreground bg-primary/10 px-4 py-2 rounded-full whitespace-nowrap">
                2017 – 2024
              </span>
            </div>

            <p className="text-sm text-muted-foreground mb-6">📍 Mekelle, Tigray, Ethiopia</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-background/50 border border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all group"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{achievement.icon}</div>
                  <p className="text-sm font-semibold text-foreground mb-1">{achievement.label}</p>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground font-mono mb-4 uppercase tracking-wider">
                Advanced Coursework & Specializations
              </p>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-accent/20 text-foreground border border-accent/40 hover:bg-accent/30 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Focus Areas */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground font-mono mb-3 uppercase tracking-wider">
                Academic Highlights
              </p>
              <ul className="space-y-2 grid md:grid-cols-2 gap-3">
                <li className="flex gap-3 text-foreground/80">
                  <span className="text-accent">▸</span>
                  <span>Comprehensive IT programme with systems engineering and infrastructure specialisation</span>
                </li>
                <li className="flex gap-3 text-foreground/80">
                  <span className="text-accent">▸</span>
                  <span>Built and documented enterprise-grade Proxmox/Ceph virtualization lab with HLD/LLD artefacts</span>
                </li>
                <li className="flex gap-3 text-foreground/80">
                  <span className="text-accent">▸</span>
                  <span>Engineered high-performance analytics platform using custom Linux daemons and data processing pipelines for thesis research</span>
                </li>
                <li className="flex gap-3 text-foreground/80">
                  <span className="text-accent">▸</span>
                  <span>Excellence in network design, Linux administration, and declarative infrastructure automation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-8 rounded-lg border-2 border-primary/30 bg-card/50 hover:border-primary/60 transition-colors">
            <h3 className="text-xl font-bold text-foreground mb-6">Professional Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3 p-4 rounded-lg bg-background/50 border border-accent/30 hover:border-accent/60 hover:bg-accent/5 transition-all">
                <span className="text-accent text-xl flex-shrink-0">☁️</span>
                <div>
                  <p className="font-semibold text-foreground">Cloud Computing Architecture</p>
                  <p className="text-sm text-muted-foreground">Great Learning Academy</p>
                  <p className="text-xs text-accent/70 mt-1 font-mono">ID: KPWNWEIT</p>
                  <a
                    href="https://www.mygreatlearning.com/certificate/KPWNWEIT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent hover:text-accent/80 mt-2 inline-block hover:underline transition-colors"
                  >
                    Verify Certificate →
                  </a>
                </div>
              </div>
              <div className="flex gap-3 p-4 rounded-lg bg-background/50 border border-accent/30 hover:border-accent/60 hover:bg-accent/5 transition-all">
                <span className="text-accent text-xl flex-shrink-0">🏗️</span>
                <div>
                  <p className="font-semibold text-foreground">Cloud Foundation Certification</p>
                  <p className="text-sm text-muted-foreground">Great Learning Academy</p>
                  <p className="text-xs text-accent/70 mt-1 font-mono">ID: SNQQCHFG</p>
                  <a
                    href="https://www.mygreatlearning.com/certificate/SNQQCHFG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent hover:text-accent/80 mt-2 inline-block hover:underline transition-colors"
                  >
                    Verify Certificate →
                  </a>
                </div>
              </div>
              <div className="flex gap-3 p-4 rounded-lg bg-background/50 border border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all">
                <span className="text-primary text-xl flex-shrink-0">✓</span>
                <div>
                  <p className="font-semibold text-foreground">Google Cybersecurity Professional Certificate</p>
                  <p className="text-sm text-muted-foreground">Networks, Risk Management, and Network Security</p>
                  <div className="flex flex-col gap-1 mt-2">
                    <a
                      href="https://coursera.org/verify/DRALTPZ7Q6SA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:text-primary/80 inline-block hover:underline transition-colors"
                    >
                      Networks Verification →
                    </a>
                    <a
                      href="https://coursera.org/verify/CLSL8AZHFAVG"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:text-primary/80 inline-block hover:underline transition-colors"
                    >
                      Risk Management Verification →
                    </a>
                    <a
                      href="https://coursera.org/verify/K693RA8XL7NN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:text-primary/80 inline-block hover:underline transition-colors"
                    >
                      Network Security Verification →
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 p-4 rounded-lg bg-background/50 border border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all">
                <span className="text-primary text-xl flex-shrink-0">✓</span>
                <div>
                  <p className="font-semibold text-foreground">CCNA Certification</p>
                  <p className="text-sm text-muted-foreground">Cisco Certified Network Associate</p>
                  <p className="text-xs text-accent/70 mt-1 font-mono">Certification ID : DA/NRS/24/1346</p>
                  <a
                    href="https://drive.google.com/file/d/1DC0sFHx6kCWSit7xsWARkJIgjzOkZrGC/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:text-primary/80 inline-block hover:underline transition-colors">
                    Verify Certificate →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
