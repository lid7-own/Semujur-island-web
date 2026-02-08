'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Mail, Instagram, Phone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { siteContent, contactInfo } from '@/content/site-content';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { language } = useLanguage();
  const content = siteContent[language].contact;

  const contactMethods = [
    {
      icon: MessageCircle,
      label: content.whatsapp,
      value: contactInfo.whatsapp,
      link: contactInfo.whatsappLink,
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      label: content.email,
      value: contactInfo.email,
      link: `mailto:${contactInfo.email}`,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Instagram,
      label: content.instagram,
      value: '@semujurisland12',
      link: contactInfo.instagram,
      color: 'from-pink-500 to-purple-600'
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
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
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 text-center group"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {method.label}
                </h3>
                <p className="text-gray-300">
                  {method.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center space-x-2 text-gray-400 mb-4">
            <Phone className="w-5 h-5" />
            <span>{contactInfo.whatsapp}</span>
          </div>
          <p className="text-gray-500">{content.footer}</p>
        </motion.div>
      </div>
    </section>
  );
}
