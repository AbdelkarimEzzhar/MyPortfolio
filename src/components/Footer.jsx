import { Github, Linkedin, Mail, Info, Code, Rocket, MailIcon } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer({ setCurrentSection }) {
    const currentYear = new Date().getFullYear()

    const footerLinks = [
        { label: 'About', section: 'about', icon: Info },
        { label: 'Skills', section: 'skills', icon: Code },
        { label: 'Projects', section: 'projects', icon: Rocket },
        { label: 'Contact', section: 'contact', icon: MailIcon },
    ]

    const socialLinks = [
        {
            icon: Github,
            href: 'https://github.com/AbdelkarimEzzhar',
            label: 'GitHub',
        },
        {
            icon: Linkedin,
            href: 'https://linkedin.com',
            label: 'LinkedIn',
        },
        {
            icon: Mail,
            href: 'mailto:abdelkarimezzhar47@gmail.com',
            label: 'Email',
        },
    ]

    return (
        <footer className="relative bg-gradient-to-b from-white/95 to-dark-50 dark:from-dark-950/95 dark:to-dark-900/95 backdrop-blur-md border-t border-dark-200 dark:border-dark-700 shadow-2xl z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold gradient-text mb-2">Ezzhar Elidrissi Abdelkarim</h3>
                        <p className="text-dark-700 dark:text-dark-300 text-sm font-medium">
                            Engineering Student | DevOps & Cloud Enthusiast
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="font-bold text-dark-900 dark:text-white mb-4">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            {footerLinks.map((link) => {
                                const Icon = link.icon
                                return (
                                    <li key={link.label}>
                                        <motion.div
                                            className="relative w-fit"
                                            whileHover="hover"
                                        >
                                            <button
                                                onClick={() => setCurrentSection(link.section)}
                                                className="flex items-center gap-2 text-dark-700 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-300 transition-colors font-semibold cursor-pointer bg-none border-none p-0"
                                            >
                                                <Icon size={16} />
                                                {link.label}
                                            </button>
                                            <motion.div
                                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-600 to-cyan-500 origin-left"
                                                initial={{ scaleX: 0 }}
                                                variants={{
                                                    hover: { scaleX: 1 }
                                                }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </motion.div>
                                    </li>
                                )
                            })}
                        </ul>
                    </motion.div>

                    {/* Social */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="font-bold text-dark-900 dark:text-white mb-4">Connect</h4>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 rounded-lg bg-dark-200 dark:bg-dark-800 flex items-center justify-center text-dark-700 dark:text-dark-300 hover:bg-primary-500 hover:text-white transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="h-px bg-dark-200 dark:bg-dark-800 mb-8" />

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center text-sm text-dark-700 dark:text-dark-200"
                >
                    <p className="font-semibold text-dark-900 dark:text-white">
                        © {currentYear} Abdelkarim Ezzhar Elidrissi . All rights reserved.
                    </p>
                    <div className="flex justify-center gap-6 mt-6">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-2 text-dark-700 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-300 transition-colors text-sm font-semibold"
                                aria-label={social.label}
                            >
                                <social.icon size={16} />
                                {social.label}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}
