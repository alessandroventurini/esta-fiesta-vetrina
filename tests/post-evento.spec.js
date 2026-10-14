import { expect, test } from '@playwright/test';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

test('la homepage presenta il prossimo evento senza prenotazioni scadute', async ({ page, request }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await expect(page.getByRole('heading', { name: 'Next event is coming soon' })).toBeVisible();
  await expect(page.getByRole('link', { name: /prenota/i })).toHaveCount(0);
  await expect(page.getByRole('link', { name: /scarica lo sponsor deck/i })).toHaveCount(0);
  await expect(page).toHaveTitle('Esta Fiesta — Le foto di OktoberFiesta 2026');
  await expect(page.getByRole('link', { name: 'Seguici su Instagram' })).toHaveAttribute('href', 'https://instagram.com/estafiestaaa');
  await page.getByRole('button', { name: 'Menu', exact: true }).click();
  await expect(page.getByRole('navigation', { name: 'Menu principale' })).toBeVisible();
  await expect(page.getByRole('navigation').getByRole('link', { name: /programma|prenota|birre|eventi/i })).toHaveCount(0);
  const html = await (await request.get('/')).text();
  expect(html).toContain('<meta property="og:title" content="Esta Fiesta — Le foto di OktoberFiesta 2026"');
  expect(html).toContain('<meta name="twitter:title" content="Esta Fiesta — Le foto di OktoberFiesta 2026"');
  expect(html).not.toContain('02·03·04 Ottobre');
});

test('dalle story si scelgono tre album e si consultano tutte le foto della serata', async ({ page }) => {
  const requestedImages = [];
  page.on('request', (request) => {
    if (request.resourceType() === 'image') requestedImages.push(request.url());
  });
  await page.goto('/#foto', { waitUntil: 'domcontentloaded' });
  const title = page.getByRole('heading', { name: 'Tre serate. Tutti i ricordi.' });
  await expect(title).toBeInViewport();
  await expect.poll(async () => (await title.boundingBox()).y).toBeGreaterThanOrEqual(76);
  for (const [day, name, count] of [['Venerdì', 'Aperipirlo', 147], ['Sabato', 'Tutti a 90', 120], ['Domenica', 'Splendido Splendente', 97]]) {
    const cover = page.getByRole('button', { name: `Apri album ${day} — ${name}` });
    await expect.poll(() => cover.locator('img').evaluate((img) => img.naturalWidth)).toBeGreaterThan(0);
    expect((await cover.locator('img').boundingBox()).height).toBeGreaterThan(100);
    await cover.click();
    await expect(page.getByRole('heading', { name: `${day} / ${name}` })).toBeInViewport();
    const photos = page.getByRole('button', { name: /^Apri foto \d+ di / });
    await expect(photos).toHaveCount(count);
    await expect(photos.first().getByRole('img')).toBeVisible();
    if (test.info().project.name === 'mobile') {
      const first = await photos.nth(0).boundingBox();
      const second = await photos.nth(1).boundingBox();
      expect(first.y).toBe(second.y);
      expect(second.x).toBeGreaterThan(first.x);
    }
    await page.getByRole('link', { name: 'Tutti gli album' }).click();
    await expect(title).toBeInViewport();
  }
  expect(requestedImages.some((url) => /VENERDI|SABATO|DOMENICA/.test(url))).toBe(false);
  expect(requestedImages.some((url) => url.includes('/photos/'))).toBe(true);
});

