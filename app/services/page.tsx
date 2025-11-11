"use client";

import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getServices } from "@/lib/api/services";
import { Service } from "@/data/types";
import { GraduationCap, Briefcase, School, Building2, Users } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import Link from "next/link";
import { useEffect, useState } from "react";

const icons = {
  GraduationCap,
  Briefcase,
  School,
  Building2,
  Users,
};

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadServices() {
      const data = await getServices();
      setServices(data);
      setLoading(false);
    }
    loadServices();
  }, []);

  return (
    <>
      <MainNav />
      <main id="main-content" className="min-h-screen" aria-label="Main content">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <BlurFade delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions for training, recruitment, education, and project management
              </p>
            </BlurFade>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="h-64 bg-muted animate-pulse rounded-lg" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => {
                  const Icon = icons[service.icon as keyof typeof icons] || GraduationCap;
                  return (
                    <BlurFade key={service.id} delay={0.1 + index * 0.1}>
                      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                        <CardHeader>
                          <div className="flex items-start gap-4">
                            <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                              <Icon className="h-8 w-8 text-primary" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                              <CardDescription className="text-base">
                                {service.shortDescription}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-6">{service.description}</p>
                          
                          {service.benefits && service.benefits.length > 0 && (
                            <div className="mb-6">
                              <h3 className="font-semibold mb-3">Key Benefits</h3>
                              <ul className="space-y-2">
                                {service.benefits.slice(0, 3).map((benefit, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {service.stats && service.stats.length > 0 && (
                            <div className="grid grid-cols-3 gap-4 mb-6 pt-4 border-t">
                              {service.stats.map((stat, idx) => (
                                <div key={idx} className="text-center">
                                  <div className="text-xl font-bold text-primary mb-1">
                                    {stat.value}
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    {stat.label}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          <div className="flex gap-2">
                            <Button asChild className="flex-1">
                              <Link href={`/services/${service.slug}`}>Learn More</Link>
                            </Button>
                            {service.links && service.links.length > 0 && (
                              <Button variant="outline" asChild>
                                <Link href={service.links[0].href}>{service.links[0].label}</Link>
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </BlurFade>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}

