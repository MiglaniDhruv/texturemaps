import React from "react";
import Image from "next/image";
import Link from "next/link";
import { WateryReveal } from "@/style/SmoothReveal";

const socialIcons = [
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/sachin-sureka-811845152/",
    iconImageURL: "/icons/icon_linkedin.png",
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/sachin_sureka/",
    iconImageURL: "/icons/icon_instagram.png",
  },
];

const SocialBar = () => {
  return (
    <main className="mx-auto max-w-[1100px] px-4">
      <div className="w-full flex flex-row flex-wrap justify-between items-center gap-5 bg-[#092037] backdrop-blur-md px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-2.5 md:py-3 lg:py-4 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl">
        <div className="flex flex-row flex-wrap gap-x-5 gap-y-3 justify-between items-center max-w-[650px] w-full">
          <WateryReveal>
            <div className="flex flex-row justify-center items-baseline gap-3 sm:gap-4 md:gap-5">
              <label className="text-white leading-tight sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold">
                Email Us:
              </label>
              <Link href={"mailto:sachin@texturemaps.co.in"}>
                <span className="font-semibold italic text-[#0772DC] text-sm sm:text-base md:text-[17px] lg:text-[18px] hover:underline transition-all duration-200 ease-in-out ">
                  sachin@texturemaps.co.in
                </span>
              </Link>
            </div>
          </WateryReveal>
          <WateryReveal>
            <div className="flex flex-row justify-center items-baseline gap-3 sm:gap-4 md:gap-5">
              <label className="text-white leading-tight sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold">
                Call Us:
              </label>
              <Link href={"tel:919891541403"}>
                <span className="font-semibold italic text-[#0772DC] text-sm sm:text-base md:text-[17px] lg:text-[18px] hover:underline transition-all duration-200 ease-in-out ">
                  +91 9891541403
                </span>
              </Link>
            </div>
          </WateryReveal>
        </div>

        <div className="flex flex-row justify-center items-center gap-4 sm:gap-5 md:gap-6">
          {socialIcons.map((icon, index) => (
            <WateryReveal key={index}>
              <Link href={`${icon.href}`} target="_blank">
                <Image
                  src={`${icon.iconImageURL}`}
                  alt={`${icon.name}`}
                  height={1000}
                  width={1000}
                  className="h-6.5 md:h-7 lg:h-9 w-auto object-cover hover:scale-115 transition-all ease-in-out duration-200 cursor-pointer"
                />
              </Link>
            </WateryReveal>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SocialBar;
