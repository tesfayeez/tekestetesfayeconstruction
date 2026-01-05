import type { Metadata } from "next";
import { Syne, DM_Sans, Noto_Sans_Ethiopic } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const notoSansEthiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  variable: "--font-noto-ethiopic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tekeste Tesfaye Building Contractor | Grade I Construction Company in Ethiopia",
  description: "Tekeste Tesfaye B.C & WWC - Leading Grade I construction contractor in Ethiopia since 1995. Specializing in buildings, water systems, roads, bridges, schools, and hospitals across Ethiopia.",
  keywords: "construction company Ethiopia, building contractor Addis Ababa, Grade I contractor, water works, infrastructure development, Tekeste Tesfaye",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${dmSans.variable} ${notoSansEthiopic.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
