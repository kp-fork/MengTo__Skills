#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const skillFiles = execFileSync(
  "git",
  ["ls-files", "agent-skills/**/SKILL.md"],
  { cwd: root, encoding: "utf8" },
)
  .trim()
  .split("\n")
  .filter(Boolean)
  .sort();

const failures = [];
const stats = { skills: skillFiles.length, html: 0, prompts: 0, workflows: 0, assets: 0 };

function fail(file, message) {
  failures.push(file + ": " + message);
}

function readRequired(file) {
  if (!existsSync(file)) {
    fail(path.relative(root, file), "missing");
    return "";
  }
  return readFileSync(file, "utf8");
}

for (const skillFile of skillFiles) {
  const parts = skillFile.split("/");
  const category = parts[1];
  const slug = parts[2];
  const demoDirectory = path.join(root, path.dirname(skillFile), "demo");
  const htmlFile = path.join(demoDirectory, "index.html");
  const promptFile = path.join(demoDirectory, "PROMPT.md");
  const html = readRequired(htmlFile);
  const prompt = readRequired(promptFile);

  if (html) {
    stats.html += 1;
    if (!/^<!doctype html>/i.test(html)) fail(path.relative(root, htmlFile), "missing doctype");
    if (!/<html lang="en"/i.test(html)) fail(path.relative(root, htmlFile), "missing language");
    if (!/<meta name="viewport"/i.test(html)) fail(path.relative(root, htmlFile), "missing viewport meta");
    if (!/<title>[^<]+<\/title>/i.test(html)) fail(path.relative(root, htmlFile), "missing title");
    if (!/<main(?:\s|>)/i.test(html)) fail(path.relative(root, htmlFile), "missing main landmark");
    const headingCount = (html.match(/<h1(?:\s|>)/gi) || []).length;
    if (headingCount !== 1) fail(path.relative(root, htmlFile), "expected one h1, found " + headingCount);
    if (category !== "codex" && !html.includes("prefers-reduced-motion")) {
      fail(path.relative(root, htmlFile), "missing reduced-motion fallback");
    }
    if (/https?:\/\/[^"'\s<>]+/i.test(html)) fail(path.relative(root, htmlFile), "remote URL found; demos must be self-contained");
    if (/\/Users\/|file:\/\//i.test(html)) fail(path.relative(root, htmlFile), "personal absolute path found");
    if (/[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}/.test(html)) fail(path.relative(root, htmlFile), "email address found");

    const references = [...html.matchAll(/(?:src|href)=["']([^"'#]+)["']/gi)]
      .map((match) => match[1])
      .filter((reference) => !/^(?:data:|javascript:|mailto:)/i.test(reference));
    for (const reference of references) {
      const decoded = decodeURIComponent(reference.split("?")[0]);
      const target = path.resolve(demoDirectory, decoded);
      if (!target.startsWith(demoDirectory)) {
        fail(path.relative(root, htmlFile), "reference escapes demo folder: " + reference);
      } else if (!existsSync(target)) {
        fail(path.relative(root, htmlFile), "missing referenced file: " + reference);
      } else if (target.includes(path.sep + "assets" + path.sep)) {
        stats.assets += 1;
        if (statSync(target).size > 5 * 1024 * 1024) {
          fail(path.relative(root, target), "asset exceeds 5 MB");
        }
      }
    }

    for (const match of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)) {
      const script = match[1].trim();
      if (!script) continue;
      try {
        new vm.Script(script, { filename: path.relative(root, htmlFile) });
      } catch (error) {
        fail(path.relative(root, htmlFile), "inline JavaScript syntax error: " + error.message);
      }
    }
  }

  if (prompt) {
    stats.prompts += 1;
    const wordCount = prompt.trim().split(/\s+/).length;
    if (wordCount < 120) fail(path.relative(root, promptFile), "prompt recipe is too thin: " + wordCount + " words");
    if (!prompt.includes("$" + slug)) fail(path.relative(root, promptFile), "does not trigger $" + slug);
    for (const heading of ["## Minimal prompt", "## Recreate the demo", "## Remix prompt"]) {
      if (!prompt.includes(heading)) fail(path.relative(root, promptFile), "missing " + heading);
    }
    if (/\/Users\/|file:\/\//i.test(prompt)) fail(path.relative(root, promptFile), "personal absolute path found");
    if (/[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}/.test(prompt)) fail(path.relative(root, promptFile), "email address found");
  }

  if (category === "codex") {
    stats.workflows += 1;
    readRequired(path.join(demoDirectory, "input.md"));
    readRequired(path.join(demoDirectory, "expected-output.md"));
  }
}

const demosIndex = readRequired(path.join(root, "DEMOS.md"));
if (demosIndex) {
  const rows = demosIndex
    .split("\n")
    .filter((line) => /^\| [a-z0-9][a-z0-9-]* \|/.test(line));
  if (rows.length !== skillFiles.length) {
    fail("DEMOS.md", "expected " + skillFiles.length + " demo rows, found " + rows.length);
  }
}

if (failures.length) {
  console.error("Demo validation failed with " + failures.length + " issue(s):");
  for (const failure of failures) console.error("- " + failure);
  process.exit(1);
}

console.log("Demo validation passed.");
console.log("- tracked skills: " + stats.skills);
console.log("- HTML demos: " + stats.html);
console.log("- prompt recipes: " + stats.prompts);
console.log("- workflow examples: " + stats.workflows);
console.log("- local asset references: " + stats.assets);
