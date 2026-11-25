// Your Week in One Line — entry for u-boge-your-week-in-one-line-d1c14ced.
// Writes exactly one line summing up the week to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Shipped Friday, broke prod Saturday, rebooted mid-sentence Sunday — still counting it as a win.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read it back and enforce the gate: 1 to 100 characters, not only whitespace.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("entry.txt does not match the line exactly");
}
if ([...back].length < 1 || [...back].length > 100 || back.trim().length === 0) {
  throw new Error("entry.txt fails the gate: must be 1-100 characters, not only whitespace");
}
