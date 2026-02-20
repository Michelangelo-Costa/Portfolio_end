import { AnchorHTMLAttributes } from "react";
import type { IconType } from "@/lib/icons";

export interface Project {
  href: string;
  linkPreview?: string;
  name: string;
  desc: string;
  tech: string[];
  img?: string;
  favicon?: string;
  featured?: boolean;
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
}

export interface BlogPost {
  slug: string;
  title: string;
  desc: string;
  date: string;
  tags?: string[];
}

export interface Page {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  external?: boolean;
  download?: boolean;
}

export interface ProjectCardProps {
  href: string;
  linkPreview?: string;
  name: string;
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

export interface ContactLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  Icon: IconType;
  title: string;
  href: string;
}

export interface SimpleCardProps {
  href: string;
  name: string;
  desc: string;
}

export interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  desc: string;
  tags?: string[];
}

export interface SidebarLinkProps {
  item: Page;
  onClose: () => void;
}

export interface HeaderLinkProps {
  to: string;
  title: string;
}
export type Theme = "light" | "dark";

export interface CopyHookReturn {
  isCopied: boolean;
  handleCopy: () => void;
}
export type HeadingProps = React.HTMLProps<HTMLHeadingElement>;

export interface PreComponentProps {
  children: React.ReactElement<{ className?: string; children: string }>;
  [key: string]: unknown;
}
