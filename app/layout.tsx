import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Himani Bisht | Data Analyst Portfolio",
  description:
    "Professional portfolio of Himani Bisht — Entry-Level Data Analyst based in Chandigarh, India. Specializing in Microsoft Excel, SQL, Power BI, and Python to turn raw numbers into clear business insight.",
  keywords: [
    "Himani Bisht",
    "Data Analyst",
    "Fresher Data Analyst",
    "SQL",
    "Power BI",
    "Excel Dashboards",
    "Python Pandas",
    "Business Intelligence",
    "Chandigarh Data Analyst",
  ],
  authors: [{ name: "Himani Bisht" }],
  creator: "Himani Bisht",
  openGraph: {
    title: "Himani Bisht | Data Analyst Portfolio",
    description:
      "Data Analyst fresher turning raw datasets into actionable executive insights with Excel, SQL, Power BI, and Python.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
