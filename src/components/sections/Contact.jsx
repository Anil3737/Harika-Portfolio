import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

export default function Contact() {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // This is a placeholder since actual EmailJS credentials are not provided
        // Replace with real emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', formRef.current, 'PUBLIC_KEY')
        setTimeout(() => {
            setSubmitStatus('success');
            setIsSubmitting(false);
            formRef.current.reset();

            setTimeout(() => setSubmitStatus(null), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 relative z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <SectionHeading title="Get In Touch" subtitle="Contact" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-3xl font-bold text-foreground mb-4">Let's talk about your project</h3>
                            <p className="text-foreground/70 text-lg">
                                I'm currently available for full-time roles and freelance projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>
                        </div>

                        <div className="space-y-6 pt-4">
                            <div className="flex items-center space-x-4 p-4 glass rounded-2xl hover:border-primary/50 transition-colors">
                                <div className="p-3 bg-primary/20 text-primary rounded-xl">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-foreground/50 font-medium">Email</p>
                                    <p className="text-lg font-semibold text-foreground">rohini@example.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-4 glass rounded-2xl hover:border-secondary/50 transition-colors">
                                <div className="p-3 bg-secondary/20 text-secondary rounded-xl">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-foreground/50 font-medium">Phone</p>
                                    <p className="text-lg font-semibold text-foreground">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-4 glass rounded-2xl hover:border-primary/50 transition-colors">
                                <div className="p-3 bg-primary/20 text-primary rounded-xl">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-foreground/50 font-medium">Location</p>
                                    <p className="text-lg font-semibold text-foreground">San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="glass p-8 rounded-3xl space-y-6"
                        >
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="user_name" className="block text-sm font-medium text-foreground/80 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        id="user_name"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="user_email" className="block text-sm font-medium text-foreground/80 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        id="user_email"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="5"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground resize-none"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative z-10 flex items-center space-x-2">
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={24} className="animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : submitStatus === 'success' ? (
                                        <span>Message Sent!</span>
                                    ) : (
                                        <>
                                            <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </span>
                            </button>

                            {submitStatus === 'success' && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-secondary text-sm text-center font-medium"
                                >
                                    Thank you! Your message has been sent successfully.
                                </motion.p>
                            )}
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
