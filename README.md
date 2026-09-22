# Switch Icons

A modern, developer-focused React icon library built for the icons developers actually need.

Switch Icons provides a consistent collection of UI, fintech, technology, communication, logistics, AI, commerce, social, and other domain-specific icons.

## Features

- React + TypeScript
- Lightweight SVG icons
- Consistent 24×24 icon grid
- `currentColor` support
- Customizable size
- Customizable stroke width
- `forwardRef` support
- Tree-shakeable exports
- Designed for modern web applications

## Installation

```bash
npm install switch-icons
```

or:

```bash
pnpm add switch-icons
```

or:

```bash
yarn add switch-icons
```

## Usage

```tsx
import { ArrowRight, Naira, BankTransfer } from "switch-icons";

export function Example() {
  return (
    <div>
      <ArrowRight size={24} />
      <Naira size={24} />
      <BankTransfer size={24} />
    </div>
  );
}
```

## Customization

Icons inherit the current text color by default.

```tsx
<ArrowRight
  size={32}
  strokeWidth={1.5}
  className="text-blue-500"
/>
```

You can also provide a color directly:

```tsx
<Naira
  size={32}
  color="#111827"
/>
```

## Icon Categories

Switch Icons is organized around practical categories:

- Navigation
- UI & Actions
- People
- Communication
- Business
- Fintech / Payment Rails
- Logistics
- AI
- Technology
- Commerce
- Security
- Media
- Social

Solid/filled variants are also available for a subset of icons where a filled version reads better than the outline (see `*Solid` exports, e.g. `StarSolid`, `ShieldLockSolid`).

## Design Philosophy

Switch Icons is not intended to be another collection of unrelated SVGs.

Every icon is designed around a shared visual system:

- 24×24 viewBox
- Consistent optical weight
- Consistent stroke behavior
- Controlled geometry
- Predictable scaling
- Developer-friendly APIs
- `currentColor` compatibility

The goal is for icons from completely different categories to still feel like they belong to the same system.

## Status

Switch Icons is published on npm and under active development. The API and icon collection may still evolve before a 1.0 release.

## Development

Clone the repository:

```bash
git clone https://github.com/ihemehowell/switchicons.git
cd switchicons
```

Install dependencies:

```bash
pnpm install
```

Build the package:

```bash
pnpm build
```

## Related Project

The interactive icon explorer, documentation, and live code playground are maintained separately:

**Switch Icons Site** — https://github.com/ihemehowell/switch-icons-site

## Roadmap

- [x] Initial React icon architecture
- [x] TypeScript support
- [x] Core UI icons
- [x] Fintech/payment icons
- [x] Expanded UI collection
- [x] Social icons
- [x] Technology icons
- [x] AI icons
- [x] Logistics icons
- [x] Commerce icons
- [x] Media icons
- [x] Solid variants (partial — expanding coverage over time)
- [x] Icon search (in switch-icons-site)
- [x] Icon metadata (categories + tags)
- [x] Copy JSX (in switch-icons-site)
- [x] Copy import (in switch-icons-site)
- [x] Documentation website (switch-icons-site)
- [x] npm release
- [ ] SVG download
- [ ] Brand icons — planned as a separate companion package (official, unmodified logos with attribution), not part of core `switch-icons`

## License

MIT © 2026 Iheme Howell

See [LICENSE](./LICENSE) for the full license.
