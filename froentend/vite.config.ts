// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (overridden below to target Vercel), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { handleRequest } from "./server.js";

export default defineConfig({
  nitro: {
    preset: "vercel",
    serverEntry: false,
  },
  vite: {
    plugins: [
      {
        name: "root-server-api",
        configureServer(server) {
          server.middlewares.use((request, response, next) => {
            const pathname = request.url?.split("?")[0];
            if (pathname !== "/api" && !pathname?.startsWith("/api/")) {
              next();
              return;
            }

            void handleRequest(request, response).catch(next);
          });
        },
      },
    ],
  },
  tanstackStart: {
    // Resolve the app SSR entry to src/server.ts, separately from the root account API.
    server: { entry: "server" },
  },
});
