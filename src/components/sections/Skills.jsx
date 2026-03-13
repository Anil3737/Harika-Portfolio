import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { skillsData } from '../../utils/constants';

export default function Skills() {
    return (
        <section id="skills" className="py-20 relative z-10 bg-foreground/[0.02]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <SectionHeading title="Technical Arsenal" subtitle="Skills" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {skillsData.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                            className="glass p-8 rounded-3xl"
                        >
                            <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3 text-foreground border-b border-white/10 pb-4">
                                <span className="text-primary">{category.icon}</span>
                                <span>{category.title}</span>
                            </h3>

                            <div className="space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="group">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium text-foreground/80 group-hover:text-primary transition-colors">
                                                {skill.name}
                                            </span>
                                            <span className="text-sm text-foreground/50">{skill.level}%</span>
                                        </div>

                                        {/* Progress Bar Track */}
                                        <div className="h-2 w-full bg-foreground/10 rounded-full overflow-hidden">
                                            {/* Animated Progress Fill */}
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 + (skillIndex * 0.1), ease: "easeOut" }}
                                                className={`h-full rounded-full ${skill.level > 85 ? 'bg-gradient-to-r from-primary to-indigo-500' :
                                                        skill.level > 70 ? 'bg-gradient-to-r from-secondary to-green-400' :
                                                            'bg-gradient-to-r from-blue-400 to-cyan-400'
                                                    }`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
