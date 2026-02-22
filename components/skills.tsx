import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { mathSkillsData } from "@/lib/math-skills-data"

const skillCategories = [
  {
    category: "Help Desk & Support Tools",
    skills: ["Ticketing Systems (Jira, Zendesk)", "Remote Desktop", "Active Directory", "LDAP", "Windows Server", "System Imaging", "Hardware Troubleshooting", "Software Deployment"],
  },
  {
    category: "Security Tools & Platforms",
    skills: ["Splunk (SIEM)", "ELK Stack", "Snort (IDS/IPS)", "Suricata", "Wazuh", "Wireshark", "OpenBTS", "srsRAN", "Open5GS"],
  },
  {
    category: "Programming & Databases",
    skills: ["Python", "C/C++", "Java", "MATLAB", "Node.js", "Express.js", "SQL", "NoSQL", "MongoDB", "Bash Script"],
  },
  {
    category: "Operating Systems",
    skills: ["Windows", "Linux/UNIX", "MacOS"],
  },
  {
    category: "Frameworks & Standards",
    skills: ["ISO 27001", "NIST RMF", "PCI DSS", "HIPAA", "GDPR", "ISACA Risk IT"],
  },
  {
    category: "Network & Infrastructure",
    skills: [
      "Network Architecture",
      "2G/3G/4G/5G Networks",
      "Network Segmentation",
      "VPN",
      "Firewall Configuration",
    ],
  },
  {
    category: "Scientific & Data Tools",
    skills: ["Microsoft Excel", "Git/GitHub", "ArcGIS", "Jupyter Notebooks"],
  },
  {
    category: "Core Competencies",
    skills: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "Exploitation Tools",
      "Risk Analysis",
      "Threat Modeling",
      "Incident Response",
      "Compliance Audit",
    ],
  },
  {
    category: "Mathematical Skills",
    // We will handle rendering differently for this category using mathSkillsData
    skills: mathSkillsData.map(s => s.title),
    isMath: true
  },
  {
    category: "Languages",
    skills: ["Tigrigna (Native)", "Amharic ", "English "],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Technical Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6 rounded-lg border border-border bg-card/50">
              <h3 className="text-lg font-bold text-accent mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.isMath ? (
                  mathSkillsData.map((skill, i) => (
                    <Dialog key={i}>
                      <DialogTrigger asChild>
                        <button
                          className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-medium border border-blue-300 hover:border-blue-500 hover:bg-blue-200 transition-colors cursor-pointer text-left"
                        >
                          {skill.title}
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>{skill.title}</DialogTitle>
                          <DialogDescription>
                            {skill.description}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="mt-4">
                          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                            <code className="language-python">{skill.code}</code>
                          </pre>
                        </div>
                        <div className="mt-4 flex justify-end">
                          <a
                            href={`https://github.com/Samsontesfamichael/personalportfolio/tree/main/math-topics/${skill.folderName}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                          >
                            View Folder on GitHub
                          </a>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))
                ) : (
                  category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-medium border border-blue-300 hover:border-blue-500 hover:bg-blue-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
