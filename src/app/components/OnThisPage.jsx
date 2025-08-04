"use client";
import React, { useEffect, useState } from "react";

// Utility to slugify headings for IDs (matches rehype-slug)
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

const OnThisPage = ({ htmlContent }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Parse the HTML and extract h2/h3 headings
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;
    const headingElements = tempDiv.querySelectorAll("h2, h3");
    const headingList = Array.from(headingElements).map((el) => ({
      text: el.textContent,
      id: el.id || slugify(el.textContent),
      level: el.tagName,
    }));
    setHeadings(headingList);
  }, [htmlContent]);

  // Smooth scroll handler with URL hash update
  const handleClick = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  if (!headings.length) return null;

  return (
    <div className="w-full md:w-64 px-4 py-4 bg-white dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm transition-all">
      <nav
        className={`
        w-full md:w-56
        md:sticky md:top-24
        z-10
        mb-6 md:mb-0
        px-4 py-4
        bg-white dark:bg-gray-900/80
        border border-gray-200 dark:border-gray-700
        rounded-lg
        shadow-sm
        transition-all
      `}
        aria-label="On this page"
      >
        <h2 className="text-base font-semibold mb-2">On This Page</h2>
        <ul>
          {headings.map((h, i) => (
            <li key={i} className={`my-1 ${h.level === "H3" ? "ml-4" : ""}`}>
              <a
                href={`#${h.id}`}
                onClick={handleClick(h.id)}
                className="block text-sm text-blue-600 hover:underline dark:text-blue-400 transition-colors"
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default OnThisPage;
