import Link from "next/link"
import { FileText, Download } from "lucide-react"

export default function Publication() {
    return (
        <section id="publication" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12">Publications</h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="group relative bg-background/50 rounded-lg border border-border p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-background/80">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <FileText size={24} />
                            </div>
                            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                                Master's Thesis
                            </span>
                        </div>

                        <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                            Machine Learning Intrusion Detection Using Statistical Feature Embeddings
                        </h3>

                        <p className="text-muted-foreground mb-6 line-clamp-3">
                            Proposed a mathematically optimized anomaly-scoring method combining statistical feature embeddings (Euclidean & Mahalanobis) with Deep Learning classifier loss. Achieved 96.8% accuracy and 4.3% False Positive Rate on NSL-KDD dataset, outperforming standard ML baselines.
                        </p>

                        <div className="flex gap-3 mt-4">
                            <Link
                                href="/thesis/master.pdf"
                                target="_blank"
                                className="flex-1 py-2 text-sm font-medium text-accent border border-accent/30 rounded hover:bg-accent/10 transition-colors flex items-center justify-center gap-2"
                            >
                                PDF <Download size={16} />
                            </Link>
                            <Link
                                href="/thesis/master.tex"
                                target="_blank"
                                className="flex-1 py-2 text-sm font-medium text-foreground/80 border border-border rounded hover:bg-muted transition-colors flex items-center justify-center gap-2"
                            >
                                LaTeX Source <FileText size={16} />
                            </Link>
                        </div>
                    </div>

                    <div className="group relative bg-background/50 rounded-lg border border-border p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-background/80">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <FileText size={24} />
                            </div>
                            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                                Technical Report
                            </span>
                        </div>

                        <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                            E-commerce Server Security Report
                        </h3>

                        <p className="text-muted-foreground mb-6 line-clamp-3">
                            A comprehensive technical report detailing server administration practices, security implementation, and vulnerability assessment for e-commerce environments. Covers server hardening, access control, and compliance with security standards.
                        </p>

                        <Link
                            href="/E-commerce%20Server%20Security%20Report.pdf"
                            target="_blank"
                            className="mt-4 w-full py-2 text-sm font-medium text-accent border border-accent/30 rounded hover:bg-accent/10 transition-colors flex items-center justify-center gap-2"
                        >
                            Download PDF <Download size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
