const skillCategories = [
  {
    category: "Virtualization, IaC & Systems Engineering",
    skills: [
      "Proxmox VE & KVM / LXC Hypervisors",
      "Virtualization & Hypervisor Management",
      "LVM-Thin & Linux Storage Management",
      "Software-Defined Networking (SDN) & VLAN Segmentation",
      "Proxmox Backup Server (PBS)",
      "Cloud-Init Automation",
      "Ansible & Declarative Provisioning",
      "Bash & Python Systems Automation",
      "Automated VM Lifecycle Orchestration",
      "Configuration Management & Git",
    ],
  },
  {
    category: "Systems & Networking",
    skills: [
      "Enterprise Linux / UNIX Administration",
      "Cisco Routing & Switching (CCNA Level)",
      "DNS Architecture",
      "SSL / TLS Hardening",
      "Stateful Firewalls (UFW / Iptables)",
      "Linux Bridges",
      "Static IP & Routing",
      "Network Performance Tuning",
    ],
  },
  {
    category: "Programming & Frameworks",
    skills: ["Python", "C/C++", "Java", "Node.js", "Express.js", "SQL", "NoSQL", "MongoDB", "Bash Script"],
  },
  {
    category: "System Resilience & Security",
    skills: [
      "Risk Analysis",
      "Threat Modelling",
      "Intrusion Detection (Snort/Suricata)",
      "SIEM (Wazuh/ELK)",
      "Vulnerability Assessment",
      "ISO 27001",
      "NIST Framework",
    ],
  },
  {
    category: "Machine Learning & AI",
    skills: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Neural Networks",
      "Deep Learning",
      "Predictive Modelling",
      "Model Evaluation & Tuning",
      "Feature Engineering",
      "Scikit-learn",
      "TensorFlow/Keras",
    ],
  },
  {
    category: "Data Science & Modelling",
    skills: [
      "Statistical Analysis",
      "Stochastic Processes",
      "System Simulation",
      "Data Visualization",
      "Pandas",
      "NumPy",
      "Jupyter Notebooks",
      "MATLAB",
      "ArcGIS",
    ],
  },
  {
    category: "Mathematical Skills",
    skills: [
      "Basic Arithmetic",
      "Fractions & Decimals",
      "Percentages",
      "Ratios & Proportions",
      "Basic Algebra",
      "Linear Equations",
      "Geometry",
      "Area & Perimeter",
      "Basic Statistics",
      "Basic Probability",
    ],
  },
  {
    category: "Operating Systems",
    skills: ["Linux/UNIX", "Windows", "MacOS"],
  },
  {
    category: "Languages",
    skills: ["Tigrigna (Native)", "Amharic ", "English ", "German (A1 - Learning)"],
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
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-medium border border-blue-300 hover:border-blue-500 hover:bg-blue-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
