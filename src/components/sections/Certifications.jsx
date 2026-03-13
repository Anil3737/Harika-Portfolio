import { motion } from 'framer-motion';
import { Award, Trophy } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { certificationsData, achievementsData } from '../../utils/constants';

export default function Certifications() {
    return (
        <section id="certifications" className="py-20 relative z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <SectionHeading title="Recognition" subtitle="Credentials" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

                    {/* Certifications Block */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3 text-foreground">
                            <span className="p-3 glass rounded-xl text-primary"><Award size={24} /></span>
                            <span>Certifications</span>
                        </h3>

                        <div className="space-y-6">
                            {certificationsData.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="glass p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all flex justify-between items-center group cursor-pointer"
                                >
                                    <div>
                                        <h4 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{cert.title}</h4>
                                        <p className="text-sm text-foreground/60 mt-1">{cert.issuer}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                                            {cert.date}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Achievements Block */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3 text-foreground">
                            <span className="p-3 glass rounded-xl text-secondary"><Trophy size={24} /></span>
                            <span>Achievements</span>
                        </h3>

                        <div className="space-y-6">
                            {achievementsData.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="glass p-6 rounded-2xl border border-white/10 hover:border-secondary/50 transition-all relative overflow-hidden group"
                                >
                                    <div className="absolute -left-20 top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />

                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-semibold text-lg text-foreground w-[75%]">{achievement.title}</h4>
                                        <span className="text-xs text-foreground/50">{achievement.date}</span>
                                    </div>
                                    <p className="text-sm text-foreground/70 leading-relaxed">
                                        {achievement.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
