import type { Metadata } from "next";
import "./globals.css";

import { cn } from "@/lib/utils";
import { Nunito } from "next/font/google";

const fontSans = Nunito({ subsets: ["latin"], variable: "--font-sans" });
const fontTitle = Nunito({ subsets: ["latin"], variable: "--font-title" });

export const metadata: Metadata = {
  title: "Resume Craft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${cn(fontSans.variable, fontTitle.variable)} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
