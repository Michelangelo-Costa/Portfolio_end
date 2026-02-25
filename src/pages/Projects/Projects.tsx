import { useState } from "react";
import { arrProjects } from "../../utils/data/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import PageTitle from "@/components/PageTitle/PageTitle";
import { motion } from "motion/react";

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
      ? arrProjects
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
        <div className="flex gap-2 p-1 bg-muted rounded-xl w-fit">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
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
        <motion.a
          href={heroProject.href}
          target="_blank"
          rel="noreferrer noopener"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="group flex flex-col sm:flex-row rounded-xl border border-border bg-card overflow-hidden
            hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 hover:ring-1 hover:ring-primary/20
            transition-all duration-300 mb-5"
        >
          {heroProject.img && (
            <div className="relative sm:w-1/2 aspect-video sm:aspect-auto overflow-hidden bg-muted flex-shrink-0">
              <img
                src={heroProject.img}
                alt={heroProject.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1.5 text-xs font-bold
                bg-primary text-primary-foreground rounded-full shadow-md">
                ★ Destaque
              </div>
            </div>
          )}
          <div className="flex-1 p-6 flex flex-col gap-3 justify-center">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
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
        </motion.a>
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
              linkPreview={project.linkPreview}
              href={project.href}
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
