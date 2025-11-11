import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Search } from "lucide-react";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <MainNav />
      <main id="main-content" className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="max-w-md w-full text-center">
          <CardHeader>
            <div className="text-6xl font-bold text-primary mb-4">404</div>
            <CardTitle className="text-2xl">Page Not Found</CardTitle>
            <CardDescription>
              The page you're looking for doesn't exist or has been moved.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="flex-1">
                <Link href="/">
                  <Home className="h-4 w-4 mr-2" />
                  Go Home
                </Link>
              </Button>
              <Button variant="outline" asChild className="flex-1">
                <Link href="/courses">
                  <Search className="h-4 w-4 mr-2" />
                  Browse Courses
                </Link>
              </Button>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground mb-2">Popular pages:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Link href="/courses" className="text-sm text-primary hover:underline">
                  Courses
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link href="/services" className="text-sm text-primary hover:underline">
                  Services
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link href="/placements" className="text-sm text-primary hover:underline">
                  Placements
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link href="/contact" className="text-sm text-primary hover:underline">
                  Contact
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
}

