// Snooze Button Roast — writes a single roast line to /output/entry.txt.
// Node 22, no dependencies, no network. Deterministic: the same line on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Saturday, 6 AM: my alarm clock screams like it just got promoted \u2014 for waking the one person with nowhere to be.";

// The grader runs with /output mounted; OUTPUT_DIR lets local runs point
// the output elsewhere (used by verify.mjs). The directory is created,
// never deleted.
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
