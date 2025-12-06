import Link from "next/link"
import { FileText, Download, Github, ExternalLink, BookOpen } from "lucide-react"

export default function Publication() {
    return (
        <section id="publication" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-background/50 backdrop-blur-3xl -z-10"></div>
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-gradient">
                        Research & Publications
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Exploring the intersection of advanced mathematics, machine learning, and cybersecurity.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Featured Thesis Card */}
                    <div className="group relative bg-card/40 backdrop-blur-md rounded-2xl border border-white/10 p-1 hover:bg-card/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 lg:col-span-2 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative p-8 h-full flex flex-col md:flex-row gap-8">
                            <div className="flex-1 space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 bg-primary/20 rounded-xl text-primary ring-1 ring-primary/50">
                                        <BookOpen size={24} />
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                                        Bachelor's Thesis
                                    </span>
                                    <span className="text-muted-foreground text-sm flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
                                        Published 2025
                                    </span>
                                </div>

                                <Link href="https://github.com/Samsontesfamichael/personalportfolio/tree/main/thesis/Hybrid-IDS-5G#readme" target="_blank" className="block group/title">
                                    <h3 className="text-3xl font-bold mb-3 text-foreground group-hover/title:text-primary transition-colors">
                                        Machine Learning Intrusion Detection Using Statistical Feature Embeddings
                                    </h3>
                                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mt-2 group-hover/title:w-32 transition-all duration-300"></div>
                                </Link>

                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    Proposed a mathematically optimized anomaly-scoring method combining statistical feature embeddings (Euclidean & Mahalanobis) with Deep Learning classifier loss. Achieved <span className="text-foreground font-semibold">96.8% accuracy</span> and <span className="text-foreground font-semibold">4.3% False Positive Rate</span> on NSL-KDD dataset, outperforming standard ML baselines.
                                </p>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <Link
                                        // href="/thesis/_BSc_thesis.pdf"
                                        target="_blank"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
                                    >
                                        <Download size={18} /> Download PDF
                                    </Link>
                                    <Link
                                        href="https://github.com/Samsontesfamichael/personalportfolio/tree/main/thesis/Hybrid-IDS-5G"
                                        target="_blank"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-accent/5 transition-all hover:-translate-y-0.5"
                                    >
                                        <Github size={18} /> View Code
                                    </Link>
                                    <Link
                                        href="https://www.overleaf.com/read/pbxfgnhksdvz#3b3a49"
                                        target="_blank"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-accent/5 transition-all hover:-translate-y-0.5"
                                    >
                                        <FileText size={18} /> LaTeX Source
                                    </Link>
                                </div>
                            </div>

                            {/* Visual Decoration for Thesis */}
                            <div className="hidden md:flex w-1/3 items-center justify-center relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
                                <div className="relative z-10 bg-card/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl w-full rotate-3 transition-transform duration-500 group-hover:rotate-0">
                                    <div className="space-y-3 opacity-80">
                                        <div className="h-2 w-1/2 bg-muted rounded"></div>
                                        <div className="h-2 w-3/4 bg-muted rounded"></div>
                                        <div className="h-32 w-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/10 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-4xl font-bold text-primary mb-1">96.8%</div>
                                                <div className="text-xs text-muted-foreground uppercase tracking-wider">Accuracy</div>
                                            </div>
                                        </div>
                                        <div className="h-2 w-full bg-muted rounded"></div>
                                        <div className="h-2 w-5/6 bg-muted rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Technical Report Card */}
                    <div className="group relative bg-card/40 backdrop-blur-md rounded-2xl border border-white/10 p-8 hover:bg-card/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <div className="flex items-start justify-between mb-6">
                            <div className="p-3 bg-accent/10 rounded-xl text-accent ring-1 ring-accent/30">
                                <FileText size={24} />
                            </div>
                            <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold border border-accent/20">
                                Technical Report
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                            E-commerce Server Security Report
                        </h3>

                        <p className="text-muted-foreground mb-8 line-clamp-3 leading-relaxed">
                            A comprehensive technical report detailing server administration practices, security implementation, and vulnerability assessment for e-commerce environments. Covers server hardening, access control, and compliance with security standards.
                        </p>

                        <Link
                            href="/personalportfolio/E-commerce%20Server%20Security%20Report.pdf"
                            target="_blank"
                            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-card border border-border hover:border-accent/50 hover:bg-accent/5 transition-all group-hover:shadow-lg group-hover:shadow-accent/10"
                        >
                            <Download size={18} /> Download PDF
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
