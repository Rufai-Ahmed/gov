import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WePay - Banking Beyond Boundaries",
  description:
    "Experience limitless financial freedom with WePay. Leverage advanced biometric technology for secure, seamless, and device-independent banking in Africa.",
  openGraph: {
    title: "WePay - Banking Beyond Boundaries",
    description:
      "Experience limitless financial freedom with WePay. Leverage advanced biometric technology for secure, seamless, and device-independent banking in Africa.",
    url: "https://www.wepayweb.com/",
    siteName: "WePay",
    images: [
      {
        url: "/images/mainLogo.png", // Update with your actual image URL
        width: 1200,
        height: 630,
        alt: "WePay - Banking Beyond Boundaries",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WePay - Banking Beyond Boundaries",
    description:
      "Experience limitless financial freedom with WePay. Leverage advanced biometric technology for secure, seamless, and device-independent banking in Africa.",
    images: ["/images/mainLogo.png"], // Update with your actual image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
