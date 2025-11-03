import React from 'react';
import { motion } from 'framer-motion';
import { PlusCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section id="get-started" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-black/5 dark:border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-700 dark:from-white dark:via-white dark:to-neutral-200 text-white dark:text-neutral-900">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1000px_400px_at_90%_-10%,rgba(255,255,255,0.25),transparent)]" />
          <div className="p-8 sm:p-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Start a new subject in seconds</h3>
              <p className="mt-2 text-sm text-white/80 dark:text-neutral-700 max-w-xl">
                Upload one or more PDFs, pick your preferred language, and jump into a dedicated chat room for that subject.
              </p>
            </div>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white px-5 py-3 text-sm font-medium shadow-md"
            >
              <PlusCircle className="h-4 w-4" /> New Chat
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
