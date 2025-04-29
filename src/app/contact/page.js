'use client';

export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-16 animate-fade-in">
      <h1 className="text-4xl font-bold mb-6 text-center text-brown-800 dark:text-white">Contact</h1>
      <p className="text-center text-neutral-700 dark:text-neutral-300 mb-10">
        Questions, feedback, or just want to connect? Reach out below — I’d love to hear from you.
      </p>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full p-3 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
        />
        <button
          type="submit"
          className="bg-brown-700 text-white px-6 py-3 rounded-md hover:bg-brown-800 transition block mx-auto"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
