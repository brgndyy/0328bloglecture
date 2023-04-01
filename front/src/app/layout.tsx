import "./globals.css";

import localFont from "next/font/local";
import Header from "@/components/Header/Header";
import Card from "@/components/Card/Card";
import ContentCard from "@/components/Card/ContentCard";
import Footer from "@/components/Footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "BRGNDY의 블로그",
    template: "BRGNDY의 블로그 || %s",
  },
  description: "BRGNDY 개인 블로그",
  icons: {
    icon: "/favicon.ico",
  },
};

const myFont = localFont({
  src: "./fonts/RobotoCondensed-Bold.ttf",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body>
        <Card>
          <Header />
          <ContentCard>{children}</ContentCard>
          <Footer />
        </Card>
      </body>
    </html>
  );
}
