import { motion } from 'framer-motion'

export default function Skills() {
    const skillCategories = [
        {
            title: 'Programming Languages',
            skills: ['Python', 'JavaScript', 'Java', 'SQL', 'HTML/CSS', 'Bash'],
            color: 'from-blue-500 to-cyan-500',
        },
        {
            title: 'DevOps & Cloud',
            skills: ['Docker', 'Docker Compose', 'GitHub Actions', 'Jenkins', 'CI/CD', 'Consul', 'Kafka', 'GHCR'],
            color: 'from-orange-500 to-red-500',
        },
        {
            title: 'Testing & Quality',
            skills: ['Pytest', 'Jest', 'SonarCloud', 'Trivy', 'Code Coverage', 'Unit Testing'],
            color: 'from-green-500 to-emerald-500',
        },
        {
            title: 'Frameworks & Libraries',
            skills: ['React', 'Node.js/Express', 'Spring Boot', 'FastAPI', 'Framer Motion', 'Tailwind CSS'],
            color: 'from-purple-500 to-pink-500',
        },
        {
            title: 'Databases',
            skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Mongoose'],
            color: 'from-indigo-500 to-blue-500',
        },
        {
            title: 'Tools & Platforms',
            skills: ['Git', 'Linux/Ubuntu', 'npm/pip', 'Scikit-learn', 'Pandas', 'Matplotlib'],
            color: 'from-yellow-500 to-orange-500',
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">Skills & Expertise</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-cyan-500 rounded-full" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="p-6 rounded-xl bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] transition-all"
                        >
                            {/* Category Header */}
                            <div className={`mb-4 p-3 rounded-lg bg-gradient-to-r ${category.color} w-fit`}>
                                <h3 className="font-bold text-white text-sm">{category.title}</h3>
                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: categoryIndex * 0.05 + skillIndex * 0.02,
                                        }}
                                        viewport={{ once: true }}
                                        className="px-3 py-1 rounded-full text-sm font-medium bg-dark-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300 border border-dark-200 dark:border-dark-600 hover:border-primary-600 dark:hover:border-primary-400 transition-colors"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Proficiency Levels */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-16 p-8 rounded-xl bg-gradient-to-r from-primary-50 to-cyan-50 dark:from-dark-800 dark:to-dark-900 border border-primary-200 dark:border-primary-900"
                >
                    <h3 className="text-2xl font-bold mb-8">Proficiency Levels</h3>
                    <div className="space-y-6">
                        {[
                            { name: 'DevOps & CI/CD', level: 90 },
                            { name: 'Docker & Containerization', level: 85 },
                            { name: 'Cloud Architecture', level: 80 },
                            { name: 'Backend Development', level: 85 },
                            { name: 'Frontend Development', level: 80 },
                            { name: 'Database Design', level: 75 },
                        ].map((skill) => (
                            <div key={skill.name}>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-semibold text-dark-900 dark:text-white">
                                        {skill.name}
                                    </span>
                                    <span className="text-sm font-bold text-primary-600">
                                        {skill.level}%
                                    </span>
                                </div>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, ease: 'easeOut' }}
                                    viewport={{ once: true }}
                                    className="h-3 bg-gradient-to-r from-primary-600 to-cyan-500 rounded-full"
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
