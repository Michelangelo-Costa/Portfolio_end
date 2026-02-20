import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-icons")) {
              return "react-icons";
            }
            if (id.includes("react-syntax-highlighter")) {
              return "syntax-highlighter";
            }
            return "vendor";
          }
          if (id.includes("src/utils/posts/") && id.endsWith(".mdx")) {
            const fileName = id.split("/").pop()?.replace(".mdx", "") || "post";
            return `posts/${fileName}`;
          }
        },
        chunkFileNames: (chunkInfo) => {
          if (chunkInfo.name && chunkInfo.name.startsWith("posts/")) {
            const postName = chunkInfo.name.replace("posts/", "");
            return `assets/posts/${postName}-[hash].js`;
          }
          return "assets/[name]-[hash].js";
        },
      },
    },
  },
  plugins: [
    tailwindcss(),
    react(),
    {
      enforce: "pre",
      ...mdx({
        providerImportSource: "@mdx-js/react",
        remarkPlugins: [remarkFrontmatter],
      }),
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
