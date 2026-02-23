import { defineConfig, markdown, preset, vue } from '@acfatah/eslint-preset'

export default defineConfig(
  {
    type: 'lib',

    vue: true,

    ignores: [
      '**/coverage/**',
      '**/dist/**',
      '**/logs/**',
      '**/tsconfig.*',
      'bun.lock',
      'templates/*/tsconfig.*',
    ],
  },

  {
    rules: {
      ...preset,

      // Optional markdown rules
      ...markdown,

      // Specifically for Vue projects
      ...vue,
    },
  },
)
