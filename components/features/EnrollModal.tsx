"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
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
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Enroll in {course.title}</DialogTitle>
          <DialogDescription>
            Fill in your details to enroll in this course. We'll contact you soon!
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <CheckCircle2 className="h-16 w-16 text-success" />
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Registration Successful!</h3>
              <p className="text-sm text-muted-foreground">
                We've received your enrollment request. Our team will contact you shortly.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">City *</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
                placeholder="Enter your city"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Any questions or special requirements?"
                rows={3}
              />
            </div>

            <div className="pt-4 space-y-2">
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Enrollment"
                )}
              </Button>
              <Button type="button" variant="outline" className="w-full" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

