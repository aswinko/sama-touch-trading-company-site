import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/common/Header";
import { ThemeProvider } from "@/hooks/theme-provider";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Sama Touch General Trading Company",
  description: "Sama Touch General Trading Company - Specializing in food, spices, pulses, and dairy products.",
  keywords: "Sama Touch, trading company, food, spices, pulses, dairy products, import export",
  authors: [{ name: "Sama Touch General Trading Company", url: "https://samatouch.com" }],
  robots: "index, follow",
  openGraph: {
    title: "Sama Touch General Trading Company",
    description: "Leading trading company in food, spices, pulses, and dairy products.",
    url: "https://samatouch.com",
    siteName: "Sama Touch General Trading Company",
    images: [
      {
        url: "https://samatouch.com/home-page.png", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Sama Touch General Trading Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// Exporting viewport separately as per Next.js best practices
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} no-visible-scrollbar`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative scroll-smooth pt-5">
            <Header />
            <div>{children}</div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
