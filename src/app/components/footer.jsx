export default function Footer() {
    return (
      <footer className="w-full bg-neutral-100 dark:bg-neutral-900 text-center py-6 mt-12 border-t border-neutral-200 dark:border-neutral-700">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          MindScribe © {new Date().getFullYear()} — Built with passion.
        </p>
      </footer>
    );
  }
  