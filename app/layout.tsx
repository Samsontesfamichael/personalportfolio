import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
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
  ],
  authors: [{ name: "Samson Tesfamichael" }],
  creator: "Samson Tesfamichael",
  verification: {
    google: "C-7OvogeZdkeE5KpOH4nJ-sbzNcPf4JapCl5bVaHVM8",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://samsontesfamichael.github.io/personal-portfolio",
    title: "Samson Tesfamichael | Cybersecurity Researcher",
    description:
      "Portfolio of Samson Tesfamichael, showcasing projects in network security, penetration testing, and threat analysis.",
    siteName: "Samson Tesfamichael Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samson Tesfamichael | Cybersecurity Researcher",
    description:
      "Portfolio of Samson Tesfamichael, showcasing projects in network security, penetration testing, and threat analysis.",
    creator: "@SamsonTesfamichael",
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
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
