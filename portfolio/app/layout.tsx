import ContactFooter from "@/components/contact-footer";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { TooltipProvider } from "@radix-ui/react-tooltip";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <TooltipProvider delayDuration={200}>
          <ThemeProvider>
            <Navbar />
            <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
            <ContactFooter />
            <Toaster richColors position="bottom-right" />
          </ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
