import { FileTextIcon, Github, Linkedin, Mail, TwitterIcon } from "lucide-react";
import { cncvault, devrank, elastica, evapro, globalxport, governai, recovery, studysnap, vanadhikar } from "../../public/projects";
import { Laptop, Smartphone, Headphones, Monitor, Keyboard, Server } from 'lucide-react';

export const myself = {
    name: "Girish Gaikwad",
    firstName: "Girish",
    lastName: "Gaikwad",
    profilePicture: "/me.png",
    gallaryImages: [
        "/me.png",
        "/me2.jpeg",
        "/me3.jpeg",
        "/me4.jpeg",
    ],
    githubImg: "https://avatars.githubusercontent.com/u/145460775?v=4",
    yearsOfExperience: "1.5",
    title: "Full Stack Developer",
    publicDescription: "Experienced software engineer seeking innovative solutions to complex problems. Specializing in architecting Web Applications and integrating AI models into production.         <br/>       Focused on building robust, scalable tools that drive real-world impact and streamline backend operations.",
    description: "I build scalable web and mobile applications using modern technologies.",
    roles: ["FULL_STACK_ENGINEER", "PRODUCT_ENGINEER", "BACKEND_ARCHITECT", "MOBILE_DEVELOPER"],
    skills: [
        "React", "Next.js", "TypeScript", "Node.js", "Python", "GraphQL", "PostgreSQL", "MongoDB"
    ],
    speaklanguages: [{ "English": "Advanced" }, { "Hindi": "Fluent" }, { "Marathi": "Native" }, { "Tamil": "Fluent" }],
    socials: [
        {
            name: "Email", url: "mailto:girishgaikwad@gmail.com", icon: <Mail height="16" width="16" className="group-hover:text-blue-400 fill-current transition-colors" />
        },
        { name: "LinkedIn", url: "https://linkedin.com/in/girish-gaikwad", icon: <Linkedin height="16" width="16" className="group-hover:text-blue-400 fill-current first-letter:transition-colors" /> },
        { name: "GitHub", url: "https://github.com/girishgaikwad", icon: <Github height="16" width="16" className="group-hover:text-blue-400 fill-current transition-colors" /> },
        { name: "Resume", url: "/Girish_Gaikwad_Resume.pdf", icon: <FileTextIcon height="16" width="16" className="group-hover:text-blue-400 transition-colors" /> },
        { name: "Twitter", url: "https://twitter.com/girishgaikwad", icon: <TwitterIcon height="16" width="16" className="group-hover:text-blue-400 fill-current transition-colors" /> },
    ],
    playlist: [
        {
            name: "Is There Someone Else?",
            artist: "The Weeknd",
            src: "/media/IsThereSomeoneElse.mp4"
        },
        {
            name: "SUNFLOWER X AM I DREAMING",
            artist: "Post Malone, Swae Lee",
            src: "/media/SunflowerXAmIDreaming.mp3"
        },
        {
            name: "The Living TombStone",
            artist: "Sam Haft",
            src: "/media/TheLivingTombstone.mp3"
        },
        {
            name: "New Jeans",
            artist: "Jiandro x Dxrkaii",
            src: "/media/NewJeans.mp3"
        },
        {
            name: "One Of The Girls",
            artist: "The Weeknd, JENNIE & Lily Rose Depp",
            src: "/media/OneOFtheGirls.mp3"
        },
    ],
    hardwareData: [
        {
            id: "DEV.01",
            name: "Lenovo IdeaPad 3",
            status: "ONLINE",
            icon: Laptop,
            specs: ["NVIDIA RTX 3050 GPU", "16GB DDR5 / 512GB SSD", "120Hz Primary Display"]
        },
        {
            id: "MOB.02",
            name: "Poco X5",
            status: "SYNCED",
            icon: Smartphone,
            specs: ["6GB RAM / 128GB ROM", "120Hz AMOLED Screen", "Mobile Testing Uplink"]
        },
        {
            id: "AUD.03",
            name: "Rockerz 650 Pro",
            status: "ACTIVE",
            icon: Headphones,
            specs: ["Dolby Atmos Supported", "Over-Ear Isolation", "Deep Focus Enabler"]
        },
        {
            id: "DIS.04",
            name: "External Display",
            status: "ACTIVE",
            icon: Monitor,
            specs: ["Dual Monitor Setup", "High Color Accuracy", "Code Expansion View"]
        },
        {
            id: "INP.05",
            name: "Mech Keyboard",
            status: "LINKED",
            icon: Keyboard,
            specs: ["Tactile/Linear Switches", "Custom Keycaps", "High-APM Input"]
        },
        {
            id: "SRV.06",
            name: "Local Node",
            status: "STANDBY",
            icon: Server,
            specs: ["Docker Container Host", "Local LAN Testing", "Database Hosting"]
        }
    ],

    experience: [
        {
            company: 'Thoothukudi District Police (Cyber-Crime Dept)',
            role: 'Backend AI Developer (Intern)',
            date: 'APR 2025 - NOV 2025',
            tag: 'SYS.GOV_SEC',
            image: '/work/tut.png', // Replace with your actual image path
            description: [
                'Engineered SecureFestOps, an AI-driven platform for digital forensics and law enforcement.',
                'Applied computer vision and AI-based forensic analysis to assist in departmental operations.',
                'Collaborated directly with law enforcement to translate operational requirements into technical features.',
                // '1. In partnership with the Police Cybercrime team, spearheaded the design of an AI-powered forecasting system to enable proactive planning and optimize crowd flow in high-traffic public areas.',
                // '2. Engineered intelligent allocation models that process live data streams to generate optimal action plans, significantly reducing the need for manual oversight in congested zones.',
                // '3. Architected a scalable AI-driven platform that provides public operations with powerful predictive analytics, creating a framework for continuous improvement and real-time decision support.',           
            ],
            links: [
                { label: 'SECURE_FEST_OPS (INTERNAL)', url: 'http://secure-fest-ops.vercel.app/' }
            ]
        },
        {
            company: 'EQ-rev',
            role: 'Backend Dev & Architect (Intern)',
            date: 'APR 2025 - JAN 2026',
            tag: 'SYS.ANALYTICS',
            image: '/work/eqrev.png',
            description: [
                'Led EqRev analytics platform development, increasing dashboard reliability by 40% and enabling sales optimization for major e-commerce brands.',
                'Built scalable ETL pipeline on GCP (BigQuery, Cloud Storage) processing 10,000+ SKUs daily for market intelligence.',
                'Reduced data reporting latency by 50% with Node.js backend for real-time SKU performance analytics.'
            ],
            links: [
                { label: 'PRODUCTION.BRAND', url: 'https://eqrev.com' }
            ]
        },
        {
            company: 'Crayon\'d',
            role: 'FullStack Developer (Intern)',
            date: 'AUG 2024 - APR 2025',
            tag: 'SYS.SAAS',
            image: '/work/crayond.png',
            description: [
                'Secured international tax data and ensured compliance.',
                'Refactored backend for scalability and modern tech stack migration.',
                'Collaborated with UAE clients on tax-domain solutions.'
            ],
            links: [
                { label: 'INT_TEST_DOMAIN', url: 'https://emtax.vercel.app/login' },
                // { label: 'SOURCE_CODE', url: '#' }
            ]
        }
    ],
    projects: [
        {
            href: '/apps/globalxport',
            name: 'GlobalXport',
            full: true,
            description: 'AI-powered platform that automates international trade compliance, export documentation, and logistics to simplify cross-border shipping.',
            image: { src: globalxport },
            link: "https://globalxport.tech"
        },
        {
            href: '/apps/StudySnap',
            name: 'StudySnap',
            full: true,
            image: { src: studysnap },
            description: 'AI-powered study assistant that provides students with syllabus-aligned lessons, instant step-by-step explanations, and interactive quizzes tailored to specific educational boards like CBSE and ICSE.',
            link: "https://future-stack-gen-ai-hackathon.vercel.app/"
        },
        {
            href: '/apps/Cnc-Vault',
            name: 'Cnc-Vault',
            full: false,
            image: { src: cncvault },
            description: 'centralized management system designed to provide secure, enterprise-level access to CNC machine programs, PLC logic, and configuration data for industrial engineering.',
            link: "https://cnc-machines.vercel.app/"
        },
        {
            href: '/apps/VanAdhikar',
            name: 'VanAdhikar',
            full: false,
            image: { src: vanadhikar },
            description: 'digital platform that streamlines Forest Rights Act (FRA) claims by digitizing legacy documents and tracking land rights through a live, interactive 3D map.',
            link: "https://van-adhikar.vercel.app/"
        },
        {
            href: '/apps/evapro',
            name: 'Evapro',
            full: false,
            image: { src: evapro },
            description: 'AI-powered evaluation system designed to automatically assess and grade flowcharts, algorithms, and pseudocode for academic and coding competitions.',
            link: "https://evapro-jet.vercel.app/"
        },
        {
            href: '/apps/recovery',
            name: 'Recovery',
            full: false,
            image: { src: recovery },
            description: 'Integrated cybersecurity and investigation platform designed to streamline incident response, digital evidence gathering, and secure data recovery processes.',
            link: "https://khacks-eta.vercel.app/"
        },
        {
            href: '/apps/govern-ai',
            name: 'Govern-AI',
            full: false,
            image: { src: governai },
            description: 'AI-powered platform for government agencies to streamline policy-making, citizen engagement, and public service delivery.',
            link: "https://govern-ai-dev.vercel.app/"
        },
        {
            href: '/apps/elastica',
            name: 'Elastica',
            full: false,
            image: { src: elastica },
            description: 'An eco-friendly e-commerce platform that sells sustainable home, garden, and fitness products—like handcrafted planters and dumbbells—made from recycled industrial rubber by women artisans.',
            link: "https://www.elasticastore.in/"
        },
        {
            href: '/apps/devrank',
            name: 'DevRank',
            full: true,
            image: { src: devrank },
            description: 'Developer evaluation platform that analyzes coding activity, GitHub contributions, and project portfolios to automatically score and rank software engineers.',
            link: "http://dev-rank.vercel.app/"
        },
    ],
    achievements: [
        {
            id: 'ACHV-001',
            title: 'Top 50 Campus Startups - Google for Startups × Campus Fund 2025',
            date: 'JAN 2025',
            tag: 'SYS.AWARD',
            status: 'VERIFIED',
            image: '/achievements/google-startups.png',
            description: 'Chosen for the Google for Startups × Campus Fund 2025, receiving $250,000 US in Google Cloud credits.',
            link: { label: 'VIEW_RECORD', url: '#' }
        },
        {
            id: 'ACHV-002',
            title: 'Smart India Hackathon Finalist',
            date: 'DEC 2024',
            tag: 'SYS.AWARD',
            status: 'VERIFIED',
            image: '/achievements/sih2024.png',
            description: 'Selected as a finalist in Smart India Hackathon 2024 for building a smart parking system for the Thoothukudi Police Department.',
            link: { label: 'VIEW_RECORD', url: 'https://www.linkedin.com/posts/girish-gaikwad2055_growththroughlearning-sih2024-amazonshambhav-activity-7274111472371220480-HKxS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErbVJsBJw6jHtS7-6Rl8GcGYu-CJFf99oE' }
        },
        {
            id: 'ACHV-003',
            title: '3rd Place - IIT Delhi Blue Print Challenge',
            date: 'FEB 2025',
            tag: 'SYS.AWARD',
            status: 'VERIFIED',
            image: '/achievements/econ2025.png',
            description: 'Secured third place at IIT Delhi\'s Blue Print Challenge by designing and building an innovative tech solution under pressure.',
            link: { label: 'VIEW_RECORD', url: 'https://www.linkedin.com/posts/girish-gaikwad2055_blueprints2025-iitdelhi-entrepreneurship-activity-7296339944069824512-gsV1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErbVJsBJw6jHtS7-6Rl8GcGYu-CJFf99oE' }
        },
        {
            id: 'ACHV-004',
            title: 'Hackathon Problem Statement Contributor',
            date: 'AUG 2025',
            tag: 'SYS.CONTRIB',
            status: 'MERGED',
            image: '/achievements/tutps.png',
            description: 'Contributed the original problem statement selected for a government hackathon focused on smart parking solutions.',
            link: { label: 'LINKEDIN', url: 'https://www.linkedin.com/posts/girish-gaikwad2055_securefestops-govtech-aiforsafety-activity-7353242540252229633-pfgt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErbVJsBJw6jHtS7-6Rl8GcGYu-CJFf99oE' }
        }
    ],
    clg: {
        name: "Bannari Amman Institute of Technology",
        degree: "B.Tech. in Information Technology",
        duration: "2014 - 2018",
        currentYear: "3rd Year Student",
        img: "/bit.png"
    }
};