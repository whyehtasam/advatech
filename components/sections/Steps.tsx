"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BlurFade } from "@/components/ui/blur-fade";
import { FileText, GraduationCap, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Enroll in Course",
    description: "Choose from our comprehensive training programs. Browse courses, check schedules, and enroll online.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Learn & Build Projects",
    description: "Learn from industry experts with hands-on projects. Build your portfolio with real-world applications.",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "Get Placed",
    description: "Our placement team helps you land your dream job. Connect with top companies and start your career.",
    icon: Briefcase,
  },
];

// Validated background images for each step
const backgroundImages = [
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80", // Enroll - notebook/writing
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80", // Learn - people collaborating
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80", // Get Placed - business handshake
];

export function Steps() {
  const iconColors = [
    "bg-primary/10 text-primary group-hover:bg-primary/20",
    "bg-accent/10 text-accent group-hover:bg-accent/20",
    "bg-success/10 text-success group-hover:bg-success/20",
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.1} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            How It <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Simple steps to start your career journey with us
          </p>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block z-[-10] absolute top-1/2 -translate-y-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-success" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const iconColor = iconColors[index % iconColors.length];
            const bgImage = backgroundImages[index % backgroundImages.length];
            return (
              <BlurFade key={step.number} delay={0.1 + index * 0.1}>
                <Card className="h-full text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border-2 border-white/10 hover:border-primary/30 overflow-hidden relative transform-gpu will-change-transform">
                  {/* Background Image with Overlay */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${bgImage})` }}
                  />
                  {/* Dark overlay with blur for readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 backdrop-blur-[2px]" />

                  {/* Content */}
                  <div className="relative z-10">
                    <CardHeader className="pb-4">
                      <div className={cn(
                        "w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 relative z-10 transform-gpu will-change-transform bg-white/10 backdrop-blur-md border border-white/20",
                        "group-hover:bg-white/20"
                      )}>
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <div className="text-5xl font-bold text-blue-400/80 mb-3 group-hover:text-blue-400 transition-colors">
                        {step.number}
                      </div>
                      <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors font-semibold">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed text-gray-200">
                        {step.description}
                      </CardDescription>
                    </CardContent>
                  </div>
                </Card>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}

