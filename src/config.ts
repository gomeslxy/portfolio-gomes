export interface DeveloperInfo {
  name: string;
  fullName: string;
  title: string;
  description: string;
  profileImage: string;
  badges: string[];
}

export interface SocialInfo {
  github: string;
  email: string;
  location: string;
}

export interface AboutInfo {
  title: string;
  description: string;
}

export interface Experience {
  position: string;
  company: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  technologies: string;
  image: string;
  github: string;
  demo: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
}

export interface Skill {
  title: string;
  description: string;
  details: string;
  tools: string[];
}

export interface SkillsInfo {
  develop: Skill;
  design: Skill;
}

export interface Config {
  developer: DeveloperInfo;
  social: SocialInfo;
  about: AboutInfo;
  experiences: Experience[];
  projects: Project[];
  contact: ContactInfo;
  skills: SkillsInfo;
}

export const config: Config = {
  developer: {
    name: "Lucas",
    fullName: "Lucas Gomes",
    title: "Engenheiro de Software AI-Native",
    description:
      "Desenvolvedor Fullstack focado em IA, automação e experiências web criativas.",
    profileImage: "/images/profile.png",
    badges: ["16 anos", "Inglês fluente", "IA, Fullstack e Web 3D"],
  },
  social: {
    github: "gomeslxy",
    email: "la181009@gmail.com",
    location: "Indaiatuba - SP",
  },
  about: {
    title: "Sobre mim",
    description:
      "Desenvolvedor Fullstack focado em IA, automação e desenvolvimento web moderno. Tenho 16 anos, sou autodidata e comecei a programar em 2025. Gosto de transformar ideias em produtos digitais com interfaces bonitas, código limpo e arquitetura escalável. Tenho interesse forte em IA, desenvolvimento fullstack, automação e integrações avançadas. Também tenho inglês fluente e foco em projetos que unem IA e Fullstack.",
  },
  experiences: [
    {
      position: "Engenheiro de Software AI-Native",
      company: "Projetos pessoais",
      period: "2025 - Presente",
      location: "Brasil, SP",
      description:
        "Construindo produtos digitais com React, Next.js, TypeScript, Node.js, Python e integrações com IA.",
      responsibilities: [
        "Desenvolver aplicações fullstack modernas",
        "Integrar APIs e recursos de IA",
        "Criar interfaces responsivas e performáticas",
        "Publicar projetos reais na web",
      ],
      technologies: ["TypeScript", "React", "Next.js", "Node.js", "Python", "OpenAI"],
    },
    {
      position: "Engenheiro de Automação e IA",
      company: "Projetos práticos",
      period: "2025 - Presente",
      location: "Brasil, SP",
      description:
        "Explorando Integrações com IA, automação de fluxos de trabalho e arquitetura de sistemas escaláveis.",
      responsibilities: [
        "Criar bots e automações avançadas",
        "Integrar modelos de IA (OpenAI, etc)",
        "Otimizar processos com código",
        "Manter clareza arquitetural e boa performance",
      ],
      technologies: ["Node.js", "Python", "APIs", "OpenAI", "Automação"],
    },
    {
      position: "Desenvolvedor Fullstack",
      company: "Aprendizado autodidata",
      period: "2025",
      location: "Brasil, SP",
      description:
        "Estudando e aplicando fundamentos de frontend, backend, automação e clean code em projetos próprios.",
      responsibilities: [
        "Praticar fundamentos de software",
        "Construir interfaces com React",
        "Criar automações com Python",
        "Melhorar organização e qualidade de código",
      ],
      technologies: ["React", "TypeScript", "Python", "Automação", "Clean Code"],
    },
  ],
  projects: [
    {
      id: 1,
      title: "Bonds Agence",
      category: "Loja de Roupas",
      technologies: "Next.js, OpenAI, TypeScript, TailwindCSS",
      image: "/images/bonds-agence.png",
      github: "https://github.com/gomeslxy/bonds-agence",
      demo: "https://bonds-agence.vercel.app",
      description:
        "Plataforma premium para venda de roupas, com experiência visual elegante e alta performance.",
    },
    {
      id: 2,
      title: "3D Portfolio",
      category: "WebGL & Creative Dev",
      technologies: "React, Three.js, GSAP, TypeScript, Vite",
      image: "/images/portfolio-real.png",
      github: "https://github.com/gomeslxy/portfolio-lucas",
      demo: "https://gomeslxy.vercel.app",
      description:
        "Portfolio pessoal interativo, com animações modernas, smooth scroll e estética minimalista/futurista.",
    },
    {
      id: 3,
      title: "Gomes Bot v2",
      category: "Automation & AI",
      technologies: "Python, Discord API, AI, Automation",
      image: "/images/gomes-bot.png",
      github: "https://github.com/gomeslxy/gomes-bot-v2",
      demo: "",
      description:
        "Bot multifuncional com comandos de automação, integração com APIs externas, IA e sistema de moderação.",
    },
  ],
  contact: {
    email: "la181009@gmail.com",
    github: "https://github.com/gomeslxy",
    linkedin: "https://www.linkedin.com/in/lucas-gomes-amaral-8b058b391/",
    instagram: "http://instagram.com/1llucasgm",
  },
  skills: {
    develop: {
      title: "DESENVOLVIMENTO FULLSTACK",
      description: "Aplicações modernas com React, Node.js e IA",
      details:
        "Crio aplicações modernas usando React, Next.js, TypeScript, Node.js e integrações com IA. Meu foco é construir interfaces rápidas, bem estruturadas e úteis.",
      tools: ["TypeScript", "React", "Next.js", "Node.js", "Python", "Vite", "Clean Code"],
    },
    design: {
      title: "IA E AUTOMAÇÃO",
      description: "Integrações inteligentes e processos otimizados",
      details:
        "Gosto de unir IA e automação para escalar processos. Uso ferramentas modernas e linguagens de script para criar soluções digitais que economizam tempo e aumentam a produtividade de forma eficiente.",
      tools: ["IA / OpenAI", "Automação", "Python", "APIs", "Bots", "Web Scraping"],
    },
  },
};
