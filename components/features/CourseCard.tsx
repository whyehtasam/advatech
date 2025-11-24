"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Course } from "@/data/types";
import { Clock, Users, Star, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  course: Course;
  className?: string;
}

// Course thumbnail images from Unsplash
const courseImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80", // Architecture
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80", // Office/Design
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80", // BIM/Project Management
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&q=80", // CAD/Design
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80", // Building
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&q=80", // Architecture
];

export function CourseCard({ course, className }: CourseCardProps) {
  const imageIndex = (parseInt(course.id) - 1) % courseImages.length;
  const courseImage = courseImages[imageIndex];
  
  return (
    <Card className={cn(
      "h-full pt-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden",
      className
    )}>
      <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
        <Image
          src={courseImage}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
          {course.tags.slice(0, 2).map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="text-xs bg-background/90 backdrop-blur-sm border border-border/50"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="absolute top-4 right-4">
          <Badge 
            variant="outline" 
            className="text-xs bg-background/90 backdrop-blur-sm border border-border/50"
          >
            {course.level}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-">
        <CardTitle className="text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {course.title}
        </CardTitle>
        <CardDescription className="line-clamp-2 leading-relaxed min-h-[2.5rem]">
          {course.shortDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary/70" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-primary/70" />
              <span>{course.mode}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-foreground">{course.rating}</span>
              <span className="text-xs">({course.totalReviews})</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-border/50">
            <div>
              <div className="text-2xl font-bold text-primary">₹{course.fee.toLocaleString()}</div>
              {course.originalFee && (
                <div className="text-sm text-muted-foreground line-through">
                  ₹{course.originalFee.toLocaleString()}
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-3 pt">
            <Button 
              variant="outline" 
              className="flex-1 border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-200" 
              asChild
            >
              <Link href={`/courses/${course.slug}`}>View</Link>
            </Button>
            <Button 
              className="flex-1 shadow-primary hover:shadow-lg hover:scale-[1.02] transition-all duration-200" 
              asChild
            >
              <Link href={`/register?course=${course.id}`} className="inline-flex items-center gap-2">
                Enroll
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

