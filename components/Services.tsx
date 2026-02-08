'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Fish, Waves, Droplet } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { siteContent } from '@/content/site-content';

const iconMap = {
  fish: Fish,
  waves: Waves,
  droplet: Droplet
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { language } = useLanguage();
  const content = siteContent[language].services;

  return (
    <section id="services" ref={ref} className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-cyan-400 font-medium">{content.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.items.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-center">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
