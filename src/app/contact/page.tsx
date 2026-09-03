import React from "react";
import HeroCommon from "@/style/HeroCommon";
import ContactForm from "@/components/contact/contact-form";
import SocialBar from "@/components/common/SocialBar";
import BookCall from "@/components/contact/book-call";

const page = () => {
  return (
    <main className="relative">
      <div className="px-4 md:px-6 mt-10 sm:mt-20 translate-y-0 md:mt-10 z-10">
        <HeroCommon title="Let's connect" />
      </div>

      {/* Social Bar & Contact Form */}
      <div className="mt-6 sm:mt-7 md:mt-8 lg:mt-9 flex flex-col-reverse md:flex-col gap-y-7 sm:gap-y-8 md:Gap-y-0">
        <div className="px-4 md:px-6">
          <SocialBar />
        </div>
        <ContactForm />
      </div>

      {/* Book Call  */}
      <div className="pb-[60px] sm:pb-20 md:pb-[100px] lg:pb-[120px]">
        <BookCall />
      </div>
    </main>
  );
};

export default page;
