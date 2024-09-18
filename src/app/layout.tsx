import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/common/Header";
import { ThemeProvider } from "@/hooks/theme-provider";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Sama Touch",
  description: "Sama Touch General Trading Company",
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + "no-visible-scrollbar"}>
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
