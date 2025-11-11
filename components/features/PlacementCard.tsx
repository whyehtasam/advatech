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
    <Card className={cn(
      "h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm",
      className
    )}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex-1">
            <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
              {placement.studentName}
            </CardTitle>
            <CardDescription className="text-sm leading-relaxed">
              {placement.course}
            </CardDescription>
          </div>
          {placement.verified && (
            <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 group-hover:bg-success/20 transition-colors">
              <CheckCircle2 className="h-5 w-5 text-success" />
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-sm">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Building2 className="h-4 w-4 text-primary" />
            </div>
            <span className="font-semibold text-foreground">{placement.company}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
              <Briefcase className="h-4 w-4 text-accent" />
            </div>
            <span className="text-muted-foreground">{placement.role}</span>
          </div>
          <div className="pt-3 border-t border-border/50">
            <div className="text-3xl font-bold text-primary mb-1">
              ₹{(placement.package / 1000).toFixed(0)}K
            </div>
            <div className="text-xs text-muted-foreground">Package per annum</div>
          </div>
          <div className="flex items-center justify-between pt-2">
            <Badge variant="outline" className="text-xs border-2">
              {placement.year}
            </Badge>
            {placement.testimonial && (
              <span className="text-xs text-muted-foreground italic line-clamp-1 max-w-[60%]">
                "{placement.testimonial}"
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

