"use client";

import Image from "next/image";

export default function ProblemSection() {
  return (
    <section className="relative bg-[#3e8108] w-full overflow-hidden">
      {/* Main container */}
      <div className="max-w-[1780px] mx-auto px-4 lg:px-[72px] py-16 lg:py-[103px]">
        {/* Inner green card */}
        <div className="rounded-[32px] bg-[#468c0e] relative overflow-visible min-h-[826px] flex flex-col lg:flex-row">

          {/* Decorative small leaves on the card */}
          <LeafDecor className="absolute top-[60px] right-[-20px] w-[38px] h-[49px] rotate-[-15deg] hidden lg:block" />
          <LeafDecor className="absolute top-[255px] right-[-40px] w-[68px] h-[75px] rotate-[25deg] hidden lg:block" />
          <LeafDecor className="absolute right-[-15px] bottom-[106px] w-[83px] h-[98px] rotate-[45deg] hidden lg:block z-[1]" />

          {/* Left – Kid image with circle */}
          <div className="relative w-full lg:w-[671px] shrink-0 flex items-end justify-center pt-[95px] lg:pt-[134px]">
            {/* Blue circle behind kid */}
            <div className="absolute bottom-0 left-1/2 lg:left-[0px] lg:translate-x-0 -translate-x-1/2 rounded-full bg-[rgba(6,73,198,0.09)] w-[400px] h-[400px] lg:w-[671px] lg:h-[670px]" />
            <Image
              className="relative z-[1] w-[300px] sm:w-[400px] lg:w-[600px] h-auto object-cover"
              loading="lazy"
              width={600}
              height={673}
              sizes="100vw"
              alt="Child on device"
              src="/images/kid-on-phone.png"
            />
          </div>

          {/* Right – Content area */}
          <div className="flex-1 flex flex-col items-center justify-center relative px-6 lg:px-[68px] py-12 lg:py-[95px] gap-8 lg:gap-16 min-w-0">
            {/* Headline */}
            <div className="flex flex-col items-center gap-5 z-[3] text-center">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl text-[#fafafa] leading-snug max-w-[813px]"
                style={{ fontFamily: "var(--font-finger-paint), cursive" }}
              >
                Is your child spending too much time ⏳on screens this summer?
              </h2>
              <p className="text-base lg:text-xl text-[#fafafa]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Without structure, holidays slip by — and kids fall behind.
              </p>
            </div>

            {/* Problem cards with drop shadow */}
            <div className="w-full max-w-[506px] flex flex-col items-start gap-6 lg:gap-8 z-[3]" style={{ filter: "drop-shadow(20px 16px 20.9px rgba(0,0,0,0.25))" }}>
              {/* Card 1 – Left aligned */}
              <div className="rounded-[64px] bg-[#40861e] flex items-center py-4 px-7 gap-5">
                <span className="text-3xl lg:text-[40px] shrink-0">🎯</span>
                <div className="flex flex-col gap-1">
                  <h3 className="m-0 text-lg lg:text-xl font-bold text-white" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    No Structured Learning
                  </h3>
                  <p className="text-sm lg:text-base text-white font-normal" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    Hours pass with nothing to show
                  </p>
                </div>
              </div>

              {/* Card 2 – Right aligned */}
              <div className="self-end">
                <div className="rounded-[64px] bg-[#40861e] flex items-center py-4 px-7 gap-5">
                  <span className="text-3xl lg:text-[40px] shrink-0">😴</span>
                  <div className="flex flex-col gap-1">
                    <h3 className="m-0 text-lg lg:text-xl font-bold text-white" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                      {`Low Focus & Attention`}
                    </h3>
                    <p className="text-sm lg:text-base text-white font-normal" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                      Screens shrink concentration spans
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 – Left aligned */}
              <div className="rounded-[64px] bg-[#40861e] flex items-center py-4 px-7 gap-5">
                <span className="text-3xl lg:text-[40px] shrink-0">📅</span>
                <div className="flex flex-col gap-1">
                  <h3 className="m-0 text-lg lg:text-xl font-bold text-white" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    Wasted Holidays
                  </h3>
                  <p className="text-sm lg:text-base text-white font-normal" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    Two months gone, nothing gained
                  </p>
                </div>
              </div>
            </div>

            {/* Let's change that */}
            <div
              className="relative text-2xl lg:text-4xl text-[#ffde05] leading-[64px] z-[3]"
              style={{ fontFamily: "var(--font-finger-paint), cursive" }}
            >
              Let&apos;s change that
            </div>

            {/* Giant ? watermark */}
            <span
              className="absolute top-[23px] left-[-11px] text-[200px] lg:text-[320px] font-normal text-[rgba(255,255,255,0.1)] text-center z-[0] select-none pointer-events-none"
              style={{ fontFamily: "var(--font-finger-paint), cursive" }}
              aria-hidden="true"
            >
              ?
            </span>
          </div>
        </div>
      </div>

      {/* Decorative small leaves on the left side of section */}
      <LeafDecor className="absolute top-[398px] left-[19px] w-[68px] h-[75px] rotate-[-45deg] hidden lg:block" />
      <LeafDecor className="absolute top-[647px] left-[81px] w-[84px] h-[99px] rotate-[15deg] z-[3] hidden lg:block" />

      {/* Bottom foliage border */}
      <div className="relative w-full h-[200px] lg:h-[260px] overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1920 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          {/* Leaf group 1 */}
          {leafPositions.map((leaf, i) => (
            <g key={i} transform={`translate(${leaf.x}, ${leaf.y}) rotate(${leaf.r}) scale(${leaf.s})`}>
              <path d={leaf.flip ? leafPath2 : leafPath1} fill={leaf.fill} />
            </g>
          ))}
        </svg>
      </div>
    </section>
  );
}

