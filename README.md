# Moddular MFE

> A collection of accessible, themeable, and responsive micro-frontend components built with **Next.js** & **SCSS**.

[![GitHub Pages](https://img.shields.io/badge/demo-GitHub%20Pages-blue)](https://vatsaakash.github.io/moddular-mfe/)
[![Storybook](https://img.shields.io/badge/storybook-live-ff4785)](https://vatsaakash.github.io/moddular-mfe/storybook/)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](#license)

---

## ✨ Features

- **🎨 Themeable** — Light, dark, and system themes out of the box
- **🏷️ White-Label** — Brand override system for multi-tenant apps
- **♿ Accessible** — WAI-ARIA compliant with keyboard navigation
- **📱 Responsive** — Mobile-first design, works on all screen sizes
- **⚡ Performant** — Zero external runtime deps, SCSS modules
- **📖 Storybook** — Interactive docs with live prop controls

---

## 📦 Components

| Component     | Description                                    | Variants                    |
| ------------- | ---------------------------------------------- | --------------------------- |
| **FAQ**       | Collapsible question/answer list               | bordered, flush, card       |
| **Accordion** | Generic expand/collapse panels                 | bordered, flush, separated  |
| **Ratings**   | Interactive star/heart/circle rating input      | sm, md, lg + 3 icon types   |

> More components coming soon! Contributions welcome.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/vatsaakash/moddular-mfe.git
cd moddular-mfe
npm install
```

---

## 📦 Using in Your Project

You can use these components in any React/Next.js project.

### 1. Install via GitHub
Run this in your target project's terminal:

```bash
npm install https://github.com/vatsaakash/moddular-mfe
```

### 2. Import CSS and Components
Import the global styles in your app entry point (e.g., `main.tsx` or `_app.tsx`), and use components directly:

```tsx
import 'moddular-mfe/src/app/globals.scss'; // Required for color tokens
import { Ratings, ThemeProvider } from 'moddular-mfe';

export default function App() {
  return (
    <ThemeProvider brand="brand1">
      <Ratings value={4} />
    </ThemeProvider>
  );
}
```

> [!IMPORTANT]
> You **must** import the global CSS/SCSS file for the theme and brand tokens to work. If you don't import it, CSS variables like `--color-primary` will be undefined.

> [!NOTE]
> Ensure your project supports **SCSS Modules** and has `sass` installed: `npm install -D sass`.


### Development

```bash
# Next.js dev server
npm run dev

# Storybook
npm run storybook
```

### Build & Deploy

```bash
# Deploy to GitHub Pages (site + storybook)
bash scripts/deploy.sh
```

---

## 🎨 Theming

### Theme Toggle

The built-in `ThemeProvider` supports three modes:

```tsx
import { useTheme } from 'moddular-mfe';

const { theme, setTheme, resolvedTheme } = useTheme();
setTheme('light');  // Force light
setTheme('dark');   // Force dark
setTheme('system'); // Follow OS preference
```

### Brand Overrides (White-Label)

The `ThemeProvider` now supports a `brand` prop to switch color palettes dynamically:

```tsx
<ThemeProvider brand="brand1">
  {/* All components inside will use Brand 1 (Ocean Blue) colors */}
</ThemeProvider>
```

Alternatively, you can manually set the `data-brand` attribute on the `<html>` tag:

```html
<html data-brand="brand1">  <!-- Ocean Blue -->
<html data-brand="brand2">  <!-- Sunset Orange -->
<html data-brand="brand3">  <!-- Forest Green -->
<html data-brand="brand4">  <!-- Royal Purple -->
```

To add a custom brand, edit `src/styles/_brands.scss`:

```scss
[data-brand='myBrand'] {
  --color-primary: #your-color;
  --color-accent: #your-accent;
  // ... override any CSS custom property
}
```

### SCSS Design Tokens

All spacing, typography, and shadows use centralized variables:

```scss
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.myComponent {
  padding: $space-lg;
  border-radius: $radius-md;
  color: var(--color-text);
  background: var(--color-surface);

  @include respond-to(md) {
    padding: $space-xl;
  }

  @include focus-ring;
}
```

---

---

## 📖 Using a Component

```tsx
import { FAQ, Ratings } from 'moddular-mfe';

const items = [
  { question: 'What is this?', answer: 'A reusable component!' },
  { question: 'Is it accessible?', answer: 'Yes — full ARIA support.' },
];

// Use components anywhere
<FAQ items={items} variant="card" allowMultiple />

<Ratings
  defaultValue={3}
  icon="star"
  max={5}
  showLabel
  size="md"
/>
```

### Component API: Ratings

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `max` | `number` | `5` | Maximum number of icons |
| `value` | `number` | `-` | Controlled rating value |
| `icon` | `'star'\|'heart'\|'circle'` | `'star'` | The shape of the rating icon |
| `size` | `'sm'\|'md'\|'lg'` | `'md'` | Size variant |
| `readonly` | `boolean` | `false` | Disable user interaction |
| `theme` | `'light'\|'dark'` | `-` | Component-level theme override |

---

---

## 🤝 Contributing

We welcome contributions! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for:

- Component creation checklist
- SCSS conventions
- Commit message format
- PR process

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router (demo pages)
├── components/             # MFE components
│   ├── FAQ/
│   ├── Accordion/
│   └── Ratings/
├── providers/
│   └── ThemeProvider.tsx    # Dark / Light / System theme context
└── styles/                 # Global SCSS infrastructure
    ├── _variables.scss     # Spacing, typography, shadows
    ├── _colors.scss        # Semantic CSS custom properties
    ├── _themes.scss        # Light / dark overrides
    ├── _brands.scss        # White-label brand maps
    ├── _mixins.scss        # Responsive, a11y, animation helpers
    └── _index.scss         # Barrel file
```

---

## 📄 License

MIT — see [LICENSE](./LICENSE) for details.
