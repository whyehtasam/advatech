"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Placement } from "@/data/types";
import { Building2, Briefcase, CheckCircle2, User } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface PlacementCardProps {
  placement: Placement;
  className?: string;
}

export function PlacementCard({ placement, className }: PlacementCardProps) {
  return (
    <Card className={cn(
      "h-full flex flex-col pt-0 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-border/40 hover:border-border/60 bg-card overflow-hidden",
      className
    )}>
      {/* Student Image Section - Compact */}
      <div className="relative aspect-[4/4] overflow-hidden bg-muted/30">
        {placement.studentImage ? (
          <>
            <Image
              src={placement.studentImage}
              alt={placement.studentName}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <User className="h-12 w-12 text-muted-foreground/20" />
          </div>
        )}
        
        {/* Compact Badges */}
        <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-10">
          <Badge 
            variant="secondary" 
            className="text-[10px] font-medium px-2 py-0.5 bg-background/90 backdrop-blur-sm border border-border/40"
          >
            {placement.year}
          </Badge>
          {placement.verified && (
            <div className="w-6 h-6 rounded-full bg-success/90 backdrop-blur-sm flex items-center justify-center border border-background/40">
              <CheckCircle2 className="h-3.5 w-3.5 text-success-foreground" />
            </div>
          )}
        </div>
      </div>
      
      {/* Content Section - Compact */}
      <div className="flex-1 flex flex-col p-4">
        {/* Name and Course */}
        <div className="mb-3">
          <CardTitle className="text-lg font-semibold mb-1.5 group-hover:text-primary transition-colors line-clamp-1">
            {placement.studentName}
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground line-clamp-1">
            {placement.course}
          </CardDescription>
        </div>

        {/* Company and Role - Inline Compact */}
        <div className="space-y-2.5 flex-1">
          {/* Company */}
          <div className="flex items-start gap-2">
            <Building2 className="h-3.5 w-3.5 text-muted-foreground/60 mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-[10px] text-muted-foreground uppercase tracking-wide mb-0.5">Company</div>
              <div className="text-sm font-medium text-foreground line-clamp-2 leading-snug">
                {placement.company}
              </div>
            </div>
          </div>

          {/* Role */}
          <div className="flex items-start gap-2">
            <Briefcase className="h-3.5 w-3.5 text-muted-foreground/60 mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-[10px] text-muted-foreground uppercase tracking-wide mb-0.5">Role</div>
              <div className="text-sm font-medium text-foreground line-clamp-2 leading-snug">
                {placement.role}
              </div>
            </div>
          </div>
        </div>

        {/* Package - Bottom Content */}
        <div className="mt-4 pt-3 border-t border-border/40">
          <div className="flex items-baseline justify-between">
            <div className="text-[10px] text-muted-foreground uppercase tracking-wide">Package</div>
            <div className="text-lg font-bold text-primary">
              ₹{(placement.package / 100000).toFixed(1)} LPA
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

