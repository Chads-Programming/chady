import type { Metadata } from "next";
import { ThemeProvider } from "./shared/components/theme-provider";
import { Header } from "./shared/components/header";
import { DM_Sans } from "next/font/google";
import "./globals.css";

import "@repo/ui/globals.css";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Chady",
  description: "The next challenger page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${dm_sans.variable} bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
