// ESLint 9 flat config.
// eslint-plugin-astro is pinned to 1.x because 2.x and 3.x require ESLint 10,
// which eslint-plugin-jsx-a11y does not support yet. Keeping the a11y rules
// mattered more than the newer plugin version.
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default defineConfig([
  { ignores: ['dist/', '.astro/', 'node_modules/'] },
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  // a11y rules for markup inside .astro files
  ...eslintPluginAstro.configs['jsx-a11y-recommended'],
  // a11y rules for React islands
  {
    files: ['**/*.{jsx,tsx}'],
    ...jsxA11y.flatConfigs.recommended,
  },
]);
