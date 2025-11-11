<!-- e7fbd80e-6119-4812-8dc4-c13a06605e85 a8f400ff-cf4b-45fc-8d89-13e32d226d24 -->
# Fix UI Anomalies Across All Pages

## Issues Found

### 1. Accessibility Issues

- **Skip Link Target Missing**: Several pages missing `id="main-content"` on main tag
- Register page (`/register`)
- Course detail pages (`/courses/[slug]`)
- Projects page (`/projects`)
- Other pages have inconsistent aria-labels

### 2. NumberTicker Component Issues

- **Home Page PlacementGrid**: NumberTicker showing "0" instead of actual values (1500+, 360K, 85%)
- Issue: NumberTicker component may not be animating or initializing properly

### 3. KPI Calculation Issues

- **Placements Page**: KPIs showing incorrect values
- "5+" instead of "1500+" for Students Placed (using `placements.length` instead of total count)
- "5+" instead of proper count for Top Recruiters
- Need to use actual totals from data, not filtered array length

### 4. Visual/Design Issues

- **Projects Page**: Using emoji (🏗️) instead of proper icons or images
- Should use Lucide icons or Unsplash images like other pages

### 5. Inconsistent Main Tag Attributes

- Some pages have `id="main-content"` with different aria-labels
- Should standardize: `id="main-content" aria-label="Main content"`

## Implementation Plan

### Step 1: Fix Accessibility - Main Content IDs

- Add `id="main-content"` to all main tags missing it
- Standardize aria-label to "Main content" across all pages
- Files to update:
- `app/register/page.tsx`
- `app/courses/[slug]/page.tsx`
- `app/projects/page.tsx`
- `app/courses/page.tsx` (fix aria-label)
- `app/services/page.tsx` (fix aria-label)
- `app/about/page.tsx` (fix aria-label)
- `app/contact/page.tsx` (fix aria-label)
- `app/placements/page.tsx` (fix aria-label)

### Step 2: Fix NumberTicker in PlacementGrid

- Check NumberTicker component implementation
- Ensure values are passed correctly and component initializes
- File: `components/sections/PlacementGrid.tsx`
- Verify NumberTicker is receiving correct props

### Step 3: Fix KPI Calculations on Placements Page

- Replace `placements.length` with actual total count (1500)
- Fix Top Recruiters count to show actual number (5 companies)
- Use static totals or calculate from all placements data
- File: `app/placements/page.tsx`

### Step 4: Replace Emoji with Icons/Images on Projects Page

- Replace emoji (🏗️) with Lucide icons (Building2) or Unsplash images
- Match design pattern used in other sections
- File: `app/projects/page.tsx`

### Step 5: Verify All Fixes in Browser

- Test each page after fixes
- Verify NumberTicker animations work
- Verify KPIs show correct values
- Verify skip link works on all pages
- Check responsive behavior

## Files to Modify

1. `app/register/page.tsx` - Add main-content ID
2. `app/courses/[slug]/page.tsx` - Add main-content ID
3. `app/projects/page.tsx` - Add main-content ID, replace emoji
4. `app/courses/page.tsx` - Fix aria-label
5. `app/services/page.tsx` - Fix aria-label
6. `app/about/page.tsx` - Fix aria-label
7. `app/contact/page.tsx` - Fix aria-label
8. `app/placements/page.tsx` - Fix aria-label, fix KPI calculations
9. `components/sections/PlacementGrid.tsx` - Fix NumberTicker values

## Testing Checklist

- [ ] Skip link works on all pages
- [ ] NumberTicker animates correctly on home page
- [ ] Placements page KPIs show correct values (1500+, 360K, 5+)
- [ ] Projects page uses icons/images instead of emoji
- [ ] All main tags have consistent id and aria-label
- [ ] No console errors
- [ ] Responsive design works on mobile/tablet/desktop

### To-dos

- [x] Phase 1: Foundation Setup - Design tokens, typography (Inter font), component library (shadcn + Magic UI), dependencies. Verify in browser after completion.
- [x] Phase 2: Create mock data structure - TypeScript interfaces, mock data files, API integration points. Verify TypeScript compiles.
- [x] Phase 3: Build core components - Layout (MainNav, Footer, StickyCTA), Sections (Hero, ServicePills, etc.), Features (CourseCard, EnrollModal, etc.). Verify each component renders.
- [x] Phase 4.1: Implement Home Page with all sections. Verify in browser - sections, animations, responsive, accessibility.
- [x] Phase 4.2: Implement Courses Listing Page - search, filters, grid, compare. Verify in browser before proceeding.
- [x] Phase 4.3: Implement Course Detail Page - tabs, accordion, enrollment. Verify in browser before proceeding.
- [x] Phase 4.4-4.5: Implement Services pages and detail pages. Verify in browser before proceeding.
- [x] Phase 4.6-4.13: Implement Placements, Projects, Registration, About, Notices, Events, Gallery, Contact pages. Verify each in browser.
- [x] Phase 5: Enhancements & Polish - animations, accessibility, performance, responsive design. Final browser verification.
- [x] Phase 6: Create API integration layer with placeholder functions. Verify structure.