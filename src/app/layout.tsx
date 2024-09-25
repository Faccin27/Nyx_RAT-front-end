import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nyx Rat",
  description: "A web-site to sell computer virus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
