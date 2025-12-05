export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-sm text-muted-foreground">© {currentYear} Samson Tesfamichael. All rights reserved.</p>
            <a href="/LICENSE.txt" target="_blank" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              MIT License
            </a>
          </div>
          <p className="text-sm text-muted-foreground">Designed & built with passion for cybersecurity</p>
        </div>
      </div>
    </footer>
  )
}
