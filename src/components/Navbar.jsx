import React from 'react';
import { LogIn } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 shadow-inner" />
          <span className="font-semibold text-lg tracking-tight">StudyChat AI</span>
        </div>
        <nav className="flex items-center gap-3">
          <a href="#features" className="hidden sm:inline-flex text-sm px-3 py-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition">Features</a>
          <a href="#learn-more" className="hidden sm:inline-flex text-sm px-3 py-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition">Learn More</a>
          <button className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-3 sm:px-4 py-2 text-sm font-medium shadow hover:shadow-md active:scale-[.99] transition">
            <LogIn className="h-4 w-4" />
            <span>Get Started</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
