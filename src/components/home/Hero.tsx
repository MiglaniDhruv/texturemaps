"use client";

import Container from "@/style/Container";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Allura } from "next/font/google";

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allura"
});

const carouselImages = [
  { src: "/images/p1.png", alt: "Page 1 - 3D Garment on Digital Avatar" },
  { src: "/images/p2.png", alt: "Page 2 - Construction Details" },
  { src: "/images/p3.png", alt: "Page 3 - Line Sheet" },
  { src: "/images/p4.png", alt: "Page 4 - Bill of Material" },
  { src: "/images/p5.png", alt: "Page 5 - Label & Tag Placement" },
  { src: "/images/p6.png", alt: "Page 6 - Proto Measurement" },
  { src: "/images/p7.png", alt: "Page 7 - Graded Measurement" },
];

const visualizationImages = [
  {
    src: "/services/fashion-design/10.png",
    alt: "White polo garment visualization",
  },
  {
    src: "/services/fashion-design/9.png",
    alt: "White hoodie garment visualization",
  },
  {
    src: "/services/fashion-design/4.png",
    alt: "Blue dress garment visualization",
  },
];

const infiniteImages = [
  carouselImages[carouselImages.length - 1],
  ...carouselImages,
  carouselImages[0],
];

const DPadIcon = () => (
  <svg
    aria-hidden="true"
    className="inline-block h-4 w-4 shrink-0"
    style={{ verticalAlign: "text-top", transform: "translateY(-0.1em)" }}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="9" y="1" width="6" height="6" transform="rotate(45 12 4)" fill="white" />
    <rect x="1" y="9" width="6" height="6" transform="rotate(45 4 12)" fill="white" />
    <rect x="17" y="9" width="6" height="6" transform="rotate(45 20 12)" fill="white" />
    <rect x="9" y="17" width="6" height="6" transform="rotate(45 12 20)" fill="white" />
  </svg>
);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const transitioning = useRef(false);

  const goTo = (index: number) => {
    if (transitioning.current) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  const handlePrev = () => goTo(currentIndex - 1);
  const handleNext = () => goTo(currentIndex + 1);

  const handleTransitionEnd = () => {
    transitioning.current = false;
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(carouselImages.length);
    } else if (currentIndex === infiniteImages.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
  };

  const handleTransitionStart = () => {
    transitioning.current = true;
  };

  const realIndex =
    currentIndex === 0
      ? carouselImages.length - 1
      : currentIndex === infiniteImages.length - 1
        ? 0
        : currentIndex - 1;

  return (
    <section className="relative w-full mt-24 sm:mt-10 md:mt-20 lg:mt-24">
      <Container>
        <div className="w-full flex flex-col justify-center items-center text-center">

          {/* MAIN HEADING - matched to screenshot reference */}
          <h1
            className="font-semibold text-[#1976D8] leading-tight text-center px-2"
            style={{
              fontSize: "clamp(1.25rem, 5.5vw, 2.25rem)",
              letterSpacing: "0",
            }}
          >
            The Technical edge your brand{" "}
            <span
              className={`${allura.className} text-[#1A6FD4] align-baseline`}
              style={{
                fontSize: "1.75em",
                letterSpacing: "0",
              }}
            >
              Deserves
            </span>
          </h1>

          {/* SUBTITLE */}
          <h2
            className="font-semibold text-white mt-2 sm:mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:gap-3"
            style={{
              fontSize: "clamp(0.7rem, 2.2vw, 1.85rem)",
              letterSpacing: "0",
            }}
          >
            <span>Patternmaking</span>
            <DPadIcon />
            <span>2D/3D Techpack</span>
            <DPadIcon />
            <span>3D visualization</span>
            <DPadIcon />
            <span>Product Development</span>
          </h2>

          <div className="relative w-full max-w-[1400px] mt-6 sm:mt-8 md:mt-12 rounded-[26px] overflow-hidden bg-white mx-auto">
            <Image
              src="/images/women golf changes.png"
              alt="Technical expertise categories"
              width={1400}
              height={520}
              className="w-full h-auto rounded-[26px]"
            />
          </div>

          <div className="w-full max-w-[1400px] mx-auto mt-5 sm:mt-6 md:mt-8 text-left">
            <h2
              className="text-xl sm:text-2xl md:text-[30px] font-semibold text-white"
              style={{ letterSpacing: "0" }}
            >
              2D/3D Techpack:- Refer 7 pages
            </h2>
          </div>

          {/* CAROUSEL */}
          <div className="relative w-full max-w-[1400px] mx-auto mt-4 sm:mt-6 md:mt-8">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">

              {/* Slide Track */}
              <div
                className="flex w-full"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: isTransitioning ? "transform 300ms ease-in-out" : "none",
                }}
                onTransitionEnd={handleTransitionEnd}
                onTransitionStart={handleTransitionStart}
              >
                {infiniteImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative w-full flex-shrink-0 aspect-video bg-white"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 
                         bg-black/50 hover:bg-black/80 text-white 
                         rounded-full p-2 sm:p-3 transition-all duration-200
                         backdrop-blur-sm border border-white/20"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 
                         bg-black/50 hover:bg-black/80 text-white 
                         rounded-full p-2 sm:p-3 transition-all duration-200
                         backdrop-blur-sm border border-white/20"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index + 1)}
                  className={`rounded-full transition-all duration-300 ${index === realIndex
                    ? "bg-[#1A6FD4] w-6 h-2.5"
                    : "bg-white/40 hover:bg-white/70 w-2.5 h-2.5"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* PATTERNMAKING SECTION */}
          <div className="w-full max-w-[1400px] mx-auto mt-10 sm:mt-12 md:mt-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* Left column – Base Pattern */}
              <div className="flex flex-col gap-3">
                <h2
                  className="text-xl sm:text-2xl md:text-[30px] font-semibold text-white text-left"
                  style={{ letterSpacing: "0" }}
                >
                  Base Pattern
                </h2>
                <div
                  className="group relative overflow-hidden rounded-2xl bg-white border border-white/20 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-white/40 hover:shadow-[0_22px_45px_rgba(7,114,220,0.22)]"
                  style={{ aspectRatio: "16/9" }}
                >
                  <img
                    src="/images/pattern1.jpg"
                    alt="Patternmaking – garment block outline"
                    className="w-full h-full object-contain"
                    style={{
                      transform: "scale(2.1)",
                      transformOrigin: "center center",
                      transition: "transform 0.7s ease-out",
                    }}
                  />
                </div>
              </div>

              {/* Right column – Graded Pattern */}
              <div className="flex flex-col gap-3">
                <h2
                  className="text-xl sm:text-2xl md:text-[30px] font-semibold text-white text-left"
                  style={{ letterSpacing: "0" }}
                >
                  Graded Pattern
                </h2>
                <div
                  className="group relative overflow-hidden rounded-2xl bg-white border border-white/20 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-white/40 hover:shadow-[0_22px_45px_rgba(7,114,220,0.22)]"
                  style={{ aspectRatio: "16/9" }}
                >
                  <img
                    src="/images/pattern2.jpg"
                    alt="Patternmaking – graded pattern with seam allowances"
                    className="w-full h-full object-contain"
                    style={{
                      transform: "scale(1.3)",
                      transformOrigin: "center center",
                      transition: "transform 0.7s ease-out",
                    }}
                  />
                </div>
              </div>

            </div>
          </div>

          <div className="w-full max-w-[1400px] mx-auto mt-10 sm:mt-12 md:mt-10">
            <div className="flex items-center justify-between gap-4">
              <h2
                className="text-xl sm:text-2xl md:text-[30px] font-semibold text-white text-left"
                style={{ letterSpacing: "0" }}
              >
                3D visualization
              </h2>
              <span
                className="text-sm sm:text-base md:text-lg font-semibold text-[#1A6FD4] bg-[#1A6FD4]/10 border border-[#1A6FD4]/30 rounded-full px-4 py-1.5 whitespace-nowrap"
              >
                Product Development
              </span>
            </div>

            <div className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-3">
              {visualizationImages.map((image) => (
                <div
                  key={image.src}
                  className="group relative overflow-hidden rounded-2xl bg-[#031221]/40 border border-white/10 min-h-[220px] sm:min-h-[280px] lg:min-h-[380px] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_22px_45px_rgba(7,114,220,0.22)]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain p-3 sm:p-4 transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="w-full flex justify-center mt-10">
            <div className="p-2 bg-gradient-to-r from-[#031221] to-[#0C4A87] rounded-full w-full max-w-[300px]">
              <Link href="/contact">
                <Button className="w-full h-14 rounded-full text-lg uppercase bg-gradient-to-b from-[#031221] to-[#0772DC]">
                  Lets talk
                </Button>
              </Link>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
};

export default Hero;
