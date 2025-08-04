import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import OnThisPage from "@/app/components/OnThisPage";

function removeTOCSection(markdown){
  return markdown.replace(
    /## Table of Contents[\s\S]*?(?=\n## |\n### |\n# \n$)/,
    ''
  )
}

export default async function BlogPostPage({ params }) {
  // Read the markdown file based on slug
  const filePath = path.join(process.cwd(), "src/app/data", `${params.slug}.md`);

  if(!fs.existsSync(filePath)){
    notFound();
  }
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const contentWithoutToc = removeTOCSection(content);

  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "👋🌍" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme: "one-dark-pro",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    });

  const htmlContent = (await file.process(contentWithoutToc)).toString()

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12 px-4 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        {/* Blog Image with hover animation */}
        <div className="overflow-hidden group">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className="p-8 flex flex-col">
          {/* Author and Date */}
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4 animate-fade-in">
            <span className="font-semibold text-blue-600 dark:text-blue-400 tracking-wide hover:underline transition-all duration-300">
              {data.author}
            </span>
            <span className="italic">
              {new Date(data.date).toLocaleDateString()}
            </span>
          </div>

          {/* Title with text effect */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2 animate-fade-in tracking-tight group-hover:text-blue-600 transition-colors duration-300">
            {data.title}
          </h1>

          {/* Description with border and italic */}
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 border-l-4 border-blue-500 pl-4 italic animate-fade-in delay-100">
            {data.description}
          </p>

          {/* Body (Markdown rendered as HTML) */}

          <div className="max-w-5xl mx-auto w-full px-2 sm:px-4">
            {/* OnThisPage for mobile */}
            <div className="block md:hidden mb-4">
              <OnThisPage htmlContent={htmlContent} />
            </div>
            <div className="flex flex-col md:flex-row">
              <article className="flex-1 prose dark:prose-invert">
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
              </article>
              {/* OnThisPage for desktop */}
              <div className="hidden md:block min-w-[220px] ml-8">
                <OnThisPage htmlContent={htmlContent} />
              </div>
            </div>
          </div>

          {/* <div
            className="prose prose-lg dark:prose-invert max-w-none animate-fade-in delay-300 transition-all duration-300"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          /> */}

          {/* Back to blog list */}
          <div className="mt-8">
            <Link
              href="/blog"
              className="inline-block px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors duration-300"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// To enable dynamic routing, add this at the bottom of the file or in a separate file:
export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "src/app/data");
  const files = fs.readdirSync(dir);
  return files.map((file) => ({
    slug: file.replace(/\.md$/, ""),
  }));
}
