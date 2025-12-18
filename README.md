# eKYC SDK

An embeddable SDK for eKYC functionality built with React, TypeScript, and Vite.

## Building the SDK

To build the SDK for embedding:

```bash
npm run build
```

This will create the distributable files in the `dist` folder:
- `ekyc-sdk.iife.js` - IIFE format (recommended for browser embedding)
- `ekyc-sdk.umd.cjs` - UMD format (works in browsers, Node.js, AMD, etc.)
- `ekyc-sdk.css` - Stylesheet (include this for proper styling)

## Embedding the SDK

### Method 1: Using a script tag

Include the SDK in your HTML:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My App</title>
</head>
<body>
  <!-- Container for the SDK -->
  <div id="my-sdk"></div>
  
  <!-- Load the SDK stylesheet -->
  <link rel="stylesheet" href="./dist/ekyc-sdk.css">
  
  <!-- Load the SDK -->
  <script src="./dist/ekyc-sdk.iife.js"></script>
  <script>
    // Initialize the SDK
    window.eKYCSDK.init({
      apiKey: 'your-api-key-here',
      container: '#my-sdk'  // Optional: omit to let SDK create its own container
    });
    
    // Later, you can destroy it
    // window.eKYCSDK.destroy();
  </script>
</body>
</html>
```

### Method 2: Using a CDN (after publishing)

```html
<link rel="stylesheet" href="https://cdn.example.com/ekyc-sdk.css">
<script src="https://cdn.example.com/ekyc-sdk.iife.js"></script>
<script>
  window.eKYCSDK.init({
    apiKey: 'your-api-key-here',
    container: '#my-sdk'
  });
</script>
```

### API Reference

#### `init(options)`

Initializes the SDK.

**Parameters:**
- `options.apiKey` (string, required): Your API key
- `options.container` (string, optional): CSS selector for the container element. If not provided, SDK will create a default container.

**Example:**
```javascript
window.eKYCSDK.init({
  apiKey: 'your-api-key-here',
  container: '#my-sdk'
});
```

#### `destroy()`

Destroys the SDK instance and cleans up.

**Example:**
```javascript
window.eKYCSDK.destroy();
```

## Development

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
