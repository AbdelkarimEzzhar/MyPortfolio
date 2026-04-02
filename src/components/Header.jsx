import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun, Home, Info, Code, Rocket, Mail as MailIcon, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import resumePDF from '../assets/EzzharCV.pdf'

export default function Header({ isDark, setIsDark, currentSection, setCurrentSection }) {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { label: 'Home', section: 'hero', icon: Home },
        { label: 'About', section: 'about', icon: Info },
        { label: 'Skills', section: 'skills', icon: Code },
        { label: 'Projects', section: 'projects', icon: Rocket },
        { label: 'Contact', section: 'contact', icon: MailIcon },
    ]

    const handleSectionClick = (section) => {
        setCurrentSection(section)
        setIsOpen(false)
    }

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed w-full top-0 z-50 bg-white dark:bg-dark-950 shadow-lg transition-colors duration-300"
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.button
                        onClick={() => handleSectionClick('hero')}
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl font-bold gradient-text cursor-pointer"
                    >
                        AEE
                    </motion.button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const Icon = link.icon
                            return (
                                <motion.div
                                    key={link.label}
                                    className="relative"
                                    whileHover="hover"
                                >
                                    <button
                                        onClick={() => handleSectionClick(link.section)}
                                        className={`flex items-center gap-2 text-sm font-medium transition-colors ${currentSection === link.section
                                            ? 'text-primary-600 dark:text-primary-400 font-bold'
                                            : 'text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400'
                                            }`}
                                    >
                                        <Icon size={18} />
                                        {link.label}
                                    </button>
                                    <motion.div
                                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-600 to-cyan-500 origin-left"
                                        initial={{ scaleX: 0 }}
                                        variants={{
                                            hover: { scaleX: 1 }
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>
                            )
                        })}
                    </div>

                    {/* Theme toggle & Mobile Menu */}
                    <div className="flex items-center gap-4">
                        <motion.a
                            href={resumePDF}
                            download="EzzharCV.pdf"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium transition-colors"
                            title="Download Resume"
                        >
                            <Download size={18} />
                            <span className="text-sm">CV</span>
                        </motion.a>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsDark(!isDark)}
                            className="p-2 rounded-lg bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </motion.button>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-lg bg-dark-100 dark:bg-dark-800"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X size={24} className="text-dark-700 dark:text-dark-300" />
                            ) : (
                                <Menu size={24} className="text-dark-700 dark:text-dark-300" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden mt-4 pt-4 border-t border-dark-200 dark:border-dark-700"
                    >
                        <div className="flex flex-col gap-3">
                            {navLinks.map((link) => {
                                const Icon = link.icon
                                return (
                                    <motion.div
                                        key={link.label}
                                        className="relative"
                                        whileHover="hover"
                                    >
                                        <button
                                            onClick={() => handleSectionClick(link.section)}
                                            className={`flex items-center gap-2 text-left px-3 py-2 rounded-lg transition-colors w-full ${currentSection === link.section
                                                ? 'bg-primary-600 text-white font-bold'
                                                : 'text-dark-700 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800'
                                                }`}
                                        >
                                            <Icon size={18} />
                                            {link.label}
                                        </button>
                                        <motion.div
                                            className="absolute -bottom-2 left-3 right-3 h-0.5 bg-gradient-to-r from-primary-600 to-cyan-500 origin-left rounded-full"
                                            initial={{ scaleX: 0 }}
                                            variants={{
                                                hover: { scaleX: 1 }
                                            }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>
                )}
            </nav>
        </motion.header>
    )
}
