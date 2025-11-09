"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BlurFade } from "@/components/ui/blur-fade";
import { testimonials } from "@/data/testimonials";
import { Star, CheckCircle2 } from "lucide-react";

export function TestimonialGallery() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.1} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our successful students who got placed in top companies
          </p>
        </BlurFade>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <BlurFade delay={0.1 + index * 0.1}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-start gap-4 mb-4">
                        <Avatar>
                          <AvatarImage src={testimonial.photo} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                            {testimonial.verified && (
                              <CheckCircle2 className="h-4 w-4 text-primary" />
                            )}
                          </div>
                          <CardDescription className="text-sm">
                            {testimonial.role}
                            {testimonial.company && ` at ${testimonial.company}`}
                          </CardDescription>
                          {testimonial.course && (
                            <CardDescription className="text-xs mt-1">
                              {testimonial.course}
                            </CardDescription>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-1 mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground italic">
                        "{testimonial.quote}"
                      </p>
                    </CardContent>
                  </Card>
                </BlurFade>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

