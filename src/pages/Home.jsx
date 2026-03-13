import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Certifications from '../components/sections/Certifications';
import Contact from '../components/sections/Contact';

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Rohini | AI & Machine Learning Engineer</title>
                <meta name="description" content="Portfolio of Rohini, an AI and Machine Learning Engineer specializing in building intelligent web applications." />
            </Helmet>

            <Hero darkMode={true} />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Certifications />
            <Contact />
        </>
    );
}
