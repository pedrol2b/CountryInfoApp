import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Country Info App",
  description: "A simple country information app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
