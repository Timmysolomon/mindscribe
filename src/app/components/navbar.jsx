'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full bg-[#fffaf5] dark:bg-[#1a1a1a] shadow-md sticky top-0 z-50">
      <nav
        className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        <Link href="/" className="text-2xl font-bold text-[#5e4632] dark:text-white tracking-tight">
          MindScribe
        </Link>
        <div className="flex gap-6 text-sm font-medium text-[#4b3a2f] dark:text-neutral-300">
          <Link href="/" className="hover:text-[#a47148] transition-colors">Home</Link>
          <Link href="/blog" className="hover:text-[#a47148] transition-colors">Blog</Link>
          <Link href="/about" className="hover:text-[#a47148] transition-colors">About</Link>
          <Link href="/contact" className="hover:text-[#a47148] transition-colors">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
