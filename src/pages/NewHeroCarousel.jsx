import React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

import hero1 from "../assets/services/homecare.png";
import hero2 from "../assets/services/image7.png";
import hero3 from "../assets/services/image1.png";
import { Link } from "react-router-dom";

export default function NewHeroCarousel() {
  const slides = [
    {
      image: hero1,
      title: "24hrs Healthcare Ltd",
      subtitle: "Providing care with compassion.",
      button: "Contact us today",
      path: "/contact",
    },
    {
      image: hero2,
      title: "Join Our Team",
      subtitle: "Amazing opportunities for carers & support staff.",
      button: "APPLY NOW",
      path: "/jobs",
    },
    {
      image: hero3,
      title: "Need Reliable Staff?",
      subtitle: "We provide trained caregivers 24/7.",
      button: "GET STAFF",
      path: "/contact",
    },
  ];

  return (
    <div className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">

      <Carousel
        className="h-full"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 3000 })]}
      >
        <CarouselContent>
          {slides.map((slide, i) => (
            <CarouselItem key={i}>
              <div className="relative w-full h-[80vh] md:h-[90vh]">

                <img
                  src={slide.image}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-white/40" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <h1 className="text-3xl md:text-5xl font-bold text-white/60 mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-black/60 font-medium mb-4">
                    {slide.subtitle}
                  </p>
                  <Link to={slide.path}>
                  <button className="bg-[#009EE3] text-white px-8 py-3 rounded-full">
                    {slide.button}
                  </button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </div>
  );
}
