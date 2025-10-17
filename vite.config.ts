import fs from "fs";
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const keyPath = "./certs/localhost+3-key.pem";
const certPath = "./certs/localhost+3.pem";

let httpsOptions: { key: Buffer; cert: Buffer } | undefined;

if (fs.existsSync(keyPath) && fs.existsSync(certPath)) {
  httpsOptions = {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath),
  };
}

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/makeup_dew/" : "/",

  server: {
    host: "0.0.0.0", // allow LAN access
    port: 42414,
    open: false,
    https: httpsOptions,
  },

  plugins: [react()],

  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
}));
