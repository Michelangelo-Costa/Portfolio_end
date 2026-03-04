import { useState } from "react";
import PageTitle from "@/components/PageTitle/PageTitle";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "@/lib/icons";
import { motion } from "motion/react";

// CONFIGURAÇÃO FORMSPREE
// 1. Crie uma conta gratuita em https://formspree.io
// 2. Crie um novo form e copie o ID (ex: "xpwzrqej")
// 3. Substitua o valor abaixo pelo seu ID
const FORMSPREE_ENDPOINT = "https://formspree.io/f/SEU_FORM_ID";

const socialLinks = [
  {
    label: "GitHub",
    value: "Michelangelo-Costa",
    href: "https://github.com/Michelangelo-Costa",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "michelangelo-costa",
    href: "https://www.linkedin.com/in/michelangelo-costa-35570b192/",
    icon: LinkedinIcon,
  },
  {
    label: "E-mail",
    value: "michelangeloed@gmail.com",
    href: "mailto:michelangeloed@gmail.com",
    icon: MailIcon,
  },
  {
    label: "Telefone",
    value: "(99) 98466-6698",
    href: "",
    icon: PhoneIcon,
  },
];

type FormStatus = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ nome, email, mensagem }),
      });

      if (res.ok) {
        setStatus("success");
        setNome("");
        setEmail("");
        setMensagem("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="text-foreground">
      <PageTitle title="Contato" suffix />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2">Contato</h1>
        <p className="text-muted-foreground text-base">
          Quer conversar sobre um projeto ou oportunidade? Me chame por qualquer
          um dos canais abaixo ou envie uma mensagem diretamente.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
        >
          <h2 className="text-lg font-semibold mb-4">Redes sociais</h2>
          <div className="space-y-3">
            {socialLinks.map((link, index) => {
              const Wrapper = link.href ? motion.a : motion.div;
              const wrapperProps = link.href
                ? {
                    href: link.href,
                    target: link.href.startsWith("mailto") ? undefined : "_blank",
                    rel: "noreferrer noopener",
                  }
                : {};
              return (
                <Wrapper
                  key={link.label}
                  {...wrapperProps}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 + index * 0.07 }}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-card
                    hover:border-primary/30 hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <link.icon className="size-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-0.5">
                      {link.label}
                    </p>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                      {link.value}
                    </p>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </motion.div>

        {/* Formulário */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.2 }}
        >
          <h2 className="text-lg font-semibold mb-4">Enviar mensagem</h2>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center gap-3 p-8 rounded-xl border border-green-500/30
                bg-green-500/5 text-center"
            >
              <div className="size-12 rounded-full bg-green-500/10 flex items-center justify-center">
                <span className="text-green-500 text-2xl">✓</span>
              </div>
              <p className="font-semibold text-foreground">Mensagem enviada!</p>
              <p className="text-sm text-muted-foreground">
                Obrigado pelo contato. Responderei em breve.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-sm text-primary hover:underline"
              >
                Enviar outra mensagem
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Nome
                </label>
                <input
                  type="text"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Seu nome"
                  disabled={status === "loading"}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm
                    placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30
                    focus:border-primary transition-all disabled:opacity-60"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  disabled={status === "loading"}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm
                    placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30
                    focus:border-primary transition-all disabled:opacity-60"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Mensagem
                </label>
                <textarea
                  required
                  rows={5}
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  placeholder="Escreva sua mensagem..."
                  disabled={status === "loading"}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm
                    placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30
                    focus:border-primary transition-all resize-none disabled:opacity-60"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-500">
                  Erro ao enviar mensagem. Tente novamente ou use o e-mail diretamente.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-2.5 px-5 bg-primary text-primary-foreground font-medium rounded-lg
                  hover:opacity-90 transition-opacity text-sm disabled:opacity-60 disabled:cursor-not-allowed
                  flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <span className="size-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar mensagem"
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
