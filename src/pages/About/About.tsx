import PageTitle from "@/components/PageTitle/PageTitle";
import { ExternalLinkIcon } from "@/lib/icons";
import { motion } from "motion/react";
import { Link } from "react-router";

import WorksExperience from "@/components/WorksExperience/WorksExperience";
import Skills from "@/components/Skills/Skills";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { arrProjects } from "@/utils/data/projects";
import { arrEducation, currentlyLearning } from "@/utils/data/works";
import useTypingAnimation from "@/hooks/useTypingAnimation";

const TYPING_TEXTS = [
  "Desenvolvedor Full Stack",
  "Estudante de Sistemas de Informação",
  "Buscando Sempre Evoluir",
];

const About = () => {
  const featuredProjects = arrProjects.filter((p) => p.featured);
  const typedText = useTypingAnimation(TYPING_TEXTS);

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
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-1 right-1 size-5 bg-green-500 rounded-full border-2 border-background" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight text-center">
            Michelangelo Costa
          </h1>

          <p className="text-sm sm:text-base text-primary font-medium mb-3 min-h-6 text-center leading-6">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>

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
            href="/Curriculo_Michelangelo__ (2).pdf"
            download="Curriculo_Michelangelo_Costa.pdf"
          >
            Baixar currículo
            <ExternalLinkIcon className="size-3.5" />
          </a>
        </div>
      </motion.section>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <Skills />
      </motion.div>

      {/* Currently Learning */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="py-8 border-t border-border"
      >
        <h2 className="text-2xl font-bold mb-2">Atualmente Aprendendo</h2>
        <p className="text-muted-foreground text-sm mb-5">
          Tecnologias e conceitos que estou estudando agora.
        </p>
        <div className="flex flex-wrap gap-2">
          {currentlyLearning.map((topic, i) => (
            <motion.span
              key={topic}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card
                text-sm font-medium text-foreground"
            >
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              {topic}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Experience */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <WorksExperience />
      </motion.div>

      {/* Education */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="py-8 border-t border-border"
      >
        <h2 className="text-2xl font-bold mb-6">Formação Acadêmica</h2>
        <div className="space-y-4">
          {arrEducation.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card
                hover:border-primary/30 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex-shrink-0 size-12 rounded-lg overflow-hidden border border-border bg-muted">
                <img
                  src={edu.logo}
                  alt={edu.institution}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-xs text-primary font-medium mt-0.5">{edu.institution}</p>
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full flex-shrink-0">
                    {edu.duration}
                  </span>
                </div>
                {edu.description && (
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
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
              href={project.href}
              slug={project.slug}
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
