import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../styles/globals.scss";
import { getAllprojects } from "../../lib/api";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Celina's Portfolio",
  description: "handmade by the author",
};

interface Node {
  data: {
    hProperties: {
      id: string;
    };
  };
  value: string;
}

interface Link {
  href: string;
  label: string;
  status?: string; // Optional property for status
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const projects = await getAllprojects();

  return (
    <html lang="en">
      <body className={dmsans.className}>{children}</body>
    </html>
  );
}
