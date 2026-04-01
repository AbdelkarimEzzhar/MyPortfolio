import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: 'MyHeart — Hospital Management Platform',
            description:
                'Enterprise-scale microservices platform for hospital management with 8 independent services, multi-database strategy, and distributed transaction handling via Apache Kafka.',
            tags: ['Java', 'Python FastAPI', 'React', 'Docker', 'Kafka', 'Consul', 'PostgreSQL', 'MongoDB'],
            highlights: [
                '8 microservices orchestrated via Docker Compose',
                'Multi-database strategy: PostgreSQL, MongoDB, MySQL, Redis',
                'SAGA Pattern for distributed transactions',
                'API Gateway with JWT auth & circuit-breaker pattern',
                'Dynamic service discovery with HashiCorp Consul',
            ],
            year: '2026',
            github: 'https://github.com',
        },
        {
            id: 2,
            title: 'CI/CD Pipeline — Hybrid (Node.js)',
            description:
                'Production-ready CI/CD pipeline combining GitHub Actions and Jenkins for automated testing, quality checks, security scanning, and containerized deployments.',
            tags: ['Node.js', 'Docker', 'Jenkins', 'GitHub Actions', 'SonarCloud', 'Trivy'],
            highlights: [
                '6-stage pipeline: build → test → quality → docker → security → deploy',
                'GitHub Actions for PR workflows',
                'Jenkins for complex deployment orchestration',
                'SonarCloud integration for code quality',
                'Trivy container security scanning',
            ],
            year: '2025',
            github: 'https://github.com',
        },
        {
            id: 3,
            title: 'CI/CD Pipeline — Python Application',
            description:
                'Automated testing and deployment pipeline for Python applications with multi-stage Docker optimization and GitHub Container Registry integration.',
            tags: ['Python', 'Docker', 'GitHub Actions', 'GHCR', 'Pytest'],
            highlights: [
                'Automated testing with pytest',
                'Multi-stage Docker image optimization',
                'GitHub Actions workflow automation',
                'GHCR artifact management',
                'Resolved authentication challenges',
            ],
            year: '2025',
            github: 'https://github.com',
        },
        {
            id: 4,
            title: 'MediReminder — Medication Management App',
            description:
                'Full-stack web application helping users schedule medication reminders and track treatment adherence with real-time notifications.',
            tags: ['React', 'Node.js', 'MongoDB', 'Docker', 'Express'],
            highlights: [
                'Responsive React frontend',
                'RESTful Node.js/Express backend',
                'MongoDB database',
                'Docker & Docker Compose deployment',
                'Team collaboration with Git workflow',
            ],
            year: '2024',
            github: 'https://github.com',
        },
        {
            id: 5,
            title: 'Student Performance Prediction',
            description:
                'Data science project predicting student dropout risk using machine learning models and comprehensive feature engineering on academic data.',
            tags: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'ML'],
            highlights: [
                'End-to-end ML pipeline: collect, clean, feature engineering',
                '4 model comparison: Random Forest, SVM, KNN, Decision Tree',
                'Cross-validation for model robustness',
                'Comprehensive visualization: confusion matrix, ROC curves',
            ],
            year: '2026',
            github: 'https://github.com',
        },
        {
            id: 6,
            title: 'Personal Portfolio Website',
            description:
                'Modern, responsive portfolio website showcasing projects and technical skills with smooth animations and dark mode support.',
            tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
            highlights: [
                'React with functional components',
                'Responsive mobile-first design',
                'Dark/light theme toggle',
                'Smooth scroll animations',
                'SEO optimized',
            ],
            year: '2024',
            github: 'https://github.com',
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-50 dark:bg-dark-900 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-cyan-500 rounded-full" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="space-y-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            whileHover={{ y: -4 }}
                            className="p-8 rounded-xl bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] transition-all overflow-hidden relative group"
                        >
                            {/* Background gradient */}
                            <div className="absolute -right-32 -top-32 w-64 h-64 bg-gradient-to-br from-primary-200/30 to-cyan-200/30 dark:from-primary-900/20 dark:to-cyan-900/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500" />

                            <div className="relative z-10">
                                {/* Header */}
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-2xl sm:text-3xl font-bold">
                                                {project.title}
                                            </h3>
                                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300">
                                                {project.year}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 mt-4 sm:mt-0">
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="p-3 rounded-lg bg-dark-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300 hover:bg-primary-600 hover:text-white transition-colors"
                                            aria-label="View source code"
                                        >
                                            <Github size={20} />
                                        </motion.a>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-lg text-dark-700 dark:text-dark-300 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Highlights */}
                                <div className="mb-6 p-4 rounded-lg bg-dark-50 dark:bg-dark-900/50 border border-dark-200 dark:border-dark-700">
                                    <h4 className="font-semibold text-sm mb-3 text-dark-900 dark:text-white">
                                        Key Highlights:
                                    </h4>
                                    <ul className="space-y-2">
                                        {project.highlights.map((highlight, i) => (
                                            <li
                                                key={i}
                                                className="text-sm text-dark-700 dark:text-dark-400 flex items-start gap-2"
                                            >
                                                <span className="text-primary-600 mt-1 flex-shrink-0">
                                                    ✓
                                                </span>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <motion.span
                                            key={tag}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3 }}
                                            viewport={{ once: true }}
                                            className="px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-300 dark:border-primary-800 hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors"
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
