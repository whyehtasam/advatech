"use client";

import { useState } from "react";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Calendar, Download, Bell } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import Image from "next/image";

// Mock notices data
const notices = [
  {
    id: "1",
    title: "Admission Open for Revit Architecture Training - Batch 15",
    description: "Admissions are now open for our comprehensive Revit Architecture Training program. Limited seats available.",
    category: "admissions",
    date: "2024-03-01",
    link: "/notices/1",
  },
  {
    id: "2",
    title: "Placement Drive - March 2024",
    description: "Exclusive placement drive for our students. Top companies are hiring BIM and CAD professionals.",
    category: "placements",
    date: "2024-02-28",
    link: "/notices/2",
  },
  {
    id: "3",
    title: "New Course: BIM Project Management",
    description: "We're excited to announce our new BIM Project Management course. Enroll now!",
    category: "courses",
    date: "2024-02-25",
    link: "/notices/3",
  },
  {
    id: "4",
    title: "Scholarship Program 2024",
    description: "Apply for our scholarship program. Financial assistance available for deserving students.",
    category: "admissions",
    date: "2024-02-20",
    link: "/notices/4",
  },
];

const categories = ["all", "admissions", "placements", "courses"];

export default function NoticesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredNotices = notices.filter(
    (notice) => selectedCategory === "all" || notice.category === selectedCategory
  );

  return (
    <>
      <MainNav />
      <main id="main-content" className="min-h-screen" aria-label="Notices and announcements">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop&auto=format&q=80"
              alt="Notices Banner"
              fill
              className="object-cover blur-[2px]"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <BlurFade delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Notices <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">&amp; Announcements</span></h1>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Stay updated with the latest news, announcements, and important information.
              </p>
            </BlurFade>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Filter by category:</span>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Notices List */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredNotices.length > 0 ? (
              <div className="space-y-4">
                {filteredNotices.map((notice, index) => (
                  <BlurFade key={notice.id} delay={0.1 + index * 0.05}>
                    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge variant="secondary">{notice.category}</Badge>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(notice.date).toLocaleDateString()}</span>
                              </div>
                            </div>
                            <CardTitle className="text-xl mb-2">{notice.title}</CardTitle>
                            <CardDescription>{notice.description}</CardDescription>
                          </div>
                          <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-3">
                          <Button variant="outline" size="sm" asChild>
                            <a href={notice.link}>
                              Read More
                            </a>
                          </Button>
                          <Button variant="ghost" size="sm" asChild>
                            <a href={notice.link} download>
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </BlurFade>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-muted-foreground">
                No notices found in this category.
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

