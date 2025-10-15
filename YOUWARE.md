# Portfolio Website - Modern React Application

A modern, multilingual portfolio website built with React 18, TypeScript, Vite, and Tailwind CSS. Features dynamic project showcase, integrated contact form, dark mode toggle, and seamless language switching between English and Japanese.

## Project Status

- **Project Type**: Portfolio Website (React + TypeScript)
- **Entry Point**: `src/main.tsx` (React application entry)
- **Build System**: Vite 7.0.0 (Fast development and build)
- **Styling System**: Tailwind CSS 3.4.17 (Atomic CSS framework)

## Key Features

### Internationalization (i18next)
- **Multilanguage Support**: English and Japanese translations
- **Browser Language Detection**: Automatic language detection on first load
- **Language Persistence**: User language preference stored in localStorage
- **Configuration**: `src/i18n/config.ts`
- **Translation Files**: `src/i18n/locales/en.json` and `src/i18n/locales/ja.json`

### Dark Mode
- **Theme Toggle**: Persistent dark/light mode switch
- **State Management**: Zustand store (`src/store/themeStore.ts`)
- **Tailwind Integration**: Class-based dark mode configuration
- **Local Storage**: Theme preference persists across sessions

### Portfolio Sections
- **Hero Section**: Dynamic introduction with animated call-to-action buttons
- **Projects Showcase**: Grid layout with project cards, animations, and hover effects
- **About Section**: Personal introduction with skill bars and technology stack
- **Contact Form**: Validated contact form with submission feedback
- **Responsive Navigation**: Mobile-friendly navigation with language and theme toggles

## Implementation Details

### Animation Strategy
- **Framer Motion**: Used throughout for smooth, declarative animations
- **Scroll Animations**: Elements animate into view as user scrolls
- **Stagger Animations**: Project cards animate with sequential delays
- **Hover Effects**: Interactive hover states on buttons, cards, and navigation

### Component Architecture
- **Navigation.tsx**: Fixed header with scroll detection, mobile menu, language/theme toggles
- **Hero.tsx**: Landing section with animated text and CTA buttons
- **Projects.tsx**: Grid layout with animated project cards and stagger effects
- **About.tsx**: Two-column layout with animated skill bars
- **Contact.tsx**: Form with validation, submission states, and user feedback
- **Footer.tsx**: Social links and attribution information

### State Management
- **Theme Store**: Zustand store with localStorage persistence for dark mode
- **i18next**: Language detection and switching with localStorage caching

## Project Architecture

### Directory Structure

```
project-root/
├── index.html              # Main HTML template
├── package.json            # Node.js dependencies and scripts
├── package-lock.json       # Lock file for npm dependencies
├── README.md              # Project documentation
├── YOUWARE.md             # Development guide and template documentation
├── yw_manifest.json       # Project manifest file
├── vite.config.ts         # Vite build tool configuration
├── tsconfig.json          # TypeScript configuration (main)
├── tsconfig.app.json      # TypeScript configuration for app
├── tsconfig.node.json     # TypeScript configuration for Node.js
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── dist/                  # Build output directory (generated)
└── src/                   # Source code directory
    ├── App.tsx            # Main application component
    ├── main.tsx           # Application entry point
    ├── index.css          # Global styles and Tailwind CSS imports
    ├── vite-env.d.ts      # Vite type definitions
    ├── api/               # API related code
    ├── assets/            # Static assets
    ├── components/        # Reusable components
    ├── layouts/           # Layout components
    ├── pages/             # Page components
    ├── store/             # State management
    ├── styles/            # Style files
    └── types/             # TypeScript type definitions
```

### Code Organization Principles

- Write semantic React components with clear component hierarchy
- Use TypeScript interfaces and types to ensure type safety
- Create modular components with clear separation of concerns
- Prioritize maintainability and readability

## Tech Stack

