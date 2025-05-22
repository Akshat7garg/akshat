import { Linkedin, Github, Twitter, CodeXml, GraduationCap, TriangleAlert, Mail, MessageCircleMore } from "lucide-react";
import profile from "@/assets/profile.webp";
import profile1 from "@/assets/profile1.webp";
import error from "@/assets/error.webp";

const socialLinks = [
    {
        title: "GitHub",
        url: "https://github.com/Akshat7garg",
        icon: Github
    },
    {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/akshat-garg-136b56293/",
        icon: Linkedin
    },
    {
        title: "Twitter",
        url: "https://x.com/AkshatGarg44477",
        icon: Twitter
    },
    {
        title: "LeetCode",
        url: "https://leetcode.com/u/Akshat7garg/",
        icon: CodeXml
    }
];

const details = {
    name: import.meta.env.VITE_DETAILS_NAME_FIRST,
    fullName: `${import.meta.env.VITE_DETAILS_NAME_FIRST} ${import.meta.env.VITE_DETAILS_NAME_LAST}`,
    email: import.meta.env.VITE_DETAILS_EMAIL_ID
};

const introduction = {
    avatarURL: profile1,
    avatarAlt: "A",
    subheading: `Hi, I'm ${import.meta.env.VITE_DETAILS_NAME_FIRST} ${import.meta.env.VITE_DETAILS_NAME_LAST} 👋🏻`,
    heading1: "Engineer crafting innovative",
    heading2: "digital experiences.",
    tagline: "Software Engineer specializing in React, Next.js, Node.js, and AI, building scalable web apps with Firebase, WebSocket, Docker, and LangChain.",
    resume: {
        link: "https://drive.google.com/file/d/1qWp_vqb4gAbxMo9YVKUEvFzRUMRINaVD/view?usp=sharing",
        text: "My Resume",
    }
};

const about = {
    subheading: "Introduction",
    heading: "About Me",
    avatarURL: profile,
    avatarAlt: import.meta.env.VITE_DETAILS_NAME_FIRST,
    description: "I'm a passionate Software Engineer skilled in developing scalable web applications using modern technologies. With expertise in both frontend and backend, I also enjoy exploring game development by working on creative gaming projects in my spare time.",
    education: {
        icon: GraduationCap,
        title: "Education",
        college: "Raj Kumar Goel Institute of Technology",
        degree: "Bachelor's Degree in Artificial Intelligence & Machine Learning",
        duration: "2022 - 2026",
        grade: "CGPA: 7.73 (currently in 6th semester)"
    }
};

const skills = {
    subheading: "Core Expertise",
    heading: "My Skillset",
    tagline: "Blending creativity and technical skill to craft scalable, user-focused solutions across the full stack.",
    stack: [
        { name: "HTML5", icon: "html5.svg" },
        { name: "CSS3", icon: "css3.svg" },
        { name: "JavaScript", icon: "javascript.svg" },
        { name: "React.js", icon: "react.svg" },
        { name: "Next.js", icon: "nextjs.svg" },
        { name: "TypeScript", icon: "typescript.svg" },
        { name: "Node.js", icon: "nodejs.svg" },
        { name: "Express.js", icon: "express.svg" },
        { name: "Langchain.js", icon: "langchain.svg" },
        { name: "Tailwind CSS", icon: "tailwindcss.svg" },
        { name: "MongoDB", icon: "mongodb.svg" },
        { name: "Firebase", icon: "firebase.svg" },
        { name: "Supabase", icon: "supabase.svg" },
        { name: "Prisma", icon: "prisma.svg" },
        { name: "PostgreSQL", icon: "postgresql.svg" },
        { name: "Socket.io", icon: "socketio.svg" },
        { name: "Git & GitHub", icon: "git.svg" },
        { name: "Java", icon: "java.svg" },
        { name: "Docker", icon: "docker.svg" },
        { name: "C#", icon: "csharp.svg" },
        { name: "Unity 2D/3D", icon: "unity.svg" },
        { name: "Blender 2D/3D", icon: "blender.svg" }
    ]
};

