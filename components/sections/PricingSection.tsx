"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const bonuses = [
  { icon: "📜", label: "Certificate of Completion" },
  { icon: "📊", label: "Progress Feedback Report" },
  { icon: "📋", label: "French Cheat Sheet to Keep" },
  { icon: "🧠", label: "Sharper Memory & Focus Skills" },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative bg-[#297bed] overflow-hidden py-20 lg:py-24"
    >
      {/* Decorative bubbles */}
      <div className="absolute top-[15%] left-[10%] w-24 h-24 rounded-full bg-white/5 float-anim pointer-events-none" />
      <div className="absolute top-[40%] right-[5%] w-16 h-16 rounded-full bg-white/8 float-slow-anim pointer-events-none" />
      <div className="absolute bottom-[30%] left-[3%] w-20 h-20 rounded-full bg-white/6 float-anim pointer-events-none" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-[10%] right-[12%] w-14 h-14 rounded-full bg-white/5 float-slow-anim pointer-events-none" style={{ animationDelay: "0.5s" }} />

      {/* Background circle */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none overflow-hidden">
        <div className="w-[140%] aspect-square rounded-full bg-[#1a5fc0] opacity-40 translate-y-[60%]" />
      </div>


      <div className="relative z-10 flex justify-center px-4">
        <div className="bg-white rounded-3xl shadow-[10px_10px_7px_rgba(0,0,0,0.25)] flex flex-col gap-6 items-center px-8 md:px-12 py-14 w-full max-w-[831px]">
          {/* Heading */}
          <div className="flex flex-col gap-4 items-center text-center">
            <h2
              className="font-finger text-2xl sm:text-3xl lg:text-4xl text-black"
              style={{ fontFamily: "var(--font-finger-paint), cursive" }}
            >
              Grab Your Spot Before It&apos;s Gone 🔥
            </h2>
            <span className="bg-[#ea9000] text-white font-dm font-bold text-lg uppercase px-4 py-2 rounded-full">
              🔥 Early Bird Offer
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="font-dm font-normal text-3xl lg:text-4xl text-black/60 line-through">
              ₹2,500
            </span>
            <span className="font-dm font-bold text-4xl lg:text-5xl text-[#a90000]">
              ₹1,800
            </span>
          </div>

          {/* Bonuses */}
          <div className="bg-white rounded-2xl p-5 w-full flex flex-col items-center border border-black/10 shadow-sm">
            {bonuses.map((b, i) => (
              <div key={i} className="w-full flex flex-col items-center">
                <div className="flex gap-4 items-center justify-center px-6 py-4 text-black">
                  <span className="text-2xl">{b.icon}</span>
                  <span className="font-dm font-semibold text-lg lg:text-xl">
                    {b.label}
                  </span>
                </div>
                {i < bonuses.length - 1 && (
                  <Separator className="w-[80%] opacity-30" />
                )}
              </div>
            ))}
          </div>

          {/* Scarcity */}
          <div className="bg-[#ffecec] rounded-xl flex flex-col gap-1 items-center justify-center px-6 py-4 text-center">
            <p className="font-dm font-semibold text-[#a90000] text-xl lg:text-2xl">
              Only 15 seats per batch
            </p>
            <p className="font-dm text-black text-sm lg:text-base">
              Once filled, registrations close — no exceptions
            </p>
          </div>

          {/* Book button */}
          <Button className="bg-[#a90000] hover:bg-[#8a0000] text-[#fafafa] font-dm font-semibold text-lg lg:text-xl px-8 py-4 h-auto rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-xl">
            👉 Book My Spot
          </Button>
        </div>
      </div>
    </section>
  );
}
