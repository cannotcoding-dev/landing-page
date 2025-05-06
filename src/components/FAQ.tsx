"use client";

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

const faqs = [
  {
    q: '코딩을 전혀 몰라도 정말 가능한가요?',
    a: '네! 코드를 작성하지 않고도 결과물을 만들어내는 방법을 배우는 것이 핵심입니다.'
  },
  {
    q: '사용하는 AI 도구는 뭔가요?',
    a: '챗GPT, Cursor, Notion, Webflow, Vercel 등을 사용합니다. 설정 및 사용법도 함께 알려드려요.'
  },
  {
    q: '제 웹사이트를 정말 만들 수 있나요?',
    a: '네! 본인의 아이디어로 웹페이지를 완성하게 됩니다. HTML/CSS는 AI가 도와줘요.'
  },
  {
    q: '수업이 끝나도 활용할 수 있을까요?',
    a: '모든 실습 자료와 프롬프트 템플릿, 영상이 제공되어, 이후에도 계속 활용 가능합니다.'
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto py-24 px-4"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center tracking-tight">자주 묻는 질문</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-[#181f29] rounded-2xl p-6 shadow-xl">
            <button
              className="w-full text-left font-semibold text-lg flex justify-between items-center focus:outline-none"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {faq.q}
              <span className="ml-2">{open === i ? '▲' : '▼'}</span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 text-base text-[#3be8b0] leading-relaxed">{faq.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default FAQ; 