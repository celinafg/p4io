import type { Metadata } from "next";
import { DM_Sans, Encode_Sans } from "next/font/google";
import "../styles/globals.scss";

const dmsans = DM_Sans({ subsets: ["latin"], variable: "--font-dmsans" });
const encodesans = Encode_Sans({
  subsets: ["latin"],
  variable: "--font-encodesans",
});

export const metadata: Metadata = {
  title: "Celina's Portfolio",
  description: "handmade by the author",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmsans.variable} ${encodesans.variable}`}>
        {children}
      </body>
    </html>
  );
}
