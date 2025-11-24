"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

// Helper function to get appropriate Unsplash images for each project type
function getProjectImage(projectId: string, projectType: string): string {
  const imageMap: Record<string, string> = {
    "1": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&q=80", // Residential complex
    "2": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop&q=80", // Commercial office
    "3": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop&q=80", // Hospital
    "4": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=800&fit=crop&q=80", // University campus
  };

  return imageMap[projectId] || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&q=80";
}

export function ProjectCards() {
  const featuredProjects = projects;

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-blue-50/50 via-blue-100/30 to-blue-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.1} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real-world projects completed by our students and team
          </p>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {featuredProjects.map((project, index) => {
            const projectImage = getProjectImage(project.id, project.type);
            return (
              <BlurFade key={project.id} delay={0.1 + index * 0.1}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-2 hover:border-primary/20 bg-card/50 md:backdrop-blur-sm overflow-hidden pt-0 transform-gpu will-change-transform">
                  <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                    <Image
                      src={projectImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 transform-gpu will-change-transform"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" /> */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        variant="secondary"
                        asChild
                        className="shadow-lg hover:scale-105 transition-transform"
                      >
                        <Link href={`/projects/${project.id}`}>View Case Study</Link>
                      </Button>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant="outline"
                        className="bg-background/90 backdrop-blur-sm border-2"
                      >
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-0">
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="leading-relaxed min-h-[3rem]">
                      {project.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="-mt-8 pt-0">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-muted/50 border border-border/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="text-xs bg-muted/50 border border-border/50"
                        >
                          +{project.techStack.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200 group/link"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </BlurFade>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-200"
          >
            <Link href="/projects" className="inline-flex items-center gap-2">
              View All Projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

