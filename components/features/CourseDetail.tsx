"use client";

import { useState } from "react";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Course } from "@/data/types";
import { Clock, Users, Star, Calendar, CheckCircle2, Play, BookOpen, Briefcase } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { EnrollModal } from "@/components/features/EnrollModal";

interface CourseDetailProps {
  course: Course;
}

export function CourseDetailContent({ course }: CourseDetailProps) {
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);

  return (
    <>
      <MainNav />
      <main id="main-content" className="min-h-screen" aria-label="Main content">
        {/* Hero Banner */}
        <section className="pt-12 pb-8 md:pt-16 md:pb-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.1}>
              <div className="max-w-4xl">
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight">{course.title}</h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-5 md:mb-6 leading-relaxed">{course.description}</p>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground mb-5 md:mb-6">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span>{course.mode}</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                    <span className="font-medium text-foreground">{course.rating}</span>
                    <span>({course.totalReviews})</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span className="hidden sm:inline">Next batch: </span>
                    <span>{new Date(course.nextBatch).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">₹{course.fee.toLocaleString()}</div>
                    {course.originalFee && (
                      <div className="text-xs sm:text-sm text-muted-foreground line-through">
                        ₹{course.originalFee.toLocaleString()}
                      </div>
                    )}
                  </div>
                  <Button size="lg" className="text-sm sm:text-base w-full sm:w-auto" onClick={() => setEnrollModalOpen(true)}>
                    Enroll Now
                  </Button>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 sm:grid-cols-5 h-auto overflow-x-auto">
                    <TabsTrigger value="overview" className="text-xs sm:text-sm py-2">Overview</TabsTrigger>
                    <TabsTrigger value="curriculum" className="text-xs sm:text-sm py-2">Curriculum</TabsTrigger>
                    <TabsTrigger value="trainers" className="text-xs sm:text-sm py-2">Trainers</TabsTrigger>
                    <TabsTrigger value="projects" className="text-xs sm:text-sm py-2">Projects</TabsTrigger>
                    <TabsTrigger value="placements" className="text-xs sm:text-sm py-2">Placements</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="mt-4 sm:mt-6">
                    <BlurFade delay={0.1}>
                      <Card>
                        <CardHeader className="pb-4">
                          <CardTitle className="text-lg sm:text-xl">Course Overview</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{course.description}</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t">
                            <div>
                              <h3 className="text-sm sm:text-base font-semibold mb-3">What You'll Learn</h3>
                              <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span>Industry-standard practices and workflows</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span>Hands-on project experience</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span>Real-world case studies</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span>Portfolio building</span>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h3 className="text-sm sm:text-base font-semibold mb-3">Course Stats</h3>
                              <div className="space-y-2.5 text-xs sm:text-sm">
                                <div className="flex justify-between items-center">
                                  <span className="text-muted-foreground">Students Enrolled</span>
                                  <span className="font-medium text-foreground">{course.stats.studentsEnrolled}+</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-muted-foreground">Avg Package</span>
                                  <span className="font-medium text-foreground">₹{(course.stats.avgPackage / 1000).toFixed(0)}K</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-muted-foreground">Placement Rate</span>
                                  <span className="font-medium text-foreground">{course.stats.placementRate}%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </BlurFade>
                  </TabsContent>

                  <TabsContent value="curriculum" className="mt-4 sm:mt-6">
                    <BlurFade delay={0.1}>
                      <Card>
                        <CardHeader className="pb-4">
                          <CardTitle className="text-lg sm:text-xl">Curriculum</CardTitle>
                          <CardDescription className="text-xs sm:text-sm">Complete course structure with modules and lessons</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Accordion type="single" collapsible className="w-full">
                            {course.curriculum.map((module, index) => (
                              <AccordionItem key={module.id} value={module.id} className="border-border/50">
                                <AccordionTrigger className="hover:no-underline">
                                  <div className="flex items-center gap-3 sm:gap-4 flex-1 text-left">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs sm:text-sm font-semibold text-primary flex-shrink-0">
                                      {index + 1}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="font-semibold text-sm sm:text-base">{module.title}</div>
                                      <div className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                                        {module.duration} • {module.lessons.length} lessons
                                      </div>
                                    </div>
                                    {module.hasProject && (
                                      <Badge variant="outline" className="mr-2 sm:mr-4 text-xs flex-shrink-0">
                                        <Briefcase className="h-3 w-3 mr-1" />
                                        Project
                                      </Badge>
                                    )}
                                  </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                  <div className="pl-0 sm:pl-10 sm:pl-12 space-y-2.5 sm:space-y-3 pt-2">
                                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">{module.description}</p>
                                    {module.lessons.map((lesson) => (
                                      <div
                                        key={lesson.id}
                                        className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-lg border border-border/50 bg-muted/30"
                                      >
                                        {lesson.type === "video" ? (
                                          <Play className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                                        ) : (
                                          <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
                                        )}
                                        <div className="flex-1 min-w-0">
                                          <div className="font-medium text-xs sm:text-sm truncate">{lesson.title}</div>
                                          <div className="text-xs text-muted-foreground">{lesson.duration}</div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </CardContent>
                      </Card>
                    </BlurFade>
                  </TabsContent>

                  <TabsContent value="trainers" className="mt-4 sm:mt-6">
                    <BlurFade delay={0.1}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {course.trainers.length > 0 ? (
                          course.trainers.map((trainer) => (
                            <Card key={trainer.id}>
                              <CardHeader className="pb-4">
                                <div className="flex items-start gap-3 sm:gap-4">
                                  <Avatar className="h-12 w-12 sm:h-16 sm:w-16 flex-shrink-0">
                                    <AvatarImage src={trainer.photo} alt={trainer.name} />
                                    <AvatarFallback className="text-xs sm:text-sm">{trainer.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                                  </Avatar>
                                  <div className="flex-1 min-w-0">
                                    <CardTitle className="text-base sm:text-lg mb-1">{trainer.name}</CardTitle>
                                    <CardDescription className="text-xs sm:text-sm mb-2">{trainer.role}</CardDescription>
                                    <div className="flex items-center gap-1">
                                      <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                                      <span className="text-xs sm:text-sm font-medium">{trainer.rating}</span>
                                    </div>
                                  </div>
                                </div>
                              </CardHeader>
                              <CardContent className="space-y-3 sm:space-y-4">
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{trainer.bio}</p>
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                  {trainer.expertise.slice(0, 3).map((skill) => (
                                    <Badge key={skill} variant="secondary" className="text-xs">
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                                {trainer.linkedin && (
                                  <Link
                                    href={trainer.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs sm:text-sm text-primary hover:underline inline-flex items-center"
                                  >
                                    View LinkedIn →
                                  </Link>
                                )}
                              </CardContent>
                            </Card>
                          ))
                        ) : (
                          <p className="text-sm text-muted-foreground">Trainer information coming soon.</p>
                        )}
                      </div>
                    </BlurFade>
                  </TabsContent>

                  <TabsContent value="projects" className="mt-4 sm:mt-6">
                    <BlurFade delay={0.1}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {course.projects.length > 0 ? (
                          course.projects.map((project) => (
                            <Card key={project.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                                <Image
                                  src={`https://images.unsplash.com/photo-${1504307651254 + parseInt(project.id)}?w=800&h=600&fit=crop&q=80`}
                                  alt={project.title}
                                  fill
                                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                                  sizes="(max-width: 640px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                              </div>
                              <CardHeader className="pb-3">
                                <CardTitle className="text-base sm:text-lg">{project.title}</CardTitle>
                                <CardDescription className="text-xs sm:text-sm">{project.shortDescription}</CardDescription>
                              </CardHeader>
                              <CardContent className="space-y-3">
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                  {project.techStack.slice(0, 3).map((tech) => (
                                    <Badge key={tech} variant="secondary" className="text-xs">
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                                <Link
                                  href={`/projects/${project.id}`}
                                  className="text-xs sm:text-sm text-primary font-medium hover:underline inline-flex items-center"
                                >
                                  View Project →
                                </Link>
                              </CardContent>
                            </Card>
                          ))
                        ) : (
                          <p className="text-sm text-muted-foreground">Project information coming soon.</p>
                        )}
                      </div>
                    </BlurFade>
                  </TabsContent>

                  <TabsContent value="placements" className="mt-4 sm:mt-6">
                    <BlurFade delay={0.1}>
                      <Card>
                        <CardHeader className="pb-4">
                          <CardTitle className="text-lg sm:text-xl">Placement Highlights</CardTitle>
                          <CardDescription className="text-xs sm:text-sm">Our students are placed in top companies</CardDescription>
                        </CardHeader>
                        <CardContent>
                          {course.placements.length > 0 ? (
                            <div className="space-y-3 sm:space-y-4">
                              {course.placements.slice(0, 5).map((placement) => (
                                <div key={placement.id} className="flex items-center justify-between gap-4 p-3 sm:p-4 rounded-lg border border-border/50">
                                  <div className="flex-1 min-w-0">
                                    <div className="font-semibold text-sm sm:text-base mb-1">{placement.studentName}</div>
                                    <div className="text-xs sm:text-sm text-muted-foreground truncate">
                                      {placement.company} • {placement.role}
                                    </div>
                                  </div>
                                  <div className="text-right flex-shrink-0">
                                    <div className="font-bold text-primary text-sm sm:text-base">
                                      ₹{(placement.package / 1000).toFixed(0)}K
                                    </div>
                                    <div className="text-xs text-muted-foreground">{placement.year}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-sm text-muted-foreground">Placement information coming soon.</p>
                          )}
                        </CardContent>
                      </Card>
                    </BlurFade>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar - Sticky CTA */}
              <div className="lg:col-span-1">
                <div className="sticky top-20 lg:top-24">
                  <BlurFade delay={0.2}>
                    <Card>
                      <CardHeader className="pb-4">
                        <CardTitle className="text-base sm:text-lg">Course Details</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 sm:space-y-4">
                        <div>
                          <div className="text-xs sm:text-sm text-muted-foreground mb-1">Duration</div>
                          <div className="font-semibold text-sm sm:text-base">{course.duration}</div>
                        </div>
                        <Separator className="my-2" />
                        <div>
                          <div className="text-xs sm:text-sm text-muted-foreground mb-1">Mode</div>
                          <div className="font-semibold text-sm sm:text-base">{course.mode}</div>
                        </div>
                        <Separator className="my-2" />
                        <div>
                          <div className="text-xs sm:text-sm text-muted-foreground mb-1">Level</div>
                          <Badge variant="outline" className="text-xs">{course.level}</Badge>
                        </div>
                        <Separator className="my-2" />
                        <div>
                          <div className="text-xs sm:text-sm text-muted-foreground mb-1">Next Batch</div>
                          <div className="font-semibold text-xs sm:text-sm">
                            {new Date(course.nextBatch).toLocaleDateString("en-US", {
                              weekday: "short",
                              month: "short",
                              day: "numeric",
                            })}
                          </div>
                        </div>
                        <Separator className="my-2" />
                        <div>
                          <div className="text-xs sm:text-sm text-muted-foreground mb-1">Seats Available</div>
                          <div className="font-semibold text-sm sm:text-base">{course.seats} seats</div>
                        </div>
                        <Separator className="my-2" />
                        <div>
                          <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">₹{course.fee.toLocaleString()}</div>
                          {course.originalFee && (
                            <div className="text-xs sm:text-sm text-muted-foreground line-through">
                              ₹{course.originalFee.toLocaleString()}
                            </div>
                          )}
                        </div>
                        <Button size="lg" className="w-full text-sm sm:text-base" onClick={() => setEnrollModalOpen(true)}>
                          Enroll Now
                        </Button>
                        <Button variant="outline" size="lg" className="w-full text-sm sm:text-base" asChild>
                          <Link href="/contact">Talk to Counselor</Link>
                        </Button>
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
      <EnrollModal course={course} open={enrollModalOpen} onOpenChange={setEnrollModalOpen} />
    </>
  );
}

