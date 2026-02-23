# Bun TypeScript

[Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

The `bun build` command bundles JavaScript, TypeScript, and other supported files into optimized output.

To install dependencies:

```bash
bun install
```

To run:

```bash
bun start
```

Basic bundling example:

```bash
bun build index.ts --outdir ./dist
```

Key options:

- `--outdir`: Output directory for bundled files.
- `--target`: Runtime target (`bun`, `node`, or `browser`).
- `--sourcemap`: Source map mode (`inline` or external).

Create a standalone executable for server-side apps:

```bash
bun build index.ts --compile --outfile ./dist/basic
```
