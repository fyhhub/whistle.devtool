import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import path from 'path';
export default defineConfig({
  plugins: [pluginReact()],
  output: {
    distPath: {
      root: path.resolve(process.cwd(), 'client-dist')
    },
    cleanDistPath: true
  },
  source: {
    entry: {
      index: path.resolve(__dirname, './src/index.tsx'),
    }
  }
});
