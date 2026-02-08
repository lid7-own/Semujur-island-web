'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { siteContent } from '@/content/site-content';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { language } = useLanguage();
  const content = siteContent[language].about;

  return (
    <section id="about" ref={ref} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-cyan-600 font-medium">{content.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
            {content.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{content.mission}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {content.missionText}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{content.vision}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {content.visionText}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
