import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Victoria D. Jeffrey | Senior Staff Software Engineering Manager",
  description:
    "Portfolio of Victoria D. Jeffrey - Senior Staff Software Engineering Manager",
  keywords: [
    "software engineer",
    "engineering manager",
    "portfolio",
    "Golang",
  ],
  authors: [{ name: "Victoria D. Jeffrey" }],
  openGraph: {
    title: "Victoria D. Jeffrey | Senior Staff Software Engineering Manager",
    description:
      "Portfolio of Victoria D. Jeffrey - Senior Staff Software Engineering Manager",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${lato.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
