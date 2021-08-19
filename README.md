# Nextjs + Vuejs with Module Federation

## Problem

- Link doesn't work when container dynamically importing `json` file.

## Step to reproduce:

- home/pages/\_app.tsx

```typescript
MyApp.getInitialProps = async () => {
  await import("../test.json");
  return {};
};
```

- Navigate to `about` page using the link on header
- Got the error that said:

```
ChunkLoadError: Loading chunk src_test_json failed.
(missing: http://localhost:3000/_next/static/chunks/src_test_json.js)
```

## Setup

- Run `yarn`
- Run `yarn dev`
- Navigate to `http://localhost:3000`.
