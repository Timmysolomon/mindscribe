'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-[#f4e4cd] text-neutral-900 dark:bg-[#0a0a0a] animate-fade-in">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-brown-800 dark:text-white">
        Welcome to MindScribe
      </h1>
      <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl mb-8">
        A cozy and professional space for deep thoughts, personal stories, and creative ideas. Write with purpose, share with style.
      </p>
      <Link href="/blog">
        <button className="bg-brown-700 text-white px-6 py-3 rounded-full hover:bg-brown-800 transition">
          Read the Blog
        </button>
      </Link>

      <footer className="mt-20 text-sm text-neutral-500 dark:text-neutral-400">
        © 2025 MindScribe. All rights reserved.
      </footer>
    </section>
  );
}
