import React from "react";
import { arrWorks } from "@/utils/data/works";
import { LayersIcon, CloseIcon } from "@/lib/icons";
import { motion, AnimatePresence } from "motion/react";
import type { Work } from "@/types";

function WorksExperience() {
  const [selected, setSelected] = React.useState<Work | null>(null);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 text-foreground justify-between">
        <p className="text-base font-semibold">Experiência</p>
        <LayersIcon className="text-base text-muted-foreground" />
      </div>
      <div className="space-y-4">
        {arrWorks.map((work, index) => (
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.35,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            className="flex flex-col sm:flex-row gap-2 justify-between sm:items-center cursor-pointer rounded-lg px-2 py-1.5 -mx-2 hover:bg-accent/60 transition-colors"
            key={work.company}
            onClick={() => setSelected(work)}
          >
            <div className="flex gap-2 flex-col sm:flex-row">
              <img
                src={work.logo}
                alt={work.company}
                className="size-6 sm:size-10 object-cover rounded"
              />
              <span>
                <div>{work.company}</div>
                <p className="text-[12px] sm:text-sm text-muted-foreground font-medium">
                  {work.role}
                </p>
              </span>
            </div>
            <div>
              <p className="text-[12px] sm:text-sm text-muted-foreground">
                {work.duration}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal / Popup */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelected(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Card */}
            <motion.div
              className="relative z-10 w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-xl"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Botão fechar */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <CloseIcon className="size-4" />
              </button>

              {/* Conteúdo */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={selected.logo}
                  alt={selected.company}
                  className="size-12 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-base font-semibold text-foreground leading-tight">
                    {selected.company}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    {selected.role}
                  </p>
                </div>
              </div>

              <span className="inline-block text-xs font-medium text-accent-foreground bg-accent rounded-full px-3 py-1 mb-4">
                {selected.duration}
              </span>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {selected.about}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default WorksExperience;
