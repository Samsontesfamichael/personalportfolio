const skillCategories = [
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
    skills: [
      { name: "Linear Algebra", link: "https://github.com/Samsontesfamichael/personalportfolio/tree/main/math-topics/01-linear-algebra" },
      { name: "Vectors & Matrices", link: "https://github.com/Samsontesfamichael/personalportfolio/tree/main/math-topics/02-vectors-and-matrices" },
      { name: "Eigenvalues & Eigenvectors", link: "https://github.com/Samsontesfamichael/personalportfolio/tree/main/math-topics/03-eigenvalues-eigenvectors" },
      { name: "Probability & Statistics", link: "https://github.com/Samsontesfamichael/personalportfolio/tree/main/math-topics/04-probability-statistics" },
      { name: "Bayes' Theorem", link: "https://github.com/Samsontesfamichael/personalportfolio/tree/main/math-topics/05-bayes-theorem" },
      { name: "Hypothesis Testing", link: "https://github.com/Samsontesfamichael/personalportfolio/tree/main/math-topics/06-hypothesis-testing" },
      { name: "Calculus", link: "https://github.com/Samsontesfamichael/personalportfolio/tree/main/math-topics/07-calculus" },
      { name: "Gradient Descent", link: "https://github.com/Samsontesfamichael/personalportfolio/tree/main/math-topics/08-gradient-descent" },
      { name: "Optimization", link: "https://github.com/Samsontesfamichael/personalportfolio/tree/main/math-topics/09-optimization" },
      { name: "Graph Theory", link: "https://github.com/Samsontesfamichael/personalportfolio/tree/main/math-topics/10-graph-theory" },
      { name: "Combinatorics", link: "https://github.com/Samsontesfamichael/personalportfolio/tree/main/math-topics/11-combinatorics" },
      { name: "Boolean Algebra", link: "https://github.com/Samsontesfamichael/personalportfolio/tree/main/math-topics/12-boolean-algebra" },
      { name: "Modular Arithmetic", link: "https://github.com/Samsontesfamichael/personalportfolio/tree/main/math-topics/13-modular-arithmetic" },
      { name: "Convex Optimization", link: "https://github.com/Samsontesfamichael/personalportfolio/tree/main/math-topics/14-convex-optimization" },
      { name: "Signal Processing", link: "https://github.com/Samsontesfamichael/personalportfolio/tree/main/math-topics/15-signal-processing" },
      { name: "Markov Chains", link: "https://github.com/Samsontesfamichael/personalportfolio/tree/main/math-topics/16-markov-chains" },
      { name: "Information Theory", link: "https://github.com/Samsontesfamichael/personalportfolio/tree/main/math-topics/17-information-theory" },
    ],
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
                {category.skills.map((skill, i) => {
                  if (typeof skill === 'string') {
                    return (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-medium border border-blue-300 hover:border-blue-500 hover:bg-blue-200 transition-colors"
                      >
                        {skill}
                      </span>
                    )
                  } else {
                    return (
                      <a
                        key={i}
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-medium border border-blue-300 hover:border-blue-500 hover:bg-blue-200 transition-colors cursor-pointer"
                      >
                        {skill.name}
                      </a>
                    )
                  }
                })}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