const experiences = {
    subheading: "Where I've Contributed",
    heading: "My Work Experience",
    tagline: "Driving results in dynamic environments through technical proficiency, adaptability, and a collaborative approach.",
    error: {
        image: error,
        alt: "Error",
        icon: TriangleAlert,
        heading: "Error! data not found",
        content: "Yes, that's right. While I may not yet have any industrial experience, but I bring over two years of hands-on experience in coding and software development through self-directed learning and personal projects."
    },
    works: [],
};

const projects = {
    subheading: "What I've Built",
    heading: "My Projects",
    tagline: "Building full-stack solutions with a focus on code quality, performance, and user-centric design.",
    myWork: [
        {
            title: "JourneyCraft AI",
            description: "AI-driven travel planner generating personalized itineraries using NLP and dynamic destination data.",
            stack: [
                "React.js",
                "Node.js/Express.js",
                "Firebase",
                "Gemini Embedded Model",
                "LangChain",
                "Pinecone",
                "RAG"
            ],
            link: "https://github.com/Akshat7garg/journeycraft-ai"
        },
        {
            title: "Serenity AI",
            description: "AI-powered mental wellness platform with emotion tracking, prompt therapy, and support tools.",
            stack: [
                "React.js",
                "Node.js/Express.js",
                "Prisma",
                "Supabase",
                "Gemini Embedded Model",
                "LangChain",
                "Pinecone",
                "RAG"
            ],
            link: "https://github.com/Akshat7garg/journeycraft-ai"
        },
        {
            title: "Midnight Dash",
            description: "Endless 3D runner game with physics-based mechanics and environment transitions.",
            stack: [
                "C#",
                "Unity 3D",
                "Blender 3D",
                "React.js"
            ],
            link: "https://github.com/Akshat7garg/journeycraft-ai"
        },
        {
            title: "WhisperNet",
            description: "Decentralized P2P chat app leveraging WebRTC and WebSocket for real-time encrypted messaging.",
            stack: [
                "Next.js",
                "TypeScript",
                "Node.js/Express.js",
                "Prisma",
                "Supabase",
                "Socket.io",
                "WebRTC"
            ],
            link: "https://github.com/Akshat7garg/journeycraft-ai"
        },
        {
            title: "Aries",
            description: "Modular AI chatbot integrating multiple LLMs for grammar, productivity, and advisory use-cases.",
            stack: [
                "React.js",
                "Node.js/Express.js",
                "Firebase",
                "Gemini Embedded Model"
            ],
            link: "https://github.com/Akshat7garg/journeycraft-ai"
        },
        {
            title: "CVision",
            description: "AI-enhanced resume builder with JD-based validation and real-time template editing.",
            stack: [
                "React.js",
                "TypeScript",
                "Node.js/Express.js",
                "Firebase",
                "Gemini Embedded Model",
                "LangChain",
                "Pinecone",
                "RAG"
            ],
            link: "https://github.com/Akshat7garg/journeycraft-ai"
        },
        {
            title: "Goblet of Fire",
            description: "Real-time multiplayer gaming platform with turn-based logic and socket-driven interactions.",
            stack: [
                "Next.js",
                "TypeScript",
                "Socket.io",
                "Prisma",
                "Supabase",
                "Game Logic"
            ],
            link: "https://github.com/Akshat7garg/journeycraft-ai"
        }
    ]
};

const contact = {
    subheading: "Get in Touch",
    heading: "Contact Me",
    tagline: "Always open to new opportunities, solving challenging problems, and collaborating on meaningful ideas.",
    mail: {
        icon: Mail,
        title: "Drop me a Mail"
    },
    whatsapp: {
        icon: MessageCircleMore,
        title: "Message me on WhatsApp",
        head: "Interested in working together?",
        text: "Feel free to drop me a message on WhatsApp, I'd be happy to discuss your requirements in detail."
    }
};

export { details, socialLinks, introduction, about, skills, experiences, projects, contact };