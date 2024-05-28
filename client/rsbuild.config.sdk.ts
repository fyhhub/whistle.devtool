import { defineConfig } from '@rsbuild/core';
import path from 'path';
import fs from 'fs';
const rsbuildPlugin = () => ({
  name: 'example',
  setup(api) {
    api.onAfterBuild(({isFirstCompile, stats}) => {
      const sdkPath = path.resolve(stats.compilation.outputOptions.path, 'sdk.js');
      const content = fs.readFileSync(sdkPath).toString();
      if (isFirstCompile) {
        fs.writeFileSync(path.resolve(__dirname, '../_values.txt'), JSON.stringify({
          'whistle.devtool/sdk.js': `<script type=text/javascript>${content}</script>`
        }));
        fs.writeFileSync(path.resolve(__dirname, '../_rules.txt'), `* htmlPrepend://{whistle.devtool/sdk.js} enable://strictHtml`)
      }
    });
  },
});
export default defineConfig({
  plugins: [rsbuildPlugin()],
  output: {
    distPath: {
      root: path.resolve(process.cwd(), 'client-dist/sdk'),
      js: ''
    },
    cleanDistPath: true,
    polyfill: 'off',
    filename: {
      js: '[name].js'
    }
  },
  source: {
    entry: {
      sdk: path.resolve(__dirname, './sdk/index.ts'),
    }
  },
  tools: {
    htmlPlugin: false
  },
});
