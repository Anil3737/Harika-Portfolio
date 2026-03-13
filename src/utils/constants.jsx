import { Code2, BrainCircuit, Database, Laptop, Terminal, Layers } from 'lucide-react';

export const skillsData = [
    {
        title: "Programming",
        icon: <Code2 size={24} />,
        skills: [
            { name: "Python", level: 90 },
            { name: "JavaScript / TypeScript", level: 85 },
            { name: "SQL", level: 80 },
            { name: "C++", level: 70 }
        ]
    },
    {
        title: "AI & Machine Learning",
        icon: <BrainCircuit size={24} />,
        skills: [
            { name: "TensorFlow & Keras", level: 85 },
            { name: "PyTorch", level: 80 },
            { name: "Scikit-Learn", level: 90 },
            { name: "NLP (Transformers)", level: 75 },
            { name: "Computer Vision (OpenCV)", level: 80 }
        ]
    },
    {
        title: "Web Development",
        icon: <Laptop size={24} />,
        skills: [
            { name: "React JS", level: 85 },
            { name: "Node.js & Express", level: 75 },
            { name: "Tailwind CSS", level: 90 },
            { name: "REST APIs", level: 85 }
        ]
    },
    {
        title: "Tools & Technologies",
        icon: <Terminal size={24} />,
        skills: [
            { name: "Git & GitHub", level: 90 },
            { name: "Docker", level: 70 },
            { name: "Linux / Unix", level: 80 },
            { name: "Jupyter Notebooks", level: 95 }
        ]
    }
];

export const experienceData = [
    {
        role: "Machine Learning Intern",
        company: "TechNova AI Solutions",
        duration: "June 2025 - Present",
        description: "Developing robust NLP models for sentiment analysis and automating data pipelines using Python and TensorFlow. Improved model accuracy by 15%.",
        technologies: ["Python", "TensorFlow", "NLP", "Pandas"]
    },
    {
        role: "Full Stack Developer Intern",
        company: "WebCraft Agency",
        duration: "Jan 2025 - May 2025",
        description: "Built scalable web applications using React and Node.js. Integrated third-party APIs and optimized frontend performance by 30%.",
        technologies: ["React", "Node.js", "Express", "MongoDB"]
    },
    {
        role: "Data Science Researcher",
        company: "University AI Lab",
        duration: "Aug 2024 - Dec 2024",
        description: "Conducted research on computer vision algorithms for medical image processing. Published findings in the university journal.",
        technologies: ["PyTorch", "OpenCV", "Scikit Image"]
    }
];

export const projectsData = [
    {
        id: 1,
        title: "AI Intelligent Chatbot",
        category: "AI/ML",
        description: "A contextual chatbot powered by custom-trained transformer models. capable of handling customer service queries with 90% accuracy.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
        technologies: ["Python", "PyTorch", "Hugging Face", "React"],
        github: "https://github.com",
        demo: "https://demo.com"
    },
    {
        id: 2,
        title: "Real-time Face Recognition System",
        category: "Computer Vision",
        description: "High-speed facial recognition system using OpenCV and deep learning, deployed at the edge with an optimized inference pipeline.",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2000&auto=format&fit=crop",
        technologies: ["OpenCV", "TensorFlow", "Flask", "Docker"],
        github: "https://github.com",
        demo: "https://demo.com"
    },
    {
        id: 3,
        title: "AlgoTrader: Stock Price Predictor",
        category: "Data Science",
        description: "Time-series forecasting model using LSTM networks to predict short-term stock price movements based on historical data and news sentiment.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2000&auto=format&fit=crop",
        technologies: ["Python", "Keras", "Pandas", "yfinance API"],
        github: "https://github.com",
        demo: "https://demo.com"
    },
    {
        id: 4,
        title: "Smart Resume Screener",
        category: "NLP",
        description: "Automated ATS tool that uses natural language processing to rank resumes against job descriptions, reducing screening time by 70%.",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2000&auto=format&fit=crop",
        technologies: ["Spacy", "NLTK", "Scikit-Learn", "FastAPI"],
        github: "https://github.com",
        demo: "https://demo.com"
    },
    {
        id: 5,
        title: "Portfolio Web App",
        category: "Web Dev",
        description: "A FAANG-level developer portfolio featuring 3D animations, custom particle backgrounds, and dynamic project filtering.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop",
        technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com",
        demo: "https://demo.com"
    },
    {
        id: 6,
        title: "DeepFake Detection",
        category: "Computer Vision",
        description: "Convolutional neural network architecture designed to detect manipulated media and deepfakes with a high degree of reliability.",
        image: "https://images.unsplash.com/photo-1633536856000-dcbd99c084ac?q=80&w=2000&auto=format&fit=crop",
        technologies: ["PyTorch", "ResNet", "Albumentations"],
        github: "https://github.com",
        demo: "https://demo.com"
    }
];

export const certificationsData = [
    {
        title: "Deep Learning Specialization",
        issuer: "Coursera / deeplearning.ai",
        date: "2024",
        link: "#"
    },
    {
        title: "TensorFlow Developer Certificate",
        issuer: "Google",
        date: "2025",
        link: "#"
    },
    {
        title: "AWS Certified Machine Learning",
        issuer: "Amazon Web Services",
        date: "2025",
        link: "#"
    }
];

export const achievementsData = [
    {
        title: "1st Place - Global AI Hackathon",
        description: "Built an accessibility tool using computer vision that translates sign language in real-time.",
        date: "Nov 2025"
    },
    {
        title: "Kaggle Competitions Master",
        description: "Ranked in the top 1% for the 'Computer Vision Object Detection' competition.",
        date: "Aug 2025"
    },
    {
        title: "Open Source Contributor",
        description: "Contributed core functionality to the Hugging Face Transformers library.",
        date: "Ongoing"
    }
];
