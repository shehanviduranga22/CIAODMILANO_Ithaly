import { spawn } from "node:child_process";
import dotenv from "dotenv";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectDirectory = resolve(dirname(fileURLToPath(import.meta.url)), "..");
dotenv.config({ path: resolve(projectDirectory, "backend", ".env") });
dotenv.config({ path: resolve(projectDirectory, ".env") });

let isStopping = false;
const children = [];

function startService(name, args) {
  const child = spawn(process.execPath, args, {
    cwd: projectDirectory,
    stdio: "inherit",
  });
  children.push(child);
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
}

function stop(code = 0) {
  if (isStopping) return;
  isStopping = true;
  for (const child of children) {
    if (child.exitCode === null && child.signalCode === null) {
      child.kill("SIGTERM");
    }
  }
  process.exitCode = code;
}

async function isAccountApiRunning() {
  const port = Number(process.env["PORT"] ?? 3001);
  const configuredHost = process.env["HOST"] ?? "127.0.0.1";
  const host =
    configuredHost === "0.0.0.0" || configuredHost === "::" ? "127.0.0.1" : configuredHost;

  let response;
  try {
    response = await fetch(`http://${host}:${port}/api/account/session`, {
      signal: AbortSignal.timeout(2000),
    });
  } catch (error) {
    if (error.cause?.code === "ECONNREFUSED") return false;
    throw new Error(`Could not check the account API on ${host}:${port}: ${error.message}`, {
      cause: error,
    });
  }

  let body;
  try {
    body = await response.json();
  } catch {
    throw new Error(`Port ${port} is already in use by a service that is not the account API.`);
  }

  if (response.status === 401 && body.status === "unauthenticated") return true;
  throw new Error(
    `Port ${port} is already in use by a service that is not the account API. ` +
      "Stop that service or configure a different PORT in backend/.env.",
  );
}

try {
  if (await isAccountApiRunning()) {
    console.log("Account API already running; reusing it.");
  } else {
    startService("account API", ["backend/server.js"]);
  }

  startService("storefront", ["node_modules/vite/bin/vite.js", "dev"]);
} catch (error) {
  console.error(error.message);
  stop(1);
}

process.on("SIGINT", () => stop());
process.on("SIGTERM", () => stop());
