## Project Guidelines

Refer to the [README.md](../README.md) for an overview of the project structure, features, and developer workflows.

## What an AI agent should do first when editing

1. Read `package.json`, `tsconfig.json`, and `README.md` at the repo root.
2. If TypeScript changes are needed, prefer adding minimal `extends`-based overrides
   in the package `tsconfig.json` rather than editing root compiler flags without requirement.

## Coding Style

- Always fix lint errors as the last task, only after all other tasks are completed.
- Use `bun run format [..file]` to format code or files.
- We are using ESLint with `@antfu/eslint-config` rules via `eslint.config.ts`.
  The following is the summary of important rules:
  - use spaces for indentation, instead of tabs
  - two-space indent
  - single quotes
  - alphabetised imports (file name) with `perfectionist/sort-imports`
  - empty line before `return`
  - top-level functions should be declared with function keyword
- Naming React components/Redux
  - slices use PascalCase
  - hooks/helpers/files use camelCase
  - config keys use UPPER_SNAKE_CASE

## Testing & Verification

- Do not merge Bun.env and process.env. Find where dotenv files are located,
  cd into that directory and run commands from there.
- Start with specific tests near changed code, then broaden.
- Don’t fix unrelated broken tests.

## Documentation or Comments

- Limit lines around 80 characters. Insert line breaks with correct indents so line
  stays between 80 characters.
- Be concise, use bullets.
- Use fenced code blocks and specify the language (e.g., ```yaml)
  when writing code snippets or commands.
- Wrap inline commands, file paths, env vars, and code identifiers in backticks.
- Use tables in documentation whenever helpful.

## Commit Messages

- Use conventional commits: `feat`, `fix`, `docs`, `chore`, `refactor`, `test`, `style`
- Use the imperative mood ("add", "fix", "change", "remove")
- Always add scope based on workspace except for root. E.g. `fix(registry):`, `feat(web):`
- Use directory names either from `apps/` or `packages/` as scope.
- Limit subject line to 60 characters.
- Use the body to explain what and why, not how.
- Use bullets in the body if multiple points.
- Do not add co-authors unless explicitly asked.

## Response & Output Style

- Be concise; prioritize actionable guidance.
- Use what, why, and how to explain concepts.
- Include tips, gotchas, and common pitfalls; something that need to be aware of.
- Use bullets and short sections for scannability.
- Use tables whenever helpful.
- Use markdown formatting for code snippets and commands.
- Wrap commands, file paths, env vars, and code identifiers in backticks.
- Provide bash-ready commands in fenced blocks when giving steps.
- When editing code, prefer minimal diffs and preserve existing style.
- If you create multiple files or non-trivial code, include a short run/test snippet.
- Never use emojis unless explicitly asked and avoid en or em dashes.
