"use client";

import Link from "next/link";
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

export function CourseCard({ course, className }: CourseCardProps) {
  return (
    <Card className={cn("h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group", className)}>
      <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden rounded-t-xl">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl">📚</div>
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          {course.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl mb-2 line-clamp-2">{course.title}</CardTitle>
        <CardDescription className="line-clamp-2">{course.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{course.mode}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{course.rating}</span>
              <span className="text-xs">({course.totalReviews})</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t">
            <div>
              <div className="text-2xl font-bold text-primary">₹{course.fee.toLocaleString()}</div>
              {course.originalFee && (
                <div className="text-sm text-muted-foreground line-through">
                  ₹{course.originalFee.toLocaleString()}
                </div>
              )}
            </div>
            <Badge variant="outline" className="text-xs">
              {course.level}
            </Badge>
          </div>
          <div className="flex gap-2 pt-2">
            <Button variant="outline" className="flex-1" asChild>
              <Link href={`/courses/${course.slug}`}>View</Link>
            </Button>
            <Button className="flex-1" asChild>
              <Link href={`/register?course=${course.id}`}>Enroll</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

