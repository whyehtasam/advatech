"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle, GraduationCap, Users, School, Briefcase, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  {
    label: "Services",
    href: "/services",
    submenu: [
      {
        title: "Training",
        icon: GraduationCap,
        description: "Professional training programs",
        href: "/services/training",
        items: [
          { label: "Courses", href: "/courses" },
          { label: "Corporate Training", href: "/services/training#corporate" },
          { label: "Upcoming Batches", href: "/events" },
        ],
      },
      {
        title: "Recruitment",
        icon: Users,
        description: "Connect talent with companies",
        href: "/services/recruitment",
        items: [
          { label: "Post a Job", href: "/services/recruitment#post-job" },
          { label: "View Jobs", href: "/jobs" },
          { label: "For Employers", href: "/services/recruitment#employers" },
        ],
      },
      {
        title: "Education",
        icon: School,
        description: "Partnership programs",
        href: "/services/education",
        items: [
          { label: "Programs", href: "/services/education#courses" },
          { label: "View Partners", href: "/services/education#partners" },
          { label: "Become a Partner", href: "/contact" },
        ],
      },
      {
        title: "Project Management",
        icon: Briefcase,
        description: "End-to-end project solutions",
        href: "/services/project-management",
        items: [
          { label: "View Portfolio", href: "/projects" },
          { label: "Request Quote", href: "/contact" },
        ],
      },
    ],
  },
  { label: "Placements", href: "/placements" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Notices", href: "/notices" },
  { label: "Contact", href: "/contact" },
];

export function MainNav() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 transition-all duration-300 shadow-sm",
        isScrolled && "shadow-md"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn("flex h-full items-center justify-between transition-all duration-300", isScrolled ? "h-16" : "h-20")}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={cn("flex flex-col transition-all duration-300", isScrolled ? "gap-0" : "gap-0.5")}>
              <span className={cn("font-bold text-primary transition-all duration-300", isScrolled ? "text-lg" : "text-xl")}>
                Advatech
              </span>
              <span className={cn("text-muted-foreground transition-all duration-300", isScrolled ? "text-[10px]" : "text-xs")}>
                HR & Training
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {navItems.map((item) => {
                  if (item.submenu) {
                    return (
                      <NavigationMenuItem key={item.label}>
                        <NavigationMenuTrigger className="h-10 px-4 text-sm font-medium ">
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-[calc(100vw-2rem)] sm:w-[700px]  p-6 lg:p-8 bg-card   rounded-lg">
                            <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
                              {item.submenu.map((section, idx) => {
                                const Icon = section.icon || Briefcase;
                                return (
                                  <div key={idx} className="group/section">
                                    {/* Header with Icon - Now Clickable */}
                                    <Link
                                      href={section.href || "/services"}
                                      className="flex items-start gap-3 mb-4 cursor-pointer"
                                    >
                                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover/section:from-primary/20 group-hover/section:to-accent/20 transition-all duration-200 flex-shrink-0 shadow-sm">
                                        <Icon className="h-5 w-5 text-primary group-hover/section:scale-110 transition-transform duration-200" />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="font-semibold text-sm lg:text-base text-foreground leading-tight mb-1 group-hover/section:text-primary transition-colors whitespace-nowrap">
                                          {section.title}
                                        </h4>
                                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                                          {section.description}
                                        </p>
                                      </div>
                                    </Link>
                                    {/* Menu Items */}
                                    <ul className="space-y-1 mt-4">
                                      {section.items.map((subItem) => (
                                        <li key={subItem.label} className="text-left">
                                          <NavigationMenuLink asChild>
                                            <Link
                                              href={subItem.href}
                                              className="group/link !flex !items-center !justify-start text-left gap-2 text-xs lg:text-sm text-muted-foreground hover:text-foreground transition-all duration-200 rounded-md px-0 py-1.5 lg:py-2 hover:bg-sky-500/20 hover:translate-x-1"
                                            >
                                              <div className="flex items-start justify-start text-start w-full gap-2 px-4">
                                                <span className="text-left w-full text-start">{subItem.label}</span>
                                                <ChevronRight className="h-3 w-3 lg:h-3.5 lg:w-3.5 opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all duration-200 flex-shrink-0" />
                                              </div>
                                            </Link>
                                          </NavigationMenuLink>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                );
                              })}
                            </div>
                            {/* Footer CTA */}
                            <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-border/50">
                              <Link
                                href="/services"
                                className="flex items-center justify-between group/cta text-xs lg:text-sm font-medium text-primary hover:text-primary/80 transition-colors px-2"
                              >
                                <span>View All Services</span>
                                <ChevronRight className="h-3.5 w-3.5 lg:h-4 lg:w-4 group-hover/cta:translate-x-1 transition-transform" />
                              </Link>
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  }
                  return (
                    <NavigationMenuItem key={item.label}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="group relative inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-200"
            >
              <Link href="tel:+919876543210" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline">Call</span>
              </Link>
            </Button>
            <Button
              size="sm"
              asChild
              className="shadow-primary hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
            >
              <Link href="/register">Register / Apply</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[400px] p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-col">
                      <span className="text-xl font-bold text-primary">Advatech</span>
                      <span className="text-xs text-muted-foreground">HR & Training</span>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <nav className="flex-1 overflow-y-auto p-6 space-y-1">
                  {navItems.map((item) => (
                    <div key={item.label} className="space-y-1">
                      <Link
                        href={item.href}
                        className="flex items-center justify-between py-3 px-4 text-base font-medium rounded-lg hover:bg-accent/50 transition-colors"
                        onClick={() => !item.submenu && setMobileMenuOpen(false)}
                      >
                        <span>{item.label}</span>
                        {item.submenu && (
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        )}
                      </Link>
                      {item.submenu && (
                        <div className="ml-4 mt-2 space-y-1 border-l-2 border-border/50 pl-4">
                          {item.submenu.map((section) => {
                            const Icon = section.icon || Briefcase;
                            return (
                              <div key={section.title} className="space-y-2 mb-4">
                                <Link
                                  href={section.href || "/services"}
                                  className="flex items-center gap-2 mt-4 mb-2 hover:text-primary transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  <Icon className="h-4 w-4 text-primary" />
                                  <h4 className="font-semibold text-sm text-foreground">{section.title}</h4>
                                </Link>
                                {section.items.map((subItem) => (
                                  <Link
                                    key={subItem.label}
                                    href={subItem.href}
                                    className="flex items-center gap-2 py-2 px-3 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-accent/30 transition-all duration-200"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    <ChevronRight className="h-3 w-3" />
                                    <span>{subItem.label}</span>
                                  </Link>
                                ))}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
                <div className="p-6 border-t space-y-3 bg-muted/30">
                  <Button className="w-full shadow-primary hover:shadow-lg hover:scale-[1.02] transition-all duration-200" asChild>
                    <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                      Register / Apply
                    </Link>
                  </Button>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href="tel:+919876543210" onClick={() => setMobileMenuOpen(false)}>
                        <Phone className="h-4 w-4 mr-2" />
                        Call
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href="https://wa.me/919876543210" onClick={() => setMobileMenuOpen(false)}>
                        <MessageCircle className="h-4 w-4 mr-2" />
                        WhatsApp
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

