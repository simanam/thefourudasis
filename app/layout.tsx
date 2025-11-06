import type { Metadata } from "next";
import { Inter, Space_Grotesk, Anton } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Four Udasis | Guru Nanak Dev Ji's Journey",
  description: "A cinematic exploration of Guru Nanak Dev Ji's four journeys across the world, spreading the message of unity and truth.",
  keywords: ["Guru Nanak", "Udasis", "Sikh History", "Journey", "Spirituality"],
  authors: [{ name: "Amandeep Singh" }],
  openGraph: {
    title: "The Four Udasis",
    description: "Experience the cinematic journey of Guru Nanak Dev Ji through four sacred travels",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${anton.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
