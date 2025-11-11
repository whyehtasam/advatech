"use client";

import { useState, useMemo } from "react";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import Image from "next/image";
import { galleryImages, GalleryImage } from "@/data/gallery";
import { cn } from "@/lib/utils";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filterOptions = useMemo(() => {
    const categories = Array.from(new Set(galleryImages.map((img) => img.category)));
    return [...categories];
  }, []);

  const filteredImages = useMemo(() => {
    if (selectedFilter === "all") return galleryImages;
    return galleryImages.filter((image) => {
      const categoryMatch = image.category === selectedFilter;
      const typeMatch = image.type === selectedFilter.toLowerCase() || 
                       (image.type.charAt(0).toUpperCase() + image.type.slice(1)) === selectedFilter;
      return categoryMatch || typeMatch;
    });
  }, [selectedFilter]);

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
  };

  const clearFilters = () => {
    setSelectedFilter("all");
  };

  const hasActiveFilters = selectedFilter !== "all";

  // Prepare slides for lightbox
  const slides = filteredImages.map((image) => ({
    src: image.fullSize,
    alt: image.title,
    title: image.title,
    description: image.description,
  }));

  return (
    <>
      <MainNav />
      <main id="main-content" className="min-h-screen" aria-label="Main content">
        {/* Hero Section */}
        <section className="pt-12 pb-5 md:pt-16 md:pb-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.1} className="text-center mb-6 md:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Gallery</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our training sessions, projects, events, and student achievements
              </p>
            </BlurFade>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Badge Filters */}
            <div className="mb-6 md:mb-8">
              <BlurFade delay={0.1}>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Badge
                    variant={selectedFilter === "all" ? "default" : "outline"}
                    className={cn(
                      "cursor-pointer transition-all hover:scale-105 text-sm sm:text-base px-4 py-2",
                      selectedFilter === "all" && "bg-primary text-primary-foreground"
                    )}
                    onClick={() => setSelectedFilter("all")}
                  >
                    All
                  </Badge>
                  {filterOptions.map((option) => (
                    <Badge
                      key={option}
                      variant={selectedFilter === option ? "default" : "outline"}
                      className={cn(
                        "cursor-pointer transition-all hover:scale-105 text-sm sm:text-base px-4 py-2",
                        selectedFilter === option && "bg-primary text-primary-foreground"
                      )}
                      onClick={() => setSelectedFilter(option)}
                    >
                      {option}
                    </Badge>
                  ))}
                  {hasActiveFilters && (
                    <Badge
                      variant="secondary"
                      className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground transition-colors text-sm sm:text-base px-4 py-2"
                      onClick={clearFilters}
                    >
                      <X className="h-4 w-4 mr-1" />
                      Clear
                    </Badge>
                  )}
                </div>
              </BlurFade>
            </div>

            {/* Gallery Grid */}
            {filteredImages.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredImages.map((image, index) => (
                  <BlurFade key={image.id} delay={0.1 + index * 0.05}>
                    <Card
                      className="group pt-0 cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm"
                      onClick={() => handleImageClick(index)}
                    >
                      <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                        <Image
                          src={image.thumbnail}
                          alt={image.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-background/90 backdrop-blur-sm rounded-full p-3">
                            <svg
                              className="h-5 w-5 text-primary"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute top-3 left-3">
                          <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm border border-border/50 text-xs">
                            {image.category}
                          </Badge>
                        </div>
                        <div className="absolute top-3 right-3">
                          <Badge variant="outline" className="bg-background/90 backdrop-blur-sm border border-border/50 text-xs">
                            {image.type}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold !text-sm sm:!text-base mb-1 line-clamp-1">{image.title}</h3>
                        {image.description && (
                          <p className="!text-xs sm:!text-sm text-muted-foreground line-clamp-1">{image.description}</p>
                        )}
                        {image.date && (
                          <p className="!text-xs text-muted-foreground mt-2">
                            {new Date(image.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                          </p>
                        )}
                      </div>
                    </Card>
                  </BlurFade>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-base text-muted-foreground mb-4">No images found matching your filters.</p>
                <Badge
                  variant="secondary"
                  className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground transition-colors"
                  onClick={clearFilters}
                >
                  <X className="h-3 w-3 mr-1" />
                  Clear Filters
                </Badge>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />

      {/* Full Gallery Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
        plugins={[Zoom, Thumbnails]}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 100,
          pinchZoomDistanceFactor: 100,
          scrollToZoom: true,
        }}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 80,
          border: 0,
          borderRadius: 4,
          padding: 4,
          gap: 8,
        }}
      />
    </>
  );
}
