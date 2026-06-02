# @your-username/vue-ui-kit

A lightweight, accessible Vue 3 component library built with Vite.

## Components

| Component | Description |
|-----------|-------------|
| `<UiButton>` | 4 variants, 3 sizes, loading state |
| `<UiInput>`  | v-model, label, hint, error, prefix/suffix slots |
| `<UiBadge>`  | 5 color variants |
| `<UiCard>`   | header/body/footer slots, hoverable |
| `<UiModal>`  | Teleport-based, animated, accessible |
| `<UiLoader>` | SVG spinner, 3 sizes |
| `<UiToast>`  | Global notifications via composable |

## Installation

```bash
npm install @your-username/vue-ui-kit
```

## Usage

```js
// main.js
import { createApp } from 'vue'
import VueUiKit from '@your-username/vue-ui-kit'
import '@your-username/vue-ui-kit/style.css'

createApp(App).use(VueUiKit).mount('#app')
```

```vue
<template>
  <UiButton variant="primary" @click="show = true">Open Modal</UiButton>

  <UiModal v-model="show" title="Hello">
    <UiInput label="Name" v-model="name" />
    <template #footer>
      <UiButton variant="secondary" @click="show = false">Cancel</UiButton>
      <UiButton @click="submit">Save</UiButton>
    </template>
  </UiModal>
</template>
```

### Toast (composable)

```js
import { useToast } from '@your-username/vue-ui-kit'

const toast = useToast()
toast.success('Saved!')
toast.danger('Something went wrong')
```

## Local Development

```bash
npm install
npm run storybook   # Component explorer at localhost:6006
npm run build       # Build library for production
```

## Publishing to NPM

```bash
# 1. Update version in package.json
npm version patch

# 2. Build
npm run build

# 3. Publish
npm publish --access public
```

## Design Tokens

All components use CSS custom properties. Override them globally:

```css
:root {
  --ui-primary: #your-brand-color;
  --ui-radius-md: 4px; /* sharper corners */
}
```