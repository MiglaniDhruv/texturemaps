import FaqAccordion from "@/components/faq/faq-accordion";
import HeroCommon from "@/style/HeroCommon";
import React from "react";
import Bubbles from "../../../public/images/bubbles.png";
import Image from "next/image";

const Page = () => {
  return (
    <main className="relative">
      <div className="px-4  translate-y-0  z-10">
        <HeroCommon title="FAQ's" />
      </div>

      {/* FAQ Accordions */}
      <div className="relative pb-[60px] sm:pb-[65px] md:pb-[70px] lg:pb-20 z-10">
        <FaqAccordion />
        <Image
          src={Bubbles}
          alt="bubbles"
          width={1000}
          height={1000}
          className="absolute right-0 -top-12 sm:-top-16 md:-top-18 lg:-top-24 -z-10 max-w-[150px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px] w-full"
        />

        <Image
          src={Bubbles}
          alt="bubbles"
          width={1000}
          height={1000}
          className="absolute left-0 bottom-12 sm:bottom-16 md:bottom-18 lg:bottom-24 -z-10 max-w-[150px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px] w-full rotate-180"
        />
      </div>
    </main>
  );
};

export default Page;
