"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export interface MenuItem {
  title: string;
  href?: string; // Optional for custom links
  children?: MenuItem[]; // For nested menus
}
const menuItems: MenuItem[] = [
  { title: 'Home', href: '/' }, // Add href for direct linking
  { title: 'About', href: '/about' },
  {
    title: 'Contact',
    href: '/contact',
  },
  {
    title: 'Blog',
    children: [
      { title: 'Latest Posts', href: '/blog' },
      { title: 'Categories', href: '/blog/categories' },
    ],
  },
];
const logoUrl = '/your-logo.svg';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <div className="min-h-screen flex flex-col">
  <Header logoUrl={logoUrl} menuItems={menuItems} />
    <main className="flex-grow px-4 py-8">{children}</main>
  <Footer />
</div>
  );
}
