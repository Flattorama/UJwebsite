# Unapologetically Jewish - Activism Platform

## Overview

This is a single-page activism website for "Unapologetically Jewish," a Canadian organization fighting antisemitism through direct action, legal advocacy, and grassroots organizing. The site features a bold, brutalist design aesthetic with a focus on powerful typography and stark visual contrasts. Built as a full-stack application with React frontend and Express backend, it serves as both an information hub and action platform with newsletter subscriptions and volunteer applications.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing (currently single-page with 404 handling)
- Path aliases configured via TypeScript and Vite for clean imports (`@/`, `@shared/`, `@assets/`)

**UI Component System**
- Shadcn/ui component library (New York style variant) providing pre-built, accessible components
- Radix UI primitives for foundational accessibility and interactions
- Tailwind CSS for utility-first styling with custom design tokens
- Class Variance Authority (CVA) for type-safe component variants
- Custom CSS variables system for theming (light mode configured, dark mode structure present)

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management, caching, and API mutations
- Custom API client wrapper (`apiRequest`) with credential handling and error management
- React Hook Form with Zod resolvers for type-safe form validation

**Design System**
- Brutalist activism aesthetic with aggressive typography (font-black weights, uppercase headings, tight tracking)
- Custom spacing scale emphasizing generous whitespace (py-24, py-32 for sections)
- Color system built on HSL with CSS custom properties for dynamic theming
- Red accent color (#DC2626 / HSL 0 84% 47%) as primary brand color representing urgency and action
- Monospace fonts for quotes, statistics, and technical elements
- Full-screen hero sections with scroll-based navigation

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for the REST API server
- HTTP server creation via Node's native `http` module (prepared for WebSocket upgrades if needed)
- Custom request logging middleware tracking method, path, status code, and duration
- JSON body parsing with raw body preservation for webhook verification
- URL-encoded form data support

**API Design**
- RESTful endpoints under `/api` namespace
- POST `/api/newsletter/subscribe` - Newsletter subscription with duplicate prevention
- POST `/api/volunteer/apply` - Volunteer application submission
- Zod schema validation for all incoming data
- Consistent error handling with appropriate HTTP status codes (400 for validation, 500 for server errors)
- JSON response format with message and data fields

**Development vs Production**
- Development: Vite middleware integration for HMR, always-fresh HTML templates with nanoid cache busting
- Production: Static file serving from pre-built `dist/public` directory, SPA fallback to index.html
- Environment-aware configuration via `NODE_ENV`
- ESBuild bundling strategy with selective dependency bundling (allowlist) to optimize cold start performance

### Data Layer

**ORM & Database**
- Drizzle ORM for type-safe database operations
- Neon serverless PostgreSQL as the database provider (configured via `@neondatabase/serverless`)
- Schema-first approach with TypeScript types inferred from Drizzle schema
- Migration support via Drizzle Kit (output to `./migrations` directory)

**Database Schema**
- **users** table: Authentication foundation with UUID primary keys, username/password fields
- **newsletter_subscribers** table: Email collection with subscription timestamps, unique email constraint
- **volunteer_applications** table: Tracks name, email, role, and submission timestamp
- All tables use `gen_random_uuid()` for primary key generation
- Timestamps with `defaultNow()` for audit trails

**Data Access Pattern**
- Repository pattern via `IStorage` interface for abstraction and testability
- `DatabaseStorage` implementation with Drizzle query builders
- Async/await patterns throughout for database operations
- Single result queries return `undefined` for not found, preventing null-related errors

**Validation Layer**
- Drizzle-Zod integration for automatic schema-to-validator generation
- `insertNewsletterSubscriberSchema` and `insertVolunteerApplicationSchema` for input validation
- Runtime type safety ensuring database constraints are enforced before insertion

## External Dependencies

**Core Framework Dependencies**
- React 18.x with React DOM for UI rendering
- Express 4.x for HTTP server and middleware
- TypeScript for type safety across client and server

**Database & ORM**
- `@neondatabase/serverless` - Serverless PostgreSQL driver for Neon database
- `drizzle-orm` - TypeScript ORM with PostgreSQL dialect
- `drizzle-zod` - Schema validation integration
- `drizzle-kit` - Migration and schema management CLI

**UI & Styling**
- Tailwind CSS - Utility-first CSS framework
- Radix UI components - 20+ accessible component primitives
- `class-variance-authority` - Type-safe variant API for components
- `clsx` and `tailwind-merge` - Conditional class management
- Lucide React - Icon library for consistent iconography

**Data Management**
- `@tanstack/react-query` - Server state management and caching
- `react-hook-form` - Performant form state management
- `@hookform/resolvers` - Form validation resolver adapters
- `zod` - Runtime type validation and parsing

**Build & Development Tools**
- Vite - Frontend build tool and dev server
- ESBuild - JavaScript/TypeScript bundler for production server build
- `tsx` - TypeScript execution for development server
- PostCSS with Autoprefixer - CSS processing

**Development-Only (Replit Integration)**
- `@replit/vite-plugin-runtime-error-modal` - Enhanced error overlay
- `@replit/vite-plugin-cartographer` - Development tooling
- `@replit/vite-plugin-dev-banner` - Development environment indicator

**Additional Libraries**
- `wouter` - Lightweight routing library (~1.2kb)
- `date-fns` - Date utility library
- `embla-carousel-react` - Touch-friendly carousel component
- `cmdk` - Command palette component
- `nanoid` - Unique ID generation for cache busting and identifiers

**Potential Future Integrations**
- Session management dependencies present (`connect-pg-simple`, `express-session`) but not yet wired up
- Authentication scaffolding in schema (users table) ready for implementation
- The architecture supports adding authentication middleware when needed