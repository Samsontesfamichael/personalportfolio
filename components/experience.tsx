const professionalExperiences = [
  {
    title: "Systems & Infrastructure Integration Engineer",
    company: "Symbol Technologies P.L.C.",
    location: "Addis Ababa, Ethiopia",
    period: "March 15, 2026 – Present",
    description:
      "Orchestrate full-stack enterprise data center architectures, hyper-converged infrastructure (HCI), and virtualization clusters for tier-1 financial institutions and public sector networks.",
    highlights: [
      "Architect and deploy high-availability private cloud topologies leveraging VMware vSphere/ESXi and hyper-converged architectures (HCI), mirroring modern multi-zone public cloud paradigms",
      "Engineered centralized security telemetry matrices (such as FortiSIEM), configuring structured log correlation streams and handling edge-network host hardening",
      "Provision multi-tier storage arrays (SAN/NAS via HPE/Dell) and configure complex Layer-2/Layer-3 software-defined networking protocols to segregate secure operational zones",
      "Spearhead the migration of legacy 3-tier monolithic server frameworks into modern containerized and orchestrated private cloud compute partitions",
    ],
  },
  {
    title: "Systems Engineering & Security Specialist",
    company: "Timeless Technologies plc",
    location: "Mekelle, Tigray, Ethiopia",
    period: "July 2023 – February 2026",
    description:
      "Led infrastructure analysis and systems optimisation projects, ensuring platform integrity and reliability through automated monitoring and hardened security frameworks.",
    highlights: [
      "Automated access control workflows and resource allocation procedures using Python scripting, eliminating manual provisioning bottlenecks",
      "Conducted comprehensive system vulnerability assessments and risk modelling to identify and remediate structural weaknesses",
      "Analysed multidimensional system logs to surface behavioral trends, optimise performance, and preempt incidents",
      "Integrated secure design principles into software system architectures, improving overall platform resilience",
      "Produced technical system reports and performance documentation for organisational oversight",
    ],
  },
  {
    title: "Cloud Infrastructure Consultant (Freelance)",
    company: "Hostinger Cloud Hosting",
    location: "Remote / Freelance",
    period: "2023 – February 2026",
    description:
      "Administered Linux-based cloud hosting environments for business clients, automating deployment workflows and hardening production server configurations on an occasional side-engagement basis.",
    highlights: [
      "Automated DNS provisioning, SSL/TLS certificate lifecycle, and email service configuration using custom Bash scripts",
      "Engineered server-side performance improvements through PHP tuning, MySQL query optimisation, and Nginx configuration hardening",
      "Implemented multi-layer security hardening: stateful firewall rules (UFW/Iptables), file permission audits, and automated malware scanning routines",
      "Maintained 99.9% uptime SLAs by proactively scripting automated health checks and alerting pipelines",
      "Documented all runbooks, deployment procedures, and incident resolution reports for operational continuity",
    ],
  },
  {
    title: "Data Systems Security Engineer (Voluntary)",
    company: "Tesfay Mehari",
    location: "Mekelle, Tigray, Ethiopia",
    period: "June 2025 – December 2025",
    description:
      "Optimised large-scale database architectures and data processing workflows, focusing on high-availability integrity and computational efficiency.",
    highlights: [
      "Engineered high-performance database workflows, optimising data retrieval and processing for large-scale asset management",
      "Developed secure data modelling protocols and role-based access architectures to ensure high-availability and integrity",
      "Conducted performance audits and vulnerability simulations on complex database ecosystems",
      "Scripted continuous monitoring mechanisms to guarantee data reliability and compliance with technical standards",
    ],
  },
  {
    title: "Security Engineer",
    company: "Kaldas Technologies",
    location: "Remote",
    period: "November 2024 – July 2025",
    description:
      "Collaborated with the CEO as a Security Engineer, conducting systematic vulnerability assessments and security testing to strengthen organisational security posture.",
    highlights: [
      "Executed vulnerability scanning, exploitation testing, and security hardening of production systems",
      "Delivered clear, actionable remediation recommendations that demonstrably improved the organisation's security posture",
      "Apply cybersecurity principles across infrastructure and application layers",
      "Recognised for precision, diligence, and a commitment to continuous technical learning",
    ],
  },
  {
    title: "University Technical Engagements & Internships",
    company: "Luna Technologies Plc / Vite Technologies Plc",
    location: "Mekelle, Tigray, Ethiopia",
    period: "January 2024 – December 2024",
    description:
      "Gained foundational industry experience in software engineering and systems operation during university studies, building secure backend APIs and automating system maintenance.",
    highlights: [
      "Automated backup and performance-monitoring routines using Python scripting, replacing manual processes and reducing operational overhead",
      "Optimised database query performance and schema design for Luna HealthCare and Vite platforms to improve response times",
      "Maintained server-side stability using custom automated scripts for health checks, log rotation, and dependency management",
      "Hardened secure API communication channels using Node.js, Express.js, and MongoDB, integrating role-based authentication",
    ],
  },
  {
    title: "Cybersecurity Consultant",
    company: "Freelancer",
    location: "Mekelle, Tigray, Ethiopia",
    period: "December 2020 – October 2022",
    description:
      "Provided IT infrastructure consultancy and security services for clients in telecom and software development sectors.",
    highlights: [
      "Developed Python automation scripts for vulnerability scanning, compliance reporting, and system log analysis",
      "Conducted penetration testing, risk assessments, and mitigation planning aligned with ISO 27001, NIST, and PCI DSS frameworks",
      "Supported clients in adopting secure software deployment practices and infrastructure hardening",
      "Resolved client network connectivity, software deployment, and hardware configuration issues",
      "Documented all technical support procedures and maintained incident resolution reports",
    ],
  },
]

