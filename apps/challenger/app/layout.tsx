import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./shared/components/theme-provider";
import { Header } from "./shared/components/header";
import { Footer } from "./shared/components/footer";
import { DM_Sans } from "next/font/google";

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
      <body className={`font-sans ${dm_sans.variable}`}>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <main className="w-full h-screen flex flex-col px-4">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
