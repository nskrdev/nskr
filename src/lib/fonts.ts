import {
  IBM_Plex_Mono as FontMono,
  IBM_Plex_Sans as FontSans,
  VT323 as FontVT323,
} from "next/font/google";

export const fontSans = FontSans({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontVT323 = FontVT323({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-vt323",
});
