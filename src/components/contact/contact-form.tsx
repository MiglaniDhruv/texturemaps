"use client";
import Container from "@/style/Container";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Libre_Baskerville } from "next/font/google";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { z } from "zod";
import { toast } from "sonner";
import { sendContactEmail } from "@/actions/contact";
import { WateryReveal } from "@/style/SmoothReveal";

const libreBaskerville = Libre_Baskerville({
  weight: ["400"],
  subsets: ["latin"],
});

const ContactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must contain at least 2 characters")
    .max(20, "Name must not exceed 20 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z
    .string()
    .refine(
      (val) => val.trim().split(/\s+/).length >= 5,
      "Message should contain at least 5 words",
    ),
});

type ContactFormType = z.infer<typeof ContactSchema>;

type ErrorType = Partial<Record<keyof ContactFormType, string>>;

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState<ContactFormType>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<ErrorType>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = ContactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: ErrorType = {};

      result.error.issues.forEach((err) => {
        const field = err.path[0] as keyof ContactFormType;
        fieldErrors[field] = err.message;
      });

      setErrors(fieldErrors);
      toast.error("Error submitting form", {
        className: "bg-red-500 text-white shadow-none border border-red-400",
      });
      return;
    }

    setIsLoading(true);

    const response = await sendContactEmail(form);

    setIsLoading(false);

    if (!response.success) {
      toast.error(response.error || "Failed to send message", {
        className: "bg-red-500 text-white shadow-none border border-red-400",
      });
      return;
    }

    toast.success("Message sent successfully", {
      className: "bg-green-500 text-white shadow-none border border-green-400",
    });

    setForm({
      name: "",
      email: "",
      message: "",
    });

    setErrors({});
  };

  return (
    <Container>
      <div className="max-w-[1065px] w-full mx-auto">
        <section className="w-full bg-radial from-[#0772DC] via-[#0920371A] to-[#02100E66] mt-8 sm:mt-10 md:mt-14 lg:mt-16 rounded-2xl md:rounded-3xl lg:rounded-4xl blur-in-3xl border border-[#0772DC]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center text-center bg-[#09203733] backdrop-blur-2xl p-4 sm:p-6 rounded-2xl md:rounded-3xl lg:rounded-4xl"
          >
            <WateryReveal>
              <h1
                className={`${libreBaskerville.className} font-normal text-3xl sm:text-[30px] md:text-[35px] lg:text-[42px] text-white`}
              >
                Contact form
              </h1>
              <p className="max-w-[500px] w-full font-normal text-[#FFFFFF] text-sm sm:text-base md:text-[18px] lg:text-[20px] mt-2">
                Let&apos;s Talk about your next move in Digital Fashion.<br></br>
                We usually reply within 24 hours.
              </p>
            </WateryReveal>
            <div className="max-w-[500px] w-full flex flex-col mt-8 md:mt-10 gap-8 sm:gap-9 md:gap-10 lg:gap-12">
              {/* Name */}
              <div className="flex flex-col justify-start items-start gap-1.5">
                {errors.name && (
                  <p className="text-xs md:text-sm lg:text-base font-semibold text-red-800 bg-red-300/80 px-4 py-0.5 rounded-full backdrop-blur-sm">
                    {errors.name}
                  </p>
                )}
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  disabled={isLoading}
                  placeholder="Name"
                  className="w-full bg-[#D9D9D9]/20 rounded-full outline-none border-none px-4 sm:px-6 md:px-8 lg:px-10 font-semibold placeholder:text-white/50 text-neutral-300 text-sm md:text-base lg:text-[18px] py-3"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col justify-start items-start gap-1.5">
                {errors.email && (
                  <p className="text-xs md:text-sm lg:text-base font-semibold text-red-800 bg-red-300/80 px-4 py-0.5 rounded-full backdrop-blur-sm">
                    {errors.email}
                  </p>
                )}
                <Input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="text"
                  disabled={isLoading}
                  placeholder="Email"
                  className="w-full bg-[#D9D9D9]/20 rounded-full outline-none border-none px-4 sm:px-6 md:px-8 lg:px-10 font-semibold placeholder:text-white/50 text-neutral-300 text-sm md:text-base lg:text-[18px] py-3"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col justify-start items-start gap-1.5">
                {errors.message && (
                  <p className="text-xs md:text-sm lg:text-base font-semibold text-red-800 bg-red-300/80 px-4 py-0.5 rounded-full backdrop-blur-sm">
                    {errors.message}
                  </p>
                )}
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  disabled={isLoading}
                  placeholder="Message"
                  className="w-full bg-[#D9D9D9]/20 rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl outline-none border-none px-4 sm:px-6 md:px-8 lg:px-10 font-semibold placeholder:text-white/50 text-neutral-300 text-sm md:text-base lg:text-[18px] py-3"
                />
              </div>
            </div>

            <div className="flex w-full justify-center items-center mt-5 sm:mt-6 md:mt-8 lg:mt-10">
              <Button
                type="submit"
                disabled={isLoading}
                className="text-white bg-linear-to-b from-[#031221] to-[#0772DC] max-w-[400px] w-full rounded-full h-14 md:h-16 text-base sm:text-[17px] md:text-[18px] lg:text-[20px] font-semibold cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </section>
      </div>
    </Container>
  );
};

export default ContactForm;
