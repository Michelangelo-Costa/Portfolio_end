import type { Work, Education } from "@/types";
import {
  type IconType,
  ReactIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  TailwindIcon,
  ExpressIcon,
  NodeIcon,
  ViteIcon,
  NextJSIcon,
  PostgreSQLIcon,
  FigmaIcon,
  DockerIcon,
  PythonIcon,
  GitIcon,
  PrismaIcon,
  HTML5Icon,
  CSS3Icon,
  FastifyIcon,
  JWTIcon,
  MongoDBIcon,
  MySQLIcon,
  LinuxIcon,
  SwaggerIcon,
  InsomniaIcon,
} from "@/lib/icons";

export const arrWorks: Work[] = [
  {
    company: "PET-Saúde: Inovação e Saúde Digital no SUS",
    role: "Full Stack Developer",
    duration: "2025 - Presente",
    logo: "/src/works/petsaude.webp",
    about:
      "Desenvolvedor no PET-Saúde/I&SD, programa em parceria entre a UNIFESSPA e o Ministério da Saúde, com foco na transformação digital do SUS, participando de iniciativas de inovação e desenvolvimento de soluções para a saúde pública.",
  },
  {
    company: "Exception Jr",
    role: "Front-end Developer",
    duration: "nov de 2023 - jul de 2024",
    logo: "/src/works/exceptionjr.webp",
    about:
      "Na Exception, atuei como desenvolvedor front-end, contribuindo para a criação de soluções web modernas. Minhas responsabilidades envolveram o desenvolvimento de interfaces responsivas e componentizadas.",
  },
  {
    company: "Doutor PC",
    role: "Suporte de T.I (Estágio)",
    duration: "mai de 2025 - set de 2025",
    logo: "/src/works/doutorpc_logo.jpg",
    about:
      "Estágio em Suporte de T.I — triagem e diagnóstico de incidentes de hardware e software; atendimento técnico e suporte ao usuário.",
  },
];

type SkillType = {
  icon: IconType;
  name: string;
};

export type SkillCategory = {
  label: string;
  skills: SkillType[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: "Linguagens",
    skills: [
      { icon: TypeScriptIcon, name: "TypeScript" },
      { icon: JavaScriptIcon, name: "JavaScript" },
      { icon: PythonIcon, name: "Python" },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { icon: HTML5Icon, name: "HTML5" },
      { icon: CSS3Icon, name: "CSS3" },
      { icon: ReactIcon, name: "React" },
      { icon: NextJSIcon, name: "Next.js" },
      { icon: ViteIcon, name: "Vite" },
      { icon: TailwindIcon, name: "Tailwind CSS" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { icon: NodeIcon, name: "Node.js" },
      { icon: ExpressIcon, name: "Express" },
      { icon: FastifyIcon, name: "Fastify" },
      { icon: PrismaIcon, name: "Prisma" },
      { icon: JWTIcon, name: "JWT" },
    ],
  },
  {
    label: "Banco de Dados",
    skills: [
      { icon: PostgreSQLIcon, name: "PostgreSQL" },
      { icon: MongoDBIcon, name: "MongoDB" },
      { icon: MySQLIcon, name: "MySQL" },
    ],
  },
  {
    label: "DevOps & Ferramentas",
    skills: [
      { icon: DockerIcon, name: "Docker" },
      { icon: GitIcon, name: "Git" },
      { icon: LinuxIcon, name: "Linux" },
      { icon: SwaggerIcon, name: "Swagger" },
      { icon: InsomniaIcon, name: "Insomnia" },
      { icon: FigmaIcon, name: "Figma" },
    ],
  },
];

// Mantido para compatibilidade
export const arrSkills: SkillType[] = skillCategories.flatMap((c) => c.skills);

export const arrEducation: Education[] = [
  {
    institution: "UNIFESSPA",
    degree: "Bacharelado em Sistemas de Informação",
    duration: "2023 — Presente",
    logo: "/src/works/Logo_Unifesspa.png",
    description:
      "Universidade Federal do Sul e Sudeste do Pará. Cursando Sistemas de Informação com foco em desenvolvimento de software, algoritmos, banco de dados e engenharia de software.",
  },
];

export const currentlyLearning: string[] = [
  "Next.js App Router",
  "Testes com Vitest & Testing Library",
  "AWS Cloud Foundations",
  "SQL avançado & Performance",
];
