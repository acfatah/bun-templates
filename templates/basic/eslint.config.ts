import { config, markdown, preset } from '@acfatah/eslint-preset'

export default config(
  {
    formatters: true,

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
