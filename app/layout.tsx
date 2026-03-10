import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ravindu Vithanage | Full Stack Web Developer",
  description:
    "Full Stack Web Developer specializing in Laravel, REST APIs, WordPress, and modern web technologies. Building scalable web applications.",
  keywords: [
    "Full Stack Developer",
    "Laravel",
    "PHP",
    "React",
    "Next.js",
    "REST API",
    "Web Developer",
    "Sri Lanka",
  ],
  authors: [{ name: "Ravindu Vithanage" }],
  creator: "Ravindu Vithanage",
  openGraph: {
    title: "Ravindu Vithanage | Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in Laravel, REST APIs, WordPress, and modern web technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravindu Vithanage | Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in Laravel, REST APIs, WordPress, and modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
