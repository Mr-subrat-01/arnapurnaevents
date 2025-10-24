"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Filter } from "lucide-react";
import Image from "next/image";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Weddings",
    "Birthdays",
    "Corporate",
    "DJ Nights",
    "House Warming",
    "Others",
  ];

  // Replace with your actual images
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1519167758495-8a1e0f743b4e?w=800",
      category: "Weddings",
      title: "Elegant Wedding Setup",
    },
    {
      src: "https://images.unsplash.com/photo-1530023367847-a683933f4172?w=800",
      category: "Weddings",
      title: "Wedding Decoration",
    },
    {
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800",
      category: "Birthdays",
      title: "Birthday Celebration",
    },
    {
      src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
      category: "Birthdays",
      title: "Kids Party",
    },
    {
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
      category: "Corporate",
      title: "Corporate Event",
    },
    {
      src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
      category: "Corporate",
      title: "Conference Setup",
    },
    {
      src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
      category: "DJ Nights",
      title: "DJ Night Party",
    },
    {
      src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
      category: "DJ Nights",
      title: "Music Event",
    },
    {
      src: "https://images.unsplash.com/photo-1519167758481-83f29c1a3842?w=800",
      category: "House Warming",
      title: "House Warming Ceremony",
    },
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
      category: "Others",
      title: "Anniversary Party",
    },
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
      category: "Weddings",
      title: "Wedding Reception",
    },
    {
      src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800",
      category: "Birthdays",
      title: "Theme Party",
    },
  ];

  const filteredImages =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-sky-50">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-amber-500/20 text-amber-300 border-amber-500/50 text-sm">
              <Camera className="w-4 h-4 mr-2" />
              Our Work
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Gallery of
              <span className="block mt-2 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Memorable Moments
              </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Explore our portfolio of beautifully executed events. Each
              celebration tells a unique story crafted with dedication and
              creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Filter className="w-5 h-5 text-gray-600" />
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveFilter(category)}
                variant={activeFilter === category ? "default" : "outline"}
                className={`${
                  activeFilter === category
                    ? "bg-gradient-to-r from-blue-900 to-blue-700 text-white"
                    : "hover:border-amber-400"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredImages.length === 0 ? (
            <div className="text-center py-20">
              <Camera className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600 text-lg">
                No images found in this category
              </p>
            </div>
          ) : (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {filteredImages.map((image, index) => (
                <Card
                  key={index}
                  className="break-inside-avoid group overflow-hidden border-2 border-gray-100 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 cursor-pointer py-0"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <Badge className="mb-2 bg-amber-500 text-white">
                          {image.category}
                        </Badge>
                        <h3 className="text-white font-bold text-lg">
                          {image.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center border-2 border-blue-100 hover:border-amber-400 transition">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <p className="text-gray-600">Events Captured</p>
            </Card>
            <Card className="p-6 text-center border-2 border-purple-100 hover:border-amber-400 transition">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-900 to-purple-700 bg-clip-text text-transparent mb-2">
                10K+
              </div>
              <p className="text-gray-600">Photos Taken</p>
            </Card>
            <Card className="p-6 text-center border-2 border-amber-100 hover:border-amber-400 transition">
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-900 to-amber-700 bg-clip-text text-transparent mb-2">
                450+
              </div>
              <p className="text-gray-600">Happy Clients</p>
            </Card>
            <Card className="p-6 text-center border-2 border-teal-100 hover:border-amber-400 transition">
              <div className="text-4xl font-bold bg-gradient-to-r from-teal-900 to-teal-700 bg-clip-text text-transparent mb-2">
                5+
              </div>
              <p className="text-gray-600">Years Experience</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-linear-to-br from-blue-900 via-blue-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Want Your Event Featured Here?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let us create beautiful memories for your next celebration
          </p>
          <a href="/contact">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-lg shadow-amber-500/50"
            >
              Plan Your Event
            </Button>
          </a>
        </div>
      </section> */}
    </div>
  );
}
