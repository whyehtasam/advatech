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
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.1}>
              <div className="max-w-4xl">
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
                <p className="text-xl text-muted-foreground mb-6">{course.description}</p>
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{course.mode}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-foreground">{course.rating}</span>
                    <span>({course.totalReviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Next batch: {new Date(course.nextBatch).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="text-3xl font-bold text-primary mb-1">₹{course.fee.toLocaleString()}</div>
                    {course.originalFee && (
                      <div className="text-sm text-muted-foreground line-through">
                        ₹{course.originalFee.toLocaleString()}
                      </div>
                    )}
                  </div>
                  <Button size="lg" className="text-base" onClick={() => setEnrollModalOpen(true)}>
                    Enroll Now
                  </Button>
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
              <div className="lg:col-span-2">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                    <TabsTrigger value="trainers">Trainers</TabsTrigger>
                    <TabsTrigger value="projects">Projects</TabsTrigger>
                    <TabsTrigger value="placements">Placements</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="mt-6">
                    <BlurFade delay={0.1}>
                      <Card>
                        <CardHeader>
                          <CardTitle>Course Overview</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="prose max-w-none">
                            <p className="text-muted-foreground mb-4">{course.description}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                              <div>
                                <h3 className="font-semibold mb-2">What You'll Learn</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                  <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>Industry-standard practices and workflows</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>Hands-on project experience</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>Real-world case studies</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>Portfolio building</span>
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <h3 className="font-semibold mb-2">Course Stats</h3>
                                <div className="space-y-2 text-sm">
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Students Enrolled</span>
                                    <span className="font-medium">{course.stats.studentsEnrolled}+</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Avg Package</span>
                                    <span className="font-medium">₹{(course.stats.avgPackage / 1000).toFixed(0)}K</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Placement Rate</span>
                                    <span className="font-medium">{course.stats.placementRate}%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </BlurFade>
                  </TabsContent>

                  <TabsContent value="curriculum" className="mt-6">
                    <BlurFade delay={0.1}>
                      <Card>
                        <CardHeader>
                          <CardTitle>Curriculum</CardTitle>
                          <CardDescription>Complete course structure with modules and lessons</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Accordion type="single" collapsible className="w-full">
                            {course.curriculum.map((module, index) => (
                              <AccordionItem key={module.id} value={module.id}>
                                <AccordionTrigger>
                                  <div className="flex items-center gap-4 flex-1 text-left">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                                      {index + 1}
                                    </div>
                                    <div className="flex-1">
                                      <div className="font-semibold">{module.title}</div>
                                      <div className="text-sm text-muted-foreground">
                                        {module.duration} • {module.lessons.length} lessons
                                      </div>
                                    </div>
                                    {module.hasProject && (
                                      <Badge variant="outline" className="mr-4">
                                        <Briefcase className="h-3 w-3 mr-1" />
                                        Project
                                      </Badge>
                                    )}
                                  </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                  <div className="pl-12 space-y-3">
                                    <p className="text-sm text-muted-foreground mb-4">{module.description}</p>
                                    {module.lessons.map((lesson) => (
                                      <div
                                        key={lesson.id}
                                        className="flex items-center gap-3 p-3 rounded-lg border bg-muted/30"
                                      >
                                        {lesson.type === "video" ? (
                                          <Play className="h-4 w-4 text-primary" />
                                        ) : (
                                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                                        )}
                                        <div className="flex-1">
                                          <div className="font-medium text-sm">{lesson.title}</div>
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

                  <TabsContent value="trainers" className="mt-6">
                    <BlurFade delay={0.1}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {course.trainers.length > 0 ? (
                          course.trainers.map((trainer) => (
                            <Card key={trainer.id}>
                              <CardHeader>
                                <div className="flex items-start gap-4">
                                  <Avatar className="h-16 w-16">
                                    <AvatarImage src={trainer.photo} alt={trainer.name} />
                                    <AvatarFallback>{trainer.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                                  </Avatar>
                                  <div className="flex-1">
                                    <CardTitle className="text-lg mb-1">{trainer.name}</CardTitle>
                                    <CardDescription className="mb-2">{trainer.role}</CardDescription>
                                    <div className="flex items-center gap-1">
                                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                      <span className="text-sm font-medium">{trainer.rating}</span>
                                    </div>
                                  </div>
                                </div>
                              </CardHeader>
                              <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">{trainer.bio}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
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
                                    className="text-sm text-primary hover:underline"
                                  >
                                    View LinkedIn →
                                  </Link>
                                )}
                              </CardContent>
                            </Card>
                          ))
                        ) : (
                          <p className="text-muted-foreground">Trainer information coming soon.</p>
                        )}
                      </div>
                    </BlurFade>
                  </TabsContent>

                  <TabsContent value="projects" className="mt-6">
                    <BlurFade delay={0.1}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {course.projects.length > 0 ? (
                          course.projects.map((project) => (
                            <Card key={project.id} className="hover:shadow-lg transition-shadow">
                              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg overflow-hidden">
                                <Image
                                  src={`https://images.unsplash.com/photo-${1504307651254 + parseInt(project.id)}?w=800&h=600&fit=crop&q=80`}
                                  alt={project.title}
                                  fill
                                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                              </div>
                              <CardHeader>
                                <CardTitle className="text-lg">{project.title}</CardTitle>
                                <CardDescription>{project.shortDescription}</CardDescription>
                              </CardHeader>
                              <CardContent>
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {project.techStack.slice(0, 3).map((tech) => (
                                    <Badge key={tech} variant="secondary" className="text-xs">
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                                <Link
                                  href={`/projects/${project.id}`}
                                  className="text-sm text-primary font-medium hover:underline"
                                >
                                  View Project →
                                </Link>
                              </CardContent>
                            </Card>
                          ))
                        ) : (
                          <p className="text-muted-foreground">Project information coming soon.</p>
                        )}
                      </div>
                    </BlurFade>
                  </TabsContent>

                  <TabsContent value="placements" className="mt-6">
                    <BlurFade delay={0.1}>
                      <Card>
                        <CardHeader>
                          <CardTitle>Placement Highlights</CardTitle>
                          <CardDescription>Our students are placed in top companies</CardDescription>
                        </CardHeader>
                        <CardContent>
                          {course.placements.length > 0 ? (
                            <div className="space-y-4">
                              {course.placements.slice(0, 5).map((placement) => (
                                <div key={placement.id} className="flex items-center justify-between p-4 rounded-lg border">
                                  <div className="flex-1">
                                    <div className="font-semibold mb-1">{placement.studentName}</div>
                                    <div className="text-sm text-muted-foreground">
                                      {placement.company} • {placement.role}
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <div className="font-bold text-primary">
                                      ₹{(placement.package / 1000).toFixed(0)}K
                                    </div>
                                    <div className="text-xs text-muted-foreground">{placement.year}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-muted-foreground">Placement information coming soon.</p>
                          )}
                        </CardContent>
                      </Card>
                    </BlurFade>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar - Sticky CTA */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <BlurFade delay={0.2}>
                    <Card>
                      <CardHeader>
                        <CardTitle>Course Details</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Duration</div>
                          <div className="font-semibold">{course.duration}</div>
                        </div>
                        <Separator />
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Mode</div>
                          <div className="font-semibold">{course.mode}</div>
                        </div>
                        <Separator />
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Level</div>
                          <Badge variant="outline">{course.level}</Badge>
                        </div>
                        <Separator />
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Next Batch</div>
                          <div className="font-semibold">
                            {new Date(course.nextBatch).toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                        </div>
                        <Separator />
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Seats Available</div>
                          <div className="font-semibold">{course.seats} seats</div>
                        </div>
                        <Separator />
                        <div>
                          <div className="text-3xl font-bold text-primary mb-1">₹{course.fee.toLocaleString()}</div>
                          {course.originalFee && (
                            <div className="text-sm text-muted-foreground line-through">
                              ₹{course.originalFee.toLocaleString()}
                            </div>
                          )}
                        </div>
                        <Button size="lg" className="w-full" onClick={() => setEnrollModalOpen(true)}>
                          Enroll Now
                        </Button>
                        <Button variant="outline" size="lg" className="w-full" asChild>
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

