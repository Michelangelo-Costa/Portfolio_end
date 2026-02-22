import type { Work } from "@/types";
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
} from "@/lib/icons";

export const arrWorks: Work[] = [
  {
    company: "PET-Saúde: Inovação e Saúde Digital no SUS",
    role: "Developer",
    duration: "2025 - Presente",
    logo: "/src/works/petsaude.webp",
    about:
      "Desenvolvedor no PET-Saúde/I&SD, programa em parceria entre a UNIFESSPA e o Ministério da Saúde, com foco na transformação digital do SUS, participando de iniciativas de inovação e desenvolvimento de soluções para a saúde pública.",
  },
  {
    company: "Doutor PC",
    role: "Suporte de T.I (Estágio)",
    duration: "mai de 2025 - set de 2025",
    logo: "/src/works/doutorpc_logo.jpg",
    about:
      "Estágio em Suporte de T.I — triagem e diagnóstico de incidentes de hardware e software; atendimento técnico e suporte ao usuário.",
  },
  {
    company: "Exception Jr",
    role: "Front-end Developer",
    duration: "nov de 2023 - jul de 2024",
    logo: "/src/works/exceptionjr.webp",
    about:
      "Na Exception, atuei como desenvolvedor front-end, contribuindo para a criação de soluções web modernas. Minhas responsabilidades envolveram o desenvolvimento de interfaces responsivas e componentizadas.",
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
      { icon: PrismaIcon, name: "Prisma" },
    ],
  },
  {
    label: "Banco de Dados",
    skills: [{ icon: PostgreSQLIcon, name: "PostgreSQL" }],
  },
  {
    label: "DevOps & Ferramentas",
    skills: [
      { icon: DockerIcon, name: "Docker" },
      { icon: GitIcon, name: "Git" },
      { icon: FigmaIcon, name: "Figma" },
    ],
  },
];

// Mantido para compatibilidade
export const arrSkills: SkillType[] = skillCategories.flatMap((c) => c.skills);
