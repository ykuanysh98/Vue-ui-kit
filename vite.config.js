/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vite.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

import { copyFileSync, mkdirSync } from 'fs'

// Сыртқы пакетсіз, tokens.css-ті dist/-ке көшіретін кішкене плагин
function copyTokensPlugin() {
  return {
    name: 'copy-tokens',
    closeBundle() {
      mkdirSync(resolve(__dirname, 'dist'), { recursive: true })
      copyFileSync(
        resolve(__dirname, 'src/assets/styles/tokens.css'),
        resolve(__dirname, 'dist/tokens.css')
      )
    },
  }
}

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [
    vue(),
    // tokens.css-ті Vue SFC компиляция процесінен тыс, дербес көшіру
    copyTokensPlugin(),
  ],
  publicDir: false,
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'KuUiKit',
      fileName: format => `ku-ui-kit.${format}.js`,  
      cssFileName: 'style',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        }
      }
    }]
  }
});