"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
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
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Courses Banner"
              fill
              className="object-cover blur-[2px]"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.1} className="text-center mb-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Our <span className="text-blue-400">Courses</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-50 max-w-2xl mx-auto">
                Choose from our comprehensive training programs. Industry-aligned curriculum with hands-on projects.
              </p>
            </BlurFade>

            {/* Search Bar */}
            <BlurFade delay={0.2} className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-black" />
                <Input
                  type="text"
                  placeholder="Search courses, skills or tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-12 h-14 text-base shadow-lg border-0 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
                />
                {searchQuery && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 hover:bg-transparent"
                    onClick={clearSearch}
                  >
                    <X className="h-5 w-5 text-muted-foreground" />
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

  