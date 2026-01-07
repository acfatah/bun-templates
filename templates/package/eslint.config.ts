import { defineConfig, markdown, preset } from '@acfatah/eslint-preset'

export default defineConfig(
  {
    ignores: [
      '**/coverage/**',
      '**/dist/**',
      '**/logs/**',
      '**/tsconfig.*',
      'bun.lock',
    ],
  },

  {
    rules: {
      'no-console': 'off',
      ...preset,
      ...markdown,
    },
  },
)
