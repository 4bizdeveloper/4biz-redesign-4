"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "What IT services does 4Biz International offer?",
    answer: "We provide comprehensive solutions including Microsoft Dynamics 365, CRM, CMS, ERP, mobile app development, web design, SEO, and IT infrastructure."
  },
  {
    question: "How do you ensure website performance and SEO?",
    answer: "We prioritize SEO and responsive web design to ensure your website ranks high and provides an optimized, fast experience across all devices."
  },
  {
    question: "What kind of hosting solutions do you provide?",
    answer: "We offer fast, reliable hosting with high-performance hardware, including SSL certificates, Site Lock, and robust hacking protection."
  },
  {
    question: "Do you provide support for Microsoft and Google Workspace?",
    answer: "Yes, we provide flexible options and expert support for Microsoft 365, Dynamics 365, Azure, and Google Workspace to streamline your business workflows."
  }
];

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} text-blue-400`}>▼</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Faq() {
  return (
    <section className="bg-[#070e25] py-20 px-6 md:px-12 lg:px-24" aria-labelledby="faq-title">
      <div className="max-w-3xl mx-auto">
        <h2 id="faq-title" className="text-4xl font-bold text-white mb-12 text-center">
          Frequently Asked Questions
        </h2>
        {faqData.map((item, index) => (
          <FaqItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}