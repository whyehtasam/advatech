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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          <X className="h-4 w-4 mr-2" />
          Clear
        </Button>
      </div>

      <div className="space-y-4">
        <div>
          <Label>Category</Label>
          <Select
            value={localFilters.category || "all"}
            onValueChange={(value) => handleFilterChange("category", value === "all" ? undefined : value)}
          >
            <SelectTrigger>
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

        <div>
          <Label>Mode</Label>
          <Select
            value={localFilters.mode || "all"}
            onValueChange={(value) => handleFilterChange("mode", value === "all" ? undefined : value)}
          >
            <SelectTrigger>
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

        <div>
          <Label>Level</Label>
          <Select
            value={localFilters.level || "all"}
            onValueChange={(value) => handleFilterChange("level", value === "all" ? undefined : value)}
          >
            <SelectTrigger>
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

        <div>
          <Label>Fee Range</Label>
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
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
      <Card className={cn("hidden lg:block", className)}>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>{filterContent}</CardContent>
      </Card>

      {/* Mobile Filter Sheet */}
      <Sheet>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
          <div className="mt-6">{filterContent}</div>
        </SheetContent>
      </Sheet>
    </>
  );
}

