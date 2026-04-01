import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
    const currentYear = new Date().getFullYear()

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
        <footer className="bg-dark-50 dark:bg-dark-900 border-t border-dark-200 dark:border-dark-800">
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
                        <p className="text-dark-600 dark:text-dark-400 text-sm">
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
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="font-semibold mb-4">Connect</h4>
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
                    className="flex flex-col sm:flex-row items-center justify-between text-sm text-dark-600 dark:text-dark-400"
                >
                    <p>
                        © {currentYear} Abdelkarim Ezzhar. All rights reserved.
                    </p>
                    <p className="flex items-center gap-1 mt-4 sm:mt-0">
                        Made with <Heart size={16} className="text-red-500" /> using React & Tailwind CSS
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}
