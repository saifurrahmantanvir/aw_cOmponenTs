# React + TypeScript

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react]() uses [Babel]() for Fast Refresh
- [@vitejs/plugin-react-swc]() uses [SWC]() for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react]() and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```


```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vertical Partitioning</title>
</head>

<body>
  <div id="leftPane"></div>
  <div id="divider"></div>
  <div id="rightPane"></div>

  <script>
    const leftPane = document.getElementById('leftPane');
    const divider = document.getElementById('divider');
    const rightPane = document.getElementById('rightPane');

    let isDragging = false;

    divider.addEventListener('mousedown', (e) => {
      isDragging = true;
      document.body.style.cursor = 'ew-resize';
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;

      const newLeftWidth = e.clientX / window.innerWidth * 100;

      if (newLeftWidth > 10 && newLeftWidth < 90) {
        leftPane.style.flexBasis = `${newLeftWidth}%`;
      }
    });

    document.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        document.body.style.cursor = 'default';
      }
    });
  </script>
</body>

</html>
```