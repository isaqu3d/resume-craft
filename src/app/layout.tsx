import type { Metadata } from "next";
import "../styles/globals.css";

import { ThemeProvider } from "@/components/shared/theme-provider";
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
          "min-h-screen bg-background text-primary font-sans antialiased",
          fontSans.variable,
          fontTitle.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
