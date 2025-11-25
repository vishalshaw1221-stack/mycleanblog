// scripts/preprocess-latex.js
// Usage: node scripts/preprocess-latex.js input.tex output.md
import fs from "fs";
import path from "path";

if (process.argv.length < 4) {
  console.error("Usage: node scripts/preprocess-latex.js input.tex output.md");
  process.exit(1);
}

const inputFile = process.argv[2];
const outputFile = process.argv[3];

let raw = fs.readFileSync(inputFile, "utf8");

// 1) Extract simple \newcommand{\cmd}{replacement} definitions (single-token macros)
const newcommandRegex = /\\newcommand\{\\([A-Za-z0-9]+)\}\{([^}]*)\}/g;
const macros = {};
raw = raw.replace(newcommandRegex, (m, name, repl) => {
  macros[`\\${name}`] = repl;
  return ""; // remove definition from body
});

// 2) Remove common preamble lines and comments
raw = raw
  .replace(/\\documentclass(\[.*?\])?\{[^}]+\}/g, "")
  .replace(/\\usepackage(\[.*?\])?\{[^}]+\}/g, "")
  .replace(/\\begin\{document\}/g, "")
  .replace(/\\end\{document\}/g, "")
  .replace(/^\s*%.*$/gm, ""); // remove full-line comments

// 3) Handle includegraphics -> markdown image path (note: you must place image files under public/files/)
const includeRegex = /\\includegraphics(?:\[(.*?)\])?\{([^}]+)\}/g;
const foundImages = [];
raw = raw.replace(includeRegex, (m, opt, src) => {
  // src can be path/fig.pdf or fig.png; we'll use basename and expect you to copy the image into /public/files/
  const base = path.basename(src).replace(/\.(pdf|eps)$/i, ".png"); // if PDF, recommend PNG (user should convert)
  foundImages.push({ src, target: `/files/${base}` });
  return `![](${`/files/${base}`})`;
});

// 4) Basic replacements for text formatting and sections (not touch math)
let out = raw;

// Avoid replacing inside math: we keep a simple approach — don't attempt to parse math; replacements below are safe for typical text
out = out
  .replace(/\\textbf\{([^}]*)\}/g, "**$1**")
  .replace(/\\textit\{([^}]*)\}/g, "*$1*")
  .replace(/\\emph\{([^}]*)\}/g, "*$1*")
  .replace(/\\underline\{([^}]*)\}/g, "<u>$1</u>")
  .replace(/\\texttt\{([^}]*)\}/g, "`$1`")
  // headings
  .replace(/\\section\{([^}]*)\}/g, "## $1\n")
  .replace(/\\subsection\{([^}]*)\}/g, "### $1\n")
  .replace(/\\subsubsection\{([^}]*)\}/g, "#### $1\n")
  // escaped chars
  .replace(/\\%/g, "%")
  .replace(/\\&/g, "&")
  .replace(/\\_/g, "_");

// 5) Expand simple macros (exact matches like \R)
for (const key of Object.keys(macros)) {
  // escape regex special chars in key
  const esc = key.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  const re = new RegExp(esc + "(?![A-Za-z0-9])", "g"); // match macro not followed by letter/number
  out = out.replace(re, macros[key]);
}

// 6) Trim trailing spaces and normalize line endings
out = out.replace(/\r\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";

// Write output file
fs.writeFileSync(outputFile, out, "utf8");

console.log("Converted:", inputFile, "→", outputFile);
if (foundImages.length) {
  console.log("\nImages referenced (you should copy these to public/files/):");
  foundImages.forEach((i) => console.log(`  source: ${i.src}  ->  web: ${i.target}`));
}
if (Object.keys(macros).length) {
  console.log("\nMacros expanded:");
  Object.entries(macros).forEach(([k, v]) => console.log(`  ${k} → ${v}`));
}