test('si sfogliano le foto complete e si torna allo stesso punto della griglia', async ({ page }) => {
  await page.goto('/#foto/venerdi', { waitUntil: 'domcontentloaded' });
  const photo = page.getByRole('button', { name: 'Apri foto 35 di Venerdì', exact: true });
  await photo.scrollIntoViewIfNeeded();
  const scrollBefore = await page.evaluate(() => window.scrollY);
  await photo.click();
  const viewer = page.getByRole('dialog', { name: 'Foto di Venerdì — Aperipirlo' });
  await expect(viewer).toBeVisible();
  await expect(viewer.getByText('35 / 147', { exact: true })).toBeVisible();
  const image = viewer.getByRole('img', { name: 'Venerdì — foto 35 di 147' });
  await expect(image).toBeVisible();
  await expect.poll(() => image.evaluate((img) => img.naturalWidth)).toBeGreaterThan(0);
  const dimensions = await image.evaluate((img) => ({ box: img.getBoundingClientRect().toJSON(), width: img.naturalWidth, height: img.naturalHeight }));
  expect(dimensions.box.width / dimensions.box.height).toBeCloseTo(dimensions.width / dimensions.height, 1);
  await viewer.getByRole('button', { name: 'Foto successiva' }).click();
  await expect(viewer.getByText('36 / 147', { exact: true })).toBeVisible();
  await viewer.getByRole('button', { name: 'Foto precedente' }).click();
  await expect(viewer.getByText('35 / 147', { exact: true })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(viewer).toHaveCount(0);
  await expect(photo).toBeFocused();
  expect(await page.evaluate(() => window.scrollY)).toBeCloseTo(scrollBefore, 0);
});

for (const sample of [
  { slug: 'venerdi', day: 'Venerdì', index: 1, folder: 'VENERDI - APERIPIRLO', filename: 'IMG_0001.jpg' },
  { slug: 'sabato', day: 'Sabato', index: 1, folder: 'SABATO - TUTTI A 90', filename: 'IMG_0545.jpg' },
  { slug: 'domenica', day: 'Domenica', index: 35, folder: 'DOMENICA - SPLENDIDO SPLENDENTE', filename: 'DSC09704.jpg' },
]) {
  test(`il download salva l’originale di ${sample.day} e offre un accesso alternativo`, async ({ page }) => {
    await page.goto(`/#foto/${sample.slug}`, { waitUntil: 'domcontentloaded' });
    await page.getByRole('button', { name: `Apri foto ${sample.index} di ${sample.day}`, exact: true }).click();
    const viewer = page.getByRole('dialog');
    await expect(viewer.getByRole('link', { name: 'Scarica foto originale', exact: true })).toBeVisible();
    const downloadPromise = page.waitForEvent('download');
    await viewer.getByRole('link', { name: 'Scarica foto originale', exact: true }).click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBe(`EstaFiesta-2026-${sample.slug}-${sample.filename}`);
    const downloaded = await readFile(await download.path());
    const original = await readFile(`public/${sample.folder}/${sample.filename}`);
    expect(createHash('sha256').update(downloaded).digest('hex')).toBe(createHash('sha256').update(original).digest('hex'));
    const originalLink = viewer.getByRole('link', { name: 'Apri l’originale' });
    await expect(originalLink).toHaveAttribute('href', `/${encodeURIComponent(sample.folder)}/${sample.filename}`);
    await expect(originalLink).toHaveAttribute('target', '_blank');
    await expect(viewer).toBeVisible();
  });
}

test('la navigazione rispetta i limiti dell’album e mantiene accessibile il menu', async ({ page }) => {
  await page.goto('/#foto/sabato', { waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: 'Apri foto 1 di Sabato', exact: true }).click();
  const viewer = page.getByRole('dialog');
  await expect(viewer.getByRole('button', { name: 'Foto precedente' })).toBeDisabled();
  await page.keyboard.press('ArrowLeft');
  await expect(viewer.getByText('1 / 120', { exact: true })).toBeVisible();
  await page.keyboard.press('ArrowRight');
  await expect(viewer.getByText('2 / 120', { exact: true })).toBeVisible();
  await viewer.getByRole('button', { name: 'Chiudi foto' }).click();
  await page.getByRole('button', { name: 'Apri foto 120 di Sabato', exact: true }).click();
  await expect(viewer.getByRole('button', { name: 'Foto successiva' })).toBeDisabled();
  await viewer.getByRole('button', { name: 'Chiudi foto' }).click();
  await page.getByRole('button', { name: 'Menu', exact: true }).click();
  await page.getByRole('navigation', { name: 'Menu principale' }).getByRole('link', { name: 'Foto', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Tre serate. Tutti i ricordi.' })).toBeInViewport();
  await page.getByRole('button', { name: 'Apri album Domenica — Splendido Splendente' }).click();
  await page.goBack();
  await expect(page.getByRole('heading', { name: 'Tre serate. Tutti i ricordi.' })).toBeInViewport();
});

test('un’immagine non disponibile non blocca il visualizzatore', async ({ page }) => {
  await page.route('**/photos/venerdi/IMG_0001-view.webp', (route) => route.abort());
  await page.goto('/#foto/venerdi', { waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: 'Apri foto 1 di Venerdì', exact: true }).click();
  const viewer = page.getByRole('dialog');
  await expect(viewer.getByRole('alert')).toContainText('Questa foto non è disponibile');
  await expect(viewer.getByRole('link', { name: 'Apri l’originale' })).toBeVisible();
  await viewer.getByRole('button', { name: 'Foto successiva' }).click();
  await expect(viewer.getByRole('img', { name: 'Venerdì — foto 2 di 147' })).toBeVisible();
  await viewer.getByRole('button', { name: 'Chiudi foto' }).click();
  await expect(page.getByRole('button', { name: 'Apri foto 1 di Venerdì', exact: true })).toBeFocused();
});

test('il gesto touch sfoglia le foto e il focus rimane nel visualizzatore', async ({ page, browserName }) => {
  test.skip(browserName !== 'chromium' || test.info().project.name !== 'mobile', 'Gesto fisico verificato con il touchscreen Chromium; altri browser verificano gli stessi controlli visibili.');
  await page.goto('/#foto/venerdi', { waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: 'Apri foto 1 di Venerdì', exact: true }).click();
  const viewer = page.getByRole('dialog');
  const image = viewer.getByRole('img');
  await expect(image).toBeVisible();
  const box = await image.boundingBox();
  const session = await page.context().newCDPSession(page);
  const y = box.y + box.height / 2;
  await session.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: 280, y }] });
  await session.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: 100, y }] });
  await session.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await expect(viewer.getByText('2 / 147', { exact: true })).toBeVisible();
  for (let i = 0; i < 8; i++) {
    await page.keyboard.press('Tab');
    expect(await viewer.evaluate((dialog) => dialog.contains(document.activeElement))).toBe(true);
  }
  await session.detach();
});
