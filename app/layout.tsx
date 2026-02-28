// import AppProvider from "@/config/app-provider";
import { buildMetadata } from "@/config/seo.ioc";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <AppProvider> */}
          <TooltipProvider>
            {children}
            <ThemeToggle />
          </TooltipProvider>
          <Toaster />
          {/* </AppProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
