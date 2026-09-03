"use client";

import Container from "@/style/Container";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import illustration from "../../../public/contact/book_call.png";
import { Button } from "../ui/button";
import { WateryReveal } from "@/style/SmoothReveal";
import CalButton from "../common/calButton";

const BookCall = () => {
  const CALLink = process.env.NEXT_PUBLIC_CAL_DOT_COM_LINK || "#";

  return (
    <Container>
      <div className="w-full bg-linear-to-r from-[#0772DC]/55 via-[#031221] to-[#0772DC]/30 rounded-2xl md:rounded-3xl lg:rounded-4xl mt-14 sm:mt-16 md:mt-[82px] lg:mt-20">
        <div className="w-full backdrop-blur-xl flex flex-col-reverse md:flex-row gap-[30px] justify-between items-center rounded-2xl md:rounded-3xl lg:rounded-4xl p-4 sm:p-6 md:p-8 lg:p-12 border border-[#0772DC]">
          {/* CTA */}
          <div className="flex flex-col justify-center items-center text-center md:justify-start md:items-start md:text-start max-w-[500px] w-full">
            <WateryReveal>
              <p className="text-white font-normal leading-tight sm:text-[18px] md:text-[20px] lg:text-[22px]">
                Book a call and let&apos;s explore how we can make your fashion
                processes more digital, efficient and impactful.
              </p>

              <Button className="text-white bg-linear-to-t from-[#031221] to-[#0772DC] rounded-full h-14 md:h-16 text-base sm:text-[17px] md:text-[18px] lg:text-[20px] font-semibold cursor-pointer mt-7 sm:mt-8 md:mt-9 lg:mt-10 px-14 sm:px-16 md:px-20 lg:px-24">
                <CalButton>Book Call</CalButton>
              </Button>
            </WateryReveal>
          </div>

          {/* Illustration */}
          <WateryReveal>
            <Image
              src={illustration}
              alt="illustration"
              height={1000}
              width={1000}
              className="max-w-[350px] w-full"
              loading="lazy"
            />
          </WateryReveal>
        </div>
      </div>
    </Container>
  );
};

export default BookCall;