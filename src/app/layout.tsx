import { Suspense } from "react";
import type { Metadata } from "next";

import "./globals.css";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import SideBars from "@/components/layout/side-bars";
import TabBars from "@/components/layout/tab-bars";
import { ThemeProvider } from "@/components/theme-provider";

import Loading from "./loading";

const siteName = `${process.env.USER_NAME} Blog`;
const description = `${process.env.USER_NAME}のブログ`;
const url = process.env.URL;

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
  },
  alternates: {
    canonical: url,
  },
  metadataBase: new URL(url ?? "http://localhost:3000"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex">
            <SideBars />
            <main className="mx-auto min-h-screen w-full max-w-screen-sm px-4 pb-12 md:pb-0">
              <Header />
              <Suspense fallback={<Loading />}>{children}</Suspense>
              <Footer />
            </main>
            <TabBars />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
