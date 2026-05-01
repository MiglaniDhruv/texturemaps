"use client";

import Container from "@/style/Container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import CalButton from "./calButton";
import { motion, AnimatePresence } from "framer-motion";

const leftButtons = [
  { buttonName: "Home", href: "/" },
  { buttonName: "About Us", href: "/about-us" },
];

const rightButtons = [
  { buttonName: "Services", href: "/our-services" },
  { buttonName: "Contact", href: "/contact" },
];

const serviceDropdown = [
  {
    name: "Pattern Making + Grading + 3D Visualization",
    href: "/services?fashion-design",
  },
  { name: "3D Techpack Creation", href: "/services/techpack" },
];

const allButtons = [...leftButtons, ...rightButtons];

const NavigationBar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 80);
          if (!isMenuOpen) setIsNavHovered(false);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsNavHovered(false);
  };

  const isExpanded = !isScrolled || isNavHovered;

  const getButtonClasses = (href: string) => {
    const isActive =
      pathname === href ||
      (href === "/our-services" && pathname.startsWith("/our-services")) ||
      (href === "/services/techpack" && pathname.startsWith("/services"));
    return `text-white py-3 px-5 rounded-full font-semibold text-xs md:text-sm lg:text-base transition-all duration-300 whitespace-nowrap touch-manipulation min-h-[44px] flex items-center justify-center
      ${isActive ? "bg-[#0772DC80]" : "bg-transparent hover:bg-white/10"}`;
  };

  return (
    <Container>
      <header className="relative w-full flex justify-center items-center pt-[30px]">
        {/* ================= Desktop Navigation ================= */}
        <div className="hidden md:flex fixed top-[50px] z-[100] w-full px-8 items-center">
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setIsNavHovered(true)}
            onMouseLeave={() => setIsNavHovered(false)}
            className="absolute left-1/2 -translate-x-1/2"
          >
            <div
              className={`
                flex items-center justify-between rounded-full backdrop-blur-lg h-[60px]
                transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                ${
                  isExpanded
                    ? "w-[780px] max-w-[calc(100vw-200px)] px-8 bg-[#0772DC33]"
                    : "w-[180px] px-4 bg-[#0772DC50] shadow-lg cursor-pointer justify-center"
                }
              `}
            >
              {/* Left Buttons */}
              <div
                className="flex items-center gap-3 transition-all duration-500"
                style={
                  isExpanded
                    ? { width: "260px", opacity: 1 }
                    : { width: 0, opacity: 0, overflow: "hidden" }
                }
              >
                {leftButtons.map((button, index) => (
                  <Link key={index} href={button.href}>
                    <span className={getButtonClasses(button.href)}>
                      {button.buttonName}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Center Logo */}
              <Link
                href="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex-shrink-0"
              >
                <span
                  className={`font-bold tracking-wide transition-all duration-300
                    ${isExpanded ? "text-lg md:text-xl lg:text-2xl" : "text-base md:text-lg"}
                  `}
                  style={{
                    background: "linear-gradient(to bottom, #ffffff, #a0c4ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  TEXTUREMAPS
                </span>
              </Link>

              {/* Right Buttons */}
              <div
                className="flex items-center gap-3 transition-all duration-500 justify-end"
                style={
                  isExpanded
                    ? { width: "260px", opacity: 1 }
                    : { width: 0, opacity: 0, overflow: "hidden" }
                }
              >
                {rightButtons.map((button, index) => {
                  const isServices = button.buttonName === "Services";
                  const isActive =
                    pathname === button.href ||
                    pathname.startsWith("/our-services") ||
                    pathname.startsWith("/services");

                  if (isServices) {
                    return (
                      <div
                        key={index}
                        ref={servicesRef}
                        className="relative"
                        onMouseEnter={() => setIsServicesHovered(true)}
                        onMouseLeave={() => setIsServicesHovered(false)}
                      >
                        <span
                          className={`text-white py-3 px-5 rounded-full font-semibold text-xs md:text-sm lg:text-base transition-all duration-300 whitespace-nowrap touch-manipulation min-h-[44px] flex items-center justify-center gap-1 cursor-pointer
                            ${isActive ? "bg-[#0772DC80]" : "bg-transparent hover:bg-white/10"}
                          `}
                        >
                          {button.buttonName}
                          <ChevronDown
                            className={`w-3 h-3 transition-transform duration-200 ${isServicesHovered ? "rotate-180" : ""}`}
                          />
                        </span>

                        <AnimatePresence>
                          {isServicesHovered && (
                            <motion.div
                              initial={{ opacity: 0, y: -8, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -8, scale: 0.95 }}
                              transition={{ duration: 0.15 }}
                              className="absolute top-[calc(100%+8px)] right-0 w-64 rounded-xl bg-[#031221]/95 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden z-[200]"
                            >
                              {serviceDropdown.map((item, i) => (
                                <Link key={i} href={item.href}>
                                  <div className="px-4 py-3 text-sm text-gray-200 hover:bg-[#0772DC] hover:text-white transition-colors duration-200 cursor-pointer font-medium">
                                    {item.name}
                                  </div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link key={index} href={button.href}>
                      <span className={getButtonClasses(button.href)}>
                        {button.buttonName}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.nav>

          {/* Book Call — Pinned to Extreme Right */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-8"
          >
            <CalButton className="text-white py-3 px-6 rounded-full font-semibold text-xs md:text-sm lg:text-base border border-white hover:bg-white/10 transition-all duration-300 whitespace-nowrap touch-manipulation min-h-[60px] flex items-center justify-center backdrop-blur-lg bg-[#0772DC33]">
              Book Call
            </CalButton>
          </motion.div>
        </div>

        {/* ================= Mobile Navigation ================= */}
        <nav className="flex md:hidden w-full fixed top-4 left-0 right-0 z-[100] px-4 justify-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => {
              if (isScrolled && !isNavHovered) {
                setIsNavHovered(true);
              }
            }}
            onMouseEnter={() => setIsNavHovered(true)}
            onMouseLeave={() => setIsNavHovered(false)}
            className={`
              flex items-center backdrop-blur-lg rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] h-[56px]
              ${
                isExpanded
                  ? "w-full max-w-[calc(100vw-32px)] px-4 bg-[#0772DC33] justify-between"
                  : "w-[180px] px-4 bg-[#0772DC50] shadow-lg justify-center cursor-pointer"
              }
            `}
          >
            {/* Menu Button */}
            <button
              className={`p-3 text-white hover:bg-white/10 rounded-full transition-all duration-300 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center
                ${isExpanded ? "opacity-100" : "opacity-0 w-0 overflow-hidden p-0"}
              `}
              onClick={(e) => {
                e.stopPropagation();
                toggleMenu();
              }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Center Logo */}
            <Link
              href="/"
              onClick={() => {
                closeMenu();
                // removed scrollTo so it navigates without jumping to top
              }}
            >
              <span
                className={`font-extrabold tracking-wide transition-all duration-300 ${isExpanded ? "text-base" : "text-sm -ml-7"}`}
                style={{
                  background: "linear-gradient(to bottom, #ffffff, #a0c4ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                TEXTUREMAPS
              </span>
            </Link>

            {/* Book Call Mobile */}
            <div
              className={`transition-all duration-300 ${isExpanded ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}`}
            >
              <CalButton className="text-white py-2 px-4 rounded-full font-semibold text-xs border border-white hover:bg-white/10 transition-colors touch-manipulation min-h-[40px] whitespace-nowrap">
                Book Call
              </CalButton>
            </div>
          </motion.div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMenuOpen && isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-20 left-4 right-4 bg-[#0a2540] backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/10"
              >
                <nav className="flex flex-col gap-4">
                  {/* Regular buttons */}
                  {leftButtons.map((button, index) => {
                    const isActive = pathname === button.href;
                    return (
                      <Link key={index} href={button.href} onClick={closeMenu}>
                        <span
                          className={`text-white py-3 px-5 rounded-full font-semibold text-base transition-all block text-center touch-manipulation min-h-[48px] flex items-center justify-center
                          ${isActive ? "bg-[#0772DC80]" : "bg-transparent hover:bg-white/10"}`}
                        >
                          {button.buttonName}
                        </span>
                      </Link>
                    );
                  })}

                  {/* Services section */}
                  <div className="mx-3 my-2 rounded-2xl bg-white/[0.04] border border-white/[0.08] overflow-hidden">
                    <div className="flex items-center gap-2 px-4 pt-2.5 pb-2">
                      <span className="text-[10px] font-bold tracking-[0.14em] text-[#4fa8ff] uppercase">
                        Services
                      </span>
                      <div className="flex-1 h-px bg-white/[0.07]" />
                    </div>
                    <div className="flex gap-0 px-4 pb-2.5">
                      <div className="w-0.5 rounded-sm bg-[#0772DC]/40 mr-3.5 my-0.5 flex-shrink-0" />
                      <div className="flex flex-col flex-1">
                        {serviceDropdown.map((item, i) => (
                          <Link key={i} href={item.href} onClick={closeMenu}>
                            <span
                              className={`block py-2.5 text-[13px] font-medium text-white/80 hover:text-white transition-colors touch-manipulation
                                ${i < serviceDropdown.length - 1 ? "border-b border-white/[0.05]" : ""}`}
                            >
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Contact */}
                  <Link href="/contact" onClick={closeMenu}>
                    <span className="text-white py-3 px-5 rounded-full font-semibold text-base transition-all block text-center touch-manipulation min-h-[48px] flex items-center justify-center bg-transparent hover:bg-white/10">
                      Contact
                    </span>
                  </Link>

                  {/* Book Call */}
                  <CalButton
                    onClick={closeMenu}
                    className="text-white py-3 px-5 rounded-full font-semibold text-base transition-all block text-center touch-manipulation min-h-[48px] flex items-center justify-center bg-transparent border border-white hover:bg-white/10"
                  >
                    Book Call
                  </CalButton>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </Container>
  );
};

export default NavigationBar;
