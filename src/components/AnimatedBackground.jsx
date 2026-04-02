import { motion } from 'framer-motion'

export default function AnimatedBackground() {
    // Create multiple atoms - larger and more visible with diverse colors
    const atoms = [
        { id: 1, size: 150, x: '5%', y: '10%', duration: 8, color: 'from-cyan-500 to-blue-500' },
        { id: 2, size: 120, x: '88%', y: '15%', duration: 10, color: 'from-purple-500 to-pink-500' },
        { id: 3, size: 180, x: '8%', y: '65%', duration: 12, color: 'from-blue-500 to-cyan-500' },
        { id: 4, size: 140, x: '85%', y: '70%', duration: 9, color: 'from-pink-500 to-red-500' },
        { id: 5, size: 100, x: '48%', y: '8%', duration: 11, color: 'from-cyan-500 to-purple-500' },
        { id: 6, size: 130, x: '12%', y: '35%', duration: 10.5, color: 'from-blue-400 to-cyan-400' },
        { id: 7, size: 110, x: '82%', y: '40%', duration: 9.5, color: 'from-pink-400 to-purple-400' },
        { id: 8, size: 160, x: '50%', y: '75%', duration: 13, color: 'from-cyan-600 to-blue-600' },
        { id: 9, size: 125, x: '22%', y: '20%', duration: 10.2, color: 'from-green-500 to-cyan-500' },
        { id: 10, size: 145, x: '75%', y: '25%', duration: 11.5, color: 'from-violet-500 to-purple-500' },
        { id: 11, size: 95, x: '35%', y: '50%', duration: 9.8, color: 'from-yellow-400 to-orange-500' },
        { id: 12, size: 135, x: '65%', y: '55%', duration: 12.3, color: 'from-indigo-500 to-blue-500' },
        { id: 13, size: 115, x: '15%', y: '80%', duration: 10.7, color: 'from-red-500 to-pink-500' },
        { id: 14, size: 155, x: '78%', y: '5%', duration: 11.2, color: 'from-cyan-400 to-green-500' },
        { id: 15, size: 105, x: '42%', y: '30%', duration: 9.3, color: 'from-purple-600 to-pink-600' },
        { id: 16, size: 140, x: '28%', y: '72%', duration: 10.9, color: 'from-blue-600 to-violet-600' },
        { id: 17, size: 120, x: '70%', y: '35%', duration: 12.1, color: 'from-emerald-500 to-cyan-500' },
    ]

    // Orbiting electrons
    const Electron = ({ delay = 0, radius = 30, duration = 4 }) => (
        <motion.div
            animate={{ rotate: 360 }}
            transition={{
                duration,
                repeat: Infinity,
                ease: 'linear',
                delay,
            }}
            className="absolute w-full h-full"
        >
            <div
                className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 shadow-xl"
                style={{
                    top: '50%',
                    left: `calc(50% + ${radius}px)`,
                    transform: 'translate(-50%, -50%)',
                }}
            />
        </motion.div>
    )

    // Atom component
    const Atom = ({ size, x, y, duration, color }) => (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute"
            style={{ left: x, top: y }}
        >
            {/* Outer orbit 1 */}
            <motion.div
                className="absolute rounded-full border-2 border-cyan-400/60"
                style={{
                    width: size,
                    height: size,
                    left: -size / 2,
                    top: -size / 2,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: duration, repeat: Infinity, ease: 'linear' }}
            />

            {/* Outer orbit 2 */}
            <motion.div
                className="absolute rounded-full border-2 border-blue-400/50"
                style={{
                    width: size * 0.6,
                    height: size * 0.6,
                    left: -size * 0.3,
                    top: -size * 0.3,
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: duration * 0.8, repeat: Infinity, ease: 'linear' }}
            />

            {/* Center nucleus */}
            <motion.div
                className={`w-7 h-7 rounded-full bg-gradient-to-r ${color} shadow-2xl`}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Orbiting electrons */}
            <Electron delay={0} radius={size / 2.5} duration={duration * 0.7} />
            <Electron delay={duration / 3} radius={size / 2.5} duration={duration * 0.7} />
            <Electron delay={(duration * 2) / 3} radius={size / 2} duration={duration * 0.6} />
        </motion.div>
    )

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white dark:from-dark-950 via-blue-50 dark:via-dark-900 to-cyan-50 dark:to-dark-900" />

            {/* Animated atoms */}
            <div className="absolute inset-0">
                {atoms.map((atom) => (
                    <Atom
                        key={atom.id}
                        size={atom.size}
                        x={atom.x}
                        y={atom.y}
                        duration={atom.duration}
                        color={atom.color}
                    />
                ))}
            </div>

            {/* Floating particles */}
            {[...Array(30)].map((_, i) => (
                <motion.div
                    key={`particle-${i}`}
                    className="absolute w-2 h-2 rounded-full bg-cyan-400/60"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        opacity: Math.random() * 0.6 + 0.4,
                    }}
                    animate={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 15,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
            ))}

            {/* Gradient overlays for depth - stronger at bottom for footer visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-dark-950 opacity-80" />
            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-white dark:from-dark-950 to-transparent opacity-90 pointer-events-none" />
        </div>
    )
}
