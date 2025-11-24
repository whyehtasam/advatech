"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Marquee } from "@/components/ui/marquee";
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

  const kpiIcons = [
    "bg-primary/10 text-primary",
    "bg-accent/10 text-accent",
    "bg-success/10 text-success",
  ];

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-background via-muted/10 to-background">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <BlurFade delay={0.1} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Placement Highlights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our students are placed in top companies with competitive packages
          </p>
        </BlurFade>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          <BlurFade delay={0.1}>
            <Card className="border-2 hover:border-primary/20 bg-card/50 md:backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group transform-gpu will-change-transform">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  <NumberTicker value={totalPlacements} />+
                </CardTitle>
                <CardDescription className="text-base">Students Placed</CardDescription>
              </CardHeader>
            </Card>
          </BlurFade>
          <BlurFade delay={0.2}>
            <Card className="border-2 hover:border-accent/20 bg-card/50 md:backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group transform-gpu will-change-transform">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Building2 className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  ₹<NumberTicker value={avgPackage / 1000} />K
                </CardTitle>
                <CardDescription className="text-base">Average Package</CardDescription>
              </CardHeader>
            </Card>
          </BlurFade>
          <BlurFade delay={0.3}>
            <Card className="border-2 hover:border-success/20 bg-card/50 md:backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group transform-gpu will-change-transform">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-xl bg-success/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-success/20 transition-colors">
                  <Building2 className="h-8 w-8 text-success" />
                </div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-success mb-2">
                  <NumberTicker value={placementRate} />%
                </CardTitle>
                <CardDescription className="text-base">Placement Rate</CardDescription>
              </CardHeader>
            </Card>
          </BlurFade>
        </div>

        {/* Company Logos - Marquee */}
        <BlurFade delay={0.2} className="mb-16">
          <div className="py-8 px-6 bg-muted/30 rounded-2xl border border-border/50 overflow-hidden">
            <Marquee pauseOnHover className="[--duration:40s]">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 py-3 mx-4 rounded-lg text-muted-foreground hover:text-foreground transition-all duration-300 grayscale hover:grayscale-0 hover:bg-background/50 group whitespace-nowrap"
                >
                  <Building2 className="h-6 w-6 group-hover:scale-110 transition-transform transform-gpu will-change-transform" />
                  <span className="font-semibold text-sm lg:text-base">{company}</span>
                </div>
              ))}
            </Marquee>
          </div>
        </BlurFade>

        {/* Placement Cards */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
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
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
}

