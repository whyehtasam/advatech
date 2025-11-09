"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Placement } from "@/data/types";
import { Building2, Briefcase, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlacementCardProps {
  placement: Placement;
  className?: string;
}

export function PlacementCard({ placement, className }: PlacementCardProps) {
  return (
    <Card className={cn("h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1", className)}>
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex-1">
            <CardTitle className="text-lg mb-1">{placement.studentName}</CardTitle>
            <CardDescription className="text-sm">{placement.course}</CardDescription>
          </div>
          {placement.verified && (
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Building2 className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium">{placement.company}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Briefcase className="h-4 w-4 text-muted-foreground" />
            <span>{placement.role}</span>
          </div>
          <div className="pt-2 border-t">
            <div className="text-2xl font-bold text-primary mb-1">
              ₹{(placement.package / 1000).toFixed(0)}K
            </div>
            <div className="text-xs text-muted-foreground">Package per annum</div>
          </div>
          <div className="flex items-center justify-between pt-2">
            <Badge variant="outline" className="text-xs">
              {placement.year}
            </Badge>
            {placement.testimonial && (
              <span className="text-xs text-muted-foreground italic line-clamp-1">
                "{placement.testimonial}"
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

