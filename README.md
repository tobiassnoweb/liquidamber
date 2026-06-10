# LiquidAmber — Marketing site (Vite + React + TypeScript)

A Vite + React + TypeScript frontend using the shadcn/ui-style component set and Tailwind CSS. This repository contains the single-page marketing website and UI components used across the site.

**Quick links**

- **Source:** [src](src)
- **Main entry:** [src/main.tsx](src/main.tsx#L1)
- **App component:** [src/App.tsx](src/App.tsx#L1)

**Requirements**

- Node compatible runtime. This project works with `bun`, `npm`, or `pnpm`.
- Recommended Node.js >= 18 or Bun.

**Install**
Install dependencies using your package manager of choice. Examples:

```bash
# using bun (preferred if you have bun installed)
bun install

# or using npm
npm install

# or using pnpm
pnpm install
```

**Development**
Run the local dev server with hot reload:

```bash
npm run dev
# or
bun run dev
# or
pnpm run dev
```

Open http://localhost:5173 in your browser (Vite default).

**Build**
Create an optimized production build:

```bash
npm run build
# or
bun run build
```

The build output is written to the `dist` directory by Vite.

**Preview Production Build Locally**
To preview the production build locally:

```bash
npm run preview
# or
bun run preview
```

**Testing**
Run unit tests with Vitest:

```bash
npm run test
# watch mode
npm run test:watch
```

**Lint**
Run eslint across the project:

```bash
npm run lint
```

**Environment / Configuration**

- Tailwind configuration: [tailwind.config.ts](tailwind.config.ts)
- Vite config: [vite.config.ts](vite.config.ts)
- TypeScript configs: [tsconfig.json](tsconfig.json) and [tsconfig.app.json](tsconfig.app.json)

**Deploy**
This is a static Vite site — you can deploy the contents of the `dist` directory to any static hosting provider (Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3 + CloudFront, etc.). Typical steps:

```bash
npm run build
# then deploy the contents of the `dist` directory with your provider's tooling or via their UI
```

For Vercel: connect the repository and set the build command to `npm run build` and the output directory to `dist`.

For Netlify: set the build command to `npm run build` and the publish directory to `dist`.

**Contributing / Developing components**

- UI components live under [src/components/ui](src/components/ui). Follow existing patterns when adding new components (TypeScript + React + Tailwind).
- Routes and pages live under [src/pages](src/pages).

**Useful commands (recap)**

- Install: `bun install` / `npm install`
- Dev server: `npm run dev`
- Build: `npm run build`
- Preview build: `npm run preview`
- Test: `npm run test`
- Lint: `npm run lint`

If you want, I can also add a small deploy guide for a specific provider — tell me which one.
