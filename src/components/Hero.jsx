import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil to improve text contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 dark:from-neutral-950/80 dark:via-neutral-950/50 dark:to-neutral-950/95" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 flex flex-col items-start">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-600 dark:from-white dark:via-white/90 dark:to-white/70"
          >
            Chat. Learn. Master your subjects.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl"
          >
            Upload your notes. Let AI teach you. StudyChat AI blends modern chat with your PDFs for contextual answers in your language.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#get-started"
              className="inline-flex items-center rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-3 text-sm font-medium shadow-lg shadow-neutral-900/10 hover:shadow-xl active:scale-[.99] transition"
            >
              Get Started
            </a>
            <a
              href="#learn-more"
              className="inline-flex items-center rounded-xl border border-neutral-900/10 dark:border-white/20 bg-white/60 dark:bg-neutral-900/40 backdrop-blur px-5 py-3 text-sm font-medium hover:bg-white/80 dark:hover:bg-neutral-800/60 transition"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-5 flex items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="w-full rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-4 shadow-xl"
          >
            <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-fuchsia-500/20 via-indigo-500/20 to-amber-400/20 grid place-items-center">
              <span className="text-sm text-neutral-600 dark:text-neutral-300">NotebookLM-inspired, premium experience</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
