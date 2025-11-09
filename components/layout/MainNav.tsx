"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
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
        items: [
          { label: "Courses", href: "/courses" },
          { label: "Corporate Training", href: "/services/training#corporate" },
          { label: "Upcoming Batches", href: "/events" },
        ],
      },
      {
        title: "Recruitment",
        items: [
          { label: "Post a Job", href: "/services/recruitment#post-job" },
          { label: "View Jobs", href: "/jobs" },
          { label: "For Employers", href: "/services/recruitment#employers" },
        ],
      },
      {
        title: "Education",
        items: [
          { label: "View Partners", href: "/services/education#partners" },
          { label: "Become a Partner", href: "/contact" },
        ],
      },
      {
        title: "Project Management",
        items: [
          { label: "View Portfolio", href: "/projects" },
          { label: "Request Quote", href: "/contact" },
        ],
      },
    ],
  },
  { label: "Placements", href: "/placements" },
  { label: "Projects", href: "/projects" },
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
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200",
        isScrolled ? "h-16" : "h-20"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">Advatech</span>
              <span className="text-xs text-muted-foreground">HR & Training</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => {
                  if (item.submenu) {
                    return (
                      <NavigationMenuItem key={item.label}>
                        <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-[600px] grid-cols-4 gap-4 p-6">
                            {item.submenu.map((section, idx) => (
                              <div key={idx} className="space-y-2">
                                <h4 className="font-semibold text-sm">{section.title}</h4>
                                <ul className="space-y-1">
                                  {section.items.map((subItem) => (
                                    <li key={subItem.label}>
                                      <NavigationMenuLink asChild>
                                        <Link
                                          href={subItem.href}
                                          className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                          {subItem.label}
                                        </Link>
                                      </NavigationMenuLink>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
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
                          className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
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
            <Button variant="outline" size="sm" asChild>
              <Link href="tel:+919876543210">
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline">Call</span>
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/register">Register / Apply</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className="block py-2 text-lg font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((section) =>
                          section.items.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="block py-1 text-sm text-muted-foreground"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t space-y-2">
                  <Button className="w-full" asChild>
                    <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                      Register / Apply
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="tel:+919876543210" onClick={() => setMobileMenuOpen(false)}>
                      <Phone className="h-4 w-4 mr-2" />
                      Call Us
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="https://wa.me/919876543210" onClick={() => setMobileMenuOpen(false)}>
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

