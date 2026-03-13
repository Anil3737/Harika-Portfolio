import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Download, Terminal } from 'lucide-react';
import ParticlesBackground from '../ui/ParticlesBackground';

export default function Hero({ darkMode }) {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <ParticlesBackground darkMode={darkMode} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 text-center lg:text-left"
                >
                    <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full text-sm font-medium text-primary border border-primary/20">
                        <Terminal size={16} />
                        <span>Hello, World!</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-poppins leading-tight">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Rohini</span>
                    </h1>

                    <div className="text-2xl sm:text-3xl font-semibold text-foreground/80 h-[40px]">
                        <Typewriter
                            words={[
                                'AI & Machine Learning Engineer',
                                'Full Stack Developer',
                                'Data Science Enthusiast',
                                'Problem Solver'
                            ]}
                            loop={true}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>

                    <p className="text-lg text-foreground/60 max-w-2xl mx-auto lg:mx-0">
                        I specialize in building intelligent systems, training robust machine learning models, and creating seamless, scalable web applications that bridge the gap between AI and user experience.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 pt-6">
                        <a
                            href="#projects"
                            className="px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] flex items-center w-full sm:w-auto justify-center"
                        >
                            View Projects
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            onClick={(e) => {
                                e.preventDefault();
                                alert("Resume download functionality will be connected here!");
                            }}
                            className="px-8 py-4 rounded-full glass hover:bg-white/20 transition-all font-medium flex items-center space-x-2 hover:scale-105 w-full sm:w-auto justify-center"
                        >
                            <Download size={20} />
                            <span>Download Resume</span>
                        </a>
                    </div>
                </motion.div>

                {/* 3D / AI Graphic Element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative lg:block hidden"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        {/* Abstract floating shapes representing AI/Data */}
                        <motion.div
                            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"
                        />

                        {/* Main Graphic - we use a stylized glassbomorphism container mimicking a neural node */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 m-auto w-64 h-64 glass rounded-3xl border border-white/20 shadow-2xl flex items-center justify-center overflow-hidden z-10"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10" />
                            <div className="grid grid-cols-3 gap-2 p-4 w-full h-full opacity-50">
                                {[...Array(9)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{
                                            opacity: [0.3, 1, 0.3],
                                            scale: [1, 1.2, 1]
                                        }}
                                        transition={{
                                            duration: 2 + Math.random() * 2,
                                            repeat: Infinity,
                                            delay: Math.random() * 2
                                        }}
                                        className="w-full h-full bg-foreground/20 rounded-md"
                                    />
                                ))}
                            </div>
                            <div className="absolute inset-0 m-auto w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-50 animate-pulse" />
                            <Terminal size={48} className="text-foreground z-20 relative mix-blend-overlay" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
