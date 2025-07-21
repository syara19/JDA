import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/parts/Navbar";
import { Providers } from "@/components/providers";



export const metadata: Metadata = {
  title: "Home",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <Providers>

          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
