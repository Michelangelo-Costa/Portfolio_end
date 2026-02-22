# Michelangelo Costa — Portfólio

Meu portfólio pessoal para apresentar projetos, experiências profissionais, certificações e competências técnicas.

![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

## Sobre

Site pessoal responsivo com tema claro/escuro, animações fluidas e navegação por rotas. Desenvolvido com foco em performance e boas práticas.

### Páginas

- **Início** — Apresentação, competências técnicas por categoria e experiência profissional
- **Projetos** — Galeria com filtro por complexidade (simples / elaborados)
- **Certificados** — Lista de certificações e cursos concluídos

## Tech Stack

| Camada     | Tecnologias                              |
| ---------- | ---------------------------------------- |
| Frontend   | React 19, TypeScript 5.7, Tailwind CSS 4 |
| Build      | Vite 6                                   |
| Roteamento | React Router 7                           |
| Animações  | Motion (Framer Motion)                   |
| UI         | Radix UI (Tooltip, Aspect Ratio)         |
| Tema       | next-themes                              |
| Ícones     | react-icons                              |
| Deploy     | Vercel                                   |

## Estrutura

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header/          # Navbar sticky com navegação
│   ├── Footer/          # Rodapé com links e contato
│   ├── Skills/          # Competências por categoria
│   ├── WorksExperience/ # Timeline de experiências
│   ├── ProjectCard/     # Card de projeto
│   ├── SimpleCard/      # Card de certificado
│   └── ui/              # Componentes base (Tooltip, AspectRatio)
├── pages/
│   ├── About/           # Página inicial
│   ├── Projects/        # Listagem de projetos
│   └── Certificates/    # Certificações
├── utils/data/          # Dados (projetos, certificados, experiências)
├── lib/                 # Utilitários e ícones
└── types/               # Tipagens TypeScript
```

## Rodando Localmente

```bash
git clone https://github.com/Michelangelo-Costa/Portfolio_end.git
cd Portfolio_end
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Scripts

| Comando           | Descrição                   |
| ----------------- | --------------------------- |
| `npm run dev`     | Servidor de desenvolvimento |
| `npm run build`   | Build de produção           |
| `npm run preview` | Preview do build            |
| `npm run lint`    | Linter                      |

## Autor

**Michelangelo de Carvalho Costa**
Desenvolvedor Fullstack · Marabá, PA · UNIFESSPA
