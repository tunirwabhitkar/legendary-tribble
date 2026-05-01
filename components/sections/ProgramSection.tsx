"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const outcomes = [
  {
    icon: "🗣",
    title: "Speak basic French sentences",
    desc: "Real conversations, greetings, everyday phrases usable from Day 1",
  },
  {
    icon: "🧠",
    title: "Memory & Focus Boost",
    desc: "Brain games designed to sharpen concentration and recall",
  },
  {
    icon: "🧩",
    title: "Puzzles, Quizzes & Activities",
    desc: "Interactive formats that make vocabulary stick naturally",
  },
];

/* Decorative sticker positions scattered around the section */
const stickers = [
  // Top-left area
  {
    emoji: "🐝",
    className:
      "absolute top-[-57px] left-[calc(50%-500px)] w-[100px] h-[92px] z-20 hidden lg:block",
    delay: "0s",
  },
  // Bottom-left
  {
    emoji: "🐝",
    className:
      "absolute bottom-[220px] left-[83px] w-[70px] h-[84px] z-10 hidden lg:block",
    delay: "0.5s",
  },
  // Top-center-right
  {
    emoji: "🐝",
    className:
      "absolute top-[16px] right-[calc(50%-60px)] w-[92px] h-[94px] z-10 hidden lg:block",
    delay: "1.5s",
  },
  // Top-right
  {
    emoji: "🐝",
    className:
      "absolute top-[100px] right-[46px] w-[76px] h-[82px] z-10 hidden lg:block",
    delay: "0.3s",
  },
  // Mid-right
  {
    emoji: "🐝",
    className:
      "absolute top-[380px] right-[136px] w-[58px] h-[64px] z-10 hidden lg:block",
    delay: "2s",
  },
  // Bottom-center
  {
    emoji: "🐝",
    className:
      "absolute bottom-[200px] right-[calc(50%-100px)] w-[58px] h-[64px] z-10 hidden lg:block",
    delay: "1.2s",
  },
  // Bottom-right
  {
    emoji: "🐝",
    className:
      "absolute bottom-[228px] right-[47px] w-[128px] h-[128px] z-10 hidden lg:block",
    delay: "0.7s",
  },
];

