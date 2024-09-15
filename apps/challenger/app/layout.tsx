"use client";

import type { Metadata } from "next";
import { ThemeProvider } from "./shared/components/theme-provider";
import { Header } from "./shared/components/header";
import { Onest } from "next/font/google";
import "./globals.css";

import "@repo/ui/globals.css";
import { FetchingProvider } from "./shared/providers/fetching-provider";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-sans",
});

// export const metadata: Metadata = {
//   title: "Chady",
//   description: "The next challenger page",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${onest.variable} bg-background`}>
        <FetchingProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Header />
            {children}
          </ThemeProvider>
        </FetchingProvider>
      </body>
    </html>
  );
}
