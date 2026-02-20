import ContactLink from "../ContactLink/ContactLink";

import { GithubIcon, LinkedinIcon, ResumeIcon } from "@/lib/icons";

const Footer = () => {
  return (
    <div className="flex justify-between border-t mt-4 pt-4 border-border">
      <div className="flex gap-3 text-foreground">
        <ContactLink
          title="Github"
          Icon={GithubIcon}
          href="https://github.com/Michelangelo-Costa"
          rel="noreferrer noopener"
          target="_blank"
        />
        <ContactLink
          title="Linkedin"
          Icon={LinkedinIcon}
          href="https://www.linkedin.com/in/michelangelo-costa-35570b192/"
          rel="noreferrer noopener"
          target="_blank"
        />
        <ContactLink
          title="CV"
          Icon={ResumeIcon}
          href="https://docs.google.com/document/d/1OHWbliyqaZnSthtppN6t3h-vpBSWAuxCJwpCXgJtsW8/export?format=pdf"
          download
        />
      </div>
      <a
        href="https://github.com/Michelangelo-Costa"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-foreground hover:text-accent-foreground hidden sm:block"
      >
        @Michelangelo-Costa
      </a>
    </div>
  );
};

export default Footer;
