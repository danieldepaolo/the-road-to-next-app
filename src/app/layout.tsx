import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AppBar from "@/components/AppBar";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ticket Management App",
  description: "App for the course The Road To Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <AppBar />
          <main className="p-6 min-h-full flex-1 flex flex-col">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
