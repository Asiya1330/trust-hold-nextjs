"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export interface MenuItem {
  title: string;
  href?: string;
  children?: MenuItem[];
}
const menuItems: MenuItem[] = [
  { title: 'Home', href: '/' },
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
  {/* <Header logoUrl={logoUrl} menuItems={menuItems} /> */}
    <main className="flex-grow">{children}</main>
  <Footer />
</div>
  );
}
