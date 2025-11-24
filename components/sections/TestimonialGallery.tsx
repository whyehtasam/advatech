"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import { testimonials } from "@/data/testimonials";
import { Star, CheckCircle2 } from "lucide-react";

// Normalize quote length to ensure equal card heights (target ~120 chars)
const normalizeQuote = (quote: string, targetLength: number = 120): string => {
  if (quote.length <= targetLength) {
    return quote;
  }
  // Truncate to target length and add ellipsis
  return quote.substring(0, targetLength - 3) + "...";
};

export function TestimonialGallery() {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <BlurFade delay={0.1} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Student <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hear from our successful students who got placed in top companies
          </p>
        </BlurFade>
        <BlurFade delay={0.2}>
          <div className="py-8 px-6 bg-muted/30 rounded-2xl border border-border/50 overflow-hidden">
            <Marquee pauseOnHover className="[--duration:40s]">
              {testimonials.map((testimonial) => {
                const normalizedQuote = normalizeQuote(testimonial.quote);
                return (
                  <Card
                    key={testimonial.id}
                    className="w-[350px] h-[320px] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-2 hover:border-primary/20 bg-card/50 md:backdrop-blur-sm transform-gpu will-change-transform mx-4 flex flex-col"
                  >
                    <CardHeader className="pb-4 flex-shrink-0">
                      <div className="flex items-start gap-4 mb-4">
                        <Avatar className="w-14 h-14 border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
                          <AvatarImage src={testimonial.photo} alt={testimonial.name} />
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                            {testimonial.name.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-lg group-hover:text-primary transition-colors truncate">
                              {testimonial.name}
                            </CardTitle>
                            {testimonial.verified && (
                              <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                                <CheckCircle2 className="h-4 w-4 text-success" />
                              </div>
                            )}
                          </div>
                          <CardDescription className="text-sm leading-relaxed truncate">
                            {testimonial.role}
                            {testimonial.company && ` at ${testimonial.company}`}
                          </CardDescription>
                          {testimonial.course && (
                            <CardDescription className="text-xs mt-1 text-primary/70 truncate">
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
                    <CardContent className="pt-0 flex-1 flex flex-col min-h-[100px]">
                      <p className="text-sm text-muted-foreground italic leading-relaxed relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-primary/30">
                        "{normalizedQuote}"
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </Marquee>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

