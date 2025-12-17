# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint

# Prisma
npx prisma generate    # Generate Prisma client (outputs to generated/prisma/)
npx prisma migrate dev # Run database migrations
```

## Architecture

This is a Next.js 16 app with React 19, using the App Router pattern. It's a Japanese company search application that queries corporate registration data.

### Data Flow

- **Database**: PostgreSQL via Prisma with `@prisma/adapter-pg`
- **Prisma Client**: Generated to `generated/prisma/` (non-standard location)
- **Database Connection**: `lib/prisma.ts` creates singleton Prisma client

### Key Directories

- `app/` - Next.js App Router pages
  - `companies/` - Company list page with search
  - `companies/[id]/` - Company detail page
- `lib/` - Server-side data access and utilities
  - `companies.ts` - Prisma queries for company data
  - `utils/company-kind.ts` - Maps Japanese corporate type codes (101, 201, 301, etc.) to names
  - `utils/text-conversion.ts` - Converts half-width to full-width characters for Japanese search
- `components/` - React components (client components use `'use client'` directive)

### Database Schema

Single `Company` model mapped to `companies` table. Primary key is `corporate_number` (法人番号 - Japanese corporate number).

### Notes

- Japanese corporate names often use full-width characters; the search converts half-width input to full-width before querying
- Date formatting happens server-side to avoid hydration mismatches between server and client
- Company kind codes follow the National Tax Agency specification (see `lib/utils/company-kind.ts`)
