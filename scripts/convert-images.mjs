import { readdir, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const sharp = require('sharp');

const INPUT_DIR = join(fileURLToPath(import.meta.url), '../../public/images');
const EXTENSIONS = new Set(['.png', '.jpg', '.jpeg']);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (EXTENSIONS.has(extname(entry.name).toLowerCase())) yield full;
  }
}

async function fileExists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function convertOne(src, outPath, sharpChain) {
  if (await fileExists(outPath)) return { skipped: true };
  const { size: before } = await stat(src);
  await sharpChain.toFile(outPath);
  const { size: after } = await stat(outPath);
  return { skipped: false, saved: before - after };
}

let generated = 0;
let skipped = 0;
let totalSaved = 0;

for await (const file of walk(INPUT_DIR)) {
  const ext = extname(file);
  const base = file.slice(0, -ext.length);

  const webpResult = await convertOne(file, `${base}.webp`, sharp(file).webp({ quality: 80 }));
  const avifResult = await convertOne(file, `${base}.avif`, sharp(file).avif({ quality: 55 }));

  for (const result of [webpResult, avifResult]) {
    if (result.skipped) {
      skipped++;
    } else {
      generated++;
      totalSaved += result.saved;
    }
  }

  const rel = file.replace(INPUT_DIR, '');
  const webpTag = webpResult.skipped ? '(skip)' : '✓ webp';
  const avifTag = avifResult.skipped ? '(skip)' : '✓ avif';
  console.log(`  ${webpTag}  ${avifTag}  ${rel}`);
}

const savedMB = (totalSaved / 1024 / 1024).toFixed(1);
console.log(`\nDone. Generated: ${generated}  Skipped (existing): ${skipped}  Saved: ~${savedMB} MB`);
