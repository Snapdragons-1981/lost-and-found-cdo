import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lost & Found CDO - Helping Cagayan de Oro Reunite with What Matters",
  description: "Community platform for reporting lost and found items in Cagayan de Oro. Help reunite people with their belongings.",
  keywords: ["lost and found", "Cagayan de Oro", "CDO", "community", "lost items", "found items", "philippines"],
  openGraph: {
    title: "Lost & Found CDO",
    description: "Helping Cagayan de Oro reunite people with what matters.",
    url: "https://lostfoundcdo.ph",
    siteName: "Lost & Found CDO",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lost & Found CDO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lost & Found CDO",
    description: "Helping Cagayan de Oro reunite people with what matters.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
