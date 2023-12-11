import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "next/components/nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drello",
  description: "A simple note taking app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={``}>
        <Nav />
        <main className="flex flex-col min-h-screen h-screen justify-center  pt-[4rem] bg-gradient-to-r via-purple-900 from-cyan-950 to-pink-400 ">
          {children}
        </main>
      </body>
    </html>
  );
}
