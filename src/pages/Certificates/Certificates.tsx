import { arrCertificates } from "@/utils/data/certificates";
import PageTitle from "@/components/PageTitle/PageTitle";
import { motion } from "motion/react";
import { ExternalLinkIcon, BookmarkIcon } from "@/lib/icons";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const Certificates = () => {
  const certificates = arrCertificates;

  return (
    <div className="text-foreground">
      <PageTitle title="Certificados" suffix />

      <div className="flex items-center gap-2 mb-1">
        <h1 className="text-xl font-semibold">Certificados</h1>
        <BookmarkIcon className="text-primary text-lg" />
      </div>
      <p className="text-muted-foreground text-sm mb-6">
        Aqui estão algumas das certificações que conquistei ao longo da minha
        jornada.
      </p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {certificates.map((certificate, index) => (
          <motion.a
            key={index}
            href={certificate.href}
            rel="noreferrer noopener"
            target="_blank"
            variants={item}
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative flex flex-col justify-between gap-3 rounded-xl border border-border
              bg-card/50 p-5 cursor-pointer overflow-hidden
              hover:border-primary/50 hover:shadow-[0_0_20px_-6px] hover:shadow-primary/20
              transition-[border-color,box-shadow] duration-300"
          >
            {/* Gradient accent line no topo */}
            <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-medium text-foreground leading-snug pr-4">
                {certificate.course}
              </p>
              <ExternalLinkIcon className="size-4 shrink-0 text-muted-foreground/40 group-hover:text-primary transition-colors duration-300 mt-0.5" />
            </div>

            <span className="inline-flex items-center gap-1.5 w-fit text-xs font-medium text-accent-foreground bg-accent/60 rounded-full px-2.5 py-0.5">
              <BookmarkIcon className="size-3" />
              {certificate.teacher}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Certificates;
