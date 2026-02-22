import React from "react";
import { arrWorks } from "@/utils/data/works";
import { CloseIcon } from "@/lib/icons";
import { motion, AnimatePresence } from "motion/react";
import type { Work } from "@/types";

function WorksExperience() {
  const [selected, setSelected] = React.useState<Work | null>(null);

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">Experiência</h2>

      {/* Timeline vertical */}
      <div className="relative">
        {/* Linha vertical */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-6">
          {arrWorks.map((work, index) => (
            <motion.div
              key={work.company}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="relative pl-12 cursor-pointer group"
              onClick={() => setSelected(work)}
            >
              {/* Dot na timeline */}
              <div
                className="absolute left-2.5 top-3 w-3 h-3 rounded-full border-2 border-primary bg-background
                group-hover:bg-primary group-hover:scale-125 transition-all duration-200"
              />

              <div
                className="p-5 rounded-xl border border-border bg-card hover:border-primary/30
                hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={work.logo}
                    alt={work.company}
                    className="size-12 rounded-lg object-cover border border-border flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                      <h3 className="text-base font-semibold text-foreground truncate">
                        {work.company}
                      </h3>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                        {work.duration}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">
                      {work.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setSelected(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="relative z-10 w-full max-w-lg rounded-2xl border border-border bg-card p-8 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-1 text-muted-foreground hover:text-foreground
                  rounded-lg hover:bg-muted transition-all cursor-pointer"
                aria-label="Fechar"
              >
                <CloseIcon className="size-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={selected.logo}
                  alt={selected.company}
                  className="size-16 object-cover rounded-xl border border-border"
                />
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {selected.company}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    {selected.role}
                  </p>
                </div>
              </div>

              <span className="inline-block text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1.5 mb-4">
                {selected.duration}
              </span>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {selected.about}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default WorksExperience;
