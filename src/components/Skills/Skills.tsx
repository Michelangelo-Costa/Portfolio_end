import { skillCategories } from "@/utils/data/works";
import { motion } from "motion/react";

function Skills() {
  let globalIndex = 0;

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">
        Competências Técnicas
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div key={category.label}>
            <h3 className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              {category.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => {
                const idx = globalIndex++;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: idx * 0.04,
                      ease: "easeOut",
                    }}
                    className="flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-lg
                      hover:border-primary/40 hover:shadow-sm transition-all duration-200 group"
                  >
                    <skill.icon className="size-3.5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium text-foreground">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
