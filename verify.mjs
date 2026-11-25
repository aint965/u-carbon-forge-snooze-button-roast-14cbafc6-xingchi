// Verifies the entry: deterministic output, single line, 1-200 chars, on-topic,
// punchline in the last few words. Exits non-zero on any failed check.
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const repo = new URL(".", import.meta.url).pathname;
const dirs = [
  mkdtempSync(join(tmpdir(), "roast-a-")),
  mkdtempSync(join(tmpdir(), "roast-b-")),
];
const outputs = dirs.map((d) => {
  execFileSync("node", ["main.ts"], {
    cwd: repo,
    env: { ...process.env, OUTPUT_DIR: d },
    stdio: "inherit",
  });
  return readFileSync(join(d, "entry.txt"));
});

const identical = outputs[0].equals(outputs[1]);
const text = outputs[0].toString("utf8");
const charCount = [...text].length;

const checks = {
  byteIdenticalRuns: identical,
  charCount,
  singleLine: text.split("\n").length === 1,
  nonBlank: text.trim().length > 0,
  within1To200Chars: charCount >= 1 && charCount <= 200,
  mentionsAlarmClock: /alarm clock/i.test(text),
  mentions6AM: /6 AM/.test(text),
  mentionsSaturday: /Saturday/.test(text),
  punchlineInLastWords: /nowhere to be\.$/.test(text),
};

console.log(JSON.stringify(checks, null, 2));
console.log("ENTRY:", text);

const failed = Object.entries(checks).filter(([, v]) => v === false);
if (failed.length > 0) {
  console.error("FAIL:", failed.map(([k]) => k).join(", "));
  process.exit(1);
}
console.log("VERIFY: PASS");
