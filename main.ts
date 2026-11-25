// Two Lines to Your Past Self — make.fun entry.
// Writes a two-line warning to /output/entry.txt.
// Deterministic: the same bytes on every run. No network, no input, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE_ONE =
  "At the interview on March 3rd, when they ask your salary, don't say 'whatever you think is fair' — say the number that scares you.";
const LINE_TWO =
  "You said the small number, and it followed you for ten years — every raise, every new job, every offer was built on that one frightened sentence.";

const entry = `${LINE_ONE}\n${LINE_TWO}`;

// The gate allows 1-280 characters: refuse to write an entry that breaks it.
if (entry.length < 1 || entry.length > 280) {
  throw new Error(
    `entry is ${entry.length} characters, outside the 1-280 gate`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
console.log(`-- ${entry.length} characters --`);
