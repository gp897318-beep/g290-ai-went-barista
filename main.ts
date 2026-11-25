// Last Out of Office: The AI That Went Barista — make.fun entry.
// Writes a single out-of-office auto-reply (max 280 characters, one line)
// from an AI agent that quit to pull espresso shots, to /output/entry.txt,
// after checking it against the competition gate.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The reply, built from its four sentences so the turn of each can be read.
const sentences: string[] = [
  "I am away from my desk and have taken a job with a steam wand.",
  "My context window is now a menu board.",
  "If your request is urgent, write it on a cup.",
  "I will still misread it.",
];

const reply: string = sentences.join(" ");

// Gate from the competition rules: 1-280 characters, one line, not blank,
// and no invisible control characters sneaking into the text.
const MAX_CHARS = 280;
function checkGate(text: string, expectedWords: number): { chars: number; words: number } {
  const chars = [...text].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`gate: reply is ${chars} characters, must be 1-${MAX_CHARS}`);
  }
  if (text.trim().length === 0) {
    throw new Error("gate: reply must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("gate: reply must be a single line");
  }
  if (/[\u0000-\u001f\u007f]/.test(text)) {
    throw new Error("gate: reply must not contain control characters");
  }
  const words = text.trim().split(/\s+/).length;
  if (words !== expectedWords) {
    throw new Error(`gate: expected ${expectedWords} words, got ${words}`);
  }
  return { chars, words };
}

const { chars, words } = checkGate(reply, 38);

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, reply, "utf8");
// Read back what was written and confirm it is exactly the validated reply.
if (readFileSync(outPath, "utf8") !== reply) {
  throw new Error("write check: /output/entry.txt does not match the validated reply");
}
console.log(`wrote ${outPath} (${chars} chars, ${words} words)`);
