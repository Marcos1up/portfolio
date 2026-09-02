import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: true, // Permite acceder desde la red local
    open: true, // Abre automáticamente la aplicación en el navegador
    strictPort: true, // Usa siempre el mismo puerto, útil para problemas de conexión
    watch: {
      usePolling: true, // Forza el "polling" para detectar cambios de archivos
    },
  },
});
