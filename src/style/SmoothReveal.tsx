"use client";

import { motion } from "motion/react";

export const WateryReveal = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.2 }} 
      transition={{
        type: "spring",
        stiffness: 40, 
        damping: 15, 
        mass: 1,
        duration: 1.2
      }}
    >
      {children}
    </motion.div>
  );
};