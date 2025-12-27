# Clearing Next.js Cache

If the PostCSS error persists after fixing the config, try these steps:

## Step 1: Clear Next.js Cache
```bash
# Delete .next folder
Remove-Item -Recurse -Force .next

# Or on Unix/Mac:
# rm -rf .next
```

## Step 2: Clear Node Modules Cache (if needed)
```bash
# Delete node_modules and reinstall
Remove-Item -Recurse -Force node_modules
npm install
```

## Step 3: Restart Dev Server
```bash
npm run dev
```

## Current PostCSS Config
The config is now properly formatted with TypeScript types:
```js
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

module.exports = config
```

This format is compatible with Next.js 14 and should resolve the "Malformed PostCSS Configuration" error.

