"use client";

import { useState } from "react";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { submitRegistration } from "@/lib/api/registration";
import { RegistrationFormData } from "@/data/types";
import { GraduationCap, Briefcase, Building2, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("course");

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState<Partial<RegistrationFormData>>({
    userType: "student",
    basicInfo: {
      name: "",
      phone: "",
      email: "",
    },
    purpose: {
      interests: [],
      courseId: courseId || undefined,
    },
    details: {
      city: "",
      education: "",
      preferredStartDate: "",
    },
    consent: {
      terms: false,
      privacy: false,
      marketing: false,
    },
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < totalSteps) {
      setStep(step + 1);
      return;
    }

    setLoading(true);
    try {
      const registrationData = formData as RegistrationFormData;
      const result = await submitRegistration(registrationData);
      setSuccess(true);
      toast.success("Registration submitted successfully!");
    } catch (error) {
      toast.error("Failed to submit registration. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => {
      const keys = field.split(".");
      if (keys.length === 1) {
        return { ...prev, [keys[0]]: value };
      } else if (keys.length === 2) {
        return {
          ...prev,
          [keys[0]]: {
            ...(prev[keys[0] as keyof typeof prev] as any),
            [keys[1]]: value,
          },
        };
      }
      return prev;
    });
  };

  const userTypes = [
    { value: "student", label: "Student", icon: GraduationCap, description: "Enroll in courses" },
    { value: "company", label: "Company", icon: Building2, description: "Corporate training" },
    { value: "employer", label: "Employer", icon: Briefcase, description: "Hire talent" },
  ];

  return (
    <>
      <MainNav />
      <main id="main-content" className="min-h-screen" aria-label="Main content">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <BlurFade delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Register Now</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of students who have transformed their careers with our training programs.
              </p>
            </BlurFade>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <Card>
              <CardHeader>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Step {step} of {totalSteps}</span>
                    <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
                <CardTitle>Registration Form</CardTitle>
                <CardDescription>
                  Fill in your details to get started. We'll guide you through each step.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {success ? (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4">
                    <CheckCircle2 className="h-16 w-16 text-success" />
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold mb-2">Registration Successful!</h3>
                      <p className="text-muted-foreground mb-6">
                        We've received your registration. Our team will contact you shortly.
                      </p>
                      <div className="flex gap-4">
                        <Button asChild>
                          <a href="/courses">Browse Courses</a>
                        </Button>
                        <Button variant="outline" asChild>
                          <a href="/contact">Contact Us</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Step 1: User Type */}
                    {step === 1 && (
                      <BlurFade delay={0.1}>
                        <div className="space-y-4">
                          <div>
                            <Label className="text-base font-semibold mb-4 block">I am a...</Label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {userTypes.map((type) => {
                                const Icon = type.icon;
                                return (
                                  <button
                                    key={type.value}
                                    type="button"
                                    onClick={() => handleChange("userType", type.value)}
                                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                                      formData.userType === type.value
                                        ? "border-primary bg-primary/5"
                                        : "border-border hover:border-primary/50"
                                    }`}
                                  >
                                    <Icon className="h-8 w-8 text-primary mb-2" />
                                    <div className="font-semibold mb-1">{type.label}</div>
                                    <div className="text-sm text-muted-foreground">{type.description}</div>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </BlurFade>
                    )}

                    {/* Step 2: Basic Info */}
                    {step === 2 && (
                      <BlurFade delay={0.1}>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              value={formData.basicInfo?.name || ""}
                              onChange={(e) => handleChange("basicInfo.name", e.target.value)}
                              placeholder="Enter your full name"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.basicInfo?.phone || ""}
                              onChange={(e) => handleChange("basicInfo.phone", e.target.value)}
                              placeholder="Enter your phone number"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.basicInfo?.email || ""}
                              onChange={(e) => handleChange("basicInfo.email", e.target.value)}
                              placeholder="Enter your email"
                              required
                            />
                          </div>
                        </div>
                      </BlurFade>
                    )}

                    {/* Step 3: Purpose & Interests */}
                    {step === 3 && (
                      <BlurFade delay={0.1}>
                        <div className="space-y-4">
                          <div>
                            <Label className="text-base font-semibold mb-4 block">What are you interested in? *</Label>
                            <div className="space-y-2">
                              {["Course", "Education", "Job", "Hiring"].map((interest) => (
                                <div key={interest} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={interest}
                                    checked={formData.purpose?.interests?.includes(interest) || false}
                                    onCheckedChange={(checked) => {
                                      const current = formData.purpose?.interests || [];
                                      if (checked) {
                                        handleChange("purpose.interests", [...current, interest]);
                                      } else {
                                        handleChange("purpose.interests", current.filter((i) => i !== interest));
                                      }
                                    }}
                                  />
                                  <Label htmlFor={interest} className="cursor-pointer">
                                    {interest}
                                  </Label>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="city">City *</Label>
                            <Input
                              id="city"
                              value={formData.details?.city || ""}
                              onChange={(e) => handleChange("details.city", e.target.value)}
                              placeholder="Enter your city"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="education">Education (Optional)</Label>
                            <Input
                              id="education"
                              value={formData.details?.education || ""}
                              onChange={(e) => handleChange("details.education", e.target.value)}
                              placeholder="Enter your education background"
                            />
                          </div>
                        </div>
                      </BlurFade>
                    )}

                    {/* Step 4: Consent & Summary */}
                    {step === 4 && (
                      <BlurFade delay={0.1}>
                        <div className="space-y-4">
                          <div>
                            <Label className="text-base font-semibold mb-4 block">Consent & Terms *</Label>
                            <div className="space-y-3">
                              <div className="flex items-start space-x-2">
                                <Checkbox
                                  id="terms"
                                  checked={formData.consent?.terms || false}
                                  onCheckedChange={(checked) => handleChange("consent.terms", checked)}
                                  required
                                />
                                <Label htmlFor="terms" className="cursor-pointer text-sm">
                                  I agree to the Terms of Service *
                                </Label>
                              </div>
                              <div className="flex items-start space-x-2">
                                <Checkbox
                                  id="privacy"
                                  checked={formData.consent?.privacy || false}
                                  onCheckedChange={(checked) => handleChange("consent.privacy", checked)}
                                  required
                                />
                                <Label htmlFor="privacy" className="cursor-pointer text-sm">
                                  I agree to the Privacy Policy *
                                </Label>
                              </div>
                              <div className="flex items-start space-x-2">
                                <Checkbox
                                  id="marketing"
                                  checked={formData.consent?.marketing || false}
                                  onCheckedChange={(checked) => handleChange("consent.marketing", checked)}
                                />
                                <Label htmlFor="marketing" className="cursor-pointer text-sm">
                                  I would like to receive updates and offers (Optional)
                                </Label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </BlurFade>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex gap-4 pt-4">
                      {step > 1 && (
                        <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                          Previous
                        </Button>
                      )}
                      <Button type="submit" className="flex-1" disabled={loading}>
                        {loading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : step < totalSteps ? (
                          <>
                            Next
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        ) : (
                          "Submit Registration"
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}

