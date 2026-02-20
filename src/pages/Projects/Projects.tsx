import { arrProjects } from "../../utils/data/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import PageTitle from "@/components/PageTitle/PageTitle";
import { motion } from "motion/react";

const Projects = () => {
  const projects = arrProjects;

  return (
    <div className="text-foreground">
      <PageTitle title="Projetos" suffix />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <h1 className="text-xl font-semibold mb-2">Projetos</h1>
        <p className="text-muted-foreground text-sm mb-4">
          Projetos que fiz ou participei no desenvolvimento.
        </p>
      </motion.div>
      <div className="gap-4 mb-4 grid grid-cols-1 sm:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="h-full"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.06,
              ease: "easeOut",
            }}
          >
            <ProjectCard
              favicon={project.favicon}
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
    </div>
  );
};

export default Projects;
