"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Course } from "@/data/types";
import { submitRegistration } from "@/lib/api/registration";
import { CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface EnrollModalProps {
  course: Course;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EnrollModal({ course, open, onOpenChange }: EnrollModalProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const registrationData = {
        userType: "student" as const,
        basicInfo: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
        },
        purpose: {
          interests: ["Course"],
          courseId: course.id,
        },
        details: {
          city: formData.city,
        },
        consent: {
          terms: true,
          privacy: true,
        },
      };

      const result = await submitRegistration(registrationData);
      setSuccess(true);
      toast.success("Registration submitted successfully!");
      setTimeout(() => {
        onOpenChange(false);
        setStep(1);
        setSuccess(false);
        setFormData({ name: "", phone: "", email: "", city: "", message: "" });
      }, 2000);
    } catch (error) {
      toast.error("Failed to submit registration. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[520px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-4 border-b border-border/50">
          <DialogTitle className="text-lg sm:text-xl font-semibold">Enroll in {course.title}</DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-muted-foreground mt-1.5">
            Fill in your details to enroll in this course. We'll contact you soon!
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="flex flex-col items-center justify-center py-8 sm:py-10 space-y-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-success/10 flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 sm:h-10 sm:w-10 text-success" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-base sm:text-lg font-semibold">Registration Successful!</h3>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-sm">
                We've received your enrollment request. Our team will contact you shortly.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <Label htmlFor="name" className="text-xs sm:text-sm font-medium">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Enter your full name"
                className="h-10 sm:h-11 text-sm"
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="phone" className="text-xs sm:text-sm font-medium">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="Enter your phone number"
                className="h-10 sm:h-11 text-sm"
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs sm:text-sm font-medium">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Enter your email"
                className="h-10 sm:h-11 text-sm"
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="city" className="text-xs sm:text-sm font-medium">City *</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
                placeholder="Enter your city"
                className="h-10 sm:h-11 text-sm"
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="message" className="text-xs sm:text-sm font-medium">Message <span className="text-muted-foreground font-normal">(Optional)</span></Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Any questions or special requirements?"
                rows={3}
                className="text-sm resize-none"
              />
            </div>

            <div className="pt-2 space-y-2.5">
              <Button type="submit" className="w-full h-10 sm:h-11 text-sm sm:text-base" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Enrollment"
                )}
              </Button>
              <Button type="button" variant="outline" className="w-full h-10 sm:h-11 text-sm sm:text-base" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

