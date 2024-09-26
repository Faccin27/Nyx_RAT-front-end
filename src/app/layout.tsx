import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider as NextThemesProvider } from "@/components/provedor-tema";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nyx Rat",
  description: "The coolest Rat for fun!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
      >                                                    
        <body className={`${inter.className} min-h-screen `}>
          {children}
        </body>
      </NextThemesProvider>
    </html>
  );
}
