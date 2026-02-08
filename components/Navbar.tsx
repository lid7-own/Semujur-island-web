'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { siteContent, contactInfo } from '@/content/site-content';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const content = siteContent[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: content.home, id: 'home' },
    { label: content.about, id: 'about' },
    { label: content.services, id: 'services' },
    { label: content.gallery, id: 'gallery' },
    { label: content.testimonials, id: 'testimonials' },
    { label: content.contact, id: 'contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <Image
              src={contactInfo.logo}
              alt="SEMUJUR ISLAND"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-white">
              SEMUJUR <span className="text-cyan-400">ISLAND</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-200 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}

            <div className="flex items-center space-x-2 ml-4">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('id')}
                className={`px-3 py-1 rounded-md transition-all duration-300 ${
                  language === 'id'
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                ID
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <img src="/logo.webp" alt="Logo Semujur Island" className="w-6 h-6 object-contain" />
            
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'en' | 'id')}
              className="bg-slate-800 text-white px-2 py-1 rounded border border-cyan-500"
            >
              <option value="en">EN</option>
              <option value="id">ID</option>
            </select>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-900/98 backdrop-blur-md"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-200 hover:bg-slate-800 hover:text-cyan-400 rounded-lg transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
