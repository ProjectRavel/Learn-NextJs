"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const navLinks = [
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
    { name: "Forgot Password", href: "/forgot-password" },
    ]

    const pathname = usePathname();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-lg font-bold">ProjectRavels</div>
            <div>
                <ul className="flex space-x-4">
                    {navLinks.map((link) => {
                        const isActive = pathname == link.href;
                        return (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={`text-white hover:text-gray-300 ${
                                        isActive ? "font-bold" : ""
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
