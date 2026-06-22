import fs from "node:fs";
import path from "node:path";

const required = [
  "app/page.tsx",
  "app/layout.tsx",
  "app/globals.css",
  "app/sandbox/page.tsx",
  "app/api/visualize/route.ts",
  "app/api/cron/validate/route.ts",
  "docs/README.md",
  "docs/architecture.md",
  "docs/vercel-workflow.md",
  "docs/sandbox-validation.md",
  "docs/cron-and-agents.md",
];

const missing = required.filter((item) => !fs.existsSync(path.resolve(process.cwd(), item)));

if (missing.length) {
  console.error(`Missing required scaffold files:\n- ${missing.join("\n- ")}`);
  process.exit(1);
}

console.log("Sandbox verification passed.");
