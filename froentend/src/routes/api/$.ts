import { createFileRoute } from "@tanstack/react-router";
import { handleWebRequest } from "../../../server.js";

export const Route = createFileRoute("/api/$")({
  server: {
    handlers: {
      GET: ({ request }) => handleWebRequest(request),
      POST: ({ request }) => handleWebRequest(request),
    },
  },
});
