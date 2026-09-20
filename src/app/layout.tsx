import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import ScrollProgress from "@/components/layout/ScrollProgress";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mukesh S — Computer Science Engineering Student",
  description:
    "Personal portfolio of Mukesh S, a Computer Science Engineering student exploring Artificial Intelligence, Data Analytics, and Software Development.",
  keywords: [
    "Mukesh S",
    "Computer Science",
    "Portfolio",
    "Artificial Intelligence",
    "Data Analytics",
    "Software Development",
    "Python",
    "KGiSL Institute of Technology",
  ],
  authors: [{ name: "Mukesh S" }],
  openGraph: {
    title: "Mukesh S — Computer Science Engineering Student",
    description:
      "Personal portfolio of Mukesh S — exploring AI, Data Analytics, and Software Development.",
    type: "website",
    locale: "en_IN",
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
