"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

// Replace these with your actual company logos
const companyLogos = [
  {
    name: "Tech Corp",
    logo: "https://via.placeholder.com/200x100/1e3a8a/ffffff?text=Tech+Corp",
  },
  {
    name: "Global Events",
    logo: "https://via.placeholder.com/200x100/1e3a8a/ffffff?text=Global+Events",
  },
  {
    name: "Innovation Ltd",
    logo: "https://via.placeholder.com/200x100/1e3a8a/ffffff?text=Innovation+Ltd",
  },
  {
    name: "Business Hub",
    logo: "https://via.placeholder.com/200x100/1e3a8a/ffffff?text=Business+Hub",
  },
  {
    name: "Creative Solutions",
    logo: "https://via.placeholder.com/200x100/1e3a8a/ffffff?text=Creative+Solutions",
  },
  {
    name: "Enterprise Co",
    logo: "https://via.placeholder.com/200x100/1e3a8a/ffffff?text=Enterprise+Co",
  },
  {
    name: "Digital World",
    logo: "https://via.placeholder.com/200x100/1e3a8a/ffffff?text=Digital+World",
  },
  {
    name: "Success Partners",
    logo: "https://via.placeholder.com/200x100/1e3a8a/ffffff?text=Success+Partners",
  },
  {
    name: "Prime Groups",
    logo: "https://via.placeholder.com/200x100/1e3a8a/ffffff?text=Prime+Groups",
  },
  {
    name: "Elite Events",
    logo: "https://via.placeholder.com/200x100/1e3a8a/ffffff?text=Elite+Events",
  },
];

export default function ClientsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section className="py-20 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
            Trusted By Leading Organizations
          </h2>
          <p className="text-gray-600 text-lg">
            We've had the privilege of working with amazing companies
          </p>
        </div>

        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {companyLogos.map((company, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5"
              >
                <div className="flex items-center justify-center h-32 bg-gray-50 rounded-lg border-2 border-gray-100 hover:border-amber-400 hover:shadow-lg transition-all duration-300 p-6 grayscale hover:grayscale-0">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Infinite loop effect - duplicate for seamless scrolling */}
        <div className="mt-4 overflow-hidden">
          <div className="flex animate-scroll">
            {[...companyLogos, ...companyLogos].map((company, index) => (
              <div
                key={index}
                className="shrink-0 w-48 h-24 mx-4 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200 p-4 grayscale hover:grayscale-0 transition-all"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
