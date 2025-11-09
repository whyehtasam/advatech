"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BlurFade } from "@/components/ui/blur-fade";
import { FileText, GraduationCap, Briefcase } from "lucide-react";

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
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.1} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple steps to start your career journey with us
          </p>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <BlurFade key={step.number} delay={0.1 + index * 0.1}>
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary/20 mb-2">{step.number}</div>
                    <CardTitle className="text-2xl mb-2">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
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

