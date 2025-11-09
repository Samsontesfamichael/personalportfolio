const certifications = [
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
              <p className="text-sm text-muted-foreground">{cert.areas}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
