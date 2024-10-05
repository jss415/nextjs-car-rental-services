import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "./globals.css";
import { Libre_Franklin } from "next/font/google";
import Navbar from "@/components/NavigationBar/NavigationBar";
import Providers from "./providers";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Car Rental",
  description: "Rent a car.",
};

const libre_franklin = Libre_Franklin({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre_franklin",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={libre_franklin.variable}>
          <Providers>
            <Navbar />
            <main className="mx-auto max-w-6xl xl:max-w-7xl px-8 py-10">
              {children}
            </main>
            <Footer />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
