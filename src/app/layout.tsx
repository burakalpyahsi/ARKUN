import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ARKUN | Next-Gen Defense Manufacturing ERP & Compliance",
  description: "Defense-grade ERP with AS9100 and AQAP compliance built into the code. 15% cost savings, zero audit failures for defense industry suppliers.",
  keywords: ["Defense Manufacturing ERP", "AS9100 Rev D Compliance", "Digital Genealogy", "IIoT Defense", "ARKUN Defense", "Aerospace Compliance"],
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-teal-900 min-h-screen flex flex-col`}>
        <LanguageProvider>
          <Navbar />
          <main className="grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

