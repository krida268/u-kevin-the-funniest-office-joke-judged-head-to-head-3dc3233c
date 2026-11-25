// The Funniest Office Joke, Judged Head to Head
// Writes one short office joke to /output/entry.txt (or argv[2] as file/dir).
// Guard: the gate requires 1-200 UTF-8 characters, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The printer only jams when the document is marked urgent — it's the only colleague that reads the subject line.";

function resolveOut(arg: string | undefined): string {
  if (!arg) return "/output/entry.txt";
  if (arg.endsWith(".txt")) return arg;
  return join(arg, "entry.txt");
}

const out = resolveOut(process.argv[2]);
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${JOKE.length}`);
}
mkdirSync(out.slice(0, out.lastIndexOf("/")) || ".", { recursive: true });
writeFileSync(out, JOKE, "utf8");
console.log(`wrote ${out} (${JOKE.length} characters)`);
