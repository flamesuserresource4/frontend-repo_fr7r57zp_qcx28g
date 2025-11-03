import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Book, Languages, Brain } from 'lucide-react';

const features = [
  {
    icon: MessageCircle,
    title: 'Chat with your PDFs instantly',
    desc: 'Drop in your notes and start a conversation that stays grounded in your content.'
  },
  {
    icon: Book,
    title: 'Organize by subjects',
    desc: 'Each upload becomes a dedicated subject space with its own chat history.'
  },
  {
    icon: Languages,
    title: 'Talk in your language (transliteration)',
    desc: 'Get responses in Tanglish for your chosen language, or keep it in English.'
  },
  {
    icon: Brain,
    title: 'Smart contextual answers',
    desc: 'Powered by Gemini with vector search for accurate, source-linked responses.'
  }
];

const FeatureCard = ({ icon: Icon, title, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="group rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/50 backdrop-blur p-6 shadow-sm hover:shadow-lg transition"
  >
    <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 text-white grid place-items-center shadow-md mb-4">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="text-lg font-semibold mb-1.5">{title}</h3>
    <p className="text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
  </motion.div>
);

const Features = () => {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-center"
        >
          Everything you need to learn, faster
        </motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.title} index={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
