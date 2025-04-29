'use client';

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 text-center animate-fade-in">
      <h1 className="text-4xl font-bold mb-6 text-brown-800 dark:text-white">About MindScribe</h1>
      <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
        MindScribe is a cozy digital space for creatives, writers, and thinkers. Whether you're documenting
        your life journey, expressing personal thoughts, or sharing knowledge with the world — this blog
        platform is here to support your voice.
        <br /><br />
        Built with love using Next.js and Tailwind CSS, MindScribe is designed to feel warm, calming,
        and distraction-free — just like your favorite writing nook.
      </p>
    </section>
  );
}
