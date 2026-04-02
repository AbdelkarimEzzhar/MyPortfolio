import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun, Home, Info, Code, Briefcase, Mail as MailIcon } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Header({ isDark, setIsDark, currentSection, setCurrentSection }) {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { label: 'Home', section: 'hero', icon: Home },
        { label: 'About', section: 'about', icon: Info },
        { label: 'Skills', section: 'skills', icon: Code },
        { label: 'Projects', section: 'projects', icon: Briefcase },
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
                        {navLinks.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => handleSectionClick(link.section)}
                                className={`text-sm font-medium transition-colors ${currentSection === link.section
                                    ? 'text-primary-600 dark:text-primary-400 font-bold'
                                    : 'text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400'
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Theme toggle & Mobile Menu */}
                    <div className="flex items-center gap-4">
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
                            {navLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => handleSectionClick(link.section)}
                                    className={`text-left px-3 py-2 rounded-lg transition-colors ${currentSection === link.section
                                        ? 'bg-primary-600 text-white font-bold'
                                        : 'text-dark-700 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800'
                                        }`}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </nav>
        </motion.header>
    )
}
