const experiences = [
  {
    title: "IT Support Specialist / Server Administrator",
    company: "Hostinger Cloud Hosting (Freelance)",
    location: "Remote",
    period: "2023 – Present",
    description:
      "Provided end-to-end technical support for business clients, managing hosting environments, resolving account issues, and ensuring smooth website operations.",
    highlights: [
      "Established and configured user accounts, DNS settings, SSL certificates, and email services for new clients",
      "Resolved password and login issues, troubleshoot access problems, and guided clients through technical setup steps",
      "Managed Linux-based hosting environment including DNS management, SSL/TLS configuration, and email services",
      "Performed server-side optimization including PHP tuning and database query optimization for improved page load speeds",
      "Implemented security hardening measures: firewall rules, file permissions, and automated malware scanning",
      "Documented troubleshooting procedures and maintained support reports for recurring issues",
      "Prioritized and managed multiple client tickets while meeting SLA response times",
    ],
  },
  {
    title: "Systems & Security Modelling Researcher",
    company: "Home Lab Project",
    location: "Mekelle, Tigray, Ethiopia",
    period: "May 2024 – Present",
    description:
      "Developing and simulating computational models for secure systems, focusing on network behavior analysis and stochastic modelling of potential threats.",
    highlights: [
      "Designed and simulated complex network architectures for 4G/5G systems using Open5GS and srsRAN to study system resilience",
      "Modelled traffic patterns and behavioral anomalies, conducting data-driven risk analysis and mitigation simulations",
      "Developed Python-based modelling tools to automate data processing, log analysis, and system behavior monitoring",
      "Analyzed threat propagation using statistical methods, correlating security events within SIEM environments (Splunk/ELK)",
    ],
  },
  {
    title: "Systems Engineering & Security Specialist",
    company: "Timeless Technologies plc",
    location: "Mekelle, Tigray, Ethiopia",
    period: "July 2023 – Present",
    description:
      "Leading technical system analysis and optimization projects, ensuring system integrity and reliability through data-driven security frameworks.",
    highlights: [
      "Conducted comprehensive system vulnerability assessments and risk modelling to identify and mitigate structural weaknesses",
      "Analyzed multidimensional system logs to identify underlying behavioral trends and optimize system performance",
      "Automated access control workflows and resource allocation procedures using Python scripting",
      "Integrated secure design principles into complex software system architectures, improving overall system resilience",
      "Collaborated on technical system reports and performance documentation for organizational oversight",
    ],
  },
  {
    title: "Data Systems Security Engineer (Voluntary)",
    company: "Tesfay Mehari",
    location: "Mekelle, Tigray, Ethiopia",
    period: "June 2025 – December 2025",
    description:
      "Optimized large-scale database architectures and data processing workflows, focusing on integrity and computational efficiency.",
    highlights: [
      "Engineered high-performance database workflows, optimizing data retrieval and processing for large-scale assets",
      "Developed secure data modelling protocols and role-based access architectures to ensure high-availability and integrity",
      "Conducted performance audits and vulnerability simulations on complex database ecosystems",
      "Modelled continuous monitoring mechanisms to guarantee data reliability and compliance with technical standards",
    ],
  },
  {
    title: "Virtualization & Infrastructure Engineer",
    company: "Home Lab Project",
    location: "Mekelle, Tigray, Ethiopia",
    period: "August 2024 – October 2025",
    description:
      "Designed and deployed a multi‑node Proxmox Virtual Environment (PVE) lab to simulate enterprise‑grade virtualization, clustering, storage, and high‑availability operations.",
    highlights: [
      "Built a production-like 3-node Proxmox cluster with Ceph distributed storage and implemented HA failover mechanisms",
      "Configured advanced networking including Linux bridges, static IPs, and VLAN segmentation for isolated traffic",
      "Managed full VM lifecycle for Linux (Ubuntu, CentOS) and Windows using cloud-init for automated provisioning",
      "Implemented backup and disaster recovery workflows using Proxmox Backup Server (PBS) with scheduled snapshots",
      "Produced comprehensive High-Level (HLD) and Low-Level (LLD) design documentation",
    ],
  },
  {
    title: "Security Engineer",
    company: "Kaldas Technologies",
    location: "Remote",
    period: "November 2024 – July 2025",
    description:
      "Collaborated closely with the CEO as a Security Engineer at Kaldas Technologies, focusing on vulnerability scanning, exploitation, and security testing to improve the organization's security posture.",
    highlights: [
      "Conducted vulnerability scanning, exploitation, and security testing of systems",
      "Provided clear, actionable recommendations that improved the security posture of the organization",
      "Demonstrated strong technical knowledge and a solid understanding of cybersecurity principles",
      "Recognized for precise and careful work, dedication, and a positive attitude towards continuous learning",
    ],
  },
  {
    title: "Software Engineer",
    company: "Luna Technologies Plc",
    location: "Mekelle, Tigray, Ethiopia",
    period: "September 2024 – December 2024",
    description: "Provided technical support for Luna HealthCare System software used in Aman Hospital, troubleshooting issues and training end-users.",
    highlights: [
      "Maintained and upgraded Luna HealthCare System software used in Aman Hospital",
      "Troubleshot and resolved software and hardware issues reported by hospital staff",
      "Walked end-users through steps to help them resolve technical problems with the healthcare system",
      "Established user accounts for hospital staff and assisted with password/login problems",
      "Automated backup and performance-monitoring routines using Python scripting",
      "Implemented server-side optimisations and database improvements for system stability",
      "Ensured secure API communication using Node.js, Express.js, and MongoDB",
      "Maintained support documentation and procedures for the entire IT team",
    ],
  },
  {
    title: "Back-end Developer (Intern)",
    company: "Vite Technologies Plc",
    location: "Mekelle, Tigray, Ethiopia",
    period: "January 2024 – April 2024",
    description: "Provided technical support for internal teams and clients, resolving access issues and developing support documentation.",
    highlights: [
      "Designed and developed RESTful APIs and back-end modules for web applications",
      "Established user accounts, managed access controls, and resolved login/authentication issues",
      "Implemented user authentication, access control, and data encryption features",
      "Assisted colleagues with technical issues and walked them through resolution steps",
      "Assisted in automating system testing and debugging processes using Python scripts",
      "Maintained technical documentation and support procedures",
      "Collaborated with frontend team to integrate secure backend services",
    ],
  },
  {
    title: "Cybersecurity Consultant",
    company: "Freelancer",
    location: "Mekelle, Tigray, Ethiopia",
    period: "December 2020 – October 2022",
    description:
      "Provided IT support and consultancy for clients in telecom and software development sectors, resolving technical issues and implementing solutions.",
    highlights: [
      "Resolved client technical problems related to network connectivity, software deployment, and hardware configuration",
      "Developed automation scripts in Python for vulnerability scanning and compliance reporting",
      "Conducted penetration testing, risk assessments, and mitigation planning based on international standards",
      "Supported small businesses in adopting secure software deployment practices",
      "Documented technical support procedures and maintained issue resolution reports",
      "Analyzed system logs and records to identify trends and prevent recurring issues",
      "Assisted clients with account setup, password recovery, and access management",
      "Advised clients on ISO 27001, NIST, and PCI DSS compliance frameworks",
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
