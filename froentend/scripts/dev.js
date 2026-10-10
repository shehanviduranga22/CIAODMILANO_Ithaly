import { spawn } from "node:child_process";

const services = [
  ["account API", ["server.js"]],
  ["storefront", ["node_modules/vite/bin/vite.js", "dev"]],
];

let isStopping = false;
let exitCode = 0;
const children = services.map(([name, args]) => {
  const child = spawn(process.execPath, args, { stdio: "inherit" });

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

process.on("SIGINT", () => stop());
process.on("SIGTERM", () => stop());
