import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

const MotionLink = motion.create(Link);
const imgSpring = { type: "spring", stiffness: 100, damping: 22, mass: 1 } as const;

import { arrProjects } from "../../utils/data/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import PageTitle from "@/components/PageTitle/PageTitle";

type Filter = "all" | "simple" | "complex";

const filters: { label: string; value: Filter }[] = [
  { label: "Todos", value: "all" },
  { label: "Simples", value: "simple" },
  { label: "Elaborados", value: "complex" },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filteredProjects =
    activeFilter === "all"
      ? [...arrProjects].sort((a, b) => {
          if (a.complexity === b.complexity) return 0;
          return a.complexity === "complex" ? -1 : 1;
        })
      : arrProjects.filter((p) => p.complexity === activeFilter);

  const heroProject = activeFilter === "all" && filteredProjects[0]?.featured ? filteredProjects[0] : null;
  const gridProjects = heroProject ? filteredProjects.slice(1) : filteredProjects;

  return (
    <div className="text-foreground">
      <PageTitle title="Projetos" suffix />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2">Projetos</h1>
        <p className="text-muted-foreground text-base mb-6">
          Projetos que desenvolvi ou participei. Filtre por complexidade para
          encontrar o que procura.
        </p>

        {/* Filter tabs */}
        <div
          className="flex gap-2 p-1 bg-muted rounded-xl w-fit"
          aria-label="Filtrar projetos por complexidade"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              aria-pressed={activeFilter === filter.value}
              className={`px-5 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                activeFilter === filter.value
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter.label}
              <span className="ml-1.5 text-xs opacity-70">
                (
                {filter.value === "all"
                  ? arrProjects.length
                  : arrProjects.filter((p) => p.complexity === filter.value)
                      .length}
                )
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Card hero — primeiro projeto featured */}
      {heroProject && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-5"
        >
          <MotionLink
            to={`/projects/${heroProject.slug}`}
            initial="idle"
            whileHover="hovered"
            className="group flex flex-col sm:flex-row rounded-xl border border-border bg-card overflow-hidden
              hover:border-primary/40 hover:shadow-lg hover:ring-1 hover:ring-primary/20
              transition-[border-color,box-shadow] duration-500"
          >
            {heroProject.img && (
              <div className="relative sm:w-1/2 aspect-video sm:aspect-auto overflow-hidden bg-muted flex-shrink-0">
                <motion.img
                  src={heroProject.img}
                  alt={heroProject.name}
                  loading="eager"
                  decoding="async"
                  variants={{ idle: { scale: 1 }, hovered: { scale: 1.06 } }}
                  transition={imgSpring}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"
                  variants={{ idle: { opacity: 0 }, hovered: { opacity: 1 } }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                />
                <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1.5 text-xs font-bold
                  bg-primary text-primary-foreground rounded-full shadow-md">
                  ★ Destaque
                </div>
              </div>
            )}
            <div className="flex-1 p-6 flex flex-col gap-3 justify-center">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary
                transition-colors duration-300">
                {heroProject.name}
              </h3>
              {heroProject.linkPreview && (
                <p className="text-xs text-primary/70 font-medium">{heroProject.linkPreview}</p>
              )}
              <p className="text-sm text-muted-foreground leading-relaxed">{heroProject.desc}</p>
              {heroProject.tech.length > 0 && (
                <div className="flex gap-1.5 flex-wrap pt-1">
                  {heroProject.tech.map((t, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 font-medium text-primary bg-primary/8 rounded-md border border-primary/15">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </MotionLink>
        </motion.div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {gridProjects.map((project, index) => (
          <motion.div
            key={project.name}
            className="h-full"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: index * 0.05,
              ease: "easeOut",
            }}
          >
            <ProjectCard
              href={project.href}
              slug={project.slug}
              name={project.name}
              desc={project.desc}
              tech={project.tech}
              img={project.img}
              featured={project.featured}
            />
          </motion.div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground">
            Nenhum projeto encontrado nessa categoria.
          </p>
        </div>
      )}
    </div>
  );
};

export default Projects;
