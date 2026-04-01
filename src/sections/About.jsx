import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Award } from 'lucide-react'

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    }

    const stats = [
        { label: 'Projects Built', value: '6+' },
        { label: 'Technologies', value: '20+' },
        { label: 'Passion Level', value: '🔥' },
    ]

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
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-cyan-500 rounded-full" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-12"
                >
                    {/* Main Content */}
                    <motion.div variants={itemVariants} className="lg:col-span-2">
                        <p className="text-lg text-dark-700 dark:text-dark-300 mb-6 leading-relaxed">
                            I'm an engineering student at the National Institute of Posts and Telecommunications (INPT) in Rabat, specializing in Ubiquitous and Distributed Systems (Cloud & IoT). My passion lies in DevOps, cloud computing, and building scalable infrastructure.
                        </p>

                        <p className="text-lg text-dark-700 dark:text-dark-300 mb-6 leading-relaxed">
                            Through my academic projects, I've gained practical experience designing and implementing CI/CD pipelines, containerizing applications with Docker, and orchestrating microservices. I'm passionate about automation and creating efficient development processes.
                        </p>

                        <p className="text-lg text-dark-700 dark:text-dark-300 mb-8 leading-relaxed">
                            I actively explore new cloud technologies, contribute to open-source projects, and engage with the DevOps community. I'm seeking a final year internship (PFA) in DevOps & Cloud Engineering to apply my knowledge in a professional environment.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 mb-8">
                            <motion.div
                                variants={itemVariants}
                                className="flex items-center gap-3"
                            >
                                <MapPin className="text-primary-600 flex-shrink-0" size={20} />
                                <span className="text-dark-700 dark:text-dark-300">
                                    Rabat, Morocco
                                </span>
                            </motion.div>
                            <motion.div
                                variants={itemVariants}
                                className="flex items-center gap-3"
                            >
                                <Mail className="text-primary-600 flex-shrink-0" size={20} />
                                <a
                                    href="mailto:abdelkarimezzhar47@gmail.com"
                                    className="text-primary-600 dark:text-primary-400 hover:underline"
                                >
                                    abdelkarimezzhar47@gmail.com
                                </a>
                            </motion.div>
                            <motion.div
                                variants={itemVariants}
                                className="flex items-center gap-3"
                            >
                                <Phone className="text-primary-600 flex-shrink-0" size={20} />
                                <span className="text-dark-700 dark:text-dark-300">
                                    +212 672 972 744
                                </span>
                            </motion.div>
                        </div>

                        {/* Education */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Award className="text-primary-600" />
                                Education
                            </h3>
                            <div className="space-y-4">
                                <div className="pl-6 border-l-2 border-primary-600">
                                    <h4 className="font-semibold text-lg">
                                        Engineering in Ubiquitous and Distributed Systems
                                    </h4>
                                    <p className="text-primary-600 dark:text-primary-400">
                                        National Institute of Posts and Telecommunications (INPT)
                                    </p>
                                    <p className="text-dark-600 dark:text-dark-400">
                                        2024 - Present
                                    </p>
                                </div>
                                <div className="pl-6 border-l-2 border-primary-600">
                                    <h4 className="font-semibold text-lg">
                                        Preparatory Classes in TSI
                                    </h4>
                                    <p className="text-primary-600 dark:text-primary-400">
                                        Lycée Technique Settat
                                    </p>
                                    <p className="text-dark-600 dark:text-dark-400">
                                        2022 - 2024
                                    </p>
                                </div>
                                <div className="pl-6 border-l-2 border-primary-600">
                                    <h4 className="font-semibold text-lg">
                                        Baccalaureate in Electrical Science & Technology
                                    </h4>
                                    <p className="text-primary-600 dark:text-primary-400">
                                        Er-Razzi Technical High School
                                    </p>
                                    <p className="text-dark-600 dark:text-dark-400">
                                        Mention Très Bien • 2019 - 2022
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-xl bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 hover:border-primary-600 dark:hover:border-primary-600 transition-all"
                            >
                                <div className="text-4xl font-bold gradient-text mb-2">
                                    {stat.value}
                                </div>
                                <p className="text-dark-600 dark:text-dark-400 font-medium">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}

                        {/* Languages */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-xl bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700"
                        >
                            <h4 className="font-bold mb-4">Languages</h4>
                            <div className="space-y-3">
                                {['Arabic (Native)', 'French (B2)', 'English (B2)'].map(
                                    (lang) => (
                                        <div key={lang} className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-primary-600" />
                                            <span className="text-dark-700 dark:text-dark-300">
                                                {lang}
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
