import { mkdirSync, copyFileSync, readdirSync, writeFileSync } from "node:fs";
mkdirSync("dist", { recursive: true });
for (const f of readdirSync("public")) copyFileSync(`public/${f}`, `dist/${f}`);
writeFileSync("dist/buildstamp.txt", new Date().toISOString() + "\n");
console.log("build: rendered dist/");
