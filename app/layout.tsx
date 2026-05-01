import type { Metadata } from "next";
import { DM_Sans, Finger_Paint, Montserrat_Alternates } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const fingerPaint = Finger_Paint({
  subsets: ["latin"],
  variable: "--font-finger-paint",
  weight: "400",
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  variable: "--font-montserrat-alt",
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "SageNest – 10-Day French Summer Camp for Kids",
  description:
    "Give your child a global edge through fun, brain-based learning they'll actually enjoy. Ages 6–15, only 15 seats per batch.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${fingerPaint.variable} ${montserratAlternates.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
