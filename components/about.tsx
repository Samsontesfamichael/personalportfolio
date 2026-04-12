export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Sidebar Navigation */}
          <div className="hidden md:block">
            <div className="border-l-2 border-primary pl-6 space-y-8">
              <div>
                <h3 className="font-mono text-sm text-muted-foreground mb-2">Sections</h3>
                <p className="text-lg font-semibold text-foreground">About Me</p>
              </div>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Profile</p>
                <p>Location</p>
                <p>Expertise</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="space-y-6">
              <div>
                <p className="text-muted-foreground text-sm font-mono mb-4">📍 Mekelle, Tigray, Ethiopia</p>
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
              </div>

              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  I'm <strong>Samson Tesfamichael</strong>, an Information Technology graduate from Mekelle Institute of Technology.
                  Specializing in machine learning, statistical modelling, and data‑driven system analysis, I have a strong foundation in computational methods and predictive analytics.
                  My expertise includes developing simulations and applying machine learning to complex problems, particularly in sustainable food and agricultural systems.
                </p>

                <p>
                  My technical toolkit includes Python, MATLAB, and SQL, alongside scientific tools like Excel, ArcGIS, and Jupyter Notebooks.
                  I am driven by a passion for solving global challenges through mathematical optimization and data science.
                </p>

                <p>
                  I bring a versatile skillset ranging from system administration to data analysis, driven by a passion for solving complex problems through technology.
                </p>

                <div className="pt-4 grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-background/50 border border-border">
                    <p className="text-xs text-foreground/70 font-mono">Years Experience</p>
                    <p className="text-lg font-bold text-accent">3+</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background/50 border border-border">
                    <p className="text-xs text-foreground/70 font-mono">Certifications</p>
                    <p className="text-lg font-bold text-accent">4+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
