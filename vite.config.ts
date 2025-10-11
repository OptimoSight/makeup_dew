import fs from "fs";
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Paths to local certs
const keyPath = "./certs/localhost+3-key.pem";
const certPath = "./certs/localhost+3.pem";

// Only enable HTTPS if certs exist
const httpsOptions =
  fs.existsSync(keyPath) && fs.existsSync(certPath)
    ? { key: fs.readFileSync(keyPath), cert: fs.readFileSync(certPath) }
    : undefined;

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 42414,
    https: httpsOptions, // works locally, skipped on CI
  },
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
