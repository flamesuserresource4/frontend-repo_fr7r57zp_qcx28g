import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} StudyChat AI. Learn smarter.</p>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#learn-more" className="hover:underline">Learn More</a>
          <a href="#" className="hover:underline">Privacy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
