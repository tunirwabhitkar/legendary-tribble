"use client";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="bg-[#00153d] w-full px-8 md:px-16 lg:px-[clamp(2rem,10.5vw,202px)] py-6 flex items-center justify-between z-50 sticky top-0">
      {/* Logo */}
      <a href="#" className="flex items-center">
        <span
          className="font-finger text-3xl tracking-wide"
          style={{ fontFamily: "var(--font-finger-paint), cursive" }}
        >
          <span className="text-[#89b1cd]">S</span>
          <span className="text-[#fafafa]">age</span>
          <span className="text-[#89b1cd]">N</span>
          <span className="text-[#fafafa]">est</span>
        </span>
      </a>

      {/* Nav links */}
      <div className="flex items-center gap-6 md:gap-10">
        <a
          href="#"
          className="text-white font-dm text-base md:text-lg lg:text-xl font-normal hidden sm:block hover:text-[#89b1cd] transition-colors"
        >
          Mentor on Sagenest
        </a>
        <a
          href="#"
          className="text-white font-dm text-base md:text-lg lg:text-xl font-normal hidden sm:block hover:text-[#89b1cd] transition-colors"
        >
          Sign In
        </a>
        <Button className="bg-[#0649c6] hover:bg-[#0540b0] text-white font-dm font-normal text-base md:text-lg lg:text-xl rounded-lg px-4 py-3 h-auto transition-all duration-200 hover:scale-105">
          Join for Free
        </Button>
      </div>
    </nav>
  );
}
