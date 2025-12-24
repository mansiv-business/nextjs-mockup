import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "[Your company name], Your online business partner",
  description: "Your ideal business partner to help you grow your service related business online",
  authors: [
    { name: "Mansiv Al Ferdous"}
  ],
  creator: 'Mansiv Al Ferdous',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
