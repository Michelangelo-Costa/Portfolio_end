import { arrCertificates } from "@/utils/data/certificates";
import PageTitle from "@/components/PageTitle/PageTitle";
import { motion } from "motion/react";
import { ExternalLinkIcon } from "@/lib/icons";

const Certificates = () => {
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
        <p className="text-muted-foreground text-base">
          Certificações e cursos que completei ao longo da minha jornada de
          aprendizado.
        </p>
      </motion.div>

      <div className="space-y-3">
        {arrCertificates.map((certificate, index) => (
          <motion.a
            key={index}
            href={certificate.href}
            rel="noreferrer noopener"
            target="_blank"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.06,
              ease: "easeOut",
            }}
            className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-card
              hover:border-primary/30 hover:shadow-sm transition-all duration-200"
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
              <p className="text-xs text-muted-foreground mt-0.5">
                {certificate.teacher}
              </p>
            </div>

            {/* Ícone */}
            <ExternalLinkIcon
              className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100
              transition-opacity flex-shrink-0"
            />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
