import React from "react";
import Image from "next/image";
import bubbles from "../../../public/images/bubbles.png";
import Container from "@/style/Container";
import Link from "next/link";
import { Button } from "../ui/button";
import { WateryReveal } from "@/style/SmoothReveal";

const services = [
  {
    title: "Pattern Making + 3D Visualization",
    content: "Precise and accurate garment patterns with 3D visualization.",
    imgURL: "/images/try1.png",
    redirectURL: "/services?fashion-design",
  },
  {
    title: "3D Techpack Creation",
    content:
      "Precise, production-ready techpack that brings clarity to manufacturers.",
    imgURL: "/images/tech_pack_creation.png",
    redirectURL: "/services/techpack",
  },
  {
    title: "Virtual/Physical Fitting",
    content: "Perfecting Fit, Physically and Virtually.",
    imgURL: "/images/virtual_fitting.png",
  },
];

const OurServices = () => {
  // return (
  //   <section
  //     className="relative w-full mt-12 sm:mt-16 md:mt-20 lg:mt-[120px] overflow-hidden"
  //     id="services"
  //   >
  //     <Container>
  //       <h2 className="text-[#0772DC] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
  //         Our services
  //       </h2>

  //       <WateryReveal>
  //         <p className="font-normal text-white leading-snug text-xs sm:text-sm md:text-base lg:text-[20px] w-full max-w-[1200px] mt-4 sm:mt-5 md:mt-7 px-1 sm:px-0">
  //           We offer services that drive real results—whether you are launching
  //           a brand or need support in existing services, we plug in where you
  //           need us most with specialized expertise. so you can focus on
  //           building your brand with confidence.
  //         </p>
  //       </WateryReveal>

  //       <div className="relative bg-gradient-to-b from-[#081E35] to-[#113760] mt-6 sm:mt-8 md:mt-10 lg:mt-[50px] px-4 sm:px-6 md:px-10 lg:px-[50px] pt-8 sm:pt-10 pb-8 sm:pb-10 md:py-[42px] rounded-2xl md:rounded-3xl lg:rounded-4xl backdrop-blur-md overflow-hidden">
  //           {/* Bubbles */}
  //           <Image src={bubbles} alt="" aria-hidden="true" width={400} height={400} className="absolute -left-8 top-8 w-[80px] sm:w-[120px] md:w-[160px] lg:w-[220px] h-auto opacity-40 animate-float-left pointer-events-none" />
  //           <Image src={bubbles} alt="" aria-hidden="true" width={400} height={400} className="absolute -right-4 top-1/4 w-[70px] sm:w-[110px] md:w-[150px] lg:w-[200px] h-auto opacity-50 animate-float-right pointer-events-none scale-x-[-1]" />
  //           <Image src={bubbles} alt="" aria-hidden="true" width={400} height={400} className="absolute left-4 bottom-1/3 w-[60px] sm:w-[90px] md:w-[120px] lg:w-[160px] h-auto opacity-35 animate-float-left-slow pointer-events-none" />
  //           <Image src={bubbles} alt="" aria-hidden="true" width={400} height={400} className="absolute -right-6 bottom-16 w-[65px] sm:w-[100px] md:w-[130px] lg:w-[180px] h-auto opacity-45 animate-float-right-slow pointer-events-none scale-x-[-1]" />
  //           <Image src={bubbles} alt="" aria-hidden="true" width={400} height={400} className="absolute left-1/4 top-1/2 w-[50px] sm:w-[70px] md:w-[90px] lg:w-[120px] h-auto opacity-25 animate-float-right pointer-events-none" />
  //           <Image src={bubbles} alt="" aria-hidden="true" width={400} height={400} className="absolute right-1/4 bottom-8 w-[55px] sm:w-[80px] md:w-[100px] lg:w-[140px] h-auto opacity-30 animate-float-left-slow pointer-events-none scale-x-[-1]" />

  //         <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 md:grid md:grid-cols-3 md:gap-8 md:items-stretch">
  //           {services.map((serviceData, index) => (
  //             <WateryReveal key={index}>
  //               <div className="flex flex-col justify-between items-center text-center h-full w-full max-w-[420px] sm:max-w-[500px] md:max-w-none">
  //                 <div className="w-full">
  //                   <h3 className="uppercase text-[#0772DC] font-bold text-sm sm:text-base md:text-[16px] lg:text-[19px] min-h-[40px] sm:min-h-[44px] md:min-h-[52px] flex items-start justify-center leading-tight px-2 ">
  //                     {serviceData.title}
  //                   </h3>
  //                   <p className="text-[#D9D9D9] font-normal leading-normal text-xs sm:text-sm md:text-[15px] lg:text-[18px] mt-2 min-h-[48px] sm:min-h-[52px] md:min-h-[60px] flex items-start justify-center px-1">
  //                     {serviceData.content}
  //                   </p>
  //                 </div>
  //                 <div className="group relative flex mt-4 w-full justify-center touch-manipulation">
  //                   <div className="relative w-full">
  //                     <Image
  //                       src={serviceData.imgURL}
  //                       alt={serviceData.title}
  //                       height={1000}
  //                       width={1000}
  //                       className="w-full aspect-[] object-cover rounded-xl md:rounded-2xl lg:rounded-3xl transition-all duration-300 ease-in-out shadow-[4px_4px_12px_#0772DC] md:shadow-none md:group-hover:shadow-[8px_8px_16px_#0772DC] border border-[#0772DC]/30"
  //                     />
  //                     <div className="absolute inset-0 bg-black/50 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 rounded-xl md:rounded-2xl lg:rounded-3xl pointer-events-none" />
  //                     {serviceData.redirectURL && (
  //                       <Link
  //                         href={serviceData.redirectURL}
  //                         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  //                       >
  //                         <Button className="opacity-100 md:opacity-0 md:group-hover:opacity-100 px-6 sm:px-8 md:px-10 h-10 sm:h-11 md:h-13 rounded-full cursor-pointer text-[#0772DC] font-bold bg-[#031221] text-xs sm:text-sm md:text-base shadow-[inset_3px_3px_5px_#0772DC,inset_-3px_3px_5px_#0772DC] hover:bg-black transition-all ease-in-out duration-200 hover:text-white touch-manipulation whitespace-nowrap">
  //                           Explore
  //                         </Button>
  //                       </Link>
  //                     )}
  //                   </div>
  //                 </div>
  //               </div>
  //             </WateryReveal>
  //           ))}
  //         </div>
  //       </div>
  //     </Container>
  //   </section>
  // );

  return null;
};

export default OurServices;