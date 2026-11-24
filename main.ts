import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A toaster's error message, quietly dramatic, about the slice that keeps going back in.
const error = "E12: This slice has now been toasted three times. It will not become what you want it to be.";

const limit = 120;
if ([...error].length > limit) throw new Error(`error is ${[...error].length} characters, limit ${limit}`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), error);