const labProjects = [
  {
    title: "Virtualization & Infrastructure Engineer",
    company: "Home Lab Project",
    location: "Mekelle, Tigray, Ethiopia",
    period: "August 2024 – October 2025",
    description:
      "Engineered a bare-metal hypervisor matrix simulating mission-critical datacenter operations, stateful storage virtualization, and disaster recovery workflows — demonstrating enterprise-grade cloud infrastructure competencies.",
    highlights: [
      "Provisioned a 3-node high-availability (HA) Proxmox VE cluster with automated split-brain prevention and quorum tuning for zero-downtime failover",
      "Deployed a converged Ceph Storage cluster across all nodes, optimizing placement groups (PGs) and OSDs to support hot-swappable node loss with zero data downtime",
      "Constructed immutable cloud-init metadata and user-data manifests to bootstrap headless Linux targets programmatically with embedded SSH authority and fixed network interfaces",
      "Configured multi-tier Linux VLAN bridges to segregate front-end production traffic from back-end intra-cluster replication and storage heartbeats (Software-Defined Networking)",
      "Scripted deduplicated cron-scheduled PBS snapshots with strict retention management rules for automated disaster recovery",
      "Produced comprehensive High-Level (HLD) and Low-Level (LLD) infrastructure design documentation",
    ],
  },
  {
    title: "Systems & Security Modelling Researcher",
    company: "Home Lab Project",
    location: "Mekelle, Tigray, Ethiopia",
    period: "May 2024 – Present",
    description:
      "Built a self-hosted research environment to simulate and harden network architectures, automating traffic analysis and threat detection workflows.",
    highlights: [
      "Designed and deployed complex network simulations for 4G/5G systems using Open5GS and srsRAN to study infrastructure resilience",
      "Developer Python-based automation tools for data processing pipelines, log analysis, and system behaviour monitoring",
      "Correlated security events within SIEM environments (Splunk/ELK) using statistical methods and scripted alert rules",
      "Modelled traffic anomalies and conducted data-driven risk analysis to validate mitigation strategies",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Experience</h2>
        <p className="text-muted-foreground mb-12 max-w-3xl">
          My professional career history, freelance consulting, and independent deep-tech research environments.
        </p>

        {/* Professional Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-2 pb-2 border-b border-border/60">
            💼 Professional Experience
          </h3>
          <div className="space-y-8">
            {professionalExperiences.map((exp, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-border hover:border-primary/50 transition-colors bg-card/40"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-foreground">{exp.title}</h4>
                    <p className="text-accent font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-sm text-foreground bg-primary/20 px-3 py-1.5 rounded-full font-semibold border border-primary/40 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">📍 {exp.location}</p>

                <p className="text-muted-foreground mb-4 text-sm sm:text-base">{exp.description}</p>

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

        {/* Deep-Tech Infrastructure Labs Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-2 pb-2 border-b border-border/60">
            🧪 Deep-Tech Infrastructure Labs &amp; Research
          </h3>
          <div className="space-y-8">
            {labProjects.map((exp, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-border hover:border-primary/50 transition-colors bg-card/40"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-foreground">{exp.title}</h4>
                    <p className="text-accent font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-sm text-foreground bg-primary/20 px-3 py-1.5 rounded-full font-semibold border border-primary/40 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">📍 {exp.location}</p>

                <p className="text-muted-foreground mb-4 text-sm sm:text-base">{exp.description}</p>

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
      </div>
    </section>
  )
}
