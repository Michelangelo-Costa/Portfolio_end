import PageTitle from "@/components/PageTitle/PageTitle";
import { ExternalLinkIcon, RocketIcon } from "@/lib/icons";
import { motion } from "motion/react";
import { Link } from "react-router";

import WorksExperience from "@/components/WorksExperience/WorksExperience";
import Skills from "@/components/Skills/Skills";
import GitHubGraph from "@/components/GitHubGraph/GitHubGraph";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { arrProjects } from "@/utils/data/projects";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};

const About = () => {
  const featuredProjects = arrProjects.filter((p) => p.featured);

  return (
    <main className="text-foreground">
      <PageTitle title="Michelangelo Costa" />

      <motion.div {...fadeUp} className="mb-6">
        <h1 className="text-xl font-semibold mb-1">
          Michelangelo de Carvalho Costa
        </h1>
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1.5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-green-500" />
            </span>
            Disponível
          </span>
          <span className="text-border">|</span>
          <span>Marabá, PA</span>
          <span className="text-border">|</span>
          <span>UNIFESSPA</span>
        </div>
        <p className="text-muted-foreground text-base font-medium leading-relaxed">
          Desenvolvedor Fullstack com foco em Engenharia de Software e
          aplicações web escaláveis. Experiência em APIs REST (Node.js),
          desenvolvimento de interfaces com React.js e modelagem de bancos
          relacionais e não-relacionais. Trabalho com boas práticas de POO,
          Clean Code, Git e integração com soluções de Inteligência Artificial e
          Machine Learning. No meu tempo livre, gosto de explorar novas tecnologias, desenvolver projetos pessoais e jogar vôlei Se quiser saber mais sobre minha trajetória,
        </p>
      </motion.div>

      <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
        <Skills />
      </motion.div>

      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.15 }}
      >
        <WorksExperience />
      </motion.div>

      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.2 }}
        className="mt-6"
      >
        <div className="flex items-center gap-2 text-foreground justify-between mb-2">
          <h2 className="text-base font-semibold">Projetos em Destaque</h2>
          <RocketIcon className="text-base text-muted-foreground" />
        </div>
        <div className="gap-4 mb-3 grid grid-cols-1 sm:grid-cols-3">
          {featuredProjects.slice(0, 4).map((project, index) => (
            <ProjectCard
              key={index}
              favicon={project.favicon}
              linkPreview={project.linkPreview}
              href={project.href}
              name={project.name}
              desc={project.desc}
              tech={[project.tech[0], project.tech[1], project.tech[2]]}
              img={project.img}
            />
          ))}
        </div>
        <Link
          to="/projects"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-1"
        >
          Ver todos os projetos
          <ExternalLinkIcon className="size-3" />
        </Link>
      </motion.div>

      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.25 }}
        className="mt-6"
      >
        <GitHubGraph />
      </motion.div>
    </main>
  );
};

export default About;
