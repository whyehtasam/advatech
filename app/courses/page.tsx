"use client";

import { useState, useEffect, useMemo } from "react";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { FilterPanel } from "@/components/features/FilterPanel";
import { CourseCard } from "@/components/features/CourseCard";
import { getCourses, filterCourses, searchCourses } from "@/lib/api/courses";
import { Course } from "@/data/types";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";

export default function CoursesPage() {
  const [allCourses, setAllCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<{
    category?: string;
    mode?: string;
    level?: string;
    minFee?: number;
    maxFee?: number;
  }>({});
  const [compareList, setCompareList] = useState<string[]>([]);

  const [courses, setCourses] = useState<Course[]>([]);

  // Load and filter courses
  useEffect(() => {
    async function loadAndFilterCourses() {
      setLoading(true);
      let result = allCourses;

      if (allCourses.length === 0) {
        result = await getCourses();
        setAllCourses(result);
      }

      if (searchQuery) {
        result = await searchCourses(searchQuery);
      }

      if (Object.keys(filters).length > 0) {
        result = await filterCourses(filters);
      }

      setCourses(result);
      setLoading(false);
    }
    loadAndFilterCourses();
  }, [allCourses, searchQuery, filters]);

  const handleCompareToggle = (courseId: string) => {
    setCompareList((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : prev.length < 3
        ? [...prev, courseId]
        : prev
    );
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <>
      <MainNav />
      <main id="main-content" className="min-h-screen" aria-label="Main content">
        <section className="pt-12 md:pt-16 pb-5 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.1} className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Courses</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our comprehensive training programs. Industry-aligned curriculum with hands-on projects.
              </p>
            </BlurFade>

            {/* Search Bar */}
            <BlurFade delay={0.2} className="max-w-3xl mx-auto mb-6 md:mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search courses, skills or tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 sm:pl-10 pr-9 sm:pr-10 h-10 sm:h-12 text-sm sm:text-base"
                />
                {searchQuery && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 sm:h-8 sm:w-8"
                    onClick={clearSearch}
                  >
                    <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Button>
                )}
              </div>
            </BlurFade>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* Desktop Filter Panel */}
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <div className="sticky top-24">
                  <FilterPanel filters={filters} onFiltersChange={setFilters} />
                </div>
              </aside>

              {/* Mobile Filter Button - Above Cards */}
              <div className="lg:hidden">
                <FilterPanel filters={filters} onFiltersChange={setFilters} />
              </div>

              {/* Course Grid */}
              <div className="flex-1 min-w-0">
                {loading ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="space-y-3">
                        <Skeleton className="h-48 w-full rounded-lg" />
                        <Skeleton className="h-5 w-3/4" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-2/3" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                    {courses.map((course, index) => (
                      <BlurFade key={course.id} delay={0.1 + index * 0.05}>
                        <CourseCard course={course} />
                      </BlurFade>
                    ))}
                  </div>
                )}

                {!loading && courses.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-base text-muted-foreground mb-4">No courses found.</p>
                    <Button variant="outline" size="sm" onClick={() => {
                      setSearchQuery("");
                      setFilters({});
                    }}>
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}

