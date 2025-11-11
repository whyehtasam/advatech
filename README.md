# Advatech HR & Training Platform

A modern, accessible, and performant frontend for the Advatech HR & Training platform built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Complete Public Pages**: Home, Courses, Services, Placements, Projects, Registration, About, Notices, Events, Contact
- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
- **Accessibility**: WCAG AA compliant with skip links, ARIA labels, keyboard navigation
- **SEO Optimized**: Meta tags, Open Graph, Twitter cards, structured data
- **Modern UI/UX**: Smooth animations, microinteractions, and polished components
- **Type Safety**: Full TypeScript coverage with proper type definitions
- **Performance**: Optimized fonts, lazy loading, and efficient rendering

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Components**: shadcn/ui + Magic UI
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Notifications**: Sonner

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
app/
  ├── (routes)/          # Public pages
  ├── layout.tsx         # Root layout
  ├── page.tsx           # Home page
  ├── error.tsx          # Error boundary
  ├── not-found.tsx      # 404 page
  └── loading.tsx        # Loading state

components/
  ├── layout/            # Layout components (Nav, Footer, etc.)
  ├── sections/           # Page sections (Hero, ServicePills, etc.)
  ├── features/           # Feature components (CourseCard, etc.)
  └── ui/                 # shadcn/ui components

data/
  ├── types.ts            # TypeScript interfaces
  └── *.ts                # Mock data files

lib/
  └── api/                # API integration layer (placeholder functions)
```

## 🔌 API Integration

The project includes placeholder API functions in `lib/api/` that return mock data. To connect to a real backend:

1. Update the functions in `lib/api/*.ts` to make actual API calls
2. Set environment variables in `.env.local`
3. Update API endpoints as needed

Example:
```typescript
// lib/api/courses.ts
export async function getCourses(): Promise<Course[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses`);
  return response.json();
}
```

## 🎨 Design System

### Colors
- Primary: `oklch(0.205 0 0)` (Black)
- Accent: `oklch(0.97 0 0)` (Light Gray)
- Success: `#16A34A`
- Error: `#DC2626`

### Typography
- Font: Inter (400, 500, 600, 700)
- Base size: 16px
- Line height: 1.5

### Spacing
- Scale: 4, 8, 12, 16, 24, 32, 40, 56, 72px

### Breakpoints
- xs: 0-375px
- sm: 376-640px
- md: 641-992px
- lg: 993-1280px
- xl: 1281px+

## ♿ Accessibility

- Skip to content link
- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus visible styles
- Reduced motion support
- Semantic HTML structure

## 📱 Responsive Design

All pages are fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly tap targets (48x48px minimum)
- Optimized images and assets

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Set environment variables
4. Deploy

### Other Platforms
```bash
npm run build
npm start
```

## 📝 Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

## 🧪 Testing

```bash
# Run linter
npm run lint

# Type checking
npx tsc --noEmit
```

## 📄 License

Private - All rights reserved

## 👥 Team

Built for Advatech HR & Training Platform

---

For questions or support, contact: info@advatech.com
