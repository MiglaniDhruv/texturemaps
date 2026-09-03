"use client"; 

import { usePathname } from "next/navigation";
import React from "react";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div
      className={`
        min-h-screen flex flex-col justify-between
        ${isHome 
          ? "bg-linear-to-b from-gray-950 via-[#031221] to-[#0C3966]" 
          : "bg-[#031221]"
        }
      `}
    >
      {children}
    </div>
  );
}