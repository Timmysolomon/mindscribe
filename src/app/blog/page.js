'use client';

import Link from 'next/link';

const dummyPosts = [
  {
    title: 'Why Writing Daily Changed My Life',
    slug: 'writing-daily',
    description: 'Discover how consistent journaling improved my clarity and confidence.',
    date: 'April 27, 2025',
  },
  {
    title: 'Top 5 Cozy Cafes for Writers',
    slug: 'cozy-cafes',
    description: 'A curated list of spots where creativity flows freely.',
    date: 'April 25, 2025',
  },
  {
    title: '10 Prompts to Overcome Writer’s Block',
    slug: 'writing-prompts',
    description: 'Jumpstart your creativity with these quick and powerful prompts.',
    date: 'April 22, 2025',
  },
];

export default function BlogPage() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6 animate-fade-in">
      <h1 className="text-4xl font-bold mb-10 text-center text-brown-800 dark:text-white">
        The MindScribe Blog
      </h1>
      <div className="grid md:grid-cols-2 gap-10">
        {dummyPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="p-6 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:shadow-md transition cursor-pointer bg-white dark:bg-neutral-900">
              <h2 className="text-2xl font-semibold mb-2 text-brown-800 dark:text-white">{post.title}</h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">{post.date}</p>
              <p className="text-neutral-600 dark:text-neutral-300">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
