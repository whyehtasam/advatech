"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, CheckCircle2 } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { events } from "@/data/events";
import { Event } from "@/data/types";

// Helper function to get appropriate Unsplash images for each event type
function getEventImage(eventId: string, eventType: string): string {
  const imageMap: Record<string, string> = {
    "1": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80", // Training/Batch - classroom
    "2": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&q=80", // Training/Batch - online learning
    "3": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80", // Workshop - collaboration
    "4": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop&q=80", // Event/Placement - networking
  };
  
  return imageMap[eventId] || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80";
}

export default function EventsPage() {
  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredEvents = events.filter(
    (event) => selectedType === "all" || event.type === selectedType
  );

  const upcomingEvents = filteredEvents.filter(
    (event) => new Date(event.date) >= new Date()
  );

  return (
    <>
      <MainNav />
      <main id="main-content" className="min-h-screen" aria-label="Events and batches">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <BlurFade delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Batches</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join our upcoming training batches, workshops, and events. Register now to secure your spot.
              </p>
            </BlurFade>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 items-center">
              <span className="text-sm font-medium">Filter by type:</span>
              <Badge
                variant={selectedType === "all" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedType("all")}
              >
                All
              </Badge>
              <Badge
                variant={selectedType === "batch" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedType("batch")}
              >
                Batches
              </Badge>
              <Badge
                variant={selectedType === "workshop" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedType("workshop")}
              >
                Workshops
              </Badge>
              <Badge
                variant={selectedType === "event" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedType("event")}
              >
                Events
              </Badge>
            </div>
          </div>
        </section>

        {/* Events List */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {upcomingEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingEvents.map((event, index) => (
                  <BlurFade key={event.id} delay={0.1 + index * 0.05}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group pt-0">
                      <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden rounded-t-xl">
                        <Image
                          src={getEventImage(event.id, event.type)}
                          alt={event.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm border border-border/50">{event.type}</Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                        <CardDescription className="line-clamp-2">{event.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(event.date).toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="h-4 w-4" />
                            <span>
                              {event.registered} / {event.seats} registered
                            </span>
                          </div>
                          <div className="pt-3 border-t">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-sm font-medium">Seats Available</span>
                              <span className="text-sm text-muted-foreground">
                                {event.seats - event.registered} seats left
                              </span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2 mb-3">
                              <div
                                className="bg-primary h-2 rounded-full transition-all"
                                style={{ width: `${(event.registered / event.seats) * 100}%` }}
                              />
                            </div>
                          </div>
                          <Button className="w-full" asChild>
                            <a href={`/register?event=${event.id}`}>
                              Register Now
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
                No upcoming events found.
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

