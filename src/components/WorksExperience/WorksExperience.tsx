import { arrWorks } from "@/utils/data/works";
import { LayersIcon } from "@/lib/icons";
import { motion } from "motion/react";

function WorksExperience() {
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
            className="flex flex-col sm:flex-row gap-2 justify-between sm:items-center"
            key={work.company}
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
    </div>
  );
}

export default WorksExperience;
