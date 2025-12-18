import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from '@tailwindcss/vite'
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "path";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

// Mantivemos sua lista completa aqui
const plugins = [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime()];

export default defineConfig({
  // AQUI: Usamos a variável 'plugins' para carregar todos os 4, não só 2
  plugins: plugins, 

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
    // AQUI: Adicionamos seu domínio na lista
    allowedHosts: [
      "danielvonrosenthal.com.br",
      "www.danielvonrosenthal.com.br",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});