"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Markdown Magic",
    description: "Tips and tricks for writing and rendering markdown in your blog.",
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="12" fill="#6366F1" />
        <path d="M7 17V7h10v10H7zm2-8v6m2-6v6m2-6v6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Image Optimization",
    description: "Best practices for fast-loading, responsive images in your blog.",
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="12" fill="#10B981" />
        <circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="2" />
        <path d="M8 16l4-4 4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Tailwind Styling",
    description: "Rapidly style your apps using Tailwind CSS utility classes.",
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="12" fill="#F59E42" />
        <path d="M8 12h8M8 16h8M8 8h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-700">
      {/* Hero Section */}
      <section className="relative py-20 flex flex-col items-center justify-center overflow-hidden">
        {/* Animated SVG Background */}
        <motion.svg
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute -top-20 left-1/2 -translate-x-1/2 pointer-events-none"
          width="600"
          height="300"
          viewBox="0 0 600 300"
          fill="none"
        >
          <ellipse
            cx="300"
            cy="150"
            rx="280"
            ry="100"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="0"
              y1="0"
              x2="600"
              y2="300"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6366F1" />
              <stop offset="1" stopColor="#F59E42" />
            </linearGradient>
          </defs>
        </motion.svg>
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative z-10 text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-orange-400 bg-clip-text text-transparent drop-shadow-lg"
        >
          About{" "}
          <Link
            href="/"
            className="text-6xl font-bold tracking-tight hover:text-blue-400 hover:scale-105 transition"
          >
            <span>Our BLOG</span>
          </Link>
        </motion.h1>
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="relative z-10 mt-6 text-xl md:text-2xl text-gray-700 dark:text-gray-300 text-center max-w-2xl"
        >
          Welcome to our programming blog! We share high-quality tutorials,
          guides, and resources to help you become a better developer.
        </motion.p>
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="relative z-10 mt-8"
        >
          <Link
            href="/blog"
            className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Read Our Blog
          </Link>
        </motion.div>
      </section>

      {/* Showcase Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-700">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white tracking-tight">
          <span className="inline-block animate-gradient-x bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">
            Our Projects & Highlights
          </span>
        </h2>
        <div className="container mx-auto px-4 grid gap-10 grid-cols-1 md:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="group bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
            >
              <div className="mb-4">{project.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease-in-out infinite alternate;
        }
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </main>
  );
}
