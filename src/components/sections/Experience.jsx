import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { experienceData } from '../../utils/constants';

export default function Experience() {
    return (
        <section id="experience" className="py-20 relative z-10 bg-foreground/[0.02]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <SectionHeading title="Experience" subtitle="My Journey" />

                <div className="relative">
                    {/* Timeline Center Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-transparent rounded-full opacity-30" />

                    <div className="space-y-12">
                        {experienceData.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary shadow-[0_0_15px_rgba(99,102,241,0.5)] z-20 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-secondary rounded-full" />
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
                                    <div className="glass p-8 rounded-2xl hover:border-primary/40 transition-colors group relative overflow-hidden">
                                        {/* Decorative gradient blob */}
                                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />

                                        <div className={`flex items-center space-x-2 text-primary font-medium mb-3 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                                            <Calendar size={16} />
                                            <span className="text-sm tracking-wide uppercase">{exp.duration}</span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>

                                        <div className={`flex items-center space-x-2 text-foreground/70 mb-4 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                                            <Briefcase size={16} className="text-secondary" />
                                            <span className="font-semibold">{exp.company}</span>
                                        </div>

                                        <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                                            {exp.description}
                                        </p>

                                        <div className={`flex flex-wrap gap-2 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                                            {exp.technologies.map((tech, tIndex) => (
                                                <span key={tIndex} className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 text-foreground/80 border border-white/10">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