/* SVG leaf decoration inline component */
function LeafDecor({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 52" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M20 0C20 0 40 15 38 35C36 55 20 52 20 52C20 52 4 55 2 35C0 15 20 0 20 0Z" fill="#7BC142" />
      <path d="M20 8C20 8 20 52 20 52" stroke="#5a9e2f" strokeWidth="1.5" />
      <path d="M20 15L12 22" stroke="#5a9e2f" strokeWidth="1" />
      <path d="M20 22L28 30" stroke="#5a9e2f" strokeWidth="1" />
      <path d="M20 30L10 38" stroke="#5a9e2f" strokeWidth="1" />
    </svg>
  );
}

/* SVG leaf paths for the foliage border */
const leafPath1 = "M0 80C0 80 25 0 50 5C75 10 90 50 85 80C80 110 50 120 30 110C10 100 0 80 0 80Z";
const leafPath2 = "M0 5C25 0 50 10 65 40C80 70 70 110 50 115C30 120 5 100 0 70C-5 40 0 5 0 5Z";

/* Pre-computed leaf positions for the bottom foliage border */
const leafPositions = [
  // Layer 1 - back (darker, larger)
  { x: -30, y: 80, r: -15, s: 1.8, fill: "#2d5a0a", flip: false },
  { x: 120, y: 60, r: 10, s: 2.0, fill: "#336E00", flip: true },
  { x: 280, y: 70, r: -8, s: 1.9, fill: "#2d5a0a", flip: false },
  { x: 430, y: 55, r: 15, s: 2.1, fill: "#336E00", flip: true },
  { x: 580, y: 65, r: -12, s: 1.8, fill: "#2d5a0a", flip: false },
  { x: 720, y: 75, r: 8, s: 2.0, fill: "#336E00", flip: true },
  { x: 870, y: 60, r: -5, s: 1.9, fill: "#2d5a0a", flip: false },
  { x: 1020, y: 70, r: 12, s: 2.1, fill: "#336E00", flip: true },
  { x: 1170, y: 55, r: -10, s: 1.8, fill: "#2d5a0a", flip: false },
  { x: 1310, y: 65, r: 7, s: 2.0, fill: "#336E00", flip: true },
  { x: 1460, y: 75, r: -8, s: 1.9, fill: "#2d5a0a", flip: false },
  { x: 1600, y: 60, r: 14, s: 2.1, fill: "#336E00", flip: true },
  { x: 1750, y: 70, r: -6, s: 1.8, fill: "#2d5a0a", flip: false },
  { x: 1880, y: 55, r: 10, s: 2.0, fill: "#336E00", flip: true },

  // Layer 2 - middle
  { x: 50, y: 90, r: 5, s: 1.6, fill: "#3e8108", flip: true },
  { x: 200, y: 100, r: -10, s: 1.7, fill: "#468c0d", flip: false },
  { x: 350, y: 85, r: 8, s: 1.5, fill: "#3e8108", flip: true },
  { x: 500, y: 95, r: -15, s: 1.6, fill: "#468c0d", flip: false },
  { x: 650, y: 105, r: 12, s: 1.7, fill: "#3e8108", flip: true },
  { x: 800, y: 90, r: -5, s: 1.5, fill: "#468c0d", flip: false },
  { x: 950, y: 100, r: 10, s: 1.6, fill: "#3e8108", flip: true },
  { x: 1100, y: 85, r: -8, s: 1.7, fill: "#468c0d", flip: false },
  { x: 1250, y: 95, r: 15, s: 1.5, fill: "#3e8108", flip: true },
  { x: 1400, y: 105, r: -12, s: 1.6, fill: "#468c0d", flip: false },
  { x: 1550, y: 90, r: 7, s: 1.7, fill: "#3e8108", flip: true },
  { x: 1700, y: 100, r: -10, s: 1.5, fill: "#468c0d", flip: false },
  { x: 1850, y: 85, r: 5, s: 1.6, fill: "#3e8108", flip: true },

  // Layer 3 - front (lighter, smaller)
  { x: 10, y: 120, r: -3, s: 1.4, fill: "#4a9610", flip: false },
  { x: 140, y: 130, r: 8, s: 1.3, fill: "#5ab81a", flip: true },
  { x: 260, y: 115, r: -12, s: 1.5, fill: "#4a9610", flip: false },
  { x: 390, y: 125, r: 5, s: 1.3, fill: "#5ab81a", flip: true },
  { x: 520, y: 135, r: -8, s: 1.4, fill: "#4a9610", flip: false },
  { x: 660, y: 120, r: 10, s: 1.3, fill: "#5ab81a", flip: true },
  { x: 790, y: 130, r: -5, s: 1.5, fill: "#4a9610", flip: false },
  { x: 920, y: 115, r: 12, s: 1.3, fill: "#5ab81a", flip: true },
  { x: 1060, y: 125, r: -10, s: 1.4, fill: "#4a9610", flip: false },
  { x: 1190, y: 135, r: 7, s: 1.3, fill: "#5ab81a", flip: true },
  { x: 1320, y: 120, r: -3, s: 1.5, fill: "#4a9610", flip: false },
  { x: 1450, y: 130, r: 8, s: 1.3, fill: "#5ab81a", flip: true },
  { x: 1580, y: 115, r: -12, s: 1.4, fill: "#4a9610", flip: false },
  { x: 1720, y: 125, r: 5, s: 1.3, fill: "#5ab81a", flip: true },
  { x: 1860, y: 135, r: -8, s: 1.5, fill: "#4a9610", flip: false },
];
