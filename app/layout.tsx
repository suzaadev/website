import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SUZAA - Payments, Simplified",
  description: "Open-source, self-hostable, white-label software — offered as SaaS or deployable on your own servers.",
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

