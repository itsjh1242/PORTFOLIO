import type { Metadata } from "next";
import "./globals.css";
// Fonts
import { Nanum_Gothic, Noto_Sans_KR } from "next/font/google";

// Components
import Nav from "./components/ui/nav";

// Font Interfaces
const ngkr = Nanum_Gothic({ subsets: ["latin"], weight: ["700"] });
const nskr = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "김준현",
  description: "김준현 개발자 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nskr.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
