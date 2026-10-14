import { mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = fileURLToPath(new URL('../', import.meta.url));
const albums = [
  { id: 'venerdi', day: 'Venerdì', name: 'Aperipirlo', date: '2 ottobre 2026', folder: 'VENERDI - APERIPIRLO', cover: 'IMG_0358.jpg', expected: 147 },
  { id: 'sabato', day: 'Sabato', name: 'Tutti a 90', date: '3 ottobre 2026', folder: 'SABATO - TUTTI A 90', cover: 'IMG_0889.jpg', expected: 120 },
  { id: 'domenica', day: 'Domenica', name: 'Splendido Splendente', date: '4 ottobre 2026', folder: 'DOMENICA - SPLENDIDO SPLENDENTE', cover: 'DSC00027.jpg', expected: 97 },
];
const scriptModified = (await stat(fileURLToPath(import.meta.url))).mtimeMs;
const encodePath = (...parts) => parts.map(encodeURIComponent).join('/');

async function createVariant(input, output, dimensions, sourceModified) {
  const existing = await stat(output).catch(() => null);
  if (existing && existing.mtimeMs >= Math.max(sourceModified, scriptModified)) return;
  await sharp(input).rotate().resize({ ...dimensions, withoutEnlargement: true }).webp({ quality: 82 }).toFile(output);
}

async function prepareAlbum({ folder, cover, expected, ...album }) {
  const source = path.join(root, 'public', folder);
  const files = (await readdir(source)).filter((name) => /\.jpe?g$/i.test(name)).sort();
  if (files.length !== expected || !files.includes(cover)) {
    throw new Error(`${album.day}: attese ${expected} foto e la copertina ${cover}; trovate ${files.length} foto.`);
  }
  const output = path.join(root, 'public', 'photos', album.id);
  await mkdir(output, { recursive: true });
  const photos = new Array(files.length);
  let nextIndex = 0;
  // Bounded workers keep high-resolution Sunday photos from exhausting memory.
  await Promise.all(Array.from({ length: 4 }, async () => {
    while (nextIndex < files.length) {
      const index = nextIndex++;
      const file = files[index];
      const input = path.join(source, file);
      const metadata = await sharp(input).metadata();
      const sourceStat = await stat(input);
      const rotated = [5, 6, 7, 8].includes(metadata.orientation);
      const id = path.parse(file).name;
      await createVariant(input, path.join(output, `${id}-thumb.webp`), { width: 480, height: 720, fit: 'inside' }, sourceStat.mtimeMs);
      await createVariant(input, path.join(output, `${id}-view.webp`), { width: 1600, height: 1800, fit: 'inside' }, sourceStat.mtimeMs);
      photos[index] = {
        id,
        filename: file,
        original: encodePath(folder, file),
        thumbnail: encodePath('photos', album.id, `${id}-thumb.webp`),
        view: encodePath('photos', album.id, `${id}-view.webp`),
        width: rotated ? metadata.height : metadata.width,
        height: rotated ? metadata.width : metadata.height,
        bytes: sourceStat.size,
      };
    }
  }));
  const coverInput = path.join(source, cover);
  await createVariant(coverInput, path.join(output, 'cover.webp'), { width: 960, height: 480, fit: 'cover', position: 'attention' }, (await stat(coverInput)).mtimeMs);
  console.log(`${album.day}: ${photos.length} foto pronte.`);
  return { ...album, cover: encodePath('photos', album.id, 'cover.webp'), photos };
}

const manifest = [];
for (const album of albums) manifest.push(await prepareAlbum(album));
const destination = path.join(root, 'src', 'data', 'albums.generated.json');
const contents = `${JSON.stringify(manifest, null, 2)}\n`;
if (await readFile(destination, 'utf8').catch(() => null) !== contents) {
  await writeFile(destination, contents);
}
console.log('Archivio completo: 364 originali preservati, anteprime e visualizzazioni WebP generate.');
