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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {filteredProjects.map((project, index) => (
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
