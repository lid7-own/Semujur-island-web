'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { siteContent } from '@/content/site-content';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { language } = useLanguage();
  const content = siteContent[language].testimonials;

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-gradient-to-br from-cyan-50 to-blue-50">
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

        <div className="grid md:grid-cols-3 gap-8">
          {content.items.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-lg font-bold text-slate-900">{testimonial.name}</h4>
                <p className="text-cyan-600 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
