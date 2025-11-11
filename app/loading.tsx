import { Skeleton } from "@/components/ui/skeleton";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";

export default function Loading() {
  return (
    <>
      <MainNav />
      <main id="main-content" className="min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <Skeleton className="h-12 w-64 mx-auto" />
              <Skeleton className="h-6 w-96 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-48 w-full" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

