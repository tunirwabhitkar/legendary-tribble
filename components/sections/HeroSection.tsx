"use client";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-[#ffdd6e] overflow-hidden min-h-[700px] lg:min-h-[806px] flex flex-col">
      {/* Decorative clouds */}
      <img
        src="/images/cloud.png"
        alt=""
        className="absolute left-4 lg:left-[166px] top-4 lg:top-[30px] w-[140px] lg:w-[277px] h-auto opacity-90 float-anim pointer-events-none"
      />
      <img
        src="/images/cloud.png"
        alt=""
        className="absolute left-[-40px] lg:left-[-100px] top-[180px] lg:top-[270px] w-[200px] lg:w-[386px] h-auto opacity-80 float-slow-anim pointer-events-none"
      />
      <img
        src="/images/cloud.png"
        alt=""
        className="absolute right-[-20px] lg:right-[-20px] top-[100px] lg:top-[156px] w-[240px] lg:w-[485px] h-auto opacity-80 float-anim pointer-events-none"
        style={{ animationDelay: "1s" }}
      />

      {/* Sun */}
      <img
        src="/images/sun.png"
        alt=""
        className="absolute right-[5%] lg:right-[140px] top-[30px] lg:top-[47px] w-[160px] lg:w-[303px] h-auto float-slow-anim pointer-events-none"
        style={{ animationDelay: "0.5s" }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-16 pb-24 lg:pb-32 text-center gap-10 lg:gap-14">
        {/* Badges */}
        <div className="flex flex-wrap gap-3 justify-center">
          <Badge>Ages 6–15</Badge>
          <Badge>Only 15 Seats per batch</Badge>
        </div>

        {/* Headline */}
        <div className="flex flex-col gap-2 items-center">
          <h1
            className="font-montserrat-alt font-extrabold text-3xl sm:text-4xl lg:text-5xl text-black leading-tight max-w-[700px]"
            style={{ fontFamily: "var(--font-montserrat-alt), sans-serif" }}
          >
            Make Your Child&apos;s Summer{" "}
            <span className="text-[#0649c6]">Productive</span>
          </h1>
          <p
            className="font-dm font-bold text-3xl sm:text-4xl lg:text-5xl text-[#e70004] leading-tight"
          >
            10 Day French Summer Camp
          </p>
        </div>

        {/* Subtext */}
        <div className="flex flex-col gap-4 items-center">
          <p className="font-dm text-base md:text-lg lg:text-xl text-[#141415] max-w-xl">
            Foreign languages are disappearing from schools.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl">
            <span className="font-dm font-semibold text-base md:text-lg lg:text-xl text-[#141415]">
              Give your child a
            </span>
            <Pill>🌍 Global Edge</Pill>
            <span className="font-dm font-semibold text-base md:text-lg lg:text-xl text-[#141415]">
              through
            </span>
            <Pill>🎮 Fun</Pill>
            <Pill>🧠 brain-based</Pill>
            <span className="font-dm font-semibold text-base md:text-lg lg:text-xl text-[#141415]">
              learning they&apos;ll actually enjoy.
            </span>
          </div>
        </div>

        {/* CTA */}
        <Button
          className="bg-[#0649c6] hover:bg-[#0540b0] text-[#fafafa] font-dm font-semibold text-xl md:text-2xl px-8 py-5 h-auto rounded-2xl border-b-4 border-r-4 border-black transition-all duration-200 hover:translate-y-[-2px] hover:shadow-xl"
          onClick={() =>
            document
              .getElementById("pricing")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          👉 Reserve a Seat
        </Button>
      </div>

      {/* Bottom grass/forest wave – SVG 217 (darker, behind) */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="197" viewBox="0 0 1920 197" fill="none" className="w-full h-auto block">
          <g filter="url(#filter0_n_1_274)">
            <path d="M1920 13.504V197H-2.00012V13.504L40.3231 152.913L59.3685 42.498L90.5818 162.446L123.911 81.4214L141.899 148.942L169.938 57.9879L187.925 115.976L216.493 42.498L244.532 139.409L265.165 81.4214L293.733 169.992L306.43 21.4476L345.05 127.494L360.392 42.498L391.605 162.446L424.935 81.4214L442.922 148.942L470.961 57.9879L488.948 115.976L517.517 42.498L545.556 139.409L566.188 81.4214L594.756 169.992L607.453 21.4476L646.073 115.976L664.061 42.498L692.1 139.409L710.087 81.4214L725.429 162.446L753.997 21.4476L771.984 139.409L800.024 0L828.592 115.976L843.934 42.498L867.212 139.409L882.554 81.4214L900.541 162.446L929.109 21.4476L962.439 148.942L983.071 57.9879L998.413 102.472L1019.05 21.4476L1034.39 162.446L1057.67 57.9879L1080.41 115.976L1116.39 0L1148.66 140.998L1164 56.002L1195.22 175.95L1228.55 94.9254L1246.53 162.446L1274.57 71.4919L1292.56 129.48L1321.13 56.002L1349.17 152.913L1369.8 94.9254L1398.37 183.496L1411.06 34.9516L1449.68 129.48L1467.67 56.002L1495.71 152.913L1513.7 94.9254L1529.04 175.95L1557.61 34.9516L1575.6 152.913L1603.63 13.504L1632.2 129.48L1647.54 56.002L1670.82 152.913L1686.16 94.9254L1704.15 175.95L1732.72 34.9516L1766.05 162.446L1786.68 71.4919L1802.02 115.976L1822.66 34.9516L1838 175.95L1861.28 71.4919L1884.03 129.48L1920 13.504Z" fill="#336E00" />
          </g>
          <defs>
            <filter id="filter0_n_1_274" x="-2.00012" y="0" width="1922" height="197" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feTurbulence type="fractalNoise" baseFrequency="1.1111111640930176 1.1111111640930176" stitchTiles="stitch" numOctaves={3} result="noise" seed={0} />
              <feComponentTransfer in="noise" result="coloredNoise1">
                <feFuncR type="linear" slope={2} intercept={-0.5} />
                <feFuncG type="linear" slope={2} intercept={-0.5} />
                <feFuncB type="linear" slope={2} intercept={-0.5} />
                <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0" />
              </feComponentTransfer>
              <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
              <feComponentTransfer in="noise1Clipped" result="color1">
                <feFuncA type="table" tableValues="0 0.15" />
              </feComponentTransfer>
              <feMerge result="effect1_noise_1_274">
                <feMergeNode in="shape" />
                <feMergeNode in="color1" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>

      {/* Bottom grass/forest wave – SVG 216 (lighter, in front) */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="197" viewBox="0 0 1920 197" fill="none" className="w-full h-auto block">
          <g filter="url(#filter0_n_1_303)">
            <path d="M-2 13.504V197H1920V13.504L1877.68 152.913L1858.63 42.498L1827.42 162.446L1794.09 81.4214L1776.1 148.942L1748.06 57.9879L1730.07 115.976L1701.51 42.498L1673.47 139.409L1652.84 81.4214L1624.27 169.992L1611.57 21.4476L1572.95 127.494L1557.61 42.498L1526.39 162.446L1493.07 81.4214L1475.08 148.942L1447.04 57.9879L1429.05 115.976L1400.48 42.498L1372.44 139.409L1351.81 81.4214L1323.24 169.992L1310.55 21.4476L1271.93 115.976L1253.94 42.498L1225.9 139.409L1207.91 81.4214L1192.57 162.446L1164 21.4476L1146.02 139.409L1117.98 0L1089.41 115.976L1074.07 42.498L1050.79 139.409L1035.45 81.4214L1017.46 162.446L988.891 21.4476L955.561 148.942L934.929 57.9879L919.587 102.472L898.954 21.4476L883.612 162.446L860.334 57.9879L837.586 115.976L801.611 0L769.339 140.998L753.997 56.002L722.784 175.95L689.454 94.9254L671.467 162.446L643.428 71.4919L625.441 129.48L596.873 56.002L568.833 152.913L548.201 94.9254L519.633 183.496L506.936 34.9516L468.316 129.48L450.329 56.002L422.29 152.913L404.302 94.9254L388.96 175.95L360.392 34.9516L342.405 152.913L314.366 13.504L285.797 129.48L270.455 56.002L247.178 152.913L231.835 94.9254L213.848 175.95L185.28 34.9516L151.95 162.446L131.318 71.4919L115.976 115.976L95.3432 34.9516L80.0011 175.95L56.7234 71.4919L33.9747 129.48L-2 13.504Z" fill="#3C8100" />
          </g>
          <defs>
            <filter id="filter0_n_1_303" x="-2" y="0" width="1922" height="197" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feTurbulence type="fractalNoise" baseFrequency="1.1111111640930176 1.1111111640930176" stitchTiles="stitch" numOctaves={3} result="noise" seed={0} />
              <feComponentTransfer in="noise" result="coloredNoise1">
                <feFuncR type="linear" slope={2} intercept={-0.5} />
                <feFuncG type="linear" slope={2} intercept={-0.5} />
                <feFuncB type="linear" slope={2} intercept={-0.5} />
                <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0" />
              </feComponentTransfer>
              <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
              <feComponentTransfer in="noise1Clipped" result="color1">
                <feFuncA type="table" tableValues="0 0.15" />
              </feComponentTransfer>
              <feMerge result="effect1_noise_1_303">
                <feMergeNode in="shape" />
                <feMergeNode in="color1" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="bg-white px-3 py-2 rounded-2xl font-finger text-[#e00000] text-base md:text-lg uppercase tracking-wide"
      style={{ fontFamily: "var(--font-finger-paint), cursive" }}
    >
      {children}
    </span>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-white px-3 py-1 rounded-full font-dm font-bold text-base md:text-lg text-black">
      {children}
    </span>
  );
}
