import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Filter } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { projectsData } from '../../utils/constants';

const categories = ["All", "AI/ML", "Computer Vision", "NLP", "Data Science", "Web Dev"];

export default function Projects() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All"
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    return (
        <section id="projects" className="py-20 relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <SectionHeading title="Featured Work" subtitle="Projects" />

                {/* Filter Toolbar */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                    <div className="flex items-center space-x-2 text-foreground/60 px-4">
                        <Filter size={18} />
                        <span className="text-sm font-medium uppercase tracking-wider">Filter:</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                        ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                                        : 'glass text-foreground/80 hover:bg-white/10 hover:text-primary'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative rounded-2xl overflow-hidden glass border border-white/10 hover:border-primary/50 transition-all duration-500"
                            >
                                {/* Project Image */}
                                <div className="relative aspect-video overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                    {/* Overlay Category Tag */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/90 text-white backdrop-blur-md">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div className="p-6 relative z-20">
                                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-foreground/70 text-sm mb-6 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.slice(0, 4).map((tech, index) => (
                                            <span key={index} className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 text-secondary border border-secondary/20">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 4 && (
                                            <span className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 text-foreground/50">
                                                +{project.technologies.length - 4}
                                            </span>
                                        )}
                                    </div>

                                    {/* Action Links */}
                                    <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
                                        >
                                            <Github size={18} />
                                            <span>Code</span>
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-foreground/80 hover:text-secondary transition-colors text-sm font-medium"
                                        >
                                            <ExternalLink size={18} />
                                            <span>Live Demo</span>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}
