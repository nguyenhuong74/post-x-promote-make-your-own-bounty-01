// Entry program for post-x-promote-make-your-own-bounty-01 (Node 22, standard
// library only). The entry itself is one standalone post on X whose text
// links to make.fun's make-your-own-bounty post
// (https://x.com/makefunai/status/2124915864336236646), with a photo of its
// own and the play code in its text.
// This program does nothing about the post: it only copies POST.json from
// the repository root to /output/POST.json, where the gate reads it.
//
// POST.json holds the real address of the published post
// (https://x.com/noctisbitcoin/status/2125036092063928611).
//
// Local check, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// In the grader's container these are /bot and /output; the env vars let
// the same file run locally with a scratch directory instead.
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
