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
import { Phone, Mail, MapPin, MessageCircle, Send, Loader2 } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import Link from "next/link";
import { toast } from "sonner";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Message sent successfully! We'll contact you soon.");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <MainNav />
      <main id="main-content" className="min-h-screen" aria-label="Main content">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <BlurFade delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have questions? We're here to help. Get in touch with us and we'll respond as soon as possible.
              </p>
            </BlurFade>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <BlurFade delay={0.1}>
                <Card>
                  <CardHeader>
                    <Phone className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Phone</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">Call us for immediate assistance</p>
                    <Button variant="outline" asChild>
                      <Link href="tel:+919876543210">+91 98765 43210</Link>
                    </Button>
                  </CardContent>
                </Card>
              </BlurFade>
              <BlurFade delay={0.2}>
                <Card>
                  <CardHeader>
                    <Mail className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Email</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">Send us an email</p>
                    <Button variant="outline" asChild>
                      <Link href="mailto:info@advatech.com">info@advatech.com</Link>
                    </Button>
                  </CardContent>
                </Card>
              </BlurFade>
              <BlurFade delay={0.3}>
                <Card>
                  <CardHeader>
                    <MessageCircle className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>WhatsApp</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">Chat with us on WhatsApp</p>
                    <Button variant="outline" asChild>
                      <Link href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                        Start Chat
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </BlurFade>
            </div>

            {/* Contact Form & Address */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <BlurFade delay={0.1}>
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
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
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => handleChange("subject", e.target.value)}
                          placeholder="What is this regarding?"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          placeholder="Tell us more about your inquiry..."
                          rows={5}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </BlurFade>

              <BlurFade delay={0.2}>
                <Card>
                  <CardHeader>
                    <CardTitle>Visit Us</CardTitle>
                    <CardDescription>Our office location and business hours</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex items-start gap-3 mb-3">
                        <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold mb-1">Address</div>
                          <p className="text-sm text-muted-foreground">
                            Mumbai, Maharashtra, India
                            <br />
                            Near Business District
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold mb-3">Business Hours</div>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Monday - Friday</span>
                          <span>9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday</span>
                          <span>10:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday</span>
                          <span>Closed</span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="font-semibold mb-3">Quick Actions</div>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <Link href="/register">
                            Register for Course
                          </Link>
                        </Button>
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <Link href="/courses">
                            Browse Courses
                          </Link>
                        </Button>
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <Link href="/placements">
                            View Placements
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}

