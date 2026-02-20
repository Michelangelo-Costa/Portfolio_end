import type { SimpleCardProps } from "@/types";

const SimpleCard = ({ href, name, desc }: SimpleCardProps) => {
   return (
      <a
         href={href}
         className="block text-muted-foreground p-4 transition-colors hover:bg-muted hover:text-foreground border border-border"
         rel="noreferrer noopener"
         target="_blank"
      >
         <p className="text-sm text-foreground font-medium">{name}</p>
         <p className="text-sm">{desc}</p>
      </a>
   );
};

export default SimpleCard;
