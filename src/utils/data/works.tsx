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
    duration: "11/2023 - 07/2024",
    logo: "/src/works/exceptionjr.webp",
    about:
      "Na Exception, atuei como desenvolvedor fullstack, contribuindo para a criação de soluções web modernas. Minhas responsabilidades envolveram desde o desenvolvimento de interfaces responsivas até a implementação de lógicas de negócio e integrações com APIs.",
  },
];

type SkillType = {
  icon: IconType;
  name: string;
};

export const arrSkills: SkillType[] = [
  { icon: ReactIcon, name: "React" },
  { icon: ViteIcon, name: "Vite" },
  { icon: NextJSIcon, name: "Next.js" },
  { icon: TypeScriptIcon, name: "TypeScript" },
  { icon: JavaScriptIcon, name: "JavaScript" },
  { icon: TailwindIcon, name: "Tailwind CSS" },
  { icon: ExpressIcon, name: "Express" },
  { icon: NodeIcon, name: "Node.js" },
  { icon: PostgreSQLIcon, name: "PostgreSQL" },
  { icon: FigmaIcon, name: "Figma" },
];
