"use client";

import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { team } from "@/data/team";
import { TeamMember } from "@/data/types";
import { Linkedin, Mail, Award, Users, Target, TrendingUp } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <MainNav />
      <main id="main-content" className="min-h-screen" aria-label="Main content">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.1} className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Advatech</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                With over 20 years of experience in the construction and architecture industry, Advatech was founded
                to bridge the gap between industry requirements and academic training.
              </p>
              <p className="text-muted-foreground">
                We provide comprehensive training programs in Architecture, CAD, BIM, and related technologies.
                Our industry-aligned curriculum, hands-on projects, and expert instructors help students build
                successful careers in the construction and architecture industry.
              </p>
            </BlurFade>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <BlurFade delay={0.1}>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-3xl font-bold text-primary mb-1">5000+</div>
                    <div className="text-sm text-muted-foreground">Students Trained</div>
                  </CardContent>
                </Card>
              </BlurFade>
              <BlurFade delay={0.2}>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-3xl font-bold text-primary mb-1">85%</div>
                    <div className="text-sm text-muted-foreground">Placement Rate</div>
                  </CardContent>
                </Card>
              </BlurFade>
              <BlurFade delay={0.3}>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-3xl font-bold text-primary mb-1">200+</div>
                    <div className="text-sm text-muted-foreground">Partner Companies</div>
                  </CardContent>
                </Card>
              </BlurFade>
              <BlurFade delay={0.4}>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-3xl font-bold text-primary mb-1">50+</div>
                    <div className="text-sm text-muted-foreground">Partner Colleges</div>
                  </CardContent>
                </Card>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <BlurFade delay={0.1}>
                <Card>
                  <CardHeader>
                    <CardTitle>Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      To provide industry-relevant training and education that bridges the gap between academia
                      and industry. We empower students with the skills and knowledge needed to succeed in
                      the construction and architecture industry.
                    </p>
                  </CardContent>
                </Card>
              </BlurFade>
              <BlurFade delay={0.2}>
                <Card>
                  <CardHeader>
                    <CardTitle>Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      To become the leading training and placement platform in India, recognized for excellence
                      in Architecture, CAD, and BIM training. We aim to transform careers and contribute to
                      the growth of the construction industry.
                    </p>
                  </CardContent>
                </Card>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-12 border-t">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.1} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Team</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the experts who are dedicated to your success
              </p>
            </BlurFade>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <BlurFade key={member.id} delay={0.1 + index * 0.1}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex flex-col items-center text-center">
                        <Avatar className="h-24 w-24 mb-4">
                          <AvatarImage src={member.photo} alt={member.name} />
                          <AvatarFallback>
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
                        <CardDescription className="text-base">{member.role}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 text-center">{member.bio}</p>
                      <div className="flex justify-center gap-3">
                        {member.social?.linkedin && (
                          <Button variant="outline" size="icon" asChild>
                            <Link href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                              <Linkedin className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                        {member.social?.email && (
                          <Button variant="outline" size="icon" asChild>
                            <Link href={`mailto:${member.social.email}`}>
                              <Mail className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-12 border-t">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.1} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Achievements & Awards</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Recognized for excellence in training and placement
              </p>
            </BlurFade>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Best Training Institute 2023", description: "Awarded by Construction Industry Association" },
                { title: "Excellence in Placement", description: "90% placement rate for 3 consecutive years" },
                { title: "Industry Partnership", description: "Partnered with 200+ leading companies" },
              ].map((achievement, index) => (
                <BlurFade key={index} delay={0.1 + index * 0.1}>
                  <Card>
                    <CardHeader>
                      <Award className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}

