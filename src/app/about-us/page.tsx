import HeroCommon from "@/style/HeroCommon";
import React from "react";
import MeetOurFounderCard from "@/components/about-us/founder-card";
import SocialBar from "@/components/common/SocialBar";

const page = () => {
  return (
    <main className="relative  pb-10 md:pb-16 lg:pb-10 overflow-hidden">
      <div className="px-4 md:px-6 z-10">
        <HeroCommon title="Our Story" />
      </div>


      <MeetOurFounderCard />

      <div className="px-4 md:px-6 my-[70px] sm:my-20 md:my-[90px] lg:my-[100px]">
        <SocialBar />
      </div>
    </main>
  );
};

export default page;
