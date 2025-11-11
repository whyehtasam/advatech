"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { Users, TrendingUp, Award } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden gradient-hero">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 animate-gradient bg-[length:200%_200%]" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <BlurFade delay={0.1} className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:!text-5xl lg:!text-6xl font-bold leading-tight text-balance">
                Upskill. Build Projects.{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Get Placed.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Professional training in Architecture, CAD, BIM, and related technologies. 
                Industry-aligned curriculum with hands-on projects and expert instructors.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                asChild 
                className="text-base px-8 py-4 h-auto shadow-primary hover:shadow hover:scale-[1.02] transition-all duration-200"
              >
                <Link href="/register">Enroll Now</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="text-base px-8 py-4 h-auto border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-200"
              >
                <Link href="/contact">Talk to Counselor</Link>
              </Button>
            </div>
            
            {/* Stats with Icons */}
            <div className="flex items-center gap-8 pt-4 border-t border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">5000+</div>
                  <div className="text-sm text-muted-foreground">Students Trained</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">₹3.6L</div>
                  <div className="text-sm text-muted-foreground">Avg Package</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">85%</div>
                  <div className="text-sm text-muted-foreground">Placement Rate</div>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Right: Visual */}
          <BlurFade delay={0.3} className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
              {/* Professional image from Unsplash */}
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=900&fit=crop&q=80"
                alt="Architecture training - Students learning CAD and BIM technologies"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/30" />
              </div>
              <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30" />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

