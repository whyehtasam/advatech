---
name: Fix UI Anomalies Across All Pages
overview: ""
todos:
  - id: 825d214f-8ce3-46a6-aa29-33c04a7bac25
    content: "Phase 1: Foundation Setup - Design tokens, typography (Inter font), component library (shadcn + Magic UI), dependencies. Verify in browser after completion."
    status: completed
  - id: fd65bd19-79f1-4f46-ba31-51c7663da15c
    content: "Phase 2: Create mock data structure - TypeScript interfaces, mock data files, API integration points. Verify TypeScript compiles."
    status: completed
  - id: b68ed3c7-7471-4ccf-9689-2feb8a1f394f
    content: "Phase 3: Build core components - Layout (MainNav, Footer, StickyCTA), Sections (Hero, ServicePills, etc.), Features (CourseCard, EnrollModal, etc.). Verify each component renders."
    status: completed
  - id: 219e9673-cc59-4120-940c-4d32e305d38d
    content: "Phase 4.1: Implement Home Page with all sections. Verify in browser - sections, animations, responsive, accessibility."
    status: completed
  - id: 2db06978-e6cb-4a5b-a289-8133d8f5561d
    content: "Phase 4.2: Implement Courses Listing Page - search, filters, grid, compare. Verify in browser before proceeding."
    status: completed
  - id: 93adc3f3-dd31-4a76-9459-f612b9bec7ad
    content: "Phase 4.3: Implement Course Detail Page - tabs, accordion, enrollment. Verify in browser before proceeding."
    status: completed
  - id: 954afc5e-196d-4e90-8eaf-e3be6b76c3af
    content: "Phase 4.4-4.5: Implement Services pages and detail pages. Verify in browser before proceeding."
    status: completed
  - id: a3c7ecd0-647b-480e-9ce2-ded2409d26df
    content: "Phase 4.6-4.13: Implement Placements, Projects, Registration, About, Notices, Events, Gallery, Contact pages. Verify each in browser."
    status: completed
  - id: e116bf10-2def-45b3-a022-ae1a0725b371
    content: "Phase 5: Enhancements & Polish - animations, accessibility, performance, responsive design. Final browser verification."
    status: completed
  - id: 8deb781d-bfd0-48e4-86d7-26391e12dbb4
    content: "Phase 6: Create API integration layer with placeholder functions. Verify structure."
    status: completed
isProject: false
---

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