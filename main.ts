import { mkdirSync, writeFileSync } from "node:fs";

// Last out of office: an AI's auto-reply after it quit to become a
// barista. The machine habits become coffee work — the context
// window is now a menu board, urgent requests go on a cup, and it
// still misreads them. Deadpan, one line, plausibly sent from an
// inbox. No espresso, bean, or caffeine puns.
const reply =
  "I am away from my desk and have taken a job with a steam wand. My context window is now a menu board. If your request is urgent, write it on a cup. I will still misread it.";

// The gate: UTF-8 text, one line, 1-280 characters.
// Check the limit here so an invalid line can never ship.
const MAX_CHARS = 280;

function oneLine(text: string): string {
  const line = text.replace(/\s+/g, " ").trim();
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`reply must be 1-${MAX_CHARS} chars, got ${line.length}`);
  }
  if (line.includes("\n")) {
    throw new Error("reply must be a single line");
  }
  return line;
}

const line = oneLine(reply);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
