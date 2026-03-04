import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

// Easter egg no console
console.log(
  "%c👋 Olá, dev curioso!",
  "color: #58a6ff; font-size: 18px; font-weight: bold;"
);
console.log(
  "%cEste portfolio foi feito com React + TypeScript + Tailwind CSS.",
  "color: #9ca3af; font-size: 13px;"
);
console.log(
  "%cVeja o código em: https://github.com/Michelangelo-Costa",
  "color: #58a6ff; font-size: 13px;"
);

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <App />
      <Analytics />
    </ThemeProvider>
  </BrowserRouter>
);
