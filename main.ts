// Snooze Button Roast — writes a single roast line to /output/entry.txt.
// Node 22, no dependencies, no network. Deterministic: the same line on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "6 AM Saturday: my alarm clock goes off like it's collecting a debt I never owed \u2014 from a job I don't even have.";

// Gate self-check (mirrors the sealed scorer): the line must be UTF-8 text
// of 1 to 200 characters, exactly one line, and not only white space.
// Fail loudly before writing anything, so a bad line can never be shipped.
const charCount = [...LINE].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(
    `Roast line must be 1-200 characters, got ${charCount}: ${JSON.stringify(LINE)}`,
  );
}
if (LINE.split("\n").length !== 1) {
  throw new Error(
    `Roast line must be exactly one line: ${JSON.stringify(LINE)}`,
  );
}
if (LINE.trim().length === 0) {
  throw new Error("Roast line must not be only white space");
}

// The grader runs with /output mounted; OUTPUT_DIR lets local runs point
// the output elsewhere (used by verify.mjs). The directory is created,
// never deleted.
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
