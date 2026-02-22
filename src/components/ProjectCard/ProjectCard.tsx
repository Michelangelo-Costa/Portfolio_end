import type { ProjectCardProps } from "@/types";
import { ExternalLinkIcon } from "@/lib/icons";

const ProjectCard = ({
  href,
  name,
  desc,
  tech = [],
  img,
  linkPreview,
}: ProjectCardProps) => {
  return (
    <a
      href={href}
      className="group block h-full rounded-xl border border-border bg-card overflow-hidden
        hover:shadow-lg hover:border-primary/30 transition-all duration-300"
      rel="noreferrer noopener"
      target="_blank"
    >
      {img && (
        <div className="relative overflow-hidden aspect-video bg-muted">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <ExternalLinkIcon className="size-4 flex-shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
        </div>

        {linkPreview && (
          <p className="text-xs text-primary/70 font-medium">{linkPreview}</p>
        )}

        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>

        {tech.length > 0 && (
          <div className="flex gap-1.5 flex-wrap mt-auto pt-2">
            {tech.map((t, i) => (
              <span
                key={i}
                className="text-xs px-2.5 py-1 font-medium text-primary bg-primary/8 rounded-md
                  border border-primary/15"
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
