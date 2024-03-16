import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../styles/globals.scss";

const dmsans = DM_Sans({ subsets: ["latin"] });

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
      <body className={dmsans.className}>{children}</body>
    </html>
  );
}
