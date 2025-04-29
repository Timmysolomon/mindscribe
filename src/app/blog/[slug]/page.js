'use client';

import { notFound } from 'next/navigation';

const blogPosts = {
  'writing-daily': {
    title: 'Why Writing Daily Changed My Life',
    date: 'April 27, 2025',
    content: `Writing daily brought mental clarity, improved my writing skills, and boosted my confidence. It became a space to reflect, brainstorm, and track growth.`,
  },
  'cozy-cafes': {
    title: 'Top 5 Cozy Cafes for Writers',
    date: 'April 25, 2025',
    content: `Here’s a list of warm, ambient cafes perfect for writers to unplug and create. From vintage interiors to great coffee, they’ve got it all.`,
  },
  'writing-prompts': {
    title: '10 Prompts to Overcome Writer’s Block',
    date: 'April 22, 2025',
    content: `Try these 10 easy but powerful writing prompts when you’re stuck. They’re designed to unlock creativity and get your pen moving.`,
  },
};

export default function BlogPost({ params }) {
  const post = blogPosts[params.slug];

  if (!post) return notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-16 animate-fade-in">
      <h1 className="text-4xl font-bold mb-4 text-brown-800 dark:text-white">{post.title}</h1>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">{post.date}</p>
      <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">{post.content}</p>
    </article>
  );
}
