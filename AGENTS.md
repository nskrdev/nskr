# Agent Guidelines for nskr.me Portfolio

## Build & Development Commands

- **Development server**: `pnpm dev`
- **Build**: `pnpm build`
- **Type checking**: `pnpm check-types`
- **Linting**: `pnpm lint`
- **Lint with fixes**: `pnpm lint:fix`
- **Format check**: `pnpm format:check`
- **Format and write**: `pnpm format:write`
- **Registry build**: `pnpm registry:build`
- **Testing**: `pnpm test` (currently no tests configured)

## Code Style Guidelines

### TypeScript & Imports

- Use strict TypeScript with consistent type imports (`import type`)
- Sort imports/exports with `simple-import-sort` plugin
- Use `@/*` path alias for src directory imports

### Formatting

- 2-space indentation, 80 character line width
- Double quotes, semicolons required
- ES5 trailing commas
- Tailwind CSS with `clsx`, `cn`, `cva` utility functions

### Naming Conventions

- **Components**: PascalCase (e.g., `Button`, `PanelHeader`)
- **Hooks**: camelCase with `use` prefix (e.g., `useConfig`)
- **Files**: kebab-case (e.g., `panel-header.tsx`)
- **Types**: PascalCase with descriptive names

### Component Patterns

- Use `cva` (class-variance-authority) for component variants
- Include `data-slot` attributes for component identification
- Follow shadcn/ui patterns with zinc color scheme
- Use `cn()` utility for conditional class merging

### Error Handling

- Log errors to console for debugging
- Use try-catch blocks sparingly, prefer graceful degradation
- Validate props and provide sensible defaults

### State Management

- Use Jotai atoms for global state
- Prefer local state with React hooks when possible
- Use `atomWithStorage` for persistent configuration
