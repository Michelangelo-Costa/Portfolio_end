import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import type { ProjectCardProps } from "@/types";
import { ExternalLinkIcon } from "@/lib/icons";

const MotionLink = motion.create(Link);

// Mola suave: entra devagar, sai devagar — sem bounce
const imgSpring = { type: "spring", stiffness: 100, damping: 22, mass: 1 } as const;

const ProjectCard = ({
  name,
  slug,
  desc,
  tech = [],
  img,
  featured,
}: ProjectCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <MotionLink
      to={`/projects/${slug}`}
      initial="idle"
      whileHover="hovered"
      className="group block h-full rounded-xl border border-border bg-card overflow-hidden
        hover:border-primary/40 hover:shadow-lg hover:ring-1 hover:ring-primary/20
        transition-[border-color,box-shadow] duration-500"
    >
      {img && (
        <div className="relative overflow-hidden aspect-video bg-muted">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse" />
          )}
          <motion.img
            src={img}
            alt={name}
            onLoad={() => setImageLoaded(true)}
            variants={{ idle: { scale: 1 }, hovered: { scale: 1.06 } }}
            transition={imgSpring}
            className={`w-full h-full object-cover ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
            variants={{ idle: { opacity: 0 }, hovered: { opacity: 1 } }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          />
          {featured && (
            <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 text-xs font-bold
              bg-primary text-primary-foreground rounded-full shadow-md">
              ★ Destaque
            </div>
          )}
        </div>
      )}

      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-foreground group-hover:text-primary
            transition-colors duration-300">
            {name}
          </h3>
          <motion.div
            variants={{ idle: { opacity: 0, x: 4 }, hovered: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <ExternalLinkIcon className="size-4 flex-shrink-0 text-muted-foreground mt-0.5" />
          </motion.div>
        </div>

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
    </MotionLink>
  );
};

export default ProjectCard;
