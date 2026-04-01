import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [status, setStatus] = useState('idle')
    const formRef = useRef()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('loading')

        // Simulate form submission
        setTimeout(() => {
            // In production, you would send this to a server/email service
            console.log('Form data:', formData)
            setStatus('success')
            setFormData({ name: '', email: '', subject: '', message: '' })

            // Reset status after 5 seconds
            setTimeout(() => setStatus('idle'), 5000)
        }, 1000)
    }

    const contactMethods = [
        {
            icon: Mail,
            label: 'Email',
            value: 'abdelkarimezzhar47@gmail.com',
            href: 'mailto:abdelkarimezzhar47@gmail.com',
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+212 672 972 744',
            href: 'tel:+212672972744',
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Rabat, Morocco',
            href: '#',
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
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-cyan-500 rounded-full" />
                    <p className="text-lg text-dark-600 dark:text-dark-400 mt-4">
                        I'd love to hear from you. Whether you have questions, project ideas, or just want to chat, feel free to reach out!
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
                >
                    {contactMethods.map((method) => (
                        <motion.a
                            key={method.label}
                            href={method.href}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -4 }}
                            className="p-6 rounded-xl bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] transition-all"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                                    <method.icon
                                        className="text-primary-600 dark:text-primary-400"
                                        size={24}
                                    />
                                </div>
                                <h3 className="text-lg font-semibold">{method.label}</h3>
                            </div>
                            <p className="text-dark-700 dark:text-dark-300 break-all">
                                {method.value}
                            </p>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-xl bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700"
                >
                    <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Name */}
                        <motion.div
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <label
                                htmlFor="name"
                                className="block text-sm font-semibold mb-2 text-dark-900 dark:text-white"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-700 text-dark-900 dark:text-white placeholder-dark-400 dark:placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                                placeholder="John Doe"
                            />
                        </motion.div>

                        {/* Email */}
                        <motion.div
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold mb-2 text-dark-900 dark:text-white"
                            >
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-700 text-dark-900 dark:text-white placeholder-dark-400 dark:placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                                placeholder="john@example.com"
                            />
                        </motion.div>
                    </div>

                    {/* Subject */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mb-6"
                    >
                        <label
                            htmlFor="subject"
                            className="block text-sm font-semibold mb-2 text-dark-900 dark:text-white"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-700 text-dark-900 dark:text-white placeholder-dark-400 dark:placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                            placeholder="What's this about?"
                        />
                    </motion.div>

                    {/* Message */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mb-6"
                    >
                        <label
                            htmlFor="message"
                            className="block text-sm font-semibold mb-2 text-dark-900 dark:text-white"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            className="w-full px-4 py-3 rounded-lg border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-700 text-dark-900 dark:text-white placeholder-dark-400 dark:placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all resize-none"
                            placeholder="Your message here..."
                        />
                    </motion.div>

                    {/* Status Message */}
                    {status === 'success' && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-green-600 dark:text-green-400 font-semibold mb-6"
                        >
                            ✓ Message sent successfully! I'll get back to you soon.
                        </motion.p>
                    )}

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        disabled={status === 'loading'}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-primary-600 to-cyan-500 text-white font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                    >
                        {status === 'loading' ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send size={20} />
                                Send Message
                            </>
                        )}
                    </motion.button>
                </motion.form>
            </div>
        </section>
    )
}
