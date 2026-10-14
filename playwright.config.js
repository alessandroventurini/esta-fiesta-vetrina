import { defineConfig, devices } from '@playwright/test';
import { existsSync } from 'node:fs';

const channel = process.env.PLAYWRIGHT_CHANNEL ?? (existsSync('/Applications/Google Chrome.app') ? 'chrome' : undefined);

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:4174',
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'mobile', use: { ...devices['iPhone 13'], browserName: 'chromium', channel } },
    { name: 'desktop', use: { ...devices['Desktop Chrome'], channel } },
    { name: 'ios', use: { ...devices['iPhone 13'], browserName: 'webkit' } },
  ],
  webServer: {
    command: 'npm run build && npm run preview -- --host 127.0.0.1 --port 4174 --strictPort',
    url: 'http://127.0.0.1:4174',
    reuseExistingServer: !process.env.CI,
  },
});
