"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { events } from "@/data/events";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";

export function EventsList() {
  const upcomingEvents = events.slice(0, 4);
  
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.1} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Upcoming <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Batches & Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join our upcoming training batches and events
          </p>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {upcomingEvents.map((event, index) => (
            <BlurFade key={event.id} delay={0.1 + index * 0.1}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {event.title}
                    </CardTitle>
                    <Badge 
                      variant="outline" 
                      className="border-2 bg-background/90 backdrop-blur-sm"
                    >
                      {event.type}
                    </Badge>
                  </div>
                  <CardDescription className="leading-relaxed min-h-[3rem]">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">
                        {new Date(event.date).toLocaleDateString("en-US", { 
                          weekday: "long", 
                          year: "numeric", 
                          month: "long", 
                          day: "numeric" 
                        })}
                      </span>
                    </div>
                    {event.time && (
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Clock className="h-4 w-4 text-accent" />
                        </div>
                        <span>{event.time}</span>
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
                          <MapPin className="h-4 w-4 text-success" />
                        </div>
                        <span>{event.location}</span>
                      </div>
                    )}
                    {event.seats && (
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-8 h-8 rounded-lg bg-info/10 flex items-center justify-center">
                          <Users className="h-4 w-4 text-info" />
                        </div>
                        <span className="font-semibold text-foreground">
                          {event.registered || 0} / {event.seats} registered
                        </span>
                      </div>
                    )}
                  </div>
                  <Button 
                    className="w-full shadow-primary hover:shadow-lg hover:scale-[1.02] transition-all duration-200" 
                    asChild
                  >
                    <Link href={`/events/${event.id}`} className="inline-flex items-center justify-center gap-2">
                      Register Now
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-200"
          >
            <Link href="/events" className="inline-flex items-center gap-2">
              View All Events
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

