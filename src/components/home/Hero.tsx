"use client";

import Container from "@/style/Container";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Geologica } from "next/font/google";

const geologica = Geologica({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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

          {/* MAIN HEADING - single line, bigger */}
          <h1
            className={`${geologica.className} font-semibold text-[#1A6FD4] leading-tight text-center`}
            style={{
              fontSize: "clamp(1.8rem,2.6vw,3rem)",
              //   backgroundImage:
              //     "linear-gradient(to bottom, #4A90D9 0%, #1A6FD4 100%, #0A1628 0%)",
              //   WebkitBackgroundClip: "text",
              //   WebkitTextFillColor: "transparent",
              //   backgroundClip: "text",
            }}
          >
            Next gen 2D/3D techpack ensuring first sample perfection.
          </h1>

          {/* SUBTITLE - smaller than h1 */}
          <h2
            className={`font-semibold text-white mt-3.5 md:mt-6`}
            style={{ fontSize: "clamp(1.8rem,2.6vw,3rem)" }}
          >
            &quot;The Technical edge your brand deserves&quot;
          </h2>

          {/*Image 1 */}

          <div className="relative w-full max-w-[1400px] mt-6 sm:mt-8 md:mt-12 rounded-2xl sm:rounded-3xl overflow-hidden mx-auto">
            <img
              src="/images/main page.png"
              alt="Technical Expertise Categories"
              className="w-full h-auto"
              style={{ marginTop: "-5%", marginBottom: "-3%" }}

            />
          </div>
          <br />

          {/* IMAGE 2 */}
          <div className="relative w-full max-w-[1400px] mt-4 sm:mt-6 md:mt-10 rounded-2xl sm:rounded-3xl overflow-hidden mx-auto">
            <img
              src="/images/p8.png"
              alt="Sketch to final output"
              className="w-full h-auto"
              style={{ marginTop: "-2%", marginBottom: "-7%" }}
            />
          </div>

        </div>

        {/* "WHAT WE PROVIDE" */}
        <div className="w-full mt-20 mb-10">
          <h2
            className="font-[family-name:var(--font-montserrat)] 
                       text-2xl sm:text-3xl md:text-4xl 
                       font-semibold text-[#1A6FD4]"
          >
            What will Techpack include?
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
                  className="w-full flex-shrink-0 aspect-video bg-white"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain"
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