export default function ProgramSection() {
  return (
    <section className="relative bg-[#a51717] w-full overflow-hidden isolate">
      {/* Brick wall texture overlay */}
      <div
        className="absolute inset-0 mix-blend-hard-light opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 46px,
              rgba(0,0,0,0.35) 46px,
              rgba(0,0,0,0.35) 50px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 96px,
              rgba(0,0,0,0.35) 96px,
              rgba(0,0,0,0.35) 100px
            )`,
          backgroundSize: "100px 50px",
        }}
      />

      {/* Secondary brick offset for realism */}
      <div
        className="absolute inset-0 mix-blend-hard-light opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 46px,
              rgba(0,0,0,0.2) 46px,
              rgba(0,0,0,0.2) 50px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 96px,
              rgba(0,0,0,0.2) 96px,
              rgba(0,0,0,0.2) 100px
            )`,
          backgroundSize: "100px 50px",
          backgroundPosition: "50px 25px",
        }}
      />

      {/* Scattered decorative emoji stickers */}
      {stickers.map((sticker, i) => (
        <div
          key={i}
          className={`${sticker.className} float-slow-anim select-none pointer-events-none`}
          style={{
            animationDelay: sticker.delay,
            filter: "drop-shadow(0px 8px 4px rgba(0,0,0,0.25))",
            fontSize: "clamp(40px, 5vw, 72px)",
          }}
          aria-hidden="true"
        >
          <span className="block text-center" style={{ fontSize: "inherit" }}>
            {sticker.emoji}
          </span>
        </div>
      ))}

      {/* Decorative brown bolt circles */}
      <BrownButton className="absolute top-[340px] left-[80px] z-20 hidden lg:flex" />
      <BrownButton className="absolute top-[660px] left-[40px] z-20 hidden lg:flex" />

      {/* Main content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-[120px] pt-20 lg:pt-[148px] pb-0 flex flex-col gap-12 lg:gap-[113px]">
        <main className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 w-full">
          {/* Left column – Title + Outcomes card */}
          <div className="flex flex-col gap-8 lg:gap-9 w-full lg:max-w-[720px] relative">
            {/* Croissant sticker near title */}
            <div
              className="absolute top-[-57px] left-[-97px] z-20 hidden lg:block select-none pointer-events-none"
              style={{
                filter: "drop-shadow(0px 8px 4px rgba(0,0,0,0.25))",
                fontSize: "72px",
              }}
              aria-hidden="true"
            >
              🐝
            </div>

            {/* Title + CTA */}
            <div className="flex flex-col gap-4">
              <h2
                className="text-2xl sm:text-3xl lg:text-[23px] text-white leading-snug"
                style={{ fontFamily: "var(--font-finger-paint), cursive" }}
              >
                10-Day French Summer Camp for Kids{" "}
                <span className="text-lg lg:text-xl">(Age 9–15)</span>
              </h2>
              <Button className="bg-[#0649c6] hover:bg-[#0540b0] text-[#fafafa] font-dm font-semibold text-lg lg:text-xl rounded-xl border-b-4 border-r-4 border-[#00153c] px-5 py-3 h-auto w-fit transition-all hover:translate-y-[-2px] shadow-[0px_0px_10px_rgba(0,0,0,0.04)]">
                👉 Reserve a Seat
              </Button>
            </div>

            {/* Outcomes card */}
            <div className="bg-[#003391] border-[8px] border-[#c67024] rounded-[20px] overflow-hidden shadow-[12px_12px_0px_rgba(0,0,0,0.25)]">
              {outcomes.map((item, i) => (
                <div
                  key={i}
                  className={`bg-white flex gap-5 items-center px-6 lg:px-8 py-8 lg:py-10 ${i < outcomes.length - 1
                    ? "border-b border-black/10"
                    : ""
                    }`}
                >
                  <span className="text-2xl lg:text-[28px] shrink-0 font-bold text-black">
                    ✓
                  </span>
                  <span className="text-3xl lg:text-[40px] shrink-0">
                    {item.icon}
                  </span>
                  <div className="flex flex-col gap-1.5 min-w-0">
                    <p
                      className="text-xl lg:text-2xl text-black m-0"
                      style={{
                        fontFamily: "var(--font-finger-paint), cursive",
                      }}
                    >
                      {item.title}
                    </p>
                    <p className="font-dm text-sm lg:text-base text-[#3a3a44] m-0">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
              {/* Guarantee banner */}
              <div className="bg-[#ffb53d] flex items-center justify-center px-6 py-4">
                <p className="font-dm font-bold text-black text-base lg:text-xl text-center m-0">
                  🏆 &quot;By Day 10, your child will confidently speak basic
                  French sentences.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Right column – Subscription Plan image */}
          <div className="w-full lg:w-auto flex-shrink-0 flex justify-center lg:justify-end lg:pt-[9px]">
            <div className="rounded-[32px] overflow-hidden w-full max-w-[500px] lg:w-[588px] aspect-square">
              <Image
                src="/images/kids-learning.png"
                alt="Kids learning French in summer camp"
                width={588}
                height={588}
                sizes="(max-width: 1024px) 100vw, 588px"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </main>
      </div>

      {/* Bottom wavy grass field SVG transition */}
      <div className="relative w-full mt-[-1px] pointer-events-none">
        <svg
          viewBox="0 0 1921 149"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          {/* Dark green wave (back) */}
          <path
            d="M0 60C80 20 160 100 240 60C320 20 400 100 480 60C560 20 640 100 720 80C800 60 880 20 960 60C1040 100 1120 20 1200 60C1280 100 1360 20 1440 60C1520 100 1600 40 1680 60C1760 80 1840 20 1921 60V149H0V60Z"
            fill="#336E00"
          />
          {/* Lighter green wave (front) */}
          <path
            d="M0 80C80 40 160 110 240 80C320 50 400 110 480 80C560 50 640 110 720 90C800 70 880 40 960 80C1040 110 1120 40 1200 80C1280 110 1360 40 1440 80C1520 110 1600 60 1680 80C1760 100 1840 40 1921 80V149H0V80Z"
            fill="#3C8100"
          />
        </svg>
      </div>
    </section>
  );
}

/* Decorative brown "stitched button" circle */
function BrownButton({ className }: { className?: string }) {
  return (
    <div
      className={`w-12 h-12 items-start relative isolate ${className ?? ""}`}
    >
      <div className="h-[45px] w-[45px] absolute top-0 left-0 shadow-[2.9px_2.9px_0px_#723501] rounded-full bg-[#9e510e] border-[#723500]" />
      <div
        className="h-[43px] w-[5.8px] absolute top-[5.4px] left-[35.6px] bg-[#723500] z-[1]"
        style={{
          transform: "rotate(45deg)",
          transformOrigin: "0 0",
        }}
      />
    </div>
  );
}
