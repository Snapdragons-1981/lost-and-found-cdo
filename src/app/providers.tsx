"use client";

import { ClerkProvider as BaseClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <BaseClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      appearance={{
        variables: {
          colorPrimary: "#22c55e",
          colorBackground: "#ffffff",
          borderRadius: "12px",
        },
        elements: {
          formButtonPrimary: "bg-green-600 hover:bg-green-700",
          card: "shadow-xl",
        },
      }}
    >
      <ThemeProvider attribute="class" defaultTheme="light">
        {children}
      </ThemeProvider>
    </BaseClerkProvider>
  );
}
