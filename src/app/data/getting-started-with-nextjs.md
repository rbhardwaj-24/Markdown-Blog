---
title: "Getting Started with Next.js"
description: "Welcome to this beginner-friendly Next.js tutorial! This guide will help you get started with Next.js, a popular React framework for building fast, modern web applications."
author: "Jane Doe"
date: "2024-03-10"
image: "https://miro.medium.com/v2/resize:fit:879/1*TcSXvQBMQx5mje0iGznduA.png"
slug: "getting-started-with-nextjs"
---

## Table of Contents

1. [What is Next.js?](#what-is-nextjs)
2. [Why Use Next.js?](#why-use-nextjs)
3. [Getting Started](#getting-started)
4. [Pages and Routing](#pages-and-routing)
5. [Static and Server-side Rendering](#static-and-server-side-rendering)
6. [API Routes](#api-routes)
7. [Styling in Next.js](#styling-in-nextjs)
8. [Deploying Your App](#deploying-your-app)
9. [Conclusion](#conclusion)

---

## What is Next.js?

Next.js is a React framework that enables functionality such as server-side rendering and static site generation out of the box. It is maintained by Vercel.

## Why Use Next.js?

- **Performance**: Automatic code splitting and optimization
- **SEO**: Server-side rendering improves search engine indexing
- **Developer Experience**: Fast refresh, built-in routing, and more
- **Fullstack Capabilities**: API routes support

---

## Getting Started

### 1. Installation

Make sure you have Node.js installed, then run:

```bash

npx create-next-app@latest my-next-app
cd my-next-app
npm run dev

```

Your app will be running on [http://localhost:3000](http://localhost:3000).

---

## Pages and Routing

Next.js uses a file-based routing system. Create a file under the `pages/` directory:

```js

// pages/about.js

export default function About() {
  return <h1>About Page</h1>;
}

```

Visit `/about` in your browser.

---

## Static and Server-side Rendering

Next.js supports multiple rendering methods:

- **Static Generation (SSG)**: `getStaticProps`
- **Server-side Rendering (SSR)**: `getServerSideProps`

Example:

```js

// pages/index.js

export async function getStaticProps() {
  return {
    props: { message: "Hello from SSG" },
  };
}

```

---

## API Routes

You can build backend functions using API routes:

```js

// pages/api/hello.js

export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from API' });
}

```

Access it via `/api/hello`.

---

## Styling in Next.js

You can use:

- **CSS Modules**: `Home.module.css`
- **Styled Components**
- **Tailwind CSS**

Example with CSS Module:

```js

import styles from './Home.module.css';

export default function Home() {
  return <h1 className={styles.title}>Styled Home</h1>;
}

```

---

## Deploying Your App

Vercel is the official platform for deploying Next.js apps. You can deploy directly from GitHub:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com/)
3. Import your project and deploy

---

## Conclusion

Next.js offers everything you need to build fast, modern web applications with minimal configuration. Continue exploring its features through the [official documentation](https://nextjs.org/docs).

Happy coding! 🚀

