import { spawn } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { isAccountApiRunning } from "../server/server.js";

const projectDirectory = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const services = [
  ["account API", ["server.js"], resolve(projectDirectory, "server")],
  [
    "storefront",
    [resolve(projectDirectory, "node_modules/vite/bin/vite.js"), "dev"],
    projectDirectory,
  ],
];

let isStopping = false;
let exitCode = 0;

async function start() {
  const accountApiRunning = await isAccountApiRunning();
  if (accountApiRunning) {
    console.log("Account API already running; reusing it.");
  }

  const children = services
    .filter(([name]) => !accountApiRunning || name !== "account API")
    .map(([name, args, cwd]) => {
      const child = spawn(process.execPath, args, { cwd, stdio: "inherit" });

      child.on("error", (error) => {
        console.error(`Could not start ${name}:`, error);
        stop(1);
      });

      child.on("exit", (code, signal) => {
        if (!isStopping) {
          console.error(`${name} exited${signal ? ` from ${signal}` : ` with code ${code ?? 1}`}.`);
          stop(code ?? 1);
        }
      });

      return child;
    });

  process.on("SIGINT", () => stop());
  process.on("SIGTERM", () => stop());

  function stop(code = 0) {
    if (isStopping) return;
    isStopping = true;
    exitCode = code;
    for (const child of children) {
      if (child.exitCode === null && child.signalCode === null) {
        child.kill("SIGTERM");
      }
    }
    process.exitCode = exitCode;
  }
}

start().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
