import { ExperienceRole, Project, SkillCategory, CaseStudyStep, SocialLink, NavItem } from './types';

export const APP_DATA = {
  profile: {
    name: "Kyle Isaac Mendoza",
    title: "Full‑Stack & AI Automation Developer",
    tagline: "I architect self-healing systems and intelligent agents that turn manual chaos into automated order.",
    bio: "I don't just write code; I design ecosystems. My background in full-stack engineering provided the discipline for structure, but my passion lies in AI agents. I bridge the gap between deterministic logic and probabilistic AI, creating applications that not only function but 'think'. Currently leading RAG initiatives that process enterprise data at scale.",
    values: [
      { title: "Scalable Autonomy", description: "Building systems that require zero maintenance. If it needs a human click, it's not finished." },
      { title: "Pragmatic Intelligence", description: "AI for ROI, not hype. I deploy LLMs only where they solve problems that regex can't." },
      { title: "Full-Stack Foundation", description: "Great AI needs a great home. I ensure the hosting, database, and UI are as robust as the model." },
    ]
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "AI & Automation", href: "#ai-automation" },
  ] as NavItem[],
  skills: [
    {
      title: "Web Development",
      description: "High-performance SPAs and SRR applications.",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Performance Optimization", "System Design"]
    },
    {
      title: "Mobile Development",
      description: "Cross-platform native experiences.",
      skills: ["React Native", "TypeScript", "Redux Toolkit", "Axios", "Mobile UI Patterns", "App Store Deployment"]
    },
    {
      title: "Backend & AI Automation",
      description: "Scalable APIs and intelligent agent workflows.",
      skills: ["Python (FastAPI)", "Ruby on Rails", "PostgreSQL", "n8n", "LangChain", "OpenAI/Anthropic/Gemini APIs", "Docker", "Railway"]
    }
  ] as SkillCategory[],
  experience: [
    {
      id: "exp-4",
      title: "Lead AI Automation Developer",
      company: "GCGC",
      period: "2024 – Present",
      techStack: ["n8n", "Next.js", "FastAPI", "Gemini 1.5", "Railway"],
      achievements: [
        "Architected an enterprise RAG system processing 50k+ documents monthly.",
        "Reduced manual data entry by 85% implementing n8n workflows connecting CRM to billing.",
        "Led a team of 3 engineers in adopting AI-first development methodologies."
      ]
    },
    {
      id: "exp-3",
      title: "Mobile Developer & Backend Engineer",
      company: "Digital Digiteer",
      period: "2023 – 2024",
      techStack: ["React Native", "Ruby on Rails", "PostgreSQL", "Turbo Frames"],
      achievements: [
        "Developed and shipped a fintech mobile app with 10k+ active users.",
        "Optimized Rails API response times by 40% through query caching and indexing.",
        "Implemented real-time notification system using ActionCable and Redis."
      ]
    },
    {
      id: "exp-2",
      title: "Mobile Intern",
      company: "Digital Digiteer",
      period: "2023",
      techStack: ["React Native", "TypeScript", "Redux"],
      achievements: [
        "Migrated legacy Javascript codebase to TypeScript, reducing runtime errors by 30%.",
        "Assisted in integrating payment gateways (Stripe) within the mobile wallet."
      ]
    },
    {
      id: "exp-1",
      title: "Web Developer",
      company: "Pandora Technology Incorporated",
      period: "2022 – 2023",
      techStack: ["React", "Next.js", "CSS Modules"],
      achievements: [
        "Delivered 5+ custom client websites with perfect Lighthouse performance scores.",
        "Built a custom e-commerce dashboard for a local retail chain."
      ]
    }
  ] as ExperienceRole[],
  projects: [
    {
      id: "proj-1",
      title: "AutoDoc AI",
      role: "Lead Developer",
      category: "ai-assisted",
      summary: "An intelligent document processing platform that extracts structured data from invoices and contracts.",
      techStack: ["Next.js", "FastAPI", "OpenAI", "PostgreSQL"],
      outcomes: "Automated onboarding saved clients 15+ hours/week per admin.",
      links: { demo: "#", github: "#" },
      imageUrl: "https://picsum.photos/600/400?random=1"
    },
    {
      id: "proj-2",
      title: "FleetTrack Mobile",
      role: "Mobile Engineer",
      category: "no-ai",
      summary: "Real-time logistics tracking app for drivers with offline capabilities.",
      techStack: ["React Native", "Firebase", "Google Maps API"],
      outcomes: "Improved delivery efficiency by 20% via optimized route rendering.",
      links: { caseStudy: "#" },
      imageUrl: "https://picsum.photos/600/400?random=2"
    },
    {
      id: "proj-3",
      title: "CRM Sync Workflow",
      role: "Automation Architect",
      category: "n8n",
      summary: "Complex n8n workflow synchronizing HubSpot deals with Slack alerts and PostgreSQL records.",
      techStack: ["n8n", "JavaScript", "HubSpot API", "Slack API"],
      outcomes: "Zero data discrepancies achieved over 6 months of operation.",
      links: { github: "#" },
      imageUrl: "https://picsum.photos/600/400?random=3"
    }
  ] as Project[],
  aiCaseStudy: [
    {
      title: "Ingestion",
      description: "Webhooks receive data from client forms or emails.",
      iconName: "server"
    },
    {
      title: "Reasoning",
      description: "LLM (Gemini/GPT-4) classifies intent and extracts entities.",
      iconName: "ai"
    },
    {
      title: "Execution",
      description: "n8n routes data to CRM, triggers billing, or drafts replies.",
      iconName: "workflow"
    },
    {
      title: "Storage",
      description: "Structured logs saved to PostgreSQL for analytics.",
      iconName: "database"
    }
  ] as CaseStudyStep[]
};