import React from "react";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";

const Blog = () => {
  const dirData = fs.readdirSync("src/app/data", "utf-8");
  const BlogData = dirData.map((file) => {
    const fileContent = fs.readFileSync(`src/app/data/${file}`, "utf-8");
    const { data } = matter(fileContent);
    return data;
  });

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Blogs
        </h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {BlogData.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                  {blog.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                  {blog.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>By {blog.author}</span>
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                </div>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-block mt-auto px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
