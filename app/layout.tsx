import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lithia Project | Muhammad Bagus Indrawan",
  description: "Portfolio of Muhammad Bagus Indrawan, backend enthusiast and quality assurance-minded engineer.",
  icons: {
    icon: "/lithiaproject.png",
  },
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
