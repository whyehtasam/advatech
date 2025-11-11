"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterPanelProps {
  filters: {
    category?: string;
    mode?: string;
    level?: string;
    minFee?: number;
    maxFee?: number;
  };
  onFiltersChange: (filters: FilterPanelProps["filters"]) => void;
  className?: string;
}

export function FilterPanel({ filters, onFiltersChange, className }: FilterPanelProps) {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...localFilters, [key]: value };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    const cleared = {};
    setLocalFilters(cleared);
    onFiltersChange(cleared);
  };

  const filterContent = (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-border/50">
        <h3 className="text-sm font-medium text-foreground">Filters</h3>
        <Button variant="ghost" size="sm" onClick={clearFilters} className="h-7 px-2 text-xs text-muted-foreground hover:text-foreground">
          <X className="h-3.5 w-3.5 mr-1" />
          Clear
        </Button>
      </div>

      <div className="space-y-4">
        <div className="space-y-1.5">
          <Label className="text-xs font-medium text-muted-foreground">Category</Label>
          <Select
            value={localFilters.category || "all"}
            onValueChange={(value) => handleFilterChange("category", value === "all" ? undefined : value)}
          >
            <SelectTrigger className="h-9 text-sm">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Architecture">Architecture</SelectItem>
              <SelectItem value="CAD">CAD</SelectItem>
              <SelectItem value="BIM">BIM</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs font-medium text-muted-foreground">Mode</Label>
          <Select
            value={localFilters.mode || "all"}
            onValueChange={(value) => handleFilterChange("mode", value === "all" ? undefined : value)}
          >
            <SelectTrigger className="h-9 text-sm">
              <SelectValue placeholder="All Modes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Modes</SelectItem>
              <SelectItem value="Online">Online</SelectItem>
              <SelectItem value="Offline">Offline</SelectItem>
              <SelectItem value="Hybrid">Hybrid</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs font-medium text-muted-foreground">Level</Label>
          <Select
            value={localFilters.level || "all"}
            onValueChange={(value) => handleFilterChange("level", value === "all" ? undefined : value)}
          >
            <SelectTrigger className="h-9 text-sm">
              <SelectValue placeholder="All Levels" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs font-medium text-muted-foreground">Fee Range</Label>
          <div className="space-y-2 pt-1">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>₹{localFilters.minFee?.toLocaleString() || "0"}</span>
              <span>₹{localFilters.maxFee?.toLocaleString() || "100000"}</span>
            </div>
            <Slider
              value={[localFilters.minFee || 0, localFilters.maxFee || 100000]}
              onValueChange={([min, max]) => {
                handleFilterChange("minFee", min);
                handleFilterChange("maxFee", max);
              }}
              max={100000}
              step={1000}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Filter Panel */}
      <Card className={cn("hidden lg:block border-border/50 shadow-sm", className)}>
        <CardContent className="pt-5 pb-5">{filterContent}</CardContent>
      </Card>

      {/* Mobile Filter Sheet */}
      <Sheet>
        <SheetTrigger asChild className="lg:hidden w-full">
          <Button variant="outline" size="sm" className="h-9 w-full justify-start">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[85vw] sm:w-[400px] p-0">
          <div className="h-full flex flex-col">
            <SheetHeader className="px-6 pt-6 pb-4 border-b border-border/50">
              {/* <SheetTitle className="text-base font-medium">Filters</SheetTitle> */}
            </SheetHeader>
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {filterContent}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

