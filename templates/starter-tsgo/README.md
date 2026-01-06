# Bun TypeScript

<p>
  <a href="https://bun.sh">
    <img
      alt="bun.sh"
      src="https://img.shields.io/badge/Bun-%23000000.svg?style=flat-square&logo=bun&logoColor=white"></a>
  <a href="https://github.com/antfu/eslint-config">
    <img
      alt="Code Style"
      src="https://antfu.me/badge-code-style.svg"></a>
</p>

This template uses `tsgo` for enhanced TypeScript support on VSCode. The `@typescript/native-preview`
package is installed as peer dependency to enable TypeScript Native Preview in VSCode.

## Usage

1. Update and install dependencies

```bash
bun add --peer @typescript/native-preview && bun update && bun install
```

2. Initialize git,

```bash
git init
```

3. Include the `.vscode` directory in your repository to ensure consistent settings for all developers. Use git add -f `.vscode` to force add it, bypassing any ignore rules.

```bash
git add -f .vscode
```

4. Initialize `simple-git-hooks`,

```bash
rm -rf .git/hooks && bunx --bun simple-git-hooks
```

5. Initial commit

```bash
git commit --no-verify -m "Initial commit"
```

## Useful Resources

- https://github.com/microsoft/typescript-go
- [TypeScript Native Preview VSCode Extension](https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.native-preview)
