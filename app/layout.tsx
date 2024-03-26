import { DM_Sans, Encode_Sans } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./styles/globals.scss";

const dmsans = DM_Sans({ subsets: ["latin"], variable: "--font-dmsans" });
const encodesans = Encode_Sans({
  subsets: ["latin"],
  variable: "--font-encodesans",
});

export const metadata: Metadata = {
  title: "Celina's Portfolio",
  description: "handmade by Celina",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLinks = [
    { href: "#home", label: "home", status: "active" },
    { href: "#projects", label: "projects" },
    { href: "#about", label: "about" },
    { href: "resume.com", label: "resume", customClassName: "hide" },
  ];
  return (
    <html lang="en">
      <body className={`${dmsans.variable} ${encodesans.variable}`}>
        <Navbar links={navLinks} />
        <main style={{ padding: "4rem" }}>{children}</main>
      </body>
    </html>
  );
}
