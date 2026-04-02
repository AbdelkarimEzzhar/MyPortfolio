import { useState, useEffect } from 'react'
import Header from './components/Header'
import AnimatedBackground from './components/AnimatedBackground'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
    const [isDark, setIsDark] = useState(false)
    const [currentSection, setCurrentSection] = useState('hero')

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDark])

    // Section components mapping
    const sections = {
        hero: <Hero />,
        about: <About />,
        skills: <Skills />,
        projects: <Projects />,
        contact: <Contact />,
    }

    return (
        <div className={isDark ? 'dark' : ''}>
            <div className="min-h-screen bg-white dark:bg-dark-950 text-dark-950 dark:text-white transition-colors duration-300 relative">
                <AnimatedBackground />
                <Header isDark={isDark} setIsDark={setIsDark} currentSection={currentSection} setCurrentSection={setCurrentSection} />
                <main className="min-h-[calc(100vh-80px)] relative z-10">
                    {sections[currentSection]}
                </main>
                <Footer setCurrentSection={setCurrentSection} />
            </div>
        </div>
    )
}
