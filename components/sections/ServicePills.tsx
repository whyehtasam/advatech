"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BlurFade } from "@/components/ui/blur-fade";
import { services } from "@/data/services";
import { GraduationCap, Users, School, Briefcase, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = {
  GraduationCap,
  Users,
  School,
  Briefcase,
};

const iconColors = [
  "bg-primary/10 text-primary group-hover:bg-primary/20",
  "bg-accent/10 text-accent group-hover:bg-accent/20",
  "bg-success/10 text-success group-hover:bg-success/20",
  "bg-info/10 text-info group-hover:bg-info/20",
];

export function ServicePills() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.1} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Key Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive solutions for training, recruitment, education, and project management
          </p>
        </BlurFade>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = icons[service.icon as keyof typeof icons] || GraduationCap;
            const iconColor = iconColors[index % iconColors.length];
            return (
              <BlurFade key={service.id} delay={0.1 + index * 0.1}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-2 hover:border-primary/20 bg-card/50 md:backdrop-blur-sm transform-gpu will-change-transform">
                  <CardHeader className="pb-0">
                    <div className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 transform-gpu will-change-transform",
                      iconColor
                    )}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed min-h-[3rem]">
                      {service.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="-mt-5 pt-0">
                    {service.stats && service.stats.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-border/50">
                        <div className="text-3xl font-bold text-primary mb-1">
                          {service.stats[0].value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {service.stats[0].label}
                        </div>
                      </div>
                    )}
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary mt-6 group/link hover:gap-3 transition-all duration-200"
                    >
                      Explore
                      <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}

