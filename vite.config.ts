import fs from "fs";
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const keyPath = "./certs/localhost+3-key.pem";
const certPath = "./certs/localhost+3.pem";

const httpsOptions = fs.existsSync(keyPath) && fs.existsSync(certPath)
  ? { key: fs.readFileSync(keyPath), cert: fs.readFileSync(certPath) }
  : undefined;

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 42414,
    https: httpsOptions, // used locally only
  },
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});

