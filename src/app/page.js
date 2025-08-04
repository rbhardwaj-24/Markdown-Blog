"use client"
import React from "react";

const page = () => {
  return (
    <main>
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Animated SVG Backgrounds */}
        <svg
          className="absolute left-0 top-0 w-64 h-64 opacity-30 animate-spin-slow pointer-events-none"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="200" cy="200" r="180" stroke="#6366f1" strokeWidth="24" />
        </svg>
        <svg
          className="absolute right-0 bottom-0 w-80 h-80 opacity-20 animate-pulse pointer-events-none"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="60" y="60" width="280" height="280" rx="80" fill="#a78bfa" />
        </svg>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
            Welcome to{" "}
            <span className="text-indigo-600 dark:text-indigo-400 animate-gradient-x bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              next.js-BLOG
            </span>
          </h1>
          <p className="max-w-2xl text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            A modern, markdown-powered blog built with Next.js, Tailwind CSS,
            and Shadcn UI. Discover articles, guides, and resources for
            developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/blog"
              className="inline-block px-8 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition-colors duration-200 animate-bounce"
            >
              Read the Blog
            </a>
            <a
              href="/about"
              className="inline-block px-8 py-3 rounded-lg border border-indigo-600 text-indigo-600 dark:text-indigo-400 font-semibold hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Extra animated SVG accent (optional) */}
        <svg
          className="absolute left-1/2 bottom-0 -translate-x-1/2 w-40 h-40 opacity-40 animate-float pointer-events-none"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse cx="100" cy="100" rx="80" ry="40" fill="#f472b6" />
        </svg>

        {/* Tailwind custom animation keyframes (add to your globals.css or tailwind.config.js) */}
        <style jsx>{`
          @keyframes spin-slow {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          .animate-spin-slow {
            animation: spin-slow 18s linear infinite;
          }
          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-16px);
            }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          @keyframes gradient-x {
            0%,
            100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 6s ease-in-out infinite;
          }
        `}</style>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
              Pricing Plans
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Choose the plan that suits you best
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Basic Plan */}
            <div className="relative w-full sm:w-1/2 lg:w-1/3 transition-transform duration-300 hover:scale-105 hover:shadow-2xl p-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center transition-colors duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Basic
                </h3>
                <p className="mt-4 text-3xl font-bold text-gray-800 dark:text-white">
                  $9
                  <span className="text-base font-medium text-gray-500 dark:text-gray-300">
                    /mo
                  </span>
                </p>
                <ul className="mt-6 mb-6 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>10GB Storage</li>
                  <li>Email Support</li>
                  <li>Community Access</li>
                </ul>
                <button className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-200">
                  Choose Plan
                </button>
              </div>
            </div>

            {/* Most Popular Plan */}
            <div className="relative w-full sm:w-1/2 lg:w-1/3 transition-transform duration-300 hover:scale-110 hover:shadow-2xl p-4 z-10">
              {/* Star Badge with Popover */}
              <div className="flex justify-center -mb-8">
                <div className="group relative">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-yellow-400 bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300 group-hover:scale-110 cursor-pointer">
                    {/* Star SVG */}
                    <svg
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                  </div>
                  {/* Popover */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-14 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300">
                    <div className="px-4 py-2 rounded-lg bg-yellow-400 text-white text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border-4 border-yellow-400 p-8 text-center transition-colors duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Pro
                </h3>
                <p className="mt-4 text-3xl font-bold text-gray-800 dark:text-white">
                  $29
                  <span className="text-base font-medium text-gray-500 dark:text-gray-300">
                    /mo
                  </span>
                </p>
                <ul className="mt-6 mb-6 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>100GB Storage</li>
                  <li>Priority Support</li>
                  <li>Community Access</li>
                  <li>Weekly Updates</li>
                </ul>
                <button className="w-full px-4 py-2 rounded-lg bg-yellow-400 text-white font-semibold hover:bg-yellow-500 transition-colors duration-200">
                  Choose Plan
                </button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="relative w-full sm:w-1/2 lg:w-1/3 transition-transform duration-300 hover:scale-105 hover:shadow-2xl p-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center transition-colors duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Premium
                </h3>
                <p className="mt-4 text-3xl font-bold text-gray-800 dark:text-white">
                  $59
                  <span className="text-base font-medium text-gray-500 dark:text-gray-300">
                    /mo
                  </span>
                </p>
                <ul className="mt-6 mb-6 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>1TB Storage</li>
                  <li>24/7 Support</li>
                  <li>Community Access</li>
                  <li>Daily Updates</li>
                  <li>Custom Domain</li>
                </ul>
                <button className="w-full px-4 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors duration-200">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
              What Our Users Say
            </h2>
            <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">
              Real feedback from our amazing community
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Review 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
              <div className="group bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer">
                <div className="p-6 flex flex-col items-center text-center">
                  <svg
                    className="w-10 h-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 17a4 4 0 01-4-4V7a4 4 0 014-4h2a4 4 0 014 4v6a4 4 0 01-4 4H7zm10 0a4 4 0 01-4-4V7a4 4 0 014-4h2a4 4 0 014 4v6a4 4 0 01-4 4h-2z" />
                  </svg>
                  <p className="text-gray-700 dark:text-gray-200 mb-4">
                    &quot;This service has been a game-changer for our business.
                    Highly recommend!&quot;
                  </p>
                  <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                    John Doe
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    CEO, Company A
                  </span>
                </div>
              </div>
            </div>
            {/* Review 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
              <div className="group bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer">
                <div className="p-6 flex flex-col items-center text-center">
                  <svg
                    className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 17a4 4 0 01-4-4V7a4 4 0 014-4h2a4 4 0 014 4v6a4 4 0 01-4 4H7zm10 0a4 4 0 01-4-4V7a4 4 0 014-4h2a4 4 0 014 4v6a4 4 0 01-4 4h-2z" />
                  </svg>
                  <p className="text-gray-700 dark:text-gray-200 mb-4">
                    &quot;Amazing experience! The team was professional and the
                    results were outstanding.&quot;
                  </p>
                  <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">
                    Jane Smith
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Marketing Director, Company B
                  </span>
                </div>
              </div>
            </div>
            {/* Review 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
              <div className="group bg-gradient-to-br from-pink-50 to-pink-100 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer">
                <div className="p-6 flex flex-col items-center text-center">
                  <svg
                    className="w-10 h-10 text-pink-400 mb-4 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 17a4 4 0 01-4-4V7a4 4 0 014-4h2a4 4 0 014 4v6a4 4 0 01-4 4H7zm10 0a4 4 0 01-4-4V7a4 4 0 014-4h2a4 4 0 014 4v6a4 4 0 01-4 4h-2z" />
                  </svg>
                  <p className="text-gray-700 dark:text-gray-200 mb-4">
                    &quot;Exceptional service and support. We couldn&apos;t be happier.&quot;
                  </p>
                  <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400 group-hover:text-pink-700 dark:group-hover:text-pink-300 transition-colors duration-300">
                    Alex Lee
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Product Manager, Company C
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
