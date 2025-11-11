"use client";

import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Service } from "@/data/types";
import { GraduationCap, Briefcase, School, Building2, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import Link from "next/link";

const icons = {
  GraduationCap,
  Briefcase,
  School,
  Building2,
  Users,
};

export function ServiceDetailContent({ service }: { service: Service }) {
  const Icon = icons[service.icon as keyof typeof icons] || GraduationCap;

  return (
    <>
      <MainNav />
      <main id="main-content" className="min-h-screen" aria-label="Service details">
        {/* Hero Banner */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.1}>
              <div className="max-w-4xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">{service.title}</h1>
                    <p className="text-xl text-muted-foreground">{service.shortDescription}</p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                
                {service.stats && service.stats.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {service.stats.map((stat, idx) => (
                      <div key={idx} className="text-center p-4 rounded-lg bg-card border">
                        <div className="text-3xl font-bold text-primary mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                  {service.links && service.links.length > 0 && (
                    <Button size="lg" variant="outline" asChild>
                      <Link href={service.links[0].href}>{service.links[0].label}</Link>
                    </Button>
                  )}
                </div>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Benefits */}
                {service.benefits && service.benefits.length > 0 && (
                  <BlurFade delay={0.1}>
                    <Card>
                      <CardHeader>
                        <CardTitle>Key Benefits</CardTitle>
                        <CardDescription>What you can expect from our {service.title}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </BlurFade>
                )}

                {/* Quick Links */}
                {service.links && service.links.length > 0 && (
                  <BlurFade delay={0.2}>
                    <Card>
                      <CardHeader>
                        <CardTitle>Quick Links</CardTitle>
                        <CardDescription>Explore related resources</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {service.links.map((link, idx) => (
                            <Link
                              key={idx}
                              href={link.href}
                              className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                            >
                              <span className="font-medium">{link.label}</span>
                              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </BlurFade>
                )}

                {/* Service-specific content */}
                {service.slug === "training" && (
                  <BlurFade delay={0.3}>
                    <Card id="corporate">
                      <CardHeader>
                        <CardTitle>Corporate Training</CardTitle>
                        <CardDescription>Customized training programs for organizations</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          We offer tailored training programs designed specifically for your organization's needs. 
                          Our corporate training solutions help upskill your team with industry-relevant skills.
                        </p>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Customized curriculum based on your requirements</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Flexible scheduling for your team</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>On-site or online delivery options</span>
                          </li>
                        </ul>
                        <Button asChild>
                          <Link href="/contact">Request a Quote</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </BlurFade>
                )}

                {service.slug === "recruitment" && (
                  <>
                    <BlurFade delay={0.3}>
                      <Card id="employers">
                        <CardHeader>
                          <CardTitle>For Employers</CardTitle>
                          <CardDescription>Find the right talent for your organization</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">
                            We help companies find skilled professionals in Architecture, CAD, BIM, and related fields. 
                            Our recruitment process ensures quality matches and quick turnaround times.
                          </p>
                          <ul className="space-y-2 mb-4">
                            <li className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>Verified candidate profiles</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>Industry-specific matching</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>Post-placement support</span>
                            </li>
                          </ul>
                          <Button asChild>
                            <Link href="/contact">Post a Job</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </BlurFade>
                    <BlurFade delay={0.4}>
                      <Card id="post-job">
                        <CardHeader>
                          <CardTitle>Post a Job</CardTitle>
                          <CardDescription>List your job opening and find qualified candidates</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">
                            Submit your job requirements and we'll help you find the perfect candidate. 
                            Our team will review your posting and match it with qualified professionals.
                          </p>
                          <Button asChild>
                            <Link href="/contact">Get Started</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </BlurFade>
                  </>
                )}

                {service.slug === "education" && (
                  <BlurFade delay={0.3}>
                    <Card id="partners">
                      <CardHeader>
                        <CardTitle>Partner Colleges</CardTitle>
                        <CardDescription>Educational institutions we work with</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          We partner with colleges and universities to provide industry-relevant training and certification programs. 
                          Our partnerships help bridge the gap between academia and industry.
                        </p>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Industry-aligned curriculum integration</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Guest lectures and workshops</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Internship and placement support</span>
                          </li>
                        </ul>
                        <Button asChild>
                          <Link href="/contact">Become a Partner</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </BlurFade>
                )}

                {service.slug === "project-management" && (
                  <BlurFade delay={0.3}>
                    <Card>
                      <CardHeader>
                        <CardTitle>Our Approach</CardTitle>
                        <CardDescription>How we manage projects</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          We provide end-to-end project management services for construction and architecture projects. 
                          From planning to execution, we ensure successful project delivery.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="p-4 rounded-lg border">
                            <h4 className="font-semibold mb-2">Planning</h4>
                            <p className="text-sm text-muted-foreground">
                              Comprehensive project planning and resource allocation
                            </p>
                          </div>
                          <div className="p-4 rounded-lg border">
                            <h4 className="font-semibold mb-2">Execution</h4>
                            <p className="text-sm text-muted-foreground">
                              Timely execution with quality assurance
                            </p>
                          </div>
                          <div className="p-4 rounded-lg border">
                            <h4 className="font-semibold mb-2">Monitoring</h4>
                            <p className="text-sm text-muted-foreground">
                              Continuous monitoring and risk management
                            </p>
                          </div>
                          <div className="p-4 rounded-lg border">
                            <h4 className="font-semibold mb-2">Delivery</h4>
                            <p className="text-sm text-muted-foreground">
                              On-time delivery with client satisfaction
                            </p>
                          </div>
                        </div>
                        <Button asChild>
                          <Link href="/contact">Request a Quote</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </BlurFade>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <BlurFade delay={0.2}>
                    <Card>
                      <CardHeader>
                        <CardTitle>Get Started</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Ready to get started? Contact us to learn more about our services and how we can help you.
                        </p>
                        <Separator />
                        <Button size="lg" className="w-full" asChild>
                          <Link href="/contact">Contact Us</Link>
                        </Button>
                        <Button variant="outline" size="lg" className="w-full" asChild>
                          <Link href="/register">Register Now</Link>
                        </Button>
                        <Separator />
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <span>📞</span>
                            <Link href="tel:+919876543210" className="hover:text-primary">
                              +91 98765 43210
                            </Link>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <span>✉️</span>
                            <Link href="mailto:info@advatech.com" className="hover:text-primary">
                              info@advatech.com
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </BlurFade>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}

