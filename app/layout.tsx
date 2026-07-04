import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://samsontesfamichael.github.io/personalportfolio"),
  title: {
    default: "Samson Tesfamichael | Cloud Platform & DevOps Engineer",
    template: "%s | Samson Tesfamichael",
  },
  description:
    "Portfolio of Samson Tesfamichael, a Cloud Platform & DevOps Engineer specializing in Proxmox/Ceph virtualization, declarative infrastructure automation, cloud-init provisioning, and hardened Linux systems engineering.",
  keywords: [
    "Samson Tesfamichael",
    "Cloud Platform Engineer",
    "DevOps Engineer",
    "Proxmox VE",
    "Ceph Distributed Storage",
    "KVM LXC Hypervisor",
    "Cloud-Init Automation",
    "Infrastructure as Code",
    "Linux Systems Administration",
    "High Availability Clustering",
    "Bash Python Automation",
    "Cisco CCNA",
    "Network Engineering",
    "Mekelle University",
    "Anabin H+ Germany",
  ],
  authors: [{ name: "Samson Tesfamichael" }],
  creator: "Samson Tesfamichael",
  applicationName: "Samson Tesfamichael Portfolio",
  verification: {
    google: "C-7OvogeZdkeE5KpOH4nJ-sbzNcPf4JapCl5bVaHVM8",
  },
  alternates: {
    canonical: "https://samsontesfamichael.github.io/personalportfolio",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://samsontesfamichael.github.io/personalportfolio",
    title: "Samson Tesfamichael | Cloud Platform & DevOps Engineer",
    description:
      "Portfolio of Samson Tesfamichael, a Cloud Platform & DevOps Engineer specializing in Proxmox/Ceph virtualization, infrastructure automation, and hardened Linux systems engineering.",
    siteName: "Samson Tesfamichael Portfolio",
    images: [
      {
        url: "/personalportfolio/og-image.png",
        width: 1200,
        height: 630,
        alt: "Samson Tesfamichael - Cloud Platform & DevOps Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samson Tesfamichael | Cloud Platform & DevOps Engineer",
    description:
      "Portfolio of Samson Tesfamichael, a Cloud Platform & DevOps Engineer specializing in Proxmox/Ceph virtualization, infrastructure automation, and hardened Linux systems engineering.",
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
    url: "https://samsontesfamichael.github.io/personalportfolio",
    image: "https://samsontesfamichael.github.io/personalportfolio/og-image.png",
    jobTitle: "Cloud Platform & DevOps Engineer",
    description:
      "Cloud Platform & DevOps Engineer specializing in Proxmox/Ceph virtualization, declarative infrastructure automation, cloud-init provisioning, and hardened Linux systems engineering.",
    alumniOf: {
      "@type": "Organization",
      name: "Mekelle University",
    },
    knowsAbout: [
      "Proxmox VE",
      "Ceph Distributed Storage",
      "KVM LXC Hypervisor",
      "Cloud-Init Automation",
      "Infrastructure as Code",
      "Bash Scripting",
      "Python Systems Automation",
      "Linux Administration",
      "Cisco CCNA",
      "High Availability Clustering",
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
    url: "https://samsontesfamichael.github.io/personalportfolio",
    description:
      "Portfolio of Samson Tesfamichael, Cloud Platform & DevOps Engineer — Proxmox/Ceph virtualization, infrastructure automation, and Linux systems engineering.",
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
