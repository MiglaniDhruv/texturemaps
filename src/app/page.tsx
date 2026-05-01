import Hero from "@/components/home/Hero";
import OurServices from "@/components/home/our-services";
import ThreeDMockups from "@/components/home/threeD-mockups";
import React from "react";
import BlockContainer from "@/components/home/block";
import ModelsGroupBanner from "@/components/home/models-group";
import { WateryReveal } from "@/style/SmoothReveal";
import { Geologica } from "next/font/google";

const geologica = Geologica({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const page = () => {
  return (
    <main>
      {/* Hero section */}
      <WateryReveal>
        <Hero />
      </WateryReveal>

      {/* Our services */}
      <OurServices />

      {/* 3-D Moackups section with video */}
      <WateryReveal>
        <ThreeDMockups />
      </WateryReveal>

      {/* <BlockContainer
        title="About Us"
        content="We are market leaders in developing digital solutions for the apparel retail industry. Our unique experience and extensive knowledge in Pattern making + 3D Visualization, Techpack creation, Physical & virtual garment fittings help our clients showcase and sell their collections seamlessly saving valuable time, money and resources in communication, sales and production processes."
        classname="mt-[60px] sm:mt-[70px] md:mt-[85px] lg:mt-[100px]"
      /> */}

      <BlockContainer
        title="Why choose us?"
        content="Whether you are launching your apparel brand & scaling existing workflow, we are your technical partner every step on the way. Our next gen 3D techpack creation ensures first sample perfection accelerating seasonal launch for brands."
        classname="mt-[35px] sm:mt-10 md:mt-[45px] lg:mt-[50px]"
        // fontClass={geologica.className}
        bulletsHeading="Benefits of 3D techpacks"
        bullets={[
          "Live drape simulation with real fabric physics & digital fit maps which helps skips early physical rounds",
          "Renders can be used for ecom & social pre-orders",
        ]}
      />

      <BlockContainer
        title="A studio that feels like your team"
        content="We are not an agency. We are collaborators. You'll work with real humans who understand fashion, move fast and care about your brand like it's their own. Big or small, your goals become our mission. "
        classname="mt-[35px] sm:mt-10 md:mt-[45px] lg:mt-[50px]"
        sideCards={[
          {
            title: "Starter",
            href: "/contact",
            items: [
              "2D sketch of front, back, side with details",
              "2D construction & stitching details ",
              "Bill of Material ",
              "Colorway ",
              "label & tag placement ",
            ],
          },
          {
            title: "Preferred",
            featured: true,
            href: "/contact",
            items: [
              "All in Starter, plus :",
              "Base size measurement sheet",
              "Graded spec sheet",
            ],
          },
          {
            title: "Premium",
            href: "/contact",
            items: [
              "All in Preferred, plus :",
              "3D sketch details (front, back & side)",
              "Base size + grading pattern",
              "Base size 3D",
            ],
          },
        ]}
      />

      {/* Models group */}
      <ModelsGroupBanner />
    </main>
  );
};

export default page;
