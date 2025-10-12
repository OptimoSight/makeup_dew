import fs from "fs";
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const keyPath = "./certs/localhost+3-key.pem";
const certPath = "./certs/localhost+3.pem";

// ✅ Use undefined when HTTPS is not needed
let httpsOptions: { key: Buffer; cert: Buffer } | undefined = undefined;

if (fs.existsSync(keyPath) && fs.existsSync(certPath)) {
  httpsOptions = {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath),
  };
}

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/makeup_dew/" : "/",

  server: {
    host: "0.0.0.0",
    port: 42414,
    open: true,
    https: httpsOptions, // ✅ TS accepts undefined or object
  },

  plugins: [react()],

  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
}));
