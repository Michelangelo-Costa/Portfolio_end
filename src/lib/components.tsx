import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism-light";
import { nightOwl as theme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { CopyIcon, CheckIcon } from "@/lib/icons";

import type { CopyHookReturn, HeadingProps, PreComponentProps } from "@/types";

const useCopyWithFeedback = (duration = 1300): CopyHookReturn => {
   const [isCopied, setIsCopied] = useState(false);

   const handleCopy = () => {
      setIsCopied(true);
      setTimeout(() => {
         setIsCopied(false);
      }, duration);
   };

   return { isCopied, handleCopy };
};

// import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
// import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";

// SyntaxHighlighter.registerLanguage("jsx", jsx);
// SyntaxHighlighter.registerLanguage("tsx", tsx);
// SyntaxHighlighter.registerLanguage("ts", tsx);
// SyntaxHighlighter.registerLanguage("js", jsx);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("json", json);

export function slugify(text: string): string {
   return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9 -]/g, "")
      .trim()
      .replace(/\s+/g, "-");
}

const createHeadingClickHandler =
   (id: string, onCopy?: () => void) => (e: React.MouseEvent) => {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
         element.scrollIntoView({ behavior: "smooth" });

         history.pushState(null, "", `#${id}`);
      }

      const url = `${window.location.origin}${window.location.pathname}#${id}`;
      navigator.clipboard.writeText(url);

      if (onCopy) {
         onCopy();
      }
   };

const components = {
   h1: function H1Component(props: HeadingProps) {
      const { isCopied: isLinkCopied, handleCopy } = useCopyWithFeedback();
      const id = slugify(String(props.children));

      return (
         <h1
            id={id}
            className="scroll-mt-20 text-2xl md:text-3xl font-bold mt-6 mb-4 first:mt-0 border-b"
         >
            <a
               href={`#${id}`}
               className="heading-link text-foreground no-underline font-bold hover:text-primary active:text-muted-foreground cursor-pointer select-none transition-colors"
               onClick={createHeadingClickHandler(id, handleCopy)}
            >
               {isLinkCopied ? "Link copiado!" : props.children}
            </a>
         </h1>
      );
   },
   h2: function H2Component(props: HeadingProps) {
      const { isCopied: isLinkCopied, handleCopy } = useCopyWithFeedback();
      const id = slugify(String(props.children));

      return (
         <h2
            id={id}
            className="scroll-mt-20 text-xl md:text-2xl font-semibold mt-6 mb-3 border-b"
         >
            <a
               href={`#${id}`}
               className="heading-link text-foreground no-underline font-semibold hover:text-primary active:text-muted-foreground cursor-pointer select-none transition-colors"
               onClick={createHeadingClickHandler(id, handleCopy)}
            >
               {isLinkCopied ? "Link copiado!" : props.children}
            </a>
         </h2>
      );
   },
   h3: function H3Component(props: HeadingProps) {
      const { isCopied: isLinkCopied, handleCopy } = useCopyWithFeedback();
      const id = slugify(String(props.children));

      return (
         <h3
            id={id}
            className="scroll-mt-20 text-lg md:text-xl font-medium mt-5 mb-2"
         >
            <a
               href={`#${id}`}
               className="heading-link text-foreground no-underline font-medium hover:text-primary active:text-muted-foreground cursor-pointer select-none transition-colors"
               onClick={createHeadingClickHandler(id, handleCopy)}
            >
               {isLinkCopied ? "Link copiado!" : props.children}
            </a>
         </h3>
      );
   },
   h4: function H4Component(props: HeadingProps) {
      const { isCopied: isLinkCopied, handleCopy } = useCopyWithFeedback();
      const id = slugify(String(props.children));

      return (
         <h4
            id={id}
            className="scroll-mt-20 text-base md:text-lg font-medium mt-4 mb-2"
         >
            <a
               href={`#${id}`}
               className="heading-link text-foreground no-underline font-medium hover:text-primary active:text-muted-foreground cursor-pointer select-none transition-colors"
               onClick={createHeadingClickHandler(id, handleCopy)}
            >
               {isLinkCopied ? "Link copiado!" : props.children}
            </a>
         </h4>
      );
   },
   p: (props: React.HTMLProps<HTMLParagraphElement>) => (
      <p
         className="text-muted-foreground mb-4 leading-relaxed font-medium"
         {...props}
      />
   ),
   a: (props: React.HTMLProps<HTMLAnchorElement>) => (
      <span>
         [
         <a
            className="group prose-base font-medium text-primary underline hover:text-primary/80"
            target="_blank"
            {...props}
         >
            {props.children}
         </a>
         ]
      </span>
   ),
   ul: (props: React.HTMLProps<HTMLUListElement>) => (
      <ul className="text-muted-foreground mb-4 pl-6 space-y-1" {...props} />
   ),
   li: (props: React.HTMLProps<HTMLLIElement>) => (
      <li className="text-muted-foreground leading-relaxed" {...props} />
   ),
   code: (props: React.HTMLProps<HTMLElement>) => (
      <span
         className="text-sm text-muted-foreground px-1.5 py-0.5 bg-muted border border-accent rounded-md font-mono"
         {...props}
      />
   ),

   pre: function PreComponent({ children, ...rest }: PreComponentProps) {
      const { isCopied, handleCopy } = useCopyWithFeedback();
      const child = children.props;
      const language = child.className?.replace("language-", "") || "text";
      const code = child.children.trim?.() || "";

      const handleCopyCode = () => {
         navigator.clipboard.writeText(code);
         handleCopy();
      };

      return (
         <div className="relative group my-6">
            <button
               onClick={handleCopyCode}
               className="absolute top-2 right-2 p-1 m-1 bg-transparent text-[#909090] hover:text-white active:scale-90 transition-colors focus:opacity-100 cursor-pointer rounded-md"
               aria-label="Copiar código"
            >
               {isCopied ? (
                  <CheckIcon className="w-4 h-4 text-lime-300" />
               ) : (
                  <CopyIcon className="w-4 h-4" />
               )}
            </button>
            <SyntaxHighlighter
               language={language}
               style={theme}
               customStyle={{
                  background: "",
                  padding: "1.25rem",
                  fontSize: "0.875rem",
                  lineHeight: "1.5",
               }}
               className="rounded-md !bg-[#101010] !border-black dark:!bg-background !border dark:!border-border scrollbar scrollbar-content"
               {...rest}
            >
               {code}
            </SyntaxHighlighter>
         </div>
      );
   },
   strong: (props: React.ComponentProps<"strong">) => (
      <strong className="text-foreground font-medium" {...props} />
   ),
   blockquote: (props: React.HTMLProps<HTMLQuoteElement>) => (
      <blockquote
         className="border-l-4 border-border pl-4 py-2 my-6 bg-muted/50 text-muted-foreground italic"
         {...props}
      />
   ),
   ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
      <ol
         className="text-muted-foreground mb-4 pl-6 space-y-1 list-decimal"
         {...props}
      />
   ),
};

export default components;
