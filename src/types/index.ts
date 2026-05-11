export interface Project {
  href?: string;
  linkPreview?: string;
  name: string;
  slug: string;
  desc: string;
  longDesc?: string;
  challenges?: string[];
  learnings?: string[];
  github?: string;
  githubBack?: string;
  tech: string[];
  img?: string;
  favicon?: string;
  featured?: boolean;
  complexity?: "simple" | "complex";
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  logo: string;
  description?: string;
}

export interface Work {
  company: string;
  role: string;
  duration: string;
  logo: string;
  about: string;
}

export interface Certificate {
  href: string;
  course: string;
  teacher: string;
  tags?: string[];
}

export interface ProjectCardProps {
  href?: string;
  linkPreview?: string;
  name: string;
  slug: string;
  desc: string;
  tech?: string[];
  img?: string;
  favicon?: string;
  featured?: boolean;
}

export interface PageTitleProps {
  title: string;
  suffix?: boolean;
}
