"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/style/Container";
import Image from "next/image";
import { PencilLine } from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { service_data } from "../../../jsons/service-data";
import HeroCommon from "@/style/HeroCommon";
import { WateryReveal } from "@/style/SmoothReveal";

const dropdownOptions = [
  "Pattern Making + Grading + 3D Visualization",
  "3D Techpack Creation",
  // "Prints",
  // "Graphics",
  // "E-commerce Imagery",
];

const Page = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(dropdownOptions[0]);

  useEffect(() => {
    if (!pathname) return;

    if (searchParams.has("fashion-design")) {
      setSelectedCategory("Pattern Making + Grading + 3D Visualization");
    } else if (searchParams.has("prints")) {
      setSelectedCategory("Prints");
    } else if (searchParams.has("graphics")) {
      setSelectedCategory("Graphics");
    } else if (searchParams.has("techpack-creation")) {
      setSelectedCategory("3D Techpack Creation");
    } else if (searchParams.has("ecom-imagery")) {
      setSelectedCategory("E-commerce Imagery");
    } else if (searchParams.has("virtual-physical-fitting")) {
      setSelectedCategory("Virtual/Physical Fitting");
    }
  }, [pathname]);

  const currentServiceData = service_data.find(
    (item) =>
      item.service_name === selectedCategory ||
      (selectedCategory === "3D Techpack Creation" &&
        item.service_name === "3D Techpack Creations"),
  );

  const displayImages = currentServiceData
    ? currentServiceData.serviceImages
    : [];

  return (
    <main className="relative px-4 md:px-6 pb-20">
      <div className="mt-10 sm:mt-5 translate-y-0 md:mt-12 z-10 pb-6">
        {/* <HeroCommon title="Our Services" /> */}
      </div>
      <Container>
        <div className="w-full flex flex-col gap-y-1.5 justify-center items-center text-center  p-4 md:p-6 rounded-xl md:rounded-2xl lg:rounded-3xl backdrop-blur-lg">
          <WateryReveal>
            <div className="w-full flex justify-center items-center">
              <div className="relative p-1 bg-linear-to-r from-[#031221] to-[#0C4A87] rounded-full w-full max-w-[720px]">
                <div className="py-3 px-6 text-center bg-linear-to-b from-[#031221] to-[#0772DC] uppercase w-full rounded-full">
                  <h1 className="font-semibold text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
                    {currentServiceData
                      ? currentServiceData.service_name
                      : selectedCategory}
                  </h1>
                  <h3 className="font-bold text-[#ACACAC] text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px]">
                    {currentServiceData ? currentServiceData.service_desc : ""}
                  </h3>
                </div>
              </div>
            </div>
          </WateryReveal>
        </div>
      </Container>

      {/* Dropdown Button */}
      <div className="fixed right-5 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end">
        <div className="absolute right-0 md:right-4 top-0 flex flex-col items-end">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`flex items-center justify-center p-3.5 rounded-full border transition-all duration-300 ${isDropdownOpen ? "bg-[#0772DC] border-[#0772DC] text-white shadow-[0_0_15px_#0772DC]" : "bg-black/80 border-white/20 text-white hover:bg-white/5"} cursor-pointer shadow-[1px_1px_16px_#0772dc]`}
          >
            <PencilLine className="h-3 sm:h-3.5 md:h-4 w-auto" />
          </button>
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="mt-3 w-64 origin-top-right rounded-xl bg-[#031221]/90 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden ring-1 ring-black/5"
              >
                <div className="flex flex-col p-1.5">
                  {dropdownOptions.map((option, index) => (
                    <button
                      key={index}
                      className="group flex w-full items-center rounded-lg px-3 py-2.5 text-sm text-gray-200 hover:bg-[#0772DC] hover:text-white transition-colors duration-200 text-left cursor-pointer"
                      onClick={() => {
                        if (option === "3D Techpack Creation") {
                          router.push("/services/techpack");
                        } else {
                          setSelectedCategory(option);
                        }
                        setIsDropdownOpen(false);
                      }}
                    >
                      <span className="font-medium">{option}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <Container>
        {displayImages.length > 0 ? (
          <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 mt-8 md:mt-10">
            {displayImages.map((imgSrc, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden bg-[#031221]/40 backdrop-blur-lg transition-all duration-300"
              >
                <div className="absolute top-[8%] bottom-[8%] left-0 right-0 border border-white/15 rounded-2xl pointer-events-none transition-all duration-300 group-hover:border-white/35" />
                <WateryReveal>
                  <div className="relative w-full aspect-4/5 overflow-hidden">
                    <Image
                      src={imgSrc}
                      alt="Product Image"
                      width={800}
                      height={1000}
                      className="w-full h-full object-contain transition-transform duration-700 ease-in-out group-hover:scale-105"
                      style={
                        selectedCategory == "Prints" ||
                        selectedCategory == "Graphics"
                          ? { objectFit: "cover" }
                          : { objectFit: "contain" }
                      }
                    />
                  </div>
                </WateryReveal>
              </div>
            ))}
          </section>
        ) : (
          <div className="w-full flex justify-center items-center py-20">
            <p className="text-white/60 text-lg md:text-xl font-medium">
              No results found.
            </p>
          </div>
        )}
      </Container>
    </main>
  );
};

export default Page;
