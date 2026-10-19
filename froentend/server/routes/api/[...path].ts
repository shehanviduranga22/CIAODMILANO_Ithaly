import { defineEventHandler } from "h3";
import { handleRequest } from "../../../server.js";

export default defineEventHandler((event) =>
  handleRequest(event.node.req, event.node.res),
);
