import { Suspense } from "react";
import type { Metadata } from "next";

import "./globals.css";

import Script from "next/script";

import { Header } from "@/components/layout/header";
import { NavigationMenu } from "@/components/layout/navigation-menu";
import { SideBars } from "@/components/layout/side-bars";
import { TabBars } from "@/components/layout/tab-bars";
import { ThemeProvider } from "@/components/theme-provider";
import { getInformation } from "@/lib/microcms";

import Loading from "./loading";

export async function generateMetadata(): Promise<Metadata> {
  const information = await getInformation();
  const { siteName, description, url } = information;
  return {
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
}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const information = await getInformation();

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
            <aside className="sticky hidden w-[220px] shrink-0 border-r md:block">
              <SideBars>
                <NavigationMenu {...information} />
              </SideBars>
            </aside>
            <main className="mx-auto min-h-screen w-full min-w-[320px] max-w-screen-sm px-4 pb-12 md:pb-0">
              <Header {...information} />
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </main>
            <TabBars />
          </div>
        </ThemeProvider>
        <Script src="//cdn.iframe.ly/embed.js" />
      </body>
    </html>
  );
}
