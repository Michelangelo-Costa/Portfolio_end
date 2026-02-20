import type { ProjectCardProps } from "@/types";

import { AspectRatio } from "../ui/aspect-ratio";

import { ExternalLinkIcon } from "@/lib/icons";

const ProjectCard = ({
  href,
  name,
  desc,
  tech = [],
  img,
  favicon,
  linkPreview,
}: ProjectCardProps) => {
  return (
    <a
      href={href}
      className="group relative block p-3 h-full transition-all duration-100
            border border-border hover:bg-muted/40 rounded"
      rel="noreferrer noopener"
      target="_blank"
    >
      <div className="flex flex-col h-full">
        {img && (
          <AspectRatio
            ratio={1440 / 900}
            className="mb-4 overflow-clip rounded transition-all"
          >
            <img
              src={img}
              alt="Project Image"
              className="group-hover:scale-[1.03] duration-100 w-full h-full"
            />
          </AspectRatio>
        )}
        <div className="flex justify-between items-start mb-2">
          <div className="text-sm font-medium text-foreground flex gap-2 items-center">
            {favicon ? <img className="size-5" src={favicon} /> : null} {name}
          </div>
          <span className="opacity-50 group-hover:opacity-90 transition-opacity">
            <ExternalLinkIcon
              width={16}
              height={16}
              className="text-muted-foreground group-hover:text-muted-foreground"
            />
          </span>
        </div>
        {linkPreview && (
          <p className="text-xs text-muted-foreground/70 italic mb-1">
            {linkPreview}
          </p>
        )}
        <p className="text-sm text-muted-foreground mb-3 flex-grow">{desc}</p>
        {tech && tech.length > 0 && (
          <div className="flex gap-2 flex-wrap mt-auto">
            {tech.map((t, i) => (
              <span
                key={i}
                className="text-xs px-2 py-0.5 text-muted-foreground bg-muted rounded border"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
};

export default ProjectCard;
