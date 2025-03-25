import type { Metadata } from "next";
import "../styles/globals.css";

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
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontTitle.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
