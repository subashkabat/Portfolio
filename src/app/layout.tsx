import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Subash Ranjan Kabat | Principal & Professor",
  description:
    "Personal portfolio of Dr. Subash Ranjan Kabat — Principal at RITE Bhubaneswar, Ph.D. in Electrical Engineering, researcher in renewable energy, power systems, and AI/ML with 32+ publications.",
  keywords: [
    "Dr. Subash Ranjan Kabat",
    "Electrical Engineering",
    "RITE Bhubaneswar",
    "Renewable Energy",
    "Power Systems",
    "DFIG",
    "LVRT",
    "IEEE",
    "Professor",
    "Principal",
  ],
  authors: [{ name: "Dr. Subash Ranjan Kabat" }],
  creator: "Dr. Subash Ranjan Kabat",
  metadataBase: new URL("https://drsubashkabat.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Dr. Subash Ranjan Kabat | Principal & Professor",
    description:
      "Principal at RITE Bhubaneswar • Ph.D. in Electrical Engineering • 32+ research publications in renewable energy, power systems & AI/ML.",
    siteName: "Dr. Subash Ranjan Kabat – Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 500,
        height: 500,
        alt: "Dr. Subash Ranjan Kabat",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Dr. Subash Ranjan Kabat | Principal & Professor",
    description:
      "Principal at RITE Bhubaneswar • Ph.D. in Electrical Engineering • 32+ research publications in renewable energy, power systems & AI/ML.",
    images: ["/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
