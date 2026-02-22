import PageTitle from "@/components/PageTitle/PageTitle";
import { ExternalLinkIcon } from "@/lib/icons";
import { motion } from "motion/react";
import { Link } from "react-router";

import WorksExperience from "@/components/WorksExperience/WorksExperience";
import Skills from "@/components/Skills/Skills";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { arrProjects } from "@/utils/data/projects";

const About = () => {
  const featuredProjects = arrProjects.filter((p) => p.featured);

  return (
    <div className="text-foreground">
      <PageTitle title="Michelangelo Costa" />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="py-12 sm:py-16"
      >
        <div className="flex flex-col items-center">
          <div className="relative mb-6">
            <div className="size-28 sm:size-32 rounded-full overflow-hidden border-2 border-primary/30 shadow-xl ring-4 ring-primary/10">
              <img
                src="/src/icons/Foto_Perfil.jpg"
                alt="Michelangelo Costa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-1 right-1 size-5 bg-green-500 rounded-full border-2 border-background" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight text-center">
            Michelangelo Costa
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground mb-5">
            <span className="px-3 py-1 bg-primary/10 text-primary font-medium rounded-full text-xs">
              Disponível para trabalho
            </span>
            <span>Marabá, PA</span>
            <span className="text-border">•</span>
            <span>UNIFESSPA</span>
          </div>

          <p className="text-muted-foreground text-base leading-relaxed w-full">
            Sou estudante de Sistemas de Informação na UNIFESSPA e desenvolvedor
            apaixonado por transformar ideias em soluções reais. Minha jornada
            começou no suporte técnico e evoluiu naturalmente para o
            desenvolvimento de software, onde hoje construo aplicações web
            modernas e funcionais. Atualmente, participo do projeto PET-Saúde
            Digital, contribuindo com sistemas voltados à saúde pública e
            impacto social. Tenho grande interesse em desenvolvimento full stack
            e em criar soluções que unam tecnologia, usabilidade e propósito.
            Estou sempre buscando evoluir, aprender e colaborar em projetos que
            gerem valor real.
          </p>

          <a
            className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg
              hover:opacity-90 transition-opacity text-sm"
            href="https://docs.google.com/document/d/1OHWbliyqaZnSthtppN6t3h-vpBSWAuxCJwpCXgJtsW8/export?format=pdf"
            download
          >
            Baixar currículo
            <ExternalLinkIcon className="size-3.5" />
          </a>
        </div>
      </motion.section>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Skills />
      </motion.div>

      {/* Experience */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <WorksExperience />
      </motion.div>

      {/* Featured Projects */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="py-8"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Projetos em Destaque</h2>
          <Link
            to="/projects"
            className="text-sm text-primary hover:underline font-medium flex items-center gap-1"
          >
            Ver todos
            <ExternalLinkIcon className="size-3" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {featuredProjects.slice(0, 3).map((project, index) => (
            <ProjectCard
              key={index}
              linkPreview={project.linkPreview}
              href={project.href}
              name={project.name}
              desc={project.desc}
              tech={project.tech.slice(0, 3)}
              img={project.img}
            />
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default About;
