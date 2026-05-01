import React from "react";
import { WateryReveal } from "./SmoothReveal";
import { Button } from "@/components/ui/button";

type HeroCommonProps = {
  title: string;
};

const HeroCommon = ({ title }: HeroCommonProps) => {
  return (
    <section className="relative mt-0 w-full">
      <div className="w-full backdrop-blur-2xl flex flex-col justify-center items-center text-center rounded-2xl md:rounded-3xl lg:rounded-4xl ">
        <WateryReveal>
          <div className="w-full flex justify-center items-center">
            <div className="p-2 bg-linear-to-r from-[#031221] to-[#0C4A87] rounded-full w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] max-w-full group mt-24">
              <Button className="text-center bg-linear-to-b from-[#031221] to-[#0772DC] uppercase w-full h-14 md:h-16 rounded-full group-hover:cursor-pointer text-base sm:text-[17px] md:text-[18px] lg:text-[20px]">
                {title}
              </Button>
            </div>
          </div>
        </WateryReveal>
      </div>
    </section>
  );
};

export default HeroCommon;
