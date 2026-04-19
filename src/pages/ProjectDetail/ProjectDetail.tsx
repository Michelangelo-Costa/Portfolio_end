import { useParams, Link, useNavigate } from "react-router";
import { arrProjects } from "@/utils/data/projects";
import PageTitle from "@/components/PageTitle/PageTitle";
import { ExternalLinkIcon, GithubIcon } from "@/lib/icons";
import { motion } from "motion/react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = arrProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="text-center py-24">
        <p className="text-2xl font-bold mb-2">Projeto não encontrado</p>
        <p className="text-muted-foreground mb-6">
          O projeto que você está procurando não existe.
        </p>
        <Link
          to="/projects"
          className="text-primary hover:underline font-medium"
        >
          ← Voltar para projetos
        </Link>
      </div>
    );
  }

  return (
    <div className="text-foreground">
      <PageTitle title={project.name} suffix />

      {/* Breadcrumb */}
      <motion.nav
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-2 text-sm text-muted-foreground mb-6"
      >
        <Link to="/projects" className="hover:text-primary transition-colors">
          Projetos
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium truncate">{project.name}</span>
      </motion.nav>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">{project.name}</h1>
            <div className="flex gap-2 flex-wrap">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 font-medium text-primary bg-primary/8 rounded-md border border-primary/15"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 flex-wrap">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border
                  bg-card hover:border-primary/40 hover:text-primary transition-all duration-200 text-sm font-medium"
              >
                <GithubIcon className="size-4" />
                {project.githubBack ? "GitHub (Front)" : "GitHub"}
              </a>
            )}
            {project.githubBack && (
              <a
                href={project.githubBack}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border
                  bg-card hover:border-primary/40 hover:text-primary transition-all duration-200 text-sm font-medium"
              >
                <GithubIcon className="size-4" />
                GitHub (API)
              </a>
            )}
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground
                  hover:opacity-90 transition-opacity text-sm font-medium"
              >
                <ExternalLinkIcon className="size-4" />
                {project.complexity === "complex" ? "Ver projeto" : "Demo ao vivo"}
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Hero image */}
      {project.img && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl overflow-hidden border border-border mb-8"
        >
          <img
            src={project.img}
            alt={project.name}
            className="w-full block"
          />
        </motion.div>
      )}

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="space-y-8"
      >
        <section>
          <h2 className="text-xl font-bold mb-3">Sobre o projeto</h2>
          <p className="text-muted-foreground leading-relaxed text-base">
            {project.longDesc ?? project.desc}
          </p>
        </section>

        {/* Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-xl font-bold mb-4">Desafios técnicos</h2>
            <div className="space-y-3">
              {project.challenges.map((challenge, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Learnings */}
        {project.learnings && project.learnings.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-xl font-bold mb-4">O que aprendi</h2>
            <div className="space-y-3">
              {project.learnings.map((learning, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center text-xs font-bold mt-0.5">
                    ✓
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {learning}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </motion.div>

      {/* Back button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-12 pt-8 border-t border-border"
      >
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
        >
          ← Voltar para projetos
        </button>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
