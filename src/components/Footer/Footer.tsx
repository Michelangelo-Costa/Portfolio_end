import { GithubIcon, LinkedinIcon, MailIcon } from "@/lib/icons";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Coluna 1 - Sobre */}
          <div>
            <h3 className="text-base font-bold text-foreground mb-3">
              M<span className="text-primary">.</span>Costa
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Desenvolvedor Full Stack apaixonado por criar soluções web
              modernas e escaláveis.
            </p>
          </div>

          {/* Coluna 2 - Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Início
              </Link>
              <Link
                to="/projects"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Projetos
              </Link>
              <Link
                to="/certificates"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Certificados
              </Link>
              <a
                href="https://docs.google.com/document/d/1OHWbliyqaZnSthtppN6t3h-vpBSWAuxCJwpCXgJtsW8/export?format=pdf"
                download
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Currículo
              </a>
            </nav>
          </div>

          {/* Coluna 3 - Social */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
              Contato
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/Michelangelo-Costa"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <GithubIcon className="size-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/michelangelo-costa-35570b192/"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <LinkedinIcon className="size-4" />
                LinkedIn
              </a>
              <a
                href="mailto:michelangeloed@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MailIcon className="size-4" />
                michelangeloed@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Michelangelo Costa. Todos os
            direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Feito com React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
