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
    <section className="relative w-full mt-12 sm:mt-10 md:mt-20 lg:mt-24">
      <Container>
        <div className="w-full flex flex-col justify-center items-center text-center">

          {/* MAIN HEADING - matched to screenshot reference */}
          <h1
            className="font-semibold text-[#1976D8] leading-none text-center whitespace-nowrap"
            style={{
              fontSize: "clamp(1.45rem, 2.25vw, 2.8rem)",
              letterSpacing: "0",
            }}
          >
            "The Technical edge your brand{" "}
            <span
              className={`${allura.className} text-[#1A6FD4] align-baseline`}
              style={{
                fontSize: "1.90em",
                letterSpacing: "0",
              }}
            >
              Deserves
            </span>
          </h1>

          {/* SUBTITLE - matched to screenshot reference */}
          <h2
            className="font-semibold text-white mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            style={{
              fontSize: "clamp(1.05rem, 1.85vw, 2.18rem)",
              letterSpacing: "0",
            }}
          >
            <span>Patternmaking</span>
            <DPadIcon />
            <span>2D/3D Techpack</span>
            <DPadIcon />
            <span>3D visualization</span>
          </h2>

          <div className="relative w-full max-w-[1400px] mt-6 sm:mt-8 md:mt-12 rounded-2xl sm:rounded-3xl overflow-hidden bg-white mx-auto">
            <Image
              src="/images/hero3.png"
              alt="Technical expertise categories"
              width={1400}
              height={520}
              className="w-full h-auto"
            />
          </div>

          {/* PROCESS HEADING */}
          <div className="w-full my-4 sm:my-6 md:my-8 text-left">
            <h2
              className="text-base sm:text-lg md:text-2xl 
                         font-semibold text-[#1A6FD4]"
            >
              What is the process or workflow for techpack creation?
            </h2>
          </div>

          <div className="w-full max-w-[1400px] mx-auto rounded-2xl bg-white">
            <Image
              src="/images/hero4.png"
              alt="Sketch or inspiration image examples"
              width={1400}
              height={520}
              className="w-full h-auto rounded-2xl"
            />
          </div>

        </div>

        {/* "WHAT WE PROVIDE" */}
        <div className="w-full my-4 sm:my-6 md:my-8 text-left">
          <h2
            className="text-xl sm:text-2xl md:text-2xl 
                       font-semibold text-[#1A6FD4]"
          >
            What you will get? Next generation 2D/3D techpack ensuring first sample perfection
          </h2>
          <h2
            className="text-2xl sm:text-3xl md:text-2xl 
                       font-semibold text-[#1A6FD4] mt-4 sm:mt-6 md:mt-8"
          >
            Review benefits of each page marked in <span className="text-red-500">Red</span>
          </h2>
        </div>

        {/* CAROUSEL */}
        <div className="relative w-full max-w-[1400px] mx-auto">
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

      </Container>
    </section>
  );
};

export default Hero;
