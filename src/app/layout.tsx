import { Suspense } from "react";
import type { Metadata } from "next";

import "./globals.css";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import SideNavbar from "@/components/layout/side-navbar";
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
          <div className="mx-auto flex min-h-screen max-w-7xl md:grid md:grid-cols-10">
            <SideNavbar />
            <main className="w-full border-x border-slate-200 md:col-span-8 lg:col-span-5">
              <Header />
              <Suspense fallback={<Loading />}>{children}</Suspense>
              <Footer />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
