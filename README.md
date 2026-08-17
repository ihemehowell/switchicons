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
npm install switch-icon

pnpm add switch-icons

or:

yarn add switch-icons
Usage
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
Customization

Icons inherit the current text color by default.

<ArrowRight
  size={32}
  strokeWidth={1.5}
  className="text-blue-500"
/>

You can also provide a color directly:

<Naira
  size={32}
  color="#111827"
/>
Icon Categories

Switch Icons is being designed around practical categories:

Navigation
UI & Actions
People
Communication
Business
Fintech
Payment Rails
Logistics
AI
Technology
Commerce
Security
Media
Social
Brand Icons
Design Philosophy

Switch Icons is not intended to be another collection of unrelated SVGs.

Every icon is designed around a shared visual system:

24×24 viewBox
Consistent optical weight
Consistent stroke behavior
Controlled geometry
Predictable scaling
Developer-friendly APIs
currentColor compatibility

The goal is for icons from completely different categories to still feel like they belong to the same system.

Status

Switch Icons is currently under active development.

The API and icon collection may change before the first stable release.

Development

Clone the repository:

git clone https://github.com/ihemehowell/switchicons.git
cd switchicons

Install dependencies:

pnpm install

Build the package:

pnpm build
Related Project

The interactive icon explorer and documentation site are maintained separately:

Switch Icons Site

https://github.com/ihemehowell/switch-icons-site

Roadmap
 Initial React icon architecture
 TypeScript support
 Core UI icons
 Fintech/payment icons
 Expanded UI collection
 Social icons
 Technology icons
 AI icons
 Logistics icons
 Commerce icons
 Brand icons
 Icon search
 Icon metadata
 Copy JSX
 Copy import
 SVG download
 Solid variants
 npm release
 Documentation website
License

MIT © 2026 Iheme Howell

See LICENSE for the full license.