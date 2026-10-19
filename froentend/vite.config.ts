// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const nitroOptions = {
  preset: "vercel",
  serverDir: "server",
};

export default defineConfig({
  nitro: nitroOptions,
  vite: {
    server: {
      proxy: {
        "/api": {
          target: "http://127.0.0.1:3001",
        },
      },
    },
  },
  tanstackStart: {
    // Resolve the app SSR entry to src/server.ts, separately from the root account API.
    server: { entry: "server" },
  },
});
