"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { placements } from "@/data/placements";
import { PlacementCard } from "@/components/features/PlacementCard";
import { Building2 } from "lucide-react";

const companies = [
  "L&T Construction",
  "Tata Projects",
  "Godrej & Boyce",
  "Shapoorji Pallonji",
  "Hiranandani Group",
];

export function PlacementGrid() {
  const avgPackage = 360000;
  const totalPlacements = 1500;
  const placementRate = 85;

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.1} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Placement Highlights</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our students are placed in top companies with competitive packages
          </p>
        </BlurFade>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <BlurFade delay={0.1}>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  <NumberTicker value={totalPlacements} />+
                </CardTitle>
                <CardDescription>Students Placed</CardDescription>
              </CardHeader>
            </Card>
          </BlurFade>
          <BlurFade delay={0.2}>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  ₹<NumberTicker value={avgPackage / 1000} />K
                </CardTitle>
                <CardDescription>Average Package</CardDescription>
              </CardHeader>
            </Card>
          </BlurFade>
          <BlurFade delay={0.3}>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  <NumberTicker value={placementRate} />%
                </CardTitle>
                <CardDescription>Placement Rate</CardDescription>
              </CardHeader>
            </Card>
          </BlurFade>
        </div>

        {/* Company Logos */}
        <BlurFade delay={0.2} className="mb-12">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors grayscale hover:grayscale-0"
              >
                <Building2 className="h-6 w-6" />
                <span className="font-medium">{company}</span>
              </div>
            ))}
          </div>
        </BlurFade>

        {/* Placement Cards */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {placements.slice(0, 5).map((placement, index) => (
              <CarouselItem key={placement.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <BlurFade delay={0.1 + index * 0.1}>
                  <PlacementCard placement={placement} />
                </BlurFade>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

