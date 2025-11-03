import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="learn-more" className="py-10">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-xl font-semibold">A modern study companion</h3>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">
              Built to feel like a blend of NotebookLM and ChatGPT — beautiful, fluid, and helpful. This landing experience showcases the style. Authentication, uploads, and chat will wire up to your backend next.
            </p>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
