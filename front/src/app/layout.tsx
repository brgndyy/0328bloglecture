import "./globals.css";

import localFont from "next/font/local";
import Header from "@/components/Header/Header";
import Card from "@/components/Card/Card";

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
          {children}
        </Card>
      </body>
    </html>
  );
}
