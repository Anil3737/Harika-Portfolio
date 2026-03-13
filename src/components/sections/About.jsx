import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Database, Globe } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const interests = [
    {
        title: "Machine Learning",
        description: "Building predictive models, natural language processing, and computer vision applications.",
        icon: <BrainCircuit size={24} className="text-primary" />
    },
    {
        title: "Full Stack Development",
        description: "Developing responsive and user-centric web applications using modern frameworks.",
        icon: <Globe size={24} className="text-secondary" />
    },
    {
        title: "Data Architecture",
        description: "Designing efficient data pipelines and managing complex database systems.",
        icon: <Database size={24} className="text-primary" />
    },
    {
        title: "Algorithm Design",
        description: "Solving complex problems with optimized algorithms and data structures.",
        icon: <Code2 size={24} className="text-secondary" />
    }
];

export default function About() {
    return (
        <section id="about" className="py-20 relative z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <SectionHeading title="About Me" subtitle="My Journey" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold text-foreground">
                            Passionate about the intersection of <span className="text-primary">Data</span> and <span className="text-secondary">Design</span>.
                        </h3>

                        <p className="text-foreground/70 leading-relaxed text-lg text-justify">
                            I am a Final Year Artificial Intelligence & Machine Learning student with a deep passion for
                            building intelligent systems that solve real-world problems. My journey started with a fascination
                            for how data can be transformed into actionable insights, which quickly expanded into full-stack development
                            to bring these AI models to life on the web.
                        </p>

                        <p className="text-foreground/70 leading-relaxed text-lg text-justify">
                            Whether it's training a deep neural network, designing a sleek user interface, or optimizing
                            backend architectures, I thrive on the challenges of comprehensive software engineering. I aim to write clean,
                            scalable code and craft intuitive experiences that empower users.
                        </p>

                        <div className="pt-6">
                            <a
                                href="#contact"
                                className="inline-flex items-center space-x-2 text-primary font-medium hover:text-primary/80 transition-colors border-b border-primary/30 pb-1 hover:border-primary"
                            >
                                <span>Let's collaborate</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>

                    {/* Interests Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {interests.map((interest, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="glass p-6 rounded-2xl hover:border-primary/50 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-white/5 dark:bg-black/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    {interest.icon}
                                </div>
                                <h4 className="text-xl font-semibold mb-2 text-foreground">{interest.title}</h4>
                                <p className="text-sm text-foreground/60 leading-relaxed">
                                    {interest.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
