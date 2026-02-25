import { useState } from "react";
import { arrCertificates } from "@/utils/data/certificates";
import PageTitle from "@/components/PageTitle/PageTitle";
import { motion } from "motion/react";
import { ExternalLinkIcon } from "@/lib/icons";

const ALL_TAGS = ["Todos", ...Array.from(
  new Set(arrCertificates.flatMap((c) => c.tags ?? []))
).sort()];

const uniqueInstitutions = new Set(arrCertificates.map((c) => c.teacher)).size;

const Certificates = () => {
  const [activeTag, setActiveTag] = useState("Todos");

  const filtered =
    activeTag === "Todos"
      ? arrCertificates
      : arrCertificates.filter((c) => c.tags?.includes(activeTag));

  return (
    <div className="text-foreground">
      <PageTitle title="Certificados" suffix />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2">Certificados</h1>
        <p className="text-muted-foreground text-base mb-5">
          Certificações e cursos que completei ao longo da minha jornada de
          aprendizado.
        </p>

        {/* Stats */}
        <div className="flex gap-4 mb-6">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/8 border border-primary/15">
            <span className="text-lg font-bold text-primary">{arrCertificates.length}</span>
            <span className="text-xs text-muted-foreground font-medium">certificados</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/8 border border-primary/15">
            <span className="text-lg font-bold text-primary">{uniqueInstitutions}</span>
            <span className="text-xs text-muted-foreground font-medium">instituições</span>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap p-1 bg-muted rounded-xl w-fit">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                activeTag === tag
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tag}
              <span className="ml-1.5 text-xs opacity-70">
                (
                {tag === "Todos"
                  ? arrCertificates.length
                  : arrCertificates.filter((c) => c.tags?.includes(tag)).length}
                )
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      <div className="space-y-3">
        {filtered.map((certificate, index) => (
          <motion.a
            key={certificate.course}
            href={certificate.href}
            rel="noreferrer noopener"
            target="_blank"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              ease: "easeOut",
            }}
            className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-card
              hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5
              hover:ring-1 hover:ring-primary/15 transition-all duration-200"
          >
            {/* Número / Badge */}
            <div
              className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary
              flex items-center justify-center text-sm font-bold"
            >
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Conteúdo */}
            <div className="flex-1 min-w-0">
              <h3
                className="text-sm font-semibold text-foreground group-hover:text-primary
                transition-colors truncate"
              >
                {certificate.course}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5 mb-2">
                {certificate.teacher}
              </p>
              {certificate.tags && certificate.tags.length > 0 && (
                <div className="flex gap-1.5 flex-wrap">
                  {certificate.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 font-medium text-primary bg-primary/8
                        rounded-md border border-primary/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Ícone */}
            <ExternalLinkIcon
              className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100
              transition-opacity flex-shrink-0"
            />
          </motion.a>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground">
            Nenhum certificado encontrado nessa categoria.
          </p>
        </div>
      )}
    </div>
  );
};

export default Certificates;
