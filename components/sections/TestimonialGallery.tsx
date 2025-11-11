"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BlurFade } from "@/components/ui/blur-fade";
import { testimonials } from "@/data/testimonials";
import { Star, CheckCircle2 } from "lucide-react";

export function TestimonialGallery() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.1} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Student <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hear from our successful students who got placed in top companies
          </p>
        </BlurFade>
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <BlurFade delay={0.1 + index * 0.1}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4 mb-4">
                        <Avatar className="w-14 h-14 border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
                          <AvatarImage src={testimonial.photo} alt={testimonial.name} />
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                            {testimonial.name.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-lg group-hover:text-primary transition-colors">
                              {testimonial.name}
                            </CardTitle>
                            {testimonial.verified && (
                              <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                                <CheckCircle2 className="h-4 w-4 text-success" />
                              </div>
                            )}
                          </div>
                          <CardDescription className="text-sm leading-relaxed">
                            {testimonial.role}
                            {testimonial.company && ` at ${testimonial.company}`}
                          </CardDescription>
                          {testimonial.course && (
                            <CardDescription className="text-xs mt-1 text-primary/70">
                              {testimonial.course}
                            </CardDescription>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-1 mb-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 transition-transform ${
                              i < testimonial.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground italic leading-relaxed relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-primary/30">
                        "{testimonial.quote}"
                      </p>
                    </CardContent>
                  </Card>
                </BlurFade>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
}

