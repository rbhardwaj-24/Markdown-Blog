"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-10 pb-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* Branding & Description */}
        <div className="mb-6 md:mb-0">
          <a
            href="/"
            className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
          >
            next.js-BLOG
          </a>
          <p className="mt-2 text-gray-400 max-w-xs text-sm">
            A modern, markdown-powered blog built with Next.js, Tailwind CSS,
            and Shadcn UI.
          </p>
        </div>
        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-8">
          <div>
            <h4 className="font-semibold mb-2 text-white">Links</h4>
            <ul className="space-y-1">
              <li>
                <a href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="hover:text-blue-400 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white">Legal</h4>
            <ul className="space-y-1">
              <li>
                <a
                  href="/privacy"
                  className="hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Social Icons */}
        <div className="flex flex-col items-start gap-3">
          <h4 className="font-semibold mb-2 text-white">Follow Us</h4>
          <div className="flex gap-4">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-blue-400 transition-colors"
            >
              {/* Twitter SVG */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 5.92c-.8.36-1.67.6-2.58.71a4.48 4.48 0 001.97-2.48 8.93 8.93 0 01-2.83 1.08 4.48 4.48 0 00-7.64 4.08A12.72 12.72 0 013 4.89a4.48 4.48 0 001.39 5.98c-.7-.02-1.36-.21-1.94-.53v.05a4.48 4.48 0 003.6 4.39c-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07a4.48 4.48 0 004.18 3.11A9 9 0 012 19.54a12.72 12.72 0 006.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.19 0-.37-.01-.56A9.1 9.1 0 0024 4.59a8.93 8.93 0 01-2.54.7z" />
              </svg>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-blue-400 transition-colors"
            >
              {/* GitHub SVG */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.02-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.73 1.02a9.2 9.2 0 012.49-.34c.85 0 1.7.11 2.49.34 1.9-1.29 2.73-1.02 2.73-1.02.54 1.4.2 2.44.1 2.7.63.72 1.02 1.63 1.02 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z" />
              </svg>
            </a>
            <a
              href="mailto:info@nextjs-blog.com"
              aria-label="Email"
              className="hover:text-blue-400 transition-colors"
            >
              {/* Email SVG */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 8.5V19a2 2 0 01-2 2H5a2 2 0 01-2-2V8.5l9 5.25L21 8.5zm0-2.25a2 2 0 00-2-2H5a2 2 0 00-2 2v.75l9 5.25 9-5.25V6.25z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} next.js-BLOG. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
