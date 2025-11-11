"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { courses } from "@/data/courses";
import { Clock, Users, Star, ArrowRight } from "lucide-react";
import { CourseCard } from "@/components/features/CourseCard";

export function CourseCarousel() {
  const popularCourses = courses.slice(0, 6); // Show top 6 courses
  
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.1} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Popular Courses</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Industry-aligned training programs with hands-on projects and expert instructors
          </p>
        </BlurFade>
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {popularCourses.map((course, index) => (
              <CarouselItem key={course.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <BlurFade delay={0.1 + index * 0.1}>
                  <CourseCard course={course} />
                </BlurFade>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-200"
          >
            <Link href="/courses" className="inline-flex items-center gap-2">
              View All Courses
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

