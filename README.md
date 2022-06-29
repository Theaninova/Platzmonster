# Platzmonster

![](/static/favicon.webp)

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## PWA

In order to test the PWA, follow this guide:

Chrome:

1. Go to chrome://flags/#unsafely-treat-insecure-origin-as-secure
2. Add the urls you want to whitelist.
3. Restart chrome

Build the app and run the preview script:

```bash
npm run build
npm run preview
```

This will open the dev server on port **6005**. This is because the
service worker caches files and adds offline support, which can interfere
with development **especially** when developing other sites in parallel.
