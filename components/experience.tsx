const experiences = [
  {
    title: "Cyber Security Engineer",
    company: "Timeless Technologies plc",
    location: "Mekelle, Tigray, Ethiopia",
    period: "July 2023 – Present",
    description:
      "Co-founded a technology company and worked as a Cyber Security Engineer. Focused on vulnerability assessments, risk management, and strengthening network and software security.",
    highlights: [
      "Conducted Vulnerability Assessments, Risk Assessment, Risk Identification, and Risk Mitigation",
      "Strengthened both the company's network security and the security of the software we developed",
    ],
  },
  {
    title: "Independent Cybersecurity Researcher",
    company: "Home Lab Project",
    location: "Mekelle, Tigray, Ethiopia",
    period: "May 2024 – Present",
    description:
      "Established a self-hosted cybersecurity home lab to continue practical learning while seeking full-time opportunities.",
    highlights: [
      "Design and simulate secure network architectures using OpenBTS (2G/3G), srsRAN (4G/5G), and Open5GS",
      "Conduct vulnerability testing, risk analysis, and system hardening aligned with ISO 27001 and NIST frameworks",
      "Develop Python scripts to automate security monitoring, log analysis, and penetration-testing tasks",
      "Use Splunk (SIEM), Snort (IDS/IPS), and Suricata for continuous monitoring and threat correlation",
    ],
  },
  {
    title: "Cyber Security Consultant",
    company: "Freelancer",
    location: "Mekelle, Tigray, Ethiopia",
    period: "December 2020 – October 2022",
    description:
      "Provided consultancy for clients in telecom and software development sectors on network and cloud security.",
    highlights: [
      "Developed automation scripts in Python for vulnerability scanning and compliance reporting",
      "Conducted penetration testing, risk assessments, and mitigation planning based on international standards",
      "Supported small businesses in adopting secure software deployment practices",
      "Advised clients on ISO 27001, NIST, and PCI DSS compliance frameworks",
    ],
  },
  {
    title: "Software Engineer",
    company: "Luna Technologies Plc",
    location: "Mekelle, Tigray, Ethiopia",
    period: "September 2024 – December 2024",
    description: "Maintained and upgraded Luna HealthCare System software used in Aman Hospital.",
    highlights: [
      "Maintained and upgraded Luna HealthCare System software used in Aman Hospital",
      "Automated backup and performance-monitoring routines using Python scripting",
      "Implemented server-side optimisations and database improvements for system stability",
      "Ensured secure API communication using Node.js, Express.js, and MongoDB",
    ],
  },
  {
    title: "Back-end Developer (Intern)",
    company: "Vite Technologies Plc",
    location: "Mekelle, Tigray, Ethiopia",
    period: "January 2024 – April 2024",
    description: "Designed and developed RESTful APIs and back-end modules for web-based business applications.",
    highlights: [
      "Designed and developed RESTful APIs and back-end modules for web applications",
      "Implemented user authentication, access control, and data encryption features",
      "Assisted in automating system testing and debugging processes using Python scripts",
      "Collaborated with frontend team to integrate secure backend services",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border hover:border-primary/50 transition-colors bg-card/40"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-accent font-semibold">{exp.company}</p>
                </div>
                <span className="text-sm text-foreground bg-primary/20 px-3 py-1.5 rounded-full font-semibold border border-primary/40 whitespace-nowrap">{exp.period}</span>
              </div>

              <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">📍 {exp.location}</p>

              <p className="text-muted-foreground mb-4">{exp.description}</p>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-sm text-foreground/80 flex gap-3">
                    <span className="text-accent font-bold">▸</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
