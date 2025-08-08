import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "RunBox AI",
  description: "Get your AI tasks done with RunBox",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
