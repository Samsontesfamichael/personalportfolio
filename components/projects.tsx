"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { TechDetailModal } from "./tech-detail-modal"

const projects = [
  {
    title: "Proxmox Virtualization & Cluster Administration",
    description:
      "Enterprise-grade virtualization lab featuring a 3-node HA cluster, Ceph distributed storage, and automated backup/DR workflows.",
    tags: ["Proxmox VE", "KVM", "LXC", "Ceph Storage", "Virtualization"],
    period: "2024",
    image: "/personalportfolio/proxmox-lab.png",
    details: {
      overview:
        "Designed and implemented a high-availability virtualization platform using Proxmox VE. The lab simulates a production environment with clustered compute nodes and distributed storage.",
      objectives: [
        "Deploy a 3-node Proxmox VE cluster with high availability",
        "Implement Ceph distributed storage for VM disk images",
        "Configure automated backup and disaster recovery using PBS",
        "Test live migration and failover performance",
      ],
      techStack: [
        "Proxmox VE - Virtualization Management",
        "KVM/LXC - Hypervisor technologies",
        "Ceph - Distributed storage system",
        "PBS - Proxmox Backup Server",
        "Networking - Linux bridges, VLANs",
      ],
      outcomes: [
        "Achieved 100% VM uptime during simulated node failures",
        "Configured storage replication with zero data loss benchmarks",
        "Automated backup schedules with 30-day retention policies",
        "Documented full HLD/LLD for the infrastructure",
      ],
      screenshots: ["/personalportfolio/proxmox-lab.png"],
    },
  },
  {
    title: "Hostinger Web Server Administration",
    description:
      "Production deployment and administration of an e-commerce platform on cloud hosting, focusing on performance and security hardening.",
    tags: ["Linux", "Nginx/Apache", "MySQL", "SSL", "Security Hardening"],
    period: "2023 – Present",
    image: "/personalportfolio/web-admin.png",
    details: {
      overview:
        "Managed the full stack deployment of a professional e-commerce website on Hostinger Cloud. Focus was on server-side performance and multi-layer security.",
      objectives: [
        "Deploy and configure Linux-based web servers",
        "Implement SSL/TLS certificates and DNS management",
        "Optimize PHP and MySQL for high traffic performance",
        "Hardened server security via firewalls and file permissions",
      ],
      techStack: [
        "Hostinger Cloud - Infrastructure provider",
        "Nginx/Apache - Web server software",
        "MySQL/MariaDB - Database management",
        "PHP - Server-side scripting",
        "SSL/TLS - Secure communication",
      ],
      outcomes: [
        "Improved page load speed by 45% through optimization",
        "Successfully implemented automated weekly backups",
        "Passed security audits with zero high-risk findings",
        "Maintained 99.9% uptime during peak promotional events",
      ],
      screenshots: ["/personalportfolio/web-admin.png"],
    },
  },
  {
    title: "Secure Network Architecture Simulation",
    description:
      "Designed and implemented a comprehensive home lab environment simulating 2G/3G/4G/5G network architectures using OpenBTS, srsRAN, and Open5GS for security research.",
    tags: ["OpenBTS", "srsRAN", "Open5GS", "Network Security", "Linux"],
    period: "2024",
    image: "/personalportfolio/network-architecture-lab.jpg",
    details: {
      overview:
        "A comprehensive home lab project focused on simulating cellular network architectures for security research and testing.",
      objectives: [
        "Simulate 2G/3G/4G/5G network protocols",
        "Test network security vulnerabilities",
        "Develop threat detection capabilities",
        "Implement secure communication protocols",
      ],
      techStack: [
        "OpenBTS - Open source cellular network implementation",
        "srsRAN - Software radio access network",
        "Open5GS - 5G core network solution",
        "Wireshark - Network protocol analyzer",
        "Linux (Ubuntu/CentOS) - Operating system",
      ],
      outcomes: [
        "Successfully deployed multi-generation network simulation",
        "Identified and documented 15+ network security vulnerabilities",
        "Created testing framework for protocol validation",
        "Produced comprehensive security analysis report",
      ],
      screenshots: ["/personalportfolio/5g-network-topology.jpg", "/personalportfolio/network-traffic-analysis.jpg"],
    },
  },
  {
    title: "SIEM & IDS/IPS Implementation",
    description:
      "Deployed and configured Splunk SIEM with Snort and Suricata IDS/IPS systems for continuous network monitoring, threat detection, and security event correlation.",
    tags: ["Splunk", "Snort", "Suricata", "SIEM", "Threat Detection"],
    period: "2024",
    image: "/personalportfolio/siem-dashboard.jpg",
    details: {
      overview:
        "Enterprise-grade security monitoring infrastructure with real-time threat detection and incident response capabilities.",
      objectives: [
        "Implement centralized security monitoring",
        "Deploy multi-layer threat detection",
        "Enable real-time alert correlation",
        "Create automated response workflows",
      ],
      techStack: [
        "Splunk Enterprise - SIEM platform",
        "Snort IDS - Network intrusion detection",
        "Suricata IPS - Network intrusion prevention",
        "ELK Stack - Log aggregation",
        "Python - Custom alert rules",
      ],
      outcomes: [
        "Reduced MTTR from 4 hours to 15 minutes",
        "Detected and blocked 500+ suspicious activities",
        "Created 50+ custom correlation rules",
        "Achieved 99.9% system uptime",
      ],
      screenshots: ["/personalportfolio/splunk-dashboard.jpg", "/personalportfolio/threat-alerts.jpg"],
    },
  },
  {
    title: "Automated Vulnerability Assessment Tool",
    description:
      "Developed Python-based automation scripts for comprehensive vulnerability scanning, compliance reporting, and security monitoring across enterprise environments.",
    tags: ["Python", "Vulnerability Assessment", "Automation", "Compliance"],
    period: "2023-2024",
    image: "/personalportfolio/vulnerability-scanner.jpg",
    details: {
      overview:
        "Custom Python tool for automated vulnerability discovery, assessment, and reporting with compliance validation.",
      objectives: [
        "Automate vulnerability scanning",
        "Generate compliance reports",
        "Track remediation progress",
        "Integrate with ticketing systems",
      ],
      techStack: [
        "Python 3.9+ - Core development",
        "Nessus API - Vulnerability scanning",
        "OpenVAS - Open vulnerability assessment",
        "Pandas - Data analysis",
        "SQLAlchemy - Database ORM",
      ],
      outcomes: [
        "Scanned 500+ systems monthly",
        "Reduced assessment time by 70%",
        "Generated automated compliance reports",
        "Identified and tracked 2000+ vulnerabilities",
      ],
      screenshots: ["/personalportfolio/vulnerability-report.jpg", "/personalportfolio/compliance-dashboard.jpg"],
    },
  },
  {
    title: "Healthcare System Security Audit",
    description:
      "Conducted comprehensive security audit and hardening of Luna HealthCare System, implementing encryption protocols and access controls to meet HIPAA and GDPR requirements.",
    tags: ["Healthcare Security", "HIPAA", "GDPR", "Penetration Testing"],
    period: "2024",
    image: "/personalportfolio/healthcare-security.jpg",
    details: {
      overview:
        "Complete security assessment and remediation of healthcare system with focus on regulatory compliance and patient data protection.",
      objectives: [
        "Ensure HIPAA compliance",
        "Implement GDPR data protection",
        "Conduct penetration testing",
        "Harden system architecture",
      ],
      techStack: [
        "Burp Suite - Web application testing",
        "Metasploit - Penetration testing",
        "OpenSSL - Encryption implementation",
        "Active Directory - Access control",
        "SQL Server - Database encryption",
      ],
      outcomes: [
        "Achieved full HIPAA compliance",
        "Zero critical vulnerabilities identified in retest",
        "Implemented end-to-end encryption",
        "Reduced security risk by 85%",
      ],
      screenshots: ["/personalportfolio/security-audit-report.jpg", "/personalportfolio/compliance-checklist.jpg"],
    },
  },
  {
    title: "Cloud Security Consulting",
    description:
      "Provided security consulting services to telecom and software development firms on cloud infrastructure hardening, network segmentation, and threat mitigation strategies.",
    tags: ["Cloud Security", "Risk Management", "Network Security", "Consulting"],
    period: "2021-2024",
    image: "/personalportfolio/cloud-security-consulting.jpg",
    details: {
      overview:
        "Strategic security consulting across multiple organizations focusing on cloud infrastructure security and risk management.",
      objectives: [
        "Assess cloud security posture",
        "Design secure architectures",
        "Implement threat mitigation",
        "Train security teams",
      ],
      techStack: [
        "AWS - Cloud infrastructure",
        "Azure - Cloud services",
        "GCP - Cloud platform",
        "Terraform - Infrastructure as code",
        "Docker/Kubernetes - Container security",
      ],
      outcomes: [
        "Consulted for 15+ organizations",
        "Reduced cloud incidents by 60%",
        "Implemented security best practices",
        "Trained 100+ security professionals",
      ],
      screenshots: ["/personalportfolio/cloud-architecture.jpg", "/personalportfolio/security-framework.jpg"],
    },
  },
  {
    title: "RESTful API Security Implementation",
    description:
      "Designed and implemented secure RESTful APIs with authentication, access control, and data encryption using Node.js, Express.js, and MongoDB for web applications.",
    tags: ["Node.js", "Express.js", "MongoDB", "API Security", "Authentication"],
    period: "2020-2024",
    image: "/personalportfolio/api-security-implementation.jpg",
    details: {
      overview:
        "Secure API development framework with comprehensive authentication, authorization, and encryption mechanisms. Implemented OAuth 2.0, JWT tokens, role-based access control, and request validation across multiple production applications.",
      objectives: [
        "Implement OAuth 2.0 authentication with refresh tokens",
        "Add role-based access control (RBAC) for fine-grained permissions",
        "Encrypt sensitive data at rest and in transit",
        "Implement rate limiting and DDoS protection",
        "Validate and sanitize all API inputs",
      ],
      techStack: [
        "Node.js - JavaScript runtime environment",
        "Express.js - Web application framework",
        "MongoDB - NoSQL database",
        "JWT (jsonwebtoken) - Token authentication",
        "bcryptjs - Password hashing and comparison",
        "Helmet.js - HTTP security headers",
        "Joi - Data validation and schema description",
        "Redis - Caching and rate limiting",
      ],
      outcomes: [
        "Built APIs serving 100k+ requests daily with zero security breaches",
        "Implemented 99.95% API availability with proper error handling",
        "Reduced response time by 40% through caching and optimization",
        "Successfully authenticated 500k+ users with secure token management",
        "Prevented 99% of injection attacks through input validation",
      ],
      screenshots: [
        "/personalportfolio/api-security-implementation.jpg",
        "/personalportfolio/api-authentication-flow.jpg",
        "/personalportfolio/api-security-testing.jpg",
        "/personalportfolio/api-access-control.jpg",
      ],
    },
  },
  {
    title: "Enterprise Django Backend System",
    description:
      "Architected and developed a production-grade Django backend system with REST APIs, real-time communication, asynchronous task processing, and multi-cloud storage integration serving 100k+ daily users.",
    tags: ["Django", "Python", "PostgreSQL", "Celery", "Redis", "AWS"],
    period: "2020-2024",
    image: "/personalportfolio/api-security-implementation.jpg",
    details: {
      overview:
        "Led the development of a highly scalable Django backend system featuring REST APIs, WebSocket real-time communication, asynchronous task pipelines, and cloud-based storage across AWS, Azure, and GCP. Implemented comprehensive security, caching, and performance optimization strategies.",
      objectives: [
        "Build scalable REST APIs with Django REST Framework",
        "Implement real-time features using Django Channels and WebSockets",
        "Develop asynchronous task pipelines with Celery and Redis",
        "Integrate multi-cloud storage solutions (AWS S3, Azure Blob, GCP)",
        "Ensure production-grade security and performance optimization",
      ],
      techStack: [
        "Django - High-level Python web framework",
        "Django REST Framework - Powerful REST API toolkit",
        "PostgreSQL - Advanced relational database",
        "Celery - Distributed task queue system",
        "Redis - In-memory caching and message broker",
        "Django Channels - WebSocket and async support",
        "AWS S3 - Cloud object storage",
        "Azure Blob Storage - Microsoft cloud storage",
        "Google Cloud Storage - GCP storage solution",
        "Docker - Containerization platform",
      ],
      outcomes: [
        "Architected APIs serving 100k+ daily requests with 99.95% uptime",
        "Reduced API response time by 60% through Redis caching",
        "Implemented real-time notifications for 500k+ active users",
        "Processed 1M+ background tasks monthly via Celery pipelines",
        "Managed 10TB+ of files across multi-cloud storage providers",
        "Achieved zero security breaches with JWT authentication and CORS",
      ],
      screenshots: [
        "/personalportfolio/cloud-architecture.jpg",
        "/personalportfolio/api-authentication-flow.jpg",
        "/personalportfolio/network-traffic-analysis.jpg",
        "/personalportfolio/cloud-security-consulting.jpg",
      ],
    },
  },
]

