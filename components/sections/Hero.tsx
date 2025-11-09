"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <BlurFade delay={0.1} className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Upskill. Build Projects.{" "}
              <span className="text-primary">Get Placed.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Professional training in Architecture, CAD, BIM, and related technologies. 
              Industry-aligned curriculum with hands-on projects and expert instructors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild className="text-base">
                <Link href="/register">Enroll Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base">
                <Link href="/contact">Talk to Counselor</Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div>
                <div className="font-semibold text-foreground">5000+</div>
                <div>Students Trained</div>
              </div>
              <div>
                <div className="font-semibold text-foreground">₹3.6L</div>
                <div>Avg Package</div>
              </div>
              <div>
                <div className="font-semibold text-foreground">85%</div>
                <div>Placement Rate</div>
              </div>
            </div>
          </BlurFade>

          {/* Right: Visual */}
          <BlurFade delay={0.3} className="relative">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
              {/* Placeholder for video/image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="text-6xl">🏗️</div>
                  <p className="text-lg font-medium">Hero Video/Image</p>
                  <p className="text-sm text-muted-foreground">
                    Teacher explaining on whiteboard, students working on models
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

