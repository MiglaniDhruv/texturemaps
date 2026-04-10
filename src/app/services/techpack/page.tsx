"use client";
import React, { useState } from "react";
import Image from "next/image";
import Container from "@/style/Container";
import { WateryReveal } from "@/style/SmoothReveal";
import { Download, PencilLine } from "lucide-react";
import bubbles from "../../../../public/images/bubbles.png";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const dropdownOptions = [
  "Pattern Making + 3D Visualization",
  "3D Techpack Creation",
];

const sampleTechpacks = [
  {
    name: "Techpack Reference-1",
    fileName: "techpack-sample-1.pdf",
  },
  {
    name: "Techpack Reference-2",
    fileName: "techpack-sample-2.pdf",
  },
];

const Page = () => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <main className="relative px-4 md:px-6 pb-20">
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
                        if (option === "Techpack Creation") {
                          setIsDropdownOpen(false);
                        } else if (
                          option === "Pattern Making + 3D Visualization"
                        ) {
                          router.push("/services?fashion-design");
                        } else if (option === "E-commerce Imagery") {
                          router.push("/services?ecom-imagery");
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

      <div className="mt-16 sm:mt-20 md:mt-24 z-10">
        <Container>
          <WateryReveal>
            <div className="w-full flex flex-col items-center text-center mb-10">
              <div className="relative p-1 bg-linear-to-r from-[#031221] to-[#0C4A87] rounded-full w-full max-w-[400px]">
                <div className="py-2 px-4 text-center bg-linear-to-b from-[#031221] to-[#0772DC] uppercase w-full rounded-full">
                  <h1 className="font-semibold text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
                    3D Techpack Creation
                  </h1>
                  <p className="font-bold text-[#ACACAC] text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] mt-0.5">
                    Production-ready techpacks for manufacturers
                  </p>
                </div>
              </div>
            </div>
          </WateryReveal>

          <WateryReveal>
            <div className="relative w-full max-w-4xl mx-auto mb-14 bg-linear-to-b from-[#081E35] to-[#113760] rounded-2xl sm:rounded-3xl overflow-hidden">
              <Image
                src={bubbles}
                alt=""
                width={250}
                height={250}
                className="absolute -left-8 top-5 max-w-[120px] md:max-w-[180px] opacity-40 pointer-events-none"
              />
              <Image
                src={bubbles}
                alt=""
                width={250}
                height={250}
                className="absolute -right-8 bottom-5 max-w-[120px] md:max-w-[180px] opacity-40 pointer-events-none scale-x-[-1]"
              />

              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 p-6 sm:p-8 md:p-10">
                <div className="flex-1 text-center lg:text-left">
                  <p className="text-[#D9D9D9] text-base md:text-lg leading-relaxed">
                    A techpack is the blueprint of your garment — every detail
                    manufacturers need to produce your design accurately.
                    Measurements, construction specs, materials, trims.
                  </p>
                  <p className="text-[#D9D9D9] text-base md:text-lg leading-relaxed mt-4">
                    We create production-ready documentation that reduces
                    sampling errors and speeds up your timeline.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Image
                    src="/images/tech_pack_creation.png"
                    alt="Techpack"
                    width={280}
                    height={280}
                    className="w-[200px] sm:w-[240px] md:w-[280px] aspect-square object-contain rounded-xl border border-[#0772DC]/30"
                  />
                </div>
              </div>
            </div>
          </WateryReveal>

          {/* <WateryReveal>
            <div className="w-full max-w-4xl mx-auto mb-14">
              <h2 className="text-[#0772DC] font-bold text-xl md:text-2xl text-center mb-6">
                Techpack References
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sampleTechpacks.map((techpack, index) => (
                  <a
                    key={index}
                    href={`/downloads/${techpack.fileName}`}
                    download
                    className="flex items-center justify-between p-5 bg-[#081E35] rounded-xl border border-[#0772DC]/20 hover:border-[#0772DC]/50 transition-all duration-200 group"
                  >
                    <span className="text-white font-medium text-sm md:text-base">
                      {techpack.name}
                    </span>
                    <Download className="w-5 h-5 text-[#0772DC] group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </WateryReveal> */}
        </Container>
      </div>
    </main>
  );
};

export default Page;
