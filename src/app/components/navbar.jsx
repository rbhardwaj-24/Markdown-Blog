"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ModeToggle } from "./ThemeBtn";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  
  

  return (
    <nav className="sticky top-0 z-50 border-b backdrop-blur mb-3">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight hover:text-blue-400 hover:scale-110 transition-transform duration-300"
        >
          next.js-BLOG
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="/"
            className="hover:text-blue-400 hover:scale-110 transition-transform duration-300"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="hover:text-blue-400 hover:scale-110 transition-transform duration-300"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="hover:text-blue-400 hover:scale-110 transition-transform duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-400 hover:scale-110 transition-transform duration-300"
          >
            Contact
          </Link>
          <div className="flex items-center">
            <Button variant="outline" className="mx-1 cursor-pointer">
              Login
            </Button>
            <Button variant="outline" className="mx-1 cursor-pointer">
              SignUp
            </Button>
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Hamburger */}
        <Sheet>
          <SheetTrigger
            className="md:hidden flex items-center p-2"
            aria-label="Open menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>next.js-BLOG </SheetTitle>
            {menuOpen && (
              <div className="md:hidden">
                <Link
                  href="/"
                  className="block py-2 hover:text-blue-400 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/blog"
                  className="block py-2 hover:text-blue-400 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/about"
                  className="block py-2 hover:text-blue-400 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block py-2 hover:text-blue-400 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
                <div>
                  <Button variant="outline" className="mx-1">
                    Login
                  </Button>
                  <Button variant="outline" className="mx-1">
                    SignUp
                  </Button>
                  <ModeToggle />
                </div>
              </div>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
