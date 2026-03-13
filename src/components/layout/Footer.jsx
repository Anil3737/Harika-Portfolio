import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 glass mt-20 relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            Rohini.dev
                        </h3>
                        <p className="text-foreground/70 max-w-sm">
                            AI & Machine Learning Engineer passionate about building intelligent systems and creating beautiful technical experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#about" className="text-foreground/70 hover:text-primary transition-colors">About</a></li>
                            <li><a href="#projects" className="text-foreground/70 hover:text-primary transition-colors">Projects</a></li>
                            <li><a href="#skills" className="text-foreground/70 hover:text-primary transition-colors">Skills</a></li>
                            <li><a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-full hover:text-primary hover:border-primary transition-all">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-full hover:text-[#0A66C2] hover:border-[#0A66C2] transition-all">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-full hover:text-[#1DA1F2] hover:border-[#1DA1F2] transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href="mailto:your.email@example.com" className="p-2 glass rounded-full hover:text-primary hover:border-primary transition-all">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
                    <p>© {currentYear} Rohini. All rights reserved.</p>
                    <p className="flex items-center mt-2 md:mt-0">
                        Built with <Heart size={14} className="mx-1 text-red-500" /> using React & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
}
