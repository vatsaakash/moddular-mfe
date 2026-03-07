# Contributing to Moddular MFE

Thank you for considering contributing to **Moddular MFE**! 🎉 This guide will help you get started.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Adding a New Component](#adding-a-new-component)
- [Commit Message Format](#commit-message-format)
- [Pull Request Process](#pull-request-process)
- [Development Guidelines](#development-guidelines)

---

## Code of Conduct

Please be respectful and constructive. We follow the [Contributor Covenant](https://www.contributor-covenant.org/).

---

## Getting Started

1. **Fork** the repository
2. **Clone** your fork:
   ```bash
   git clone https://github.com/<your-username>/moddular-mfe.git
   cd moddular-mfe
   ```
3. **Install** dependencies:
   ```bash
   npm install
   ```
4. **Create a branch**:
   ```bash
   git checkout -b feat/<component-name>
   ```
5. **Start dev server**:
   ```bash
   npm run dev        # Next.js at http://localhost:3000
   npm run storybook  # Storybook at http://localhost:6006
   ```

---

## Adding a New Component

Every component **must** include these files:

```
src/components/<ComponentName>/
├── <ComponentName>.tsx            # Component implementation
├── <ComponentName>.module.scss    # Scoped SCSS styles
├── <ComponentName>.stories.tsx    # Storybook stories
└── index.ts                       # Barrel export
```

### Component Checklist

- [ ] **TypeScript** with full prop types and JSDoc comments
- [ ] **SCSS Module** using only CSS custom properties (no hardcoded colors)
- [ ] **Accessible**: proper `aria-*` attributes, keyboard navigation, focus management
- [ ] **Responsive**: works on mobile, tablet, desktop
- [ ] **Themed**: adapts to light/dark/system themes automatically
- [ ] **Storybook story** with `argTypes` for all props
- [ ] **Multiple variants** if applicable (e.g., bordered, flush, card)
- [ ] **Barrel export** in `index.ts`

### SCSS Rules

```scss
// ✅ DO — use CSS custom properties
color: var(--color-text);
background: var(--color-surface);

// ❌ DON'T — hardcode colors
color: #333;
background: white;
```

```scss
// ✅ DO — use design tokens
padding: $space-base;
border-radius: $radius-md;

// ❌ DON'T — use magic numbers
padding: 16px;
border-radius: 12px;
```

---

## Commit Message Format

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]
```

### Types

| Type       | Description                        |
| ---------- | ---------------------------------- |
| `feat`     | New component or feature           |
| `fix`      | Bug fix                            |
| `docs`     | Documentation changes              |
| `style`    | Formatting, no code logic change   |
| `refactor` | Code restructuring                 |
| `test`     | Adding or updating tests           |
| `chore`    | Build scripts, configs, etc.       |

### Examples

```
feat(ratings): add emoji icon variant
fix(accordion): fix keyboard navigation on disabled items
docs(readme): add theming guide section
```

---

## Pull Request Process

1. Ensure your code **builds** cleanly: `npm run build`
2. Ensure **Storybook** builds: `npm run build-storybook`
3. Ensure **lint** passes: `npm run lint`
4. Update the **README** if you added a new component
5. Fill out the **PR template** completely
6. Request review from a maintainer

---

## Development Guidelines

### Accessibility

- Follow [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- Support keyboard-only navigation
- Use `aria-expanded`, `aria-controls`, `role` attributes
- Test with a screen reader

### Performance

- Avoid external runtime dependencies
- Use SCSS modules (no global CSS leaks)
- Keep bundle size minimal
- Use `React.memo()` only where measurably beneficial

### Theming

- All colors must use CSS custom properties from `_colors.scss`
- All spacing must use SCSS variables from `_variables.scss`
- Test in both light and dark themes
- Test with brand overrides

---

## 💬 Questions?

Open a [GitHub Issue](https://github.com/your-username/moddular-mfe/issues) — we're happy to help!
