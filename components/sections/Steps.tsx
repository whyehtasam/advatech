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

export function Steps() {
  const iconColors = [
    "bg-primary/10 text-primary group-hover:bg-primary/20",
    "bg-accent/10 text-accent group-hover:bg-accent/20",
    "bg-success/10 text-success group-hover:bg-success/20",
  ];
  
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/20 to-background">
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
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-success/20" />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            const iconColor = iconColors[index % iconColors.length];
            return (
              <BlurFade key={step.number} delay={0.1 + index * 0.1}>
                <Card className="h-full text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm relative">
                  <CardHeader className="pb-4">
                    <div className={cn(
                      "w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 relative z-10",
                      iconColor
                    )}>
                      <Icon className="h-10 w-10" />
                    </div>
                    <div className="text-5xl font-bold text-primary/10 mb-3 group-hover:text-primary/20 transition-colors">
                      {step.number}
                    </div>
                    <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}