const techDetails = {
  "Node.js": {
    name: "Node.js",
    description:
      "A JavaScript runtime built on Chrome's V8 JavaScript engine that executes JavaScript code outside of a web browser.",
    logo: "/personalportfolio/tech/nodejs-logo.jpg",
    usage:
      "Used as the backend runtime environment for the API server, handling concurrent requests and asynchronous operations efficiently.",
    features: [
      "Non-blocking, event-driven I/O model",
      "NPM package manager with 1M+ packages",
      "Built-in support for streams and buffers",
      "Excellent for real-time applications",
    ],
    category: "Runtime",
  },
  "Express.js": {
    name: "Express.js",
    description:
      "A minimal and flexible Node.js web application framework providing robust features for web and mobile applications.",
    logo: "/personalportfolio/tech/expressjs-logo.jpg",
    usage:
      "The core framework for routing API endpoints, handling HTTP requests/responses, and managing middleware for authentication and validation.",
    features: [
      "Minimalist web framework with great flexibility",
      "Middleware support for extensibility",
      "Powerful routing system",
      "RESTful API development ease",
    ],
    category: "Framework",
  },
  MongoDB: {
    name: "MongoDB",
    description: "A popular NoSQL document database that stores data in flexible, JSON-like BSON format.",
    logo: "/personalportfolio/tech/mongodb-logo.jpg",
    usage:
      "Primary data storage for user profiles, API configurations, and security logs. Provides schema flexibility for evolving requirements.",
    features: [
      "Flexible document-based data model",
      "Horizontal scalability with sharding",
      "Built-in replication for high availability",
      "Powerful query language and aggregation pipeline",
    ],
    category: "Database",
  },
  JWT: {
    name: "JWT (JSON Web Token)",
    description: "A compact, self-contained way of securely transmitting information between parties as a JSON object.",
    logo: "/personalportfolio/tech/jwt-logo.jpg",
    usage:
      "Implements stateless authentication. Users receive a token upon login that is sent with each request to verify identity without server-side sessions.",
    features: [
      "Stateless authentication mechanism",
      "Self-contained, no server session required",
      "Can include user claims and roles",
      "Digitally signed for tamper detection",
    ],
    category: "Security",
  },
  bcryptjs: {
    name: "bcryptjs",
    description: "A password hashing library that uses the bcrypt algorithm to securely hash and compare passwords.",
    logo: "/personalportfolio/tech/bcrypt-logo.jpg",
    usage:
      "Hashes user passwords before storage and verifies passwords during authentication. Includes built-in salt generation for additional security.",
    features: [
      "Adaptive hashing with configurable rounds",
      "Automatic salt generation",
      "Resistant to rainbow table attacks",
      "Computationally expensive by design",
    ],
    category: "Security",
  },
  "Helmet.js": {
    name: "Helmet.js",
    description:
      "Express.js middleware that secures apps by setting various HTTP headers to protect against well-known security vulnerabilities.",
    logo: "/personalportfolio/tech/helmet-logo.jpg",
    usage:
      "Automatically sets security headers like Content-Security-Policy, X-Frame-Options, and X-XSS-Protection to prevent common attacks.",
    features: [
      "Sets HTTP security headers automatically",
      "Protects against XSS, clickjacking, and MIME sniffing",
      "Configurable for specific security needs",
      "Zero-config default security",
    ],
    category: "Security",
  },
  Joi: {
    name: "Joi",
    description: "A powerful schema description language and data validator for JavaScript/Node.js.",
    logo: "/personalportfolio/tech/joi-logo.jpg",
    usage:
      "Validates all incoming API request data against defined schemas. Ensures only properly formatted data is processed.",
    features: [
      "Powerful schema validation language",
      "Detailed error messages",
      "Async validation support",
      "Custom validation rules",
    ],
    category: "Validation",
  },
  Redis: {
    name: "Redis",
    description: "An in-memory data structure store used as a database, cache, and message broker.",
    logo: "/personalportfolio/tech/redis-logo.jpg",
    usage:
      "Implements rate limiting to prevent abuse and caching to improve API response times by storing frequently accessed data.",
    features: [
      "Ultra-fast in-memory operations",
      "Supports various data structures",
      "Automatic expiration of keys",
      "Distributed caching capabilities",
    ],
    category: "Cache/Rate Limiting",
  },
  Django: {
    name: "Django",
    description: "A high-level Python web framework that encourages rapid development and clean, pragmatic design.",
    logo: "/personalportfolio/tech/django-logo.jpg",
    usage:
      "Core framework for building the backend application, handling routing, ORM, authentication, and admin interface. Provides a batteries-included approach for web development.",
    features: [
      "Built-in ORM for database operations",
      "Automatic admin interface generation",
      "Robust security features (CSRF, XSS, SQL injection protection)",
      "Scalable and maintainable architecture",
    ],
    category: "Framework",
  },
  "Django REST Framework": {
    name: "Django REST Framework",
    description: "A powerful and flexible toolkit for building Web APIs in Django.",
    logo: "/personalportfolio/tech/django-rest-framework-logo.jpg",
    usage:
      "Provides serialization, authentication, permissions, and viewsets for building RESTful APIs. Handles request/response parsing, content negotiation, and API documentation.",
    features: [
      "Serialization for complex data types",
      "Authentication (JWT, OAuth, Token)",
      "Powerful browsable API interface",
      "Flexible permissions and throttling",
    ],
    category: "API Framework",
  },
  PostgreSQL: {
    name: "PostgreSQL",
    description: "A powerful, open-source object-relational database system with strong ACID compliance.",
    logo: "/personalportfolio/tech/postgresql-logo.jpg",
    usage:
      "Primary relational database for storing application data with support for complex queries, transactions, and data integrity. Handles user data, relationships, and business logic.",
    features: [
      "ACID compliance for data integrity",
      "Advanced indexing and query optimization",
      "Support for JSON and complex data types",
      "Robust replication and backup capabilities",
    ],
    category: "Database",
  },
  Celery: {
    name: "Celery",
    description: "A distributed task queue system for processing asynchronous jobs in Python applications.",
    logo: "/personalportfolio/tech/celery-logo.jpg",
    usage:
      "Handles background tasks such as email sending, report generation, data processing, and scheduled jobs. Integrates with Redis as message broker for task distribution.",
    features: [
      "Asynchronous task execution",
      "Scheduled and periodic tasks",
      "Task retries and error handling",
      "Distributed processing across workers",
    ],
    category: "Task Queue",
  },
  "Django Channels": {
    name: "Django Channels",
    description: "Extends Django to handle WebSockets, HTTP2, and other asynchronous protocols.",
    logo: "/personalportfolio/tech/django-channels-logo.jpg",
    usage:
      "Enables real-time features like chat, notifications, and live updates through WebSocket connections. Handles both HTTP and WebSocket protocols in a unified way.",
    features: [
      "WebSocket support for real-time communication",
      "Asynchronous request handling",
      "Channel layers for message passing",
      "Integration with Django authentication",
    ],
    category: "Real-time",
  },
  "AWS S3": {
    name: "AWS S3",
    description: "Amazon Simple Storage Service - scalable object storage in the cloud.",
    logo: "/personalportfolio/tech/aws-s3-logo.jpg",
    usage:
      "Stores and serves static files, media uploads, backups, and large datasets. Provides CDN integration for fast global content delivery.",
    features: [
      "Unlimited scalable storage",
      "99.999999999% durability",
      "Versioning and lifecycle policies",
      "Integration with CloudFront CDN",
    ],
    category: "Cloud Storage",
  },
  "Azure Blob Storage": {
    name: "Azure Blob Storage",
    description: "Microsoft's object storage solution for the cloud, optimized for storing massive amounts of unstructured data.",
    logo: "/personalportfolio/tech/azure-blob-logo.jpg",
    usage:
      "Alternative cloud storage for files, images, videos, and backups. Provides geo-redundancy and integration with Azure services.",
    features: [
      "Hot, cool, and archive storage tiers",
      "Geo-redundant replication",
      "Blob versioning and soft delete",
      "Integration with Azure CDN",
    ],
    category: "Cloud Storage",
  },
  "Google Cloud Storage": {
    name: "Google Cloud Storage",
    description: "Unified object storage for developers and enterprises, from live applications to cloud archival.",
    logo: "/personalportfolio/tech/helmet-logo.jpg",
    usage:
      "Multi-cloud storage solution for application data, media files, and analytics. Provides global edge caching and strong consistency.",
    features: [
      "Multi-regional storage options",
      "Strong consistency guarantees",
      "Object lifecycle management",
      "Integration with Google Cloud CDN",
    ],
    category: "Cloud Storage",
  },
  Docker: {
    name: "Docker",
    description: "A platform for developing, shipping, and running applications in containers.",
    logo: "/personalportfolio/tech/jwt-logo.jpg",
    usage:
      "Containerizes the Django application and its dependencies for consistent deployment across development, staging, and production environments.",
    features: [
      "Isolated application environments",
      "Reproducible builds and deployments",
      "Microservices architecture support",
      "Easy scaling and orchestration",
    ],
    category: "DevOps",
  },
}

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [selectedTech, setSelectedTech] = useState<(typeof techDetails)[keyof typeof techDetails] | null>(null)
  const [techModalOpen, setTechModalOpen] = useState(false)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Research & Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg border border-border hover:border-accent/50 transition-all bg-background/50 hover:bg-background/80 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-40 overflow-hidden bg-background/30">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={160}
                  className={`w-full h-full object-cover transition-transform duration-500 ${hoveredIndex === index ? "scale-110" : "scale-100"
                    }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors flex-1">
                    {project.title}
                  </h3>
                  <span className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded whitespace-nowrap ml-2">
                    {project.period}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2.5 py-1 rounded-full bg-primary/10 text-accent border border-primary/20 transition-all duration-300 ${hoveredIndex === index ? "bg-primary/20 border-primary/40 scale-105" : ""
                        }`}
                      style={{
                        transitionDelay: `${i * 30}ms`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="mt-4 w-full py-2 text-sm font-medium text-accent border border-accent/30 rounded hover:bg-accent/10 transition-colors">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-background border border-border rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-background/80 rounded transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Project overview */}
              <div>
                <h3 className="text-lg font-semibold text-accent mb-2">Overview</h3>
                <p className="text-muted-foreground leading-relaxed">{selectedProject.details.overview}</p>
              </div>

              {/* Objectives */}
              <div>
                <h3 className="text-lg font-semibold text-accent mb-3">Objectives</h3>
                <ul className="space-y-2">
                  {selectedProject.details.objectives.map((objective, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-lg font-semibold text-accent mb-3">Tech Stack</h3>
                <div className="space-y-2">
                  {selectedProject.details.techStack.map((tech, i) => {
                    const techName = tech.split(" - ")[0]
                    const hasTechDetail = techName in techDetails
                    return (
                      <div
                        key={i}
                        onClick={() => {
                          if (hasTechDetail) {
                            setSelectedTech(techDetails[techName as keyof typeof techDetails])
                            setTechModalOpen(true)
                          }
                        }}
                        className={`flex items-start gap-3 p-3 rounded ${hasTechDetail
                          ? "hover:bg-primary/10 cursor-pointer transition-colors border border-transparent hover:border-primary/30"
                          : ""
                          }`}
                      >
                        <span className="text-primary font-bold">▸</span>
                        <div className="flex-1">
                          <p className="text-muted-foreground">{tech}</p>
                          {hasTechDetail && <p className="text-xs text-accent/60 mt-1">Click to learn more →</p>}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Outcomes */}
              <div>
                <h3 className="text-lg font-semibold text-accent mb-3">Key Outcomes</h3>
                <ul className="space-y-2">
                  {selectedProject.details.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span className="text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Screenshots */}
              <div>
                <h3 className="text-lg font-semibold text-accent mb-3">Project Screenshots</h3>
                <div className="grid grid-cols-1 gap-4">
                  {selectedProject.details.screenshots.map((screenshot, i) => (
                    <div
                      key={i}
                      className="relative h-64 rounded-lg overflow-hidden bg-background/50 border border-border/50"
                    >
                      <Image
                        src={screenshot || "/placeholder.svg"}
                        alt={`${selectedProject.title} screenshot ${i + 1}`}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-lg font-semibold text-accent mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-primary/10 text-accent border border-primary/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-accent/20">
                <p className="text-sm text-foreground">
                  <span className="font-semibold text-accent">Period:</span> {selectedProject.period}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <TechDetailModal
        tech={selectedTech}
        isOpen={techModalOpen}
        onClose={() => {
          setTechModalOpen(false)
          setSelectedTech(null)
        }}
      />
    </section>
  )
}
