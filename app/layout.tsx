import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://samsontesfamichael.github.io/personal-portfolio"),
  title: {
    default: "Samson Tesfamichael | Cybersecurity Researcher",
    template: "%s | Samson Tesfamichael",
  },
  description:
    "Portfolio of Samson Tesfamichael, a Cybersecurity Researcher & IT Graduate specializing in network security, penetration testing, and advanced threat analysis.",
  keywords: [
    "Samson Tesfamichael",
    "Cybersecurity Researcher",
    "Network Security",
    "Penetration Testing",
    "IT Graduate",
    "Portfolio",
    "Ethical Hacking",
    "Security Analyst",
    "Intrusion Detection System",
    "IDS",
    "Machine Learning Security",
    "Python Security",
    "Splunk",
    "Snort",
    "Suricata",
    "SIEM",
    "Vulnerability Assessment",
    "Risk Management",
    "ISO 27001",
    "NIST Framework",
    "5G Security",
    "Network Architecture",
    "Threat Analysis",
    "Cyber Security Consultant",
    "Information Technology",
    "Mekelle University",
  ],
  authors: [{ name: "Samson Tesfamichael" }],
  creator: "Samson Tesfamichael",
  applicationName: "Samson Tesfamichael Portfolio",
  verification: {
    google: "C-7OvogeZdkeE5KpOH4nJ-sbzNcPf4JapCl5bVaHVM8",
  },
  alternates: {
    canonical: "https://samsontesfamichael.github.io/personal-portfolio",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://samsontesfamichael.github.io/personal-portfolio",
    title: "Samson Tesfamichael | Cybersecurity Researcher",
    description:
      "Portfolio of Samson Tesfamichael, showcasing projects in network security, penetration testing, and threat analysis.",
    siteName: "Samson Tesfamichael Portfolio",
    images: [
      {
        url: "/personal-portfolio/og-image.png",
        width: 1200,
        height: 630,
        alt: "Samson Tesfamichael - Cybersecurity Researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samson Tesfamichael | Cybersecurity Researcher",
    description:
      "Portfolio of Samson Tesfamichael, showcasing projects in network security, penetration testing, and threat analysis.",
    creator: "@SamsonTesfamichael",
    images: ["/personal-portfolio/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/personalportfolio/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/personalportfolio/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/personalportfolio/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Samson Tesfamichael",
    url: "https://samsontesfamichael.github.io/personal-portfolio",
    image: "https://samsontesfamichael.github.io/personal-portfolio/og-image.png",
    jobTitle: "Cybersecurity Researcher",
    description:
      "IT Graduate specializing in network security, penetration testing, and advanced threat analysis",
    alumniOf: {
      "@type": "Organization",
      name: "Mekelle University",
    },
    knowsAbout: [
      "Cybersecurity",
      "Network Security",
      "Penetration Testing",
      "Intrusion Detection Systems",
      "Machine Learning Security",
      "Python",
      "SIEM",
      "Threat Analysis",
    ],
    sameAs: [
      "https://github.com/Samsontesfamichael",
      "https://linkedin.com/in/samsontesfamichael",
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Samson Tesfamichael Portfolio",
    url: "https://samsontesfamichael.github.io/personal-portfolio",
    description:
      "Portfolio showcasing cybersecurity research, projects, and professional experience",
    author: {
      "@type": "Person",
      name: "Samson Tesfamichael",
    },
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
