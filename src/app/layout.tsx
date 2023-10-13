import { Suspense } from "react";
import type { Metadata } from "next";

import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import Loading from "./loading";

export const metadata: Metadata = {
  title: "Blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body className="container mx-auto">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="grow">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
