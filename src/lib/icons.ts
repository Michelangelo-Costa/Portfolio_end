// Icons imports
import {
  RxPerson,
  RxArrowTopRight,
  RxChevronLeft,
  RxCommit,
  RxClipboardCopy,
  RxCheck,
  RxCross1,
  RxBookmark,
  RxLayers,
  RxRocket,
  RxGithubLogo,
  RxLinkedinLogo,
  RxReader,
  RxDownload,
} from "react-icons/rx";

import { LuSlash, LuMoon, LuSun, LuMail } from "react-icons/lu";

import {
  VscTwitter,
  VscLayoutSidebarRightOff,
  VscLayoutSidebarRight,
} from "react-icons/vsc";

import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiVite,
  SiNextdotjs,
  SiPostgresql,
  SiBun,
} from "react-icons/si";

import { BiLogoFigma, BiLibrary } from "react-icons/bi";

// Navigation & UI Icons
export const PersonIcon = RxPerson;
export const ExternalLinkIcon = RxArrowTopRight;
export const BackIcon = RxChevronLeft;
export const CommitIcon = RxCommit;
export const CopyIcon = RxClipboardCopy;
export const CheckIcon = RxCheck;
export const CloseIcon = RxCross1;
export const BookmarkIcon = RxBookmark;
export const LayersIcon = RxLayers;
export const RocketIcon = RxRocket;
export const MailIcon = LuMail;
export const SlashIcon = LuSlash;
export const SideBarOffIcon = VscLayoutSidebarRightOff;
export const SideBarIcon = VscLayoutSidebarRight;
export const DownloadIcon = RxDownload;

// Social Media Icons
export const GithubIcon = RxGithubLogo;
export const LinkedinIcon = RxLinkedinLogo;
export const ResumeIcon = RxReader;
export const TwitterIcon = VscTwitter;

// Theme Icons
export const LightModeIcon = LuSun;
export const DarkModeIcon = LuMoon;

// Technology Icons
export const TypeScriptIcon = SiTypescript;
export const JavaScriptIcon = SiJavascript;
export const ReactIcon = SiReact;
export const TailwindIcon = SiTailwindcss;
export const ExpressIcon = SiExpress;
export const NodeIcon = SiNodedotjs;
export const ViteIcon = SiVite;
export const NextJSIcon = SiNextdotjs;
export const PostgreSQLIcon = SiPostgresql;
export const FigmaIcon = BiLogoFigma;
export const LibraryIcon = BiLibrary;
export const BunIcon = SiBun;

// Grouped exports for easier importing
export const NavigationIcons = {
  Person: PersonIcon,
  ExternalLink: ExternalLinkIcon,
  Back: BackIcon,
  Commit: CommitIcon,
  Copy: CopyIcon,
  Check: CheckIcon,
  Close: CloseIcon,
  Bookmark: BookmarkIcon,
  Layers: LayersIcon,
  Rocket: RocketIcon,
  Mail: MailIcon,
  Slash: SlashIcon,
  SideBarOff: SideBarOffIcon,
  SideBar: SideBarIcon,
  Download: DownloadIcon,
} as const;

export const SocialIcons = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Twitter: TwitterIcon,
  Resume: ResumeIcon,
} as const;

export const ThemeIcons = {
  Light: LightModeIcon,
  Dark: DarkModeIcon,
} as const;

export const TechIcons = {
  TypeScript: TypeScriptIcon,
  JavaScript: JavaScriptIcon,
  React: ReactIcon,
  Tailwind: TailwindIcon,
  Express: ExpressIcon,
  Node: NodeIcon,
  Vite: ViteIcon,
  NextJS: NextJSIcon,
  PostgreSQL: PostgreSQLIcon,
  Figma: FigmaIcon,
  Library: LibraryIcon,
  Bun: BunIcon,
} as const;

export type { IconType } from "react-icons";
