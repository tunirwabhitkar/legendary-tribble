"use client";

import { Button } from "@/components/ui/button";

const differentiators = [
  {
    num: "1",
    img: "/images/games-learning.png",
    title: "Learning Through Games",
    desc: "Every lesson feels like playtime — puzzles, crosswords, challenges",
  },
  {
    num: "2",
    img: "/images/personalized-attention.png",
    title: "Personalized Attention",
    desc: "15 students per batch means every child is seen and heard",
  },
  {
    num: "3",
    img: "/images/engaging-formats.png",
    title: "Engaging Formats Kids Enjoy",
    desc: "Quizzes, activities, team challenges — zero boring lectures",
  },
];

export default function WhyDifferentSection() {
  return (
    <section className="relative bg-[#1b67d1] overflow-hidden py-16 lg:py-14">
      {/* Decorative bubbles */}
      <div className="absolute top-[10%] left-[5%] w-16 h-16 rounded-full bg-white/10 float-anim pointer-events-none" />
      <div className="absolute top-[30%] right-[8%] w-10 h-10 rounded-full bg-white/8 float-slow-anim pointer-events-none" />
      <div className="absolute bottom-[20%] left-[15%] w-12 h-12 rounded-full bg-white/6 float-anim pointer-events-none" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[60%] right-[3%] w-20 h-20 rounded-full bg-white/5 float-slow-anim pointer-events-none" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 flex flex-col gap-12 lg:gap-14 items-center">
        {/* Header */}
        <div className="flex flex-col gap-3.5 items-center text-center">
          <span className="bg-[#ea9000] text-white font-dm font-bold text-lg lg:text-2xl uppercase px-4 py-2 rounded-full">
            Why We&apos;re Different
          </span>
          <h2
            className="font-finger text-3xl sm:text-4xl lg:text-5xl text-white"
            style={{ fontFamily: "var(--font-finger-paint), cursive" }}
          >
            We don&apos;t teach like school 🏫
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {differentiators.map((item) => (
            <div
              key={item.num}
              className="relative flex flex-col gap-3 items-center text-center px-7 py-4 group"
            >
              {/* Number badge */}
              <div className="absolute top-[40px] left-[11px] bg-[#00b906] text-white font-dm font-bold text-[28px] uppercase w-12 h-12 rounded-full flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform">
                {item.num}
              </div>
              {/* Image */}
              <div className="rounded-[20px] overflow-hidden w-[330px] h-[330px] shadow-lg group-hover:shadow-2xl transition-shadow">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Text */}
              <p className="font-dm font-semibold text-white text-[28px]">
                {item.title}
              </p>
              <p className="font-dm text-white/80 text-sm lg:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Button className="bg-[#a90000] hover:bg-[#8a0000] text-[#fafafa] font-dm font-semibold text-xl px-5 py-3 h-auto rounded-[12px] transition-all hover:scale-105 shadow-[0px_0px_10px_rgba(0,0,0,0.04)]">
          👉 Reserve a Seat
        </Button>
      </div>

      {/* Bottom dual-layer wave transition */}
      <div className="relative w-full mt-8 pointer-events-none">
        {/* Back wave (darker) */}
        <svg viewBox="0 0 1920 226" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
          <path d="M0 100C120 40 240 160 360 100C480 40 600 160 720 120C840 80 960 40 1080 100C1200 160 1320 40 1440 100C1560 160 1680 60 1800 100C1860 120 1920 80 1920 80V226H0V100Z" fill="#1560c0" />
        </svg>
        {/* Front wave (lighter, overlapping) */}
        <svg viewBox="0 0 1920 142" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block absolute bottom-0 left-0 z-[1]" preserveAspectRatio="none">
          <path d="M0 80C160 20 320 120 480 80C640 40 800 120 960 80C1120 40 1280 120 1440 80C1600 40 1760 100 1920 80V142H0V80Z" fill="#297bed" />
        </svg>
      </div>
    </section>
  );
}