### Core Framework
- **React**: 18.3.1 - Declarative UI library
- **TypeScript**: 5.8.3 - Type-safe JavaScript superset
- **Vite**: 7.0.0 - Next generation frontend build tool
- **Tailwind CSS**: 3.4.17 - Atomic CSS framework

### Routing and State Management
- **React Router DOM**: 6.30.1 - Client-side routing
- **Zustand**: 4.4.7 - Lightweight state management

### Internationalization
- **i18next**: 23.10.1 - Internationalization core library
- **react-i18next**: 14.1.0 - React integration for i18next
- **i18next-browser-languagedetector**: 7.2.0 - Browser language detection
- **Languages Supported**: English (en), Japanese (ja)
- **Auto-detection**: Browser language preference on first visit

### UI and Styling
- **Lucide React**: Beautiful icon library
- **Headless UI**: 1.7.18 - Unstyled UI components
- **Framer Motion**: 11.0.8 - Powerful animation library
- **GSAP**: 3.13.0 - High-performance professional animation library
- **clsx**: 2.1.0 - Conditional className utility

### 3D Graphics and Physics
- **Three.js**: 0.179.1 - JavaScript 3D graphics library
- **Cannon-es**: Modern TypeScript-enabled 3D physics engine
- **Matter.js**: 0.20.0 - 2D physics engine for web

## Technical Standards

### React Component Development Methodology

- Use functional components and React Hooks
- Implement single responsibility principle for components
- Create reusable and composable component architecture
- Use TypeScript for strict type checking

### Styling and Design System

- Use Tailwind CSS design token system
- Apply mobile-first responsive design approach
- Leverage modern layout techniques (Grid, Flexbox)
- Implement thoughtful animations and transitions through Framer Motion and GSAP
- Create immersive 3D visual experiences with Three.js
- Add realistic physics interactions using Cannon-es and Matter.js

### CSS Import Order Rules

**CRITICAL**: `@import` statements must come BEFORE all other CSS statements to avoid PostCSS warnings.

### State Management Approach

- Use Zustand for global state management
- Prioritize React built-in Hooks for local state
- Implement clear data flow and state update patterns
- Ensure state predictability and debugging capabilities

### Performance Optimization Requirements

- Use React.memo and useMemo for component optimization
- Implement code splitting and lazy loading
- Optimize resource loading and caching strategies
- Ensure all interactions work on both touch and pointer devices

## Development Commands

- **Install dependencies**: `npm install`
- **Build project**: `npm run build`
- **Development server**: `npm run dev` (available at http://127.0.0.1:5173)
- **Preview production build**: `npm run preview`

## Customization Guide

### Adding New Translations
1. Edit `src/i18n/locales/en.json` for English text
2. Edit `src/i18n/locales/ja.json` for Japanese text
3. Use translation keys in components with `t('key.path')`

### Modifying Projects
Edit the `projects` array in `src/components/Projects.tsx` to add/remove/modify project entries

### Theme Colors
Customize colors in `tailwind.config.js` under `theme.extend.colors.primary`

### Personal Information
Update Hero section in `src/i18n/locales/en.json` and `ja.json` with your name and details

## ⚠️ CRITICAL: Do NOT Modify index.html Entry Point

**WARNING**: This is a Vite + React project. **NEVER** modify this critical line in `index.html`:

```html
<script type="module" src="/src/main.tsx"></script>
```

**Why**: This is the core entry point. Any modification will cause the app to completely stop working.

**Do instead**: Work in `src/` directory - modify `App.tsx`, add components in `src/components/`, pages in `src/pages/`.

**If accidentally modified**: 
1. Restore: `<script type="module" src="/src/main.tsx"></script>`
2. Rebuild: `npm run build`

## Build and Deployment

The project uses Vite build system:
- **Development server**: `http://127.0.0.1:5173`
- **Build output**: `dist/` directory
- **Supports HMR**: Hot Module Replacement
- **Optimized production build**: Automatic code splitting and optimization

## Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `yw_manifest.json` - Project manifest file
