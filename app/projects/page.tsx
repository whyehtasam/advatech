"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getProjects } from "@/lib/api/projects";
import { Project } from "@/data/types";
import { Briefcase, Calendar, Users, CheckCircle2, ExternalLink } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

// Helper function to get appropriate Unsplash images for each project type
function getProjectImage(projectId: string, projectType: string): string {
  const imageMap: Record<string, string> = {
    "1": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80", // Residential complex
    "2": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80", // Commercial office
    "3": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop&q=80", // Hospital
    "4": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop&q=80", // University campus
  };
  
  return imageMap[projectId] || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80";
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<{
    type?: string;
    techStack?: string[];
    year?: number;
  }>({});

  useEffect(() => {
    async function loadProjects() {
      setLoading(true);
      const data = await getProjects(filters);
      setProjects(data);
      setLoading(false);
    }
    loadProjects();
  }, [filters]);

  const allTechStack = Array.from(new Set(projects.flatMap((p) => p.techStack)));

  const handleFilterChange = (key: string, value: string | string[] | number | undefined) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <MainNav />
      <main id="main-content" className="min-h-screen" aria-label="Main content">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <BlurFade delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our portfolio of successful projects. From capstone projects to industry implementations.
              </p>
            </BlurFade>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 items-center">
              <span className="text-sm font-medium">Filter by:</span>
              <Badge
                variant={!filters.type ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => handleFilterChange("type", undefined)}
              >
                All Types
              </Badge>
              <Badge
                variant={filters.type === "industry" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => handleFilterChange("type", filters.type === "industry" ? undefined : "industry")}
              >
                Industry
              </Badge>
              <Badge
                variant={filters.type === "capstone" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => handleFilterChange("type", filters.type === "capstone" ? undefined : "capstone")}
              >
                Capstone
              </Badge>
              <Badge
                variant={filters.type === "academic" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => handleFilterChange("type", filters.type === "academic" ? undefined : "academic")}
              >
                Academic
              </Badge>
              <Badge
                variant={filters.year === 2024 ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => handleFilterChange("year", filters.year === 2024 ? undefined : 2024)}
              >
                2024
              </Badge>
              <Badge
                variant={filters.year === 2023 ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => handleFilterChange("year", filters.year === 2023 ? undefined : 2023)}
              >
                2023
              </Badge>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, index) => (
                  <Skeleton key={index} className="h-96 rounded-xl" />
                ))}
              </div>
            ) : projects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <BlurFade key={project.id} delay={0.1 + index * 0.05}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group pt-0">
                      <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden rounded-t-xl">
                        <Image
                          src={getProjectImage(project.id, project.type)}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm border border-border/50">{project.type}</Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl mb-2 line-clamp-2">{project.title}</CardTitle>
                        <CardDescription className="line-clamp-2">{project.shortDescription}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{project.year}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              <span>{project.team.length} members</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {project.techStack.slice(0, 3).map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                            {project.techStack.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{project.techStack.length - 3} more
                              </Badge>
                            )}
                          </div>

                          {project.outcomes && project.outcomes.length > 0 && (
                            <div className="pt-2 border-t">
                              <div className="text-sm font-medium mb-2">Key Outcomes</div>
                              <ul className="space-y-1">
                                {project.outcomes.slice(0, 2).map((outcome, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="line-clamp-1">{outcome}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <div className="flex gap-2 pt-2">
                            <Button variant="outline" className="flex-1" asChild>
                              <Link href={`/projects/${project.id}`}>
                                View Details
                                <ExternalLink className="h-4 w-4 ml-2" />
                              </Link>
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                              <Link href="/contact">
                                <Briefcase className="h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </BlurFade>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-muted-foreground">
                No projects found matching your criteria.
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}

