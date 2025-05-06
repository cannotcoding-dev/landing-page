"use client";
import { motion } from 'framer-motion';
import React from 'react';

const features = [
  { emoji: '💡', text: '코드 1줄 몰라도 OK' },
  { emoji: '🤖', text: 'GPT, Cursor 등 AI 도구만으로 개발 실습' },
  { emoji: '✍️', text: '“개발자처럼 말하기” 훈련 → AI 활용 기획 역량 강화' },
  { emoji: '🎁', text: '나만의 웹사이트 결과물 완성' },
  { emoji: '🧩', text: '초보자도 쉽게 따라할 수 있는 구조화된 템플릿 제공' },
  { emoji: '🎥', text: 'Zoom 실시간 수업 + 녹화본 제공' },
];

const cardVariants = {
  rest: { scale: 1, y: 0, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)' },
  hover: { scale: 1.04, y: -8, boxShadow: '0 8px 32px 0 rgba(59,232,176,0.15)' },
};

const Features = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="max-w-5xl mx-auto py-24 px-4"
  >
    <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center tracking-tight">우리 수업의 특징</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((f, i) => (
        <motion.div
          key={i}
          className="bg-[#181f29] rounded-2xl p-8 flex flex-col items-center shadow-xl min-h-[180px] cursor-pointer"
          variants={cardVariants}
          initial="rest"
          whileHover="hover"
          animate="rest"
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <span className="text-4xl mb-3">{f.emoji}</span>
          <span className="text-lg md:text-xl font-medium text-center leading-relaxed">{f.text}</span>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Features; 