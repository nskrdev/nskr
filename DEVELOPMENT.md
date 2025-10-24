# Development Guide

## Getting Started

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Start the development server:**

   ```bash
   pnpm dev
   ```

   The application will be available at `http://localhost:1408`

## Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm check-types` - Run TypeScript type checking
- `pnpm format:check` - Check code formatting
- `pnpm format:write` - Format code
- `pnpm registry:build` - Build component registry

## Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── (app)/             # Main application routes
│   ├── (llms)/            # LLM-readable content routes
│   ├── og/                # Open Graph image generation
│   └── rss/               # RSS feed
├── components/            # Reusable UI components
├── features/              # Feature-specific components and logic
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
├── config/                # Configuration files
└── styles/                # Global styles
```

## Environment Variables (Optional)

The application works without any environment variables thanks to sensible fallbacks. However, you can customize behavior by creating a `.env.local` file:

```env
# Site configuration (defaults to https://nskr.me)
APP_URL=https://your-custom-domain.com

# Component Registry URL (defaults to https://nskr.me/r)
REGISTRY_URL=https://your-registry-url.com

# DMCA URL (optional - only shown in footer if provided)
NEXT_PUBLIC_DMCA_URL=https://www.dmca.com/Protection/Status.aspx?ID=your-id-here

# GitHub API Token (only needed if using star count component)
# Get from: https://github.com/settings/tokens
GITHUB_API_TOKEN=your_github_personal_access_token_here
```

## Development Workflow

1. **Code Style:** The project uses ESLint and Prettier for code formatting
2. **TypeScript:** Strict TypeScript configuration is enforced
3. **Import Sorting:** Imports are automatically sorted with `simple-import-sort`
4. **Git Hooks:** Pre-commit hooks run linting and formatting checks

## Component Registry

This project includes a custom component registry powered by shadcn CLI. Components are stored in the `public/r/` directory and can be installed using:

```bash
npx shadcn@latest add @nskr/component-name
```

## Blog System

- Blog posts are stored as MDX files in `src/features/blog/content/`
- Posts support frontmatter for metadata
- Automatic RSS feed generation
- SEO-optimized with JSON-LD schema

## Deployment

The project is configured for deployment on Vercel with the following settings:

- **Build Command:** `npm run build`
- **Install Command:** `npm install --legacy-peer-deps`
- **Framework:** Next.js

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## Troubleshooting

### Build Issues

If you encounter build errors:

1. Clear Next.js cache: `rm -rf .next`
2. Reinstall dependencies: `rm -rf node_modules && pnpm install`
3. Check TypeScript errors: `pnpm check-types`

### Development Server Issues

If the dev server won't start:

1. Check if port 1408 is available
2. Try a different port: `pnpm dev -p 3000`
3. Clear cache and restart

## Performance

- The project uses Turbopack for fast development builds
- Images are optimized automatically
- Code splitting is enabled for better performance
- Static generation is used where possible
