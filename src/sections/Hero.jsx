import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react'
import profileImage from '../assets/profile.jpg'
import resumePDF from '../assets/EzzharCV.pdf'

export default function Hero({ setCurrentSection }) {
    const [currentTagline, setCurrentTagline] = useState(0)

    // Rotating taglines
    const taglines = [
        "DevOps & Cloud Engineer",
        "Engineering Student",
        "CI/CD & Automation Enthusiast",
        "Cloud Architecture Learner"
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTagline((prev) => (prev + 1) % taglines.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    }

    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Content */}
                    <motion.div variants={itemVariants}>
                        <motion.div
                            variants={itemVariants}
                            className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 mb-6"
                        >
                            <p className="text-sm font-semibold text-primary-700 dark:text-primary-400">
                                👋 Welcome to my portfolio
                            </p>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                        >
                            Hi, I'm{' '}
                            <span className="gradient-text">Ezzhar Elidrissi Abdelkarim</span>
                        </motion.h1>

                        {/* Rotating Tagline */}
                        <div className="h-16 mb-4 flex items-center">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={currentTagline}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-xl sm:text-2xl text-dark-600 dark:text-dark-300 font-semibold"
                                >
                                    {taglines[currentTagline]}
                                </motion.p>
                            </AnimatePresence>
                        </div>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-dark-600 dark:text-dark-400 mb-8 max-w-lg leading-relaxed"
                        >
                            I'm passionate about building scalable infrastructure and automating deployment pipelines. Specialized in DevOps, Cloud Computing, and IoT with expertise in CI/CD, Docker, and microservices architecture.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.button
                                onClick={() => setCurrentSection('projects')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-colors"
                            >
                                View My Work
                                <ArrowRight size={20} />
                            </motion.button>

                            <motion.a
                                href={resumePDF}
                                download="EzzharCV.pdf"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold transition-colors"
                            >
                                Download CV
                                <Download size={20} />
                            </motion.a>

                            <motion.a
                                href="mailto:abdelkarimezzhar47@gmail.com"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                            >
                                Get in Touch
                            </motion.a>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="mt-12 flex gap-6"
                        >
                            <motion.a
                                href="https://github.com/AbdelkarimEzzhar"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-primary-600 hover:text-white transition-colors font-medium"
                            >
                                <Github size={20} />
                                GitHub
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-primary-600 hover:text-white transition-colors font-medium"
                            >
                                <Linkedin size={20} />
                                LinkedIn
                            </motion.a>
                            <motion.a
                                href="mailto:abdelkarimezzhar47@gmail.com"
                                whileHover={{ scale: 1.1 }}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-primary-600 hover:text-white transition-colors font-medium"
                            >
                                <Mail size={20} />
                                Email
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Profile Picture or Visual Element */}
                    <motion.div
                        variants={itemVariants}
                        className="relative hidden lg:block"
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="relative w-full aspect-square"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-cyan-400 to-blue-500 rounded-3xl opacity-20 blur-3xl" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 via-pink-400 to-red-400 rounded-3xl opacity-20 blur-3xl" />

                            {/* Profile Picture Section */}
                            <div className="relative w-full h-full rounded-3xl border border-primary-200 dark:border-primary-800 bg-white/20 dark:bg-dark-900/20 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                                {/* Display profile picture */}
                                <img
                                    src={profileImage}
                                    alt="Abdelkarim Ezzhar - Professional Profile"
                                    className="w-full h-full object-cover rounded-3xl"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
