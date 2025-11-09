"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BlurFade } from "@/components/ui/blur-fade";
import { services } from "@/data/services";
import { GraduationCap, Users, School, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = {
  GraduationCap,
  Users,
  School,
  Briefcase,
};

export function ServicePills() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.1} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Key Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for training, recruitment, education, and project management
          </p>
        </BlurFade>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = icons[service.icon as keyof typeof icons] || GraduationCap;
            return (
              <BlurFade key={service.id} delay={0.1 + index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {service.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {service.stats && service.stats.length > 0 && (
                      <div className="mt-4 pt-4 border-t">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {service.stats[0].value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {service.stats[0].label}
                        </div>
                      </div>
                    )}
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-sm text-primary font-medium mt-4 inline-block hover:underline"
                    >
                      Explore →
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

