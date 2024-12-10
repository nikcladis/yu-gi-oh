import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@constants": "/src/constants",
      "@contexts": "/src/contexts",
      "@hooks": "/src/hooks",
      "@types": "/src/types",
      "@utils": "/src/utils",
      "@assets": "/src/assets",
    },
  },
});
