"use client";

import { useState, useEffect } from "react";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { PlacementCard } from "@/components/features/PlacementCard";
import { getPlacements } from "@/lib/api/placements";
import { Placement } from "@/data/types";
import { Search, Filter, X, TrendingUp, Users, Building2 } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

export default function PlacementsPage() {
  const [placements, setPlacements] = useState<Placement[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<{
    year?: number;
    course?: string;
    minPackage?: number;
    maxPackage?: number;
    role?: string;
  }>({});

  // Calculate KPIs - Use actual totals, not filtered array
  const totalPlacements = 1500; // Total students placed
  const avgPackage = 360; // Average package in K (360K)
  const topRecruitersCount = 5; // Top recruiters count
  const topRecruiters = Array.from(new Set(placements.map((p) => p.company))).slice(0, 5);

  useEffect(() => {
    async function loadPlacements() {
      setLoading(true);
      const data = await getPlacements(filters);
      setPlacements(data);
      setLoading(false);
    }
    loadPlacements();
  }, [filters]);

  const filteredPlacements = placements.filter((p) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      p.studentName.toLowerCase().includes(query) ||
      p.course.toLowerCase().includes(query) ||
      p.company.toLowerCase().includes(query) ||
      p.role.toLowerCase().includes(query)
    );
  });

  const handleFilterChange = (key: string, value: string | number | undefined) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    setFilters({});
    setSearchQuery("");
  };

  return (
    <>
      <MainNav />
      <main id="main-content" className="min-h-screen" aria-label="Main content">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <BlurFade delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Placement Highlights</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our students are placed in top companies with competitive packages. Build trust with proof.
              </p>
            </BlurFade>
          </div>
        </section>

        {/* KPIs Section */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <BlurFade delay={0.1}>
                <Card className="pt-0">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">{totalPlacements.toLocaleString()}+</div>
                        <div className="text-sm text-muted-foreground">Students Placed</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
              <BlurFade delay={0.2}>
                <Card className="pt-0">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">₹{avgPackage}K</div>
                        <div className="text-sm text-muted-foreground">Average Package</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
              <BlurFade delay={0.3}>
                <Card className="pt-0">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">{topRecruitersCount}+</div>
                        <div className="text-sm text-muted-foreground">Top Recruiters</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filter Panel */}
              <aside className="lg:col-span-1">
                <Card className="border-border/50 shadow-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base font-medium">Filters</CardTitle>
                      <Button variant="ghost" size="sm" onClick={handleClearFilters} className="h-7 text-xs text-muted-foreground hover:text-foreground">
                        <Filter className="h-3.5 w-3.5 mr-1.5" />
                        Clear
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-0">
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-muted-foreground block">Year</label>
                      <Select
                        value={filters.year?.toString() || "all"}
                        onValueChange={(value) =>
                          handleFilterChange("year", value === "all" ? undefined : parseInt(value))
                        }
                      >
                        <SelectTrigger className="h-9">
                          <SelectValue placeholder="All Years" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Years</SelectItem>
                          <SelectItem value="2024">2024</SelectItem>
                          <SelectItem value="2023">2023</SelectItem>
                          <SelectItem value="2022">2022</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-medium text-muted-foreground block">Course</label>
                      <Select
                        value={filters.course || "all"}
                        onValueChange={(value) =>
                          handleFilterChange("course", value === "all" ? undefined : value)
                        }
                      >
                        <SelectTrigger className="h-9">
                          <SelectValue placeholder="All Courses" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Courses</SelectItem>
                          <SelectItem value="Revit Architecture Training">Revit Architecture</SelectItem>
                          <SelectItem value="AutoCAD Professional Training">AutoCAD Professional</SelectItem>
                          <SelectItem value="BIM Project Management">BIM Project Management</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-medium text-muted-foreground block">Package Range</label>
                      <div className="space-y-3 pt-1">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>₹{(filters.minPackage || 0) / 1000}K</span>
                          <span>₹{(filters.maxPackage || 1000000) / 1000}K</span>
                        </div>
                        <Slider
                          min={0}
                          max={1000000}
                          step={50000}
                          value={[filters.minPackage || 0, filters.maxPackage || 1000000]}
                          onValueChange={([min, max]) => {
                            handleFilterChange("minPackage", min);
                            handleFilterChange("maxPackage", max);
                          }}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </aside>

              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Search Bar */}
                <BlurFade delay={0.1} className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search by name, course, company, or role..."
                      className="w-full pl-10 pr-10 py-2 rounded-full"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                        onClick={() => setSearchQuery("")}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </BlurFade>

                {/* Top Recruiters */}
                {topRecruiters.length > 0 && (
                  <BlurFade delay={0.2} className="mb-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Top Recruiters</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-3">
                          {topRecruiters.map((company, index) => (
                            <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                              {company}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </BlurFade>
                )}

                {/* Placements Grid */}
                {loading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <Skeleton key={index} className="h-64 rounded-xl" />
                    ))}
                  </div>
                ) : filteredPlacements.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredPlacements.map((placement, index) => (
                      <BlurFade key={placement.id} delay={0.1 + index * 0.05}>
                        <PlacementCard placement={placement} />
                      </BlurFade>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 text-muted-foreground">
                    No placements found matching your criteria.
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

