import Link from "next/link"
import { FileText, Download } from "lucide-react"

export default function Publication() {
    return (
        <section id="publication" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12">Publications</h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="group relative bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <FileText size={24} />
                            </div>
                            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                                Technical Report
                            </span>
                        </div>

                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                            E-commerce Server Security Report
                        </h3>

                        <p className="text-muted-foreground mb-6 line-clamp-3">
                            A comprehensive technical report detailing server administration practices, security implementation, and vulnerability assessment for e-commerce environments. Covers server hardening, access control, and compliance with security standards.
                        </p>

                        <Link
                            href="/E-commerce%20Server%20Security%20Report.pdf"
                            target="_blank"
                            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                        >
                            Download PDF <Download size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
