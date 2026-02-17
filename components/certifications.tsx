const certifications = [
  {
    title: "Linux System Administrator Certification",
    issuer: "Professional Training",
    areas: "Linux server management, user administration, shell scripting, system monitoring, security",
    icon: "🐧",
    url: "https://drive.google.com/file/d/1FF9p17spgGYzk4JShTp27TwjynIv9bo0/view",
  },
  {
    title: "Windows Server Administrator Fundamental Certification",
    issuer: "Professional Training",
    areas: "Windows Server, Active Directory, DHCP, DNS, Group Policy, server management",
    icon: "🪟",
    url: "https://drive.google.com/file/d/1WqpaNYvW4l4eFgiRIsDHO7umAxFFiYvU/view",
  },
  {
    title: "Hostinger Web Server Administration",
    issuer: "Professional Training",
    areas: "Apache/Nginx, DNS, SSL/TLS, Linux server admin, performance tuning, security hardening",
    icon: "🌐",
  },
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    areas: "Networks, Risk Management, and Network Security",
    icon: "🎓",
  },
  {
    title: "CCNA Certification",
    issuer: "Cisco Certified Network Associate",
    areas: "Enterprise Network Design and Implementation",
    icon: "🌐",
  },
  {
    title: "Cloud Foundation Certification and Cloud Computing Architecture",
    issuer: "Great Learning Academy",
    areas: "Cloud Computing Platforms",
    icon: "🎓",
  },
]

export default function Certifications() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Certifications & Credentials</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border hover:border-accent/50 transition-colors bg-card/50"
            >
              <div className="text-3xl mb-4">{cert.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{cert.title}</h3>
              <p className="text-accent font-semibold mb-3">{cert.issuer}</p>
              <p className="text-sm text-muted-foreground mb-4">{cert.areas}</p>
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  View Certificate
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
